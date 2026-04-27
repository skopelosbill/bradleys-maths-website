// hub-engine.js - Bradley Gold Standard Unified Engine (Monday Realignment)
const BradleyHub = {
    state: {
        tier: localStorage.getItem('bradley_tier') || 'gcse',
        seenIds: JSON.parse(localStorage.getItem('bradley_seen_ids') || '[]'),
        masterVault: [],
        activeMonths: ['01', '02', '03', '04', '05'],
        currentGroup: null, // We now track the "Group" (Booklet) instead of just topic
        isTeacherMode: false
    },

    // DEFINING THE REVISION GROUPS (Funnel Logic)
    getMenuMapping() {
        if (this.state.tier === 'gcse') {
            return [
                { id: "number", label: "Number", areas: ["Number", "Ratio, Proportion & Rates of Change"], link: "https://payhip.com/b/IVWzJ", btnText: "Master GCSE Number: Download the Pack" },
                { id: "algebra", label: "Algebra", areas: ["Algebra"], link: "https://payhip.com/b/wRN86", btnText: "Master GCSE Algebra: Download the Pack" },
                { id: "geometry", label: "Geometry", areas: ["Geometry & Measures", "Coordinate Geometry & Geometry"], link: "https://payhip.com/b/XAGch", btnText: "Master GCSE Geometry: Download the Pack" },
                { id: "stats", label: "Stats & Prob", areas: ["Statistics", "Probability"], link: "https://payhip.com/b/RVbqM", btnText: "Master GCSE Stats & Prob: Download the Pack" }
            ];
        } else {
            // IGCSE Extended 0580 Mapping
            return [
                { id: "num", label: "Number & Ratio", areas: ["Number", "Ratio, Proportion & Rates of Change"], link: "https://payhip.com/b/XEV2Z", btnText: "Master IGCSE Number: Download the Pack" },
                { id: "alg", label: "Algebra", areas: ["Algebra", "Differentiation"], link: "https://payhip.com/b/mg5YS", btnText: "Master IGCSE Algebra: Download the Pack" },
                { id: "geom", label: "Coordinate Geometry & Geometry", areas: ["Geometry & Measures", "Coordinate Geometry & Geometry", "Angles", "Circle Theorems", "Transformations"], link: "https://payhip.com/b/L6skH", btnText: "Master IGCSE Geometry: Download the Pack" },
                { id: "trig", label: "Mensuration & Trigonometry", areas: ["Mensuration", "Trigonometry", "3D Shapes", "SOHCAHTOA", "Sine rule", "Cosine rule"], link: "https://payhip.com/b/KjXoP", btnText: "Master IGCSE Mensuration & Trig: Download the Pack" },
                { id: "vec", label: "Vectors, Stats & Probability", areas: ["Vectors", "Statistics", "Probability"], link: "https://payhip.com/b/rsVCz", btnText: "Master IGCSE Vectors & Stats: Download the Pack" }
            ];
        }
    },

    async init(mode, tier) {
        this.state.isTeacherMode = (mode === 'audit');
        this.state.tier = tier || this.state.tier;
        localStorage.setItem('bradley_tier', this.state.tier);

        if (this.state.isTeacherMode) {
            const picker = document.getElementById('month-picker');
            await this.loadMonthData(picker ? picker.value : '04');
            this.renderAuditList(); 
        } else {
            await this.loadAllActiveMonths();
            this.renderMenu();
        }
    },

    // --- DATA LOADING ---
    async loadAllActiveMonths() {
        this.state.masterVault = [];
        for (const mm of this.state.activeMonths) {
            await this.fetchFile(`problems/${this.state.tier}/2026/${mm}.js`);
        }
    },

    async loadMonthData(mm) {
        this.state.masterVault = [];
        await this.fetchFile(`problems/${this.state.tier}/2026/${mm}.js`);
    },

    async fetchFile(path) {
        try {
            const response = await fetch(path + '?v=' + new Date().getTime());
            if (!response.ok) return;
            const text = await response.text();
            const arrayMatch = text.match(/\[[\s\S]*\]/);
            if (arrayMatch) {
                const monthData = eval(arrayMatch[0]);
                this.state.masterVault = [...this.state.masterVault, ...monthData];
            }
        } catch (e) { console.error("Filing error:", path); }
    },

    // --- VIEW B: THE STUDENT HUB (Coach Flow) ---
    renderMenu() {
        const mapping = this.getMenuMapping();
        const solvedCount = this.state.seenIds.filter(id => (this.state.tier === 'gcse' ? id.startsWith('002') : id.startsWith('003'))).length;

        document.getElementById('hub-stage').innerHTML = `
            <div class="info-panel" style="background: white; border: 1px solid #ddd; text-align: center;">
                <div class="hub-stats" style="background: var(--brand-green-light); padding: 15px; border-radius: 8px; margin-bottom: 20px; font-weight: bold; color: var(--brand-purple-dark);">
                    Head Teacher's Record: You have mastered ${solvedCount} ${this.state.tier.toUpperCase()} problems.
                </div>
                <h3>Choose a Revision Area</h3>
                <div class="menu-grid">
                    ${mapping.map(m => `<button class="menu-btn" onclick="BradleyHub.serveArena('${m.id}')">${m.label}</button>`).join('')}
                    <button class="menu-btn random" onclick="BradleyHub.serveArena('all')">★ Random Mix ★</button>
                </div>
                <p style="margin-top:30px;"><a href="index.html" style="color: var(--text-muted); font-size: 0.85rem;">Return to Homepage</a></p>
            </div>`;
    },

    serveArena(groupId) {
        this.state.currentGroup = groupId;
        const today = new Date();
        today.setHours(0,0,0,0);
        
        const mapping = this.getMenuMapping();
        const group = mapping.find(m => m.id === groupId);

        let pool = this.state.masterVault.filter(p => {
            const unseen = !this.state.seenIds.includes(p.id);
            const isPast = new Date(p.date) < today;
            if (groupId === 'all') return unseen && isPast;
            
            // Check if the problem's major_area OR topic is in the booklet group's areas
            const areaMatch = group.areas.includes(p.major_area) || group.areas.includes(p.topic);
            return areaMatch && unseen && isPast;
        });

        if (pool.length === 0) {
            document.getElementById('hub-stage').innerHTML = `<div class="info-panel"><h2>Area Mastered!</h2><button class="btn btn-purple" onclick="BradleyHub.renderMenu()">Return to Menu</button></div>`;
            return;
        }

        const prob = pool[Math.floor(Math.random() * pool.length)];
        // FORCE THE CORRECT LINK BASED ON THE CURRENT GROUP
        const finalLink = groupId === 'all' ? prob.payhip_link : group.link;
        const finalText = groupId === 'all' ? prob.button_text : group.btnText;

        const stage = document.getElementById('hub-stage');
        stage.innerHTML = '';
        stage.appendChild(this.createProblemCard(prob, false, finalLink, finalText));
        if (window.MathJax) MathJax.typesetPromise();
    },

    // --- THE UNIVERSAL CARD GENERATOR ---
    createProblemCard(prob, isAudit, forcedLink, forcedText) {
        const card = document.createElement('div');
        card.className = 'daily-widget';
        if (isAudit) card.style.borderLeft = "8px solid #d9534f";

        let imgHTML = '';
        if (prob.img === "true") {
            const d = new Date(prob.date);
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const t = this.state.tier === 'gcse' ? 'g' : 'i';
            imgHTML = `<img src="images/${mm}/${t}_${dd}.png" class="question-img" style="margin: 20px auto; display: block;">`;
        }

        const link = forcedLink || prob.payhip_link;
        const bText = forcedText || prob.button_text;

        card.innerHTML = `
            <span class="widget-header">${prob.date.toUpperCase()} | ${prob.topic} | Grade ${prob.difficulty}</span>
            <div class="question-box">${prob.q}</div>
            ${imgHTML}
            <div id="action-area-${prob.id}"><button class="reveal-btn" onclick="BradleyHub.revealSolution('${prob.id}', ${isAudit})">Show Model Answer</button></div>
            <div id="sol-${prob.id}" class="step-container" style="display:none;">
                <h3 style="text-align:left; color: var(--brand-purple);">Model Solution</h3>
                ${prob.steps.map(s => `<div class="step" style="display:block;"><span class="step-text">Step</span>${s}</div>`).join('')}
                <div class="bradley-insight-box insight-caution">
                    <span class="insight-title">The Head Teacher's Eye</span>
                    ${prob.bradley_insight.content}
                </div>
                ${!isAudit ? `<div style="display:flex; gap:10px; margin-top:20px;"><button class="btn btn-purple" style="flex:1;" onclick="BradleyHub.serveArena('${this.state.currentGroup}')">Next Question</button><button class="btn" style="flex:1; background: var(--text-muted); color: white !important;" onclick="BradleyHub.renderMenu()">Change Area</button></div>` : ''}
                <a href="${link}" target="_blank" class="btn-buy" style="display:block; text-align:center; margin-top:20px; background: var(--brand-green); color: white !important;">${bText}</a>
            </div>`;
        return card;
    },

    revealSolution(id, isAudit) {
        const sol = document.getElementById(`sol-${id}`);
        const act = document.getElementById(`action-area-${id}`);
        if (sol) sol.style.display = 'block';
        if (act) act.style.display = 'none';
        if (!isAudit && !this.state.seenIds.includes(id)) {
            this.state.seenIds.push(id);
            localStorage.setItem('bradley_seen_ids', JSON.stringify(this.state.seenIds));
        }
        if (window.MathJax) MathJax.typesetPromise();
    },

    renderAuditList() {
        const container = document.getElementById('hub-container');
        if (!container) return;
        container.innerHTML = '';
        this.state.masterVault.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.state.masterVault.forEach(prob => container.appendChild(this.createProblemCard(prob, true)));
        if (window.MathJax) MathJax.typesetPromise();
    },

    loadSpecificMonth(mm) { this.init('audit', this.state.tier); }
};