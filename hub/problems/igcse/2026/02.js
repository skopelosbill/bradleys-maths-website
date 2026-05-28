const problemBank =[
    // 1 February
    {
        "id": "003032",
        "date": "1 February 2026",
        "major_area": "Algebra",
        "topic": "Simplifying Expressions",
        "subtopic": "Simplifying Expressions",
        "difficulty": "C/D",
        "q": "Simplify the following expressions fully:<br>(a) $12a + 4b - 7a - 5b$<br>(b) $3x^2 + 5x - 2x^2 + 7 - 4x$<br>(c) $4s^2t - 3rt + 2ts^2 + 5tr - st^2$",
        "steps":[
            "For part (a), we group the like terms for '$a$' and '$b$': $(12a - 7a) + (4b - 5b)$.",
            "This simplifies to $5a - b$.",
            "For part (b), we group the $x^2$ terms, the $x$ terms, and the constants: $(3x^2 - 2x^2) + (5x - 4x) + 7$.",
            "This simplifies to $x^2 + x + 7$.",
            "For part (c), we identify like terms. Note that $s^2t$ and $ts^2$ are identical. We also group $rt$ and $tr$ terms.",
            "Calculation: $(4s^2t + 2s^2t) + (-3rt + 5rt) - st^2$.",
            "Final Answer: $$(a)\\ 5a - b,\\ (b)\\ x^2 + x + 7,\\ (c)\\ 6s^2t + 2rt - st^2$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 19a + 9b,\\ (b)\\ x^2 + 9x + 7,\\ (c)\\ 4s^2t - 3rt + 2ts^2 + 5tr - st^2$$",
        "feedback": "You added unlike terms together in parts (a) and (b), and in part (c) you did not combine any like terms at all."
    },
    {
        "ans": "$$(a)\\ 5a + b,\\ (b)\\ x^2 - x + 7,\\ (c)\\ 6s^2t - 2rt - st^2$$",
        "feedback": "You made sign errors when combining the $b$ terms in (a), the $x$ terms in (b), and the $rt$ terms in (c)."
    },
    {
        "ans": "$$(a)\\ 12a - 7a + 4b - 5b,\\ (b)\\ x^2 + x + 7,\\ (c)\\ 6s^2t + 2rt + st^2$$",
        "feedback": "Part (b) is correct, but in (a) you did not simplify, and in (c) you changed the sign of the $st^2$ term."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Commutativity in Algebra",
            "content": "A common point of confusion is whether $s^2t$ and $ts^2$ are like terms. Because multiplication is commutative, the order of the variables does not matter, provided the powers are identical. Identifying these 'hidden' like terms is a vital skill for simplifying complex expressions in the Extended syllabus."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 2 February
    {
        "id": "003033",
        "date": "2 February 2026",
        "major_area": "Geometry",
        "topic": "Angles",
        "subtopic": "Angle Properties",
        "difficulty": "B/C",
        "img": "true",
        "q": "The diagram shows two parallel lines $L_1$ and $L_2$ intersected by two transversals.<br>(a) Find the values of $a$, $b$ and $c$.<br>(b) Give a geometric reason for your answer for $a$.",
        "steps":[
            "For part (a), we identify angle $a$ as $143^\\circ$ because it is a corresponding angle to the one given on the parallel line.",
            "Angle $b$ is $40^\\circ$ because it is an alternate angle within the parallel lines.",
            "Angle $c$ can be found using the exterior angle property of a triangle: $c = a - b$ or by considering the interior angles.",
            "Calculation: $c = 143^\\circ - 40^\\circ = 103^\\circ$.",
            "For part (b), the reason is that corresponding angles between parallel lines are equal.",
            "Final Answer: $$(a)\\ a = 143^\\circ, b = 40^\\circ, c = 103^\\circ,\\ (b)\\ \\text{Corresponding angles are equal}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ a = 37^\\circ, b = 40^\\circ, c = 77^\\circ,\\ (b)\\ \\text{Alternate angles are equal}$$",
        "feedback": "You used the supplementary angle instead of the corresponding angle for $a$."
    },
    {
        "ans": "$$(a)\\ a = 143^\\circ, b = 140^\\circ, c = 3^\\circ,\\ (b)\\ \\text{Co-interior angles sum to }180^\\circ$$",
        "feedback": "Part (a) misidentifies angle $b$ as co-interior instead of alternate."
    },
    {
        "ans": "$$(a)\\ a = 40^\\circ, b = 143^\\circ, c = 103^\\circ,\\ (b)\\ \\text{Vertically opposite angles are equal}$$",
        "feedback": "You swapped the corresponding and alternate angles."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Naming the Rule",
            "content": "In the IGCSE Extended exam, simply finding the angle is often only worth one mark. The second mark comes from using the formal geometric term. Ensure you use 'Alternate', 'Corresponding', or 'Co-interior' correctly. Avoid informal terms like 'Z-angles' or 'F-angles', as these are no longer accepted by Cambridge examiners."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 3 February
    {
        "id": "003034",
        "date": "3 February 2026",
        "major_area": "Number",
        "topic": "Compound Interest",
        "subtopic": "Percentage Change and Interest",
        "difficulty": "B/A",
        "q": "Jade invests $\\text{€}18,000$ at $5.25\\%$ per year compound interest for 10 years.<br>(a) Calculate the total value of her investment at the end of 10 years. Give your answer to the nearest Euro.<br>(b) Round your answer to part (a) to the nearest ten thousand Euros.",
        "steps":[
            "For part (a), we use the compound interest multiplier: $1 + 0.0525 = 1.0525$.",
            "The formula for the total value is $18000 \\times (1.0525)^{10}$.",
            "Calculation: $18000 \\times 1.66810... = 30025.86...$.",
            "Rounding to the nearest Euro gives $\\text{€}30,026$.",
            "For part (b), we round $\\text{€}30,026$ to the nearest ten thousand.",
            "Since the thousands digit is 0, we round down.",
            "Final Answer: $$(a)\\text{ €}30,026,\\ (b)\\text{ €}30,000$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\text{ €}28,000,\\ (b)\\text{ €}30,000$$",
        "feedback": "Part (a) uses simple interest instead of compound interest."
    },
    {
        "ans": "$$(a)\\text{ €}30,026,\\ (b)\\text{ €}40,000$$",
        "feedback": "Part (a) is correct, but in part (b) you rounded to the nearest ten thousand incorrectly."
    },
    {
        "ans": "$$(a)\\text{ €}31,000,\\ (b)\\text{ €}30,000$$",
        "feedback": "Part (a) overestimates the compound multiplier."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Significant Rounding",
            "content": "Financial questions in IGCSE Paper 4 often conclude with a specific rounding instruction. While $\\text{€}€30,026$ is the accurate value, the examiner is testing your understanding of place value by asking for the 'nearest ten thousand'. Always double-check which column you are rounding to in the final step."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 4 February
    {
        "id": "003035",
        "date": "4 February 2026",
        "major_area": "Geometry",
        "topic": "Polygons",
        "subtopic": "Polygons and Circles",
        "difficulty": "B/C",
        "q": "(a) A regular polygon has an interior angle of $165^\\circ$. Calculate how many sides it has.<br>(b) A regular polygon has 12 sides. Calculate the size of each interior angle.",
        "steps":[
            "For part (a), we first find the exterior angle by subtracting the interior angle from $180^\\circ$.",
            "Calculation: $180^\\circ - 165^\\circ = 15^\\circ$.",
            "The sum of exterior angles is always $360^\\circ$. Number of sides $n = 360 \\div 15 = 24$.",
            "For part (b), we find the exterior angle first: $360 \\div 12 = 30^\\circ$.",
            "The interior angle is $180^\\circ - 30^\\circ = 150^\\circ$.",
            "Final Answer: $$(a)\\ 24\\text{ sides},\\ (b)\\ 150^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 12,\\ (b)\\ 165^\\circ$$",
        "feedback": "You halved the exterior angle instead of dividing 360 by it."
    },
    {
        "ans": "$$(a)\\ 15,\\ (b)\\ 150^\\circ$$",
        "feedback": "Part (b) is correct, but in part (a) you used the interior angle formula incorrectly."
    },
    {
        "ans": "$$(a)\\ 24,\\ (b)\\ 30^\\circ$$",
        "feedback": "Part (a) is correct, but in part (b) you gave the exterior angle instead of the interior angle."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Exterior Path",
            "content": "Even when a question asks about interior angles, it is almost always more efficient to work via the exterior angles. The property that exterior angles sum to $360^\\circ$ is a constant that applies to all polygons, making the algebra significantly simpler and less prone to error."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 5 February
    {
        "id": "003036",
        "date": "5 February 2026",
        "major_area": "Number",
        "topic": "Decimals",
        "subtopic": "Recurring Decimals",
        "difficulty": "B/A",
        "q": "Without using a calculator, express the recurring decimal $0.6\\dot{4}$ as a fraction in its lowest terms.",
        "steps":[
            "We let $x = 0.6444...$.",
            "To isolate the recurring part, we multiply by 10: $10x = 6.444...$.",
            "To create a second equation with the same recurring 'tail', we multiply by 100: $100x = 64.444...$.",
            "We subtract the two equations: $100x - 10x = 64.444... - 6.444...$.",
            "This gives $90x = 58$.",
            "Solving for $x$: $x = \\dfrac{58}{90}$.",
            "Dividing both the numerator and the denominator by 2 gives the simplest form $\\dfrac{29}{45}$.",
            "Final Answer: $$\\dfrac{29}{45}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$\\dfrac{58}{90}$$",
        "feedback": "This is the unsimplified fraction. You must divide numerator and denominator by 2."
    },
    {
        "ans": "$$\\dfrac{29}{90}$$",
        "feedback": "You subtracted incorrectly when forming the equation $100x - 10x$."
    },
    {
        "ans": "$$\\dfrac{64}{99}$$",
        "feedback": "You treated the decimal as $0.\\dot{64}$ instead of $0.6\\dot{4}$."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Tail Alignment",
            "content": "The 2025 non-calculator Paper 2 requires formal algebraic proof for recurring decimals. The 'secret' is to ensure the digits after the decimal point match perfectly before you subtract. For $0.6\\dot{4}$, subtracting $x$ from $10x$ would not work; you must use $10x$ and $100x$ to align the recurring 4s."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 6 February
    {
        "id": "003037",
        "date": "6 February 2026",
        "major_area": "Trigonometry",
        "topic": "Pythagoras",
        "subtopic": "Pythagoras Theorem",
        "difficulty": "B/C",
        "img": "true",
        "q": "In the right-angled triangle $ABC$, $AC = 20\\text{ cm}$ and $BC = 7\\text{ cm}$.<br>(a) Calculate the length of $AB$ to 3 significant figures.<br>(b) Calculate the size of angle $BAC$ to 1 decimal place.",
        "steps":[
            "(a) The right-angle is shown at $\\angle ACB$ so $AB$ is the hypotenuse: $AB^2 = 20^2 + 7^2 = 400 + 49 = 449$.",
            "Taking the square root: $AB = \\sqrt{449} \\approx 21.189...$.",
            "Rounding to 3 significant figures gives $21.2\\text{ cm}$.",
            "(b) We are given the opposite and adjacent sides and so use the tangent ratio: $\\tan(\\angle BAC) = \\dfrac{\\text{Opposite}}{\\text{Adjacent}} = \\dfrac{7}{20}$.",
            "Calculation: $\\angle BAC = \\tan^{-1}(0.35) \\approx 19.29...^\\circ$.",
            "Rounding to 1 decimal place: $19.3^\\circ$.",
            "Final Answer: $$(a)\\ 21.2\\text{ cm},\\ (b)\\ 19.3^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 20.6\\text{ cm},\\ (b)\\ 17.5^\\circ$$",
        "feedback": "You subtracted the squares instead of adding them, and used the wrong trig ratio."
    },
    {
        "ans": "$$(a)\\ 21.2\\text{ cm},\\ (b)\\ 18.0^\\circ$$",
        "feedback": "Part (a) is correct, but in part (b) you rounded too early or used the hypotenuse incorrectly."
    },
    {
        "ans": "$$(a)\\ 27\\text{ cm},\\ (b)\\ 19.3^\\circ$$",
        "feedback": "Part (b) is correct, but in part (a) you added the sides instead of applying Pythagoras."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Choosing the Ratio",
            "content": "In trigonometry, always use the side lengths provided in the question rather than values you have calculated yourself. By using $7$ and $20$ to find the angle, you avoid 'carried-over' rounding errors from part (a), ensuring your final angle is as precise as possible."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 7 February
    {
        "id": "003038",
        "date": "7 February 2026",
        "major_area": "Number",
        "topic": "Sets and Venn Diagrams",
        "subtopic": "Sets and Venn Diagrams",
        "difficulty": "B",
        "img": "true",
        "q": "In a universal set of 50 students, $n(A) = 32$, $n(B) = 28$, and $n((A \\cup B)') = 8$.<br>(a) Find the number of students in the intersection, $n(A \\cap B)$.<br>(b) Find the number of students who are in $B$ but not in $A$.",
        "steps":[
            "For part (a), we first find the number of students in the union: $n(A \\cup B) = 50 - 8 = 42$.",
            "We use the formula: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.",
            "Substituting: $42 = 32 + 28 - n(A \\cap B) \\implies 42 = 60 - n(A \\cap B)$.",
            "Rearranging gives $n(A \\cap B) = 60 - 42 = 18$.",
            "For part (b), students in $B$ but not $A$ are represented by the set notation $n(B \\cap A')$.",
            "Calculation: $n(B) - n(A \\cap B) = 28 - 18 = 10$.",
            "Final Answer: $$(a)\\ 18,\\ (b)\\ 10$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 14,\\ (b)\\ 14$$",
        "feedback": "You subtracted the complement from only one set instead of using the union formula."
    },
    {
        "ans": "$$(a)\\ 18,\\ (b)\\ 28$$",
        "feedback": "Part (a) is correct, but in part (b) you forgot to remove the intersection from set B."
    },
    {
        "ans": "$$(a)\\ 10,\\ (b)\\ 18$$",
        "feedback": "You swapped the intersection with the B-only region."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Union Formula",
            "content": "The formula $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$ is one of the most important tools in IGCSE Set Theory. It accounts for the 'double-counting' of students who are in both sets. Mastering this algebraically is far more efficient than drawing and filling a Venn diagram by trial and error."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 8 February
    {
        "id": "003039",
        "date": "8 February 2026",
        "major_area": "Number",
        "topic": "Compound interest",
        "subtopic": "Percentage Change and Interest",
        "difficulty": "B/A",
        "q": "Peter invests $£20,000$ for 10 years. At the end of the period, the investment is worth $£35,817$ correct to the nearest pound.<br>(a) Show that the annual compound interest rate, $r$, satisfies the equation $(1 + \\frac{r}{100})^{10} = 1.79085$.<br>(b) Calculate the value of $r$ to 1 decimal place.",
        "steps":[
            "For part (a), we use the compound interest formula: $A = P(1 + \\dfrac{r}{100})^n$.",
            "Substituting the given values: $35817 = 20000(1 + \\dfrac{r}{100})^{10}$.",
            "Dividing both sides by 20000: $\\dfrac{35817}{20000} = (1 + \\dfrac{r}{100})^{10}$.",
            "Calculation: $1.79085 = (1 + \\dfrac{r}{100})^{10}$. This matches the required form.",
            "For part (b), we take the $10^{th}$ root of both sides to isolate $(1 + \\dfrac{r}{100})$.",
            "Calculation: $1 + \\dfrac{r}{100} = \\sqrt[10]{1.79085} \\approx 1.05999...$.",
            "Subtracting 1 and multiplying by 100 gives $r = 5.999...$.",
            "Rounding to 1 decimal place, we obtain $6.0\\%$.",
            "Final Answer: $$(a)\\ \\text{Shown},\\ (b)\\ 6.0\\%$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ \\text{Shown},\\ (b)\\ 3.0\\%$$",
        "feedback": "You took the square root instead of the tenth root when isolating the multiplier."
    },
    {
        "ans": "$$(a)\\ \\text{Incorrect},\\ (b)\\ 10.0\\%$$",
        "feedback": "Part (a) does not match the required form, and part (b) uses simple interest instead of compound."
    },
    {
        "ans": "$$(a)\\ \\text{Shown},\\ (b)\\ 5.0\\%$$",
        "feedback": "You rounded too early when taking the tenth root, giving an underestimated rate."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Power Roots",
            "content": "Finding the interest rate is a common 'working backwards' task in Paper 4. On your calculator, you must use the $x\\sqrt{y}$ key or raise the number to the power of $\\dfrac{1}{10}$. Ensure you do not round your decimals mid-calculation; keep the full display value to ensure the final percentage is accurate."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 9 February
    {
        "id": "003040",
        "date": "9 February 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Changing the Subject of a Formula",
        "difficulty": "B/A",
        "q": "The variable $y$ is defined as $y = \\sqrt[3]{\\dfrac{p^7}{q^2}}$.<br>(a) Find the value of $y$ when $p = 9$ and $q = 3$, giving your answer as an integer.<br>(b) Rearrange the formula to make $p$ the subject.",
        "steps": [
            "For part (a), we substitute the values into the formula: $y = \\sqrt[3]{\\dfrac{9^7}{3^2}}$.",
            "We can express 9 as $3^2$ to simplify: $y = \\sqrt[3]{\\dfrac{(3^2)^7}{3^2}} = \\sqrt[3]{\\dfrac{3^{14}}{3^2}}$.",
            "Applying index laws: $y = \\sqrt[3]{3^{12}}$. Since a cube root is the power of $\\dfrac{1}{3}$, $y = 3^4$.",
            "Calculation: $y = 81$.",
            "For part (b), we begin with $y = \\sqrt[3]{\\dfrac{p^7}{q^2}}$ and cube both sides: $y^3 = \\dfrac{p^7}{q^2}$.",
            "Multiplying by $q^2$: $p^7 = q^2 y^3$.",
            "Taking the $7^{th}$ root of both sides isolates $p$.",
            "Final Answer: $$(a)\\ 81,\\ (b)\\ p = \\sqrt[7]{q^2 y^3}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 27,\\ (b)\\ p = q^{2/7} y^{1/3}$$",
        "feedback": "Part (a) incorrectly simplifies the indices. Part (b) applies the cube root incorrectly when rearranging."
    },
    {
        "ans": "$$(a)\\ 81,\\ (b)\\ p = (q^2 y^3)^7$$",
        "feedback": "Part (a) is correct, but in part (b) you inverted the power instead of taking the seventh root."
    },
    {
        "ans": "$$(a)\\ 9,\\ (b)\\ p = q^{6/7} y^{3/7}$$",
        "feedback": "Both parts misapply index laws. The cube root must be undone before isolating p."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Indices as Subjects",
            "content": "When rearranging formulae involving roots and powers, work from the 'outside-in'. The cube root is the outermost operation, so cubing both sides must be your first step. Similarly, to 'undo' a power of 7, you must apply a $7^{th}$ root to the entire opposite side."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 10 February
    {
        "id": "003041",
        "date": "10 February 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Simultaneous Equations (Linear – Quadratic)",
        "difficulty": "A/A*",
        "q": "The straight line $y = 3x - 1$ intersects the curve $y = 2x^2 - 3x + 2$ at two points.<br>(a) Show that the $x$-coordinates of the intersections satisfy the equation $2x^2 - 6x + 3 = 0$.<br>(b) Calculate the coordinates of these two points, giving your answers to 2 decimal places.",
        "steps":[
            "For part (a), we equate the two expressions for $y$: $2x^2 - 3x + 2 = 3x - 1$.",
            "Subtracting $3x$ and adding 1 to both sides: $2x^2 - 6x + 3 = 0$. This matches the requirement.",
            "For part (b), we apply the quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.",
            "Substituting: $x = \\dfrac{-(-6) \\pm \\sqrt{(-6)^2 - 4(2)(3)}}{2(2)}$.",
            "Simplifying: $x = \\dfrac{6 \\pm \\sqrt{36 - 24}}{4} = \\dfrac{6 \\pm \\sqrt{12}}{4}$.",
            "Calculation: $x_1 \\approx 2.366...$ and $x_2 \\approx 0.633...$.",
            "Finding $y_1$: $3(2.366...) - 1 = 6.098...$. Finding $y_2$: $3(0.633...) - 1 = 0.901...$.",
            "Rounding both to 2 decimal places.",
            "Final Answer: $$(2.37, 6.10) \\text{ and } (0.63, 0.90)$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(3, 8) \\text{ and } (1, 2)$$",
        "feedback": "These come from solving the linear equation alone without substituting into the quadratic."
    },
    {
        "ans": "$$(2.37, 5.11) \\text{ and } (0.63, -0.11)$$",
        "feedback": "You substituted the x‑values into the quadratic instead of the simpler linear equation."
    },
    {
        "ans": "$$(2.00, 5.00) \\text{ only}$$",
        "feedback": "You found only one intersection. A line and a parabola typically meet twice."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Coordinate Pairs",
            "content": "A common mistake in simultaneous equations is finding the $x$-values and forgetting to calculate the $y$-values. For full marks in Paper 4, you must present your answers as clear coordinate pairs. Always use the linear equation to find $y$; it is simpler and less prone to squaring errors."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 11 February
    {
        "id": "003042",
        "date": "11 February 2026",
        "major_area": "Vectors",
        "topic": "Vectors",
        "subtopic": "Vector Geometry",
        "difficulty": "B/A",
        "q": "Vectors are given as $\\mathbf{a} = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} -7 \\\\ 9 \\end{pmatrix}$.<br>(a) Find the vector $\\mathbf{a} - 3\\mathbf{b}$ as a column vector.<br>(b) Calculate the magnitude $|\\mathbf{b}|$. Give your answer in exact surd form.",
        "steps":[
            "For part (a), we first calculate $3\\mathbf{b}$: $3 \\times \\begin{pmatrix} -7 \\\\ 9 \\end{pmatrix} = \\begin{pmatrix} -21 \\\\ 27 \\end{pmatrix}$.",
            "Now perform the subtraction: $\\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix} - \\begin{pmatrix} -21 \\\\ 27 \\end{pmatrix} = \\begin{pmatrix} 5 - (-21) \\\\ -2 - 27 \\end{pmatrix}$.",
            "Calculation: $\\begin{pmatrix} 26 \\\\ -29 \\end{pmatrix}$.",
            "For part (b), magnitude is found using Pythagoras: $\\sqrt{x^2 + y^2}$.",
            "Calculation: $\\sqrt{(-7)^2 + 9^2} = \\sqrt{49 + 81}$.",
            "Summing these gives $\\sqrt{130}$. Since 130 has no square factors, the surd is already in its simplest form.",
            "Final Answer: $$(a)\\ \\begin{pmatrix} 26 \\\\ -29 \\end{pmatrix},\\ (b)\\ \\sqrt{130}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ \\begin{pmatrix} -16 \\\\ 7 \\end{pmatrix},\\ (b)\\ \\sqrt{22}$$",
        "feedback": "You added instead of subtracting in part (a), and mis‑squared the components in part (b)."
    },
    {
        "ans": "$$(a)\\ \\begin{pmatrix} 26 \\\\ -29 \\end{pmatrix},\\ (b)\\ 11.4$$",
        "feedback": "Part (a) is correct, but in part (b) you gave a decimal instead of an exact surd."
    },
    {
        "ans": "$$(a)\\ \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix},\\ (b)\\ \\sqrt{1300}$$",
        "feedback": "Part (a) ignores the scalar multiplication. Part (b) incorrectly multiplies the components."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Magnitude and Modulus",
            "content": "In IGCSE, $|\\mathbf{b}|$ denotes the magnitude (length) of the vector. Treat the column vector components as the sides of a right-angled triangle. Because you are squaring the components, the negative sign on $-7$ becomes irrelevant to the final magnitude result, as $(-7)^2 = +49$."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 12 February
    {
        "id": "003043",
        "date": "12 February 2026",
        "major_area": "Algebra",
        "topic": "Sequences",
        "subtopic": "Sequences",
        "difficulty": "B/C",
        "q": "The first four terms of an arithmetic sequence are $19, 13, 7, 1$.<br>(a) Calculate the $5^{th}$ term.<br>(b) Find an expression for the $n^{th}$ term, $T_n$.<br>(c) Determine if $-167$ is a term in this sequence.",
        "steps":[
            "For part (a), we find the common difference $d$ by subtracting consecutive terms: $13 - 19 = -6$.",
            "The $5^{th}$ term is $1 + (-6) = -5$.",
            "For part (b), we use $T_n = a + (n-1)d$ where $a = 19$.",
            "Substituting: $T_n = 19 + (n-1)(-6) = 19 - 6n + 6 = 25 - 6n$.",
            "For part (c), we set $25 - 6n = -167$ and solve for $n$.",
            "Subtracting 25: $-6n = -192$. Dividing by $-6$: $n = 32$.",
            "Since $n$ is a positive integer, $-167$ is indeed the $32^{nd}$ term.",
            "Final Answer: $$(a)\\ -5,\\ (b)\\ 25 - 6n,\\ (c)\\ \\text{Yes, the 32nd term}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 7,\\ (b)\\ 25 + 6n,\\ (c)\\ \\text{No}$$",
        "feedback": "You treated the sequence as increasing instead of decreasing, reversing the sign of d."
    },
    {
        "ans": "$$(a)\\ -11,\\ (b)\\ 19 - 6n,\\ (c)\\ \\text{Yes}$$",
        "feedback": "Part (c) is correct, but in (a) and (b) you used the wrong starting term."
    },
    {
        "ans": "$$(a)\\ -5,\\ (b)\\ 25 - 6n,\\ (c)\\ \\text{No}$$",
        "feedback": "Parts (a) and (b) are correct, but in part (c) you solved the equation incorrectly."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Decreasing Sequences",
            "content": "When a sequence decreases, the common difference ($d$) must be negative. A very common error is writing the $n^{th}$ term as $6n + 25$. Always test your formula with $n=1$: $25 - 6(1) = 19$. If your formula gives the correct first term, your algebra is likely sound."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 13 February
    {
        "id": "003044",
        "date": "13 February 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Standard Form",
        "difficulty": "B/C",
        "q": "Calculate the value of $\\dfrac{3.6 \\times 10^4}{1.8 \\times 10^{-3}}$.<br>(a) Give your answer in standard form without using a calculator.<br>(b) Give your answer as an ordinary number.",
        "steps":[
            "For part (a), we divide the coefficients: $3.6 \\div 1.8 = 2$.",
            "Next, we divide the powers of 10 by subtracting the indices: $10^4 \\div 10^{-3} = 10^{4 - (-3)}$.",
            "Simplifying the index: $10^{4 + 3} = 10^7$.",
            "The result in standard form is $2 \\times 10^7$.",
            "For part (b), $10^7$ represents a 1 followed by seven zeros.",
            "Calculation: $20,000,000$.",
            "Final Answer: $$(a)\\ 2 \\times 10^7,\\ (b)\\ 20,000,000$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 2 \\times 10^1,\\ (b)\\ 20$$",
        "feedback": "You subtracted the indices incorrectly: $4 - (-3)$ must become $4 + 3$, not $4 - 3$."
    },
    {
        "ans": "$$(a)\\ 0.2 \\times 10^8,\\ (b)\\ 2,000,000$$",
        "feedback": "Part (a) is not in standard form and the decimal shift was applied in the wrong direction."
    },
    {
        "ans": "$$(a)\\ 2 \\times 10^6,\\ (b)\\ 2,000,000$$",
        "feedback": "You added the powers incorrectly, using $4 + (-3)$ instead of $4 - (-3)$."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Negative Index Traps",
            "content": "The most frequent error in Paper 2 standard form questions is the subtraction of negative indices. Remember that $4 - (-3)$ is $4 + 3$. Miscalculating this as $10^1$ will lead to an answer that is six orders of magnitude smaller than the correct result."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 14 February
    {
        "id": "003045",
        "date": "14 February 2026",
        "major_area": "Statistics",
        "topic": "Averages & Range",
        "subtopic": "Averages and Measures of Spread (Ungrouped Data)",
        "difficulty": "B/C",
        "q": "The mean of five numbers is 12. When a sixth number, $x$, is added, the mean of all six numbers drops to 9.<br>(a) Calculate the sum of the original five numbers.<br>(b) Calculate the value of $x$.",
        "steps":[
            "For part (a), we use $\\text{Total} = \\text{Mean} \\times \\text{Count}$.",
            "Calculation: $12 \\times 5 = 60$.",
            "For part (b), the new mean is 9 and the new count is 6.",
            "The new total is $9 \\times 6 = 54$.",
            "The added number $x$ is the difference between the new total and the old total.",
            "Calculation: $54 - 60 = -6$.",
            "Final Answer: $$(a)\\ 60,\\ (b)\\ -6$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 12,\\ (b)\\ -48$$",
        "feedback": "You treated the mean as the total instead of multiplying by the number of values."
    },
    {
        "ans": "$$(a)\\ 60,\\ (b)\\ 6$$",
        "feedback": "Part (a) is correct, but in part (b) you forgot that the mean decreased, so the added value must be below 12."
    },
    {
        "ans": "$$(a)\\ 72,\\ (b)\\ -18$$",
        "feedback": "You used the new mean to calculate the original total, reversing the logic."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Negative Data",
            "content": "In statistics problems, do not be alarmed if a piece of data is negative. Mathematically, the 'mean' is just a balance point. If adding a number causes the mean to decrease, the added number must be lower than the previous mean. In this case, it was low enough to be a negative value."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
//15 Feb
    // 15 February
    {
        "id": "003046",
        "date": "15 February 2026",
        "major_area": "Geometry",
        "topic": "Circle Theorems",
        "subtopic": "Circle theorems 2",
        "difficulty": "B/A",
        "img": "true",
        "q": "In the diagram, points $A$, $B$, $C$ and $D$ lie on the circumference of a circle. Given that $\\angle BCA = 26^\\circ$ and $\\angle DAB = 62^\\circ$.<br>(a) Find the size of $\\angle BDA$, giving a reason.<br>(b) Find the size of $\\angle BCD$, giving a reason.<br>(c) Calculate the size of $\\angle ABD$.",
        "steps":[
            "For part (a), we identify that $\\angle BDA$ and $\\angle BCA$ are subtended by the same arc $AB$.",
            "According to the circle theorem, angles in the same segment are equal, therefore $\\angle BDA = 26^\\circ$.",
            "For part (b), we observe that $ABCD$ is a cyclic quadrilateral because all four vertices lie on the circumference.",
            "The opposite angles of a cyclic quadrilateral are supplementary, so $\\angle BCD = 180^\\circ - \\angle DAB = 180^\\circ - 62^\\circ = 118^\\circ$.",
            "For part (c), we consider the triangle $\\triangle ABD$. The sum of angles in a triangle is $180^\\circ$.",
            "We calculate the remaining angle: $\\angle ABD = 180^\\circ - (62^\\circ + 26^\\circ) = 92^\\circ$.",
            "Final Answer: $$(a)\\ 26^\\circ,\\ (b)\\ 118^\\circ,\\ (c)\\ 92^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 52^\\circ,\\ (b)\\ 118^\\circ,\\ (c)\\ 10^\\circ$$",
        "feedback": "You doubled the angle in the same segment instead of keeping it equal."
    },
    {
        "ans": "$$(a)\\ 26^\\circ,\\ (b)\\ 62^\\circ,\\ (c)\\ 92^\\circ$$",
        "feedback": "Part (a) and (c) are correct, but in part (b) you forgot that opposite angles in a cyclic quadrilateral sum to $180^\\circ$."
    },
    {
        "ans": "$$(a)\\ 154^\\circ,\\ (b)\\ 118^\\circ,\\ (c)\\ 8^\\circ$$",
        "feedback": "Part (a) incorrectly uses the exterior angle of the triangle instead of the same‑segment theorem."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying Segments",
            "content": "A common challenge in circle geometry is identifying which angles are related. I always tell my students to trace the 'legs' of the angle back to the arc. If two angles stand on the same arc, they are identical. Combining this with the cyclic quadrilateral property ($180^\\circ$ opposite sum) is the key to solving complex IGCSE circle problems."
        },
        "payhip_link": "https://payhip.com/b/L6skH",
        "button_text": "Master IGCSE Coordinate Geometry and Geometry: Download the Extended Pack"
    },
    // 16 February
    {
        "id": "003047",
        "date": "16 February 2026",
        "major_area": "Algebra",
        "topic": "Functions",
        "subtopic": "Inverse Functions",
        "difficulty": "A/A*",
        "q": "The function $f$ is defined as $f(x) = 3^x$.<br>(a) Calculate the value of $f(4)$.<br>(b) Find the value of $x$ when $f^{-1}(x) = 4$.",
        "steps":[
            "For part (a), we substitute $x = 4$ into the function definition: $f(4) = 3^4$.",
            "Calculation: $3 \\times 3 \\times 3 \\times 3 = 81$.",
            "For part (b), we apply the fundamental property of inverse functions: if $f^{-1}(x) = y$, then $f(y) = x$.",
            "Substituting our values, we need to find $x$ such that $f(4) = x$.",
            "As we calculated in part (a), $f(4) = 81$. Therefore, $x = 81$.",
            "Final Answer: $$(a)\\ 81,\\ (b)\\ 81$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 81,\\ (b)\\ 4$$",
        "feedback": "You reversed the inverse relationship. $f^{-1}(x)=4$ means $f(4)=x$, not the other way around."
    },
    {
        "ans": "$$(a)\\ 12,\\ (b)\\ 81$$",
        "feedback": "Part (b) is correct, but in part (a) you added the powers instead of multiplying 3 four times."
    },
    {
        "ans": "$$(a)\\ 81,\\ (b)\\ 3^4$$",
        "feedback": "Part (b) must be a numerical value, not an expression."
    }
],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Functional Reciprocity",
            "content": "This question tests your conceptual understanding of inverse functions rather than algebraic manipulation. You do not need to find the specific expression for $f^{-1}(x)$ (which would involve logarithms). Simply remember that the inverse function 'undoes' the original; if 4 maps to 81, then the inverse maps 81 back to 4."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 17 February
    {
        "id": "003048",
        "date": "17 February 2026",
        "major_area": "Mensuration",
        "topic": "3D Shapes",
        "subtopic": "2D Compound Shapes",
        "difficulty": "B/A",
        "img": "true",
        "q": "The diagram shows the cross-section of a storage unit consisting of two congruent trapeziums joined together.<br>(a) Calculate the total area of the cross-section.<br>(b) Calculate the length of the sloping roof, $x$.<br>(c) Calculate the pitch of the roof, angle $y^\\circ$, giving your answer to 1 decimal place.",
        "steps":[
            "For part (a), the area of one trapezium is $\\dfrac{1}{2}(a+b)h$. Using parallel sides $2.5\\text{ m}$ and $3\\text{ m}$ with height $2.5\\text{ m}$.",
            "Calculation: $0.5 \\times (2.5 + 3) \\times 2.5 = 6.875\\text{ m}^2$.",
            "Total area for both trapeziums: $2 \\times 6.875 = 13.75\\text{ m}^2$.",
            "For part (b), we identify a right-angled triangle where the base is the difference in height ($3 - 2.5 = 0.5\\text{ m}$) and the height is $2.5\\text{ m}$.",
            "Using Pythagoras: $x = \\sqrt{0.5^2 + 2.5^2} = \\sqrt{0.25 + 6.25} = \\sqrt{6.5} \\approx 2.55\\text{ m}$.",
            "For part (c), we use the tangent ratio in the same triangle: $\\tan(y) = \\dfrac{0.5}{2.5}$.",
            "Calculation: $y = \\tan^{-1}(0.2) \\approx 11.309...^\\circ$.",
            "Final Answer: $$(a)\\ 13.75\\text{ m}^2,\\ (b)\\ 2.55\\text{ m},\\ (c)\\ 11.3^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 6.875\\text{ m}^2,\\ (b)\\ 2.5\\text{ m},\\ (c)\\ 11.3^\\circ$$",
        "feedback": "You forgot to double the trapezium area in part (a)."
    },
    {
        "ans": "$$(a)\\ 13.75\\text{ m}^2,\\ (b)\\ 3.0\\text{ m},\\ (c)\\ 9.5^\\circ$$",
        "feedback": "Part (a) is correct, but in part (b) you added the sides instead of applying Pythagoras."
    },
    {
        "ans": "$$(a)\\ 20\\text{ m}^2,\\ (b)\\ 2.55\\text{ m},\\ (c)\\ 14.0^\\circ$$",
        "feedback": "Part (a) overestimates the area by using the wrong height."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Composite Mensuration",
            "content": "When dealing with composite shapes or unusual cross-sections, always look for the underlying 'standard' shapes. By breaking the roof slope into a right-angled triangle, you can easily apply Pythagoras and Trigonometry. This systematic decomposition is a vital skill for IGCSE Paper 4."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 18 February
    {
        "id": "003049",
        "date": "18 February 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Factorising 2",
        "difficulty": "A/A*",
        "q": "Factorise fully the expression: $30x^2 + 9x - 3$.",
        "steps":[
            "We begin by extracting the highest common numerical factor from all three terms, which is 3.",
            "The expression becomes: $3(10x^2 + 3x - 1)$.",
            "Now we factorise the quadratic inside the bracket using the AC method. We need two numbers that multiply to $10 \\times -1 = -10$ and sum to $+3$.",
            "The numbers are $+5$ and $-2$.",
            "We split the middle term: $3(10x^2 + 5x - 2x - 1)$.",
            "Factorising by grouping: $3[5x(2x + 1) - 1(2x + 1)]$.",
            "Combining the factors gives the final fully factorised form.",
            "Final Answer: $$3(5x - 1)(2x + 1)$$"
        ],
        "wrong_options": [
    {
        "ans": "$$3(10x^2 + 3x - 1)$$",
        "feedback": "You factored out the 3 but did not factorise the quadratic fully."
    },
    {
        "ans": "$$3(5x + 1)(2x - 1)$$",
        "feedback": "The signs are incorrect. The middle term must expand to $+3x$."
    },
    {
        "ans": "$$(15x - 3)(2x + 1)$$",
        "feedback": "You multiplied the common factor back in, so the expression is not fully factorised."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Factor First",
            "content": "A very common mistake is attempting to factorise the quadratic $30x^2 + 9x - 3$ directly. While mathematically possible, the numbers are unnecessarily large. Always check for a common numerical factor first; it simplifies the algebra and ensures you meet the 'factorise fully' instruction."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 19 February
    {
        "id": "003050",
        "date": "19 February 2026",
        "major_area": "Algebra",
        "topic": "Expanding Brackets",
        "subtopic": "Expanding Products",
        "difficulty": "B/A",
        "q": "(a) Expand and simplify $(x + 3)(x - 5)$.<br>(b) Hence, expand and simplify $(x + 3)(x - 5)(x - 2)$.",
        "steps":[
            "For part (a), we use the FOIL method to expand the two brackets: $x^2 - 5x + 3x - 15$.",
            "Collecting like terms gives $x^2 - 2x - 15$.",
            "For part (b), we multiply our resulting quadratic from part (a) by the final bracket: $(x^2 - 2x - 15)(x - 2)$.",
            "We distribute each term in the first bracket by each term in the second.",
            "Calculation: $x(x^2 - 2x - 15) - 2(x^2 - 2x - 15) = x^3 - 2x^2 - 15x - 2x^2 + 4x + 30$.",
            "Collecting like terms: $x^3 - 4x^2 - 11x + 30$.",
            "Final Answer: $$(a)\\ x^2 - 2x - 15,\\ (b)\\ x^3 - 4x^2 - 11x + 30$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ x^2 + 2x - 15,\\ (b)\\ x^3 - 4x^2 + 11x - 30$$",
        "feedback": "You added instead of subtracting the middle terms in part (a), which reversed the signs in part (b)."
    },
    {
        "ans": "$$(a)\\ x^2 - 8x + 15,\\ (b)\\ x^3 - 6x^2 - 5x - 30$$",
        "feedback": "Part (a) incorrectly multiplies the constants, which carries through to the cubic expansion."
    },
    {
        "ans": "$$(a)\\ x^2 - 2x - 15,\\ (b)\\ x^3 - 2x^2 - 15x - 2x^2 + 4x + 30$$",
        "feedback": "Part (a) is correct, but in part (b) you did not collect like terms."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Triple Expansion Rigour",
            "content": "Expanding triple brackets requires meticulous attention to signs, especially when negative numbers are involved. I recommend simplifying the first expansion completely before introducing the third bracket. This prevents the algebraic expression from becoming unmanageable and reduces the likelihood of calculation slips."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 20 February
    {
        "id": "003051",
        "date": "20 February 2026",
        "major_area": "Trigonometry",
        "topic": "Pythagoras and Trigonometry",
        "subtopic": "Pythagoras and Trigonometry in 3D",
        "difficulty": "A/A*",
        "img": "true",
        "q": "A cuboid has a length of $6\\text{ cm}$, a width of $4\\text{ cm}$ and a height of $2.5\\text{ cm}$.<br>(a) Calculate the length of the space diagonal correct to 3 significant figures.<br>(b) Calculate the angle that the space diagonal makes with the horizontal base of the cuboid.",
        "steps":[
            "For part (a), we use the 3D Pythagorean formula: $d^2 = l^2 + w^2 + h^2$.",
            "Substituting the values: $d^2 = 6^2 + 4^2 + 2.5^2 = 36 + 16 + 6.25 = 58.25$.",
            "Taking the square root: $d = \\sqrt{58.25} \\approx 7.632...$. Rounding to 3 sig figs: $7.63\\text{ cm}$.",
            "For part (b), we first find the length of the face diagonal on the base: $f = \\sqrt{6^2 + 4^2} = \\sqrt{52}$.",
            "We consider the right-angled triangle formed by the face diagonal ($f$), the height ($h=2.5$), and the space diagonal ($d$).",
            "The angle $\\theta$ is given by $\\tan(\\theta) = \\dfrac{\\text{Opposite}}{\\text{Adjacent}} = \\dfrac{2.5}{\\sqrt{52}}$.",
            "Calculation: $\\theta = \\tan^{-1}(0.3466...) \\approx 19.11...^circ$.",
            "Final Answer: $$(a)\\ 7.63\\text{ cm},\\ (b)\\ 19.1^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 6.40\\text{ cm},\\ (b)\\ 23.4^\\circ$$",
        "feedback": "You omitted the height when applying 3D Pythagoras, and used the wrong adjacent side for the angle."
    },
    {
        "ans": "$$(a)\\ 7.63\\text{ cm},\\ (b)\\ 11.3^\\circ$$",
        "feedback": "Part (a) is correct, but in part (b) you used the height and length instead of the base diagonal."
    },
    {
        "ans": "$$(a)\\ 8.25\\text{ cm},\\ (b)\\ 19.1^\\circ$$",
        "feedback": "Part (b) is correct, but in part (a) you added the lengths instead of squaring them."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Identifying 3D Triangles",
            "content": "The most difficult part of 3D trigonometry is visualizing the 2D triangle required for the angle. To find the angle with the base, you must use the diagonal of the base as your 'adjacent' side. I suggest drawing a separate 2D sketch of this internal triangle to avoid confusion."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 21 February
    {
        "id": "003052",
        "date": "21 February 2026",
        "major_area": "Algebra",
        "topic": "Direct & Inverse Proportion",
        "subtopic": "Proportion",
        "difficulty": "B/A",
        "q": "The variable $y$ is inversely proportional to the square root of $(x + 6)$. When $x = 10$, $y = 100$.<br>(a) Find the equation connecting $y$ and $x$.<br>(b) Calculate the value of $x$ when $y = 40$.",
        "steps":[
            "For part (a), we write the proportionality statement as $y = \\dfrac{k}{\\sqrt{x + 6}}$.",
            "We substitute the known values to find the constant $k$: $100 = \\dfrac{k}{\\sqrt{10 + 6}} = \\dfrac{k}{4}$.",
            "Solving for $k$ gives $k = 400$. The equation is $y = \\dfrac{400}{\\sqrt{x + 6}}$.",
            "For part (b), we substitute $y = 40$ into our equation: $40 = \\dfrac{400}{\\sqrt{x + 6}}$.",
            "Rearranging: $\\sqrt{x + 6} = \\dfrac{400}{40} = 10$.",
            "Squaring both sides to remove the root: $x + 6 = 10^2 = 100$.",
            "Subtracting 6 gives $x = 94$.",
            "Final Answer: $$(a)\\ y = \\dfrac{400}{\\sqrt{x + 6}},\\ (b)\\ 94$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ y = \\dfrac{40}{\\sqrt{x + 6}},\\ (b)\\ 10$$",
        "feedback": "You miscalculated the constant k, which led to an incorrect value of x."
    },
    {
        "ans": "$$(a)\\ y = \\dfrac{400}{x + 6},\\ (b)\\ 94$$",
        "feedback": "Part (b) is correct, but in part (a) you forgot that the denominator must be a square root."
    },
    {
        "ans": "$$(a)\\ y = \\dfrac{400}{\\sqrt{x + 6}},\\ (b)\\ 16$$",
        "feedback": "Part (a) is correct, but in part (b) you squared the 10 incorrectly."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Constant First",
            "content": "In IGCSE proportion questions, finding the constant $k$ is the absolute priority. Never attempt to find a new $x$ or $y$ value by 'guessing' the relationship. Once $k$ is established, the problem becomes a standard algebraic rearrangement. Remember to square both sides correctly when undoing a square root."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
//22 Feb
    {
        "id": "003053",
        "date": "22 February 2026",
        "major_area": "Trigonometry",
        "topic": "Trigonometry",
        "subtopic": "Solving Trigonometric Equations",
        "difficulty": "B/A",
        "q": "Without using a calculator, solve the equation $3 + 2\\sin(x) = 4$ for $0^\\circ \\le x \\le 360^\\circ$.",
        "steps":[
            "We begin by isolating the trigonometric term: subtract 3 from both sides to obtain $2\\sin(x) = 1$.",
            "Next, we divide by 2 to find the value of the sine function: $\\sin(x) = \\dfrac{1}{2}$.",
            "We recall from our exact trigonometric values that the principal solution for $\\sin(x) = \\dfrac{1}{2}$ is $x = 30^\\circ$.",
            "Since the sine value is positive, we must also find the solution in the second quadrant.",
            "Using the symmetry of the sine wave ($180^\\circ - \\theta$), we calculate the second solution: $180^\\circ - 30^\\circ = 150^\\circ$.",
            "Final Answer: $$30^\\circ \\text{ or } 150^\\circ$$"
        ],
        "wrong_options": [
    {
        "ans": "$$30^\\circ \\text{ or } 330^\\circ$$",
        "feedback": "You used the symmetry incorrectly. On the sine graph, $\\sin(x)$ is positive between $0^\\circ$ and $180^\\circ$, so $330^\\circ$ cannot be a solution."
    },
    {
        "ans": "$$150^\\circ \\text{ only}$$",
        "feedback": "You found the second‑quadrant solution but missed the first‑quadrant solution at $30^\\circ$, where the sine graph also has the value $\\tfrac{1}{2}$."
    },
    {
        "ans": "$$210^\\circ \\text{ or } 330^\\circ$$",
        "feedback": "These angles lie in regions where the sine graph is negative. The equation requires a positive sine value."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Exact Value Mastery",
            "content": "For the 2025 IGCSE syllabus, the ability to solve trigonometric equations without a calculator is essential. You must memorize the exact values for $30^\\circ, 45^\\circ,$ and $60^\\circ$. Once you have the primary angle, use the 'CAST' diagram or the unit circle to identify the second quadrant that shares the same sign."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master IGCSE Mensuration and Trigonometry: Download the Extended Pack"
    },
    // 23 February
    {
        "id": "003054",
        "date": "23 February 2026",
        "major_area": "Number",
        "topic": "Fractions",
        "subtopic": "The Four Operations with Mixed Numbers",
        "difficulty": "B/C",
        "q": "Without using a calculator, evaluate $1\\dfrac{3}{8} \\times 2\\dfrac{2}{5}$.<br>Give your answer as a mixed number in its simplest form. You must show all your working.",
        "steps":[
            "We first convert the mixed numbers into improper fractions.",
            "$1\\dfrac{3}{8} = \\dfrac{(1 \\times 8) + 3}{8} = \\dfrac{11}{8}$.",
            "$2\\dfrac{2}{5} = \\dfrac{(2 \\times 5) + 2}{5} = \\dfrac{12}{5}$.",
            "We multiply the two improper fractions: $\\dfrac{11}{8} \\times \\dfrac{12}{5}$.",
            "To simplify before multiplying, we divide 12 and 8 by their common factor of 4: $\\dfrac{11}{2} \\times \\dfrac{3}{5}$.",
            "Multiplying the numerators and denominators gives $\\dfrac{33}{10}$.",
            "Finally, we convert the result back into a mixed number.",
            "Final Answer: $$3\\dfrac{3}{10}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$\\dfrac{132}{40} = 3\\dfrac{12}{40}$$",
        "feedback": "You multiplied without simplifying first, and the final fraction is not in simplest form."
    },
    {
        "ans": "$$2\\dfrac{3}{10}$$",
        "feedback": "You divided instead of multiplying the improper fractions."
    },
    {
        "ans": "$$3\\dfrac{1}{2}$$",
        "feedback": "You rounded the improper fraction instead of converting it exactly."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Simplify Before You Multiply",
            "content": "A common mistake in Paper 2 is multiplying the large numerators directly (e.g., $11 \\times 12 = 132$). While correct, it often leads to arithmetic errors. Simplifying the fractions diagonally first will make the final conversion to a mixed number much easier and keep your calculations tidy."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 24 February
    {
        "id": "003055",
        "date": "24 February 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "Prime Numbers, HCF, LCM",
        "difficulty": "B/C",
        "q": "(a) Express 24 and 84 as products of their prime factors.<br>(b) Hence, find the Highest Common Factor (HCF) and the Lowest Common Multiple (LCM) of 24 and 84.",
        "steps":[
            "For part (a), we perform prime factor decomposition.",
            "$24 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$.",
            "$84 = 2 \\times 2 \\times 3 \\times 7 = 2^2 \\times 3 \\times 7$.",
            "For part (b), the HCF is found by taking the lowest power of all common prime factors: $2^2 \\times 3^1$.",
            "Calculation: $4 \\times 3 = 12$.",
            "The LCM is found by taking the highest power of every prime factor present: $2^3 \\times 3^1 \\times 7^1$.",
            "Calculation: $8 \\times 3 \\times 7 = 168$.",
            "Final Answer: $$(a)\\ 2^3 \\times 3, 2^2 \\times 3 \\times 7,\\ (b)\\ \\text{HCF}=12, \\text{LCM}=168$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ 24 = 2^2 \\times 6,\\ 84 = 4 \\times 21,\\ (b)\\ \\text{HCF}=6,\\ \\text{LCM}=336$$",
        "feedback": "Part (a) is not fully factorised into primes, which leads to incorrect HCF and LCM values."
    },
    {
        "ans": "$$(a)\\ 24 = 2^3 \\times 3,\\ 84 = 2^2 \\times 3 \\times 7,\\ (b)\\ \\text{HCF}=4,\\ \\text{LCM}=504$$",
        "feedback": "Part (a) is correct, but in part (b) you used the lowest power of 2 only and omitted the 3 when finding the HCF."
    },
    {
        "ans": "$$(a)\\ 24 = 2^3 \\times 3,\\ 84 = 2^2 \\times 3 \\times 7,\\ (b)\\ \\text{HCF}=24,\\ \\text{LCM}=84$$",
        "feedback": "You used the product of the smaller number for both HCF and LCM, which is incorrect."
    }
],

        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Venn Diagram Method",
            "content": "If you struggle with prime powers, try using a Venn diagram. Place the common prime factors in the intersection. The HCF is the product of the numbers in the intersection, and the LCM is the product of every number visible in the two circles. This visual approach prevents errors in missing or doubling factors."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 25 February
    {
        "id": "003056",
        "date": "25 February 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Simultaneous Linear Equations",
        "difficulty": "B/A",
        "q": "Solve the following simultaneous equations:<br>$3x + 7y = 22$<br>$5x - 3y = 22$",
        "steps":[
            "We aim to eliminate the $y$ terms by making their coefficients identical. Multiply the first equation by 3 and the second by 7.",
            "Eq 1: $9x + 21y = 66$. Eq 2: $35x - 21y = 154$.",
            "Since the signs of the $y$ terms are opposite, we add the two equations together: $(9x + 35x) + (21y - 21y) = 66 + 154$.",
            "This yields $44x = 220$. Dividing by 44, we find $x = 5$.",
            "Now substitute $x = 5$ into the original first equation: $3(5) + 7y = 22$.",
            "Calculation: $15 + 7y = 22 \\implies 7y = 7$. Thus, $y = 1$.",
            "Final Answer: $$x = 5, y = 1$$"
        ],
        "wrong_options": [
    {
        "ans": "$$x = 1,\\ y = 5$$",
        "feedback": "You substituted the values into the wrong variables when checking your solution."
    },
    {
        "ans": "$$x = 5,\\ y = -1$$",
        "feedback": "You solved for x correctly but made a sign error when substituting back to find y."
    },
    {
        "ans": "$$x = 2,\\ y = 2$$",
        "feedback": "You added the equations instead of eliminating a variable, leading to an incorrect pair."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Substitution Check",
            "content": "In a high-stakes exam, you should never lose marks on simultaneous equations. Once you have found your values for $x$ and $y$, substitute them into the *other* original equation to verify. For this problem: $5(5) - 3(1) = 25 - 3 = 22$. If the result matches, you have confirmed your accuracy."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    },
    // 26 February
    {
        "id": "003057",
        "date": "26 February 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams without replacement",
        "subtopic": "Probability of Combined Events",
        "difficulty": "A/A*",
        "q": "A bag contains 5 red counters and 3 blue counters. Two counters are chosen at random without replacement.<br>(a) Find the probability that the first counter is red and the second is blue.<br>(b) Find the probability that both counters are the same colour.<br>(c) Find the probability that at least one counter is blue.",
        "steps":[
            "For part (a), $P(R1, B2) = P(R1) \\times P(B2|R1)$.",
            "Calculation: $\\dfrac{5}{8} \\times \\dfrac{3}{7} = \\dfrac{15}{56}$.",
            "For part (b), same colour means (Red, Red) or (Blue, Blue).",
            "$P(RR) = \\dfrac{5}{8} \\times \\dfrac{4}{7} = \\dfrac{20}{56}$.",
            "$P(BB) = \\dfrac{3}{8} \\times \\dfrac{2}{7} = \\dfrac{6}{56}$.",
            "Summing these gives $\\dfrac{26}{56} = \\dfrac{13}{28}$.",
            "For part (c), 'at least one blue' is the complement of 'no blue' (which is Red, Red).",
            "Calculation: $1 - P(RR) = 1 - \\dfrac{20}{56} = \\dfrac{36}{56}$.",
            "Simplifying the fraction: $\\dfrac{9}{14}$.",
            "Final Answer: $$(a)\\ \\dfrac{15}{56},\\ (b)\\ \\dfrac{13}{28},\\ (c)\\ \\dfrac{9}{14}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$(a)\\ \\dfrac{15}{64},\\ (b)\\ \\dfrac{25}{64},\\ (c)\\ \\dfrac{39}{64}$$",
        "feedback": "You treated the events as independent and kept the denominator at 8 for both draws."
    },
    {
        "ans": "$$(a)\\ \\dfrac{5}{8},\\ (b)\\ \\dfrac{1}{2},\\ (c)\\ \\dfrac{3}{4}$$",
        "feedback": "You used single‑event probabilities instead of multiplying the conditional probabilities."
    },
    {
        "ans": "$$(a)\\ \\dfrac{3}{56},\\ (b)\\ \\dfrac{13}{56},\\ (c)\\ \\dfrac{43}{56}$$",
        "feedback": "You reversed the numerators for red and blue in the second draw."
    }
],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dependent Probabilities",
            "content": "The phrase 'without replacement' is a instruction that the events are dependent. The denominator of your second fraction must decrease by 1, and the numerator must also decrease if the second counter is the same colour as the first. Failing to adjust these totals is the single most common cause of error in IGCSE probability."
        },
        "payhip_link": "https://payhip.com/b/rsVCz",
        "button_text": "Master IGCSE Transformations, Vectors, Probability, and Statistics: Download the Extended Pack"
    },
    // 27 February
    {
        "id": "003058",
        "date": "27 February 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Surds",
        "difficulty": "B/A",
        "q": "Without using a calculator, rationalise the denominator of $\\dfrac{1}{3 - \\sqrt{2}}$.<br>Give your answer in its simplest form.",
        "steps":[
            "To rationalise a binomial denominator, we multiply the numerator and the denominator by the conjugate, $3 + \\sqrt{2}$.",
            "The expression becomes: $\\dfrac{1(3 + \\sqrt{2})}{(3 - \\sqrt{2})(3 + \\sqrt{2})}$.",
            "In the denominator, we expand the brackets using the difference of two squares property: $(a-b)(a+b) = a^2 - b^2$.",
            "Calculation for denominator: $3^2 - (\\sqrt{2})^2 = 9 - 2 = 7$.",
            "The numerator remains $3 + \\sqrt{2}$.",
            "Final Answer: $$\\dfrac{3 + \\sqrt{2}}{7}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$\\dfrac{3 - \\sqrt{2}}{7}$$",
        "feedback": "You used the conjugate in the numerator instead of multiplying the original numerator by the conjugate."
    },
    {
        "ans": "$$\\dfrac{1}{7(3 + \\sqrt{2})}$$",
        "feedback": "You multiplied the denominator correctly but forgot to multiply the numerator by the conjugate."
    },
    {
        "ans": "$$\\dfrac{3 + \\sqrt{2}}{5}$$",
        "feedback": "You miscalculated the denominator: $(3 - \\sqrt{2})(3 + \\sqrt{2})$ must give $9 - 2 = 7$."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Conjugate Rule",
            "content": "Rationalising denominators containing two terms is a sophisticated algebraic skill new to the 2025 non-calculator syllabus. Remember that multiplying by the conjugate ($3 + \\sqrt{2}$) is specifically designed to eliminate the irrational surd terms from the denominator through expansion, leaving you with a rational integer."
        },
        "payhip_link": "https://payhip.com/b/XEV2Z",
        "button_text": "Master IGCSE Number: Download the Extended Pack"
    },
    // 28 February
    {
        "id": "003059",
        "date": "28 February 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Factorise and Simplify Rational Expressions",
        "difficulty": "A/A*",
        "q": "Simplify fully the expression:<br>$$\\dfrac{6x^2 - 7x - 3}{9x^2 - 1}$$",
        "steps":[
            "We begin by factorising the numerator using the AC method. We need factors of $6 \\times -3 = -18$ that sum to $-7$. These are $-9$ and $+2$.",
            "Split the middle term: $6x^2 - 9x + 2x - 3$.",
            "Factorise by grouping: $3x(2x - 3) + 1(2x - 3) = (3x + 1)(2x - 3)$.",
            "Next, we factorise the denominator, which is a Difference of Two Squares.",
            "Calculation: $9x^2 - 1 = (3x)^2 - 1^2 = (3x - 1)(3x + 1)$.",
            "We now write the fraction with the factorised terms and cancel the common factor $(3x + 1)$.",
            "Final Answer: $$\\dfrac{2x - 3}{3x - 1}$$"
        ],
        "wrong_options": [
    {
        "ans": "$$\\dfrac{6x^2 - 7x - 3}{9x^2 - 1}$$",
        "feedback": "You did not factorise the expression, so no cancellation was possible."
    },
    {
        "ans": "$$\\dfrac{3x + 1}{3x - 1}$$",
        "feedback": "You cancelled incorrectly; only identical factors can be cancelled."
    },
    {
        "ans": "$$\\dfrac{2x - 3}{9x^2 - 1}$$",
        "feedback": "You cancelled the numerator factor but forgot to factorise the denominator first."
    }
],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Structure Recognition",
            "content": "When asked to 'simplify fully' a complex algebraic fraction, it is almost certain that one factor in the numerator will cancel with a factor in the denominator. If you find the denominator's factors easily (using the Difference of Two Squares), use those as a 'hint' to help you factorise the more difficult quadratic above."
        },
        "payhip_link": "https://payhip.com/b/mg5YS",
        "button_text": "Master IGCSE Algebra: Download the Extended Pack"
    }
];