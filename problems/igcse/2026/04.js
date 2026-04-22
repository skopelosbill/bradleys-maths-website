const problemBank =[
// 1 Apr
    {
        "id": "001586",
        "date": "1 Apr 2026",
        "major_area": "Coordinate Geometry and Geometry",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "C/D",
        "notice": "Non-calculator question.",
        "q": "Find the equation of the straight line passing through the points $(3, -4)$ and $(5, 6)$.",
        "img": "",
        "steps": [
            "Calculate the gradient ($m$) using $\\dfrac{y_2 - y_1}{x_2 - x_1}$.",
            "$m = \\dfrac{6 - (-4)}{5 - 3} = \\dfrac{10}{2} = 5$.",
            "Use the formula $y - y_1 = m(x - x_1)$ with the point $(5, 6)$.",
            "$y - 6 = 5(x - 5)$.",
            "Expand the brackets: $y - 6 = 5x - 25$.",
            "Add 6 to both sides to get the final form.",
            "Final Answer: $$y = 5x - 19$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Choose the 'Easy' Point",
            "content": "When substituting a point back into the formula to find the equation, you can use either point. I always recommend choosing the one with the fewest negative signs (in this case, $(5,6)$) to reduce the chance of a simple arithmetic error!"
        },
        "payhip_link": "https://payhip.com/b/L6skh", // Geometry & Coordinate Geometry pack
        "button_text": "Master Coordinates: Download the Coordinate Geometry and Geometry Pack" 
    },

			// 2 Apr
// 2 Apr
    {
        "id": "001587",
        "date": "2 Apr 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "LCM",
        "difficulty": "C/D",
        "notice": "Contextual LCM problem.",
        "q": "Buses on three routes, A, B and C leave the bus station at 8am.<br>Route A buses leave every 20 minutes.<br>Route B buses leave every 30 minutes.<br>Route C buses leave every 45 minutes.<br><br>What time will it be when all three next leave the bus station together?",
        "img": "",
        "steps": [
            "Find the prime factors of each interval:",
            "$20 = 2^2 \\times 5$",
            "$30 = 2 \\times 3 \\times 5$",
            "$45 = 3^2 \\times 5$",
            "The LCM uses the highest power of every prime factor present: $2^2 \\times 3^2 \\times 5$.",
            "Calculate the LCM: $4 \\times 9 \\times 5 = 180$ minutes.",
            "Convert minutes to hours: $180 \\div 60 = 3$ hours.",
            "Add 3 hours to the start time of 8:00 AM.",
            "Final Answer: $$11:00\\text{ AM}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying LCM",
            "content": "In 'real-world' problems, whenever you see questions about things happening 'at the same time again' or 'meeting at the start,' you are looking for the Lowest Common Multiple (LCM). Prime factorisation is the most reliable way to find it without missing any factors!"
        },
        "payhip_link": "https://payhip.com/b/XEV2Z", // Your Number Pack Link
        "button_text": "Master Number: Download the Full Number Pack"
    },

			// 3 Apr
// 3 Apr
    {
        "id": "001588",
        "date": "3 Apr 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Quadratic factorising",
        "difficulty": "B/A",
        "notice": "This is a non-calculator question.",
        "q": "Factorise the quadratic expression: $$-2x^2 + 5x - 3$$",
        "img": "",
        "steps": [
            "Multiply the coefficient of $x^2$ by the constant: $-2 \\times -3 = 6$.",
            "Find factors of 6 that sum to 5: these are 2 and 3.",
            "Split the middle term: $-2x^2 + 2x + 3x - 3$.",
            "Factorise in pairs: $-2x(x - 1) + 3(x - 1)$.",
            "Combine the factors: $(3 - 2x)(x - 1)$.",
            "<strong>Note</strong>: there are two more equivalent alternative answers: $(2x - 3)(1 - x)$ and $-(2x - 3)(x - 1)$.",
            "Final Answer: $$(3 - 2x)(x - 1)$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Negative $x^2$ Trap",
            "content": "Expressions with a negative $x^2$ term are a frequent 'Grade A' differentiator. If you find them tricky, you can factor out $-1$ from the entire expression first to make the quadratic term positive. Just remember to put the negative sign back in front of your final brackets!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Algebra Pack
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },

			// 4 Apr
// 4 Apr
    {
        "id": "001589",
        "date": "4 Apr 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Division of Algebraic Fractions",
        "difficulty": "A/A*",
        "notice": "This is a non-calculator question.",
        "q": "Simplify: $$\\dfrac{x^2-x-12}{x^2-2x-15}\\div\\dfrac{x^2-6x+8}{x^2-3x-10}$$",
        "img": "",
        "steps": [
            "Factorise each of the four quadratic expressions:",
            "$x^2-x-12 \\equiv (x+3)(x-4)$",
            "$x^2-2x-15 \\equiv (x+3)(x-5)$",
            "$x^2-6x+8 \\equiv (x-4)(x-2)$",
            "$x^2-3x-10 \\equiv (x-5)(x+2)$",
            "Rewrite the original expression using these factorisations: $$\\dfrac{(x+3)(x-4)}{(x+3)(x-5)}\\div\\dfrac{(x-4)(x-2)}{(x-5)(x+2)}$$",
            "Change the sign to multiply and invert the second fraction: $$\\dfrac{(x+3)(x-4)}{(x+3)(x-5)}\\times\\dfrac{(x-5)(x+2)}{(x-4)(x-2)}$$",
            "Cancel common factors wherever possible: $$\\dfrac{\\cancel{(x+3)}\\cancel{(x-4)}}{\\cancel{(x+3)}\\cancel{(x-5)}}\\times\\dfrac{\\cancel{(x-5)}(x+2)}{\\cancel{(x-4)}(x-2)}$$",
            "Final Answer: $$\\dfrac{x+2}{x-2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Factor-First Rule",
            "content": "A fatal error in these questions is trying to cancel individual terms like $x^2$ or $12$ before factorising. Remember: you can only cancel <strong>factors</strong> (the whole bracket), never individual terms within an expression. Always factorise everything first!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Algebra Pack
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },

			// 5 Apr
// 5 Apr
    {
        "id": "001590",
        "date": "5 Apr 2026",
        "major_area": "Statistics",
        "topic": "Frequency Tables",
        "subtopic": "Grouped Data – Estimate of the Mean",
        "difficulty": "B/A",
        "notice": "This is a non-calculator question.",
        "q": "The table shows the times, in minutes, taken by 40 students to complete a puzzle.<br><br><table><tr><th>Time (minutes)</th><th>Frequency</th></tr><tr><td>0 < t ≤ 5</td><td>6</td></tr><tr><td>5 < t ≤ 10</td><td>12</td></tr><tr><td>10 < t ≤ 15</td><td>14</td></tr><tr><td>15 < t ≤ 20</td><td>8</td></tr></table><br>Estimate the mean time taken.",
        "img": "",
        "steps": [
            "Find the midpoint ($x$) of each class interval: $2.5,\\ 7.5,\\ 12.5,\\ 17.5$.",
            "Multiply each midpoint by its frequency ($f \\times x$):",
            "$2.5 \\times 6 = 15$",
            "$7.5 \\times 12 = 90$",
            "$12.5 \\times 14 = 175$",
            "$17.5 \\times 8 = 140$",
            "Calculate the total of the $fx$ values: $15 + 90 + 175 + 140 = 420$.",
            "Identify the total frequency ($n$): $6 + 12 + 14 + 8 = 40$.",
            "Estimate the mean using $\\dfrac{\\sum fx}{\\sum f} = \\dfrac{420}{40} = 10.5$.",
            "Final Answer: $$\\text{Estimated mean} = 10.5\\text{ minutes}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Why is it an 'Estimate'?",
            "content": "Students are often confused why we call this an 'estimate' when the math seems exact. It is because we don't know the actual times for each student—only the interval they fall into. We assume everyone scores exactly at the **midpoint**. Forgetting to use the midpoint is the most common way to lose all marks on this question!"
        },
        "payhip_link": "https://payhip.com/b/rsVCz", // Vectors, Probability & Stats pack
        "button_text": "Master Statistics: Download the Full Vectors, Probability, & Stats Pack"
    },
// 6 Apr
    // 6 Apr
    {
        "id": "001591",
        "date": "6 Apr 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Stationary points",
        "difficulty": "A*",
        "notice": "IGCSE Specialist Topic.",
        "q": "A curve has the equation $y = x^3 - 3x^2 - 9x + 5$.<br>(a) Find $\\dfrac{dy}{dx}$.<br>(b) Find the coordinates of the two stationary points.",
        "img": "",
        "steps": [
            "(a) Differentiate the expression with respect to $x$: $$\\dfrac{dy}{dx} = 3x^2 - 6x - 9$$",
            "(b) Stationary points occur when the gradient is zero. Set $\\dfrac{dy}{dx} = 0$: $$3x^2 - 6x - 9 = 0$$",
            "Divide the equation by 3 to simplify: $x^2 - 2x - 3 = 0$.",
            "Factorise the quadratic: $(x - 3)(x + 1) = 0$.",
            "Identify the $x$-coordinates: $x = 3$ and $x = -1$.",
            "Substitute $x = 3$ into the original equation: $y = (3)^3 - 3(3)^2 - 9(3) + 5 = -22$.",
            "Substitute $x = -1$ into the original equation: $y = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = 10$.",
            "Final Answer: $$(3, -22)\\text{ and } (-1, 10)$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Horizontal Tangents",
            "content": "A 'stationary point' is simply a point where the tangent to the curve is perfectly horizontal. That is why we set the gradient function to zero. Remember, the question asks for <strong>coordinates</strong>, so you haven't finished until you've plugged your $x$ values back into the <strong>original</strong> equation to find $y$!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Algebra Pack
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 7 Apr
    {
        "id": "001592",
        "date": "7 Apr 2026",
        "major_area": "Coordinate Geometry & Geometry",
        "topic": "Circle Theorems",
        "subtopic": "Tangents",
        "difficulty": "B/A",
        "notice": "Alternate Segment Theorem.",
        "q": "In the diagram, $ST$ is a tangent to the circle at point $A$. $B$ and $C$ are points on the circumference.<br>Given that $\\angle BAS = 62^\\circ$ and $\\angle ABC = 54^\\circ$, calculate the size of $\\angle BAC$.",
        "img": "images/apr_07_i.png",
        "steps": [
            "By the <strong>Alternate Segment Theorem</strong>, the angle between the tangent ($ST$) and the chord ($AC$) is equal to the angle in the alternate segment ($\\angle ACB$).",
            "However, here $\\angle BAS$ is given as $62^\\circ$. By the theorem, $\\angle BCA = \\angle BAS = 62^\\circ$.",
            "Now consider $\\triangle ABC$. The sum of angles in a triangle is $180^\\circ$.",
            "Calculate: $\\angle BAC = 180^\\circ - (54^\\circ + 62^\\circ)$.",
            "Simplify: $\\angle BAC = 180^\\circ - 116^\\circ$.",
            "Final Answer: $$64^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Spotting the Theorem",
            "content": "The Alternate Segment Theorem is often the 'grade-decider' in IGCSE Geometry. Look for a triangle 'balanced' on a tangent line. The angle outside the triangle at the point of contact is always equal to the interior angle at the opposite vertex. Always state the name of the theorem to secure your reason marks!"
        },
        "payhip_link": "https://payhip.com/b/L6skH", // Your Geometry Pack Link
        "button_text": "Master Geometry: Download the Full Coordinate Geometry & Geometry Pack"
    },
   // 8 Apr
    {
        "id": "001593",
        "date": "8 Apr 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Rearranging with fractions",
        "difficulty": "B/A",
        "q": "Make $x$ the subject of the formula: $$y = \\frac{2x + 3}{x - 5}$$",
        "img": "",
        "steps": [
            "Multiply both sides by the denominator $(x - 5)$: $$y(x - 5) = 2x + 3$$",
            "Expand the bracket: $$xy - 5y = 2x + 3$$",
            "Collect all terms containing $x$ on one side and all other terms on the other side: $$xy - 2x = 5y + 3$$",
            "Factorise $x$ out of the left-hand side: $$x(y - 2) = 5y + 3$$",
            "Divide both sides by $(y - 2)$ to isolate $x$.",
            "Final Answer: $$x = \\frac{5y + 3}{y - 2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Factorising Step",
            "content": "The most common mistake students make is getting stuck once they have $x$ on both sides of the equation. Whenever the subject you are looking for appears more than once, you <strong>must</strong> collect those terms together and factorise. It's the only way to get the subject on its own!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Algebra Pack
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 9 Apr
  // 9 Apr
    {
        "id": "001594",
        "date": "9 Apr 2026",
        "major_area": "Number",
        "topic": "Powers & Roots",
        "subtopic": "Index notation",
        "difficulty": "B/A",
        "notice": "Non-calculator question.",
        "q": "Without using a calculator, evaluate the following:<br>(a) $27^{\\frac{2}{3}}$<br>(b) $16^{-\\frac{3}{4}}$",
        "img": "",
        "steps": [
            "(a) For $27^{\\frac{2}{3}}$, first take the cube root of 27: $\\sqrt[3]{27} = 3$.",
            "(a) Now square the result: $3^2 = 9$.",
            "(b) For $16^{-\\frac{3}{4}}$, first handle the negative sign by taking the reciprocal: $\\dfrac{1}{16^{\\frac{3}{4}}}$.",
            "(b) Now find the fourth root of 16: $\\sqrt[4]{16} = 2$.",
            "(b) Cube the result: $2^3 = 8$.",
            "Final Answer: $$(a)\\ 9,\\ (b)\\ \\dfrac{1}{8}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root then Power",
            "content": "When dealing with fractional indices, always find the <strong>root first</strong> and then apply the <stronh>power</strong>. For example, in part (a), it is much easier to find the cube root of 27 (which is 3) and then square it, rather than trying to square 27 first and then finding the cube root of 729!"
        },
        "payhip_link": "https://payhip.com/b/XEV2Z", // Number Pack
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 10 Apr
   // 10 Apr
    {
        "id": "001595",
        "date": "10 Apr 2026",
        "major_area": "Probability",
        "topic": "Basic Probability",
        "subtopic": "Conditional Probability",
        "difficulty": "A*",
        "notice": "Without replacement.",
        "q": "A box contains 5 green pens and 3 blue pens. Two pens are taken at random without replacement.<br>Calculate the probability that at least one green pen is taken.",
        "img": "",
        "steps": [
            "Total number of pens = $5 + 3 = 8$.",
            "The quickest way to find 'at least one' is to use the formula: $1 - P(\\text{none})$.",
            "The probability that 'none' are green means both pens are blue.",
            "Probability the first is blue: $P(B_1) = \\dfrac{3}{8}$.",
            "Since we do not replace the pen, probability the second is blue: $P(B_2) = \\dfrac{2}{7}$.",
            "Probability both are blue: $\\dfrac{3}{8} \\times \\dfrac{2}{7} = \\dfrac{6}{56}$.",
            "Subtract from 1: $1 - \\dfrac{6}{56} = \\dfrac{50}{56}$.",
            "Simplify the fraction: $\\dfrac{25}{28}$.",
            "Final Answer: $$\\dfrac{25}{28}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 'At Least' Shortcut",
            "content": "Whenever you see 'at least one' in a probability question, don't waste time calculating every successful outcome. It is almost always faster to calculate the probability of the one outcome you <strong>don't</strong> want (in this case, zero green pens) and subtract it from 1!"
        },
        "payhip_link": "https://payhip.com/b/rsVCz", // Vectors, Probability & Stats Pack
        "button_text": "Master Probability: Download the Full Vectors & Stats Pack"
    },
	// 11 Apr
    {
        "id": "001596",
        "date": "11 Apr 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Quadratic formula",
        "difficulty": "B/A",
        "q": "Solve the equation $3x^2 - 10x + 2 = 0$.<br>Give your answers correct to 2 decimal places.",
        "img": "",
        "steps": [
            "Identify the coefficients: $a = 3, b = -10, c = 2$.",
            "Substitute into the formula: $x = \\dfrac{-(-10) \\pm \\sqrt{(-10)^2 - 4(3)(2)}}{2(3)}$.",
            "Simplify the discriminant: $\\sqrt{100 - 24} = \\sqrt{76}$.",
            "Calculate the two possible values for $x$: $x = \\dfrac{10 + 8.7177...}{6}$ or $x = \\dfrac{10 - 8.7177...}{6}$.",
            "Final Answer: $$x = 3.12\\text{ and } x = 0.21$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Watch the Signs!",
            "content": "A very common error in IGCSE Paper 4 is forgetting that $-b$ becomes $+10$ because $b$ was already negative. Also, always put negative numbers in brackets when squaring on a calculator to avoid a syntax error!"
        },
        "payhip_link": "https://payhip.com/mg5YS",
		"button_text": "Master Algebra: Download the Full Algebra Pack" 
    },
// 12 Apr
    {
        "id": "001597",
        "date": "12 Apr 2026",
        "major_area": "Vectors, Probability and Statistics",
        "topic": "Vectors",
        "subtopic": "Parallel vectors",
        "difficulty": "A*",
        "q": "$\\overrightarrow{OP} = \\mathbf{a}$ and $\\overrightarrow{OQ} = \\mathbf{b}$. $R$ is a point on $PQ$ such that $PR:RQ = 1:2$.<br>Find $\\overrightarrow{OR}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
        "steps": [
            "Find the vector $\\overrightarrow{PQ} = \\overrightarrow{OQ} - \\overrightarrow{OP} = \\mathbf{b} - \\mathbf{a}$.",
            "Since $PR:RQ = 1:2$, the point $R$ is $\\frac{1}{3}$ of the way along $PQ$.",
            "So, $\\overrightarrow{PR} = \\frac{1}{3}\\overrightarrow{PQ} = \\frac{1}{3}(\\mathbf{b} - \\mathbf{a})$.",
            "Use the path $\\overrightarrow{OR} = \\overrightarrow{OP} + \\overrightarrow{PR}$.",
            "Substitute: $\\mathbf{a} + \\frac{1}{3}\\mathbf{b} - \\frac{1}{3}\\mathbf{a}$.",
            "Final Answer: $$\\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The Section Formula",
            "content": "This is a classic 'vector path' question. Notice how the result is a weighted average of the two position vectors. If the ratio were $1:1$ (the midpoint), the answer would simply be $\\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$."
        },
        "payhip_link": "https://payhip.com/b/rsVCz", // Swap for your Vectors link if different
        "button_text": "Master Vectors: Download the Full Vectors, Probability, & Stats Pack" 
    },
// 13 Apr
    {
        "id": "001598",
        "date": "13 Apr 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Gradient from tangents",
        "difficulty": "A",
        "notice": "IGCSE Specialist Topic.",
        "q": "A curve has the equation $y = kx^2 + 5x$, where $k$ is a constant.<br>The gradient of the curve at the point where $x = 2$ is $13$.<br>Find the value of $k$.",
        "img": "",
        "steps": [
            "Find the gradient function by differentiating $y$ with respect to $x$: $\\dfrac{dy}{dx} = 2kx + 5$.",
            "We are given that the gradient is $13$ when $x = 2$.",
            "Substitute these values into the gradient function: $13 = 2k(2) + 5$.",
            "Simplify the equation: $13 = 4k + 5$.",
            "Subtract 5 from both sides: $8 = 4k$.",
            "Divide by 4 to find $k$.",
            "Final Answer: $$k = 2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Working Backwards",
            "content": "Examiners love to 'flip' the standard question! Instead of asking you to find the gradient, they provide it and ask you to find a missing constant. Always find the general expression for $\\frac{dy}{dx}$ first before you substitute any numbers."
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Your IGCSE Algebra link
        "button_text": "Master Algebra: Download the Full Algebra Pack" 
    },
// 14 Apr
    {
        "id": "001599",
        "date": "14 Apr 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Currency conversion",
        "difficulty": "C/D",
        "q": "Bill changes £500 into Euros (€) when the exchange rate is £1 = €1.15.<br>While on holiday, he spends €400.<br>He then changes the remaining Euros back into Pounds (£) when the exchange rate is £1 = €1.12.<br>Calculate how much Bill receives in Pounds.",
        "img": "",
        "steps": [
            "Convert the original Pounds to Euros: $500 \\times 1.15 = \\text{€}575$",
            "Subtract the amount spent: $575 - 400 = \\text{€}175$",
            "Convert the remaining Euros back to Pounds using the new rate.",
            "Since we are going from the 'foreign' currency back to the 'home' currency, we divide: $175 \\div 1.12$",
            "Final Answer: $$£156.25$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Divide or Multiply?",
            "content": "A simple way to check your logic: if you are changing money back into a 'stronger' currency (like Pounds from Euros), the number should get smaller. If your answer is larger than the number of Euros you started with, you multiplied when you should have divided!"
        },
        "payhip_link": "https://payhip.com/b/XEV2Z", // Replace with your Number pack link
        "button_text": "Master Number: Download the Full Number Pack" 
    },
// 15 Apr
    {
        "id": "001600",
        "date": "15 Apr 2026",
        "major_area": "Mensuration and Trigonometry",
        "topic": "3D Shapes",
        "subtopic": "Volume of Cylinder",
        "difficulty": "B/C",
        "q": "A cylinder has a volume of $500\\pi\\text{ cm}^3$ and a height of $20\\text{ cm}$.<br>Calculate the radius of the cylinder.",
        "img": "",
        "steps": [
            "Start with the formula for the volume of a cylinder: $V = \\pi r^2 h$.",
            "Substitute the known values into the formula: $500\\pi = \\pi \\times r^2 \\times 20$.",
            "Divide both sides by $\\pi$ to simplify: $500 = 20r^2$.",
            "Divide by 20 to isolate $r^2$: $r^2 = 25$.",
            "Take the square root of both sides to find $r$.",
            "Final Answer: $$5\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Keep the Pi!",
            "content": "When a volume is given 'in terms of $\\pi$', do not convert it to 3.14. Leave it as the symbol $\\pi$ because it will almost always cancel out on both sides of your equation, making the calculation much simpler and more accurate."
        },
        "payhip_link": "https://payhip.com/b/KjXoP", // Replace with your Mensuration/Trig link
        "button_text": "Master Mensuration: Download the Full Mensuration and Trigonometry Pack" 
    },
	// 16 Apr
    {
        "id": "001601",
        "date": "16 Apr 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Maxima and minima",
        "difficulty": "A*",
        "notice": "IGCSE Specialist Topic.",
        "q": "The volume of a box is given by $V = 48x - x^3$.<br>Find the value of $x$ for which the volume is a maximum.",
        "img": "",
        "steps": [
            "Differentiate $V$ with respect to $x$: $\\frac{dV}{dx} = 48 - 3x^2$.",
            "Set the derivative to zero for a stationary point: $48 - 3x^2 = 0$.",
            "Rearrange: $3x^2 = 48$.",
            "Solve for $x$: $x^2 = 16 \\implies x = 4$ (ignoring $-4$ as length must be positive).",
            "Verify with second derivative: $\\frac{d^2V}{dx^2} = -6x$.",
            "At $x=4$, $\\frac{d^2V}{dx^2} = -24$ (negative, so it is a maximum).",
            "Final Answer: $$x = 4$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Calculus in Context",
            "content": "In optimization problems like this, always remember to check if your answer makes physical sense. We ignore $x = -4$ because you cannot have a negative dimension for a box!"
        },
		 "payhip_link": "https://payhip.com/b/mg5ys", // Replace with your Mensuration/Trig link
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 17 Apr
    {
        "id": "001602",
        "date": "17 Apr 2026",
        "major_area": "Coordinate Geometry & Geometry",
        "topic": "Circle Theorems",
        "subtopic": "Cyclic quadrilaterals",
        "difficulty": "B/C",
        "q": "In a cyclic quadrilateral $ABCD$, $\\angle DAB = (2x + 10)^\\circ$ and $\\angle BCD = (3x - 20)^\\circ$.<br>Calculate the value of $x$.",
        "steps": [
            "Opposite angles in a cyclic quadrilateral sum to $180^\\circ$.",
            "Set up equation: $(2x + 10) + (3x - 20) = 180$.",
            "Simplify: $5x - 10 = 180$.",
            "Add 10: $5x = 190$.",
            "Final Answer: $$x = 38$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Opposite vs. Adjacent",
            "content": "Students often confuse cyclic quadrilateral rules with parallel line rules. Remember: it is the <strong>opposite</strong> angles that add to $180$, not the ones next to each other!"
        },
		 "payhip_link": "https://payhip.com/b/L6skH", // Replace with your Mensuration/Trig link
        "button_text": "Master Coordinate Geometry & Geometry: Download the Full Coordinate Geometry & Geometry Pack"
    },
    // 18 Apr
    {
        "id": "001603",
        "date": "18 Apr 2026",
        "major_area": "Algebra",
        "topic": "Sequences",
        "subtopic": "nth term",
        "difficulty": "A/A*",
        "q": "Find the $n^{th}$ term of the quadratic sequence: $5, 12, 23, 38, 57...$",
        "img": "",
        "steps": [
            "First differences: $7, 11, 15, 19$.",
            "Second differences: $4, 4, 4$.",
            "The coefficient of $n^2$ is half the second difference: $4 \\div 2 = 2$. So, starts with $2n^2$.",
            "Subtract $2n^2$ from original sequence: $(5-2), (12-8), (23-18) \\rightarrow 3, 4, 5$.",
            "Find the $n^{th}$ term of $3, 4, 5$: $n + 2$.",
            "Combine the parts.",
            "Final Answer: $$2n^2 + n + 2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Quadratic Sequence Shortcut",
            "content": "Always remember that the second difference is equal to $2a$. If the second difference is 4, then $a$ is 2. This is the quickest way to start a quadratic $n^{th}$ term problem."
        },
		"payhip_link": "https://payhip.com/b/mg5YS", // Replace with your Mensuration/Trig link
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 19 Apr
    {
        "id": "001604",
        "date": "19 Apr 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Error intervals",
        "difficulty": "B/A",
        "q": "The mass of a bag of sugar is $500\\text{ g}$ correct to the nearest $10\\text{ g}$.<br>Write down the error interval for the mass $m$.",
        "steps": [
            "The degree of accuracy is $10\\text{ g}$.",
            "The error is half of this: $\\pm 5\\text{ g}$.",
            "Lower Bound: $500 - 5 = 495\\text{ g}$.",
            "Upper Bound: $500 + 5 = 505\\text{ g}$.",
            "Final Answer: $$495 \\le m < 505$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Inequality Signs",
            "content": "Notice the difference in the signs! $m$ can be exactly $495$ (so we use $\\le$), but it must be strictly less than $505$ (so we use $<$)."
        },
		"payhip_link": "https://payhip.com/b/XEV2Z", 
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 20 Apr
    {
        "id": "001605",
        "date": "20 Apr 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Solving inequalities",
        "difficulty": "A",
        "q": "Solve the inequality: $x^2 - x - 12 > 0$.",
        "img": "",
        "steps": [
            "Factorise the quadratic: $(x - 4)(x + 3) > 0$.",
            "Critical values are $x = 4$ and $x = -3$.",
            "Sketch the parabola (it is a U-shape).",
            "Identify where the graph is above the x-axis: to the left of $-3$ and to the right of $4$.",
            "Final Answer: $$x < -3\\text{ or } x > 4$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Sketching is Key",
            "content": "Never try to solve a quadratic inequality without a quick sketch! It’s the only way to be $100\\%$ sure whether your answer is one range (e.g., $-3 < x < 4$) or two separate ranges."
        },
		 "payhip_link": "https://payhip.com/b/mg5YS", // Replace with your Mensuration/Trig link
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
	//21 April
	{
        "id": "001608",
        "date": "21 Apr 2026",
        "major_area": "Mensuration and Trigonometry",
        "topic": "3D Shapes",
        "subtopic": "Surface area",
        "difficulty": "B/A",
        "q": "A solid sphere has a radius of $6\\text{ cm}$. A solid cylinder has a radius of $3\\text{ cm}$ and a height of $h\\text{ cm}$.<br>The surface area of the sphere is equal to the total surface area of the cylinder. Find $h$.",
        "steps": [
            "Sphere Surface Area: $4\\pi r^2 = 4\\pi(6^2) = 144\\pi$.",
            "Cylinder Surface Area: $2\\pi r^2 + 2\\pi rh = 2\\pi(3^2) + 2\\pi(3)h$.",
            "Simplify Cylinder: $18\\pi + 6\\pi h$.",
            "Equate: $18\\pi + 6\\pi h = 144\\pi$.",
            "Subtract $18\\pi$: $6\\pi h = 126\\pi$.",
            "Final Answer: $$h = 21$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head teacher's Eye: Total Surface Area",
            "content": "In cylinder problems, 'total surface area' includes the two circular ends ($2\\pi r^2$) plus the curved surface ($2\\pi rh$). Many students forget to include the ends!"
        },
	 "payhip_link": "https://payhip.com/b/KjXoP", // Replace with your Mensuration/Trig link
        "button_text": "Master Mensuration & Trigonometry: Download the Full Mensuration & Trigonometry Pack"
    },
  // 22 April - IGCSE Extended (Functions)
    {
        "id": "003241",
        "date": "22 April 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Notation",
        "subtopic": "Substitution",
        "difficulty": "B/A",
        "q": "The functions $f$ and $g$ are defined by $f(x) = 3x - 5$ and $g(x) = \\dfrac{x + 1}{2}$.<br>(a) Find the composite function $gf(x)$, giving your answer in its simplest form.<br>(b) Find $f^{-1}(x)$.",
        "steps": [
            "For part (a), to find the composite function $gf(x)$, we substitute the entire expression for $f(x)$ into the function $g$. This gives $g(3x - 5) = \\dfrac{(3x - 5) + 1}{2}$.",
            "We then simplify the numerator: $\\dfrac{3x - 4}{2}$.",
            "For part (b), we find the inverse function by setting $y = 3x - 5$ and rearranging the equation to make $x$ the subject.",
            "Adding 5 to both sides gives $y + 5 = 3x$, and dividing by 3 yields $x = \\dfrac{y + 5}{3}$.",
            "Finally, we express the result in inverse function notation.",
            "Final Answer: $$(a)\\ \\dfrac{3x - 4}{2},\\ (b)\\ f^{-1}(x) = \\dfrac{x + 5}{3}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Order of Operations",
            "content": "In composite functions, the order is critical. For $gf(x)$, you must work 'inside out' by applying $f$ first and then using that result as the input for $g$. Reversing this order is the most common reason for lost marks in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 23 April - IGCSE Extended (Calculus/Gradients)
    {
        "id": "003242",
        "date": "23 April 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "subtopic": "Gradient from tangents",
        "difficulty": "A/A*",
        "q": "A curve has the equation $y = x^2 - 6x + 8$.<br>(a) Find the derivative $\\dfrac{dy}{dx}$.<br>(b) Find the equation of the tangent to the curve at the point $(5, 3)$.",
        "steps": [
            "For part (a), we apply the power rule for differentiation to each term: $\\dfrac{dy}{dx} = 2x - 6$.",
            "For part (b), we find the gradient of the tangent at the specific point by substituting $x = 5$ into the derivative: $m = 2(5) - 6 = 4$.",
            "Now that we have the gradient ($m = 4$) and a point $(5, 3)$, we use the straight-line formula $y - y_1 = m(x - x_1)$.",
            "Substituting the values: $y - 3 = 4(x - 5)$.",
            "Expanding and simplifying gives $y - 3 = 4x - 20$, which rearranges to the final linear equation.",
            "Final Answer: $$y = 4x - 17$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Connecting Gradient and Tangent",
            "content": "This question bridges the gap between pure calculus and coordinate geometry. Students must understand that the derivative $\\dfrac{dy}{dx}$ provides a general formula for the gradient, but to find a specific tangent, they must evaluate that formula at a single numerical point."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 24 April - IGCSE Extended (Similar Solids)
    {
        "id": "003243",
        "date": "24 April 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Similar shapes",
        "difficulty": "A/A*",
        "q": "Two mathematically similar solids have volumes of $54\\text{ cm}^3$ and $128\\text{ cm}^3$ respectively. The surface area of the larger solid is $160\\text{ cm}^2$. Calculate the surface area of the smaller solid.",
        "steps": [
            "We begin by finding the volume scale factor ($k^3$) by dividing the two volumes: $k^3 = \\dfrac{128}{54}$.",
            "Simplifying the fraction gives $k^3 = \\dfrac{64}{27}$.",
            "To find the linear scale factor ($k$), we take the cube root of the volume scale factor: $k = \\sqrt[3]{\\dfrac{64}{27}} = \\dfrac{4}{3}$.",
            "The area scale factor ($k^2$) is the square of the linear scale factor: $k^2 = \\left(\\dfrac{4}{3}\\right)^2 = \\dfrac{16}{9}$.",
            "Finally, to find the smaller surface area, we divide the larger area by the area scale factor: $160 \\div \\dfrac{16}{9} = 160 \\times \\dfrac{9}{16}$.",
            "Final Answer: $$90\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Dimensional Bridge",
            "content": "You cannot convert volume directly to area. You must always 'bridge' through the linear scale factor ($k$). I suggest my students explicitly write down $k, k^2$ and $k^3$ as a standard procedure to avoid the common mistake of using the wrong power."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
 // 25 Apr
    {
        "id": "001612",
        "date": "25 Apr 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations in standard form",
        "difficulty": "B/C",
        "q": "Work out $(4.2 \times 10^5) + (3.8 \times 10^4)$. Give your answer in standard form.",
        "steps": [
            "Make the powers of 10 the same: $3.8 \times 10^4 = 0.38 \times 10^5$.",
            "Add the numbers: $4.2 + 0.38 = 4.58$.",
            "Combine with the power: $4.58 \times 10^5$.",
            "Final Answer: $$4.58 \times 10^5$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Adding in Standard Form",
            "content": "You cannot simply add the numbers if the powers of 10 are different! Always convert them to the same power first (usually the larger one) before adding."
        },
		 "payhip_link": "https://payhip.com/b/XEV2Z", // Replace with your Mensuration/Trig link
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 26 Apr
    {
        "id": "001613",
        "date": "26 Apr 2026",
        "major_area": "Coordinate Geometry & Geometry",
        "topic": "Similarity & Congruence",
        "subtopic": "Scale factors",
        "difficulty": "8/9",
        "q": "The ratio of the heights of two similar cylinders is $2:5$.<br>The volume of the smaller cylinder is $80\text{ cm}^3$.<br>Calculate the volume of the larger cylinder.",
        "steps": [
            "Linear scale factor $k = \\frac{5}{2} = 2.5$.",
            "Volume scale factor $k^3 = 2.5^3 = 15.625$.",
            "Multiply volume: $80 \\times 15.625$.",
            "Final Answer: $$1250\text{ cm}^3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head teacher's Eye: Don't Forget The Rule",
            "content": "If the Linear scale factor is $k$ then the Area scale factor is $k^2$ and the Volume scale factor is $k^3$ and you cannot go directly between Area and Volume in either direction."
        },
		"payhip_link": "https://payhip.com/b/L6skH", // Replace with your Mensuration/Trig link
        "button_text": "Master Coordinate Geometry & Geometry: Download the Full Coordinate Geometry & Geometry Pack"
    },
    // 27 Apr
    {
        "id": "001614",
        "date": "27 Apr 2026",
        "major_area": "Algebra",
        "topic": "Expanding Brackets",
        "subtopic": "Triple brackets",
        "difficulty": "6/7",
        "q": "Expand and simplify fully: $(x + 2)(x - 3)(x + 4)$.",
        "steps": [
            "Expand first two: $(x+2)(x-3) = x^2 - x - 6$.",
            "Multiply result by $(x+4)$: $(x^2 - x - 6)(x + 4)$.",
            "Distribute: $x(x^2 - x - 6) + 4(x^2 - x - 6)$.",
            "Simplify: $x^3 - x^2 - 6x + 4x^2 - 4x - 24$.",
            "Final Answer: $$x^3 + 3x^2 - 10x - 24$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: One Step at a Time",
            "content": "Never try to expand all three brackets at once. Expand two, simplify the result, and then multiply by the third. It’s the only way to avoid losing terms."
        },
		 "payhip_link": "https://payhip.com/b/mg5YS", // Replace with your Mensuration/Trig link
        "button_text": "Master Alkgebra: Download the Full Algebra Pack"
    },
    // 28 Apr
    {
        "id": "001615",
        "date": "28 Apr 2026",
        "major_area": "Mensuration and Trigonometry",
        "topic": "Trigonometry",
        "subtopic": "Sine Rule",
        "difficulty": "7/8",
        "q": "In triangle $ABC$, $AB = 8\text{ cm}$, $BC = 11\text{ cm}$ and angle $BAC = 75^\circ$.<br>Calculate the size of angle $ACB$. Give your answer to 1 decimal place.",
		"img": "images/28_apr_i.png",
        "steps": [
            "Use the Sine Rule: $\\dfrac{\\sin C}{c} = \\dfrac{\\sin A}{a}$.",
            "Substitute values: $\\dfrac{\\sin C}{8} = \\dfrac{\\sin 75}{11}$.",
            "Rearrange: $\\sin C = \\dfrac{8 \\times \\sin 75}{11}$.",
            "Calculate $\\sin C \\approx 0.7025...$",
            "Inverse sine: $C = \sin^{-1}(0.7025...)$",
            "Final Answer: $$44.6^\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Side-Angle Pairs",
            "content": "To use the Sine Rule, you must have a 'known pair' (a side and its opposite angle). Here, we have $11\text{ cm}$ and $75^\circ$. Always check for this pair before deciding between Sine and Cosine rules."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master Mensuration & Trigonometry: Download the Full Pack"
    },
    // 29 Apr
    {
        "id": "001616",
        "date": "29 Apr 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Line–Curve Intersections",
        "difficulty": "A/A*",
        "q": "Find the coordinates of the two points where the line $y = 2x + 1$ intersects the circle $x^2 + y^2 = 13$.",
        "img": "",
        "steps": [
            "Substitute the linear equation $y = 2x + 1$ into the circle equation: $$x^2 + (2x + 1)^2 = 13$$",
            "Expand the bracket: $$x^2 + (4x^2 + 4x + 1) = 13$$",
            "Simplify and rearrange into a standard quadratic form: $$5x^2 + 4x - 12 = 0$$",
            "Factorise the quadratic: $$(5x - 6)(x + 2) = 0$$",
            "Find the $x$-values: $$x = 1.2 \\quad \\text{and} \\quad x = -2$$",
            "Substitute $x$ back into the linear equation to find $y$:",
            "If $x = 1.2, \\ y = 2(1.2) + 1 = 3.4$",
            "If $x = -2, \\ y = 2(-2) + 1 = -3$",
            "Final Answer: $$(1.2, 3.4) \\text{ and } (-2, -3)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Substitution is Key",
            "content": "In these 'A*' simultaneous equations, you must always substitute the linear expression into the quadratic one. Once you have your $x$ values, \\textbf{always} plug them back into the linear equation to find $y$—it is much faster and you are less likely to make an error than if you used the circle equation!"
        },
        "payhip_link": "https://payhip.com/bradleysmaths", // Your GCSE Algebra link
        "button_text": "Master Algebra: Download the GCSE Algebra Pack" 
    },
 // 30 Apr
    // 30 Apr
    {
        "id": "001617",
        "date": "30 Apr 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations in standard form",
        "difficulty": "B/A",
        "q": "The distance between Earth and a distant planet is $1.65 \times 10^8 \text{ km}$.<br>A spacecraft travels at an average speed of $5.5 \times 10^4 \text{ km/h}$.<br>(a) Calculate the time taken for the journey in hours. Give your answer in standard form.<br>(b) Calculate the time taken for the journey in days.",
        "img": "",
        "steps": [
            "(a) Use the formula: $\\text{Time} = \\dfrac{\\text{Distance}}{\\text{Speed}}$.",
            "Substitute the values: $\\text{Time} = \\dfrac{1.65 \\times 10^8}{5.5 \\times 10^4}$.",
            "Divide the numbers: $1.65 \\div 5.5 = 0.3$.",
            "Divide the powers of ten: $10^8 \\div 10^4 = 10^4$.",
            "Combine and adjust to correct standard form: $0.3 \\times 10^4 = 3 \\times 10^3$ hours.",
            "(b) Convert hours to days: $3000 \\div 24$.",
            "Final Answer: $$(a)\\ 3 \\times 10^3\\text{ hours},\\ (b)\\ 125\\text{ days}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Standard Form Protocol",
            "content": "When dividing in standard form, always deal with the numbers first and the powers of 10 second. A common pitfall is leaving your part (a) answer as $0.3 \\times 10^4$. Remember, for true standard form, the first number \\textbf{must} be between 1 and 10!"
        },
        "payhip_link": "https://payhip.com/b/XEV2Z", // Your IGCSE Number Pack link
        "button_text": "Master Number: Download the Full Number Pack" 
    }
];
