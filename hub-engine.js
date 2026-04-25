// hub-engine.js
const BradleyHub = {
    state: {
        tier: localStorage.getItem('bradley_tier') || 'gcse',
        masterVault: [],
        activeMonths: ['01', '02', '03', '04', '05'],
        isTeacherMode: false
    },

    async init(mode) {
        this.state.isTeacherMode = (mode === 'audit');
        this.state.masterVault = []; // Reset vault
        await this.sequentialLoad();
    },

    // Load months one by one so they don't overwrite each other
    async sequentialLoad() {
        for (const mm of this.state.activeMonths) {
            await this.loadMonthScript(mm);
        }
        this.renderHub();
    },

    loadMonthScript(mm) {
        return new Promise((resolve) => {
            const path = `problems/${this.state.tier}/2026/${mm}.js`;
            const script = document.createElement('script');
            script.src = path;
            
            script.onload = () => {
                // Once script is loaded, 'problemBank' global variable exists
                // We copy it into our vault before it gets overwritten by the next month
                if (typeof problemBank !== 'undefined') {
                    this.state.masterVault = [...this.state.masterVault, ...problemBank];
                }
                document.head.removeChild(script); // Clean up
                resolve();
            };

            script.onerror = () => {
                console.warn(`Month ${mm} file not found.`);
                resolve();
            };

            document.head.appendChild(script);
        });
    },

    renderHub() {
        const container = document.getElementById('hub-container');
        if (!container) return;
        container.innerHTML = '';

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let filtered = this.state.masterVault.filter(p => {
            if (this.state.isTeacherMode) return true;
            const probDate = new Date(p.date);
            return probDate < today;
        });

        // Sort newest first
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

        filtered.forEach(prob => {
            // Automated Image Path Logic
            let imgHTML = '';
            if (prob.img === "true") {
                const d = new Date(prob.date);
                const mm = String(d.getMonth() + 1).padStart(2, '0');
                const dd = String(d.getDate());
                const t = this.state.tier === 'gcse' ? 'g' : 'i';
                const imgPath = `images/${mm}/${t}_${dd}.png`;
                imgHTML = `<div class="card-img"><img src="${imgPath}" style="max-width:100%; height:auto; margin: 15px 0; border: 1px solid #eee;"></div>`;
            }

            const card = document.createElement('div');
            card.className = 'problem-card';
            if (this.state.isTeacherMode) card.style.borderLeft = "5px solid #d9534f";

            card.innerHTML = `
                <div class="card-header">
                    <span class="card-date">${prob.date}</span>
                    <span class="card-tag">${prob.topic}</span>
                    <span class="card-difficulty">Grade ${prob.difficulty}</span>
                </div>
                <div class="card-q">${prob.q}</div>
                ${imgHTML}
                <button class="toggle-btn" onclick="BradleyHub.toggleSol('${prob.id}')">Show Head Teacher's Answer</button>
                <div id="sol-${prob.id}" class="card-sol" style="display:none;">
                    <hr>
                    ${prob.steps.map(s => `<p class="step-text">${s}</p>`).join('')}
                    <div class="insight-box">
                        <strong>The Head Teacher's Eye:</strong> ${prob.bradley_insight.content}
                    </div>
                    <a href="${prob.payhip_link}" class="hub-buy-btn">${prob.button_text}</a>
                </div>
            `;
            container.appendChild(card);
        });

        if (window.MathJax) MathJax.typeset();
    },

    toggleSol(id) {
        const sol = document.getElementById(`sol-${id}`);
        sol.style.display = sol.style.display === 'none' ? 'block' : 'none';
        if (window.MathJax) MathJax.typeset();
    },

    switchTier(newTier) {
        this.state.tier = newTier;
        localStorage.setItem('bradley_tier', newTier);
        this.init(this.state.isTeacherMode ? 'audit' : 'student');
    }
};