// hub-engine.js - The Bradley "Gold Standard" Unified Engine
const BradleyHub = {
    state: {
        tier: localStorage.getItem('bradley_tier') || 'gcse',
        seenIds: JSON.parse(localStorage.getItem('bradley_seen_ids') || '[]'),
        masterVault: [],
        activeMonths: ['01', '02', '03', '04', '05'],
        currentTopic: null,
        isTeacherMode: false
    },

    async init(mode, tier) {
        this.state.isTeacherMode = (mode === 'audit');
        // If a tier is passed (from the Hub pages), use it. Otherwise, use stored preference.
        this.state.tier = tier || this.state.tier;
        localStorage.setItem('bradley_tier', this.state.tier);

        if (this.state.isTeacherMode) {
            // TEACHER AUDIT: Load only the month selected in the dropdown
            const picker = document.getElementById('month-picker');
            const selectedMonth = picker ? picker.value : '04';
            await this.loadMonthData(selectedMonth);
            this.renderAuditList(); 
        } else {
            // STUDENT HUB: Load all months and show the Menu
            await this.loadAllActiveMonths();
            this.renderMenu();
        }
    },

    // --- DATA LOADING ---
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
                // Evaluates the string array into a real JS object
                let monthData = eval(arrayMatch[0]);

                // --- LIVE PATCH: CORRECTING GCSE STATS/PROB LINKS ---
                monthData.forEach(prob => {
                    const isStatsOrProb = (prob.major_area === "Statistics" || prob.major_area === "Probability");
                    if (this.state.tier === 'gcse' && isStatsOrProb) {
                        // If it points to Geometry pack (XAGch), swap to Stats pack (RVbqM)
                        if (prob.payhip_link === "https://payhip.com/b/XAGch") {
                            prob.payhip_link = "https://payhip.com/b/RVbqM";
                            prob.button_text = "Master Stats & Probability: Download the Full Pack";
                        }
                    }
                });
                // ----------------------------------------------------

                this.state.masterVault = [...this.state.masterVault, ...monthData];
            }
        } catch (e) { 
            console.error("Filing error in month:", path, e); 
        }
    },

    // --- STUDENT VIEW: REVISION MENU ---
    renderMenu() {
        const solvedCount = this.state.seenIds.filter(id => {
            // Logic: Only count problems belonging to the current tier
            return (this.state.tier === 'gcse' && id.startsWith('002')) || 
                   (this.state.tier === 'igcse' && id.startsWith('003'));
        }).length;

        const stage = document.getElementById('hub-stage');
        if (!stage) return;

        stage.innerHTML = `
            <div class="info-panel" style="background: white; border: 1px solid #ddd; text-align: center;">
                <div class="hub-stats" style="background: var(--brand-green-light); padding: 15px; border-radius: 8px; margin-bottom: 20px; font-weight: bold; color: var(--brand-purple-dark);">
                    Head Teacher's Record: You have mastered ${solvedCount} ${this.state.tier.toUpperCase()} problems.
                </div>
                <h3>Choose a Topic to Access the Questions</h3>
                <p>Every question is in the style expected in your final examinations. Solve the problem, then reveal the model answer to check your logic.</p>
                
                <div class="menu-grid">
                    ${['Algebra','Number','Geometry & Measures','Ratio, Proportion & Rates of Change','Statistics','Probability']
                        .map(t => `<button class="menu-btn" onclick="BradleyHub.serveArena('${t}')">${t === 'Ratio, Proportion & Rates of Change' ? 'Ratio & Proportion' : t}</button>`).join('')}
                    <button class="menu-btn random" onclick="BradleyHub.serveArena('all')">★ Random Mix ★</button>
                </div>
            </div>`;
    },

    serveArena(topic) {
        this.state.currentTopic = topic;
        const today = new Date();
        today.setHours(0,0,0,0);

        let pool = this.state.masterVault.filter(p => {
            const topicMatch = (topic === 'all' || p.major_area === topic);
            const unseen = !this.state.seenIds.includes(p.id);
            const isPast = new Date(p.date) < today;
            return topicMatch && unseen && isPast;
        });

        const stage = document.getElementById('hub-stage');
        if (!stage) return;

        if (pool.length === 0) {
            stage.innerHTML = `
                <div class="info-panel">
                    <h2>Topic Mastered!</h2>
                    <p>Excellent work. You have viewed every archived problem in the <strong>${topic}</strong> section for this tier.</p>
                    <button class="btn btn-purple" onclick="BradleyHub.renderMenu()">Return to Menu</button>
                </div>`;
            return;
        }

        const prob = pool[Math.floor(Math.random() * pool.length)];
        stage.innerHTML = '';
        stage.appendChild(this.createProblemCard(prob, false));
        if (window.MathJax) MathJax.typesetPromise();
    },

    // --- TEACHER VIEW: AUDIT LIST ---
    renderAuditList() {
        const container = document.getElementById('hub-container');
        if (!container) return;
        container.innerHTML = '';
        this.state.masterVault.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.state.masterVault.forEach(prob => {
            container.appendChild(this.createProblemCard(prob, true));
        });
        if (window.MathJax) MathJax.typesetPromise();
    },

    // --- THE UNIVERSAL CARD GENERATOR ---
    createProblemCard(prob, isAudit) {
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

        card.innerHTML = `
            <span class="widget-header">${prob.date.toUpperCase()} | ${prob.topic} | Grade ${prob.difficulty}</span>
            <div class="question-box">${prob.q}</div>
            ${imgHTML}
            <div id="action-area-${prob.id}">
                <button class="reveal-btn" onclick="BradleyHub.revealSolution('${prob.id}', ${isAudit})">
                    ${isAudit ? 'Show Model Answer' : 'I have solved it. Show Model Answer.'}
                </button>
            </div>
            <div id="sol-${prob.id}" class="step-container" style="display:none;">
                <h3 style="text-align:left; color: var(--brand-purple);">Head Teacher's Model Solution</h3>
                ${prob.steps.map(s => `<div class="step" style="display:block;"><span class="step-text">Step</span>${s}</div>`).join('')}
                <div class="bradley-insight-box insight-caution">
                    <span class="insight-title">The Head Teacher's Eye</span>
                    ${prob.bradley_insight.content}
                </div>
                ${!isAudit ? `
                    <div style="display:flex; gap:10px; margin-top:20px; justify-content: center;">
                        <button class="btn btn-purple" onclick="BradleyHub.serveArena('${this.state.currentTopic}')">Next Question</button>
                        <button class="btn" style="background: var(--text-muted); color: white !important;" onclick="BradleyHub.renderMenu()">Change Area</button>
                    </div>
                ` : ''}
                <a href="${prob.payhip_link}" target="_blank" class="btn-buy" style="display:block; text-align:center; margin-top:20px; background: var(--brand-green); color: white !important;">
                    ${prob.button_text}
                </a>
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

    // UTILITIES
    loadSpecificMonth(mm) { this.init('audit', this.state.tier); },
    switchTier(t) { 
        this.state.tier = t; 
        localStorage.setItem('bradley_tier', t); 
        this.init(this.state.isTeacherMode ? 'audit' : 'student', t); 
    }
};