const problemBank = [
    // 1 May
    {
        "id": "003121",
        "date": "1 May 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "Prime Numbers, HCF, LCM",
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
        "wrong_options": [
    {
        "ans": "$$6$$",
        "feedback": "You only used one factor of 2 and one factor of 3, effectively taking 2 × 3 instead of using all common prime factors with their lowest powers."
    },
    {
        "ans": "$$24$$",
        "feedback": "You used the highest powers of the common primes (2³ and 3) instead of the lowest powers required for the HCF."
    },
    {
        "ans": "$$4$$",
        "feedback": "You only used the common factor 2² and forgot to include the common factor 3 in the HCF."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systematic Factorisation",
            "content": "In the non-calculator Paper 2, speed and accuracy are paramount. Listing factors manually is risky and time-consuming. The prime factorisation method is far more robust and ensures that no common factors are overlooked in the process."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 2 May
    {
        "id": "003122",
        "date": "2 May 2026",
        "major_area": "Algebra",
        "topic": "Laws of Indices",
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
        "wrong_options": [
    {
        "ans": "$$\\dfrac{8}{x^6}$$",
        "feedback": "You have inverted the fraction incorrectly when dealing with the negative index, effectively applying the reciprocal at the wrong stage."
    },
    {
        "ans": "$$\\dfrac{x^6}{16}$$",
        "feedback": "You treated the fourth root of 16 as 4 instead of 2, so the denominator was not simplified correctly."
    },
    {
        "ans": "$$\\dfrac{x^3}{2}$$",
        "feedback": "You appear to have applied the cube before taking the fourth root, mixing the order of operations in the fractional index."
    }
],

        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Order of Operations",
            "content": "In index manipulation, the order in which you apply the components of the power is vital. I always advise taking the root before the power to keep the numbers small and manageable in a non-calculator environment. Attempting to cube 16 before taking the 4th root is numerically difficult and increases the risk of error."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 3 May
    {
        "id": "003123",
        "date": "3 May 2026",
        "major_area": "Trigonometry",
        "topic": "Trigonometry",
        "subtopic": "The Sine Rule",
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
        "wrong_options": [
    {
        "ans": "$$13.0\\text{ cm}$$",
        "feedback": "You likely placed \\(\\sin 73^\\circ\\) in the denominator instead of the numerator when rearranging the Sine Rule."
    },
    {
        "ans": "$$27.9\\text{ cm}$$",
        "feedback": "This suggests you may have used the Cosine Rule instead of the Sine Rule, which is not appropriate for the information given."
    },
    {
        "ans": "$$16.0\\text{ cm}$$",
        "feedback": "You may have rounded intermediate values too early or used an approximate ratio instead of keeping full calculator accuracy until the final step."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Three Significant Figures",
            "content": "Unless otherwise stated, Cambridge IGCSE requires all non-exact numerical answers to be given correct to 3 significant figures. This is a general instruction found on the front of every paper. Failing to adhere to this convention will result in the loss of an accuracy mark even if your working is correct."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 4 May
    {
        "id": "003124",
        "date": "4 May 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Changing the Subject of a Formula",
        "difficulty": "B/C",
        "q": "Make $w$ the subject of the formula: $$t = 3 + \\sqrt{\\dfrac{w-x}{2}}$$",
        "steps": [
            "We begin by subtracting 3 from both sides of the equation: $t - 3 = \\sqrt{\\dfrac{w-x}{2}}$.",
            "Next, we square both sides to eliminate the square root: $(t - 3)^2 = \\dfrac{w-x}{2}$.",
            "We then multiply both sides by 2 to clear the fraction: $2(t - 3)^2 = w - x$.",
            "Finally, we add $x$ to both sides to isolate $w$.",
            "Final Answer: $$w = 2(t - 3)^2 + x$$"
        ],
        "wrong_options": [
    {
        "ans": "$$w = 2t^2 - 12t + 18 + x$$",
        "feedback": "You expanded \\((t - 3)^2\\) incorrectly; the correct expansion is \\(t^2 - 6t + 9\\), not \\(t^2 - 6t + 18\\)."
    },
    {
        "ans": "$$w = (t - 3)^2 + 2x$$",
        "feedback": "You multiplied the wrong side by 2, applying it to the \\(x\\) term instead of to the entire squared expression."
    },
    {
        "ans": "$$w = 2t^2 - 12 + x$$",
        "feedback": "You have lost the \\(t\\) term from the expansion of \\((t - 3)^2\\), suggesting an incomplete or incorrect expansion."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Reverse BIDMAS",
            "content": "Rearranging a formula is effectively 'undressing' the subject. We must reverse the order of operations, dealing with the terms furthest away from the $w$ (the addition of 3) before we address the operations directly attached to the variable."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 5 May
    {
        "id": "003125",
        "date": "5 May 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Percentage Change and Interest",
        "difficulty": "B/A",
        "q": "A bank account pays compound interest at a rate of $2.5\\%$ per year. After 4 years, the value of the investment is $£6,622.72$. Calculate the original amount invested.",
        "steps": [
            "We identify this as a reverse compound interest problem. The multiplier for a $2.5\\%$ increase is $1.025$.",
            "We set up the equation: $\\text{Original} \\times 1.025^4 = 6622.72$.",
            "To isolate the original investment, we divide the final amount by $1.025^4$.",
            "Calculation: $6622.72 \\div 1.103812... = 6000$.",
            "Final Answer: $$£6,000$$"
        ],
        "wrong_options": [
    {
        "ans": "$$£6622.72$$",
        "feedback": "You have given the final value after interest instead of working backwards to find the original investment."
    },
    {
        "ans": "$$£6450$$",
        "feedback": "You only divided by one year’s multiplier, \\(1.025\\), instead of \\(1.025^4\\) for four years of compound interest."
    },
    {
        "ans": "$$£5400$$",
        "feedback": "You appear to have treated the problem as simple interest, subtracting a fixed percentage each year rather than using a compound multiplier."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Principal vs Interest",
            "content": "Always read the final instruction of the question with great care. If the examiner asks for the 'interest earned', you must subtract the original principal from the final total. In this case, we were looking for the original principal itself."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 6 May
    {
        "id": "003126",
        "date": "6 May 2026",
        "major_area": "Statistics",
        "topic": "Frequency Tables",
        "subtopic": "Averages and Measures of Spread (Grouped Data)",
        "difficulty": "B/C",
        "q": "The table shows the time, $t$ seconds, taken by 50 students to complete a puzzle.<br><table style='border-collapse:collapse;width:260px;text-align:center;'><tr><th style='padding:6px;'>Time (t s)</th><th style='padding:6px;'>Frequency</th></tr><tr><td style='padding:6px;'>20 &lt; t ≤ 30</td><td style='padding:6px;'>8</td></tr><tr><td style='padding:6px;'>30 &lt; t ≤ 40</td><td style='padding:6px;'>15</td></tr><tr><td style='padding:6px;'>40 &lt; t ≤ 50</td><td style='padding:6px;'>17</td></tr><tr><td style='padding:6px;'>50 &lt; t ≤ 60</td><td style='padding:6px;'>10</td></tr></table><br>Calculate an estimate for the mean time.",
        "steps": [
            "We first identify the mid-interval values ($x$) for each group: 25, 35, 45, and 55.",
            "Next, we multiply each midpoint by its frequency ($f \\times x$): $200$, $525$, $765$, and $550$.",
            "We sum these products to find the total estimated time: $200 + 525 + 765 + 550 = 2040$.",
            "Finally, we divide the total time by the number of students ($n = 50$).",
            "Final Answer: $$40.8\\text{ seconds}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$38.5\\text{ seconds}$$",
        "feedback": "You may have used class boundaries or incorrect midpoints instead of the true mid-interval values for each group."
    },
    {
        "ans": "$$42\\text{ seconds}$$",
        "feedback": "This suggests you divided by an incorrect total frequency, such as 48 instead of the full 50 students."
    },
    {
        "ans": "$$45.3\\text{ seconds}$$",
        "feedback": "You likely used the upper class limits as if they were midpoints, overestimating the mean time."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Why it is an Estimate",
            "content": "Cambridge frequently includes a 1-mark 'reasoning' question alongside this calculation. The result is an 'estimate' because we do not know the exact times of the students within each interval; we must assume they are distributed evenly around the midpoint."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 7 May
    {
        "id": "003127",
        "date": "7 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Estimating Gradients and Basic Differentiation",
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
        "wrong_options": [
    {
        "ans": "$$(a)\\ 3x^2 - 3x,\\ (b)\\ 36$$",
        "feedback": "You differentiated \\(-3x^2\\) as \\(-3x\\) instead of \\(-6x\\), and then used this incorrect derivative to find the gradient at x = 4."
    },
    {
        "ans": "$$(a)\\ x^3 - 3x^2,\\ (b)\\ 28$$",
        "feedback": "You have written the original function again instead of differentiating, then substituted x = 4 into it to get the gradient."
    },
    {
        "ans": "$$(a)\\ 3x^2 + 6x,\\ (b)\\ 72$$",
        "feedback": "You changed the sign when differentiating \\(-3x^2\\), and then used this incorrect derivative to calculate the gradient."
    }
],

        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Calculus Foundations",
            "content": "Differentiation is a signature topic of the Extended IGCSE syllabus. Mastery of the power rule is the foundation that allows you to solve complex Paper 4 problems involving tangents, normals, and optimization."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 8 May
    {
        "id": "003128",
        "date": "8 May 2026",
        "major_area": "Geometry",
        "topic": "Similarity & Congruence",
        "subtopic": "Solids and the Linear, Area, Volume Relationship",
        "difficulty": "A",
        "q": "The volumes of two mathematically similar solids are $250\\text{ cm}^3$ and $128\\text{ cm}^3$. Given that the surface area of the larger solid is $150\\text{ cm}^2$, calculate the surface area of the smaller solid.",
        "steps": [
            "We find the volume scale factor ($k^3$) by dividing the two volumes: $k^3 = 250 \\div 128 = 1.953125$.",
            "To find the linear scale factor ($k$), we take the cube root: $k = \\sqrt[3]{1.953125} = 1.25$ or $\\dfrac{5}{4}$.",
            "The area scale factor ($k^2$) is the square of the linear scale factor: $k^2 = 1.25^2 = 1.5625$.",
            "Finally, to find the smaller area, we divide the larger area by the area scale factor: $150 \\div 1.5625$.",
            "Final Answer: $$96\\text{ cm}^2$$"
        ],
        "wrong_options": [
    {
        "ans": "$$60\\text{ cm}^2$$",
        "feedback": "You appear to have used the linear scale factor directly on the area instead of using the area scale factor."
    },
    {
        "ans": "$$240\\text{ cm}^2$$",
        "feedback": "You multiplied the larger area by the area scale factor instead of dividing to find the smaller area."
    },
    {
        "ans": "$$120\\text{ cm}^2$$",
        "feedback": "You may have used an incorrect scale factor between the solids, mixing up the roles of larger and smaller."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dimensional Bridging",
            "content": "You cannot jump directly from volume to area. You <strong>must</strong> find the linear scale factor ($k$) first. Think of $k$ as the essential bridge that connects 1D, 2D, and 3D properties in similar shapes."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 9 May
    {
        "id": "003129",
        "date": "9 May 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Standard Form",
        "difficulty": "C/D",
        "q": "Without using a calculator, calculate the value of $5.2 \\times 10^{12} + 3.1 \\times 10^{10}$. Give your answer in standard form.",
        "steps": [
            "To add numbers in standard form without a calculator, we must first equalise the powers of 10.",
            "We convert $3.1 \\times 10^{10}$ to match the higher power: $0.031 \\times 10^{12}$.",
            "Now we sum the coefficients: $5.2 + 0.031 = 5.231$.",
            "Combining this with the power of 10 yields the final expression.",
            "Final Answer: $$5.231 \\times 10^{12}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$8.3 \\times 10^{22}$$",
        "feedback": "You added the powers of 10 instead of aligning them before adding the coefficients."
    },
    {
        "ans": "$$5.231 \\times 10^{10}$$",
        "feedback": "You converted both terms to the smaller power of 10, then forgot to adjust back to standard form with the higher power."
    },
    {
        "ans": "$$5.503 \\times 10^{12}$$",
        "feedback": "You added 5.2 and 0.31 instead of 0.031, misplacing the decimal when converting powers."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Power Alignment",
            "content": "In Paper 2, aligning the powers of 10 is the most reliable way to perform addition or subtraction. Always convert to the higher power to ensure your final coefficient is already correctly placed for standard form."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 10 May
    {
        "id": "003130",
        "date": "10 May 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams Without replacement",
        "subtopic": "Probability of Combined Events",
        "difficulty": "B/A",
        "q": "A box contains 6 green apples and 4 red apples.<br>Two apples are picked at random without replacement.<br>(a) Draw a probability tree diagram to illustrate this situation.<br>(b) Find the probability that both apples are the same colour.",
        "steps": [
            "(a) See the diagram after the final answer.",
            "(b) We identify two mutually exclusive scenarios: picking two green (GG) or picking two red (RR).",
            "Probability of two green: $P(GG) = \\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{30}{90}$.",
            "Probability of two red: $P(RR) = \\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac{12}{90}$.",
            "We sum these probabilities: $\\dfrac{30}{90} + \\dfrac{12}{90} = \\dfrac{42}{90}$.",
            "Finally, we simplify the fraction to its lowest terms.",
            "Final Answer: $$\\dfrac{7}{15}$$<img src='images/05/i_10_sol.png' alt='Probability tree diagram' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
        ],
        "wrong_options": [
    {
        "ans": "$$\\dfrac{1}{3}$$",
        "feedback": "You may have treated the events as if they were independent with replacement, ignoring the change in denominators."
    },
    {
        "ans": "$$\\dfrac{2}{5}$$",
        "feedback": "You have only considered the probability of two green apples and ignored the two-red outcome."
    },
    {
        "ans": "$$\\dfrac{7}{30}$$",
        "feedback": "You added the correct numerators but did not add the denominators consistently, effectively halving the total probability."
    }
],

        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Selection Dependencies",
            "content": "In probability, 'without replacement' is a instruction to reduce both the numerator and the denominator for the second pick. This transition from 10 to 9 items is where most marks are lost in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 11 May
    {
        "id": "003131",
        "date": "11 May 2026",
        "major_area": "Geometry",
        "topic": "Coordinates",
        "subtopic": "Parallel and Perpendicular Lines, Mixed Problems",
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
        "wrong_options": [
    {
        "ans": "$$y = -2x + 9$$",
        "feedback": "This is the equation of the original line through A and B, not the perpendicular line."
    },
    {
        "ans": "$$y = 2x - 7$$",
        "feedback": "You used the reciprocal of the gradient but did not change the sign to make it perpendicular."
    },
    {
        "ans": "$$y = \\dfrac{1}{2}x + 1$$",
        "feedback": "You used the correct perpendicular gradient but substituted point A or B instead of the midpoint."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Perpendicular Rule",
            "content": "In coordinate geometry, 'perpendicular' is an algebraic command to use the $m_1 m_2 = -1$ rule. Always apply both the negative and the reciprocal to ensure your new line is correctly oriented."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 12 May
    {
        "id": "003132",
        "date": "12 May 2026",
        "major_area": "Trigonometry",
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
        "wrong_options": [
    {
        "ans": "$$83.6^\\circ$$",
        "feedback": "You may have taken the acute angle associated with the cosine value instead of recognising that the largest angle must be obtuse."
    },
    {
        "ans": "$$43.6^\\circ$$",
        "feedback": "You likely used the Cosine Rule with the wrong side as the one opposite the angle you were finding."
    },
    {
        "ans": "$$100^\\circ$$",
        "feedback": "You have over-rounded or mis-keyed the calculator value when applying the inverse cosine function."
    }
],

        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Degree Precision",
            "content": "For Cambridge IGCSE, all angles in degrees must be rounded to exactly 1 decimal place unless the question provides a different instruction. Standard over-rounding to the nearest degree will result in an accuracy penalty."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 13 May
    {
        "id": "003133",
        "date": "13 May 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Factorising 2",
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
        "wrong_options": [
    {
        "ans": "$$x = -6, x = 1$$",
        "feedback": "You likely factorised using numbers that sum to +5 but multiply to +6 instead of -24, leading to incorrect brackets."
    },
    {
        "ans": "$$x = 3, x = -2$$",
        "feedback": "You appear to have divided the equation by 2 incorrectly or misapplied the quadratic formula without adjusting for the coefficient of x²."
    },
    {
        "ans": "$$x = 4, x = -1.5$$",
        "feedback": "You may have reversed the signs when solving each bracket, treating (2x − 3)(x + 4) = 0 as if the signs were opposite."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Factorising vs Formula",
            "content": "While the quadratic formula is a universal tool, being able to factorise non-monic quadratics quickly is a major time-saver in Paper 2. Use the grouping method shown above to maintain algebraic rigour."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 14 May (Rewritten for Cylinder to Sphere Recasting)
    {
        "id": "003134",
        "date": "14 May 2026",
        "major_area": "Mensuration",
        "topic": "3D Shapes",
        "subtopic": "Surface Areas and Volumes",
        "difficulty": "B/A",
        "q": "A solid metal cylinder of radius $6\\text{ cm}$ and height $8\\text{ cm}$ is melted down and recast into a solid sphere. Calculate the radius of the sphere.",
        "steps": [
            "We first calculate the volume of the cylinder: $V = \\pi r^2 h = \\pi(6^2)(8) = 288\\pi\\text{ cm}^3$.",
            "Since the metal is recast, the volume of the sphere must also be exactly $288\\pi$.",
            "We use the sphere volume formula: $V = \\dfrac{4}{3}\\pi r^3$.",
            "Substituting our values: $288\\pi = \\dfrac{4}{3}\\pi r^3$.",
            "Cancelling $\\pi$ and multiplying by $\\dfrac{3}{4}$ gives $r^3 = 216$.",
            "Taking the cube root of 216 gives $r = 6$.",
            "Final Answer: $$6\\text{ cm}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$3\\text{ cm}$$",
        "feedback": "You may have taken the square root instead of the cube root when solving for r³ = 216."
    },
    {
        "ans": "$$4.8\\text{ cm}$$",
        "feedback": "You likely used a linear scale factor idea instead of equating the full volumes of the solids."
    },
    {
        "ans": "$$12\\text{ cm}$$",
        "feedback": "You appear to have doubled the correct radius, confusing the diameter with the radius of the sphere."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Working with Pi",
            "content": "In recasting problems, leave the $\\pi$ symbol in your working until the final step. It prevents rounding errors midway through the problem and usually cancels out entirely, making the final division much simpler."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    
    // 15 May
    {
        "id": "003135",
        "date": "15 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "subtopic": "Stationary Points",
        "difficulty": "A/A*",
        "q": "Find the coordinates of the two stationary points on the curve $y = 2x^3 - 9x^2 + 12x - 3$.",
        "steps": [
            "We find the derivative $\\dfrac{dy}{dx}$ using the power rule: $\\dfrac{dy}{dx} = 6x^2 - 18x + 12$.",
            "Stationary points occur when the gradient is zero, so we set $6x^2 - 18x + 12 = 0$.",
            "Dividing by 6 gives $x^2 - 3x + 2 = 0$, which factorises to $(x - 1)(x - 2) = 0$.",
            "The $x$-coordinates are $1$ and $2$. We substitute these into the original equation for $y$.",
            "When $x = 1, y = 2$. When $x = 2, y = 1$.",
            "Final Answer: $$(1, 2) \\text{ and } (2, 1)$$<img src='images/05/i_15_sol.png' alt='cubic graphs showing the turning points.' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
        ],
        "wrong_options": [
    {
        "ans": "$$(1, 1) \\text{ and } (2, 2)$$",
        "feedback": "You seem to have substituted x into the derivative instead of the original function to find the y-coordinates."
    },
    {
        "ans": "$$(1, 2) \\text{ and } (2, -1)$$",
        "feedback": "You likely made a sign error when substituting x = 2 into the original cubic to find the y-value."
    },
    {
        "ans": "$$(1, 2)$$",
        "feedback": "You found one stationary point correctly but did not include the second solution from the quadratic equation."
    }
],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Stationary Point Protocol",
            "content": "The term 'stationary point' is a specific command to solve for a gradient of zero. I remind my students to perform a final coordinate check: a 'point' must always be presented as an $(x, y)$ pair. Failing to find the $y$-values is a very common omission in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 16 May
    {
        "id": "003136",
        "date": "16 May 2026",
        "major_area": "Algebra",
        "topic": "Linear Equations",
        "subtopic": "Fractional Linear Equations",
        "difficulty": "C/D",
        "q": "Solve the equation: $\\dfrac{3(x + 4)}{5} = 12$.",
        "steps": [
            "We begin by multiplying both sides by 5 to remove the fraction: $3(x + 4) = 60$.",
            "Expanding the brackets gives $3x + 12 = 60$.",
            "Subtracting 12 from both sides results in $3x = 48$.",
            "Dividing by 3 yields the final value for $x$.",
            "Final Answer: $$16$$"
        ],
        "wrong_options": [
    {
        "ans": "$$4$$",
        "feedback": "You may have divided 12 by 3 first and ignored the factor of 5 in the denominator."
    },
    {
        "ans": "$$20$$",
        "feedback": "You likely added 4 after finding 16 instead of recognising that 16 already satisfies the equation."
    },
    {
        "ans": "$$8$$",
        "feedback": "You may have misapplied inverse operations, effectively halving 16 or mishandling the multiplication by 5."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Logical Sequencing",
            "content": "In non-calculator questions, the order of steps is vital. Many students expand brackets before removing the fraction, but multiplying first creates simpler integers to work with and reduces the risk of mental arithmetic errors."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 17 May
    {
        "id": "003137",
        "date": "17 May 2026",
        "major_area": "Geometry",
        "topic": "Circle Theorems",
        "subtopic": "Circle Theorems 2",
        "difficulty": "B/A",
        "img": "true",
        "q": "$A, B, C$ and $D$ are points on a circle. $AB$ is parallel to $DC$. Given $\\angle ADC = 108^\\circ$, calculate the sizes of $\\angle ABC$ and $\\angle BCD$ giving clear geometrical reasons for your answers.",
        "steps": [
            "We identify $ABCD$ as a cyclic quadrilateral. Opposite angles sum to $180^\\circ$.",
            "Therefore, $\\angle ABC = 180^\\circ - 108^\\circ = 72^\\circ$.",
            "Using parallel line properties, $\\angle ABC$ and $\\angle BCD$ are co-interior angles.",
            "Calculation: $\\angle BCD = 180^\\circ - 72^\\circ = 108^\\circ$.",
            "Final Answer: $$\\angle ABC = 72^\\circ, \\angle BCD = 108^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$\\angle ABC = 108^\\circ, \\angle BCD = 72^\\circ$$",
        "feedback": "You have reversed the roles of the opposite angles in the cyclic quadrilateral."
    },
    {
        "ans": "$$\\angle ABC = 72^\\circ, \\angle BCD = 72^\\circ$$",
        "feedback": "You treated the adjacent angles as equal instead of using the facts about opposite and co-interior angles."
    },
    {
        "ans": "$$\\angle ABC = 90^\\circ, \\angle BCD = 90^\\circ$$",
        "feedback": "You assumed the quadrilateral was a rectangle, which is not implied by the information given."
    }
],

        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Chord Parallelism",
            "content": "Cambridge often combines circle theorems with basic angle geometry. Parallel lines within a circle create an isosceles trapezium, which is a unique property worth memorising for the more challenging Paper 4 questions."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 18 May
    {
        "id": "003138",
        "date": "18 May 2026",
        "major_area": "Number",
        "topic": "Fractions",
        "subtopic": "The Four Operations with Mixed Numbers",
        "difficulty": "C/D",
        "q": "Without using a calculator, calculate $3\\dfrac{1}{4} - 1\\dfrac{2}{3}$. Give your answer as a mixed number in its simplest form.",
        "steps": [
            "We convert both mixed numbers into improper fractions: $\\dfrac{13}{4}$ and $\\dfrac{5}{3}$.",
            "The common denominator is 12. We adjust the numerators: $\\dfrac{39}{12}$ and $\\dfrac{20}{12}$.",
            "Subtracting the fractions gives $\\dfrac{19}{12}$.",
            "Finally, we convert back into a mixed number.",
            "Final Answer: $$1\\dfrac{7}{12}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$2\\dfrac{1}{12}$$",
        "feedback": "You subtracted whole numbers and fractions separately, not accounting for the fact that \\(\\tfrac{2}{3} > \\tfrac{1}{4}\\)."
    },
    {
        "ans": "$$1\\dfrac{5}{12}$$",
        "feedback": "You found a common denominator correctly but subtracted the numerators incorrectly: 39 − 20 should be 19, not 17."
    },
    {
        "ans": "$$\\dfrac{7}{12}$$",
        "feedback": "You correctly subtracted the fractional parts but forgot to include the whole number part in your final answer."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Common Denominator",
            "content": "I discourage students from subtracting whole numbers and fractions separately, as this often leads to errors when the second fraction is larger. The improper fraction method is universally reliable."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 19 May
    {
        "id": "003139",
        "date": "19 May 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Inverse Functions",
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
        "wrong_options": [
    {
        "ans": "$$f^{-1}(x) = \\dfrac{2x - 3}{x + 5}$$",
        "feedback": "You swapped x and y but did not correctly expand and regroup the terms before isolating y."
    },
    {
        "ans": "$$f^{-1}(x) = \\dfrac{x - 3}{2 - x}$$",
        "feedback": "You inverted the function as if it were a simple fraction rather than solving algebraically for y."
    },
    {
        "ans": "$$f^{-1}(x) = \\dfrac{5x - 3}{x + 2}$$",
        "feedback": "A sign error occurred when moving terms across the equation during the rearrangement."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Inverse Reflexivity",
            "content": "When $x$ appears in both parts of a fraction, the 'interchange' and 'factorise' steps are non-negotiable. This is a high-level functional skill that is frequently assessed in the final section of Extended papers."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 20 May
    {
        "id": "003140",
        "date": "20 May 2026",
        "major_area": "Mensuration",
        "topic": "3D Shapes",
        "subtopic": "Surface Areas and Volumes",
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
        "wrong_options": [
    {
        "ans": "$$254.5\\text{ cm}^2$$",
        "feedback": "You used the vertical height instead of the slant height when calculating the curved surface area."
    },
    {
        "ans": "$$325.0\\text{ cm}^2$$",
        "feedback": "You added an extra base area, effectively counting the circular base twice."
    },
    {
        "ans": "$$260.8\\text{ cm}^2$$",
        "feedback": "You rounded intermediate values too early, reducing the accuracy of the final result."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Slant vs Vertical",
            "content": "The most frequent error in cone geometry is using the vertical height ($h$) for the curved area. Always verify if the slant height ($l$) is provided; if given $h$, you must first use Pythagoras to find $l$."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 21 May
    {
        "id": "003141",
        "date": "21 May 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Surds",
        "difficulty": "B/A",
        "q": "Without using a calculator, show that $\\dfrac{10}{\\sqrt{5}}$ can be expressed in the form $a\\sqrt{5}$.",
        "steps": [
            "To rationalise the denominator, we multiply the fraction by $\\dfrac{\\sqrt{5}}{\\sqrt{5}}$.",
            "The expression becomes $\\dfrac{10\\sqrt{5}}{5}$.",
            "Dividing 10 by 5 yields the final simplified form.",
            "Final Answer: $$2\\sqrt{5}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$\\dfrac{10}{5\\sqrt{5}}$$",
        "feedback": "You multiplied only the denominator by \\(\\sqrt{5}\\) instead of multiplying the entire fraction."
    },
    {
        "ans": "$$10\\sqrt{5}$$",
        "feedback": "You multiplied the numerator correctly but forgot to divide by the new denominator of 5."
    },
    {
        "ans": "$$\\dfrac{2}{\\sqrt{5}}$$",
        "feedback": "You divided 10 by 5 but did not complete the rationalisation step."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Radical Efficiency",
            "content": "Rationalising is a mandatory skill for the new non-calculator Paper 2. Think of it as 'moving' the irrationality from the bottom to the top to leave a rational integer below."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 22 May (Rewritten for Insight clarity)
    {
        "id": "003142",
        "date": "22 May 2026",
        "major_area": "Trigonometry",
        "topic": "Trigonometry",
        "subtopic": "The Sine Rule",
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
        "wrong_options": [
    {
        "ans": "$$41.8^\\circ \\text{ only}$$",
        "feedback": "You found the acute angle but did not include the supplementary obtuse angle."
    },
    {
        "ans": "$$138.2^\\circ \\text{ only}$$",
        "feedback": "You selected only the obtuse angle, forgetting that the sine equation has two valid solutions."
    },
    {
        "ans": "$$48.2^\\circ \\text{ and } 131.8^\\circ$$",
        "feedback": "You used the correct method but subtracted from 180° incorrectly when finding the obtuse angle."
    }
],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Area and the Sine Curve",
            "content": "Because $\\sin(x) = \\sin(180^\\circ - x)$, knowing the area and two enclosing sides will always yield two possible supplementary angles (one acute and one obtuse), unless the angle is exactly $90^\\circ$. Always check if the question specifically asks for the acute or obtuse angle, or in this case, both!"
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 23 May
    {
        "id": "003143",
        "date": "23 May 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Factoring Expressions",
        "difficulty": "C/D",
        "q": "Factorise fully: $6ax - 3ay - 4bx + 2by$.",
        "steps": [
            "We group the terms in pairs and factorise each pair.",
            "The first pair: $3a(2x - y)$.",
            "The second pair (taking care with signs): $-2b(2x - y)$.",
            "Finally, we collect the common bracketed factor.",
            "Final Answer: $$(3a - 2b)(2x - y)$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(3a + 2b)(2x - y)$$",
        "feedback": "You factored the second pair incorrectly, causing the signs in the bracket not to match."
    },
    {
        "ans": "$$(3a - 2b)(x - y)$$",
        "feedback": "You did not factor out the full common factor from each pair, leaving the bracket incomplete."
    },
    {
        "ans": "$$(6a - 4b)(x - y)$$",
        "feedback": "You attempted to factor out a common factor from all four terms at once, which is not possible here."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Sign Grouping",
            "content": "The second bracket must match the first. If you factorise incorrectly, the signs will not align. Always mental-expand your result to check against the original."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 24 May
    {
        "id": "003144",
        "date": "24 May 2026",
        "major_area": "Algebra",
        "topic": "Direct & Inverse Proportion",
        "subtopic": "Proportion",
        "difficulty": "B/A",
        "q": "$y$ is proportional to $(x - 1)^2$. When $x = 4, y = 18$. Find $y$ when $x = 6$.",
        "steps": [
            "We define the equation: $y = k(x - 1)^2$.",
            "Substituting known values: $18 = k(3^2) \\implies k = 2$.",
            "The specific formula is $y = 2(x - 1)^2$.",
            "Now substitute $x = 6$ into our formula.",
            "Final Answer: $$50$$"
        ],
        "wrong_options": [
    {
        "ans": "$$18$$",
        "feedback": "You substituted x = 6 into the original proportionality without first finding the constant k."
    },
    {
        "ans": "$$72$$",
        "feedback": "You used k = 3 instead of k = 2, likely from mis-evaluating the initial substitution."
    },
    {
        "ans": "$$32$$",
        "feedback": "You substituted into (x − 1) instead of (x − 1)², forgetting the square in the proportionality."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying 'k'",
            "content": "In proportion problems, establishing the constant $k$ is the 'anchor step' that allows the rest of the problem to be solved safely."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 25 May
    {
        "id": "003145",
        "date": "25 May 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Linear Inequalities",
        "difficulty": "C/D",
        "q": "Solve the inequality: $5 - 2x < 11$.",
        "steps": [
            "We subtract 5 from both sides: $-2x < 6$.",
            "We divide by $-2$, which reverses the inequality sign.",
            "Final Answer: $$x > -3$$"
        ],
        "wrong_options": [
    {
        "ans": "$$x < -3$$",
        "feedback": "You forgot to reverse the inequality sign when dividing by the negative coefficient −2."
    },
    {
        "ans": "$$x > 3$$",
        "feedback": "You subtracted 5 incorrectly, treating 5 − 2x < 11 as if it were 2x − 5 < 11."
    },
    {
        "ans": "$$x = -3$$",
        "feedback": "You treated the inequality as an equation and did not express the full range of solutions."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Negative Flip",
            "content": "Dividing an inequality by a negative number is a classic trap. Failing to reverse the sign will result in zero marks for the final solution."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 26 May
    {
        "id": "003146",
        "date": "26 May 2026",
        "major_area": "Statistics",
        "topic": "Histograms",
        "subtopic": "histograms",
        "difficulty": "B/A",
        "q": "In a histogram, a bar of width $3\\text{ cm}$ and height $4\\text{ cm}$ represents 60 units. Calculate the frequency of a bar with width $2\\text{ cm}$ and height $5\\text{ cm}$.",
        "steps": [
            "We use the principle that Area is proportional to Frequency.",
            "First area: $12\\text{ cm}^2$ representing 60 units ($1\\text{ cm}^2 = 5$ units).",
            "Second area: $10\\text{ cm}^2$.",
            "Multiplying by our density factor gives the final result.",
            "Final Answer: $$50$$"
        ],
        "wrong_options": [
    {
        "ans": "$$20$$",
        "feedback": "You used only the height ratio instead of using the full area (width × height) for each bar."
    },
    {
        "ans": "$$25$$",
        "feedback": "You halved the original frequency, ignoring that the second bar’s area is slightly smaller, not half."
    },
    {
        "ans": "$$60$$",
        "feedback": "You assumed equal frequencies for both bars, ignoring the different bar dimensions."
    }
],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Area vs Density",
            "content": "High-tier problems often use physical bar dimensions to test if you truly understand that frequency is the total area, not just the height."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 27 May
    {
        "id": "003147",
        "date": "27 May 2026",
        "major_area": "Geometry",
        "topic": "Angles",
        "subtopic": "Polygons and Circles",
        "difficulty": "C/D",
        "q": "Calculate the size of one exterior angle of a regular polygon with 15 sides.",
        "steps": [
            "The sum of exterior angles for any convex polygon is $360^\\circ$.",
            "For a regular polygon, we divide the total by the number of sides.",
            "Final Answer: $$24^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$156^\\circ$$",
        "feedback": "You calculated the interior angle instead of the exterior angle of the polygon."
    },
    {
        "ans": "$$12^\\circ$$",
        "feedback": "You divided 180° by 15 instead of using the 360° sum of exterior angles."
    },
    {
        "ans": "$$30^\\circ$$",
        "feedback": "You may have rounded 360 ÷ 12 instead of using the correct number of sides, 15."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Geometric Constants",
            "content": "Working with exterior angles is the most efficient path for polygon problems. This constant $360$ applies regardless of the number of sides."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 28 May
    {
        "id": "003148",
        "date": "28 May 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Money",
        "difficulty": "C/D",
        "q": "An investor converts $£800$ into dollars at $£1 = \\$1.26$, then back to pounds at $£1 = \\$1.20$. Calculate the profit in pounds.",
        "steps": [
            "Original Pounds to Dollars: $800 \\times 1.26 = \\$1008$.",
            "Dollars back to Pounds: $1008 \\div 1.20 = £840$.",
            "Profit is the difference: $£840 - £800$.",
            "Final Answer: $$£40$$"
        ],
        "wrong_options": [
    {
        "ans": "$$£-40$$",
        "feedback": "You reversed the order of subtraction, effectively calculating a loss instead of a profit."
    },
    {
        "ans": "$$£8$$",
        "feedback": "You may have subtracted the exchange rates directly instead of working with the converted amounts."
    },
    {
        "ans": "$$£48$$",
        "feedback": "You likely rounded intermediate values or miscalculated one of the conversions."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Directional Logic",
            "content": "When moving to a currency worth 'less' per unit, you multiply. When returning to the 'stronger' unit, you divide. Logic-checking the final value ensures you used the correct operation."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 29 May
    {
        "id": "003149",
        "date": "29 May 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Quadratic Equations 1",
        "difficulty": "B/A",
        "q": "Solve the equation: $x^2 - 11x + 24 = 0$.",
        "steps": [
            "We identify factors of 24 that sum to -11: $-3$ and $-8$.",
            "We factorise into $(x - 3)(x - 8) = 0$.",
            "We invert the signs to find the actual roots.",
            "Final Answer: $$x = 3, x = 8$$"
        ],
        "wrong_options": [
    {
        "ans": "$$x = -3, x = -8$$",
        "feedback": "You took the factor values themselves as the roots instead of changing the signs when solving (x − 3)(x − 8) = 0."
    },
    {
        "ans": "$$x = 4, x = 6$$",
        "feedback": "You chose factor pairs of 24 that sum to 10, not −11, so the factorisation is incorrect."
    },
    {
        "ans": "$$x = 3$$",
        "feedback": "You found only one root and did not state the second solution from the quadratic."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Bracket to Solution",
            "content": "A common 'final step' error is finding the factors but failing to solve for zero. Always state the final values clearly."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 30 May
    {
        "id": "003150",
        "date": "30 May 2026",
        "major_area": "Vectors",
        "topic": "Vectors",
        "subtopic": "Magnitude of a Vector",
        "difficulty": "C/D",
        "q": "If $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$, calculate the magnitude of $2\\mathbf{a} + 3\\mathbf{b}$.",
        "steps": [
            "First calculate $2\\mathbf{a} = \\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$ and $3\\mathbf{b} = \\begin{pmatrix} -3 \\\\ 6 \\end{pmatrix}$.",
            "Summing these gives $\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$.",
            "Magnitude is $\\sqrt{3^2 + (-2)^2} = \\sqrt{13}$.",
            "Final Answer: $$3.61$$"
        ],
        "wrong_options": [
    {
        "ans": "$$\\sqrt{29}$$",
        "feedback": "You may have added the squares of the original vectors’ components instead of the combined vector."
    },
    {
        "ans": "$$5$$",
        "feedback": "You added the components 3 and −2 directly and treated the result as the magnitude."
    },
    {
        "ans": "$$13$$",
        "feedback": "You added 3² and (−2)² correctly but forgot to take the square root at the end."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Magnitude as Distance",
            "content": "The magnitude is simply the hypotenuse of the triangle formed by the vector components. Always use Pythagoras."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 31 May
    {
        "id": "003151",
        "date": "31 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "subtopic": "Stationary Points",
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
        "wrong_options": [
    {
        "ans": "$$10.6\\text{ cm}$$",
        "feedback": "You selected the larger root from the quadratic without considering the physical constraints of the model."
    },
    {
        "ans": "$$7.0\\text{ cm}$$",
        "feedback": "You may have averaged the two roots instead of testing which gives the maximum volume."
    },
    {
        "ans": "$$3.4\\text{ cm}$$",
        "feedback": "You rounded the smaller root prematurely, which can lose accuracy in an optimisation context."
    }
],      
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Modelling Constraints",
            "content": "Optimization requires you to check your results against reality. Discard any roots that would result in negative dimensions."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    }
];