const problemBank = [
        // 1 January
    {
        "id": "001001",
        "date": "1 January 2026",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "Exact Trigonometric Values",
        "difficulty": "6/7",
        "q": "(a) Write down the exact value of $\\sin(30^\\circ)$.<br>(b) Calculate the value of $\\sin(30^\\circ) + \\cos(60^\\circ)$.",
        "steps": [
            "For part (a), we recall the exact trigonometric values for standard angles. The value of $\\sin(30^\\circ)$ is $0.5$ (or $\\dfrac{1}{2}$).",
            "For part (b), we recall that $\\cos(60^\\circ)$ is also equal to $0.5$.",
            "We then add these two values together: $0.5 + 0.5 = 1$.",
            "Final Answer: $$(a)\\ 0.5,\\ (b)\\ 1$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) 0.5, (b) 1.5}$$",
                "feedback": "You recalled $\\sin(30^\\circ)$ correctly, but it looks like you thought $\\cos(60^\\circ)$ was equal to $1$. Remember that $\\sin(30^\\circ)$ and $\\cos(60^\\circ)$ are complementary and have the exact same value!"
            },
            {
                "ans": "$$\\text{(a) 0.866, (b) 1.366}$$",
                "feedback": "You have confused $\\sin(30^\\circ)$ with $\\cos(30^\\circ)$, which is $\\frac{\\sqrt{3}}{2}$ (approx $0.866$). Make sure you memorise the exact values for the non-calculator paper!"
            },
            {
                "ans": "$$\\text{(a) 0.5, (b) 0}$$",
                "feedback": "It looks like you subtracted the two values instead of adding them, or you mistakenly thought $\\cos(60^\\circ)$ was negative!"
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Complementary Angles",
            "content": "A useful shortcut for the non-calculator paper is remembering that $\\sin(\\theta) = \\cos(90 - \\theta)$. This explains why $\\sin(30^\\circ)$ and $\\cos(60^\\circ)$ share the same value. Mastery of these exact values is essential for Grade 7 success."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 2 January
    {
        "id": "001002",
        "date": "2 January 2026",
        "major_area": "Number",
        "topic": "Ratio",
        "subtopic": "Ratio and Sharing",
        "difficulty": "4/5",
        "q": "Ali and Beth share an amount of money in the ratio $3 : 5$. Beth receives $£40$ more than Ali.<br>(a) Calculate the total amount of money shared.<br>(b) If the ratio were changed to $3 : 7$ for the same total amount, how much would Beth receive?",
        "steps": [
            "For part (a), we identify the difference in parts between Beth and Ali: $5 - 3 = 2$ parts.",
            "We are given that this difference represents $£40$, so $1$ part is equal to $£40 \\div 2 = £20$.",
            "The total number of parts is $3 + 5 = 8$ parts. Therefore, the total money is $8 \\times £20 = £160$.",
            "For part (b), the new ratio $3 : 7$ has a total of $10$ parts. We divide the total money by $10$ to find the value of one new part: $£160 \\div 10 = £16$.",
            "Beth's share is $7$ parts, so we calculate $7 \\times £16 = £112$.",
            "Final Answer: $$(a)\\ £160,\\ (b)\\ £112$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) £320, (b) £224}$$",
                "feedback": "You divided the £40 by the total ratio parts (8) instead of the difference between their parts (2). Remember, the £40 represents how much *more* Beth has, not the total amount!"
            },
            {
                "ans": "$$\\text{(a) £160, (b) £140}$$",
                "feedback": "You calculated the total correctly, but in part (b), you kept the value of one part as £20. When the ratio changes to $3:7$, the total number of parts changes to 10, so you must calculate a new value for one part."
            },
            {
                "ans": "$$\\text{(a) £100, (b) £112}$$",
                "feedback": "It looks like you calculated Beth's original share (£100) instead of the total amount shared for part (a). Always re-read the final instruction!"
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The 'Difference' Trap",
            "content": "The most common error is dividing the $£40$ by the total parts (8) instead of the difference in parts (2). Always read carefully to see if the value given is the 'total' or the 'difference' between shares."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Ratio: Download the Full Number & Ratio Pack"
    },
    // 3 January
    {
        "id": "001003",
        "date": "3 January 2026",
        "major_area": "Algebra",
        "topic": "Expanding Brackets",
        "subtopic": "Expanding Brackets",
        "difficulty": "6/7",
        "q": "Expand and simplify fully: $(x + 3)(x - 2)(x + 4)$.",
        "steps": [
            "We begin by expanding the first two brackets: $(x + 3)(x - 2) = x^2 - 2x + 3x - 6$, which simplifies to $x^2 + x - 6$.",
            "Next, we multiply this resulting quadratic by the third bracket: $(x^2 + x - 6)(x + 4)$.",
            "We distribute each term: $x(x^2 + x - 6) + 4(x^2 + x - 6) = (x^3 + x^2 - 6x) + (4x^2 + 4x - 24)$.",
            "Finally, we collect the like terms to find the simplified expression.",
            "Final Answer: $$x^3 + 5x^2 - 2x - 24$$"
        ],
        "wrong_options": [
            {
                "ans": "$$x^3 - 24$$",
                "feedback": "You cannot simply multiply the first terms and the last terms together! You must expand the brackets methodically using grid multiplication or FOIL to ensure you don't miss the $x^2$ and $x$ terms."
            },
            {
                "ans": "$$x^3 + 5x^2 + 10x - 24$$",
                "feedback": "You made a sign error when combining your $x$ terms. Expanding the final bracket gives $-6x$ and $+4x$. Remember that $-6 + 4$ is $-2$, not $+10$!"
            },
            {
                "ans": "$$x^3 + 5x^2 - 2x + 24$$",
                "feedback": "Watch your signs on the final multiplication! You multiplied $-6$ by $+4$ but wrote a positive result. A negative multiplied by a positive always results in a negative number."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systematic Expansion",
            "content": "When expanding triple brackets, students often lose track of terms. I always recommend expanding two brackets first and using distributed multiplication (as above) for the final multiplication to ensure every combination is captured without error."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 4 January
    {
        "id": "001004",
        "date": "4 January 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Changing the Subject of a Formula",
        "difficulty": "5/6",
        "q": "The formula for the final velocity of an object is given by $v^2 = u^2 + 2as$.<br>(a) Rearrange the formula to make $u$ the subject.<br>(b) Calculate the value of $u$ when $v = 20, a = 2$ and $s = 36$.",
        "steps": [
            "For part (a), we subtract $2as$ from both sides of the equation: $v^2 - 2as = u^2$.",
            "We then take the square root of both sides to isolate $u$. We take the positive square root because the given values describe motion in the positive direction, so the initial velocity must also be positive.",
            "For part (b), we substitute the given values into our new formula: $u = \\sqrt{20^2 - 2(2)(36)}$.",
            "Calculating the values gives $u = \\sqrt{400 - 144} = \\sqrt{256}$.",
            "Final Answer: $$(a)\\ u = \\sqrt{v^2 - 2as},\\ (b)\\ 16$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a)} u = v - \\sqrt{2as}, \\text{(b) 8}$$",
                "feedback": "You cannot square root individual terms separated by a minus sign! $\\sqrt{v^2 - 2as}$ does not equal $v - \\sqrt{2as}$. The square root symbol must act as a bracket over the entire expression."
            },
            {
                "ans": "$$\\text{(a)} u = \\sqrt{v^2 + 2as}, \\text{(b) 23.3}$$",
                "feedback": "You made a sign error when moving the $2as$ across the equals sign. To move a positive term to the other side, you must subtract it!"
            },
            {
                "ans": "$$\\text{(a)} u = \\dfrac{v^2}{2as}\\text{, (b) 2.78}$$",
                "feedback": "You divided by $2as$ instead of subtracting it. Because $u^2$ and $2as$ are added together, you must use subtraction to separate them."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Order of Rearrangement",
            "content": "When rearranging, think of it as 'undoing' the formula in reverse BIDMAS order. We must deal with the addition of $2as$ before we can address the square power on the $u$."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 5 January
    {
        "id": "001005",
        "date": "5 January 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Rounding, Estimation and Error Intervals",
        "difficulty": "4/5",
        "q": "(a) Estimate the value of $\\dfrac{403 \\times 1.98}{0.49}$.<br>(b) State, with a reason, whether your estimate is an overestimate or an underestimate.",
        "steps": [
            "For part (a), we round each number to one significant figure: $403 \\approx 400$, $1.98 \\approx 2$, and $0.49 \\approx 0.5$.",
            "We perform the calculation: $\\dfrac{400 \\times 2}{0.5} = \\dfrac{800}{0.5}$.",
            "Dividing by $0.5$ is equivalent to multiplying by $2$, so the estimate is $1600$.",
            "For part (b), we compare the rounded values to the originals. We rounded the numerator terms down slightly, but we rounded the denominator up more significantly ($0.49$ to $0.5$ is actually an increase).",
            "Since the numerator stayed roughly the same but we divided by a larger number than the original, the result is an underestimate.",
            "Final Answer: $$(a)\\ 1600,\\ (b)\\ \\text{Underestimate (denominator increased)}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) 400, (b) Underestimate}$$",
                "feedback": "It looks like you divided by 2 instead of 0.5. Remember that dividing a number by 0.5 is the mathematical equivalent of doubling it!"
            },
            {
                "ans": "$$\\text{(a) 1600, (b) Overestimate}$$",
                "feedback": "You calculated the estimate correctly, but your reasoning is flawed. Because we rounded the denominator UP to 0.5, we divided by a larger number, which makes the final answer smaller (an underestimate)."
            },
            {
                "ans": "$$\\text{(a) 1628.2, (b) Exact value}$$",
                "feedback": "You used a calculator to find the exact value! When a question says 'Estimate', you MUST round every single number to 1 significant figure first, or you will score zero marks."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Dividing by Decimals",
            "content": "Students often struggle with $\\div 0.5$. I always teach my classes to remember that 'how many halves go into 800' is the same as doubling the 800. It turns a potential decimal error into a simple mental calculation."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 6 January
    {
        "id": "001006",
        "date": "6 January 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Factorising Expressions 1",
        "difficulty": "7/8",
        "q": "(a) Factorise fully: $18x^2 - 50y^2$.<br>(b) Use your answer to part (a) to calculate the value of $18(10)^2 - 50(2)^2$.",
        "steps": [
            "For part (a), we first factor out the highest common factor, which is $2$: $2(9x^2 - 25y^2)$.",
            "We recognize that the expression inside the brackets is the difference of two squares: $(3x)^2 - (5y)^2$.",
            "This factorises to $2(3x - 5y)(3x + 5y)$.",
            "For part (b), we substitute $x = 10$ and $y = 2$ into the factorised form: $2(30 - 10)(30 + 10)$.",
            "Calculation: $2(20)(40) = 40 \\times 40$.",
            "Final Answer: $$(a)\\ 2(3x - 5y)(3x + 5y),\\ (b)\\ 1600$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a)} (3x - 5y)(3x + 5y)\\text{, (b) 800}$$",
                "feedback": "You correctly spotted the Difference of Two Squares, but you forgot to factor out the common numerical factor of 2 first! Both terms are even numbers, so 2 must be sitting outside the brackets."
            },
            {
                "ans": "$$\\text{(a)} 2(9x^2 - 25y^2)\\text{, (b) 1600}$$",
                "feedback": "You calculated part (b) correctly, but you didn't 'factorise fully' in part (a). Once you pull out the factor of 2, you must factorise the remaining quadratic using the Difference of Two Squares."
            },
            {
                "ans": "$$\\text{(a)} 2(3x - 5y)^2\\text{, (b) 800}$$",
                "feedback": "Be careful! $(3x - 5y)^2$ expands to $9x^2 - 30xy + 25y^2$. The Difference of Two Squares must always have one bracket with a plus sign and one with a minus sign to cancel out the middle term."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 'Factorise Fully' Hint",
            "content": "Whenever a question says 'factorise fully', it is a strong indication that there is more than one step involved. Always look for a common numerical factor before searching for quadratic patterns like the difference of two squares."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },   
    // 7 January
    {
        "id": "001007",
        "date": "7 January 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Factorising Expressions 2",
        "difficulty": "5/6",
        "q": "(a) Factorise $x^2 - 5x - 24$.<br>(b) Solve the equation $x^2 - 5x - 24 = 0$.",
        "steps": [
            "For part (a), we look for two numbers that multiply to give $-24$ and add to give $-5$.",
            "The factor pairs of $24$ are $(1,24), (2,12), (3,8), (4,6)$. The pair $(3, 8)$ can produce $-5$ if we use $-8$ and $+3$.",
            "The factorised form is $(x - 8)(x + 3)$.",
            "For part (b), we set each bracket to zero: $x - 8 = 0$ or $x + 3 = 0$.",
            "Final Answer: $$(a)\\ (x - 8)(x + 3),\\ (b)\\ x = 8,\\ x = -3$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a)} (x + 8)(x - 3)\\text{, (b) x = -8, x = 3}$$",
                "feedback": "You chose the correct numbers (8 and 3), but your signs are backwards! If you expand $(x + 8)(x - 3)$, the middle term becomes $+5x$. We need $-5x$, so the larger number must be negative."
            },
            {
                "ans": "$$\\text{(a)} (x - 8)(x + 3)\\text{, (b) x = -8, x = 3}$$",
                "feedback": "You factorised perfectly in part (a), but you forgot to invert the signs when solving the equation! If $(x - 8) = 0$, then $x$ must be positive 8."
            },
            {
                "ans": "$$\\text{(a)} (x - 12)(x + 2)\\text{, (b) x = 12, x = -2}$$",
                "feedback": "Be careful with your factor pairs! While $-12$ and $+2$ multiply to make $-24$, they add together to make $-10x$. You need the pair that adds to make $-5x$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Sign Reversal",
            "content": "I frequently see students find the correct brackets but then fail to 'invert' the signs for the final solutions. If your bracket is $(x - 8)$, the solution must be $x = 8$. Always double-check this final step to secure the accuracy marks."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 8 January
    {
        "id": "001008",
        "date": "8 January 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Surds",
        "difficulty": "8/9",
        "q": "Rationalise the denominator and simplify fully:<br>$$\\dfrac{10}{3 + \\sqrt{2}}$$",
        "steps": [
            "To rationalise the denominator, we multiply both the numerator and the denominator by the conjugate of the expression, which is $3 - \\sqrt{2}$.",
            "The numerator becomes $10(3 - \\sqrt{2})$, which expands to $30 - 10\\sqrt{2}$.",
            "The denominator is a difference of two squares: $(3 + \\sqrt{2})(3 - \\sqrt{2}) = 3^2 - (\\sqrt{2})^2$.",
            "Calculating the denominator gives $9 - 2 = 7$.",
            "Finally, we write the expression as a single fraction.",
            "Final Answer: $$\\dfrac{30 - 10\\sqrt{2}}{7}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\dfrac{30 + 10\\sqrt{2}}{7}$$",
                "feedback": "You multiplied by the correct terms, but you forgot to change the sign! To create the 'difference of two squares' on the bottom, you must multiply by the conjugate: $(3 - \\sqrt{2})$."
            },
            {
                "ans": "$$\\dfrac{30 - 10\\sqrt{2}}{11}$$",
                "feedback": "You made an error expanding the denominator. $(3 + \\sqrt{2})(3 - \\sqrt{2})$ expands to $9 - 2$. It looks like you added the 2 instead of subtracting it!"
            },
            {
                "ans": "$$\\dfrac{10(3 - \\sqrt{2})}{5}$$",
                "feedback": "You expanded the denominator incorrectly. It looks like you added $3$ and $2$ rather than squaring them ($3^2 - 2$). Remember, $(a+b)(a-b) = a^2 - b^2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Conjugate Rule",
            "content": "When the denominator contains a sum like $a + \\sqrt{b}$, you must multiply by $a - \\sqrt{b}$ to eliminate the surd. This creates a difference of two squares in the denominator, which will always result in a rational integer. This is a high-level skill frequently found in non-calculator Paper 1 exams."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 9 January
    {
        "id": "001009",
        "date": "9 January 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Indices",
        "difficulty": "7/8",
        "q": "Simplify fully: $$(27x^6)^{\\frac{2}{3}}$$",
        "steps": [
            "We apply the power of $\\dfrac{2}{3}$ to both the numerical coefficient and the algebraic term separately.",
            "For the coefficient, we calculate $27^{\\frac{2}{3}}$. This involves finding the cube root of 27 and then squaring the result: $(\\sqrt[3]{27})^2 = 3^2 = 9$.",
            "For the algebraic term, we apply the power rule $(x^a)^b = x^{ab}$: $x^{6 \\times \\frac{2}{3}} = x^4$.",
            "We then combine the two results to find the final simplified expression.",
            "Final Answer: $$9x^4$$"
        ],
        "wrong_options": [
            {
                "ans": "$$18x^4$$",
                "feedback": "You applied the index laws correctly to the $x$ term, but you multiplied $27$ by $\\frac{2}{3}$. Remember, $27$ is a base number, so you must find its cube root and then square it!"
            },
            {
                "ans": "$$9x^{18}$$",
                "feedback": "You evaluated the coefficient correctly ($9$), but you applied the power to the $x$ term incorrectly. When raising a power to a power, you must multiply the indices ($6 \\times \\frac{2}{3}$), not raise $x^6$ to the power of 3!"
            },
            {
                "ans": "$$27x^4$$",
                "feedback": "You correctly multiplied the powers on the $x$ term, but you completely ignored the numerical coefficient! The power outside the bracket must be applied to every single item inside the bracket."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root Before Power",
            "content": "When dealing with fractional indices, I always advise students to find the root first. Calculating the cube root of 27 is far easier than squaring 27 and then attempting to find the cube root of 729. Efficiency is key in a non-calculator environment."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 10 January
    {
        "id": "001010",
        "date": "10 January 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Equations of Linear Graphs",
        "difficulty": "5/6",
        "q": "A straight line passes through the points $(0, 4)$ and $(3, 10)$.<br>(a) Find the gradient of the line.<br>(b) Find the equation of the line in the form $y = mx + c$.",
        "steps": [
            "For part (a), we calculate the gradient ($m$) by finding the change in $y$ divided by the change in $x$: $m = \\dfrac{10 - 4}{3 - 0}$.",
            "Simplifying this gives $m = \\dfrac{6}{3} = 2$.",
            "For part (b), we identify the $y$-intercept ($c$). Since the line passes through $(0, 4)$, the value of $c$ must be 4.",
            "Finally, we substitute our values for $m$ and $c$ into the general equation $y = mx + c$.",
            "Final Answer: $$(a)\\ 2,\\ (b)\\ y = 2x + 4$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) 0.5, (b) }y = 0.5x + 4$$",
                "feedback": "It looks like you calculated the change in $x$ divided by the change in $y$! The gradient formula is 'rise over run', meaning the $y$-values must always be on the top of the fraction."
            },
            {
                        "ans": "\\text{(a) 2, (b) }y = 4x + 2$$",
                "feedback": "You calculated the gradient correctly, but you swapped your $m$ and $c$ values in the final equation! The gradient is the number attached to $x$, and the intercept stands alone."
            },
            {
                "ans": "\\text{(a) 4.6, (b) }y = 4.6x$$",
                "feedback": "You tried to calculate the gradient by dividing $14$ by $3$. You added the coordinates together instead of subtracting them! Remember: $y_2 - y_1$ over $x_2 - x_1$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Spotting the Intercept",
            "content": "Any coordinate in the form $(0, y)$ is a gift from the examiner—it is the $y$-intercept! If you aren't given the $(0, y)$ point, you must substitute one of your known coordinates into $y = mx + c$ and solve for $c$ algebraically."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 11 January
    {
        "id": "001011",
        "date": "11 January 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Limits of Accuracy and Bounds",
        "difficulty": "5/6",
        "q": "A number, $x$, is $8.4$ when truncated to one decimal place.<br>(a) State the lower bound for the value of $x$.<br>(b) Write down the error interval for $x$.",
        "steps": [
            "For part (a), we identify that truncation means 'cutting off' the digits. The smallest possible value $x$ could be is $8.4$ itself.",
            "For part (b), we determine the upper bound. Since $x$ is truncated to $8.4$, any value less than $8.5$ would still result in $8.4$ when the subsequent digits are removed.",
            "We combine these into an inequality to show the error interval.",
            "Final Answer: $$(a)\\ 8.4,\\ (b)\\ 8.4 \\le x < 8.5$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) 8.35, (b) }8.35 \\le x < 8.45$$",
                "feedback": "You have calculated the bounds for a number that has been *rounded*! Truncation is different; it simply chops the end off the number. Therefore, $8.49$ truncates to $8.4$, not $8.5$."
            },
            {
                "ans": "$$\\text{(a) 8.4, (b) }8.4 \\le x \\le 8.5$$",
                "feedback": "You correctly identified the values, but your upper inequality sign is incorrect! If $x$ was exactly $8.5$, it would truncate to $8.5$. Therefore, $x$ must be strictly *less than* $8.5$."
            },
            {
                "ans": "$$\\text{(a) 8.41, (b) }8.41 \\le x < 8.49$$",
                "feedback": "You have written out the next available digits, but bounds in mathematics consider infinite continuous values (like $8.499999...$). Therefore, the upper limit is exactly $8.5$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Truncation vs Rounding",
            "content": "This is a frequent stumbling block. Unlike rounding, where the lower bound for 8.4 would be 8.35, truncation simply means the original digits are preserved. Always read the question carefully for the word 'truncated' to avoid the rounding trap."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 12 January
    {
        "id": "001012",
        "date": "12 January 2026",
        "major_area": "Algebra",
        "topic": "Linear Equations",
        "subtopic": "Solving Fractional Equations",
        "difficulty": "4/5",
        "q": "Solve the equation: $$\\dfrac{4x - 1}{3} = 2x + 5$$",
        "steps": [
            "We begin by multiplying both sides of the equation by 3 to eliminate the fraction: $4x - 1 = 3(2x + 5)$.",
            "Next, we expand the brackets on the right-hand side: $4x - 1 = 6x + 15$.",
            "We then subtract $4x$ from both sides to collect the $x$ terms: $-1 = 2x + 15$.",
            "Subtracting 15 from both sides gives $-16 = 2x$.",
            "Finally, we divide by 2 to find the value of $x$.",
            "Final Answer: $$x = -8$$"
        ],
        "wrong_options": [
            {
                "ans": "$$x = 8$$",
                "feedback": "You expanded and grouped your terms correctly, but you made a sign error at the end! $-1 - 15$ results in $-16$. Dividing by $+2$ gives a negative answer."
            },
            {
                "ans": "$$x = -7$$",
                "feedback": "When you multiplied by 3 to clear the fraction, it looks like you only multiplied the $2x$ and forgot to multiply the $5$! The 3 must distribute across every term on the right-hand side."
            },
            {
                "ans": "$$x = 2$$",
                "feedback": "You tried to subtract $4x$ from $2x$ which gives $-2x$, but you likely divided $16$ by $+2x$ by mistake. Always write your lines out in full to keep your signs straight."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Dealing with Fractions",
            "content": "Whenever you see an equation with a single denominator, your first priority should always be to multiply it out. It transforms a complex-looking fraction problem into a standard linear equation with brackets."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 13 January
    {
        "id": "001013",
        "date": "13 January 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Circle Theorems 1",
        "difficulty": "5/6",
        "img": "true",
        "q": "Points $A, B$ and $C$ lie on the circumference of a circle. $AB$ is the diameter of the circle. $\\angle BAC = 30^\\circ$.<br>(a) State the size of $\\angle ACB$.<br>(b) Calculate the size of $\\angle ABC$.",
        "steps": [
            "For part (a), we use the circle theorem which states that the angle subtended at the circumference by a semicircle is always a right angle. Therefore, $\\angle ACB = 90^\\circ$.",
            "For part (b), we use the fact that the angles in a triangle sum to $180^\\circ$.",
            "We calculate: $180^\\circ - 90^\\circ - 30^\\circ = 60^\\circ$.",
            "Final Answer: $$(a)\\ 90^\\circ,\\ (b)\\ 60^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a)} 150^\\circ\\text{, (b)} 15^\\circ$$",
                "feedback": "You assumed the triangle was isosceles because of the circle's radius! However, the line AB passes straight across the whole circle, making it the diameter. The angle opposite the diameter is always a right angle ($90^\\circ$)."
            },
            {
                "ans": "$$\\text{(a)} 60^\\circ\\text{, (b)} 90^\\circ$$",
                "feedback": "You correctly identified that there must be a $90^\\circ$ angle, but you placed it at vertex B instead of C! The right angle must always be at the circumference, directly opposite the diameter line AB."
            },
            {
                "ans": "$$\\text{(a)] 90^\\circ\\text{, (b)} 150^\\circ$$",
                "feedback": "You correctly found part (a), but made an arithmetic slip in part (b). Remember, the angles inside a triangle sum to $180^\\circ$, so you must subtract the known angles ($90+30=120$) from 180."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Spotting the Diameter",
            "content": "In circle problems, the word 'diameter' is a mathematical instruction to look for a $90^\\circ$ angle at the circumference. Even if the right-angle symbol is not shown, you can confidently apply Thales' Theorem to solve the triangle."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 14 January
    {
        "id": "001014",
        "date": "14 January 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams",
        "subtopic": "Probability Tree Diagrams",
        "difficulty": "6/7",
        "q": "A box contains 4 red sweets and 6 blue sweets. Two sweets are selected at random without replacement.<br>(a) Find the probability that the first sweet is red and the second sweet is blue.<br>(b) Find the probability that both sweets are of the same colour.",
        "steps": [
            "For part (a), the probability the first sweet is red is $\\dfrac{4}{10}$.",
            "Since the sweet is not replaced, there are now 9 sweets remaining. The probability the second sweet is blue is $\\dfrac{6}{9}$.",
            "The probability of Red then Blue is $\\dfrac{4}{10} \\times \\dfrac{6}{9} = \\dfrac{24}{90}$.",
            "For part (b), we must add the probability of Red-Red to the probability of Blue-Blue.",
            "Probability of Red-Red: $\\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac{12}{90}$.",
            "Probability of Blue-Blue: $\\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{30}{90}$.",
            "Total probability: $\\dfrac{12}{90} + \\dfrac{30}{90} = \\dfrac{42}{90}$. We then simplify the result.",
            "Final Answer: $$(a)\\ \\dfrac{4}{15},\\ (b)\\ \\dfrac{7}{15}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a)} \\dfrac{6}{25}\\text{, (b)} \\dfrac{13}{25}$$",
                "feedback": "You calculated the probabilities as if the sweets were *replaced* in the box! Because the question explicitly says 'without replacement', the denominator for the second sweet must decrease to 9."
            },
            {
                "ans": "$$\\text{(a)} \\dfrac{24}{90}\\text{, (b)} \\dfrac{12}{90}$$",
                "feedback": "You correctly calculated the 'without replacement' probability for Red then Blue, but for part (b) it looks like you only calculated the probability of Red-Red. 'Same colour' also includes Blue-Blue!"
            },
            {
                "ans": "$$\\text{(a)} \\dfrac{10}{19}\\text{, (b)} \\dfrac{42}{100}$$",
                "feedback": "You added the probabilities along the branches instead of multiplying them! You must always *multiply* across the tree for 'AND' events, and *add* the results together for 'OR' events."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Reduced Sample Space",
            "content": "The phrase 'without replacement' is the most important part of the question. It means your denominator must decrease for the second selection. If you forget to reduce the total from 10 to 9, you will lose every accuracy mark for that question."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Probability: Download the Full Probability Pack"
    },
    // 15 January
    {
        "id": "001015",
        "date": "15 January 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Composite Functions",
        "difficulty": "7/8",
        "q": "The functions $f$ and $g$ are defined as $f(x) = x^2 - 4$ and $g(x) = 2x$.<br>(a) Calculate the value of the composite function $fg(3)$.<br>(b) Solve the equation $gf(x) = 10$.",
        "steps": [
            "For part (a), we first evaluate the inner function: $g(3) = 2(3) = 6$.",
            "We then substitute this result into the outer function: $f(6) = 6^2 - 4 = 32$.",
            "For part (b), we define the composite function $gf(x)$ by substituting $f(x)$ into $g$: $gf(x) = 2(x^2 - 4)$, which simplifies to $2x^2 - 8$.",
            "We set this equal to 10 and solve for $x$: $2x^2 - 8 = 10 \\implies 2x^2 = 18$.",
            "Dividing by 2 gives $x^2 = 9$, so $x$ can be $3$ or $-3$.",
            "Final Answer: $$(a)\\ 32,\\ (b)\\ x = 3,\\ x = -3$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) 10, (b) }x = 3$$",
                "feedback": "You evaluated the functions in the wrong order! For $fg(3)$, you put 3 into $f$ first, giving 5, then doubled it to get 10. You must always work from the 'inside out', starting with the function closest to the number."
            },
            {
                "ans": "$$\\text{(a) 32, (b) }x = 3$$",
                "feedback": "You executed the algebra perfectly, but you forgot that a square root has two answers! Solving $x^2 = 9$ yields both a positive and a negative 3."
            },
            {
                "ans": "$$\\text{(a) 32, (b) }x = 7$$",
                "feedback": "In part (b), it looks like you substituted $f(x)$ into $g$ as $(2x)^2 - 4$ instead of $2(x^2 - 4)$. Remember, $gf(x)$ means taking the entire expression for $f$ and placing it where the $x$ is in $g$!"
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Composite Logic",
            "content": "Composite functions must always be worked from the 'inside out'. In $fg(3)$, the $3$ goes into $g$ first, and the output of $g$ becomes the input for $f$. Reversing this order is a common error that will result in the wrong answer."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 16 January
    {
        "id": "001016",
        "date": "16 January 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Surface Area and Volume in 3D",
        "difficulty": "5/6",
        "q": "A solid cylinder has a radius of $4\\text{ cm}$ and a height of $10\\text{ cm}$.<br>(a) Calculate the volume of the cylinder. Give your answer in terms of $\\pi$.<br>(b) Calculate the total surface area of the cylinder. Give your answer in terms of $\\pi$.",
        "steps": [
            "For part (a), we use the volume formula $V = \\pi r^2 h$. Substituting the values, we get $V = \\pi \\times 4^2 \\times 10$.",
            "Calculation: $V = \\pi \\times 16 \\times 10 = 160\\pi$.",
            "For part (b), the total surface area consists of two circular bases and the curved surface: $SA = 2\\pi r^2 + 2\\pi r h$.",
            "Substituting the values: $SA = 2\\pi(4^2) + 2\\pi(4)(10) = 32\\pi + 80\\pi$.",
            "Summing these gives the total surface area.",
            "Final Answer: $$(a)\\ 160\\pi\\text{ cm}^3,\\ (b)\\ 112\\pi\\text{ cm}^2$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) }160\\pi\\text{, (b) }80\\pi$$",
                "feedback": "You calculated the volume perfectly, but for part (b) you only found the curved surface area! The question asks for the TOTAL surface area of a solid cylinder, which means you must add the areas of the two circular ends."
            },
            {
                "ans": "$$\\text{(a) }40\\pi\\text{, (b) }112\\pi$$",
                "feedback": "It looks like you used $2\\pi r h$ instead of $\\pi r^2 h$ for the volume! Remember, the volume is the area of the base (a circle) multiplied by the height."
            },
            {
                "ans": "$$\\text{(a) }160\\pi\\text{, (b) }96\\pi$$",
                "feedback": "You remembered to add the circular ends in part (b), but you only added ONE of them! A solid cylinder has a top and a bottom, so you must add $2\\pi r^2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Answers in terms of Pi",
            "content": "When a question asks for an answer 'in terms of $\\pi$', it is usually a non-calculator problem. Do not attempt to use $3.14$; simply treat $\\pi$ as an algebraic variable throughout your calculation to keep the result exact."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 17 January
    {
        "id": "001017",
        "date": "17 January 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Percentage Change",
        "subtopic": "Percentage Change and Interest",
        "difficulty": "4/5",
        "q": "A car is purchased for $£8000$. One year later, its value has dropped to $£6000$.<br>(a) Calculate the percentage decrease in the value of the car.<br>(b) If the value decreases by a further $10\\%$ in the second year, calculate its value at the end of year 2.",
        "steps": [
            "For part (a), we find the actual decrease: $£8000 - £6000 = £2000$.",
            "We use the formula: $\\dfrac{\\text{Change}}{\\text{Original}} \\times 100 = \\dfrac{2000}{8000} \\times 100$.",
            "Simplifying the fraction gives $\\dfrac{1}{4} \\times 100 = 25\\%$.",
            "For part (b), a $10\\%$ decrease on $£6000$ is calculated using the multiplier $0.9$: $£6000 \\times 0.9 = £5400$.",
            "Final Answer: $$(a)\\ 25\\%,\\ (b)\\ £5,400$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) }33.3\\%,\text{, (b)£5,400}$$",
                "feedback": "You calculated the percentage decrease by dividing by the NEW price (£6000) instead of the ORIGINAL price (£8000). Percentage change is always Change / Original!"
            },
            {
                "ans": "$$\\text{(a) }25\\%\\text{, (b)£5,200}$$",
                "feedback": "In part (b), it looks like you took another 10% off the *original* £8000 price instead of the £6000 price. Compound depreciation is always calculated using the current value."
            },
            {
                "ans": "$$\\text{(a) }75\\%,\text{, (b)£5,400}$$",
                "feedback": "You calculated what percentage the new price *is* of the original price (75%), rather than calculating the percentage *decrease* (25%). Read the instruction carefully!"
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The 'Original' Rule",
            "content": "Always remember that the denominator in a percentage change calculation must be the <strong>original</strong> value, not the new one. Using $£6000$ as the base is a very common error."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number & Ratio: Download the Full Number Pack"
    },
    // 18 January
    {
        "id": "001018",
        "date": "18 January 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Vectors in 2D",
        "difficulty": "6/7",
        "q": "The vector $\\vec{AB} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$ and the vector $\\vec{AC} = \\begin{pmatrix} 7 \\\\ 2 \\end{pmatrix}$.<br>(a) Calculate the magnitude of the vector $\\vec{AB}$, denoted by $|\\vec{AB}|$.<br>(b) Find the column vector $\\vec{BC}$.",
        "steps": [
            "For part (a), we use Pythagoras' theorem to find the magnitude: $|\\vec{AB}| = \\sqrt{x^2 + y^2}$.",
            "Calculation: $\\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.",
            "For part (b), we use the vector path $\\vec{BC} = \\vec{BA} + \\vec{AC}$.",
            "The vector $\\vec{BA}$ is the negative of $\\vec{AB}$, so $\\vec{BA} = \\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix}$.",
            "We add the vectors: $\\begin{pmatrix} -3 \\\\ 4 \\end{pmatrix} + \\begin{pmatrix} 7 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$.",
            "Final Answer: $$(a)\\ 5,\\ (b)\\ \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$$"
        ],
        "wrong_options": [
            {
            "ans": "$$\\text{(a) }5\\text{, (b) }\\begin{pmatrix} 10 \\\\ -2 \\end{pmatrix}$$",
                "feedback": "You found the magnitude perfectly, but for part (b) you just added $\\vec{AB}$ and $\\vec{AC}$ together! Remember, to go from B to C, you must go 'backwards' along AB first, meaning you must flip its signs."
            },
            {
                "ans": "$$\\text{(a) }-1\\text{, (b) }\\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$$",
                "feedback": "You found the path correctly, but you made a mistake with Pythagoras in part (a). A magnitude (length) can never be negative. Remember that $(-4)^2$ is positive 16, not -16!"
            },
            {
                "ans": "$$\\text{(a) }5\\text{, (b) }\\begin{pmatrix} -4 \\\\ -6 \\end{pmatrix}$$",
                "feedback": "You subtracted the vectors in the wrong order! Finding $\\vec{AB} - \\vec{AC}$ gives the path for $\\vec{CB}$. Since you want $\\vec{BC}$, you must start at B and move to A."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Vector Paths",
            "content": "To find a missing vector like $\\vec{BC}$, always look for a 'common' point (in this case, $A$). Think of it as travelling from $B$ to $A$ and then $A$ to $C$. Remember to flip the signs of your column vector when you reverse its direction!"
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
   // 19 January
    {
        "id": "001019",
        "date": "19 January 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Quadratic Inequalities",
        "difficulty": "8/9",
        "q": "Solve the quadratic inequality: $x^2 > 9$.",
        "steps": [
            "First, we find the critical values by solving the equation $x^2 = 9$. This gives $x = 3$ and $x = -3$.",
            "We consider the graph of $y = x^2 - 9$, which is a U-shaped parabola crossing the $x$-axis at $-3$ and $3$.",
            "The inequality $x^2 > 9$ asks for the regions where the graph is <strong>above</strong> the $x$-axis.",
            "This occurs for values of $x$ that are less than $-3$ or greater than $3$.",
            "Final Answer: $$x < -3 \\text{ or } x > 3$$ <br><img src='images/01/g_19.png' style='max-width:300px;'>"
        ],
        "wrong_options": [
            {
                "ans": "$$x > 3$$",
                "feedback": "You just square-rooted both sides! While $x > 3$ is partially correct, you missed the negative solutions. A number like $-4$ squared is $16$, which is also greater than 9!"
            },
            {
                "ans": "$$-3 < x < 3$$",
                "feedback": "You found the correct critical values, but you picked the wrong region on the graph. This region represents values where $x^2$ is *less* than 9 (e.g., $x=0$, $0^2=0$)."
            },
            {
                "ans": "$$x > \\pm 3$$",
                "feedback": "Writing $x > \\pm 3$ is mathematically meaningless! You cannot be 'greater than' plus or minus 3. You must write two separate inequalities to show the two distinct regions."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Graph Method",
            "content": "Never try to solve a quadratic inequality by just 'square-rooting' both sides. You will almost certainly miss the negative region ($x < -3$). Always find your critical values and sketch the parabola to visualize the correct intervals."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 20 January
    {
        "id": "001020",
        "date": "20 January 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Direct & Inverse Proportion",
        "subtopic": "Direct and Inverse Proportion",
        "difficulty": "6/7",
        "q": "$y$ is directly proportional to $x^2$. When $x = 2, y = 20$.<br>(a) Find an equation for $y$ in terms of $x$.<br>(b) Calculate the value of $y$ when $x = 3$.<br>(c) Find the positive value of $x$ when $y = 80$.",
        "steps": [
            "For part (a), we establish the relationship $y = kx^2$. Substituting $x=2$ and $y=20$: $20 = k(2^2) \\implies 20 = 4k$.",
            "Solving for $k$ gives $k = 5$. The equation is $y = 5x^2$.",
            "For part (b), we substitute $x = 3$ into the equation: $y = 5(3^2) = 5(9) = 45$.",
            "For part (c), we set $y = 80$: $80 = 5x^2 \\implies x^2 = 16$.",
            "Taking the square root gives the positive value $x = 4$.",
            "Final Answer: $$(a)\\ y = 5x^2,\\ (b)\\ 45,\\ (c)\\ 4$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) }y = 10x\\text{, (b) 30, (c) 8}$$",
                "feedback": "You calculated the constant $k$ as if $y$ was directly proportional to $x$, not $x^2$! You must square the $x$-value ($2^2=4$) before dividing 20."
            },
            {
                "ans": "$$\\text{(a) }y = 5x^2\\text{, (b) 15, (c) 16}$$",
                "feedback": "In part (b), you forgot to square the 3 before multiplying! And in part (c), you found $x^2=16$ but forgot to take the square root to find $x$."
            },
            {
                "ans": "$$\\text{(a) }y = 5x^2\\text{, (b) 225, (c) 4}$$",
                "feedback": "In part (b), it looks like you multiplied $5$ by $3$ to get $15$, and then squared the $15$! Due to BIDMAS, you must square the $x$-value first, and then multiply by $k$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Finding K first",
            "content": "In proportion questions, finding the constant $k$ is your 'anchor'. Once you have the formula, the rest of the question becomes a simple substitution exercise. Always write out your full formula before attempting parts (b) or (c)."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Ratio: Download the Full Number & Ratio Pack"
    },
    // 21 January
    {
        "id": "001021",
        "date": "21 January 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Surds",
        "difficulty": "7/8",
        "q": "(a) Simplify fully: $\\sqrt{75} + \\sqrt{12}$.<br>(b) Show that $\\dfrac{1}{\\sqrt{75} + \\sqrt{12}}$ can be written as $\\dfrac{\\sqrt{3}}{21}$.",
        "steps": [
            "For part (a), we simplify each surd by finding the largest square factor: $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$.",
            "Similarly, $\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$.",
            "Adding them gives $5\\sqrt{3} + 2\\sqrt{3} = 7\\sqrt{3}$.",
            "For part (b), we use our result from part (a): $\\dfrac{1}{7\\sqrt{3}}$.",
            "We rationalise the denominator by multiplying top and bottom by $\\sqrt{3}$: $\\dfrac{1 \\times \\sqrt{3}}{7\\sqrt{3} \\times \\sqrt{3}}$.",
            "This gives $\\dfrac{\\sqrt{3}}{7 \\times 3} = \\dfrac{\\sqrt{3}}{21}$.",
            "Final Answer: $$(a)\\ 7\\sqrt{3},\\ (b)\\ \\text{Shown}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) }\\sqrt{87}\\text{, (b) Shown}$$",
                "feedback": "You cannot simply add the numbers inside the square roots together! You must simplify each surd independently until they share the same 'root' before you can combine them."
            },
            {
                "ans": "$$\\text{(a) }7\\sqrt{6}\\text{, (b) Shown}$$",
                "feedback": "It looks like you found the coefficients perfectly (5 + 2 = 7), but you added the roots together too ($\\sqrt{3} + \\sqrt{3} = \\sqrt{6}$). Surds act like algebra: $5x + 2x = 7x$, not $7x^2$."
            },
            {
                "ans": "$$\\text{(a) }7\\sqrt{3}\\text{, (b) Cannot be shown}$$",
                "feedback": "You correctly simplified part (a), but it seems you struggled with the rationalisation in part (b). Remember to multiply the top and bottom of the fraction by $\\sqrt{3}$ to remove the surd from the denominator."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Surd Addition",
            "content": "You can only add surds if the number under the square root is the same. I compare this to 'collecting like terms' in algebra. Once you've simplified both terms to multiples of $\\sqrt{3}$, the addition becomes trivial."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 22 January
    {
        "id": "001022",
        "date": "22 January 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Completing the Square",
        "difficulty": "7/8",
        "q": "(a) Write $x^2 + 6x - 2$ in the form $(x + a)^2 + b$, where $a$ and $b$ are integers.<br>(b) Hence, state the coordinates of the turning point of the curve $y = x^2 + 6x - 2$.",
        "steps": [
            "For part (a), we begin by halving the coefficient of $x$: half of $6$ is $3$. We write this as $(x + 3)^2$.",
            "Expanding $(x + 3)^2$ gives $x^2 + 6x + 9$. To return to the $-2$ in the original expression, we must subtract $11$.",
            "The completed square form is $(x + 3)^2 - 11$.",
            "For part (b), the turning point of a curve in the form $y = (x + a)^2 + b$ is located at the coordinates $(-a, b)$.",
            "Substituting our values, we find the turning point.",
            "Final Answer: $$(a)\\ (x + 3)^2 - 11,\\ (b)\\ (-3, -11)$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) }(x + 3)^2 + 7\\text{, (b) }(-3, 7)$$",
                "feedback": "When completing the square, expanding $(x+3)^2$ gives a $+9$. You added 7 to the $-2$ instead of thinking: 'how do I get from +9 down to -2?'. You must subtract 11."
            },
            {
                "ans": "$$\\text{(a) }(x + 3)^2 - 11\\text{, (b) }(3, -11)$$",
                "feedback": "You completed the square perfectly, but you forgot to invert the sign for the $x$-coordinate of the turning point. The $x$-coordinate is the value that makes the bracket equal to zero."
            },
            {
                "ans": "$$\\text{(a) }(x + 6)^2 - 38\\text{, (b) }(-6, -38)$$",
                "feedback": "You forgot to halve the $x$-coefficient inside the bracket! The number inside the bracket must be half of $6$, which is $3$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Turning Point Signs",
            "content": "Completing the square is the most efficient way to find a turning point without calculus. I always remind students that the $x$-coordinate is the number which makes the squared bracket equal to zero so in this case, $-3$, but the $y$-coordinate remains exactly the same as the number outside."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 23 January
    {
        "id": "001023",
        "date": "23 January 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Compound Measures",
        "subtopic": "Compound Units: Speed, Density, Pressure",
        "difficulty": "5/6",
        "q": "A force of $100\\text{ N}$ acts on a surface with an area of $20\\text{ cm}^2$.<br>(a) Calculate the pressure exerted on the surface.<br>(b) If the same force is applied to a larger surface area, describe what happens to the pressure.",
        "steps": [
            "For part (a), we use the standard formula for pressure: $\\text{Pressure} = \\text{Force} \\div \\text{Area}$.",
            "Substituting the given values: $100\\text{ N} \\div 20\\text{ cm}^2 = 5\\text{ N/cm}^2$.",
            "For part (b), we consider the mathematical relationship. Since pressure is inversely proportional to area (when force is constant), increasing the area will distribute the force over a larger space.",
            "Therefore, the pressure will decrease.",
            "Final Answer: $$(a)\\ 5\\text{ N/cm}^2,\\ (b)\\ \\text{The pressure decreases}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) }2000 N/cm^2\\text{, (b) The pressure increases}$$",
                "feedback": "You multiplied the force and the area together! Remember the formula triangle: Pressure = Force $\\div$ Area."
            },
            {
                "ans": "$$\\text{(a) }5 N/cm^2\\text{, (b) The pressure increases}$$",
                "feedback": "You calculated the pressure correctly, but your logic in part (b) is flawed. If you spread the same amount of force over a much larger area, the pressure on any specific spot will drop."
            },
            {
                "ans": "$$\\text{(a) }0.2 N/cm^2\\text{, (b) The pressure decreases}$$",
                "feedback": "You divided the numbers in the wrong order (Area $\\div$ Force). If you are unsure, look at the units in the question: $\\text{N/cm}^2$ literally means Newtons divided by centimeters squared!"
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Direct and Inverse Links",
            "content": "Compound measures like pressure are essentially real-world applications of proportion. Pressure is directly proportional to force but inversely proportional to area. Understanding these relationships allows you to predict results before you even pick up a calculator."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Ratio: Download the Full Number & Ratio Pack"
    },
    // 24 January
    {
        "id": "001024",
        "date": "24 January 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "Algebraic Proof",
        "difficulty": "8/9",
        "q": "Prove algebraically that $(n + 1)^2 - (n - 1)^2$ is always a multiple of $4$ for all positive integer values of $n$.",
        "steps": [
            "We begin by expanding the first bracketed term: $(n + 1)^2 = n^2 + 2n + 1$.",
            "Next, we expand the second bracketed term: $(n - 1)^2 = n^2 - 2n + 1$.",
            "We now subtract the second expansion from the first, ensuring the negative sign is distributed correctly: $(n^2 + 2n + 1) - (n^2 - 2n + 1)$.",
            "Simplifying the expression: $n^2 - n^2 + 2n - (-2n) + 1 - 1 = 4n$.",
            "Since $4n$ is clearly the product of 4 and an integer $n$, the result must always be a multiple of 4.",
            "Final Answer: $$4n \\text{ is a multiple of 4}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$n^2 + 2\\text{, which is not a multiple of 4}$$",
                "feedback": "You expanded the brackets incorrectly! $(n+1)^2$ does not equal $n^2 + 1^2$. You must write the bracket out twice and use FOIL to get $n^2 + 2n + 1$."
            },
            {
                "ans": "$$0\\text{, which is a multiple of 4}$$",
                "feedback": "You made a very common sign error during subtraction. When you subtracted $(n^2 - 2n + 1)$, you likely calculated $2n - 2n$. Subtracting a negative is the same as adding, so $2n - (-2n) = 4n$."
            },
            {
                "ans": "$$4n^2\\text{, which is a multiple of 4}$$",
                "feedback": "You multiplied the two brackets together instead of subtracting them! Read the question carefully: there is a minus sign between the two squared terms."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Distribution of Negatives",
            "content": "In algebraic proof, the most common error occurs during the subtraction phase. Students often fail to change the sign of the $-2n$ to a $+2n$ when subtracting. I always advise using a set of 'safety brackets' for the second part of the expansion to prevent this."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 25 January
    {
        "id": "001025",
        "date": "25 January 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Vector Geometry",
        "difficulty": "6/7",
        "img": "true",
        "q": "In the diagram, $M$ is the midpoint of the line segment $AB$. The vector $\\overrightarrow{OA} = \\mathbf{a}$ and the vector $\\overrightarrow{OB} = \\mathbf{b}$.<br>Find the vector $\\overrightarrow{OM}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$, giving your answer in its simplest form.",
        "steps": [
            "We first find the vector path for $\\overrightarrow{AB}$ by travelling from $A$ to $O$ and then from $O$ to $B$: $\\overrightarrow{AB} = -\\mathbf{a} + \\mathbf{b}$.",
            "Since $M$ is the midpoint, the vector $\\overrightarrow{AM}$ is equal to one-half of $\\overrightarrow{AB}$, which is $\\dfrac{1}{2}(\\mathbf{b} - \\mathbf{a})$.",
            "To find $\\overrightarrow{OM}$, we follow the path from $O$ to $A$ and then from $A$ to $M$: $\\overrightarrow{OM} = \\mathbf{a} + \\dfrac{1}{2}(\\mathbf{b} - \\mathbf{a})$.",
            "Expanding and collecting like terms: $\\mathbf{a} + \\dfrac{1}{2}\\mathbf{b} - \\dfrac{1}{2}\\mathbf{a} = \\dfrac{1}{2}\\mathbf{a} + \\dfrac{1}{2}\\mathbf{b}$.",
            "Final Answer: $$\\dfrac{1}{2}(\\mathbf{a} + \\mathbf{b})$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\dfrac{1}{2}(\\mathbf{b} - \\mathbf{a})$$",
                "feedback": "This is the vector $\\overrightarrow{AM}$, not $\\overrightarrow{OM}$! You found the journey from A to the midpoint, but the question asks for the position vector starting from the origin $O$."
            },
            {
                "ans": "$$\\mathbf{a} + \\mathbf{b}$$",
                "feedback": "You added the two vectors together, which would take you to the far corner of a parallelogram! To find the midpoint, you must use the path $\\overrightarrow{OA} + \\overrightarrow{AM}$."
            },
            {
                "ans": "$$\\dfrac{1}{2}(\\mathbf{a} - \\mathbf{b})$$",
                "feedback": "You made a sign error when finding the path $\\overrightarrow{AB}$. Travelling from A to O goes against the arrow, so it must be $-\\mathbf{a}$, not positive $\\mathbf{a}$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Midpoint Formula",
            "content": "This result is a formal proof of the midpoint vector. I encourage my students to notice that the vector to the midpoint is simply the average of the vectors to the two endpoints. Remembering this pattern is a great way to verify your answer in more complex vector geometry problems."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 26 January
    {
        "id": "001026",
        "date": "26 January 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Inverse Functions",
        "difficulty": "7/8",
        "q": "The function $f(x)$ is defined as $f(x) = \\dfrac{1}{x + 2}$ for $x \\neq -2$.<br>(a) Calculate the value of $f(0.5)$.<br>(b) Find the inverse function $f^{-1}(x)$.",
        "steps": [
            "For part (a), we substitute $x = 0.5$ into the function: $f(0.5) = \\dfrac{1}{0.5 + 2} = \\dfrac{1}{2.5}$.",
            "Multiplying top and bottom by 2 gives $f(0.5) = \\dfrac{2}{5}$ (or $0.4$).",
            "For part (b), we start by writing the function in the form $y = \\dfrac{1}{x + 2}$.",
            "We then interchange the variables $x$ and $y$: $x = \\dfrac{1}{y + 2}$.",
            "To solve for $y$, we first multiply both sides by $(y + 2)$ to get $x(y + 2) = 1$.",
            "We then divide by $x$: $y + 2 = \\dfrac{1}{x}$.",
            "Finally, we subtract 2 from both sides and rewrite using inverse function notation.",
            "Final Answer: $$(a)\\ 0.4,\\ (b)\\ f^{-1}(x) = \\dfrac{1}{x} - 2$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) }2.5\\text{, (b) }f^{-1}(x) = x - 2$$",
                "feedback": "For part (a), you calculated the denominator ($0.5 + 2$) but forgot that it was under a $1$! For part (b), you cannot just 'flip' the fraction without properly rearranging the algebra."
            },
            {
                "ans": "$$\\text{(a) }0.4\\text{, (b) }f^{-1}(x) = \\dfrac{1}{x} + 2$$",
                "feedback": "You isolated the $y$ term but made a sign error at the very end. When you moved the $+2$ across the equals sign from $y + 2 = \\frac{1}{x}$, you forgot to subtract it."
            },
            {
                "ans": "$$\\text{(a) }0.4\\text{, (b) }f^{-1}(x) = \\dfrac{1}{x - 2}$$",
                "feedback": "You subtracted 2 before dealing with the fraction! You must follow reverse BIDMAS. Because the $y+2$ is locked together as a denominator, you must multiply it out first."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Why we Interchange",
            "content": "Interchanging $x$ and $y$ is a mathematical instruction to reflect the function in the line $y = x$. I always teach this method because it links the algebra directly to the coordinate geometry of inverse functions, making the concept much easier to visualize."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 27 January
    {
        "id": "001027",
        "date": "27 January 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Sine Rule",
        "difficulty": "6/7",
        "img": "true",
        "q": "A triangle has two sides of length $6\\text{ cm}$ and $8\\text{ cm}$. The angle between these two sides is $30^\\circ$.<br>(a) Calculate the area of the triangle.<br>(b) Use the Cosine Rule to calculate the length of the third side, giving your answer to 3 significant figures.",
        "steps": [
            "For part (a), we use the area formula for a non-right-angled triangle: $\\text{Area} = \\dfrac{1}{2}ab\\sin C$.",
            "Substituting the values: $\\text{Area} = \\dfrac{1}{2} \\times 6 \\times 8 \\times \\sin(30^\\circ)$.",
            "Since $\\sin(30^\\circ) = 0.5$, we calculate $24 \\times 0.5 = 12\\text{ cm}^2$.",
            "For part (b), we apply the Cosine Rule: $c^2 = a^2 + b^2 - 2ab\\cos C$.",
            "Substituting the values: $c^2 = 6^2 + 8^2 - 2(6)(8)\\cos(30^\\circ)$.",
            "Calculation: $c^2 = 36 + 64 - 96(0.866) = 100 - 83.136 = 16.864$.",
            "Taking the square root gives the final length.",
            "Final Answer: $$(a)\\ 12\\text{ cm}^2,\\ (b)\\ 4.11\\text{ cm}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) }24\\text{ cm}^2\\text{, (b) }4.11\\text{ cm}$$",
                "feedback": "You calculated part (b) perfectly, but for part (a) you forgot the $\\frac{1}{2}$ in the area formula! The formula is $\\frac{1}{2}ab\\sin(C)$, not just $ab\\sin(C)$."
            },
            {
                "ans": "$$\\text{(a) }12\\text{ cm}^2\\text{, (b) }16.9\\text{ cm}$$",
                "feedback": "You successfully applied the Cosine Rule and calculated $c^2 = 16.864$, but you forgot the final step! You must take the square root to find the actual length of the side $c$."
            },
            {
                "ans": "$$\\text{(a) }12\\text{ cm}^2\\text{, (b) }13.5\\text{ cm}$$",
                "feedback": "You made a sign error in the Cosine Rule. The formula is $a^2 + b^2 - 2ab\\cos(C)$. It looks like you added the final term instead of subtracting it!"
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: SAS Configuration",
            "content": "Whenever you are presented with 'Side-Angle-Side' (SAS), you should immediately reach for the Sine Area formula and the Cosine Rule. They are the most efficient tools for unlocking any triangle where you don't have a right angle."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 28 January
    {
        "id": "001028",
        "date": "28 January 2026",
        "major_area": "Algebra",
        "topic": "Indices",
        "subtopic": "Indices",
        "difficulty": "8/9",
        "q": "Given that $2^x \\times 4^y = 8$, express $x$ in terms of $y$.",
        "steps": [
            "To solve equations involving indices, we must first express every term using a common base. In this case, the common base is 2.",
            "We know that $4 = 2^2$ and $8 = 2^3$. Substituting these into the equation gives $2^x \\times (2^2)^y = 2^3$.",
            "Applying the power of a power rule, $(2^2)^y = 2^{2y}$, so the equation becomes $2^x \\times 2^{2y} = 2^3$.",
            "Using the multiplication rule for indices ($a^m \\times a^n = a^{m+n}$), we get $2^{x + 2y} = 2^3$.",
            "Since the bases are now equal, we can equate the powers: $x + 2y = 3$.",
            "Finally, we rearrange to isolate $x$.",
            "Final Answer: $$x = 3 - 2y$$"
        ],
        "wrong_options": [
            {
                "ans": "$$x = 3 - y$$",
                "feedback": "You set up the equation as $x + y = 3$. Remember that the base $4$ must be rewritten as $2^2$, meaning the $y$ index becomes $2y$, not just $y$!"
            },
            {
                "ans": "$$x + y = 3$$",
                "feedback": "You equated the indices without making the base numbers match first! You cannot add the powers of $2^x$ and $4^y$ directly. Everything must be converted to base 2."
            },
            {
                "ans": "$$x = 3 + 2y$$",
                "feedback": "You correctly formed the equation $x + 2y = 3$, but you made a sign error when rearranging. To isolate $x$, you must *subtract* $2y$ from both sides."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Power Equations",
            "content": "Equations where the variable is in the index can look intimidating, but they always rely on the same fundamental strategy: equalise the bases. Once the bases match, the problem simply collapses into a basic linear equation."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
  // 29 Jan
    {
        "id": "002006",
        "date": "29 Jan 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams",
        "subtopic": "Probability Tree Diagrams",
        "difficulty": "6/7",
        "q": "A bag contains 3 Red and 7 Blue counters. Two counters are picked at random without replacement. Find the probability that both counters are the same colour.",
        "img": "",
        "steps": [
            "We first calculate the probability of picking two Red counters: $P(RR) = \\dfrac{3}{10} \\times \\dfrac{2}{9} = \\dfrac{6}{90}$.",
            "Next, we calculate the probability of picking two Blue counters: $P(BB) = \\dfrac{7}{10} \\times \\dfrac{6}{9} = \\dfrac{42}{90}$.",
            "To find the total probability of 'same colour', we sum these two mutually exclusive outcomes: $\\dfrac{6}{90} + \\dfrac{42}{90} = \\dfrac{48}{90}$.",
            "Finally, we simplify the fraction by dividing both the numerator and denominator by 6.",
            "Final Answer: $$\\dfrac{8}{15}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\dfrac{58}{100}$$",
                "feedback": "You calculated the probabilities as if the counters were *replaced*! Because it is 'without replacement', the denominator for the second pick must decrease to 9."
            },
            {
                "ans": "$$\\dfrac{6}{90}$$",
                "feedback": "It looks like you only calculated the probability of picking Red-Red. 'Same colour' means you must also calculate Blue-Blue and add them together!"
            },
            {
                "ans": "$$\\dfrac{18}{90}$$",
                "feedback": "You added the probabilities along the branches instead of multiplying them! You must always *multiply* across the tree for 'AND' events, and *add* the results for 'OR' events."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Reducing the Total",
            "content": "In 'without replacement' problems, the most common error is forgetting to reduce the denominator for the second pick. Once one counter is removed, there are only 9 left in the bag. Always double-check your second fraction before multiplying."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Probability: Download the Full Pack"
    },
    // 30 Jan
    {
        "id": "002007",
        "date": "30 Jan 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Limits of Accuracy and Bounds",
        "difficulty": "6/7",
        "q": "The values $x = 10$ and $y = 5$ are both rounded to 1 significant figure. Calculate the maximum possible value (Upper Bound) of $x - y$.",
        "img": "",
        "steps": [
            "For $x=10$ rounded to 1 s.f., the range is between 5 and 15. Therefore, the Upper Bound ($UB_x$) is 15.",
            "For $y=5$ rounded to 1 s.f., the range is between 4.5 and 5.5. Therefore, the Lower Bound ($LB_y$) is 4.5.",
            "To maximise the result of a subtraction, we must use the largest possible value for the first number and the smallest possible value for the second: $UB_x - LB_y$.",
            "Calculation: $15 - 4.5 = 10.5$.",
            "Final Answer: $$10.5$$"
        ],
        "wrong_options": [
            {
                "ans": "$$9.5$$",
                "feedback": "You subtracted the Upper Bound of $y$ ($5.5$) from the Upper Bound of $x$ ($15$). To maximise a subtraction, you must subtract the *smallest* possible value ($LB_y$) from the largest possible value ($UB_x$)."
            },
            {
                "ans": "$$5.5$$",
                "feedback": "You used the Lower Bounds for both numbers ($5 - 4.5$)! This actually gives you the *minimum* possible value. To find the maximum difference, you need $UB_x - LB_y$."
            },
            {
                "ans": "$$20.5$$",
                "feedback": "You added the Upper Bound of $x$ and the Upper Bound of $y$! The question asks for the maximum value of $x - y$, which is a subtraction."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Subtraction Bounds",
            "content": "Maximising a subtraction is counter-intuitive for many students. To get the largest possible 'gap', you must start as high as you can ($UB$) and take away as little as you can ($LB$). Many candidates incorrectly use the Upper Bound for both, which results in a smaller difference."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 31 Jan
    {
        "id": "002008",
        "date": "31 Jan 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Equation of a Circle",
        "difficulty": "8/9",
        "img": "true",
        "q": "Find the gradient of the tangent to the circle $x^2 + y^2 = 25$ at the coordinate point $(3, 4)$.",
        "steps": [
            "We first identify the gradient of the radius from the origin $(0, 0)$ to the point $(3, 4)$.",
            "Using the gradient formula: $m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{4 - 0}{3 - 0} = \\dfrac{4}{3}$.",
            "A geometric property of circles is that the tangent is always perpendicular to the radius at the point of contact.",
            "The gradient of the tangent is the negative reciprocal of the radius gradient.",
            "Calculation: $-\\dfrac{1}{4/3} = -\\dfrac{3}{4}$.",
            "Final Answer: $$-\\dfrac{3}{4}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\dfrac{4}{3}$$",
                "feedback": "You successfully found the gradient of the radius, but the question asked for the gradient of the *tangent*. The tangent is always perpendicular to the radius!"
            },
            {
                "ans": "$$-\\dfrac{4}{3}$$",
                "feedback": "You remembered to make the gradient negative, but you forgot to find the reciprocal (flip the fraction)! Perpendicular gradients follow the rule $m_1 \\times m_2 = -1$."
            },
            {
                "ans": "$$\\dfrac{3}{4}$$",
                "feedback": "You calculated the gradient of the radius upside down as 'change in $x$' over 'change in $y$'. Gradient is always rise over run ($y$ over $x$)."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Tangent Perpendicularity",
            "content": "This is a classic high-tier coordinate geometry question. You aren't given the line for the tangent, so you must use the radius as your 'anchor'. Just remember: Radius $\\perp$ Tangent. Once you have the radius gradient, the negative reciprocal gives you the tangent gradient immediately."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    }
];
