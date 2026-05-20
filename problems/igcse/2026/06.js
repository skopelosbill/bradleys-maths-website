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
    },
    // 7 June
    {
        "id": "003158",
        "date": "7 June 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Limits of Accuracy",
        "difficulty": "8/9",
        "q": "The distance from Earth to a star is $4.5 \\times 10^{12}\\text{ km}$, correct to 2 significant figures.<br>The speed of light is $3.0 \\times 10^5\\text{ km/s}$, correct to 2 significant figures.<br>Calculate the upper bound for the time taken for light to travel from the star to Earth.<br>Give your answer in seconds, in standard form correct to 3 significant figures.",
        "steps": [
            "We first establish the bounds for the distance. It is rounded to the nearest $0.1 \\times 10^{12}$, so the error margin is $\\pm 0.05 \\times 10^{12}$.",
            "The upper bound for distance is $4.55 \\times 10^{12}\\text{ km}$.",
            "Next, we establish the bounds for the speed. It is rounded to the nearest $0.1 \\times 10^5$, so the error margin is $\\pm 0.05 \\times 10^5$.",
            "The lower bound for speed is $2.95 \\times 10^5\\text{ km/s}$.",
            "Time is calculated as Distance $\\div$ Speed. To find the maximum possible time (upper bound), we must divide the largest distance by the smallest speed.",
            "Calculation: $(4.55 \\times 10^{12}) \\div (2.95 \\times 10^5) = 15423728.81...$ seconds.",
            "Converting to standard form and rounding to 3 significant figures gives $1.54 \\times 10^7$.",
            "Final Answer: $$1.54 \\times 10^7\\text{ seconds}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Bounds in Standard Form",
            "content": "Finding the bounds of numbers already in standard form can be confusing. Do not change the power of 10! Look at the decimal part: $4.5$ is rounded to 1 decimal place, so its bounds are simply $4.45$ and $4.55$. Keep the $\\times 10^{12}$ attached like a unit of measurement."
        },
        "payhip_link": "https://payhip.com/b/9LFtZ",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 8 June
    {
        "id": "003159",
        "date": "8 June 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Algebraic Fractions 2",
        "difficulty": "8/9",
        "q": "Solve the equation: $$\\dfrac{4}{x - 1} - \\dfrac{3}{x + 2} = 1$$<br>Show all your working and give your answers in exact surd form.",
        "steps": [
            "We must clear the fractions by multiplying every term by the common denominator, $(x - 1)(x + 2)$.",
            "This gives: $4(x + 2) - 3(x - 1) = 1(x - 1)(x + 2)$.",
            "Expanding the left-hand side carefully: $4x + 8 - 3x + 3 = x + 11$.",
            "Expanding the right-hand side using FOIL: $x^2 + 2x - 1x - 2 = x^2 + x - 2$.",
            "We equate the two expanded sides: $x + 11 = x^2 + x - 2$.",
            "Subtracting $x$ and $11$ from both sides sets the quadratic to zero: $x^2 - 13 = 0$.",
            "This is a straightforward difference equation. We add 13 to both sides: $x^2 = 13$.",
            "Taking the square root gives two exact solutions.",
            "Final Answer: $$x = \\sqrt{13} \\text{ and } x = -\\sqrt{13}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Exact Surd Form",
            "content": "If a Paper 4 question explicitly asks for the answer in 'exact surd form', it is a massive hint that the quadratic will not factorise neatly. Furthermore, when taking a square root to solve $x^2 = k$, you must always remember the $\\pm$ symbol to ensure you capture both the positive and negative roots."
        },
        "payhip_link": "https://payhip.com/b/x02Ge",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 9 June
    {
        "id": "003160",
        "date": "9 June 2026",
        "major_area": "Vectors",
        "topic": "Vectors",
        "subtopic": "Vector Geometry",
        "difficulty": "7/8",
        "img": "true",
        "q": "$OABC$ is a parallelogram. $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OC} = \\mathbf{c}$.<br>$M$ is the midpoint of $AB$.<br>$N$ is a point on $CB$ such that $CN : NB = 1 : 2$.<br>(a) Find the vector $\\overrightarrow{OM}$ in terms of $\\mathbf{a}$ and $\\mathbf{c}$.<br>(b) Find the vector $\\overrightarrow{MN}$ in terms of $\\mathbf{a}$ and $\\mathbf{c}$. Give your answer in its simplest form.",
        "steps": [
            "For part (a), we navigate from $O$ to $M$ via $A$. The path is $\\overrightarrow{OA} + \\overrightarrow{AM}$.",
            "Because $OABC$ is a parallelogram, vector $\\overrightarrow{AB}$ is identical to $\\overrightarrow{OC}$, which is $\\mathbf{c}$.",
            "Since $M$ is the midpoint of $AB$, $\\overrightarrow{AM} = \\dfrac{1}{2}\\mathbf{c}$. Therefore, $\\overrightarrow{OM} = \\mathbf{a} + \\dfrac{1}{2}\\mathbf{c}$.",
            "For part (b), we navigate from $M$ to $N$. We can use the path $\\overrightarrow{MB} + \\overrightarrow{BN}$.",
            "Vector $\\overrightarrow{MB}$ is the remaining half of $AB$, so $\\overrightarrow{MB} = \\dfrac{1}{2}\\mathbf{c}$.",
            "Vector $\\overrightarrow{CB}$ is identical to $\\overrightarrow{OA}$, which is $\\mathbf{a}$. Since $CN:NB = 1:2$, $BN$ is going 'backwards' along $CB$ and represents $\\dfrac{2}{3}$ of the line. So $\\overrightarrow{BN} = -\\dfrac{2}{3}\\mathbf{a}$.",
            "Adding the components together gives $\\overrightarrow{MN} = \\dfrac{1}{2}\\mathbf{c} - \\dfrac{2}{3}\\mathbf{a}$.",
            "Final Answer: $$(a)\\ \\mathbf{a} + \\dfrac{1}{2}\\mathbf{c},\\ (b)\\ \\dfrac{1}{2}\\mathbf{c} - \\dfrac{2}{3}\\mathbf{a}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Direction is Everything",
            "content": "A very common mistake in part (b) is defining $\\overrightarrow{BN}$ as $+\\dfrac{2}{3}\\mathbf{a}$. You must look at the arrow direction defined by the parallel sides! Vector $\\overrightarrow{CB}$ travels in the same direction as $\\mathbf{a}$. Because $N$ to $B$ is a forward movement, moving from $M$ to $B$ and then 'down' to $N$ means you are fighting the flow of $\\mathbf{a}$, hence the negative sign."
        },
        "payhip_link": "https://payhip.com/b/wzbn9",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 10 June
    {
        "id": "003161",
        "date": "10 June 2026",
        "major_area": "Geometry",
        "topic": "Similarity",
        "subtopic": "Solids and the Linear, Area, Volume Relationship",
        "difficulty": "8/9",
        "q": "Two mathematically similar metal statues are made from the exact same alloy.<br>The mass of the smaller statue is $400\\text{ g}$. The mass of the larger statue is $1350\\text{ g}$.<br>The base area of the smaller statue is $48\\text{ cm}^2$.<br>Calculate the base area of the larger statue.",
        "steps": [
            "Because the statues are made of the same alloy (identical density), the ratio of their masses is exactly equal to the ratio of their volumes.",
            "We find the volume scale factor ($k^3$) by dividing the masses: $k^3 = \\dfrac{1350}{400} = \\dfrac{27}{8}$.",
            "To find the linear scale factor ($k$), we take the cube root of the volume scale factor: $k = \\sqrt[3]{\\dfrac{27}{8}} = \\dfrac{3}{2} = 1.5$.",
            "We now find the area scale factor ($k^2$) by squaring the linear scale factor: $k^2 = 1.5^2 = 2.25$.",
            "Finally, we multiply the base area of the smaller statue by the area scale factor: $48 \\times 2.25 = 108$.",
            "Final Answer: $$108\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Mass implies Volume",
            "content": "Cambridge 0580 questions rarely give you the 'volume' outright anymore. They will give you 'mass' or 'capacity' or 'litres' to test if you understand that these physical properties scale three-dimensionally ($k^3$). If density is constant, mass is a perfect substitute for volume!"
        },
        "payhip_link": "https://payhip.com/b/e9UMS",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 11 June
    {
        "id": "003162",
        "date": "11 June 2026",
        "major_area": "Mensuration",
        "topic": "3D Shapes",
        "subtopic": "Arcs and Sectors",
        "difficulty": "A/A*",
        "img": "true",
        "q": "A sector of a circle has a radius of $12\\text{ cm}$ and a sector angle of $150^\\circ$.<br>The straight edges of the sector are folded and joined together to form the curved surface of a hollow right circular cone.<br>(a) Calculate the base radius of the resulting cone.<br>(b) Calculate the exact vertical height of the cone, giving your answer as a surd.",
        "steps": [
            "For part (a), the arc length of the 2D sector becomes the entire circumference of the 3D cone's base.",
            "Arc length $= \\dfrac{150}{360} \\times 2 \\times \\pi \\times 12 = \\dfrac{5}{12} \\times 24\\pi = 10\\pi\\text{ cm}$.",
            "Equating this to the cone's base circumference: $2\\pi r = 10\\pi$. Dividing by $2\\pi$ yields $r = 5\\text{ cm}$.",
            "For part (b), the original radius of the sector ($12\\text{ cm}$) becomes the slant height ($l$) of the cone.",
            "We form a right-angled triangle inside the cone using the height ($h$), the base radius ($r=5$), and the slant height ($l=12$).",
            "Using Pythagoras' theorem: $h^2 + 5^2 = 12^2$.",
            "Calculation: $h^2 = 144 - 25 = 119$. Taking the square root gives the exact height.",
            "Final Answer: $$(a)\\ 5\\text{ cm},\\ (b)\\ \\sqrt{119}\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Folding Geometry",
            "content": "This is a classic 'transformation of shape' question. You must memorize the physical reality of folding a sector: the arc length wraps around to become the new circular base, and the flat, straight edge of the paper becomes the slanted outer wall of the cone. Drawing a quick sketch of the transition makes the math instantly obvious."
        },
        "payhip_link": "https://payhip.com/b/gR9jw",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 12 June
    {
        "id": "003163",
        "date": "12 June 2026",
        "major_area": "Algebra",
        "topic": "Sequences",
        "subtopic": "Sequences",
        "difficulty": "7/8",
        "q": "The first four terms of a sequence are $5, 14, 27, 44...$<br>(a) Find an expression, in terms of $n$, for the $n^{\\text{th}}$ term of this sequence.<br>(b) Is 300 a term in this sequence? Show working to justify your answer.",
        "steps": [
            "For part (a), we find the first differences between the terms: $9, 13, 17$.",
            "The second differences are constant: $4, 4$. A constant second difference proves it is a quadratic sequence ($an^2 + bn + c$).",
            "The coefficient $a$ is half the second difference: $4 \\div 2 = 2$. Our formula begins with $2n^2$.",
            "We generate the sequence for $2n^2$ ($2, 8, 18, 32$) and subtract it from the original sequence ($5, 14, 27, 44$).",
            "This yields a linear remainder sequence: $3, 6, 9, 12$. The $n^{\\text{th}}$ term for this linear sequence is $3n$.",
            "Combining them gives the final formula: $2n^2 + 3n$.",
            "For part (b), we set the formula equal to the target: $2n^2 + 3n = 300$.",
            "Rearranging into a quadratic: $2n^2 + 3n - 300 = 0$.",
            "Using the quadratic formula: $n = \\dfrac{-3 \\pm \\sqrt{9 - 4(2)(-300)}}{4} = \\dfrac{-3 \\pm \\sqrt{2409}}{4}$.",
            "Since $\\sqrt{2409}$ is not an integer (it is approx $49.08$), $n$ will not be a whole number. Therefore, 300 is not a term.",
            "Final Answer: $$(a)\\ 2n^2 + 3n,\\ (b)\\ \\text{No, } n \\text{ is not an integer}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Quadratic Proofs",
            "content": "To prove a number is NOT in a quadratic sequence, you must set up the full quadratic equation, equal to zero, and attempt to solve it. If the discriminant ($b^2 - 4ac$) is not a perfect square, it is physically impossible for the root $n$ to be an integer. This is the fastest way to prove the negative."
        },
        "payhip_link": "https://payhip.com/b/5HqEG",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
   // 13 June (Rewritten)
    {
        "id": "003164",
        "date": "13 June 2026",
        "major_area": "Statistics",
        "topic": "Histograms",
        "subtopic": "Histograms",
        "difficulty": "8/9",
        "img": "true",
        "q": "The histogram shows information about the mass, $m$ grams, of 120 tomatoes. The bar for $70 < m \\le 100$ has not been drawn.<br><br><table style='border-collapse:collapse;width:100%;text-align:center;' border='1'><tr><th style='padding:6px;'>Mass ($m$ grams)</th><th style='padding:6px;'>Frequency</th></tr><tr><td style='padding:6px;'>$0 < m \\le 40$</td><td style='padding:6px;'>30</td></tr><tr><td style='padding:6px;'>$40 < m \\le 50$</td><td style='padding:6px;'></td></tr><tr><td style='padding:6px;'>$50 < m \\le 70$</td><td style='padding:6px;'></td></tr><tr><td style='padding:6px;'>$70 < m \\le 100$</td><td style='padding:6px;'></td></tr></table><br>(a) Use the histogram to calculate the missing frequencies for the table.<br>(b) Calculate the frequency density for the final class ($70 < m \\le 100$).<br>(c) State the height of the bar that needs to be drawn to complete the histogram.",
        "steps": [
            "For part (a), Frequency = Frequency Density (FD) $\\times$ Class Width. We read the FD from the $y$-axis.",
            "Second class ($40-50$): Width is 10, FD is 3.6. Frequency = $10 \\times 3.6 = 36$.",
            "Third class ($50-70$): Width is 20, FD is 1.5. Frequency = $20 \\times 1.5 = 30$.",
            "To find the final missing frequency, we subtract the known frequencies from the total of 120.",
            "Calculation: $120 - (30 + 36 + 30) = 120 - 96 = 24$.",
            "For part (b), we calculate the FD for the final class: Frequency $\\div$ Class Width.",
            "Calculation: $24 \\div 30 = 0.8$.",
            "For part (c), in a standard histogram, the height of the bar is exactly equal to the Frequency Density.",
            "Final Answer: $$(a)\\ 36, 30, 24,\\ (b)\\ 0.8,\\ (c)\\ 0.8 \\text{ units}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Missing Bars",
            "content": "A classic Paper 4 structure! The examiner gives you the total frequency so you can work backwards to find the data for the 'missing' bar. Always remember the golden rule of histograms: Frequency equals the Area of the bar, and the Height equals the Frequency Density."
        },
        "payhip_link": "https://payhip.com/b/4AZYG",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 14 June
    {
        "id": "003165",
        "date": "14 June 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Simultaneous Equations (Linear – Quadratic)",
        "difficulty": "8/9",
        "q": "Solve the simultaneous equations:<br>$y = 2x + 1$<br>$x^2 + y^2 = 29$<br>Show clear algebraic working.",
        "steps": [
            "We substitute the linear expression for $y$ into the quadratic equation: $x^2 + (2x + 1)^2 = 29$.",
            "Expanding the double bracket carefully: $x^2 + (4x^2 + 4x + 1) = 29$.",
            "Collecting like terms: $5x^2 + 4x + 1 = 29$.",
            "Subtracting 29 from both sides to set the equation to zero gives $5x^2 + 4x - 28 = 0$.",
            "We can factorise this quadratic. We need factors of $5 \\times -28 = -140$ that sum to $+4$. These are $+14$ and $-10$.",
            "Factorising by grouping or inspection yields $(5x + 14)(x - 2) = 0$.",
            "This gives $x = -\\dfrac{14}{5} = -2.8$ and $x = 2$.",
            "Substitute these $x$-values into $y = 2x + 1$ to find the corresponding $y$-values.",
            "When $x = 2, y = 2(2) + 1 = 5$. When $x = -2.8, y = 2(-2.8) + 1 = -4.6$.",
            "Final Answer: $$(2, 5) \\text{ and } (-2.8, -4.6)$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Squaring the Bracket",
            "content": "The most catastrophic error in this topic is expanding $(2x + 1)^2$ as $4x^2 + 1$. You must remember the middle term ($+4x$)! Writing the bracket out twice as $(2x + 1)(2x + 1)$ and using FOIL guarantees you won't throw away 5 marks in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 15 June
    {
        "id": "003166",
        "date": "15 June 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Inverse Functions",
        "difficulty": "8/9",
        "q": "A function is defined as $f(x) = \\dfrac{3x + 2}{x - 3}$, where $x \\neq 3$.<br>(a) Find an expression for $f^{-1}(x)$.<br>(b) State the mathematical name given to a function where $f(x) = f^{-1}(x)$.",
        "steps": [
            "For part (a), we set $y = \\dfrac{3x + 2}{x - 3}$.",
            "To find the inverse, we interchange $x$ and $y$: $x = \\dfrac{3y + 2}{y - 3}$.",
            "Multiply both sides by $(y - 3)$ to clear the fraction: $x(y - 3) = 3y + 2$.",
            "Expand the bracket: $xy - 3x = 3y + 2$.",
            "Rearrange to group all terms containing $y$ on the left, and everything else on the right: $xy - 3y = 3x + 2$.",
            "Factorise $y$ out on the left-hand side: $y(x - 3) = 3x + 2$.",
            "Divide by $(x - 3)$ to isolate $y$: $y = \\dfrac{3x + 2}{x - 3}$.",
            "For part (b), because the inverse function is exactly identical to the original function, it is its own inverse.",
            "Final Answer: $$(a)\\ f^{-1}(x) = \\dfrac{3x + 2}{x - 3},\\ (b)\\ \\text{Self-inverse function}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Self-Inverse Functions",
            "content": "A self-inverse function is a beautiful piece of algebra. Geometrically, it means that if you plot $y = f(x)$, the graph is perfectly symmetrical across the line $y = x$. If you ever perform the inverse process and get exactly what you started with, don't panic—you haven't made a mistake, you've just discovered a self-inverse function!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 16 June (Two-Way Table)
    {
        "id": "003167",
        "date": "16 June 2026",
        "major_area": "Probability",
        "topic": "Probability",
        "subtopic": "Conditional Probability",
        "difficulty": "7/8",
        "img": "true",
        "q": "100 students were asked whether they prefer Tea or Coffee.<br>The partially completed two-way table shows some information about their choices.<br>(a) Complete the two-way table.<br>(b) A student is chosen at random. Calculate the probability that the student is a female who prefers Coffee.<br>(c) Given that a randomly chosen student prefers Tea, calculate the probability that the student is male.",
        "steps": [
            "For part (a), we fill in the missing gaps by ensuring every row and column adds up correctly.",
            "Female Total = 100 - 45 = 55.",
            "Female/Coffee = Total Coffee (65) - Male/Coffee (30) = 35.",
            "Male/Tea = Male Total (45) - Male/Coffee (30) = 15.",
            "Total Tea = 15 + 20 = 35. We check our columns and rows: 35 + 65 = 100. Perfect.",
            "<img src='images/06/i_16_ans.png' style='width:100%; max-width:450px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "For part (b), we look for the specific intersection of Female and Coffee, which is 35 out of the total 100 students.",
            "Calculation: $\\dfrac{35}{100}$, which simplifies to $\\dfrac{7}{20}$.",
            "For part (c), the phrase 'Given that' restricts our denominator. We only look at the 'Total Tea' column, which has 35 students.",
            "Out of these 35 students, 15 are male. The probability is $\\dfrac{15}{35}$.",
            "Simplifying the fraction gives $\\dfrac{3}{7}$.",
            "Final Answer: $$(b)\\ \\dfrac{7}{20},\\ (c)\\ \\dfrac{3}{7}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Table Conditioning",
            "content": "A two-way table is one of the most powerful tools for solving conditional probability at IGCSE. Whenever you see the phrase 'Given that...', you must immediately ignore the grand total of 100. Your new denominator is solely the total of the row or column specified by the condition."
        },
        "payhip_link": "https://payhip.com/b/XIALH",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
   {
        "id": "003168",
        "date": "17 June 2026",
        "major_area": "Trigonometry",
        "topic": "Trigonometry",
        "subtopic": "The Cosine Rule",
        "difficulty": "8/9",
        "img": "true",
        "q": "The points $A, B, C$, and $D$ lie on a circle to form a cyclic quadrilateral.<br>$AB = 8\\text{ cm}$, $BC = 6\\text{ cm}$, and angle $ABC = 110^\\circ$.<br>(a) Calculate the length of the diagonal $AC$.<br>(b) Calculate the size of angle $ADC$.<br>(c) Given that angle $CAD = 35^\\circ$, calculate the length of $CD$.",
        "steps": [
            "For part (a), we consider triangle $ABC$. We have two sides and the included angle, so we use the Cosine Rule: $AC^2 = 8^2 + 6^2 - 2(8)(6)\\cos(110^\\circ)$.",
            "Calculation: $AC^2 = 64 + 36 - 96(-0.3420...) = 100 + 32.834... = 132.834...$",
            "Taking the square root gives $AC \\approx 11.525...\\text{ cm}$. Rounding to 3 sig figs gives $11.5\\text{ cm}$.",
            "For part (b), opposite angles in a cyclic quadrilateral sum to $180^\\circ$.",
            "Calculation: angle $ADC = 180^\\circ - 110^\\circ = 70^\\circ$.",
            "For part (c), we look at triangle $ADC$. We know $AC = 11.525...\\text{ cm}$, angle $ADC = 70^\\circ$, and angle $CAD = 35^\\circ$. We use the Sine Rule: $\\dfrac{CD}{\\sin(35^\\circ)} = \\dfrac{11.525...}{\\sin(70^\\circ)}$.",
            "Calculation: $CD = \\dfrac{11.525... \\times \\sin(35^\\circ)}{\\sin(70^\\circ)} \\approx 7.035...\\text{ cm}$.",
            "Final Answer: $$(a)\\ 11.5\\text{ cm},\\ (b)\\ 70^\\circ,\\ (c)\\ 7.04\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Bridging Triangles",
            "content": "In compound geometry questions, a shared diagonal like $AC$ is the 'bridge' that carries information from one triangle into the next. Always keep the full, unrounded value of the bridge ($\\sqrt{132.834}$) in your calculator memory for use in the subsequent steps to ensure your final answer is perfectly accurate."
        },
        "payhip_link": "https://payhip.com/b/KLYAp",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 18 June
    {
        "id": "003169",
        "date": "18 June 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Exponential Growth and Decay",
        "difficulty": "8/9",
        "q": "The population of a city grows exponentially at a constant rate of $r\\%$ per year.<br>In 2020, the population was $150,000$. By 2025, the population had risen to $182,498$.<br>(a) Calculate the value of $r$, giving your answer to 1 decimal place.<br>(b) Assuming this growth rate continues, predict the population in the year 2030, giving your answer to the nearest whole number.",
        "steps": [
            "For part (a), we set up the compound growth formula: $150000 \\times \\left(1 + \\dfrac{r}{100}\\right)^5 = 182498$.",
            "Divide both sides by 150000: $\\left(1 + \\dfrac{r}{100}\\right)^5 = \\dfrac{182498}{150000} = 1.216653...$",
            "Take the 5th root of both sides: $1 + \\dfrac{r}{100} = \\sqrt[5]{1.216653...} = 1.039999...$",
            "Subtract 1 and multiply by 100 to find $r$. $r = 3.9999...$ which rounds exactly to $4.0\\%$.",
            "For part (b), the year 2030 is a further 5 years of growth from 2025.",
            "We take the 2025 population and multiply by the growth multiplier $1.04$ to the power of 5: $182498 \\times 1.04^5$.",
            "Calculation: $182498 \\times 1.21665... = 222037.2...$ people.",
            "Final Answer: $$(a)\\ 4.0\\%,\\ (b)\\ 222,037$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Roots for Rates",
            "content": "Finding the interest rate requires working backwards through powers. Make sure you know where the $x\\sqrt{y}$ button is on your scientific calculator! A common error is dividing by 5 instead of taking the 5th root. Always check your answer logically: a $4\\%$ growth rate is a perfectly realistic real-world scenario."
        },
        "payhip_link": "https://payhip.com/b/JrS9d",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 19 June
    {
        "id": "003170",
        "date": "19 June 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Percentage Change and Interest",
        "difficulty": "8/9",
        "q": "Elias invests $\\$12,000$ in a high-yield account that pays compound interest at a rate of $4.2\\%$ per year.<br>At the end of 5 years, he withdraws the entire amount and pays a $1.5\\%$ withdrawal tax on the total balance.<br>(a) Calculate the total amount Elias has after the tax is deducted.<br>(b) Calculate the overall percentage profit he made on his initial $\\$12,000$ investment, giving your answer to 1 decimal place.",
        "steps": [
            "For part (a), we first calculate the value of the investment before tax. The growth multiplier is $1.042$.",
            "Calculation: $12000 \\times (1.042)^5 = 12000 \\times 1.22839... \\approx \\$14740.76$.",
            "A $1.5\\%$ tax means he keeps $98.5\\%$ of the money. We multiply the balance by the tax multiplier $0.985$.",
            "Calculation: $14740.76 \\times 0.985 \\approx \\$14519.65$.",
            "For part (b), we find the actual profit by subtracting the initial investment from the final amount: $14519.65 - 12000 = \\$2519.65$.",
            "To find the percentage profit, we divide the profit by the original amount and multiply by 100.",
            "Calculation: $(2519.65 \\div 12000) \\times 100 = 20.997...\\%$.",
            "Rounding to 1 decimal place gives $21.0\\%$.",
            "Final Answer: $$(a)\\ \\$14519.65,\\ (b)\\ 21.0\\%$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Chain Multipliers",
            "content": "In Paper 4, you should aim to do this entire calculation in a single unbroken chain on your calculator: $12000 \\times 1.042^5 \\times 0.985$. Writing down intermediate steps is great for method marks, but re-typing rounded decimals back into your calculator is the number one cause of lost accuracy marks in financial maths."
        },
        "payhip_link": "https://payhip.com/b/Ebcut",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 20 June
    {
        "id": "003171",
        "date": "20 June 2026",
        "major_area": "Algebra",
        "topic": "Changing the Subject of a Formula",
        "subtopic": "Changing the Subject of a Formula",
        "difficulty": "8/9",
        "q": "Rearrange the formula to make $x$ the subject:<br>$$y = \\dfrac{3x^2 - 5}{2x^2 + w}$$<br>Show all of your algebraic steps clearly.",
        "steps": [
            "We begin by multiplying both sides by the denominator to clear the fraction: $y(2x^2 + w) = 3x^2 - 5$.",
            "Next, we expand the bracket on the left-hand side: $2x^2y + wy = 3x^2 - 5$.",
            "We must collect all terms containing the target subject ($x^2$) on one side of the equation. We subtract $2x^2y$ from both sides, and add $5$ to both sides.",
            "This gives: $wy + 5 = 3x^2 - 2x^2y$.",
            "We factorise $x^2$ out of the right-hand side: $wy + 5 = x^2(3 - 2y)$.",
            "To isolate $x^2$, we divide both sides by the bracket: $x^2 = \\dfrac{wy + 5}{3 - 2y}$.",
            "Finally, we take the square root of both sides. Because we are taking a square root algebraically, we must include the $\\pm$ symbol.",
            "Final Answer: $$x = \\pm\\sqrt{\\dfrac{wy + 5}{3 - 2y}}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Factorising Step",
            "content": "Whenever your required subject appears more than once in the equation (here, as $3x^2$ and $2x^2y$), you cannot simply 'move' things to isolate it. You absolutely must get them on the same side and factorise the subject out into a single term. Without that factorisation step, the question is impossible to solve."
        },
        "payhip_link": "https://payhip.com/b/Ipgz3",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 21 June
    {
        "id": "003172",
        "date": "21 June 2026",
        "major_area": "Geometry",
        "topic": "Circle Theorems",
        "subtopic": "Circle Theorems 2",
        "difficulty": "A*",
        "img": "true",
        "q": "The points $A, B, C$, and $D$ lie on the circumference of a circle, forming a cyclic quadrilateral.<br>The angles are given algebraically as:<br>$\\angle DAB = (4x + 3y)^\\circ$<br>$\\angle ABC = (5x + 3y)^\\circ$<br>$\\angle BCD = (6x + y)^\\circ$<br>$\\angle CDA = (x + 3y)^\\circ$<br>(a) Set up a pair of simultaneous equations in terms of $x$ and $y$.<br>(b) Solve the equations to find the values of $x$ and $y$.<br>(c) Calculate the size of the largest angle in the quadrilateral.",
        "steps": [
            "For part (a), we use the cyclic quadrilateral property: opposite angles sum to $180^\\circ$.",
            "Pair 1 ($A$ and $C$): $(4x + 3y) + (6x + y) = 180 \\implies 10x + 4y = 180$. Dividing by 2 simplifies this to $5x + 2y = 90$.",
            "Pair 2 ($B$ and $D$): $(5x + 3y) + (x + 3y) = 180 \\implies 6x + 6y = 180$. Dividing by 6 simplifies this to $x + y = 30$.",
            "For part (b), we solve the system. From the second equation, $y = 30 - x$.",
            "Substitute into the first equation: $5x + 2(30 - x) = 90 \\implies 5x + 60 - 2x = 90$.",
            "This gives $3x = 30$, so $x = 10$. Substituting $x=10$ into $y = 30 - x$ gives $y = 20$.",
            "For part (c), we substitute $x=10$ and $y=20$ back into all four angle expressions.",
            "$A = 40 + 60 = 100^\\circ$. $B = 50 + 60 = 110^\\circ$. $C = 60 + 20 = 80^\\circ$. $D = 10 + 60 = 70^\\circ$.",
            "The largest angle is angle $B$.",
            "Final Answer: $$(a)\\ 5x + 2y = 90 \\text{ and } x + y = 30,\\ (b)\\ x = 10, y = 20,\\ (c)\\ 110^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Cross-Topic Synthesis",
            "content": "Cambridge 0580 Paper 4 loves to merge two completely different topics together. If a geometry question is flooded with $x$ and $y$ variables, stop thinking about geometry and start treating it as an algebra problem. Use the single geometric rule you know to build the equations, and let the algebra do the heavy lifting."
        },
        "payhip_link": "https://payhip.com/b/xrmnz",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 22 June
    {
        "id": "003173",
        "date": "22 June 2026",
        "major_area": "Mensuration",
        "topic": "Arcs and Sectors",
        "subtopic": "Arcs and Sectors",
        "difficulty": "8/9",
        "img": "true",
        "q": "The diagram shows a sector of a circle with centre $O$ and radius $12\\text{ cm}$. The angle of the sector is $150^\\circ$.<br>A chord joins the two ends of the arc, splitting the sector into a triangle and a shaded segment.<br>(a) Calculate the exact area of the entire sector in terms of $\\pi$.<br>(b) Calculate the area of the shaded segment. Give your answer to 3 significant figures.",
        "steps": [
            "For part (a), the area of a sector is given by the formula $\\dfrac{\\theta}{360} \\times \\pi r^2$.",
            "Calculation: $\\dfrac{150}{360} \\times \\pi \\times 12^2 = \\dfrac{5}{12} \\times 144\\pi = 5 \\times 12\\pi = 60\\pi\\text{ cm}^2$.",
            "For part (b), the area of the segment is the Area of the Sector minus the Area of the Triangle.",
            "We calculate the area of the triangle using the sine formula: $\\text{Area} = \\dfrac{1}{2}ab\\sin(C)$.",
            "Calculation: $\\dfrac{1}{2} \\times 12 \\times 12 \\times \\sin(150^\\circ) = 72 \\times 0.5 = 36\\text{ cm}^2$.",
            "We now subtract the triangle from the sector: $60\\pi - 36$.",
            "Using a calculator: $188.495... - 36 = 152.495...\\text{ cm}^2$.",
            "Final Answer: $$(a)\\ 60\\pi\\text{ cm}^2,\\ (b)\\ 152\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Segment Formula",
            "content": "There is no single formula for the area of a segment. You must always think of it as a subtraction process: 'Pizza Slice minus Triangle'. It perfectly tests your ability to use the $\\dfrac{1}{2}ab\\sin(C)$ formula in a context outside of standard trigonometry."
        },
        "payhip_link": "https://payhip.com/b/gR9jw",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 23 June
    {
        "id": "003174",
        "date": "23 June 2026",
        "major_area": "Transformations",
        "topic": "Transformations",
        "subtopic": "Transformations",
        "difficulty": "8/9",
        "img": "true",
        "q": "Triangle $A$ has vertices at $(2, 2)$, $(6, 2)$ and $(2, 6)$.<br>Triangle $A$ is mapped onto Triangle $B$ by an enlargement with scale factor $-0.5$ and centre of enlargement $(4, 4)$.<br>(a) Calculate the coordinates of the vertices of Triangle $B$.<br>(b) Describe fully the single transformation that maps Triangle $B$ back onto Triangle $A$.",
        "steps": [
            "For part (a), we measure the vector distances from the centre $(4, 4)$ to the vertices of $A$, multiply them by $-0.5$, and apply them back to the centre.",
            "Vertex 1 $(2, 2)$: Vector from centre is $\\begin{pmatrix} -2 \\\\ -2 \\end{pmatrix}$. Multiply by $-0.5$ gives $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$. New point: $(4+1, 4+1) = (5, 5)$.",
            "Vertex 2 $(6, 2)$: Vector from centre is $\\begin{pmatrix} 2 \\\\ -2 \\end{pmatrix}$. Multiply by $-0.5$ gives $\\begin{pmatrix} -1 \\\\ 1 \\end{pmatrix}$. New point: $(4-1, 4+1) = (3, 5)$.",
            "Vertex 3 $(2, 6)$: Vector from centre is $\\begin{pmatrix} -2 \\\\ 2 \\end{pmatrix}$. Multiply by $-0.5$ gives $\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$. New point: $(4+1, 4-1) = (5, 3)$.",
            "For part (b), the reverse transformation must undo the scale factor. The reciprocal of $-0.5$ is $-2$. The centre of enlargement remains the exact same.",
            "Final Answer: $$(a)\\ (5, 5), (3, 5), (5, 3),\\ (b)\\ \\text{Enlargement, Scale Factor } -2\\text{, Centre } (4, 4)$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Negative Scale Factors",
            "content": "A negative scale factor pushes the image through the centre of enlargement and out the other side, meaning the shape will be inverted (upside down). If your final coordinates produce a triangle facing the same way as the original, you have missed the negative sign!"
        },
        "payhip_link": "https://payhip.com/b/U2nMw",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 24 June
    {
        "id": "003175",
        "date": "24 June 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Limits of Accuracy",
        "difficulty": "8/9",
        "q": "A car travels a distance of $340\\text{ km}$, measured correct to the nearest $10\\text{ km}$.<br>It uses $28\\text{ litres}$ of fuel, measured correct to the nearest litre.<br>Calculate the lower bound for the fuel consumption of the car, measured in kilometres per litre ($\\text{km/l}$).<br>Give your answer to 2 decimal places.",
        "steps": [
            "We first establish the bounds for both measurements.",
            "Distance is to the nearest $10\\text{ km}$, so the error margin is $\\pm 5\\text{ km}$. Lower Bound = $335\\text{ km}$, Upper Bound = $345\\text{ km}$.",
            "Fuel is to the nearest $1\\text{ litre}$, so the error margin is $\\pm 0.5\\text{ l}$. Lower Bound = $27.5\\text{ l}$, Upper Bound = $28.5\\text{ l}$.",
            "Fuel consumption is calculated as Distance $\\div$ Fuel. To find the lower bound (minimum possible value) of a division, we must divide the smallest possible numerator by the largest possible denominator.",
            "Calculation: Minimum Consumption = Lower Bound Distance $\\div$ Upper Bound Fuel.",
            "Substitution: $335 \\div 28.5 = 11.75438...$",
            "Rounding the result to 2 decimal places gives $11.75$.",
            "Final Answer: $$11.75\\text{ km/l}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Division Bounds",
            "content": "I cannot stress this enough: The Lower Bound of a calculation does not mean 'use all the lower bounds'. In a division formula ($A \\div B$), making the denominator ($B$) bigger makes the overall result smaller. Therefore, the absolute minimum result comes from Smallest $\\div$ Biggest."
        },
        "payhip_link": "https://payhip.com/b/9LFtZ",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 25 June
    {
        "id": "003176",
        "date": "25 June 2026",
        "major_area": "Statistics",
        "topic": "Data Handling",
        "subtopic": "Cumulative Frequency Diagrams",
        "difficulty": "6/7",
        "img": "true",
        "q": "The cumulative frequency graph shows information about the heights, $h\\text{ cm}$, of 80 plants.<br>Use the graph to find an estimate for:<br>(a) the median height.<br>(b) the interquartile range.<br>(c) the number of plants with a height greater than $45\\text{ cm}$.",
        "steps": [
            "For part (a), the median is the value at half of the total frequency ($80 \\div 2 = 40$). Reading across from 40 on the y-axis down to the x-axis gives $40\\text{ cm}$.",
            "For part (b), we need the Upper Quartile (UQ) and Lower Quartile (LQ).",
            "The UQ is at $75\\%$ of the frequency: $0.75 \\times 80 = 60$. Reading across from 60 gives $47\\text{ cm}$.",
            "The LQ is at $25\\%$ of the frequency: $0.25 \\times 80 = 20$. Reading across from 20 gives $34\\text{ cm}$.",
            "The Interquartile Range (IQR) is $UQ - LQ = 47 - 34 = 13\\text{ cm}$.",
            "For part (c), we find $45\\text{ cm}$ on the x-axis and read UP to the curve, then ACROSS to the y-axis. This gives a cumulative frequency of $55$.",
            "This means 54 plants are $45\\text{ cm}$ or <strong>shorter</strong>. The number of plants <em>taller<em> than $45\\text{ cm}$ is $80 - 55 = 25$.",
            "Final Answer: $$(a)\\ 40\\text{ cm},\\ (b)\\ 13\\text{ cm},\\ (c)\\ 25$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: 'Greater Than' Trap",
            "content": "In part (c), the graph tells you how many plants are <em>>up to</em> a certain height. When asked for 'greater than' or 'taller than', you must always remember to subtract your reading from the total frequency (80). Writing down 54 here is one of the most common dropped marks in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/NhqEx",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 26 June
    {
        "id": "003177",
        "date": "26 June 2026",
        "major_area": "Algebra",
        "topic": "Indices",
        "subtopic": "Indices II",
        "difficulty": "8/9",
        "q": "Find the value of $x$ in the equation: $$4^{2x+1} \\times 8^{x-1} = 32$$<br>Show all your algebraic working.",
        "steps": [
            "We must express every term in the equation using the same base number. The numbers 4, 8, and 32 are all powers of 2.",
            "We rewrite the equation as: $(2^2)^{2x+1} \\times (2^3)^{x-1} = 2^5$.",
            "Using the power law $(a^m)^n = a^{mn}$, we expand the indices: $2^{4x+2} \\times 2^{3x-3} = 2^5$.",
            "Using the multiplication law $a^m \\times a^n = a^{m+n}$, we add the indices on the left: $2^{(4x+2) + (3x-3)} = 2^5$.",
            "Simplifying the index gives $2^{7x-1} = 2^5$.",
            "Since the bases are identical, the indices must be equal. We equate the indices: $7x - 1 = 5$.",
            "Adding 1 gives $7x = 6$. Dividing by 7 yields the final value for $x$.",
            "Final Answer: $$x = \\dfrac{6}{7}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Base Equality",
            "content": "Whenever you see an equation where the large numbers are 2, 4, 8, 16, or 32, immediately convert everything to base 2. Once the bases match, you can completely ignore them and simply solve the linear equation created by the powers. Use brackets when substituting the new base to avoid expansion errors."
        },
        "payhip_link": "https://payhip.com/b/0RBC9",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 27 June
    {
        "id": "003178",
        "date": "27 June 2026",
        "major_area": "Geometry",
        "topic": "Angles",
        "subtopic": "Polygons and Circles",
        "difficulty": "7/8",
        "q": "The interior angle of a regular polygon is $144^\\circ$ larger than its exterior angle.<br>Calculate the number of sides the polygon has.",
        "steps": [
            "We know two fundamental rules about the angles of any regular polygon: Interior + Exterior = $180^\\circ$.",
            "The question gives us a second relationship: Interior = Exterior + $144^\\circ$.",
            "Let the exterior angle be $x$. The interior angle is $x + 144$.",
            "Substituting these into the first rule gives: $(x + 144) + x = 180$.",
            "Simplifying gives $2x + 144 = 180$. Subtracting 144 yields $2x = 36$.",
            "Dividing by 2 gives the exterior angle: $x = 18^\\circ$.",
            "To find the number of sides, we divide $360^\\circ$ by the exterior angle: $360 \\div 18 = 20$.",
            "Final Answer: $$20\\text{ sides}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Algebraic Geometry",
            "content": "This is a classic Cambridge puzzle. Instead of guessing numbers, set it up as a simple linear equation. Furthermore, always make the *exterior* angle your target variable ($x$). Once you know the exterior angle, finding the number of sides is a trivial $360 \\div x$ calculation."
        },
        "payhip_link": "https://payhip.com/b/InbTp",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 28 June
    {
        "id": "003179",
        "date": "28 June 2026",
        "major_area": "Mensuration",
        "topic": "3D Shapes",
        "subtopic": "3D Compound Shapes",
        "difficulty": "8/9",
        "img": "true",
        "q": "A solid toy is made by attaching a solid hemisphere to the flat base of a solid right circular cone.<br>The cone and the hemisphere share a common radius of $3\\text{ cm}$.<br>The slant height of the cone is $8\\text{ cm}$.<br>Calculate the total surface area of the toy. Give your answer exactly, in terms of $\\pi$.",
        "steps": [
            "The total surface area of the toy consists of the curved surface area of the cone and the curved surface area of the hemisphere. (Note: the flat circular bases are joined together inside the toy, so they are not part of the surface area).",
            "First, calculate the curved surface area of the cone using the formula $\\pi r l$.",
            "Calculation: $\\pi \\times 3 \\times 8 = 24\\pi\\text{ cm}^2$.",
            "Next, calculate the curved surface area of the hemisphere. The surface area of a full sphere is $4\\pi r^2$, so a hemisphere is $2\\pi r^2$.",
            "Calculation: $2 \\times \\pi \\times 3^2 = 18\\pi\\text{ cm}^2$.",
            "We sum these two areas to find the total surface area of the toy.",
            "Calculation: $24\\pi + 18\\pi = 42\\pi$.",
            "Final Answer: $$42\\pi\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Internal Faces",
            "content": "A very common error when dealing with compound 3D solids is blindly applying the 'Total Surface Area' formula for both shapes. Because the flat faces are glued together, they are 'inside' the object and cannot be touched. You must only calculate the outer curved components."
        },
        "payhip_link": "https://payhip.com/b/Y6gsh",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 29 June
    {
        "id": "003180",
        "date": "29 June 2026",
        "major_area": "Algebra",
        "topic": "Quadratics",
        "subtopic": "Completing the Square",
        "difficulty": "A*",
        "q": "(a) Express $2x^2 - 12x + 23$ in the form $a(x - h)^2 + k$, where $a, h,$ and $k$ are constants.<br>(b) Hence, write down the coordinates of the minimum point of the curve $y = 2x^2 - 12x + 23$.",
        "steps": [
            "For part (a), we first factorise the coefficient of $x^2$ out of the $x$ terms only: $2(x^2 - 6x) + 23$.",
            "We complete the square for the expression inside the bracket. Half of $-6$ is $-3$, so we use $(x - 3)^2 - (-3)^2$.",
            "Substituting this back: $2[(x - 3)^2 - 9] + 23$.",
            "We expand the outer bracket, ensuring we multiply the $-9$ by $2$: $2(x - 3)^2 - 18 + 23$.",
            "Simplifying the constants gives $2(x - 3)^2 + 5$.",
            "For part (b), an expression in the form $a(x - h)^2 + k$ has its minimum point at $(h, k)$.",
            "The bracket is $(x - 3)$, meaning the $x$-coordinate is $+3$. The constant is $+5$, meaning the $y$-coordinate is $5$.",
            "Final Answer: $$(a)\\ 2(x - 3)^2 + 5,\\ (b)\\ (3, 5)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Non-Monic Completion",
            "content": "Completing the square when $a > 1$ is arguably the hardest purely algebraic skill on the syllabus. Factoring out the '2' from the $x$ terms but leaving the constant (+23) alone on the outside is the safest way to avoid arithmetic disasters during the final expansion step."
        },
        "payhip_link": "https://payhip.com/b/NTGZX",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 30 June
    {
        "id": "003181",
        "date": "30 June 2026",
        "major_area": "Number",
        "topic": "Mixed Applications",
        "subtopic": "Fractions, Decimals, Percentages",
        "difficulty": "8/9",
        "q": "A sum of $\\$12,000$ is shared between Alice, Bob and Charlie.<br>Alice receives $\\dfrac{2}{5}$ of the money.<br>The remainder is shared between Bob and Charlie in the ratio $5 : 4$.<br>Bob invests his entire share in an account paying $3.2\\%$ per year compound interest.<br>Calculate the total value of Bob's investment after 4 years. Give your answer to the nearest dollar.",
        "steps": [
            "First, calculate Alice's share: $\\dfrac{2}{5} \\times 12000 = \\$4800$.",
            "Calculate the remainder left for Bob and Charlie: $12000 - 4800 = \\$7200$.",
            "The remainder is shared in the ratio $5 : 4$. The total number of parts is $5 + 4 = 9$.",
            "The value of one part is $7200 \\div 9 = \\$800$.",
            "Bob receives 5 parts. Bob's share $= 5 \\times 800 = \\$4000$.",
            "We now calculate Bob's compound interest. The multiplier for a $3.2\\%$ increase is $1.032$.",
            "The formula is $4000 \\times (1.032)^4$.",
            "Calculation: $4000 \\times 1.13427... = 4537.09...$",
            "Rounding to the nearest dollar gives $\\$4537$.",
            "Final Answer: $$\\$4537$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The Multi-Step Synthesis",
            "content": "This is a flawless example of a final Paper 4 question. It tests fractions, ratios, and compound interest in one continuous narrative. The key is simply treating it as three separate, 2-mark questions. Do not rush; write down 'Alice = ', 'Remainder = ', and 'Bob = ' explicitly to keep your logic clean."
        },
        "payhip_link": "https://payhip.com/b/Ebcut",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    }
]