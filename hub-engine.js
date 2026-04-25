// hub-engine.js - Bradley Gold Standard
const BradleyHub = {
    state: {
        tier: localStorage.getItem('bradley_tier'),
        seenIds: JSON.parse(localStorage.getItem('bradley_seen_ids') || '[]'),
        masterVault: [],
        activeMonths: ['01', '02', '03', '04', '05'],
        currentTopic: null,
        isTeacherMode: false
    },

    async init(mode) {
        this.state.isTeacherMode = (mode === 'audit');
        if (this.state.isTeacherMode) {
            const picker = document.getElementById('month-picker');
            await this.loadMonthData(picker ? picker.value : '04');
            this.renderAuditList(); 
        } else {
            if (!this.state.tier) {
                this.renderGate();
            } else {
                await this.loadAllActiveMonths();
                this.renderMenu();
            }
        }
    },

    // --- DATA HANDLING ---
    async loadAllActiveMonths() {
        this.state.masterVault = [];
        for (const mm of this.state.activeMonths) {
            const path = `problems/${this.state.tier}/2026/${mm}.js`;
            await this.fetchFile(path);
        }
    },

    async loadMonthData(mm) {
        this.state.masterVault = [];
        const path = `problems/${this.state.tier}/2026/${mm}.js`;
        await this.fetchFile(path);
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

    // --- VIEW 1: THE SYLLABUS GATE ---
    renderGate() {
        document.getElementById('hub-stage').innerHTML = `
            <div class="info-panel" style="background: white; border: 1px solid #ddd;">
                <h1 style="font-size: 2.2rem;">The Revision Hub</h1>
                <p>Welcome. Please select your examination path to begin your personalized study session.</p>
                <div class="btn-group" style="margin-top: 30px;">
                    <button class="btn btn-large" onclick="BradleyHub.setTier('gcse')">GCSE Higher Tier</button>
                    <button class="btn btn-large btn-igcse" onclick="BradleyHub.setTier('igcse')">IGCSE Extended (0580)</button>
                </div>
            </div>`;
    },

    setTier(t) {
        this.state.tier = t;
        localStorage.setItem('bradley_tier', t);
        this.init('student');
    },

    // --- VIEW 2: THE REVISION MENU ---
    renderMenu() {
        const solvedCount = this.state.seenIds.length;
        document.getElementById('hub-stage').innerHTML = `
            <div class="info-panel" style="background: white; border: 1px solid #ddd;">
                <div class="hub-stats" style="background: var(--brand-green-light); padding: 15px; border-radius: 8px; margin-bottom: 20px; font-weight: bold; color: var(--brand-purple-dark);">
                    You have mastered ${solvedCount} problems so far.
                </div>
                <h2>Select a Revision Area</h2>
                <div class="menu-grid">
                    ${['Algebra','Number','Geometry & Measures','Ratio, Proportion & Rates of Change','Statistics','Probability']
                        .map(t => `<button class="menu-btn" onclick="BradleyHub.serveArena('${t}')">${t === 'Ratio, Proportion & Rates of Change' ? 'Ratio & Proportion' : t}</button>`).join('')}
                    <button class="menu-btn random" onclick="BradleyHub.serveArena('all')">★ Random Mix ★</button>
                </div>
                <p style="margin-top:30px;"><a href="#" onclick="localStorage.clear(); location.reload();" style="color: var(--text-muted); font-size: 0.85rem;">Change Syllabus Preference</a></p>
            </div>`;
    },

    // --- VIEW 3: THE ARENA (ONE QUESTION) ---
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
            document.getElementById('hub-stage').innerHTML = `
                <div class="info-panel">
                    <h2>Area Mastered!</h2>
                    <p>You have successfully viewed every archived problem in the <strong>${topic}</strong> section.</p>
                    <button class="btn btn-purple" onclick="BradleyHub.renderMenu()">Return to Menu</button>
                </div>`;
            return;
        }

        const prob = pool[Math.floor(Math.random() * pool.length)];
        const stage = document.getElementById('hub-stage');
        stage.innerHTML = '';
        stage.appendChild(this.createProblemCard(prob, false));
        if (window.MathJax) MathJax.typesetPromise();
    },

    // --- THE GOLD STANDARD CARD GENERATOR ---
    createProblemCard(prob, isAudit) {
        const card = document.createElement('div');
        card.className = 'daily-widget'; // Inheriting your main CSS style
        if (isAudit) card.style.borderLeft = "8px solid #d9534f";

        let imgHTML = '';
        if (prob.img === "true") {
            const d = new Date(prob.date);
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const t = this.state.tier === 'gcse' ? 'g' : 'i';
            imgHTML = `<img src="images/${mm}/${t}_${dd}.png" class="question-img" style="margin: 20px auto;">`;
        }

        card.innerHTML = `
            <span class="widget-header">${prob.date.toUpperCase()} | ${prob.topic} | Grade ${prob.difficulty}</span>
            <div class="question-box">${prob.q}</div>
            ${imgHTML}
            
            <div id="action-area-${prob.id}">
                <button class="reveal-btn" onclick="BradleyHub.revealSolution('${prob.id}', ${isAudit})">
                    ${isAudit ? 'Show Answer' : 'I have solved it. Show Model Answer.'}
                </button>
            </div>

            <div id="sol-${prob.id}" class="step-container" style="display:none;">
                <h3 style="text-align:left; color: var(--brand-purple);">Model Solution</h3>
                ${prob.steps.map(s => `<div class="step" style="display:block;"><span class="step-text">Step</span>${s}</div>`).join('')}
                
                <div class="bradley-insight-box insight-caution">
                    <span class="insight-title">The Head Teacher's Eye</span>
                    ${prob.bradley_insight.content}
                </div>

                ${!isAudit ? `
                    <div style="display:flex; gap:10px; margin-top:20px;">
                        <button class="btn btn-purple" style="flex:1;" onclick="BradleyHub.serveArena('${this.state.currentTopic}')">Next Question</button>
                        <button class="btn" style="flex:1; background: var(--text-muted);" onclick="BradleyHub.renderMenu()">Change Area</button>
                    </div>
                ` : ''}
                
                <a href="${prob.payhip_link}" target="_blank" class="btn-buy" style="display:block; text-align:center; margin-top:20px; background: var(--brand-green);">
                    ${prob.button_text}
                </a>
            </div>`;
        return card;
    },

    revealSolution(id, isAudit) {
        document.getElementById(`sol-${id}`).style.display = 'block';
        document.getElementById(`action-area-${id}`).style.display = 'none';
        
        if (!isAudit && !this.state.seenIds.includes(id)) {
            this.state.seenIds.push(id);
            localStorage.setItem('bradley_seen_ids', JSON.stringify(this.state.seenIds));
        }
        if (window.MathJax) MathJax.typesetPromise();
    },

    // --- SHARED UTILITIES ---
    loadSpecificMonth(mm) { this.init('audit'); },
    switchTier(t) { 
        this.state.tier = t; 
        localStorage.setItem('bradley_tier', t); 
        this.init(this.state.isTeacherMode ? 'audit' : 'student'); 
    }
};