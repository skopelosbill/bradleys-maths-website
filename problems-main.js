const anchorDate = new Date("2026-01-24");
const problemBank = [
 
    // 24 Jan
    {
        "id": "002001",
        "date": "24 Jan 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "General Proof",
        "difficulty": "8/9",
        "notice": "Non-calculator question.",
        "q": "Prove algebraically that $(n+1)^2 - (n-1)^2$ is always a multiple of 4 for all positive integer values of $n$.",
        "img": "",
        "steps": [
            "Expand $(n+1)^2$: $n^2 + 2n + 1$.",
            "Expand $(n-1)^2$: $n^2 - 2n + 1$.",
            "Subtract: $(n^2 + 2n + 1) - (n^2 - 2n + 1)$.",
            "Simplify: $n^2 - n^2 + 2n - (-2n) + 1 - 1 = 4n$.",
            "Conclusion: Since $4n = 4(n)$, the expression is always a multiple of 4.",
            "Final Answer: $$4n$$"
        ]
    },
    // 25 Jan
    {
        "id": "002002",
        "date": "25 Jan 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Vector addition",
        "difficulty": "6/7",
        "notice": "",
        "q": "$M$ is the midpoint of the line $AB$.<br>$\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$.<br>Find $\\overrightarrow{OM}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
        "img": "",
        "steps": [
            "Find vector $\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}$.",
            "Midpoint $M$ means $\\overrightarrow{AM} = \\frac{1}{2}\\overrightarrow{AB} = \\frac{1}{2}(\\mathbf{b} - \\mathbf{a})$.",
            "Use path $\\overrightarrow{OM} = \\overrightarrow{OA} + \\overrightarrow{AM}$.",
            "Substitute: $\\mathbf{a} + \\frac{1}{2}\\mathbf{b} - \\frac{1}{2}\\mathbf{a}$.",
            "Final Answer: $$\\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$$"
        ]
    },
    // 26 Jan
    {
        "id": "002003",
        "date": "26 Jan 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Reciprocal graphs",
        "difficulty": "6/7",
        "notice": "Inverse Functions.",
        "q": "The function $f(x) = \\frac{1}{x+2}$.<br>Find the inverse function $f^{-1}(x)$.",
        "img": "",
        "steps": [
            "Let $y = \\frac{1}{x+2}$.",
            "Swap $x$ and $y$: $x = \\frac{1}{y+2}$.",
            "Multiply by $(y+2)$: $x(y+2) = 1$.",
            "Divide by $x$: $y+2 = \\frac{1}{x}$.",
            "Subtract 2: $y = \\frac{1}{x} - 2$.",
            "Final Answer: $$f^{-1}(x) = \\frac{1}{x} - 2$$"
        ]
    },
    // 27 Jan
    {
        "id": "002004",
        "date": "27 Jan 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Area of triangle 1/2 ab sin C",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Calculate the area of a triangle with sides $6\\text{ cm}$ and $8\\text{ cm}$ and an angle of $30^\\circ$ between them.",
        "img": "images/triangle_area.png",
        "steps": [
            "Use Area formula: $\\frac{1}{2}ab\\sin C$.",
            "Substitute: $\\frac{1}{2} \\times 6 \\times 8 \\times \\sin(30^\\circ)$.",
            "Recall $\\sin(30^\\circ) = 0.5$.",
            "Calculate: $24 \\times 0.5 = 12$.",
            "Final Answer: $$12\\text{ cm}^2$$"
        ]
    },
    // 28 Jan
    {
        "id": "002005",
        "date": "28 Jan 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Positive indices",
        "difficulty": "6/7",
        "q": "Given that $2^x \\times 4^y = 8$, express $x$ in terms of $y$.",
        "img": "",
        "steps": [
            "Convert to base 2: $4 = 2^2$ and $8 = 2^3$.",
            "Rewrite: $2^x \\times (2^2)^y = 2^3$.",
            "Apply Index Laws: $2^x \\times 2^{2y} = 2^3 \\implies 2^{x+2y} = 2^3$.",
            "Equate powers: $x + 2y = 3$.",
            "Final Answer: $$x = 3 - 2y$$"
        ]
    },
    // 29 Jan
    {
        "id": "002006",
        "date": "29 Jan 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams",
        "subtopic": "Without replacement",
        "difficulty": "6/7",
        "q": "A bag contains 3 Red and 7 Blue counters. Two are picked at random without replacement. Find the probability they are the same colour.",
        "img": "",
        "steps": [
            "$P(RR) = \\frac{3}{10} \\times \\frac{2}{9} = \\frac{6}{90}$.",
            "$P(BB) = \\frac{7}{10} \\times \\frac{6}{9} = \\frac{42}{90}$.",
            "Add: $\\frac{6}{90} + \\frac{42}{90} = \\frac{48}{90}$.",
            "Simplify: $\\frac{8}{15}$.",
            "Final Answer: $$\\frac{8}{15}$$"
        ]
    },
    // 30 Jan
    {
        "id": "002007",
        "date": "30 Jan 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Upper and lower bounds",
        "difficulty": "6/7",
        "notice": "Non-calculator question.",
        "q": "$x = 10$ and $y = 5$, both rounded to 1 significant figure. Calculate the Upper Bound of $x - y$.",
        "img": "",
        "steps": [
            "1sf bounds for $x=10$: $LB=5, UB=15$.",
            "1sf bounds for $y=5$: $LB=4.5, UB=5.5$.",
            "To maximize $x-y$, use $UB_x - LB_y$.",
            "Calculate: $15 - 4.5 = 10.5$.",
            "Final Answer: $$10.5$$"
        ]
    },
    // 31 Jan
    {
        "id": "002008",
        "date": "31 Jan 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "8/9",
        "q": "Find the gradient of the tangent to the circle $x^2 + y^2 = 25$ at the point $(3, 4)$.",
        "img": "",
        "steps": [
            "Radius gradient from $(0,0)$ to $(3,4)$: $m = \\frac{4-0}{3-0} = \\frac{4}{3}$.",
            "The tangent is perpendicular to the radius at the point of contact.",
            "Perpendicular gradient is the negative reciprocal: $-\\frac{3}{4}$.",
            "Final Answer: $$-\\frac{3}{4}$$"
        ]
    },
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
    },
// 1 Mar
    {
        "id": "002037",
        "date": "1 Mar 2026",
        "major_area": "Geometry & Measures",
        "topic": "Pythagoras",
        "subtopic": "Finding the hypotenuse",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Triangle $ABC$ is right-angled at $A$. $AB = 6\\text{ cm}$ and $AC = 8\\text{ cm}$.<br>(a) Calculate the length of $BC$.<br>(b) Find the area of the triangle.",
        "img": "images/1_Mar_G.png",
        "steps": [
            "(a) Use Pythagoras' Theorem: $BC^2 = AB^2 + AC^2$.",
            "(a) Substitute: $6^2 + 8^2 = 36 + 64 = 100$.",
            "(a) Square root: $BC = \\sqrt{100} = 10\\text{ cm}$.",
            "(b) Area of a right-angled triangle $= \\frac{1}{2} \\times \\text{base} \\times \\text{height}$.",
            "(b) Calculate: $\\frac{1}{2} \\times 6 \\times 8 = 24$.",
            "Final Answer: $$10\\text{ cm},\\ 24\\text{ cm}^2$$"
        ]
    },
    // 2 Mar
    {
        "id": "002038",
        "date": "2 Mar 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Compound interest",
        "difficulty": "4/5",
        "q": "£1500 is invested at 4% compound interest per year. Calculate the total value of the investment after 2 years.",
        "img": "",
        "steps": [
            "Identify the multiplier for a 4% increase: $1 + 0.04 = 1.04$.",
            "Use the formula: $\\text{Principal} \\times \\text{multiplier}^n$.",
            "Substitute values: $1500 \\times 1.04^2$.",
            "Calculate: $1500 \\times 1.0816$.",
            "Final Answer: $$£1622.40$$"
        ]
    },
    // 3 Mar
    {
        "id": "002039",
        "date": "3 Mar 2026",
        "major_area": "Algebra",
        "topic": "Expanding Brackets",
        "subtopic": "Single brackets",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Expand and simplify: $4(3x - 2) - 5(x + 1)$.",
        "img": "",
        "steps": [
            "Expand the first bracket: $12x - 8$.",
            "Expand the second bracket (be careful with the negative): $-5x - 5$.",
            "Collect like terms: $12x - 5x$ and $-8 - 5$.",
            "Final Answer: $$7x - 13$$"
        ]
    },
    // 4 Mar
    {
        "id": "002040",
        "date": "4 Mar 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "SOHCAHTOA",
        "difficulty": "4/5",
        "q": "In a right-angled triangle, angle $A = 35^\\circ$. The side opposite angle $A$ is $7\\text{ cm}$. Calculate the length of the hypotenuse to 1 decimal place.",
        "img": "images/4_Mar_G.png",
        "steps": [
            "Identify the correct ratio: $\\sin(\\theta) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$.",
            "Substitute known values: $\\sin(35^\\circ) = \\frac{7}{h}$.",
            "Rearrange for $h$: $h = \\frac{7}{\\sin(35^\\circ)}$.",
            "Calculate: $7 \\div 0.5735... = 12.204...$.",
            "Final Answer: $$12.2\\text{ cm}$$"
        ]
    },
    // 5 Mar
    {
        "id": "002041",
        "date": "5 Mar 2026",
        "major_area": "Number",
        "topic": "Powers & Roots",
        "subtopic": "Index notation",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Simplify $3^4 \\times 3^2$. Give your answer as a power of 3.",
        "img": "",
        "steps": [
            "Recall the multiplication law of indices: $a^m \\times a^n = a^{m+n}$.",
            "Add the exponents: $4 + 2 = 6$.",
            "Final Answer: $$3^6$$"
        ]
    },
    // 6 Mar
    {
        "id": "002042",
        "date": "6 Mar 2026",
        "major_area": "Algebra",
        "topic": "Linear Equations",
        "subtopic": "Simultaneous Equations",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Solve the simultaneous equations:<br>$2x + y = 7$<br>$x - y = 2$.",
        "img": "",
        "steps": [
            "Since the $y$ coefficients are $+1$ and $-1$, add the two equations together.",
            "$(2x + x) + (y - y) = 7 + 2 \\implies 3x = 9$.",
            "Solve for $x$: $x = 3$.",
            "Substitute $x=3$ into the second equation: $3 - y = 2$.",
            "Solve for $y$: $y = 1$.",
            "Final Answer: $$x = 3,\\ y = 1$$"
        ]
    },
    // 7 Mar
    {
        "id": "002043",
        "date": "7 Mar 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Converting to/from standard form",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Write $0.00056$ in standard form.",
        "img": "",
        "steps": [
            "Move the decimal point to create a number between 1 and 10: $5.6$.",
            "Count the number of places moved to the right: 4 places.",
            "Since the original number is less than 1, the exponent is negative.",
            "Final Answer: $$5.6 \\times 10^{-4}$$"
        ]
    },
    // 8 Mar
    {
        "id": "002044",
        "date": "8 Mar 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Percentage change",
        "difficulty": "4/5",
        "q": "A jacket costing £80 is reduced by 15% in a sale. Calculate the sale price.",
        "img": "",
        "steps": [
            "Find 10% of £80: £8. Find 5% of £80: £4.",
            "Total reduction (15%): $8 + 4 = £12$.",
            "Subtract reduction from original price: $80 - 12$.",
            "Alternative method: $80 \\times 0.85 = 68$.",
            "Final Answer: $$£68$$"
        ]
    },
    // 9 Mar
    {
        "id": "002045",
        "date": "9 Mar 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Angle at the centre",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "In a circle with centre $O$, angle $\\angle AOB = 110^\\circ$. Points $A, B$ and $C$ lie on the circumference.<br>Find the size of angle $\\angle ACB$.",
        "img": "images/9_Mar_G.png",
        "steps": [
            "Identify the theorem: The angle at the centre is twice the angle at the circumference.",
            "Identify the angle at the circumference: $\\angle ACB$.",
            "Calculate: $110 \\div 2$.",
            "Final Answer: $$55^\\circ$$"
        ]
    },
    // 10 Mar
    {
        "id": "002046",
        "date": "10 Mar 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Quadratic factorising",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Solve $x^2 - 5x + 6 = 0$ by factorising.",
        "img": "",
        "steps": [
            "Find two numbers that multiply to $+6$ and add to $-5$.",
            "The numbers are $-2$ and $-3$.",
            "Write in factorised form: $(x - 2)(x - 3) = 0$.",
            "Set each bracket to zero: $x - 2 = 0$ and $x - 3 = 0$.",
            "Final Answer: $$x = 2,\\ x = 3$$"
        ]
    },
    // 11 Mar
    {
        "id": "002047",
        "date": "11 Mar 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Volume",
        "difficulty": "4/5",
        "q": "A cylinder has a radius of $4\\text{ cm}$ and a height of $10\\text{ cm}$.<br>Calculate the volume of the cylinder. Give your answer in terms of $\\pi$.",
        "img": "images/11_Mar_G.png",
        "steps": [
            "Use the formula for volume of a cylinder: $V = \\pi r^2 h$.",
            "Substitute values: $\\pi \\times 4^2 \\times 10$.",
            "Square the radius: $4^2 = 16$.",
            "Multiply: $16 \\times 10 = 160$.",
            "Final Answer: $$160\\pi\\text{ cm}^3$$"
        ]
    },
    // 12 Mar
    {
        "id": "002048",
        "date": "12 Mar 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Ratio",
        "subtopic": "Sharing in a ratio",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Alan and Barbara share £84 in the ratio $3:4$. How much does each receive?",
        "img": "",
        "steps": [
            "Find the total number of parts: $3 + 4 = 7$.",
            "Find the value of one part: $84 \\div 7 = 12$.",
            "Alan's share: $3 \\times 12 = 36$.",
            "Barbara's share: $4 \\times 12 = 48$.",
            "Final Answer: $$\\text{Alan: } £36,\\ \\text{Barbara: } £48$$"
        ]
    },
    // 13 Mar
    {
        "id": "002049",
        "date": "13 Mar 2026",
        "major_area": "Statistics",
        "topic": "Scatter Graphs",
        "subtopic": "Correlation",
        "difficulty": "4/5",
        "q": "A scatter graph shows the relationship between hours studied ($x$) and test score ($y$). As $x$ increases, $y$ also increases. Describe the correlation.",
        "img": "images/13_Mar_G.png",
        "steps": [
            "Check the trend of the data points.",
            "Since both variables increase together, the gradient of a line of best fit would be positive.",
            "Final Answer: $$\\text{Positive Correlation}$$"
        ]
    },
    // 14 Mar
    {
        "id": "002050",
        "date": "14 Mar 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Solving inequalities",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Solve the inequality: $3x - 4 > 11$.",
        "img": "",
        "steps": [
            "Add 4 to both sides: $3x > 15$.",
            "Divide by 3: $x > 5$.",
            "Final Answer: $$x > 5$$"
        ]
    },
    // 15 Mar
    {
        "id": "002051",
        "date": "15 Mar 2026",
        "major_area": "Geometry & Measures",
        "topic": "Transformations",
        "subtopic": "Translation",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "Triangle $A$ has vertices at $(1,2)$, $(3,2)$, and $(2,5)$.<br>Triangle $B$ is the image of $A$ after a translation by the vector $\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$.<br>Find the coordinates of the vertices of Triangle $B$.",
        "img": "",
        "steps": [
            "Add the translation vector components $(x+4, y-1)$ to each vertex.",
            "Vertex 1: $(1+4, 2-1) = (5,1)$.",
            "Vertex 2: $(3+4, 2-1) = (7,1)$.",
            "Vertex 3: $(2+4, 5-1) = (6,4)$.",
            "Final Answer: $$(5,1),\\ (7,1),\\ (6,4)$$"
        ]
    },
// 16 Mar
    {
        "id": "002052",
        "date": "16 Mar 2026",
        "major_area": "Probability",
        "topic": "Combined Probability",
        "subtopic": "Without replacement",
        "difficulty": "6/7",
        "notice": "Non-calculator question.",
        "q": "A bag contains 3 red counters and 2 blue counters.<br>Two counters are taken at random without replacement.<br>Find the probability that the two counters are different colours.",
        "img": "",
        "steps": [
            "Calculate $P(RB) = \\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20}$.",
            "Calculate $P(BR) = \\frac{2}{5} \\times \\frac{3}{4} = \\frac{6}{20}$.",
            "Add the two mutually exclusive outcomes: $\\frac{6}{20} + \\frac{6}{20} = \\frac{12}{20}$.",
            "Simplify the fraction.",
            "Final Answer: $$\\frac{3}{5}$$"
        ]
    },
    // 17 Mar
    {
        "id": "002053",
        "date": "17 Mar 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Upper and lower bounds",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "A length is measured as $8.4\\text{ cm}$ to the nearest $0.1\\text{ cm}$.<br>(a) Write down the lower bound.<br>(b) Write down the upper bound.",
        "img": "",
        "steps": [
            "The degree of accuracy is $0.1$, so the error interval is $\\pm 0.05$.",
            "(a) Lower Bound: $8.4 - 0.05 = 8.35$.",
            "(b) Upper Bound: $8.4 + 0.05 = 8.45$.",
            "Final Answer: $$LB = 8.35,\\ UB = 8.45$$"
        ]
    },
    // 18 Mar
    {
        "id": "002054",
        "date": "18 Mar 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Completing the square",
        "difficulty": "6/7",
        "notice": "Non-calculator question.",
        "q": "Complete the square for $x^2 + 6x + 5$.<br>Hence, write down the coordinates of the turning point of the graph $y = x^2 + 6x + 5$.",
        "img": "",
        "steps": [
            "Halve the coefficient of $x$: $(6 \\div 2) = 3$.",
            "Write in form $(x+3)^2 - 3^2 + 5$.",
            "Simplify: $(x+3)^2 - 9 + 5 = (x+3)^2 - 4$.",
            "The turning point occurs at $x = -3$ and $y = -4$.",
            "Final Answer: $$(-3, -4)$$"
        ]
    },
    // 19 Mar
    {
        "id": "002055",
        "date": "19 Mar 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Simplifying",
        "difficulty": "6/7",
        "notice": "Non-calculator question.",
        "q": "Simplify fully: $$\\frac{2x^2 - 8}{4x^2 + 8x}$$",
        "img": "",
        "steps": [
            "Factorise numerator: $2(x^2 - 4) = 2(x-2)(x+2)$.",
            "Factorise denominator: $4x(x + 2)$.",
            "Cancel the common factor $(x+2)$.",
            "Simplify the remaining numbers: $\\frac{2}{4x} = \\frac{1}{2x}$.",
            "Final Answer: $$\\frac{x - 2}{2x}$$"
        ]
    },
    // 20 Mar
    {
        "id": "002056",
        "date": "20 Mar 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Cosine rule",
        "difficulty": "6/7",
        "q": "In triangle $ABC$, $AB = 7\\text{ cm}$, $AC = 9\\text{ cm}$, and angle $\\angle BAC = 120^\\circ$.<br>Calculate the length of $BC$ to 1 decimal place.",
        "img": "images/19_Mar_G.png",
        "steps": [
            "Use the Cosine Rule: $a^2 = b^2 + c^2 - 2bc\\cos A$.",
            "Substitute: $BC^2 = 7^2 + 9^2 - 2(7)(9)\\cos(120^\\circ)$.",
            "Recall $\\cos(120^\\circ) = -0.5$.",
            "Calculate: $49 + 81 - (126 \\times -0.5) = 130 + 63 = 193$.",
            "Square root: $\\sqrt{193} \\approx 13.892...$.",
            "Final Answer: $$13.9\\text{ cm}$$"
        ]
    },
    // 21 Mar
    {
        "id": "002057",
        "date": "21 Mar 2026",
        "major_area": "Statistics",
        "topic": "Cumulative Frequency",
        "subtopic": "IQR",
        "difficulty": "6/7",
        "q": "A cumulative frequency graph shows the masses of 80 students.<br>(a) At what frequency value do you find the median?<br>(b) Estimate the Interquartile Range if $Q_1 = 52\\text{kg}$ and $Q_3 = 71\\text{kg}$.",
        "img": "images/21_Mar_G.png",
        "steps": [
            "(a) Median frequency $= \\frac{n}{2} = \\frac{80}{2} = 40$.",
            "(b) $IQR = Q_3 - Q_1$.",
            "(b) Calculate: $71 - 52 = 19$.",
            "Final Answer: $$(a)\\ 40,\\ (b)\\ 19\\text{kg}$$"
        ]
    },
    // 22 Mar
    {
        "id": "002058",
        "date": "22 Mar 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Roots from graphs",
        "difficulty": "6/7",
        "notice": "Iteration.",
        "q": "The equation $x^3 + x - 1 = 0$ is rearranged to $x_{n+1} = \\sqrt[3]{1 - x_n}$.<br>Starting with $x_1 = 0.5$, find the value of $x_3$ to 3 decimal places.",
        "img": "",
        "steps": [
            "Find $x_2 = \\sqrt[3]{1 - 0.5} = \\sqrt[3]{0.5} \\approx 0.7937...$.",
            "Find $x_3 = \\sqrt[3]{1 - 0.7937} = \\sqrt[3]{0.2063}$.",
            "Evaluate root: $0.5907...$.",
            "Round to 3 decimal places.",
            "Final Answer: $$0.591$$"
        ]
    },
    // 23 Mar
    {
        "id": "002059",
        "date": "23 Mar 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Scale factors",
        "difficulty": "6/7",
        "notice": "Non-calculator question.",
        "q": "Two similar triangles have areas in the ratio $9:16$. Find the ratio of their corresponding side lengths.",
        "img": "",
        "steps": [
            "If the area scale factor is $k^2$, the linear scale factor is $k$.",
            "Given $k^2 = \\frac{9}{16}$.",
            "Take the square root: $k = \\sqrt{\\frac{9}{16}} = \\frac{3}{4}$.",
            "Final Answer: $$3:4$$"
        ]
    },
    // 24 Mar
    {
        "id": "002060",
        "date": "24 Mar 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Transformations of graphs",
        "difficulty": "6/7",
        "notice": "Composite Functions.",
        "q": "Given $f(x) = 3x - 2$ and $g(x) = x^2$:<br>(a) Find $fg(x)$.<br>(b) Find $gf(x)$.",
        "img": "",
        "steps": [
            "(a) Substitute $g(x)$ into $f(x)$: $f(x^2) = 3(x^2) - 2$.",
            "(b) Substitute $f(x)$ into $g(x)$: $g(3x - 2) = (3x - 2)^2$.",
            "(b) Expand: $(3x-2)(3x-2) = 9x^2 - 6x - 6x + 4$.",
            "Final Answer: $$(a)\\ 3x^2 - 2,\\ (b)\\ 9x^2 - 12x + 4$$"
        ]
    },
    // 25 Mar
    {
        "id": "002061",
        "date": "25 Mar 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Cyclic quadrilaterals",
        "difficulty": "4/5",
        "notice": "Non-calculator question.",
        "q": "$ABCD$ is a cyclic quadrilateral. $\\angle ABC = 78^\\circ$.<br>Calculate $\\angle ADC$, giving a reason for your answer.",
        "img": "images/25_Mar_G.png",
        "steps": [
            "Theorem: Opposite angles in a cyclic quadrilateral sum to $180^\\circ$.",
            "Calculate: $180 - 78$.",
            "Final Answer: $$102^\\circ$$"
        ]
    },
    // 26 Mar
    {
        "id": "002062",
        "date": "26 Mar 2026",
        "major_area": "Algebra",
        "topic": "Surds",
        "subtopic": "Simplifying surds",
        "difficulty": "6/7",
        "notice": "Non-calculator question.",
        "q": "Simplify fully: $\\sqrt{20} + \\sqrt{45}$.",
        "img": "",
        "steps": [
            "Simplify $\\sqrt{20}$: $\\sqrt{4 \\times 5} = 2\\sqrt{5}$.",
            "Simplify $\\sqrt{45}$: $\\sqrt{9 \\times 5} = 3\\sqrt{5}$.",
            "Add the terms: $2\\sqrt{5} + 3\\sqrt{5}$.",
            "Final Answer: $$5\\sqrt{5}$$"
        ]
    },
    // 27 Mar
    {
        "id": "002063",
        "date": "27 Mar 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams",
        "subtopic": "Without replacement",
        "difficulty": "6/7",
        "q": "A bag contains 4 red and 3 blue counters. Two are chosen at random without replacement.<br>Find the probability that both counters are red.",
        "img": "",
        "steps": [
            "Probability first is red: $\\frac{4}{7}$.",
            "Probability second is red: $\\frac{3}{6}$ (as one red is removed).",
            "Multiply probabilities: $\\frac{4}{7} \\times \\frac{3}{6} = \\frac{12}{42}$.",
            "Simplify: $\\frac{2}{7}$.",
            "Final Answer: $$\\frac{2}{7}$$"
        ]
    },
    // 28 Mar
    {
        "id": "002064",
        "date": "28 Mar 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "General Proof",
        "difficulty": "8/9",
        "notice": "Non-calculator question.",
        "q": "Prove algebraically that the square of any odd number is always an odd number.",
        "img": "",
        "steps": [
            "Let the odd number be represented by $2n + 1$ (where $n$ is an integer).",
            "Square the expression: $(2n + 1)^2$.",
            "Expand: $4n^2 + 4n + 1$.",
            "Factor out a 2 from the first two terms: $2(2n^2 + 2n) + 1$.",
            "Since $2(\\text{integer}) + 1$ is the definition of an odd number, the proof is complete.",
            "Final Answer: $$\\text{QED}$$"
        ]
    },
    // 29 Mar
    {
        "id": "002065",
        "date": "29 Mar 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Distance",
        "difficulty": "6/7",
        "notice": "Circle Equation.",
        "q": "Write down the equation of the circle with centre $(2, -3)$ and radius $5$.",
        "img": "",
        "steps": [
            "Use the general equation $(x - h)^2 + (y - k)^2 = r^2$.",
            "Substitute $h = 2$, $k = -3$, and $r = 5$.",
            "Be careful with signs: $(y - (-3)) \\rightarrow (y + 3)$.",
            "Final Answer: $$(x - 2)^2 + (y + 3)^2 = 25$$"
        ]
    },
    // 30 Mar
    {
        "id": "002066",
        "date": "30 Mar 2026",
        "major_area": "Geometry & Measures",
        "topic": "Transformations",
        "subtopic": "Enlargement",
        "difficulty": "8/9",
        "notice": "Negative scale factor.",
        "q": "Triangle $A$ has vertices at $(1,1)$, $(2,1)$, and $(1,3)$.<br>Triangle $B$ is an enlargement of $A$ with scale factor $-2$ about the origin $(0,0)$.<br>Find the coordinates of the vertices of Triangle $B$.",
        "img": "images/30_Mar_G.png",
        "steps": [
            "Multiply both $x$ and $y$ coordinates of each vertex by the scale factor $-2$.",
            "Vertex 1: $(1 \\times -2, 1 \\times -2) = (-2, -2)$.",
            "Vertex 2: $(2 \\times -2, 1 \\times -2) = (-4, -2)$.",
            "Vertex 3: $(1 \\times -2, 3 \\times -2) = (-2, -6)$.",
            "Final Answer: $$(-2,-2),\\ (-4,-2),\\ (-2,-6)$$"
        ]
    },
    // 31 Mar
    {
        "id": "002067",
        "date": "31 Mar 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "General Proof",
        "difficulty": "8/9",
        "notice": "Non-calculator question.",
        "q": "Prove algebraically that for any integer $n$, the expression $n^2 - n$ is always an even number.",
        "img": "",
        "steps": [
            "Factorise the expression: $n(n - 1)$.",
            "Observe that $n$ and $(n - 1)$ are consecutive integers.",
            "In any pair of consecutive integers, one must be even.",
            "An even number multiplied by any integer always results in an even number.",
            "Final Answer: $$\\text{QED}$$"
        ]
    },
{
    "id": "2068",
    "date": "1 Apr 2026",
    "major_area": "Algebra",
    "topic": "Factorising",
    "subtopic": "Quadratic factorising",
    "difficulty": "8/9",
    "q": "(a) Factorise fully: $6x^2 - 19x + 15$.<br>(b) Hence, factorise: $19x - 6x^2 - 15$.",
    "steps": [
        "(a) Find factors of $6 \\times 15 = 90$ that sum to $-19$: $-9$ and $-10$.",
        "Split and factorise: $6x^2 - 9x - 10x + 15 = 3x(2x - 3) - 5(2x - 3)$.",
        "Part (a) Answer: $(3x - 5)(2x - 3)$.",
        "(b) Recognise that $19x - 6x^2 - 15$ is $-1(6x^2 - 19x + 15)$.",
        "Multiply one bracket by $-1$: $(5 - 3x)(2x - 3)$.",
        "Final Answer: $$(5 - 3x)(2x - 3)$$"
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Negative $x^2$",
        "content": "When a quadratic starts with a negative $x^2$, always factorise the 'positive' version first, then adjust the signs. It prevents the common error of misplacing the negative inside the brackets."
    },
    "payhip_link": "https://payhip.com/b/wRN86",
    "button_text": "Master Algebra: Download the Full Algebra Pack"
},
	{
    "id": "2069",
    "date": "2 Apr 2026",
    "major_area": "Geometry & Measures",
    "topic": "Coordinates",
    "subtopic": "Gradients",
    "difficulty": "6/7",
    "img": "",
    "q": "Points $A(-7, -23)$, $B(-1, -5)$ and $C(4, 10)$ lie on the coordinate plane.<br>(a) Show that the gradient of the line segment $AB$ is 3.<br>(b) Prove that $A, B$ and $C$ are collinear.",
    "steps": [
        "(a) Gradient $AB = \\frac{-5 - (-23)}{-1 - (-7)} = \\frac{18}{6} = 3$.",
        "(b) Calculate gradient $BC = \\frac{10 - (-5)}{4 - (-1)} = \\frac{15}{5} = 3$.",
        "Since $m_{AB} = m_{BC}$, the line segments are parallel.",
        "Since they both pass through point $B$, they must lie on the same straight line.",
        "Final Answer: $$\\text{Gradients equal and share common point } B$$"
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Collinearity Proof",
        "content": "To prove collinearity, simply showing the gradients are equal is only half the job. You <strong>must</strong> explicitly state that they share a common point to earn the final communication mark."
    },
    "payhip_link": "https://payhip.com/b/XAGch",
    "button_text": "Master Geometry: Download the Full Geometry Pack"
},
	{
    "id": "002070",
    "date": "3 Apr 2026",
    "major_area": "Ratio, Proportion & Rates of Change",
    "topic": "Compound Measures",
    "subtopic": "Speed",
    "difficulty": "4/5",
    "q": "Jack drives $145\\text{ km}$ at an average speed of $60\\text{ km/h}$.<br>(a) Calculate the time taken in hours, as a decimal.<br>(b) Convert this time into hours and minutes.",
    "steps": [
        "(a) $\\text{Time} = \\frac{145}{60} = 2.4166... \\text{ hours}$.",
        "(b) The whole number is 2 hours.",
        "Convert $0.4166...$ to minutes: $0.4166... \\times 60 = 25\\text{ minutes}$.",
        "Final Answer: $$2\\text{ hours } 25\\text{ minutes}$$"
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Decimal Trap",
        "content": "A common 'lazy' mistake is to say $2.41$ hours is 2 hours and 41 minutes. Time is base-60, not base-10! Always multiply the decimal remainder by 60 or, on a calculator paper, use your time key."
    },
    "payhip_link": "https://payhip.com/b/IVWzJ",
    "button_text": "Master Number & Ratio: Download the Full Number Pack"
},
	{
    "id": "2071",
    "date": "4 Apr 2026",
    "major_area": "Geometry & Measures",
    "topic": "3D Shapes",
    "subtopic": "Volume",
    "difficulty": "8/9",
    "img": "images/04_may_i.png",
    "q": "A cone and a hemisphere have the same base radius $r$.<br>The volume of the cone is equal to the volume of the hemisphere.<br>Show that the height of the cone, $h$, is equal to $2r$.",
    "steps": [
        "Recall $V_{\\text{hemisphere}} = \\frac{2}{3}\\pi r^3$.",
        "Recall $V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$.",
        "Equate: $\\frac{1}{3}\\pi r^2 h = \\frac{2}{3}\\pi r^3$.",
        "Cancel $\\pi$ and multiply by 3: $r^2 h = 2r^3$.",
        "Divide by $r^2$: $h = 2r$.",
        "Final Answer: $$h = 2r$$"
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Formula Accuracy",
        "content": "In the exam, the formula for a sphere is given, but you must remember to halve it for the hemisphere. Forgetting the $\\frac{2}{3}$ multiplier is the most frequent error here."
    },
    "payhip_link": "https://payhip.com/b/XAGch",
    "button_text": "Master Geometry: Download the Full Geometry Pack"
},
	{
    "id": "2072",
    "date": "5 Apr 2026",
    "major_area": "Ratio, Proportion & Rates of Change",
    "topic": "Direct & Inverse Proportion",
    "subtopic": "Proportion equations",
    "difficulty": "6/7",
    "img": "",
    "q": "$y$ is inversely proportional to $x^2$. When $x = 3, y = 8$.<br>(a) Find an equation for $y$ in terms of $x$.<br>(b) Calculate the value of $y$ when $x = 2$.<br>(c) Calculate the value of $x$ when $y = 2$.",
    "steps": [
        "(a) $y = \\frac{k}{x^2} \\implies 8 = \\frac{k}{3^2} \\implies k = 72$. Equation: $y = \\frac{72}{x^2}$.",
        "(b) When $x = 2$: $y = \\frac{72}{2^2} = \\frac{72}{4} = 18$.",
        "(c) When $y = 2$: $2 = \\frac{72}{x^2} \\implies 2x^2 = 72 \\implies x^2 = 36$.",
        "Final Answer: $$(a)\\ y = \\frac{72}{x^2},\\ (b)\\ 18,\\ (c)\\ 6$$"
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Square vs Square Root",
        "content": "Read the wording twice. Don't make the mistake of confusing 'the square of $x$' ($x^2$) and 'the square root of $x$' ($\\sqrt{x}$). They are not the same thing! Using the wrong power loses all subsequent marks."
    },
    "payhip_link": "https://payhip.com/b/IVWzJ",
    "button_text": "Master Number & Ratio: Download the Full Number Pack"
},
	// 6 Apr
    {
        "id": "002073",
        "date": "6 Apr 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Quadratic formula",
        "difficulty": "6/7",
        "q": "Consider the quadratic equation $2x^2 + 7x - 4 = 0$.<br>(a) Calculate the value of the discriminant ($b^2 - 4ac$).<br>(b) Use the quadratic formula to find the two solutions for $x$.",
        "steps": [
            "(a) Identify $a=2, b=7, c=-4$.",
            "Discriminant: $7^2 - 4(2)(-4) = 49 + 32 = 81$.",
            "(b) Substitute into formula: $x = \\frac{-7 \\pm \\sqrt{81}}{2(2)}$.",
            "Calculate: $x = \\frac{-7 + 9}{4} = 0.5$ and $x = \\frac{-7 - 9}{4} = -4$.",
            "Final Answer: $$x = 0.5, x = -4$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The value of the discriminant",
            "content": "($b^2 - 4ac$) is known as the discriminant.  If the discriminant is positive the quadratic equation has two real roots because its graph crosses the $x$-axis.  If it is zero the quadratic has 'repeated roots', it's graph is tangent to the $x$-axis and so there is only one solution. If it is negative the quadratic has no real roots because its graph does not cross the $x$-axis."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 7 Apr
    {
        "id": "002074",
        "date": "7 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Scale factors",
        "difficulty": "8/9",
        "q": "Two similar cylinders have surface areas of $40\\pi\\text{ cm}^2$ and $90\\pi\\text{ cm}^2$.<br>(a) Find the linear scale factor between the smaller and larger cylinder.<br>(b) The smaller cylinder has a height of $6\\text{ cm}$. Calculate the height of the larger cylinder.",
        "steps": [
            "(a) Area Scale Factor ($k^2$) = $\\frac{90\\pi}{40\\pi} = 2.25$.",
            "Linear Scale Factor ($k$) = $\\sqrt{2.25} = 1.5$.",
            "(b) Multiply height: $6 \\times 1.5 = 9$.",
            "Final Answer: $$9\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Bridging the Gap",
            "content": "You cannot use an Area Scale Factor to find a length directly. You must always 'bridge' the calculation by finding the linear scale factor ($k$) first. This is a classic Grade 8/9 stumbling block."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 8 Apr
    {
        "id": "002075",
        "date": "8 Apr 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "Prime factorisation",
        "difficulty": "4/5",
        "q": "(a) Use a factor tree to express 108 as a product of its prime factors.<br>(b) Write your final answer in index form.",
        "steps": [
            "(a) Factor tree branches: $108 = 2 \\times 54$; $54 = 2 \\times 27$; $27 = 3 \\times 9$; $9 = 3 \\times 3$.",
            "List primes: $2, 2, 3, 3, 3$.",
            "(b) Collect into index form: $2^2 \\times 3^3$.",
            "Final Answer: $$2^2 \\times 3^3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systemic Division",
            "content": "Always start with the smallest prime (2). Keep dividing by 2 until you can't anymore, then move to 3, then 5. This 'ladder' approach ensures you never miss a factor."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 9 Apr
    {
        "id": "002076",
        "date": "9 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Polygons",
        "subtopic": "Interior angles",
        "difficulty": "6/7",
        "q": "A regular polygon has 10 sides (a decagon).<br>(a) Calculate the size of each exterior angle.<br>(b) Hence, find the size of each interior angle.",
        "steps": [
            "(a) Exterior angles of any polygon sum to $360^\\circ$.",
            "One exterior angle = $360 \\div 10 = 36^\\circ$.",
            "(b) Interior and exterior angles lie on a straight line: $180 - 36 = 144$.",
            "Final Answer: $$144^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Exterior Shortcut",
            "content": "While you can use $(n-2) \\times 180 \\div n$, the exterior angle method ($360 \\div n$) is much faster and less prone to calculation errors. Use it whenever possible!"
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 10 Apr
    {
        "id": "002077",
        "date": "10 Apr 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Linear graphs",
        "difficulty": "4/5",
        "q": "Line $L_1$ has the equation $y = 3x - 5$.<br>(a) State the gradient of a line parallel to $L_1$.<br>(b) Find the equation of the line $L_2$ which is parallel to $L_1$ and passes through $(2, 10)$.",
        "steps": [
            "(a) Parallel lines have the same gradient, so $m = 3$.",
            "(b) Use $y-y_1 = m(x-x_1)$ with $(2, 10)$: $y-10=3(x-2)$.",
            "Solve this equation $y=3x-6+10$.",
            "State the final equation: $y = 3x + 4$.",
            "Final Answer: $$y = 3x + 4$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Parallel Protocol",
            "content": "In coordinate geometry, the word 'parallel' is a mathematical instruction to use the exact same gradient. Once you have the gradient and a point, finding the equation is a simple matter of substituting the known coordinate point values into $y-y_1 = m(x-x_1)$."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    
    // 11 Apr
    {
        "id": "002078",
        "date": "11 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Pythagoras",
        "subtopic": "3D Pythagoras",
        "difficulty": "8/9",
        "q": "A cuboid has dimensions $3\\text{cm}$ by $4\\text{cm}$ by $12\\text{cm}$.<br>Calculate the length of the internal diagonal (the longest distance between two corners).",
        "img": "",
        "steps": [
            "Use the 3D Pythagoras formula: $d^2 = a^2 + b^2 + c^2$.",
            "Substitute: $d^2 = 3^2 + 4^2 + 12^2$.",
            "Calculate: $d^2 = 9 + 16 + 144 = 169$.",
            "Square root: $d = \\sqrt{169}$.",
            "Final Answer: $$13\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Pythagoras in 3D",
            "content": "You can solve this in two steps using 2D Pythagoras twice, but the 3D formula ($a^2+b^2+c^2=d^2$) is much faster and less prone to rounding errors. It’s a must-know for Grade 8/9 questions."
        }
    },
    // 12 Apr
    {
        "id": "002079",
        "date": "12 Apr 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Compound interest",
        "difficulty": "6/7",
        "q": "Alice invests £4000 in a savings account with 3% compound interest per year.<br>Calculate the total interest earned after 5 years. Give your answer to the nearest penny.",
        "img": "",
        "steps": [
            "Multiplier = $1.03$.",
            "Total Amount = $4000 \\times 1.03^5 = 4637.096...$.",
            "To find interest only, subtract the original investment: $4637.10 - 4000$.",
            "Final Answer: $$£637.10$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "TThe Head Teacher's Eye: Total vs. Interest",
            "content": "Read the question carefully! Does it ask for the **total value** or just the **interest**? Many students lose a mark at the very end by forgetting to subtract the original principal."
        }
    },
    // 13 Apr
    {
        "id": "002080",
        "date": "13 Apr 2026",
        "major_area": "Statistics",
        "topic": "Charts",
        "subtopic": "Pie charts",
        "difficulty": "4/5",
        "q": "In a survey of 60 people, 15 said their favorite color was Blue.<br>Calculate the angle for 'Blue' on a pie chart.",
        "steps": [
            "Total degrees in a circle $= 360^\\circ$.",
            "Find degrees per person: $360 \\div 60 = 6^\\circ$.",
            "Multiply by the frequency of Blue: $15 \\times 6$.",
            "Final Answer: $$90^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 'Scale Factor' Method",
            "content": "Always find what $1$ person is worth in degrees first ($360 \\div \\text{Total}$). It makes calculating the rest of the pie chart much easier and more consistent."
        }
    },
    // 14 Apr
    {
        "id": "002081",
        "date": "14 Apr 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Quadratic factorising",
        "difficulty": "6/7",
        "q": "Solve $x^2 - 10x + 21 = 0$ by factorising.",
        "steps": [
            "Find two numbers that multiply to $+21$ and add to $-10$.",
            "The numbers are $-3$ and $-7$.",
            "Write as brackets: $(x - 3)(x - 7) = 0$.",
            "Set each bracket to zero.",
            "Final Answer: $$x = 3,\\ x = 7$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Double Negative",
            "content": "When the constant is positive ($+21$) but the middle term is negative ($-10$), **both** numbers in your brackets must be negative. It's a very common place for signs to go wrong!"
        }
    },
    // 15 Apr
    {
        "id": "002082",
        "date": "15 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "SOHCAHTOA",
        "difficulty": "4/5",
        "q": "A ladder $5\\text{m}$ long leans against a vertical wall.<br>The base of the ladder is $3\\text{m}$ from the wall on horizontal ground.<br>Calculate the angle the ladder makes with the ground.",
        "img": "images/apr_15_g.png",
        "steps": [
            "Identify the sides relative to the angle $\\theta$: The ladder is the \\textbf{Hypotenuse} ($5\\text{m}$) and the distance from the wall is the \\textbf{Adjacent} side ($3\\text{m}$).",
            "Select the correct ratio: $\\cos(\\theta) = \\dfrac{\\text{adj}}{\\text{hyp}}$.",
            "Substitute the values: $\\cos(\\theta) = \\dfrac{3}{5}$.",
            "Calculate the angle: $\\theta = \\cos^{-1}(0.6)$.",
            "Final Answer: $$53.1^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Sketching the Scenario",
            "content": "Even when a diagram isn't provided, always draw a quick right-angled triangle. Label the 'Opposite', 'Adjacent', and 'Hypotenuse' immediately; it makes choosing between Sine, Cosine, and Tangent much harder to get wrong."
        }
    },
    
 // 16 Apr
    {
        "id": "002083",
        "date": "16 Apr 2026",
        "major_area": "Algebra",
        "topic": "Sequences",
        "subtopic": "nth term",
        "difficulty": "6/7",
        "q": "Find the $n^{th}$ term of the linear sequence: $7, 11, 15, 19, 23...$",
        "steps": [
            "Find the common difference: $11 - 7 = 4$.",
            "This means the sequence is related to $4n$.",
            "When $n=1$, $4(1) = 4$. Our first term is $7$.",
            "Adjust by adding $3$ ($7 - 4 = 3$).",
            "Final Answer: $$4n + 3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Zero Term",
            "content": "A quick way to find the constant (+3) is to work backwards from the first term to find 'Term 0'. $7 - 4 = 3$. This gives you your $4n + 3$ instantly!"
        }
    },
  // 17 Apr
    {
        "id": "002084",
        "date": "17 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Combined Theorems",
        "difficulty": "7/8",
        "q": "In the diagram, $AC$ is a diameter of the circle. $B$ and $D$ are points on the circumference.<br>Given $\\angle ABD = 42^circ$:<br>(a) Write down the size of $\\angle ACD$.<br>(b) Calculate the size of $\\angle CAD$.",
        "img": "images/apr_17_g.png",
        "steps": [
            "(a) $\\angle ACD = 42^\\circ$ because angles subtended by the same arc ($AD$) at the circumference are equal.",
            "(b) $\\angle ADC = 90^\\circ$ because the angle in a semicircle is a right angle.",
            "(b) In $\\triangle ADC$, the angles must sum to $180^\\circ$.",
            "(b) $\\angle CAD = 180^\\circ - (90^\\circ + 42^\\circ) = 48^\\circ$.",
            "Final Answer: $$(a)\\ 42^\\circ,\\ (b)\\ 48^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Spotting the Diameter",
            "content": "Whenever you are told a line is a \\textbf{diameter}, immediately look for a triangle attached to it. The angle at the circumference will always be $90^\\circ$. This is a very common 'hidden step' in Higher Tier circle problems."
        }
    },
    // 18 Apr
    {
        "id": "002085",
        "date": "18 Apr 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "General Proof",
        "difficulty": "8/9",
        "q": "Prove that the sum of any two consecutive even numbers is always a multiple of 2 but never a multiple of 4.",
        "steps": [
            "Let the two consecutive even numbers be $2n$ and $2n + 2$, where $n$ is an integer.",
            "Sum the two numbers: $2n + (2n + 2) = 4n + 2$.",
            "To prove it is a multiple of 2, factor out 2: $2(2n + 1)$. Since $2n+1$ is an integer, the sum is a multiple of 2.",
            "To prove it is not a multiple of 4, consider the expression $4n + 2$.",
            "A multiple of 4 is defined as $4k$ for some integer $k$.",
            "The expression $4n + 2$ is 2 more than a multiple of 4 ($4n$), meaning it always leaves a remainder of 2 when divided by 4.",
			"Final Answer: $$\\text{Proven: Remainder is 2, therefore not a multiple of 4.}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Defining Integers",
            "content": "In algebraic proof, always start by defining $n$ as an integer. $2n$ is the standard way to show a number is even, and $2n+1$ is the standard for odd. Examiners look for these definitions first!"
        }
    },
// 19 Apr
    {
        "id": "002087",
        "date": "19 Apr 2026",
        "major_area": "Statistics",
        "topic": "Cumulative Frequency",
        "subtopic": "Median & IQR",
        "difficulty": "6/7",
        "q": "The cumulative frequency graph shows the heights of 100 plants.<br>(a) Find an estimate for the median height.<br>(b) Calculate an estimate for the interquartile range (IQR).<br>(c) Find the number of plants with a height greater than $45\\text{ cm}$.",
        "img": "images/apr_19_g.png",
        "steps": [
            "(a) The median is the $50^{th}$ value. From $y=50$, the graph gives a height of approx $29\\text{ cm}$.",
            "(b) Lower Quartile ($Q_1$) is the $25^{th}$ value, approx $22\\text{ cm}$.",
            "(b) Upper Quartile ($Q_3$) is the $75^{th}$ value, approx $37\\text{ cm}$.",
            "(b) $IQR = Q_3 - Q_1 = 37 - 22 = 15\\text{ cm}$.",
            "(c) The cumulative frequency at $45\\text{ cm}$ is $95$.",
            "(c) Number of plants taller than $45\\text{ cm} = 100 - 95 = 5$.",
            "Final Answer: $$(a)\\ 29\\text{ cm},\\ (b)\\ 15\\text{ cm},\\ (c)\\ 5$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Median and Quartiles",
            "content": "For a total frequency of $n$, always remember: Median $= n/2$, $Q_1 = n/4$, and $Q_3 = 3n/4$. Draw dotted lines on your graph to show exactly where you are reading these values to secure your method marks!"
        }
    },
    // 20 Apr
    {
        "id": "002088",
        "date": "20 Apr 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Changing the subject",
        "difficulty": "6/7",
        "q": "Make $t$ the subject of the formula: $v = u + at$.",
        "img": "",
        "steps": [
            "Subtract $u$ from both sides: $v - u = at$.",
            "Divide both sides by $a$.",
            "Final Answer: $$t = \\frac{v - u}{a}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Reverse BIDMAS",
            "content": "When rearranging, think of it as 'undoing' the operations in reverse order. We deal with the addition ($+u$) before we deal with the multiplication ($at$)."
        }
    },
	// 21 Apr
 {
        "id": "002089",
        "date": "21 Apr 2026",
        "major_area": "Statistics",
        "topic": "Averages & Range",
        "subtopic": "Discrete data",
        "difficulty": "4/5",
        "q": "The mean of four numbers is 10. Three of the numbers are 8, 12, and 15.<br>Find the fourth number.",
        "steps": [
            "Total of the four numbers: $4 \times 10 = 40$.",
            "Total of the known three: $8 + 12 + 15 = 35$.",
            "Subtract: $40 - 35$.",
            "Final Answer: $$5$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Think of the Total",
            "content": "In 'reverse mean' questions, always find the **total** first. Mean $\times$ Count $=$ Total. This is much easier than trying to solve an algebraic equation."
        }
    },
    // 22 Apr
    {
        "id": "002090",
        "date": "22 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Polygons",
        "subtopic": "Interior angles",
        "difficulty": "4/5",
        "q": "The sum of the interior angles of a regular polygon is $1440^\circ$.<br>Calculate the number of sides the polygon has.",
        "steps": [
            "Use the formula: $(n - 2) \\times 180 = 1440$.",
            "Divide by 180: $n - 2 = 8$.",
            "Add 2: $n = 10$.",
            "Final Answer: $$10\text{ sides}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Exterior Shortcut",
            "content": "You can also find the number of sides by finding the exterior angle first. But for 'sum of interior' questions, memorizing $(n-2) \\times 180$ is the most direct path to the marks."
        }
    },
    // 23 Apr
    {
        "id": "002091",
        "date": "23 Apr 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Reverse percentages",
        "difficulty": "6/7",
        "q": "A TV is sold for £352 in a '20% off' sale.<br>Calculate the original price of the TV.",
        "steps": [
            "Identify that £352 represents 80% of the original price.",
            "Find 1%: $352 \\div 80 = 4.4$.",
            "Multiply by 100: $4.4 \\times 100$.",
            "Final Answer: $$£440$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Don't just add 20%!",
            "content": "A common mistake is to calculate 20% of the sale price and add it back. This is wrong! You must always divide by the multiplier (in this case, $0.8$) to get back to the original value."
        }
    },
    // 24 Apr
    {
        "id": "002092",
        "date": "24 Apr 2026",
        "major_area": "Probability",
        "topic": "Basic Probability",
        "subtopic": "Venn Diagrams",
        "difficulty": "6/7",
        "q": "In a class of 30 students, 20 like Football and 15 like Cricket. 10 like both.<br>Find the probability that a student chosen at random likes **only** Football.",
        "steps": [
            "Number who like Football only: $20 - 10 = 10$.",
            "Total number of students: $30$.",
            "Probability: $\\frac{10}{30}$.",
            "Final Answer: $$\\frac{1}{3}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Venn Diagram Logic",
            "content": "Always fill in the intersection (the 'both' section) first! It prevents you from double-counting the students who appear in both categories."
        }
    },
// 25 Apr (Example of a 'Big Challenge' for end of month)
    {
        "id": "002093",
        "date": "25 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Volume",
        "difficulty": "8/9",
        "q": "A frustum is made by removing a small cone from a large cone. The large cone has radius $10\\text{cm}$ and height $20\\text{cm}$. The small cone has radius $5\\text{cm}$. Calculate the volume of the frustum.",
        "steps": [
            "Volume of large cone: $\\frac{1}{3}\\pi(10^2)(20) = \\frac{2000}{3}\\pi$.",
            "Using similar triangles, the height of the small cone is $10\\text{cm}$ (since radius halved, height halves).",
            "Volume of small cone: $\\frac{1}{3}\\pi(5^2)(10) = \\frac{250}{3}\\pi$.",
            "Subtract: $\\frac{2000}{3}\\pi - \\frac{250}{3}\\pi = \\frac{1750}{3}\\pi$.",
            "Final Answer: $$583.3\\pi\\text{ cm}^3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Frustum Shortcut",
            "content": "You don't always need a complex formula for a frustum. Just remember: it's simply the **Big Shape** minus the **Little Shape**. Finding the height of the missing cone using similar triangles is usually the 'hidden' step."
        }
    },
    // 26 Apr
   
    {
        "id": "002094",
        "date": "26 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Parallel vectors",
        "difficulty": "8/9",
        "img": "images/26_apr_i.png",
        "q": "$OABC$ is a parallelogram where $\\vec{OA} = \\mathbf{a}$ and $\\vec{OC} = \\mathbf{c}$. $M$ is the midpoint of $BC$. $P$ is a point on $AC$ such that $AP:PC = 2:1$.<br>(a) Find the vector $\\vec{OM}$ in terms of $\\mathbf{a}$ and $\\mathbf{c}$.<br>(b) Prove that $O, P$ and $M$ are collinear.",
        "steps": [
            "(a) $\\vec{OM} = \\vec{OC} + \\vec{CM}$. Since $BC$ is parallel and equal to $OA$, $\\vec{CM} = \\frac{1}{2}\\mathbf{a}$. So, $\\vec{OM} = \\mathbf{c} + \\frac{1}{2}\\mathbf{a}$.",
            "(b) First, find $\\vec{AC} = \\mathbf{c} - \\mathbf{a}$.",
            "Next, find $\\vec{AP} = \\frac{2}{3}\\vec{AC} = \\frac{2}{3}(\\mathbf{c} - \\mathbf{a})$.",
            "Find $\\vec{OP} = \\vec{OA} + \\vec{AP} = \\mathbf{a} + \\frac{2}{3}\\mathbf{c} - \\frac{2}{3}\\mathbf{a} = \\frac{1}{3}\\mathbf{a} + \\frac{2}{3}\\mathbf{c}$.",
            "Factorise $\\vec{OP}$: $\\vec{OP} = \\frac{2}{3}(\\frac{1}{2}\\mathbf{a} + \\mathbf{c})$.",
            "Compare: $\\vec{OP} = \\frac{2}{3}\\vec{OM}$.",
            "Final Answer: $$\\vec{OP} \\text{ is a scalar multiple of } \\vec{OM} \\text{ and they share point } O, \\text{ so they are collinear.}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Collinearity Conclusion",
            "content": "To prove points are on a straight line, finding the scalar multiple (e.g., $\\vec{OP} = \\frac{2}{3}\\vec{OM}$) is only 3 out of 4 marks. You **must** write the sentence: 'They are parallel and share a common point' to secure the final mark. Don't fall at the last hurdle!"
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 27 Apr
    {
        "id": "002095",
        "date": "27 Apr 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Adding/subtracting",
        "difficulty": "8/9",
        "q": "Solve the equation: $\\dfrac{5}{x+2} + \\dfrac{3}{x-1} = 2$.",
        "steps": [
            "Find a common denominator: $\\dfrac{5(x-1) + 3(x+2)}{(x+2)(x-1)} = 2$.",
            "Expand and simplify the numerator: $5x - 5 + 3x + 6 = 8x + 1$.",
            "Multiply through by the denominator: $8x + 1 = 2(x+2)(x-1)$.",
            "Expand the quadratic: $8x + 1 = 2(x^2 + x - 2) \\implies 8x + 1 = 2x^2 + 2x - 4$.",
            "Rearrange to equal zero: $2x^2 - 6x - 5 = 0$.",
            "Solve using the quadratic formula: $x = \\dfrac{6 \\pm \\sqrt{(-6)^2 - 4(2)(-5)}}{2(2)} = \\dfrac{6 \\pm \\sqrt{76}}{4}$.",
            "Final Answer: $$x = 3.68, x = -0.68$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Common Denominator",
            "content": "When solving algebraic fraction equations, your first priority is to eliminate the denominators. Multiply every single term by the common denominator $(x+2)(x-1)$. Don't forget that the '2' on the right-hand side must also be multiplied!"
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 28 Apr
    {
        "id": "002096",
        "date": "28 Apr 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Notation",
        "subtopic": "Substitution",
        "difficulty": "7/8",
        "q": "Functions $f$ and $g$ are defined as: $f(x) = 3x - 1$ and $g(x) = x^2 + 4$.<br>(a) Calculate $fg(2)$.<br>(b) Find the inverse function $f^{-1}(x)$.",
        "steps": [
            "(a) Find $g(2)$ first: $2^2 + 4 = 8$.",
            "Substitute 8 into $f(x)$: $f(8) = 3(8) - 1 = 23$.",
            "(b) Write the function in $y=$ notation: $y = 3x - 1$.",
            "Interchange $x$ and $y$: $x = 3y - 1$.",
            "Solve for $y$: $x + 1 = 3y \\implies y = \\dfrac{x + 1}{3}$.",
            "Write in inverse function notation: $f^{-1}(x) = \\dfrac{x + 1}{3}$.",
            "Final Answer: $$(a)\\ 23,\\ (b)\\ f^{-1}(x) = \\dfrac{x+1}{3}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Why we swap X and Y",
            "content": "Interchanging $x$ and $y$ is the most important step in finding an inverse. Geometrically, this represents a reflection in the line $y=x$. By solving for the 'new' $y$, you are finding the algebraic rule for that reflected image."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 29 Apr
    {
        "id": "002094",
        "date": "29 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Area of triangle 1/2 ab sin C",
        "difficulty": "8/9",
        "img": "images/29_apr_i.png",
        "q": "A sector of a circle has a radius of $r\\text{ cm}$ and a sector angle of $60^\\circ$.<br>The area of the sector is $24\\pi\\text{ cm}^2$.<br>(a) Show that the radius $r = 12\\text{ cm}$.<br>(b) Calculate the arc length of the sector, giving your answer in terms of $\\pi$.",
        "steps": [
            "(a) Area formula: $\\frac{\\theta}{360} \\times \\pi r^2 = 24\\pi$.",
            "Substitute $\\theta = 60$: $\\frac{60}{360} \\times \\pi r^2 = 24\\pi$.",
            "Simplify: $\\frac{1}{6}r^2 = 24 \\implies r^2 = 144$.",
            "Square root: $r = 12$.",
            "(b) Arc length formula: $\\frac{\\theta}{360} \\times 2\\pi r$.",
            "Calculate: $\\frac{60}{360} \\times 2 \\times \\pi \\times 12 = \\frac{1}{6} \\times 24\\pi$.",
            "Final Answer: $$(a)\\ r=12,\\ (b)\\ 4\\pi\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Arc vs Perimeter",
            "content": "Read the question carefully. If it asks for 'arc length', you only need the curved part. If it asks for 'perimeter', you must add the two radii ($12 + 12$) to your arc length result!"
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 30 Apr
    {
        "id": "002089",
        "date": "30 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Pythagoras",
        "subtopic": "3D Pythagoras",
        "difficulty": "8/9",
        "img": "images/30_apr_i.png",
        "q": "A cuboid has dimensions $8\\text{ cm}$ by $6\\text{ cm}$ by $5\\text{ cm}$.<br>(a) Calculate the length of the diagonal across the base.<br>(b) Calculate the length of the internal diagonal of the cuboid.",
        "steps": [
            "(a) Use Pythagoras on the base ($8$ and $6$): $d^2 = 8^2 + 6^2$.",
            "$d^2 = 64 + 36 = 100 \\implies d = 10\\text{ cm}$.",
            "(b) Use Pythagoras with the base diagonal and the height ($10$ and $5$): $D^2 = 10^2 + 5^2$.",
            "$D^2 = 100 + 25 = 125$.",
            "Simplify the surd: $D = \\sqrt{125} = \\sqrt{25 \\times 5}$.",
            "Final Answer: $$(a)\\ 10\\text{ cm},\\ (b)\\ 5\\sqrt{5}\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 3D Shortcut",
            "content": "For any cuboid, the internal diagonal $D$ can be found in one step using the 3D version of Pythagoras: $D^2 = a^2 + b^2 + c^2$. It saves time and reduces the chance of rounding errors midway through the problem."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
];

                       
