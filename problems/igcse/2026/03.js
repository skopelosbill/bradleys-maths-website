const problemBank =[
    // 1 March
    {
        "id": "003060",
        "date": "1 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Scalar multiplication",
        "difficulty": "B/A",
        "q": "The points $A$ and $B$ have position vectors $\\mathbf{a}$ and $\\mathbf{b}$ respectively, relative to an origin $O$. Point $C$ lies on the line $AB$ produced such that $\\overrightarrow{AC} = 2\\overrightarrow{AB}$.<br>(a) Find the vector $\\overrightarrow{AB}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.<br>(b) Find the position vector of $C$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$, giving your answer in its simplest form.",
        "steps": [
            "For part (a), we find the vector from $A$ to $B$ by navigating through the origin: $\\overrightarrow{AB} = \\overrightarrow{AO} + \\overrightarrow{OB}$.",
            "Since $\\overrightarrow{AO} = -\\mathbf{a}$, we have $\\overrightarrow{AB} = -\\mathbf{a} + \\mathbf{b}$ or $\\mathbf{b} - \\mathbf{a}$.",
            "For part (b), we define the position vector of $C$ as the path from the origin: $\\overrightarrow{OC} = \\overrightarrow{OA} + \\overrightarrow{AC}$.",
            "Substituting the given relationship $\\overrightarrow{AC} = 2\\overrightarrow{AB}$, we obtain $\\overrightarrow{OC} = \\mathbf{a} + 2(\\mathbf{b} - \\mathbf{a})$.",
            "Expanding the bracket: $\\overrightarrow{OC} = \\mathbf{a} + 2\\mathbf{b} - 2\\mathbf{a}$.",
            "Collecting like terms yields the final position vector.",
            "Final Answer: $$(a)\\ \\mathbf{b} - \\mathbf{a},\\ (b)\\ 2\\mathbf{b} - \\mathbf{a}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Position Vector Logic",
            "content": "A position vector is always relative to the origin $O$. In IGCSE Extended problems, you must be careful to distinguish between a vector *between* two points and the *position* vector of a point. Always start your path at $O$ and use known segments as your 'roads' to reach your destination."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Vectors: Download the Extended Pack"
    },
    // 2 March
    {
        "id": "003061",
        "date": "2 March 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Completing the square",
        "difficulty": "A/A*",
        "q": "Consider the quadratic equation $2x^2 - 3x - 5 = 0$.<br>(a) Write $2x^2 - 3x - 5$ in the form $a(x + b)^2 + c$.<br>(b) Hence, solve the equation $2x^2 - 3x - 5 = 0$ without the use of a calculator.<br>(c) State the coordinates of the turning point of the graph of $y = 2x^2 - 3x - 5$.",
        "steps": [
            "For part (a), we first factorise out the coefficient of $x^2$ from the algebraic terms: $2(x^2 - \\dfrac{3}{2}x) - 5$.",
            "We complete the square inside the bracket by halving the $x$ coefficient: $(x - \\dfrac{3}{4})^2 - (\\dfrac{3}{4})^2$.",
            "Substituting this back: $2[(x - \\dfrac{3}{4})^2 - \\dfrac{9}{16}] - 5$.",
            "Distributing the 2: $2(x - \\dfrac{3}{4})^2 - \\dfrac{9}{8} - 5 = 2(x - \\dfrac{3}{4})^2 - \\dfrac{49}{8}$.",
            "For part (b), we set the expression to zero: $2(x - \\dfrac{3}{4})^2 = \\dfrac{49}{8}$.",
            "Dividing by 2 gives $(x - \\dfrac{3}{4})^2 = \\dfrac{49}{16}$. Taking square roots: $x - \\dfrac{3}{4} = \\pm \\dfrac{7}{4}$.",
            "Solutions: $x = \\dfrac{3+7}{4} = 2.5$ or $x = \\dfrac{3-7}{4} = -1$.",
            "For part (c), from the form in part (a), the turning point is $(-b, c)$.",
            "Final Answer: $$(a)\\ 2(x - \\dfrac{3}{4})^2 - \\dfrac{49}{8},\\ (b)\\ 2.5, -1,\\ (c)\\ (0.75, -6.125)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Non-Monic Completion",
            "content": "Completing the square when the coefficient of $x^2$ is not 1 (non-monic) is a frequent Grade 9/A* discriminator. You must factorise the 2 first. If you attempt to complete the square directly, you will encounter significant algebraic errors. The 'Hence' in part (b) is a command to use your result from (a), not the quadratic formula."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 3 March
    {
        "id": "003062",
        "date": "3 March 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Composite Functions",
        "difficulty": "B/A",
        "q": "The functions $f$ and $g$ are defined as $f(x) = 2x + 1$ and $g(x) = x^2 - 3$.<br>(a) Find an expression for $fg(x)$.<br>(b) Find an expression for $gf(x)$, giving your answer in its simplest form.<br>(c) Solve the equation $gf(x) = f(g(x))$.",
        "steps": [
            "For part (a), $fg(x)$ means we substitute $g(x)$ into $f(x)$: $f(x^2 - 3) = 2(x^2 - 3) + 1$.",
            "Expanding and simplifying: $2x^2 - 6 + 1 = 2x^2 - 5$.",
            "For part (b), $gf(x)$ means we substitute $f(x)$ into $g(x)$: $g(2x + 1) = (2x + 1)^2 - 3$.",
            "Expanding the bracket: $4x^2 + 4x + 1 - 3 = 4x^2 + 4x - 2$.",
            "For part (c), we set the two expressions equal: $4x^2 + 4x - 2 = 2x^2 - 5$.",
            "Rearranging into a quadratic: $2x^2 + 4x + 3 = 0$.",
            "Testing the discriminant: $b^2 - 4ac = 4^2 - 4(2)(3) = 16 - 24 = -8$.",
            "Since the discriminant is negative, there are no real solutions.",
            "Final Answer: $$(a)\\ 2x^2 - 5,\\ (b)\\ 4x^2 + 4x - 2,\\ (c)\\ \\text{No real solutions}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Order of Composition",
            "content": "A common misconception is that function composition is commutative ($fg = gf$). As demonstrated here, the results are entirely different. In Paper 4, you may find that equating them leads to a quadratic where you must check the discriminant to see if solutions exist."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 4 March
    {
        "id": "003063",
        "date": "4 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Sine rule",
        "difficulty": "B/C",
        "img": "true",
        "q": "In triangle $ABC$, $AB = 8\\text{ cm}$, $\\angle BAC = 40^\\circ$ and $\\angle ABC = 65^\\circ$.<br>(a) Calculate the size of angle $\\angle ACB$.<br>(b) Calculate the length of $AC$ to 3 significant figures.<br>(c) Calculate the area of triangle $ABC$.",
        "steps": [
            "For part (a), the sum of angles in a triangle is $180^\\circ$.",
            "Calculation: $\\angle ACB = 180^\\circ - (40^\\circ + 65^\\circ) = 75^\\circ$.",
            "For part (b), we use the Sine Rule: $\\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$.",
            "Substituting known values: $\\dfrac{AC}{\\sin 65^\\circ} = \\dfrac{8}{\\sin 75^\\circ}$.",
            "Rearranging: $AC = \\dfrac{8 \\times \\sin 65^\\circ}{\\sin 75^\\circ} \\approx 7.505...\\text{ cm}$.",
            "For part (c), we use $\\text{Area} = \\dfrac{1}{2}bc\\sin(A)$.",
            "Calculation: $\\dfrac{1}{2} \\times 7.505 \\times 8 \\times \\sin(40^\\circ) \\approx 19.29...\\text{ cm}^2$.",
            "Final Answer: $$(a)\\ 75^\\circ,\\ (b)\\ 7.51\\text{ cm},\\ (c)\\ 19.3\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Intermediate Accuracy",
            "content": "When calculating the area in part (c), always use the unrounded value for $AC$ from your calculator memory. If you use the rounded answer from part (b), you may introduce an error that affects the final significant figure of the area."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Geometry: Download the Extended Pack"
    },
    // 5 March
    {
        "id": "003064",
        "date": "5 March 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Negative indices",
        "difficulty": "B/C",
        "q": "Simplify fully the following expression, leaving your answer with only positive indices:<br>$$\\dfrac{5x^3 y^{-2}}{10x^{-1} y}$$",
        "steps": [
            "We treat the numbers, $x$ terms, and $y$ terms as three separate divisions.",
            "Dividing the coefficients: $\\dfrac{5}{10} = \\dfrac{1}{2}$.",
            "Dividing the $x$ terms using the index law $a^m \\div a^n = a^{m-n}$: $x^{3 - (-1)} = x^{3+1} = x^4$.",
            "Dividing the $y$ terms: $y^{-2 - 1} = y^{-3}$.",
            "We combine these to get $\\dfrac{1}{2} x^4 y^{-3}$.",
            "To express the answer with positive indices, we move $y^{-3}$ to the denominator as $y^3$.",
            "Final Answer: $$\\dfrac{x^4}{2y^3}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Negative Index Mastery",
            "content": "In Paper 2, subtraction of negative indices is a common pitfall. Ensure you write out $3 - (-1)$ explicitly to see the double negative. Also, remember that $y$ on the denominator has an implicit index of 1; forgetting this is a frequent cause of 'lost' index marks."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 6 March
    {
        "id": "003065",
        "date": "6 March 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Substitution",
        "difficulty": "B/A",
        "q": "Solve the following simultaneous equations to find the coordinates of the points of intersection:<br>$y = x + 1$<br>$x^2 + y^2 = 25$",
        "steps": [
            "We substitute the expression for $y$ from the first equation into the second: $x^2 + (x + 1)^2 = 25$.",
            "Expanding the bracket: $x^2 + (x^2 + 2x + 1) = 25$.",
            "Combining like terms and setting the quadratic to zero: $2x^2 + 2x - 24 = 0$.",
            "Dividing the entire equation by 2 to simplify: $x^2 + x - 12 = 0$.",
            "Factorising the quadratic: $(x + 4)(x - 3) = 0$. This gives $x = -4$ and $x = 3$.",
            "Substituting $x = -4$ into $y = x + 1$ gives $y = -3$.",
            "Substituting $x = 3$ into $y = x + 1$ gives $y = 4$.",
            "Final Answer: $$(-4, -3) \\text{ and } (3, 4)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Linear-Quadratic Pairs",
            "content": "Whenever you solve simultaneous equations where one is linear and one is quadratic, you should expect two pairs of solutions. Geometrically, this represents a line intersecting a circle. Always state your final answers as clear $(x, y)$ coordinate pairs to ensure you gain full communication marks."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 7 March
    {
        "id": "003066",
        "date": "7 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Parallel vectors",
        "difficulty": "B/A",
        "q": "The points $A$ and $B$ have position vectors $\\overrightarrow{OA} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$ and $\\overrightarrow{OB} = \\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}$. Point $C$ lies on the segment $AB$ such that $AC : CB = 1 : 2$.<br>(a) Find the vector $\\overrightarrow{AB}$ as a column vector.<br>(b) Find the position vector $\\overrightarrow{OC}$ as a column vector.",
        "steps": [
            "For part (a), the vector from $A$ to $B$ is found by $\\overrightarrow{OB} - \\overrightarrow{OA}$.",
            "Calculation: $\\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}$.",
            "For part (b), the path to $C$ from the origin is $\\overrightarrow{OC} = \\overrightarrow{OA} + \\overrightarrow{AC}$.",
            "Since the ratio $AC:CB$ is $1:2$, the segment $AC$ is $\\dfrac{1}{3}$ of the total vector $\\overrightarrow{AB}$.",
            "Calculation: $\\overrightarrow{AC} = \\dfrac{1}{3} \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 4/3 \\\\ 4/3 \\end{pmatrix}$.",
            "Now sum the vectors: $\\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} 4/3 \\\\ 4/3 \\end{pmatrix} = \\begin{pmatrix} 10/3 \\\\ 1/3 \\end{pmatrix}$.",
            "Final Answer: $$(a)\\ \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix},\\ (b)\\ \\begin{pmatrix} 10/3 \\\\ 1/3 \\end{pmatrix}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Ratio Partitioning",
            "content": "A common error in vector ratio problems is using the wrong fraction. If the ratio is $1:2$, the total number of parts is $3$, so $AC$ is $\\dfrac{1}{3}$ of $AB$, and $CB$ is $\\dfrac{2}{3}$ of $AB$. Always check that your fraction's denominator is the sum of the ratio parts."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Geometry: Download the Extended Pack"
    },
    // 8 March
    {
        "id": "003067",
        "date": "8 March 2026",
        "major_area": "Algebra",
        "topic": "Exponential Growth & Decay",
        "subtopic": "Compound Change",
        "difficulty": "B/A",
        "q": "The population of a town is 12,000. It increases by $3\\%$ per year for 5 years and then decreases by $2\\%$ the following year.<br>(a) Calculate the population at the end of the 5-year growth period.<br>(b) Calculate the final population at the end of the 6-year period, giving your answer to the nearest whole number.",
        "steps": [
            "For part (a), we identify the multiplier for a $3\\%$ increase: $1 + 0.03 = 1.03$.",
            "We apply the compound growth formula: $12000 \\times (1.03)^5$.",
            "Calculation: $12000 \\times 1.15927... \\approx 13,911$.",
            "For part (b), we take the population from part (a) and apply a $2\\%$ decrease. The multiplier is $1 - 0.02 = 0.98$.",
            "Calculation: $13911.28... \\times 0.98 \\approx 13,633.06...$.",
            "Rounding to the nearest whole number gives 13,633.",
            "Final Answer: $$(a)\\ 13,911,\\ (b)\\ 13,633$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Successive Multipliers",
            "content": "A common mistake is to try and calculate every year individually. In Paper 4, you are expected to use the multiplier method. For a population that grows and then decays, you can simply string the multipliers together: $12000 \\times (1.03)^5 \\times 0.98$. This maintains maximum precision for your final rounding step."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 9 March
    {
        "id": "003068",
        "date": "9 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Transformations",
        "subtopic": "Reflection",
        "difficulty": "A",
        "q": "A point $P$ has coordinates $(1, 3)$.<br>(a) Find the coordinates of the image of $P$ after it is reflected in the $y$-axis and then translated by the vector $\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$.<br>(b) Describe fully the single transformation equivalent to this combined movement.<br>(c) Find the coordinates of the image of $Q(1, 4)$ after it is translated by $\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$ and then reflected in the $y$-axis. State the single transformation equivalent to this movement.",
        "steps": [
            "For part (a), reflecting $(1, 3)$ in the $y$-axis changes the sign of the $x$-coordinate: $(-1, 3)$.",
            "Applying the translation $\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$ gives $(-1 + 4, 3 + 0) = (3, 3)$.",
            "For part (b), the points $(1, y)$ map to $(3, y)$. This is a reflection in the vertical line $x = 2$.",
            "For part (c), translating $(1, 4)$ by $\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$ gives $(5, 4)$.",
            "Reflecting $(5, 4)$ in the $y$-axis gives $(-5, 4)$.",
            "The points $(1, y)$ now map to $(-5, y)$. This is a reflection in the line $x = -2$.",
            "Final Answer: $$(a)\\ (3, 3),\\ (b)\\ \\text{Reflection in } x = 2,\\ (c)\\ (-5, 4), \\text{Reflection in } x = -2$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Transformation Order",
            "content": "Transformations are generally not commutative. As demonstrated in parts (a) and (c), changing the order of a reflection and a translation results in a completely different final position. In the exam, always follow the sequence strictly and use intermediate coordinates to ensure your final description is accurate."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Geometry: Download the Extended Pack"
    },
    // 10 March
    {
        "id": "003069",
        "date": "10 March 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Multiplying/dividing",
        "difficulty": "A/A*",
        "q": "Without using a calculator, simplify fully:<br>$$\\dfrac{x^2 - 9}{x^2 + x - 12} \\div \\dfrac{x^2 + x - 6}{x^2 + 4x}$$",
        "steps": [
            "We begin by changing the division into a multiplication by the reciprocal: $\\dfrac{x^2 - 9}{x^2 + x - 12} \\times \\dfrac{x^2 + 4x}{x^2 + x - 6}$.",
            "Next, we factorise every expression. $x^2 - 9$ is a difference of two squares: $(x - 3)(x + 3)$.",
            "$x^2 + x - 12$ factorises to $(x + 4)(x - 3)$.",
            "$x^2 + 4x$ factorises using a common factor: $x(x + 4)$.",
            "$x^2 + x - 6$ factorises to $(x + 3)(x - 2)$.",
            "Writing the full expression: $\\dfrac{(x - 3)(x + 3)}{(x + 4)(x - 3)} \\times \\dfrac{x(x + 4)}{(x + 3)(x - 2)}$.",
            "We now cancel the common factors: $(x - 3)$, $(x + 3)$, and $(x + 4)$.",
            "Final Answer: $$\\dfrac{x}{x - 2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Factorise Before Cancelling",
            "content": "A frequent error in Paper 2 is attempting to 'cross out' individual $x^2$ terms. You can only cancel common factors that are multiplied. Always factorise every term completely before attempting any simplification; usually, the factors are designed to cancel out perfectly in these Extended problems."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 11 March
    {
        "id": "003070",
        "date": "11 March 2026",
        "major_area": "Probability",
        "topic": "Conditional Probability",
        "subtopic": "Conditional Probability",
        "difficulty": "B/A",
        "q": "In a class of 30 students, 18 study French ($F$), 12 study Spanish ($S$), and 5 study both.<br>(a) Find the probability that a student studies French.<br>(b) Given that a randomly chosen student studies Spanish, calculate the probability that they also study French.",
        "steps": [
            "For part (a), the total number of students is 30, and 18 study French. The probability is $\\dfrac{18}{30}$.",
            "Simplifying the fraction: $\\dfrac{3}{5}$.",
            "For part (b), the 'Given that' condition restricts our sample space only to the 12 students who study Spanish.",
            "Of these 12 students, 5 also study French.",
            "The conditional probability is $\\dfrac{n(F \\cap S)}{n(S)} = \\dfrac{5}{12}$.",
            "Final Answer: $$(a)\\ \\dfrac{3}{5},\\ (b)\\ \\dfrac{5}{12}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Restricted Sample Space",
            "content": "The phrase 'Given that' is a command to ignore the rest of the total group. Your denominator must change from the total population (30) to the population of the given condition (12). This conceptual shift is the key to mastering conditional probability in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Probability: Download the Extended Pack"
    },
    // 12 March
    {
        "id": "003071",
        "date": "12 March 2026",
        "major_area": "Algebra",
        "topic": "Exponential Growth & Decay",
        "subtopic": "Compound Change",
        "difficulty": "A/A*",
        "q": "A radioactive substance has a mass of $160\\text{ g}$. After 12 hours, the mass has decreased to $20\\text{ g}$. Calculate the half-life of the substance without using a calculator.",
        "steps": [
            "We first determine the fraction of the mass remaining: $\\dfrac{20}{160} = \\dfrac{1}{8}$.",
            "We express this fraction as a power of 2: $\\dfrac{1}{8} = \\left(\\dfrac{1}{2}\\right)^3$.",
            "This indicates that the mass has been halved exactly 3 times over the 12-hour period.",
            "To find the duration of one half-life, we divide the total time by the number of halvings.",
            "Calculation: $12 \\div 3 = 4$ hours.",
            "Final Answer: $$4\\text{ hours}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Powers of Two",
            "content": "In the new 2025 Paper 2, half-life problems are solved by recognizing powers of 2. You won't need complex logarithms; simply divide the initial amount by 2 repeatedly until you reach the target. The number of steps you took is the number of half-lives that have passed."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 13 March
    {
        "id": "003072",
        "date": "13 March 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Gradient from tangents",
        "difficulty": "B/A",
        "q": "A curve has the equation $y = 2x^2 - 5x + 3$.<br>(a) Find the derivative $\\dfrac{dy}{dx}$.<br>(b) Find the gradient of the curve at the point where $x = 3$.<br>(c) Find the coordinates of the point on the curve where the gradient is 7.",
        "steps": [
            "For part (a), we differentiate using the rule $\\dfrac{d}{dx}(ax^n) = anx^{n-1}$.",
            "Calculation: $\\dfrac{dy}{dx} = 4x - 5$.",
            "For part (b), we substitute $x = 3$ into the gradient function.",
            "Calculation: $4(3) - 5 = 12 - 5 = 7$.",
            "For part (c), we set the gradient function to 7 and solve for $x$: $4x - 5 = 7 \\implies 4x = 12$. Thus, $x = 3$.",
            "To find the $y$-coordinate, we substitute $x = 3$ into the original equation: $y = 2(3^2) - 5(3) + 3$.",
            "Calculation: $y = 18 - 15 + 3 = 6$.",
            "Final Answer: $$(a)\\ 4x - 5,\\ (b)\\ 7,\\ (c)\\ (3, 6)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Derivative as a Tool",
            "content": "Always distinguish between the equation of the curve (the $y$-values) and the derivative of the curve (the gradient). If a question asks for a gradient, substitute into the derivative. If it asks for a coordinate, you must ensure you have both the $x$ and the $y$ values."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 14 March
    {
        "id": "003073",
        "date": "14 March 2026",
        "major_area": "Probability",
        "topic": "Basic Probability",
        "subtopic": "Sample Space Diagrams",
        "difficulty": "B/C",
        "q": "In a group of 40 students, 25 study Mathematics ($M$), 18 study Physics ($P$), and 10 study both.<br>(a) Find the number of students who study neither subject.<br>(b) A student is chosen at random. Find the probability that they study Physics but not Mathematics.",
        "steps": [
            "We begin by identifying the regions of a Venn diagram. The intersection $n(M \\cap P) = 10$.",
            "The number of 'Mathematics only' students is $25 - 10 = 15$.",
            "The number of 'Physics only' students is $18 - 10 = 8$.",
            "For part (a), the number of students studying at least one subject is $15 + 10 + 8 = 33$.",
            "The number studying neither is $40 - 33 = 7$.",
            "For part (b), there are 8 students in the 'Physics only' category.",
            "The probability is $\\dfrac{8}{40}$, which simplifies to $\\dfrac{1}{5}$.",
            "Final Answer: $$(a)\\ 7,\\ (b)\\ \\dfrac{1}{5}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Filling the Venn",
            "content": "Always start filling your Venn diagram from the center (the intersection) and work outwards. If you forget to subtract the 10 from the Mathematics and Physics totals, you will end up with more students than are in the actual group—a very common error in IGCSE Set Theory."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Statistics: Download the Extended Pack"
    },
    // 15 March
    {
        "id": "003074",
        "date": "15 March 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Rationalising denominators",
        "difficulty": "B/A",
        "q": "(a) Without using a calculator, rationalise the denominator and simplify fully: $$\\dfrac{3}{2 - \\sqrt{5}}$$<br>(b) Express $(2 + \\sqrt{5})^2$ in the form $a + b\\sqrt{5}$, where $a$ and $b$ are integers.",
        "steps": [
            "For part (a), we multiply the numerator and the denominator by the conjugate of the denominator, which is $2 + \\sqrt{5}$.",
            "The numerator becomes $3(2 + \\sqrt{5}) = 6 + 3\\sqrt{5}$.",
            "The denominator is expanded using the difference of two squares: $(2 - \\sqrt{5})(2 + \\sqrt{5}) = 4 - 5 = -1$.",
            "We divide the numerator by $-1$ to obtain the final simplified expression: $-6 - 3\\sqrt{5}$.",
            "For part (b), we expand the brackets: $(2 + \\sqrt{5})(2 + \\sqrt{5}) = 4 + 2\\sqrt{5} + 2\\sqrt{5} + 5$.",
            "Collecting like terms gives $9 + 4\\sqrt{5}$.",
            "Final Answer: $$(a)\\ -6 - 3\\sqrt{5},\\ (b)\\ 9 + 4\\sqrt{5}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Negative Denominators",
            "content": "A frequent error in Paper 2 is forgetting to distribute the negative sign when the denominator simplifies to $-1$. In this case, $4 - 5$ results in $-1$, which effectively negates every term in your numerator. Always perform a final sign check to ensure your answer is fully simplified."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 16 March
    {
        "id": "003075",
        "date": "16 March 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Differentiate sums of terms",
        "difficulty": "B/C",
        "q": "The equation of a curve is $y = 4x^3 - 2x^2 + 5x - 7$.<br>(a) Find the derivative $\\dfrac{dy}{dx}$.<br>(b) Calculate the gradient of the curve at the point where $x = -1$.",
        "steps": [
            "For part (a), we apply the power rule of differentiation, $\\dfrac{d}{dx}(ax^n) = anx^{n-1}$, to each term independently.",
            "Differentiating $4x^3$ gives $12x^2$.",
            "Differentiating $-2x^2$ gives $-4x$.",
            "Differentiating $5x$ gives $5$, and the constant $-7$ differentiates to $0$.",
            "The full derivative is $\\dfrac{dy}{dx} = 12x^2 - 4x + 5$.",
            "For part (b), we substitute $x = -1$ into the derivative expression.",
            "Calculation: $12(-1)^2 - 4(-1) + 5 = 12(1) + 4 + 5 = 21$.",
            "Final Answer: $$(a)\\ 12x^2 - 4x + 5,\\ (b)\\ 21$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Derivative Significance",
            "content": "In the IGCSE Extended syllabus, you must understand that the derivative represents the 'rate of change'. When the question asks for a 'gradient', it is a direct instruction to find the derivative and substitute the $x$-value. Be particularly careful with negative numbers; $(-1)^2$ must always result in a positive 1."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 17 March
    {
        "id": "003076",
        "date": "17 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Vector addition",
        "difficulty": "A/A*",
        "q": "Relative to an origin $O$, the points $A$, $B$ and $C$ have position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively. $M$ is the midpoint of $AB$ and $N$ is the midpoint of $AC$.<br>Prove algebraically that $\\overrightarrow{MN} = \\dfrac{1}{2}(\\mathbf{c} - \\mathbf{b})$.",
        "steps": [
            "We first define the position vectors of the midpoints $M$ and $N$.",
            "The position vector of $M$ is $\\overrightarrow{OM} = \\dfrac{1}{2}(\\mathbf{a} + \\mathbf{b})$.",
            "The position vector of $N$ is $\\overrightarrow{ON} = \\dfrac{1}{2}(\\mathbf{a} + \\mathbf{c})$.",
            "To find the vector $\\overrightarrow{MN}$, we use the path $\\overrightarrow{MN} = \\overrightarrow{ON} - \\overrightarrow{OM}$.",
            "Substituting our expressions: $\\overrightarrow{MN} = \\dfrac{1}{2}(\\mathbf{a} + \\mathbf{c}) - \\dfrac{1}{2}(\\mathbf{a} + \\mathbf{b})$.",
            "Expanding the brackets: $\\overrightarrow{MN} = \\dfrac{1}{2}\\mathbf{a} + \\dfrac{1}{2}\\mathbf{c} - \\dfrac{1}{2}\\mathbf{a} - \\dfrac{1}{2}\\mathbf{b}$.",
            "The $\\dfrac{1}{2}\\mathbf{a}$ terms cancel out, leaving $\\dfrac{1}{2}\\mathbf{c} - \\dfrac{1}{2}\\mathbf{b}$, which factorises to $\\dfrac{1}{2}(\\mathbf{c} - \\mathbf{b})$.",
            "Final Answer: $$\\text{Proven algebraically as } \\dfrac{1}{2}(\\mathbf{c} - \\mathbf{b})$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Midpoint Theorem",
            "content": "This algebraic proof demonstrates a fundamental geometric property: the line segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length. In IGCSE, providing a clear audit trail of your vector paths is essential for gaining the full communication marks in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Geometry: Download the Extended Pack"
    },
    // 18 March
    {
        "id": "003077",
        "date": "18 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Exact values",
        "difficulty": "B/C",
        "q": "Without using a calculator, calculate the exact value of:<br>$$2\\sin(30^\\circ) + \\cos(60^\\circ) - \\tan(45^\\circ)$$<br>Show every step of your working.",
        "steps": [
            "We substitute the exact values for each trigonometric function as required by the non-calculator syllabus.",
            "$\\sin(30^\\circ) = \\dfrac{1}{2}$.",
            "$\\cos(60^\\circ) = \\dfrac{1}{2}$.",
            "$\\tan(45^\\circ) = 1$.",
            "Substituting these into the expression: $2\\left(\\dfrac{1}{2}\\right) + \\dfrac{1}{2} - 1$.",
            "Calculation: $1 + 0.5 - 1 = 0.5$.",
            "Final Answer: $$\\dfrac{1}{2}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Non-Calculator Trig",
            "content": "In the new 2025 examination format, you are expected to recall these values immediately. I recommend drawing the 'special triangles' (the equilateral and the isosceles right-angled triangle) in the margin of your paper if you find memorization difficult. This provides a visual proof for your values."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Trigonometry: Download the Extended Pack"
    },
    // 19 March
    {
        "id": "003078",
        "date": "19 March 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Simplifying surds",
        "difficulty": "B/C",
        "q": "(a) Simplify fully $\\sqrt{50} + 3\\sqrt{8}$, giving your answer in the form $k\\sqrt{2}$.<br>(b) Hence, show that $\\dfrac{\\sqrt{50} + 3\\sqrt{8}}{\\sqrt{2}}$ is an integer.",
        "steps": [
            "For part (a), we simplify each surd by identifying the largest square factor.",
            "$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$.",
            "$\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$, so $3\\sqrt{8} = 6\\sqrt{2}$.",
            "Adding the like terms: $5\\sqrt{2} + 6\\sqrt{2} = 11\\sqrt{2}$.",
            "For part (b), we use our result from part (a): $\\dfrac{11\\sqrt{2}}{\\sqrt{2}}$.",
            "The $\\sqrt{2}$ terms cancel each other out, leaving 11, which is an integer.",
            "Final Answer: $$(a)\\ 11\\sqrt{2},\\ (b)\\ 11$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Surd Addition",
            "content": "Surds behave exactly like algebraic variables. You can only add or subtract them if the 'root' part is identical. By simplifying both $\\sqrt{50}$ and $\\sqrt{8}$ to their $\\sqrt{2}$ equivalents, you transform the problem into simple addition ($5x + 6x$). This is a core skill for Paper 2."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 20 March
    {
        "id": "003079",
        "date": "20 March 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Notation",
        "subtopic": "Substitution",
        "difficulty": "B/C",
        "q": "The function $f$ is defined as $f(x) = 2x^2 - 3x + 1$.<br>(a) Calculate the value of $f(4)$.<br>(b) Find the values of $x$ such that $f(x) = 1$.",
        "steps": [
            "For part (a), we substitute $x = 4$ into the expression: $f(4) = 2(4)^2 - 3(4) + 1$.",
            "Calculation: $2(16) - 12 + 1 = 32 - 12 + 1 = 21$.",
            "For part (b), we set the function equal to 1: $2x^2 - 3x + 1 = 1$.",
            "Subtracting 1 from both sides gives $2x^2 - 3x = 0$.",
            "We factorise the quadratic expression by taking out a common factor of $x$: $x(2x - 3) = 0$.",
            "This gives two solutions: $x = 0$ and $2x - 3 = 0 \\implies x = 1.5$.",
            "Final Answer: $$(a)\\ 21,\\ (b)\\ x = 0, x = 1.5$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dual Solutions",
            "content": "When solving $f(x) = k$ for a quadratic function, you should generally expect two solutions. In part (b), a common mistake is dividing through by $x$, which results in the loss of the $x=0$ solution. Always solve by factorising to ensure all valid solutions are identified."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 21 March
    {
        "id": "003080",
        "date": "21 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Distance",
        "difficulty": "B/A",
        "q": "Triangle $ABC$ has vertices at $A(1, 2)$, $B(4, 6)$ and $C(7, 2)$.<br>(a) Prove that triangle $ABC$ is an isosceles triangle.<br>(b) Find the equation of the perpendicular bisector of the line $AB$.",
        "steps": [
            "For part (a), we calculate the lengths of the sides using the distance formula: $\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.",
            "Length $AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.",
            "Length $BC = \\sqrt{(7-4)^2 + (2-6)^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{25} = 5$.",
            "Since $AB = BC$, the triangle has two equal sides and is therefore isosceles.",
            "For part (b), we first find the midpoint of $AB$: $\\left(\\dfrac{1+4}{2}, \\dfrac{2+6}{2}\\right) = (2.5, 4)$.",
            "The gradient of $AB = \\dfrac{6-2}{4-1} = \\dfrac{4}{3}$.",
            "The perpendicular gradient is the negative reciprocal: $-\\dfrac{3}{4}$.",
            "We use $y - y_1 = m(x - x_1)$ with $(2.5, 4)$ and $m = -0.75$: $y - 4 = -0.75(x - 2.5)$.",
            "Simplifying gives $y = -0.75x + 1.875 + 4 = -0.75x + 5.875$.",
            "Final Answer: $$(a)\\ \\text{Length } AB = BC = 5,\\ (b)\\ y = -0.75x + 5.875$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Geometric Proofs",
            "content": "To prove a triangle is isosceles, you must show that exactly two side lengths are equal. In part (b), finding the perpendicular bisector requires three distinct skills: finding a midpoint, calculating a gradient, and applying the perpendicular rule. This is a high-yield topic for Paper 4."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Geometry: Download the Extended Pack"
    },
    // 22 March
    {
        "id": "003081",
        "date": "22 March 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Solving inequalities",
        "difficulty": "B/C",
        "q": "(a) Solve the inequality $3(2x - 1) \\le 4x + 5$.<br>(b) List the integer values of $x$ that satisfy the inequality $1 < x \\le 4$.",
        "steps": [
            "For part (a), we begin by expanding the bracket on the left-hand side: $6x - 3 \\le 4x + 5$.",
            "Next, we isolate the $x$ terms by subtracting $4x$ from both sides: $2x - 3 \\le 5$.",
            "We then add 3 to both sides to obtain $2x \\le 8$.",
            "Dividing by 2 gives the solution $x \\le 4$.",
            "For part (b), we look for integers strictly greater than 1 and less than or equal to 4.",
            "The values are 2, 3, and 4.",
            "Final Answer: $$(a)\\ x \\le 4,\\ (b)\\ 2, 3, 4$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Inequality Boundaries",
            "content": "A very common error in Paper 2 is misinterpreting the 'strict' vs 'inclusive' symbols. In part (b), the symbol '$<$' means 1 is not included, whereas '$\\le$' means 4 is included. Always check your list against the specific symbols used to ensure you don't lose a simple accuracy mark."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 23 March
    {
        "id": "003082",
        "date": "23 March 2026",
        "major_area": "Probability",
        "topic": "Probability",
        "subtopic": "Conditional Probability",
        "difficulty": "B/A",
        "q": "A bag contains 3 red and 2 blue counters. Two counters are taken at random without replacement.<br>(a) Calculate the probability that both counters are the same colour.<br>(b) Calculate the probability that at least one counter is blue.",
        "steps": [
            "For part (a), 'same colour' means we must pick Red then Red (RR) or Blue then Blue (BB).",
            "Since the counters are not replaced, the denominator decreases for the second pick.",
            "Calculation: $P(RR) = \\dfrac{3}{5} \\times \\dfrac{2}{4} = \\dfrac{6}{20}$.",
            "Calculation: $P(BB) = \\dfrac{2}{5} \\times \\dfrac{1}{4} = \\dfrac{2}{20}$.",
            "Summing these gives $\\dfrac{8}{20}$, which simplifies to $\\dfrac{2}{5}$.",
            "For part (b), the event 'at least one blue' is the complement of picking 'no blue' (which is RR).",
            "Calculation: $1 - P(RR) = 1 - \\dfrac{6}{20} = \\dfrac{14}{20}$.",
            "Simplifying the fraction gives $\\dfrac{7}{10}$.",
            "Final Answer: $$(a)\\ \\dfrac{2}{5},\\ (b)\\ \\dfrac{7}{10}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Complement Rule",
            "content": "Whenever a question asks for the probability of 'at least one', it is almost always more efficient to calculate $1 - P(\\text{none})$. This prevents you from having to calculate multiple scenarios (RB, BR, BB) and reduces the potential for arithmetic slips."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Probability: Download the Extended Pack"
    },
    // 24 March
    {
        "id": "003083",
        "date": "24 March 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Stationary points",
        "difficulty": "A/A*",
        "q": "The equation of a curve is given by $y = x^3 - 6x^2 + 9x$.<br>(a) Find the derivative $\\dfrac{dy}{dx}$.<br>(b) Find the coordinates of the two stationary points.<br>(c) Determine the nature of these points using the second derivative.",
        "steps": [
            "For part (a), we differentiate each term using the power rule: $\\dfrac{dy}{dx} = 3x^2 - 12x + 9$.",
            "For part (b), stationary points occur when the gradient is zero. We solve $3x^2 - 12x + 9 = 0$.",
            "Dividing by 3 gives $x^2 - 4x + 3 = 0$. Factorising yields $(x - 1)(x - 3) = 0$.",
            "The $x$-values are $x = 1$ and $x = 3$.",
            "Finding $y$-coordinates: $f(1) = 1^3 - 6(1)^2 + 9(1) = 4$ and $f(3) = 3^3 - 6(3)^2 + 9(3) = 0$.",
            "For part (c), we find the second derivative $\\dfrac{d^2y}{dx^2} = 6x - 12$.",
            "At $x = 1$, $\\dfrac{d^2y}{dx^2} = 6(1) - 12 = -6$. Since this is negative ($<0$), the point $(1, 4)$ is a maximum.",
            "At $x = 3$, $\\dfrac{d^2y}{dx^2} = 6(3) - 12 = 6$. Since this is positive ($>0$), the point $(3, 0)$ is a minimum.",
            "Final Answer: $$(a)\\ 3x^2 - 12x + 9,\\ (b)\\ (1, 4), (3, 0),\\ (c)\\ \\text{Max: }(1, 4), \\text{Min: }(3, 0)$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Second Derivative Rigour",
            "content": "A common point of confusion is remembering which result means which! Just remember: a **negative** second derivative indicates a **Maximum** point (the gradient is decreasing), while a **positive** result indicates a **Minimum** point (the gradient is increasing). Using the second derivative is the most rigorous way to prove the nature of a point in IGCSE Paper 4."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 25 March
    {
        "id": "003084",
        "date": "25 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "B/A",
        "q": "Points $A$ and $B$ have coordinates $(2, 5)$ and $(8, 1)$.<br>(a) Find the equation of the line $AB$.<br>(b) Find the equation of the line perpendicular to $AB$ passing through the midpoint of $AB$.",
        "steps": [
            "For part (a), we first calculate the gradient of $AB$: $m = \\dfrac{1 - 5}{8 - 2} = \\dfrac{-4}{6} = -\\dfrac{2}{3}$.",
            "We use the formula $y - y_1 = m(x - x_1)$ with $(2, 5)$: $y - 5 = -\\dfrac{2}{3}(x - 2)$.",
            "Expanding and simplifying gives $y = -\\dfrac{2}{3}x + \\dfrac{4}{3} + 5 = -\\dfrac{2}{3}x + \\dfrac{19}{3}$.",
            "For part (b), we first find the midpoint of $AB$: $\\left(\\dfrac{2+8}{2}, \\dfrac{5+1}{2}\\right) = (5, 3)$.",
            "The perpendicular gradient is the negative reciprocal of $-\\dfrac{2}{3}$, which is $\\dfrac{3}{2}$.",
            "We use the point $(5, 3)$ and $m = 1.5$: $y - 3 = 1.5(x - 5)$.",
            "Rearranging: $y = 1.5x - 7.5 + 3 = 1.5x - 4.5$.",
            "Final Answer: $$(a)\\ y = -\\dfrac{2}{3}x + \\dfrac{19}{3},\\ (b)\\ y = 1.5x - 4.5$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Perpendicular Precision",
            "content": "Finding the perpendicular bisector is a high-level coordinate geometry skill. Remember, you must find the midpoint for the position and the negative reciprocal gradient for the orientation. A common error is using one of the original points ($A$ or $B$) instead of the midpoint; the bisector must, by definition, pass through the center."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Geometry: Download the Extended Pack"
    },
    // 26 March
    {
        "id": "003085",
        "date": "26 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "SOHCAHTOA",
        "difficulty": "B/C",
        "q": "A vertical mast $20\\text{ m}$ high is supported by a cable fixed to the ground $15\\text{ m}$ from its base.<br>(a) Calculate the length of the cable.<br>(b) Calculate the angle of elevation of the top of the mast from the fixed point.",
        "steps": [
            "For part (a), the mast and the ground form a right-angled triangle. We use Pythagoras' Theorem: $c^2 = 20^2 + 15^2$.",
            "Calculation: $c^2 = 400 + 225 = 625$.",
            "Taking the square root gives $c = 25\\text{ m}$.",
            "For part (b), we use the tangent ratio: $\\tan(\\theta) = \\dfrac{\\text{Opposite}}{\\text{Adjacent}} = \\dfrac{20}{15}$.",
            "Calculation: $\\theta = \\tan^{-1}(1.333...) \\approx 53.13...^\\circ$.",
            "Rounding to 1 decimal place gives $53.1^\\circ$.",
            "Final Answer: $$(a)\\ 25\\text{ m},\\ (b)\\ 53.1^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Angle of Elevation",
            "content": "The 'angle of elevation' is always measured upwards from the horizontal. In this scenario, it is the angle at the ground between the horizontal distance and the cable. I suggest drawing a simple 2D right-angled triangle to visualize these components before selecting your trigonometric ratio."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Geometry: Download the Extended Pack"
    },
    // 27 March
    {
        "id": "003086",
        "date": "27 March 2026",
        "major_area": "Algebra",
        "topic": "Expanding Brackets",
        "subtopic": "Double brackets",
        "difficulty": "B/A",
        "q": "Without using a calculator, expand and simplify fully:<br>$$(x - 4)(x + 7) - (x - 2)^2$$",
        "steps": [
            "We expand the first two brackets using the FOIL method: $x^2 + 7x - 4x - 28 = x^2 + 3x - 28$.",
            "Next, we expand the squared bracket: $(x - 2)(x - 2) = x^2 - 2x - 2x + 4 = x^2 - 4x + 4$.",
            "Now we subtract the second expression from the first. We must use brackets to manage the signs: $(x^2 + 3x - 28) - (x^2 - 4x + 4)$.",
            "Distributing the negative sign: $x^2 + 3x - 28 - x^2 + 4x - 4$.",
            "Collecting like terms: the $x^2$ terms cancel out, $3x + 4x = 7x$, and $-28 - 4 = -32$.",
            "Final Answer: $$7x - 32$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Subtracting Polynomials",
            "content": "The most common error in this problem occurs during the subtraction step. When you subtract $(x-2)^2$, you are subtracting every term in that expansion. Forgetting to change the sign of the $-4x$ and the $+4$ is a very frequent cause of lost marks. Always use parentheses when subtracting a bracketed expression."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 28 March
    {
        "id": "003087",
        "date": "28 March 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Solving inequalities",
        "difficulty": "B/A",
        "q": "Solve the quadratic inequality $x^2 - 5x + 6 \\le 0$.",
        "steps": [
            "First, we find the critical values by factorising the quadratic expression: $(x - 2)(x - 3) = 0$.",
            "The critical values are $x = 2$ and $x = 3$.",
            "We consider the shape of the graph $y = x^2 - 5x + 6$. It is a 'U-shaped' parabola that crosses the $x$-axis at 2 and 3.",
            "The inequality asks for where the expression is less than or equal to zero, which is the region below or on the $x$-axis.",
            "This region is between the two roots.",
            "Final Answer: $$2 \\le x \\le 3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Sketching for Success",
            "content": "Never attempt to solve a quadratic inequality without sketching the parabola first. The sketch allows you to see immediately whether you need a single region between the roots (like this example) or two separate regions in the 'tails' of the graph. It is the most reliable way to ensure your inequality signs are correct."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 29 March
    {
        "id": "003088",
        "date": "29 March 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "A/A*",
        "q": "The equation of a circle is $x^2 + y^2 - 4x + 6y - 12 = 0$.<br>(a) Find the coordinates of the centre of the circle.<br>(b) Calculate the radius of the circle.",
        "steps": [
            "To find the centre and radius, we must rewrite the equation in the form $(x - h)^2 + (y - k)^2 = r^2$.",
            "We complete the square for the $x$ terms: $x^2 - 4x = (x - 2)^2 - 4$.",
            "We complete the square for the $y$ terms: $y^2 + 6y = (y + 3)^2 - 9$.",
            "Substituting these back into the original equation: $(x - 2)^2 - 4 + (y + 3)^2 - 9 - 12 = 0$.",
            "Collecting the constants: $(x - 2)^2 + (y + 3)^2 - 25 = 0$.",
            "Rearranging gives $(x - 2)^2 + (y + 3)^2 = 25$.",
            "The centre $(h, k)$ is $(2, -3)$ and $r^2 = 25$, so $r = 5$.",
            "Final Answer: $$(a)\\ (2, -3),\\ (b)\\ 5$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Completing the Circle",
            "content": "This is a sophisticated application of completing the square. Ensure you subtract the squares of the constants ($(-2)^2$ and $3^2$) correctly before moving them to the other side. A common mistake is forgetting the constant from the original equation ($-12$), which will lead to an incorrect radius calculation."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Geometry: Download the Extended Pack"
    },
    // 30 March
    {
        "id": "003089",
        "date": "30 March 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Upper and lower bounds",
        "difficulty": "B/C",
        "q": "The side of a square is measured as $8.4\\text{ cm}$ correct to 1 decimal place.<br>(a) Write down the lower bound and the upper bound of the side length.<br>(b) Calculate the maximum possible area of the square, giving your answer to 3 significant figures.",
        "steps": [
            "The degree of accuracy is $0.1\\text{ cm}$, so the error interval is $\\pm 0.05\\text{ cm}$.",
            "For part (a), the lower bound is $8.4 - 0.05 = 8.35\\text{ cm}$ and the upper bound is $8.4 + 0.05 = 8.45\\text{ cm}$.",
            "For part (b), to find the maximum area, we square the upper bound of the side length.",
            "Calculation: $8.45^2 = 71.4025$.",
            "Rounding to 3 significant figures gives $71.4\\text{ cm}^2$.",
            "Final Answer: $$(a)\\ \text{LB: } 8.35, \text{ UB: } 8.45,\\ (b)\\ 71.4\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Boundary Powers",
            "content": "In bounds questions involving area or volume, you must apply the upper bound of the linear dimension before performing the calculation. Squaring the original number ($8.4^2$) and then finding the bound of the result is incorrect; the error is applied at the point of measurement, not the point of calculation."
        },
        "payhip_link": "https://payhip.com/b/example",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 31 March
    {
        "id": "003090",
        "date": "31 March 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Proof",
        "subtopic": "General Proof",
        "difficulty": "A/A*",
        "q": "Prove algebraically that if $n$ is a multiple of 3, then $n^3$ is always a multiple of 27.",
        "steps": [
            "We let $n = 3k$ where $k$ is an integer, representing any multiple of 3.",
            "We raise this expression to the power of 3: $n^3 = (3k)^3$.",
            "Applying the power to both terms inside the bracket: $n^3 = 3^3 \\times k^3$.",
            "Calculation: $n^3 = 27k^3$.",
            "Since $k$ is an integer, $k^3$ must also be an integer.",
            "Because $n^3$ is expressed as 27 multiplied by an integer, it is by definition a multiple of 27.",
            "Final Answer: $$n^3 = 27k^3 \\text{ which is a multiple of 27}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Defining Multiples",
            "content": "The 'secret' to algebraic proof is the formal definition. Since the question tells us explicitly that $n$ is a multiple of 3, we must begin by writing $n = 3k$. This transforms a word problem into a manageable algebraic expression that you can then manipulate with indices laws."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    }
];