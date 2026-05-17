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
            "<img src='images/06/g_04_ans.png' style='width:100%; max-width:400px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
            "For part (c), we find the median position by halving the total frequency. Calculation: $60 \\div 2 = 30$.",
            "We locate 30 on the vertical Cumulative Frequency axis, draw a horizontal line across to our curve, and drop a vertical line down to the Weight axis.",
            "Reading from the horizontal axis gives our estimated median weight.",
            "Final Answer: $$(a)\\ 8, 26, 50, 60,\\ (c)\\ 143\\text{ g} \\text{ (Accept } 142\\text{-}144\\text{ g)}$$"
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
    }



]