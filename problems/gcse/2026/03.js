const problemBank = [
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
    }
];