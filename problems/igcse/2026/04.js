const problemBank = [
    // 1 April
    {
        "id": "003091",
        "date": "1 April 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "C/D",
        "q": "Find the equation of the straight line passing through the points $(3, -4)$ and $(5, 6)$.",
        "img": "",
        "steps": [
            "We first calculate the gradient ($m$) of the line using the formula $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.",
            "Substituting the given coordinates: $m = \\dfrac{6 - (-4)}{5 - 3} = \\dfrac{10}{2} = 5$.",
            "We now use the straight-line formula $y - y_1 = m(x - x_1)$ with the point $(5, 6)$.",
            "Substituting the values: $y - 6 = 5(x - 5)$.",
            "Expanding the bracket gives $y - 6 = 5x - 25$.",
            "Finally, we add 6 to both sides to express the equation in the form $y = mx + c$.",
            "Final Answer: $$y = 5x - 19$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Choose the 'Easy' Point",
            "content": "When substituting a point back into the formula to find the equation, you can use either point provided. I always recommend choosing the one with the fewest negative signs to reduce the risk of a simple arithmetic error during the expansion of the brackets."
        },
        "payhip_link": "https://payhip.com/b/L6skh",
        "button_text": "Master Coordinates: Download the Extended Pack"
    },
    // 2 April
    {
        "id": "003092",
        "date": "2 April 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "LCM",
        "difficulty": "C/D",
        "q": "Buses on three routes, A, B and C, leave the bus station at 8:00 AM. Route A buses leave every 20 minutes, Route B every 30 minutes, and Route C every 45 minutes.<br>Calculate the next time all three buses will leave the station together.",
        "img": "",
        "steps": [
            "To find when the events coincide again, we must find the Lowest Common Multiple (LCM) of 20, 30, and 45.",
            "We begin with prime factorisation: $20 = 2^2 \\times 5$; $30 = 2 \\times 3 \\times 5$; $45 = 3^2 \\times 5$.",
            "The LCM is found by taking the highest power of every prime factor present: $2^2 \\times 3^2 \\times 5$.",
            "Calculation: $4 \\times 9 \\times 5 = 180$ minutes.",
            "We convert 180 minutes into hours: $180 \\div 60 = 3$ hours.",
            "Adding 3 hours to the initial time of 8:00 AM gives the final result.",
            "Final Answer: $$11:00\\text{ AM}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying LCM",
            "content": "In contextual problems, whenever you are asked to find when multiple cycles synchronize or 'meet again,' you are being asked for the LCM. Using prime factorisation is the most rigorous method to ensure you do not omit any necessary factors."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 3 April
    {
        "id": "003093",
        "date": "3 April 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Quadratic factorising",
        "difficulty": "B/A",
        "q": "Factorise fully the quadratic expression: $$-2x^2 + 5x - 3$$",
        "img": "",
        "steps": [
            "We use the AC method, multiplying the coefficient of $x^2$ by the constant: $-2 \\times -3 = 6$.",
            "We find two factors of 6 that sum to the middle coefficient (5). These are 2 and 3.",
            "We split the middle term: $-2x^2 + 2x + 3x - 3$.",
            "Factorising by grouping in pairs: $-2x(x - 1) + 3(x - 1)$.",
            "We then collect the common binomial factor $(x - 1)$.",
            "Final Answer: $$(3 - 2x)(x - 1)$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Negative x² Term",
            "content": "Quadratic expressions with a negative leading coefficient are a frequent discriminator in IGCSE Paper 2. If the negative sign is confusing, you can factor out $-1$ from the entire expression first, factorise the positive quadratic, and then re-distribute the negative sign."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 4 April
    {
        "id": "003094",
        "date": "4 April 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Multiplying/dividing",
        "difficulty": "A/A*",
        "q": "Simplify fully: $$\\dfrac{x^2 - x - 12}{x^2 - 2x - 15} \\div \\dfrac{x^2 - 6x + 8}{x^2 - 3x - 10}$$",
        "img": "",
        "steps": [
            "First, we factorise every quadratic expression in the numerator and denominator.",
            "$x^2 - x - 12 = (x + 3)(x - 4)$ and $x^2 - 2x - 15 = (x + 3)(x - 5)$.",
            "$x^2 - 6x + 8 = (x - 4)(x - 2)$ and $x^2 - 3x - 10 = (x - 5)(x + 2)$.",
            "We rewrite the division as a multiplication by the reciprocal: $\\dfrac{(x + 3)(x - 4)}{(x + 3)(x - 5)} \\times \\dfrac{(x - 5)(x + 2)}{(x - 4)(x - 2)}$.",
            "We now cancel the common factors: $(x + 3)$, $(x - 4)$, and $(x - 5)$.",
            "Final Answer: $$\\dfrac{x + 2}{x - 2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Factor-First Rule",
            "content": "A critical error in algebraic fraction problems is attempting to cancel individual terms like $x^2$. You must remember that you can only cancel common factors that are being multiplied. Always factorise every component completely before attempting to simplify."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 5 April
    {
        "id": "003095",
        "date": "5 April 2026",
        "major_area": "Statistics",
        "topic": "Frequency Tables",
        "subtopic": "Grouped data",
        "difficulty": "B/A",
        "q": "The table shows the times, $t$ minutes, taken by 40 students to complete a puzzle.<br><table><tr><th>Time ($t$)</th><th>Frequency</th></tr><tr><td>$0 < t \\le 5$</td><td>6</td></tr><tr><td>$5 < t \\le 10$</td><td>12</td></tr><tr><td>$10 < t \\le 15$</td><td>14</td></tr><tr><td>$15 < t \\le 20$</td><td>8</td></tr></table><br>Estimate the mean time taken.",
        "img": "",
        "steps": [
            "To estimate the mean, we first identify the midpoint ($x$) of each class interval: $2.5, 7.5, 12.5, 17.5$.",
            "We multiply each midpoint by its corresponding frequency ($f \\times x$):",
            "$2.5 \\times 6 = 15$; $7.5 \\times 12 = 90$; $12.5 \\times 14 = 175$; $17.5 \\times 8 = 140$.",
            "We sum these products to find the total estimated time: $15 + 90 + 175 + 140 = 420$.",
            "We find the total frequency: $6 + 12 + 14 + 8 = 40$.",
            "Finally, we divide the total sum by the total frequency: $420 \\div 40 = 10.5$.",
            "Final Answer: $$10.5\\text{ minutes}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Why an Estimate?",
            "content": "In grouped frequency tables, we do not know the exact data values—only the range they fall into. We assume every student in a group scores exactly at the midpoint. This is why the result is always described as an 'estimate' rather than an exact mean."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master Statistics: Download the Extended Pack"
    },
    // 6 April
    {
        "id": "003096",
        "date": "6 April 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Stationary points",
        "difficulty": "A*",
        "q": "A curve has the equation $y = x^3 - 3x^2 - 9x + 5$.<br>(a) Find the derivative $\\dfrac{dy}{dx}$.<br>(b) Find the coordinates of the two stationary points.",
        "steps": [
            "For part (a), we differentiate each term using the power rule: $\\dfrac{dy}{dx} = 3x^2 - 6x - 9$.",
            "For part (b), stationary points occur when the gradient is zero. We set $3x^2 - 6x - 9 = 0$.",
            "Dividing by 3 gives $x^2 - 2x - 3 = 0$, which factorises to $(x - 3)(x + 1) = 0$.",
            "The $x$-coordinates are $x = 3$ and $x = -1$.",
            "We substitute $x = 3$ into the original equation to find $y$: $y = (3)^3 - 3(3)^2 - 9(3) + 5 = -22$.",
            "We substitute $x = -1$ into the original equation: $y = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = 10$.",
            "Final Answer: $$(3, -22) \\text{ and } (-1, 10)$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Horizontal Tangents",
            "content": "A stationary point is a location where the tangent to the curve is horizontal. For full marks in Paper 4, you must ensure you substitute your $x$-values back into the original curve equation, not the derivative, to find the corresponding $y$-coordinates."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master Algebra: Download the Extended Pack"
    },
    // 7 April
    {
        "id": "003097",
        "date": "7 April 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Tangents",
        "difficulty": "B/A",
        "img": "true",
        "q": "In the diagram, $ST$ is a tangent to the circle at point $A$. $B$ and $C$ are points on the circumference. Given that $\\angle BAS = 62^\\circ$ and $\\angle ABC = 54^\\circ$, calculate the size of $\\angle BAC$.",
        "steps": [
            "According to the Alternate Segment Theorem, the angle between the tangent and the chord is equal to the angle in the alternate segment.",
            "Therefore, $\\angle BCA = \\angle BAS = 62^\\circ$.",
            "We now consider the triangle $\\triangle ABC$, where the sum of interior angles is $180^\\circ$.",
            "Calculation: $\\angle BAC = 180^\\circ - (54^\\circ + 62^\\circ)$.",
            "Simplifying gives $\\angle BAC = 180^\\circ - 116^\\circ$.",
            "Final Answer: $$64^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Spotting the Theorem",
            "content": "The Alternate Segment Theorem is a high-level discriminator in IGCSE geometry. Look for a triangle 'balanced' on a tangent line. The angle outside the triangle at the point of contact is identical to the interior angle at the opposite vertex."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master Geometry: Download the Extended Pack"
    },
    // 8 April
    {
        "id": "003098",
        "date": "8 April 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Rearranging with fractions",
        "difficulty": "B/A",
        "q": "Make $x$ the subject of the formula: $$y = \\dfrac{2x + 3}{x - 5}$$",
        "img": "",
        "steps": [
            "We first multiply both sides by the denominator to clear the fraction: $y(x - 5) = 2x + 3$.",
            "Expanding the bracket: $xy - 5y = 2x + 3$.",
            "We rearrange to group all terms involving $x$ on one side: $xy - 2x = 5y + 3$.",
            "Next, we factorise $x$ from the left-hand side: $x(y - 2) = 5y + 3$.",
            "Finally, we divide by $(y - 2)$ to isolate $x$.",
            "Final Answer: $$x = \\dfrac{5y + 3}{y - 2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Factorising Step",
            "content": "A common point of failure is when the new subject appears in multiple terms. Whenever your target variable is found more than once, you must collect those terms and factorise. This is the only algebraic path to isolating the variable."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 9 April
    {
        "id": "003099",
        "date": "9 April 2026",
        "major_area": "Number",
        "topic": "Indices Laws",
        "subtopic": "Fractional indices",
        "difficulty": "B/A",
        "q": "Without using a calculator, evaluate the following:<br>(a) $27^{\\frac{2}{3}}$<br>(b) $16^{-\\frac{3}{4}}$",
        "steps": [
            "For part (a), the denominator of the index represents the cube root: $\\sqrt[3]{27} = 3$.",
            "We then apply the numerator as a power: $3^2 = 9$.",
            "For part (b), we first handle the negative sign by taking the reciprocal: $\\dfrac{1}{16^{\\frac{3}{4}}}$.",
            "Next, we find the fourth root of 16: $\\sqrt[4]{16} = 2$.",
            "We then apply the power of 3: $2^3 = 8$.",
            "Final Answer: $$(a)\\ 9,\\ (b)\\ \\dfrac{1}{8}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root then Power",
            "content": "In Paper 2, always evaluate the root before the power. It is significantly easier to find the cube root of 27 and then square it than to square 27 and attempt to find the cube root of 729 mentally."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 10 April
    {
        "id": "003100",
        "date": "10 April 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams",
        "subtopic": "Without replacement",
        "difficulty": "A*",
        "q": "A box contains 5 green pens and 3 blue pens. Two pens are taken at random without replacement. Calculate the probability that at least one green pen is taken.",
        "steps": [
            "The total number of pens is $5 + 3 = 8$.",
            "The most efficient way to find 'at least one' is to use the complement: $1 - P(\\text{no green pens})$.",
            "'No green pens' means both pens selected were blue.",
            "Probability the first is blue: $\\dfrac{3}{8}$. Probability the second is blue: $\\dfrac{2}{7}$.",
            "Calculation for $P(BB)$: $\\dfrac{3}{8} \\times \\dfrac{2}{7} = \\dfrac{6}{56}$.",
            "Subtracting from 1: $1 - \\dfrac{6}{56} = \\dfrac{50}{56}$.",
            "Simplifying the fraction gives $\\dfrac{25}{28}$.",
            "Final Answer: $$\\dfrac{25}{28}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 'At Least' Shortcut",
            "content": "In high-stakes exams, time management is vital. Whenever you see 'at least one', calculate the probability of the outcome you don't want and subtract it from 1. This prevents you from having to calculate and sum multiple successful scenarios."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master Probability: Download the Extended Pack"
    },
    // 11 April
    {
        "id": "003101",
        "date": "11 April 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Quadratic formula",
        "difficulty": "B/A",
        "q": "Solve the equation $3x^2 - 10x + 2 = 0$. Give your answers correct to 2 decimal places.",
        "img": "",
        "steps": [
            "We identify the coefficients from the standard form $ax^2 + bx + c = 0$: $a = 3, b = -10, c = 2$.",
            "We substitute these into the quadratic formula: $x = \\dfrac{-(-10) \\pm \\sqrt{(-10)^2 - 4(3)(2)}}{2(3)}$.",
            "Simplifying the discriminant: $\\sqrt{100 - 24} = \\sqrt{76}$.",
            "Calculation: $x = \\dfrac{10 + 8.7177...}{6}$ or $x = \\dfrac{10 - 8.7177...}{6}$.",
            "Solving for both cases: $x \\approx 3.119...$ and $x \\approx 0.213...$.",
            "Rounding to 2 decimal places gives the final results.",
            "Final Answer: $$3.12\\text{ and } 0.21$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Watch the Signs!",
            "content": "A very common error in Paper 4 is failing to handle negative coefficients correctly. Remember that $-b$ becomes $+10$ because $b$ was already negative. Additionally, always place negative numbers in parentheses when squaring on a calculator to avoid sign errors."
        },
        "payhip_link": "https://payhip.com/mg5YS",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 12 April
    {
        "id": "003102",
        "date": "12 April 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Vector geometry",
        "difficulty": "A*",
        "q": "Relative to an origin $O$, $\\overrightarrow{OP} = \\mathbf{a}$ and $\\overrightarrow{OQ} = \\mathbf{b}$. $R$ is a point on $PQ$ such that $PR:RQ = 1:2$. Find $\\overrightarrow{OR}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
        "steps": [
            "First, we find the vector $\\overrightarrow{PQ}$ by navigating through the origin: $\\overrightarrow{PQ} = \\overrightarrow{OQ} - \\overrightarrow{OP} = \\mathbf{b} - \\mathbf{a}$.",
            "Since $PR:RQ = 1:2$, the point $R$ is $\\dfrac{1}{3}$ of the way along the segment $PQ$.",
            "We define the path to $R$ as $\\overrightarrow{OR} = \\overrightarrow{OP} + \\overrightarrow{PR}$.",
            "Substituting our values: $\\mathbf{a} + \\dfrac{1}{3}(\\mathbf{b} - \\mathbf{a})$.",
            "Expanding the bracket: $\\mathbf{a} + \\dfrac{1}{3}\\mathbf{b} - \\dfrac{1}{3}\\mathbf{a}$.",
            "Collecting like terms yields the final expression.",
            "Final Answer: $$\\dfrac{2}{3}\\mathbf{a} + \\dfrac{1}{3}\\mathbf{b}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The Section Formula",
            "content": "This problem illustrates the 'section formula' in vector geometry. Notice that the resulting position vector is a weighted average of the endpoints. If the ratio were $1:1$ (the midpoint), the answer would simplify to the standard $\\dfrac{1}{2}(\\mathbf{a} + \\mathbf{b})$."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master Vectors: Download the Extended Pack"
    },
    // 13 April
    {
        "id": "003103",
        "date": "13 April 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Gradient from tangents",
        "difficulty": "A",
        "q": "A curve has the equation $y = kx^2 + 5x$, where $k$ is a constant. The gradient of the curve at the point where $x = 2$ is 13. Calculate the value of $k$.",
        "steps": [
            "We first find the gradient function by differentiating $y$ with respect to $x$: $\\dfrac{dy}{dx} = 2kx + 5$.",
            "We are given that the gradient is 13 when $x = 2$.",
            "We substitute these values into our gradient expression: $13 = 2k(2) + 5$.",
            "Simplifying the equation gives $13 = 4k + 5$.",
            "Subtracting 5 from both sides yields $8 = 4k$.",
            "Dividing by 4 gives the value of the constant.",
            "Final Answer: $$k = 2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Working Backwards",
            "content": "Cambridge examiners frequently 'reverse' standard problems. Instead of asking for a gradient, they provide the gradient and require you to find a missing coefficient. Always derive the general $\\dfrac{dy}{dx}$ formula before attempting any numerical substitutions."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master Algebra: Download the Extended Pack"
    },
    // 14 April
    {
        "id": "003104",
        "date": "14 April 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Currency conversion",
        "difficulty": "C/D",
        "q": "Bill changes $£500$ into Euros (€) at an exchange rate of $£1 = €1.15$. He spends $€400$ and then changes the remaining amount back to Pounds (£) at a rate of $£1 = €1.12$. Calculate how much Bill receives in Pounds.",
        "steps": [
            "First, we convert the initial Pounds into Euros: $500 \\times 1.15 = €575$.",
            "We subtract the amount spent: $575 - 400 = €175$.",
            "To convert back to Pounds, we use the new rate. Since we are moving from the foreign currency to the home currency, we divide by the rate.",
            "Calculation: $175 \\div 1.12 = 156.25$.",
            "Final Answer: $$£156.25$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Divide or Multiply?",
            "content": "To check your logic in currency problems, consider the relative strength of the currencies. If you are converting back to a 'stronger' currency (where the unit value is higher), the numerical value should decrease. If your answer is larger than the number of Euros you started with, you have likely multiplied instead of divided."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 15 April
    {
        "id": "003105",
        "date": "15 April 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Volume",
        "difficulty": "B/C",
        "q": "A cylinder has a volume of $500\\pi\\text{ cm}^3$ and a height of $20\\text{ cm}$. Calculate the radius of the cylinder.",
        "steps": [
            "We start with the formula for the volume of a cylinder: $V = \\pi r^2 h$.",
            "Substituting the known values into the equation: $500\\pi = \\pi \\times r^2 \\times 20$.",
            "Dividing both sides by $\\pi$ simplifies the equation to $500 = 20r^2$.",
            "Dividing by 20 gives $r^2 = 25$.",
            "Taking the square root of both sides gives the radius.",
            "Final Answer: $$5\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Preserve Pi",
            "content": "When a value is given 'in terms of $\\pi$', do not convert it to a decimal. By keeping the $\\pi$ symbol, it will almost always cancel out during the algebraic simplification, leading to a much cleaner and more accurate calculation."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master Mensuration: Download the Extended Pack"
    },
    // 16 April
    {
        "id": "003106",
        "date": "16 April 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Maxima and minima",
        "difficulty": "A*",
        "q": "The volume of a box is given by $V = 48x - x^3$.<br>(a) Find the value of $x$ for which the volume is a maximum.<br>(b) Justify that this value of $x$ provides a maximum using the second derivative.",
        "steps": [
            "For part (a), we find the derivative $\\dfrac{dV}{dx} = 48 - 3x^2$.",
            "We set the derivative to zero to find the stationary point: $48 - 3x^2 = 0 \\implies x^2 = 16$.",
            "This gives $x = 4$ (we ignore $-4$ as dimensions must be positive).",
            "For part (b), we find the second derivative: $\\dfrac{d^2V}{dx^2} = -6x$.",
            "Substituting $x = 4$: $\\dfrac{d^2V}{dx^2} = -24$.",
            "Since the second derivative is negative, the volume is at a maximum at $x = 4$.",
            "Final Answer: $$(a)\\ 4,\\ (b)\\ \\text{Shown via negative second derivative}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Calculus in Context",
            "content": "In optimization problems, physical constraints are as important as the calculus. We discard the negative root because a box cannot have a negative dimension. Always state the second derivative value to provide a formal justification for the nature of the stationary point."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 17 April
    {
        "id": "003107",
        "date": "17 April 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Cyclic quadrilaterals",
        "difficulty": "B/C",
        "q": "In a cyclic quadrilateral $ABCD$, $\\angle DAB = (2x + 10)^\\circ$ and $\\angle BCD = (3x - 20)^\\circ$. Calculate the value of $x$.",
        "steps": [
            "According to the circle theorem, opposite angles in a cyclic quadrilateral sum to $180^\\circ$.",
            "We set up the equation: $(2x + 10) + (3x - 20) = 180$.",
            "Combining like terms: $5x - 10 = 180$.",
            "Adding 10 to both sides gives $5x = 190$.",
            "Dividing by 5 gives the value of $x$.",
            "Final Answer: $$38$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Opposite vs Adjacent",
            "content": "Ensure you do not confuse cyclic quadrilateral rules with parallel line properties. Only the angles directly across from one another (the opposite angles) are supplementary. If you correctly identify the pair, the problem becomes a straightforward linear equation."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master Geometry: Download the Extended Pack"
    },
    // 18 April
    {
        "id": "003108",
        "date": "18 April 2026",
        "major_area": "Algebra",
        "topic": "Sequences",
        "subtopic": "Quadratic sequences",
        "difficulty": "A/A*",
        "q": "Calculate the $n^{th}$ term of the quadratic sequence: $5, 12, 23, 38, 57...$",
        "steps": [
            "We calculate the first differences: $7, 11, 15, 19$.",
            "We calculate the second difference, which is constant: $4$.",
            "The coefficient of the $n^2$ term is half of the second difference: $4 \\div 2 = 2$. The formula starts with $2n^2$.",
            "We subtract $2n^2$ from the original terms to find the linear remainder: $(5-2), (12-8), (23-18) \\to 3, 4, 5$.",
            "The $n^{th}$ term of the sequence $3, 4, 5...$ is $n + 2$.",
            "Combining the two parts gives the final formula.",
            "Final Answer: $$2n^2 + n + 2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Quadratic Shortcuts",
            "content": "The constant second difference is the definitive indicator of a quadratic sequence. Always remember that this difference equals $2a$ from the general form $an^2 + bn + c$. Once you have identified 'a', the problem reduces to a simple linear sequence task."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 19 April
    {
        "id": "003109",
        "date": "19 April 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Error intervals",
        "difficulty": "B/A",
        "q": "The mass of a bag of sugar is $500\\text{ g}$ correct to the nearest $10\\text{ g}$. State the error interval for the mass $m$.",
        "steps": [
            "The degree of accuracy is $10\\text{ g}$, so the maximum error is $\\pm 5\\text{ g}$.",
            "The lower bound is calculated as $500 - 5 = 495\\text{ g}$.",
            "The upper bound is calculated as $500 + 5 = 505\\text{ g}$.",
            "We express the error interval using inequality notation.",
            "Final Answer: $$495 \\le m < 505$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Inequality Rigour",
            "content": "Pay close attention to the symbols used in error intervals. The lower bound is always inclusive ($\\le$), while the upper bound is exclusive ($<$). This is because a value of exactly $505$ would round up to the next interval, not down to $500$."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 20 April
    {
        "id": "003110",
        "date": "20 April 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Solving inequalities",
        "difficulty": "A",
        "q": "Solve the quadratic inequality: $x^2 - x - 12 > 0$.",
        "steps": [
            "First, we find the critical values by factorising the quadratic: $(x - 4)(x + 3) > 0$.",
            "The critical values where the graph crosses the $x$-axis are $x = 4$ and $x = -3$.",
            "Considering the 'U-shape' of the parabola, the expression is positive (above the axis) in the 'tails' of the graph.",
            "This corresponds to the regions where $x$ is less than the smaller root or greater than the larger root.",
            "Final Answer: $$x < -3 \\text{ or } x > 4$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Sketching for Precision",
            "content": "Never attempt to solve a quadratic inequality without a quick sketch of the parabola. Visualizing the regions above and below the $x$-axis is the only way to be certain whether your solution requires a single combined range or two separate inequalities."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 21 April
    {
        "id": "003111",
        "date": "21 April 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Surface area",
        "difficulty": "B/A",
        "q": "A solid sphere has a radius of $6\\text{ cm}$. A solid cylinder has a radius of $3\\text{ cm}$ and a height of $h\\text{ cm}$. Given that the total surface area of the cylinder is equal to the surface area of the sphere, find the value of $h$.",
        "steps": [
            "We calculate the surface area of the sphere: $4\\pi r^2 = 4\\pi(6^2) = 144\\pi$.",
            "We define the total surface area of the cylinder as the sum of the two bases and the curved surface: $2\\pi r^2 + 2\\pi rh$.",
            "Substituting the cylinder's radius: $2\\pi(3^2) + 2\\pi(3)h = 18\\pi + 6\\pi h$.",
            "We equate the two areas: $18\\pi + 6\\pi h = 144\\pi$.",
            "Subtracting $18\\pi$ from both sides gives $6\\pi h = 126\\pi$.",
            "Dividing by $6\\pi$ isolates $h$.",
            "Final Answer: $$h = 21$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Total Surface Area",
            "content": "In cylinder problems, always check if the question specifies 'solid' or 'hollow'. For a solid cylinder, you must include both circular ends ($2\\pi r^2$) in addition to the curved lateral surface ($2\\pi rh$). Forgetting the ends is the most common cause of lost marks in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master Mensuration: Download the Extended Pack"
    },
    // 22 April
    {
        "id": "003112",
        "date": "22 April 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Composite and inverse",
        "difficulty": "B/A",
        "q": "The functions $f$ and $g$ are defined by $f(x) = 3x - 5$ and $g(x) = \\dfrac{x + 1}{2}$.<br>(a) Find the composite function $gf(x)$ in its simplest form.<br>(b) Find the inverse function $f^{-1}(x)$.",
        "steps": [
            "For part (a), $gf(x)$ means substituting $f(x)$ into $g(x)$: $g(3x - 5) = \\dfrac{(3x - 5) + 1}{2}$.",
            "Simplifying the numerator: $\\dfrac{3x - 4}{2}$.",
            "For part (b), we set $y = 3x - 5$ and interchange the variables to reflect in $y=x$: $x = 3y - 5$.",
            "Rearranging to solve for $y$: $x + 5 = 3y$, so $y = \\dfrac{x + 5}{3}$.",
            "Final Answer: $$(a)\\ \\dfrac{3x - 4}{2},\\ (b)\\ f^{-1}(x) = \\dfrac{x + 5}{3}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Functional Reflections",
            "content": "Interchanging $x$ and $y$ is the formal geometric instruction to reflect the function in the line $y=x$. Always follow this methodology to ensure you are meeting the IGCSE Extended standard for algebraic proof."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Extended Pack"
    },
    // 23 April
    {
        "id": "003113",
        "date": "23 April 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Gradient from tangents",
        "difficulty": "A/A*",
        "q": "A curve has the equation $y = x^2 - 6x + 8$. Find the equation of the tangent to the curve at the point $(5, 3)$.",
        "steps": [
            "We first differentiate the curve equation: $\\dfrac{dy}{dx} = 2x - 6$.",
            "The gradient of the tangent at $x=5$ is found by substituting into the derivative: $m = 2(5) - 6 = 4$.",
            "Using the point $(5, 3)$ and $m=4$, we apply $y - y_1 = m(x - x_1)$.",
            "Calculation: $y - 3 = 4(x - 5) \\implies y - 3 = 4x - 20$.",
            "Final Answer: $$y = 4x - 17$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Tangents as Straight Lines",
            "content": "A tangent is always a linear function ($y=mx+c$). The derivative provides the gradient at a single point, but you must combine it with the specific coordinates to find the full line equation. Always double-check your final $y$-intercept against the point of contact."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Extended Pack"
    },
    // 24 April
    {
        "id": "003114",
        "date": "24 April 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Similar shapes",
        "difficulty": "A/A*",
        "q": "Two mathematically similar solids have volumes of $54\\text{ cm}^3$ and $128\\text{ cm}^3$. Given the surface area of the larger solid is $160\\text{ cm}^2$, calculate the surface area of the smaller solid.",
        "steps": [
            "We find the volume scale factor ($k^3$) by dividing the volumes: $k^3 = 128 \\div 54 = 64/27$.",
            "We find the linear scale factor ($k$) by taking the cube root: $k = \\sqrt[3]{64/27} = 4/3$.",
            "The area scale factor ($k^2$) is the square of the linear scale factor: $k^2 = (4/3)^2 = 16/9$.",
            "Finally, we divide the larger area by the area scale factor: $160 \\div (16/9) = 90\\text{ cm}^2$.",
            "Final Answer: $$90\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Linear Bridge",
            "content": "You cannot go directly from volume to area. You must always use the linear scale factor ($k$) as your 'bridge'. Standardizing your working to show $k, k^2$ and $k^3$ will prevent the common error of using the wrong power during calculation."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Extended Pack"
    },
    // 25 April
    {
        "id": "003115",
        "date": "25 April 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations in standard form",
        "difficulty": "B/C",
        "q": "Calculate the value of $(4.2 \\times 10^5) + (3.8 \\times 10^4)$, giving your answer in standard form.",
        "steps": [
            "To add numbers in standard form, we must first equalise the powers of 10.",
            "We convert the smaller number to match the larger power: $3.8 \\times 10^4 = 0.38 \\times 10^5$.",
            "Now we add the coefficients: $4.2 + 0.38 = 4.58$.",
            "Combining this with the power gives the final result.",
            "Final Answer: $$4.58 \\times 10^5$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Adding Powers",
            "content": "You cannot simply add the leading numbers if the powers of 10 are different. In Paper 2, always convert both numbers to the higher power to ensure your result is already in, or very close to, correct standard form."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 26 April
    {
        "id": "003116",
        "date": "26 April 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Scale factors",
        "difficulty": "A/A*",
        "q": "The ratio of the heights of two similar cylinders is $2:5$. The volume of the smaller cylinder is $80\\text{ cm}^3$. Calculate the volume of the larger cylinder.",
        "steps": [
            "The linear scale factor ($k$) is found from the ratio of the heights: $k = 5 \\div 2 = 2.5$.",
            "The volume scale factor ($k^3$) is the cube of the linear scale factor: $2.5^3 = 15.625$.",
            "We multiply the volume of the smaller cylinder by the volume scale factor.",
            "Calculation: $80 \\times 15.625 = 1250$.",
            "Final Answer: $$1250\\text{ cm}^3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Dimensional Powers",
            "content": "Always identify your linear scale factor first. Remember: lengths use $k$, areas use $k^2$, and volumes use $k^3$. Mastery of this distinction is essential for solving these high-scoring Paper 4 geometry problems."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master Geometry: Download the Extended Pack"
    },
    // 27 April
    {
        "id": "003117",
        "date": "27 April 2026",
        "major_area": "Algebra",
        "topic": "Expanding Brackets",
        "subtopic": "Triple brackets",
        "difficulty": "B/A",
        "q": "Expand and simplify fully: $(x + 2)(x - 3)(x + 4)$.",
        "steps": [
            "We first expand the first two brackets using the FOIL method: $(x + 2)(x - 3) = x^2 - 3x + 2x - 6$.",
            "Simplifying this gives $x^2 - x - 6$.",
            "Next, we multiply this quadratic by the third bracket: $(x^2 - x - 6)(x + 4)$.",
            "Distributing every term: $x^3 + 4x^2 - x^2 - 4x - 6x - 24$.",
            "Collecting like terms yields the final cubic expression.",
            "Final Answer: $$x^3 + 3x^2 - 10x - 24$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Incremental Expansion",
            "content": "Never attempt to expand three brackets simultaneously. Expand the first pair, fully simplify the resulting quadratic, and only then distribute the third bracket. This structured approach significantly reduces sign errors and missing terms."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 28 April
    {
        "id": "003118",
        "date": "28 April 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Sine Rule",
        "difficulty": "A",
        "img": "true",
        "q": "In triangle $ABC$, $AB = 8\\text{ cm}$, $BC = 11\\text{ cm}$ and $\\angle BAC = 75^\\circ$. Calculate the size of angle $\\angle ACB$, giving your answer to 1 decimal place.",
        "steps": [
            "We use the Sine Rule: $\\dfrac{\\sin C}{c} = \\dfrac{\\sin A}{a}$.",
            "Substituting the known values: $\\dfrac{\\sin C}{8} = \\dfrac{\\sin 75^\\circ}{11}$.",
            "Rearranging to solve for $\\sin C$: $\\sin C = \\dfrac{8 \\times \\sin 75^\\circ}{11} \\approx 0.7025...$.",
            "Using the inverse sine function: $C = \\sin^{-1}(0.7025...)$.",
            "Calculation: $C \\approx 44.63...^\\circ$.",
            "Final Answer: $$44.6^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Side-Angle Pairs",
            "content": "To apply the Sine Rule, you must identify a 'known pair' (a side and its opposite angle). Here, we have $11\\text{ cm}$ and $75^\\circ$. Always check for this pair before deciding between the Sine and Cosine rules."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master Trigonometry: Download the Extended Pack"
    },
    // 29 April
    {
        "id": "003119",
        "date": "29 April 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Substitution",
        "difficulty": "A/A*",
        "q": "Calculate the coordinates of the two points where the line $y = 2x + 1$ intersects the circle $x^2 + y^2 = 13$.",
        "steps": [
            "We substitute the linear equation into the circle equation: $x^2 + (2x + 1)^2 = 13$.",
            "Expanding the bracket: $x^2 + (4x^2 + 4x + 1) = 13$.",
            "Rearranging into standard quadratic form: $5x^2 + 4x - 12 = 0$.",
            "Factorising the quadratic yields $(5x - 6)(x + 2) = 0$.",
            "The $x$-coordinates are $x = 1.2$ and $x = -2$.",
            "Substituting $x = 1.2$ into $y = 2x + 1$ gives $y = 3.4$.",
            "Substituting $x = -2$ into $y = 2x + 1$ gives $y = -3$.",
            "Final Answer: $$(1.2, 3.4) \\text{ and } (-2, -3)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Substitution Efficiency",
            "content": "When solving simultaneous equations involving a line and a circle, always substitute your $x$-values back into the linear equation to find $y$. It is faster and far less prone to error than using the circle equation."
        },
        "payhip_link": "https://payhip.com/bradleysmaths",
        "button_text": "Master Algebra: Download the Extended Pack"
    },
    // 30 April
    {
        "id": "003120",
        "date": "30 April 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations in standard form",
        "difficulty": "B/A",
        "q": "The distance from Earth to a distant planet is $1.65 \\times 10^8 \\text{ km}$. A spacecraft travels at an average speed of $5.5 \\times 10^4 \\text{ km/h}$.<br>(a) Calculate the time taken for the journey in hours, giving your answer in standard form.<br>(b) Calculate the time taken for the journey in days.",
        "steps": [
            "For part (a), we use the formula $\\text{Time} = \\text{Distance} \\div \\text{Speed}$.",
            "Calculation: $(1.65 \\times 10^8) \\div (5.5 \\times 10^4)$.",
            "Dividing coefficients: $1.65 \\div 5.5 = 0.3$.",
            "Dividing powers of 10: $10^8 \\div 10^4 = 10^4$.",
            "Converting $0.3 \\times 10^4$ to correct standard form gives $3 \\times 10^3$ hours.",
            "For part (b), we divide the hours by 24: $3000 \\div 24 = 125$ days.",
            "Final Answer: $$(a)\\ 3 \\times 10^3\\text{ hours},\\ (b)\\ 125\\text{ days}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Standard Form Protocol",
            "content": "When performing division in standard form, ensure your final result has a leading coefficient in the range $1\\le n < 10. Leaving an answer as $0.3 \\times 10^4$ will cost you the final accuracy mark in IGCSE Paper 2."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master Number: Download the Full Number Pack"
    }
];
