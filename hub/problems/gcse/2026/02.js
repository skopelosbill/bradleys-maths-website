
   const problemBank = [
   // 1 February
    {
        "id": "002009",
        "date": "1 February 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Surds",
        "difficulty": "6/7",
        "q": "(a) Expand and simplify $(3 + \\sqrt{5})^2$.<br>(b) Hence, show that $\\dfrac{(3 + \\sqrt{5})^2}{2}$ can be written in the form $a + b\\sqrt{5}$, where $a$ and $b$ are integers.",
        "steps": [
            "For part (a), we write the expression as two identical brackets: $(3 + \\sqrt{5})(3 + \\sqrt{5})$.",
            "Expanding the brackets gives $9 + 3\\sqrt{5} + 3\\sqrt{5} + 5$.",
            "Collecting like terms yields $14 + 6\\sqrt{5}$.",
            "For part (b), we divide our result from part (a) by 2: $\\dfrac{14 + 6\\sqrt{5}}{2}$.",
            "Dividing both terms by 2 gives the final simplified form.",
            "Final Answer: $$\\text{(a) } 14 + 6\\sqrt{5}, \\text{ (b) } 7 + 3\\sqrt{5}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 14, \\text{ (b) } 7$$",
                "feedback": "You calculated $3^2 + (\\sqrt{5})^2 = 9 + 5 = 14$. This is a classic error! You must write out the brackets twice $(3+\\sqrt{5})(3+\\sqrt{5})$ and expand using FOIL to get the middle terms."
            },
            {
                "ans": "$$\\text{(a) } 14 + 6\\sqrt{5}, \\text{ (b) } 14 + 3\\sqrt{5}$$",
                "feedback": "You expanded the brackets perfectly, but in part (b) you only divided the surd by 2! When dividing an algebraic expression by a number, you must divide *every* term."
            },
            {
                "ans": "$$\\text{(a) } 9 + 5\\sqrt{5}, \\text{ (b) } 4.5 + 2.5\\sqrt{5}$$",
                "feedback": "It looks like you multiplied the $3$ and the $\\sqrt{5}$ together but forgot to expand properly. Remember, $(a+b)^2$ is $a^2 + 2ab + b^2$."
            }
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
        "subtopic": "Completing the Square",
        "difficulty": "8/9",
        "q": "(a) Write $3x^2 - 6x + 1$ in the form $a(x + b)^2 + c$.<br>(b) State the coordinates of the minimum point of the curve $y = 3x^2 - 6x + 1$.",
        "steps": [
            "For part (a), we first factorise the coefficient of $x^2$ out of the first two terms: $3(x^2 - 2x) + 1$.",
            "Next, we complete the square inside the bracket: $x^2 - 2x = (x - 1)^2 - 1$.",
            "Substituting this back into the expression: $3[(x - 1)^2 - 1] + 1$.",
            "Distributing the 3 gives $3(x - 1)^2 - 3 + 1$, which simplifies to $3(x - 1)^2 - 2$.",
            "For part (b), the minimum point of $y = a(x + b)^2 + c$ is located at $(-b, c)$.",
            "Substituting our values, the minimum point is $(1, -2)$.",
            "Final Answer: $$\\text{(a) } 3(x - 1)^2 - 2, \\text{ (b) } (1, -2)$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 3(x - 1)^2 - 1, \\text{ (b) } (1, -1)$$",
                "feedback": "You completed the square correctly inside the bracket, but forgot to multiply your $-1$ by the $3$ sitting outside the bracket! The $-1$ becomes a $-3$ before adding the $+1$."
            },
            {
                "ans": "$$\\text{(a) } 3(x - 1)^2 - 2, \\text{ (b) } (-1, -2)$$",
                "feedback": "You completed the square perfectly, but you forgot to invert the sign of the $x$-coordinate for the turning point. The coordinate is the value that makes the bracket equal to zero."
            },
            {
                "ans": "$$\\text{(a) } (3x - 1)^2 - 2, \\text{ (b) } (1, -2)$$",
                "feedback": "You kept the 3 attached to the $x$ inside the bracket! The correct format requires factorising the $a$ entirely *outside* the completed square: $a(x+b)^2+c$."
            }
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
        "subtopic": "Ratio and Sharing",
        "difficulty": "5/6",
        "q": "Given that $x : y = 1 : 2$ and $y : z = 3 : 5$.<br>(a) Find the ratio $x : y : z$ in its simplest form.<br>(b) Find the ratio $x : z$.",
        "steps": [
            "For part (a), we must make the value of $y$ consistent in both ratios. The lowest common multiple of 2 and 3 is 6.",
            "We scale the first ratio by 3: $x : y = 3 : 6$.",
            "We scale the second ratio by 2: $y : z = 6 : 10$.",
            "Combining these results gives the tripartite ratio $3 : 6 : 10$.",
            "For part (b), we extract the values for $x$ and $z$ from our combined ratio.",
            "Final Answer: $$\\text{(a) } 3 : 6 : 10, \\text{ (b) } 3 : 10$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 1 : 5 : 5, \\text{ (b) } 1 : 5$$",
                "feedback": "It looks like you just added the $y$ values together (2+3) instead of finding a common multiple! You must multiply the ratios to make the central variable identical."
            },
            {
                "ans": "$$\\text{(a) } 3 : 6 : 5, \\text{ (b) } 3 : 5$$",
                "feedback": "You multiplied the first ratio correctly to get $3:6$, but you forgot to multiply the $z$ side of the second ratio! If you double the $y$ to get 6, you must double the $z$ to get 10."
            },
            {
                "ans": "$$\\text{(a) } 1 : 6 : 5, \\text{ (b) } 1 : 5$$",
                "feedback": "You found the common multiple of 6 for $y$, but forgot to multiply the $x$ and $z$ parts by the same scale factors. A ratio must always be scaled evenly on both sides."
            }
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
        "major_area": "Number",
        "topic": "Iteration",
        "subtopic": "General Iterative Processes",
        "difficulty": "6/7",
        "q": "An iterative formula is given as $x_{n+1} = \\sqrt[3]{x_n + 7}$.<br>(a) Starting with $x_0 = 2$, calculate the value of $x_1$.<br>(b) Use your answer to part (a) to find the value of $x_2$, giving your answer to 3 significant figures.",
        "steps": [
            "For part (a), we substitute $x_0 = 2$ into the formula: $x_1 = \\sqrt[3]{2 + 7}$.",
            "Calculating the cube root gives $x_1 = \\sqrt[3]{9} \\approx 2.08008...$.",
            "For part (b), we substitute $x_1$ back into the formula: $x_2 = \\sqrt[3]{2.08008... + 7}$.",
            "Calculation: $x_2 = \\sqrt[3]{9.08008...} \\approx 2.0862...$.",
            "Rounding to 3 significant figures gives the final result.",
            "Final Answer: $$\\text{(a) } 2.08, \\text{ (b) } 2.09$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 2.08, \\text{ (b) } 2.11$$",
                "feedback": "You calculated $x_1$ correctly, but in part (b) you substituted $x_0 = 2$ back into the formula instead of using your new $x_1$ value! Iteration means feeding the previous answer back into the machine."
            },
            {
                "ans": "$$\\text{(a) } 3, \\text{ (b) } 2.15$$",
                "feedback": "It looks like you found the square root instead of the cube root in part (a)! Always check the small number written outside the root symbol."
            },
            {
                "ans": "$$\\text{(a) } 2.08, \\text{ (b) } 2.08$$",
                "feedback": "You likely rounded your $x_1$ value too early before plugging it back in for $x_2$. Always use the full, unrounded 'ANS' key on your calculator for iterative steps."
            }
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
        "subtopic": "Histograms",
        "difficulty": "6/7",
        "q": "The information below describes two bars in a histogram.<br>Bar A: Class $0 < w \\le 10$, Frequency $5$.<br>Bar B: Class $10 < w \\le 30$, Frequency $20$.<br>(a) Calculate the frequency density for each bar.<br>(b) State which bar would be taller on the histogram.",
        "steps": [
            "For part (a), we use the formula: $\\text{Frequency Density} = \\text{Frequency} \\div \\text{Class Width}$.",
            "For Bar A: $5 \\div 10 = 0.5$.",
            "For Bar B: $20 \\div 20 = 1.0$.",
            "For part (b), we compare the frequency densities. Since Bar B has a higher frequency density, it will be the taller bar.",
            "Final Answer: $$\\text{(a) A: } 0.5\\text{, B: } 1.0, \\text{ (b) Bar B}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) A: } 2.0\\text{, B: } 1.0, \\text{ (b) Bar A}$$",
                "feedback": "You calculated Class Width $\\div$ Frequency instead of Frequency $\\div$ Class Width! Frequency is always the numerator when finding Frequency Density."
            },
            {
                "ans": "$$\\text{(a) A: } 0.5\\text{, B: } 0.67, \\text{ (b) Bar B}$$",
                "feedback": "For Bar B, you divided by the Upper Bound ($30$) instead of the Class Width ($20$). Width is the difference between the bounds ($30 - 10$)."
            },
            {
                "ans": "$$\\text{(a) A: } 50\\text{, B: } 400, \\text{ (b) Bar B}$$",
                "feedback": "It looks like you multiplied the Frequency and the Class Width together. To find Frequency Density, you must divide the frequency by the width."
            }
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
        "subtopic": "Simultaneous Equations Non-Linear",
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
        "wrong_options": [
            {
                "ans": "$$x = 3, x = -1$$",
                "feedback": "You found the correct $x$-values, but you didn't finish the question! When asked for coordinates or solving simultaneous equations, you must always substitute back in to find the $y$-values."
            },
            {
                "ans": "$$(3, 9) \\text{ and } (1, 1)$$",
                "feedback": "You correctly factorised to $(x-3)(x+1)$, but you forgot to invert the $+1$ sign to get $x = -1$. Because $(-1)^2$ is also 1, this error can sometimes be hidden in the $y$-value check!"
            },
            {
                "ans": "$$(3, 9) \\text{ and } (-1, -1)$$",
                "feedback": "You calculated $y$ by substituting into $y = x^2$, but you wrote $(-1)^2 = -1$. Remember, a negative number squared is always a positive result!"
            }
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
        "subtopic": "Percentage Change and Interest",
        "difficulty": "5/6",
        "q": "An amount of $£5000$ is invested at $2\\%$ compound interest per year for 3 years.<br>(a) Calculate the total value of the investment after 3 years.<br>(b) Calculate the total interest earned over the 3-year period.",
        "steps": [
            "For part (a), we identify the multiplier for a $2\\%$ increase: $1 + 0.02 = 1.02$.",
            "We apply the compound interest formula: $£5000 \\times 1.02^3$.",
            "Calculation: $£5000 \\times 1.061208 = £5306.04$.",
            "For part (b), the interest earned is the difference between the final value and the original investment.",
            "Calculation: $£5306.04 - £5000 = £306.04$.",
            "Final Answer: $$\\text{(a) } £5306.04, \\text{ (b) } £306.04$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } £5300.00, \\text{ (b) } £300.00$$",
                "feedback": "You calculated Simple Interest instead of Compound Interest! For compound interest, you must use powers (e.g., $1.02^3$) because you earn interest on top of your interest each year."
            },
            {
                "ans": "$$\\text{(a) } £10368.00, \\text{ (b) } £5368.00$$",
                "feedback": "Check your decimal multiplier! A $2\\%$ increase is $1.02$. It looks like you used $1.2$, which represents a massive $20\\%$ increase."
            },
            {
                "ans": "$$\\text{(a) } £5306.04, \\text{ (b) } £5306.04$$",
                "feedback": "You nailed the calculation in part (a), but you just repeated the total value for part (b). 'Interest earned' means you must subtract the original £5000 investment from your final total."
            }
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
        "subtopic": "Polygons",
        "difficulty": "4/5",
        "img": "true",
        "q": "The exterior angle of a regular polygon is $18^\\circ$.<br>(a) Calculate the number of sides that the polygon has.<br>(b) Calculate the sum of the interior angles of this polygon.",
        "steps": [
            "For part (a), we use the geometric property that the sum of the exterior angles of any convex polygon is $360^\\circ$.",
            "We divide the total sum by the size of one exterior angle: $360 \\div 18 = 20$.",
            "For part (b), we use the formula for the sum of interior angles: $(n - 2) \\times 180^\\circ$.",
            "Substituting $n = 20$: $(20 - 2) \\times 180 = 18 \\times 180$.",
            "Calculation: $3240^\\circ$.",
            "Final Answer: $$\\text{(a) } 20 \\text{ sides}, \\text{ (b) } 3240^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 10 \\text{ sides}, \\text{ (b) } 1440^\\circ$$",
                "feedback": "You divided $180$ by $18$ instead of $360$! The exterior angles of any polygon always sum to exactly $360^\\circ$, not $180^\\circ$."
            },
            {
                "ans": "$$\\text{(a) } 20 \\text{ sides}, \\text{ (b) } 3600^\\circ$$",
                "feedback": "You found the number of sides correctly, but forgot to subtract 2 in your interior angle formula! The sum is $(n-2) \\times 180$, because a 20-sided polygon can be split into 18 triangles."
            },
            {
                "ans": "$$\\text{(a) } 20 \\text{ sides}, \\text{ (b) } 162^\\circ$$",
                "feedback": "For part (b), you found the size of ONE interior angle ($180 - 18$). Read the question carefully: it asks for the SUM of all the interior angles!"
            }
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
        "topic": "Trigonometric Graphs",
        "subtopic": "Solving Trig Equations Graphically",
        "difficulty": "6/7",
        "q": "(a) State the maximum value of the function $y = 3\\sin(x)$.<br>(b) State the coordinates of the first maximum point of the graph for $x \\ge 0^\\circ$.",
        "steps": [
            "For part (a), we recall that the standard sine function, $\\sin(x)$, oscillates between $-1$ and $1$.",
            "The coefficient $3$ represents the amplitude of the wave, so the maximum value is $3 \\times 1 = 3$.",
            "For part (b), a standard sine wave reaches its first maximum at $90^\\circ$.",
            "The $y$-coordinate at this point is the maximum value we found in part (a).",
            "Final Answer: $$\\text{(a) } 3, \\text{ (b) } (90^\\circ, 3)$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 3, \\text{ (b) } (180^\\circ, 3)$$",
                "feedback": "You got the amplitude right, but $180^\\circ$ is where the sine graph crosses the $x$-axis! A standard sine wave always hits its first peak at $90^\\circ$."
            },
            {
                "ans": "$$\\text{(a) } 3, \\text{ (b) } (0^\\circ, 3)$$",
                "feedback": "You're thinking of the Cosine graph! The graph of $y = \\cos(x)$ starts at its peak at $0^\\circ$. The Sine graph starts at $0$ and goes up."
            },
            {
                "ans": "$$\\text{(a) } 1, \\text{ (b) } (90^\\circ, 1)$$",
                "feedback": "You ignored the number $3$ in front of the function! A normal sine wave has a max of 1, but multiplying the function by 3 stretches it vertically (an amplitude of 3)."
            }
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
        "subtopic": "Reverse Percentages",
        "difficulty": "5/6",
        "q": "An item is reduced by $20\\%$ in a sale. The sale price of the item is $£40$.<br>(a) Calculate the original price of the item.<br>(b) After the sale, the price is increased back to its original value. Calculate the percentage increase from the sale price.",
        "steps": [
            "For part (a), we identify that the sale price represents $80\\%$ of the original cost ($100\\% - 20\\%$).",
            "To find the original price, we divide the sale price by the decimal multiplier: $40 \\div 0.8$.",
            "Calculation: $400 \\div 8 = 50$.",
            "For part (b), we find the increase required: $£50 - £40 = £10$.",
            "We calculate the percentage increase using the sale price as the original: $\\dfrac{10}{40} \\times 100$.",
            "Final Answer: $$\\text{(a) } £50, \\text{ (b) } 25\\%$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } £48, \\text{ (b) } 20\\%$$",
                "feedback": "For part (a), you calculated $20\\%$ of £40 and added it on! This is a Reverse Percentage question. You must divide by $0.8$ because the £40 represents $80\\%$ of the original price."
            },
            {
                "ans": "$$\\text{(a) } £50, \\text{ (b) } 20\\%$$",
                "feedback": "You calculated the original price perfectly, but fell into the percentage trap! To go from £40 back to £50 is an increase of £10. You must calculate that £10 out of the new starting point (£40), which is $25\\%$."
            },
            {
                "ans": "$$\\text{(a) } £32, \\text{ (b) } 25\\%$$",
                "feedback": "You multiplied £40 by $0.8$ instead of dividing! If a price was reduced in a sale, the original price must be higher than the sale price. Logic-check your answers!"
            }
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
        "subtopic": "Solving Equations Graphically",
        "difficulty": "6/7",
        "q": "(a) Describe fully the single transformation that maps the graph of $y = f(x)$ onto the graph of $y = f(x - 2)$.<br>(b) State the transformation that maps $y = f(x)$ onto $y = -f(x)$.",
        "steps": [
            "For part (a), we identify that the transformation is inside the function brackets, which affects the $x$-coordinates.",
            "A subtraction inside the bracket represents a horizontal translation in the <strong>opposite</strong> direction to the sign.",
            "Therefore, the transformation is a translation by 2 units to the right.",
            "In formal vector notation, this is $\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$.",
            "For part (b), an external negative sign reflects all $y$-values across the $x$-axis.",
            "Final Answer: $$\\text{(a) Translation by } \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}, \\text{ (b) Reflection in the } x\\text{-axis}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) Translation by } \\begin{pmatrix} -2 \\\\ 0 \\end{pmatrix}, \\text{ (b) Reflection in the } x\\text{-axis}$$",
                "feedback": "A very common error! Changes inside the bracket $f(x-a)$ shift the graph in the OPPOSITE direction to the sign. A minus 2 shifts it 2 units to the right (positive $x$ direction)."
            },
            {
                "ans": "$$\\text{(a) Translation by } \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}, \\text{ (b) Reflection in the } y\\text{-axis}$$",
                "feedback": "You translated correctly, but a negative sign OUTSIDE the function ($-f(x)$) negates the $y$-values, which flips the graph upside down across the $x$-axis! A reflection in the $y$-axis would be written as $f(-x)$."
            },
            {
                "ans": "$$\\text{(a) Translation by } \\begin{pmatrix} 0 \\\\ -2 \\end{pmatrix}, \\text{ (b) Reflection in the } x\\text{-axis}$$",
                "feedback": "Transformations inside the bracket only affect the $x$-axis (horizontal movement). A vertical translation of -2 would be written outside the bracket as $f(x) - 2$."
            }
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
        "subtopic": "Sequencies",
        "difficulty": "5/6",
        "q": "The $n^{th}$ term of a sequence is given by the expression $2n^2 + 1$.<br>(a) Find the $3^{rd}$ term of this sequence.<br>(b) Show that $51$ is a term in this sequence.",
        "steps": [
            "For part (a), we substitute $n = 3$ into the $n^{th}$ term expression: $2(3^2) + 1$.",
            "Calculation: $2(9) + 1 = 19$.",
            "For part (b), we set the expression equal to 51 and solve for $n$: $2n^2 + 1 = 51$.",
            "Subtracting 1 gives $2n^2 = 50$, then dividing by 2 gives $n^2 = 25$.",
            "Taking the square root gives $n = 5$. Since 5 is a positive integer, 51 is the $5^{th}$ term of the sequence.",
            "Final Answer: $$\\text{(a) } 19, \\text{ (b) 5th term (} n=5 \\text{)}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 37, \\text{ (b) } n=5$$",
                "feedback": "In part (a), you calculated $(2 \\times 3)^2 + 1 = 37$. Remember BIDMAS! You must square the $n$ value ($3^2 = 9$) before you multiply by the 2."
            },
            {
                "ans": "$$\\text{(a) } 19, \\text{ (b) Yes}$$",
                "feedback": "You cannot just write 'Yes'! In an exam, 'Show that' means you must provide mathematical proof. You must write out the algebra to prove that $n = 5$."
            },
            {
                "ans": "$$\\text{(a) } 13, \\text{ (b) } n=25$$",
                "feedback": "In part (a), it looks like you multiplied $2 \\times 3 \\times 2 + 1$. And in part (b), you found $n^2 = 25$ but forgot to take the square root to find the actual term position!"
            }
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
        "subtopic": "Compound Units: Speed, Density, Pressure",
        "difficulty": "4/5",
        "q": "An object has a mass of $2\\text{ kg}$ and a volume of $400\\text{ cm}^3$.<br>(a) Calculate the density of the object. Give your answer in $\\text{g/cm}^3$.<br>(b) Calculate the mass of $150\\text{ cm}^3$ of the same material.",
        "steps": [
            "For part (a), we first convert the mass to grams to match the required units: $2\\text{ kg} = 2000\\text{ g}$.",
            "We apply the density formula: $\\text{Density} = \\text{Mass} \\div \\text{Volume} = 2000 \\div 400$.",
            "Calculation: $5\\text{ g/cm}^3$.",
            "For part (b), we use the density from part (a) and the new volume: $\\text{Mass} = \\text{Density} \\times \\text{Volume}$.",
            "Calculation: $5 \\times 150 = 750\\text{ g}$.",
            "Final Answer: $$\\text{(a) } 5\\text{ g/cm}^3, \\text{ (b) } 750\\text{ g}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 0.005\\text{ g/cm}^3, \\text{ (b) } 0.75\\text{ g}$$",
                "feedback": "You forgot to convert the units! The question asks for the density in $\\text{g/cm}^3$, but you used the mass as $2\\text{ kg}$ instead of $2000\\text{ g}$."
            },
            {
                "ans": "$$\\text{(a) } 200\\text{ g/cm}^3, \\text{ (b) } 30000\\text{ g}$$",
                "feedback": "You divided the volume by the mass instead of mass by volume! Look at the units: $\\text{g/cm}^3$ literally translates to 'grams divided by cubic centimeters'."
            },
            {
                "ans": "$$\\text{(a) } 5\\text{ g/cm}^3, \\text{ (b) } 30\\text{ g}$$",
                "feedback": "In part (b), you divided the volume ($150$) by the density ($5$). To find mass, you must multiply the density by the volume."
            }
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
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Equation of a Circle",
        "difficulty": "6/7",
        "q": "(a) Write down the equation of a circle with centre $(0, 0)$ and a radius of $5$.<br>(b) Show by calculation that the point $(3, 4)$ lies on the circumference of this circle.",
        "steps": [
            "For part (a), we use the general equation for a circle centered at the origin: $x^2 + y^2 = r^2$.",
            "Substituting $r = 5$, we get $x^2 + y^2 = 5^2$, which simplifies to $x^2 + y^2 = 25$.",
            "For part (b), a point lies on the circumference if its coordinates satisfy the equation.",
            "We substitute $x = 3$ and $y = 4$ into the equation: $3^2 + 4^2$.",
            "Calculation: $9 + 16 = 25$. Since the result equals $r^2$, the point lies on the circle.",
            "Final Answer: $$\\text{(a) } x^2 + y^2 = 25, \\text{ (b) Shown}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } x^2 + y^2 = 5, \\text{ (b) Shown}$$",
                "feedback": "You forgot to square the radius! The standard equation is $x^2 + y^2 = r^2$. If the radius is 5, the number on the right must be 25."
            },
            {
                "ans": "$$\\text{(a) } x + y = 25, \\text{ (b) Not Shown}$$",
                "feedback": "The equation of a circle must have squared terms ($x^2 + y^2$). Without the squares, you have just written the equation for a straight line!"
            },
            {
                "ans": "$$\\text{(a) } x^2 + y^2 = 10, \\text{ (b) Shown}$$",
                "feedback": "You multiplied the radius by 2 instead of squaring it! Remember, $r^2$ means $5 \\times 5$, not $5 \\times 2$."
            }
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
        "subtopic": "Standard Form",
        "difficulty": "5/6",
        "q": "Work out the value of $\\dfrac{8 \\times 10^5}{2 \\times 10^{-2}}$.<br>(a) Give your answer in standard form.<br>(b) Give your answer as an ordinary number.",
        "steps": [
            "For part (a), we divide the leading coefficients: $8 \\div 2 = 4$.",
            "Next, we use the index law for division ($10^a \\div 10^b = 10^{a-b}$) for the powers of ten: $10^5 \\div 10^{-2} = 10^{5 - (-2)} = 10^7$.",
            "Combining these results gives $4 \\times 10^7$.",
            "For part (b), $10^7$ represents a 1 followed by seven zeros.",
            "Calculation: $4 \\times 10,000,000 = 40,000,000$.",
            "Final Answer: $$\\text{(a) } 4 \\times 10^7, \\text{ (b) } 40,000,000$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 4 \\times 10^3, \\text{ (b) } 4,000$$",
                "feedback": "You fell into the negative index trap! When dividing, you subtract the powers. $5 - (-2)$ is the same as $5 + 2$, which gives 7. You simply calculated $5 - 2$."
            },
            {
                "ans": "$$\\text{(a) } 6 \\times 10^7, \\text{ (b) } 60,000,000$$",
                "feedback": "You handled the powers of 10 correctly, but you subtracted the leading numbers ($8 - 2$) instead of dividing them! Coefficients must be divided."
            },
            {
                "ans": "$$\\text{(a) } 4 \\times 10^{-10}, \\text{ (b) } 0.0000000004$$",
                "feedback": "It looks like you multiplied the powers together ($5 \\times -2$) instead of subtracting them. Remember the division rule for indices: $a^m \\div a^n = a^{m-n}$."
            }
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
        "topic": "Circles",
        "subtopic": "Arcs and Sectors",
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
            "Final Answer: $$\\text{(a) } 2\\pi\\text{ cm}, \\text{ (b) } 6\\pi\\text{ cm}^2$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 6\\pi\\text{ cm}, \\text{ (b) } 2\\pi\\text{ cm}^2$$",
                "feedback": "You swapped the formulas! Arc length is based on the circumference ($2\\pi r$), and sector area is based on the area of a circle ($\\pi r^2$)."
            },
            {
                "ans": "$$\\text{(a) } 12\\pi\\text{ cm}, \\text{ (b) } 36\\pi\\text{ cm}^2$$",
                "feedback": "You found the circumference and area of the entire circle! You forgot to multiply your answers by the fraction of the circle you actually have ($\\frac{60}{360}$ or $\\frac{1}{6}$)."
            },
            {
                "ans": "$$\\text{(a) } \\pi\\text{ cm}, \\text{ (b) } 6\\pi\\text{ cm}^2$$",
                "feedback": "For part (a), it looks like you used $\\pi d$ but kept the radius as 6. If you use $\\pi d$, the diameter must be $12$. Alternatively, use $2\\pi r$ to avoid this mistake."
            }
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
        "subtopic": "Recurring Decimals to Fractions",
        "difficulty": "6/7",
        "q": "Express the recurring decimal $0.4\\dot{5}$ as a fraction in its simplest form showing all your working.",
        "steps": [
            "We begin by setting $x = 0.4555...$.",
            "We multiply by 10 to move the non-recurring digit: $10x = 4.5555...$.",
            "We multiply by 100 to shift the recurring part: $100x = 45.5555...$.",
            "Subtracting the two equations eliminates the recurring decimal: $100x - 10x = 45.5555... - 4.5555...$.",
            "This yields $90x = 41$.",
            "Finally, we divide by 90 to express $x$ as a fraction.",
            "Final Answer: $$\\dfrac{41}{90}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\dfrac{45}{99}$$",
                "feedback": "This is the fraction for $0.\\dot{4}\\dot{5}$ (0.454545...). Only the 5 is recurring in this question ($0.4555...$), so you must set up equations where the 'tails' match perfectly before subtracting."
            },
            {
                "ans": "$$\\dfrac{41}{99}$$",
                "feedback": "You subtracted the equations correctly ($45.55... - 4.55... = 41$), but you subtracted $x$ from $100x$ to get $99x$! You must subtract $10x$ from $100x$ to get $90x$ on the bottom."
            },
            {
                "ans": "$$\\dfrac{45}{100}$$",
                "feedback": "This is the fraction for the terminating decimal $0.45$. The dot above the 5 means it recurs infinitely, so it cannot be written over 100."
            }
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
        "subtopic": "Similarity in 3D",
        "difficulty": "7/8",
        "q": "Two mathematically similar solid spheres, A and B, have a radius ratio of $1 : 3$.<br>(a) Find the ratio of their surface areas.<br>(b) The volume of Sphere A is $10\\text{ cm}^3$. Calculate the volume of Sphere B.",
        "steps": [
            "For part (a), we use the property that if the linear scale factor is $k$, the area scale factor is $k^2$.",
            "Given $k = 3$, the area ratio is $1^2 : 3^2 = 1 : 9$.",
            "For part (b), we use the property that the volume scale factor is $k^3$.",
            "The volume scale factor is $3^3 = 27$.",
            "To find the volume of the larger sphere, we multiply the smaller volume by the scale factor: $10 \\times 27 = 270\\text{ cm}^3$.",
            "Final Answer: $$\\text{(a) } 1:9, \\text{ (b) } 270\\text{ cm}^3$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 1:3, \\text{ (b) } 30\\text{ cm}^3$$",
                "feedback": "You multiplied the area and the volume by the linear scale factor (3). Because area is 2D and volume is 3D, you must square the scale factor for area ($3^2$) and cube it for volume ($3^3$)."
            },
            {
                "ans": "$$\\text{(a) } 1:9, \\text{ (b) } 90\\text{ cm}^3$$",
                "feedback": "You used the area scale factor ($3^2=9$) to calculate the volume! Volume is a 3D property, so you must cube the linear scale factor ($3^3=27$)."
            },
            {
                "ans": "$$\\text{(a) } 1:6, \\text{ (b) } 270\\text{ cm}^3$$",
                "feedback": "For part (a), it looks like you multiplied the ratio by 2 instead of squaring it. The area scale factor is $k^2$, so $3^2$ is 9, not 6!"
            }
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
        "subtopic": "Algebraic Fractions 2",
        "difficulty": "7/8",
        "q": "Simplify fully: $$\\dfrac{x^2 - 9}{x^2 + 5x + 6}$$",
        "steps": [
            "We begin by factorising the numerator using the 'difference of two squares' identity: $x^2 - 9 = (x - 3)(x + 3)$.",
            "Next, we factorise the quadratic denominator by finding two numbers that multiply to $+6$ and add to $+5$. These are $+2$ and $+3$.",
            "The denominator becomes $(x + 2)(x + 3)$.",
            "We identify $(x + 3)$ as a common factor in both the numerator and the denominator and cancel it.",
            "Final Answer: $$\\dfrac{x - 3}{x + 2}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\dfrac{-9}{5x + 6}$$",
                "feedback": "You tried to cancel out the $x^2$ terms! You cannot cross out individual parts of an algebraic fraction if they are separated by plus or minus signs. You must factorise the top and bottom into brackets first."
            },
            {
                "ans": "$$\\dfrac{x - 3}{x - 2}$$",
                "feedback": "You factorised the numerator correctly, but made a sign error on the denominator! The factors of $+6$ that add to $+5$ are $+2$ and $+3$, not $-2$ and $-3$."
            },
            {
                "ans": "$$\\dfrac{x + 3}{x + 2}$$",
                "feedback": "It looks like you cancelled the wrong bracket! The numerator factorises to $(x-3)(x+3)$. Since the denominator has an $(x+3)$, those are the brackets that cancel out, leaving the $(x-3)$ on top."
            }
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
        "subtopic": "Systematic listing Strategies",
        "difficulty": "4/5",
        "q": "A school canteen offers a choice of 3 starters, 4 main courses, and 2 desserts.<br>(a) Calculate the total number of different 3-course meals that can be chosen.<br>(b) If one of the main courses is unavailable, how many 3-course meal combinations remain?",
        "steps": [
            "For part (a), we use the product rule for counting. We multiply the number of options for each course together.",
            "Calculation: $3 \\text{ (starters)} \\times 4 \\text{ (mains)} \\times 2 \\text{ (desserts)} = 24$.",
            "For part (b), we reduce the number of main courses to 3.",
            "New calculation: $3 \\times 3 \\times 2 = 18$.",
            "Final Answer: $$\\text{(a) } 24, \\text{ (b) } 18$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 9, \\text{ (b) } 8$$",
                "feedback": "You added the options together instead of multiplying! When choosing one item AND another item, you must use the Product Rule for counting and multiply the combinations."
            },
            {
                "ans": "$$\\text{(a) } 24, \\text{ (b) } 23$$",
                "feedback": "For part (b), it looks like you just subtracted 1 from the total combinations! If a main course is removed, you lose a whole set of combinations. You must recalculate $3 \\times 3 \\times 2$."
            },
            {
                "ans": "$$\\text{(a) } 12, \\text{ (b) } 9$$",
                "feedback": "It looks like you only multiplied the starters and the main courses. A 3-course meal also includes a dessert! You must multiply by 2 at the end."
            }
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
        "subtopic": "Parallel and Perpendicular Lines 2",
        "difficulty": "6/7",
        "q": "Line A has a gradient of $3$.<br>(a) State the gradient of a line that is perpendicular to Line A.<br>(b) Find the equation of Line B, which is perpendicular to Line A and passes through the point $(6, 5)$.",
        "steps": [
            "For part (a), we use the property that the product of perpendicular gradients is $-1$.",
            "We take the negative reciprocal of 3, which is $-\\dfrac{1}{3}$.",
            "For part (b), we use the straight-line formula $y - y_1 = m(x - x_1)$ with the point $(6, 5)$ and $m = -\\dfrac{1}{3}$.",
            "Substituting the values: $y - 5 = -\\dfrac{1}{3}(x - 6)$.",
            "Expanding the bracket: $y - 5 = -\\dfrac{1}{3}x + 2$.",
            "Adding 5 to both sides gives the final linear equation.",
            "Final Answer: $$\\text{(a) } -\\dfrac{1}{3}, \\text{ (b) } y = -\\dfrac{1}{3}x + 7$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } \\dfrac{1}{3}, \\text{ (b) } y = \\dfrac{1}{3}x + 3$$",
                "feedback": "You remembered to flip the gradient into a fraction (the reciprocal), but you forgot to make it negative! Perpendicular gradients must follow the rule $m_1 \\times m_2 = -1$."
            },
            {
                "ans": "$$\\text{(a) } -3, \\text{ (b) } y = -3x + 23$$",
                "feedback": "You remembered the negative sign, but forgot to flip the fraction! To find a perpendicular gradient, you must find the negative *reciprocal*."
            },
            {
                "ans": "$$\\text{(a) } -\\dfrac{1}{3}, \\text{ (b) } y = -\\dfrac{1}{3}x + 5$$",
                "feedback": "You found the correct gradient, but in part (b) you just pasted the y-coordinate ($5$) as your intercept ($c$). You must use $y-y_1 = m(x-x_1)$ to find the true intercept."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Perpendicular Precision",
            "content": "In coordinate geometry, 'perpendicular' is a mathematical instruction to use the negative reciprocal. I always advise students to perform a 'sanity check': if the original gradient is positive, the perpendicular one <strong>must</strong> be negative. Forgetting the minus sign is a very common error."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 22 February
    {
        "id": "002030",
        "date": "22 February 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Indices",
        "difficulty": "6/7",
        "q": "(a) Evaluate $16^{\\frac{3}{2}}$.<br>(b) Evaluate $16^{-\\frac{3}{2}}$.",
        "steps": [
            "For part (a), the denominator of the index represents the square root: $\\sqrt{16} = 4$.",
            "We then apply the numerator of the index, which is the cube: $4^3 = 64$.",
            "For part (b), a negative index indicates the reciprocal of the base.",
            "Using the result from part (a), we take the reciprocal of 64.",
            "Final Answer: $$\\text{(a) } 64, \\text{ (b) } \\dfrac{1}{64}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 24, \\text{ (b) } -24$$",
                "feedback": "You multiplied 16 by $\\frac{3}{2}$. A fractional index is not a multiplication! The denominator tells you the root (square root), and the numerator tells you the power (cube)."
            },
            {
                "ans": "$$\\text{(a) } 4096, \\text{ (b) } \\dfrac{1}{4096}$$",
                "feedback": "It looks like you cubed 16 to get 4096, but forgot to take the square root afterwards! Always apply the root (denominator) first to keep the numbers manageable."
            },
            {
                "ans": "$$\\text{(a) } 64, \\text{ (b) } -64$$",
                "feedback": "You nailed part (a), but made a crucial error in part (b). A negative index does NOT make the answer negative! It means you must find the reciprocal (1 over the number)."
            }
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
        "subtopic": "Limits of Accuracy and Bounds",
        "difficulty": "8/9",
        "q": "A variable $V$ is defined by the formula $V = \\dfrac{10}{x}$. Given that $x = 2$ correct to the nearest integer, calculate the maximum possible value of $V$.",
        "steps": [
            "To maximise the value of a fraction, we must divide the numerator by the smallest possible denominator.",
            "First, we find the lower bound for $x$. Since $x=2$ is rounded to the nearest integer, the lower bound is $1.5$.",
            "We calculate the maximum value of $V$ by dividing 10 by $1.5$.",
            "Calculation: $10 \\div \\dfrac{3}{2} = 10 \\times \\dfrac{2}{3} = \\dfrac{20}{3}$.",
            "Final Answer: $$6.\\dot{6}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$4$$",
                "feedback": "You divided 10 by the Upper Bound of $x$ ($2.5$). Making the denominator bigger makes the final answer *smaller*. To find the maximum value, you must divide by the Lower Bound!"
            },
            {
                "ans": "$$5$$",
                "feedback": "You didn't use bounds at all! You just calculated $10 \\div 2$. When a question asks for a 'maximum possible value', you must find the bounds before doing any calculations."
            },
            {
                "ans": "$$6.5$$",
                "feedback": "It looks like you found the lower bound of $x$ as $1.5$, but subtracted it from 10 instead of dividing! Pay close attention to the formula provided."
            }
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
        "subtopic": "Vector Problem Solving",
        "difficulty": "6/7",
        "q": "The vector $\\overrightarrow{AB} = 2\\mathbf{a}$ and the vector $\\overrightarrow{BC} = 3\\mathbf{a}$.<br>(a) Find the vector $\\overrightarrow{AC}$ in terms of $\\mathbf{a}$.<br>(b) Explain why the points $A$, $B$ and $C$ must lie on a straight line.",
        "steps": [
            "For part (a), we find the vector path $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC}$.",
            "Substituting the values: $2\\mathbf{a} + 3\\mathbf{a} = 5\\mathbf{a}$.",
            "For part (b), we observe that $\\overrightarrow{AB}$ and $\\overrightarrow{BC}$ are both scalar multiples of the same vector $\\mathbf{a}$.",
            "This means the two line segments are parallel to each other.",
            "Since the segments also share a common point ($B$), they must be collinear.",
            "Final Answer: $$\\text{(a) } 5\\mathbf{a}, \\text{ (b) Parallel and share a common point}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 5\\mathbf{a}, \\text{ (b) They are parallel}$$",
                "feedback": "You are only halfway there! While it is true they are parallel because they are multiples of $\\mathbf{a}$, parallel lines don't have to be the same line. You must also state that they share a common point ($B$)."
            },
            {
                "ans": "$$\\text{(a) } -\\mathbf{a}, \\text{ (b) They are parallel}$$",
                "feedback": "You subtracted the vectors instead of adding them! To travel from A to C, you must go forward along AB and forward along BC, so $2\\mathbf{a} + 3\\mathbf{a}$."
            },
            {
                "ans": "$$\\text{(a) } 5\\mathbf{a}, \\text{ (b) They share a common point}$$",
                "feedback": "You correctly noted they share point $B$, but you forgot the other half of the proof! Two lines can share a point and shoot off in different directions. You must also state they are scalar multiples (parallel)."
            }
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
        "subtopic": "Exact Trigonometric Values",
        "difficulty": "5/6",
        "q": "(a) State the exact value of $\\tan(45^\\circ)$.<br>(b) Calculate the value of $\\tan(45^\\circ) + \\sin(90^\\circ)$.",
        "steps": [
            "For part (a), we recall the exact trigonometric values. $\\tan(45^\\circ)$ is equal to $1$.",
            "For part (b), we recall that $\\sin(90^\\circ)$ is also equal to $1$.",
            "We sum the two values: $1 + 1 = 2$.",
            "Final Answer: $$\\text{(a) } 1, \\text{ (b) } 2$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 1, \\text{ (b) } 1$$",
                "feedback": "You correctly recalled $\\tan(45^\\circ)=1$, but it looks like you thought $\\sin(90^\\circ)$ was 0. Think about the sine graph: it starts at 0, but reaches its peak of 1 at $90^\\circ$!"
            },
            {
                "ans": "$$\\text{(a) } 0.5, \\text{ (b) } 1.5$$",
                "feedback": "You confused $\\tan(45^\\circ)$ with $\\sin(30^\\circ)$! $\\tan(45^\\circ)$ is exactly 1 because the opposite and adjacent sides of a $45^\\circ$ right-angled triangle are equal length."
            },
            {
                "ans": "$$\\text{(a) } \\dfrac{\\sqrt{2}}{2}, \\text{ (b) } 1 + \\dfrac{\\sqrt{2}}{2}$$",
                "feedback": "You gave the exact value for $\\sin(45^\\circ)$ or $\\cos(45^\\circ)$ instead of $\\tan(45^\\circ)$. Remember SOH CAH TOA: Tan is Opposite $\\div$ Adjacent, which gives $1 \\div 1 = 1$."
            }
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
        "subtopic": "Circle Theorems 2",
        "difficulty": "5/6",
        "img": "true",
        "q": "In the diagram, $ABCD$ is a cyclic quadrilateral. Angle $A = 80^\\circ$.<br>(a) Find the size of angle $C$.<br>(b) Given that angle $B$ is twice the size of angle $D$, calculate the size of angle $D$.",
        "steps": [
            "For part (a), we apply the circle theorem that opposite angles in a cyclic quadrilateral sum to $180^\\circ$.",
            "Angle $C = 180^\\circ - 80^\\circ = 100^\\circ$.",
            "For part (b), we let angle $D$ be $x$ and angle $B$ be $2x$.",
            "Since they are opposite angles, $x + 2x = 180^\\circ \\implies 3x = 180^\\circ$.",
            "Solving for $x$: $x = 180 \\div 3 = 60^\\circ$.",
            "Final Answer: $$\\text{(a) } 100^\\circ, \\text{ (b) } 60^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 80^\\circ, \\text{ (b) } 60^\\circ$$",
                "feedback": "You assumed that opposite angles are equal! That is true for a parallelogram, but in a cyclic quadrilateral, opposite angles must *add up to* $180^\\circ$."
            },
            {
                "ans": "$$\\text{(a) } 100^\\circ, \\text{ (b) } 120^\\circ$$",
                "feedback": "You set up the algebra perfectly ($3x = 180$), but you gave the answer for angle $B$ ($120^\\circ$)! The question specifically asked for the size of angle $D$ ($60^\\circ$)."
            },
            {
                "ans": "$$\\text{(a) } 100^\\circ, \\text{ (b) } 90^\\circ$$",
                "feedback": "It looks like you solved $x + x = 180$ instead of $2x + x = 180$. Remember, angle B is *twice* the size of angle D, so there are 3 'parts' in total making up the $180^\\circ$."
            }
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
        "subtopic": "Linear Inequalities in two Variables",
        "difficulty": "7/8",
        "img": "true",
        "q": "A region $R$ is defined by the inequalities $y > x$ and $x + y < 4$.<br>(a) Determine if the coordinate point $(1, 1)$ lies within the region $R$.<br>(b) State a coordinate point with integer values that lies strictly inside region $R$.",
        "steps": [
            "For part (a), a point lies in the region only if it satisfies <strong>both</strong> inequalities strictly.",
            "Testing $(1, 1)$ in $y > x$: $1 > 1$ is false (it is equal). Therefore, the point lies on the boundary, not inside the region.",
            "For part (b), we choose a point where the $y$-value is greater than the $x$-value, and the sum is less than 4.",
            "Testing $(1, 2)$: $2 > 1$ is true, and $1 + 2 = 3$, which is less than 4. This point satisfies both.",
            "Final Answer: $$\\text{(a) No}, \\text{ (b) } (1, 2)$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) Yes}, \\text{ (b) } (1, 1)$$",
                "feedback": "You assumed that because $(1, 1)$ is on the line $y=x$, it is in the region! The symbol $>$ means strictly greater than. If it was $\\ge$, you would be correct."
            },
            {
                "ans": "$$\\text{(a) No}, \\text{ (b) } (2, 1)$$",
                "feedback": "Your point $(2, 1)$ has $x=2$ and $y=1$. This fails the first inequality ($y > x$) because $1$ is not greater than $2$!"
            },
            {
                "ans": "$$\\text{(a) Yes}, \\text{ (b) } (2, 2)$$",
                "feedback": "The point $(2, 2)$ fails both inequalities! $2$ is not strictly greater than $2$, and $2+2=4$, which is not strictly less than $4$."
            }
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
        "subtopic": "Indices",
        "difficulty": "6/7",
        "q": "(a) Solve the equation $3^{2x} = 27$.<br>(b) Find the value of $y$ for which $3^{y} = \\dfrac{1}{27}$.",
        "steps": [
            "For part (a), we first express 27 as a power of 3: $27 = 3^3$.",
            "Since the bases are now equal, we can equate the indices: $2x = 3$.",
            "Solving for $x$: $x = 1.5$.",
            "For part (b), we express $\\dfrac{1}{27}$ as a power of 3.",
            "We know $27 = 3^3$, so the reciprocal $\\dfrac{1}{27} = 3^{-3}$.",
            "Therefore, $y = -3$.",
            "Final Answer: $$\\text{(a) } 1.5, \\text{ (b) } -3$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 3, \\text{ (b) } \\dfrac{1}{3}$$",
                "feedback": "For part (a), you found that $2x = 3$, but forgot to divide by 2! For part (b), a fraction like $\\frac{1}{27}$ is created by a *negative* index, not a fractional index."
            },
            {
                "ans": "$$\\text{(a) } 9, \\text{ (b) } -9$$",
                "feedback": "It looks like you divided 27 by 3 to get 9! Indices represent powers ($3 \\times 3 \\times 3 = 27$), not multiplication ($3 \\times 9 = 27$)."
            },
            {
                "ans": "$$\\text{(a) } 1.5, \\text{ (b) } 3$$",
                "feedback": "You nailed part (a), but missed the negative sign in part (b). $3^3 = 27$, but because the 27 is on the denominator of a fraction, the index must be negative ($-3$)."
            }
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
