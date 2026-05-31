// hub-engine.js - Bradley Gold Standard Unified Engine
const BradleyHub = {
    state: {
        tier: localStorage.getItem('bradley_tier') || 'gcse',
        seenIds: JSON.parse(localStorage.getItem('bradley_seen_ids') || '[]'),
        correctIds: JSON.parse(localStorage.getItem('bradley_correct_ids') || '[]'),
        freeQuestionsLeft: localStorage.getItem('bradley_free_left') !== null ? parseInt(localStorage.getItem('bradley_free_left')) : 20,
        isPremium: localStorage.getItem('bradley_premium') === 'true',
        masterVault:[],
        activeMonths: ['01', '02', '03', '04', '05', '06'],
        currentGroup: null, 
        isTeacherMode: false
    },

    worksheetDirectory: {
        gcse: {
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
            "Natural Numbers and Integers": "https://payhip.com/b/3mzNO",
            "Squares and Cubes": "https://payhip.com/b/dOlIS",
            "Prime Numbers, HCF, LCM": "https://payhip.com/b/Ljdog",
            "Rationals, Irrationals and Reciprocals": "https://payhip.com/b/PivFe",
            "Sets and Venn Diagrams": "https://payhip.com/b/Xg21p",
            "Integer Indices": "https://payhip.com/b/ao0mZ",
            "Fraction Decimal Conversion": "https://payhip.com/b/Kj3IV",
            "Fractions, Decimals, Percentages": "https://payhip.com/b/x41Cy",
            "Recurring Decimals": "https://payhip.com/b/XYDWV",
            "Ordering": "https://payhip.com/b/2DA9q",
            "The Four Operations (Integers and Decimals)": "https://payhip.com/b/sOdmt",
            "Multiplication and Division of Fractions": "https://payhip.com/b/M1Q2H",
            "Addition and Subtraction of Fractions": "https://payhip.com/b/5RxOz",
            "The Four Operations with Mixed Numbers": "https://payhip.com/b/gpWKf",
            "Fractional Indices and Roots": "https://payhip.com/b/ZKKG2",
            "Standard Form": "https://payhip.com/b/rTMY4",
            "Estimation": "https://payhip.com/b/dyVCM",
            "Limits of Accuracy": "https://payhip.com/b/9LFtZ",
            "Ratio and Proportion": "https://payhip.com/b/djNVP",
            "Rates": "https://payhip.com/b/pVxqP",
            "Percentages (Basic Calculations)": "https://payhip.com/b/ePmz8",
            "Percentage Change and Interest": "https://payhip.com/b/Ebcut",
            "Reverse Percentages": "https://payhip.com/b/1ZaHA",
            "Using a Calculator": "https://payhip.com/b/L2W09",
            "Time": "https://payhip.com/b/XKUVE",
            "Money": "https://payhip.com/b/fVsJi",
            "Exponential Growth and Decay": "https://payhip.com/b/JrS9d",
            "Surds": "https://payhip.com/b/QTHoU",
            "Introduction to Algebra": "https://payhip.com/b/z4xbu",
            "Simplifying Expressions": "https://payhip.com/b/HU9z8",
            "Expanding Products": "https://payhip.com/b/G9rN4",
            "Factoring Expressions": "https://payhip.com/b/emNE1",
            "Factorising 2": "https://payhip.com/b/ZsgUq",
            "Completing the Square": "https://payhip.com/b/NTGZX",
            "Algebraic Fractions 1": "https://payhip.com/b/2UYz3",
            "Algebraic Fractions 2": "https://payhip.com/b/x02Ge",
            "Factorise and Simplify Rational Expressions": "https://payhip.com/b/V07A3",
            "Indices II": "https://payhip.com/b/0RBC9",
            "Constructing Expressions, Equations and Formulas": "https://payhip.com/b/5gq1m",
            "Solving Linear Equations in One Unknown": "https://payhip.com/b/yxGRl",
            "Fractional Linear Equations": "https://payhip.com/b/8H6Yg",
            "Simultaneous Linear Equations": "https://payhip.com/b/XW1im",
            "Simultaneous Equations (Linear – Quadratic)": "https://payhip.com/b/0CP5n",
            "Simultaneous Equations in Context": "https://payhip.com/b/WZ92k",
            "Quadratic Equations 1": "https://payhip.com/b/elEAX",
            "Non-Factorisable Quadratics": "https://payhip.com/b/vs4gh",
            "Changing the Subject of a Formula": "https://payhip.com/b/Ipgz3",
            "Linear Inequalities": "https://payhip.com/b/HYsu3",
            "Linear Inequalities in Two Variables": "https://payhip.com/b/Of64Q",
            "Sequences": "https://payhip.com/b/5HqEG",
            "Proportion": "https://payhip.com/b/e47ks",
            "Graphs in Practical Situations": "https://payhip.com/b/wyZ3k",
            "Plotting Curved Graphs": "https://payhip.com/b/D82tp",
            "Solving equations graphically": "https://payhip.com/b/EnSXH",
            "Sketching graphs": "https://payhip.com/b/Et8dD",
            "Estimating Gradients and Basic Differentiation": "https://payhip.com/b/Znxo4",
            "Stationary Points": "https://payhip.com/b/pL8io",
            "Functions, Domain, Range and Notation": "https://payhip.com/b/Ttui3",
            "Inverse Functions": "https://payhip.com/b/w0oYj",
            "Composite Functions": "https://payhip.com/b/vU1Tk",
            "Cartesian Coordinates": "https://payhip.com/b/nkrUT",
            "Plotting Linear Graphs": "https://payhip.com/b/gdyY8",
            "Gradient of a Line": "https://payhip.com/b/kqp1P",
            "Length and Midpoint of a Line Segment": "https://payhip.com/b/BO8dT",
            "Equations of Linear Graphs": "https://payhip.com/b/hboKE",
            "Parallel and Perpendicular Lines, Core Concepts": "https://payhip.com/b/WfQZA",
            "Parallel and Perpendicular Lines, Mixed Problems": "https://payhip.com/b/yhHQo",
            "Triangles": "https://payhip.com/b/iCURe",
            "Quadrilaterals": "https://payhip.com/b/JWU5q",
            "Polygons and Circles": "https://payhip.com/b/InbTp",
            "Introduction to 3D Solids and Nets": "https://payhip.com/b/C0nbc",
            "Geometric Constructions and Nets": "https://payhip.com/b/k96M2",
            "Scale Drawings and Bearings": "https://payhip.com/b/yjBmH",
            "Similarity in 2D Shapes": "https://payhip.com/b/R9W2O",
            "Solids and the Linear, Area, Volume Relationship": "https://payhip.com/b/e9UMS",
            "Symmetry in 2D Shapes": "https://payhip.com/b/E0TnV",
            "Symmetry in 3D Shapes": "https://payhip.com/b/8k2wM",
            "Angle Properties": "https://payhip.com/b/hlX9d",
            "Circle Theorems 1": "https://payhip.com/b/1y6TA",
            "Circle Theorems 2": "https://payhip.com/b/xrmnz",
            "Units of Measure": "https://payhip.com/b/Fp1f6",
            "Area and Perimeter": "https://payhip.com/b/XrjWA",
            "Circles": "https://payhip.com/b/K4up0",
            "Arcs and Sectors": "https://payhip.com/b/gR9jw",
            "Surface Areas and Volumes": "https://payhip.com/b/RH1sZ",
            "2D Compound Shapes": "https://payhip.com/b/a1FT0",
            "3D Compound Shapes": "https://payhip.com/b/Y6gsh",
            "Pythagoras Theorem": "https://payhip.com/b/uZ8cD",
            "SOHCAHTOA": "https://payhip.com/b/kXZLe",
            "Exact Trigonometric Values": "https://payhip.com/b/cHHoW",
            "Graphs of Trigonometric Functions": "https://payhip.com/b/VxA7J",
            "Solving Trigonometric Equations": "https://payhip.com/b/ea1Ti",
            "The Sine Rule": "https://payhip.com/b/5UfgG",
            "The Cosine Rule": "https://payhip.com/b/KLYAp",
            "Pythagoras and Trigonometry in 3D": "https://payhip.com/b/udQPT",
            "Transformations": "https://payhip.com/b/U2nMw",
            "Vectors in Two Dimensions": "https://payhip.com/b/oKRjO",
            "Magnitude of a Vector": "https://payhip.com/b/LbBqE",
            "Vector Geometry": "https://payhip.com/b/wzbn9",
            "An Introduction to Probability": "https://payhip.com/b/kMVWL",
            "Relative and Expected Frequencies": "https://payhip.com/b/ug9KE",
            "Probability of Combined Events": "https://payhip.com/b/3AZnV",
            "Conditional Probability": "https://payhip.com/b/XIALH",
            "Data Handling and Interpretation": "https://payhip.com/b/Rwbot",
            "Averages and Measures of Spread (Ungrouped Data)": "https://payhip.com/b/Q8WfX",
            "Averages and Measures of Spread (Grouped Data)": "https://payhip.com/b/reAKG",
            "Statistical Charts and Diagrams": "https://payhip.com/b/xuigq",
            "Scatter Diagrams": "https://payhip.com/b/i5O9W",
            "Cumulative Frequency Diagrams": "https://payhip.com/b/NhqEx",
            "Box and Whisker Plots": "https://payhip.com/b/L5f6Y",
            "Histograms": "https://payhip.com/b/ND5E9"
        }
    },

    async init(mode, tier) {
        this.state.isTeacherMode = (mode === 'audit');
        this.state.tier = tier || this.state.tier;
        localStorage.setItem('bradley_tier', this.state.tier);
        await this.loadAllProblems();
        if (this.state.isTeacherMode) { this.renderAuditList(); } 
        else { this.renderMenu(); }
    },

    async loadAllProblems() {
        this.state.masterVault =[];
        for (const mm of this.state.activeMonths) {
            await this.fetchFile(`problems/${this.state.tier}/2026/${mm}.js`);
        }
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

    updateStats(isCorrect) {
        let stats = JSON.parse(localStorage.getItem('bradley_stats') || '{"totalRight": 0, "todayRight": 0, "todayAttempted": 0, "lastDate": ""}');
        const today = new Date().toISOString().split('T')[0];
        if (stats.lastDate !== today) {
            stats.todayRight = 0;
            stats.todayAttempted = 0;
            stats.lastDate = today;
        }
        stats.todayAttempted++;
        if (isCorrect) {
            stats.todayRight++;
            stats.totalRight = (stats.totalRight || 0) + 1;
        }
        localStorage.setItem('bradley_stats', JSON.stringify(stats));
    },

    getMenuMapping() {
        if (this.state.tier === 'gcse') {
            return [
                { id: "number", label: "Number", areas: ["Number", "Ratio, Proportion & Rates of Change"] },
                { id: "algebra", label: "Algebra", areas: ["Algebra"] },
                { id: "geometry", label: "Geometry", areas: ["Geometry & Measures", "Coordinate Geometry & Geometry"] },
                { id: "stats", label: "Stats & Prob", areas: ["Statistics", "Probability"] }
            ];
        } else {
            return [
                { id: "num", label: "Number & Ratio", areas: ["Number", "Ratio, Proportion & Rates of Change"] },
                { id: "alg", label: "Algebra", areas: ["Algebra", "Differentiation"] },
                { id: "geom", label: "Geometry", areas: ["Geometry & Measures", "Coordinate Geometry & Geometry", "Angles", "Circle Theorems", "Transformations"] },
                { id: "trig", label: "Mensuration & Trigonometry", areas: ["Mensuration", "Trigonometry", "3D Shapes", "SOHCAHTOA", "Sine rule", "Cosine rule"] },
                { id: "vec", label: "Vectors, Stats & Probability", areas: ["Vectors", "Statistics", "Probability"] }
            ];
        }
    },

    renderMenu() {
        const mapping = this.getMenuMapping();
        const stats = JSON.parse(localStorage.getItem('bradley_stats') || '{"todayRight": 0, "todayAttempted": 0}');
        const score = this.state.correctIds.length;
        
        document.getElementById('hub-stage').innerHTML = `
            <div class="info-panel">
                <h3>Today: ${stats.todayRight} / ${stats.todayAttempted} correct</h3>
                <h3 style="color: var(--brand-purple);">Step 1: Choose an Area</h3>
                <div class="menu-grid">
                    ${mapping.map(m => `<button class="menu-btn" onclick="BradleyHub.showDifficultyMenu('${m.id}')">${m.label}</button>`).join('')}
                    <button class="menu-btn" onclick="BradleyHub.showDifficultyMenu('all')">★ Random Exam Mix ★</button>
                </div>
            </div>`;
    },

    showDifficultyMenu(groupId) {
        let diffButtons = '';
        if (this.state.tier === 'gcse') {
            diffButtons = `
                <button class="menu-btn" onclick="BradleyHub.serveArena('${groupId}', '35')">Grades 3 - 5</button>
                <button class="menu-btn" onclick="BradleyHub.serveArena('${groupId}', '46')">Grades 4 - 6</button>
                <button class="menu-btn" onclick="BradleyHub.serveArena('${groupId}', '57')">Grades 5 - 7</button>
                <button class="menu-btn" onclick="BradleyHub.serveArena('${groupId}', '68')">Grades 6 - 8</button>
                <button class="menu-btn" onclick="BradleyHub.serveArena('${groupId}', '79')">Grades 7 - 9</button>
            `;
        } else {
            diffButtons = `
                <button class="menu-btn" onclick="BradleyHub.serveArena('${groupId}', 'EC')">Grades E - C</button>
                <button class="menu-btn" onclick="BradleyHub.serveArena('${groupId}', 'DB')">Grades D - B</button>
                <button class="menu-btn" onclick="BradleyHub.serveArena('${groupId}', 'CA')">Grades C - A</button>
                <button class="menu-btn" onclick="BradleyHub.serveArena('${groupId}', 'BA*')">Grades B - A*</button>
            `;
        }
        
        document.getElementById('hub-stage').innerHTML = `
            <div class="info-panel">
                <h3 style="color: var(--brand-purple);">Step 2: Select Target Difficulty</h3>
                <div class="menu-grid">
                    <button class="menu-btn" onclick="BradleyHub.serveArena('${groupId}', 'all')">★ Any Difficulty ★</button>
                    ${diffButtons}
                </div>
                <button onclick="BradleyHub.renderMenu()">← Back</button>
            </div>
        `;
    },

    serveArena(groupId, targetDifficulty = 'all') {
        this.state.currentGroup = groupId;
        const mapping = this.getMenuMapping();
        const group = mapping.find(m => m.id === groupId);

        let pool = this.state.masterVault.filter(p => {
            const unseen = !this.state.correctIds.includes(p.id);
            let diffMatch = true;
            if (targetDifficulty !== 'all' && p.difficulty) {
                let grades = p.difficulty.replace(/[^A-Za-z0-9*]/g, ' ').split(/\s+/).filter(Boolean);
                const targetMap = { '35': ['3', '4', '5'], '46': ['4', '5', '6'], '57': ['5', '6', '7'], '68': ['6', '7', '8'], '79': ['7', '8', '9'], 'EC': ['E', 'D', 'C'], 'DB': ['D', 'C', 'B'], 'CA': ['C', 'B', 'A'], 'BA*': ['B', 'A', 'A*'] };
                const validGrades = targetMap[targetDifficulty] ||[];
                diffMatch = grades.some(g => validGrades.includes(g));
            }
            if (groupId === 'all') return unseen && diffMatch;
            const areaMatch = group.areas.includes(p.major_area) || group.areas.includes(p.topic);
            return areaMatch && unseen && diffMatch;
        });

        if (pool.length === 0) {
            document.getElementById('hub-stage').innerHTML = `<div><h2>All clear for this grade!</h2><button onclick="BradleyHub.renderMenu()">Menu</button></div>`;
            return;
        }

        const prob = pool[Math.floor(Math.random() * pool.length)];
        const stage = document.getElementById('hub-stage');
        stage.innerHTML = '';
        stage.appendChild(this.createInteractiveCard(prob));
        if (window.MathJax) MathJax.typesetPromise();
    },

    checkAnswer(probId, isCorrect, feedbackHTML) {
        this.updateStats(isCorrect);
        const feedbackBox = document.getElementById(`feedback-${probId}`);
        feedbackBox.style.display = "block";
        feedbackBox.innerHTML = feedbackHTML;
        this.revealSolution(probId, false);
    },

    revealSolution(probId, isAudit) {
        document.getElementById(`sol-${probId}`).style.display = 'block';
        document.getElementById(`action-area-${probId}`).style.display = 'none';
        if (!this.state.correctIds.includes(probId)) {
            this.state.correctIds.push(probId);
            localStorage.setItem('bradley_correct_ids', JSON.stringify(this.state.correctIds));
        }
    },

    createInteractiveCard(prob) {
        const card = document.createElement('div');
        const correct = prob.steps[prob.steps.length - 1].split("Final Answer:")[1].replace(/<[^>]*>/g, "").trim();

        card.innerHTML = `
            <div class="question-box">${prob.q}</div>
            <div id="action-area-${prob.id}"><button onclick="BradleyHub.revealOptions('${prob.id}')">Show Answer Options</button></div>
            <div id="options-${prob.id}" style="display:none;">
                ${prob.wrong_options.map(wo => `<button onclick="BradleyHub.checkAnswer('${prob.id}', false, '${wo.feedback}')">${wo.ans}</button>`).join('')}
                <button onclick="BradleyHub.checkAnswer('${prob.id}', true, 'Correct!')">${correct}</button>
            </div>
            <div id="feedback-${prob.id}" style="display:none;"></div>
            <div id="sol-${prob.id}" style="display:none;">
                ${prob.steps.join('<br>')}
                <div class="insight">${prob.bradley_insight.content}</div>
                <button onclick="BradleyHub.serveArena('${this.state.currentGroup}')">Next Question</button>
            </div>
        `;
        return card;
    },
    
    revealOptions(id) {
        document.getElementById(`options-${id}`).style.display = 'block';
        document.getElementById(`action-area-${id}`).style.display = 'none';
    }
};