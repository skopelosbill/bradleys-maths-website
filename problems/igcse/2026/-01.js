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
        "q": "Expand and simplify the following expression:<br>$$(x - 4)(x + 2)(2x + 1)$$$",
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
        "q": "Work out the value of:<br>$$(5 \\times 10^4) + (6 \\times 10^3)$$$<br>Give your answer in standard form.",
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
        "q": "An open-topped box has a square base of side $x\\text{ cm}$ and a height of $h\\text{ cm}$. The volume of the box is $500\\text{ cm}^3$.<br>(a) Show that the external surface area, $S\\text{ cm}^2$, of the box is given by:<br>$$S = x^2 + \\dfrac{2000}{x}$$$<br>(b) Find $\\dfrac{\\text{d}S}{\\text{d}x}$.<br>(c) Calculate the value of $x$ that minimises the surface area of the box.",
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
    }
]
