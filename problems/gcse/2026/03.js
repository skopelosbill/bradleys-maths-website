
const problemBank = [
    // 1 March
    {
        "id": "002037",
        "date": "1 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Pythagoras",
        "subtopic": "3D Pythagoras",
        "difficulty": "8/9",
        "img": "true",
        "q": "A cuboid has dimensions $AB = 6\\text{ cm}$, $BC = 8\\text{ cm}$ and height $CH = 10\\text{ cm}$.<br>(a) Calculate the length of the face diagonal $AC$.<br>(b) Calculate the length of the space diagonal $AH$. Give your answer in the form $a\\sqrt{b}$ where $a$ and $b$ are integers.",
        "steps": [
            "For part (a), we identify triangle $ABC$ as a right-angled triangle on the base of the cuboid.",
            "Using Pythagoras' Theorem: $AC^2 = AB^2 + BC^2 = 6^2 + 8^2 = 36 + 64 = 100$.",
            "Taking the square root, $AC = 10\\text{ cm}$.",
            "For part (b), we consider the right-angled triangle $ACH$ where $CH$ is the vertical height.",
            "Applying Pythagoras' Theorem again: $AH^2 = AC^2 + CH^2 = 10^2 + 10^2 = 100 + 100 = 200$.",
            "We simplify the surd: $AH = \\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}$.",
            "Final Answer: $$(a)\\ 10\\text{ cm},\\ (b)\\ 10\\sqrt{2}\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 3D shortcut",
            "content": "While calculating the face diagonal first is a safe method, you can find the space diagonal in one step using the 3D Pythagorean formula: $d^2 = L^2 + W^2 + H^2$. This is a sophisticated time-saver for Paper 2 or Paper 3."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 2 March
    {
        "id": "002038",
        "date": "2 March 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Compound Interest and Depreciation",
        "difficulty": "7/8",
        "q": "A car is purchased for $£15,000$. It depreciates in value by $20\\%$ in the first year and then by $12\\%$ per year for every year thereafter.<br>(a) Calculate the value of the car after the first year.<br>(b) Calculate the total value of the car after 3 years.",
        "steps": [
            "For part (a), we apply the initial depreciation of $20\\%$. The multiplier is $1 - 0.20 = 0.80$.",
            "Calculation: $15000 \\times 0.80 = £12,000$.",
            "For part (b), we apply a further 2 years of depreciation at a rate of $12\\%$. The multiplier for this period is $1 - 0.12 = 0.88$.",
            "We apply this multiplier to the value at the end of the first year: $12000 \\times 0.88^2$.",
            "Calculation: $12000 \\times 0.7744 = £9,292.80$.",
            "Final Answer: $$(a)\\ £12,000,\\ (b)\\ £9,292.80$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Multiplier Changes",
            "content": "This problem is a common Higher Tier 'trap' where the rate of change is not constant. You cannot simply use one multiplier for the entire 3-year period. You must calculate the first step independently before applying the power for the subsequent years."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 3 March
    {
        "id": "002039",
        "date": "3 March 2026",
        "major_area": "Algebra",
        "topic": "Expanding Brackets",
        "subtopic": "Triple brackets",
        "difficulty": "6/7",
        "q": "(a) Expand and simplify $(x + 4)(x - 1)(x + 2)$.<br>(b) State the coefficient of the $x$ term in the resulting expression.",
        "steps": [
            "For part (a), we first expand the first two brackets: $(x + 4)(x - 1) = x^2 - x + 4x - 4 = x^2 + 3x - 4$.",
            "Next, we multiply this resulting quadratic by the final bracket: $(x^2 + 3x - 4)(x + 2)$.",
            "Distributing the terms: $x(x^2 + 3x - 4) + 2(x^2 + 3x - 4) = x^3 + 3x^2 - 4x + 2x^2 + 6x - 8$.",
            "Collecting like terms: $x^3 + 5x^2 + 2x - 8$.",
            "For part (b), the coefficient is the numerical value multiplying the $x$ term.",
            "Final Answer: $$(a)\\ x^3 + 5x^2 + 2x - 8,\\ (b)\\ 2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systematic Expansion",
            "content": "When expanding triple brackets, always deal with two at a time and simplify the result before introducing the third. This reduces the number of simultaneous terms you are managing and significantly lowers the risk of sign errors."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 4 March
    {
        "id": "002040",
        "date": "4 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Sine and Cosine Rules",
        "difficulty": "8/9",
        "img": "true",
        "q": "In triangle $ABC$, $AB = 7\\text{ cm}$, $AC = 10\\text{ cm}$ and angle $BAC = 35^circ$.<br>(a) Calculate the length of $BC$ to 3 significant figures.<br>(b) Calculate the area of triangle $ABC$ to 3 significant figures.",
        "steps": [
            "For part (a), we have two sides and the included angle (SAS), so we must use the Cosine Rule: $a^2 = b^2 + c^2 - 2bc\\cos(A)$.",
            "Substituting the values: $BC^2 = 10^2 + 7^2 - 2(10)(7)\\cos(35^\\circ)$.",
            "Calculation: $BC^2 = 100 + 49 - 140(0.81915...) = 149 - 114.68... = 34.318...$.",
            "Taking the square root: $BC = 5.858...\\text{ cm}$.",
            "For part (b), we use the trigonometric area formula: $\\text{Area} = \\dfrac{1}{2}bc\\sin(A)$.",
            "Calculation: $\\dfrac{1}{2} \\times 10 \\times 7 \\times \\sin(35^\\circ) = 35 \\times 0.57357... = 20.075...$.",
            "Final Answer: $$(a)\\ 5.86\\text{ cm},\\ (b)\\ 20.1\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Rule Selection",
            "content": "A frequent error is attempting to use the Sine Rule when you only have one angle. If the information provided is 'Side-Angle-Side', the Cosine Rule is your only entry point. Always check your calculator is in 'Degree' mode before these calculations."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 5 March
    {
        "id": "002041",
        "date": "5 March 2026",
        "major_area": "Number",
        "topic": "Indices",
        "subtopic": "Negative and Fractional Indices",
        "difficulty": "7/8",
        "q": "(a) Evaluate $\\left(\\dfrac{25}{64}\\right)^{-\\frac{1}{2}}$.<br>(b) Simplify fully $\\dfrac{(3x^2y^4)^3}{9x^5y}$.",
        "steps": [
            "For part (a), the negative sign in the index tells us to take the reciprocal of the fraction: $\\left(\\dfrac{64}{25}\\right)^{\\frac{1}{2}}$.",
            "The index of $\\dfrac{1}{2}$ represents the square root: $\\sqrt{\\dfrac{64}{25}}$.",
            "Calculation: $\\dfrac{8}{5} = 1.6$.",
            "For part (b), we first apply the power of 3 to every term inside the bracket: $3^3(x^2)^3(y^4)^3 = 27x^6y^{12}$.",
            "We then divide this by the denominator: $\\dfrac{27x^6y^{12}}{9x^5y}$.",
            "Dividing coefficients and subtracting indices: $3x^{6-5}y^{12-1} = 3xy^{11}$.",
            "Final Answer: $$(a)\\ 1.6,\\ (b)\\ 3xy^{11}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Power of a Power",
            "content": "In part (b), a common mistake is forgetting to cube the coefficient '3'. Students often correctly apply the index laws to the variables ($x$ and $y$) but leave the constant as 3 or multiply it by 3 to get 9. Remember that every element inside the bracket is subject to the external power."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 6 March
    {
        "id": "002042",
        "date": "6 March 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Linear and Quadratic",
        "difficulty": "8/9",
        "q": "Solve the simultaneous equations to find the coordinates of the points of intersection:<br>$y = 2x + 1$<br>$x^2 + y^2 = 13$",
        "steps": [
            "We use the substitution method by replacing $y$ in the second equation with the expression from the first: $x^2 + (2x + 1)^2 = 13$.",
            "Expanding the bracket: $x^2 + (4x^2 + 4x + 1) = 13$.",
            "Simplifying and setting to zero: $5x^2 + 4x - 12 = 0$.",
            "Using the quadratic formula or factorising: $(5x - 6)(x + 2) = 0$.",
            "This gives $x = 1.2$ and $x = -2$.",
            "Substituting $x = 1.2$ into $y = 2x + 1$: $y = 2(1.2) + 1 = 3.4$.",
            "Substituting $x = -2$ into $y = 2x + 1$: $y = 2(-2) + 1 = -3$.",
            "Final Answer: $$(1.2, 3.4) \\text{ and } (-2, -3)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Substitution Mandate",
            "content": "When one equation is linear and the other is quadratic, 'elimination' is impossible. Substitution is your only formal path. Always substitute the linear expression into the quadratic one, and remember to expand your binomial brackets $(2x+1)^2$ fully; missing that middle term will derail the entire problem."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 7 March
    {
        "id": "002043",
        "date": "7 March 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations with Standard Form",
        "difficulty": "7/8",
        "q": "Let $A = 5 \\times 10^4$ and $B = 8 \\times 10^3$.<br>(a) Work out the value of $A \\times B$, giving your answer in standard form.<br>(b) Work out the value of $A + B$, giving your answer in standard form.",
        "steps": [
            "For part (a), we multiply the coefficients and add the indices: $(5 \\times 8) \\times 10^{4+3} = 40 \\times 10^7$.",
            "We must convert this back to standard form by moving the decimal: $4.0 \\times 10^8$.",
            "For part (b), to add numbers in standard form, we must first make the indices the same.",
            "Converting $B$ to match $A$'s power: $B = 0.8 \\times 10^4$.",
            "Adding the coefficients: $(5 + 0.8) \\times 10^4 = 5.8 \\times 10^4$.",
            "Final Answer: $$(a)\\ 4 \\times 10^8,\\ (b)\\ 5.8 \\times 10^4$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Addition vs Multiplication",
            "content": "Addition is significantly harder than multiplication in standard form. You cannot simply add the coefficients unless the powers of 10 are identical. I always advise students to convert the smaller number to match the larger power to ensure the final result is already close to standard form."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 8 March
    {
        "id": "002044",
        "date": "8 March 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Successive Percentage Change",
        "difficulty": "6/7",
        "q": "A jacket has an original price of $£80$. In a 'Flash Sale', the price is reduced by $15\\%$. On the final day, the sale price is reduced by a further $10\\%$.<br>(a) Calculate the price of the jacket on the final day of the sale.<br>(b) Calculate the single percentage decrease that would be equivalent to these two successive reductions.",
        "steps": [
            "For part (a), we first identify the multiplier for a $15\\%$ reduction: $1 - 0.15 = 0.85$.",
            "The price after the first reduction is $80 \\times 0.85 = £68$.",
            "Next, we apply a $10\\%$ reduction to the new price. The multiplier is $0.90$.",
            "Calculation: $68 \\times 0.90 = £61.20$.",
            "For part (b), we find the total multiplier by multiplying the two individual multipliers: $0.85 \\times 0.90 = 0.765$.",
            "A multiplier of $0.765$ represents a $76.5\\%$ remaining value.",
            "The percentage decrease is $100\\% - 76.5\\% = 23.5\\%$.",
            "Final Answer: $$(a)\\ £61.20,\\ (b)\\ 23.5\\%$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Don't Just Add Percentages",
            "content": "A very common error in Higher Tier papers is assuming that a $15\\%$ reduction followed by a $10\\%$ reduction is a $25\\%$ reduction. Because the second reduction is calculated from a smaller base, the total decrease is actually less than the sum of the parts. Always use the multiplier method to avoid this trap."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 9 March
    {
        "id": "002045",
        "date": "9 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Combined Circle Theorems",
        "difficulty": "7/8",
        "img": "true",
        "q": "In the diagram, points $A, B$ and $C$ lie on the circumference of a circle with centre $O$. Angle $AOB = 110^\\circ$.<br>(a) Find the size of angle $ACB$, giving a reason for your answer.<br>(b) A point $D$ is added such that $ACBD$ is a cyclic quadrilateral. Calculate the size of angle $ADB$.",
        "steps": [
            "For part (a), we apply the theorem that the angle subtended by an arc at the centre is twice the angle subtended at the circumference.",
            "Angle $ACB = 110^\\circ \\div 2 = 55^\\circ$.",
            "For part (b), we use the property of cyclic quadrilaterals: opposite angles sum to $180^\\circ$.",
            "Angle $ADB + \\text{Angle } ACB = 180^\\circ$.",
            "Calculation: $180^\\circ - 55^\\circ = 125^\\circ$.",
            "Final Answer: $$(a)\\ 55^\\circ\\text{ (Angle at centre is twice angle at circumference)},\\ (b)\\ 125^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Euclidean Rigour",
            "content": "When providing reasons in circle geometry, use the exact wording of the theorem. In 2025/2026 papers, abbreviations are often penalised. Ensure you identify the specific pair of angles you are comparing to satisfy the 'show your working' requirement."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 10 March
    {
        "id": "002046",
        "date": "10 March 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Harder Quadratics",
        "difficulty": "7/8",
        "q": "(a) Factorise fully $2x^2 - 7x + 6$.<br>(b) Hence, solve the equation $2x^2 - 7x + 6 = 0$.",
        "steps": [
            "For part (a), we look for two numbers that multiply to $ac$ ($2 \\times 6 = 12$) and add to $b$ ($-7$).",
            "The numbers are $-3$ and $-4$.",
            "We split the middle term: $2x^2 - 4x - 3x + 6$.",
            "Factorising by grouping: $2x(x - 2) - 3(x - 2)$.",
            "This yields the two brackets $(2x - 3)(x - 2)$.",
            "For part (b), we set each factor to zero: $2x - 3 = 0 \\implies x = 1.5$; $x - 2 = 0 \\implies x = 2$.",
            "Final Answer: $$(a)\\ (2x - 3)(x - 2),\\ (b)\\ x = 1.5, x = 2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The AC Method",
            "content": "When the coefficient of $x^2$ is greater than 1, 'trial and error' factorisation is risky. I strongly recommend the 'AC method' (splitting the middle term). It is a systematic process that works every time and provides a clear audit trail for the examiner to award method marks."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 11 March
    {
        "id": "002047",
        "date": "11 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Cylinders and Surface Area",
        "difficulty": "7/8",
        "img": "true",
        "q": "A solid cylinder has a radius of $4\\text{ cm}$ and a height of $10\\text{ cm}$.<br>(a) Calculate the volume of the cylinder. Give your answer in terms of $\\pi$.<br>(b) Calculate the total surface area of the cylinder. Give your answer in terms of $\\pi$.",
        "steps": [
            "For part (a), we use the volume formula $V = \\pi r^2 h$.",
            "Substituting: $V = \\pi \\times 4^2 \\times 10 = 160\\pi\\text{ cm}^3$.",
            "For part (b), the total surface area consists of two circular ends and the curved lateral surface.",
            "Area of two ends: $2 \\times \\pi r^2 = 2 \\times \\pi \\times 16 = 32\\pi$.",
            "Area of curved surface: $2\\pi rh = 2 \\times \\pi \\times 4 \\times 10 = 80\\pi$.",
            "Summing these areas: $32\\pi + 80\\pi = 112\\pi\\text{ cm}^2$.",
            "Final Answer: $$(a)\\ 160\\pi\\text{ cm}^3,\\ (b)\\ 112\\pi\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Don't Forget the Ends",
            "content": "A very frequent omission in surface area problems is forgetting to include the two circular bases of the cylinder. The examiner specifically used the word 'solid' to imply that both the top and bottom faces must be included in your calculation."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 12 March
    {
        "id": "002048",
        "date": "12 March 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Ratio",
        "subtopic": "Algebraic Ratios",
        "difficulty": "7/8",
        "q": "Alan and Barbara share $£84$ in the ratio $3 : 4$.<br>(a) Calculate the amount Barbara receives.<br>(b) If Alan then gives $£12$ of his share to Barbara, what is the new ratio of Alan's money to Barbara's money? Give your answer in its simplest form.",
        "steps": [
            "For part (a), we find the value of one part: $3 + 4 = 7$ parts. One part $= 84 \\div 7 = £12$.",
            "Barbara receives 4 parts: $4 \\times 12 = £48$.",
            "For part (b), we first find Alan's initial share: $3 \\times 12 = £36$.",
            "After the gift: Alan has $36 - 12 = £24$. Barbara has $48 + 12 = £60$.",
            "The new ratio is $24 : 60$.",
            "Simplifying by dividing both by 12: $2 : 5$.",
            "Final Answer: $$(a)\\ £48,\\ (b)\\ 2 : 5$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Ratio Stability",
            "content": "In 'transfer' problems like this, always perform a sanity check: the sum of the parts after the transfer ($24 + 60 = 84$) should still equal the original total. If it doesn't, you have likely subtracted from one person without adding to the other."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Ratio: Download the Full Number & Ratio Pack"
    },
    // 13 March
    {
        "id": "002049",
        "date": "13 March 2026",
        "major_area": "Statistics",
        "topic": "Scatter Graphs",
        "subtopic": "Interpolation and Extrapolation",
        "difficulty": "6/7",
        "img": "true",
        "q": "A scatter graph shows a strong positive correlation between hours studied ($x$) and test score ($y$).<br>(a) Describe the relationship between the two variables.<br>(b) Explain why using a line of best fit to predict the score of a student who studied for 100 hours may be unreliable if the data set only ranges from 0 to 20 hours.",
        "steps": [
            "For part (a), we describe the trend: As the number of hours studied increases, the test score also tends to increase.",
            "For part (b), we identify that the value of 100 hours lies far outside the range of the given data.",
            "Using a line of best fit to predict values outside the range is known as extrapolation.",
            "This is unreliable because the positive trend may not continue indefinitely (for example, scores cannot exceed $100\\%$).",
            "Final Answer: $$(a)\\ \text{As study hours increase, scores increase},\\ (b)\\ \text{Extrapolation is unreliable}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Correlation vs Causation",
            "content": "When describing a scatter graph, avoid using certain language. A 'strong positive correlation' does not guarantee that studying more *causes* a higher score, only that there is a statistical link. In your exam, stick to the observed trend: 'As $x$ increases, $y$ increases'."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Statistics: Download the Full Statistics Pack"
    },
    // 14 March
    {
        "id": "002050",
        "date": "14 March 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Integer Solutions",
        "difficulty": "6/7",
        "q": "(a) Solve the inequality $5x - 3 > 3x + 11$.<br>(b) List all the integer values of $n$ such that $-2 < n \\le 3$.",
        "steps": [
            "For part (a), we treat the inequality like an equation. Subtract $3x$ from both sides: $2x - 3 > 11$.",
            "Add 3 to both sides: $2x > 14$.",
            "Divide by 2: $x > 7$.",
            "For part (b), we look for whole numbers that are strictly greater than $-2$ and less than or equal to 3.",
            "The values are $-1, 0, 1, 2, 3$.",
            "Final Answer: $$(a)\\ x > 7,\\ (b)\\ -1, 0, 1, 2, 3$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Inclusion Symbols",
            "content": "The most common loss of marks here is including '$-2$' or omitting '$3$'. Look closely at the symbol: the bar underneath ($\le$) means the number is included, while the strict inequality ($<$) means the number is not part of the set."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 15 March
    {
        "id": "002051",
        "date": "15 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Transformations",
        "subtopic": "Translation",
        "difficulty": "6/7",
        "q": "Triangle $A$ has vertices at $(1, 2)$, $(3, 2)$, and $(2, 5)$.<br>(a) Triangle $B$ is the image of $A$ after a translation by the vector $\\mathbf{v} = \\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$. State the coordinates of the vertices of Triangle $B$.<br>(b) Find the single vector that would translate Triangle $B$ back to its original position at Triangle $A$.",
        "steps": [
            "For part (a), we apply the translation vector to each vertex by adding 4 to the $x$-coordinates and subtracting 1 from the $y$-coordinates.",
            "Vertex 1: $(1+4, 2-1) = (5, 1)$.",
            "Vertex 2: $(3+4, 2-1) = (7, 1)$.",
            "Vertex 3: $(2+4, 5-1) = (6, 4)$.",
            "For part (b), to reverse a translation, we must apply the negative of the original vector.",
            "The inverse of $\\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$ is $\\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}$.",
            "Final Answer: $$(a)\\ (5, 1), (7, 1), (6, 4),\\ (b)\\ \\begin{pmatrix} -4 \\\\ 1 \\end{pmatrix}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Vector vs Coordinate",
            "content": "Always remember that a translation vector represents a 'movement', not a 'location'. In your exam, ensure you use the large parentheses for vectors to distinguish them from coordinate points. Failing to use the correct notation can cost you a communication mark even if your numbers are correct."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 16 March
    {
        "id": "002052",
        "date": "16 March 2026",
        "major_area": "Probability",
        "topic": "Conditional Probability",
        "subtopic": "Dependent Events",
        "difficulty": "7/8",
        "q": "A bag contains 3 red counters and 2 blue counters. Two counters are taken at random without replacement.<br>(a) Calculate the probability that both counters are the same colour.<br>(b) Calculate the probability that the two counters are different colours.",
        "steps": [
            "For part (a), 'same colour' means both are red (RR) or both are blue (BB).",
            "$P(RR) = \\dfrac{3}{5} \\times \\dfrac{2}{4} = \\dfrac{6}{20}$.",
            "$P(BB) = \\dfrac{2}{5} \\times \\dfrac{1}{4} = \\dfrac{2}{20}$.",
            "Summing these gives $P(\\text{Same}) = \\dfrac{8}{20} = \\dfrac{2}{5}$.",
            "For part (b), 'different colours' is the complement of 'same colour'.",
            "Calculation: $1 - P(\\text{Same}) = 1 - \\dfrac{2}{5} = \\dfrac{3}{5}$.",
            "Alternatively, $P(RB) + P(BR) = \\dfrac{6}{20} + \\dfrac{6}{20} = \\dfrac{12}{20} = \\dfrac{3}{5}$.",
            "Final Answer: $$(a)\\ \\dfrac{2}{5},\\ (b)\\ \\dfrac{3}{5}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Complement Shortcut",
            "content": "In probability, always check if it is faster to calculate the 'opposite' of what is asked. Because the outcomes 'same colour' and 'different colour' are exhaustive and mutually exclusive, subtracting your answer for part (a) from 1 is the most efficient way to solve part (b)."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Probability: Download the Full Probability Pack"
    },
    // 17 March
    {
        "id": "002053",
        "date": "17 March 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Calculation Bounds",
        "difficulty": "8/9",
        "q": "The length of a rectangle is $8.4\\text{ cm}$ and the width is $5.2\\text{ cm}$, both measured correct to the nearest $0.1\\text{ cm}$.<br>(a) State the lower bound of the length.<br>(b) Calculate the upper bound for the area of the rectangle. Give your answer to 2 decimal places.",
        "steps": [
            "For part (a), the degree of accuracy is $0.1\\text{ cm}$, so the error interval is $\\pm 0.05\\text{ cm}$.",
            "The lower bound of the length is $8.4 - 0.05 = 8.35\\text{ cm}$.",
            "For part (b), to maximise the area, we must multiply the upper bound of the length by the upper bound of the width.",
            "Upper bound of length $= 8.45\\text{ cm}$.",
            "Upper bound of width $= 5.25\\text{ cm}$.",
            "Calculation: $8.45 \\times 5.25 = 44.3625$.",
            "Rounding to 2 decimal places gives $44.36\\text{ cm}^2$.",
            "Final Answer: $$(a)\\ 8.35\\text{ cm},\\ (b)\\ 44.36\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Maximum Product Logic",
            "content": "To find the maximum value of a product (like area), you use the upper bounds of both dimensions. However, if you were finding the maximum value of a fraction (like density), you would divide the upper bound of the mass by the lower bound of the volume. Always identify the operation before choosing your bounds."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 18 March
    {
        "id": "002054",
        "date": "18 March 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Completing the Square",
        "difficulty": "7/8",
        "q": "(a) Write $x^2 + 6x + 5$ in the form $(x + a)^2 + b$.<br>(b) State the coordinates of the turning point of the graph of $y = x^2 + 6x + 5$.",
        "steps": [
            "For part (a), we take half of the coefficient of $x$: $6 \\div 2 = 3$.",
            "We write $(x + 3)^2$ and subtract the square of this value: $(x + 3)^2 - 3^2 + 5$.",
            "Simplifying the constants: $(x + 3)^2 - 9 + 5 = (x + 3)^2 - 4$.",
            "For part (b), the turning point of $y = (x + p)^2 + q$ is at $(-p, q)$.",
            "Substituting our values, the turning point is $(-3, -4)$.",
            "Final Answer: $$(a)\\ (x + 3)^2 - 4,\\ (b)\\ (-3, -4)$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Turning Point Sign",
            "content": "A frequent error is giving the turning point as $(3, -4)$. Remember that to make the squared bracket equal zero, $x$ must be the negative of the value inside the bracket. This represents a horizontal translation of the graph of $y = x^2$ by 3 units to the left."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 19 March
    {
        "id": "002055",
        "date": "19 March 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Simplifying",
        "difficulty": "7/8",
        "img": "true",
        "q": "Simplify fully the expression: $$\\dfrac{2x^2 - 8}{4x^2 + 8x}$$",
        "steps": [
            "First, we factorise the numerator. We factor out the common factor 2: $2(x^2 - 4)$.",
            "Next, we recognise the difference of two squares in the bracket: $2(x - 2)(x + 2)$.",
            "Now, we factorise the denominator by taking out the common factor $4x$: $4x(x + 2)$.",
            "We cancel the common factor of $(x + 2)$ from both the numerator and denominator.",
            "Finally, we simplify the coefficients $\\dfrac{2}{4x} = \\dfrac{1}{2x}$.",
            "The remaining factor in the numerator is $(x - 2)$.",
            "Final Answer: $$\\dfrac{x - 2}{2x}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Nested Factorisation",
            "content": "This problem requires two levels of factorisation in the numerator: first a common factor, then the difference of two squares. Always look for that squared term subtraction ($x^2 - a^2$); it is the most common hidden structure in algebraic fraction questions."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 20 March
    {
        "id": "002056",
        "date": "20 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Cosine Rule",
        "difficulty": "7/8",
        "q": "In triangle $ABC$, $AB = 7\\text{ cm}$, $AC = 9\\text{ cm}$ and angle $BAC = 120^\\circ$.<br>(a) Calculate the exact value of the length $BC^2$.<br>(b) Calculate the length of $BC$, giving your answer to 1 decimal place.",
        "steps": [
            "For part (a), we use the Cosine Rule: $a^2 = b^2 + c^2 - 2bc\\cos(A)$.",
            "Substituting the values: $BC^2 = 9^2 + 7^2 - 2(9)(7)\\cos(120^\\circ)$.",
            "We recall the exact value $\\cos(120^\\circ) = -0.5$.",
            "Calculation: $BC^2 = 81 + 49 - (126 \\times -0.5) = 130 + 63 = 193$.",
            "For part (b), we find the square root of 193.",
            "Calculation: $\\sqrt{193} \\approx 13.892...$.",
            "Rounding to 1 decimal place gives $13.9\\text{ cm}$.",
            "Final Answer: $$(a)\\ 193,\\ (b)\\ 13.9\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Negative Cosine Values",
            "content": "Obtuse angles ($>90^\\circ$) always have a negative cosine value. In the Cosine Rule, this creates a 'double negative' which effectively adds the final term rather than subtracting it. Forgetting this is the single most common reason students lose marks on this topic."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 21 March
    {
        "id": "002057",
        "date": "21 March 2026",
        "major_area": "Statistics",
        "topic": "Cumulative Frequency",
        "subtopic": "Median and Quartiles",
        "difficulty": "6/7",
        "img": "true",
        "q": "A cumulative frequency graph shows the masses of 80 students.<br>(a) Identify the cumulative frequency values used to locate the Lower Quartile ($Q_1$), the Median ($M$), and the Upper Quartile ($Q_3$).<br>(b) Given that $Q_1 = 52\\text{ kg}$ and $Q_3 = 71\\text{ kg}$, calculate the Interquartile Range ($IQR$).",
        "steps": [
            "For part (a), the quartiles are found by dividing the total frequency ($n=80$) into four equal parts.",
            "$Q_1$ is at $\\dfrac{1}{4} \\times 80 = 20$.",
            "Median is at $\\dfrac{1}{2} \\times 80 = 40$.",
            "$Q_3$ is at $\\dfrac{3}{4} \\times 80 = 60$.",
            "For part (b), the $IQR$ is the difference between the upper and lower quartiles.",
            "Calculation: $71 - 52 = 19\\text{ kg}$.",
            "Final Answer: $$(a)\\ Q_1: 20, M: 40, Q_3: 60,\\ (b)\\ 19\\text{ kg}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Consistency and Spread",
            "content": "The Interquartile Range is a measure of spread that focuses on the middle $50\\%$ of the data. Examiners often ask you to compare two datasets; remember that a lower $IQR$ indicates that the data is more consistent (less spread out) around the median."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Statistics: Download the Full Statistics Pack"
    },
    // 22 March
    {
        "id": "002058",
        "date": "22 March 2026",
        "major_area": "Algebra",
        "topic": "Numerical Methods",
        "subtopic": "Iteration",
        "difficulty": "7/8",
        "q": "The equation $x^3 + x - 1 = 0$ has a solution between $x = 0$ and $x = 1$.<br>(a) Show that the equation can be rearranged to give $x = \\sqrt[3]{1 - x}$.<br>(b) Using the iterative formula $x_{n+1} = \\sqrt[3]{1 - x_n}$ and starting with $x_1 = 0.5$, calculate the values of $x_2$ and $x_3$. Give your answer for $x_3$ to 3 decimal places.",
        "steps": [
            "For part (a), we begin with $x^3 + x - 1 = 0$.",
            "We isolate the $x^3$ term by adding 1 and subtracting $x$ from both sides: $x^3 = 1 - x$.",
            "Taking the cube root of both sides yields $x = \\sqrt[3]{1 - x}$, as required.",
            "For part (b), we substitute $x_1 = 0.5$ into the formula: $x_2 = \\sqrt[3]{1 - 0.5} = \\sqrt[3]{0.5}$.",
            "Calculation: $x_2 \\approx 0.79370...$.",
            "We now substitute $x_2$ back into the formula: $x_3 = \\sqrt[3]{1 - 0.79370...}$.",
            "Calculation: $x_3 = \\sqrt[3]{0.20629...} \\approx 0.59079...$.",
            "Rounding to 3 decimal places gives 0.591.",
            "Final Answer: $$(a)\\ \\text{Shown},\\ (b)\\ x_2 = 0.794, x_3 = 0.591$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Iteration Efficiency",
            "content": "On your calculator, type '0.5' and press '='. Then type the cube root of '(1 - ANS)'. Each time you press '=', the calculator will automatically perform the next iteration. This technique eliminates rounding errors and ensures your final answer is perfectly accurate."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 23 March
    {
        "id": "002059",
        "date": "23 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Area and Volume Scale Factors",
        "difficulty": "7/8",
        "q": "Two mathematically similar solid cones have surface areas in the ratio $9 : 16$.<br>(a) Find the ratio of their corresponding heights.<br>(b) Given that the volume of the smaller cone is $54\\text{ cm}^3$, calculate the volume of the larger cone.",
        "steps": [
            "For part (a), we use the property that if the linear scale factor is $k$, the area scale factor is $k^2$.",
            "Given $k^2 = \\dfrac{16}{9}$, we find the linear scale factor $k = \\sqrt{\\dfrac{16}{9}} = \\dfrac{4}{3}$.",
            "Therefore, the ratio of their heights is $3 : 4$.",
            "For part (b), we find the volume scale factor, which is $k^3$.",
            "Calculation: $\\left(\\dfrac{4}{3}\\right)^3 = \\dfrac{64}{27}$.",
            "To find the volume of the larger cone, we multiply the smaller volume by the volume scale factor: $54 \\times \\dfrac{64}{27}$.",
            "Calculation: $2 \\times 64 = 128\\text{ cm}^3$.",
            "Final Answer: $$(a)\\ 3 : 4,\\ (b)\\ 128\\text{ cm}^3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Linear Bridge",
            "content": "Always find the linear scale factor ($k$) first. It is the 'bridge' that connects area ($k^2$) and volume ($k^3$). You cannot go directly from area to volume without finding the length ratio first. This is a classic multi-step problem in the Higher Tier syllabus."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 24 March
    {
        "id": "002060",
        "date": "24 March 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Composite Functions",
        "difficulty": "7/8",
        "q": "The functions $f$ and $g$ are defined as $f(x) = 3x - 2$ and $g(x) = x^2$.<br>(a) Find an expression for $fg(x)$.<br>(b) Find an expression for $gf(x)$.<br>(c) Solve the equation $gf(x) = 1$.",
        "steps": [
            "For part (a), $fg(x)$ means we substitute the function $g$ into the function $f$: $f(x^2) = 3(x^2) - 2 = 3x^2 - 2$.",
            "For part (b), $gf(x)$ means we substitute the function $f$ into the function $g$: $g(3x - 2) = (3x - 2)^2$.",
            "Expanding the bracket: $(3x - 2)(3x - 2) = 9x^2 - 6x - 6x + 4 = 9x^2 - 12x + 4$.",
            "For part (c), we set $gf(x) = 1$: $(3x - 2)^2 = 1$.",
            "Taking the square root of both sides: $3x - 2 = 1$ or $3x - 2 = -1$.",
            "Solving the first case: $3x = 3 \\implies x = 1$.",
            "Solving the second case: $3x = 1 \\implies x = \\dfrac{1}{3}$.",
            "Final Answer: $$(a)\\ 3x^2 - 2,\\ (b)\\ 9x^2 - 12x + 4,\\ (c)\\ x = 1, x = \\dfrac{1}{3}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Function Order",
            "content": "The order of operations is vital in composite functions. $fg(x)$ is not the same as $gf(x)$. In part (c), many students forget the negative square root. Remember that both $1^2$ and $(-1)^2$ equal 1; missing the second solution could cost you two marks."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 25 March
    {
        "id": "002061",
        "date": "25 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Cyclic Quadrilaterals",
        "difficulty": "6/7",
        "img": "true",
        "q": "$ABCD$ is a cyclic quadrilateral where $AB$ is parallel to $DC$. Angle $ABC = 78^\\circ$.<br>(a) Find the size of angle $ADC$, giving a reason for your answer.<br>(b) Calculate the size of angle $BCD$.",
        "steps": [
            "For part (a), we use the theorem that opposite angles in a cyclic quadrilateral sum to $180^\\circ$.",
            "Angle $ADC = 180^\\circ - 78^\\circ = 102^\\circ$.",
            "For part (b), we use the property of parallel lines ($AB$ and $DC$).",
            "Angles $ABC$ and $BCD$ are co-interior (supplementary) because they lie between parallel lines.",
            "Calculation: Angle $BCD = 180^\\circ - 78^\\circ = 102^\\circ$.",
            "Final Answer: $$(a)\\ 102^\\circ\\text{ (Opposite angles in a cyclic quadrilateral sum to } 180^\\circ),\\ (b)\\ 102^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Geometric Reasons",
            "content": "When a question asks for a 'reason', you must use the formal name of the theorem. Simply stating 'they add to 180' is insufficient. Use the full phrase: 'Opposite angles of a cyclic quadrilateral are supplementary' or 'sum to $180^\\circ$' to ensure full marks."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 26 March
    {
        "id": "002062",
        "date": "26 March 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Rationalising the Denominator",
        "difficulty": "7/8",
        "q": "(a) Simplify fully: $\\sqrt{20} + \\sqrt{45}$.<br>(b) Show that $\\dfrac{\\sqrt{20} + \\sqrt{45}}{\\sqrt{5}}$ is an integer.",
        "steps": [
            "For part (a), we simplify each surd by finding the largest square factor.",
            "$\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}$.",
            "$\\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}$.",
            "Adding the terms: $2\\sqrt{5} + 3\\sqrt{5} = 5\\sqrt{5}$.",
            "For part (b), we use our result from part (a): $\\dfrac{5\\sqrt{5}}{\\sqrt{5}}$.",
            "The $\\sqrt{5}$ terms cancel out, leaving the integer 5.",
            "Final Answer: $$(a)\\ 5\\sqrt{5},\\ (b)\\ 5$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Surd Addition",
            "content": "Surds can only be added or subtracted if the number under the square root (the radicand) is the same. This is exactly like collecting like terms in algebra ($2x + 3x$). Always simplify your surds first to see if they share a common root."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 27 March
    {
        "id": "002063",
        "date": "27 March 2026",
        "major_area": "Probability",
        "topic": "Probability",
        "subtopic": "Combined Events",
        "difficulty": "7/8",
        "q": "A bag contains 4 red and 3 blue counters. Two counters are chosen at random without replacement.<br>(a) Find the probability that both counters are red.<br>(b) Find the probability that at least one counter is blue.",
        "steps": [
            "For part (a), the probability that the first counter is red is $\\dfrac{4}{7}$.",
            "Since it is without replacement, the probability that the second counter is red is $\\dfrac{3}{6}$.",
            "Calculation: $\\dfrac{4}{7} \\times \\dfrac{3}{6} = \\dfrac{12}{42} = \\dfrac{2}{7}$.",
            "For part (b), the event 'at least one blue' is the complement of 'no blue' (which means both are red).",
            "Calculation: $1 - P(RR) = 1 - \\dfrac{2}{7} = \\dfrac{5}{7}$.",
            "Final Answer: $$(a)\\ \\dfrac{2}{7},\\ (b)\\ \\dfrac{5}{7}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The 'At Least' Shortcut",
            "content": "Whenever you see the phrase 'at least one', consider calculating the probability of 'none' and subtracting it from 1. This is almost always faster than calculating all the individual successful outcomes ($P(RB)$, $P(BR)$, and $P(BB)$)."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Probability: Download the Full Probability Pack"
    },
    // 28 March
    {
        "id": "002064",
        "date": "28 March 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "Odd and Even Numbers",
        "difficulty": "8/9",
        "q": "Prove algebraically that the square of any odd number is always one more than a multiple of 4.",
        "steps": [
            "We define any odd number as $2n + 1$, where $n$ is an integer.",
            "We square this expression: $(2n + 1)^2$.",
            "Expanding the bracket: $(2n + 1)(2n + 1) = 4n^2 + 4n + 1$.",
            "We factorise the first two terms by taking out a factor of 4: $4(n^2 + n) + 1$.",
            "Since $n$ is an integer, $n^2 + n$ is also an integer. Let this be $k$.",
            "The expression is now in the form $4k + 1$, which is one more than a multiple of 4.",
            "Final Answer: $$4(n^2 + n) + 1 \\text{ is one more than a multiple of 4}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Defining integers",
            "content": "In an algebraic proof, you must define your terms. Simply writing $(2n+1)^2$ is not enough; you should state that $n$ is an integer. The final step—factorising out the specific number mentioned in the question (in this case, 4)—is what completes the logical chain for the examiner."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 29 March
    {
        "id": "002065",
        "date": "29 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Equations",
        "subtopic": "Equation of a Circle",
        "difficulty": "7/8",
        "q": "(a) Find the equation of the circle with centre $(2, -3)$ and radius $5$.<br>(b) Show by calculation that the point $(5, 1)$ lies on the circumference of this circle.",
        "steps": [
            "For part (a), we use the general equation $(x - a)^2 + (y - b)^2 = r^2$, where $(a, b)$ is the centre.",
            "Substituting $a = 2$, $b = -3$, and $r = 5$: $(x - 2)^2 + (y - (-3))^2 = 5^2$.",
            "Simplifying gives $(x - 2)^2 + (y + 3)^2 = 25$.",
            "For part (b), we substitute $x = 5$ and $y = 1$ into our equation.",
            "Calculation: $(5 - 2)^2 + (1 + 3)^2 = 3^2 + 4^2$.",
            "Simplifying: $9 + 16 = 25$.",
            "Since the result equals $r^2$, the point satisfies the equation and lies on the circumference.",
            "Final Answer: $$(a)\\ (x - 2)^2 + (y + 3)^2 = 25,\\ (b)\\ \\text{Shown}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Coordinate Sign Trap",
            "content": "Be extremely careful when the centre coordinate is negative. Subtracting a negative value, $(y - (-3))$, becomes $(y + 3)$. It is a very common error for students to leave the sign as negative, which would describe a completely different circle."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 30 March
    {
        "id": "002066",
        "date": "30 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Transformations",
        "subtopic": "Enlargement",
        "difficulty": "8/9",
        "img": "true",
        "q": "Triangle $A$ has vertices at $(1, 1)$, $(2, 1)$, and $(1, 3)$.<br>(a) Triangle $B$ is an enlargement of $A$ with scale factor $-2$ about the origin $(0, 0)$. Find the coordinates of Triangle $B$.<br>(b) Describe the effect of a negative scale factor on the orientation and position of the image.",
        "steps": [
            "For part (a), we multiply both the $x$ and $y$ coordinates of each vertex by the scale factor $-2$.",
            "Vertex 1: $(1 \\times -2, 1 \\times -2) = (-2, -2)$.",
            "Vertex 2: $(2 \\times -2, 1 \\times -2) = (-4, -2)$.",
            "Vertex 3: $(1 \\times -2, 3 \\times -2) = (-2, -6)$.",
            "For part (b), a negative scale factor means the image is on the opposite side of the centre of enlargement.",
            "The image is also rotated $180^\\circ$ relative to the object.",
            "Final Answer: $$(a)\\ (-2, -2), (-4, -2), (-2, -6),\\ (b)\\ \text{Opposite side and rotated } 180^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Negative Enlargement",
            "content": "Think of a negative enlargement as a 'projection through the centre'. The image doesn't just get bigger; it passes through the origin and flips. This is why the coordinates change sign. Always draw a quick sketch to ensure your new points are in the correct quadrant."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 31 March
    {
        "id": "002067",
        "date": "31 March 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "Even and Odd Numbers",
        "difficulty": "8/9",
        "q": "Prove algebraically that for any integer $n$, the expression $n^2 - n$ is always an even number.",
        "steps": [
            "We begin by factorising the expression: $n^2 - n = n(n - 1)$.",
            "We observe that $n$ and $(n - 1)$ are consecutive integers.",
            "In any pair of consecutive integers, one of the numbers must be even and the other must be odd.",
            "The product of an even number and an odd number is always an even number.",
            "Therefore, $n(n - 1)$ is always even for all integer values of $n$.",
            "Final Answer: $$n(n-1) \\text{ is always even}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Logic vs Expansion",
            "content": "Sometimes the most elegant proof doesn't involve complex expansion but clever factorisation. By showing the expression is a product of consecutive integers, you provide a universal logical proof that applies to all cases without needing to test numbers individually."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    }
];
   
