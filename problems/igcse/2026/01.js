const problemBank = [
    // 1 January
    {
        "id": "003001",
        "date": "1 January 2026",
        "major_area": "Algebra",
        "topic": "Laws of Indices",
        "subtopic": "Indices II",
        "difficulty": "B/A",
        "q": "(a) Evaluate $27^{\\frac{2}{3}}$ without the use of a calculator.<br>(b) Simplify fully $(16x^8)^{\\frac{1}{4}}$.",
        "steps": [
            "For part (a), the denominator of the index represents the cube root: $\\sqrt[3]{27} = 3$.",
            "We then apply the numerator of the index, which is the square: $3^2 = 9$.",
            "For part (b), we apply the power of $\\frac{1}{4}$ to both the coefficient and the variable independently.",
            "The fourth root of 16 is calculated as $\\sqrt[4]{16} = 2$, since $2 \\times 2 \\times 2 \\times 2 = 16$.",
            "For the variable $x^8$, we multiply the indices: $8 \\times \\dfrac{1}{4} = 2$.",
            "Combining these results gives the final simplified expression.",
            "Final Answer: $$(a)\\ 9,\\ (b)\\ 2x^2$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 27^{2/3} = 27^{1/3} = 3,\\ (b)\\ 4x^2$$",
        "feedback": "In part (a) you forgot to square the cube root. In part (b) you took the fourth root of 16 incorrectly."
    },
    {
        "ans": "$$(a)\\ 27^{2/3} = 27^2 = 729,\\ (b)\\ 2x^4$$",
        "feedback": "In part (a) you applied the numerator before the denominator. In part (b) you multiplied the indices incorrectly."
    },
    {
        "ans": "$$(a)\\ 9,\\ (b)\\ x^2$$",
        "feedback": "Part (a) is correct, but in part (b) you forgot to apply the fourth root to the coefficient 16."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root Before Power",
            "content": "In Paper 2 (Non-Calculator), you must prioritize the root before the power. Attempting to square 27 before taking the cube root is mathematically valid but numerically cumbersome. Mastering the 'recalls' of powers—specifically squares up to 15 and cubes up to 5—is a mandatory requirement for the 2025 syllabus."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 2 January
    {
        "id": "003002",
        "date": "2 January 2026",
        "major_area": "Geometry",
        "topic": "Circle Theorems",
        "subtopic": "Circle Theorems 2",
        "difficulty": "A/A*",
        "img": "true",
        "q": "$ABCD$ is a cyclic quadrilateral where the diagonal $AD$ passes through the centre $O$. Angle $BOD = 72^\\circ$ and the chord $BC$ is equal in length to chord $CD$.<br>(a) State the size of angle $ABD$, giving a geometric reason.<br>(b) Calculate the size of angle $CBD$.<br>(c) Find the total size of angle $ABC$.",
        "steps": [
            "For part (a), because $AD$ is a diameter, angle $ABD$ is subtended by a semicircle. Therefore, $\\angle ABD = 90^\\circ$.",
            "For part (b), we observe that $\\triangle BCD$ is an isosceles triangle because $BC = CD$.",
            "The angle at the centre $\\angle COD$ is half of $\\angle BOD$ if we consider the symmetry of equal chords, so $\\angle COD = 36^\\circ$.",
            "The angle at the circumference $\\angle CBD$ is half the angle at the centre $\\angle COD$ subtended by the same arc. Therefore, $\\angle CBD = 36^\\circ \\div 2 = 18^\\circ$.",
            "For part (c), we sum the two component angles: $\\angle ABC = \\angle ABD + \\angle CBD$.",
            "Calculation: $90^\\circ + 18^\\circ = 108^\\circ$.",
            "Final Answer: $$(a)\\ 90^\\circ\\text{ (Angle in a semicircle)},\\ (b)\\ 18^\\circ,\\ (c)\\ 108^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 90^\\circ,\\ (b)\\ 36^\\circ,\\ (c)\\ 126^\\circ$$",
        "feedback": "Part (a) is correct, but in part (b) you used the centre angle instead of halving it."
    },
    {
        "ans": "$$(a)\\ 72^\\circ,\\ (b)\\ 18^\\circ,\\ (c)\\ 90^\\circ$$",
        "feedback": "Part (b) is correct, but in part (a) you ignored the semicircle rule."
    },
    {
        "ans": "$$(a)\\ 72^\\circ,\\ (b)\\ 36^\\circ,\\ (c)\\ 108^\\circ$$",
        "feedback": "Part (c) is correct, but parts (a) and (b) misapply the circle theorems."
    }
],

        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Multi-Theorem Synthesis",
            "content": "This is a classic 'Level 8' IGCSE problem. It requires the synthesis of three distinct geometric properties: the semicircle rule, the relationship between equal chords, and the centre-to-circumference theorem. In the 2025 series, marks are heavily weighted toward the clear identification of these reasons."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 3 January
    {
        "id": "003003",
        "date": "3 January 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Stationary Points",
        "difficulty": "B/A",
        "q": "The equation of a curve is $y = x^2 - 8x + 5$.<br>(a) Find the expression for $\\dfrac{dy}{dx}$.<br>(b) Find the coordinates of the turning point of the curve.<br>(c) By considering the second derivative, determine the nature of this turning point.",
        "steps": [
            "For part (a), we differentiate each term using the rule $\\dfrac{d}{dx}(ax^n) = anx^{n-1}$.",
            "Calculation: $\\dfrac{dy}{dx} = 2x - 8$.",
            "For part (b), stationary points occur when the gradient is zero. We set $2x - 8 = 0$, which gives $x = 4$.",
            "To find the $y$-coordinate, we substitute $x = 4$ into the original equation: $y = (4)^2 - 8(4) + 5 = 16 - 32 + 5 = -11$.",
            "For part (c), we find the second derivative $\\dfrac{d^2y}{dx^2}$ by differentiating $2x - 8$.",
            "Calculation: $\\dfrac{d^2y}{dx^2} = 2$.",
            "Since the second derivative is positive ($>0$), the turning point is a minimum.",
            "Final Answer: $$(a)\\ 2x - 8,\\ (b)\\ (4, -11),\\ (c)\\ \\text{Minimum}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 2x + 8,\\ (b)\\ (4, -11),\\ (c)\\ \\text{Maximum}$$",
        "feedback": "Part (b) is correct, but in part (a) you differentiated $-8x$ incorrectly, and in part (c) a positive second derivative indicates a minimum."
    },
    {
        "ans": "$$(a)\\ 2x - 8,\\ (b)\\ (8, -11),\\ (c)\\ \\text{Minimum}$$",
        "feedback": "Part (a) and (c) are correct, but in part (b) you substituted the wrong $x$ value."
    },
    {
        "ans": "$$(a)\\ 2,\\ (b)\\ (4, -11),\\ (c)\\ \\text{Maximum}$$",
        "feedback": "You treated the derivative as a constant and misinterpreted the second derivative."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Second Derivative Test",
            "content": "The 2025 IGCSE syllabus explicitly requires the second derivative test to justify the nature of stationary points. Simply looking at the shape of the parabola is no longer sufficient for full marks in Paper 4. Remember: $f''(x) > 0$ is a minimum, and $f''(x) < 0$ is a maximum."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 4 January
    {
        "id": "003004",
        "date": "4 January 2026",
        "major_area": "Probability",
        "topic": "Basic Probability",
        "subtopic": "Sets and Venn Diagrams",
        "difficulty": "B/C",
        "q": "In a group of 20 students, 12 study Art ($A$), 10 study Biology ($B$), and 18 study at least one of these subjects.<br>(a) Find the number of students who study both Art and Biology, $n(A \\cap B)$.<br>(b) A student is chosen at random from the whole group. Find the probability that the student studies Biology but not Art.",
        "steps": [
            "For part (a), we use the inclusion-exclusion principle: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.",
            "Substituting the values: $18 = 12 + 10 - n(A \\cap B)$.",
            "Simplifying gives $18 = 22 - n(A \\cap B)$, so $n(A \\cap B) = 4$.",
            "For part (b), we find the number of students in the 'Biology only' region.",
            "Calculation: $n(B) - n(A \\cap B) = 10 - 4 = 6$.",
            "The probability is the number of 'Biology only' students divided by the total group size: $\\dfrac{6}{20}$.",
            "Final Answer: $$(a)\\ 4,\\ (b)\\ \\dfrac{3}{10}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 2,\\ (b)\\ \\dfrac{1}{5}$$",
        "feedback": "You subtracted incorrectly in part (a), which led to an incorrect Biology‑only region."
    },
    {
        "ans": "$$(a)\\ 4,\\ (b)\\ \\dfrac{1}{2}$$",
        "feedback": "Part (a) is correct, but in part (b) you used the intersection instead of Biology‑only."
    },
    {
        "ans": "$$(a)\\ 6,\\ (b)\\ \\dfrac{3}{10}$$",
        "feedback": "Part (b) is correct, but in part (a) you added instead of subtracting when applying inclusion–exclusion."
    }
],

        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Set Notation Precision",
            "content": "In IGCSE Set Theory, the phrase 'Biology but not Art' refers to the set $B \\cap A'$. Visualizing this on a Venn diagram is the most effective way to avoid adding the intersection by mistake. Always ensure your final probability is simplified to its lowest terms unless specified otherwise."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 5 January
    {
        "id": "003005",
        "date": "5 January 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Surds",
        "difficulty": "B/C",
        "q": "(a) Rationalise the denominator of $\\dfrac{10}{\\sqrt{2}}$, giving your answer in its simplest form.<br>(b) Simplify $2\\sqrt{18} - \\sqrt{8}$ without using a calculator.",
        "steps": [
            "For part (a), we multiply both the numerator and the denominator by $\\sqrt{2}$.",
            "Calculation: $\\dfrac{10 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\dfrac{10\\sqrt{2}}{2}$.",
            "Simplifying the fraction gives $5\\sqrt{2}$.",
            "For part (b), we first simplify each surd by finding square factors.",
            "$\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$, so $2\\sqrt{18} = 6\\sqrt{2}$.",
            "$\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$.",
            "Subtracting the terms: $6\\sqrt{2} - 2\\sqrt{2} = 4\\sqrt{2}$.",
            "Final Answer: $$(a)\\ 5\\sqrt{2},\\ (b)\\ 4\\sqrt{2}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ \\dfrac{10}{2} = 5,\\ (b)\\ 4\\sqrt{8}$$",
        "feedback": "In part (a) you forgot to multiply the numerator by $\\sqrt{2}$. In part (b) you did not simplify the surds fully."
    },
    {
        "ans": "$$(a)\\ 10\\sqrt{2},\\ (b)\\ 2\\sqrt{2}$$",
        "feedback": "Part (a) incorrectly multiplies only the numerator. Part (b) simplifies $\\sqrt{18}$ incorrectly."
    },
    {
        "ans": "$$(a)\\ 5\\sqrt{2},\\ (b)\\ 8\\sqrt{2}$$",
        "feedback": "Part (a) is correct, but in part (b) you doubled instead of subtracting the simplified surds."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Surd Fluency",
            "content": "Rationalising the denominator is a new emphasis in the 0580 syllabus. It is a fundamental algebraic skill used to simplify expressions for Paper 2. Always look for the largest square number ($4, 9, 16, 25...$) when simplifying surds to ensure the radicand is as small as possible."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 6 January
    {
        "id": "003006",
        "date": "6 January 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Inverse Functions",
        "difficulty": "B/A",
        "q": "The function $f$ is defined by $f(x) = 2x - 5$.<br>(a) Find the value of $f(3.5)$.<br>(b) Find an expression for the inverse function $f^{-1}(x)$.<br>(c) Solve the equation $f(x) = f^{-1}(x)$.",
        "steps": [
            "For part (a), we substitute $x = 3.5$ into the function: $f(3.5) = 2(3.5) - 5 = 7 - 5 = 2$.",
            "For part (b), we use the formal method of interchanging variables. Let $y = 2x - 5$.",
            "Interchange $x$ and $y$: $x = 2y - 5$.",
            "Rearranging to solve for $y$: $x + 5 = 2y$, therefore $y = \\dfrac{x + 5}{2}$.",
            "For part (c), we set the two expressions equal: $2x - 5 = \\dfrac{x + 5}{2}$.",
            "Multiply by 2 to clear the fraction: $4x - 10 = x + 5$.",
            "Subtract $x$ and add 10 to both sides: $3x = 15$.",
            "Solving for $x$ gives $x = 5$.",
            "Final Answer: $$(a)\\ 2,\\ (b)\\ f^{-1}(x) = \\dfrac{x+5}{2},\\ (c)\\ x = 5$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 2,\\ (b)\\ 2x - 5,\\ (c)\\ x = 5$$",
        "feedback": "Part (a) and (c) are correct, but in part (b) you repeated the original function instead of finding the inverse."
    },
    {
        "ans": "$$(a)\\ 1,\\ (b)\\ \\dfrac{x - 5}{2},\\ (c)\\ x = 5$$",
        "feedback": "Part (c) is correct, but in part (a) you substituted incorrectly, and in part (b) you rearranged the inverse incorrectly."
    },
    {
        "ans": "$$(a)\\ 2,\\ (b)\\ \\dfrac{x+5}{2},\\ (c)\\ x = -5$$",
        "feedback": "Parts (a) and (b) are correct, but in part (c) you solved the equation incorrectly."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Reflections in y = x",
            "content": "When solving $f(x) = f^{-1}(x)$, you are finding the point where the function crosses the line of symmetry $y = x$. If you are short on time, you can often solve this more quickly by simply setting $f(x) = x$. Try it: $2x - 5 = x \\implies x = 5$. A sophisticated examiner will recognize this as high-level functional understanding."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 7 January
    {
        "id": "003007",
        "date": "7 January 2026",
        "major_area": "Vectors",
        "topic": "Vectors",
        "subtopic": "Vector Geometry",
        "difficulty": "A*",
        "img": "true",
        "q": "Relative to an origin $O$, the position vector of point $P$ is $2\\mathbf{a}$ and the position vector of point $Q$ is $3\\mathbf{b}$. Point $M$ is the midpoint of the line segment $PQ$.<br>(a) Find the vector $\\overrightarrow{PQ}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.<br>(b) Show that the position vector of $M$ is $\\mathbf{a} + 1.5\\mathbf{b}$.",
        "steps": [
            "For part (a), we navigate from $P$ to $Q$ via the origin: $\\overrightarrow{PQ} = \\overrightarrow{PO} + \\overrightarrow{OQ}$.",
            "Since $\\overrightarrow{PO} = -2\\mathbf{a}$, we have $\\overrightarrow{PQ} = -2\\mathbf{a} + 3\\mathbf{b}$.",
            "For part (b), the position vector of the midpoint $M$ is defined as $\\overrightarrow{OM} = \\overrightarrow{OP} + \\overrightarrow{PM}$.",
            "Since $M$ is the midpoint, $\\overrightarrow{PM} = 0.5\\overrightarrow{PQ} = 0.5(-2\\mathbf{a} + 3\\mathbf{b}) = -\\mathbf{a} + 1.5\\mathbf{b}$.",
            "Now we combine the paths: $\\overrightarrow{OM} = 2\\mathbf{a} + (-\\mathbf{a} + 1.5\\mathbf{b})$.",
            "Collecting like terms: $\\overrightarrow{OM} = \\mathbf{a} + 1.5\\mathbf{b}$.",
            "Final Answer: $$(a)\\ 3\\mathbf{b} - 2\\mathbf{a},\\ (b)\\ \\text{Shown}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 3\\mathbf{b} + 2\\mathbf{a},\\ (b)\\ \\mathbf{a} + 3\\mathbf{b}$$",
        "feedback": "In part (a) you reversed the direction of $\\overrightarrow{PO}$. In part (b) you doubled the midpoint vector instead of halving it."
    },
    {
        "ans": "$$(a)\\ \\mathbf{b} - \\mathbf{a},\\ (b)\\ \\dfrac{1}{2}(2\\mathbf{a} - 3\\mathbf{b})$$",
        "feedback": "Both parts use incorrect path combinations. The midpoint must be the average of the two position vectors."
    },
    {
        "ans": "$$(a)\\ 3\\mathbf{b} - 2\\mathbf{a},\\ (b)\\ 2\\mathbf{a} + 1.5\\mathbf{b}$$",
        "feedback": "Part (a) is correct, but in part (b) you added the full vector $OP$ instead of averaging $OP$ and $OQ$."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Midpoint Formula",
            "content": "While navigating paths is the most reliable method for complex vector proofs, you can verify your answer using the midpoint formula for position vectors: $\\overrightarrow{OM} = \\dfrac{1}{2}(\\overrightarrow{OP} + \\overrightarrow{OQ})$. Calculation: $\\dfrac{1}{2}(2\\mathbf{a} + 3\\mathbf{b}) = \\mathbf{a} + 1.5\\mathbf{b}$. This is an excellent way to double-check your work."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
      },
    // 8 January
    {
        "id": "003008",
        "date": "8 January 2026",
        "major_area": "Mensuration",
        "topic": "3D Shapes",
        "subtopic": "Surface Areas and Volumes",
        "difficulty": "B/C",
        "q": "A sector of a circle has a radius of $6\\text{ cm}$ and a sector angle of $60^\\circ$.<br>(a) Calculate the exact length of the arc. Give your answer in terms of $\\pi$.<br>(b) Calculate the exact area of the sector. Give your answer in terms of $\\pi$.",
        "steps": [
            "For part (a), we identify the fraction of the circle: $\\dfrac{60}{360} = \\dfrac{1}{6}$.",
            "The formula for arc length is $\\dfrac{\\theta}{360} \\times 2\\pi r$. Substituting our values: $\\dfrac{1}{6} \\times 2\\pi(6)$.",
            "Simplifying this gives $2\\pi\\text{ cm}$.",
            "For part (b), we use the formula for the area of a sector: $\\dfrac{\\theta}{360} \\times \\pi r^2$.",
            "Substituting our values: $\\dfrac{1}{6} \\times \\pi(6^2) = \\dfrac{1}{6} \\times 36\\pi$.",
            "Simplifying this gives $6\\pi\\text{ cm}^2$.",
            "Final Answer: $$(a)\\ 2\\pi\\text{ cm},\\ (b)\\ 6\\pi\\text{ cm}^2$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ \\pi\\text{ cm},\\ (b)\\ 3\\pi\\text{ cm}^2$$",
        "feedback": "You used $\\theta/360$ incorrectly by halving the fraction instead of using $1/6$."
    },
    {
        "ans": "$$(a)\\ 12\\pi\\text{ cm},\\ (b)\\ 36\\pi\\text{ cm}^2$$",
        "feedback": "You used the full circumference and full area instead of the sector fraction."
    },
    {
        "ans": "$$(a)\\ 2\\pi\\text{ cm},\\ (b)\\ 12\\pi\\text{ cm}^2$$",
        "feedback": "Part (a) is correct, but in part (b) you forgot to divide by 6."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Exact Values of Pi",
            "content": "In the new Paper 2 format, questions often require answers 'in terms of $\\pi$'. This is a direct test of your ability to manipulate fractions and indices without relying on a calculator. Always simplify your fraction of the circle before multiplying by the radius to keep the arithmetic manageable."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 9 January
    {
        "id": "003009",
        "date": "9 January 2026",
        "major_area": "Trigonometry",
        "topic": "Trigonometry",
        "subtopic": "SOHCAHTOA",
        "difficulty": "B/A",
        "q": "Without using a calculator, work out the exact value of:<br>$$\\sin(60^\\circ) \\times \\tan(30^\\circ) + \\cos(45^\\circ)^2$$",
        "steps": [
            "We recall the exact trigonometric values required for the 2025 syllabus.",
            "$\\sin(60^\\circ) = \\dfrac{\\sqrt{3}}{2}$ and $\\tan(30^\\circ) = \\dfrac{1}{\\sqrt{3}}$.",
            "Multiplying these gives $\\dfrac{\\sqrt{3}}{2} \\times \\dfrac{1}{\\sqrt{3}} = \\dfrac{1}{2}$.",
            "Next, we recall $\\cos(45^\\circ) = \\dfrac{\\sqrt{2}}{2}$ or $\\dfrac{1}{\\sqrt{2}}$.",
            "Squaring this value: $\\left(\\dfrac{1}{\\sqrt{2}}\\right)^2 = \\dfrac{1}{2}$.",
            "Finally, we sum the two results: $\\dfrac{1}{2} + \\dfrac{1}{2} = 1$.",
            "Final Answer: $$1$$"
        ],
        "wrong_options": [
    {
        "ans": "$$\\dfrac{\\sqrt{3}}{2}$$",
        "feedback": "You multiplied $\\sin(60)$ and $\\tan(30)$ incorrectly and omitted the $\\cos(45)^2$ term."
    },
    {
        "ans": "$$\\dfrac{3}{2}$$",
        "feedback": "You added the exact values without rationalising or squaring correctly."
    },
    {
        "ans": "$$0$$",
        "feedback": "You assumed $\\tan(30)$ cancels $\\sin(60)$ completely and forgot the $\\cos(45)^2$ contribution."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Non-Calculator Trig",
            "content": "The ability to recall and manipulate exact trigonometric values is now a mandatory component of the IGCSE Extended Paper 2. If you find these difficult to memorize, I recommend learning the derivation using the equilateral triangle (for $30/60$ degrees) and the right-angled isosceles triangle (for 45 degrees)."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 10 January
    {
        "id": "003010",
        "date": "10 January 2026",
        "major_area": "Algebra",
        "topic": "Quadratic sequences",
        "subtopic": "Sequences",
        "difficulty": "A",
        "q": "The first four terms of a quadratic sequence are $5, 12, 23, 38$.<br>(a) Find the $n^{th}$ term of this sequence.<br>(b) Find the $20^{th}$ term of this sequence.",
        "steps": [
            "For part (a), we find the first differences: $7, 11, 15$.",
            "We find the second difference: $4$.",
            "Since the second difference is constant, the sequence is quadratic with a leading term of $\\dfrac{4}{2}n^2 = 2n^2$.",
            "We subtract $2n^2$ from each term of the original sequence: $(5 - 2), (12 - 8), (23 - 18), (38 - 32)$, which gives $3, 4, 5, 6$.",
            "The $n^{th}$ term of this linear remainder is $n + 2$.",
            "Combining these gives the final expression: $2n^2 + n + 2$.",
            "For part (b), we substitute $n = 20$ into our expression: $2(20^2) + 20 + 2$.",
            "Calculation: $2(400) + 22 = 800 + 22 = 822$.",
            "Final Answer: $$(a)\\ 2n^2 + n + 2,\\ (b)\\ 822$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 4n^2 + n + 2,\\ (b)\\ 1642$$",
        "feedback": "You doubled the second difference instead of halving it to find the coefficient of $n^2$."
    },
    {
        "ans": "$$(a)\\ 2n^2 + 2n + 1,\\ (b)\\ 841$$",
        "feedback": "Part (a) has an incorrect linear remainder, which leads to an incorrect 20th term."
    },
    {
        "ans": "$$(a)\\ n^2 + 3n + 1,\\ (b)\\ 461$$",
        "feedback": "You treated the sequence as linear-plus-square without using the method of differences."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Second Difference",
            "content": "In quadratic sequences, the coefficient of $n^2$ is always half of the constant second difference. If you master this 'method of differences', you can solve any Extended-level sequence problem without resorting to complex simultaneous equations."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 11 January
    {
        "id": "003011",
        "date": "11 January 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Limits of Accuracy",
        "difficulty": "B",
        "q": "The distance $d$ is $100\\text{ m}$ correct to the nearest $5\\text{ m}$. The time $t$ is $10\\text{ s}$ correct to the nearest second.<br>Calculate the upper bound for the average speed. Give your answer to 3 significant figures.",
        "steps": [
            "To maximize the speed, we must divide the upper bound of distance by the lower bound of time: $S_{\\text{max}} = \\dfrac{D_{\\text{UB}}}{T_{\\text{LB}}}$.",
            "The distance is rounded to the nearest $5\\text{ m}$, so the error interval is $\\pm 2.5\\text{ m}$. $D_{\\text{UB}} = 102.5\\text{ m}$.",
            "The time is rounded to the nearest $1\\text{ s}$, so the error interval is $\\pm 0.5\\text{ s}$. $T_{\\text{LB}} = 9.5\\text{ s}$.",
            "Calculation: $102.5 \\div 9.5 \\approx 10.7894...$.",
            "Rounding to 3 significant figures gives $10.8\\text{ m/s}$.",
            "Final Answer: $$10.8\\text{ m/s}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$10.3\\text{ m/s}$$",
        "feedback": "You used the lower bound of distance and upper bound of time, which gives the minimum speed."
    },
    {
        "ans": "$$9.5\\text{ m/s}$$",
        "feedback": "You used the rounded values 100/10 instead of applying bounds."
    },
    {
        "ans": "$$11.0\\text{ m/s}$$",
        "feedback": "You used the upper bound for both distance and time, which does not maximise the quotient."
    }
],

        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Boundary Logic",
            "content": "A very common error is using the upper bound for both values in a division. In IGCSE Extended questions involving fractions, you must remember the 'inverse rule': to make a fraction as large as possible, you must make the denominator as small as possible."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 12 January
    {
        "id": "003012",
        "date": "12 January 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Estimating Gradients and Basic Differentiation",
        "difficulty": "A/A*",
        "q": "A curve has the equation $y = x^3 - 4x + 1$.<br>(a) Find the gradient of the curve at the point where $x = 2$.<br>(b) Find the equation of the tangent to the curve at the point where $x = 2$.",
        "steps": [
            "For part (a), we differentiate the equation: $\\dfrac{dy}{dx} = 3x^2 - 4$.",
            "Substituting $x = 2$ gives the gradient $m$: $3(2^2) - 4 = 12 - 4 = 8$.",
            "For part (b), we first find the $y$-coordinate when $x = 2$: $y = 2^3 - 4(2) + 1 = 8 - 8 + 1 = 1$.",
            "We now use the straight-line formula $y - y_1 = m(x - x_1)$ with the point $(2, 1)$ and $m = 8$.",
            "Substituting the values: $y - 1 = 8(x - 2)$.",
            "Expanding and rearranging: $y - 1 = 8x - 16 \\implies y = 8x - 15$.",
            "Final Answer: $$(a)\\ 8,\\ (b)\\ y = 8x - 15$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 4,\\ (b)\\ y = 4x - 7$$",
        "feedback": "You differentiated $x^3$ incorrectly as $3x$ instead of $3x^2$."
    },
    {
        "ans": "$$(a)\\ 8,\\ (b)\\ y = 8x + 1$$",
        "feedback": "Part (a) is correct, but in part (b) you used the wrong point on the curve."
    },
    {
        "ans": "$$(a)\\ -8,\\ (b)\\ y = -8x + 17$$",
        "feedback": "You substituted $x = -2$ instead of $x = 2$ when evaluating the derivative."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Tangents vs Curves",
            "content": "Remember that a tangent is a straight line that 'just touches' the curve at a specific point. Because it is a straight line, it must follow the $y = mx + c$ format. Using the derivative to find 'm' is the bridge between calculus and coordinate geometry."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 13 January
    {
        "id": "003013",
        "date": "13 January 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Algebraic Fractions 2",
        "difficulty": "A",
        "q": "(a) Solve the equation $\\dfrac{2}{x} + \\dfrac{3}{x + 1} = 1$.<br>(b) Give your answers correct to 2 decimal places.",
        "steps": [
            "To solve, we first find a common denominator: $\\dfrac{2(x + 1) + 3x}{x(x + 1)} = 1$.",
            "Clearing the fraction: $2x + 2 + 3x = x(x + 1)$.",
            "Simplifying the left side: $5x + 2 = x^2 + x$.",
            "Rearranging into standard quadratic form: $x^2 - 4x - 2 = 0$.",
            "We use the quadratic formula: $x = \\dfrac{-(-4) \\pm \\sqrt{(-4)^2 - 4(1)(-2)}}{2(1)}$.",
            "Calculation: $x = \\dfrac{4 \\pm \\sqrt{16 + 8}}{2} = \\dfrac{4 \\pm \\sqrt{24}}{2}$.",
            "Evaluating for $x$: $x \\approx 4.449...$ or $x \\approx -0.449...$.",
            "Rounding to 2 decimal places: $x = 4.45$ or $x = -0.45$.",
            "Final Answer: $$4.45, -0.45$$"
        ],
        "wrong_options": [
    {
        "ans": "$$x = 2.45 \\text{ or } x = -2.45$$",
        "feedback": "You formed the quadratic incorrectly by forgetting to multiply the right-hand side by the common denominator."
    },
    {
        "ans": "$$x = 4.45 \\text{ or } x = 0.45$$",
        "feedback": "Part of the quadratic was solved correctly, but you lost the negative root when taking the square root of 24."
    },
    {
        "ans": "$$x = 3 \\text{ or } x = -1$$",
        "feedback": "These values come from treating the equation as linear. The correct method produces a quadratic."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Rational Rearrangement",
            "content": "The most common error in algebraic fraction equations is failing to multiply the entire right-hand side by the common denominator. In this case, ensure the '1' is multiplied by $x(x+1)$. Forgetting this will lead to a linear equation instead of the required quadratic."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 14 January
    {
        "id": "003014",
        "date": "14 January 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Plotting Curved Graphs",
        "difficulty": "B/A",
        "q": "The function $f$ is defined as $f(x) = \\dfrac{1}{x - 3} + 2$.<br>(a) State the value of $x$ that must be excluded from the domain.<br>(b) State the equation of the horizontal asymptote of the graph $y = f(x)$.",
        "steps": [
            "For part (a), the function is undefined when the denominator is zero.",
            "Setting $x - 3 = 0$ gives $x = 3$. This value must be excluded.",
            "For part (b), the horizontal asymptote occurs as $x$ becomes very large ($x \\to \\infty$).",
            "As $x$ increases, the term $\\dfrac{1}{x - 3}$ approaches zero.",
            "Therefore, the function approaches $y = 0 + 2$.",
            "The equation of the asymptote is $y = 2$.",
            "Final Answer: $$(a)\\ x \\neq 3,\\ (b)\\ y = 2$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ x \\neq -3,\\ (b)\\ y = 0$$",
        "feedback": "The denominator becomes zero at $x = 3$, not $-3$. The horizontal asymptote is the constant term outside the fraction."
    },
    {
        "ans": "$$(a)\\ x \\neq 3,\\ (b)\\ y = \\dfrac{1}{3}$$",
        "feedback": "Part (a) is correct, but the asymptote is not found by substituting $x = 3$; it is the value the function approaches as $x$ becomes large."
    },
    {
        "ans": "$$(a)\\ x \\neq 0,\\ (b)\\ y = 3$$",
        "feedback": "Both parts misinterpret the structure of the reciprocal function."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Asymptote Intuition",
            "content": "In the 2025 syllabus, understanding the behavior of reciprocal graphs is essential. An asymptote is a line that the curve gets closer and closer to but never actually touches. The vertical asymptote is found from the domain restriction, and the horizontal one from the constant term outside the fraction."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 15 January
    {
        "id": "003015",
        "date": "15 January 2026",
        "major_area": "Statistics",
        "topic": "Averages & Range",
        "subtopic": "Averages and Measures of Spread (Ungrouped Data)",
        "difficulty": "B/C",
        "q": "The mean mass of a group of 5 athletes is $72\\text{ kg}$.<br>(a) Calculate the total mass of the 5 athletes.<br>(b) A 6th athlete with a mass of $90\\text{ kg}$ joins the group. Calculate the new mean mass for the 6 athletes.",
        "steps": [
            "For part (a), we use the definition of the mean: $\\text{Mean} = \\dfrac{\\text{Total Mass}}{\\text{Number of People}}$.",
            "Rearranging this gives $\\text{Total Mass} = 72 \\times 5 = 360\\text{ kg}$.",
            "For part (b), we add the mass of the new athlete to the previous total: $360 + 90 = 450\\text{ kg}$.",
            "We then divide this new total by the updated number of athletes (6).",
            "Calculation: $450 \\div 6 = 75\\text{ kg}$.",
            "Final Answer: $$(a)\\ 360\\text{ kg},\\ (b)\\ 75\\text{ kg}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 72\\text{ kg},\\ (b)\\ 27\\text{ kg}$$",
        "feedback": "You treated the mean as the total instead of multiplying by the number of athletes."
    },
    {
        "ans": "$$(a)\\ 360\\text{ kg},\\ (b)\\ 81\\text{ kg}$$",
        "feedback": "Part (a) is correct, but in part (b) you divided by 5 instead of 6."
    },
    {
        "ans": "$$(a)\\ 300\\text{ kg},\\ (b)\\ 65\\text{ kg}$$",
        "feedback": "Both parts use incorrect totals. Always calculate the initial total before adding new data."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Working with Totals",
            "content": "In 'averages' problems, the most powerful tool is finding the total sum of the data. Almost every question that involves adding or removing a data point is solved by establishing the initial total first. This logical step ensures you are working with the correct numerical base before performing the final division."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 16 January
    {
        "id": "003016",
        "date": "16 January 2026",
        "major_area": "Geometry",
        "topic": "Circle Theorems",
        "subtopic": "Circle Theorems 2",
        "difficulty": "B/A",
        "img": "true",
        "q": "$TP$ and $TQ$ are tangents to a circle with centre $O$ and radius $5\\text{ cm}$. The point $T$ is $13\\text{ cm}$ from the centre $O$.<br>(a) Calculate the length of the tangent $TP$.<br>(b) Calculate the size of the angle $PTQ$ to 1 decimal place.",
        "steps": [
            "For part (a), we recall that the tangent to a circle is perpendicular to the radius at the point of contact. This creates a right-angled triangle $OPT$.",
            "Using Pythagoras' Theorem: $TP^2 + OP^2 = OT^2$.",
            "Substituting the values: $TP^2 + 5^2 = 13^2 \\implies TP^2 + 25 = 169$.",
            "Solving for $TP$: $TP = \\sqrt{144} = 12\\text{ cm}$.",
            "For part (b), we find angle $OTP$ using trigonometry: $\\sin(\\angle OTP) = \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}} = \\dfrac{5}{13}$.",
            "Calculation: $\\angle OTP = \\sin^{-1}(5/13) \\approx 22.619...^\\circ$.",
            "Since the triangle $OTQ$ is congruent to $OTP$, the total angle $PTQ$ is $2 \\times 22.619...^\\circ$.",
            "Rounding to 1 decimal place: $45.2^\\circ$.",
            "Final Answer: $$(a)\\ 12\\text{ cm},\\ (b)\\ 45.2^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 8\\text{ cm},\\ (b)\\ 30.0^\\circ$$",
        "feedback": "You subtracted instead of applying Pythagoras. The angle must be doubled because there are two congruent right triangles."
    },
    {
        "ans": "$$(a)\\ 12\\text{ cm},\\ (b)\\ 22.6^\\circ$$",
        "feedback": "Part (a) is correct, but in part (b) you forgot to double the angle $OTP$."
    },
    {
        "ans": "$$(a)\\ 5\\text{ cm},\\ (b)\\ 60.0^\\circ$$",
        "feedback": "Both parts misapply tangent properties. Tangents from a point are equal and form right angles with the radius."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Tangent Properties",
            "content": "There are two vital properties to remember here: first, the radius-tangent angle is always $90^\\circ$; second, tangents from an external point are equal in length. This symmetry allows you to solve for angles and lengths in one triangle and simply double them to find the total for the quadrilateral $OPTQ$."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 17 January
    {
        "id": "003017",
        "date": "17 January 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Percentage Change and Interest",
        "difficulty": "B/A",
        "q": "An investment of $£500$ is made into an account paying $10\\%$ compound interest per year.<br>(a) Calculate the total value of the investment after 2 years.<br>(b) Find the smallest number of years it will take for the total value of the investment to exceed $£800$.",
        "steps": [
            "For part (a), we identify the multiplier for a $10\\%$ increase: $1 + 0.10 = 1.10$.",
            "Using the compound interest formula: $500 \\times (1.10)^2$.",
            "Calculation: $500 \\times 1.21 = £605$.",
            "For part (b), we use the inequality $500 \\times (1.1)^n > 800$.",
            "Dividing by 500 gives $1.1^n > 1.6$.",
            "Using a calculator to test values for $n$:",
            "If $n=4, 1.1^4 = 1.4641$. If $n=5, 1.1^5 = 1.61051$.",
            "Therefore, it takes 5 years for the value to exceed $£800$.",
            "Final Answer: $$(a)\\ £605,\\ (b)\\ 5\\text{ years}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ £600,\\ (b)\\ 4\\text{ years}$$",
        "feedback": "Part (a) uses simple interest instead of compound interest. In part (b), $1.1^4$ is still below the target."
    },
    {
        "ans": "$$(a)\\ £605,\\ (b)\\ 6\\text{ years}$$",
        "feedback": "Part (a) is correct, but in part (b) you did not check the smallest $n$ for which the value exceeds £800."
    },
    {
        "ans": "$$(a)\\ £550,\\ (b)\\ 5\\text{ years}$$",
        "feedback": "Part (a) uses the wrong multiplier. Compound interest requires $(1.1)^2$."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Trial and Improvement",
            "content": "For Paper 4, you are expected to find the time period '$n$' in compound interest problems. While logarithms are not explicitly on the 0580 syllabus, the 'Trial and Improvement' method using the power key on your calculator is the standard approach. Always show your tests for both the year before and the year the target is exceeded."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 18 January
    {
        "id": "003018",
        "date": "18 January 2026",
        "major_area": "Algebra",
        "topic": "Direct & Inverse Proportion",
        "subtopic": "Proportion",
        "difficulty": "B/A",
        "q": "The variable $y$ is inversely proportional to the square of $x$. When $x = 2$, $y = 10$.<br>(a) Find the equation connecting $y$ and $x$.<br>(b) Calculate the value of $y$ when $x = 5$.",
        "steps": [
            "For part (a), the relationship is defined as $y = \\dfrac{k}{x^2}$.",
            "We substitute the given values to find the constant $k$: $10 = \\dfrac{k}{2^2} \\implies 10 = \\dfrac{k}{4}$.",
            "Solving for $k$ gives $k = 40$. The equation is $y = \\dfrac{40}{x^2}$.",
            "For part (b), we substitute $x = 5$ into our new equation.",
            "Calculation: $y = \\dfrac{40}{5^2} = \\dfrac{40}{25}$.",
            "Simplifying the fraction: $y = \\dfrac{8}{5} = 1.6$.",
            "Final Answer: $$(a)\\ y = \\dfrac{40}{x^2},\\ (b)\\ 1.6$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ y = \\dfrac{20}{x^2},\\ (b)\\ 0.8$$",
        "feedback": "You halved the constant incorrectly when solving for $k$."
    },
    {
        "ans": "$$(a)\\ y = \\dfrac{40}{x},\\ (b)\\ 8$$",
        "feedback": "Part (a) ignores the word 'square'. This leads to a completely different relationship."
    },
    {
        "ans": "$$(a)\\ y = \\dfrac{40}{x^2},\\ (b)\\ 5$$",
        "feedback": "Part (a) is correct, but in part (b) you substituted $x = 5$ incorrectly."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Power Proportions",
            "content": "Higher Tier and Extended students often miss the word 'square' or 'root' in proportion questions. Always read the question twice to ensure you have identified the correct power of $x$ before calculating $k$. Failing to square $x$ in this problem would result in a loss of almost all marks."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 19 January
    {
        "id": "003019",
        "date": "19 January 2026",
        "major_area": "Geometry",
        "topic": "Polygons",
        "subtopic": "Polygons and Circles",
        "difficulty": "B/C",
        "q": "The interior angle of a regular polygon is $144^\\circ$.<br>(a) Calculate the size of the exterior angle.<br>(b) Calculate the number of sides of this polygon.",
        "steps": [
            "For part (a), we recall that the interior and exterior angles of a polygon lie on a straight line and therefore sum to $180^\\circ$.",
            "Calculation: $180^\\circ - 144^\\circ = 36^\\circ$.",
            "For part (b), we use the property that the sum of the exterior angles of any convex polygon is $360^\\circ$.",
            "For a regular polygon, all exterior angles are equal. We divide the total by the size of one exterior angle: $360 \\div 36 = 10$.",
            "Final Answer: $$(a)\\ 36^\\circ,\\ (b)\\ 10$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 144^\\circ,\\ (b)\\ 2.5$$",
        "feedback": "You used the interior angle instead of subtracting from $180^\\circ$, and then divided $360$ by the wrong value."
    },
    {
        "ans": "$$(a)\\ 36^\\circ,\\ (b)\\ 8$$",
        "feedback": "Part (a) is correct, but in part (b) you used the interior angle formula instead of the exterior angle method."
    },
    {
        "ans": "$$(a)\\ 46^\\circ,\\ (b)\\ 7.8$$",
        "feedback": "Both parts are incorrect. The exterior angle must be $180 - 144$."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Exterior Constant",
            "content": "I always advise my students to work with exterior angles whenever possible. While the formula for interior angles $(n-2) \\times 180$ is useful, the fact that exterior angles always sum to $360$ provides a much faster and more reliable path to finding the number of sides ($n$)."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 20 January
    {
        "id": "003020",
        "date": "20 January 2026",
        "major_area": "Algebra",
        "topic": "Laws of Indices",
        "subtopic": "Indices II",
        "difficulty": "B/A",
        "q": "Simplify fully the following expression, leaving your answer in the form of a fraction:<br>$$(2x^{-2})^{-3}$$",
        "steps": [
            "We apply the external power of $-3$ to every term inside the bracket independently.",
            "First, we evaluate the constant: $2^{-3}$. This represents the reciprocal of $2^3$, which is $\\dfrac{1}{8}$.",
            "Next, we apply the power to the variable: $(x^{-2})^{-3}$. We multiply the indices: $-2 \\times -3 = 6$.",
            "Combining these results gives $\\dfrac{1}{8} \\times x^6 = \\dfrac{x^6}{8}$.",
            "Final Answer: $$\\dfrac{x^6}{8}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$\\dfrac{x^{-6}}{8}$$",
        "feedback": "You multiplied the indices correctly but forgot that a negative power inverts the base."
    },
    {
        "ans": "$$8x^6$$",
        "feedback": "You applied the power to the variable but not to the coefficient."
    },
    {
        "ans": "$$\\dfrac{1}{8x^6}$$",
        "feedback": "You inverted both the coefficient and the variable. Only the coefficient becomes a reciprocal."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Distributed Powers",
            "content": "A very common error is failing to apply the power to the coefficient. Many students correctly calculate $x^6$ but leave the coefficient as 2 or change it to -6. Remember that the bracket means *everything* inside is raised to the power of -3. Treat the number and the variable as two separate tasks."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 21 January
    {
        "id": "003021",
        "date": "21 January 2026",
        "major_area": "Trigonometry",
        "topic": "Trigonometry",
        "subtopic": "Graphs of Trigonometric Functions",
        "difficulty": "A",
        "q": "Without using a calculator, solve the equation $2\\cos(x) + 1 = 0$ for $0^\\circ \\le x \\le 360^\\circ$.",
        "steps": [
            "First, we rearrange the equation to isolate $\\cos(x)$: $2\\cos(x) = -1 \\implies \\cos(x) = -\\dfrac{1}{2}$.",
            "We identify the principal value (reference angle) for which $\\cos(x) = +\\dfrac{1}{2}$. This is $60^\\circ$.",
            "Since the value of the cosine is negative, the solutions must lie in the 2nd and 3rd quadrants (ASTC rule).",
            "2nd Quadrant solution: $180^\\circ - 60^\\circ = 120^\\circ$.",
            "3rd Quadrant solution: $180^\\circ + 60^\\circ = 240^\\circ$.",
            "Final Answer: $$120^\\circ, 240^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$60^\\circ, 300^\\circ$$",
        "feedback": "These are the angles where $\\cos(x) = +\\tfrac{1}{2}$. The equation requires $\\cos(x) = -\\tfrac{1}{2}$."
    },
    {
        "ans": "$$120^\\circ, 300^\\circ$$",
        "feedback": "You found one correct quadrant but used the wrong symmetry for the second solution."
    },
    {
        "ans": "$$240^\\circ, 360^\\circ$$",
        "feedback": "You included $360^\\circ$, which is outside the valid range for unique solutions."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Quadrant Analysis",
            "content": "In Paper 2, you will be expected to solve trigonometric equations using exact values. Always find the acute reference angle first (using the positive value), then use the 'CAST' diagram or the symmetry of the cosine graph to locate the specific quadrants where the function is negative."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 22 January
    {
        "id": "003022",
        "date": "22 January 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams",
        "subtopic": "Probability of Combined Events",
        "difficulty": "B/A",
        "q": "The probability that event $A$ occurs is $0.4$. The probability that event $B$ occurs is $0.5$.<br>(a) Given that $A$ and $B$ are independent events, calculate the probability that both $A$ and $B$ occur.<br>(b) Calculate the probability that neither $A$ nor $B$ occurs.",
        "steps": [
            "For part (a), because the events are independent, we use the multiplication rule: $P(A \\cap B) = P(A) \\times P(B)$.",
            "Calculation: $0.4 \\times 0.5 = 0.2$.",
            "For part (b), we first find the probability of the complement for each event.",
            "$P(A') = 1 - 0.4 = 0.6$ and $P(B') = 1 - 0.5 = 0.5$.",
            "Since the events are independent, their complements are also independent.",
            "Calculation: $0.6 \\times 0.5 = 0.3$.",
            "Final Answer: $$(a)\\ 0.2,\\ (b)\\ 0.3$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 0.9,\\ (b)\\ 0.1$$",
        "feedback": "You added the probabilities instead of multiplying for independent events."
    },
    {
        "ans": "$$(a)\\ 0.2,\\ (b)\\ 0.6$$",
        "feedback": "Part (a) is correct, but in part (b) you added the complements instead of multiplying them."
    },
    {
        "ans": "$$(a)\\ 0.4,\\ (b)\\ 0.5$$",
        "feedback": "Both parts ignore the independence rule. $P(A\\cap B)$ must be $P(A)P(B)$."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Independence Logic",
            "content": "Independence is a specific mathematical condition. In Paper 2, if you are told events are independent, you are being given a direct instruction to multiply the probabilities. Do not confuse this with mutually exclusive events, where you would add the probabilities."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 23 January
    {
        "id": "003023",
        "date": "23 January 2026",
        "major_area": "Geometry",
        "topic": "Coordinates",
        "subtopic": "Length and Midpoint of a Line Segment",
        "difficulty": "C",
        "q": "Point $A$ has coordinates $(2, 4)$ and Point $B$ has coordinates $(8, 10)$.<br>(a) Find the coordinates of the midpoint of $AB$.<br>(b) Find the equation of the perpendicular bisector of the line $AB$.",
        "steps": [
            "For part (a), we use the midpoint formula: $\\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)$.",
            "Calculation: $\\left(\\dfrac{2+8}{2}, \\dfrac{4+10}{2}\\right) = (5, 7)$.",
            "For part (b), we first find the gradient of $AB$: $m = \\dfrac{10 - 4}{8 - 2} = \\dfrac{6}{6} = 1$.",
            "The gradient of the perpendicular line is the negative reciprocal: $m_{\\perp} = -1$.",
            "We use the midpoint $(5, 7)$ and the perpendicular gradient in $y - y_1 = m(x - x_1)$.",
            "Calculation: $y - 7 = -1(x - 5) \\implies y - 7 = -x + 5$.",
            "Rearranging gives the final linear equation $y = -x + 12$.",
            "Final Answer: $$(a)\\ (5, 7),\\ (b)\\ y = -x + 12$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ (4, 6),\\ (b)\\ y = -x + 10$$",
        "feedback": "You averaged incorrectly in part (a), which shifted the bisector to the wrong point."
    },
    {
        "ans": "$$(a)\\ (5, 7),\\ (b)\\ y = x - 5$$",
        "feedback": "Part (a) is correct, but in part (b) you used the same gradient instead of the negative reciprocal."
    },
    {
        "ans": "$$(a)\\ (4, 6),\\ (b)\\ y = x + 1$$",
        "feedback": "Both parts are incorrect. The midpoint and perpendicular gradient must both be used."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Perpendicular Bisector",
            "content": "Finding a perpendicular bisector is a multi-skill task often found in Paper 4. You must find the midpoint for the position and the negative reciprocal gradient for the orientation. A common error is using one of the original points ($A$ or $B$) instead of the midpoint; remember, the bisector must pass through the center of the segment."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 24 January
    {
        "id": "003024",
        "date": "24 January 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Limits of Accuracy",
        "difficulty": "B/C",
        "q": "The value of $x$ is $5.4$ correct to 2 significant figures.<br>(a) Write down the lower bound of $x$.<br>(b) Write down the upper bound of $x$.<br>(c) State the error interval for $x$.",
        "steps": [
            "The second significant figure is in the tenths column ($0.1$).",
            "The degree of accuracy is $0.1$, so the error interval is $\\pm 0.05$.",
            "For part (a), the lower bound is $5.4 - 0.05 = 5.35$.",
            "For part (b), the upper bound is $5.4 + 0.05 = 5.45$.",
            "For part (c), the error interval is expressed using inequalities.",
            "Final Answer: $$(a)\\ 5.35,\\ (b)\\ 5.45,\\ (c)\\ 5.35 \\le x < 5.45$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 5.30,\\ (b)\\ 5.50,\\ (c)\\ 5.30 \\le x < 5.50$$",
        "feedback": "You used rounding to 1 decimal place instead of 2 significant figures."
    },
    {
        "ans": "$$(a)\\ 5.35,\\ (b)\\ 5.45,\\ (c)\\ 5.35 \\le x \\le 5.45$$",
        "feedback": "Part (c) is incorrect: the upper bound must be exclusive because 5.45 does not round to 5.4."
    },
    {
        "ans": "$$(a)\\ 5.4,\\ (b)\\ 5.5,\\ (c)\\ 5.4 \\le x < 5.5$$",
        "feedback": "You used the rounded value instead of applying the ±0.05 error interval."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Inclusive Boundaries",
            "content": "In the IGCSE Extended syllabus, you must use the correct inequality symbols for error intervals. The lower bound is inclusive ($\\le$) while the upper bound is exclusive ($<$). Writing $x \\le 5.45$ would imply that $5.45$ rounds to $5.4$, which is incorrect."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 25 January
    {
        "id": "003025",
        "date": "25 January 2026",
        "major_area": "Number",
        "topic": "Compound Measures",
        "subtopic": "Rates",
        "difficulty": "B/C",
        "q": "A cyclist travels $20\\text{ km}$ in $30\\text{ minutes}$.<br>(a) Calculate the speed of the cyclist in $\\text{km/h}$.<br>(b) Convert this speed into $\\text{metres per second (m/s)}$.",
        "steps": [
            "For part (a), we convert the time into hours: $30\\text{ minutes} = 0.5\\text{ hours}$.",
            "Speed = $\\text{Distance} \\div \\text{Time} = 20 \\div 0.5 = 40\\text{ km/h}$.",
            "For part (b), we convert km to m: $40\\text{ km} = 40,000\\text{ m}$.",
            "We convert hours to seconds: $1\\text{ hour} = 3600\\text{ seconds}$.",
            "Calculation: $40,000 \\div 3600 = 400 \\div 36$.",
            "Simplifying the fraction: $\\dfrac{100}{9} \\approx 11.1\\text{ m/s}$.",
            "Final Answer: $$(a)\\ 40\\text{ km/h},\\ (b)\\ 11.1\\text{ m/s}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 20\\text{ km/h},\\ (b)\\ 5.6\\text{ m/s}$$",
        "feedback": "You used 30 minutes as 1 hour instead of 0.5 hours, halving both answers."
    },
    {
        "ans": "$$(a)\\ 40\\text{ km/h},\\ (b)\\ 14\\text{ m/s}$$",
        "feedback": "Part (a) is correct, but in part (b) you multiplied by 3.6 instead of dividing."
    },
    {
        "ans": "$$(a)\\ 60\\text{ km/h},\\ (b)\\ 16.7\\text{ m/s}$$",
        "feedback": "You used 20 km in 20 minutes instead of 30 minutes, giving an inflated speed."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Unit Conversion Efficiency",
            "content": "Converting between km/h and m/s is a frequent requirement in IGCSE physics-style math problems. To convert km/h to m/s, you can use the shortcut of dividing by $3.6$. Understanding why this works (multiplying by 1000 and dividing by 3600) is key to modular math fluency."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 26 January
    {
        "id": "003026",
        "date": "26 January 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Factrising Expressions",
        "difficulty": "B/A",
        "q": "(a) Factorise fully $x^2 - 6x + 9$.<br>(b) Factorise fully $25x^2 - 16y^2$.",
        "steps": [
            "For part (a), we look for two numbers that multiply to $+9$ and add to $-6$. These are $-3$ and $-3$.",
            "This is a perfect square trinomial: $(x - 3)(x - 3) = (x - 3)^2$.",
            "For part (b), we identify this as a 'Difference of Two Squares'.",
            "We take the square root of both terms: $\\sqrt{25x^2} = 5x$ and $\\sqrt{16y^2} = 4y$.",
            "The factorised form is $(a - b)(a + b)$.",
            "Final Answer: $$(a)\\ (x - 3)^2,\\ (b)\\ (5x - 4y)(5x + 4y)$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ (x - 9)(x + 1),\\ (b)\\ (5x - 4y)^2$$",
        "feedback": "Part (a) incorrectly splits 9. Part (b) squares instead of applying the difference of squares."
    },
    {
        "ans": "$$(a)\\ (x - 3)(x + 3),\\ (b)\\ (25x^2 - 16y^2)$$",
        "feedback": "Part (a) uses the wrong pair of factors. Part (b) is not factorised at all."
    },
    {
        "ans": "$$(a)\\ (x - 3)^2,\\ (b)\\ (5x - 4y)(5x - 4y)$$",
        "feedback": "Part (a) is correct, but in part (b) you repeated the same bracket instead of using plus/minus."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying Structure",
            "content": "In algebraic manipulation, recognizing the structure of the expression is half the battle. If you see two squared terms separated by a minus sign, immediately apply the Difference of Two Squares. It is the most common factorisation shortcut in the Extended syllabus."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 27 January
    {
        "id": "003027",
        "date": "27 January 2026",
        "major_area": "Vectors",
        "topic": "Vectors",
        "subtopic": "Magnitude of a Vector",
        "difficulty": "B/A",
        "q": "Given the vectors $\\mathbf{a} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix}$.<br>(a) Find the vector $2\\mathbf{a} + \\mathbf{b}$ as a column vector.<br>(b) Calculate the magnitude of the vector $\\mathbf{b}$, $|\\mathbf{b}|$. Give your answer as a surd.",
        "steps": [
            "For part (a), we first perform the scalar multiplication: $2\\mathbf{a} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$.",
            "Now add the components: $\\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} + \\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 9 \\end{pmatrix}$.",
            "For part (b), the magnitude of a vector $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ is $\\sqrt{x^2 + y^2}$.",
            "Calculation: $|\\mathbf{b}| = \\sqrt{(-1)^2 + 5^2} = \\sqrt{1 + 25}$.",
            "Final Answer: $$(a)\\ \\begin{pmatrix} 1 \\\\ 9 \\end{pmatrix},\\ (b)\\ \\sqrt{26}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ \\begin{pmatrix} -1 \\\\ 7 \\end{pmatrix},\\ (b)\\ \\sqrt{24}$$",
        "feedback": "You added components incorrectly and miscalculated $(-1)^2$."
    },
    {
        "ans": "$$(a)\\ \\begin{pmatrix} 1 \\\\ 9 \\end{pmatrix},\\ (b)\\ 6$$",
        "feedback": "Part (a) is correct, but in part (b) you forgot the square root."
    },
    {
        "ans": "$$(a)\\ \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix},\\ (b)\\ \\sqrt{10}$$",
        "feedback": "Both parts are incorrect. Scalar multiplication must be applied before addition."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Magnitude and Negatives",
            "content": "When calculating magnitude, remember that squaring any real number—positive or negative—results in a positive value. A common mistake is calculating $(-1)^2$ as $-1$. Always use brackets on your calculator to avoid this fundamental arithmetic error."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 28 January
    {
        "id": "003028",
        "date": "28 January 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Simultaneous Equations (Linear – Quadratic)",
        "difficulty": "A",
        "q": "Solve the simultaneous equations:<br>$y = x^2 - 5$<br>$y = 3x - 1$",
        "steps": [
            "We equate the two expressions for $y$: $x^2 - 5 = 3x - 1$.",
            "Rearrange into standard quadratic form: $x^2 - 3x - 4 = 0$.",
            "Factorise the quadratic: $(x - 4)(x + 1) = 0$.",
            "The $x$-values are $x = 4$ and $x = -1$.",
            "Substitute $x = 4$ into $y = 3x - 1$: $y = 3(4) - 1 = 11$.",
            "Substitute $x = -1$ into $y = 3x - 1$: $y = 3(-1) - 1 = -4$.",
            "Final Answer: $$(4, 11) \\text{ and } (-1, -4)$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(4, -1) \\text{ and } (-1, 4)$$",
        "feedback": "You substituted the $x$‑values into the wrong equation when finding $y$."
    },
    {
        "ans": "$$(2, 5) \\text{ only}$$",
        "feedback": "You solved the linear equation alone and ignored the quadratic intersection."
    },
    {
        "ans": "$$(4, 11) \\text{ only}$$",
        "feedback": "You found one intersection but forgot that a line and parabola usually meet twice."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Points of Intersection",
            "content": "In IGCSE Extended, simultaneous equations often involve a linear and a quadratic function. Geometrically, you are finding the two points where a straight line crosses a parabola. Always provide your final answer as coordinate pairs $(x, y)$ to ensure full communication marks."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 29 January
    {
        "id": "003029",
        "date": "29 January 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Standard Form",
        "difficulty": "B/A",
        "q": "(a) Calculate $(2.4 \\times 10^3) \\times (5 \\times 10^2)$. Give your answer in standard form.<br>(b) Calculate $(2.4 \\times 10^3) + (3.1 \\times 10^2)$. Give your answer in standard form.",
        "steps": [
            "For part (a), we multiply the coefficients: $2.4 \\times 5 = 12$.",
            "Multiply the powers of 10 by adding indices: $10^3 \\times 10^2 = 10^5$.",
            "Result: $12 \\times 10^5$. Convert to standard form: $1.2 \\times 10^6$.",
            "For part (b), we must make the powers of 10 equal before adding.",
            "$2.4 \\times 10^3$ stays the same. $3.1 \\times 10^2 = 0.31 \\times 10^3$.",
            "Add the coefficients: $2.4 + 0.31 = 2.71$.",
            "Final Answer: $$(a)\\ 1.2 \\times 10^6,\\ (b)\\ 2.71 \\times 10^3$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 12 \\times 10^5,\\ (b)\\ 5.5 \\times 10^3$$",
        "feedback": "Part (a) is not in standard form. In part (b) you added coefficients without aligning powers."
    },
    {
        "ans": "$$(a)\\ 1.2 \\times 10^5,\\ (b)\\ 2.71 \\times 10^2$$",
        "feedback": "Both answers shift the powers incorrectly by one place."
    },
    {
        "ans": "$$(a)\\ 12 \\times 10^6,\\ (b)\\ 5.5 \\times 10^2$$",
        "feedback": "Both parts misapply the rules of standard form and place value."
    }
],

        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Addition Rigour",
            "content": "Addition is much more difficult than multiplication in standard form. You cannot simply add the coefficients ($2.4 + 3.1$) because they represent different place values. Always normalize the numbers to the highest power before performing the addition."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 30 January
    {
        "id": "003030",
        "date": "30 January 2026",
        "major_area": "Mensuration",
        "topic": "3D Shapes",
        "subtopic": "Surface Areas and Volumes",
        "difficulty": "B/A",
        "q": "A solid hemisphere has a radius of $3\\text{ cm}$.<br>(a) Calculate the volume of the hemisphere in terms of $\\pi$.<br>(b) Calculate the total surface area of the hemisphere in terms of $\\pi$.",
        "steps": [
            "For part (a), the volume of a sphere is $\\dfrac{4}{3}\\pi r^3$. A hemisphere is half of this: $V = \\dfrac{2}{3}\\pi r^3$.",
            "Substituting $r = 3$: $V = \\dfrac{2}{3} \\times \\pi \\times 27$.",
            "Calculation: $2 \\times 9\\pi = 18\\pi\\text{ cm}^3$.",
            "For part (b), the total surface area consists of the curved surface and the circular base.",
            "Curved surface area = $2\\pi r^2 = 2 \\times \\pi \\times 9 = 18\\pi$.",
            "Base area = $\\pi r^2 = 9\\pi$.",
            "Total Surface Area = $18\\pi + 9\\pi = 27\\pi\\text{ cm}^2$.",
            "Final Answer: $$(a)\\ 18\\pi\\text{ cm}^3,\\ (b)\\ 27\\pi\\text{ cm}^2$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 36\\pi,\\ (b)\\ 18\\pi$$",
        "feedback": "You doubled the hemisphere volume and omitted the circular base in the surface area."
    },
    {
        "ans": "$$(a)\\ 9\\pi,\\ (b)\\ 27\\pi$$",
        "feedback": "Part (b) is correct, but in part (a) you forgot the factor of $\\tfrac{2}{3}$."
    },
    {
        "ans": "$$(a)\\ 18\\pi,\\ (b)\\ 18\\pi$$",
        "feedback": "Part (a) is correct, but in part (b) you omitted the base area."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Hemisphere Base",
            "content": "A very common error in IGCSE 3D geometry is forgetting the circular base of a hemisphere when calculating surface area. The formula $2\\pi r^2$ only gives the 'dome' part. Unless the question states 'hollow', you must add the $\\pi r^2$ for the base to find the total area."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 31 January
    {        
    "id": "003031",
    "date": "31 January 2026",
    "major_area": "Algebra",
    "topic": "Contextual Linear Simultaneous Equations",
    "subtopic": "Simultaneous Equations in Context",
    "difficulty": "B",
    "q": "A cinema sells adult tickets and student tickets for a film showing.<br>Two adults and three students pay a total of $£42$.<br>Five adults and one student pay a total of $£59.50$.<br>(a) Form two simultaneous equations in $a$ and $s$, where $a$ is the price of an adult ticket and $s$ is the price of a student ticket.<br>(b) Solve the equations to find the price of each ticket.",
    "steps": [
        "For part (a), we translate each sentence into an algebraic equation.",
        "Two adults and three students cost £42: $2a + 3s = 42$.",
        "Five adults and one student cost £59: $5a + s = 59.5$.",
        "For part (b), we solve the simultaneous equations. We eliminate $s$ by multiplying the second equation by 3: $15a + 3s = 178.5$.",
        "Subtract the first equation from this: $(15a + 3s) - (2a + 3s) = 178.5 - 42$.",
        "This simplifies to $13a = 136.5$, giving $a = 10.50$.",
        "Substitute $a$ back into $5a + s = 59$: $5(10.50) + s = 59.50$.",
        "Calculation: $52 + s = 59$, so $s = 7$.",
        "Rounded to the nearest penny: $a = £10.50$ and $s = £7.00$.",
        "Final Answer: $$(a)\\ 2a + 3s = 42,\\ 5a + s = 59.5,\\ (b)\\ a = £10.50,\\ s = £7.00$$"
    ],
    "wrong_options": [
    {
        "ans": "$$(a)\\ 2a + s = 42,\\ 5a + 3s = 59.5,\\ (b)\\ a = £7,\\ s = £10.50$$",
        "feedback": "You swapped the coefficients for adults and students, reversing the final prices."
    },
    {
        "ans": "$$(a)\\ 2a + 3s = 42,\\ 5a + s = 59.5,\\ (b)\\ a = £12,\\ s = £6$$",
        "feedback": "Part (a) is correct, but in part (b) you solved the elimination incorrectly."
    },
    {
        "ans": "$$(a)\\ 2a + 3s = 42,\\ 5a + s = 59.5,\\ (b)\\ a = £10,\\ s = £7.50$$",
        "feedback": "Part (a) is correct, but in part (b) you made an arithmetic slip when substituting back."
    }
],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Context First, Algebra Second",
        "content": "In contextual simultaneous equations, the real skill is translating the language into algebra."
    },
    "payhip_link": "https://payhip.com/b/mg5YS",
    "button_text": "Master IGCSE Algebra: Download the Extended Pack"
}

];
