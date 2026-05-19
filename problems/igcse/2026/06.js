const problemBank = [
    // 1 June
    {
        "id": "003152",
        "date": "1 June 2026",
        "major_area": "Number",
        "topic": "Sets",
        "subtopic": "Sets and Venn Diagrams",
        "difficulty": "6/7",
        "img": "true",
        "q": "In a group of 50 students, 30 study History ($H$) and 26 study Geography ($G$). There are 8 students who study neither subject.<br>(a) Use this information to complete the Venn diagram.<br>(b) Find the value of $n(H \\cap G)$.<br>(c) A student is chosen at random. Given that the student studies Geography, calculate the probability that they also study History.",
        "steps": [
            "For part (a), we first find the number of students who study at least one subject by subtracting those who study neither from the total: $50 - 8 = 42$.",
            "To find the intersection (students studying both), we add the History and Geography totals and subtract our new value: $(30 + 26) - 42 = 56 - 42 = 14$.",
            "We place 14 in the intersection. The 'History only' region is $30 - 14 = 16$. The 'Geography only' region is $26 - 14 = 12$. The outside region is 8.",
            "<img src='images/06/i_01_sol.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "For part (b), $n(H \\cap G)$ asks for the number of students in the intersection, which we calculated as 14.",
            "For part (c), the phrase 'Given that' restricts our denominator. We only consider the 26 students who study Geography.",
            "Out of these 26, the number who also study History is 14. Therefore, the probability is $\\dfrac{14}{26}$, which simplifies to $\\dfrac{7}{13}$.",
            "Final Answer: $$(b)\\ 14,\\ (c)\\ \\dfrac{7}{13}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 'Given That' Trap",
            "content": "Conditional probability is a favourite for Cambridge Paper 4. When you see 'Given that...', immediately cross out or cover up everything else in your Venn diagram. Your total population (the denominator) is no longer 50; it is strictly the number of people inside the 'Geography' circle."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 2 June
    {
        "id": "003153",
        "date": "2 June 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Stationary Points",
        "difficulty": "8/9",
        "q": "A particle moves in a straight line such that its displacement, $s$ metres, from a fixed point $O$ after $t$ seconds is given by $s = t^3 - 6t^2 + 9t + 2$.<br>(a) Find an expression for the velocity, $v$, of the particle in terms of $t$.<br>(b) Find the times when the particle is instantaneously at rest.<br>(c) Calculate the acceleration of the particle when $t = 4$.",
        "steps": [
            "For part (a), velocity is the rate of change of displacement. We differentiate $s$ with respect to $t$: $v = \\dfrac{ds}{dt} = 3t^2 - 12t + 9$.",
            "For part (b), the particle is at rest when its velocity is zero. We set our derivative equal to zero: $3t^2 - 12t + 9 = 0$.",
            "Dividing the entire equation by 3 simplifies it to $t^2 - 4t + 3 = 0$.",
            "Factorising the quadratic gives $(t - 1)(t - 3) = 0$. The particle is at rest at $t = 1$ and $t = 3$ seconds.",
            "For part (c), acceleration is the rate of change of velocity. We differentiate $v$ to find $a$: $a = \\dfrac{dv}{dt} = 6t - 12$.",
            "We substitute $t = 4$ into the acceleration formula: $a = 6(4) - 12 = 24 - 12 = 12\\text{ m/s}^2$.",
            "Final Answer: $$(a)\\ v = 3t^2 - 12t + 9,\\ (b)\\ t = 1, t = 3,\\ (c)\\ 12\\text{ m/s}^2$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Kinematics via Calculus",
            "content": "The Cambridge 0580 syllabus expects you to apply basic differentiation to kinematics. You must memorise this sequence: differentiate displacement to get velocity, and differentiate velocity to get acceleration. 'Instantaneously at rest' is simply the examiner's physical context for finding a stationary point!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 3 June
    {
        "id": "003154",
        "date": "3 June 2026",
        "major_area": "Geometry",
        "topic": "Coordinate Geometry",
        "subtopic": "Parallel and Perpendicular Lines, Mixed Problems",
        "difficulty": "7/8",
        "q": "The points $A(3, -2)$ and $B(7, 6)$ are joined by a straight line segment.<br>(a) Find the coordinates of the midpoint of $AB$.<br>(b) Find the equation of the perpendicular bisector of $AB$. Give your answer in the form $y = mx + c$.<br>(c) Determine algebraically whether the point $(-3, 6)$ lies on this perpendicular bisector.",
        "steps": [
            "For part (a), the midpoint is the average of the coordinates: $\\left(\\dfrac{3+7}{2}, \\dfrac{-2+6}{2}\\right) = (5, 2)$.",
            "For part (b), we first find the gradient of line $AB$: $m = \\dfrac{6 - (-2)}{7 - 3} = \\dfrac{8}{4} = 2$.",
            "The perpendicular gradient is the negative reciprocal of 2, which is $-0.5$.",
            "We substitute our perpendicular gradient and our midpoint $(5, 2)$ into the straight line equation: $y - 2 = -0.5(x - 5)$.",
            "Expanding the bracket gives $y - 2 = -0.5x + 2.5$. Adding 2 to both sides yields $y = -0.5x + 4.5$.",
            "For part (c), we substitute $x = -3$ into our new equation to see if the resulting $y$-value is 6.",
            "Calculation: $y = -0.5(-3) + 4.5 = 1.5 + 4.5 = 6$. Because the values match, the point does lie on the line.",
            "Final Answer: $$(a)\\ (5, 2),\\ (b)\\ y = -0.5x + 4.5,\\ (c)\\ \\text{Yes, shown algebraically}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Algebraic Verification",
            "content": "When asked to determine if a point lies on a line, do not attempt to draw a sketch. You must substitute the $x$-coordinate into your derived equation and show that it mathematically produces the exact $y$-coordinate provided. This proves rigorous algebraic understanding."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 4 June
    {
        "id": "003155",
        "date": "4 June 2026",
        "major_area": "Trigonometry",
        "topic": "3D Geometry",
        "subtopic": "Pythagoras and Trigonometry in 3D",
        "difficulty": "8/9",
        "img": "true",
        "q": "The diagram shows a right pyramid with a square base $ABCD$ of side length $10\\text{ cm}$. The vertex $V$ is directly above the centre of the base, $X$. The length of each slant edge (e.g., $VA$) is $13\\text{ cm}$.<br>(a) Calculate the length of the diagonal $AC$.<br>(b) Calculate the vertical height of the pyramid, $VX$.<br>(c) Calculate the angle that the slant edge $VA$ makes with the base $ABCD$.",
        "steps": [
            "For part (a), the base is a square, so triangle $ABC$ is a right-angled triangle. Using Pythagoras: $AC^2 = 10^2 + 10^2 = 200$.",
            "Taking the square root gives $AC = \\sqrt{200} \\approx 14.14\\text{ cm}$.",
            "For part (b), we look at the right-angled triangle $VXA$ inside the pyramid. The base of this triangle, $AX$, is half the diagonal $AC$. Calculation: $AX = \\sqrt{200} \\div 2 \\approx 7.071\\text{ cm}$.",
            "Using Pythagoras on triangle $VXA$: $VX^2 + AX^2 = VA^2$, which becomes $VX^2 + 50 = 169$.",
            "Subtracting 50 gives $VX^2 = 119$. Taking the square root gives $VX = \\sqrt{119} \\approx 10.91\\text{ cm}$.",
            "For part (c), the required angle is angle $VAX$. We can use the cosine ratio with the given slant edge: $\\cos(VAX) = \\dfrac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\dfrac{7.071}{13}$.",
            "Using the inverse cosine function: $VAX = \\cos^{-1}\\left(\\dfrac{7.071}{13}\\right) \\approx 57.04...^\\circ$.",
            "Final Answer: $$(a)\\ 14.1\\text{ cm},\\ (b)\\ 10.9\\text{ cm},\\ (c)\\ 57.0^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Extracting the 2D Triangle",
            "content": "3D trigonometry questions are designed to overwhelm you visually. The key to unlocking them is to draw out the internal 2D right-angled triangle (in this case, triangle VXA) completely separately from the main diagram. Label it with the values you know, and the trigonometry becomes standard Paper 2 material."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 5 June
    {
        "id": "003156",
        "date": "5 June 2026",
        "major_area": "Algebra",
        "topic": "Linear Equations",
        "subtopic": "Fractional Linear Equations",
        "difficulty": "6/7",
        "q": "Solve the following fractional equation: $$\\dfrac{2x + 1}{3} - \\dfrac{x - 4}{5} = 2$$<br>Show clear algebraic working for every step.",
        "steps": [
            "We must first eliminate the denominators. The lowest common multiple of 3 and 5 is 15. We multiply every single term in the entire equation by 15.",
            "Calculation: $15\\left(\\dfrac{2x + 1}{3}\\right) - 15\\left(\\dfrac{x - 4}{5}\\right) = 15(2)$.",
            "This simplifies the denominators, leaving: $5(2x + 1) - 3(x - 4) = 30$.",
            "We expand the brackets very carefully, paying close attention to the double negative: $10x + 5 - 3x + 12 = 30$.",
            "Collecting like terms yields $7x + 17 = 30$.",
            "Subtracting 17 from both sides gives $7x = 13$. Dividing by 7 gives the final fractional value for $x$.",
            "Final Answer: $$x = \\dfrac{13}{7} \\text{ (or } 1\\dfrac{6}{7})$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Invisible Bracket",
            "content": "The absolute most common place to lose marks here is expanding $-3(x - 4)$. You must treat the numerator of an algebraic fraction as though it is locked in an invisible bracket. $-3$ multiplied by $-4$ results in a $+12$. Forgetting this sign change will ruin the remainder of your calculation."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 6 June
    {
        "id": "003157",
        "date": "6 June 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Reverse Percentages",
        "difficulty": "7/8",
        "q": "A company's annual profit increased by $15\\%$ in 2024 and then decreased by $8\\%$ in 2025. The final profit at the end of 2025 was $\\$2,539,200$.<br>(a) Calculate the exact profit at the start of 2024.<br>(b) Calculate the overall percentage change over the two-year period.",
        "steps": [
            "For part (a), we establish our decimal multipliers. A $15\\%$ increase is $1.15$, and an $8\\%$ decrease is $0.92$.",
            "We construct an equation linking the original profit to the final profit: $\\text{Original} \\times 1.15 \\times 0.92 = 2539200$.",
            "We multiply the two decimals together: $1.15 \\times 0.92 = 1.058$. The equation is $\\text{Original} \\times 1.058 = 2539200$.",
            "To find the original amount, we divide the final profit by the combined multiplier: $2539200 \\div 1.058 = \\$2,400,000$.",
            "For part (b), the combined multiplier of $1.058$ provides the answer directly.",
            "Because $1.058$ is greater than $1$, it represents an overall increase. The decimal component $0.058$ equates to $5.8\\%$.",
            "Final Answer: $$(a)\\ \\$2,400,000,\\ (b)\\ 5.8\\% \\text{ increase}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Multiplier Chains",
            "content": "Never attempt to 'work backwards' by finding $8\\%$ and adding it on. Reverse percentages demand algebra! Setting up a single equation string with multiple decimal multipliers ($\\text{Original} \\times a \\times b = \\text{Final}$) is not only much faster, it completely removes the risk of round-off errors midway through."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    }
]