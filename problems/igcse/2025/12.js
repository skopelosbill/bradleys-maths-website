const problemBank = [
    //1 December 2025
    {
        "id": "002970",
        "date": "1 December 2025",
        "major_area": "Number",
        "topic": "Estimation",
        "subtopic": "Estimation",
        "difficulty": "C/D",
        "q": "Consider the following fraction:<br>$$\\dfrac{59.62 \\times 3.98}{0.485}$$<br>(a) By writing each number correct to 1 significant figure, estimate the value of the fraction. Show all your working.<br>(b) Use your calculator to work out the exact value of the fraction, showing all the digits on your calculator display in your answer.<br>(c) Write your answer to part (b) correct to 2 significant figures.",
        "steps": [
            "For part (a), we round each number in the fraction to 1 significant figure.",
            "The number $59.62$ rounds to $60$. The number $3.98$ rounds to $4$. The number $0.485$ rounds to $0.5$.",
            "Substituting these estimated values into our fraction gives: $\\dfrac{60 \\times 4}{0.5}$.",
            "Multiplying the terms in the numerator: $60 \\times 4 = 240$.",
            "Dividing $240$ by $0.5$ is equivalent to multiplying by 2, which gives: $240 \\div 0.5 = 480$.",
            "For part (b), we type the original expression into a scientific calculator, evaluating it to find the full display value: $489.2527835$.",
            "For part (c), we round the decimal value $489.2527835$ correct to 2 significant figures.",
            "The first two significant figures are 4 and 8, followed by a 9 in the third position. Since the third digit is 5 or more, we round up the second digit, yielding $490$.",
            "Final Answer: $$(a)\ 480\\ (b)\ 489.2527835\\ (c)\ 490$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ 600\\ (b)\ 489.2527835\\ (c)\ 489.25$$",
                "feedback": "For part (a), you rounded $0.485$ to $0.4$ instead of $0.5$. For part (c), you rounded to 2 decimal places instead of 2 significant figures."
            },
            {
                "ans": "$$(a)\ 120\\ (b)\ 489.2527835\\ (c)\ 490$$",
                "feedback": "For part (a), you multiplied by $0.5$ instead of dividing. Dividing a number by $0.5$ is mathematically equivalent to multiplying it by 2."
            },
            {
                "ans": "$$(a)\ 480\\ (b)\ 489.2527835\\ (c)\ 480$$",
                "feedback": "For part (c), you did not round up $489.2527835$ correctly, keeping the second digit as 8 instead of rounding up to 9 due to the subsequent 9."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dividing by Decimals",
            "content": "When dividing a number by $0.5$, remember that it is mathematically identical to multiplying that number by 2. A very common error is to halve the numerator, resulting in $120$ instead of $480$."
        },
        "payhip_link": "https://payhip.com/b/dyVCM",
        "button_text": "Master IGCSE Estimation: Download the Pack"
    },
    {
        "id": "002971",
        "date": "2 December 2025",
        "major_area": "Algebra",
        "topic": "Algebraic Expressions",
        "subtopic": "Expanding Products",
        "difficulty": "B/C",
        "q": "Expand and simplify the following expression:<br>$$(x - 4)(x + 2)(2x + 1)$$",
        "steps": [
            "We begin by expanding the first two brackets, $(x - 4)(x + 2)$.",
            "Multiplying the terms inside: $x^2 + 2x - 4x - 8$.",
            "Simplifying the expression by combining the linear terms gives: $x^2 - 2x - 8$.",
            "Now, we multiply this resulting quadratic expression by the third bracket: $(x^2 - 2x - 8)(2x + 1)$.",
            "We distribute each term of the quadratic to the terms in the linear bracket: $2x^3 + x^2 - 4x^2 - 2x - 16x - 8$.",
            "Finally, we simplify by grouping the like terms together to find our expanded expression: $2x^3 - 3x^2 - 18x - 8$.",
            "Final Answer: $$2x^3 - 3x^2 - 18x - 8$$"
        ],
        "wrong_options": [
            {
                "ans": "$$2x^3 + 5x^2 - 14x - 8$$",
                "feedback": "You made a sign error when expanding $(x-4)(x+2)$, simplifying it to $x^2 + 2x - 8$ instead of $x^2 - 2x - 8$."
            },
            {
                "ans": "$$2x^3 - 3x^2 - 18x + 8$$",
                "feedback": "You made a sign error at the final constant term, multiplying $-8$ by $+1$ to get $+8$ instead of $-8$."
            },
            {
                "ans": "$$2x^3 - 5x^2 - 18x - 8$$",
                "feedback": "You made an arithmetic error when combining the $x^2$ terms, evaluating $+1 - 4$ as $-5$ instead of $-3$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systematic Expansion",
            "content": "To expand three brackets reliably, always expand the first two brackets completely and simplify the resulting quadratic before attempting to multiply by the third bracket. Trying to multiply all three at once is a recipe for algebraic confusion and lost signs."
        },
        "payhip_link": "https://payhip.com/b/G9rN4",
        "button_text": "Master IGCSE Expressions: Download the Pack"
    },
    {
        "id": "002972",
        "date": "3 December 2025",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Standard Form",
        "difficulty": "C/D",
        "q": "Work out the value of:<br>$$(5 \\times 10^4) + (6 \\times 10^3)$$<br>Give your answer in standard form.",
        "steps": [
            "To add these numbers, we can first convert them from standard form into ordinary decimal numbers.",
            "The first term is: $5 \\times 10^4 = 50000$.",
            "The second term is: $6 \\times 10^3 = 6000$.",
            "Adding these two ordinary numbers together: $50000 + 6000 = 56000$.",
            "We convert our sum back into standard form by placing the decimal point after the first non-zero digit and counting the places it has moved: $56000 = 5.6 \\times 10^4$.",
            "Final Answer: $$5.6 \\times 10^4$$"
        ],
        "wrong_options": [
            {
                "ans": "$$1.1 \\times 10^8$$",
                "feedback": "You cannot add standard form coefficients directly unless their exponents match. You also multiplied the powers instead of adding values."
            },
            {
                "ans": "$$11 \\times 10^4$$",
                "feedback": "You added 5 and 6 directly without aligning their decimal values or powers of 10. $5 \\times 10^4$ is ten times larger than $6 \\times 10^3$."
            },
            {
                "ans": "$$56 \\times 10^3$$",
                "feedback": "Your sum is numerically correct, but your final answer is not in standard form. In standard form, the leading number must be between 1 and 10."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Index Realignment",
            "content": "If you want to perform this addition without converting to ordinary numbers, realign the smaller term to match the larger index: $6 \\times 10^3 = 0.6 \\times 10^4$. Now you can simply add the coefficients: $(5 + 0.6) \\times 10^4 = 5.6 \\times 10^4$."
        },
        "payhip_link": "https://payhip.com/b/rTMY4",
        "button_text": "Master IGCSE Number: Download the Pack"
    },
    {
        "id": "002973",
        "date": "4 December 2025",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Stationary Points",
        "difficulty": "A/A*",
        "q": "An open-topped box has a square base of side $x\\text{ cm}$ and a height of $h\\text{ cm}$. The volume of the box is $500\\text{ cm}^3$.<br>(a) Show that the external surface area, $S\\text{ cm}^2$, of the box is given by:<br>$$S = x^2 + \\dfrac{2000}{x}$$<br>(b) Find $\\dfrac{\\text{d}S}{\\text{d}x}$.<br>(c) Calculate the value of $x$ that minimises the surface area of the box.",
        "steps": [
            "For part (a), we first write down the formula for the volume $V$ of a cuboid with a square base of side $x$ and height $h$: $V = x^2 h$.",
            "Since the volume is given as $500\\text{ cm}^3$, we set up the equation: $x^2 h = 500$.",
            "Rearranging this equation to make $h$ the subject: $h = \\dfrac{500}{x^2}$.",
            "Next, we write down the formula for the external surface area $S$ of an open-topped box (which consists of 1 square base and 4 rectangular side faces): $S = x^2 + 4xh$.",
            "We substitute our expression for $h$ into this surface area formula to eliminate $h$: $S = x^2 + 4x\\left(\\dfrac{500}{x^2}\\right)$.",
            "Simplifying the second term: $S = x^2 + \\dfrac{2000x}{x^2} = x^2 + \\dfrac{2000}{x}$, completing the proof.",
            "For part (b), to differentiate the fraction, we rewrite it using a negative index: $S = x^2 + 2000x^{-1}$.",
            "Differentiating each term with respect to $x$ using the power rule: $\\dfrac{\\text{d}S}{\\text{d}x} = 2x - 2000x^{-2}$.",
            "Rewriting with a positive exponent: $\\dfrac{\\text{d}S}{\\text{d}x} = 2x - \\dfrac{2000}{x^2}$.",
            "For part (c), the minimum surface area occurs at the stationary point where the derivative is equal to zero: $\\dfrac{\\text{d}S}{\\text{d}x} = 0$.",
            "Setting our derivative to zero: $2x - \\dfrac{2000}{x^2} = 0 \\implies 2x = \\dfrac{2000}{x^2}$.",
            "Multiplying both sides by $x^2$ to clear the fraction: $2x^3 = 2000$.",
            "Dividing both sides by 2 gives: $x^3 = 1000$.",
            "Taking the cube root of both sides gives the value of $x$: $x = \\sqrt[3]{1000} = 10\\text{ cm}$.",
            "Final Answer: $$(a)\\ \\text{Proof completed}\\ (b)\\ 2x - \\dfrac{2000}{x^2}\\ (c)\\ 10$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ S = 2x^2 + \\dfrac{2000}{x}\\ (b)\\ 4x - \\dfrac{2000}{x^2}\\ (c)\\ 7.94$$",
                "feedback": "You modeled the box as a closed container with a lid ($2x^2$) instead of an open-topped box ($x^2$)."
            },
            {
                "ans": "$$(a)\\ \\text{Proof completed}\\ (b)\\ 2x - \\dfrac{2000}{x^2}\\ (c)\\ 31.6$$",
                "feedback": "Your derivative is correct, but you evaluated $\\sqrt{1000}$ instead of the cube root $\\sqrt[3]{1000}$ at the final step."
            },
            {
                "ans": "$$(a)\\ \\text{Proof completed}\\ (b)\\ 2x + \\dfrac{2000}{x^2}\\ (c)\\ \\text{No real solution}$$",
                "feedback": "You forgot to change the sign of the constant term when differentiating $2000x^{-1}$, writing $+2000x^{-2}$ instead of $-2000x^{-2}$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Open-Topped Containers",
            "content": "Always read the physical description of the container carefully. An 'open-topped' box has only 5 faces, so the base area is represented by $x^2$ (one square base). A closed box would have a base and a lid, requiring $2x^2$. Misreading this will invalidate your surface area formula from the very first step."
        },
        "payhip_link": "https://payhip.com/b/pL8io",
        "button_text": "Master IGCSE Stationary Points: Download the Pack"
    },
    {
        "id": "002974",
        "date": "5 December 2025",
        "major_area": "Geometry",
        "topic": "Vectors",
        "subtopic": "Vector Geometry",
        "difficulty": "B/C",
        "img": "true",
        "q": "$OAB$ is a triangle. $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$. $P$ is a point on $AB$ such that the ratio $AP : PB = 2 : 3$.<br>Find $\\overrightarrow{OP}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$. Give your answer in its simplest form.",
        "steps": [
            "We first find the vector representing the path from $A$ to $B$, which is $\\overrightarrow{AB}$.",
            "Using vector addition: $\\overrightarrow{AB} = \\overrightarrow{AO} + \\overrightarrow{OB} = -\\mathbf{a} + \\mathbf{b}$.",
            "Since the ratio $AP : PB = 2 : 3$, the segment $AP$ represents $\\dfrac{2}{2+3} = \\dfrac{2}{5}$ of the entire vector path $\\overrightarrow{AB}$.",
            "We write this as: $\\overrightarrow{AP} = \\dfrac{2}{5}\\overrightarrow{AB} = \\dfrac{2}{5}(-\\mathbf{a} + \\mathbf{b})$.",
            "Now, we find the position vector $\\overrightarrow{OP}$ by adding the vectors along the path from $O$ to $P$ via $A$: $\\overrightarrow{OP} = \\overrightarrow{OA} + \\overrightarrow{AP}$.",
            "Substituting our vectors: $\\overrightarrow{OP} = \\mathbf{a} + \\dfrac{2}{5}(-\\mathbf{a} + \\mathbf{b})$.",
            "Expanding the brackets: $\\overrightarrow{OP} = \\mathbf{a} - \\dfrac{2}{5}\\mathbf{a} + \\dfrac{2}{5}\\mathbf{b}$.",
            "Combining the like terms for $\\mathbf{a}$ gives the simplified position vector: $\\overrightarrow{OP} = \\dfrac{3}{5}\\mathbf{a} + \\dfrac{2}{5}\\mathbf{b}$.",
            "Final Answer: $$\\dfrac{3}{5}\\mathbf{a} + \\dfrac{2}{5}\\mathbf{b}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\dfrac{1}{3}\\mathbf{a} + \\dfrac{2}{3}\\mathbf{b}$$",
                "feedback": "You treated the ratio $2:3$ as a fraction of $\\dfrac{2}{3}$ of the whole line instead of $\\dfrac{2}{2+3} = \\dfrac{2}{5}$."
            },
            {
                "ans": "$$\\dfrac{7}{5}\\mathbf{a} + \\dfrac{2}{5}\\mathbf{b}$$",
                "feedback": "You used $\\overrightarrow{AB} = \\mathbf{a} + \\mathbf{b}$ instead of $\\overrightarrow{AB} = -\\mathbf{a} + \\mathbf{b}$, which caused an incorrect coefficient for $\\mathbf{a}$."
            },
            {
                "ans": "$$\\dfrac{2}{5}\\mathbf{a} + \\dfrac{3}{5}\\mathbf{b}$$",
                "feedback": "You reversed the components of the ratio, allocating $\\dfrac{2}{5}$ to the vector $\\mathbf{a}$ path instead of $\\mathbf{b}$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Part-to-Whole Ratios",
            "content": "When a line is divided in the ratio $2:3$, it means there are $2 + 3 = 5$ equal parts in total. The segment $AP$ represents $\\dfrac{2}{5}$ of the entire length, not $\\dfrac{2}{3}$. Forgetting to add the parts of the ratio to find the total denominator is one of the most common mistakes in vector geometry."
        },
        "payhip_link": "https://payhip.com/b/wzbn9",
        "button_text": "Master IGCSE Vectors: Download the Pack"
    },
    {
        "id": "002975",
        "date": "6 December 2025",
        "major_area": "Number",
        "topic": "Bounds",
        "subtopic": "Limits of Accuracy",
        "difficulty": "B/C",
        "q": "A car travels a distance of $240\\text{ km}$, correct to the nearest $10\\text{ km}$. The journey takes $3.4\\text{ hours}$, correct to 1 decimal place.<br>Calculate the upper bound for the average speed of the car. Give your answer correct to 3 significant figures.",
        "steps": [
            "We first calculate the bounds of our recorded values.",
            "The distance $d = 240\\text{ km}$ is correct to the nearest $10\\text{ km}$. Halving this accuracy gives a boundary offset of $5\\text{ km}$.",
            "The upper bound for the distance is: $d_{\\text{UB}} = 240 + 5 = 245\\text{ km}$.",
            "The time $t = 3.4\\text{ hours}$ is correct to 1 decimal place (the nearest $0.1\\text{ hours}$). Halving this accuracy gives a boundary offset of $0.05\\text{ hours}$.",
            "The lower bound for the time is: $t_{\\text{LB}} = 3.4 - 0.05 = 3.35\\text{ hours}$.",
            "Average speed is calculated using the formula: $\\text{Speed} = \\dfrac{\\text{Distance}}{\\text{Time}}$.",
            "To find the upper bound of average speed, we divide the maximum possible distance by the minimum possible time: $\\text{Speed}_{\\text{UB}} = \\dfrac{d_{\\text{UB}}}{t_{\\text{LB}}}$.",
            "Substituting our bounds into this formula gives: $\\text{Speed}_{\\text{UB}} = \\dfrac{245}{3.35} \\approx 73.134\\text{ km/h}$.",
            "Rounding this speed to 3 significant figures gives $73.1\\text{ km/h}$.",
            "Final Answer: $$73.1\\text{ km/h}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$68.1\\text{ km/h}$$",
                "feedback": "You calculated the lower bound of speed by dividing the lower bound of distance ($235$) by the upper bound of time ($3.45$)."
            },
            {
                "ans": "$$71.0\\text{ km/h}$$",
                "feedback": "You divided the upper bound of distance by the upper bound of time ($245 \\div 3.45$). To maximise the speed, you must divide by the minimum possible time."
            },
            {
                "ans": "$$71.8\\text{ km/h}$$",
                "feedback": "You calculated the bounds of the distance incorrectly, treating $240\\text{ km}$ as if it were correct to the nearest $1\\text{ km}$ instead of the nearest $10\\text{ km}$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Pacing Division Bounds",
            "content": "To get the largest possible value when dividing, always divide the upper bound of the top (numerator) by the lower bound of the bottom (denominator). A common mistake is to divide the two upper bounds, which will result in an incorrect, lower speed value."
        },
        "payhip_link": "https://payhip.com/b/9LFtZ",
        "button_text": "Master IGCSE Bounds: Download the Pack"
    },
    {
        "id": "002976",
        "date": "7 December 2025",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "Exact Trigonometric Values",
        "difficulty": "A/B",
        "img": "true",
        "q": "Do not use a calculator on this question.<br>A right-angled triangle has an angle of $30^\\circ$ and a hypotenuse of length $8\\sqrt{3}\\text{ cm}$.<br>(a) Calculate the exact length of the adjacent side, $x$.<br>(b) Find the exact length of the third side, $y$.<br>(c) Use Pythagoras' theorem to show that your answers in parts (a) and (b) are mathematically consistent with a right angle.",
        "steps": [
            "For part (a), we use the cosine ratio, which relates the adjacent side to the hypotenuse: $\\cos(\\theta) = \\dfrac{\\text{Adjacent}}{\\text{Hypotenuse}}$.",
            "This gives: $\\cos(30^\\circ) = \\dfrac{x}{8\\sqrt{3}}$.",
            "We substitute the exact trigonometric value $\\cos(30^\\circ) = \\dfrac{\\sqrt{3}}{2}$: $\\dfrac{\\sqrt{3}}{2} = \\dfrac{x}{8\\sqrt{3}}$.",
            "Rearranging to solve for $x$: $x = \\dfrac{\\sqrt{3}}{2} \\times 8\\sqrt{3} = \\dfrac{8 \\times 3}{2} = \\dfrac{24}{2} = 12\\text{ cm}$.",
            "For part (b), we use the sine ratio, which relates the opposite side to the hypotenuse: $\\sin(\\theta) = \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}}$.",
            "This gives: $\\sin(30^\\circ) = \\dfrac{y}{8\\sqrt{3}}$.",
            "We substitute the exact trigonometric value $\\sin(30^\\circ) = \\dfrac{1}{2}$: $\\dfrac{1}{2} = \\dfrac{y}{8\\sqrt{3}}$.",
            "Rearranging to solve for $y$: $y = \\dfrac{1}{2} \\times 8\\sqrt{3} = 4\\sqrt{3}\\text{ cm}$.",
            "For part (c), we use Pythagoras' theorem, $a^2 = b^2 + c^2$, to verify that the square of the hypotenuse is equal to the sum of the squares of the other two sides.",
            "Evaluating the square of the hypotenuse: $(8\\sqrt{3})^2 = 8^2 \\times 3 = 64 \\times 3 = 192$.",
            "Evaluating the sum of the squares of the other two sides: $12^2 + (4\\sqrt{3})^2 = 144 + (4^2 \\times 3) = 144 + 48 = 192$.",
            "Since $192 = 192$, the calculations are consistent and Pythagoras' theorem holds true, completing the proof.",
            "Final Answer: $$(a)\ 12\\text{ cm}\\ (b)\ 4\\sqrt{3}\\text{ cm}\\ (c)\ \\text{Proof completed}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ 10.4\\text{ cm}\\ (b)\ 6.93\\text{ cm}\\ (c)\ \\text{Proof completed}$$",
                "feedback": "The question explicitly demands exact values. Giving decimal approximations like $10.4$ and $6.93$ instead of integers and exact surds is incorrect."
            },
            {
                "ans": "$$(a)\ 4\\sqrt{3}\\text{ cm}\\ (b)\ 12\\text{ cm}\\ (c)\ \\text{Proof completed}$$",
                "feedback": "You reversed the definitions of sine and cosine, using sine to calculate the adjacent side and cosine to calculate the opposite side."
            },
            {
                "ans": "$$(a)\ 12\\text{ cm}\\ (b)\ 4\\sqrt{3}\\text{ cm}\\ (c)\ 144 + 144 = 288$$",
                "feedback": "You squared the opposite side incorrectly in part (c), evaluating $(4\\sqrt{3})^2$ as $16 \\times 9 = 144$ instead of $16 \\times 3 = 48$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Exact Surd Verification",
            "content": "When squaring terms like $4\\sqrt{3}$ inside Pythagoras' theorem, square both parts of the term individually: $4^2 = 16$ and $(\\sqrt{3})^2 = 3$, giving $16 \\times 3 = 48$. This makes it very easy to verify your exact values without any decimal approximations."
        },
        "payhip_link": "https://payhip.com/b/cHHoW",
        "button_text": "Master IGCSE Trigonometry: Download the Pack"
    },
    {
        "id": "002977",
        "date": "8 December 2025",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Quadratic Equations 1",
        "difficulty": "A/B",
        "q": "Adam runs a distance of $12\\text{ km}$ at a constant speed of $x\\text{ km/h}$. Ben runs the same $12\\text{ km}$ at a constant speed of $(x + 3)\\text{ km/h}$. Adam takes 20 minutes longer than Ben to complete the run.<br>(a) Write down an equation in $x$ and show that it simplifies to: $x^2 + 3x - 108 = 0$.<br>(b) Solve the equation $x^2 + 3x - 108 = 0$ to find the running speed of Adam. Show all your working.",
        "steps": [
            "For part (a), we write down expressions for the time taken by both runners, using the formula: $\\text{Time} = \\dfrac{\\text{Distance}}{\\text{Speed}}$.",
            "The time taken by Adam is: $T_{\\text{Adam}} = \\dfrac{12}{x}$ hours.",
            "The time taken by Ben is: $T_{\\text{Ben}} = \\dfrac{12}{x + 3}$ hours.",
            "The difference in their times is given as 20 minutes. Since speeds are in km/h, we must convert this time difference into hours: $20\\text{ minutes} = \\dfrac{20}{60} = \\dfrac{1}{3}\\text{ hour}$.",
            "Since Adam takes longer, we set up our equation as: $\\dfrac{12}{x} - \\dfrac{12}{x + 3} = \\dfrac{1}{3}$.",
            "To clear the denominators, we multiply every term on both sides by the common denominator $3x(x + 3)$.",
            "This simplifies the equation to: $36(x + 3) - 36x = x(x + 3)$.",
            "Expanding the brackets on both sides: $36x + 108 - 36x = x^2 + 3x \\implies 108 = x^2 + 3x$.",
            "Subtracting 108 from both sides gives the required quadratic equation: $x^2 + 3x - 108 = 0$, completing the proof.",
            "For part (b), we solve the quadratic equation $x^2 + 3x - 108 = 0$ by factorising.",
            "We find two numbers that multiply to $-108$ and sum to $+3$. These numbers are $+12$ and $-9$.",
            "This allows us to write the factorised equation as: $(x + 12)(x - 9) = 0$.",
            "This yields two mathematical solutions: $x = -12$ or $x = 9$.",
            "Since speed must be a positive physical quantity, we discard the negative root. The running speed of Adam is therefore $9\\text{ km/h}$.",
            "Final Answer: $$(a)\\ \\text{Proof completed}\\ (b)\ 9\\text{ km/h}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\text{Proof completed}\\ (b)\ x = 9 \\text{ or } x = -12$$",
                "feedback": "Speed is a physical scalar quantity and cannot be negative. You must discard the negative root ($x = -12$) in the context of this real-world problem."
            },
            {
                "ans": "$$(a)\ x^2 + 3x - 1.8 = 0\\ (b)\ 0.512\\text{ km/h}$$",
                "feedback": "You did not convert the time difference of 20 minutes into hours, which led to an incorrect algebraic formulation."
            },
            {
                "ans": "$$(a)\\ \\text{Proof completed}\\ (b)\ 12\\text{ km/h}$$",
                "feedback": "You factorised the quadratic as $(x - 12)(x + 9) = 0$, which reversed the signs of your roots."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Physical Constraints on Roots",
            "content": "Always read the context of the question when solving algebraic equations. A quadratic equation will mathematically yield two roots, but physical quantities like speed, length, or time cannot be negative. You must explicitly state which root you are discarding and why to secure full marks."
        },
        "payhip_link": "https://payhip.com/b/elEAX",
        "button_text": "Master IGCSE Quadratics: Download the Pack"
    },
    {
        "id": "002978",
        "date": "9 December 2025",
        "major_area": "Number",
        "topic": "Indices",
        "subtopic": "Fractional Indices and Roots",
        "difficulty": "B/C",
        "q": "Simplify fully:<br>$$(16x^{12}y^8)^{\\frac{1}{4}}$$",
        "steps": [
            "We apply the fractional power of $\\dfrac{1}{4}$ to every term inside the parentheses.",
            "This separates the expression into: $(16)^{\\frac{1}{4}} \\times (x^{12})^{\\frac{1}{4}} \\times (y^8)^{\\frac{1}{4}}$.",
            "Evaluating the numerical coefficient: $16^{\\frac{1}{4}} = \\sqrt[4]{16} = 2$.",
            "Applying the power of a power rule to the $x$ term by multiplying the exponents: $12 \\times \\dfrac{1}{4} = 3$, giving $x^3$.",
            "Applying the power of a power rule to the $y$ term by multiplying the exponents: $8 \\times \\dfrac{1}{4} = 2$, giving $y^2$.",
            "Combining these terms gives the fully simplified expression: $2x^3 y^2$.",
            "Final Answer: $$2x^3 y^2$$"
        ],
        "wrong_options": [
            {
                "ans": "$$4x^3 y^2$$",
                "feedback": "You divided the coefficient 16 by 4. A fractional exponent of $\\dfrac{1}{4}$ represents the fourth root ($\\sqrt[4]{16}$), not division by 4."
            },
            {
                "ans": "$$2x^8 y^4$$",
                "feedback": "You subtracted the power of $\\dfrac{1}{4}$ or divided the exponents incorrectly. You must multiply power indices when raising a power to another power."
            },
            {
                "ans": "$$16x^3 y^2$$",
                "feedback": "You forgot to apply the fourth root of $\\dfrac{1}{4}$ to the numerical coefficient of 16."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root Index Power Rules",
            "content": "When dealing with index rules, remember: coefficients are raised to the power (so $16^{1/4} = \\sqrt[4]{16} = 2$), while variables have their exponents multiplied by the power (so $x^{12 \\times 1/4} = x^3$). Treating coefficients and powers identically is the most common source of error."
        },
        "payhip_link": "https://payhip.com/b/ZKKG2",
        "button_text": "Master IGCSE Indices: Download the Pack"
    },
    {
        "id": "002979",
        "date": "10 December 2025",
        "major_area": "Probability & Statistics",
        "topic": "Data Presentation",
        "subtopic": "Cumulative Frequency Diagrams",
        "difficulty": "B/C",
        "q": "The table shows information about the scores of 120 students in a mathematics test.<br><br><table border='1' style='border-collapse: collapse; text-align: center; margin: 10px 0; width: 100%; max-width: 500px;'><thead><tr style='background-color: #f2f2f2;'><th style='padding: 8px;'>Score ($s$)</th><th style='padding: 8px;'>$s \\le 20$</th><th style='padding: 8px;'>$s \\le 40$</th><th style='padding: 8px;'>$s \\le 60$</th><th style='padding: 8px;'>$s \\le 80$</th><th style='padding: 8px;'>$s \\le 100$</th></tr></thead><tbody><tr><td style='padding: 8px; font-weight: bold;'>Cumulative Frequency</td><td style='padding: 8px;'>12</td><td style='padding: 8px;'>40</td><td style='padding: 8px;'>85</td><td style='padding: 8px;'>110</td><td style='padding: 8px;'>120</td></tr></tbody></table><br>(a) On the grid provided, draw a cumulative frequency diagram to represent this data.<br>(b) Use your graph to estimate the 90th percentile score.<br>(c) Students who score more than 65 pass the test. Use your graph to estimate the number of students who pass the test.",
        "steps": [
            "For part (a), we plot our cumulative frequencies against the upper boundaries of each score interval.",
            "The points to plot are: $(20, 12)$, $(40, 40)$, $(60, 85)$, $(80, 110)$, and $(100, 120)$.",
            "We connect these plotted points with a smooth S-shaped curve starting from $(0,0)$ on the origin to complete the diagram.",
            "For part (b), to find the 90th percentile, we calculate $90\\%$ of the total number of students (120): $\\text{Position} = 120 \\times 0.90 = 108$.",
            "We read horizontally across from a cumulative frequency of 108 to meet our curve, and then read vertically down to the horizontal axis to find the corresponding score.",
            "This gives an estimated 90th percentile score of $78$ (accept any value in the range of 76 to 80).",
            "For part (c), we find the number of students who scored 65 or less by reading vertically up from a score of $65$ on the horizontal axis to meet our curve.",
            "Reading horizontally across to the vertical axis gives an estimated cumulative frequency of $92$ students.",
            "Since this represents the number of students who scored 65 or less, the number of students who passed (scored more than 65) is found by subtracting this from the total: $120 - 92 = 28$ students.",
            "Final Answer: $$(a)\\ \\text{Graph plotted}\\ (b)\ 78\\ (c)\ 28$$<img src='images/2025-12/i_10_ans.png' alt='cumulative frequency graph with dashed lines for working' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ \\text{Graph plotted}\\ (b)\ 78\\ (c)\ 92$$",
                "feedback": "For part (c), 91 represents the number of students who scored 65 or less (failed). You must subtract this from the total of 120 to find those who scored more than 65 (passed)."
            },
            {
                "ans": "$$(a)\ \\text{Graph plotted}\\ (b)\ 63\\ (c)\ 28$$",
                "feedback": "For part (b), you used a cumulative frequency of 90 to find your percentile. 90 represents the 75th percentile (or upper quartile position), not the 90th percentile ($120 \\times 0.90 = 108$)"
            },
            {
                "ans": "$$(a)\ \\text{Midpoints plotted}\\ (b)\ 68\\ (c)\ 19$$",
                "feedback": "You must always plot cumulative frequency against the upper boundary of each class interval, not the midpoints."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Plotting Boundaries vs Midpoints",
            "content": "In cumulative frequency diagrams, always plot your frequency values against the upper boundary of each interval. Plotting against class midpoints is a major error that will distort your curve and lose you multiple plotting and accuracy marks."
        },
        "payhip_link": "https://payhip.com/b/NhqEx",
        "button_text": "Master IGCSE Statistics: Download the Pack"
    },
    {
        "id": "002980",
        "date": "11 December 2025",
        "major_area": "Geometry",
        "topic": "Coordinate Geometry",
        "subtopic": "Graphs in Practical Situations",
        "difficulty": "C/D",
        "img": "true",
        "q": "The speed-time graph shows the first 20 seconds of a car journey.<br>(a) Calculate the acceleration of the car during the first 10 seconds.<br>(b) Calculate the total distance travelled by the car in the 20 seconds.",
        "steps": [
            "For part (a), the acceleration is represented by the gradient of the speed-time graph during the first 10 seconds.",
            "The formula for gradient is: $\\text{Acceleration} = \\dfrac{\\text{Change in Velocity}}{\\text{Time taken}}$.",
            "From the graph, the velocity increases from $0$ to $12\\text{ m/s}$ in $10\\text{ seconds}$.",
            "This gives: $\\text{Acceleration} = \\dfrac{12 - 0}{10} = 1.2\\text{ m/s}^2$.",
            "For part (b), the total distance travelled is represented by the area under the speed-time graph.",
            "The shape under the graph is a trapezium. The formula for the area of a trapezium is: $\\text{Area} = \\dfrac{1}{2}(a + b)h$.",
            "The top parallel base $a$ is the constant speed interval: $20 - 10 = 10\\text{ s}$.",
            "The bottom parallel base $b$ is the total time interval: $20\\text{ s}$.",
            "The height $h$ is the maximum speed: $12\\text{ m/s}$.",
            "Substituting these values into the area formula: $\\text{Distance} = \\dfrac{1}{2}(10 + 20) \\times 12$.",
            "Evaluating the calculation: $\\text{Distance} = \\dfrac{1}{2}(30) \\times 12 = 15 \\times 12 = 180\\text{ m}$.",
            "Final Answer: $$(a)\ 1.2\\text{ m/s}^2\\ (b)\ 180\\text{ m}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ 1.2\\text{ m/s}^2\\ (b)\ 240\\text{ m}$$",
                "feedback": "You multiplied the maximum speed by the total time ($12 \\times 20 = 240$), which assumes the car traveled at a constant speed of 12 m/s for the entire duration."
            },
            {
                "ans": "$$(a)\ 1.2\\text{ m/s}^2\\ (b)\ 120\\text{ m}$$",
                "feedback": "You calculated the area of a single triangle of base 20 ($0.5 \\times 20 \\times 12 = 120$), which fails to account for the flat constant-speed section."
            },
            {
                "ans": "$$(a)\ 120\\text{ m/s}^2\\ (b)\ 180\\text{ m}$$",
                "feedback": "You multiplied the change in speed by the time ($12 \\times 10$) instead of dividing to find the gradient."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Splitting Complex Areas",
            "content": "If you do not want to use the trapezium area formula, you can always split the area under the graph into two simpler shapes: a triangle representing the acceleration phase ($0.5 \\times 10 \\times 12 = 60\\text{ m}$) and a rectangle representing the constant-speed phase ($10 \\times 12 = 120\\text{ m}$). Summing these gives the same total of $180\\text{ m}$."
        },
        "payhip_link": "https://payhip.com/b/wyZ3k",
        "button_text": "Master IGCSE Kinematics: Download the Pack"
    },
    {
        "id": "002981",
        "date": "12 December 2025",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Algebraic Fractions 2",
        "difficulty": "A/B",
        "q": "Solve the equation:<br>$$\\dfrac{15}{x} - \\dfrac{15}{x + 2} = 2$$<br>You must show all your algebraic working.",
        "steps": [
            "We begin by finding a common denominator to combine the fractions on the left side: $x(x + 2)$.",
            "We rewrite the equation by multiplying every term by the common denominator $x(x + 2)$ to clear the fractions.",
            "This yields: $15(x + 2) - 15x = 2x(x + 2)$.",
            "We expand both sides of the equation: $15x + 30 - 15x = 2x^2 + 4x$.",
            "Combining the linear terms on the left side: $30 = 2x^2 + 4x$.",
            "We rearrange all terms to one side to form a quadratic equation equal to zero: $2x^2 + 4x - 30 = 0$.",
            "To make the equation simpler to factorise, we divide every term by 2: $x^2 + 2x - 15 = 0$.",
            "We factorise the quadratic by finding two numbers that multiply to $-15$ and sum to $+2$. These numbers are $+5$ and $-3$.",
            "This gives the factorised form: $(x + 5)(x - 3) = 0$.",
            "Solving for $x$ yields two distinct solutions: $x = -5$ or $x = 3$.",
            "Final Answer: $$x = -5 \\text{ or } x = 3$$"
        ],
        "wrong_options": [
            {
                "ans": "$$x = 5 \\text{ or } x = -3$$",
                "feedback": "You factorised the quadratic as $(x - 5)(x + 3) = 0$, which reversed the signs of your final roots."
            },
            {
                "ans": "$$x = -0.5 \\text{ or } x = 1.5$$",
                "feedback": "You forgot to multiply the right side of the equation (the 2) by the common denominator $x(x+2)$ when clearing the fractions."
            },
            {
                "ans": "$$x = 0 \\text{ or } x = -2$$",
                "feedback": "You made a sign error during expansion, which caused the $x$ terms to not cancel out on the left side."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Clearing Every Term",
            "content": "When clearing denominators by multiplying, you must multiply <strong>every</strong> term on both sides of the equation by the common denominator. A very frequent error is to multiply the fractional terms on the left but forget to multiply the constant integer on the right side."
        },
        "payhip_link": "https://payhip.com/b/x02Ge",
        "button_text": "Master IGCSE Algebra: Download the Pack"
    },
    {
        "id": "002982",
        "date": "13 December 2025",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Simultaneous Linear Equations",
        "difficulty": "C/D",
        "q": "Solve the simultaneous equations:<br>$$3x + 2y = 14$$<br>$$5x - 3y = 17$$<br>You must show all your working.",
        "steps": [
            "We begin by multiplying the equations to make the absolute coefficients of $y$ equal.",
            "We multiply the first equation by 3: $3(3x + 2y) = 3(14) \\implies 9x + 6y = 42$.",
            "We multiply the second equation by 2: $2(5x - 3y) = 2(17) \\implies 10x - 6y = 34$.",
            "Now, we add the two modified equations together to eliminate the $y$ terms: $(9x + 10x) + (6y - 6y) = 42 + 34 \\implies 19x = 76$.",
            "Dividing both sides by 19: $x = \\dfrac{76}{19} = 4$.",
            "We substitute $x = 4$ back into the first original equation to find $y$: $3(4) + 2y = 14$.",
            "This simplifies to: $12 + 2y = 14 \\implies 2y = 2 \\implies y = 1$.",
            "Final Answer: $$x = 4,\\ y = 1$$"
        ],
        "wrong_options": [
            {
                "ans": "$$x = 4,\\ y = 13$$",
                "feedback": "You calculated $x = 4$ correctly, but you made an arithmetic error when substituting it back to solve for $y$."
            },
            {
                "ans": "$$x = 8,\\ y = 1$$",
                "feedback": "You made an arithmetic error when adding your equations, which led to an incorrect value for $x$."
            },
            {
                "ans": "$$x = 1,\\ y = 4$$",
                "feedback": "You calculated the correct numerical values of 1 and 4, but you reversed the identities of the variables $x$ and $y$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Checking Simultaneous Roots",
            "content": "You can always guarantee full marks on simultaneous equations by substituting your final values back into the equation you did not use for substitution. In this case, checking $5(4) - 3(1) = 20 - 3 = 17$ confirms your answers are completely correct."
        },
        "payhip_link": "https://payhip.com/b/XW1im",
        "button_text": "Master IGCSE Simultaneous Equations: Download the Pack"
    },
    {
        "id": "002983",
        "date": "14 December 2025",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Stationary Points",
        "difficulty": "A/B",
        "q": "A curve has the equation $y = 2x^3 - 5x^2 + 8$.<br>(a) Find $\\dfrac{\\text{d}y}{\\text{d}x}$.<br>(b) Find the coordinates of the two turning points of the curve.",
        "steps": [
            "For part (a), we differentiate $y = 2x^3 - 5x^2 + 8$ with respect to $x$ using the power rule.",
            "Differentiating $2x^3$ gives $6x^2$. Differentiating $-5x^2$ gives $-10x$. Differentiating the constant 8 gives 0.",
            "This yields the derivative: $\\dfrac{\\text{d}y}{\\text{d}x} = 6x^2 - 10x$.",
            "For part (b), turning points occur at the stationary points where the gradient is zero: $\\dfrac{\\text{d}y}{\\text{d}x} = 0$.",
            "We set our derivative to zero: $6x^2 - 10x = 0$.",
            "We factorise the quadratic expression: $2x(3x - 5) = 0$.",
            "This yields two roots: $x = 0$ or $x = \\dfrac{5}{3}$ (or approximately $1.67$).",
            "To find the corresponding y-coordinates, we substitute these $x$ values back into the <strong>original</strong> curve equation.",
            "When $x = 0$: $y = 2(0)^3 - 5(0)^2 + 8 = 8$. The first turning point is $(0, 8)$.",
            "When $x = \\dfrac{5}{3}$: $y = 2\\left(\\dfrac{5}{3}\\right)^3 - 5\\left(\\dfrac{5}{3}\\right)^2 + 8 = 2\\left(\\dfrac{125}{27}\\right) - 5\\left(\\dfrac{25}{9}\\right) + 8$.",
            "Using a common denominator of 27: $y = \\dfrac{250}{27} - \\dfrac{375}{27} + \\dfrac{216}{27} = \\dfrac{91}{27}$ (or approximately $3.37$).",
            "The coordinates of the two turning points are $(0, 8)$ and $\\left(\\dfrac{5}{3}, \\dfrac{91}{27}\\right)$.",
            "Final Answer: $$(a)\\ \\dfrac{\\text{d}y}{\\text{d}x} = 6x^2 - 10x\\ (b)\\ (0, 8) \\text{ and } \\left(\\dfrac{5}{3}, \\dfrac{91}{27}\\right)$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\dfrac{\\text{d}y}{\\text{d}x} = 6x^2 - 10x\\ (b)\\ (0, 0) \\text{ and } \\left(\\dfrac{5}{3}, 0\\right)$$",
                "feedback": "You substituted your $x$ coordinates back into your derivative $\\dfrac{\\text{d}y}{\\text{d}x}$ instead of the original curve equation $y$."
            },
            {
                "ans": "$$(a)\\ \\dfrac{\\text{d}y}{\\text{d}x} = 6x^2 - 10x\\ (b)\\ (0, 8) \\text{ and } \\left(-\\dfrac{5}{3}, \\dfrac{401}{27}\\right)$$",
                "feedback": "You factorised $6x^2 - 10x = 0$ incorrectly, resulting in a positive sign inside the bracket and an incorrect root of $x = -\\dfrac{5}{3}$."
            },
            {
                "ans": "$$(a)\\ \\dfrac{\\text{d}y}{\\text{d}x} = 2x^2 - 5x\\ (b)\\ (0, 8) \\text{ and } \\left(2.5, 4\\right)$$",
                "feedback": "You did not apply the power rule correctly when differentiating. Remember to multiply by the power before reducing it."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Choosing the Right Equation",
            "content": "A very common mistake when calculating turning points is substituting the $x$-coordinates back into the derivative. Substituting into $\\dfrac{\\text{d}y}{\\text{d}x}$ will simply give you $0$ (which is the gradient at that point). You must substitute back into the original function $y$ to find the actual coordinates."
        },
        "payhip_link": "https://payhip.com/b/pL8io",
        "button_text": "Master IGCSE Stationary Points: Download the Pack"
    },
    {
        "id": "002984",
        "date": "15 December 2025",
        "major_area": "Probability & Statistics",
        "topic": "Data Presentation",
        "subtopic": "Statistical Charts and Diagrams",
        "difficulty": "D/E",
        "q": "The marks scored by 11 students in a test are shown below:<br>$$\\text{24, 18, 32, 27, 19, 24, 35, 15, 29, 24, 31}$$<br>(a) Complete the stem-and-leaf diagram to show this information.<br>(b) Find the median mark.",
        "steps": [
            "For part (a), we organise the data by grouping the scores into stems based on their tens digit (1, 2, and 3).",
            "The leaves represent the units digits. According to standard practice, the leaves must be arranged in ascending numerical order.",
            "For stem 1 (tens of 10): the numbers are 15, 18, 19, which give leaves: 5, 8, 9.",
            "For stem 2 (tens of 20): the numbers are 24, 24, 24, 27, 29, which give leaves: 4, 4, 4, 7, 9.",
            "For stem 3 (tens of 30): the numbers are 31, 32, 35, which give leaves: 1, 2, 5.",
            "This completes our ordered stem-and-leaf diagram as modelled below.",
            "For part (b), to find the median, we first note there are 11 data points.",
            "The position of the median is: $\\text{Position} = \\dfrac{11 + 1}{2} = 6\\text{th value}$.",
            "Counting to the 6th value on our ordered diagram: the 6th leaf is 4 in the 2nd stem, which represents a score of $24$.",
            "Final Answer: $$(a)\\ \\text{Ordered diagram completed}\\ (b)\ 24$$<img src='images/2025-12/i_15_ans.png' alt='ordered stem and leaf diagram' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\text{Unordered diagram completed}\\ (b)\ 24$$",
                "feedback": "Your median is correct, but the leaves in your stem-and-leaf diagram are not in ascending numerical order."
            },
            {
                "ans": "$$(a)\\ \\text{Ordered diagram completed}\\ (b)\ 25.6$$",
                "feedback": "You calculated the mean average ($282 \\div 11 \\approx 25.6$) instead of finding the middle median value."
            },
            {
                "ans": "$$(a)\\ \\text{Ordered diagram completed}\\ (b)\ 27$$",
                "feedback": "You miscalculated the position of the median or made a counting error on the diagram, arriving at the 7th value ($27$) instead of the 6th value ($24$)."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Ordering the Leaves",
            "content": "Leaving the units digits unordered on a stem-and-leaf diagram is a very frequent source of lost marks. Always complete a rough, unordered draft first, then write out your final version with the leaves sorted in strict ascending order from left to right."
        },
        "payhip_link": "https://payhip.com/b/xuigq",
        "button_text": "Master IGCSE Charts: Download the Pack"
    },
    {
        "id": "002985",
        "date": "16 December 2025",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "The Cosine Rule",
        "difficulty": "A/B",
        "img": "true",
        "q": "A ship sails from a port $O$ for $15\\text{ km}$ on a bearing of $040^\\circ$ to point $A$. A second ship sails from port $O$ for $22\\text{ km}$ on a bearing of $110^\\circ$ to point $B$.<br>(a) Calculate the distance $AB$. Give your answer correct to 3 significant figures.<br>(b) Calculate the bearing of $B$ from $A$. Give your answer correct to 1 decimal place.",
        "steps": [
            "For part (a), we first find the interior angle $AOB$ between the two ships\\' paths.",
            "This is the difference between their bearings: $\\text{angle } AOB = 110^\\circ - 40^\\circ = 70^\\circ$.",
            "We apply the Cosine Rule to find the unknown side $AB$ (which lies opposite the angle $O = 70^\\circ$): $AB^2 = OA^2 + OB^2 - 2(OA)(OB) \\cos(AOB)$.",
            "Substituting our known values: $AB^2 = 15^2 + 22^2 - 2(15)(22) \\cos(70^\\circ)$.",
            "Evaluating the arithmetic: $AB^2 = 225 + 484 - 660 \\cos(70^\\circ) = 709 - 660 \\cos(70^\\circ)$.",
            "Using a calculator: $\\cos(70^\\circ) \\approx 0.34202$. This gives: $AB^2 = 709 - 660(0.34202) = 709 - 225.733 = 483.267$.",
            "Taking the square root of both sides gives: $AB = \\sqrt{483.267} \\approx 21.983\\text{ km}$.",
            "Rounding this distance to 3 significant figures gives $22.0\\text{ km}$.",
            "For part (b), we calculate the bearing of $B$ from $A$.",
            "First, we draw the parallel North lines at both $O$ and $A$. The alternate interior angle from the North line at $O$ to the segment $OA$ shows that the bearing of $O$ from $A$ is $040^\\circ + 180^\\circ = 220^\\circ$.",
            "Next, we use the Sine Rule to calculate the interior angle $OAB$: $\\dfrac{\\sin(OAB)}{OB} = \\dfrac{\\sin(AOB)}{AB}$.",
            "Substituting the values: $\\dfrac{\\sin(OAB)}{22} = \\dfrac{\\sin(70^\\circ)}{21.983}$.",
            "Rearranging to solve for $\\sin(OAB)$: $\\sin(OAB) = \\dfrac{22 \\times \\sin(70^\\circ)}{21.983}$.",
            "Evaluating the right side: $\\sin(OAB) \\approx \\dfrac{22 \\times 0.93969}{21.983} \\approx 0.94042$.",
            "Taking the inverse sine: $\\text{angle } OAB \\approx \\arcsin(0.94042) \\approx 70.1^\\circ$.",
            "Since Port $B$ lies to the left of the line $AO$ when viewed from $A$, we subtract the interior angle $OAB$ from the back bearing of $220^\\circ$: $\\text{Bearing} = 220^\\circ - 70.1^\\circ = 149.9^\\circ$.",
            "Final Answer: $$(a)\\ 22.0\\text{ km}\\ (b)\\ 149.9^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 30.6\\text{ km}\\ (b)\\ 149.9^\\circ$$",
                "feedback": "You made a sign error in your Cosine Rule equation, adding the $2(OA)(OB)\\cos(Q)$ term instead of subtracting it."
            },
            {
                "ans": "$$(a)\\ 22.0\\text{ km}\\ (b)\\ 290.1^\\circ$$",
                "feedback": "For part (b), you added the interior angle $OAB$ ($70.1^\\circ$) to the back bearing of $220^\\circ$ instead of subtracting it."
            },
            {
                "ans": "$$(a)\\ 32.5\\text{ km}\\ (b)\\ 140.0^\\circ$$",
                "feedback": "You calculated an incorrect interior angle $AOB$ by adding the bearings instead of subtracting them."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Alternate Interior Angles in Bearings",
            "content": "Always draw a vertical North line at every point where a direction changes. Drawing parallel North lines allows you to use co-interior or alternate interior angles (like the $40^\\circ$ angle at $O$ and $A$) to establish an initial reference line, simplifying your final bearing calculations."
        },
        "payhip_link": "https://payhip.com/b/KLYAp",
        "button_text": "Master IGCSE Trigonometry: Download the Pack"
    },
    {
        "id": "002986",
        "date": "17 December 2025",
        "major_area": "Geometry",
        "topic": "Circle Geometry",
        "subtopic": "Circle Theorems 1",
        "difficulty": "B/C",
        "img": "true",
        "q": "$P$, $Q$, $R$, and $S$ are points on a circle with centre $O$. $PR$ is a diameter of the circle. Angle $PQS = 44^\\circ$ and angle $QSR = 31^\\circ$.<br>(a) Find angle $PRS$.<br>(b) Find angle $RQS$.<br>(c) Find angle $POQ$.",
        "steps": [
            "For part (a), we look at the angle $PRS$. This angle is subtended by the arc $PS$ at the circumference.",
            "According to the circle theorem, angles subtended by the same arc (or in the same segment) are equal.",
            "Since angle $PQS$ is also subtended by the arc $PS$ at the circumference, we have: $\\text{angle } PRS = \\text{angle } PQS = 44^\\circ$.",
            "For part (b), we find the angle $RQS$. Since $PR$ is a diameter of the circle, the angle in a semicircle $PQR$ must be exactly $90^\\circ$.",
            "This means the total angle $PQR = \\text{angle } PQS + \\text{angle } RQS = 90^\\circ$.",
            "We calculate our angle as: $\\text{angle } RQS = 90^\\circ - 44^\\circ = 46^\\circ$.",
            "For part (c), we find the angle $POQ$ subtended by the arc $PQ$ at the centre.",
            "The angle subtended by the same arc $PQ$ at the circumference is angle $PRQ$.",
            "Let\\'s find angle $PRQ$ first. In the right-angled triangle $PQR$ (where the angle in a semicircle $PQR$ is $90^\\circ$), the angles in the same segment show that angle $QPR = \\text{angle } QSR = 31^\\circ$.",
            "Using the sum of angles in a triangle: $\\text{angle } PRQ = 180^\\circ - (90^\\circ + 31^\\circ) = 59^\\circ$.",
            "Since the angle subtended by an arc at the centre is twice the angle subtended at the circumference: $\\text{angle } POQ = 2 \\times \\text{angle } PRQ = 2 \\times 59^\\circ = 118^\\circ$.",
            "Final Answer: $$(a)\\ 44^\\circ\\ (b)\\ 46^\\circ\\ (c)\\ 118^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 44^\\circ\\ (b)\\ 46^\\circ\\ (c)\\ 29.5^\\circ$$",
                "feedback": "You divided the circumference angle by 2 instead of multiplying by 2 to find the angle at the centre in part (c)."
            },
            {
                "ans": "$$(a)\\ 44^\\circ\\ (b)\\ 44^\\circ\\ (c)\\ 88^\\circ$$",
                "feedback": "You assumed that angle $RQS$ is equal to angle $PQS$, which is incorrect because they are subtended by different arcs."
            },
            {
                "ans": "$$(a)\\ 31^\\circ\\ (b)\\ 59^\\circ\\ (c)\\ 118^\\circ$$",
                "feedback": "You swapped the values for parts (a) and (b), misapplying the same segment theorem."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Identifying Segments",
            "content": "To apply the same segment theorem correctly, trace the lines of your angles back to the circumference. Both angle $PQS$ and angle $PRS$ rest on the same arc $PS$, making them equal. Finding these matching arcs is key to unlocking multi-step circle problems."
        },
        "payhip_link": "https://payhip.com/b/1y6TA",
        "button_text": "Master IGCSE Circle Geometry: Download the Pack"
    },
    {
        "id": "002987",
        "date": "18 December 2025",
        "major_area": "Geometry",
        "topic": "Coordinate Geometry",
        "subtopic": "Parallel and Perpendicular Lines, Mixed Problems",
        "difficulty": "B/C",
        "q": "The point $A$ has coordinates $(2, -1)$ and the point $B$ has coordinates $(8, 7)$.<br>(a) Calculate the length $|AB|$.<br>(b) Find the equation of the perpendicular bisector of the line segment $AB$. Give your answer in the form $y = mx + c$.",
        "steps": [
            "For part (a), we calculate the length of the line segment $|AB|$ using the distance formula: $|AB| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.",
            "Substituting the coordinates of $A(2, -1)$ and $B(8, 7)$: $|AB| = \\sqrt{(8 - 2)^2 + (7 - (-1))^2} = \\sqrt{6^2 + 8^2}$.",
            "Evaluating the squares: $|AB| = \\sqrt{36 + 64} = \\sqrt{100} = 10$.",
            "For part (b), we find the equation of the perpendicular bisector of $AB$. A perpendicular bisector passes through the midpoint of the line segment and has a perpendicular gradient.",
            "We find the midpoint of $AB$: $\\text{Midpoint} = \\left(\\dfrac{x_1 + x_2}{2}, \\dfrac{y_1 + y_2}{2}\\right) = \\left(\\dfrac{2 + 8}{2}, \\dfrac{-1 + 7}{2}\\right) = (5, 3)$.",
            "Next, we find the gradient of the line $AB$: $m_{AB} = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{7 - (-1)}{8 - 2} = \\dfrac{8}{6} = \\dfrac{4}{3}$.",
            "Using the perpendicular gradient rule ($m_1 \\times m_2 = -1$), the perpendicular gradient is: $m_{\\perp} = -\\dfrac{3}{4}$ (or $-0.75$).",
            "Using the straight-line equation $y - y_1 = m(x - x_1)$ with our midpoint $(5, 3)$ and perpendicular gradient $m = -0.75$:",
            "This gives: $y - 3 = -0.75(x - 5) \\implies y - 3 = -0.75x + 3.75$.",
            "Adding 3 to both sides gives the final equation in the form $y = mx + c$: $y = -0.75x + 6.75$.",
            "Final Answer: $$(a)\\ 10\\ (b)\\ y = -0.75x + 6.75$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 10\\ (b)\\ y = 1.33x - 3.67$$",
                "feedback": "You used the original gradient of $AB$ ($\\dfrac{4}{3}$) instead of finding the negative reciprocal perpendicular gradient ($-\\dfrac{3}{4}$)."
            },
            {
                "ans": "$$(a)\\ 10\\ (b)\\ y = -0.75x + 0.5$$",
                "feedback": "You substituted the point $A(2, -1)$ instead of the midpoint $(5, 3)$ to find the y-intercept $c$."
            },
            {
                "ans": "$$(a)\\ 14\\ (b)\\ y = -0.75x + 6.75$$",
                "feedback": "You added the coordinate differences ($6 + 8 = 14$) in part (a) instead of taking the square root of the sum of their squares."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Perpendicular Bisector Steps",
            "content": "Finding a perpendicular bisector is a three-step process. First, find the midpoint (the coordinate the line passes through). Second, find the original gradient and take its negative reciprocal. Finally, use these two new values in $y - y_1 = m(x - x_1)$ to construct your equation."
        },
        "payhip_link": "https://payhip.com/b/yhHQo",
        "button_text": "Master IGCSE Coordinate Geometry: Download the Pack"
    },
    {
        "id": "002988",
        "date": "19 December 2025",
        "major_area": "Number",
        "topic": "Ratio and Proportion",
        "subtopic": "Proportion",
        "difficulty": "A/B",
        "q": "The variable $y$ is inversely proportional to the square root of $x$. When $x = 25$, $y = 4$.<br>(a) Find the value of $y$ when $x = 100$.<br>(b) Find the value of $x$ when $y = 10$.",
        "steps": [
            "For part (a), we write the statement of inverse proportion as an algebraic equation: $y = \\dfrac{k}{\\sqrt{x}}$, where $k$ is the constant of proportionality.",
            "We substitute the known values $x = 25$ and $y = 4$ into this equation: $4 = \\dfrac{k}{\\sqrt{25}}$.",
            "Since the square root of 25 is 5, this simplifies to: $4 = \\dfrac{k}{5}$.",
            "Multiplying both sides by 5 gives the constant of proportionality: $k = 4 \\times 5 = 20$. Our formula is: $y = \\dfrac{20}{\\sqrt{x}}$.",
            "To find the value of $y$ when $x = 100$, we substitute $x = 100$ into our formula: $y = \\dfrac{20}{\\sqrt{100}}$.",
            "Since the square root of 100 is 10, we calculate: $y = \\dfrac{20}{10} = 2$.",
            "For part (b), we find the value of $x$ when $y = 10$ by substituting $y = 10$ into our formula: $10 = \\dfrac{20}{\\sqrt{x}}$.",
            "We multiply both sides by $\\sqrt{x}$ to clear the fraction: $10\\sqrt{x} = 20$.",
            "Dividing both sides by 10 gives: $\\sqrt{x} = \\dfrac{20}{10} = 2$.",
            "To solve for $x$, we square both sides of the equation: $x = 2^2 = 4$.",
            "Final Answer: $$(a)\ 2\\ (b)\ 4$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ 1\\ (b)\ 16$$",
                "feedback": "You modeled the relationship as inversely proportional to $x$ instead of the square root of $x$ ($\\sqrt{x}$)."
            },
            {
                "ans": "$$(a)\ 2\\ (b)\ 2$$",
                "feedback": "Your value for part (a) is correct, but for part (b) you forgot to square the equation, giving $\\sqrt{x} = 2$ as your final value of $x$."
            },
            {
                "ans": "$$(a)\ 80\\ (b)\ 0.04$$",
                "feedback": "You modeled the relationship as directly proportional to $\\sqrt{x}$ instead of inversely proportional."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Root Inverse Proportions",
            "content": "Make sure you read the relationship terms carefully. 'Inversely proportional to the square root' means you must write your variable as $\\sqrt{x}$ in the denominator. When solving for $x$ in part (b), remember that the opposite of taking a square root is squaring, so you must square 2 to get $x = 4$."
        },
        "payhip_link": "https://payhip.com/b/e47ks",
        "button_text": "Master IGCSE Proportion: Download the Pack"
    },
    {
        "id": "002989",
        "date": "20 December 2025",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Simultaneous Equations (Linear – Quadratic)",
        "difficulty": "A/A*",
        "q": "Solve the simultaneous equations:<br>$$y = x - 2$$<br>$$x^2 + y^2 = 34$$<br>You must show all your algebraic working.",
        "steps": [
            "We solve this system of equations by substituting the linear expression for $y$ directly into the quadratic equation.",
            "Substituting $y = x - 2$ into $x^2 + y^2 = 34$ yields: $x^2 + (x - 2)^2 = 34$.",
            "We expand the squared linear bracket carefully: $(x - 2)^2 = x^2 - 4x + 4$.",
            "Substituting this expansion back into our equation: $x^2 + (x^2 - 4x + 4) = 34 \\implies 2x^2 - 4x + 4 = 34$.",
            "We subtract 34 from both sides to form a quadratic equation equal to zero: $2x^2 - 4x - 30 = 0$.",
            "To make the quadratic simpler to factorise, we divide every term by 2: $x^2 - 2x - 15 = 0$.",
            "We factorise the quadratic by finding two numbers that multiply to $-15$ and sum to $-2$. These numbers are $-5$ and $+3$.",
            "This gives the factorised equation: $(x - 5)(x + 3) = 0$.",
            "This yields two $x$ values: $x = 5$ or $x = -3$.",
            "We substitute each $x$ value back into our linear equation $y = x - 2$ to find the corresponding $y$ values.",
            "When $x = 5$: $y = 5 - 2 = 3$. This gives the first solution pair: $(5, 3)$.",
            "When $x = -3$: $y = -3 - 2 = -5$. This gives the second solution pair: $(-3, -5)$.",
            "Final Answer: $$x = 5,\\ y = 3 \\text{ or } x = -3,\\ y = -5$$"
        ],
        "wrong_options": [
            {
                "ans": "$$x = 5,\\ y = 3$$",
                "feedback": "Your first coordinate pair is correct, but you forgot to state the second mathematical solution pair ($x = -3, y = -5$)."
            },
            {
                "ans": "$$x = -5,\\ y = -7 \\text{ or } x = 3,\\ y = 1$$",
                "feedback": "You factorised the quadratic incorrectly as $(x + 5)(x - 3) = 0$, which reversed the signs of your $x$ coordinates."
            },
            {
                "ans": "$$x = 5,\\ y = 3 \\text{ or } x = -3,\\ y = -1$$",
                "feedback": "You calculated your $x$ values correctly, but you made an arithmetic error when substituting $x = -3$ back into the linear equation to solve for $y$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Pairing Coordinates",
            "content": "A common mistake in quadratic simultaneous equations is failing to pair your $x$ and $y$ values correctly. Always substitute your calculated $x$ values back into the linear equation one by one, and write your final answers as distinct, paired coordinates to avoid confusion."
        },
        "payhip_link": "https://payhip.com/b/0CP5n",
        "button_text": "Master IGCSE Simultaneous Equations: Download the Pack"
    },
    {
        "id": "002990",
        "date": "21 December 2025",
        "major_area": "Algebra",
        "topic": "Sequences",
        "subtopic": "Sequences",
        "difficulty": "B/C",
        "q": "In an arithmetic sequence, the 3rd term is 11 and the 7th term is 27.<br>(a) Find an expression, in terms of $n$, for the $n$th term of this sequence.<br>(b) State, with full working to support your answer, whether 120 is a member of this sequence.",
        "steps": [
            "For part (a), the formula for the $n$th term of an arithmetic sequence is given by: $T_n = a + (n - 1)d$, where $a$ is the first term and $d$ is the common difference.",
            "We set up simultaneous equations using our given terms.",
            "For the 3rd term: $a + 2d = 11$.",
            "For the 7th term: $a + 6d = 27$.",
            "Subtracting the first equation from the second to eliminate $a$: $(a + 6d) - (a + 2d) = 27 - 11 \\implies 4d = 16$.",
            "Dividing by 4 gives the common difference: $d = 4$.",
            "We substitute $d = 4$ back into our first equation to find $a$: $a + 2(4) = 11 \\implies a + 8 = 11 \\implies a = 3$.",
            "The formula for the $n$th term is: $T_n = 3 + (n - 1)4 = 3 + 4n - 4 = 4n - 1$.",
            "For part (b), to determine if 120 is a member of the sequence, we set our $n$th term formula equal to 120: $4n - 1 = 120$.",
            "Adding 1 to both sides of the equation: $4n = 121$.",
            "Dividing both sides by 4: $n = 30.25$.",
            "Since the term position $n$ must be a positive integer, and $30.25$ is a decimal, 120 is not a member of this sequence.",
            "Final Answer: $$(a)\ 4n - 1\\ (b)\ \\text{No, because } n = 30.25 \\text{ is not an integer}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ 4n + 3\\ (b)\ \\text{No, because } n = 29.25 \\text{ is not an integer}$$",
                "feedback": "You found the correct first term $a = 3$ and common difference $d = 4$, but you wrote your $n$th term formula as $dn + a$ ($4n + 3$) instead of $dn + (a - d)$ ($4n - 1$)."
            },
            {
                "ans": "$$(a)\ 4n - 1\\ (b)\ \\text{Yes, because } n = 30 \\text{ is an integer}$$",
                "feedback": "You made an arithmetic error when checking the term position, incorrectly dividing 121 by 4 as 30 instead of 30.25."
            },
            {
                "ans": "$$(a)\ 8n - 13\\ (b)\ \\text{No, because } n = 16.63 \\text{ is not an integer}$$",
                "feedback": "You calculated an incorrect common difference of $d = 8$ by dividing 16 by 2 instead of 4."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Fractional Term Positions",
            "content": "To prove whether a number belongs to a sequence, always set your $n$th term expression equal to that number and solve for $n$. Since $n$ represents the physical position of a term (1st, 2nd, 3rd, etc.), it must always evaluate to a positive whole number. A decimal solution means the number falls between two terms and is not in the sequence."
        },
        "payhip_link": "https://payhip.com/b/5HqEG",
        "button_text": "Master IGCSE Sequences: Download the Pack"
    },
    {
        "id": "002991",
        "date": "22 December 2025",
        "major_area": "Geometry",
        "topic": "Circle Geometry",
        "subtopic": "Circle Theorems 2",
        "difficulty": "A/B",
        "img": "true",
        "q": "The diagram shows a circle with points $A$, $B$, $C$, and $D$ on the circumference. The chords $AC$ and $BD$ intersect at point $X$.<br>(a) Prove that triangle $AXB$ is similar to triangle $DXC$.<br>(b) $AX = 6\\text{ cm}$, $XB = 4\\text{ cm}$, and $DX = 7.5\\text{ cm}$. Calculate the length of $XC$.",
        "steps": [
            "For part (a), to prove two triangles are similar, we must show that all three corresponding angles are equal (Angle-Angle-Angle).",
            "First, angle $AXB = \\text{angle } DXC$ because they are vertically opposite angles.",
            "Second, angle $BAX = \\text{angle } CDX$ because they are angles subtended by the same arc $BC$ (angles in the same segment).",
            "Third, angle $ABX = \\text{angle } DCX$ because they are angles subtended by the same arc $AD$ (angles in the same segment).",
            "Since all three corresponding angles are equal, triangle $AXB$ is similar to triangle $DXC$ (AAA), completing the proof.",
            "For part (b), we use the Intersecting Chords Theorem, which states that when two chords intersect inside a circle, the product of their segments is equal.",
            "This gives the relationship: $AX \\times XC = BX \\times DX$.",
            "Substituting our known values: $6 \\times XC = 4 \\times 7.5$.",
            "Evaluating the multiplication: $6XC = 30$.",
            "Dividing both sides by 6 yields: $XC = 5\\text{ cm}$.",
            "Final Answer: $$(a)\ \\text{Proof completed}\\ (b)\ 5\\text{ cm}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ \\text{Proof completed}\\ (b)\ 11.25\\text{ cm}$$",
                "feedback": "You set up your intersecting chords ratio incorrectly, multiplying $AX \\times BX = XC \\times DX$ instead of multiplying the segments of the same chord together."
            },
            {
                "ans": "$$(a)\ \\text{Proof based on congruent triangles completed}\\ (b)\ 5\\text{ cm}$$",
                "feedback": "For part (a), your proof incorrectly claimed the triangles were congruent. These triangles are similar (same shape but different sizes), not congruent (identical)."
            },
            {
                "ans": "$$(a)\ \\text{Proof completed}\\ (b)\ 3.2\\text{ cm}$$",
                "feedback": "You made an arithmetic error when solving the equation, dividing 30 by 6 incorrectly or setting up the wrong cross-multiplication."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Intersecting Chords",
            "content": "The Intersecting Chords Theorem is a direct consequence of similar triangles. Because triangle $AXB$ is similar to triangle $DXC$, the ratio of their corresponding sides is equal: $\\dfrac{AX}{DX} = \\dfrac{BX}{XC}$. Cross-multiplying this ratio yields the theorem: $AX \\times XC = BX \\times DX$."
        },
        "payhip_link": "https://payhip.com/b/xrmnz",
        "button_text": "Master IGCSE Circle Geometry: Download the Pack"
    },
    {
        "id": "002992",
        "date": "23 December 2025",
        "major_area": "Geometry",
        "topic": "Transformations",
        "subtopic": "Transformations",
        "difficulty": "C/D",
        "img": "true",
        "q": "The diagram shows three triangles, $A$, $B$, and $C$, plotted on a coordinate grid.<br>(a) Describe fully the single transformation that maps triangle $A$ onto triangle $B$.<br>(b) Describe fully the single transformation that maps triangle $A$ onto triangle $C$.",
        "steps": [
            "For part (a), we observe that triangle $A$ and triangle $B$ have the same orientation and size, which indicates a translation.",
            "We trace a single vertex of triangle $A$ to its corresponding vertex on triangle $B$.",
            "The bottom-left vertex of $A(1,1)$ moves to the bottom-left vertex of $B(-4,2)$.",
            "This movement represents a horizontal displacement of $-5$ (5 units left) and a vertical displacement of $+1$ (1 unit up).",
            "We express this fully as: a translation by the vector $\\begin{pmatrix} -5 \\\\ 1 \\end{pmatrix}$.",
            "For part (b), we observe that triangle $C$ is a flipped version of triangle $A$ across a horizontal line, which indicates a reflection.",
            "By tracing the vertical distances from the vertices of $A$ and $C$ to the horizontal axis ($y = 0$), we see that the horizontal axis acts as the mirror line.",
            "We express this fully as: a reflection in the x-axis (or the line $y = 0$).",
            "Final Answer: $$(a)\ \\text{Translation by vector } \\begin{pmatrix} -5 \\\\ 1 \\end{pmatrix}\\ (b)\ \\text{Reflection in the x-axis (or line } y = 0\\text{)}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ \\text{Translation by vector } \\begin{pmatrix} 1 \\\\ -5 \\end{pmatrix}\\ (b)\ \\text{Reflection in the y-axis}$$",
                "feedback": "For part (a), you reversed the components of your translation vector, writing the vertical change on top and the horizontal change on the bottom."
            },
            {
                "ans": "$$(a)\ \\text{Rotation of 90 degrees}\\ (b)\ \\text{Reflection in the line } y = -x$$",
                "feedback": "Triangle $B$ has the exact same orientation as triangle $A$, so no rotation has occurred."
            },
            {
                "ans": "$$(a)\ \\text{Translation by vector } \\begin{pmatrix} -5 \\\\ 1 \\end{pmatrix}\\ (b)\ \\text{Reflection}$$",
                "feedback": "For part (b), a description of a reflection is incomplete without explicitly naming the mirror line (the x-axis or $y = 0$)."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Complete Descriptions",
            "content": "In transformation questions, you will lose multiple marks if your description is incomplete. A translation must always include the word 'translation' and a column vector. A reflection must always include the word 'reflection' and the equation of the mirror line."
        },
        "payhip_link": "https://payhip.com/b/U2nMw",
        "button_text": "Master IGCSE Transformations: Download the Pack"
    },
    {
    "id": "002993",
    "date": "24 December 2025",
    "major_area": "Probability & Statistics",
    "topic": "Probability",
    "subtopic": "Probability of Combined Events",
    "difficulty": "A/A*",
    "q": "A bag contains $n$ sweets. 3 of the sweets are red, and the rest are green. Tom takes two sweets from the bag at random, without replacement. The probability that Tom takes two red sweets is $\\dfrac{1}{22}$.<br>(a) Show that $n^2 - n - 132 = 0$.<br>(b) Find the number of sweets originally in the bag.",
    "steps": [
        "For part (a), we model the probability of selecting two red sweets consecutively without replacement.",
        "The probability of selecting a red sweet on the first draw is: $\\text{P}(\\text{Red}_1) = \\dfrac{3}{n}$.",
        "Since selection is without replacement, $n-1$ total sweets remain, of which $2$ are red. The probability of selecting a red sweet on the second draw is: $\\text{P}(\\text{Red}_2) = \\dfrac{2}{n - 1}$.",
        "The combined probability of selecting two red sweets is the product of these fractions: $\\text{P}(\\text{Both Red}) = \\dfrac{3}{n} \\times \\dfrac{2}{n - 1} = \\dfrac{6}{n(n - 1)}$.",
        "We set this expression equal to the given probability of $\\dfrac{1}{22}$: $\\dfrac{6}{n^2 - n} = \\dfrac{1}{22}$.",
        "We cross-multiply to eliminate the fractions: $6 \\times 22 = 1 \\times (n^2 - n) \\implies 132 = n^2 - n$.",
        "Subtracting 132 from both sides gives the required quadratic equation: $n^2 - n - 132 = 0$, completing the proof.",
        "For part (b), we solve the quadratic equation $n^2 - n - 132 = 0$ by factorising.",
        "We find two numbers that multiply to $-132$ and sum to $-1$. These numbers are $-12$ and $+11$.",
        "This gives the factorised form: $(n - 12)(n + 11) = 0$.",
        "This yields two mathematical solutions: $n = 12$ or $n = -11$.",
        "Since $n$ represents a physical quantity (the number of sweets), it must be a positive integer. We discard the negative root, leaving the original number of sweets as $12$.",
        "Final Answer: $$(a)\\ \\text{Proof completed}\\ (b)\ 12$$"
    ],
    "wrong_options": [
        {
            "ans": "$$(a)\\ \\text{Proof completed}\\ (b)\ 12 \\text{ or } -11$$",
            "feedback": "The number of sweets cannot be a negative value. You must discard the negative root $n = -11$ in this context."
        },
        {
            "ans": "$$(a)\ n^2 - 198 = 0\\ (b)\ 14$$",
            "feedback": "You calculated the probability with replacement ($\\dfrac{3}{n} \\times \\dfrac{3}{n} = \\dfrac{9}{n^2}$), which is incorrect for this sequential selection."
        },
        {
            "ans": "$$(a)\\ \\text{Proof completed}\\ (b)\ 11$$",
            "feedback": "You factorised the quadratic incorrectly as $(n + 12)(n - 11) = 0$, which reversed the values and signs of your roots."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Changing Denominators",
        "content": "In algebraic probability questions without replacement, always remember to reduce both the numerator (representing the specific item) and the denominator (representing the total items) by 1 for the second branch: $\\dfrac{3}{n} \\times \\dfrac{2}{n-1}$."
    },
    "payhip_link": "https://payhip.com/b/3AZnV",
    "button_text": "Master IGCSE Probability: Download the Pack"
},
    {
        "id": "002994",
        "date": "25 December 2025",
        "major_area": "Number",
        "topic": "Functions",
        "subtopic": "Functions, Domain, Range and Notation",
        "difficulty": "A/B",
        "q": "We are given the following functions:<br>$$f(x) = 2x - 3,\\ \\ \\ g(x) = x^2 + 1,\\ \\ \\ h(x) = \\dfrac{1}{x - 2}$$<br>(a) Find the value of the composite function $fg(4)$.<br>(b) Find the inverse function $f^{-1}(x)$.<br>(c) State the value of $x$ that must be excluded from the domain of $h(x)$.<br>(d) State the range of $g(x)$ for the domain $x \\in \\mathbb{R}$.",
        "steps": [
            "For part (a), to evaluate the composite function $fg(4)$, we first evaluate the inner function $g(4)$.",
            "Substituting 4 into $g(x)$: $g(4) = 4^2 + 1 = 16 + 1 = 17$.",
            "Now, we substitute this output value into the outer function $f(x)$: $f(17) = 2(17) - 3 = 34 - 3 = 31$.",
            "For part (b), to find the inverse function $f^{-1}(x)$, we set the equation to $y$: $y = 2x - 3$.",
            "We rearrange the equation to make $x$ the subject. Adding 3 to both sides: $y + 3 = 2x$.",
            "Dividing both sides by 2: $x = \\dfrac{y + 3}{2}$.",
            "We replace $x$ with $f^{-1}(x)$ and $y$ with $x$ to state the final inverse function: $f^{-1}(x) = \\dfrac{x + 3}{2}$.",
            "For part (c), the domain of $h(x) = \\dfrac{1}{x-2}$ must exclude any value of $x$ that results in a denominator of zero.",
            "Setting the denominator to zero: $x - 2 = 0 \\implies x = 2$. Therefore, $x = 2$ must be excluded.",
            "For part (d), the range represents all possible output values of $g(x) = x^2 + 1$.",
            "Since the minimum value of $x^2$ is 0 (for any real number $x$), the minimum value of $g(x)$ is $0 + 1 = 1$. Therefore, the range is $g(x) \\ge 1$.",
            "Final Answer: $$(a)\ 31\\ (b)\ f^{-1}(x) = \\dfrac{x+3}{2}\\ (c)\ 2\\ (d)\ g(x) \\ge 1$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ 31\\ (b)\ f^{-1}(x) = 2x + 3\\ (c)\ 2\\ (d)\ g(x) \\ge 1$$",
                "feedback": "You made an algebraic error when rearranging the equation to find the inverse function $f^{-1}(x)$ in part (b), multiplying by 2 instead of dividing."
            },
            {
                "ans": "$$(a)\ 13\\ (b)\ f^{-1}(x) = \\dfrac{x+3}{2}\\ (c)\ -2\\ (d)\ g(x) > 0$$",
                "feedback": "For part (a), you evaluated the composite function in the wrong order, calculating $gf(4)$ instead of $fg(4)$. For part (d), the minimum value of $x^2+1$ is 1, not 0."
            },
            {
                "ans": "$$(a)\ 31\\ (b)\ f^{-1}(x) = \\dfrac{x+3}{2}\\ (c)\ 2\\ (d)\ x \\ge 1$$",
                "feedback": "Your boundary calculation in part (d) is correct, but you used the input variable $x$ in your range inequality. Range must always be written in terms of $g(x)$ or $y$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Composite Order of Operations",
            "content": "When evaluating composite functions like $fg(4)$, always work from the inside out. Evaluate the inner function first to find $g(4) = 17$, and then feed that output directly into the outer function to calculate $f(17)$. Working from the outside in is a very common source of error."
        },
        "payhip_link": "https://payhip.com/b/Ttui3",
        "button_text": "Master IGCSE Functions: Download the Pack"
    },
    {
        "id": "002995",
        "date": "26 December 2025",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "Pythagoras and Trigonometry in 3D",
        "difficulty": "A/A*",
        "img": "true",
        "q": "$ABCDEFGH$ is a cuboid. The dimensions of the cuboid are $AB = 12\\text{ cm}$, $BC = 7\\text{ cm}$, and $CG = 5\\text{ cm}$.<br>Calculate the angle between the space diagonal $AG$ and the horizontal base $ABCD$. Give your answer correct to 1 decimal place.",
        "steps": [
            "We first identify the right-angled triangles needed to isolate the target angle $\\theta$.",
            "The angle $\\theta$ between the space diagonal $AG$ and the horizontal base is the angle $CAG$ in the vertical right-angled triangle $ACG$.",
            "The base diagonal $AC$ is found by applying Pythagoras' theorem to the right-angled triangle $ABC$ on the horizontal base: $AC^2 = AB^2 + BC^2 = 12^2 + 7^2$.",
            "Evaluating the squares: $AC^2 = 144 + 49 = 193 \\implies AC = \\sqrt{193}\\text{ cm}$ (approximately $13.89\\text{ cm}$).",
            "In the vertical right-angled triangle $ACG$, the side opposite to the angle $\\theta$ is the vertical edge $CG = 5\\text{ cm}$, and the adjacent side is the base diagonal $AC = \\sqrt{193}\\text{ cm}$.",
            "We apply the tangent trigonometric ratio: $\\tan(\\theta) = \\dfrac{\\text{Opposite}}{\\text{Adjacent}} = \\dfrac{CG}{AC} = \\dfrac{5}{\\sqrt{193}}$.",
            "Evaluating using a calculator: $\\tan(\\theta) \\approx 0.35991$.",
            "Taking the inverse tangent to solve for $\\theta$: $\\theta = \\arctan(0.35991) \\approx 19.794^\\circ$.",
            "Rounding the angle to 1 decimal place gives $19.8^\\circ$.",
            "Final Answer: $$19.8^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$22.6^\\circ$$",
                "feedback": "You calculated the angle that the space diagonal $AG$ makes with the vertical edge $CG$ (at the top of the cuboid) instead of the angle it makes with the horizontal base."
            },
            {
                "ans": "$$19.5^\\circ$$",
                "feedback": "You used premature rounding in your calculations, using the rounded value of $13.9$ for $AC$ instead of carrying through the exact value of $\\sqrt{193}$."
            },
            {
                "ans": "$$15.6^\\circ$$",
                "feedback": "You used the sine ratio directly with the adjacent base diagonal and the opposite vertical edge, which violates standard trigonometric ratios."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Isolating 3D Triangles",
            "content": "To solve any 3D trigonometry problem, always draw the key right-angled triangles in 2D on your working page. For this question, isolating triangle $ABC$ on the base first, and then drawing the vertical slice triangle $ACG$, makes the trigonometric ratios completely clear."
        },
        "payhip_link": "https://payhip.com/b/udQPT",
        "button_text": "Master IGCSE 3D Trigonometry: Download the Pack"
    },
    {
        "id": "002996",
        "date": "27 December 2025",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Surds",
        "difficulty": "A/B",
        "q": "(a) Write $\\sqrt{75} + \\sqrt{12}$ in the form $k\\sqrt{3}$, where $k$ is an integer.<br>(b) Hence, find the exact value of $\\dfrac{1}{\\sqrt{75} + \\sqrt{12}}$ giving your answer in its simplest form.",
        "steps": [
            "For part (a), we simplify both surds by extracting their largest square factors.",
            "For the first term: $\\sqrt{75} = \\sqrt{25 \\times 3} = \\sqrt{25}\\sqrt{3} = 5\\sqrt{3}$.",
            "For the second term: $\\sqrt{12} = \\sqrt{4 \\times 3} = \\sqrt{4}\\sqrt{3} = 2\\sqrt{3}$.",
            "Adding these terms together: $5\\sqrt{3} + 2\\sqrt{3} = 7\\sqrt{3}$.",
            "For part (b), we substitute our simplified surd sum into the denominator of the fraction: $\\dfrac{1}{7\\sqrt{3}}$.",
            "To rationalise the denominator, we multiply the numerator and the denominator by $\\sqrt{3}$.",
            "This gives: $\\dfrac{1}{7\\sqrt{3}} \\times \\dfrac{\\sqrt{3}}{\\sqrt{3}} = \\dfrac{\\sqrt{3}}{7 \\times 3}$.",
            "Evaluating the denominator product gives the simplified exact value: $\\dfrac{\\sqrt{3}}{21}$.",
            "Final Answer: $$(a)\ 7\\sqrt{3}\\ (b)\ \\dfrac{\\sqrt{3}}{21}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ 7\\sqrt{3}\\ (b)\ \\dfrac{7\\sqrt{3}}{147}$$",
                "feedback": "Your value is correct, but you forgot to simplify the fraction by dividing the numerator and denominator by 7 to write it in its simplest form."
            },
            {
                "ans": "$$(a)\ \\sqrt{87}\\ (b)\ \\dfrac{\\sqrt{87}}{87}$$",
                "feedback": "You added the numbers under the roots directly ($\\sqrt{75} + \\sqrt{12} = \\sqrt{87}$). You cannot add surds directly unless they have identical radicands."
            },
            {
                "ans": "$$(a)\ 7\\sqrt{3}\\ (b)\ \\dfrac{1}{21}$$",
                "feedback": "You rationalised the denominator incorrectly, forgetting to multiply the numerator by $\\sqrt{3}$ during the expansion."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Rationalising Single Surds",
            "content": "To rationalise a fraction with a single surd on the bottom like $\\dfrac{1}{a\\sqrt{b}}$, simply multiply the top and bottom by $\\sqrt{b}$. This turns the denominator into the integer $ab$ and moves the root to the top, making the fraction exceptionally clean and easy to simplify."
        },
        "payhip_link": "https://payhip.com/b/QTHoU",
        "button_text": "Master IGCSE Surds: Download the Pack"
    },
    {
        "id": "002997",
        "date": "28 December 2025",
        "major_area": "Number",
        "topic": "Interest",
        "subtopic": "Percentage Change and Interest",
        "difficulty": "B/C",
        "q": "Malik invests \\$1500 in Account A paying simple interest at a rate of $4.5\\%$ per year.<br>He also invests \\$1500 in Account B paying compound interest at a rate of $4.2\\%$ per year.<br>Calculate the difference in the total value of the two accounts at the end of 6 years. Give your answer correct to the nearest cent.",
        "steps": [
            "We first calculate the final value of Account A using simple interest.",
            "The formula for simple interest is: $\\text{Interest} = \\dfrac{P \\times R \\times T}{100}$.",
            "Substituting the values: $\\text{Interest} = \\dfrac{1500 \\times 4.5 \\times 6}{100} = 405$.",
            "The final value of Account A is: $\\text{Value}_A = 1500 + 405 = 1905$.",
            "Next, we calculate the final value of Account B using compound interest.",
            "The formula for the total value with compound interest is: $\\text{Value}_B = P \\times (1 + r)^t$.",
            "Substituting the values: $\\text{Value}_B = 1500 \\times (1 + 0.042)^6 = 1500 \\times (1.042)^6$.",
            "Evaluating using a calculator: $\\text{Value}_B \\approx 1500 \\times 1.280084 = 1920.126$.",
            "To find the difference, we subtract the final value of Account A from Account B: $\\text{Difference} = 1920.126 - 1905 = 15.126$.",
            "Rounding this difference to the nearest cent (2 decimal places) gives: $15.13$.",
            "Final Answer: $$15.13$$"
        ],
        "wrong_options": [
            {
                "ans": "$$15.12$$",
                "feedback": "You truncated your final decimal value of $15.126...$ instead of rounding up correctly to $15.13$."
            },
            {
                "ans": "$$420.13$$",
                "feedback": "You calculated the difference in the interest earned on Account B compared to the original principal, instead of finding the difference between the total values of the two accounts."
            },
            {
                "ans": "$$15.00$$",
                "feedback": "You rounded your intermediate values prematurely, which introduced a small rounding discrepancy in your final cent value."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Simple vs Compound Multipliers",
            "content": "Ensure you use the correct interest formulas. Simple interest adds a flat amount of interest based only on the initial principal each year, whereas compound interest multiplies the updated balance annually, creating an exponential growth curve represented by the exponent $^6$."
        },
        "payhip_link": "https://payhip.com/b/Ebcut",
        "button_text": "Master IGCSE Interest: Download the Pack"
    },
    {
        "id": "002998",
        "date": "29 December 2025",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Surds",
        "difficulty": "C/D",
        "q": "Expand and simplify the following brackets:<br>$$(2 + \\sqrt{5})(2 - \\sqrt{5})$$",
        "steps": [
            "We expand the double brackets using the distributive property.",
            "This expands to: $2(2) - 2\\sqrt{5} + 2\\sqrt{5} - (\\sqrt{5} \\times \\sqrt{5})$.",
            "We simplify the terms: $4 - 2\\sqrt{5} + 2\\sqrt{5} - 5$.",
            "The middle opposite surd terms cancel out: $-2\\sqrt{5} + 2\\sqrt{5} = 0$.",
            "This leaves: $4 - 5 = -1$.",
            "Final Answer: $$-1$$"
        ],
        "wrong_options": [
            {
                "ans": "$$9$$",
                "feedback": "You squared both terms but added them together instead of subtracting, writing $4 + 5 = 9$."
            },
            {
                "ans": "$$4 - 5\\sqrt{5}$$",
                "feedback": "You expanded the terms incorrectly, failing to cancel the middle opposite surd terms."
            },
            {
                "ans": "$$-3$$",
                "feedback": "You squared the root of 5 incorrectly, evaluating $(\\sqrt{5})^2$ as $25$ instead of $5$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Difference of Two Squares",
            "content": "This expansion is a classic case of the Difference of Two Squares: $(a+b)(a-b) = a^2 - b^2$. Since the terms are $2$ and $\\sqrt{5}$, the result is simply $2^2 - (\\sqrt{5})^2 = 4 - 5 = -1$. Spotting this pattern instantly bypasses the need for full bracket expansion."
        },
        "payhip_link": "https://payhip.com/b/QTHoU",
        "button_text": "Master IGCSE Surds: Download the Pack"
    },
    {
        "id": "002999",
        "date": "30 December 2025",
        "major_area": "Algebra",
        "topic": "Curved Graphs",
        "subtopic": "Plotting Curved Graphs",
        "difficulty": "A/B",
        "q": "A curve has the equation $y = k a^x$, where $k$ and $a$ are positive constants.<br>The curve passes through the points $(0, 3)$ and $(2, 48)$.<br>Find the values of $k$ and $a$.",
        "steps": [
            "We begin by substituting the coordinates of the first point $(0, 3)$ into the curve\\text{'}s equation.",
            "This yields: $3 = k \\times a^0$.",
            "Since any non-zero number raised to the power of 0 is 1 ($a^0 = 1$), we have: $3 = k \\times 1 \\implies k = 3$.",
            "Now, we substitute the coordinates of the second point $(2, 48)$ and our calculated value of $k = 3$ into the equation.",
            "This yields: $48 = 3 \\times a^2$.",
            "Dividing both sides of the equation by 3: $a^2 = \\dfrac{48}{3} = 16$.",
            "Taking the square root of both sides to solve for $a$: $a = \\sqrt{16} = 4$ (since we are given that $a$ is positive).",
            "Final Answer: $$k = 3,\\ a = 4$$"
        ],
        "wrong_options": [
            {
                "ans": "$$k = 3,\\ a = 8$$",
                "feedback": "You divided 16 by 2 instead of taking the square root to solve for $a$ at the final step."
            },
            {
                "ans": "$$k = 0,\\ a = 4$$",
                "feedback": "You assumed that $a^0 = 0$, which led to an incorrect value of $k = 0$."
            },
            {
                "ans": "$$k = 3,\\ a = -4$$",
                "feedback": "Although $a^2 = 16$ mathematically yields $a = \\pm 4$, the question explicitly states that $a$ must be a positive constant."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Zero Index Rule",
            "content": "In exponential equations of the form $y = k a^x$, the y-intercept $(0, y)$ always yields the value of $k$ instantly. This is because $a^0 = 1$ for any positive base, leaving $y = k$. Always locate the $x=0$ point first to isolate your scaling constant."
        },
        "payhip_link": "https://payhip.com/b/D82tp",
        "button_text": "Master IGCSE Graphs: Download the Pack"
    },
    {
        "id": "003000",
        "date": "31 December 2025",
        "major_area": "Probability & Statistics",
        "topic": "Probability",
        "subtopic": "Probability of Combined Events",
        "difficulty": "B/C",
        "img": "true",
        "q": "A bag contains 4 red counters and 5 green counters. A counter is taken from the bag at random and is <strong>not</strong> replaced. A second counter is then taken from the bag at random.<br>(a) Complete the probability tree diagram.<br>(b) Calculate the probability that the two counters taken are the same colour.",
        "steps": [
            "For part (a), we complete the branches of the probability tree diagram step-by-step.",
            "The first branch for Green is found by subtracting the Red probability from 1: $1 - \\dfrac{4}{9} = \\dfrac{5}{9}$.",
            "For the second draw branches, since the first counter is not replaced, only 8 total counters remain in the bag.",
            "If the first counter was Red, 3 Red and 5 Green remain. This gives the branches: $\\text{P}(\\text{Red}_2 | \\text{Red}_1) = \\dfrac{3}{8}$ and $\\text{P}(\\text{Green}_2 | \\text{Red}_1) = \\dfrac{5}{8}$.",
            "If the first counter was Green, 4 Red and 4 Green remain. This gives the branches: $\\text{P}(\\text{Red}_2 | \\text{Green}_1) = \\dfrac{4}{8}$ and $\\text{P}(\\text{Green}_2 | \\text{Green}_1) = \\dfrac{4}{8}$.",
            "For part (b), we find the probability of drawing two counters of the same colour: (Red, Red) or (Green, Green).",
            "The probability of two Reds is: $\\text{P}(\\text{R, R}) = \\dfrac{4}{9} \\times \\dfrac{3}{8} = \\dfrac{12}{72}$.",
            "The probability of two Greens is: $\\text{P}(\\text{G, G}) = \\dfrac{5}{9} \\times \\dfrac{4}{8} = \\dfrac{20}{72}$.",
            "Adding these probabilities together: $\\text{P}(\\text{Same Colour}) = \\dfrac{12}{72} + \\dfrac{20}{72} = \\dfrac{32}{72}$.",
            "Simplifying the fraction by dividing the numerator and denominator by 8 yields: $\\dfrac{4}{9}$.",
            "Final Answer: $$(a)\\ \\text{Tree diagram completed}\\ (b)\\ \\dfrac{4}{9}$$<img src='images/2025-12/i_31_ans.png' alt='completed probability tree diagram' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\text{Tree diagram completed}\\ (b)\\ \\dfrac{41}{81}$$",
                "feedback": "You completed your calculations using 'with replacement' rules, keeping the denominator as 9 for the second draw."
            },
            {
                "ans": "$$(a)\\ \\text{Tree diagram completed}\\ (b)\\ \\dfrac{1}{6}$$",
                "feedback": "You calculated the probability of selecting only two red counters, forgetting to add the probability of selecting two green counters."
            },
            {
                "ans": "$$(a)\\ \\text{Tree diagram completed}\\ (b)\\ \\dfrac{4}{17}$$",
                "feedback": "You added the denominators when multiplying your branch fractions or made an arithmetic error when expanding your joint paths."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Denominator Reductions",
            "content": "When completing tree diagrams without replacement, always remember to decrease both the numerator and the denominator by 1 for the second branch. The total number of remaining counters must drop from 9 to 8."
        },
        "payhip_link": "https://payhip.com/b/3AZnV",
        "button_text": "Master IGCSE Probability: Download the Pack"
    }

]
