const problemBank = [
// JAN 1
{
  q: "Happy New Year! Start with an Exact Value: Calculate $\\sin(30^\\circ) + \\cos(60^\\circ)$.",
  steps: ["Recall $\\sin(30^\\circ) = 0.5$.", 
          "Recall $\\cos(60^\\circ) = 0.5$.", 
          "Add them: $0.5 + 0.5$.", 
          "Final Answer: $$1$$"
        ]
},
// JAN 2
{
  q: "Ratio: Ali and Beth share money in ratio 3:5. <br>Beth gets £40 more than Ali. <br>Total money?",
  steps: ["Difference in parts: $5 - 3 = 2$ parts.", 
          "2 parts = £40. So 1 part = £20.", 
          "Total parts = $3 + 5 = 8$.", 
          "Total Money = $8 \\times 20$.",
          "Final Answer: $$£160$$"
        ]
            },
            // JAN 3
            {
                q: "Expand and Simplify: $(x+3)(x-2)(x+4)$",
                steps: ["Expand first two: $(x^2 + x - 6)$.", "Multiply by $(x+4)$:", "$x(x^2+x-6) + 4(x^2+x-6)$", "$x^3 + x^2 - 6x + 4x^2 + 4x - 24$", "Final Answer: $$x^3 + 5x^2 - 2x - 24$$"]
            },
            // JAN 4
            {
                q: "Make $u$ the subject: $v^2 = u^2 + 2as$",
                steps: ["Subtract $2as$ from both sides: $v^2 - 2as = u^2$.", "Square root both sides.", "Final Answer: $$u = \\pm\\sqrt{v^2 - 2as}$$"]
            },
            // JAN 5
            {
                q: "Estimate the value of $\\frac{403 \\times 1.98}{0.49}$",
                steps: ["Round to 1 significant figure.", "$403 \\approx 400$, $1.98 \\approx 2$, $0.49 \\approx 0.5$.", "Calculation: $\\frac{400 \\times 2}{0.5} = \\frac{800}{0.5}$", "Dividing by 0.5 is doubling.", "Final Answer: $$1600$$"]
            },
            // JAN 6
            {
                q: "Factorise fully: $18x^2 - 50y^2$",
                steps: ["Factor out common term (2): $2(9x^2 - 25y^2)$.", "Identify Difference of Two Squares inside.", "$(3x)^2 - (5y)^2$.", "Final Answer: $$2(3x - 5y)(3x + 5y)$$"]
            },
            // JAN 7
            {
                q: "Solve $x^2 - 5x - 24 = 0$",
                steps: ["Find factors of -24 that add to -5.", "Factors are -8 and +3.", "Brackets: $(x-8)(x+3) = 0$.", "Final Answer: $$x=8 \\text{ or } x=-3$$"]
            },
            // JAN 8
            {
                q: "Rationalise the denominator: $\\frac{10}{3+\\sqrt{2}}$",
                steps: ["Multiply top and bottom by $(3-\\sqrt{2})$.", "Top: $10(3-\\sqrt{2})$.", "Bottom: $3^2 - (\\sqrt{2})^2 = 9 - 2 = 7$.", "Final Answer: $$\\frac{30 - 10\\sqrt{2}}{7}$$"]
            },
            // JAN 9
            {
                q: "Indices: Simplify $(27x^6)^{\\frac{2}{3}}$",
                steps: ["Apply power to number: $27^{\\frac{2}{3}} = (\\sqrt[3]{27})^2 = 3^2 = 9$.", "Apply power to algebra: $x^{6 \\times \\frac{2}{3}} = x^4$.", "Final Answer: $$9x^4$$"]
            },
            // JAN 10
            {
                q: "A line passes through $(0, 4)$ and $(3, 10)$. Find its equation.",
                steps: ["y-intercept ($c$) is 4.", "Gradient $m = \\frac{10-4}{3-0} = \\frac{6}{3} = 2$.", "Equation is $y = mx + c$.", "Final Answer: $$y = 2x + 4$$"]
            },
            // JAN 11
            {
                q: "Find the error interval for $x$ if $x = 8.4$ truncated to 1 decimal place.",
                steps: ["Truncated means cut off.", "Lower bound is the number itself: $8.4$.", "Upper bound is when the digit changes: $8.5$.", "Final Answer: $$8.4 \\le x < 8.5$$"]
            },
            // JAN 12
            {
                q: "Solve $\\frac{4x-1}{3} = 2x + 5$",
                steps: ["Multiply by 3: $4x - 1 = 3(2x + 5)$.", "Expand: $4x - 1 = 6x + 15$.", "Rearrange: $-16 = 2x$.", "Final Answer: $$x = -8$$"]
            },
            // JAN 13
            {
                q: "Circle Theorems: A, B, C on circle. AB is diameter. Angle BAC = $30^\\circ$. Find Angle ABC.",
                steps: ["Angle in a semicircle is $90^\\circ$. So Angle ACB = $90^\\circ$.", "Angles in triangle sum to $180^\\circ$.", "$180 - 90 - 30$.", "Final Answer: $$60^\\circ$$"]
            },
            // JAN 14
            {
                q: "Probability: Box has 4 Red, 6 Blue. Pick 2 without replacement. P(Red then Blue).",
                steps: ["P(Red 1st) = $\\frac{4}{10}$.", "P(Blue 2nd) = $\\frac{6}{9}$ (one less sweet).", "Multiply: $\\frac{4}{10} \\times \\frac{6}{9} = \\frac{24}{90}$.", "Simplify.", "Final Answer: $$\\frac{4}{15}$$"]
            },
            // JAN 15
            {
                q: "Functions: $f(x) = x^2 - 4$. $g(x) = 2x$. Find $fg(3)$.",
                steps: ["Inside first: $g(3) = 2(3) = 6$.", "Outside second: $f(6) = 6^2 - 4$.", "$36 - 4$.", "Final Answer: $$32$$"]
            },
            // JAN 16
            {
                q: "Volume: Cylinder radius 4cm, height 10cm. Give answer in terms of $\\pi$.",
                steps: ["Formula: $V = \\pi r^2 h$.", "$V = \\pi \\times 4^2 \\times 10$.", "$V = \\pi \\times 16 \\times 10$.", "Final Answer: $$160\\pi \\text{ cm}^3$$"]
            },
            // JAN 17
            {
                q: "Percent Change: A car value drops from £8000 to £6000. Calculate percentage decrease.",
                steps: ["Change: $8000 - 6000 = 2000$.", "Formula: $\\frac{\\text{Change}}{\\text{Original}} \\times 100$.", "$\\frac{2000}{8000} \\times 100 = \\frac{1}{4} \\times 100$.", "Final Answer: $$25\\%$$"]
            },
            // JAN 18
            {
                q: "Vectors: $\\vec{AB} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$. Calculate magnitude $|\\vec{AB}|$.",
                steps: ["Pythagoras: $\\sqrt{x^2 + y^2}$.", "$\\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16}$.", "$\\sqrt{25}$.", "Final Answer: $$5$$"]
            },
            // JAN 19
            {
                q: "Solve $x^2 > 25$.",
                steps: ["Roots are $\\pm 5$.", "Sketch graph $y=x^2-25$.", "We want graph ABOVE axis ($>0$).", "This happens outside the roots.", "Final Answer: $$x > 5 \\text{ or } x < -5$$"]
            },
            // JAN 20
            {
                q: "Direct Proportion: $y \\propto x^2$. When $x=2, y=20$. Find $y$ when $x=3$.",
                steps: ["Equation: $y = kx^2$.", "Find k: $20 = k(2^2) \\rightarrow 20 = 4k \\rightarrow k=5$.", "Formula: $y = 5x^2$.", "Sub $x=3$: $y = 5(3^2) = 5(9)$.", "Final Answer: $$45$$"]
            },
            // JAN 21
            {
                q: "Surds: Simplify $\\sqrt{75} + \\sqrt{12}$.",
                steps: ["$\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$.", "$\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$.", "Add: $5\\sqrt{3} + 2\\sqrt{3}$.", "Final Answer: $$7\\sqrt{3}$$"]
            },
            // JAN 22
            {
                q: "Completing Square: Write $x^2 + 6x - 2$ in form $(x+a)^2 + b$.",
                steps: ["Halve 6 to get 3: $(x+3)^2$.", "Subtract square of 3: $(x+3)^2 - 9 - 2$.", "Simplify.", "Final Answer: $$(x+3)^2 - 11$$"]
            },
            // JAN 23
            {
                q: "Pressure: Force = 100N, Area = $20 \\text{ cm}^2$. Find Pressure.",
                steps: ["Formula: $P = F \\div A$.", "$P = 100 \\div 20$.", "Final Answer: $$5 \\text{ N/cm}^2$$"]
            },










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