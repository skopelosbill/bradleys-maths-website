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
    }
];