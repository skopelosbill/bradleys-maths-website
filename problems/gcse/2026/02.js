const problemBank = [
    // 1 Feb
    {
        "id": "002009",
        "date": "1 Feb 2026",
        "major_area": "Algebra",
        "topic": "Surds",
        "subtopic": "Simplifying surds",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Expand and simplify $(3 + \\sqrt{5})^2$.",
        "img": "",
        "steps": [
            "Write as double brackets: $(3 + \\sqrt{5})(3 + \\sqrt{5})$.",
            "Expand: $9 + 3\\sqrt{5} + 3\\sqrt{5} + 5$.",
            "Collect like terms: $(9+5) + (3\\sqrt{5} + 3\\sqrt{5})$.",
            "Final Answer: $$14 + 6\\sqrt{5}$$"
        ]
    },
    // 2 Feb
    {
        "id": "002010",
        "date": "2 Feb 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Completing the square",
        "difficulty": "8/9",
        "q": "Complete the square for $3x^2 - 6x + 1$. Hence, find the coordinates of the minimum point of the graph $y = 3x^2 - 6x + 1$.",
        "img": "",
        "steps": [
            "Factor out 3: $3(x^2 - 2x) + 1$.",
            "Complete square inside: $3[(x-1)^2 - 1] + 1$.",
            "Simplify: $3(x-1)^2 - 3 + 1 = 3(x-1)^2 - 2$.",
            "The minimum point is $(1, -2)$.",
            "Final Answer: $$(1, -2)$$"
        ]
    },
    // 3 Feb
    {
        "id": "002011",
        "date": "3 Feb 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Ratio",
        "subtopic": "Simplifying ratios",
        "difficulty": "4/5",
        "q": "Given $x:y = 1:2$ and $y:z = 3:5$, find the ratio $x:z$.",
        "img": "",
        "steps": [
            "Make $y$ common in both ratios (LCM of 2 and 3 is 6).",
            "Scale $x:y$ to $3:6$. Scale $y:z$ to $6:10$.",
            "Combine: $x:y:z = 3:6:10$.",
            "Final Answer: $$3:10$$"
        ]
    },
    // 4 Feb
    {
        "id": "002012",
        "date": "4 Feb 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Roots from graphs",
        "difficulty": "6/7",
        "notice": "Iteration.",
        "q": "Use $x_{n+1} = \\sqrt[3]{x_n + 7}$ with $x_0 = 2$ to find the value of $x_1$.",
        "img": "",
        "steps": [
            "Substitute $x_0$ into the formula: $x_1 = \\sqrt[3]{2 + 7}$.",
            "Calculate: $\\sqrt[3]{9}$.",
            "Final Answer: $$2.08\\text{ (2 d.p.)}$$"
        ]
    },
    // 5 Feb
    {
        "id": "002013",
        "date": "5 Feb 2026",
        "major_area": "Statistics",
        "topic": "Histograms",
        "subtopic": "Frequency density",
        "difficulty": "6/7",
        "q": "A histogram has two bars. Bar 1: Class $0 < w \\le 10$, Freq $5$. Bar 2: Class $10 < w \\le 30$, Freq $20$. Which bar is taller?",
        "img": "",
        "steps": [
            "Frequency Density (FD) = Frequency / Class Width.",
            "Bar 1 FD: $5 \\div 10 = 0.5$.",
            "Bar 2 FD: $20 \\div 20 = 1.0$.",
            "Final Answer: $$10-30\\text{ is taller (FD = 1.0)}$$"
        ]
    },
    // 6 Feb
    {
        "id": "002014",
        "date": "6 Feb 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Line–Curve Intersections",
        "difficulty": "6/7",
        "q": "Solve simultaneously to find the values of $x$: $y = x^2$ and $y = 2x + 3$.",
        "img": "",
        "steps": [
            "Equate $y$ values: $x^2 = 2x + 3$.",
            "Rearrange to quadratic form: $x^2 - 2x - 3 = 0$.",
            "Factorise: $(x-3)(x+1) = 0$.",
            "Final Answer: $$x=3, x=-1$$"
        ]
    },
    // 7 Feb
    {
        "id": "002015",
        "date": "7 Feb 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Compound interest",
        "difficulty": "4/5",
        "q": "£5000 is invested at 2% compound interest for 3 years. Calculate the total value.",
        "img": "",
        "steps": [
            "Multiplier = $1.02$.",
            "Formula: $5000 \\times 1.02^3$.",
            "Calculate: $5000 \\times 1.061208$.",
            "Final Answer: $$£5306.04$$"
        ]
    },
    // 8 Feb
    {
        "id": "002016",
        "date": "8 Feb 2026",
        "major_area": "Geometry & Measures",
        "topic": "Polygons",
        "subtopic": "Exterior angles",
        "difficulty": "4/5",
        "q": "The exterior angle of a regular polygon is $18^\\circ$. How many sides does it have?",
        "img": "images/exterior_angle.PNG",
        "steps": [
            "Sum of exterior angles is always $360^\\circ$.",
            "Number of sides $n = 360 \\div 18$.",
            "Final Answer: $$20\\text{ sides}$$"
        ]
    },
    // 9 Feb
    {
        "id": "002017",
        "date": "9 Feb 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Trigonometric graphs",
        "difficulty": "6/7",
        "q": "What is the maximum value of the function $y = 3 \\sin x$?",
        "img": "",
        "steps": [
            "The maximum value of $\\sin x$ is 1.",
            "Multiply by the amplitude (3).",
            "Final Answer: $$3$$"
        ]
    },
    // 10 Feb
    {
        "id": "002018",
        "date": "10 Feb 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Reverse percentages",
        "difficulty": "4/5",
        "q": "An item is marked 20% off in a sale. If the sale price is £40, calculate the original price.",
        "img": "",
        "steps": [
            "Sale price represents 80% of original ($100\\% - 20\\%$).",
            "Original price $= 40 \\div 0.8$.",
            "Final Answer: $$£50$$"
        ]
    },

// 11 Feb
    {
        "id": "002019",
        "date": "11 Feb 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Transformations of graphs",
        "difficulty": "6/7",
        "q": "Describe fully the transformation that maps the graph of $y = f(x)$ onto the graph of $y = f(x - 2)$.",
        "img": "",
        "steps": [
            "Transformations inside the bracket affect the $x$-coordinates in the opposite way to the sign.",
            "The term $-2$ inside the bracket indicates a horizontal shift.",
            "This results in a translation to the right by $2$ units.",
            "Final Answer: $$\\text{Translation by the vector } \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$$"
        ]
    },
    // 12 Feb
    {
        "id": "002020",
        "date": "12 Feb 2026",
        "major_area": "Algebra",
        "topic": "Sequences",
        "subtopic": "nth term",
        "difficulty": "4/5",
        "q": "The $n^{th}$ term of a sequence is given by $2n^2 + 1$.<br>(a) Find the $3^{rd}$ term.<br>(b) Is $51$ a term in this sequence? Show your working.",
        "img": "",
        "steps": [
            "(a) Substitute $n = 3$: $2(3^2) + 1 = 2(9) + 1 = 19$.",
            "(b) Set the expression equal to 51: $2n^2 + 1 = 51$.",
            "(b) Solve for $n$: $2n^2 = 50 \\implies n^2 = 25$.",
            "(b) Since $n = 5$ is a positive integer, 51 is the $5^{th}$ term.",
            "Final Answer: $$(a)\\ 19,\\ (b)\\ \\text{Yes, the } 5^{th} \\text{ term}$$"
        ]
    },
    // 13 Feb
    {
        "id": "002021",
        "date": "13 Feb 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Compound Measures",
        "subtopic": "Density",
        "difficulty": "4/5",
        "q": "An object has a mass of $2\\text{ kg}$ and a volume of $400\\text{ cm}^3$.<br>Calculate the density of the object in $\\text{g/cm}^3$.",
        "img": "",
        "steps": [
            "Convert mass to grams to match the required units: $2\\text{ kg} = 2000\\text{ g}$.",
            "Use the formula: $\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}}$.",
            "Calculate: $2000 \\div 400$.",
            "Final Answer: $$5\\text{ g/cm}^3$$"
        ]
    },
    // 14 Feb
    {
        "id": "002022",
        "date": "14 Feb 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Distance",
        "difficulty": "4/5",
        "notice": "Equation of a circle.",
        "q": "Find the equation of a circle with centre $(0,0)$ and a radius of $5$.",
        "img": "",
        "steps": [
            "The general equation for a circle centered at the origin is $x^2 + y^2 = r^2$.",
            "Substitute $r = 5$.",
            "Calculate $r^2 = 25$.",
            "Final Answer: $$x^2 + y^2 = 25$$"
        ]
    },
    // 15 Feb
    {
        "id": "002023",
        "date": "15 Feb 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations in standard form",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Calculate $\\frac{8 \\times 10^5}{2 \\times 10^{-2}}$. Give your answer in standard form.",
        "img": "",
        "steps": [
            "Divide the leading numbers: $8 \\div 2 = 4$.",
            "Divide the powers of ten using index laws: $10^5 \\div 10^{-2} = 10^{5 - (-2)}$.",
            "Simplify index: $10^7$.",
            "Combine results: $4 \\times 10^7$.",
            "Final Answer: $$4 \\times 10^7$$"
        ]
    },
    // 16 Feb
    {
        "id": "002024",
        "date": "16 Feb 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Surface area",
        "difficulty": "4/5",
        "notice": "Arc length.",
        "q": "A sector of a circle has an angle of $60^\\circ$ and a radius of $6\\text{ cm}$.<br>Calculate the length of the arc. Give your answer in terms of $\\pi$.",
        "img": "images/arc_length.PNG",
        "steps": [
            "Identify the fraction of the circle: $\\frac{60}{360} = \\frac{1}{6}$.",
            "Calculate the full circumference: $C = \\pi d = 12\\pi$.",
            "Multiply by the fraction: $\\frac{1}{6} \\times 12\\pi$.",
            "Final Answer: $$2\\pi\\text{ cm}$$"
        ]
    },
    // 17 Feb
    {
        "id": "002025",
        "date": "17 Feb 2026",
        "major_area": "Number",
        "topic": "Decimals",
        "subtopic": "Converting between decimals and fractions",
        "difficulty": "6/7",
        "notice": "Non-calculator question.",
        "q": "Write the recurring decimal $0.4\\dot{5}$ as a fraction in its simplest form.",
        "img": "",
        "steps": [
            "Let $x = 0.4555...$",
            "Multiply by 10: $10x = 4.555...$",
            "Multiply by 100: $100x = 45.555...$",
            "Subtract: $100x - 10x = 45.555 - 4.555 \\implies 90x = 41$.",
            "Solve for $x$: $x = \\frac{41}{90}$.",
            "Final Answer: $$\\frac{41}{90}$$"
        ]
    },
    // 18 Feb
    {
        "id": "002026",
        "date": "18 Feb 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Scale factors",
        "difficulty": "6/7",
        "q": "Two mathematically similar solids have a length ratio of $1:3$.<br>Calculate the ratio of their volumes.",
        "img": "",
        "steps": [
            "If the linear scale factor is $k$, the volume scale factor is $k^3$.",
            "Given $k = 3$.",
            "Calculate $3^3 = 27$.",
            "Final Answer: $$1:27$$"
        ]
    },
    // 19 Feb
    {
        "id": "002027",
        "date": "19 Feb 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Simplifying",
        "difficulty": "6/7",
        "q": "Simplify fully: $$\\frac{x^2 - 9}{x^2 + 5x + 6}$$",
        "img": "",
        "steps": [
            "Factorise the numerator (Difference of Two Squares): $(x-3)(x+3)$.",
            "Factorise the denominator: $(x+2)(x+3)$.",
            "Cancel the common factor $(x+3)$.",
            "Final Answer: $$\\frac{x - 3}{x + 2}$$"
        ]
    },
    // 20 Feb
    {
        "id": "002028",
        "date": "20 Feb 2026",
        "major_area": "Probability",
        "topic": "Basic Probability",
        "subtopic": "Mutually exclusive events",
        "difficulty": "4/5",
        "notice": "Product rule for counting.",
        "q": "A restaurant offers 3 starters, 4 main courses, and 2 desserts.<br>Calculate the total number of different 3-course meals possible.",
        "img": "",
        "steps": [
            "Apply the product rule for counting: multiply the number of choices for each stage.",
            "Calculation: $3 \\times 4 \\times 2$.",
            "Final Answer: $$24$$"
        ]
    },
    // 21 Feb
    {
        "id": "002029",
        "date": "21 Feb 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "4/5",
        "q": "Line $A$ has a gradient of $3$.<br>Line $B$ is perpendicular to Line $A$.<br>Find the gradient of Line $B$.",
        "img": "",
        "steps": [
            "The product of the gradients of perpendicular lines is $-1$.",
            "Take the negative reciprocal of 3.",
            "Final Answer: $$-\\frac{1}{3}$$"
        ]
    },
    // 22 Feb
    {
        "id": "002030",
        "date": "22 Feb 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Fractional indices",
        "difficulty": "6/7",
        "notice": "Non-calculator question.",
        "q": "Evaluate $16^{-\\frac{3}{2}}$.",
        "img": "",
        "steps": [
            "Deal with the negative index by taking the reciprocal: $\\frac{1}{16^{3/2}}$.",
            "Apply the fractional index (square root): $\\sqrt{16} = 4$.",
            "Apply the power: $4^3 = 64$.",
            "Final Answer: $$\\frac{1}{64}$$"
        ]
    },
    // 23 Feb
    {
        "id": "002031",
        "date": "23 Feb 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Upper and lower bounds",
        "difficulty": "8/9",
        "q": "Calculate the maximum possible value of $V$ where $V = \\frac{10}{x}$ and $x = 2$ correct to the nearest integer.",
        "img": "",
        "steps": [
            "To maximize a fraction, you must minimize the denominator ($x$).",
            "Identify the lower bound of $x$: nearest integer $2$ means $LB = 1.5$.",
            "Calculate: $10 \\div 1.5$.",
            "Final Answer: $$6.\\dot{6}$$"
        ]
    },
    // 24 Feb
    {
        "id": "002032",
        "date": "24 Feb 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Parallel vectors",
        "difficulty": "6/7",
        "q": "$\\overrightarrow{AB} = 2\\mathbf{a}$ and $\\overrightarrow{BC} = 3\\mathbf{a}$.<br>Explain why $A$, $B$ and $C$ must lie on a straight line.",
        "img": "",
        "steps": [
            "Both vectors are scalar multiples of the same vector $\\mathbf{a}$, which means they are parallel.",
            "Since they share a common point ($B$), they must be collinear (on the same line).",
            "Final Answer: $$\\text{Parallel and share a common point}$$"
        ]
    },
    // 25 Feb
    {
        "id": "002033",
        "date": "25 Feb 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "SOHCAHTOA",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Evaluate $\\tan(45^\\circ) + \\sin(90^\\circ)$.",
        "img": "",
        "steps": [
            "Recall exact trigonometric values.",
            "$\\tan(45^\\circ) = 1$.",
            "$\\sin(90^\\circ) = 1$.",
            "Final Answer: $$2$$"
        ]
    },
    // 26 Feb
    {
        "id": "002034",
        "date": "26 Feb 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Cyclic quadrilaterals",
        "difficulty": "4/5",
        "q": "$ABCD$ is a cyclic quadrilateral. Angle $A = 80^\\circ$.<br>Find the size of angle $C$.",
        "img": "images/cyclic_quad.png",
        "steps": [
            "Opposite angles in a cyclic quadrilateral sum to $180^\\circ$.",
            "Calculate: $180 - 80$.",
            "Final Answer: $$100^\\circ$$"
        ]
    },
    // 27 Feb
    {
        "id": "002035",
        "date": "27 Feb 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Graphical inequalities",
        "difficulty": "6/7",
        "q": "A region is defined by $y > x$ and $x + y < 4$.<br>Determine if the point $(1,1)$ lies within this region.",
        "img": "images/region.PNG",
        "steps": [
            "Test first inequality: is $1 > 1$? No, it is equal to it.",
            "Since it does not satisfy $y > x$ (it lies on the boundary line), it is not in the region.",
            "Final Answer: $$\\text{No}$$"
        ]
    },
    // 28 Feb
    {
        "id": "002036",
        "date": "28 Feb 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Positive indices",
        "difficulty": "6/7",
        "q": "Solve for $x$: $3^{2x} = 27$.",
        "img": "",
        "steps": [
            "Express $27$ as a power of 3: $3^3$.",
            "Equate the indices: $2x = 3$.",
            "Solve for $x$: $3 \\div 2$.",
            "Final Answer: $$1.5$$"
        ]
    }
];