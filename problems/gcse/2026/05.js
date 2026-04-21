const problemBank = [
    // 1 May
    {
        "id": "002101",
        "date": "1 May 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Rationalising denominators",
        "difficulty": "8/9",
        "q": "Simplify fully $\\dfrac{12}{\\sqrt{3}} + \\sqrt{27}$.<br>Give your answer in the form $k\\sqrt{3}$ where $k$ is an integer.",
        "steps": [
            "Rationalise the first term: $\\dfrac{12 \\times \\sqrt{3}}{\\sqrt{3} \\times \\sqrt{3}} = \\dfrac{12\\sqrt{3}}{3} = 4\\sqrt{3}$.",
            "Simplify the second term: $\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}$.",
            "Add the terms together: $4\\sqrt{3} + 3\\sqrt{3} = 7\\sqrt{3}$.",
            "Final Answer: $$7\\sqrt{3}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Common Radicals",
            "content": "In non-calculator papers, if a question asks for an answer in the form $k\\sqrt{3}$, it is a massive hint that every term in the expression can be simplified to something involving $\\sqrt{3}$."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 2 May
    {
        "id": "002102",
        "date": "2 May 2026",
        "major_area": "Algebra",
        "topic": "Linear Equations",
        "subtopic": "Unknowns on both sides",
        "difficulty": "4/5",
        "q": "Solve the equation: $5(x - 3) = 2x + 9$.",
        "steps": [
            "Expand the bracket: $5x - 15 = 2x + 9$.",
            "Subtract $2x$ from both sides: $3x - 15 = 9$.",
            "Add 15 to both sides: $3x = 24$.",
            "Divide by 3.",
            "Final Answer: $$x = 8$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Expansion Trap",
            "content": "When expanding $5(x - 3)$, the most common error is forgetting to multiply the $-3$ by 5. Always ensure you distribute the multiplier to every term inside."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 3 May
    {
        "id": "002103",
        "date": "3 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Cosine rule",
        "difficulty": "8/9",
        "img": "images/May_03_g.png",
        "q": "In triangle $ABC$, $AB = 8\\text{ cm}$, $AC = 11\\text{ cm}$ and angle $BAC = 72^\\circ$.<br>(a) Calculate the length of $BC$. Give your answer to 3 significant figures.<br>(b) Calculate the area of the triangle.",
        "steps": [
            "(a) Use the Cosine Rule: $a^2 = b^2 + c^2 - 2bc \\cos(A)$.",
            "$a^2 = 11^2 + 8^2 - 2(11)(8) \\cos(72^\\circ)$.",
            "$a^2 = 121 + 64 - 176 \\cos(72^\\circ) = 130.61...$.",
            "$a = \\sqrt{130.61...} = 11.4\\text{ cm}$.",
            "(b) Area $= \\frac{1}{2}bc \\sin(A) = \\frac{1}{2}(11)(8) \\sin(72^\\circ)$.",
            "Final Answer: $$(a)\\ 11.4\\text{ cm},\\ (b)\\ 41.8\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: SAS Recognition",
            "content": "When you have Side-Angle-Side (two sides and the included angle), the Cosine Rule and the Sine Area formula are your best friends."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 4 May
    {
        "id": "002104",
        "date": "4 May 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations in standard form",
        "difficulty": "6/7",
        "q": "Work out the value of $(4 \\times 10^7) \\times (8 \\times 10^{-3})$.<br>Give your answer in standard form.",
        "steps": [
            "Multiply the numbers: $4 \\times 8 = 32$.",
            "Multiply the powers (add indices): $10^7 \\times 10^{-3} = 10^4$.",
            "Initial result: $32 \\times 10^4$.",
            "Convert to standard form: $3.2 \\times 10^1 \\times 10^4$.",
            "Final Answer: $$3.2 \\times 10^5$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Final Check",
            "content": "Many students stop at $32 \\times 10^4$. Remember, for standard form, the first number must be between 1 and 10."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 5 May
    {
        "id": "002105",
        "date": "5 May 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Percentage Change",
        "subtopic": "Increase/decrease",
        "difficulty": "4/5",
        "q": "A car was bought for £18,000. Its value depreciated by 15% in the first year and then by 10% of its new value in the second year.<br>Calculate the value of the car after 2 years.",
        "steps": [
            "Year 1 multiplier: $1 - 0.15 = 0.85$.",
            "Value after Year 1: $18000 \\times 0.85 = £15,300$.",
            "Year 2 multiplier: $1 - 0.10 = 0.90$.",
            "Value after Year 2: $15300 \\times 0.90$.",
            "Final Answer: $$£13,770$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Avoid the Addition Error",
            "content": "Depreciating by 15% then 10% is not the same as a single 25% drop. Always apply percentages to the current value."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number & Ratio: Download the Full Number Pack"
    },
    // 6 May
    {
        "id": "002106",
        "date": "6 May 2026",
        "major_area": "Statistics",
        "topic": "Histograms",
        "subtopic": "Frequency density",
        "difficulty": "7/8",
        "img": "images/May_06_g.png",
        "q": "The table shows information about the weights of 50 bags.<br><br><table style='border-collapse: collapse; width: 100%; text-align: center;' border='1'><tr><th style='padding: 8px;'>Weight ($w$ grams)</th><th style='padding: 8px;'>Frequency</th></tr><tr><td style='padding: 5px;'>$0 < w \\le 10$</td><td style='padding: 5px;'>8</td></tr><tr><td style='padding: 5px;'>$10 < w \\le 25$</td><td style='padding: 5px;'>15</td></tr><tr><td style='padding: 5px;'>$25 < w \\le 45$</td><td style='padding: 5px;'>14</td></tr><tr><td style='padding: 5px;'>$45 < w \\le 50$</td><td style='padding: 5px;'>13</td></tr></table><br>(a) Calculate the frequency density for each class.<br>(b) State which bar would be the tallest on a histogram.",
        "steps": [
            "FD ($0-10$): $8 \\div 10 = 0.8$.",
            "FD ($10-25$): $15 \\div 15 = 1.0$.",
            "FD ($25-45$): $14 \\div 20 = 0.7$.",
            "FD ($45-50$): $13 \\div 5 = 2.6$.",
            "The tallest bar corresponds to the highest FD ($45 < w \\le 50$).",
            "Final Answer: $$45 < w \\le 50$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Area is Frequency",
            "content": "In a histogram, the area of the bar represents the frequency, not the height."
        },
        "payhip_link": "https://payhip.com/b/RVbqM",
        "button_text": "Master Statistics: Download the Full Probability and Statistics Pack"
    },
    // 7 May
    {
        "id": "002107",
        "date": "7 May 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Simplifying",
        "difficulty": "8/9",
        "q": "Simplify fully: $\\dfrac{2x^2 + 5x - 3}{x^2 - 9}$.",
        "steps": [
            "Factorise the numerator: $(2x - 1)(x + 3)$.",
            "Factorise the denominator: $(x - 3)(x + 3)$.",
            "Cancel the common factor $(x + 3)$.",
            "Final Answer: $$\\dfrac{2x - 1}{x - 3}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Hint in the Question",
            "content": "These questions are built to simplify. Use the easier-to-factorise denominator to help you identify a factor of the harder numerator."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 8 May
    {
        "id": "002108",
        "date": "8 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Tangents",
        "difficulty": "7/8",
        "img": "images/May_08_g.png",
        "q": "$A$ and $B$ are points on a circle with centre $O$. $PA$ and $PB$ are tangents to the circle. Angle $APB = 50^\\circ$.<br>Calculate the size of angle $OAB$.",
        "steps": [
            "Angle $OAP$ and $OBP$ are $90^\\circ$ (Tangent-Radius).",
            "Angle $AOB = 360 - 90 - 90 - 50 = 130^\\circ$.",
            "Triangle $OAB$ is isosceles (radii are equal).",
            "Angle $OAB = (180 - 130) \\div 2$.",
            "Final Answer: $$25^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Isosceles Radius",
            "content": "Radii are your best friends in circle theorems. Whenever you see two radii forming a triangle, mark it as isosceles."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 9 May
    {
        "id": "002109",
        "date": "9 May 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Direct & Inverse Proportion",
        "subtopic": "Proportion equations",
        "difficulty": "6/7",
        "q": "$P$ is inversely proportional to the square root of $m$. When $m = 36, P = 4$.<br>(a) Find a formula for $P$ in terms of $m$.<br>(b) Work out the value of $P$ when $m = 64$.",
        "steps": [
            "(a) $P = k/\\sqrt{m} \\implies 4 = k/\\sqrt{36} \\implies k = 24$.",
            "(b) $P = 24/\\sqrt{64} = 24/8 = 3$.",
            "Final Answer: $$(a)\\ P = \\dfrac{24}{\\sqrt{m}},\\ (b)\\ 3$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Root vs Square",
            "content": "Read carefully! Square root and Square are not the same. Misreading this loses all marks."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number & Ratio: Download the Full Number Pack"
    },
    // 10 May
    {
        "id": "002110",
        "date": "10 May 2026",
        "major_area": "Probability",
        "topic": "Basic Probability",
        "subtopic": "Venn Diagrams",
        "difficulty": "6/7",
        "img": "images/May_10_g.png",
        "q": "The universal set $\\xi = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$.<br>$A = \\{\\text{prime numbers}\\}$<br>$B = \\{\\text{factors of 12}\\}$<br><br>(a) Represent this in a Venn diagram.<br>(b) Find $P(A \\cap B')$.",
        "steps": [
            "Members: $A = \\{2, 3, 5, 7\\}$, $B = \\{1, 2, 3, 4, 6\\}$.",
            "Intersection $A \\cap B = \\{2, 3\\}$.",
            "Region $A$ only contains $\\{5, 7\\}$.",
            "Region $B$ only contains $\\{1, 4, 6\\}$.",
            "Outside: $\\{8, 9, 10\\}$.",
            "Final Answer: $$\\frac{2}{10} \\text{ (or } 0.2) <br><img src='images/May_10_sol_g.png' alt='Venn Solution' style='max-width:300px;'>$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Order of Entry",
            "content": "Always fill the intersection first, then subtract from the totals to fill the 'only' regions."
        },
        "payhip_link": "https://payhip.com/b/RVbqM",
        "button_text": "Master Probability: Download the Full Probability and Statistics Pack"
    },
    // 11 May
    {
        "id": "002111",
        "date": "11 May 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Transformations of graphs",
        "difficulty": "8/9",
        "img": "images/May_11_g.png",
        "q": "The graph of $y = f(x)$ has a turning point with the coordinates $(3, -2)$. State the coordinates of the turning point for the following transformed graphs:<br>(a) $y = f(x + 2)$ <br>(b) $y = f(x) + 5$ <br>(c) $y = -f(x)$.",
        "steps": [
            "For part (a), the transformation $f(x + 2)$ represents a horizontal translation of 2 units to the left. Therefore, we subtract 2 from the $x$-coordinate, resulting in the point $(1, -2)$.",
            "For part (b), the transformation $f(x) + 5$ represents a vertical translation of 5 units upwards. We add 5 to the $y$-coordinate, resulting in the point $(3, 3)$.",
            "For part (c), the transformation $-f(x)$ represents a reflection in the $x$-axis. This changes the sign of the $y$-coordinate, resulting in the point $(3, 2)$.",
            "Final Answer: $$(a)\ (1, -2),\ (b)\ (3, 3),\ (c)\ (3, 2)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Inside vs. Outside Operations",
            "content": "A fundamental rule for students to master is the distinction between 'inside' and 'outside' operations. Operations inside the function brackets, such as $f(x + a)$, result in a horizontal translation and, crucially, act in the <strong>opposite</strong> direction to the sign. Conversely, operations outside the brackets affect the $y$-coordinates directly and logically."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 12 May
    {
        "id": "002112",
        "date": "12 May 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Upper and lower bounds",
        "difficulty": "6/7",
        "q": "The value of $A$ is calculated using the formula $A = \dfrac{b}{c}$. Given that $b = 400$ correct to the nearest 10, and $c = 25$ correct to the nearest 5, calculate the upper bound for the value of $A$.",
        "steps": [
            "First, we must determine the upper and lower bounds for both variables. For $b$, the bounds are $395 \\le b < 405$. For $c$, the bounds are $22.5 \\le c < 27.5$.",
            "To calculate the maximum possible value (the upper bound) of a division, we must divide the maximum possible numerator by the minimum possible denominator.",
            "We calculate the upper bound of $A$ by dividing 405 by 22.5.",
            "Final Answer: $$18$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Maximising the Quotient",
            "content": "This is a common area for calculation errors. Students often instinctively divide two upper bounds. I always instruct my classes to pause and consider the logic: to obtain the largest possible result in a division, you must divide the largest available 'cake' by the smallest possible 'number of people'."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number & Ratio: Download the Full Number Pack"
    },
    // 13 May
    {
        "id": "002113",
        "date": "13 May 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Substitution",
        "difficulty": "8/9",
        "q": "Solve the following simultaneous equations algebraically:<br>$x^2 + y^2 = 25$<br>$y = 2x + 5$",
        "steps": [
            "We begin by substituting the expression for $y$ from the second equation into the first equation, giving $x^2 + (2x + 5)^2 = 25$.",
            "Expanding the brackets yields $x^2 + 4x^2 + 20x + 25 = 25$, which simplifies to $5x^2 + 20x = 0$.",
            "Factoring the quadratic expression gives $5x(x + 4) = 0$, from which we find the two possible $x$-values: $x = 0$ and $x = -4$.",
            "Finally, we substitute these values back into the linear equation to find the corresponding $y$-coordinates: if $x = 0, y = 5$; if $x = -4, y = -3$.",
            "Final Answer: $$(0, 5) \text{ and } (-4, -3)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Coordinate Pairs",
            "content": "In higher-tier algebra, precision in presentation is vital. When solving for two variables, candidates must present their answers as clear coordinate pairs. This reflects the geometric reality of the problem: you are finding the two specific points where a straight line intersects a circle."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 14 May
    {
        "id": "002114",
        "date": "14 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Polygons",
        "subtopic": "Interior angles",
        "difficulty": "5/6",
        "q": "The interior angle of a regular polygon is $162^\\circ$. Calculate the number of sides that this polygon has.",
        "steps": [
            "We first calculate the size of the exterior angle by subtracting the interior angle from $180^\\circ$, as they both lie on a straight line. This gives $180 - 162 = 18^\\circ$.",
            "The sum of the exterior angles of any polygon is always $360^\\circ$.",
            "We divide $360$ by the size of one exterior angle, $18$, to determine the total number of sides.",
            "Final Answer: $$20$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Exterior Advantage",
            "content": "While one can use the interior angle formula $(n-2) \\times \\dfrac{180}{n} = 162$, it is algebraically more taxing. I always advise students that the 'exterior angle route' is significantly faster and less prone to calculation errors."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 15 May
    {
        "id": "002115",
        "date": "15 May 2026",
        "major_area": "Statistics",
        "topic": "Cumulative Frequency",
        "subtopic": "Median & IQR",
        "difficulty": "6/7",
        "img": "images/May_15_g.png",
        "q": "The table below provides information regarding the waiting times for 80 individuals at a hospital.<br><br><table style='border-collapse: collapse; width: 100%; text-align: center;' border='1'><tr><th style='padding: 8px;'>Time ($t$ minutes)</th><th style='padding: 8px;'>Frequency</th></tr><tr><td style='padding: 5px;'>$0 < t \le 10$</td><td style='padding: 5px;'>5</td></tr><tr><td style='padding: 5px;'>$10 < t \le 20$</td><td style='padding: 5px;'>12</td></tr><tr><td style='padding: 5px;'>$20 < t \le 30$</td><td style='padding: 5px;'>25</td></tr><tr><td style='padding: 5px;'>$30 < t \le 40$</td><td style='padding: 5px;'>28</td></tr><tr><td style='padding: 5px;'>$40 < t \le 50$</td><td style='padding: 5px;'>10</td></tr></table><br>(a) Draw a cumulative frequency graph for this data.<br>(b) Use your graph to find an estimate for the interquartile range (IQR).",
        "steps": [
            "We begin by calculating the cumulative frequencies for the intervals: 5, 17, 42, 70, and 80.",
            "These values must be plotted against the upper bound of each time interval: (10, 5), (20, 17), (30, 42), (40, 70), and (50, 80).",
            "To estimate the interquartile range, we find the times corresponding to the 20th and 60th values on the vertical axis of the graph.",
            "The values from the graph are $Q_3 \\approx 36.5$ and $Q_1 \\approx 21.5$, we subtract to find the IQR.",
            "Final Answer: $$15\\text{ minutes}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Precise Plotting",
            "content": "A frequent error in statistical diagrams is plotting cumulative frequency at the midpoint of the group. When plotting cumulative frequency the value represents the total <strong>up to</strong> a certain point; therefore, points must be plotted at the <strong>upper bound</strong> of the interval."
        },
        "payhip_link": "https://payhip.com/b/RVbqM",
        "button_text": "Master Probability: Download the Full Probability and Statistics Pack"
    },
    // 16 May
    {
        "id": "002116",
        "date": "16 May 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Rearranging with powers",
        "difficulty": "7/8",
        "q": "Rearrange the following formula to make $x$ the subject: $y = \\dfrac{x^2 + a}{x^2 - b}$.",
        "steps": [
            "We start by multiplying both sides of the equation by $(x^2 - b)$ to eliminate the denominator, giving $y(x^2 - b) = x^2 + a$.",
            "Next, we expand the brackets on the left-hand side: $yx^2 - yb = x^2 + a$.",
            "We then collect all terms containing $x^2$ on one side and the remaining terms on the other: $yx^2 - x^2 = a + yb$.",
            "By factoring out $x^2$, we obtain $x^2(y - 1) = a + yb$, which allows us to isolate $x^2$.",
            "Finally, we divide by $(y - 1)$ and take the square root of the entire expression.",
            "Final Answer: $$x = \\sqrt{\\dfrac{a + yb}{y - 1}}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Factorising 'Secret'",
            "content": "This is a sophisticated algebraic skill. When the intended subject appears in multiple terms, students must understand that isolating those terms and <strong>factorising</strong> is the only path to a solution. Mastery of this step differentiates Grade 7 and 8 candidates."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 17 May
    {
        "id": "002117",
        "date": "17 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Vector addition",
        "difficulty": "8/9",
        "img": "images/May_17_g.png",
        "q": "$OABC$ is a quadrilateral where the vector $\\vec{OA} = 3\\mathbf{a}$ and the vector $\\vec{OC} = 2\\mathbf{c}$. $B$ is a point such that the vector $\vec{CB} = \\mathbf{a}$. Given that $M$ is the midpoint of the line segment $AB$, find the vector $\\vec{OM}$ in terms of $\\mathbf{a}$ and $\\mathbf{c}$.",
        "steps": [
            "We first determine the vector $\\vec{AB}$ by following the path from $A$ to $O$, then $O$ to $C$, and finally $C$ to $B$: $\\vec{AB} = -3\\mathbf{a} + 2\\mathbf{c} + \\mathbf{a} = 2\\mathbf{c} - 2\\mathbf{a}$.",
            "Since $M$ is the midpoint of $AB$, the vector $\\vec{AM}$ is half of $\\vec{AB}$, which is $\\mathbf{c} - \\mathbf{a}$.",
            "To find $\\vec{OM}$, we follow the vector path from $O$ to $A$ and then from $A$ to $M$: $\\vec{OM} = 3\\mathbf{a} + (\\mathbf{c} - \\mathbf{a})$.",
            "Simplifying this expression gives the final vector result.",
            "Final Answer: $$2\\mathbf{a} + \\mathbf{c}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Vector Roadmap",
            "content": "I encourage students to view vector problems as navigating a roadmap. Any valid path from the start to the destination will yield the correct result, provided the directions are combined and simplified correctly. Drawing the journey often prevents sign errors."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 18 May
    {
        "id": "002118",
        "date": "18 May 2026",
        "major_area": "Algebra",
        "topic": "Exponential Growth & Decay",
        "subtopic": [],
        "difficulty": "7/8",
        "q": "The population of a bacteria colony is observed to double every 4 hours. At 12:00 PM on Monday, there are 1,000 bacteria present. Calculate the total number of bacteria that will be present in the colony at 12:00 PM on Tuesday.",
        "steps": [
            "First, we establish that exactly 24 hours have elapsed between Monday at noon and Tuesday at noon.",
            "We then calculate the number of doubling periods by dividing 24 hours by the 4-hour cycle, resulting in 6 periods.",
            "We apply the exponential growth formula: $1000 \\times 2^6$.",
            "Given that $2^6 = 64$, we multiply 1000 by 64 to find the final population.",
            "Final Answer: $$64,000$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Fluency with Powers",
            "content": "Numerical fluency is essential for Higher Tier success. \my advice to students is to be familiar with the powers of 2 up to $2^{10}$. In non-calculator papers, this knowledge allows them to bypass tedious arithmetic and focus on the conceptual demands of the question."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 19 May
    {
        "id": "002119",
        "date": "19 May 2026",
        "major_area": "Statistics",
        "topic": "Box Plots",
        "subtopic": [],
        "difficulty": "5/6",
        "img": "images/May_19_g.png",
        "q": "The test scores for two classes, A and B, are compared. Class A has a median score of 65 and an interquartile range (IQR) of 20. Class B has a median score of 72 and an interquartile range of 12. Provide two comparative statements regarding the distributions of the scores.",
        "steps": [
            "To compare the average performance, we observe that Class B had a higher median score than Class A (72 compared to 65).",
            "To compare the consistency of performance, we observe that Class B had a smaller interquartile range than Class A (12 compared to 20).",
            "We conclude that Class B performed better on average and displayed greater consistency in their results.",
            "Final Answer: $$\\text{Class B has higher average and higher consistency}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Standard for Comparison",
            "content": "Whenever an examiner asks for a 'comparison', students must address two specific features: one measure of central tendency (the median) and one measure of dispersion (the IQR or range). Crucially, these must be stated in the context of the problem, using words like 'better' or 'consistent'."
        },
        "payhip_link": "https://payhip.com/b/RVbqM",
        "button_text": "Master Statistics: Download the Full Probability and Statistics Pack"
    },
    // 20 May
    {
        "id": "002120",
        "date": "20 May 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "General Proof",
        "difficulty": "8/9",
        "q": "Prove algebraically that the difference between the squares of any two consecutive odd numbers is always a multiple of 8.",
        "steps": [
            "We define any two consecutive odd numbers algebraically as $(2n + 1)$ and $(2n - 1)$, where $n$ is an integer.",
            "The expression for the difference between their squares is $(2n + 1)^2 - (2n - 1)^2$.",
            "Expanding the brackets gives $(4n^2 + 4n + 1) - (4n^2 - 4n + 1)$.",
            "By collecting like terms and distributing the negative sign, we simplify the expression to $8n$.",
            "Since $8n$ is clearly a multiple of 8 for any integer $n$, the proof is complete.",
            "Final Answer: $$8n \text{ is a multiple of 8}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Sign Management in Proof",
            "content": "The 'Difference of Two Squares' expansion is a frequent stumbling block. Students often fail to distribute the subtraction correctly across the second bracket. Precision here is the difference between a full-mark proof and a failed attempt."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 21 May
    {
        "id": "002121",
        "date": "21 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "3D Pythagoras",
        "difficulty": "8/9",
        "img": "images/May_21_g.png",
        "q": "A square-based pyramid has a base with side lengths of 10 cm and a vertical height of 12 cm. Calculate the slant height of the pyramid, which is defined as the distance from the apex to the midpoint of one of the base edges.",
        "steps": [
            "We identify a right-angled triangle formed by the vertical height, the distance from the center of the base to the midpoint of an edge, and the slant height ($s$).",
            "The distance from the center of the square base to the midpoint of a 10 cm side is exactly 5 cm.",
            "We apply Pythagoras' Theorem: $s^2 = 12^2 + 5^2$.",
            "Calculating the result gives $s^2 = 144 + 25 = 169$. Taking the square root gives the final slant height.",
            "Final Answer: $$13\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Extracting 2D Planes",
            "content": "The key to 3D geometry is visualization. I encourage my students to 'extract' the relevant 2D right-angled triangle from the solid shape and sketch it separately. This clarifies which dimensions are being used and makes the application of Pythagoras or SOHCAHTOA much simpler."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 22 May
    {
        "id": "002122",
        "date": "22 May 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Ratio",
        "subtopic": "Sharing in a ratio",
        "difficulty": "6/7",
        "q": "The ratio of red pens to blue pens in a box is $2 : 3$. If 10 more red pens are added to the box, the ratio becomes $1 : 1$. Calculate the total number of pens that were in the box originally.",
        "steps": [
            "We let the original number of red pens be $2x$ and the original number of blue pens be $3x$.",
            "After adding 10 red pens, we can form the equation: $\\dfrac{2x + 10}{3x} = \\dfrac{1}{1}$.",
            "Cross-multiplying gives $2x + 10 = 3x$, which we solve to find that $x = 10$.",
            "The original red pens were $2(10) = 20$ and the original blue pens were $3(10) = 30$. We then find the total sum.",
            "Final Answer: $$50$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Bridging Ratio and Algebra",
            "content": "When a ratio 'changes' due to an addition or subtraction, I always guide students away from using 'parts' and toward using algebra. Defining the quantities as $2x$ and $3x$ transforms a word problem into a verifiable linear equation."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 23 May
    {
        "id": "002123",
        "date": "23 May 2026",
        "major_area": "Number",
        "topic": "Decimals",
        "subtopic": "Converting between decimals and fractions",
        "difficulty": "7/8",
        "q": "Show that the recurring decimal $0.4\\dot{7}$ (where only the 7 is recurring) can be written as the fraction $\\dfrac{43}{90}$ in its simplest form.",
        "steps": [
            "We begin by setting $x = 0.4777...$.",
            "Multiplying by 10 gives $10x = 4.777...$ and multiplying by 100 gives $100x = 47.777...$.",
            "By subtracting $10x$ from $100x$, we eliminate the recurring part: $90x = 43$.",
            "We divide by 90 to express $x$ as a fraction.",
            "Final Answer: $$\\dfrac{43}{90}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Aligning the Recurring Digits",
            "content": "A common student pitfall is subtracting $x$ from $10x$, which in this case does not eliminate the recurring digits. One must ensure that the digits following the decimal point match <strong>perfectly</strong> before performing the subtraction."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number & Ratio: Download the Full Number Pack"
    },
    // 24 May
    {
        "id": "002124",
        "date": "24 May 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Quadratic graphs",
        "difficulty": "7/8",
        "q": "A curve has the equation $y = x^2 - 6x + 10$. By completing the square, determine the coordinates of the turning point of the curve.",
        "steps": [
            "We rewrite the equation by halving the coefficient of $x$ to form the square: $(x - 3)^2$.",
            "Expanding $(x - 3)^2$ gives $x^2 - 6x + 9$. To reach the $+10$ in the original equation, we must add $1$.",
            "The completed square form is $y = (x - 3)^2 + 1$.",
            "The turning point occurs at the values $(h, k)$ where the equation is in the form $y = (x - h)^2 + k$.",
            "Final Answer: $$(3, 1)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Sign Reversal",
            "content": "I tell my students to remember that the $x$-coordinate of the turning point is always the value of $x$ which makes the squared bbracket equal to zero so if the bracket is $(x-3)^2$ the the $x$-coordinate is +3, while the $y$-coordinate remains exactly as it appears outside."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 25 May
    {
        "id": "002125",
        "date": "25 May 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams",
        "subtopic": "Without replacement",
        "difficulty": "8/9",
        "q": "A bag contains 7 red balls and 3 blue balls. Two balls are selected at random without replacement. Calculate the probability that at least one of the balls selected is blue.",
        "steps": [
            "The most efficient method is to calculate the probability of the opposite event (selecting zero blue balls) and subtract it from 1.",
            "The probability of selecting two red balls is $\\dfrac{7}{10} \\times \\dfrac{6}{9}$, which equals $\\dfrac{42}{90}$.",
            "We subtract this from 1 to find the probability of selecting at least one blue ball: $1 - \\dfrac{42}{90} = \\dfrac{48}{90}$.",
            "We simplify the fraction to its lowest terms.",
            "Final Answer: $$\\dfrac{8}{15}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Complementary Shortcut",
            "content": "Candidates often waste valuable time calculating every possible 'blue' combination (RB, BR, BB). I always highlight the 'at least' phrasing as a signal to use the complementary event ($1 - P(\\text{none})$), which is far more efficient."
        },
		"payhip_link": "https://payhip.com/b/RVbqM",
        "button_text": "Master Statistics: Download the Full Probability and Statistics Pack"
    },
    // 26 May
    {
        "id": "002126",
        "date": "26 May 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Compound Measures",
        "subtopic": "Speed",
        "difficulty": "8/9",
        "img": "images/May_26_g.png",
        "q": "A speed-time graph shows a car accelerating from rest to a speed of 20 m/s over a period of 5 seconds. <br>(a) Calculate the acceleration of the car.<br>(b) Calculate the total distance travelled by the car during these 5 seconds.",
        "steps": [
            "For part (a), we calculate the acceleration by finding the gradient of the line: $20 / 5 = 4 \\text{ m/s}^2$.",
            "For part (b), we calculate the total distance by finding the area under the graph, which is a triangle: $\\frac{1}{2} \\times 5 \\times 20$.",
            "We conclude that the total distance travelled is 50 metres.",
            "Final Answer: $$(a)\\ 4\\text{ m/s}^2,\\ (b)\ 50\\text{ m}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Rates of Change",
            "content": "This question tests the conceptual understanding of kinematics. Students must confidently differentiate between the <strong>gradient</strong> (representing the rate of change of speed, i.e., acceleration) and the <strong>area</strong> representing the accumulation of distance."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number & Ratio: Download the Full Number Pack"
    },
    // 27 May
    {
        "id": "002127",
        "date": "27 May 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Fractional indices",
        "difficulty": "6/7",
        "q": "Evaluate the exact value of $27^{-2/3}$.",
        "steps": [
            "First, we address the negative part of the index by taking the reciprocal of the base: $\\dfrac{1}{27^{\\frac{2}{3}}}$.",
            "Next, we apply the denominator of the fractional index, which represents the cube root: $\\sqrt[3]{27} = 3$.",
            "Finally, we apply the numerator of the fractional index by squaring the result: $3^2 = 9$.",
            "The final result is expressed as a fraction.",
            "Final Answer: $$\\dfrac{1}{9}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root Before Power",
            "content": "A vital tip for non-calculator papers: always perform the root (the denominator) before the power (the numerator). Finding the cube root of 27 is trivial; trying to find the cube root of $27^2$ (729) is a significant and unnecessary burden."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 28 May
    {
        "id": "002128",
        "date": "28 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Scale factors",
        "difficulty": "8/9",
        "q": "Two mathematically similar containers have heights of 12 cm and 18 cm respectively. Given that the smaller container has a volume of 400 cm$^3$, calculate the volume of the larger container.",
        "steps": [
            "We calculate the linear scale factor ($k$) by dividing the height of the larger container by the height of the smaller container: $18 / 12 = 1.5$.",
            "The volume scale factor is found by cubing the linear scale factor: $1.5^3 = 3.375$.",
            "Finally, we multiply the volume of the smaller container by the volume scale factor: $400 \times 3.375$.",
            "Final Answer: $$1350\text{ cm}^3$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Bridging the Dimensions",
            "content": "Candidates frequently lose marks at Grade 8 and 9 by mistakenly applying the linear scale factor to the volume. I always insist that students explicitly write down $k$, $k^2$, and $k^3$ to 'bridge' the dimensions before performing the final calculation."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 29 May
    {
        "id": "002129",
        "date": "29 May 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Difference of squares",
        "difficulty": "7/8",
        "q": "Factorise the following expression fully: $50x^2 - 18$.",
        "steps": [
            "We begin by identifying and removing the highest common numerical factor, which is 2: $2(25x^2 - 9)$.",
            "We then recognize that the expression inside the brackets is a difference of two squares, where $25x^2 = (5x)^2$ and $9 = 3^2$.",
            "We complete the factorisation using the identity $(a^2 - b^2) = (a - b)(a + b)$.",
            "Final Answer: $$2(5x - 3)(5x + 3)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Two-Stage Challenge",
            "content": "Students often struggle with this question because 50 and 18 are not perfect squares. I remind them that 'factorise fully' is a mathematical hint that there is more than one stage to the process. Extracting the common factor is the key that unlocks the secondary pattern."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 30 May
    {
        "id": "002130",
        "date": "30 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Tangents",
        "difficulty": "8/9",
        "q": "A circle is defined by the equation $x^2 + y^2 = 25$. Determine the equation of the tangent to the circle at the coordinate point $(3, 4)$.",
        "steps": [
            "First, we calculate the gradient of the radius connecting the origin $(0,0)$ to the point $(3, 4)$, which is $4 / 3$.",
            "Because the tangent is perpendicular to the radius at the point of contact, its gradient must be the negative reciprocal, which is $-3/4$.",
            "We substitute the point $(3, 4)$ and the gradient $-3/4$ into the straight-line formula $y - y_1 = m(x - x_1)$.",
            "Finally, we simplify the equation into its general form.",
            "Final Answer: $$3x + 4y = 25$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Interdisciplinary Links",
            "content": "This problem elegantly bridges coordinate geometry and circle theorems. Students must synthesize their knowledge of perpendicular gradients with the geometric property that a tangent meets a radius at $90^\\circ$. Mastery here is indicative of a Grade 9 student."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 31 May
    {
        "id": "002131",
        "date": "31 May 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Roots from graphs",
        "difficulty": "8/9",
        "q": "The equation $x^3 + 7x - 5 = 0$ has a solution located between $x = 0$ and $x = 1$.<br><br>(a) Show that the equation can be rearranged to give $x = \\dfrac{5}{x^2 + 7}$.<br><br>(b) Starting with an initial value of $x_0 = 1$, use the iteration formula $x_{n+1} = \\dfrac{5}{x_n^2 + 7}$ three times to determine an estimate for the solution.",
        "steps": [
            "For part (a), we rearrange the original equation by moving the constant: $x^3 + 7x = 5$. We then factor out $x$ to get $x(x^2 + 7) = 5$, and divide to isolate $x$.",
            "For part (b), we substitute $x_0 = 1$ into the iteration formula to find $x_1 = 5 / (1^2 + 7) = 0.625$.",
            "We then use $x_1$ to find $x_2 = 5 / (0.625^2 + 7) \\approx 0.6765$.",
            "Finally, we use $x_2$ to find $x_3 = 5 / (0.6765^2 + 7) \\approx 0.6704$.",
            "Final Answer: $$0.670 \text{ (to 3 decimal places)}$$ "
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Efficient Calculator Usage",
            "content": "In an examination, time is a resource. I always demonstrate the 'ANS' key method for iteration: enter the initial value and press 'equals', then type the formula using 'ANS' in place of $x$. This allows students to generate $x_1, x_2$, and $x_3$ with single keystrokes, minimizing rounding errors."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    }
];