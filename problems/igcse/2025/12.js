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
        "q": "Simplify fully:<br>$$(16x^{12}y^8)^{\\frac{1}{4}}$$$",
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
            "content": "When clearing denominators by multiplying, you must multiply *every* term on both sides of the equation by the common denominator. A very frequent error is to multiply the fractional terms on the left but forget to multiply the constant integer on the right side."
        },
        "payhip_link": "https://payhip.com/b/x02Ge",
        "button_text": "Master IGCSE Algebra: Download the Pack"
    }

]
