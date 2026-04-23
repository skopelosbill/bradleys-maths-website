const problemBank = [
{
    "id": "2068",
    "date": "1 Apr 2026",
    "major_area": "Algebra",
    "topic": "Factorising",
    "subtopic": "Quadratic factorising",
    "difficulty": "8/9",
    "q": "(a) Factorise fully: $6x^2 - 19x + 15$.<br>(b) Hence, factorise: $19x - 6x^2 - 15$.",
    "steps": [
        "(a) Find factors of $6 \\times 15 = 90$ that sum to $-19$: $-9$ and $-10$.",
        "Split and factorise: $6x^2 - 9x - 10x + 15 = 3x(2x - 3) - 5(2x - 3)$.",
        "Part (a) Answer: $(3x - 5)(2x - 3)$.",
        "(b) Recognise that $19x - 6x^2 - 15$ is $-1(6x^2 - 19x + 15)$.",
        "Multiply one bracket by $-1$: $(5 - 3x)(2x - 3)$.",
        "Final Answer: $$(5 - 3x)(2x - 3)$$"
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Negative $x^2$",
        "content": "When a quadratic starts with a negative $x^2$, always factorise the 'positive' version first, then adjust the signs. It prevents the common error of misplacing the negative inside the brackets."
    },
    "payhip_link": "https://payhip.com/b/wRN86",
    "button_text": "Master Algebra: Download the Full Algebra Pack"
},
	{
    "id": "2069",
    "date": "2 Apr 2026",
    "major_area": "Geometry & Measures",
    "topic": "Coordinates",
    "subtopic": "Gradients",
    "difficulty": "6/7",
    "img": "",
    "q": "Points $A(-7, -23)$, $B(-1, -5)$ and $C(4, 10)$ lie on the coordinate plane.<br>(a) Show that the gradient of the line segment $AB$ is 3.<br>(b) Prove that $A, B$ and $C$ are collinear.",
    "steps": [
        "(a) Gradient $AB = \\frac{-5 - (-23)}{-1 - (-7)} = \\frac{18}{6} = 3$.",
        "(b) Calculate gradient $BC = \\frac{10 - (-5)}{4 - (-1)} = \\frac{15}{5} = 3$.",
        "Since $m_{AB} = m_{BC}$, the line segments are parallel.",
        "Since they both pass through point $B$, they must lie on the same straight line.",
        "Final Answer: $$\\text{Gradients equal and share common point } B$$"
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Collinearity Proof",
        "content": "To prove collinearity, simply showing the gradients are equal is only half the job. You <strong>must</strong> explicitly state that they share a common point to earn the final communication mark."
    },
    "payhip_link": "https://payhip.com/b/XAGch",
    "button_text": "Master Geometry: Download the Full Geometry Pack"
},
	{
    "id": "002070",
    "date": "3 Apr 2026",
    "major_area": "Ratio, Proportion & Rates of Change",
    "topic": "Compound Measures",
    "subtopic": "Speed",
    "difficulty": "4/5",
    "q": "Jack drives $145\\text{ km}$ at an average speed of $60\\text{ km/h}$.<br>(a) Calculate the time taken in hours, as a decimal.<br>(b) Convert this time into hours and minutes.",
    "steps": [
        "(a) $\\text{Time} = \\frac{145}{60} = 2.4166... \\text{ hours}$.",
        "(b) The whole number is 2 hours.",
        "Convert $0.4166...$ to minutes: $0.4166... \\times 60 = 25\\text{ minutes}$.",
        "Final Answer: $$2\\text{ hours } 25\\text{ minutes}$$"
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: The Decimal Trap",
        "content": "A common 'lazy' mistake is to say $2.41$ hours is 2 hours and 41 minutes. Time is base-60, not base-10! Always multiply the decimal remainder by 60 or, on a calculator paper, use your time key."
    },
    "payhip_link": "https://payhip.com/b/IVWzJ",
    "button_text": "Master Number & Ratio: Download the Full Number Pack"
},
	{
    "id": "2071",
    "date": "4 Apr 2026",
    "major_area": "Geometry & Measures",
    "topic": "3D Shapes",
    "subtopic": "Volume",
    "difficulty": "8/9",
    //"img": "true",
    "q": "A cone and a hemisphere have the same base radius $r$.<br>The volume of the cone is equal to the volume of the hemisphere.<br>Show that the height of the cone, $h$, is equal to $2r$.",
    "steps": [
        "Recall $V_{\\text{hemisphere}} = \\frac{2}{3}\\pi r^3$.",
        "Recall $V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h$.",
        "Equate: $\\frac{1}{3}\\pi r^2 h = \\frac{2}{3}\\pi r^3$.",
        "Cancel $\\pi$ and multiply by 3: $r^2 h = 2r^3$.",
        "Divide by $r^2$: $h = 2r$.",
        "Final Answer: $$h = 2r$$"
    ],
    "bradley_insight": {
        "type": "pro-tip",
        "title": "The Head Teacher's Eye: Formula Accuracy",
        "content": "In the exam, the formula for a sphere is given, but you must remember to halve it for the hemisphere. Forgetting the $\\frac{2}{3}$ multiplier is the most frequent error here."
    },
    "payhip_link": "https://payhip.com/b/XAGch",
    "button_text": "Master Geometry: Download the Full Geometry Pack"
},
	{
    "id": "2072",
    "date": "5 Apr 2026",
    "major_area": "Ratio, Proportion & Rates of Change",
    "topic": "Direct & Inverse Proportion",
    "subtopic": "Proportion equations",
    "difficulty": "6/7",
    "img": "",
    "q": "$y$ is inversely proportional to $x^2$. When $x = 3, y = 8$.<br>(a) Find an equation for $y$ in terms of $x$.<br>(b) Calculate the value of $y$ when $x = 2$.<br>(c) Calculate the value of $x$ when $y = 2$.",
    "steps": [
        "(a) $y = \\frac{k}{x^2} \\implies 8 = \\frac{k}{3^2} \\implies k = 72$. Equation: $y = \\frac{72}{x^2}$.",
        "(b) When $x = 2$: $y = \\frac{72}{2^2} = \\frac{72}{4} = 18$.",
        "(c) When $y = 2$: $2 = \\frac{72}{x^2} \\implies 2x^2 = 72 \\implies x^2 = 36$.",
        "Final Answer: $$(a)\\ y = \\frac{72}{x^2},\\ (b)\\ 18,\\ (c)\\ 6$$"
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Square vs Square Root",
        "content": "Read the wording twice. Don't make the mistake of confusing 'the square of $x$' ($x^2$) and 'the square root of $x$' ($\\sqrt{x}$). They are not the same thing! Using the wrong power loses all subsequent marks."
    },
    "payhip_link": "https://payhip.com/b/IVWzJ",
    "button_text": "Master Number & Ratio: Download the Full Number Pack"
},
	// 6 Apr
    {
        "id": "002073",
        "date": "6 Apr 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Quadratic formula",
        "difficulty": "6/7",
        "q": "Consider the quadratic equation $2x^2 + 7x - 4 = 0$.<br>(a) Calculate the value of the discriminant ($b^2 - 4ac$).<br>(b) Use the quadratic formula to find the two solutions for $x$.",
        "steps": [
            "(a) Identify $a=2, b=7, c=-4$.",
            "Discriminant: $7^2 - 4(2)(-4) = 49 + 32 = 81$.",
            "(b) Substitute into formula: $x = \\frac{-7 \\pm \\sqrt{81}}{2(2)}$.",
            "Calculate: $x = \\frac{-7 + 9}{4} = 0.5$ and $x = \\frac{-7 - 9}{4} = -4$.",
            "Final Answer: $$x = 0.5, x = -4$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The value of the discriminant",
            "content": "($b^2 - 4ac$) is known as the discriminant.  If the discriminant is positive the quadratic equation has two real roots because its graph crosses the $x$-axis.  If it is zero the quadratic has 'repeated roots', it's graph is tangent to the $x$-axis and so there is only one solution. If it is negative the quadratic has no real roots because its graph does not cross the $x$-axis."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 7 Apr
    {
        "id": "002074",
        "date": "7 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Scale factors",
        "difficulty": "8/9",
        "q": "Two similar cylinders have surface areas of $40\\pi\\text{ cm}^2$ and $90\\pi\\text{ cm}^2$.<br>(a) Find the linear scale factor between the smaller and larger cylinder.<br>(b) The smaller cylinder has a height of $6\\text{ cm}$. Calculate the height of the larger cylinder.",
        "steps": [
            "(a) Area Scale Factor ($k^2$) = $\\frac{90\\pi}{40\\pi} = 2.25$.",
            "Linear Scale Factor ($k$) = $\\sqrt{2.25} = 1.5$.",
            "(b) Multiply height: $6 \\times 1.5 = 9$.",
            "Final Answer: $$9\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Bridging the Gap",
            "content": "You cannot use an Area Scale Factor to find a length directly. You must always 'bridge' the calculation by finding the linear scale factor ($k$) first. This is a classic Grade 8/9 stumbling block."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 8 Apr
    {
        "id": "002075",
        "date": "8 Apr 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "Prime factorisation",
        "difficulty": "4/5",
        "q": "(a) Use a factor tree to express 108 as a product of its prime factors.<br>(b) Write your final answer in index form.",
        "steps": [
            "(a) Factor tree branches: $108 = 2 \\times 54$; $54 = 2 \\times 27$; $27 = 3 \\times 9$; $9 = 3 \\times 3$.",
            "List primes: $2, 2, 3, 3, 3$.",
            "(b) Collect into index form: $2^2 \\times 3^3$.",
            "Final Answer: $$2^2 \\times 3^3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systemic Division",
            "content": "Always start with the smallest prime (2). Keep dividing by 2 until you can't anymore, then move to 3, then 5. This 'ladder' approach ensures you never miss a factor."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 9 Apr
    {
        "id": "002076",
        "date": "9 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Polygons",
        "subtopic": "Interior angles",
        "difficulty": "6/7",
        "q": "A regular polygon has 10 sides (a decagon).<br>(a) Calculate the size of each exterior angle.<br>(b) Hence, find the size of each interior angle.",
        "steps": [
            "(a) Exterior angles of any polygon sum to $360^\\circ$.",
            "One exterior angle = $360 \\div 10 = 36^\\circ$.",
            "(b) Interior and exterior angles lie on a straight line: $180 - 36 = 144$.",
            "Final Answer: $$144^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Exterior Shortcut",
            "content": "While you can use $(n-2) \\times 180 \\div n$, the exterior angle method ($360 \\div n$) is much faster and less prone to calculation errors. Use it whenever possible!"
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    },
    // 10 Apr
    {
        "id": "002077",
        "date": "10 Apr 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Linear graphs",
        "difficulty": "4/5",
        "q": "Line $L_1$ has the equation $y = 3x - 5$.<br>(a) State the gradient of a line parallel to $L_1$.<br>(b) Find the equation of the line $L_2$ which is parallel to $L_1$ and passes through $(2, 10)$.",
        "steps": [
            "(a) Parallel lines have the same gradient, so $m = 3$.",
            "(b) Use $y-y_1 = m(x-x_1)$ with $(2, 10)$: $y-10=3(x-2)$.",
            "Solve this equation $y=3x-6+10$.",
            "State the final equation: $y = 3x + 4$.",
            "Final Answer: $$y = 3x + 4$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Parallel Protocol",
            "content": "In coordinate geometry, the word 'parallel' is a mathematical instruction to use the exact same gradient. Once you have the gradient and a point, finding the equation is a simple matter of substituting the known coordinate point values into $y-y_1 = m(x-x_1)$."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    
    // 11 Apr
    {
        "id": "002078",
        "date": "11 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Pythagoras",
        "subtopic": "3D Pythagoras",
        "difficulty": "8/9",
        "q": "A cuboid has dimensions $3\\text{cm}$ by $4\\text{cm}$ by $12\\text{cm}$.<br>Calculate the length of the internal diagonal (the longest distance between two corners).",
        "img": "",
        "steps": [
            "Use the 3D Pythagoras formula: $d^2 = a^2 + b^2 + c^2$.",
            "Substitute: $d^2 = 3^2 + 4^2 + 12^2$.",
            "Calculate: $d^2 = 9 + 16 + 144 = 169$.",
            "Square root: $d = \\sqrt{169}$.",
            "Final Answer: $$13\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Pythagoras in 3D",
            "content": "You can solve this in two steps using 2D Pythagoras twice, but the 3D formula ($a^2+b^2+c^2=d^2$) is much faster and less prone to rounding errors. It’s a must-know for Grade 8/9 questions."
        }
    },
    // 12 Apr
    {
        "id": "002079",
        "date": "12 Apr 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Compound interest",
        "difficulty": "6/7",
        "q": "Alice invests £4000 in a savings account with 3 per cent compound interest per year.<br>Calculate the total interest earned after 5 years. Give your answer to the nearest penny.",
        "img": "",
        "steps": [
            "Multiplier = $1.03$.",
            "Total Amount = $4000 \\times 1.03^5 = 4637.096...$.",
            "To find interest only, subtract the original investment: $4637.10 - 4000$.",
            "Final Answer: $$£637.10$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "TThe Head Teacher's Eye: Total vs. Interest",
            "content": "Read the question carefully! Does it ask for the <strong>total value</strong> or just the <strong>interest</strong>? Many students lose a mark at the very end by forgetting to subtract the original principal."
        }
    },
    // 13 Apr
    {
        "id": "002080",
        "date": "13 Apr 2026",
        "major_area": "Statistics",
        "topic": "Charts",
        "subtopic": "Pie charts",
        "difficulty": "4/5",
        "q": "In a survey of 60 people, 15 said their favorite color was Blue.<br>Calculate the angle for 'Blue' on a pie chart.",
        "steps": [
            "Total degrees in a circle $= 360^\\circ$.",
            "Find degrees per person: $360 \\div 60 = 6^\\circ$.",
            "Multiply by the frequency of Blue: $15 \\times 6$.",
            "Final Answer: $$90^\\circ$$"
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
        "subtopic": "Quadratic factorising",
        "difficulty": "6/7",
        "q": "Solve $x^2 - 10x + 21 = 0$ by factorising.",
        "steps": [
            "Find two numbers that multiply to $+21$ and add to $-10$.",
            "The numbers are $-3$ and $-7$.",
            "Write as brackets: $(x - 3)(x - 7) = 0$.",
            "Set each bracket to zero.",
            "Final Answer: $$x = 3,\\ x = 7$$"
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
        "subtopic": "SOHCAHTOA",
        "difficulty": "4/5",
        "q": "A ladder $5\\text{m}$ long leans against a vertical wall.<br>The base of the ladder is $3\\text{m}$ from the wall on horizontal ground.<br>Calculate the angle the ladder makes with the ground.",
        "img": "true",
        "steps": [
            "Identify the sides relative to the angle $\\theta$: The ladder is the $\\textbf{Hypotenuse}$ ($5\\text{m}$) and the distance from the wall is the $\\textbf{Adjacent}$ side ($3\\text{m}$).",
            "Select the correct ratio: $\\cos(\\theta) = \\dfrac{\\text{adj}}{\\text{hyp}}$.",
            "Substitute the values: $\\cos(\\theta) = \\dfrac{3}{5}$.",
            "Calculate the angle: $\\theta = \\cos^{-1}(0.6)$.",
            "Final Answer: $$53.1^\\circ$$"
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
        "subtopic": "nth term",
        "difficulty": "6/7",
        "q": "Find the $n^{th}$ term of the linear sequence: $7, 11, 15, 19, 23...$",
        "steps": [
            "Find the common difference: $11 - 7 = 4$.",
            "This means the sequence is related to $4n$.",
            "When $n=1$, $4(1) = 4$. Our first term is $7$.",
            "Adjust by adding $3$ ($7 - 4 = 3$).",
            "Final Answer: $$4n + 3$$"
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
        "subtopic": "Combined Theorems",
        "difficulty": "7/8",
        "q": "In the diagram, $AC$ is a diameter of the circle. $B$ and $D$ are points on the circumference.<br>Given $\\angle ABD = 42^\\circ$:<br>(a) Write down the size of $\\angle ACD$.<br>(b) Calculate the size of $\\angle CAD$.",
        "img": "true",
        "steps": [
            "(a) $\\angle ACD = 42^\\circ$ because angles subtended by the same arc ($AD$) at the circumference are equal.",
            "(b) $\\angle ADC = 90^\\circ$ because the angle in a semicircle is a right angle.",
            "(b) In $\\triangle ADC$, the angles must sum to $180^\\circ$.",
            "(b) $\\angle CAD = 180^\\circ - (90^\\circ + 42^\\circ) = 48^\\circ$.",
            "Final Answer: $$(a)\\ 42^\\circ,\\ (b)\\ 48^\\circ$$"
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
        "subtopic": "General Proof",
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
        "subtopic": "Median & IQR",
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
            "Final Answer: $$(a)\\ 29\\text{ cm},\\ (b)\\ 15\\text{ cm},\\ (c)\\ 5$$"
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
        "subtopic": "Changing the subject",
        "difficulty": "6/7",
        "q": "Make $t$ the subject of the formula: $v = u + at$.",
        "img": "",
        "steps": [
            "Subtract $u$ from both sides: $v - u = at$.",
            "Divide both sides by $a$.",
            "Final Answer: $$t = \\frac{v - u}{a}$$"
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
        "subtopic": "Discrete data",
        "difficulty": "4/5",
        "q": "The mean of four numbers is 10. Three of the numbers are 8, 12, and 15.<br>Find the fourth number.",
        "steps": [
            "Total of the four numbers: $4 \\times 10 = 40$.",
            "Total of the known three: $8 + 12 + 15 = 35$.",
            "Subtract: $40 - 35$.",
            "Final Answer: $$5$$"
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
        "subtopic": "Interior angles",
        "difficulty": "4/5",
        "q": "The sum of the interior angles of a regular polygon is $1440^\\circ$.<br>Calculate the number of sides the polygon has.",
        "steps": [
            "Use the formula: $(n - 2) \\times 180 = 1440$",
            "Divide by 180: $n - 2 = 8$",
            "Add 2: $n = 10$",
            "Final Answer: $$10\\text{ sides}$$"
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
        "subtopic": "Reverse percentages",
        "difficulty": "6/7",
        "q": "A TV is sold for £352 in a '20% off' sale.<br>Calculate the original price of the TV.",
        "steps": [
            "Identify that £352 represents 80% of the original price.",
            "Find 1%: $352 \\div 80 = 4.4$.",
            "Multiply by 100: $4.4 \\times 100$.",
            "Final Answer: $$£440$$"
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
        "subtopic": "Venn Diagrams",
        "difficulty": "6/7",
        "q": "In a class of 30 students, 20 like Football and 15 like Cricket. 10 like both.<br>Find the probability that a student chosen at random likes **only** Football.",
        "steps": [
            "Number who like Football only: $20 - 10 = 10$.",
            "Total number of students: $30$.",
            "Probability: $\\frac{10}{30}$.",
            "Final Answer: $$\\frac{1}{3}$$"
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
        "topic": "3D Shapes",
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
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Frustum Shortcut",
            "content": "You don't always need a complex formula for a frustum. Just remember: it's simply the **Big Shape** minus the **Little Shape**. Finding the height of the missing cone using similar triangles is usually the 'hidden' step."
        }
    },
    // 26 Apr
   
    {
        "id": "002094",
        "date": "26 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Parallel vectors",
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
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Collinearity Conclusion",
            "content": "To prove points are on a straight line, finding the scalar multiple (e.g., $\\vec{OP} = \\frac{2}{3}\\vec{OM}$) is only 3 out of 4 marks. You **must** write the sentence: 'They are parallel and share a common point' to secure the final mark. Don't fall at the last hurdle!"
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
        "subtopic": "Adding/subtracting",
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
        "topic": "Algebraic Notation",
        "subtopic": "Substitution",
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
        "topic": "Trigonometry",
        "subtopic": "Area of triangle 1/2 ab sin C",
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
        "subtopic": "3D Pythagoras",
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
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 3D Shortcut",
            "content": "For any cuboid, the internal diagonal $D$ can be found in one step using the 3D version of Pythagoras: $D^2 = a^2 + b^2 + c^2$. It saves time and reduces the chance of rounding errors midway through the problem."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master Geometry: Download the Full Geometry Pack"
    }
]
