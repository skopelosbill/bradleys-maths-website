const problemBank = [
    //  1 April
    {
        "id": "2068",
        "date": "1 Apr 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Factorising Expressions 2",
        "difficulty": "8/9",
        "q": "(a) Factorise fully: $6x^2 - 19x + 15$.<br>(b) Hence, factorise: $19x - 6x^2 - 15$.",
        "steps": [
            "(a) Find factors of $6 \\times 15 = 90$ that sum to $-19$: $-9$ and $-10$.",
            "Split and factorise: $6x^2 - 9x - 10x + 15 = 3x(2x - 3) - 5(2x - 3)$.",
            "Part (a) Answer: $(3x - 5)(2x - 3)$.",
            "(b) Recognise that $19x - 6x^2 - 15$ is $-1(6x^2 - 19x + 15)$.",
            "Multiply one bracket by $-1$: $(5 - 3x)(2x - 3)$.",
            "Final Answer: $$(a)\\ (3x - 5)(2x - 3), (b)\\ (5 - 3x)(2x - 3)$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } (3x + 5)(2x + 3), \\text{ (b) } -(3x + 5)(2x + 3)$$",
                "feedback": "You found the correct factor numbers, but remember that a positive constant ($+15$) and a negative $x$ term ($-19x$) means both brackets must contain negative signs."
            },
            {
                "ans": "$$\\text{(a) } (3x - 5)(2x - 3), \\text{ (b) } (-3x + 5)(-2x + 3)$$",
                "feedback": "You correctly factorised part (a), but for part (b), you multiplied BOTH brackets by $-1$. This actually multiplies the expression by $(-1 \\times -1) = 1$, leaving it unchanged! You must only multiply one bracket by $-1$."
            },
            {
                "ans": "$$\\text{(a) } (6x - 15)(x - 1), \\text{ (b) } (15 - 6x)(x - 1)$$",
                "feedback": "Expanding your part (a) brackets gives $6x^2 - 21x + 15$, not $6x^2 - 19x + 15$. Always expand your brackets quickly in your head to verify you get back to the exact original expression!"
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Negative $x^2$",
            "content": "When a quadratic starts with a negative $x^2$, always factorise the 'positive' version first, then adjust the signs. It prevents the common error of misplacing the negative inside the brackets."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    //  2 April
    {
        "id": "2069",
        "date": "2 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Geometrical Proof",
        "difficulty": "6/7",
        "img": "",
        "q": "Points $A(-7, -23)$, $B(-1, -5)$ and $C(4, 10)$ lie on the coordinate plane.<br>(a) Show that the gradient of the line segment $AB$ is 3.<br>(b) Prove that $A, B$ and $C$ are collinear.",
        "steps": [
            "(a) Gradient $AB = \\dfrac{-5 - (-23)}{-1 - (-7)} = \\dfrac{18}{6} = 3$.",
            "(b) Calculate gradient $BC = \\dfrac{10 - (-5)}{4 - (-1)} = \\dfrac{15}{5} = 3$.",
            "Since $m_{AB} = m_{BC}$, the line segments are parallel.",
            "Since they both pass through point $B$, they must lie on the same straight line.",
            "Final Answer: $$\\text{Gradients equal and share common point } B$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{Gradients are equal, therefore the lines are collinear.}$$",
                "feedback": "You successfully proved the lines are parallel by finding equal gradients, but you missed the final communication mark! You must explicitly state that they share a common point (Point $B$) to prove they lie on the exact same line."
            },
            {
                "ans": "$$\\text{Gradient } = \\frac{1}{3}. \\text{ The lines are parallel.}$$",
                "feedback": "You calculated the change in $x$ divided by the change in $y$ ($\\frac{\\Delta x}{\\Delta y}$). Remember, gradient is 'rise over run', which is the change in $y$ divided by the change in $x$ ($\\frac{\\Delta y}{\\Delta x}$)."
            },
            {
                "ans": "$$\\text{Gradient } = \\frac{y_1 + y_2}{2}. \\text{ They share a midpoint.}$$",
                "feedback": "You have confused the formula for the gradient of a line with the formula for the midpoint of a line segment. To find the gradient, you must divide the difference in $y$ by the difference in $x$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Collinearity Proof",
            "content": "To prove collinearity, simply showing the gradients are equal is only half the job. You <strong>must</strong> explicitly state that they share a common point to earn the final communication mark."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    //  3 April
    {
        "id": "002070",
        "date": "3 Apr 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Compound Measures",
        "subtopic": "Compound Units: Speed, Density, Pressure",
        "difficulty": "4/5",
        "q": "Jack drives $145\\text{ km}$ at an average speed of $60\\text{ km/h}$.<br>(a) Calculate the time taken in hours, as a decimal.<br>(b) Convert this time into hours and minutes.",
        "steps": [
            "(a) $\\text{Time} = \\frac{145}{60} = 2.4166... \\text{ hours}$.",
            "(b) The whole number is 2 hours.",
            "Convert $0.4166...$ to minutes: $0.4166... \\times 60 = 25\\text{ minutes}$.",
            "Final Answer: $$\\text{(a)}2.4166...\\text{ hours, (b) }2\\text{ hours } 25\\text{ minutes}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 2.416\\text{ hours, (b) } 2\\text{ hours } 41\\text{ minutes}$$",
                "feedback": "This is the classic 'decimal trap'! You cannot read $0.416$ hours directly as $41$ minutes because there are $60$ minutes in an hour, not $100$. You must multiply the decimal part by $60$."
            },
            {
                "ans": "$$\\text{(a) } 0.41\\text{ hours, (b) } 0\\text{ hours } 25\\text{ minutes}$$",
                "feedback": "You have inverted the speed, distance, time formula! You calculated $\\text{Speed} \\div \\text{Distance}$. Remember the formula triangle: $\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}}$."
            },
            {
                "ans": "$$\\text{(a) } 8700\\text{ hours, (b) } 8700\\text{ hours } 0\\text{ minutes}$$",
                "feedback": "You multiplied the distance by the speed, which calculates nothing meaningful in this context! Always check if your answer is logical—driving $145\\text{ km}$ certainly won't take $8700$ hours!"
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Decimal Trap",
            "content": "A common 'lazy' mistake is to say $2.41$ hours is 2 hours and 41 minutes. Time is base-60, not base-10! Always multiply the decimal remainder by 60 or, on a calculator paper, use your time key."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number & Ratio: Download the Full Number Pack"
    },
    //  4 April
    {
        "id": "2071",
        "date": "4 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Surface Area and Volume in 3D",
        "difficulty": "8/9",
        "q": "A cone and a hemisphere have the same base radius $r$.<br>The volume of the cone is equal to the volume of the hemisphere.<br>Show that the height of the cone, $h$, is equal to $2r$.",
        "steps": [
            "Recall $V_{\\text{hemisphere}} = \\frac{2}{3}\\pi r^3$.",
            "Recall $V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$.",
            "Equate: $\\frac{1}{3}\\pi r^2 h = \\frac{2}{3}\\pi r^3$.",
            "Cancel $\\pi$ and multiply by 3: $r^2 h = 2r^3$.",
            "Divide by $r^2$: $h = 2r$.",
            "Final Answer: $$h = 2r$$"
        ],
        "wrong_options": [
            {
                "ans": "$$h = 4r$$",
                "feedback": "You used the volume formula for a full sphere ($\\frac{4}{3}\\pi r^3$) instead of a hemisphere ($\\frac{2}{3}\\pi r^3$). Always read the question carefully and remember to halve the sphere formula!"
            },
            {
                "ans": "$$h = \\frac{2}{3}r$$",
                "feedback": "You forgot the $\\frac{1}{3}$ in the formula for the volume of a cone! You accidentally equated the volume of a cylinder ($\\pi r^2 h$) to the volume of the hemisphere."
            },
            {
                "ans": "$$h = r$$",
                "feedback": "You incorrectly recalled the volume of a hemisphere as $\\frac{1}{3}\\pi r^3$. A hemisphere is exactly half of a full sphere ($\\frac{4}{3}\\pi r^3$), making its correct volume $\\frac{2}{3}\\pi r^3$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Formula Accuracy",
            "content": "In the exam, the formula for a sphere is given, but you must remember to halve it for the hemisphere. Forgetting the $\\frac{2}{3}$ multiplier is the most frequent error here."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    //  5 April
    {
        "id": "2072",
        "date": "5 Apr 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Direct & Inverse Proportion",
        "subtopic": "Direct and Inverse Proportion",
        "difficulty": "6/7",
        "img": "",
        "q": "$y$ is inversely proportional to $x^2$. When $x = 3, y = 8$.<br>(a) Find an equation for $y$ in terms of $x$.<br>(b) Calculate the value of $y$ when $x = 2$.<br>(c) Calculate the value of $x$ when $y = 2$.",
        "steps": [
            "(a) $y = \\dfrac{k}{x^2} \\implies 8 = \\dfrac{k}{3^2} \\implies k = 72$. Equation: $y = \\dfrac{72}{x^2}$.",
            "(b) When $x = 2$: $y = \\dfrac{72}{2^2} = \\dfrac{72}{4} = 18$.",
            "(c) When $y = 2$: $2 = \\dfrac{72}{x^2} \\implies 2x^2 = 72 \\implies x^2 = 36 \\implies x = 6$.",
            "Final Answer: $$\\text{(a) } y = \\dfrac{72}{x^2}, \\text{ (b) } 18, \\text{ (c) } 6$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } y = \\dfrac{24}{x}, \\text{ (b) } 12, \\text{ (c) } 12$$",
                "feedback": "You set up an equation for $y$ being inversely proportional to just $x$, not the square of $x$ ($x^2$). Always read the proportion statement very carefully!"
            },
            {
                "ans": "$$\\text{(a) } y = kx^2, \\text{ (b) } \\dfrac{32}{9}, \\text{ (c) } 1.5$$",
                "feedback": "You have set up a direct proportion equation ($y = kx^2$). The word 'inversely' tells you that the $x^2$ term must be in the denominator ($y = \\frac{k}{x^2}$)."
            },
            {
                "ans": "$$\\text{(a) } y = \\dfrac{k}{\\sqrt{x}}, \\text{ (b) } 13.57, \\text{ (c) } 92.16$$",
                "feedback": "You confused 'the square of $x$' with 'the square root of $x$'. These are entirely different mathematical operations. $x^2$ means $x \\times x$, whereas $\\sqrt{x}$ finds the value that multiplies by itself to make $x$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Square vs Square Root",
            "content": "Read the wording twice. Don't make the mistake of confusing 'the square of $x$' ($x^2$) and 'the square root of $x$' ($\\sqrt{x}$). They are not the same thing! Using the wrong power loses all subsequent marks."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number & Ratio: Download the Full Number Pack"
    },
    //  6 April
    {
        "id": "002073",
        "date": "6 Apr 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Quadratic Equations - Formula and Completing the Square",
        "difficulty": "6/7",
        "q": "Consider the quadratic equation $2x^2 + 7x - 4 = 0$.<br>(a) Calculate the value of the discriminant ($b^2 - 4ac$).<br>(b) Use the quadratic formula to find the two solutions for $x$.",
        "steps": [
            "(a) Identify $a=2, b=7, c=-4$.",
            "Discriminant: $7^2 - 4(2)(-4) = 49 + 32 = 81$.",
            "(b) Substitute into formula: $x = \\dfrac{-7 \\pm \\sqrt{81}}{2(2)}$.",
            "Calculate: $x = \\dfrac{-7 + 9}{4} = 0.5$ and $x = \\dfrac{-7 - 9}{4} = -4$.",
            "Final Answer: $$\\text{(a )}81\\text{ (b) }x = 0.5, x = -4$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 17, \\text{ (b) } x = \\dfrac{-7 \\pm \\sqrt{17}}{4}$$",
                "feedback": "You made a classic sign error when calculating the discriminant. $c$ is $-4$, not positive $4$. When you subtract a negative, it becomes an addition: $49 - (-32) = 49 + 32$."
            },
            {
                "ans": "$$\\text{(a) } 81, \\text{ (b) } x = 4, x = -0.5$$",
                "feedback": "Your discriminant is perfect, but you forgot the negative sign on the $b$ term at the start of the quadratic formula! It should be $-7 \\pm \\dots$, not $7 \\pm \\dots$"
            },
            {
                "ans": "$$\\text{(a) } 81, \\text{ (b) } x = -4.75, x = -9.25$$",
                "feedback": "You correctly found the discriminant, but when substituting into the formula, you only divided the square root by $2a$. The entire numerator ($-b \\pm \\sqrt{b^2 - 4ac}$) must be divided by $2a$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The value of the discriminant",
            "content": "($b^2 - 4ac$) is known as the discriminant. If the discriminant is positive the quadratic equation has two real roots because its graph crosses the $x$-axis. If it is zero the quadratic has 'repeated roots', its graph is tangent to the $x$-axis and so there is only one solution. If it is negative the quadratic has no real roots because its graph does not cross the $x$-axis."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    //  7 April
    {
        "id": "002074",
        "date": "7 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Similarity in 3D",
        "difficulty": "8/9",
        "q": "Two similar cylinders have surface areas of $40\\pi\\text{ cm}^2$ and $90\\pi\\text{ cm}^2$.<br>(a) Find the linear scale factor between the smaller and larger cylinder.<br>(b) The smaller cylinder has a height of $6\\text{ cm}$. Calculate the height of the larger cylinder.",
        "steps": [
            "(a) Area Scale Factor ($k^2$) = $\\dfrac{90\\pi}{40\\pi} = 2.25$.",
            "Linear Scale Factor ($k$) = $\\sqrt{2.25} = 1.5$.",
            "(b) Multiply height: $6 \\times 1.5 = 9$.",
            "Final Answer: $$9\\text{ cm}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$13.5\\text{ cm}$$",
                "feedback": "You multiplied the height by the Area Scale Factor ($2.25$). Remember, you must always square root the Area Scale Factor to find the Linear Scale Factor before applying it to a 1D length!"
            },
            {
                "ans": "$$20.25\\text{ cm}$$",
                "feedback": "You correctly found the Linear Scale Factor ($1.5$), but then you cubed it, applying a Volume Scale Factor. Height is a 1D measurement, so you simply use the Linear Scale Factor."
            },
            {
                "ans": "$$4\\text{ cm}$$",
                "feedback": "You correctly found the Linear Scale Factor ($1.5$), but you divided the smaller height by it instead of multiplying. To find a larger dimension, you must multiply by a scale factor greater than 1."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Bridging the Gap",
            "content": "You cannot use an Area Scale Factor to find a length directly. You must always 'bridge' the calculation by finding the linear scale factor ($k$) first. This is a classic Grade 8/9 stumbling block."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    //  8 April
    {
        "id": "002075",
        "date": "8 Apr 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "Prime Numbers HCF LCM",
        "difficulty": "4/5",
        "q": "(a) Use a factor tree to express 108 as a product of its prime factors.<br>(b) Write your final answer in index form.",
        "steps": [
            "(a) Factor tree branches: $108 = 2 \\times 54$; $54 = 2 \\times 27$; $27 = 3 \\times 9$; $9 = 3 \\times 3$.",
            "List primes: $2, 2, 3, 3, 3$.",
            "(b) Collect into index form: $2^2 \\times 3^3$.",
            "Final Answer: $$2^2 \\times 3^3$$"
        ],
        "wrong_options": [
            {
                "ans": "$$2 \\times 2 \\times 3 \\times 3 \\times 3$$",
                "feedback": "You correctly identified all the prime factors, but the question explicitly asked for your final answer in 'index form'. You must collect the repeated bases using powers."
            },
            {
                "ans": "$$4 \\times 3^3$$",
                "feedback": "You grouped the factors logically, but $4$ is not a prime number! A prime factor tree must only contain prime numbers, so $4$ must be fully broken down into $2^2$."
            },
            {
                "ans": "$$2^2 + 3^3$$",
                "feedback": "You wrote the correct powers but placed an addition sign between them. Prime factors must be multiplied together (a product) to recreate the original number."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systemic Division",
            "content": "Always start with the smallest prime (2). Keep dividing by 2 until you can't anymore, then move to 3, then 5. This 'ladder' approach ensures you never miss a factor."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    //  9 April
    {
        "id": "002076",
        "date": "9 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Polygons",
        "subtopic": "Polygons",
        "difficulty": "4/5",
        "q": "A regular polygon has 10 sides (a decagon).<br>(a) Calculate the size of each exterior angle.<br>(b) Hence, find the size of each interior angle.",
        "steps": [
            "(a) Exterior angles of any polygon sum to $360^\\circ$.",
            "One exterior angle = $360 \\div 10 = 36^\\circ$.",
            "(b) Interior and exterior angles lie on a straight line: $180 - 36 = 144$.",
            "Final Answer: $$144^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 144^\\circ, \\text{ (b) } 36^\\circ$$",
                "feedback": "You swapped the definitions of interior and exterior angles! The exterior angle is on the outside ($360^\\circ \\div n$), which is the smaller angle for a regular decagon."
            },
            {
                "ans": "$$\\text{(a) } 36^\\circ, \\text{ (b) } 324^\\circ$$",
                "feedback": "You correctly found the exterior angle, but you assumed interior and exterior angles add up to $360^\\circ$. They lie on a straight line, meaning they sum to exactly $180^\\circ$."
            },
            {
                "ans": "$$\\text{(a) } 1440^\\circ, \\text{ (b) } 144^\\circ$$",
                "feedback": "For part (a), you calculated the total sum of all the interior angles using $(n-2) \\times 180^\\circ$. The question asked for a single exterior angle, which is simply $360^\\circ \\div n$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Exterior Shortcut",
            "content": "While you can use $(n-2) \\times 180 \\div n$, the exterior angle method ($360 \\div n$) is much faster and less prone to calculation errors. Use it whenever possible!"
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 10 April
    {
        "id": "002077",
        "date": "10 Apr 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Parallel and Perpendicular Lines 1",
        "difficulty": "4/5",
        "q": "Line $L_1$ has the equation $y = 3x - 5$.<br>(a) State the gradient of a line parallel to $L_1$.<br>(b) Find the equation of the line $L_2$ which is parallel to $L_1$ and passes through $(2, 10)$.",
        "steps": [
            "(a) Parallel lines have the same gradient, so $m = 3$.",
            "(b) Use $y-y_1 = m(x-x_1)$ with $(2, 10)$: $y-10=3(x-2)$.",
            "Solve this equation $y=3x-6+10$.",
            "State the final equation: $y = 3x + 4$.",
            "Final Answer: $$y = 3x + 4$$"
        ],
        "wrong_options": [
            {
                "ans": "$$y = -\\dfrac{1}{3}x + \\dfrac{32}{3}$$",
                "feedback": "You used the negative reciprocal for your gradient ($-1 \\div 3$). This finds the equation of a perpendicular line! Parallel lines have the exact same gradient."
            },
            {
                "ans": "$$y = 3x - 5$$",
                "feedback": "You simply stated the original equation. While this line is parallel to itself, it does not pass through the specific coordinate $(2, 10)$. You must use the matching gradient to find a new $y$-intercept."
            },
            {
                "ans": "$$y = 3x + 8$$",
                "feedback": "You made an expansion error. When expanding $3(x - 2)$ to find the equation, you must multiply BOTH terms inside the bracket by $3$ to get $3x - 6$, not $3x - 2$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Parallel Protocol",
            "content": "In coordinate geometry, the word 'parallel' is a mathematical instruction to use the exact same gradient. Once you have the gradient and a point, finding the equation is a simple matter of substituting the known coordinate point values into $y-y_1 = m(x-x_1)$."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    //11 April
    {
        "id": "002078",
        "date": "11 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Pythagoras",
        "subtopic": "Trigonometry in 3D",
        "difficulty": "8/9",
        "img": "true",
        "q": "A cuboid has dimensions $3\\text{cm}$ by $4\\text{cm}$ by $12\\text{cm}$.<br>Calculate the length of the internal diagonal (the longest distance between two corners).",
        "steps": [
            "Use the 3D Pythagoras formula: $d^2 = a^2 + b^2 + c^2$.",
            "Substitute: $d^2 = 3^2 + 4^2 + 12^2$.",
            "Calculate: $d^2 = 9 + 16 + 144 = 169$.",
            "Square root: $d = \\sqrt{169}$.",
            "Final Answer: $$13\\text{ cm}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$169\\text{ cm}$$",
                "feedback": "You perfectly applied the 3D Pythagoras sum ($a^2 + b^2 + c^2$), but you forgot the final crucial step: taking the square root to find the actual length!"
            },
            {
                "ans": "$$19\\text{ cm}$$",
                "feedback": "You simply added the three dimensions together ($3 + 4 + 12 = 19$). You must square each dimension first, add those values together, and then square root the total sum."
            },
            {
                "ans": "$$144\\text{ cm}$$",
                "feedback": "You multiplied the three dimensions together ($3 \\times 4 \\times 12$). This calculates the total volume of the cuboid, not the internal diagonal distance."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Pythagoras in 3D",
            "content": "You can solve this in two steps using 2D Pythagoras twice, but the 3D formula ($a^2+b^2+c^2=d^2$) is much faster and less prone to rounding errors. It’s a must-know for Grade 8/9 questions."
        }
    },
    // 12 April
    {
        "id": "002079",
        "date": "12 Apr 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Percentage Change and Interest",
        "difficulty": "6/7",
        "q": "Alice invests £4000 in a savings account with 3 per cent compound interest per year.<br>Calculate the total interest earned after 5 years. Give your answer to the nearest penny.",
        "img": "",
        "steps": [
            "Multiplier = $1.03$.",
            "Total Amount = $4000 \\times 1.03^5 = 4637.096...$.",
            "To find interest only, subtract the original investment: $4637.10 - 4000$.",
            "Final Answer: $$£637.10$$"
        ],
        "wrong_options": [
            {
                "ans": "$$£4637.10$$",
                "feedback": "You correctly calculated the total compound amount, but you didn't fully answer the question! It specifically asked for the 'total interest earned', so you must subtract the original $£4000$ investment."
            },
            {
                "ans": "$$£600.00$$",
                "feedback": "You calculated 'simple interest' by finding $3\\%$ and multiplying it by $5$ years. In a compound interest account, you earn interest on the interest you've already accumulated, so you must use a multiplier to a power!"
            },
            {
                "ans": "$$£14851.64$$",
                "feedback": "You used a multiplier of $1.3$, which actually represents a massive $30\\%$ increase per year! A $3\\%$ increase requires a multiplier of $1.03$ (which is $100\\% + 3\\% = 103\\%$, or $1.03$ as a decimal)."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Total vs. Interest",
            "content": "Read the question carefully! Does it ask for the <strong>total value</strong> or just the <strong>interest</strong>? Many students lose a mark at the very end by forgetting to subtract the original principal."
        }
    },
    // 13 Apr
    {
        "id": "002080",
        "date": "13 Apr 2026",
        "major_area": "Statistics",
        "topic": "Charts",
        "subtopic": "Statistical Charts and Diagrams",
        "difficulty": "4/5",
        "q": "In a survey of 60 people, 15 said their favorite color was Blue.<br>Calculate the angle for 'Blue' on a pie chart.",
        "steps": [
            "Total degrees in a circle $= 360^\\circ$.",
            "Find degrees per person: $360 \\div 60 = 6^\\circ$.",
            "Multiply by the frequency of Blue: $15 \\times 6$.",
            "Final Answer: $$90^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$25^\\circ$$",
                "feedback": "You calculated the percentage ($25\\%$) instead of the angle! A pie chart is based on a full circle of $360^\\circ$, not $100$."
            },
            {
                "ans": "$$4^\\circ$$",
                "feedback": "You divided $60$ by $15$ to get $4$. To find an angle, you must first find what fraction of the total survey the group represents ($\\dfrac{15}{60}$), and then multiply that by $360^\\circ$."
            },
            {
                "ans": "$$15^\\circ$$",
                "feedback": "You just wrote the raw frequency as the angle! You must calculate what proportion of the $360^\\circ$ circle these $15$ people actually represent."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 'Scale Factor' Method",
            "content": "Always find what $1$ person is worth in degrees first ($360 \\div \\text{Total}$). It makes calculating the rest of the pie chart much easier and more consistent."
        }
    },
    // 14 Apr
    {
        "id": "002081",
        "date": "14 Apr 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Quadratics Equations Factorising",
        "difficulty": "6/7",
        "q": "Solve $x^2 - 10x + 21 = 0$ by factorising.",
        "steps": [
            "Find two numbers that multiply to $+21$ and add to $-10$.",
            "The numbers are $-3$ and $-7$.",
            "Write as brackets: $(x - 3)(x - 7) = 0$.",
            "Set each bracket to zero.",
            "Final Answer: $$x = 3,\\ x = 7$$"
        ],
        "wrong_options": [
            {
                "ans": "$$x = -3,\\ x = -7$$",
                "feedback": "You correctly found the factors to put inside the brackets: $(x-3)(x-7) = 0$. However, you forgot to invert the signs when solving! If $x-3=0$, then $x=+3$."
            },
            {
                "ans": "$$\\text{ }(x - 3)(x - 7)$$",
                "feedback": "You factorised perfectly, but you stopped too early! The question asked you to 'Solve', which means you must find the actual numerical values for $x$ by setting each bracket to zero."
            },
            {
                "ans": "$$x = 2,\\ x = -5$$",
                "feedback": "You tried to find numbers that add to $-10$, but these numbers multiply to $-10$, not $+21$. You must always find factors of the constant term on the end ($+21$)."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Double Negative",
            "content": "When the constant is positive ($+21$) but the middle term is negative ($-10$), <strong>both</strong> numbers in your brackets must be negative. It's a very common place for signs to go wrong!"
        }
    },
    // 15 Apr
    {
        "id": "002082",
        "date": "15 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Right Angled Trigonometry",
        "difficulty": "5/6",
        "q": "A ladder $5\\text{m}$ long leans against a vertical wall.<br>The base of the ladder is $3\\text{m}$ from the wall on horizontal ground.<br>Calculate the angle the ladder makes with the ground.",
        "img": "true",
        "steps": [
            "Identify the sides relative to the angle $\\theta$: The ladder is the $\\textbf{Hypotenuse}$ ($5\\text{m}$) and the distance from the wall is the $\\textbf{Adjacent}$ side ($3\\text{m}$).",
            "Select the correct ratio: $\\cos(\\theta) = \\dfrac{\\text{adj}}{\\text{hyp}}$.",
            "Substitute the values: $\\cos(\\theta) = \\dfrac{3}{5}$.",
            "Calculate the angle: $\\theta = \\cos^{-1}(0.6)$.",
            "Final Answer: $$53.1^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$36.9^\\circ$$",
                "feedback": "You used the Sine ratio ($\\sin(\\theta) = \\dfrac{\\text{Opp}}{\\text{Hyp}}$). The $3\\text{m}$ side is on the ground adjacent to the angle, not opposite the angle! You must use Cosine."
            },
            {
                "ans": "$$31.0^\\circ$$",
                "feedback": "You used the Tangent ratio ($\\tan(\\theta) = \\dfrac{\\text{Opp}}{\\text{Adj}}$). The $5\\text{m}$ ladder represents the Hypotenuse, so Tangent is the wrong trigonometric ratio to use here."
            },
            {
                "ans": "$$4^\\circ$$",
                "feedback": "You used Pythagoras' theorem to calculate the height of the wall on the building ($4\\text{m}$). However, the question asked for the size of the <em>angle</em>, which requires trigonometry!"
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Sketching the Scenario",
            "content": "Even when a diagram isn't provided, always draw a quick right-angled triangle. Label the 'Opposite', 'Adjacent', and 'Hypotenuse' immediately; it makes choosing between Sine, Cosine, and Tangent much harder to get wrong."
        }
    },
    // 16 Apr
    {
        "id": "002083",
        "date": "16 Apr 2026",
        "major_area": "Algebra",
        "topic": "Sequences",
        "subtopic": "Sequencies",
        "difficulty": "6/7",
        "q": "Find the $n^{th}$ term of the linear sequence: $7, 11, 15, 19, 23...$",
        "steps": [
            "Find the common difference: $11 - 7 = 4$.",
            "This means the sequence is related to $4n$.",
            "When $n=1$, $4(1) = 4$. Our first term is $7$.",
            "Adjust by adding $3$ ($7 - 4 = 3$).",
            "Final Answer: $$4n + 3$$"
        ],
        "wrong_options": [
            {
                "ans": "$$n + 4$$",
                "feedback": "You correctly noticed the sequence goes up by $4$, but the common difference must multiply the $n$ (written as $4n$). Writing $n+4$ means the sequence goes up by $1$ each time."
            },
            {
                "ans": "$$4n + 7$$",
                "feedback": "You found $4n$, but then you added the first term ($7$). To find the constant, you must work backwards to the 'zeroth' term by subtracting the common difference from the first term: $7 - 4 = +3$."
            },
            {
                "ans": "$$3n + 4$$",
                "feedback": "You swapped the zero term and the common difference! The common difference ($+4$) always goes in front of the $n$, and the zero term ($+3$) is added or subtracted at the end."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Zero Term",
            "content": "A quick way to find the constant (+3) is to work backwards from the first term to find 'Term 0'. $7 - 4 = 3$. This gives you your $4n + 3$ instantly!"
        }
    },
    // 17 Apr
    {
        "id": "002084",
        "date": "17 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Circle Theorems 2",
        "difficulty": "7/8",
        "q": "In the diagram, $AC$ is a diameter of the circle. $B$ and $D$ are points on the circumference.<br>Given $\\angle ABD = 42^\\circ$:<br>(a) Write down the size of $\\angle ACD$.<br>(b) Calculate the size of $\\angle CAD$.",
        "img": "true",
        "steps": [
            "(a) $\\angle ACD = 42^\\circ$ because angles subtended by the same arc ($AD$) at the circumference are equal.",
            "(b) $\\angle ADC = 90^\\circ$ because the angle in a semicircle is a right angle.",
            "(b) In $\\triangle ADC$, the angles must sum to $180^\\circ$.",
            "(b) $\\angle CAD = 180^\\circ - (90^\\circ + 42^\\circ) = 48^\\circ$.",
            "Final Answer: $$\\text{(a) } 42^\\circ,\\text{ (b) } 48^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 84^\\circ,\\text{ (b) } 6^\\circ$$",
                "feedback": "For part (a), you doubled the angle. Both points $C$ and $B$ are on the circumference, so the angles are equal ($42^\\circ$). You only double the angle if one point is at the centre of the circle."
            },
            {
                "ans": "$$\\text{(a) } 42^\\circ,\\text{ (b) } 138^\\circ$$",
                "feedback": "For part (b), you simply subtracted $42^\\circ$ from $180^\\circ$. You missed the circle theorem step! The angle in a semicircle is exactly $90^\\circ$, which is the third angle in $\\triangle ADC$."
            },
            {
                "ans": "$$\\text{(a) } 42^\\circ,\\text{ (b) } 42^\\circ$$",
                "feedback": "You incorrectly assumed that triangle $ADC$ is isosceles. It is a right-angled triangle because it sits in a semicircle, so the angles are $90^\\circ$, $42^\\circ$, and $48^\\circ$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Spotting the Diameter",
            "content": "Whenever you are told a line is a $\\textbf{diameter}$, immediately look for a triangle attached to it. The angle at the circumference will always be $90^\\circ$. This is a very common 'hidden step' in Higher Tier circle problems."
        }
    },
    // 18 Apr
    {
        "id": "002085",
        "date": "18 Apr 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "Algebraic Proof",
        "difficulty": "8/9",
        "q": "Prove that the sum of any two consecutive even numbers is always a multiple of 2 but never a multiple of 4.",
        "steps": [
            "Let the two consecutive even numbers be $2n$ and $2n + 2$, where $n$ is an integer.",
            "Sum the two numbers: $2n + (2n + 2) = 4n + 2$.",
            "To prove it is a multiple of 2, factor out 2: $2(2n + 1)$. Since $2n+1$ is an integer, the sum is a multiple of 2.",
            "To prove it is not a multiple of 4, consider the expression $4n + 2$.",
            "A multiple of 4 is defined as $4k$ for some integer $k$.",
            "The expression $4n + 2$ is 2 more than a multiple of 4 ($4n$), meaning it always leaves a remainder of 2 when divided by 4.",
            "Final Answer: $$\\text{Proven: Remainder is 2, therefore not a multiple of 4.}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{Let the numbers be } 4 \\text{ and } 6. 4 + 6 = 10.$$",
                "feedback": "You just tested numerical examples. To get full marks in an algebraic proof, you cannot just test numbers; you must use algebra (like $2n$ and $2n+2$) to definitively prove it works for EVERY even number."
            },
            {
                "ans": "$$2n + 2n = 4n$$",
                "feedback": "You added the exact same even number to itself! The question explicitly specified 'consecutive' even numbers, meaning there must be a gap of $2$. The second number should be written as $2n + 2$."
            },
            {
                "ans": "$$n + (n+2) = 2n + 2$$",
                "feedback": "You used just '$n$' to represent your first number. While this does show a gap of $2$, $n$ could be an odd number (like $3$). You must use '$2n$' to guarantee the number is even in your proof."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Defining Integers",
            "content": "In algebraic proof, always start by defining $n$ as an integer. $2n$ is the standard way to show a number is even, and $2n+1$ is the standard for odd. Examiners look for these definitions first!"
        }
    },
// 19 Apr
    {
        "id": "002087",
        "date": "19 Apr 2026",
        "major_area": "Statistics",
        "topic": "Cumulative Frequency",
        "subtopic": "Cumulative Frequency Diagrams",
        "difficulty": "6/7",
        "q": "The cumulative frequency graph shows the heights of 100 plants.<br>(a) Find an estimate for the median height.<br>(b) Calculate an estimate for the interquartile range (IQR).<br>(c) Find the number of plants with a height greater than $45\\text{ cm}$.",
        "img": "true",
        "steps": [
            "(a) The median is the $50^{th}$ value. From $y=50$, the graph gives a height of approx $29\\text{ cm}$.",
            "(b) Lower Quartile ($Q_1$) is the $25^{th}$ value, approx $22\\text{ cm}$.",
            "(b) Upper Quartile ($Q_3$) is the $75^{th}$ value, approx $37\\text{ cm}$.",
            "(b) $IQR = Q_3 - Q_1 = 37 - 22 = 15\\text{ cm}$.",
            "(c) The cumulative frequency at $45\\text{ cm}$ is $95$.",
            "(c) Number of plants taller than $45\\text{ cm} = 100 - 95 = 5$.",
            "Final Answer: $$\\text{(a) } 29\\text{ cm},\\text{ (b) } 15\\text{ cm},\\text{ (c) } 5$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\text{(a) } 29\\text{ cm},\\text{ (b) } 37\\text{ cm},\\text{ (c) } 5$$",
                "feedback": "You correctly found the Upper Quartile ($37\\text{ cm}$) for part (b), but the Interquartile Range (IQR) is the difference between the upper and lower quartiles ($Q_3 - Q_1$)."
            },
            {
                "ans": "$$\\text{(a) } 29\\text{ cm},\\text{ (b) } 15\\text{ cm},\\text{ (c) } 95$$",
                "feedback": "For part (c), you read the cumulative frequency at $45\\text{ cm}$, which gives the number of plants <em>shorter</em> than $45\\text{ cm}$. You must subtract this from the total ($100$) to find the plants <em>taller</em> than $45\\text{ cm}$."
            },
            {
                "ans": "$$\\text{(a) } 50\\text{ cm},\\text{ (b) } 50\\text{ cm},\\text{ (c) } 5$$",
                "feedback": "For parts (a) and (b), you used the cumulative frequency values on the y-axis ($50$ for median, $75 - 25 = 50$ for IQR). You must read across to the curve and down to find the corresponding heights on the x-axis!"
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Median and Quartiles",
            "content": "For a total frequency of $n$, always remember: Median $= n/2$, $Q_1 = n/4$, and $Q_3 = 3n/4$. Draw dotted lines on your graph to show exactly where you are reading these values to secure your method marks!"
        }
    },
    // 20 Apr
    {
        "id": "002088",
        "date": "20 Apr 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Changing the Subject of a Formula",
        "difficulty": "6/7",
        "q": "Make $t$ the subject of the formula: $v = u + at$.",
        "img": "",
        "steps": [
            "Subtract $u$ from both sides: $v - u = at$.",
            "Divide both sides by $a$.",
            "Final Answer: $$t = \\dfrac{v - u}{a}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$t = \\dfrac{v}{a} - u$$",
                "feedback": "You divided $v$ by $a$ before subtracting $u$. Following reverse BIDMAS, you must handle the standalone addition/subtraction terms before dealing with the multiplication attached to $t$."
            },
            {
                "ans": "$$t = \\dfrac{v + u}{a}$$",
                "feedback": "You added $u$ to both sides! Since it is a positive $u$ on the right side of the equation, you must subtract $u$ from both sides to cancel it out."
            },
            {
                "ans": "$$t = v - u - a$$",
                "feedback": "You subtracted $a$ from both sides. Because $a$ and $t$ are multiplied together ($at$), you must divide both sides by $a$ to isolate $t$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Reverse BIDMAS",
            "content": "When rearranging, think of it as 'undoing' the operations in reverse order. We deal with the addition ($+u$) before we deal with the multiplication ($at$)."
        }
    },
    // 21 Apr
    {
        "id": "002089",
        "date": "21 Apr 2026",
        "major_area": "Statistics",
        "topic": "Averages & Range",
        "subtopic": "Averages and Spread – Ungrouped Data",
        "difficulty": "4/5",
        "q": "The mean of four numbers is 10. Three of the numbers are 8, 12, and 15.<br>Find the fourth number.",
        "steps": [
            "Total of the four numbers: $4 \\times 10 = 40$.",
            "Total of the known three: $8 + 12 + 15 = 35$.",
            "Subtract: $40 - 35$.",
            "Final Answer: $$5$$"
        ],
        "wrong_options": [
            {
                "ans": "$$11.7$$",
                "feedback": "You calculated the mean of the three numbers provided ($35 \\div 3$). The question asks you to find the missing fourth number that makes the mean of all four numbers equal to $10$."
            },
            {
                "ans": "$$10$$",
                "feedback": "You simply wrote down the mean! To find the missing number, you must calculate the total sum of all four numbers ($4 \\times 10 = 40$) and subtract the numbers you already know."
            },
            {
                "ans": "$$25$$",
                "feedback": "You subtracted the mean ($10$) from the sum of the three known numbers ($35$). You must multiply the mean by $4$ to find the true total sum before doing any subtraction."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Think of the Total",
            "content": "In 'reverse mean' questions, always find the <strong>total</strong> first. Mean $\\times$ Count $=$ Total. This is much easier than trying to solve an algebraic equation."
        }
    },
    // 22 Apr
    {
        "id": "002090",
        "date": "22 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Polygons",
        "subtopic": "Polygons",
        "difficulty": "4/5",
        "q": "The sum of the interior angles of a regular polygon is $1440^\\circ$.<br>Calculate the number of sides the polygon has.",
        "steps": [
            "Use the formula: $(n - 2) \\times 180 = 1440$",
            "Divide by 180: $n - 2 = 8$",
            "Add 2: $n = 10$",
            "Final Answer: $$10\\text{ sides}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$8\\text{ sides}$$",
                "feedback": "You successfully divided by $180^\\circ$ to find the number of triangles ($n - 2 = 8$), but you forgot the final step! You must add $2$ to find the total number of sides."
            },
            {
                "ans": "$$12\\text{ sides}$$",
                "feedback": "You added $2$ in the bracket for the formula instead of subtracting. The formula for the sum of interior angles is $(n - 2) \\times 180^\\circ$, not $(n + 2) \\times 180^\\circ$."
            },
            {
                "ans": "$$4\\text{ sides}$$",
                "feedback": "You divided the total sum by $360^\\circ$. While the exterior angles of a polygon always sum to $360^\\circ$, the sum of interior angles relies on splitting the shape into triangles of $180^\\circ$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Exterior Shortcut",
            "content": "You can also find the number of sides by finding the exterior angle first. But for 'sum of interior' questions, memorizing $(n-2) \\times 180$ is the most direct path to the marks."
        }
    },
    // 23 Apr
    {
        "id": "002091",
        "date": "23 Apr 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Reverse Percentages",
        "difficulty": "6/7",
        "q": "A TV is sold for £352 in a '20% off' sale.<br>Calculate the original price of the TV.",
        "steps": [
            "Identify that £352 represents 80% of the original price.",
            "Find 1%: $352 \\div 80 = 4.4$.",
            "Multiply by 100: $4.4 \\times 100$.",
            "Final Answer: $$£440$$"
        ],
        "wrong_options": [
            {
                "ans": "$$£422.40$$",
                "feedback": "You calculated $20\\%$ of £352 and added it on. This is a classic trap! £352 represents $80\\%$ of the original price, not $100\\%$. You cannot just add a percentage of the new price."
            },
            {
                "ans": "$$£281.60$$",
                "feedback": "You subtracted $20\\%$ from the sale price! This would be a double discount. The question asks you to work backwards to find the larger original price."
            },
            {
                "ans": "$$£1760.00$$",
                "feedback": "You assumed that £352 was $20\\%$ of the original price! A '20% off' sale means the customer pays the remaining $80\\%$. You must base your calculation on $80\\%$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Don't just add 20%!",
            "content": "A common mistake is to calculate 20% of the sale price and add it back. This is wrong! You must always divide by the multiplier (in this case, $0.8$) to get back to the original value."
        }
    },
    // 24 Apr
    {
        "id": "002092",
        "date": "24 Apr 2026",
        "major_area": "Probability",
        "topic": "Basic Probability",
        "subtopic": "Sets and Venn Diagrams",
        "difficulty": "6/7",
        "q": "In a class of 30 students, 20 like Football and 15 like Cricket. 10 like both.<br>Find the probability that a student chosen at random likes <strong>only</strong> Football.",
        "steps": [
            "Number who like Football only: $20 - 10 = 10$",
            "Total number of students: $30$",
            "Probability: $\\dfrac{10}{30}$",
            "Final Answer: $$\\dfrac{1}{3}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$\\dfrac{2}{3}$$",
                "feedback": "You used the total number of students who like football ($20$). This group includes the $10$ students who also like cricket! You must subtract the intersection ($10$) to find those who like <em>only</em> football."
            },
            {
                "ans": "$$\\dfrac{10}{45}$$",
                "feedback": "You added $20$, $15$, and $10$ to find your denominator. The question states the class has exactly $30$ students! The $10$ students who like both are already counted inside the $20$ and $15$."
            },
            {
                "ans": "$$\\dfrac{1}{2}$$",
                "feedback": "You calculated the probability of selecting a student who likes cricket ($\\dfrac{15}{30}$). Always double-check the specific criteria the question is asking for!"
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Venn Diagram Logic",
            "content": "Always fill in the intersection (the 'both' section) first! It prevents you from double-counting the students who appear in both categories."
        }
    },
// 25 Apr (Example of a 'Big Challenge' for end of month)
    {
        "id": "002093",
        "date": "25 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Compound Shapes in 3D",
        "subtopic": "Volume",
        "difficulty": "8/9",
        "q": "A frustum is made by removing a small cone from a large cone. The large cone has radius $10\\text{cm}$ and height $20\\text{cm}$. The small cone has radius $5\\text{cm}$. Calculate the volume of the frustum.",
        "steps": [
            "Volume of large cone: $\\frac{1}{3}\\pi(10^2)(20) = \\frac{2000}{3}\\pi$.",
            "Using similar triangles, the height of the small cone is $10\\text{cm}$ (since radius halved, height halves).",
            "Volume of small cone: $\\frac{1}{3}\\pi(5^2)(10) = \\frac{250}{3}\\pi$.",
            "Subtract: $\\frac{2000}{3}\\pi - \\frac{250}{3}\\pi = \\frac{1750}{3}\\pi$.",
            "Final Answer: $$583.3\\pi\\text{ cm}^3$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ \dfrac{2000}{3}\pi + \dfrac{250}{3}\pi = \dfrac{2250}{3}\pi$$",
        "feedback": "You added the cone volumes instead of subtracting. A frustum is the big cone minus the small cone."
    },
    {
        "ans": "$$(a)\\ \dfrac{2000}{3}\pi - \dfrac{500}{3}\pi = \dfrac{1500}{3}\pi$$",
        "feedback": "You doubled the small cone’s volume by mistake. Only one small cone is removed."
    },
    {
        "ans": "$$(a)\\ \dfrac{1750}{3}$$",
        "feedback": "You forgot the factor of $\\pi$. Cone volumes always include $\\pi r^2 h$."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Frustum Shortcut",
            "content": "You don't always need a complex formula for a frustum. Just remember: it's simply the <strong>Big Shape</strong> minus the <strong>Little Shape</strong>. Finding the height of the missing cone using similar triangles is usually the 'hidden' step."
        }
    },
    // 26 Apr
    {
        "id": "002094",
        "date": "26 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Vector Problem Solving",
        "difficulty": "8/9",
        "img": "true",
        "q": "$OABC$ is a parallelogram where $\\vec{OA} = \\mathbf{a}$ and $\\vec{OC} = \\mathbf{c}$. $M$ is the midpoint of $BC$. $P$ is a point on $AC$ such that $AP:PC = 2:1$.<br>(a) Find the vector $\\vec{OM}$ in terms of $\\mathbf{a}$ and $\\mathbf{c}$.<br>(b) Prove that $O, P$ and $M$ are collinear.",
        "steps": [
            "(a) $\\vec{OM} = \\vec{OC} + \\vec{CM}$. Since $BC$ is parallel and equal to $OA$, $\\vec{CM} = \\frac{1}{2}\\mathbf{a}$. So, $\\vec{OM} = \\mathbf{c} + \\frac{1}{2}\\mathbf{a}$.",
            "(b) First, find $\\vec{AC} = \\mathbf{c} - \\mathbf{a}$.",
            "Next, find $\\vec{AP} = \\frac{2}{3}\\vec{AC} = \\frac{2}{3}(\\mathbf{c} - \\mathbf{a})$.",
            "Find $\\vec{OP} = \\vec{OA} + \\vec{AP} = \\mathbf{a} + \\frac{2}{3}\\mathbf{c} - \\frac{2}{3}\\mathbf{a} = \\frac{1}{3}\\mathbf{a} + \\frac{2}{3}\\mathbf{c}$.",
            "Factorise $\\vec{OP}$: $\\vec{OP} = \\frac{2}{3}(\\frac{1}{2}\\mathbf{a} + \\mathbf{c})$.",
            "Compare: $\\vec{OP} = \\frac{2}{3}\\vec{OM}$.",
            "Final Answer: $$\\vec{OP} \\text{ is a scalar multiple of } \\vec{OM} \\text{ and they share point } O, \\text{ so they are collinear.}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ \vec{OM} = \mathbf{a} + \mathbf{c}$$",
        "feedback": "You treated $M$ as the midpoint of $OC$ instead of $BC$. Midpoint of $BC$ requires adding half of $\\mathbf{a}$."
    },
    {
        "ans": "$$(b)\\ \vec{OP} = \vec{OM}$$",
        "feedback": "You assumed equality instead of showing a scalar multiple. Collinearity requires one vector to be a multiple of the other."
    },
    {
        "ans": "$$(b)\\ \vec{OP} = \tfrac{1}{3}\mathbf{a} + \tfrac{2}{3}\mathbf{c},\ \vec{OM} = \mathbf{c} - \tfrac{1}{2}\mathbf{a}$$",
        "feedback": "You used the wrong direction for $BC$. In a parallelogram, $BC$ is parallel and equal to $OA$, not opposite."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Collinearity Conclusion",
            "content": "To prove points are on a straight line, finding the scalar multiple (e.g., $\\vec{OP} = \\frac{2}{3}\\vec{OM}$) is only 3 out of 4 marks. You <strong>must</strong> write the sentence: 'They are parallel and share a common point' to secure the final mark. Don't fall at the last hurdle!"
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 27 Apr
    {
        "id": "002095",
        "date": "27 Apr 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Solving Fractional Equations",
        "difficulty": "8/9",
        "q": "Solve the equation: $\\dfrac{5}{x+2} + \\dfrac{3}{x-1} = 2$.",
        "steps": [
            "Find a common denominator: $\\dfrac{5(x-1) + 3(x+2)}{(x+2)(x-1)} = 2$.",
            "Expand and simplify the numerator: $5x - 5 + 3x + 6 = 8x + 1$.",
            "Multiply through by the denominator: $8x + 1 = 2(x+2)(x-1)$.",
            "Expand the quadratic: $8x + 1 = 2(x^2 + x - 2) \\implies 8x + 1 = 2x^2 + 2x - 4$.",
            "Rearrange to equal zero: $2x^2 - 6x - 5 = 0$.",
            "Solve using the quadratic formula: $x = \\dfrac{6 \\pm \\sqrt{(-6)^2 - 4(2)(-5)}}{2(2)} = \\dfrac{6 \\pm \\sqrt{76}}{4}$.",
            "Final Answer: $$x = 3.68, x = -0.68$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ x = 2$$",
        "feedback": "You substituted $x=2$ into the original equation instead of solving it. Fractional equations require eliminating denominators first."
    },
    {
        "ans": "$$(a)\\ x = \dfrac{6 \pm \sqrt{36 - 40}}{4}$$",
        "feedback": "You made a sign error in the discriminant. The quadratic is $2x^2 - 6x - 5$, so the discriminant is $36 + 40$."
    },
    {
        "ans": "$$(a)\\ x = 3.5,\ x = -1$$",
        "feedback": "Your answers are close but incorrect. This usually happens when expanding $(x+2)(x-1)$ incorrectly."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Common Denominator",
            "content": "When solving algebraic fraction equations, your first priority is to eliminate the denominators. Multiply every single term by the common denominator $(x+2)(x-1)$. Don't forget that the '2' on the right-hand side must also be multiplied!"
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 28 Apr
    {
        "id": "002096",
        "date": "28 Apr 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Composite Functions",
        "difficulty": "7/8",
        "q": "Functions $f$ and $g$ are defined as: $f(x) = 3x - 1$ and $g(x) = x^2 + 4$.<br>(a) Calculate $fg(2)$.<br>(b) Find the inverse function $f^{-1}(x)$.",
        "steps": [
            "(a) Find $g(2)$ first: $2^2 + 4 = 8$.",
            "Substitute 8 into $f(x)$: $f(8) = 3(8) - 1 = 23$.",
            "(b) Write the function in $y=$ notation: $y = 3x - 1$.",
            "Interchange $x$ and $y$: $x = 3y - 1$.",
            "Solve for $y$: $x + 1 = 3y \\implies y = \\dfrac{x + 1}{3}$.",
            "Write in inverse function notation: $f^{-1}(x) = \\dfrac{x + 1}{3}$.",
            "Final Answer: $$(a)\\ 23,\\ (b)\\ f^{-1}(x) = \\dfrac{x+1}{3}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ fg(2) = 3(2) - 1 = 5$$",
        "feedback": "You applied $f$ directly to 2 instead of applying $g$ first. $fg(2)$ means $f(g(2))$."
    },
    {
        "ans": "$$(b)\\ f^{-1}(x) = 3x + 1$$",
        "feedback": "You inverted the function incorrectly. The inverse should undo $3x - 1$, not repeat it."
    },
    {
        "ans": "$$(b)\\ f^{-1}(x) = \dfrac{x - 1}{3}$$",
        "feedback": "You moved the constant the wrong way. Solving $x = 3y - 1$ gives $y = \dfrac{x + 1}{3}$."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Why we swap X and Y",
            "content": "Interchanging $x$ and $y$ is the most important step in finding an inverse. Geometrically, this represents a reflection in the line $y=x$. By solving for the 'new' $y$, you are finding the algebraic rule for that reflected image."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 29 Apr
    {
        "id": "002094",
        "date": "29 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circles",
        "subtopic": "Arcs and Sectors",
        "difficulty": "8/9",
        "img": "true",
        "q": "A sector of a circle has a radius of $r\\text{ cm}$ and a sector angle of $60^\\circ$.<br>The area of the sector is $24\\pi\\text{ cm}^2$.<br>(a) Show that the radius $r = 12\\text{ cm}$.<br>(b) Calculate the arc length of the sector, giving your answer in terms of $\\pi$.",
        "steps": [
            "(a) Area formula: $\\frac{\\theta}{360} \\times \\pi r^2 = 24\\pi$.",
            "Substitute $\\theta = 60$: $\\frac{60}{360} \\times \\pi r^2 = 24\\pi$.",
            "Simplify: $\\frac{1}{6}r^2 = 24 \\implies r^2 = 144$.",
            "Square root: $r = 12$.",
            "(b) Arc length formula: $\\frac{\\theta}{360} \\times 2\\pi r$.",
            "Calculate: $\\frac{60}{360} \\times 2 \\times \\pi \\times 12 = \\frac{1}{6} \\times 24\\pi$.",
            "Final Answer: $$(a)\\ r=12,\\ (b)\\ 4\\pi\\text{ cm}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ r = \\sqrt{24},\\ (b)\\ 8\\pi$$",
        "feedback": "You forgot the $\\frac{1}{6}$ factor from the $60^\circ$ angle. The area is not $\\pi r^2 = 24\\pi$."
    },
    {
        "ans": "$$(a)\\ r=12,\\ (b)\\ \text{Arc length} = 12\pi$$",
        "feedback": "You calculated the full circumference instead of the fraction for a $60^\circ$ sector."
    },
    {
        "ans": "$$(a)\\ r=6,\\ (b)\\ \text{Arc length} = 2\pi$$",
        "feedback": "You divided your answer in part (a) by two but you had found the radius not the diameter."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Arc vs Perimeter",
            "content": "Read the question carefully. If it asks for 'arc length', you only need the curved part. If it asks for 'perimeter', you must add the two radii ($12 + 12$) to your arc length result!"
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 30 Apr
    {
        "id": "002089",
        "date": "30 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Pythagoras",
        "subtopic": "Pythagoras Theorem",
        "difficulty": "8/9",
        "img": "true",
        "q": "A cuboid has dimensions $8\\text{ cm}$ by $6\\text{ cm}$ by $5\\text{ cm}$.<br>(a) Calculate the length of the diagonal across the base.<br>(b) Calculate the length of the internal diagonal of the cuboid.",
        "steps": [
            "(a) Use Pythagoras on the base ($8$ and $6$): $d^2 = 8^2 + 6^2$.",
            "$d^2 = 64 + 36 = 100 \\implies d = 10\\text{ cm}$.",
            "(b) Use Pythagoras with the base diagonal and the height ($10$ and $5$): $D^2 = 10^2 + 5^2$.",
            "$D^2 = 100 + 25 = 125$.",
            "Simplify the surd: $D = \\sqrt{125} = \\sqrt{25 \\times 5}$.",
            "Final Answer: $$(a)\\ 10\\text{ cm},\\ (b)\\ 5\\sqrt{5}\\text{ cm}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ d = \sqrt{8^2 - 6^2} = \sqrt{28}$$",
        "feedback": "You subtracted instead of adding. Pythagoras in 2D always uses $a^2 + b^2$."
    },
    {
        "ans": "$$(b)\\ D = \sqrt{10^2 - 5^2} = \sqrt{75}$$",
        "feedback": "You repeated the subtraction error. The internal diagonal uses $10^2 + 5^2$."
    },
    {
        "ans": "$$(b)\\ D = 15\\text{ cm}$$",
        "feedback": "You added the lengths instead of using Pythagoras. Diagonals in 3D require squaring all three dimensions."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 3D Shortcut",
            "content": "For any cuboid, the internal diagonal $D$ can be found in one step using the 3D version of Pythagoras: $D^2 = a^2 + b^2 + c^2$. It saves time and reduces the chance of rounding errors midway through the problem."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    }
];
