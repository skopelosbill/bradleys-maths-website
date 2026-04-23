
   const problemBank = [
    // 1 February
    {
        "id": "002009",
        "date": "1 February 2026",
        "major_area": "Algebra",
        "topic": "Surds",
        "subtopic": "Simplifying surds",
        "difficulty": "6/7",
        "q": "(a) Expand and simplify $(3 + \\sqrt{5})^2$.<br>(b) Hence, show that $\\dfrac{(3 + \\sqrt{5})^2}{2}$ can be written in the form $a + b\\sqrt{5}$, where $a$ and $b$ are integers.",
        "steps": [
            "For part (a), we write the expression as two identical brackets: $(3 + \\sqrt{5})(3 + \\sqrt{5})$.",
            "Expanding the brackets gives $9 + 3\\sqrt{5} + 3\\sqrt{5} + 5$.",
            "Collecting like terms yields $14 + 6\\sqrt{5}$.",
            "For part (b), we divide our result from part (a) by 2: $\\dfrac{14 + 6\\sqrt{5}}{2}$.",
            "Dividing both terms by 2 gives the final simplified form.",
            "Final Answer: $$(a)\\ 14 + 6\\sqrt{5},\\ (b)\\ 7 + 3\\sqrt{5}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Squaring Surds",
            "content": "A frequent error in Paper 1 is assuming that $(3 + \\sqrt{5})^2$ is simply $3^2 + (\\sqrt{5})^2$. You must treat this as a binomial expansion. Forgetting the 'middle' terms ($2ab$) will result in a significant loss of marks."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 2 February
    {
        "id": "002010",
        "date": "2 February 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Completing the square",
        "difficulty": "8/9",
        "q": "(a) Write $3x^2 - 6x + 1$ in the form $a(x + b)^2 + c$.<br>(b) State the coordinates of the minimum point of the curve $y = 3x^2 - 6x + 1$.",
        "steps": [
            "For part (a), we first factorise the coefficient of $x^2$ out of the first two terms: $3(x^2 - 2x) + 1$.",
            "Next, we complete the square inside the bracket: $x^2 - 2x = (x - 1)^2 - 1$.",
            "Substituting this back into the expression: $3[(x - 1)^2 - 1] + 1$.",
            "Distributing the 3 gives $3(x - 1)^2 - 3 + 1$, which simplifies to $3(x - 1)^2 - 2$.",
            "For part (b), the minimum point of $y = a(x + b)^2 + c$ is located at $(-b, c)$.",
            "Substituting our values, the minimum point is $(1, -2)$.",
            "Final Answer: $$(a)\\ 3(x - 1)^2 - 2,\\ (b)\\ (1, -2)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Factoring First",
            "content": "Completing the square when the coefficient of $x^2$ is not 1 is a common Grade 9 discriminator. Always factor out the '3' first. If you try to complete the square without this step, the algebra becomes needlessly complex and prone to error."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 3 February
    {
        "id": "002011",
        "date": "3 February 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Ratio",
        "subtopic": "Simplifying ratios",
        "difficulty": "5/6",
        "q": "Given that $x : y = 1 : 2$ and $y : z = 3 : 5$.<br>(a) Find the ratio $x : y : z$ in its simplest form.<br>(b) Find the ratio $x : z$.",
        "steps": [
            "For part (a), we must make the value of $y$ consistent in both ratios. The lowest common multiple of 2 and 3 is 6.",
            "We scale the first ratio by 3: $x : y = 3 : 6$.",
            "We scale the second ratio by 2: $y : z = 6 : 10$.",
            "Combining these results gives the tripartite ratio $3 : 6 : 10$.",
            "For part (b), we extract the values for $x$ and $z$ from our combined ratio.",
            "Final Answer: $$(a)\\ 3 : 6 : 10,\\ (b)\\ 3 : 10$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Bridging Ratios",
            "content": "To combine two separate ratios, you must find a 'common bridge'. Identifying the variable that appears in both (in this case, $y$) and equalising its parts is the most reliable method for these Higher Tier ratio problems."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Ratio: Download the Full Number & Ratio Pack"
    },
    // 4 February
    {
        "id": "002012",
        "date": "4 February 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Roots from graphs",
        "difficulty": "6/7",
        "q": "An iterative formula is given as $x_{n+1} = \\sqrt[3]{x_n + 7}$.<br>(a) Starting with $x_0 = 2$, calculate the value of $x_1$.<br>(b) Use your answer to part (a) to find the value of $x_2$, giving your answer to 3 significant figures.",
        "steps": [
            "For part (a), we substitute $x_0 = 2$ into the formula: $x_1 = \\sqrt[3]{2 + 7}$.",
            "Calculating the cube root gives $x_1 = \\sqrt[3]{9} \\approx 2.08008...$.",
            "For part (b), we substitute $x_1$ back into the formula: $x_2 = \\sqrt[3]{2.08008... + 7}$.",
            "Calculation: $x_2 = \\sqrt[3]{9.08008...} \\approx 2.0862...$.",
            "Rounding to 3 significant figures gives the final result.",
            "Final Answer: $$(a)\\ 2.08,\\ (b)\\ 2.09$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Iteration and the ANS Key",
            "content": "Iteration is a technical calculator skill. To avoid rounding errors between steps, enter $2 =$, then type $\\sqrt[3]{\\text{ANS} + 7}$. Pressing 'equals' repeatedly will then generate $x_1, x_2, x_3$ and so on with perfect precision."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 5 February
    {
        "id": "002013",
        "date": "5 February 2026",
        "major_area": "Statistics",
        "topic": "Histograms",
        "subtopic": "Frequency density",
        "difficulty": "6/7",
        "q": "The information below describes two bars in a histogram.<br>Bar A: Class $0 < w \\le 10$, Frequency $5$.<br>Bar B: Class $10 < w \\le 30$, Frequency $20$.<br>(a) Calculate the frequency density for each bar.<br>(b) State which bar would be taller on the histogram.",
        "steps": [
            "For part (a), we use the formula: $\\text{Frequency Density} = \\text{Frequency} \\div \\text{Class Width}$.",
            "For Bar A: $5 \\div 10 = 0.5$.",
            "For Bar B: $20 \\div 20 = 1.0$.",
            "For part (b), we compare the frequency densities. Since Bar B has a higher frequency density, it will be the taller bar.",
            "Final Answer: $$(a)\\ A: 0.5, B: 1.0,\\ (b)\\ \text{Bar B}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Height vs Area",
            "content": "In a histogram, the height of the bar represents the 'concentration' of data within that group. It is a common misconception that the tallest bar represents the highest frequency; remember, in histograms, <strong>area</strong> represents frequency, not height."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Statistics: Download the Full Statistics Pack"
    },
    // 6 February
    {
        "id": "002014",
        "date": "6 February 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Elimination",
        "difficulty": "7/8",
        "q": "Solve the following equations simultaneously to find the coordinates of the points of intersection:<br>$y = x^2$<br>$y = 2x + 3$",
        "steps": [
            "We begin by equating the two expressions for $y$: $x^2 = 2x + 3$.",
            "Rearranging the equation into a quadratic form: $x^2 - 2x - 3 = 0$.",
            "We factorise the quadratic to find the $x$-values: $(x - 3)(x + 1) = 0$.",
            "This gives $x = 3$ and $x = -1$.",
            "We substitute these values into $y = x^2$ to find the corresponding $y$-coordinates: if $x = 3, y = 9$; if $x = -1, y = 1$.",
            "Final Answer: $$(3, 9) \\text{ and } (-1, 1)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Intersection Logic",
            "content": "Algebraic simultaneous equations are the numerical way to find where two lines cross. Whenever you see a 'line' and a 'curve', you should expect two pairs of solutions, representing the two distinct points of intersection on the graph."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 7 February
    {
        "id": "002015",
        "date": "7 February 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Compound interest",
        "difficulty": "5/6",
        "q": "An amount of $£5000$ is invested at $2\\%$ compound interest per year for 3 years.<br>(a) Calculate the total value of the investment after 3 years.<br>(b) Calculate the total interest earned over the 3-year period.",
        "steps": [
            "For part (a), we identify the multiplier for a $2\\%$ increase: $1 + 0.02 = 1.02$.",
            "We apply the compound interest formula: $£5000 \\times 1.02^3$.",
            "Calculation: $£5000 \\times 1.061208 = £5306.04$.",
            "For part (b), the interest earned is the difference between the final value and the original investment.",
            "Calculation: $£5306.04 - £5000 = £306.04$.",
            "Final Answer: $$(a)\\ £5306.04,\\ (b)\\ £306.04$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Interest vs. Total Value",
            "content": "Candidates often lose a mark on the final part of financial questions by providing the total account value when the examiner specifically asked for the 'interest earned'. Always perform a final reading of the question to ensure your answer matches the instruction."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
// 8 February
    {
        "id": "002016",
        "date": "8 February 2026",
        "major_area": "Geometry & Measures",
        "topic": "Polygons",
        "subtopic": "Exterior angles",
        "difficulty": "4/5",
        "img": "true",
        "q": "The exterior angle of a regular polygon is $18^\\circ$.<br>(a) Calculate the number of sides that the polygon has.<br>(b) Calculate the sum of the interior angles of this polygon.",
        "steps": [
            "For part (a), we use the geometric property that the sum of the exterior angles of any convex polygon is $360^\\circ$.",
            "We divide the total sum by the size of one exterior angle: $360 \\div 18 = 20$.",
            "For part (b), we use the formula for the sum of interior angles: $(n - 2) \\times 180^\\circ$.",
            "Substituting $n = 20$: $(20 - 2) \\times 180 = 18 \\times 180$.",
            "Calculation: $3240^\\circ$.",
            "Final Answer: $$(a)\\ 20\\text{ sides},\\ (b)\\ 3240^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The exterior constant",
            "content": "Regardless of how many sides a polygon has, the exterior angles will always sum to exactly $360^\\circ$. This is one of the most powerful 'shortcuts' in geometry; use it to find the number of sides or individual interior angles with minimal algebraic effort."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 9 February
    {
        "id": "002017",
        "date": "9 February 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Trigonometric graphs",
        "difficulty": "6/7",
        "q": "(a) State the maximum value of the function $y = 3\\sin(x)$.<br>(b) State the coordinates of the first maximum point of the graph for $x \\ge 0^\\circ$.",
        "steps": [
            "For part (a), we recall that the standard sine function, $\\sin(x)$, oscillates between $-1$ and $1$.",
            "The coefficient $3$ represents the amplitude of the wave, so the maximum value is $3 \\times 1 = 3$.",
            "For part (b), a standard sine wave reaches its first maximum at $90^\\circ$.",
            "The $y$-coordinate at this point is the maximum value we found in part (a).",
            "Final Answer: $$(a)\\ 3,\\ (b)\\ (90^\\circ, 3)$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Amplitude and Period",
            "content": "In the form $y = a\\sin(bx)$, the value of '$a$' always dictates the amplitude (the height from the centre). While the wave's height changes, notice that its horizontal position (the $x$-coordinate) remains unchanged unless there is a horizontal transformation inside the bracket."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 10 February
    {
        "id": "002018",
        "date": "10 February 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Reverse percentages",
        "difficulty": "5/6",
        "q": "An item is reduced by $20\\%$ in a sale. The sale price of the item is $£40$.<br>(a) Calculate the original price of the item.<br>(b) After the sale, the price is increased back to its original value. Calculate the percentage increase from the sale price.",
        "steps": [
            "For part (a), we identify that the sale price represents $80\\%$ of the original cost ($100\\% - 20\\%$).",
            "To find the original price, we divide the sale price by the decimal multiplier: $40 \\div 0.8$.",
            "Calculation: $400 \\div 8 = 50$.",
            "For part (b), we find the increase required: $£50 - £40 = £10$.",
            "We calculate the percentage increase using the sale price as the original: $\\dfrac{10}{40} \\times 100$.",
            "Final Answer: $$(a)\\ £50,\\ (b)\\ 25\\%$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The percentage asymmetry",
            "content": "It is a common mistake to assume that if a price drops by $20\\%$, it must increase by $20\\%$ to return to the start. Because the 'base' value has changed from $£50$ to $£40$, the percentage required to go back up is actually higher ($25\\%$)."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 11 February
    {
        "id": "002019",
        "date": "11 February 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Transformations of graphs",
        "difficulty": "6/7",
        "q": "(a) Describe fully the single transformation that maps the graph of $y = f(x)$ onto the graph of $y = f(x - 2)$.<br>(b) State the transformation that maps $y = f(x)$ onto $y = -f(x)$.",
        "steps": [
            "For part (a), we identify that the transformation is inside the function brackets, which affects the $x$-coordinates.",
            "A subtraction inside the bracket represents a horizontal translation in the <strong>opposite</strong> direction to the sign.",
            "Therefore, the transformation is a translation by 2 units to the right.",
            "In formal vector notation, this is $\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$.",
            "For part (b), an external negative sign reflects all $y$-values across the $x$-axis.",
            "Final Answer: $$(a)\\ \\text{Translation by } \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix},\\ (b)\\ \\text{Reflection in the } x\\text{-axis}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 'Inside-Opposite' Rule",
            "content": "I always tell my students: 'Inside the bracket, do the opposite; outside the bracket, do exactly what it says.' This simple rule will help you navigate almost every transformation question in the Higher Tier syllabus."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 12 February
    {
        "id": "002020",
        "date": "12 February 2026",
        "major_area": "Algebra",
        "topic": "Sequences",
        "subtopic": "nth term",
        "difficulty": "5/6",
        "q": "The $n^{th}$ term of a sequence is given by the expression $2n^2 + 1$.<br>(a) Find the $3^{rd}$ term of this sequence.<br>(b) Show that $51$ is a term in this sequence.",
        "steps": [
            "For part (a), we substitute $n = 3$ into the $n^{th}$ term expression: $2(3^2) + 1$.",
            "Calculation: $2(9) + 1 = 19$.",
            "For part (b), we set the expression equal to 51 and solve for $n$: $2n^2 + 1 = 51$.",
            "Subtracting 1 gives $2n^2 = 50$, then dividing by 2 gives $n^2 = 25$.",
            "Taking the square root gives $n = 5$. Since 5 is a positive integer, 51 is the $5^{th}$ term of the sequence.",
            "Final Answer: $$(a)\\ 19,\\ (b)\\ \\text{5th term}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Validating terms",
            "content": "To prove a value is part of a sequence, you must solve for $n$ and find a positive integer result. If your value of $n$ is a fraction or a decimal, the number cannot be a term in that sequence, as $n$ represents a physical position (1st, 2nd, 3rd...)."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 13 February
    {
        "id": "002021",
        "date": "13 February 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Compound Measures",
        "subtopic": "Density",
        "difficulty": "4/5",
        "q": "An object has a mass of $2\\text{ kg}$ and a volume of $400\\text{ cm}^3$.<br>(a) Calculate the density of the object. Give your answer in $\\text{g/cm}^3$.<br>(b) Calculate the mass of $150\\text{ cm}^3$ of the same material.",
        "steps": [
            "For part (a), we first convert the mass to grams to match the required units: $2\\text{ kg} = 2000\\text{ g}$.",
            "We apply the density formula: $\\text{Density} = \\text{Mass} \\div \\text{Volume} = 2000 \\div 400$.",
            "Calculation: $5\\text{ g/cm}^3$.",
            "For part (b), we use the density from part (a) and the new volume: $\\text{Mass} = \\text{Density} \\times \\text{Volume}$.",
            "Calculation: $5 \\times 150 = 750\\text{ g}$.",
            "Final Answer: $$(a)\\ 5\\text{ g/cm}^3,\\ (b)\\ 750\\text{ g}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Unit Consistency",
            "content": "In compound measure questions, the examiner is often testing your unit conversion skills as much as your knowledge of the formula. Always check if the mass (kg) and density (g/cm$^3$) units align before you begin your division."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Ratio: Download the Full Number & Ratio Pack"
    },
    // 14 February
    {
        "id": "002022",
        "date": "14 February 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Distance",
        "difficulty": "6/7",
        "q": "(a) Write down the equation of a circle with centre $(0, 0)$ and a radius of $5$.<br>(b) Show by calculation that the point $(3, 4)$ lies on the circumference of this circle.",
        "steps": [
            "For part (a), we use the general equation for a circle centered at the origin: $x^2 + y^2 = r^2$.",
            "Substituting $r = 5$, we get $x^2 + y^2 = 5^2$, which simplifies to $x^2 + y^2 = 25$.",
            "For part (b), a point lies on the circumference if its coordinates satisfy the equation.",
            "We substitute $x = 3$ and $y = 4$ into the equation: $3^2 + 4^2$.",
            "Calculation: $9 + 16 = 25$. Since the result equals $r^2$, the point lies on the circle.",
            "Final Answer: $$(a)\\ x^2 + y^2 = 25,\\ (b)\\ \\text{Shown}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Circular Pythagoras",
            "content": "The equation of a circle is simply Pythagoras' Theorem in disguise. For any point $(x, y)$, the values represent the sides of a right-angled triangle, and '$r$' represents the hypotenuse. Understanding this link makes circle geometry much more intuitive."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 15 February
    {
        "id": "002023",
        "date": "15 February 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations in standard form",
        "difficulty": "5/6",
        "q": "Work out the value of $\\dfrac{8 \\times 10^5}{2 \\times 10^{-2}}$.<br>(a) Give your answer in standard form.<br>(b) Give your answer as an ordinary number.",
        "steps": [
            "For part (a), we divide the leading coefficients: $8 \\div 2 = 4$.",
            "Next, we use the index law for division ($10^a \\div 10^b = 10^{a-b}$) for the powers of ten: $10^5 \\div 10^{-2} = 10^{5 - (-2)} = 10^7$.",
            "Combining these results gives $4 \\times 10^7$.",
            "For part (b), $10^7$ represents a 1 followed by seven zeros.",
            "Calculation: $4 \\times 10,000,000 = 40,000,000$.",
            "Final Answer: $$(a)\\ 4 \\times 10^7,\\ (b)\\ 40,000,000$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Negative Index Trap",
            "content": "A very common error in Paper 1 is incorrectly subtracting the negative index. Remember that $5 - (-2)$ becomes $5 + 2$. Miscalculating this as $10^3$ is a frequent mistake that costs a simple accuracy mark."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 16 February
    {
        "id": "002024",
        "date": "16 February 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Surface area",
        "difficulty": "5/6",
        "img": "true",
        "q": "A sector of a circle has a radius of $6\\text{ cm}$ and a sector angle of $60^\\circ$.<br>(a) Calculate the length of the arc. Give your answer in terms of $\\pi$.<br>(b) Calculate the area of the sector. Give your answer in terms of $\\pi$.",
        "steps": [
            "For part (a), we identify the fraction of the circle represented by the sector: $\\dfrac{60}{360} = \\dfrac{1}{6}$.",
            "The formula for arc length is $\\dfrac{\\theta}{360} \\times 2\\pi r$. Substituting the values: $\\dfrac{1}{6} \\times 2 \\times \\pi \\times 6$.",
            "Simplifying this gives $2\\pi\\text{ cm}$.",
            "For part (b), the formula for the area of a sector is $\\dfrac{\\theta}{360} \\times \\pi r^2$.",
            "Substituting the values: $\\dfrac{1}{6} \\times \\pi \\times 6^2 = \\dfrac{1}{6} \\times 36\\pi$.",
            "Simplifying this gives $6\\pi\\text{ cm}^2$.",
            "Final Answer: $$(a)\\ 2\\pi\\text{ cm},\\ (b)\\ 6\\pi\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Arc vs. Sector Area",
            "content": "Be careful not to confuse the two formulas. Arc length is a portion of the <strong>circumference</strong> ($2\\pi r$), while sector area is a portion of the <strong>total area</strong> ($\\pi r^2$). I always suggest writing the full circle formula first before applying the fraction."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 17 February
    {
        "id": "002025",
        "date": "17 February 2026",
        "major_area": "Number",
        "topic": "Decimals",
        "subtopic": "Converting between decimals and fractions",
        "difficulty": "6/7",
        "q": "Show that the recurring decimal $0.4\\dot{5}$ can be written as the fraction $\\dfrac{41}{90}$ in its simplest form.",
        "steps": [
            "We begin by setting $x = 0.4555...$.",
            "We multiply by 10 to move the non-recurring digit: $10x = 4.5555...$.",
            "We multiply by 100 to shift the recurring part: $100x = 45.5555...$.",
            "Subtracting the two equations eliminates the recurring decimal: $100x - 10x = 45.5555... - 4.5555...$.",
            "This yields $90x = 41$.",
            "Finally, we divide by 90 to express $x$ as a fraction.",
            "Final Answer: $$\\dfrac{41}{90}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Alignment is Key",
            "content": "Students often try to subtract $x$ from $10x$, but this only works if the recurring part starts immediately after the decimal point. For decimals like $0.4\\dot{5}$, you must ensure the 'tails' of the decimals match perfectly before you subtract."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 18 February
    {
        "id": "002026",
        "date": "18 February 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Scale factors",
        "difficulty": "7/8",
        "q": "Two mathematically similar solid spheres, A and B, have a radius ratio of $1 : 3$.<br>(a) Find the ratio of their surface areas.<br>(b) The volume of Sphere A is $10\\text{ cm}^3$. Calculate the volume of Sphere B.",
        "steps": [
            "For part (a), we use the property that if the linear scale factor is $k$, the area scale factor is $k^2$.",
            "Given $k = 3$, the area ratio is $1^2 : 3^2 = 1 : 9$.",
            "For part (b), we use the property that the volume scale factor is $k^3$.",
            "The volume scale factor is $3^3 = 27$.",
            "To find the volume of the larger sphere, we multiply the smaller volume by the scale factor: $10 \\times 27 = 270\\text{ cm}^3$.",
            "Final Answer: $$(a)\\ 1:9,\\ (b)\\ 270\\text{ cm}^3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Dimension Powers",
            "content": "This is a favourite topic for examiners. Just remember: Length is 1D ($k^1$), Area is 2D ($k^2$), and Volume is 3D ($k^3$). Always identify the linear scale factor ($k$) first, as it acts as the bridge between all other dimensions."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 19 February
    {
        "id": "002027",
        "date": "19 February 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Simplifying",
        "difficulty": "7/8",
        "q": "Simplify fully: $$\\dfrac{x^2 - 9}{x^2 + 5x + 6}$$",
        "steps": [
            "We begin by factorising the numerator using the 'difference of two squares' identity: $x^2 - 9 = (x - 3)(x + 3)$.",
            "Next, we factorise the quadratic denominator by finding two numbers that multiply to $+6$ and add to $+5$. These are $+2$ and $+3$.",
            "The denominator becomes $(x + 2)(x + 3)$.",
            "We identify $(x + 3)$ as a common factor in both the numerator and the denominator and cancel it.",
            "Final Answer: $$\\dfrac{x - 3}{x + 2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Hint in the Structure",
            "content": "When asked to 'simplify fully' an algebraic fraction, it is almost certain that one of the factors in the numerator will match a factor in the denominator. If you find one easily (like the difference of squares), use it as a guide to help you factorise the harder part."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 20 February
    {
        "id": "002028",
        "date": "20 February 2026",
        "major_area": "Probability",
        "topic": "Basic Probability",
        "subtopic": "Sample Space Diagrams",
        "difficulty": "4/5",
        "q": "A school canteen offers a choice of 3 starters, 4 main courses, and 2 desserts.<br>(a) Calculate the total number of different 3-course meals that can be chosen.<br>(b) If one of the main courses is unavailable, how many 3-course meal combinations remain?",
        "steps": [
            "For part (a), we use the product rule for counting. We multiply the number of options for each course together.",
            "Calculation: $3 \\text{ (starters)} \\times 4 \\text{ (mains)} \\times 2 \\text{ (desserts)} = 24$.",
            "For part (b), we reduce the number of main courses to 3.",
            "New calculation: $3 \\times 3 \\times 2 = 18$.",
            "Final Answer: $$(a)\\ 24,\\ (b)\\ 18$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The Product Rule",
            "content": "The Product Rule for counting is a deceptively simple but vital Grade 5 skill. It helps you understand the size of a sample space without needing to list every combination. Just remember: if you have 'n' ways to do one thing and 'm' ways to do another, there are $n \\times m$ ways to do both."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Probability: Download the Full Probability Pack"
    },
    // 21 February
    {
        "id": "002029",
        "date": "21 February 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "6/7",
        "q": "Line A has a gradient of $3$.<br>(a) State the gradient of a line that is perpendicular to Line A.<br>(b) Find the equation of Line B, which is perpendicular to Line A and passes through the point $(6, 5)$.",
        "steps": [
            "For part (a), we use the property that the product of perpendicular gradients is $-1$.",
            "We take the negative reciprocal of 3, which is $-\\dfrac{1}{3}$.",
            "For part (b), we use the straight-line formula $y - y_1 = m(x - x_1)$ with the point $(6, 5)$ and $m = -\\dfrac{1}{3}$.",
            "Substituting the values: $y - 5 = -\\dfrac{1}{3}(x - 6)$.",
            "Expanding the bracket: $y - 5 = -\\dfrac{1}{3}x + 2$.",
            "Adding 5 to both sides gives the final linear equation.",
            "Final Answer: $$(a)\\ -\\dfrac{1}{3},\\ (b)\\ y = -\\dfrac{1}{3}x + 7$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Perpendicular Precision",
            "content": "In coordinate geometry, 'perpendicular' is a mathematical instruction to use the negative reciprocal. I always advise students to perform a 'sanity check': if the original gradient is positive, the perpendicular one <strong>must</strong> be negative. Forgetting the minus sign is a very common error."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 22 Feb
   // 22 February
    {
        "id": "002030",
        "date": "22 February 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Fractional indices",
        "difficulty": "6/7",
        "q": "(a) Evaluate $16^{\\frac{3}{2}}$.<br>(b) Evaluate $16^{-\\frac{3}{2}}$.",
        "steps": [
            "For part (a), the denominator of the index represents the square root: $\\sqrt{16} = 4$.",
            "We then apply the numerator of the index, which is the cube: $4^3 = 64$.",
            "For part (b), a negative index indicates the reciprocal of the base.",
            "Using the result from part (a), we take the reciprocal of 64.",
            "Final Answer: $$(a)\\ 64,\\ (b)\\ \\dfrac{1}{64}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 'Root First' Rule",
            "content": "When evaluating fractional indices, always perform the root (the denominator) before the power (the numerator). Finding the square root of 16 is simple; trying to find the square root of $16^3$ ($4096$) is a much more difficult mental task."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 23 February
    {
        "id": "002031",
        "date": "23 February 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Upper and lower bounds",
        "difficulty": "8/9",
        "q": "A variable $V$ is defined by the formula $V = \\dfrac{10}{x}$. Given that $x = 2$ correct to the nearest integer, calculate the maximum possible value of $V$.",
        "steps": [
            "To maximise the value of a fraction, we must divide the numerator by the smallest possible denominator.",
            "First, we find the lower bound for $x$. Since $x=2$ is rounded to the nearest integer, the lower bound is $1.5$.",
            "We calculate the maximum value of $V$ by dividing 10 by $1.5$.",
            "Calculation: $10 \\div \\dfrac{3}{2} = 10 \\times \\dfrac{2}{3} = \\dfrac{20}{3}$.",
            "Final Answer: $$6.\\dot{6}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Inverse Maximisation",
            "content": "A frequent error in Higher Tier bounds questions is using the upper bound of the denominator to find the maximum result. Because $x$ is on the bottom of the fraction, its relationship with $V$ is inverse; the smaller $x$ becomes, the larger $V$ will be."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 24 February
    {
        "id": "002032",
        "date": "24 February 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Parallel vectors",
        "difficulty": "6/7",
        "q": "The vector $\\overrightarrow{AB} = 2\\mathbf{a}$ and the vector $\\overrightarrow{BC} = 3\\mathbf{a}$.<br>(a) Find the vector $\\overrightarrow{AC}$ in terms of $\\mathbf{a}$.<br>(b) Explain why the points $A$, $B$ and $C$ must lie on a straight line.",
        "steps": [
            "For part (a), we find the vector path $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC}$.",
            "Substituting the values: $2\\mathbf{a} + 3\\mathbf{a} = 5\\mathbf{a}$.",
            "For part (b), we observe that $\\overrightarrow{AB}$ and $\\overrightarrow{BC}$ are both scalar multiples of the same vector $\\mathbf{a}$.",
            "This means the two line segments are parallel to each other.",
            "Since the segments also share a common point ($B$), they must be collinear.",
            "Final Answer: $$(a)\\ 5\\mathbf{a},\\ (b)\\ \\text{They are parallel and share a common point}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Collinearity Proof",
            "content": "To prove collinearity (points on a straight line) using vectors, you must make two distinct points in your explanation: 1) The vectors are parallel (one is a scalar multiple of the other), and 2) They share a common vertex. Omitting either point will cost you the final communication mark."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 25 February
    {
        "id": "002033",
        "date": "25 February 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Exact values",
        "difficulty": "5/6",
        "q": "(a) State the exact value of $\\tan(45^\\circ)$.<br>(b) Calculate the value of $\\tan(45^\\circ) + \\sin(90^\\circ)$.",
        "steps": [
            "For part (a), we recall the exact trigonometric values. $\\tan(45^\\circ)$ is equal to $1$.",
            "For part (b), we recall that $\\sin(90^\\circ)$ is also equal to $1$.",
            "We sum the two values: $1 + 1 = 2$.",
            "Final Answer: $$(a)\\ 1,\\ (b)\\ 2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Exact Value Triangles",
            "content": "If you struggle to memorise these values, learn to draw the two 'key' triangles: the $45-45-90$ isosceles triangle and the $30-60-90$ scalene triangle. From these two sketches, you can derive every exact value required for the non-calculator paper."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 26 February
    {
        "id": "002034",
        "date": "26 February 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Cyclic quadrilaterals",
        "difficulty": "5/6",
        "img": "true",
        "q": "In the diagram, $ABCD$ is a cyclic quadrilateral. Angle $A = 80^\\circ$.<br>(a) Find the size of angle $C$.<br>(b) Given that angle $B$ is twice the size of angle $D$, calculate the size of angle $D$.",
        "steps": [
            "For part (a), we apply the circle theorem that opposite angles in a cyclic quadrilateral sum to $180^\\circ$.",
            "Angle $C = 180^\\circ - 80^\\circ = 100^\\circ$.",
            "For part (b), we let angle $D$ be $x$ and angle $B$ be $2x$.",
            "Since they are opposite angles, $x + 2x = 180^\\circ \\implies 3x = 180^\\circ$.",
            "Solving for $x$: $x = 180 \\div 3 = 60^\\circ$.",
            "Final Answer: $$(a)\\ 100^\\circ,\\ (b)\\ 60^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Cyclic Quad Logic",
            "content": "A quadrilateral is only 'cyclic' if all four of its vertices touch the circumference of the circle. This property creates unique angle relationships that examiners love to combine with algebra. Always look for that $180^\\circ$ opposite-pair connection."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 27 February
    {
        "id": "002035",
        "date": "27 February 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Graphical inequalities",
        "difficulty": "7/8",
        "img": "true",
        "q": "A region $R$ is defined by the inequalities $y > x$ and $x + y < 4$.<br>(a) Determine if the coordinate point $(1, 1)$ lies within the region $R$.<br>(b) State a coordinate point with integer values that lies strictly inside region $R$.",
        "steps": [
            "For part (a), a point lies in the region only if it satisfies <strong>both</strong> inequalities strictly.",
            "Testing $(1, 1)$ in $y > x$: $1 > 1$ is false (it is equal). Therefore, the point lies on the boundary, not inside the region.",
            "For part (b), we choose a point where the $y$-value is greater than the $x$-value, and the sum is less than 4.",
            "Testing $(1, 2)$: $2 > 1$ is true, and $1 + 2 = 3$, which is less than 4. This point satisfies both.",
            "Final Answer: $$(a)\\ \\text{No},\\ (b)\\ (1, 2)$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Strict Inequalities",
            "content": "Pay close attention to the symbols. The 'greater than' symbol ($>$) means the region does <strong>not</strong> include the line itself. On a graph, this is represented by a dashed line. Points lying on that dashed line are not part of the solution set."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 28 February
    {
        "id": "002036",
        "date": "28 February 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Positive indices",
        "difficulty": "6/7",
        "q": "(a) Solve the equation $3^{2x} = 27$.<br>(b) Find the value of $y$ for which $3^{y} = \\dfrac{1}{27}$.",
        "steps": [
            "For part (a), we first express 27 as a power of 3: $27 = 3^3$.",
            "Since the bases are now equal, we can equate the indices: $2x = 3$.",
            "Solving for $x$: $x = 1.5$.",
            "For part (b), we express $\\dfrac{1}{27}$ as a power of 3.",
            "We know $27 = 3^3$, so the reciprocal $\\dfrac{1}{27} = 3^{-3}$.",
            "Therefore, $y = -3$.",
            "Final Answer: $$(a)\\ 1.5,\\ (b)\\ -3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Equalising the Base",
            "content": "The 'secret' to solving index equations is finding a common base. Once you have transformed both sides into powers of 3, the algebra becomes a simple linear equation. Mastery of this technique is vital for the more complex exponential questions in Paper 2."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    }
];