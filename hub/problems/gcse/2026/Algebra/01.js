const problemBank = [
    
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
                        "ans": "$$\\text{(a) 2, (b) }y = 4x + 2$$",
                "feedback": "You calculated the gradient correctly, but you swapped your $m$ and $c$ values in the final equation! The gradient is the number attached to $x$, and the intercept stands alone."
            },
            {
                "ans": "$$\\text{(a) 4.6, (b) }y = 4.6x$$",
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
    },
          {
        "id": "002039",
        "date": "3 March 2026",
        "major_area": "Algebra",
        "topic": "Expanding Brackets",
        "subtopic": "Expanding Brackets",
        "difficulty": "6/7",
        "q": "(a) Expand and simplify $(x + 4)(x - 1)(x + 2)$.<br>(b) State the coefficient of the $x$ term in the resulting expression.",
        "steps": [
            "For part (a), we first expand the first two brackets: $(x + 4)(x - 1) = x^2 - x + 4x - 4 = x^2 + 3x - 4$.",
            "Next, we multiply this resulting quadratic by the final bracket: $(x^2 + 3x - 4)(x + 2)$.",
            "Distributing the terms: $x(x^2 + 3x - 4) + 2(x^2 + 3x - 4) = x^3 + 3x^2 - 4x + 2x^2 + 6x - 8$.",
            "Collecting like terms: $x^3 + 5x^2 + 2x - 8$.",
            "For part (b), the coefficient is the numerical value multiplying the $x$ term.",
            "Final Answer: $$\\text{(a) } x^3 + 5x^2 + 2x - 8, \\text{ (b) } 2$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } x^3 + 5x^2 + 2x + 8, \\text{ (b) } 2$$",
                "feedback": "You made a sign error on the final constant! The first two brackets give a $-4$. Multiplying $-4$ by the $+2$ in the final bracket must result in a negative 8."
            },
            {
                "ans": "$$\\text{(a) } x^3 + 5x^2 + 10x - 8, \\text{ (b) } 10$$",
                "feedback": "When distributing the final bracket, you likely added the $x$ terms incorrectly. $-4x + 6x = +2x$. It looks like you added $4x$ and $6x$ instead."
            },
            {
                "ans": "$$\\text{(a) } x^3 - 8, \\text{ (b) } 0$$",
                "feedback": "You cannot simply multiply the first terms ($x \\times x \\times x$) and the last terms ($4 \\times -1 \\times 2$)! You must fully expand the expression to find the $x^2$ and $x$ components."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systematic Expansion",
            "content": "When expanding triple brackets, always deal with two at a time and simplify the result before introducing the third. This reduces the number of simultaneous terms you are managing and significantly lowers the risk of sign errors."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    {
        "id": "002042",
        "date": "6 March 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Simultaneous Equations Non-Linear",
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
            "Final Answer: $$\\text{(a) } (1.2, 3.4) \\text{ and } (-2, -3)$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(1.5, 4) \\text{ and } (-2.4, -3.8)$$",
                "feedback": "You expanded $(2x+1)^2$ as $4x^2+1$ and completely forgot the middle term ($+4x$)! You must always write the bracket out twice and use FOIL."
            },
            {
                "ans": "$$x = 1.2, x = -2$$",
                "feedback": "You solved the quadratic perfectly, but stopped halfway! The question asks for 'coordinates of intersection'. You must substitute your $x$ values back into the linear equation to find the $y$ values."
            },
            {
                "ans": "$$(-1.2, -1.4) \\text{ and } (2, 5)$$",
                "feedback": "You factorised perfectly to $(5x-6)(x+2)=0$, but you made a sign error when solving the brackets. Remember, if $(x+2)=0$, then $x=-2$!"
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Substitution Mandate",
            "content": "When one equation is linear and the other is quadratic, 'elimination' is impossible. Substitution is your only formal path. Always substitute the linear expression into the quadratic one, and remember to expand your binomial brackets $(2x+1)^2$ fully; missing that middle term will derail the entire problem."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
     {
        "id": "002046",
        "date": "10 March 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Quadratics Equations Factorising",
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
        "wrong_options": [
    {
        "ans": "$$(2x + 3)(x - 2),\\ x = -1.5,\\ x = 2$$",
        "feedback": "You found numbers that multiply to 12 but got the signs wrong. This changes the roots completely."
    },
    {
        "ans": "$$(2x - 3)(x + 2),\\ x = 1.5,\\ x = -2$$",
        "feedback": "You factorised incorrectly — the middle term would be $+x$, not $-7x$. The incorrect factorisation leads to the wrong second root."
    },
    {
        "ans": "$$2(x - 3)(x - 2),\\ x = 3,\\ x = 2$$",
        "feedback": "You pulled out a factor of 2 incorrectly. Expanding your brackets does not give the original quadratic."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The AC Method",
            "content": "When the coefficient of $x^2$ is greater than 1, 'trial and error' factorisation is risky. I strongly recommend the 'AC method' (splitting the middle term). It is a systematic process that works every time and provides a clear audit trail for the examiner to award method marks."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    {
        "id": "002050",
        "date": "14 March 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Linear inequalities in One Variable",
        "difficulty": "5/6",
        "q": "(a) Solve the inequality $5x - 3 > 3x + 11$.<br>(b) List all the integer values of $n$ such that $-2 < n \\le 3$.",
        "steps": [
            "For part (a), we treat the inequality like an equation. Subtract $3x$ from both sides: $2x - 3 > 11$.",
            "Add 3 to both sides: $2x > 14$.",
            "Divide by 2: $x > 7$.",
            "For part (b), we look for whole numbers that are strictly greater than $-2$ and less than or equal to 3.",
            "The values are $-1, 0, 1, 2, 3$.",
            "Final Answer: $$(a)\\ x > 7,\\ (b)\\ -1, 0, 1, 2, 3$$"
        ],
        "wrong_options": [
    {
        "ans": "$$x > 4,\\ -2, -1, 0, 1, 2, 3$$",
        "feedback": "You subtracted 3 incorrectly when solving the inequality. Also, $-2$ should not be included because the inequality is strict."
    },
    {
        "ans": "$$x > 7,\\ -1, 0, 1, 2$$",
        "feedback": "Part (a) is correct, but you missed the value $3$ in part (b). The symbol $\\le 3$ means 3 must be included."
    },
    {
        "ans": "$$x > 14,\\ 0, 1, 2, 3$$",
        "feedback": "You divided by 2 incorrectly in part (a). In part (b), you forgot that the values must be greater than $-2$, so $-1$ should be included."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Inclusion Symbols",
            "content": "The most common loss of marks here is including '$-2$' or omitting '$3$'. Look closely at the symbol: the bar underneath ($\le$) means the number is included, while the strict inequality ($<$) means the number is not part of the set."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    {
        "id": "002054",
        "date": "18 March 2026",
        "major_area": "Algebra",
        "topic": "Turning Points",
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
        "wrong_options": [
    {
        "ans": "$$(x + 3)^2 + 5,\\ (-3, 5)$$",
        "feedback": "You forgot to subtract the square of 3 when completing the square. This changes the constant term and the turning point."
    },
    {
        "ans": "$$(x + 6)^2 - 31,\\ (-6, -31)$$",
        "feedback": "You halved the coefficient incorrectly. Half of 6 is 3, not 6."
    },
    {
        "ans": "$$(x - 3)^2 - 4,\\ (3, -4)$$",
        "feedback": "You changed the sign inside the bracket. The expression $(x+3)^2$ gives a turning point at $(-3, -4)$, not $(3, -4)$."
    }
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
        "subtopic": "Algebraic Fractions 2",
        "difficulty": "7/8",
        "q": "Simplify fully the expression: $$\\dfrac{2x^2 - 8}{4x^2+8x}$$",
        "steps": [
            "First, we factorise the numerator. We factor out the common factor 2: $2(x^2 - 4)$.",
            "Next, we recognise the difference of two squares in the bracket: $2(x - 2)(x + 2)$.",
            "Now, we factorise the denominator by taking out the common factor $4x$: $4x(x + 2)$.",
            "We cancel the common factor of $(x + 2)$ from both the numerator and denominator.",
            "Finally, we simplify the coefficients $\\dfrac{2}{4x} = \\dfrac{1}{2x}$.",
            "The remaining factor in the numerator is $(x - 2)$.",
            "Final Answer: $$\\dfrac{x - 2}{2x}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$\\dfrac{2(x-2)}{4x}$$",
        "feedback": "You cancelled the $(x+2)$ correctly but forgot that the numerator was $2(x-2)$, not just $(x-2)$. You must simplify the coefficients as well."
    },
    {
        "ans": "$$\\dfrac{x^2-4}{2x(x+2)}$$",
        "feedback": "You factorised the numerator but didn’t factorise the denominator fully. The denominator must be written as $4x(x+2)$ before cancelling."
    },
    {
        "ans": "$$\\dfrac{x+2}{2x}$$",
        "feedback": "You cancelled the wrong bracket. The numerator is $2(x-2)(x+2)$, so the $(x+2)$ cancels, leaving $(x-2)$, not $(x+2)$."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Nested Factorisation",
            "content": "This problem requires two levels of factorisation in the numerator: first a common factor, then the difference of two squares. Always look for that squared term subtraction ($x^2 - a^2$); it is the most common hidden structure in algebraic fraction questions."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    {
        "id": "002058",
        "date": "22 March 2026",
        "major_area": "Algebra",
        "topic": "Numerical Methods",
        "subtopic": "General Iterative Processes",
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
        "wrong_options": [
    {
        "ans": "$$x_2 = 0.5,\\ x_3 = 0.5$$",
        "feedback": "You reused the starting value instead of applying the iteration. Each new value must be substituted back into the formula."
    },
    {
        "ans": "$$x_2 = 0.794,\\ x_3 = 0.794$$",
        "feedback": "You calculated $x_2$ correctly but forgot to use it to find $x_3$. Iteration requires repeated substitution."
    },
    {
        "ans": "$$x_2 = 0.63,\\ x_3 = 0.86$$",
        "feedback": "You used square roots instead of cube roots. The formula uses a cube root: $x_{n+1} = \\sqrt[3]{1 - x_n}$."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Iteration Efficiency",
            "content": "On your calculator, type '0.5' and press '='. Then type the cube root of '(1 - ANS)'. Each time you press '=', the calculator will automatically perform the next iteration. This technique eliminates rounding errors and ensures your final answer is perfectly accurate."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
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
        "wrong_options": [
    {
        "ans": "$$fg(x) = 3x - 2,\\ gf(x) = 9x - 2,\\ x = 1$$",
        "feedback": "You substituted incorrectly. $fg(x)$ means substitute $g(x)$ into $f$, not the other way around."
    },
    {
        "ans": "$$fg(x) = 3x^2 - 2,\\ gf(x) = 9x^2 - 12x + 4,\\ x = -1$$",
        "feedback": "Parts (a) and (b) are correct, but you solved $(3x - 2)^2 = 1$ incorrectly. Both positive and negative square roots must be considered."
    },
    {
        "ans": "$$fg(x) = 3x^2 - 2,\\ gf(x) = (3x - 2),\\ x = \\dfrac{1}{3}$$",
        "feedback": "You forgot to square the bracket in $gf(x)$. $g(x)$ squares its input, so $(3x - 2)$ must be squared."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Function Order",
            "content": "The order of operations is vital in composite functions. $fg(x)$ is not the same as $gf(x)$. In part (c), many students forget the negative square root. Remember that both $1^2$ and $(-1)^2$ equal 1; missing the second solution could cost you two marks."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    {
        "id": "002064",
        "date": "28 March 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "Algebraic Proof",
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
        "wrong_options": [
    {
        "ans": "$$(2n+1)^2 = 4n^2 + 1,\\ \\text{so it is odd}$$",
        "feedback": "You forgot the middle term $4n$. Without it, the expression cannot be written in the form $4k+1$."
    },
    {
        "ans": "$$(2n-1)^2 = 4n^2 - 4n + 1,\\ \\text{so it is even}$$",
        "feedback": "You used a valid odd number form, but concluded it was even. The expression is $4k+1$, which is odd, not even."
    },
    {
        "ans": "$$(2n+1)^2 = 2(2n^2 + 2n + 1)$$",
        "feedback": "You factored out a 2 incorrectly. The expression cannot be written as $2(\text{integer})$ because it is always odd."
    }
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
        "major_area": "Algebra",
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
        "wrong_options": [
    {
        "ans": "$$(x + 2)^2 + (y - 3)^2 = 25,\\ \\text{Not shown}$$",
        "feedback": "You changed both signs incorrectly. Remember: $(x - a)$ and $(y - b)$ use the centre $(a, b)$ exactly as given."
    },
    {
        "ans": "$$(x - 2)^2 + (y + 3)^2 = 25,\\ 9 + 4 = 13$$",
        "feedback": "Part (a) is correct, but you substituted the point incorrectly. $(1+3)^2$ should be $16$, not $4$."
    },
    {
        "ans": "$$(x - 2)^2 + (y - 3)^2 = 25,\\ 9 + 16 = 25$$",
        "feedback": "You used the wrong sign for the $y$‑coordinate in the equation. The centre is $(2, -3)$, so the equation must use $(y + 3)$."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Coordinate Sign Trap",
            "content": "Be extremely careful when the centre coordinate is negative. Subtracting a negative value, $(y - (-3))$, becomes $(y + 3)$. It is a very common error for students to leave the sign as negative, which would describe a completely different circle."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
     {
        "id": "002067",
        "date": "31 March 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "Algebraic Proof",
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
        "wrong_options": [
    {
        "ans": "$$n(n-1) = n^2 - 1,\\ \\text{always even}$$",
        "feedback": "You expanded incorrectly. $n(n-1)$ expands to $n^2 - n$, not $n^2 - 1$."
    },
    {
        "ans": "$$n(n-1) = 2k + 1$$",
        "feedback": "You concluded the expression is odd. One of the consecutive integers is always even, so the product must be even."
    },
    {
        "ans": "$$n(n-1) = 2n^2 - 2n$$",
        "feedback": "You multiplied the entire expression by 2 unnecessarily. The goal is to show the expression itself is even, not $2$ times the expression."
    }
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
