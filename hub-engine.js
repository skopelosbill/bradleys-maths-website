// hub-engine.js - Focus Version
const BradleyHub = {
    state: {
        tier: localStorage.getItem('bradley_tier') || 'gcse',
        masterVault: [],
        currentMonth: '04', // Default to current month
        isTeacherMode: false
    },

    async init(mode) {
        this.state.isTeacherMode = (mode === 'audit');
        // If in audit mode, check if the picker exists and use its value
        const picker = document.getElementById('month-picker');
        if (picker) {
            this.state.currentMonth = picker.value;
        }
        await this.loadSpecificMonth(this.state.currentMonth);
    },

    async loadSpecificMonth(mm) {
        this.state.currentMonth = mm;
        this.state.masterVault = []; // Clear previous month
        
        const path = `problems/${this.state.tier}/2026/${mm}.js`;
        console.log("Auditing: " + path);

        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error("File not found");
            const text = await response.text();
            
            // Surgical extraction of the problemBank array
            const arrayMatch = text.match(/\[[\s\S]*\]/);
            if (arrayMatch) {
                // Safely evaluate the array string into an object
                const monthData = eval(arrayMatch[0]);
                this.state.masterVault = monthData;
                this.renderHub();
            }
        } catch (e) {
            const container = document.getElementById('hub-container');
            container.innerHTML = `<div style="color:red; text-align:center; padding:50px;">
                <h3>Audit Error</h3>
                <p>Could not load the file: <strong>${path}</strong></p>
                <p>Ensure the file exists in GitHub and has no syntax errors.</p>
            </div>`;
        }
    },

    renderHub() {
        const container = document.getElementById('hub-container');
        if (!container) return;
        container.innerHTML = '';

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Filter for students, show all for teacher
        let filtered = this.state.masterVault.filter(p => {
            if (this.state.isTeacherMode) return true;
            return new Date(p.date) < today;
        });

        // Sort: Newest at top
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

        filtered.forEach(prob => {
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
                <div class="card-header" style="display:flex; justify-content:space-between; font-size:0.9rem; color:#666;">
                    <span><strong>${prob.date.toUpperCase()}</strong></span>
                    <span>${prob.topic} | Grade ${prob.difficulty}</span>
                </div>
                <div class="card-q" style="margin:20px 0; font-size:1.1rem;">${prob.q}</div>
                ${imgHTML}
                <button class="toggle-btn" onclick="BradleyHub.toggleSol('${prob.id}')">Show Model Answer</button>
                <div id="sol-${prob.id}" class="card-sol" style="display:none; background:#f9f9f9; padding:15px; border-radius:5px; margin-top:15px;">
                    ${prob.steps.map(s => `<p style="font-style:italic; margin-bottom:10px;">${s}</p>`).join('')}
                    <div style="background:#fff9c4; border-left:4px solid #fbc02d; padding:15px; margin:15px 0;">
                        <strong>The Head Teacher's Eye:</strong> ${prob.bradley_insight.content}
                    </div>
                    <a href="${prob.payhip_link}" target="_blank" style="display:block; text-align:center; background:#27ae60; color:white; text-decoration:none; padding:10px; border-radius:4px;">${prob.button_text}</a>
                </div>
            `;
            container.appendChild(card);
        });

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
        this.loadSpecificMonth(this.state.currentMonth);
    }
};