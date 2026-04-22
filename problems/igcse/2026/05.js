const problemBank = [

// 1 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003201",
        "date": "1 May 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "HCF",
        "difficulty": "C/D",
        "q": "Without using a calculator, find the highest common factor (HCF) of 168 and 180.",
        "steps": [
            "We begin by expressing both numbers as products of their prime factors using factor trees.",
            "The prime factorisation of 168 is $2^3 \\times 3 \\times 7$.",
            "The prime factorisation of 180 is $2^2 \\times 3^2 \\times 5$.",
            "To find the HCF, we identify the common prime factors with the lowest powers: $2^2$ and $3$.",
            "Finally, we multiply these values to find the HCF: $4 \\times 3 = 12$.",
            "Final Answer: $$12$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systematic Factorisation",
            "content": "In the non-calculator Paper 2, speed and accuracy are paramount. Listing factors manually is risky; the prime factorisation method is far more robust and ensures no common factors are overlooked."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 2 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003202",
        "date": "2 May 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Negative indices",
        "difficulty": "B/C",
        "q": "Without using a calculator, simplify fully: $$\\left(\\dfrac{16}{x^8}\\right)^{-\\frac{3}{4}}$$.",
        "steps": [
            "We first address the negative index by taking the reciprocal of the fraction: $\\left(\\dfrac{x^8}{16}\\right)^{\\frac{3}{4}}$.",
            "Next, we apply the denominator of the index (the 4th root) to both the numerator and the denominator: $\\dfrac{(x^8)^{1/4}}{16^{1/4}} = \\dfrac{x^2}{2}$.",
            "Finally, we apply the numerator of the index (the cube) to the result.",
            "Final Answer: $$\\dfrac{x^6}{8}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Order of Operations",
            "content": "In index manipulation, the order in which you apply the components of the power is vital. I always advise taking the root before the power to keep the numbers small and manageable in a non-calculator environment."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 3 May - Paper 4 (Calculator) Focus
    {
        "id": "003203",
        "date": "3 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Sine rule",
        "difficulty": "B/A",
        "img": "images/05/i_03.png",
        "q": "In triangle $PQR$, $PQ = 12.6\\text{ cm}$, $\\angle PRQ = 41^\\circ$ and $\\angle QPR = 73^\\circ$. Calculate the length of $QR$.",
        "steps": [
            "We begin by identifying that we have a 'non-included' angle and its opposite side, which indicates the use of the Sine Rule.",
            "The Sine Rule states that $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}$. We set up the equation: $\\dfrac{QR}{\\sin 73^\\circ} = \\dfrac{12.6}{\\sin 41^\\circ}$.",
            "Rearranging to solve for $QR$, we get $QR = \\dfrac{12.6 \\times \\sin 73^\\circ}{\\sin 41^\\circ}$.",
            "Using a calculator, we find that $QR \\approx 18.361...$.",
            "Final Answer: $$18.4\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Three Significant Figures",
            "content": "Unless otherwise stated, Cambridge IGCSE requires all non-exact numerical answers to be given correct to 3 significant figures. Failing to adhere to this general instruction will result in the loss of an accuracy mark."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 4 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003204",
        "date": "4 May 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Changing the subject",
        "difficulty": "B/C",
        "q": "Make $w$ the subject of the formula: $t = 3 + \\sqrt{\\dfrac{w-x}{2}}$.",
        "steps": [
            "We begin by subtracting 3 from both sides of the equation: $t - 3 = \\sqrt{\\dfrac{w-x}{2}}$.",
            "Next, we square both sides to eliminate the square root: $(t - 3)^2 = \\dfrac{w-x}{2}$.",
            "We then multiply both sides by 2: $2(t - 3)^2 = w - x$.",
            "Finally, we add $x$ to both sides to isolate $w$.",
            "Final Answer: $$w = 2(t - 3)^2 + x$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Reverse BIDMAS",
            "content": "Rearranging a formula is effectively 'undressing' the subject. We must reverse the order of operations, dealing with the terms furthest away from the $w$ (the addition of 3) first."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 5 May - Paper 4 (Calculator) Focus
    {
        "id": "003205",
        "date": "5 May 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Compound interest",
        "difficulty": "B/A",
        "q": "A bank account pays compound interest at a rate of 2.5% per year. After 4 years, the value of the investment is $£6,622.72$. Calculate the original amount invested.",
        "steps": [
            "We identify this as a reverse compound interest problem. The multiplier for a 2.5% increase is $1.025$.",
            "The relationship is defined as $\\text{Original} \\times 1.025^4 = 6622.72$.",
            "To find the original investment, we divide the final amount by $1.025^4$.",
            "Calculation: $6622.72 \\div 1.1038... = 6000$.",
            "Final Answer: $$£6,000$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Principal vs Interest",
            "content": "Always read the final line of the question carefully. If the examiner asks for the 'interest earned', you must subtract the principal from the total. Here, we are looking for the original principal itself."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 6 May - Paper 4 (Calculator) Focus
    {
        "id": "003206",
        "date": "6 May 2026",
        "major_area": "Statistics",
        "topic": "Frequency Tables",
        "subtopic": "Grouped data",
        "difficulty": "B/C",
        "q": "The table shows the time, $t$ seconds, taken by 50 students to complete a puzzle.<br><br><table style='border-collapse: collapse; width: 100%; text-align: center;' border='1'><tr><th style='padding: 8px;'>Time ($t$ s)</th><th style='padding: 8px;'>Frequency</th></tr><tr><td style='padding: 5px;'>$20 < t \\le 30$</td><td style='padding: 5px;'>8</td></tr><tr><td style='padding: 5px;'>$30 < t \\le 40$</td><td style='padding: 5px;'>15</td></tr><tr><td style='padding: 5px;'>$40 < t \\le 50$</td><td style='padding: 5px;'>17</td></tr><tr><td style='padding: 5px;'>$50 < t \\le 60$</td><td style='padding: 5px;'>10</td></tr></table><br>Calculate an estimate for the mean time.",
        "steps": [
            "We first find the mid-interval values for each group: 25, 35, 45, and 55.",
            "Next, we multiply each mid-interval value by its corresponding frequency ($f \\times x$):<br>$8 \\times 25 = 200$<br>$15 \\times 35 = 525$<br>$17 \\times 45 = 765$<br>$10 \\times 55 = 550$.",
            "We then sum these products to find the total estimated time: $200 + 525 + 765 + 550 = 2040$.",
            "Finally, we divide the total time by the total number of students ($n = 50$).",
            "Final Answer: $$40.8\\text{ seconds}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Why it is an Estimate",
            "content": "Cambridge often includes a 1-mark 'reasoning' part to this question. The result is an estimate because we do not know the exact times of the students within each interval; we assume they are distributed around the midpoint."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Statistics Pack"
    },
    // 7 May - Paper 4 (Calculator) Focus
    {
        "id": "003207",
        "date": "7 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "difficulty": "B/A",
        "q": "A curve has the equation $y = x^3 - 3x^2 + 4$.<br>(a) Find $\\dfrac{dy}{dx}$.<br>(b) Find the gradient of the curve at the point where $x = 4$.",
        "steps": [
            "For part (a), we differentiate each term using the power rule: multiply by the power and then subtract one from the power. $\\dfrac{dy}{dx} = 3x^2 - 6x$.",
            "For part (b), the gradient of the curve is found by substituting the $x$-value into the derivative expression.",
            "When $x = 4$, we calculate $3(4)^2 - 6(4) = 3(16) - 24 = 48 - 24$.",
            "Final Answer: $$(a)\\ 3x^2 - 6x,\\ (b)\\ 24$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Calculus Foundations",
            "content": "Differentiation is a hallmark of the Extended IGCSE syllabus. Mastery of the power rule allows students to solve complex Paper 4 problems involving tangents, normals, and optimization."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 8 May - Paper 4 (Calculator) Focus
    {
        "id": "003208",
        "date": "8 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Similar shapes",
        "difficulty": "A/A*",
        "q": "The volumes of two mathematically similar solids are $250\\text{ cm}^3$ and $128\\text{ cm}^3$. The surface area of the larger solid is $150\\text{ cm}^2$. Calculate the surface area of the smaller solid.",
        "steps": [
            "We first find the volume scale factor by dividing the two volumes: $\\dfrac{250}{128} = 1.953125$.",
            "To find the linear scale factor ($k$), we take the cube root of the volume scale factor: $\\sqrt[3]{1.953125} = 1.25$ (or $5/4$).",
            "The area scale factor is the square of the linear scale factor: $1.25^2 = 1.5625$.",
            "Finally, to find the smaller area, we divide the larger area by the area scale factor: $150 \\div 1.5625$.",
            "Final Answer: $$96\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dimensional Bridging",
            "content": "You cannot jump directly from volume to area. You <strong>must</strong> find the linear scale factor ($k$) first. Think of $k$ as the bridge that connects 1D, 2D, and 3D properties."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 9 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003209",
        "date": "9 May 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Converting to/from standard form",
        "difficulty": "C/D",
        "q": "Work out the value of $5.2 \\times 10^{12} + 3.1 \\times 10^{10}$, giving your answer in standard form.",
        "steps": [
            "To add numbers in standard form without a calculator, we must first make the powers of 10 equal.",
            "We convert $3.1 \\times 10^{10}$ to $0.031 \\times 10^{12}$.",
            "Now we add the coefficients: $5.2 + 0.031 = 5.231$.",
            "The final expression is $5.231 \\times 10^{12}$.",
            "Final Answer: $$5.231 \\times 10^{12}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Power Alignment",
            "content": "In Paper 2, aligning the powers of 10 is the safest way to perform addition or subtraction. Always convert to the higher power to ensure your final coefficient is already correctly placed for standard form."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 10 May - Paper 4 (Calculator) Focus
    {
        "id": "003210",
        "date": "10 May 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams",
        "subtopic": "Without replacement",
        "difficulty": "B/A",
        "q": "A box contains 6 green apples and 4 red apples. Two apples are picked at random without replacement. Find the probability that both apples are the same colour.",
        "steps": [
            "We consider two mutually exclusive scenarios: both are green OR both are red.",
            "Probability of two green (GG): $\\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{30}{90}$.",
            "Probability of two red (RR): $\\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac{12}{90}$.",
            "We add these probabilities together: $\\dfrac{30}{90} + \\dfrac{12}{90} = \\dfrac{42}{90}$.",
            "We simplify the resulting fraction to its lowest terms.",
            "Final Answer: $$\\dfrac{7}{15}<br><img src='images/05/i_10_sol.png' alt='Probability tree solution' style='max-width:300px;'>$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dependency in Selection",
            "content": "In IGCSE probability, 'without replacement' is a instruction to reduce both the numerator and the denominator for the second pick. This is where most students lose accuracy marks in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE Probability: Download the Extended Probability and Statistics Pack"
    },
    // 11 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003211",
        "date": "11 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "B/C",
        "q": "The line $L$ passes through the points $A(2, 5)$ and $B(6, -3)$. Find the equation of the line perpendicular to $L$ that passes through the midpoint of $AB$.",
        "steps": [
            "We first find the gradient of $L$: $m = \\dfrac{-3 - 5}{6 - 2} = \\dfrac{-8}{4} = -2$.",
            "The gradient of the perpendicular line is the negative reciprocal: $m_{\\perp} = \\dfrac{1}{2}$.",
            "Next, we find the midpoint of $AB$: $M = \\left(\\dfrac{2+6}{2}, \\dfrac{5+(-3)}{2}\\right) = (4, 1)$.",
            "Using $y - y_1 = m(x - x_1)$ with $(4, 1)$, we get $y - 1 = \\dfrac{1}{2}(x - 4)$.",
            "Simplifying the equation gives $y = \\dfrac{1}{2}x - 2 + 1$.",
            "Final Answer: $$y = \\dfrac{1}{2}x - 1$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Perpendicular Relationship",
            "content": "In coordinate geometry, the word 'perpendicular' is an instruction to use the $m_1 m_2 = -1$ rule. Ensuring you apply both the negative and the reciprocal is a non-negotiable skill for high-tier success."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 12 May - Paper 4 (Calculator) Focus
    {
        "id": "003212",
        "date": "12 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Cosine rule",
        "difficulty": "B/A",
        "img": "images/05/i_12.png",
        "q": "In triangle $XYZ$, $XY = 7\\text{ cm}$, $YZ = 9\\text{ cm}$ and $XZ = 12\\text{ cm}$. Calculate the size of the largest angle in the triangle.",
        "steps": [
            "In any triangle, the largest angle is opposite the longest side. Here, we must find angle $Y$.",
            "We use the rearranged Cosine Rule: $\\cos(Y) = \\dfrac{x^2 + z^2 - y^2}{2xz}$.",
            "Substituting the values: $\\cos(Y) = \\dfrac{9^2 + 7^2 - 12^2}{2(9)(7)} = \\dfrac{81 + 49 - 144}{126}$.",
            "Calculating the fraction: $\\cos(Y) = \\dfrac{-14}{126} = -\\dfrac{1}{9}$.",
            "Taking the inverse cosine: $Y = \\cos^{-1}(-1/9) \\approx 96.379...$.",
            "Final Answer: $$96.4^\\circ$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Angle Precision",
            "content": "For IGCSE, angles given in degrees must be rounded to exactly 1 decimal place unless the question specifies otherwise. Over-rounding to $96^\\circ$ will result in a penalty."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 13 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003213",
        "date": "13 May 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Quadratic factorising",
        "difficulty": "B/C",
        "q": "Without using a calculator, solve the equation: $2x^2 + 5x - 12 = 0$.",
        "steps": [
            "We seek factors of $2 \\times (-12) = -24$ that sum to $+5$. These are $+8$ and $-3$.",
            "We split the middle term: $2x^2 + 8x - 3x - 12 = 0$.",
            "Factorising by grouping: $2x(x + 4) - 3(x + 4) = 0$.",
            "This gives the brackets $(2x - 3)(x + 4) = 0$.",
            "Solving for $x$, we find $x = 1.5$ or $x = -4$.",
            "Final Answer: $$x = 1.5,\\ x = -4$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Factorising over Formula",
            "content": "While the quadratic formula will always work, in Paper 2, being able to factorise quickly is a major time-saver. If the coefficient of $x^2$ is not 1, use the grouping method shown above to maintain accuracy."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 14 May - Paper 4 (Calculator) Focus
    {
        "id": "003214",
        "date": "14 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Volume",
        "difficulty": "B/A",
        "q": "A solid metal sphere of radius $6\\text{ cm}$ is melted down and recast into a cylinder of radius $8\\text{ cm}$. Calculate the height of the cylinder.",
        "steps": [
            "We first calculate the volume of the sphere: $V = \\dfrac{4}{3}\\pi(6^3) = 288\\pi$.",
            "Since the metal is recast, the volume of the cylinder must also be $288\\pi$.",
            "The volume formula for a cylinder is $V = \\pi r^2 h$. We set up the equation: $288\\pi = \\pi(8^2)h$.",
            "Cancelling $\\pi$ and simplifying gives $288 = 64h$.",
            "Dividing to find $h$: $h = 288 \\div 64$.",
            "Final Answer: $$4.5\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Working with Pi",
            "content": "In multi-step volume problems, leave $\\pi$ in your working until the final step. It prevents rounding errors midway through the problem and often cancels out entirely, making the calculation much simpler."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 15 May
    {
        "id": "003215",
        "date": "15 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "subtopic": "Stationary points",
        "difficulty": "A/A*",
        "q": "Find the coordinates of the two stationary points on the curve $y = 2x^3 - 9x^2 + 12x - 3$.",
        "steps": [
            "We begin by finding the derivative of the function, $\\dfrac{dy}{dx}$, by applying the power rule to each term: $\\dfrac{dy}{dx} = 6x^2 - 18x + 12$.",
            "Stationary points occur when the gradient of the curve is zero, so we set the derivative equal to zero: $6x^2 - 18x + 12 = 0$.",
            "Dividing the entire equation by 6 simplifies it to $x^2 - 3x + 2 = 0$, which factorises to $(x - 1)(x - 2) = 0$.",
            "This yields the $x$-coordinates of $1$ and $2$. We must now substitute these values back into the original cubic equation to find the corresponding $y$-coordinates.",
            "When $x = 1$, $y = 2(1)^3 - 9(1)^2 + 12(1) - 3 = 2$. When $x = 2$, $y = 2(8) - 9(4) + 12(2) - 3 = 1$.",
            "Final Answer: $$(1, 2) \\text{ and } (2, 1)$$ <img src='images/05/i_15_sol.png' alt='Cubic graph showing turning points' style='max-width:300px; margin-top:10px;'>"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Identifying Stationary Points",
            "content": "The term 'stationary point' is a specific command in the Extended syllabus to differentiate and solve for a gradient of zero. I always remind my students to perform a final check: have you found the $y$-coordinates? A 'point' in coordinate geometry must always be presented as an $(x, y)$ pair."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 16 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003216",
        "date": "16 May 2026",
        "major_area": "Algebra",
        "topic": "Linear Equations",
        "subtopic": "Equations with brackets",
        "difficulty": "C/D",
        "q": "Solve the equation: $\\dfrac{3(x + 4)}{5} = 12$.",
        "steps": [
            "We begin by multiplying both sides of the equation by 5 to eliminate the fraction: $3(x + 4) = 60$.",
            "Next, we expand the brackets on the left-hand side: $3x + 12 = 60$.",
            "We subtract 12 from both sides to isolate the term with the variable: $3x = 48$.",
            "Finally, we divide by 3 to determine the value of $x$.",
            "Final Answer: $$x = 16$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Logical Sequencing",
            "content": "In Paper 2, many students attempt to expand the bracket before removing the fraction. While mathematically valid, multiplying by 5 first creates much simpler integers to work with, significantly reducing the risk of mental arithmetic errors."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 17 May - Paper 4 (Calculator) Focus
    {
        "id": "003217",
        "date": "17 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Cyclic quadrilaterals",
        "difficulty": "B/A",
        "img": "images/05/i_17.png",
        "q": "$A, B, C$ and $D$ are points on the circumference of a circle. $AB$ is parallel to $DC$. $\\angle ADC = 108^\\circ$.<br>(a) Calculate $\\angle ABC$.<br>(b) Calculate $\\angle BCD$.",
        "steps": [
            "For part (a), we identify $ABCD$ as a cyclic quadrilateral. The opposite angles in a cyclic quadrilateral sum to $180^\\circ$. Therefore, angle $ABC = 180^\\circ - 108^\\circ = 72^\\circ$.",
            "For part (b), we use the property of parallel lines. Since $AB$ is parallel to $DC$, the co-interior angles must sum to $180^\\circ$.",
            "Therefore, $\\angle BCD = 180^\\circ - \\angle ABC = 180^\\circ - 72^\\circ$.",
            "Final Answer: $$(a)\\ 72^\\circ,\\ (b)\\ 108^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Parallel Chord Properties",
            "content": "Cambridge often combines circle theorems with basic angle geometry. When you see parallel lines within a circle, look for 'Z' angles (alternate) or 'C' angles (co-interior). This specific configuration creates an isosceles trapezium, a property worth memorising for Paper 4."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 18 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003218",
        "date": "18 May 2026",
        "major_area": "Number",
        "topic": "Fractions",
        "subtopic": "Fraction operations",
        "difficulty": "C/D",
        "q": "Work out $3\\dfrac{1}{4} - 1\\dfrac{2}{3}$. Give your answer as a mixed number in its simplest form.",
        "steps": [
            "We first convert both mixed numbers into improper fractions: $3\\dfrac{1}{4} = \\dfrac{13}{4}$ and $1\\dfrac{2}{3} = \\dfrac{5}{3}$.",
            "To subtract these fractions, we must find a common denominator, which is 12.",
            "We convert the fractions: $\\dfrac{13 \\times 3}{4 \\times 3} = \\dfrac{39}{12}$ and $\\dfrac{5 \\times 4}{3 \\times 4} = \\dfrac{20}{12}$.",
            "Subtracting the numerators gives $\\dfrac{39 - 20}{12} = \\dfrac{19}{12}$.",
            "Finally, we convert the result back into a mixed number.",
            "Final Answer: $$1\\dfrac{7}{12}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Common Denominator",
            "content": "Fraction arithmetic is the bedrock of Paper 2. I strongly discourage students from subtracting the whole numbers and fractions separately, as this often leads to errors when the second fraction is larger than the first. The improper fraction method is far more reliable."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 19 May 
    {
        "id": "003219",
        "date": "19 May 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Substitution into functions, inverse functions",
        "difficulty": "B/A",
        "q": "The function $f(x)$ is defined as $f(x) = \\dfrac{2x + 3}{x - 5}$ for $x \\neq 5$.<br>(a) Calculate $f(7)$.<br>(b) Find the inverse function $f^{-1}(x)$.",
        "steps": [
            "For part (a), we substitute $x = 7$ into the function: $f(7) = \\dfrac{2(7) + 3}{7 - 5} = \\dfrac{17}{2} = 8.5$.",
            "For part (b), we begin by writing the function as $y = \\dfrac{2x + 3}{x - 5}$.",
            "We then interchange $x$ and $y$: $x = \\dfrac{2y + 3}{y - 5}$.",
            "To solve for $y$, we multiply both sides by the denominator: $x(y - 5) = 2y + 3$.",
            "Expanding the brackets gives $xy - 5x = 2y + 3$.",
            "We collect all terms containing $y$ on one side and the remaining terms on the other: $xy - 2y = 5x + 3$.",
            "By factorising out $y$, we obtain $y(x - 2) = 5x + 3$.",
            "Finally, we divide by $(x - 2)$ and rewrite in inverse function notation.",
            "Final Answer: $$(a)\\ 8.5,\\ (b)\\ f^{-1}(x) = \\dfrac{5x + 3}{x - 2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Handling Complex Inverses",
            "content": "When $x$ appears in both the numerator and the denominator, the 'interchange' step is even more vital for clarity. Once you have swapped $x$ and $y$, your sole focus is to use factorisation to isolate $y$. This is a high-level skill that frequently appears in the final sections of Paper 4."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 20 May - Paper 4 (Calculator) Focus
    {
        "id": "003220",
        "date": "20 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Surface area",
        "difficulty": "B/A",
        "img": "images/05/i_20.png",
        "q": "A cone has a base radius of $5\\text{ cm}$ and a slant height of $13\\text{ cm}$. Calculate the total surface area of the cone. Give your answer correct to 1 decimal place.",
        "steps": [
            "The total surface area of a cone consists of the circular base and the curved surface area.",
            "The area of the base is $\\pi r^2 = \\pi(5^2) = 25\\pi$.",
            "The curved surface area is given by the formula $\\pi r l = \\pi(5)(13) = 65\\pi$.",
            "The total surface area is $25\\pi + 65\\pi = 90\\pi$.",
            "Using a calculator, $90 \\times \\pi \\approx 282.743...$.",
            "Final Answer: $$282.7\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Slant vs Vertical Height",
            "content": "The most common error in cone problems is using the vertical height ($h$) instead of the slant height ($l$) for the curved surface area. Always verify which dimension is provided; if given $h$, you must use Pythagoras to find $l$ before calculating the area."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 21 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003221",
        "date": "21 May 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Rationalising denominators",
        "difficulty": "A/A*",
        "q": "Show that $\\dfrac{10}{\\sqrt{5}}$ can be written as $2\\sqrt{5}$.",
        "steps": [
            "To rationalise the denominator, we multiply both the numerator and the denominator by $\\sqrt{5}$.",
            "This gives $\\dfrac{10 \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}}$.",
            "Simplifying the denominator: $\\sqrt{5} \\times \\sqrt{5} = 5$.",
            "The expression becomes $\\dfrac{10\\sqrt{5}}{5}$.",
            "Dividing 10 by 5 yields the final simplified form.",
            "Final Answer: $$2\\sqrt{5}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Rationalising Efficiency",
            "content": "In Paper 2, rationalising is a standard procedural task. I tell my students to view $\\sqrt{x}$ in the denominator as an 'unfinished' expression. Multiplying by the surd 'moves' the radical to the numerator and leaves a rational integer below."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 22 May - Paper 4 (Calculator) Focus
    {
        "id": "003222",
        "date": "22 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Area of triangle 1/2 ab sin C",
        "difficulty": "B/A",
        "img": "images/05/i_22.png",
        "q": "The area of triangle $ABC$ is $40\\text{ cm}^2$. $AB = 10\\text{ cm}$ and $AC = 12\\text{ cm}$. Calculate the two possible sizes of the acute and obtuse angle $BAC$.",
        "steps": [
            "We use the area formula: $\\text{Area} = \\dfrac{1}{2}bc \\sin(A)$.",
            "Substituting the known values: $40 = \\dfrac{1}{2}(10)(12) \\sin(A)$.",
            "Simplifying the equation: $40 = 60 \\sin(A)$, which gives $\\sin(A) = \\dfrac{2}{3}$.",
            "The first (acute) angle is $\\sin^{-1}(2/3) \\approx 41.8^\\circ$.",
            "The second (obtuse) angle is found by $180^\\circ - 41.8^\\circ$.",
            "Final Answer: $$41.8^circ \\text{ and } 138.2^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The Ambiguous Case",
            "content": "IGCSE Paper 4 frequently tests the 'ambiguous' nature of the Sine function. Because $\\sin(x) = \\sin(180-x)$, there are always two possible triangles unless the angle is $90^\\circ$. Always check if the question implies multiple solutions."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 23 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003223",
        "date": "23 May 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Common factors",
        "difficulty": "C/D",
        "q": "Factorise fully: $6ax - 3ay - 4bx + 2by$.",
        "steps": [
            "This expression has four terms, which suggests factorising by grouping.",
            "We group the first two terms and factorise out $3a$: $3a(2x - y)$.",
            "We group the next two terms and factorise out $-2b$: $-2b(2x - y)$.",
            "Note that the brackets are now identical, which is essential for this method.",
            "Finally, we combine the terms into two brackets.",
            "Final Answer: $$(3a - 2b)(2x - y)$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Sign Precision in Grouping",
            "content": "The grouping method is highly susceptible to sign errors in the second bracket. When you factor out $-2b$, you must ensure the $+2by$ term becomes $-y$ inside the bracket. Always expand your result mentally to verify it matches the original."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 24 May - Paper 4 (Calculator) Focus
    {
        "id": "003224",
        "date": "24 May 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Direct & Inverse Proportion",
        "subtopic": "Proportion equations",
        "difficulty": "B/A",
        "q": "$y$ is directly proportional to $(x - 1)^2$. When $x = 4$, $y = 18$. Calculate the value of $y$ when $x = 6$.",
        "steps": [
            "We establish the relationship equation: $y = k(x - 1)^2$.",
            "Substituting $x = 4$ and $y = 18$: $18 = k(4 - 1)^2 \\implies 18 = 9k$.",
            "Solving for the constant of proportionality: $k = 2$.",
            "The specific formula is $y = 2(x - 1)^2$.",
            "Substitute $x = 6$ into the formula: $y = 2(6 - 1)^2 = 2(5^2)$.",
            "Final Answer: $$50$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying the Relationship",
            "content": "Paper 4 proportion questions often involve transformations like $(x-1)$ or $x^3$. I encourage students to write out the general formula with $k$ immediately. Finding $k$ is the 'anchor step' that allows all subsequent parts of the question to be solved."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 25 May - Paper 4 (Calculator) Focus
    {
        "id": "003225",
        "date": "25 May 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Solving inequalities",
        "difficulty": "C/D",
        "q": "Solve the inequality: $5 - 2x < 11$.",
        "steps": [
            "We begin by subtracting 5 from both sides of the inequality: $-2x < 6$.",
            "Next, we divide both sides by $-2$.",
            "Crucially, when dividing or multiplying an inequality by a negative number, we must reverse the direction of the inequality sign.",
            "The sign changes from $<$ to $>$.",
            "Final Answer: $$x > -3<br><img src='images/05/i_25_sol.png' alt='inequality on number line' style='max-width:300px;'>$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Negative Rule",
            "content": "The 'inequality flip' is a classic discriminator in IGCSE. I find that students who treat inequalities exactly like equations often forget this rule. Practice this specific scenario to ensure it becomes a reflexive habit in the exam."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 26 May - Paper 4 (Calculator) Focus
    {
        "id": "003226",
        "date": "26 May 2026",
        "major_area": "Statistics",
        "topic": "Histograms",
        "subtopic": "Interpreting histograms",
        "difficulty": "B/A",
        "img": "",
        "q": "In a histogram, the bar for the interval $20 < x \\le 50$ has a width of $3\\text{ cm}$ and a height of $4\\text{ cm}$. If this bar represents a frequency of 60, calculate the frequency represented by a bar with a width of $2\\text{ cm}$ and a height of $5\\text{ cm}$.",
        "steps": [
            "In a histogram, the frequency is proportional to the area of the bar.",
            "Area of the first bar $= 3 \\times 4 = 12\\text{ cm}^2$.",
            "We find the 'frequency per unit area': $60 \\div 12 = 5$. This means each $1\\text{ cm}^2$ represents 5 units.",
            "Area of the second bar $= 2 \\times 5 = 10\\text{ cm}^2$.",
            "We calculate the frequency: $10 \\times 5 = 50$.",
            "Final Answer: $$50$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Area Proportionality",
            "content": "This question tests the fundamental principle that 'Area = Frequency' in a histogram. High-tier Paper 4 questions often use physical dimensions (cm) rather than frequency density values to ensure students truly understand the underlying geometry."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Statistics Pack"
    },
    // 27 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003227",
        "date": "27 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Angles",
        "subtopic": "Regular polygons",
        "difficulty": "C/D",
        "img": "images/05/i_27.png",
        "q": "Calculate the size of one exterior angle of a regular polygon with 15 sides.",
        "steps": [
            "We recall that the sum of the exterior angles for any convex polygon is exactly $360^\\circ$.",
            "For a regular polygon, all exterior angles are equal in size.",
            "We divide the total sum by the number of sides: $360 \\div 15$.",
            "Final Answer: $$24^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Geometric Constants",
            "content": "The fact that the sum of exterior angles is always $360^\\circ$ is a powerful shortcut. Whether the polygon has 3 sides or 3,000, this constant remains. Use it to find interior angles as well by simply subtracting from $180^\\circ$."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 28 May - Paper 4 (Calculator) Focus
    {
        "id": "003228",
        "date": "28 May 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Currency conversion",
        "difficulty": "C/D",
        "q": "An investor converts $£800$ into dollars at an exchange rate of $£1 = \\$1.26$. Later, they convert the dollars back into pounds at a rate of $£1 = \\$1.20$. Calculate the profit made in pounds.",
        "steps": [
            "We first convert the pounds to dollars: $800 \\times 1.26 = \\$1008$.",
            "We then convert the dollars back to pounds using the new rate: $1008 \\div 1.20 = £840$.",
            "The profit is found by subtracting the original investment from the final amount: $840 - 800$.",
            "Final Answer: $$£40$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Operation Direction",
            "content": "Students often struggle with whether to multiply or divide in currency problems. I advise them to use the 'Big to Small' rule: when moving from a currency where 1 unit is worth more (Pounds) to one where it is worth less (Dollars), you multiply."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 29 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003229",
        "date": "29 May 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Factorising method",
        "difficulty": "B/A",
        "q": "Solve the equation: $x^2 - 11x + 24 = 0$.",
        "steps": [
            "We search for two numbers that multiply to $+24$ and sum to $-11$.",
            "The numbers are $-3$ and $-8$.",
            "We write the equation in its factorised form: $(x - 3)(x - 8) = 0$.",
            "For the product to be zero, either $x - 3 = 0$ or $x - 8 = 0$.",
            "This yields the two solutions for $x$.",
            "Final Answer: $$x = 3,\\ x = 8$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Bracket to Solution",
            "content": "A common 'final step' error is finding the correct numbers for the brackets but then failing to invert the signs for the actual solutions. If the bracket is $(x - 3)$, the solution must be $x = +3$."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 30 May - Paper 4 (Calculator) Focus
    {
        "id": "003230",
        "date": "30 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Column vectors",
        "difficulty": "C/D",
        "q": "The vector $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$ and the vector $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$. Calculate the magnitude of the vector $2\\mathbf{a} + 3\\mathbf{b}$.",
        "steps": [
            "First, we calculate the scalar multiples: $2\\mathbf{a} = \\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$ and $3\\mathbf{b} = \\begin{pmatrix} -3 \\\\ 6 \\end{pmatrix}$.",
            "Adding the vectors: $2\\mathbf{a} + 3\\mathbf{b} = \\begin{pmatrix} 6 - 3 \\\\ -8 + 6 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$.",
            "To find the magnitude ($|v|$), we use Pythagoras' theorem: $|v| = \\sqrt{3^2 + (-2)^2}$.",
            "Calculation: $\\sqrt{9 + 4} = \\sqrt{13}$.",
            "Final Answer: $$3.61$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Magnitude and Pythagoras",
            "content": "The 'magnitude' of a vector is simply its physical length. I remind my students that a column vector is essentially a set of instructions for a right-angled triangle (right/left and up/down), making Pythagoras the natural tool for finding the distance."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
   // 31 May - Paper 4 (Calculator) Focus
    {
        "id": "003231",
        "date": "31 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "subtopic": "Stationary points",
        "difficulty": "A*",
        "img": "images/05/i_31.png",
        "q": "A closed rectangular box has a height of $x\\text{ cm}$. The length of the box is $(12 - x)\\text{ cm}$ and the width is $(9 - x)\\text{ cm}$.<br>(a) Show that the volume, $V\\text{ cm}^3$, of the box is given by $V = x^3 - 21x^2 + 108x$.<br>(b) Use differentiation to find the value of $x$ for which the volume is a maximum.<br>(c) Calculate the maximum volume of the box.",
        "steps": [
            "For part (a), we establish the volume formula: $V = \\text{length} \\times \\text{width} \\times \\text{height}$. Substituting the expressions gives $V = x(12 - x)(9 - x)$.",
            "Expanding the brackets: $V = x(108 - 12x - 9x + x^2) = x(x^2 - 21x + 108)$, which simplifies to $V = x^3 - 21x^2 + 108x$.",
            "For part (b), we find the derivative $\\dfrac{dV}{dx}$ to identify the stationary points: $\\dfrac{dV}{dx} = 3x^2 - 42x + 108$.",
            "Setting the derivative to zero: $3x^2 - 42x + 108 = 0$. Dividing by 3 simplifies the equation to $x^2 - 14x + 36 = 0$.",
            "Using the quadratic formula to solve for $x$: $x = \\dfrac{14 \\pm \\sqrt{(-14)^2 - 4(1)(36)}}{2} = \\dfrac{14 \\pm \\sqrt{196 - 144}}{2} = \\dfrac{14 \\pm \\sqrt{52}}{2}$.",
            "The two values are $x \\approx 10.6$ and $x \\approx 3.39$. Since $x$ cannot be greater than 9 (the width), we must use $x = 3.39$ for the maximum volume.",
            "For part (c), we substitute $x = 3.39$ back into the volume formula: $V = (3.39)^3 - 21(3.39)^2 + 108(3.39)$.",
            "Final Answer: $$(b)\\ x = 3.39\\text{ cm},\\ (c)\\ V = 164\\text{ cm}^3$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Modelling and Constraints",
            "content": "This problem illustrates the power of calculus in real-world modelling. Students must be alert to 'physical constraints': although the quadratic equation yields two solutions, only one is valid. If $x$ were 10.6, the width $(9 - x)$ would be negative, which is physically impossible. Always check your answers against the context of the problem."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
	// 1 Jun
    {
        "id": "003232",
        "date": "1 June 2026",
        "major_area": "Statistics",
        "topic": "Cumulative Frequency",
        "subtopic": "Median",
        "difficulty": "6/7",
        "q": "A cumulative frequency graph represents the heights of 100 plants.<br>The heights range from $0$ to $50\\text{ cm}$.<br>Explain how to estimate the number of plants taller than $45\\text{ cm}$.",
        "steps": [
            "Find $45\\text{ cm}$ on the horizontal (x) axis.",
            "Move vertically up to the curve, then horizontally to the vertical (y) axis.",
            "Read the cumulative frequency value (e.g., 85).",
            "Subtract this value from the total: $100 - 85 = 15$.",
            "Final Answer: $$15\\text{ plants}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Taller vs Shorter",
            "content": "The graph always shows how many are <strong>below</strong> a value. If the question asks for 'taller than' or 'more than', you must subtract your reading from the total frequency!"
        },
		 "payhip_link": "https://payhip.com/b/rsVCz", // Replace with your Mensuration/Trig link
        "button_text": "Master Statistics: Download the Full Vectors, Probabilitu & Statistics Pack"
    },
    // 2 June
    {
        "id": "003233",
        "date": "2 June 2026",
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
        },
		 "payhip_link": "https://payhip.com/b/mg5YS", // Replace with your Mensuration/Trig link
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    }
];

