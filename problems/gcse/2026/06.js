const problemBank = [
// 1 June
    {
        "id": "002152",
        "date": "1 June 2026",
        "major_area": "Number",
        "topic": "Ratio",
        "subtopic": "Ratio and Sharing",
        "difficulty": "4/5",
        "q": "A recipe for making 12 large chocolate muffins requires $150\\text{ g}$ of flour, $110\\text{ g}$ of butter, and $80\\text{ g}$ of sugar.<br>(a) Calculate the amount of flour required to make 30 muffins.<br>(b) Jane has $275\\text{ g}$ of butter and plenty of all the other ingredients. Calculate the maximum number of muffins she can make.<br>(c) Write the ratio of flour to butter to sugar in its simplest form.",
        "steps": [
            "For part (a), we first find the amount of flour required for a single muffin by dividing $150\\text{ g}$ by 12, which gives $12.5\\text{ g}$.",
            "We then multiply this single unit by 30 to find the total flour needed. Calculation: $12.5 \\times 30 = 375\\text{ g}$.",
            "For part (b), we divide the amount of butter Jane has ($275\\text{ g}$) by the amount needed for the recipe ($110\\text{ g}$) to find the scaling factor. Calculation: $275 \\div 110 = 2.5$.",
            "We multiply the standard recipe yield (12 muffins) by this scaling factor. Calculation: $12 \\times 2.5 = 30$ muffins.",
            "For part (c), we write the initial ratio of the ingredients as $150 : 110 : 80$.",
            "We divide all three numbers by their highest common factor, which is 10, to obtain the simplest integer ratio.",
            "Final Answer: $$(a)\\ 375\\text{ g},\\ (b)\\ 30\\text{ muffins},\\ (c)\\ 15:11:8$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Unitary Method",
            "content": "Contextual proportion questions are incredibly common at the crossover between Foundation and Higher tiers. I always advise students to use the 'unitary method', which involves finding the value of one single item first. It is logical, mathematically rigorous, and prevents confusing multiplication with division."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master GCSE Number: Download the Pack"
    },
    // 2 June
    {
        "id": "002153",
        "date": "2 June 2026",
        "major_area": "Algebra",
        "topic": "Quadratics",
        "subtopic": "Quadratics Equations Factorising",
        "difficulty": "7/8",
        "q": "The length of a rectangular garden is $(x + 4)\\text{ m}$ and the width is $(x - 2)\\text{ m}$. The total area of the garden is $40\\text{ m}^2$.<br>(a) Show algebraically that $x^2 + 2x - 48 = 0$.<br>(b) Solve the equation to find the value of $x$.<br>(c) Calculate the perimeter of the garden.",
        "steps": [
            "For part (a), the area of a rectangle is found by multiplying the length by the width. We establish the equation: $(x + 4)(x - 2) = 40$.",
            "We expand the brackets using the FOIL method: $x^2 - 2x + 4x - 8 = 40$.",
            "We simplify and subtract 40 from both sides to set the quadratic equal to zero: $x^2 + 2x - 48 = 0$, which completes the proof.",
            "For part (b), we seek two numbers that multiply to $-48$ and sum to $+2$. These factors are $+8$ and $-6$.",
            "This gives the brackets $(x + 8)(x - 6) = 0$, leading to the solutions $x = -8$ and $x = 6$.",
            "Since a physical garden cannot have a negative length, we must discard $x = -8$. Therefore, $x = 6$.",
            "For part (c), we substitute $x = 6$ back into our expressions to find the true dimensions. The length is $6 + 4 = 10\\text{ m}$ and the width is $6 - 2 = 4\\text{ m}$.",
            "The perimeter is the sum of all four sides: $10 + 10 + 4 + 4 = 28\\text{ m}$.",
            "Final Answer: $$(b)\\ x = 6,\\ (c)\\ 28\\text{ m}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Modelling Constraints",
            "content": "Whenever algebra is applied to physical contexts like length, area, or time, you must critically evaluate your solutions. While $x = -8$ is mathematically correct for the quadratic equation, it produces a negative width. Explicitly stating that you are ignoring the negative root demonstrates deep mathematical maturity to the examiner."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    // 3 June
    {
        "id": "002154",
        "date": "3 June 2026",
        "major_area": "Geometry",
        "topic": "Circle Theorems",
        "subtopic": "Circle Theorems 2",
        "difficulty": "7/8",
        "img": "true",
        "q": "The points $A$, $B$, $C$, and $D$ lie on the circumference of a circle with centre $O$. The line $EF$ is a tangent to the circle at point $A$.<br>Angle $EAD = 48^\\circ$ and angle $ABC = 105^\\circ$.<br>(a) Find the size of angle $ACD$. Give a geometric reason for your answer.<br>(b) Find the size of angle $ADC$. Give a geometric reason for your answer.",
        "steps": [
            "For part (a), we use the Alternate Segment Theorem. This theorem states that the angle between the tangent $EF$ and the chord $AD$ is equal to the angle subtended by that chord in the alternate segment.",
            "Therefore, angle $ACD$ is exactly equal to angle $EAD$. Calculation: angle $ACD = 48^\\circ$.",
            "For part (b), we look at the quadrilateral $ABCD$. Because all four vertices lie on the circumference, it is a cyclic quadrilateral.",
            "A fundamental property of a cyclic quadrilateral is that opposite interior angles sum to $180^\\circ$.",
            "Angle $ADC$ is directly opposite angle $ABC$. Calculation: $180^\\circ - 105^\\circ = 75^\\circ$.",
            "Final Answer: $$(a)\\ 48^\\circ\\text{ (Alternate Segment)},\\ (b)\\ 75^\\circ\\text{ (Cyclic Quadrilateral)}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Naming the Theorems",
            "content": "In Higher Tier geometry, a correct numerical angle is usually only worth one mark; the second mark is entirely dependent on your reasoning. You must use the formal vocabulary approved by the exam boards. Phrases like 'Z-angles' or 'Tangent rule' are insufficient. Always commit 'Alternate Segment' and 'Cyclic Quadrilateral' to memory."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    // 4 June
    {
        "id": "002155",
        "date": "4 June 2026",
        "major_area": "Probability and Statistics",
        "topic": "Data Handling",
        "subtopic": "Cumulative Frequency Diagrams",
        "difficulty": "6/7",
        "img": "true",
        "q": "The table gives information about the weights, $w$ grams, of 60 apples.<br><table style='border-collapse:collapse;width:280px;text-align:center;'><tr><th style='padding:6px;'>Weight ($w$ g)</th><th style='padding:6px;'>Freq</th></tr><tr><td style='padding:6px;'>100 &lt; w ≤ 120</td><td style='padding:6px;'>8</td></tr><tr><td style='padding:6px;'>120 &lt; w ≤ 140</td><td style='padding:6px;'>18</td></tr><tr><td style='padding:6px;'>140 &lt; w ≤ 160</td><td style='padding:6px;'>24</td></tr><tr><td style='padding:6px;'>160 &lt; w ≤ 180</td><td style='padding:6px;'>10</td></tr></table><br>(a) Complete a cumulative frequency table for this data.<br>(b) Draw a cumulative frequency graph on the grid provided.<br>(c) Use your graph to estimate the median weight.",
        "steps": [
            "For part (a), we create a running total of the frequencies. The cumulative frequencies are: $8, 26, 50, 60$.",
            "For part (b), we plot these cumulative frequencies against the upper bound of each class interval: $(120, 8), (140, 26), (160, 50), (180, 60)$. We join these points with a smooth, continuous curve.",
            "<img src='images/06/g_04_sol.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "For part (c), we find the median position by halving the total frequency. Calculation: $60 \\div 2 = 30$.",
            "We locate 30 on the vertical Cumulative Frequency axis, draw a horizontal line across to our curve, and drop a vertical line down to the Weight axis.",
            "Reading from the horizontal axis gives our estimated median weight.",
            "Final Answer: $$(a)\\ 8, 26, 50, 60,\\ (c)\\ 143\\text{ g} \\text{ (Accept } 142\\text{-}144\\text{ g)}$$>"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Plotting on the Upper Bound",
            "content": "The single most common mistake when constructing a cumulative frequency graph is plotting the points on the mid-interval value. You must plot against the extreme right-hand edge (the upper bound) of the class, because the cumulative total represents every item up to that maximum limit."
        },
        "payhip_link": "https://payhip.com/b/RVbqM",
        "button_text": "Master GCSE Stats: Download the Pack"
    },
    // 5 June
    {
        "id": "002156",
        "date": "5 June 2026",
        "major_area": "Algebra",
        "topic": "Proportion",
        "subtopic": "Graphical Representation of Inverse Proportion",
        "difficulty": "5/6",
        "q": "The variable $y$ is inversely proportional to $x$. When $x = 4$, $y = 15$.<br>(a) Find the formula expressing $y$ in terms of $x$.<br>(b) Calculate the value of $y$ when $x = 10$.<br>(c) Describe the shape of the graph that would be produced if $y$ was plotted against $x$.",
        "steps": [
            "For part (a), the phrase 'inversely proportional' means we can construct the relationship $y = \\dfrac{k}{x}$.",
            "We substitute our known values into the equation to find the constant $k$: $15 = \\dfrac{k}{4}$.",
            "Multiplying both sides by 4 gives $k = 60$. The general formula is therefore $y = \\dfrac{60}{x}$.",
            "For part (b), we substitute $x = 10$ into our new formula. Calculation: $y = \\dfrac{60}{10} = 6$.",
            "For part (c), an inverse proportion formula of the form $y = \\dfrac{k}{x}$ always produces a reciprocal graph.",
            "This graph is characterised by two distinct curved asymptotes that never touch the $x$ or $y$ axes.",
            "Final Answer: $$(a)\\ y = \\dfrac{60}{x},\\ (b)\\ y = 6,\\ (c)\\ \\text{A reciprocal curve}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 'k' Constant",
            "content": "In any variation or proportion question, finding the constant of proportionality ($k$) is the absolute priority. Never attempt to guess or 'ratio' your way to the final answer. Setting up the equation and isolating $k$ will guarantee you the first two method marks on any Paper 2 exam."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    // 6 June
    {
        "id": "002157",
        "date": "6 June 2026",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "Trigonometry in 3D",
        "difficulty": "8/9",
        "img": "true",
        "q": "The diagram shows a cuboid $ABCDEFGH$ with a rectangular base $ABCD$.<br>$AB = 12\\text{ cm}$, $BC = 5\\text{ cm}$, and the vertical height $CG = 7\\text{ cm}$.<br>(a) Calculate the length of the diagonal $AC$ on the base of the cuboid.<br>(b) Calculate the angle between the space diagonal $AG$ and the base of the cuboid $ABCD$. Give your answer to 1 decimal place.",
        "steps": [
            "For part (a), the base $ABCD$ is a rectangle, so triangle $ABC$ is a right-angled triangle. We apply Pythagoras' Theorem: $AC^2 = 12^2 + 5^2$.",
            "Calculation: $AC^2 = 144 + 25 = 169$. Taking the square root gives $AC = 13\\text{ cm}$.",
            "For part (b), we must identify the correct 2D right-angled triangle floating inside the 3D space. This is triangle $ACG$.",
            "In triangle $ACG$, the adjacent side is the base diagonal we just calculated ($AC = 13\\text{ cm}$), and the opposite vertical side is the height ($CG = 7\\text{ cm}$).",
            "To find the angle $\\theta$ at point $A$, we use the tangent ratio: $\\tan(\\theta) = \\dfrac{\\text{Opposite}}{\\text{Adjacent}} = \\dfrac{7}{13}$.",
            "Calculation: $\\theta = \\tan^{-1}\\left(\\dfrac{7}{13}\\right) \\approx 28.3007...^\\circ$.",
            "Final Answer: $$(a)\\ 13\\text{ cm},\\ (b)\\ 28.3^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Visualising 3D Triangles",
            "content": "The highest hurdle in 3D Trigonometry is correctly identifying the 2D plane you need to work within. When asked for the angle between a line and a base plane, you must 'drop a shadow' from the top of the line straight down to the base to form your right-angled triangle. Sketching this 2D triangle separately on your exam paper is highly recommended."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    // 7 June
    {
        "id": "002158",
        "date": "7 June 2026",
        "major_area": "Number",
        "topic": "Proportion",
        "subtopic": "Direct and Inverse Proportion",
        "difficulty": "5/6",
        "q": "A team of 5 builders takes 12 days to build a large brick wall.<br>(a) Assuming they all work at the exact same rate, calculate how many days it would take a team of 8 builders to build the same wall.<br>(b) State one assumption you have made in your calculation and explain how it might affect your answer in real life.<br>(c) A different wall takes $x$ builders exactly 15 days to build. If they add 2 more builders, the wall takes 10 days. Calculate the value of $x$.",
        "steps": [
            "For part (a), building a wall is an example of inverse proportion (more builders = fewer days). We first find the total 'man-days' required to build the wall.",
            "Calculation: $5 \\text{ builders} \\times 12 \\text{ days} = 60 \\text{ man-days}$.",
            "We divide the total man-days by the new number of builders: $60 \\div 8 = 7.5 \\text{ days}$.",
            "For part (b), we assumed that all builders work independently at the same speed. In reality, too many builders might get in each other's way, making the actual time longer than 7.5 days.",
            "For part (c), the total man-days must be equal in both scenarios. We can set up the equation: $15 \\times x = 10 \\times (x + 2)$.",
            "Expanding the bracket gives $15x = 10x + 20$.",
            "Subtracting $10x$ from both sides gives $5x = 20$. Dividing by 5 yields $x = 4$.",
            "Final Answer: $$(a)\\ 7.5 \\text{ days},\\ (b)\\ \\text{Builders might get in each other's way (time increases)},\\ (c)\\ x = 4$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Contextual Assumptions",
            "content": "Cambridge and Edexcel examiners frequently add a 1-mark 'evaluative' question at the end of proportion problems. Always relate your assumption directly back to the context. Saying 'they work at the same rate' is repeating the question; saying 'they won't get tired or run out of space' shows applied mathematical thinking."
        },
        "payhip_link": "https://payhip.com/b/JYBkq",
        "button_text": "Master GCSE Number: Download the Pack"
    },
    // 8 June
    {
        "id": "002159",
        "date": "8 June 2026",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "The Cosine Rule",
        "difficulty": "8/9",
        "img": "true",
        "q": "Two ships, $A$ and $B$, leave a port $P$. Ship $A$ travels $7\\text{ km}$ on a bearing of $045^\\circ$. Ship $B$ travels $10\\text{ km}$ on a bearing of $105^\\circ$.<br>(a) Calculate the direct distance between Ship $A$ and Ship $B$.<br>(b) Calculate the bearing of Ship $A$ from Ship $B$.<br>Give both answers to 1 decimal place.",
        "steps": [
            "For part (a), we first find the angle inside the triangle at $P$. Calculation: $105^\\circ - 45^\\circ = 60^\\circ$.",
            "We have two sides and the included angle, so we apply the Cosine Rule: $AB^2 = 7^2 + 10^2 - 2(7)(10)\\cos(60^\\circ)$.",
            "Calculation: $AB^2 = 49 + 100 - 140(0.5) = 149 - 70 = 79$. Taking the square root gives $AB = \\sqrt{79} \\approx 8.888...\\text{ km}$.",
            "For part (b), we need to find the angle at $B$ (angle $PBA$) using the Sine Rule: $\\dfrac{\\sin(B)}{7} = \\dfrac{\\sin(60^\\circ)}{\\sqrt{79}}$.",
            "Calculation: $\\sin(B) = \\dfrac{7 \\times \\sin(60^\\circ)}{\\sqrt{79}} \\approx 0.682...$ which gives angle $B \approx 43.0^\\circ$.",
            "To find the bearing from $B$, we first find the bearing of $P$ from $B$, which is $105^\\circ + 180^\\circ = 285^\\circ$.",
            "Ship $A$ is 'inside' this bearing by the angle we just calculated. Therefore, we subtract angle $B$ from $285^\\circ$.",
            "Calculation: $285^\\circ - 43.0^\\circ = 242.0^\\circ$.",
            "Final Answer: $$(a)\\ 8.9\\text{ km},\\ (b)\\ 242.0^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Return Bearings",
            "content": "Finding the bearing of $A$ from $B$ is a classic high-tier discriminator. Always draw a North line at your target point ($B$). The fastest way to find the baseline orientation is to add $180^\\circ$ to the outbound bearing ($105^\\circ + 180^\\circ = 285^\\circ$). From there, it is a simple matter of adding or subtracting the internal triangle angle."
        },
        "payhip_link": "https://payhip.com/b/KLYAp",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    // 9 June
    {
        "id": "002160",
        "date": "9 June 2026",
        "major_area": "Algebra",
        "topic": "Iteration",
        "subtopic": "Iteration",
        "difficulty": "8/9",
        "q": "The equation $x^3 - 5x - 3 = 0$ has a root between $x = 2$ and $x = 3$.<br>(a) Show that the equation can be rearranged into the iterative formula $x_{n+1} = \\sqrt[3]{5x_n + 3}$.<br>(b) Using $x_1 = 2$, calculate the values of $x_2$ and $x_3$, giving your answers to 4 decimal places.<br>(c) By substituting $x = 2.485$ and $x = 2.495$ into the original equation, prove that the root is $2.49$ correct to 2 decimal places.",
        "steps": [
            "For part (a), we begin with $x^3 - 5x - 3 = 0$ and add $5x + 3$ to both sides to isolate the $x^3$ term.",
            "This gives $x^3 = 5x + 3$. Taking the cube root of both sides yields $x = \\sqrt[3]{5x + 3}$, which establishes the iterative formula.",
            "For part (b), we substitute $x_1 = 2$ into the formula: $x_2 = \\sqrt[3]{5(2) + 3} = \\sqrt[3]{13} \\approx 2.3513$.",
            "We substitute $x_2$ back into the formula to find $x_3$: $x_3 = \\sqrt[3]{5(2.3513...) + 3} = \\sqrt[3]{14.756...} \\approx 2.4528$.",
            "For part (c), we substitute the boundary values into $f(x) = x^3 - 5x - 3$.",
            "Calculation: $f(2.485) = (2.485)^3 - 5(2.485) - 3 \\approx -0.080$.",
            "Calculation: $f(2.495) = (2.495)^3 - 5(2.495) - 3 \\approx +0.056$.",
            "Because there is a change of sign between $2.485$ and $2.495$, the root must lie between them. Any number in this range rounds to $2.49$ to 2 decimal places.",
            "Final Answer: $$(b)\\ x_2 = 2.3513, x_3 = 2.4528,\\ (c)\\ \\text{Sign change proves root is } 2.49$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Sign Change Proof",
            "content": "Part (c) is the formal algebraic way to prove the exact value of a root. You cannot simply press 'equals' on your calculator 50 times and write down the answer! You must physically demonstrate that the curve crosses the $x$-axis (changes from negative to positive) within the tight boundary limits."
        },
        "payhip_link": "https://payhip.com/b/loYtp",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    // 10 June
    {
        "id": "002161",
        "date": "10 June 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Limits of Accuracy and Bounds",
        "difficulty": "7/8",
        "q": "Usain runs exactly $200\\text{ m}$, measured correct to the nearest metre. His time is $21.4\\text{ seconds}$, measured correct to the nearest tenth of a second.<br>(a) Write down the lower bound of the distance and the upper bound of the time.<br>(b) Calculate his minimum possible average speed in $\\text{m/s}$. Give your answer to 3 significant figures.<br>(c) Will his actual average speed definitely be greater than $9.2\\text{ m/s}$? Show working to justify your answer.",
        "steps": [
            "For part (a), the distance is to the nearest $1\\text{ m}$, so the error margin is $\\pm 0.5\\text{ m}$. The lower bound is $199.5\\text{ m}$.",
            "The time is to the nearest $0.1\\text{ s}$, so the error margin is $\\pm 0.05\\text{ s}$. The upper bound is $21.45\\text{ s}$.",
            "For part (b), average speed is Distance $\\div$ Time. To find the minimum possible speed, we must divide the smallest possible distance by the largest possible time.",
            "Calculation: $199.5 \\div 21.45 = 9.30069... \\text{ m/s}$.",
            "Rounding to 3 significant figures gives $9.30\\text{ m/s}$.",
            "For part (c), since the absolute minimum speed he could possibly have run is $9.30\\text{ m/s}$, and $9.30$ is strictly greater than $9.2$, his speed is definitely greater.",
            "Final Answer: $$(a)\\ \\text{LB } = 199.5\\text{ m}, \\text{UB } = 21.45\\text{ s},\\ (b)\\ 9.30\\text{ m/s},\\ (c)\\ \\text{Yes, minimum is } 9.30$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Compound Bounds",
            "content": "When dealing with division in limits of accuracy, finding the minimum value requires the Lower Bound of the numerator divided by the Upper Bound of the denominator. Memorize this rule: Minimum = Small $\\div$ Big, and Maximum = Big $\\div$ Small."
        },
        "payhip_link": "https://payhip.com/b/qYp8g",
        "button_text": "Master GCSE Number: Download the Pack"
    },
    // 11 June
    {
        "id": "002162",
        "date": "11 June 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Simultaneous Linear Equations",
        "difficulty": "6/7",
        "q": "A delivery company has two types of parcel: Standard ($s$) and Large ($L$).<br>4 Standard parcels and 3 Large parcels have a total mass of $32\\text{ kg}$.<br>5 Standard parcels and 2 Large parcels have a total mass of $29.5\\text{ kg}$.<br>(a) Form a pair of simultaneous equations to represent this information.<br>(b) Solve the equations algebraically to find the mass of one Standard parcel and one Large parcel.<br>(c) A delivery van can carry a maximum of $500\\text{ kg}$. Can it carry 40 Standard and 30 Large parcels?",
        "steps": [
            "For part (a), we translate the text into algebra: $4s + 3L = 32$ and $5s + 2L = 29.5$.",
            "For part (b), we eliminate $L$ by multiplying the first equation by 2 and the second equation by 3.",
            "This yields $8s + 6L = 64$ and $15s + 6L = 88.5$.",
            "Subtracting the top equation from the bottom eliminates $L$: $7s = 24.5$. Dividing by 7 gives $s = 3.5\\text{ kg}$.",
            "We substitute $s = 3.5$ back into the first equation: $4(3.5) + 3L = 32 \\implies 14 + 3L = 32$.",
            "Subtracting 14 gives $3L = 18$, so $L = 6\\text{ kg}$.",
            "For part (c), we calculate the total mass of the new load: $40(3.5) + 30(6) = 140 + 180 = 320\\text{ kg}$.",
            "Since $320\\text{ kg}$ is less than the $500\\text{ kg}$ limit, the van can carry the load.",
            "Final Answer: $$(a)\\ 4s+3L=32, 5s+2L=29.5,\\ (b)\\ s = 3.5\\text{ kg}, L = 6\\text{ kg},\\ (c)\\ \\text{Yes (}320\\text{ kg } < 500\\text{ kg)}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Define Your Variables",
            "content": "Using $s$ and $L$ instead of $x$ and $y$ is a powerful safety net in contextual exams. When the algebra gets messy, it is incredibly common for students to solve the equations perfectly but then accidentally assign the answers to the wrong item at the very end!"
        },
        "payhip_link": "https://payhip.com/b/Cq1JG",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    // 12 June
    {
        "id": "002163",
        "date": "12 June 2026",
        "major_area": "Geometry",
        "topic": "Similarity",
        "subtopic": "Comparing Lengths, Areas, and Volumes",
        "difficulty": "7/8",
        "img": "true",
        "q": "Two mathematically similar solid cones, A and B, have base radii of $4\\text{ cm}$ and $6\\text{ cm}$ respectively.<br>(a) Find the ratio of the volume of Cone A to the volume of Cone B.<br>(b) The total surface area of Cone A is $120\\pi\\text{ cm}^2$. Calculate the total surface area of Cone B.<br>(c) Cone B has a mass of $810\\text{ g}$. Calculate the mass of Cone A, assuming they are made from identical material.",
        "steps": [
            "For part (a), we find the linear scale factor ($k$) from A to B: $k = 6 \\div 4 = 1.5$.",
            "The volume scale factor is $k^3 = 1.5^3 = 3.375$ (or $\\frac{27}{8}$). The volume ratio is therefore $8 : 27$.",
            "For part (b), the area scale factor is $k^2 = 1.5^2 = 2.25$.",
            "We multiply the area of Cone A by the area scale factor: $120\\pi \\times 2.25 = 270\\pi\\text{ cm}^2$.",
            "For part (c), mass is directly proportional to volume. We must divide the mass of Cone B by the volume scale factor ($k^3$) to find Cone A.",
            "Calculation: $810 \\div 3.375 = 240\\text{ g}$.",
            "Final Answer: $$(a)\\ 8 : 27,\\ (b)\\ 270\\pi\\text{ cm}^2,\\ (c)\\ 240\\text{ g}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Mass Follows Volume",
            "content": "A very common error in part (c) is dividing the mass by the linear scale factor. Because the objects are solid 3D shapes, mass is always dependent on the volume. Therefore, you must use $k^3$ to convert masses between similar solids."
        },
        "payhip_link": "https://payhip.com/b/bgm5B",
        "button_text": "Master GCSE Geometry: Download the Pack"
    }



]