const BradleyHub = {
    state: {
        tier: localStorage.getItem('bradley_tier'),
        seenIds: JSON.parse(localStorage.getItem('bradley_seen_ids') || '[]'),
        masterVault: [],
        activeMonths: ['01', '02', '03', '04', '05'],
        currentTopic: null,
        isTeacherMode: false
    },

    // INITIALIZATION
    async init(mode) {
        this.state.isTeacherMode = (mode === 'audit');
        
        if (this.state.isTeacherMode) {
            // TEACHER AUDIT PATHWAY: Load one month, show as a list
            const picker = document.getElementById('month-picker');
            await this.loadMonthData(picker ? picker.value : '04');
            this.renderAuditList(); 
        } else {
            // STUDENT HUB PATHWAY: Interactive Coach logic
            if (!this.state.tier) {
                this.renderGate();
            } else {
                await this.loadAllActiveMonths();
                this.renderMenu();
            }
        }
    },

    // DATA LOADING
    async loadMonthData(mm) {
        this.state.masterVault = [];
        const path = `problems/${this.state.tier}/2026/${mm}.js`;
        await this.fetchFile(path);
    },

    async loadAllActiveMonths() {
        this.state.masterVault = [];
        for (const mm of this.state.activeMonths) {
            const path = `problems/${this.state.tier}/2026/${mm}.js`;
            await this.fetchFile(path);
        }
    },

    async fetchFile(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) return;
            const text = await response.text();
            const arrayMatch = text.match(/\[[\s\S]*\]/);
            if (arrayMatch) {
                const monthData = eval(arrayMatch[0]);
                this.state.masterVault = [...this.state.masterVault, ...monthData];
            }
        } catch (e) { console.error("Load error:", path); }
    },

    // PATHWAY A: THE TEACHER AUDIT (Linear List View)
    renderAuditList() {
        const container = document.getElementById('hub-container');
        container.innerHTML = '';
        
        // In Audit mode, we show everything in the vault in a list
        this.state.masterVault.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.state.masterVault.forEach(prob => {
            container.appendChild(this.createProblemCard(prob, true));
        });
        if (window.MathJax) MathJax.typesetPromise();
    },

    // PATHWAY B: THE STUDENT HUB (Coach View)
    renderGate() {
        document.getElementById('hub-stage').innerHTML = `
            <div class="hub-card text-center">
                <h1>Welcome to the Revision Hub</h1>
                <p>Select your examination path to begin:</p>
                <button class="toggle-btn" onclick="BradleyHub.setTier('gcse')">GCSE Higher</button>
                <button class="toggle-btn" onclick="BradleyHub.setTier('igcse')">IGCSE Extended</button>
            </div>`;
    },

    renderMenu() {
        const solvedCount = this.state.seenIds.length;
        document.getElementById('hub-stage').innerHTML = `
            <div class="hub-card">
                <div class="hub-stats">You have mastered <strong>${solvedCount}</strong> problems.</div>
                <h2>Select a Revision Area</h2>
                <div class="menu-grid">
                    ${['Algebra','Number','Geometry & Measures','Ratio, Proportion & Rates of Change','Statistics','Probability']
                        .map(t => `<button class="menu-btn" onclick="BradleyHub.serveArena('${t}')">${t}</button>`).join('')}
                    <button class="menu-btn random" onclick="BradleyHub.serveArena('all')">Random Mix</button>
                </div>
                <p style="text-align:center; margin-top:20px;">
                    <a href="#" onclick="localStorage.clear(); location.reload();" style="color:#666; font-size:0.8rem;">Change Syllabus</a>
                </p>
            </div>`;
    },

    serveArena(topic) {
        this.state.currentTopic = topic;
        const today = new Date();
        today.setHours(0,0,0,0);

        let pool = this.state.masterVault.filter(p => {
            const topicMatch = (topic === 'all' || p.major_area === topic);
            const unseen = !this.state.seenIds.includes(p.id);
            return topicMatch && unseen && (new Date(p.date) < today);
        });

        if (pool.length === 0) {
            document.getElementById('hub-stage').innerHTML = `<div class="hub-card text-center"><h2>Topic Mastered!</h2><button class="toggle-btn" onclick="BradleyHub.renderMenu()">Return to Menu</button></div>`;
            return;
        }

        const prob = pool[Math.floor(Math.random() * pool.length)];
        const stage = document.getElementById('hub-stage');
        stage.innerHTML = '';
        stage.appendChild(this.createProblemCard(prob, false));
        if (window.MathJax) MathJax.typesetPromise();
    },

    // SHARED CARD GENERATOR
    createProblemCard(prob, isAudit) {
        const card = document.createElement('div');
        card.className = 'problem-card';
        if (this.state.isTeacherMode) card.style.borderLeft = "5px solid #d9534f";

        let imgHTML = '';
        if (prob.img === "true") {
            const d = new Date(prob.date);
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const t = this.state.tier === 'gcse' ? 'g' : 'i';
            imgHTML = `<img src="images/${mm}/${t}_${dd}.png" class="arena-img" style="max-width:100%; display:block; margin: 20px auto; border:1px solid #eee;">`;
        }

        card.innerHTML = `
            <div class="card-header" style="display:flex; justify-content:space-between; font-size:0.8rem; color:#666; border-bottom:1px solid #eee; padding-bottom:5px; margin-bottom:15px;">
                <span><strong>${prob.date.toUpperCase()}</strong></span>
                <span>${prob.topic} | Grade ${prob.difficulty}</span>
            </div>
            <div class="card-q" style="font-size:1.1rem; margin-bottom:20px;">${prob.q}</div>
            ${imgHTML}
            <button class="toggle-btn" id="reveal-${prob.id}" onclick="BradleyHub.revealSolution('${prob.id}', ${isAudit})">${isAudit ? 'Show Answer' : 'I have solved it. Show Model Answer.'}</button>
            <div id="sol-${prob.id}" style="display:none; margin-top:20px;">
                <hr>
                ${prob.steps.map(s => `<p style="font-style:italic; margin-bottom:10px;">${s}</p>`).join('')}
                <div class="insight-box" style="background:#fff9c4; border-left:4px solid #fbc02d; padding:15px; margin:20px 0;">
                    <strong>The Head Teacher's Eye:</strong> ${prob.bradley_insight.content}
                </div>
                ${!isAudit ? `
                    <div class="arena-footer" style="display:flex; gap:10px; justify-content:center;">
                        <button class="toggle-btn" style="background:#27ae60" onclick="BradleyHub.serveArena('${this.state.currentTopic}')">Next Question</button>
                        <button class="toggle-btn" style="background:#95a5a6" onclick="BradleyHub.renderMenu()">Change Area</button>
                    </div>
                ` : ''}
                <a href="${prob.payhip_link}" target="_blank" style="display:block; text-align:center; background:#2c3e50; color:white; text-decoration:none; padding:10px; border-radius:4px; margin-top:10px;">${prob.button_text}</a>
            </div>`;
        return card;
    },

    revealSolution(id, isAudit) {
        document.getElementById(`sol-${id}`).style.display = 'block';
        document.getElementById(`reveal-${id}`).style.display = 'none';
        if (!isAudit && !this.state.seenIds.includes(id)) {
            this.state.seenIds.push(id);
            localStorage.setItem('bradley_seen_ids', JSON.stringify(this.state.seenIds));
        }
        if (window.MathJax) MathJax.typesetPromise();
    },

    // TEACHER TOOLS
    loadSpecificMonth(mm) { this.init('audit'); }, // Triggered by month picker
    setTier(t) { this.state.tier = t; localStorage.setItem('bradley_tier', t); this.init(this.state.isTeacherMode ? 'audit' : 'student'); }
};