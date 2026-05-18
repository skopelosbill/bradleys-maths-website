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
            "Calculation: $\\sin(B) = \\dfrac{7 \\times \\sin(60^\\circ)}{\\sqrt{79}} \\approx 0.682...$ which gives angle $B \\approx 43.0^\\circ$.",
            "To find the bearing from $B$, we first find the return bearing of $P$ from $B$, which is $105^\\circ + 180^\\circ = 285^\\circ$.",
            "Ship $A$ is situated clockwise from the line $BP$. Therefore, we add angle $B$ to our return bearing.",
            "Calculation: $285^\\circ + 43.0^\\circ = 328.0^\\circ$.",
            "Final Answer: $$(a)\\ 8.9\\text{ km},\\ (b)\\ 328.0^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Return Bearings",
            "content": "Finding the bearing of $A$ from $B$ is a classic high-tier discriminator. Always draw a North line at your target point ($B$). The fastest way to find the baseline orientation is to add $180^\\circ$ to the outbound bearing ($105^\\circ + 180^\\circ = 285^\\circ$). From there, use your sketch to visually check whether you must add or subtract the internal triangle angle."
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
    },
    // 13 June
    {
        "id": "002164",
        "date": "13 June 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Composite Functions",
        "difficulty": "7/8",
        "q": "Two functions are defined as $f(x) = 2x - 3$ and $g(x) = x^2 + 4$.<br>(a) Find the value of $fg(3)$.<br>(b) Find an expression for $gf(x)$ in its simplest form.<br>(c) Solve the equation $gf(x) = 13$.",
        "steps": [
            "For part (a), we must first evaluate the inner function $g(3)$. Calculation: $3^2 + 4 = 9 + 4 = 13$.",
            "We then substitute this result into the outer function $f(x)$. Calculation: $f(13) = 2(13) - 3 = 26 - 3 = 23$.",
            "For part (b), we substitute the entire function $f(x)$ into $g(x)$. This gives $g(2x - 3) = (2x - 3)^2 + 4$.",
            "Expanding the double bracket yields $(4x^2 - 6x - 6x + 9) + 4$. Simplifying gives $4x^2 - 12x + 13$.",
            "For part (c), we set our expression for $gf(x)$ equal to 13: $4x^2 - 12x + 13 = 13$.",
            "Subtracting 13 from both sides leaves $4x^2 - 12x = 0$.",
            "Factorising out $4x$ gives $4x(x - 3) = 0$. This yields two solutions: $x = 0$ and $x = 3$.",
            "Final Answer: $$(a)\\ 23,\\ (b)\\ 4x^2 - 12x + 13,\\ (c)\\ x = 0 \\text{ and } x = 3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Inside-Out Logic",
            "content": "A frequent error in composite functions is evaluating them in the wrong order. Always remember to work from the 'inside out'. For $fg(3)$, the 3 is immediately adjacent to the $g$, so $g$ must operate on the number first. Only when $g$ has finished its job do we pass the result to $f$."
        },
        "payhip_link": "https://payhip.com/b/A7Wup",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    // 14 June
    {
        "id": "002165",
        "date": "14 June 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Reverse Percentages",
        "difficulty": "5/6",
        "q": "A local electronics store reduces the price of a television by $20\\%$ in a summer sale. The sale price of the television is $£360$.<br>(a) Calculate the original price of the television before the sale.<br>(b) On the final day of the sale, the manager reduces the sale price by a further $10\\%$. Calculate the final price of the television.<br>(c) Calculate the overall percentage reduction from the original price to the final price.",
        "steps": [
            "For part (a), the sale price represents $80\\%$ (or $0.80$) of the original price. We set up the equation: $\\text{Original} \\times 0.80 = 360$.",
            "To find the original price, we divide the sale price by the multiplier. Calculation: $360 \\div 0.80 = £450$.",
            "For part (b), we take the current sale price ($£360$) and apply a $10\\%$ reduction. The multiplier is $0.90$.",
            "Calculation: $360 \\times 0.90 = £324$.",
            "For part (c), we find the total amount saved by subtracting the final price from the original price: $450 - 324 = £126$.",
            "To find the overall percentage reduction, we divide the savings by the original price and multiply by 100. Calculation: $(126 \\div 450) \\times 100 = 28\\%$.",
            "Final Answer: $$(a)\\ £450,\\ (b)\\ £324,\\ (c)\\ 28\\%$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Successive Percentages",
            "content": "Notice how a $20\\%$ reduction followed by a $10\\%$ reduction does not equal a $30\\%$ overall reduction! The second reduction is calculated on the already discounted price, meaning less money is taken off. This is why high street stores love 'further reduction' sales—it sounds like a bigger discount than it actually is."
        },
        "payhip_link": "http://payhip.com/b/UYy0Q",
        "button_text": "Master GCSE Number: Download the Pack"
    },
    // 15 June
    {
        "id": "002166",
        "date": "15 June 2026",
        "major_area": "Geometry",
        "topic": "Vectors",
        "subtopic": "Vector Geometry",
        "difficulty": "8/9",
        "img": "true",
        "q": "$OAB$ is a triangle. $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$.<br>Point $M$ lies on $AB$ such that the ratio $AM : MB = 2 : 1$.<br>(a) Find the vector $\\overrightarrow{AB}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.<br>(b) Find the position vector $\\overrightarrow{OM}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$. Give your answer in its simplest form.<br>(c) Point $N$ lies on $OB$ such that $ON = \\dfrac{2}{3}OB$. Show that the line $AM$ is not parallel to the line $AN$.",
        "steps": [
            "For part (a), to travel from $A$ to $B$, we must go backwards along $OA$ and forwards along $OB$. This gives $\\overrightarrow{AB} = -\\mathbf{a} + \\mathbf{b}$, or $\\mathbf{b} - \\mathbf{a}$.",
            "For part (b), the path from $O$ to $M$ is $\\overrightarrow{OA} + \\overrightarrow{AM}$. Because the ratio $AM:MB$ is $2:1$, $AM$ is $\\dfrac{2}{3}$ of the entire vector $AB$.",
            "Substituting our expressions: $\\overrightarrow{OM} = \\mathbf{a} + \\dfrac{2}{3}(\\mathbf{b} - \\mathbf{a})$.",
            "Expanding the bracket gives $\\mathbf{a} + \\dfrac{2}{3}\\mathbf{b} - \\dfrac{2}{3}\\mathbf{a}$. Collecting like terms leaves $\\dfrac{1}{3}\\mathbf{a} + \\dfrac{2}{3}\\mathbf{b}$.",
            "For part (c), we find vector $\\overrightarrow{AN}$ by traveling from $A$ to $O$ and then to $N$: $\\overrightarrow{AN} = -\\mathbf{a} + \\dfrac{2}{3}\\mathbf{b}$.",
            "We already established $\\overrightarrow{AM} = \\dfrac{2}{3}\\mathbf{b} - \\dfrac{2}{3}\\mathbf{a}$. Since $\\overrightarrow{AM}$ is a multiple of $(\\mathbf{b} - \\mathbf{a})$ and $\\overrightarrow{AN}$ is a multiple of $(2\\mathbf{b} - 3\\mathbf{a})$, they are not scalar multiples of each other and therefore cannot be parallel.",
            "Final Answer: $$(a)\\ \\mathbf{b} - \\mathbf{a},\\ (b)\\ \\dfrac{1}{3}\\mathbf{a} + \\dfrac{2}{3}\\mathbf{b},\\ (c)\\ \\text{Shown algebraically}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Parallel Proofs",
            "content": "In high-tier vector geometry, proving lines are parallel requires you to show that one vector is a direct scalar multiple of another (e.g., Vector X is exactly 3 times Vector Y). If their algebraic structures cannot be factorised to reveal identical brackets, you have successfully proven they intersect."
        },
        "payhip_link": "https://payhip.com/b/CZ0J4",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    // 16 June
    // 16 June
    {
        "id": "002167",
        "date": "16 June 2026",
        "major_area": "Probability and Statistics",
        "topic": "Probability",
        "subtopic": "Probability of Combined Events",
        "difficulty": "8/9",
        "q": "A bag contains $x$ red counters and 5 blue counters. A counter is taken at random, its colour is noted, and it is NOT replaced. A second counter is then taken.<br>(a) Write down an expression, in terms of $x$, for the total number of counters in the bag initially.<br>(b) The probability that both counters drawn are red is $\\dfrac{1}{6}$. Show algebraically that this leads to the equation $x^2 - 3x - 4 = 0$.<br>(c) Solve this equation to find the initial number of red counters in the bag.",
        "steps": [
            "For part (a), the total number of counters is simply the sum of the red and blue counters: $x + 5$.",
            "For part (b), the probability of choosing a red counter first is $\\dfrac{x}{x + 5}$. Because it is not replaced, the probability of choosing a second red counter is $\\dfrac{x - 1}{x + 4}$.",
            "We multiply these probabilities and set them equal to $\\dfrac{1}{6}$: $\\dfrac{x(x - 1)}{(x + 5)(x + 4)} = \\dfrac{1}{6}$.",
            "Cross-multiplying gives $6x(x - 1) = 1(x + 5)(x + 4)$. Expanding both sides yields $6x^2 - 6x = x^2 + 9x + 20$.",
            "Subtracting the right-hand side to equal zero gives $5x^2 - 15x - 20 = 0$. Dividing the entire equation by 5 gives the required quadratic: $x^2 - 3x - 4 = 0$.",
            "For part (c), we factorise the quadratic equation: $(x - 4)(x + 1) = 0$.",
            "This gives the roots $x = 4$ and $x = -1$. Because the number of physical counters cannot be negative, we discard $-1$.",
            "Final Answer: $$(a)\\ x + 5,\\ (b)\\ \\text{Shown algebraically},\\ (c)\\ 4 \\text{ red counters}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Discarding the Impossible",
            "content": "This is one of the most challenging topics on Paper 2. Notice how the mathematics provides two perfectly valid roots ($4$ and $-1$), but reality only allows one. You must explicitly cross out or write 'discard' next to the negative root to show the examiner you understand the physical constraints of the problem."
        },
        "payhip_link": "https://payhip.com/b/fGC0u",
        "button_text": "Master GCSE Stats & Prob: Download the Pack"
    },
    // 17 June
    {
        "id": "002168",
        "date": "17 June 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Algebraic Fractions 2",
        "difficulty": "8/9",
        "q": "Solve the equation: $$\\dfrac{3}{x - 1} + \\dfrac{2}{x + 1} = 1$$<br>(a) Show that the equation simplifies to $x^2 - 5x - 2 = 0$.<br>(b) Solve the quadratic equation, giving your answers to 2 decimal places.",
        "steps": [
            "For part (a), we must find a common denominator for the fractions, which is $(x - 1)(x + 1)$.",
            "We adjust the numerators: $\\dfrac{3(x + 1)}{(x - 1)(x + 1)} + \\dfrac{2(x - 1)}{(x - 1)(x + 1)} = 1$.",
            "Expanding the numerators gives $\\dfrac{3x + 3 + 2x - 2}{x^2 - 1} = 1$. This simplifies to $\\dfrac{5x + 1}{x^2 - 1} = 1$.",
            "Multiplying both sides by the denominator yields $5x + 1 = x^2 - 1$. Rearranging to set the equation to zero gives $x^2 - 5x - 2 = 0$.",
            "For part (b), we use the quadratic formula where $a=1$, $b=-5$, and $c=-2$.",
            "Calculation: $x = \\dfrac{-(-5) \\pm \\sqrt{(-5)^2 - 4(1)(-2)}}{2(1)} = \\dfrac{5 \\pm \\sqrt{25 + 8}}{2} = \\dfrac{5 \\pm \\sqrt{33}}{2}$.",
            "Evaluating both roots: $x \\approx 5.372...$ and $x \\approx -0.372...$.",
            "Final Answer: $$(a)\\ \\text{Shown algebraically},\\ (b)\\ x = 5.37 \\text{ and } x = -0.37$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Common Denominator",
            "content": "When adding algebraic fractions, never attempt to simply 'add the tops and add the bottoms'. You must multiply each numerator by the opposite denominator. Furthermore, noticing that $(x-1)(x+1)$ is the difference of two squares ($x^2 - 1$) saves valuable time during the expansion phase."
        },
        "payhip_link": "https://payhip.com/b/jJhdP",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    // 18 June
    {
        "id": "002169",
        "date": "18 June 2026",
        "major_area": "Geometry",
        "topic": "Area and Perimeter",
        "subtopic": "Compound Shapes in 2D",
        "difficulty": "5/6",
        "img": "true",
        "q": "The diagram shows a school playing field. It consists of a rectangle measuring $80\\text{ m}$ by $40\\text{ m}$, with a semi-circle at each end.<br>(a) Calculate the total perimeter of the playing field.<br>(b) Calculate the total area of the playing field.<br>(c) Grass seed costs $£3.50$ per $100\\text{ m}^2$. Calculate the total cost of grass seed required to cover the entire field.",
        "steps": [
            "For part (a), the perimeter consists of the two straight $80\\text{ m}$ edges and the two semi-circular curves. Two semi-circles make one full circle with a diameter of $40\\text{ m}$.",
            "The circumference of the full circle is $\\pi \\times d = 40\\pi \\approx 125.66\\text{ m}$. Total perimeter $= 80 + 80 + 125.66 = 285.66\\text{ m}$.",
            "For part (b), the area is the rectangular section plus the full circle.",
            "Rectangle area $= 80 \\times 40 = 3200\\text{ m}^2$.",
            "Circle area $= \\pi \\times r^2 = \\pi \\times 20^2 = 400\\pi \\approx 1256.64\\text{ m}^2$.",
            "Total area $= 3200 + 1256.64 = 4456.64\\text{ m}^2$.",
            "For part (c), we determine how many $100\\text{ m}^2$ batches are needed by dividing the area by 100: $4456.64 \\div 100 = 44.566...$ batches.",
            "Because we cannot buy a fraction of a batch, we must round up and purchase 45 batches. Total cost $= 45 \\times 3.50 = £157.50$.",
            "Final Answer: $$(a)\\ 286\\text{ m},\\ (b)\\ 4460\\text{ m}^2,\\ (c)\\ £157.50$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Internal Lines Don't Count",
            "content": "A perimeter is strictly the outside edge of a shape. A very common error in this question is adding the two $40\\text{ m}$ straight lines that separate the rectangle from the semi-circles. These lines are internal and must be ignored for part (a)!"
        },
        "payhip_link": "https://payhip.com/b/z2KF1",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    // 19 June
    {
        "id": "002170",
        "date": "19 June 2026",
        "major_area": "Algebra",
        "topic": "Linear Equations",
        "subtopic": "Solving Linear Equations",
        "difficulty": "5/6",
        "q": "The length of a rectangle is $(4x - 3)\\text{ cm}$ and its width is $(x + 5)\\text{ cm}$. The perimeter of the rectangle is $54\\text{ cm}$.<br>(a) Set up and solve a linear equation to find the value of $x$.<br>(b) Calculate the area of the rectangle.<br>(c) A square has the exact same area as this rectangle. Calculate the side length of the square, giving your answer to 1 decimal place.",
        "steps": [
            "For part (a), the perimeter of a rectangle is $2 \\times \\text{length} + 2 \\times \\text{width}$. We establish the equation: $2(4x - 3) + 2(x + 5) = 54$.",
            "Expanding the brackets gives $8x - 6 + 2x + 10 = 54$.",
            "Collecting like terms: $10x + 4 = 54$. Subtracting 4 gives $10x = 50$, so $x = 5$.",
            "For part (b), we substitute $x = 5$ back into the dimension expressions. The length is $4(5) - 3 = 17\\text{ cm}$. The width is $5 + 5 = 10\\text{ cm}$.",
            "The area of the rectangle is $17 \\times 10 = 170\\text{ cm}^2$.",
            "For part (c), if the square has an area of $170\\text{ cm}^2$, its side length is the square root of the area. Calculation: $\\sqrt{170} \\approx 13.038...\\text{ cm}$.",
            "Final Answer: $$(a)\\ x = 5,\\ (b)\\ 170\\text{ cm}^2,\\ (c)\\ 13.0\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Perimeter Algebra",
            "content": "A frequent mistake is equating the sum of just one length and one width to the full perimeter (e.g., $4x-3 + x+5 = 54$). Always remember a rectangle has four sides! Writing out the full algebraic perimeter before simplifying prevents this costly slip."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    // 20 June
    {
        "id": "002171",
        "date": "20 June 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Limits of Accuracy and Bounds",
        "difficulty": "8/9",
        "q": "The density of a block of metal is given by the formula $D = \\dfrac{M}{V}$.<br>The mass, $M$, is $450\\text{ g}$, measured correct to the nearest $5\\text{ g}$.<br>The volume, $V$, is $60\\text{ cm}^3$, measured correct to the nearest $2\\text{ cm}^3$.<br>(a) Write down the lower and upper bounds for the mass and the volume.<br>(b) Calculate the lower bound for the density of the metal. Give your answer to 3 decimal places.",
        "steps": [
            "For part (a), the mass is to the nearest $5\\text{ g}$, giving an error margin of $\\pm 2.5\\text{ g}$. LB $= 447.5\\text{ g}$, UB $= 452.5\\text{ g}$.",
            "The volume is to the nearest $2\\text{ cm}^3$, giving an error margin of $\\pm 1\\text{ cm}^3$. LB $= 59\\text{ cm}^3$, UB $= 61\\text{ cm}^3$.",
            "For part (b), to calculate the absolute minimum (lower bound) of a division, we must divide the smallest possible numerator by the largest possible denominator.",
            "This requires dividing the Lower Bound of the mass by the Upper Bound of the volume.",
            "Calculation: $D_{LB} = \\dfrac{447.5}{61} \\approx 7.33606...$.",
            "Rounding to 3 decimal places gives $7.336\\text{ g/cm}^3$.",
            "Final Answer: $$(a)\\ M \\in [447.5, 452.5), V \\in [59, 61),\\ (b)\\ 7.336\\text{ g/cm}^3$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Division Bound Trap",
            "content": "Students often intuitively assume that the 'Lower Bound' of a formula uses all the lower bound values. In division, making the denominator smaller actually makes the final result *bigger*! Always memorize: Minimum equals Smallest divided by Biggest."
        },
        "payhip_link": "https://payhip.com/b/IVWzJ",
        "button_text": "Master GCSE Number: Download the Pack"
    },
    // 21 June
    {
        "id": "002172",
        "date": "21 June 2026",
        "major_area": "Probability and Statistics",
        "topic": "Data Handling",
        "subtopic": "Histograms",
        "difficulty": "7/8",
        "img": "true",
        "q": "The histogram shows the time taken, $t$ minutes, for passengers to pass through airport security.<br>The frequency density for the $0 < t \\le 10$ class is $1.5$.<br>(a) Use the histogram to complete the frequency table.<br>(b) Calculate the total number of passengers surveyed.<br>(c) Estimate the fraction of passengers who took longer than $25$ minutes.",
        "steps": [
            "For part (a), Frequency is calculated as Frequency Density $\\times$ Class Width. For the first bar: $1.5 \\times 10 = 15$.",
            "Second bar ($10-30$): Width is 20, FD is 1.2. Frequency = $20 \\times 1.2 = 24$.",
            "Third bar ($30-40$): Width is 10, FD is 1.8. Frequency = $10 \\times 1.8 = 18$.",
            "Fourth bar ($40-70$): Width is 30, FD is 0.7. Frequency = $30 \\times 0.7 = 21$.",
            "For part (b), we sum the frequencies: $15 + 24 + 18 + 21 = 78$ passengers.",
            "For part (c), we need the passengers taking longer than 25 minutes. This includes the top quarter of the $10-30$ class, plus all of the $30-40$ and $40-70$ classes.",
            "The proportion of the $10-30$ class is from 25 to 30, which is a width of 5. Area = $5 \\times 1.2 = 6$ passengers.",
            "Total longer than 25 mins = $6 + 18 + 21 = 45$ passengers.",
            "The fraction is $\\dfrac{45}{78}$, which simplifies to $\\dfrac{15}{26}$.",
            "Final Answer: $$(b)\\ 78 \\text{ passengers},\\ (c)\\ \\dfrac{15}{26}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Fractional Bars",
            "content": "When asked to estimate a value that falls partway through a histogram bar, we assume the data is spread perfectly evenly. Finding the width of the required sub-section (from 25 to 30) and multiplying it by the bar's frequency density is the most reliable way to calculate these estimates."
        },
        "payhip_link": "https://payhip.com/b/RVbqM",
        "button_text": "Master GCSE Stats & Prob: Download the Pack"
    },
    // 22 June
    {
        "id": "002173",
        "date": "22 June 2026",
        "major_area": "Algebra",
        "topic": "Graphs",
        "subtopic": "Equation of a Circle",
        "difficulty": "8/9",
        "img": "true",
        "q": "A circle is centered at the origin $(0,0)$ and has the equation $x^2 + y^2 = 20$.<br>The point $P(-4, 2)$ lies on the circumference of the circle.<br>(a) Show algebraically that point $P$ lies on the circle.<br>(b) Find the gradient of the radius $OP$.<br>(c) Find the equation of the tangent to the circle at point $P$. Give your answer in the form $y = mx + c$.",
        "steps": [
            "For part (a), we substitute the coordinates $x = -4$ and $y = 2$ into the left hand side of the equation.",
            "Calculation: $(-4)^2 + (2)^2 = 16 + 4 = 20$. Since this equals the right hand side, the point lies on the circle.",
            "For part (b), the gradient of the radius from $(0,0)$ to $(-4, 2)$ is $\\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{2 - 0}{-4 - 0} = -\\dfrac{2}{4}$.",
            "Simplifying this gives a gradient of $-0.5$.",
            "For part (c), a tangent is always perpendicular to the radius at the point of contact. The gradient of the tangent is the negative reciprocal of $-0.5$, which is $2$.",
            "We use the straight line equation $y - y_1 = m(x - x_1)$ with the point $(-4, 2)$ and gradient $m = 2$.",
            "Calculation: $y - 2 = 2(x - (-4)) \\implies y - 2 = 2(x + 4) \\implies y - 2 = 2x + 8$.",
            "Adding 2 to both sides yields the final equation.",
            "Final Answer: $$(a)\\ \\text{Shown algebraically},\\ (b)\\ -0.5,\\ (c)\\ y = 2x + 10$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Negative Reciprocal",
            "content": "Finding the equation of a tangent is a multi-step process that beautifully combines circle geometry with coordinate algebra. The critical step is remembering that Tangent Gradient $\\times$ Radius Gradient $= -1$. If you forget to flip the sign and the fraction, your tangent will slice straight through the middle of the circle!"
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    // 23 June
    {
        "id": "002174",
        "date": "23 June 2026",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "The Sine Rule",
        "difficulty": "6/7",
        "img": "true",
        "q": "The area of triangle $ABC$ is $30\\text{ cm}^2$. The length of $AB$ is $8.5\\text{ cm}$ and the length of $AC$ is $10.2\\text{ cm}$.<br>Given that the angle $BAC$ is obtuse, calculate the size of angle $BAC$ to 1 decimal place.",
        "steps": [
            "We use the trigonometric formula for the area of a triangle: $\\text{Area} = \\dfrac{1}{2}bc\\sin(A)$.",
            "Substituting our known values into the formula: $30 = 0.5 \\times 8.5 \\times 10.2 \\times \\sin(A)$.",
            "We simplify the right hand side: $30 = 43.35 \\times \\sin(A)$.",
            "Dividing both sides by 43.35 isolates the sine function: $\\sin(A) = \\dfrac{30}{43.35} \\approx 0.69204...$.",
            "We use the inverse sine function to find the primary (acute) angle: $A = \\sin^{-1}(0.69204...) \\approx 43.78...^\\circ$.",
            "Because the question explicitly states the angle is obtuse, we must use the sine symmetry rule ($\\sin(x) = \\sin(180-x)$) to find the second quadrant solution.",
            "Calculation: $180^\\circ - 43.78...^\\circ = 136.21...^\\circ$.",
            "Final Answer: $$136.2^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The Ambiguous Obtuse",
            "content": "Calculators will only ever return the principal (acute) angle when you use the inverse sine button. It is your mathematical responsibility to read the question carefully. If the word 'obtuse' appears, you must actively subtract your calculator's answer from 180 degrees to gain the final marks."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    // 24 June
    {
        "id": "002175",
        "date": "24 June 2026",
        "major_area": "Geometry",
        "topic": "Similarity",
        "subtopic": "Comparing Lengths, Areas, and Volumes",
        "difficulty": "8/9",
        "img": "true",
        "q": "A large solid cone has a vertical height of $30\\text{ cm}$. A smaller, mathematically similar cone of vertical height $10\\text{ cm}$ is cut from the top of the large cone and removed.<br>The volume of the small removed cone is $40\\text{ cm}^3$.<br>(a) Find the volume scale factor between the small cone and the large cone.<br>(b) Calculate the total volume of the large cone before the cut.<br>(c) Calculate the volume of the frustum (the remaining bottom part) that is left over.",
        "steps": [
            "For part (a), we first find the linear scale factor ($k$) between the heights. Calculation: $k = 30 \\div 10 = 3$.",
            "The volume scale factor is the cube of the linear scale factor. Calculation: $k^3 = 3^3 = 27$.",
            "For part (b), we multiply the volume of the small cone by the volume scale factor to find the volume of the original large cone.",
            "Calculation: $40 \\times 27 = 1080\\text{ cm}^3$.",
            "For part (c), a frustum is created by subtracting the small top cone from the large original cone.",
            "Calculation: $1080 - 40 = 1040\\text{ cm}^3$.",
            "Final Answer: $$(a)\\ 27,\\ (b)\\ 1080\\text{ cm}^3,\\ (c)\\ 1040\\text{ cm}^3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Frustum Fundamentals",
            "content": "A frustum might look like a completely new and complex shape, but it is always just 'Big Cone minus Small Cone'. Provided you use the linear scale factor ($k$) to find the volume scale factor ($k^3$), you can easily find the volume of the big cone and perform the subtraction."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master GCSE Geometry: Download the Pack"
    }



]