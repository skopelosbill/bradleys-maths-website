const problemBank = [
    // 1 May
    {
        "id": "003121",
        "date": "1 May 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "HCF",
        "difficulty": "C/D",
        "q": "Without using a calculator, find the highest common factor (HCF) of 168 and 180.",
        "steps": [
            "We begin by expressing both numbers as products of their prime factors using factor trees.",
            "The prime factorisation of 168 is calculated as $2^3 \\times 3 \\times 7$.",
            "The prime factorisation of 180 is calculated as $2^2 \\times 3^2 \\times 5$.",
            "To find the Highest Common Factor, we identify the common prime factors with the lowest powers: $2^2$ and $3$.",
            "Finally, we multiply these values: $4 \\times 3 = 12$.",
            "Final Answer: $$12$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systematic Factorisation",
            "content": "In the non-calculator Paper 2, speed and accuracy are paramount. Listing factors manually is risky and time-consuming. The prime factorisation method is far more robust and ensures that no common factors are overlooked in the process."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 2 May
    {
        "id": "003122",
        "date": "2 May 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Fractional indices",
        "difficulty": "B/C",
        "q": "Without using a calculator, simplify fully: $$\\left(\\dfrac{16}{x^8}\\right)^{-\\frac{3}{4}}$$.",
        "steps": [
            "We first address the negative index by taking the reciprocal of the fraction: $\\left(\\dfrac{x^8}{16}\\right)^{\\frac{3}{4}}$.",
            "Next, we apply the denominator of the index (the 4th root) to both the numerator and the denominator.",
            "The fourth root of $x^8$ is $x^2$, and the fourth root of 16 is 2.",
            "We then apply the numerator of the index (the cube) to the resulting fraction: $\\left(\\dfrac{x^2}{2}\\right)^3$.",
            "Finally, we cube both terms to obtain the simplified expression.",
            "Final Answer: $$\\dfrac{x^6}{8}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Order of Operations",
            "content": "In index manipulation, the order in which you apply the components of the power is vital. I always advise taking the root before the power to keep the numbers small and manageable in a non-calculator environment. Attempting to cube 16 before taking the 4th root is numerically difficult and increases the risk of error."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 3 May
    {
        "id": "003123",
        "date": "3 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Sine rule",
        "difficulty": "B/A",
        "img": "true",
        "q": "In triangle $PQR$, $PQ = 12.6\\text{ cm}$, $\\angle PRQ = 41^\\circ$ and $\\angle QPR = 73^\\circ$. Calculate the length of $QR$.",
        "steps": [
            "We begin by identifying that we have a 'non-included' angle and its opposite side, which indicating the use of the Sine Rule.",
            "The Sine Rule states that $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}$. We set up the equation: $\\dfrac{QR}{\\sin 73^\\circ} = \\dfrac{12.6}{\\sin 41^\\circ}$.",
            "Rearranging to solve for $QR$, we obtain $QR = \\dfrac{12.6 \\times \\sin 73^\\circ}{\\sin 41^\\circ}$.",
            "Using a calculator, we find that $QR \\approx 18.3615...$.",
            "Finally, we round the result to the required degree of accuracy.",
            "Final Answer: $$18.4\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Three Significant Figures",
            "content": "Unless otherwise stated, Cambridge IGCSE requires all non-exact numerical answers to be given correct to 3 significant figures. This is a general instruction found on the front of every paper. Failing to adhere to this convention will result in the loss of an accuracy mark even if your working is correct."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 4 May
    {
        "id": "003124",
        "date": "4 May 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Rearranging with powers",
        "difficulty": "B/C",
        "q": "Make $w$ the subject of the formula: $$t = 3 + \\sqrt{\\dfrac{w-x}{2}}$$",
        "steps": [
            "We begin by subtracting 3 from both sides of the equation: $t - 3 = \\sqrt{\\dfrac{w-x}{2}}$.",
            "Next, we square both sides to eliminate the square root: $(t - 3)^2 = \\dfrac{w-x}{2}$.",
            "We then multiply both sides by 2 to clear the fraction: $2(t - 3)^2 = w - x$.",
            "Finally, we add $x$ to both sides to isolate $w$.",
            "Final Answer: $$w = 2(t - 3)^2 + x$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Reverse BIDMAS",
            "content": "Rearranging a formula is effectively 'undressing' the subject. We must reverse the order of operations, dealing with the terms furthest away from the $w$ (the addition of 3) before we address the operations directly attached to the variable."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 5 May
    {
        "id": "003125",
        "date": "5 May 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Compound interest",
        "difficulty": "B/A",
        "q": "A bank account pays compound interest at a rate of $2.5\\%$ per year. After 4 years, the value of the investment is $£6,622.72$. Calculate the original amount invested.",
        "steps": [
            "We identify this as a reverse compound interest problem. The multiplier for a $2.5\\%$ increase is $1.025$.",
            "We set up the equation: $\\text{Original} \\times 1.025^4 = 6622.72$.",
            "To isolate the original investment, we divide the final amount by $1.025^4$.",
            "Calculation: $6622.72 \\div 1.103812... = 6000$.",
            "Final Answer: $$£6,000$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Principal vs Interest",
            "content": "Always read the final instruction of the question with great care. If the examiner asks for the 'interest earned', you must subtract the original principal from the final total. In this case, we were looking for the original principal itself."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 6 May
    {
        "id": "003126",
        "date": "6 May 2026",
        "major_area": "Statistics",
        "topic": "Frequency Tables",
        "subtopic": "Grouped data",
        "difficulty": "B/C",
        "q": "The table shows the time, $t$ seconds, taken by 50 students to complete a puzzle.<br><table><tr><th>Time ($t$ s)</th><th>Frequency</th></tr><tr><td>$20 < t \\le 30$</td><td>8</td></tr><tr><td>$30 < t \\le 40$</td><td>15</td></tr><tr><td>$40 < t \\le 50$</td><td>17</td></tr><tr><td>$50 < t \\le 60$</td><td>10</td></tr></table><br>Calculate an estimate for the mean time.",
        "steps": [
            "We first identify the mid-interval values ($x$) for each group: 25, 35, 45, and 55.",
            "Next, we multiply each midpoint by its frequency ($f \\times x$): $200$, $525$, $765$, and $550$.",
            "We sum these products to find the total estimated time: $200 + 525 + 765 + 550 = 2040$.",
            "Finally, we divide the total time by the number of students ($n = 50$).",
            "Final Answer: $$40.8\\text{ seconds}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Why it is an Estimate",
            "content": "Cambridge frequently includes a 1-mark 'reasoning' question alongside this calculation. The result is an 'estimate' because we do not know the exact times of the students within each interval; we must assume they are distributed evenly around the midpoint."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Statistics Pack"
    },
    // 7 May
    {
        "id": "003127",
        "date": "7 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "difficulty": "B/A",
        "q": "A curve has the equation $y = x^3 - 3x^2 + 4$.<br>(a) Find $\\dfrac{dy}{dx}$.<br>(b) Find the gradient of the curve at the point where $x = 4$.",
        "steps": [
            "For part (a), we differentiate each term using the power rule: multiply by the power and then subtract one from the index.",
            "Differentiating $x^3$ gives $3x^2$; differentiating $-3x^2$ gives $-6x$.",
            "The constant term $+4$ differentiates to $0$.",
            "For part (b), the gradient is found by substituting $x = 4$ into the derivative expression.",
            "Calculation: $3(4)^2 - 6(4) = 3(16) - 24 = 48 - 24$.",
            "Final Answer: $$(a)\\ 3x^2 - 6x,\\ (b)\\ 24$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Calculus Foundations",
            "content": "Differentiation is a signature topic of the Extended IGCSE syllabus. Mastery of the power rule is the foundation that allows you to solve complex Paper 4 problems involving tangents, normals, and optimization."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 8 May
    {
        "id": "003128",
        "date": "8 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Similar shapes",
        "difficulty": "A/A*",
        "q": "The volumes of two mathematically similar solids are $250\\text{ cm}^3$ and $128\\text{ cm}^3$. Given that the surface area of the larger solid is $150\\text{ cm}^2$, calculate the surface area of the smaller solid.",
        "steps": [
            "We find the volume scale factor ($k^3$) by dividing the two volumes: $k^3 = 250 \\div 128 = 1.953125$.",
            "To find the linear scale factor ($k$), we take the cube root: $k = \\sqrt[3]{1.953125} = 1.25$ or $\\dfrac{5}{4}$.",
            "The area scale factor ($k^2$) is the square of the linear scale factor: $k^2 = 1.25^2 = 1.5625$.",
            "Finally, to find the smaller area, we divide the larger area by the area scale factor: $150 \\div 1.5625$.",
            "Final Answer: $$96\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dimensional Bridging",
            "content": "You cannot jump directly from volume to area. You <strong>must</strong> find the linear scale factor ($k$) first. Think of $k$ as the essential bridge that connects 1D, 2D, and 3D properties in similar shapes."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 9 May
    {
        "id": "003129",
        "date": "9 May 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations in standard form",
        "difficulty": "C/D",
        "q": "Without using a calculator, calculate the value of $5.2 \\times 10^{12} + 3.1 \\times 10^{10}$. Give your answer in standard form.",
        "steps": [
            "To add numbers in standard form without a calculator, we must first equalise the powers of 10.",
            "We convert $3.1 \\times 10^{10}$ to match the higher power: $0.031 \\times 10^{12}$.",
            "Now we sum the coefficients: $5.2 + 0.031 = 5.231$.",
            "Combining this with the power of 10 yields the final expression.",
            "Final Answer: $$5.231 \\times 10^{12}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Power Alignment",
            "content": "In Paper 2, aligning the powers of 10 is the most reliable way to perform addition or subtraction. Always convert to the higher power to ensure your final coefficient is already correctly placed for standard form."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 10 May
    {
        "id": "003130",
        "date": "10 May 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams",
        "subtopic": "Without replacement",
        "difficulty": "B/A",
        "q": "A box contains 6 green apples and 4 red apples. Two apples are picked at random without replacement. Find the probability that both apples are the same colour.",
        "steps": [
            "We identify two mutually exclusive scenarios: picking two green (GG) or picking two red (RR).",
            "Probability of two green: $P(GG) = \\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{30}{90}$.",
            "Probability of two red: $P(RR) = \\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac{12}{90}$.",
            "We sum these probabilities: $\\dfrac{30}{90} + \\dfrac{12}{90} = \\dfrac{42}{90}$.",
            "Finally, we simplify the fraction to its lowest terms.",
            "Final Answer: $$\\dfrac{7}{15}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Selection Dependencies",
            "content": "In probability, 'without replacement' is a instruction to reduce both the numerator and the denominator for the second pick. This transition from 10 to 9 items is where most marks are lost in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE Probability: Download the Extended Pack"
    },
    // 11 May
    {
        "id": "003131",
        "date": "11 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "B/C",
        "q": "Line $L$ passes through $A(2, 5)$ and $B(6, -3)$. Find the equation of the line perpendicular to $L$ that passes through the midpoint of $AB$.",
        "steps": [
            "We first find the gradient of $L$: $m = \\dfrac{-3 - 5}{6 - 2} = \\dfrac{-8}{4} = -2$.",
            "The gradient of the perpendicular line is the negative reciprocal: $m_{\\perp} = \\dfrac{1}{2}$.",
            "Next, we calculate the midpoint of $AB$: $M = (4, 1)$.",
            "Using $y - y_1 = m(x - x_1)$ with our values: $y - 1 = \\dfrac{1}{2}(x - 4)$.",
            "Expanding and simplifying gives the final equation.",
            "Final Answer: $$y = \\dfrac{1}{2}x - 1$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Perpendicular Rule",
            "content": "In coordinate geometry, 'perpendicular' is an algebraic command to use the $m_1 m_2 = -1$ rule. Always apply both the negative and the reciprocal to ensure your new line is correctly oriented."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 12 May
    {
        "id": "003132",
        "date": "12 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Cosine rule",
        "difficulty": "B/A",
        "img": "true",
        "q": "In triangle $XYZ$, $XY = 7\\text{ cm}$, $YZ = 9\\text{ cm}$ and $XZ = 12\\text{ cm}$. Calculate the size of the largest angle in the triangle.",
        "steps": [
            "In any triangle, the largest angle is always opposite the longest side. We must therefore find angle $Y$.",
            "We apply the rearranged Cosine Rule: $\\cos(Y) = \\dfrac{x^2 + z^2 - y^2}{2xz}$.",
            "Substituting the values: $\\cos(Y) = \\dfrac{9^2 + 7^2 - 12^2}{2(9)(7)}$.",
            "Simplifying the numerator: $81 + 49 - 144 = -14$.",
            "Calculating the angle: $Y = \\cos^{-1}(-14/126) \\approx 96.379...$.",
            "Final Answer: $$96.4^\\circ$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Degree Precision",
            "content": "For Cambridge IGCSE, all angles in degrees must be rounded to exactly 1 decimal place unless the question provides a different instruction. Standard over-rounding to the nearest degree will result in an accuracy penalty."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 13 May
    {
        "id": "003133",
        "date": "13 May 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Factorising method",
        "difficulty": "B/C",
        "q": "Without using a calculator, solve the equation: $2x^2 + 5x - 12 = 0$.",
        "steps": [
            "We seek two numbers that multiply to $ac$ ($2 \\times -12 = -24$) and sum to $b$ ($+5$).",
            "The numbers are $+8$ and $-3$.",
            "We split the middle term: $2x^2 + 8x - 3x - 12 = 0$.",
            "Factorising by grouping: $2x(x + 4) - 3(x + 4) = 0$.",
            "This yields the brackets $(2x - 3)(x + 4) = 0$.",
            "Solving for $x$ gives $x = 1.5$ and $x = -4$.",
            "Final Answer: $$x = 1.5, x = -4$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Factorising vs Formula",
            "content": "While the quadratic formula is a universal tool, being able to factorise non-monic quadratics quickly is a major time-saver in Paper 2. Use the grouping method shown above to maintain algebraic rigour."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 14 May
    {
        "id": "003134",
        "date": "14 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Volume",
        "difficulty": "B/A",
        "q": "A solid metal sphere of radius $6\\text{ cm}$ is melted down and recast into a cylinder of radius $8\\text{ cm}$. Calculate the height of the cylinder.",
        "steps": [
            "We first calculate the volume of the sphere: $V = \\dfrac{4}{3}\\pi(6^3) = 288\\pi\\text{ cm}^3$.",
            "Since the metal is recast, the volume of the cylinder must also be $288\\pi$.",
            "We use the cylinder volume formula: $V = \\pi r^2 h$.",
            "Substituting our values: $288\\pi = \\pi(8^2)h$.",
            "Cancelling $\\pi$ and simplifying gives $288 = 64h$.",
            "Final Answer: $$4.5\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Working with Pi",
            "content": "In recasting problems, leave the $\\pi$ symbol in your working until the final step. It prevents rounding errors midway through the problem and usually cancels out entirely, making the final division much simpler."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 15 May
    {
        "id": "003135",
        "date": "15 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "subtopic": "Stationary points",
        "difficulty": "A/A*",
        "q": "Find the coordinates of the two stationary points on the curve $y = 2x^3 - 9x^2 + 12x - 3$.",
        "steps": [
            "We find the derivative $\\dfrac{dy}{dx}$ using the power rule: $\\dfrac{dy}{dx} = 6x^2 - 18x + 12$.",
            "Stationary points occur when the gradient is zero, so we set $6x^2 - 18x + 12 = 0$.",
            "Dividing by 6 gives $x^2 - 3x + 2 = 0$, which factorises to $(x - 1)(x - 2) = 0$.",
            "The $x$-coordinates are $1$ and $2$. We substitute these into the original equation for $y$.",
            "When $x = 1, y = 2$. When $x = 2, y = 1$.",
            "Final Answer: $$(1, 2) \\text{ and } (2, 1)$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Stationary Point Protocol",
            "content": "The term 'stationary point' is a specific command to solve for a gradient of zero. I remind my students to perform a final coordinate check: a 'point' must always be presented as an $(x, y)$ pair. Failing to find the $y$-values is a very common omission in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 16 May
    {
        "id": "003136",
        "date": "16 May 2026",
        "major_area": "Algebra",
        "topic": "Linear Equations",
        "subtopic": "Equations with brackets",
        "difficulty": "C/D",
        "q": "Solve the equation: $\\dfrac{3(x + 4)}{5} = 12$.",
        "steps": [
            "We begin by multiplying both sides by 5 to remove the fraction: $3(x + 4) = 60$.",
            "Expanding the brackets gives $3x + 12 = 60$.",
            "Subtracting 12 from both sides results in $3x = 48$.",
            "Dividing by 3 yields the final value for $x$.",
            "Final Answer: $$16$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Logical Sequencing",
            "content": "In non-calculator questions, the order of steps is vital. Many students expand brackets before removing the fraction, but multiplying first creates simpler integers to work with and reduces the risk of mental arithmetic errors."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 17 May
    {
        "id": "003137",
        "date": "17 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Cyclic quadrilaterals",
        "difficulty": "B/A",
        "img": "true",
        "q": "$A, B, C$ and $D$ are points on a circle. $AB$ is parallel to $DC$. Given $\\angle ADC = 108^\\circ$, calculate the sizes of $\\angle ABC$ and $\\angle BCD$.",
        "steps": [
            "We identify $ABCD$ as a cyclic quadrilateral. Opposite angles sum to $180^\\circ$.",
            "Therefore, $\\angle ABC = 180^\\circ - 108^\\circ = 72^\\circ$.",
            "Using parallel line properties, $\\angle ABC$ and $\\angle BCD$ are co-interior angles.",
            "Calculation: $\\angle BCD = 180^\\circ - 72^\\circ = 108^\\circ$.",
            "Final Answer: $$\\angle ABC = 72^\\circ, \\angle BCD = 108^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Chord Parallelism",
            "content": "Cambridge often combines circle theorems with basic angle geometry. Parallel lines within a circle create an isosceles trapezium, which is a unique property worth memorising for the more challenging Paper 4 questions."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 18 May
    {
        "id": "003138",
        "date": "18 May 2026",
        "major_area": "Number",
        "topic": "Fractions",
        "subtopic": "Fraction operations",
        "difficulty": "C/D",
        "q": "Without using a calculator, calculate $3\\dfrac{1}{4} - 1\\dfrac{2}{3}$. Give your answer as a mixed number in its simplest form.",
        "steps": [
            "We convert both mixed numbers into improper fractions: $\\dfrac{13}{4}$ and $\\dfrac{5}{3}$.",
            "The common denominator is 12. We adjust the numerators: $\\dfrac{39}{12}$ and $\\dfrac{20}{12}$.",
            "Subtracting the fractions gives $\\dfrac{19}{12}$.",
            "Finally, we convert back into a mixed number.",
            "Final Answer: $$1\\dfrac{7}{12}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Common Denominator",
            "content": "I discourage students from subtracting whole numbers and fractions separately, as this often leads to errors when the second fraction is larger. The improper fraction method is universally reliable."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 19 May
    {
        "id": "003139",
        "date": "19 May 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Inverse functions",
        "difficulty": "B/A",
        "q": "The function $f(x) = \\dfrac{2x + 3}{x - 5}$ for $x \\neq 5$. Find an expression for $f^{-1}(x)$.",
        "steps": [
            "We begin by setting $y = f(x)$.",
            "We interchange the variables $x$ and $y$ to represent a reflection in the line $y = x$.",
            "This gives $x = \\dfrac{2y + 3}{y - 5}$.",
            "Multiplying by the denominator: $x(y - 5) = 2y + 3$.",
            "Expanding and grouping $y$ terms: $xy - 2y = 5x + 3$.",
            "Factorising $y$ out: $y(x - 2) = 5x + 3$.",
            "Finally, we divide to isolate $y$.",
            "Final Answer: $$f^{-1}(x) = \\dfrac{5x + 3}{x - 2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Inverse Reflexivity",
            "content": "When $x$ appears in both parts of a fraction, the 'interchange' and 'factorise' steps are non-negotiable. This is a high-level functional skill that is frequently assessed in the final section of Extended papers."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 20 May
    {
        "id": "003140",
        "date": "20 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Surface area",
        "difficulty": "B/A",
        "img": "true",
        "q": "A cone has a base radius of $5\\text{ cm}$ and a slant height of $13\\text{ cm}$. Calculate the total surface area of the cone, correct to 1 decimal place.",
        "steps": [
            "The total surface area consists of the circular base and the curved lateral surface.",
            "Area of base: $\\pi r^2 = 25\\pi$.",
            "Curved surface area formula: $\\pi r l = \\pi(5)(13) = 65\\pi$.",
            "Total surface area is the sum: $90\\pi$.",
            "Using a calculator: $90 \\times \\pi \\approx 282.743...$.",
            "Final Answer: $$282.7\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Slant vs Vertical",
            "content": "The most frequent error in cone geometry is using the vertical height ($h$) for the curved area. Always verify if the slant height ($l$) is provided; if given $h$, you must first use Pythagoras to find $l$."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 21 May
    {
        "id": "003141",
        "date": "21 May 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Rationalising denominators",
        "difficulty": "A/A*",
        "q": "Without using a calculator, show that $\\dfrac{10}{\\sqrt{5}}$ can be expressed in the form $a\\sqrt{5}$.",
        "steps": [
            "To rationalise the denominator, we multiply the fraction by $\\dfrac{\\sqrt{5}}{\\sqrt{5}}$.",
            "The expression becomes $\\dfrac{10\\sqrt{5}}{5}$.",
            "Dividing 10 by 5 yields the final simplified form.",
            "Final Answer: $$2\\sqrt{5}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Radical Efficiency",
            "content": "Rationalising is a mandatory skill for the new non-calculator Paper 2. Think of it as 'moving' the irrationality from the bottom to the top to leave a rational integer below."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 22 May
    {
        "id": "003142",
        "date": "22 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Area of triangle 1/2 ab sin C",
        "difficulty": "B/A",
        "img": "true",
        "q": "The area of triangle $ABC$ is $40\\text{ cm}^2$. Given $AB = 10\\text{ cm}$ and $AC = 12\\text{ cm}$, find the two possible sizes for angle $BAC$.",
        "steps": [
            "We use the area formula: $40 = 0.5(10)(12)\\sin(A)$.",
            "Simplifying the equation gives $\\sin(A) = \\dfrac{2}{3}$.",
            "The acute solution is $\\sin^{-1}(2/3) \\approx 41.8^\\circ$.",
            "The obtuse solution is found by $180^\\circ - 41.8^\\circ$.",
            "Final Answer: $$41.8^\\circ \\text{ and } 138.2^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Ambiguous Case Logic",
            "content": "Paper 4 often tests the 'ambiguous' nature of sine. Because $\\sin(x) = \\sin(180-x)$, there are always two possible triangles unless the angle is $90^\\circ$."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 23 May
    {
        "id": "003143",
        "date": "23 May 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Common factors",
        "difficulty": "C/D",
        "q": "Factorise fully: $6ax - 3ay - 4bx + 2by$.",
        "steps": [
            "We group the terms in pairs and factorise each pair.",
            "The first pair: $3a(2x - y)$.",
            "The second pair (taking care with signs): $-2b(2x - y)$.",
            "Finally, we collect the common bracketed factor.",
            "Final Answer: $$(3a - 2b)(2x - y)$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Sign Grouping",
            "content": "The second bracket must match the first. If you factorise incorrectly, the signs will not align. Always mental-expand your result to check against the original."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 24 May
    {
        "id": "003144",
        "date": "24 May 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Direct & Inverse Proportion",
        "subtopic": "Proportion equations",
        "difficulty": "B/A",
        "q": "$y$ is proportional to $(x - 1)^2$. When $x = 4, y = 18$. Find $y$ when $x = 6$.",
        "steps": [
            "We define the equation: $y = k(x - 1)^2$.",
            "Substituting known values: $18 = k(3^2) \\implies k = 2$.",
            "The specific formula is $y = 2(x - 1)^2$.",
            "Now substitute $x = 6$ into our formula.",
            "Final Answer: $$50$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying 'k'",
            "content": "In proportion problems, establishing the constant $k$ is the 'anchor step' that allows the rest of the problem to be solved safely."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 25 May
    {
        "id": "003145",
        "date": "25 May 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Solving inequalities",
        "difficulty": "C/D",
        "q": "Solve the inequality: $5 - 2x < 11$.",
        "steps": [
            "We subtract 5 from both sides: $-2x < 6$.",
            "We divide by $-2$, which reverses the inequality sign.",
            "Final Answer: $$x > -3$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Negative Flip",
            "content": "Dividing an inequality by a negative number is a classic trap. Failing to reverse the sign will result in zero marks for the final solution."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 26 May
    {
        "id": "003146",
        "date": "26 May 2026",
        "major_area": "Statistics",
        "topic": "Histograms",
        "subtopic": "Interpreting histograms",
        "difficulty": "B/A",
        "q": "In a histogram, a bar of width $3\\text{ cm}$ and height $4\\text{ cm}$ represents 60 units. Calculate the frequency of a bar with width $2\\text{ cm}$ and height $5\\text{ cm}$.",
        "steps": [
            "We use the principle that Area is proportional to Frequency.",
            "First area: $12\\text{ cm}^2$ representing 60 units ($1\\text{ cm}^2 = 5$ units).",
            "Second area: $10\\text{ cm}^2$.",
            "Multiplying by our density factor gives the final result.",
            "Final Answer: $$50$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Area vs Density",
            "content": "High-tier problems often use physical bar dimensions to test if you truly understand that frequency is the total area, not just the height."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Statistics Pack"
    },
    // 27 May
    {
        "id": "003147",
        "date": "27 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Angles",
        "subtopic": "Regular polygons",
        "difficulty": "C/D",
        "img": "true",
        "q": "Calculate the size of one exterior angle of a regular polygon with 15 sides.",
        "steps": [
            "The sum of exterior angles for any convex polygon is $360^\\circ$.",
            "For a regular polygon, we divide the total by the number of sides.",
            "Final Answer: $$24^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Geometric Constants",
            "content": "Working with exterior angles is the most efficient path for polygon problems. This constant $360$ applies regardless of the number of sides."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 28 May
    {
        "id": "003148",
        "date": "28 May 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Currency conversion",
        "difficulty": "C/D",
        "q": "An investor converts $£800$ into dollars at $£1 = \\$1.26$, then back to pounds at $£1 = \\$1.20$. Calculate the profit in pounds.",
        "steps": [
            "Original Pounds to Dollars: $800 \\times 1.26 = \\$1008$.",
            "Dollars back to Pounds: $1008 \\div 1.20 = £840$.",
            "Profit is the difference: $£840 - £800$.",
            "Final Answer: $$£40$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Directional Logic",
            "content": "When moving to a currency worth 'less' per unit, you multiply. When returning to the 'stronger' unit, you divide. Logic-checking the final value ensures you used the correct operation."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 29 May
    {
        "id": "003149",
        "date": "29 May 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Factorising method",
        "difficulty": "B/A",
        "q": "Solve the equation: $x^2 - 11x + 24 = 0$.",
        "steps": [
            "We identify factors of 24 that sum to -11: $-3$ and $-8$.",
            "We factorise into $(x - 3)(x - 8) = 0$.",
            "We invert the signs to find the actual roots.",
            "Final Answer: $$x = 3, x = 8$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Bracket to Solution",
            "content": "A common 'final step' error is finding the factors but failing to solve for zero. Always state the final values clearly."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 30 May
    {
        "id": "003150",
        "date": "30 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Column vectors",
        "difficulty": "C/D",
        "q": "If $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$, calculate the magnitude of $2\\mathbf{a} + 3\\mathbf{b}$.",
        "steps": [
            "First calculate $2\\mathbf{a} = \\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$ and $3\\mathbf{b} = \\begin{pmatrix} -3 \\\\ 6 \\end{pmatrix}$.",
            "Summing these gives $\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$.",
            "Magnitude is $\\sqrt{3^2 + (-2)^2} = \\sqrt{13}$.",
            "Final Answer: $$3.61$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Magnitude as Distance",
            "content": "The magnitude is simply the hypotenuse of the triangle formed by the vector components. Always use Pythagoras."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 31 May
    {
        "id": "003151",
        "date": "31 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "subtopic": "Stationary points",
        "difficulty": "A*",
        "img": "true",
        "q": "The volume of a box is $V = x^3 - 21x^2 + 108x$. Calculate the value of $x$ for which the volume is a maximum.",
        "steps": [
            "We differentiate to find the gradient function: $\\dfrac{dV}{dx} = 3x^2 - 42x + 108$.",
            "We set this to zero and simplify: $x^2 - 14x + 36 = 0$.",
            "Using the quadratic formula, we find $x \\approx 10.6$ and $x \\approx 3.39$.",
            "We discard 10.6 as it exceeds the physical dimensions of the problem.",
            "Final Answer: $$3.39\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Modelling Constraints",
            "content": "Optimization requires you to check your results against reality. Discard any roots that would result in negative dimensions."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    }
];