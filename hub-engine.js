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
        stage.appendChild(this.createInteractiveCard(prob, finalLink, finalText));
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
        // --- THE UNIVERSAL ANSWER EXTRACTOR ---
    extractFinalAnswer(finalStep) {
        if (!finalStep) return "";

        // 1. Find the "Final Answer:" part
        let answerPart = finalStep.split("Final Answer:")[1];
        if (!answerPart) return "";

        // 2. Remove LaTeX block markers $$...$$
        answerPart = answerPart.replace(/\$\$/g, "");

        // 3. Remove surrounding whitespace and HTML tags
        answerPart = answerPart.trim();
        answerPart = answerPart.replace(/<[^>]*>/g, "");

        // 4. Normalise spaces
        answerPart = answerPart.replace(/\s+/g, " ").trim();

    return answerPart;
    },
    // --- THE DISTRACTOR GENERATOR ---
    generateDistractors(correct, prob) {
    const distractors = [];

    // --- 1. Try to extract a numeric value ---
    const numMatch = correct.match(/-?\d+(\.\d+)?/);
    let baseNumber = numMatch ? parseFloat(numMatch[0]) : null;

    // --- 2. Topic-aware distractors ---
    const topic = prob.topic.toLowerCase();
    const area = prob.major_area.toLowerCase();

    // PERCENTAGE QUESTIONS
    if (topic.includes("percent") || correct.includes("%")) {
        distractors.push((baseNumber * 0.9).toFixed(1) + "%");  // 10% too low
        distractors.push((baseNumber * 1.1).toFixed(1) + "%");  // 10% too high
        distractors.push((baseNumber + 5).toFixed(1) + "%");    // arithmetic slip
        return distractors;
    }

    // ANGLES / POLYGONS
    if (topic.includes("angle") || topic.includes("polygon")) {
        distractors.push(baseNumber + 180);   // wrong formula
        distractors.push(baseNumber - 180);   // exterior instead of interior
        distractors.push(baseNumber + 20);    // arithmetic slip
        return distractors;
    }

    // ALGEBRA
    if (area.includes("algebra")) {
        distractors.push(baseNumber + 2);     // sign error
        distractors.push(baseNumber - 2);     // rearrangement slip
        distractors.push(baseNumber * -1);    // wrong root
        return distractors;
    }

    // TRIGONOMETRY
    if (area.includes("trig")) {
        distractors.push((baseNumber * 0.5).toFixed(2));  // wrong ratio
        distractors.push((baseNumber * 2).toFixed(2));    // inverted ratio
        distractors.push((baseNumber + 10).toFixed(2));   // arithmetic slip
        return distractors;
    }

    // DIFFERENTIATION (IGCSE only)
    if (topic.includes("differentiat") || area.includes("differentiation")) {
        distractors.push(baseNumber + 1);     // power rule wrong
        distractors.push(baseNumber - 1);     // coefficient ignored
        distractors.push(baseNumber * 2);     // exponent doubled
        return distractors;
    }

    // --- 3. Universal fallback distractors ---
    if (baseNumber !== null) {
        distractors.push(baseNumber + 1);
        distractors.push(baseNumber - 1);
        distractors.push(baseNumber * 2);
    } else {
        // Non-numeric answers → generic plausible distractors
        distractors.push("Not enough information");
        distractors.push("The opposite of the correct answer");
        distractors.push("A common misconception");
    }

    return distractors;
},
    // --- THE ANSWER CHECKER ---
    checkAnswer(probId, chosen, correct) {
        const feedbackBox = document.getElementById(`feedback-${probId}`);
        const optionsBox = document.getElementById(`options-${probId}`);

        if (!feedbackBox) return;

        // Normalise both answers for comparison
        const cleanChosen = chosen.toString().trim().toLowerCase();
        const cleanCorrect = correct.toString().trim().toLowerCase();

        let isCorrect = (cleanChosen === cleanCorrect);

        // --- FEEDBACK ---
        if (isCorrect) {
            feedbackBox.style.display = "block";
            feedbackBox.style.background = "#d1fae5"; // green tint
            feedbackBox.style.color = "#065f46";
            feedbackBox.border = "1px solid #34d399";
            feedbackBox.innerHTML = `<strong>Correct!</strong> Outstanding work. Here is the fully worked solution:`;
        } else {
            feedbackBox.style.display = "block";
            feedbackBox.style.background = "#fee2e2"; // red tint
            feedbackBox.style.color = "#991b1b";
            feedbackBox.border = "1px solid #f87171";
            feedbackBox.innerHTML = `
                <strong>Not quite.</strong>  
                Don't worry, this is a common misconception — review the model answer below to see where you went wrong.
            `;
        }

        // --- HIDE THE MCQ BUTTONS SO THEY CAN'T KEEP GUESSING ---
        if (optionsBox) optionsBox.style.display = "none";

        // --- AUTOMATICALLY REVEAL THE WORKED SOLUTION ---
        this.revealSolution(probId, false);
    },

    // --- INTERACTIVE CARD GENERATOR  ---
    createInteractiveCard(prob, link, btnText) {
        const card = document.createElement('div');
        card.className = 'daily-widget';

        // --- Extract correct answer ---
        const finalStep = prob.steps[prob.steps.length - 1];
        const correct = this.extractFinalAnswer(finalStep);

        // --- Generate distractors ---
        const distractors = this.generateDistractors(correct, prob);

        // --- Build options array ---
        const options = [correct, ...distractors, "None of the above"];
        const shuffled = options.sort(() => Math.random() - 0.5);

        // --- Image logic ---
        let imgHTML = '';
        if (prob.img === "true") {
            const d = new Date(prob.date);
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const t = this.state.tier === 'gcse' ? 'g' : 'i';
            imgHTML = `<img src="images/${mm}/${t}_${dd}.png" class="question-img" style="margin: 20px auto; display: block;">`;
        }

        // --- Build the card HTML ---
        card.innerHTML = `
            <span class="widget-header">${prob.date.toUpperCase()} | ${prob.topic} | Grade ${prob.difficulty}</span>
            <div class="question-box">${prob.q}</div>
            ${imgHTML}

            <!-- 1. Initial "Reveal" Button -->
            <div id="action-area-${prob.id}" style="text-align: center; margin-top: 20px;">
                <button class="reveal-btn" onclick="BradleyHub.revealOptions('${prob.id}')">
                    I'm Ready: Reveal Answer Options
                </button>
            </div>

            <!-- 2. Hidden MCQ Options -->
            <div id="options-${prob.id}" class="mcq-options" style="display:none; margin-top: 20px;">
                <p style="margin-bottom: 10px; font-weight: bold; color: var(--brand-purple); text-align: center;">Select your answer:</p>
                ${shuffled.map(opt => `
                    <button class="mcq-btn" onclick="BradleyHub.checkAnswer('${prob.id}', '${opt}', '${correct}')">
                        ${opt}
                    </button>
                `).join('')}
            </div>

            <!-- 3. Feedback Box -->
            <div id="feedback-${prob.id}" class="feedback-box" style="display:none; margin-top: 15px; text-align: center; padding: 10px; border-radius: 5px;"></div>

            <!-- 4. Hidden Worked Solution -->
            <div id="sol-${prob.id}" class="step-container" style="display:none;">
                <h3 style="text-align:left; color: var(--brand-purple);">Model Solution</h3>
                ${prob.steps.map(s => `<div class="step">${s}</div>`).join('')}

                <div class="bradley-insight-box insight-${prob.bradley_insight.type}">
                    <span class="insight-title">${prob.bradley_insight.title}</span>
                    ${prob.bradley_insight.content}
                </div>

                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button class="btn btn-purple" style="flex:1;"
                        onclick="BradleyHub.serveArena('${this.state.currentGroup}')">
                        Next Question
                    </button>
                    <button class="btn" style="flex:1; background: var(--text-muted); color: white !important;"
                        onclick="BradleyHub.renderMenu()">
                        Change Area
                    </button>
                </div>

                <a href="${link}" target="_blank" class="btn-buy"
                    style="display:block; text-align:center; margin-top:20px; background: var(--brand-green); color: white !important;">
                    ${btnText}
                </a>
            </div>
        `;

        return card;
    },
    // --- REVEAL OPTIONS ---
    revealOptions(id) {
        const opts = document.getElementById(`options-${id}`);
        const act = document.getElementById(`action-area-${id}`);
        if (opts) opts.style.display = 'block';
        if (act) act.style.display = 'none';
    },
    // --- REVEAL SOLUTION
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