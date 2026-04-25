// hub-engine.js - The Brain of the Revision Hub
const BradleyHub = {
    state: {
        tier: localStorage.getItem('bradley_tier') || 'gcse',
        allProblems: [],
        activeMonths: ['01', '02', '03', '04', '05'], // Update this list as you add months
        isTeacherMode: false
    },

    async init(mode) {
        this.state.isTeacherMode = (mode === 'audit');
        await this.loadAllData();
        this.renderHub();
    },

    async loadAllData() {
        // Clear bank to prevent duplicates on re-init
        this.state.allProblems = [];
        
        for (const mm of this.state.activeMonths) {
            try {
                // Fetch the script file manually to bypass global variable conflicts
                const response = await fetch(`problems/${this.state.tier}/2026/${mm}.js`);
                const text = await response.text();
                
                // This is a "clean" way to extract the problemBank array from your existing files
                // without actually injecting <script> tags that might mess up the global scope
                const bankMatch = text.match(/const problemBank\s*=\s*(\[[\s\S]*?\]);/);
                if (bankMatch) {
                    const monthData = JSON.parse(bankMatch[1].replace(/\\/g, '\\\\'));
                    this.state.allProblems = [...this.state.allProblems, ...monthData];
                }
            } catch (e) {
                console.error(`Error loading month ${mm}:`, e);
            }
        }
    },

    renderHub() {
        const container = document.getElementById('hub-container');
        container.innerHTML = '';

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Filter: If student mode, only show dates < today. If teacher mode, show all.
        let filtered = this.state.allProblems.filter(p => {
            if (this.state.isTeacherMode) return true;
            
            const probDate = new Date(p.date);
            return probDate < today;
        });

        // Sort newest first
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

        filtered.forEach(prob => {
            const card = document.createElement('div');
            card.className = `problem-card ${this.state.isTeacherMode ? 'audit-border' : ''}`;
            card.innerHTML = `
                <div class="card-header">
                    <span class="card-date">${prob.date}</span>
                    <span class="card-tag">${prob.topic}</span>
                    <span class="card-difficulty">Grade ${prob.difficulty}</span>
                </div>
                <div class="card-q">${prob.q}</div>
                <button class="toggle-btn" onclick="BradleyHub.toggleSol('${prob.id}')">Show Head Teacher's Answer</button>
                <div id="sol-${prob.id}" class="card-sol" style="display:none;">
                    <hr>
                    ${prob.steps.map(step => `<p class="step-text">${step}</p>`).join('')}
                    <div class="insight-box">
                        <strong>The Head Teacher's Eye:</strong> ${prob.bradley_insight.content}
                    </div>
                    <a href="${prob.payhip_link}" class="hub-buy-btn">${prob.button_text}</a>
                </div>
            `;
            container.appendChild(card);
        });

        if (window.MathJax) {
            MathJax.typeset();
        }
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