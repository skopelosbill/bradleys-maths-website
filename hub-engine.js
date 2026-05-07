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
    // AUTOMATIC WORKSHEET LOOKUP DIRECTORY (Separated by Tier)
    worksheetDirectory: {
        gcse: {
            // --- NUMBER ---
            "Natural Numbers and Integers": "https://payhip.com/b/NF60m",
            "Squares and Cubes": "https://payhip.com/b/qOE5o",
            "Prime Numbers HCF LCM": "https://payhip.com/b/ul4LH",
            "Rational and Irrational Numbers and Reciprocals": "https://payhip.com/b/ND45g",
            "Priority of Operations": "https://payhip.com/b/85Ieb",
            "Using a Calculator": "https://payhip.com/b/KTXaO",
            "Integer Indices and Roots": "https://payhip.com/b/fBMNb",
            "Fractional Indices and Roots": "https://payhip.com/b/iU6Nj",
            "Standard Form": "https://payhip.com/b/ZAkTu",
            "Surds": "https://payhip.com/b/BaZjD",
            "Ordering": "https://payhip.com/b/peXuz",
            "Operations with Integers and Decimals": "https://payhip.com/b/NKrd4",
            "Multiplication and Division of Fractions": "https://payhip.com/b/Qd4GN",
            "Addition and Subtraction of Fractions": "https://payhip.com/b/Da8mk",
            "Operations with Mixed Numbers": "https://payhip.com/b/c0tPv",
            "Rounding, Estimation and Error Intervals": "https://payhip.com/b/eg8sA",
            "Limits of Accuracy and Bounds": "https://payhip.com/b/qYp8g",
            "Fraction Decimal Conversion": "https://payhip.com/b/XoqhS",
            "Fraction, Decimal, Percentage Conversions": "https://payhip.com/b/K7zsa",
            "Recurring Decimals to Fractions": "https://payhip.com/b/dAvne",
            "Basic Percentages": "https://payhip.com/b/U3CGa",
            "Percentage Change and Interest": "https://payhip.com/b/X8Yo2",
            "Reverse Percentages": "https://payhip.com/b/UYy0Q",
            "Ratio and Sharing": "https://payhip.com/b/o7A2P",
            "Direct and Inverse Proportion": "https://payhip.com/b/JYBkq",
            "Compound Units: Speed, Density, Pressure": "https://payhip.com/b/DK7b1",
            "Rates of Pay, Unit pricing, and Currency": "https://payhip.com/b/WeoVy",
            "Time": "https://payhip.com/b/flD19",
            "Growth and Decay": "https://payhip.com/b/eRHBx",
            "General Iterative Processes": "https://payhip.com/b/rAIp4",
            "Systematic Listing and the Product Rule": "https://payhip.com/b/o3aVn",
            "Scale Factors, Diagrams, and Maps": "https://payhip.com/b/SIUqC",
            "Comparing Lengths, Areas, and Volumes": "https://payhip.com/b/bgm5B",

            // --- ALGEBRA ---
            "Introduction to Algebra": "https://payhip.com/b/KaG8c",
            "Simplifying Expressions": "https://payhip.com/b/yAeG9",
            "Expanding Brackets": "https://payhip.com/b/yac9b",
            "Factorising Expressions 1": "https://payhip.com/b/SHDG1",
            "Factorising Expressions 2": "https://payhip.com/b/xqVUj",
            "Completing the Square": "https://payhip.com/b/miLap",
            "Algebraic Proof": "https://payhip.com/b/EKtuw",
            "Algebraic Fractions 1": "https://payhip.com/b/KPeax",
            "Algebraic Fractions 2": "https://payhip.com/b/jJHdP",
            "Rational Expressions": "https://payhip.com/b/Natzp",
            "Indices": "https://payhip.com/b/hGzMV",
            "Constructing Expressions": "https://payhip.com/b/ZFqwQ",
            "Solving Linear Equations": "https://payhip.com/b/v65fA",
            "Solving Fractional Equations": "https://payhip.com/b/wdgX1",
            "Simultaneous Linear Equations": "https://payhip.com/b/Cq1JG",
            "Simultaneous Equations Non-Linear": "https://payhip.com/b/BqWhb",
            "Quadratics Equations Factorising": "https://payhip.com/b/lGQis",
            "Quadratic Equations - Formula and Completing the Square": "https://payhip.com/b/7CT3V",
            "Iteration": "https://payhip.com/b/IoYTp",
            "Changing the Subject of a Formula": "https://payhip.com/b/9r34U",
            "GCSE Higher Tier Maths - Linear inequalities": "https://payhip.com/b/d84xC",
            "Linear inequalities in One Variable": "https://payhip.com/b/d84xC",
            "Linear Inequalities in two Variables": "https://payhip.com/b/r7o0O",
            "Sequences": "https://payhip.com/b/GWKby",
            "Functions: Domain and Range": "https://payhip.com/b/F9KRd",
            "Inverse Functions": "https://payhip.com/b/SIpux",
            "Composite Functions": "https://payhip.com/b/A7Wup",
            "Cartesian Coordinates": "https://payhip.com/b/qkrPY",
            "Plotting Linear Graphs": "https://payhip.com/b/lHJUa",
            "Gradient": "https://payhip.com/b/uEo2p",
            "Length and Midpoint of a Line Segment": "https://payhip.com/b/zijkw",
            "Equations of Linear Graphs": "https://payhip.com/b/U8umo",
            "Parallel and Perpendicular Lines 1": "https://payhip.com/b/y07Oc",
            "Parallel and Perpendicular Lines 2": "https://payhip.com/b/NZ7ha",
            "Graphs in Practical Situations": "https://payhip.com/b/7keWD",
            "Rates of Change from Graphs": "https://payhip.com/b/cpuDV",
            "Plotting Curved Graphs": "https://payhip.com/b/5b3Av",
            "Solving Equations Graphically": "https://payhip.com/b/uF4cK",
            "Sketching Graphs": "https://payhip.com/b/t8xQq",
            "Graphical Representation of Inverse Proportion": "https://payhip.com/b/uEa8o",
            "Quadratic Inequalities": "https://payhip.com/b/3oWKQ",
            "Gradients and Area under Graphs": "https://payhip.com/b/9wXvI",
            "Equation of a Circle": "https://payhip.com/b/OnqfT",
            "Trigonometric Graphs": "https://payhip.com/b/uyDvx",
            "Solving Trig Equations Graphically": "https://payhip.com/b/AtoLW",
            "Transformations": "https://payhip.com/b/FDaTw",

            // --- GEOMETRY ---
            "Angle Properties": "https://payhip.com/b/lxSzN",
            "Triangles": "https://payhip.com/b/BHgYW",
            "Quadrilaterals": "https://payhip.com/b/eXEl8",
            "Polygons": "https://payhip.com/b/4zntl",
            "Circle Properties": "https://payhip.com/b/mCeEQ",
            "Symmetry in 2D": "https://payhip.com/b/8nGQw",
            "Geometrical Constructions": "https://payhip.com/b/ErOuY",
            "Loci": "https://payhip.com/b/Ql5p0",
            "Scale Drawings and Bearings": "https://payhip.com/b/iW9eY",
            "Similarity in 2D": "https://payhip.com/b/L2dNU",
            "Triangle Congruence": "https://payhip.com/b/FS9zC",
            "Geometrical Proof": "https://payhip.com/b/R1v2e",
            "Introduction to 3D Solids and Nets": "https://payhip.com/b/PjiBG",
            "Plans and Elevations": "https://payhip.com/b/9KeKR",
            "Symmetry in 3D": "https://payhip.com/b/AfsYi",
            "Similarity in 3D": "https://payhip.com/b/iBzE5",
            "Circle Theorems 1": "https://payhip.com/b/RLgSJ",
            "Circle Theorems 2": "https://payhip.com/b/wm0xL",
            "Circle Theorem Proofs": "https://payhip.com/b/1rJUj",
            "Units of Measure": "https://payhip.com/b/OItpm",
            "Perimeter and Area in 2D": "https://payhip.com/b/zukBR",
            "Circumference and Area of Circles": "https://payhip.com/b/K8QAT",
            "Arcs and Sectors": "https://payhip.com/b/fiURV",
            "Surface Area and Volume in 3D": "https://payhip.com/b/aJhQL",
            "Compound Shapes in 2D": "https://payhip.com/b/z2KF1",
            "Compound Shapes in 3D": "https://payhip.com/b/m8Stz",
            "Pythagoras Theorem": "https://payhip.com/b/9dSh3",
            "Right Angled Trigonometry": "https://payhip.com/b/h3BS6",
            "Exact Trigonometric values": "https://payhip.com/b/GToVZ",
            "Sine Rule": "https://payhip.com/b/EaYM1",
            "Cosine Rule": "https://payhip.com/b/RHeNL",
            "Trigonometry in 3D": "https://payhip.com/b/QsiXK",
            "Vectors in 2D": "https://payhip.com/b/lemlz",
            "Vector Geometry": "https://payhip.com/b/CZOJ4",
            "Vector Problem Solving": "https://payhip.com/b/LTjeD",

            // --- PROBABILITY & STATISTICS ---
            "Introduction to Probability": "https://payhip.com/b/Z7KYo",
            "Relative and Expected Frequencies": "https://payhip.com/b/csAoM",
            "Systematic listing Strategies": "https://payhip.com/b/1nLdO",
            "Frequency Trees": "https://payhip.com/b/3Qiey",
            "Sets and Venn Diagrams": "https://payhip.com/b/oW2c1",
            "The Addition Rule": "https://payhip.com/b/Jr67s",
            "Probability Tree diagrams": "https://payhip.com/b/8EhLZ",
            "Probability of Combined Events": "https://payhip.com/b/FGC0u",
            "Conditional Probability": "https://payhip.com/b/MoE4j",
            "Sampling": "https://payhip.com/b/rCsYM",
            "Data Handling and Interpretation": "https://payhip.com/b/YC2BF",
            "Averages and Spread – Ungrouped Data": "https://payhip.com/b/vRHXh",
            "Averages and Spread – Grouped Data": "https://payhip.com/b/vZuiV",
            "Statistical Charts and Diagrams": "https://payhip.com/b/59j80",
            "Time Series": "https://payhip.com/b/19T3Q",
            "Scatter Diagrams": "https://payhip.com/b/JLTGt",
            "Cumulative Frequency Diagrams": "https://payhip.com/b/fmvej",
            "Box and Whisker Plots": "https://payhip.com/b/L5f6Y",
            "Histograms": "https://payhip.com/b/ND5E9"
        },
        igcse: {
            // Future IGCSE links will go here!
        }
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
        // Look up the correct directory for the current tier (GCSE or IGCSE)
        const tierDirectory = this.worksheetDirectory[this.state.tier] || {};
        const specificLink = tierDirectory[prob.subtopic];

        // Fallback gracefully: If there is no specific link (like for IGCSE right now), use the big booklet!
        const finalLink = specificLink ? specificLink : (groupId === 'all' ? prob.payhip_link : group.link);
        const finalText = specificLink ? `Need practice? Get the ${prob.subtopic} Worksheet` : (groupId === 'all' ? prob.button_text : group.btnText);

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

        let answerPart = finalStep.split("Final Answer:")[1];
        if (!answerPart) return "";

        // Remove HTML tags but KEEP all the LaTeX formatting and $$ markers
        answerPart = answerPart.replace(/<[^>]*>/g, "");
        answerPart = answerPart.replace(/\s+/g, " ").trim();

        return answerPart;
    },
   // --- THE DISTRACTOR GENERATOR ---
    generateDistractors(correct, prob) {
        const distractors =[];
        
        // Regex to find all numbers (decimals and negatives included) in the string
        const numRegex = /-?\d+(\.\d+)?/g;
        const matches = correct.match(numRegex);

        // If there are no numbers at all, fallback to text distractors
        if (!matches) {
            return[
                "Not enough information",
                "The opposite of the correct answer",
                "None of the parts are correct"
            ];
        }

        // Helper function to plausibly tweak numbers found in the string
        const tweakNumber = (valStr, strategy) => {
            let num = parseFloat(valStr);
            let isDecimal = valStr.includes('.');
            let decPlaces = isDecimal ? valStr.split('.')[1].length : 0;
            
            let newVal;
            if (strategy === 'high') {
                newVal = num > 20 ? num * 1.1 : num + (isDecimal ? 0.5 : 2);
            } else if (strategy === 'low') {
                newVal = num > 20 ? num * 0.9 : num - (isDecimal ? 0.5 : 2);
                if (newVal < 0 && num > 0) newVal = num / 2; // Prevent turning a positive answer negative
            } else if (strategy === 'slip') {
                newVal = num + (isDecimal ? 1.5 : 10);
            }

            // Return with the original formatting (keep decimals intact)
            return isDecimal ? newVal.toFixed(decPlaces) : Math.round(newVal).toString();
        };

        // Create 3 distractors by applying the tweaks to every number in the string
        let d1 = correct.replace(numRegex, m => tweakNumber(m, 'high'));
        let d2 = correct.replace(numRegex, m => tweakNumber(m, 'low'));
        let d3 = correct.replace(numRegex, m => tweakNumber(m, 'slip'));

        // Failsafe: if the tweaks somehow match the correct answer exactly, force a change
        if (d1 === correct) d1 += " (approx)";
        if (d2 === correct || d2 === d1) d2 = "None of the parts match";
        if (d3 === correct || d3 === d2) d3 = "Cannot be determined";

        distractors.push(d1, d2, d3);
        
        // Remove duplicates just in case
        return[...new Set(distractors)];
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
        const optionsToShuffle =[correct, ...distractors];
        const shuffled = optionsToShuffle.sort(() => Math.random() - 0.5);
        shuffled.push("None of the above");

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

            <div id="action-area-${prob.id}" style="text-align: center; margin-top: 20px;">
                <button class="reveal-btn" onclick="BradleyHub.revealOptions('${prob.id}')">
                    I'm Ready: Reveal Answer Options
                </button>
            </div>

            <div id="options-${prob.id}" class="mcq-options" style="display:none; margin-top: 20px;">
                <p style="margin-bottom: 15px; font-weight: bold; color: var(--brand-purple); text-align: center;">Select your answer:</p>
                <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
                    ${shuffled.map(opt => {
                        // CRITICAL FIX: Escape backslashes so HTML doesn't eat the LaTeX!
                        const safeOpt = opt.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
                        const safeCorrect = correct.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
                        return `
                        <button class="mcq-btn" style="width: 100%; max-width: 400px; padding: 12px; font-size: 1rem; border: 1px solid var(--brand-purple); border-radius: 6px; background: white; cursor: pointer;" 
                                onclick="BradleyHub.checkAnswer('${prob.id}', '${safeOpt}', '${safeCorrect}')">
                            ${opt}
                        </button>`
                    }).join('')}
                </div>
            </div>

            <div id="feedback-${prob.id}" class="feedback-box" style="display:none; margin-top: 15px; text-align: center; padding: 10px; border-radius: 5px;"></div>

            <div id="sol-${prob.id}" class="step-container" style="display:none;">
                <h3 style="text-align:left; color: var(--brand-purple);">Model Solution</h3>
                ${prob.steps.map(s => `<div class="step" style="display:block !important; visibility:visible !important; opacity:1 !important; height:auto !important; margin-bottom:12px;"><span class="step-text" style="font-weight:bold; color:var(--brand-purple); margin-right:8px;">Step</span>${s}</div>`).join('')}

                <div class="bradley-insight-box insight-caution" style="margin-top: 20px;">
                    <span class="insight-title">The Head Teacher's Eye</span>
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