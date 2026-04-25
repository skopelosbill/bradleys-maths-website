// hub-engine.js - The Bulletproof Version
const BradleyHub = {
    state: {
        tier: localStorage.getItem('bradley_tier') || 'gcse',
        masterVault: [],
        activeMonths: ['01', '02', '03', '04', '05'],
        isTeacherMode: false
    },

    async init(mode) {
        console.log("Hub Initialising in " + mode + " mode for " + this.state.tier);
        this.state.isTeacherMode = (mode === 'audit');
        
        // CRITICAL FIX: Reset the vault to empty every time we load
        this.state.masterVault = [];
        
        await this.sequentialLoad();
    },

    async sequentialLoad() {
        for (const mm of this.state.activeMonths) {
            await this.fetchMonthData(mm);
        }
        this.renderHub();
    },

    // Using FETCH is safer than SCRIPT tags for the Hub 
    // because it allows us to handle the data without global variable collisions
    async fetchMonthData(mm) {
        const path = `problems/${this.state.tier}/2026/${mm}.js`;
        try {
            const response = await fetch(path);
            const text = await response.text();
            
            // This regex finds everything between the first [ and the last ];
            const arrayMatch = text.match(/\[[\s\S]*\]/);
            if (arrayMatch) {
                // We convert the string array into a real Javascript object
                // We use eval because your files are .js with comments, not pure .json
                const monthData = eval(arrayMatch[0]);
                this.state.masterVault = [...this.state.masterVault, ...monthData];
                console.log(`Loaded ${monthData.length} problems from month ${mm}`);
            }
        } catch (e) {
            console.error(`Could not load ${path}. Check if file exists.`);
        }
    },

    renderHub() {
        const container = document.getElementById('hub-container');
        if (!container) return;
        container.innerHTML = '';

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Filter out future problems for students
        let filtered = this.state.masterVault.filter(p => {
            if (this.state.isTeacherMode) return true;
            // Ensure date format is consistent for the browser
            const probDate = new Date(p.date);
            return probDate < today;
        });

        // Sort: Newest problems at the top
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

        // REMOVE DUPLICATES (Insurance policy)
        const uniqueFiltered = Array.from(new Set(filtered.map(a => a.id)))
            .map(id => filtered.find(a => a.id === id));

        uniqueFiltered.forEach(prob => {
            let imgHTML = '';
            if (prob.img === "true") {
                const d = new Date(prob.date);
                const mm = String(d.getMonth() + 1).padStart(2, '0');
                const dd = String(d.getDate());
                const t = this.state.tier === 'gcse' ? 'g' : 'i';
                const imgPath = `images/${mm}/${t}_${dd}.png`;
                imgHTML = `<div class="card-img"><img src="${imgPath}" style="max-width:100%; height:auto; margin: 15px 0; border: 1px solid #eee; border-radius: 4px;"></div>`;
            }

            const card = document.createElement('div');
            card.className = 'problem-card';
            if (this.state.isTeacherMode) card.style.borderLeft = "5px solid #d9534f";

            card.innerHTML = `
                <div class="card-header">
                    <span class="card-date" style="font-weight:bold; color:#2c3e50;">${prob.date.toUpperCase()}</span>
                    <span class="card-tag" style="background:#eee; padding:2px 8px; border-radius:10px;">${prob.topic}</span>
                    <span class="card-difficulty">Grade ${prob.difficulty}</span>
                </div>
                <div class="card-q" style="margin: 15px 0; font-size: 1.1rem;">${prob.q}</div>
                ${imgHTML}
                <button class="toggle-btn" onclick="BradleyHub.toggleSol('${prob.id}')">Show Head Teacher's Answer</button>
                <div id="sol-${prob.id}" class="card-sol" style="display:none; background: #fafafa; padding: 15px; border-radius: 4px; margin-top: 15px;">
                    <h4 style="margin-top:0;">Model Solution:</h4>
                    ${prob.steps.map(s => `<p style="margin-bottom:8px; font-style: italic;">${s}</p>`).join('')}
                    <div class="insight-box" style="background: #fff9c4; border-left: 4px solid #fbc02d; padding: 10px; margin: 15px 0;">
                        <strong>The Head Teacher's Eye:</strong> ${prob.bradley_insight.content}
                    </div>
                    <a href="${prob.payhip_link}" target="_blank" class="hub-buy-btn">${prob.button_text}</a>
                </div>
            `;
            container.appendChild(card);
        });

        // Trigger MathJax
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    },

    toggleSol(id) {
        const sol = document.getElementById(`sol-${id}`);
        if (!sol) return;
        sol.style.display = sol.style.display === 'none' ? 'block' : 'none';
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise();
        }
    },

    switchTier(newTier) {
        this.state.tier = newTier;
        localStorage.setItem('bradley_tier', newTier);
        // Fully restart the hub for the new tier
        this.init(this.state.isTeacherMode ? 'audit' : 'student');
    }
};