const problemBank = [
    {
        "id": "003182",
        "date": "1 July 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Surds",
        "difficulty": "8/9",
        "q": "A closed cylinder has a radius of $\\sqrt{3}\\text{ cm}$ and a height of $(4 + \\sqrt{12})\\text{ cm}$.<br>(a) Show that the height of the cylinder can be written in the form $a + b\\sqrt{3}$, where $a$ and $b$ are integers.<br>(b) Calculate the total surface area of the cylinder. Give your answer in the form $\\pi(c\\sqrt{d} + e)\\text{ cm}^2$, where $c$, $d$, and $e$ are integers.",
        "steps": [
            "For part (a), we simplify the surd $\\sqrt{12}$ by identifying its largest square factor.",
            "Since $12 = 4 \\times 3$, we can write: $\\sqrt{12} = \\sqrt{4 \\times 3} = \\sqrt{4}\\sqrt{3} = 2\\sqrt{3}$.",
            "Substituting this back into the height expression gives: $\\text{Height} = 4 + 2\\sqrt{3}\\text{ cm}$, where $a = 4$ and $b = 2$, completing the proof.",
            "For part (b), the formula for the total surface area, $A$, of a closed cylinder is: $A = 2\\pi r^2 + 2\\pi r h$.",
            "Substituting the radius $r = \\sqrt{3}$ and the simplified height $h = 4 + 2\\sqrt{3}$ yields: $A = 2\\pi(\\sqrt{3})^2 + 2\\pi(\\sqrt{3})(4 + 2\\sqrt{3})$.",
            "Evaluating the first term (the area of the two circular bases): $2\\pi(\\sqrt{3})^2 = 2\\pi \\times 3 = 6\\pi$.",
            "Expanding the second term (the curved surface area): $2\\pi\\sqrt{3}(4 + 2\\sqrt{3}) = 2\\pi(4\\sqrt{3} + 2 \\times 3) = 2\\pi(4\\sqrt{3} + 6) = 8\\pi\\sqrt{3} + 12\\pi$.",
            "Adding the two components together to find the total surface area: $A = 6\\pi + 12\\pi + 8\\pi\\sqrt{3} = 18\\pi + 8\\pi\\sqrt{3}$.",
            "Factoring out $\\pi$ to match the required format: $A = \\pi(8\\sqrt{3} + 18)\\text{ cm}^2$.",
            "Final Answer: $$(a)\\ 4 + 2\\sqrt{3}\\text{ cm}\\ (b)\\ \\pi(8\\sqrt{3} + 18)\\text{ cm}^2$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 4 + 2\\sqrt{3}\\text{ cm}\\ (b)\\ \\pi(8\\sqrt{3} + 15)\\text{ cm}^2$$",
                "feedback": "You only included the area of one circular base ($\\pi r^2$) instead of both circular bases ($2\\pi r^2$) in your total surface area calculation."
            },
            {
                "ans": "$$(a)\\ 4 + 2\\sqrt{3}\\text{ cm}\\ (b)\\ \\pi(8\\sqrt{3} + 42)\\text{ cm}^2$$",
                "feedback": "You made an arithmetic error when expanding the curved surface area, incorrectly evaluating $2\\sqrt{3} \\times \\sqrt{3}$ as $2 \\times 9 = 18$ instead of $2 \\times 3 = 6$."
            },
            {
                "ans": "$$(a)\\ 4 + 2\\sqrt{3}\\text{ cm}\\ (b)\\ \\pi(8\\sqrt{3} + 12)\\text{ cm}^2$$",
                "feedback": "You calculated only the curved surface area ($2\\pi r h$), completely omitting the areas of the two circular bases from your total."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Base Area Duplication",
            "content": "A very common mistake when calculating the surface area of a cylinder is forgetting that a closed cylinder has two circular bases. Make sure you use $2\\pi r^2$ rather than just $\\pi r^2$. Additionally, simplifying surds at the very start of a problem prevents large numbers and arithmetic slips when expanding brackets later on."
        },
        "payhip_link": "https://payhip.com/b/BaZjD",
        "button_text": "Master IGCSE Number: Download the Pack"
    },
    {
        "id": "003183",
        "date": "2 July 2026",
        "major_area": "Geometry",
        "topic": "Similarity in 2D",
        "subtopic": "Similarity in 2D",
        "difficulty": "6/7",
        "img": "true",
        "q": "The diagram shows two mathematically similar triangular warning signs, $A$ and $B$. Sign $A$ has a vertical height of $30\\text{ cm}$ and an area of $540\\text{ cm}^2$. Sign $B$ has an area of $960\\text{ cm}^2$.<br>(a) Find the area scale factor from Sign $A$ to Sign $B$ as a fraction in its simplest form.<br>(b) Calculate the vertical height of Sign $B$.",
        "steps": [
            "For part (a), the area scale factor is the ratio of the area of the larger sign to the area of the smaller sign.",
            "This is calculated as: $\\text{Area Scale Factor} = \\dfrac{\\text{Area of } B}{\\text{Area of } A} = \\dfrac{960}{540}$.",
            "To simplify the fraction, we divide the numerator and denominator by their greatest common divisor, which is 60: $\\dfrac{960 \\div 60}{540 \\div 60} = \\dfrac{16}{9}$.",
            "For part (b), we find the linear scale factor, $k$, which is the square root of the area scale factor.",
            "This is calculated as: $k = \\sqrt{\\dfrac{16}{9}} = \\dfrac{4}{3}$.",
            "To find the vertical height of Sign $B$, we multiply the height of Sign $A$ by this linear scale factor.",
            "This gives: $\\text{Height of } B = 30 \\times \\dfrac{4}{3}$.",
            "Evaluating the multiplication: $30 \\div 3 \\times 4 = 10 \\times 4 = 40\\text{ cm}$.",
            "Final Answer: $$(a)\\ \\dfrac{16}{9}\\ (b)\\ 40\\text{ cm}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\dfrac{16}{9}\\ (b)\\ 53.3\\text{ cm}$$",
                "feedback": "You used the area scale factor ($16 \\div 9 \\approx 1.78$) directly to scale the height. You must take the square root of the area scale factor to find the linear scale factor first."
            },
            {
                "ans": "$$(a)\\ \\dfrac{16}{9}\\ (b)\\ 94.8\\text{ cm}$$",
                "feedback": "You squared the area scale factor to find the linear scale factor instead of taking its square root."
            },
            {
                "ans": "$$(a)\\ \\dfrac{9}{16}\\ (b)\\ 22.5\\text{ cm}$$",
                "feedback": "You calculated the scale factor from $B$ to $A$ instead of $A$ to $B$, resulting in a height for Sign $B$ that is smaller than Sign $A$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Fractional Roots",
            "content": "On non-calculator papers, scale factors are designed to simplify into perfect squares. If you convert fractions to decimals (like $\\dfrac{16}{9} \\approx 1.777...$), finding the square root becomes extremely difficult. Keep your ratios as simplified fractions, where taking the square root of the numerator and denominator is instantaneous."
        },
        "payhip_link": "https://payhip.com/b/L2dNU",
        "button_text": "Master IGCSE Geometry: Download the Pack"
    },
    {
        "id": "003184",
        "date": "3 July 2026",
        "major_area": "Algebra",
        "topic": "Functions: Domain and Range",
        "subtopic": "Functions: Domain and Range",
        "difficulty": "7/8",
        "q": "The safety speed rating $S$ of a rollercoaster carriage is modelled by the function $g(x) = \\dfrac{8}{15 - 3x}$ for the domain $0 \\le x \\le 4$, where $x$ represents the track friction coefficient.<br>(a) Explain why the value $x = 5$ is excluded if the domain of the function were defined for all real numbers.<br>(b) Find the range of the function $g(x)$ for the given domain $0 \\le x \\le 4$. Give your answer using inequalities.",
        "steps": [
            "For part (a), we examine the denominator of the function: $15 - 3x$.",
            "Substituting $x = 5$ into this expression yields: $15 - 3(5) = 15 - 15 = 0$.",
            "Since division by zero is undefined in mathematics, the function has no output value at $x = 5$. Thus, $x = 5$ must be excluded.",
            "For part (b), we find the range of the function over the closed interval $0 \\le x \\le 4$.",
            "Since the vertical asymptote occurs at $x = 5$, the function is continuous and smoothly increasing across our specified domain of $0 \\le x \\le 4$.",
            "This means the minimum and maximum values of the range will occur exactly at the boundaries of our domain.",
            "At the lower domain boundary, $x = 0$: $g(0) = \\dfrac{8}{15 - 3(0)} = \\dfrac{8}{15}$.",
            "At the upper domain boundary, $x = 4$: $g(4) = \\dfrac{8}{15 - 3(4)} = \\dfrac{8}{15 - 12} = \\dfrac{8}{3}$.",
            "The output values of the function are trapped between these two limits, giving the range inequality: $\\dfrac{8}{15} \\le g(x) \\le \\dfrac{8}{3}$.",
            "Final Answer: $$(a)\\ \\text{Division by zero is undefined}\\ (b)\\ \\dfrac{8}{15} \\le g(x) \\le \\dfrac{8}{3}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\text{Division by zero is undefined}\\ (b)\\ 0 \\le x \\le 4$$",
                "feedback": "You stated the domain of the function instead of the range. Range represents the set of output values ($g(x)$), not the input values ($x$)."
            },
            {
                "ans": "$$(a)\\ \\text{Division by zero is undefined}\\ (b)\\ \\dfrac{8}{15} \\le g(x) \\le 8$$",
                "feedback": "You made an arithmetic error when calculating the upper limit, incorrectly evaluating the denominator as 1 instead of 3 when $x = 4$."
            },
            {
                "ans": "$$(a)\\ \\text{Division by zero is undefined}\\ (b)\\ \\dfrac{8}{15} \\le x \\le \\dfrac{8}{3}$$",
                "feedback": "You used the input variable $x$ in your inequality. The range must always be defined using the output function variable, which is $g(x)$ or $y$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Output Variables in Range",
            "content": "A very common exam mistake is writing the final range inequality using the variable $x$. Remember that domain refers to inputs ($x$) and range refers to outputs ($g(x)$ or $y$). Writing $\\dfrac{8}{15} \\le x \\le \\dfrac{8}{3}$ will result in a lost mark, even if your boundary calculations are completely correct."
        },
        "payhip_link": "https://payhip.com/b/F9KRd",
        "button_text": "Master IGCSE Algebra: Download the Pack"
    },
    {
        "id": "003185",
        "date": "4 July 2026",
        "major_area": "Geometry",
        "topic": "Circle Geometry",
        "subtopic": "Circle Theorems 1",
        "difficulty": "7/8",
        "img": "true",
        "q": "The diagram shows a circular gear with centre $O$. Points $A$, $B$, and $C$ lie on the circumference. $AC$ is a straight diameter line passing through the centre $O$. The reflex angle $AOB$ is $244^\\circ$.<br>(a) Find the size of the obtuse angle $AOB$.<br>(b) Calculate the size of angle $OBC$. State the geometric reasons for your calculations.",
        "steps": [
            "For part (a), the angles surrounding a single point must sum to $360^\\circ$.",
            "This gives the calculation: $\\text{obtuse angle } AOB = 360^\\circ - 244^\\circ = 116^\\circ$.",
            "For part (b), we consider the triangle $AOB$. Since $OA$ and $OB$ are both radii of the circle, $OA = OB$.",
            "This makes triangle $AOB$ an isosceles triangle. Since base angles of an isosceles triangle are equal, we calculate: $\\text{angle } OBA = \\text{angle } OAB = \\dfrac{180^\\circ - 116^\\circ}{2} = \\dfrac{64^\\circ}{2} = 32^\\circ$.",
            "Next, we observe that the straight line $AOC$ is a diameter, meaning the angles on a straight line sum to $180^\\circ$.",
            "This gives: $\\text{obtuse angle } BOC = 180^\\circ - 116^\\circ = 64^\\circ$.",
            "We now consider triangle $BOC$. Since $OB$ and $OC$ are both radii, triangle $BOC$ is also an isosceles triangle.",
            "This means the base angles are equal: $\\text{angle } OBC = \\text{angle } OCB = \\dfrac{180^\\circ - 64^\\circ}{2} = \\dfrac{116^\\circ}{2} = 58^\\circ$.",
            "Final Answer: $$(a)\\ 116^\\circ\\ (b)\\ 58^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 116^\\circ\\ (b)\\ 29^\\circ$$",
                "feedback": "You halved the correct angle of $58^\\circ$, possibly by misapplying the angle at the centre and circumference theorem to triangles that do not share the same arc."
            },
            {
                "ans": "$$(a)\\ 116^\\circ\\ (b)\\ 32^\\circ$$",
                "feedback": "You assumed that angle $OBC$ is equal to angle $OBA$, treating triangle $ABC$ as symmetric when it is not."
            },
            {
                "ans": "$$(a)\\ 122^\\circ\\ (b)\\ 61^\\circ$$",
                "feedback": "You calculated an incorrect obtuse angle at the centre in part (a), which caused all subsequent angle calculations in part (b) to be incorrect."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Full Geometric Reasons",
            "content": "To get full reasoning marks, you must write out the complete geometric theorems. Shorthand phrases like 'angles on a line' or 'isosceles triangle' are frequently rejected by examiners. Write 'angles on a straight line sum to 180 degrees' and 'base angles of an isosceles triangle are equal' to guarantee the marks."
        },
        "payhip_link": "https://payhip.com/b/RLgSJ",
        "button_text": "Master IGCSE Geometry: Download the Pack"
    },
    {
        "id": "003186",
        "date": "5 July 2026",
        "major_area": "Probability & Statistics",
        "topic": "Sets and Venn Diagrams",
        "subtopic": "Sets and Venn Diagrams",
        "difficulty": "5/6",
        "q": "A cohort of 80 students are surveyed about their language choices. 42 study French ($F$), 35 study Spanish ($S$), and 15 study both languages.<br>(a) Find the number of students who study Spanish but not French.<br>(b) A student is chosen at random from the cohort. Calculate the probability that this student studies neither French nor Spanish.",
        "steps": [
            "For part (a), we understand that the total number of students studying Spanish (35) includes those who study both Spanish and French.",
            "To find the number of students who study Spanish but not French, we subtract the intersection of students who study both (15) from the total Spanish set.",
            "This gives: $35 - 15 = 20$ students.",
            "For part (b), we first calculate the total number of students who study at least one of the two languages (the union, $F \\cup S$).",
            "Using the set formula: $n(F \\cup S) = n(F) + n(S) - n(F \\cap S) = 42 + 35 - 15$.",
            "Evaluating this gives: $n(F \\cup S) = 62$ students.",
            "To find the number of students who study neither language, we subtract this union from the total cohort of 80 students.",
            "This gives: $80 - 62 = 18$ students.",
            "The probability of selecting a student who studies neither language is the number of neither students divided by the total cohort: $\\text{P}(\\text{Neither}) = \\dfrac{18}{80}$.",
            "We simplify the fraction by dividing the numerator and denominator by 2, yielding $\\dfrac{9}{40}$ (or $0.225$).",
            "Final Answer: $$(a)\\ 20\\ (b)\\ \\dfrac{9}{40}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 20\\ (b)\\ \\dfrac{9}{35}$$",
                "feedback": "You used the total Spanish student count (35) as your denominator instead of dividing by the total cohort of 80 students."
            },
            {
                "ans": "$$(a)\\ 20\\ (b)\\ \\dfrac{3}{80}$$",
                "feedback": "You calculated the number of 'neither' students by directly subtracting both language totals from 80 ($80 - 42 - 35 = 3$), which forgets to account for the overlapping students who study both."
            },
            {
                "ans": "$$(a)\\ 20\\ (b)\\ \\dfrac{9}{50}$$",
                "feedback": "Your calculations are correct, but you used a denominator of 100 instead of the actual cohort size of 80 when writing your probability."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Set Diagram Planning",
            "content": "Even if the question does not ask for a Venn diagram, sketching a quick one on your working page is the safest way to avoid mistakes. Fill in the central overlap (15) first, then subtract this from the main circles to find French-only (27) and Spanish-only (20). Subtracting these three segments from 80 easily reveals the 18 students on the outside."
        },
        "payhip_link": "https://payhip.com/b/oW2c1",
        "button_text": "Master IGCSE Probability: Download the Pack"
    },
    {
        "id": "003187",
        "date": "6 July 2026",
        "major_area": "Algebra",
        "topic": "Formulas",
        "subtopic": "Changing the Subject of a Formula",
        "difficulty": "6/7",
        "q": "The time period, $T$, of a physical pendulum is given by the formula $T = 2\\pi\\sqrt{\\dfrac{L - x}{g}}$.<br>(a) Rearrange the formula to make the length, $L$, the subject.<br>(b) Calculate the value of $L$ when $T = 3.1$, $g = 9.81$, $x = 0.4$, and $\\pi \\approx 3.142$. Give your answer correct to 3 significant figures.",
        "steps": [
            "For part (a), we isolate the square root term by dividing both sides of the equation by $2\\pi$: $\\dfrac{T}{2\\pi} = \\sqrt{\\dfrac{L - x}{g}}$.",
            "We square both sides of the equation to eliminate the square root, remembering to square both terms in the denominator on the left side: $\\dfrac{T^2}{4\\pi^2} = \\dfrac{L - x}{g}$.",
            "Next, we multiply both sides of the equation by $g$ to clear the denominator: $\\dfrac{g T^2}{4\\pi^2} = L - x$.",
            "To isolate $L$, we add $x$ to both sides of the equation, yielding: $L = \\dfrac{g T^2}{4\\pi^2} + x$.",
            "For part (b), we substitute the given numerical values into our rearranged formula: $L = \\dfrac{9.81 \\times (3.1)^2}{4 \\times (3.142)^2} + 0.4$.",
            "Evaluating the squared terms: $(3.1)^2 = 9.61$ and $(3.142)^2 \\approx 9.8722$.",
            "Substituting these back into the calculation: $L = \\dfrac{9.81 \\times 9.61}{4 \\times 9.8722} + 0.4 = \\dfrac{94.2741}{39.4888} + 0.4$.",
            "Evaluating the division: $\\dfrac{94.2741}{39.4888} \\approx 2.3874$.",
            "Adding $0.4$ to this result: $L = 2.3874 + 0.4 = 2.7874\\text{ m}$.",
            "Rounding to 3 significant figures gives the final value of $L$ as $2.79$.",
            "Final Answer: $$(a)\\ L = \\dfrac{g T^2}{4\\pi^2} + x\\ (b)\\ 2.79$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ L = \\dfrac{g T^2}{2\\pi} + x\\ (b)\\ 15.4$$",
                "feedback": "When squaring both sides of the equation in part (a), you forgot to square the coefficient $2\\pi$, keeping it as $2\\pi$ instead of $4\\pi^2$."
            },
            {
                "ans": "$$(a)\\ L = \\dfrac{g T^2}{4\\pi^2} + x\\ (b)\\ 7.90$$",
                "feedback": "Your algebraic rearrangement is correct, but you forgot to square the value of $\\pi$ in the denominator when calculating your answer for part (b)."
            },
            {
                "ans": "$$(a)\\ L = \\dfrac{g T^2}{4\\pi^2} - x\\ (b)\\ 1.99$$",
                "feedback": "You subtracted $x$ from both sides at the final step of your rearrangement instead of adding it, which inverted the final operation."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Squaring External Coefficients",
            "content": "When squaring both sides of an equation to clear a square root, remember that any coefficient outside the root must also be squared. In this formula, the leading $2\\pi$ must become $4\\pi^2$. Forgetting to square the numerical constant or the variable $\\pi$ is one of the most common algebraic errors in exams."
        },
        "payhip_link": "https://payhip.com/b/9r34U",
        "button_text": "Master IGCSE Algebra: Download the Pack"
    },
    {
        "id": "003188",
        "date": "7 July 2026",
        "major_area": "Geometry",
        "topic": "Similarity in 3D",
        "subtopic": "Similarity in 3D",
        "difficulty": "7/8",
        "img": "true",
        "q": "The diagram shows two mathematically similar cylindrical metal tins, $P$ and $Q$, made of the same sheet metal. Tin $P$ has a diameter of $12\\text{ cm}$ and a mass of $450\\text{ g}$. Tin $Q$ has a diameter of $18\\text{ cm}$.<br>(a) Find the linear scale factor of enlargement from Tin $P$ to Tin $Q$.<br>(b) Calculate the mass of Tin $Q$. Give your answer in kilograms.",
        "steps": [
            "For part (a), we find the linear scale factor of enlargement, $k$, by dividing the diameter of the larger tin by the diameter of the smaller tin.",
            "This is calculated as: $k = \\dfrac{18}{12} = 1.5$.",
            "For part (b), since the two tins are mathematically similar and made of the same metal, their masses are directly proportional to their volumes.",
            "The volume scale factor is the cube of the linear scale factor: $k^3 = (1.5)^3 = 3.375$.",
            "To calculate the mass of Tin $Q$, we multiply the mass of Tin $P$ by this volume scale factor: $\\text{Mass of } Q = 450 \\times 3.375 = 1518.75\\text{ g}$.",
            "The question asks for the final answer in kilograms. We convert our mass by dividing by 1000: $1518.75 \\div 1000 = 1.51875\\text{ kg}$.",
            "Rounding to 3 significant figures gives the mass of Tin $Q$ as $1.52\\text{ kg}$.",
            "Final Answer: $$(a)\\ 1.5\\ (b)\\ 1.52\\text{ kg}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 1.5\\ (b)\\ 0.675\\text{ kg}$$",
                "feedback": "You multiplied the mass of Tin $P$ by the linear scale factor of $1.5$ instead of the volume scale factor of $3.375$."
            },
            {
                "ans": "$$(a)\\ 1.5\\ (b)\\ 1520\\text{ kg}$$",
                "feedback": "Your volumetric calculation is correct, but you forgot to convert your final answer from grams to kilograms."
            },
            {
                "ans": "$$(a)\\ 1.5\\ (b)\\ 1.01\\text{ kg}$$",
                "feedback": "You scaled the mass of the tin using the area scale factor of $k^2 = 2.25$ instead of the volume scale factor of $k^3 = 3.375$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Mass Scales with Volume",
            "content": "Always identify the dimensional property you are scaling. Lengths scale by $k$, areas scale by $k^2$, and volumes scale by $k^3$. Because mass is directly proportional to volume (assuming uniform density), any similarity question involving mass must use the cubic scale factor ($k^3$)."
        },
        "payhip_link": "https://payhip.com/b/iBzE5",
        "button_text": "Master IGCSE Geometry: Download the Pack"
    },
    {
        "id": "003189",
        "date": "8 July 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Standard Form",
        "difficulty": "5/6",
        "q": "A rectangular microchip component has a length of $3.5 \\times 10^{-5}\\text{ m}$ and a width of $2.4 \\times 10^{-6}\\text{ m}$.<br>(a) Calculate the total perimeter of the component. Give your answer in standard form.<br>(b) Calculate the total surface area of the component. Give your answer in standard form.",
        "steps": [
            "For part (a), the formula for the perimeter of a rectangle is: $\\text{Perimeter} = 2 \\times (\\text{length} + \\text{width})$.",
            "We write the sum of the dimensions: $(3.5 \\times 10^{-5}) + (2.4 \\times 10^{-6})$.",
            "To add numbers in standard form, we must adjust them to share the same power of 10. We rewrite $3.5 \\times 10^{-5}$ as $35 \\times 10^{-6}$.",
            "Now we add the coefficients: $(35 + 2.4) \\times 10^{-6} = 37.4 \\times 10^{-6}$.",
            "We multiply this sum by 2 to find the total perimeter: $2 \\times (37.4 \\times 10^{-6}) = 74.8 \\times 10^{-6}$.",
            "We convert this product back into correct standard form notation: $7.48 \\times 10^{-5}\\text{ m}$.",
            "For part (b), the formula for the area of a rectangle is: $\\text{Area} = \\text{length} \\times \\text{width}$.",
            "We multiply the dimensions: $(3.5 \\times 10^{-5}) \\times (2.4 \\times 10^{-6})$.",
            "We multiply the coefficients: $3.5 \\times 2.4 = 8.4$.",
            "We add the indices for the base 10 terms: $-5 + (-6) = -11$.",
            "Combining these values gives the final area as $8.4 \\times 10^{-11}\\text{ m}^2$.",
            "Final Answer: $$(a)\\ 7.48 \\times 10^{-5}\\text{ m}\\ (b)\\ 8.4 \\times 10^{-11}\\text{ m}^2$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 3.74 \\times 10^{-5}\\text{ m}\\ (b)\\ 8.4 \\times 10^{-11}\\text{ m}^2$$",
                "feedback": "You calculated the sum of the length and width correctly, but you forgot to multiply by 2 to find the total perimeter of the rectangle."
            },
            {
                "ans": "$$(a)\\ 1.18 \\times 10^{-4}\\text{ m}\\ (b)\\ 8.4 \\times 10^{-11}\\text{ m}^2$$",
                "feedback": "You added the coefficients directly ($3.5 + 2.4 = 5.9$) without adjusting the powers of 10 to match first, which caused a scale error in your perimeter."
            },
            {
                "ans": "$$(a)\\ 7.48 \\times 10^{-5}\\text{ m}\\ (b)\\ 8.4 \\times 10^{30}\\text{ m}^2$$",
                "feedback": "For part (b), you multiplied the indices of the base 10 terms ($(-5) \\times (-6) = 30$) instead of adding them together."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Standard Form Addition",
            "content": "When adding or subtracting small numbers in standard form, writing them using the more negative power of 10 is the safest strategy. Converting $3.5 \\times 10^{-5}$ into $35 \\times 10^{-6}$ allows you to complete the addition as a simple, error-free decimal sum ($35 + 2.4$)."
        },
        "payhip_link": "https://payhip.com/b/ZAkTu",
        "button_text": "Master IGCSE Number: Download the Pack"
    },
    {
        "id": "003190",
        "date": "9 July 2026",
        "major_area": "Probability & Statistics",
        "topic": "Histograms",
        "subtopic": "Histograms",
        "difficulty": "7/8",
        "q": "The masses of 200 bags checked onto a flight were recorded. The class interval $20 < m \\le 25\\text{ kg}$ has a frequency of 75 and is represented by a bar of height $15\\text{ cm}$ on the grid.<br>(a) Find the frequency density of this class interval.<br>(b) The class interval $25 < m \\le 35\\text{ kg}$ is represented by a bar of height $6\\text{ cm}$ on the same grid. Calculate the frequency of bags in this interval.",
        "steps": [
            "For part (a), the class width of the interval $20 < m \\le 25$ is: $25 - 20 = 5\\text{ kg}$.",
            "The formula for frequency density is: $\\text{Frequency Density} = \\dfrac{\\text{Frequency}}{\\text{Class Width}}$.",
            "Substituting our values: $\\text{Frequency Density} = \\dfrac{75}{5} = 15$. This matches the bar height of $15\\text{ cm}$ on the grid.",
            "For part (b), we rearrange the frequency density formula to solve for the frequency: $\\text{Frequency} = \\text{Frequency Density} \\times \\text{Class Width}$.",
            "The height of the bar is $6\\text{ cm}$, which means the frequency density for this second interval is 6.",
            "We calculate the class width of this second interval: $35 - 25 = 10\\text{ kg}$.",
            "Substituting these values into our rearranged equation: $\\text{Frequency} = 6 \\times 10 = 60\\text{ bags}$.",
            "Final Answer: $$(a)\\ 15\\ (b)\\ 60\\text{ bags}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 15\\ (b)\\ 0.6\\text{ bags}$$",
                "feedback": "You divided the frequency density by the class width ($6 \\div 10 = 0.6$) instead of multiplying them to find the frequency."
            },
            {
                "ans": "$$(a)\\ 15\\ (b)\\ 30\\text{ bags}$$",
                "feedback": "You assumed that the second class interval had the same class width of $5$ as the first interval, instead of calculating the correct class width of $10$."
            },
            {
                "ans": "$$(a)\\ 0.067\\ (b)\\ 60\\text{ bags}$$",
                "feedback": "You calculated the frequency density incorrectly in part (a) by dividing the class width by the frequency instead of dividing the frequency by the class width."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Variable Class Widths",
            "content": "The single most common mistake in histogram questions is assuming all bars have the same width, as they do in bar charts. In histograms, the width of each bar represents the class interval. Always check the width of *each* interval independently before calculating your frequencies."
        },
        "payhip_link": "https://payhip.com/b/ND5E9",
        "button_text": "Master IGCSE Statistics: Download the Pack"
    },
    {
        "id": "003191",
        "date": "10 July 2026",
        "major_area": "Geometry",
        "topic": "Pythagoras Theorem",
        "subtopic": "Pythagoras Theorem",
        "difficulty": "7/8",
        "img": "true",
        "q": "A greenhouse is built in the shape of a right square-based pyramid $VABCD$ as shown in the diagram. The base $ABCD$ is a square of side length $6\\text{ m}$. The vertical height $VO$ from the centre of the base $O$ to the apex $V$ is $4\\text{ m}$.<br>(a) Calculate the length of the diagonal $AC$ on the square base. Give your answer correct to 3 significant figures.<br>(b) Calculate the slant height $VA$ of the pyramid. Give your answer correct to 3 significant figures.",
        "steps": [
            "For part (a), the base is a square, so angle $ADC = 90^\\circ$. This forms a right-angled triangle $ADC$ with sides $AD = 6\\text{ m}$ and $DC = 6\\text{ m}$.",
            "By Pythagoras' theorem, the base diagonal $AC$ is: $AC^2 = AD^2 + DC^2 = 6^2 + 6^2 = 36 + 36 = 72$.",
            "Taking the square root of both sides gives: $AC = \\sqrt{72} \\approx 8.4853\\text{ m}$. Rounded to 3 significant figures, $AC = 8.49\\text{ m}$.",
            "For part (b), we construct a vertical right-angled triangle $VOA$ inside the pyramid to find the slant height $VA$.",
            "The base segment $AO$ is half the length of the base diagonal $AC$: $AO = \\dfrac{\\sqrt{72}}{2} = \\sqrt{18}\\text{ m}$.",
            "In the right-angled triangle $VOA$, the vertical height $VO = 4\\text{ m}$ and the base segment $AO = \\sqrt{18}\\text{ m}$.",
            "By Pythagoras' theorem, the slant height $VA$ is: $VA^2 = VO^2 + AO^2 = 4^2 + (\\sqrt{18})^2 = 16 + 18 = 34$.",
            "Taking the square root of both sides: $VA = \\sqrt{34} \\approx 5.8309\\text{ m}$.",
            "Rounding to 3 significant figures gives the slant height $VA$ as $5.83\\text{ m}$.",
            "Final Answer: $$(a)\\ 8.49\\text{ m}\\ (b)\\ 5.83\\text{ m}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 8.49\\text{ m}\\ (b)\\ 9.38\\text{ m}$$",
                "feedback": "You used the entire base diagonal $AC$ ($8.49\\text{ m}$) as the base of your vertical triangle instead of halving it to find the segment $AO$."
            },
            {
                "ans": "$$(a)\\ 8.49\\text{ m}\\ (b)\\ 7.21\\text{ m}$$",
                "feedback": "You calculated the hypotenuse of a right-angled triangle with base 6 and height 4, which does not correctly represent the internal diagonal geometry of the pyramid."
            },
            {
                "ans": "$$(a)\\ 8.49\\text{ m}\\ (b)\\ 34.0\\text{ m}$$",
                "feedback": "You calculated $VA^2$ correctly, but you forgot to perform the final step of taking the square root to find the actual slant height $VA$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Internal Pyramid Triangles",
            "content": "To calculate a slant height on a pyramid, you must construct a right-angled triangle using the vertical height $VO$, the diagonal segment from a corner to the centre $AO$, and the slant edge $VA$. Keep $AO$ in its exact surd form ($AO^2 = 18$) to prevent rounding errors when adding it to $VO^2$ to find $VA^2$."
        },
        "payhip_link": "https://payhip.com/b/9dSh3",
        "button_text": "Master IGCSE Geometry: Download the Pack"
    },
    {
        "id": "003192",
        "date": "11 July 2026",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "Exact Trigonometric values",
        "difficulty": "7/8",
        "img": "true",
        "q": "The diagram shows a right-angled triangle $ABC$ and an adjacent right-angled triangle $ACD$. Angle $ABC = 90^\\circ$, angle $ACB = 45^\\circ$, angle $ACD = 90^\\circ$, angle $ADC = 30^\\circ$, and $BC = 8\\text{ cm}$.<br>(a) Find the exact length of the hypotenuse $AC$ of triangle $ABC$. Give your answer in the form $a\\sqrt{b}\\text{ cm}$, where $a$ and $b$ are integers.<br>(b) Calculate the exact length of the side $AD$ of triangle $ACD$. Give your answer in the form $c\\sqrt{d}\\text{ cm}$, where $c$ and $d$ are integers.",
        "steps": [
            "For part (a), we consider the right-angled triangle $ABC$, where the right angle is at $B$.",
            "We use the cosine trigonometric ratio: $\\cos(\\theta) = \\dfrac{\\text{Adjacent}}{\\text{Hypotenuse}}$. This gives us: $\\cos(45^\\circ) = \\dfrac{BC}{AC} = \\dfrac{8}{AC}$.",
            "We substitute the exact trigonometric value $\\cos(45^\\circ) = \\dfrac{\\sqrt{2}}{2}$ into the equation: $\\dfrac{\\sqrt{2}}{2} = \\dfrac{8}{AC}$.",
            "To solve for $AC$, we cross-multiply: $AC\\sqrt{2} = 16 \\implies AC = \\dfrac{16}{\\sqrt{2}}$.",
            "We rationalise the denominator by multiplying the numerator and the denominator by $\\sqrt{2}$: $AC = \\dfrac{16\\sqrt{2}}{2} = 8\\sqrt{2}\\text{ cm}$.",
            "For part (b), we consider the right-angled triangle $ACD$, where the right angle is at $C$ and the hypotenuse is $AD$.",
            "We use the sine trigonometric ratio: $\\sin(\\theta) = \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}}$. This gives us: $\\sin(30^\\circ) = \\dfrac{AC}{AD}$.",
            "We substitute our known exact value of $AC = 8\\sqrt{2}$ and the exact trigonometric value $\\sin(30^\\circ) = \\dfrac{1}{2}$ into the equation: $\\dfrac{1}{2} = \\dfrac{8\\sqrt{2}}{AD}$.",
            "To solve for $AD$, we cross-multiply, which yields: $AD = 2 \\times 8\\sqrt{2} = 16\\sqrt{2}\\text{ cm}$.",
            "Final Answer: $$(a)\\ 8\\sqrt{2}\\text{ cm}\\ (b)\\ 16\\sqrt{2}\\text{ cm}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 16\\text{ cm}\\ (b)\\ 32\\text{ cm}$$",
                "feedback": "You used the incorrect exact value of $\\cos(45^\\circ) = \\dfrac{1}{2}$ instead of $\\dfrac{\\sqrt{2}}{2}$ when calculating the length of $AC$."
            },
            {
                "ans": "$$(a)\\ 8\\sqrt{2}\\text{ cm}\\ (b)\\ 4\\sqrt{2}\\text{ cm}$$",
                "feedback": "You multiplied by $\\sin(30^\\circ)$ instead of dividing in part (b), which scaled the hypotenuse down instead of making it longer."
            },
            {
                "ans": "$$(a)\\ \\dfrac{16}{\\sqrt{2}}\\text{ cm}\\ (b)\\ \\dfrac{32}{\\sqrt{2}}\\text{ cm}$$",
                "feedback": "Your working is mathematically correct, but you forgot to rationalise the denominators to simplify your final surd representations as required by the format."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Rationalising Denominators",
            "content": "Whenever you divide an integer by a root (such as $\\dfrac{16}{\\sqrt{2}}$), you can quickly rationalise the fraction mentally. Halve the numerator and multiply it by the root on the bottom: $\\dfrac{16}{2} \\times \\sqrt{2} = 8\\sqrt{2}$. This instant trick is a massive time-saver on non-calculator papers."
        },
        "payhip_link": "https://payhip.com/b/GToVZ",
        "button_text": "Master IGCSE Trigonometry: Download the Pack"
    },
   {
    "id": "003193",
    "date": "12 July 2026",
    "major_area": "Algebra",
    "topic": "Differentiation",
    "subtopic": "Rates of Change from Graphs",
    "difficulty": "8/9",
    "q": "The depth of water, $y$ metres, in a harbour $t$ hours after midnight is modelled by the formula $y = 12t - t^3 + 10$ for the domain $0 \\le t \\le 3$.<br>(a) Find an expression for $\\dfrac{\\text{d}y}{\\text{d}t}$, the rate of change of the water depth.<br>(b) Find the time, $t$, at which the water is at its maximum depth.<br>(c) Calculate this maximum depth of the water.",
    "steps": [
        "For part (a), we differentiate the depth equation $y = 12t - t^3 + 10$ with respect to $t$ using the power rule.",
        "Differentiating the term $12t$ gives $12$.",
        "Differentiating the term $-t^3$ gives $-3t^2$ (multiplying by the exponent and reducing the power by 1).",
        "Differentiating the constant term $10$ gives $0$.",
        "Combining these derivatives gives: $\\dfrac{\\text{d}y}{\\text{d}t} = 12 - 3t^2$.",
        "For part (b), the water is at its maximum depth at the stationary turning point, where the rate of change of the depth is zero: $\\dfrac{\\text{d}y}{\\text{d}t} = 0$.",
        "This gives the equation: $12 - 3t^2 = 0$.",
        "We solve for $t$: $3t^2 = 12 \\implies t^2 = 4$.",
        "Taking the positive square root (since time must be a positive quantity) yields: $t = 2$ hours.",
        "For part (c), we find the maximum depth by substituting the time $t = 2$ back into our *original* depth formula.",
        "This gives the calculation: $y = 12(2) - (2)^3 + 10$.",
        "Evaluating the arithmetic: $y = 24 - 8 + 10 = 16 + 10 = 26\\text{ m}$.",
        "Final Answer: $$(a)\\ \\dfrac{\\text{d}y}{\\text{d}t} = 12 - 3t^2\\ (b)\\ t = 2\\text{ hours}\\ (c)\\ 26\\text{ m}$$"
    ],
    "wrong_options": [
        {
            "ans": "$$(a)\\ \\dfrac{\\text{d}y}{\\text{d}t} = 12 - t^2\\ (b)\\ t = 3.46\\text{ hours}\\ (c)\\ 37.7\\text{ m}$$",
            "feedback": "You integrated or differentiated the cubic term incorrectly in part (a), failing to multiply by the power of 3 before reducing the index."
        },
        {
            "ans": "$$(a)\\ \\dfrac{\\text{d}y}{\\text{d}t} = 12 - 3t^2\\ (b)\\ t = 4\\text{ hours}\\ (c)\\ -6\\text{ m}$$",
            "feedback": "Your derivative is correct, but you solved $3t^2 = 12$ incorrectly, arriving at $t^2 = 16$ and $t = 4$."
        },
        {
            "ans": "$$(a)\\ \\dfrac{\\text{d}y}{\\text{d}t} = 12 - 3t^2\\ (b)\\ t = 2\\text{ hours}\\ (c)\\ 0\\text{ m}$$",
            "feedback": "You substituted the turning-point time $t = 2$ back into your derivative equation $\\dfrac{\\text{d}y}{\\text{d}t}$ instead of the original depth equation $y$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Choosing the Right Equation",
        "content": "A very common mistake when calculating maximums in calculus is substituting the turning-point value (here, $t = 2$) back into the derivative. Substituting into $\\dfrac{\\text{d}y}{\\text{d}t}$ will simply give you $0$, which is the gradient at that point. You must substitute back into the original function $y$ to find the actual depth."
    },
    "payhip_link": "https://payhip.com/b/cpuDV",
    "button_text": "Master IGCSE Differentiation: Download the Pack"
},
    {
        "id": "003194",
        "date": "13 July 2026",
        "major_area": "Number",
        "topic": "Rounding, Estimation and Accuracy",
        "subtopic": "Rounding, Estimation and Error Intervals",
        "difficulty": "5/6",
        "q": "A standard shipping carton is recorded as having a mass of $w = 14.8\\text{ kg}$, correct to 1 decimal place.<br>(a) Write down the error interval for the mass $w$ of a single carton using inequalities.<br>(b) A pallet contains exactly 45 of these identical cartons. Calculate the error interval for the total mass, $W$, of the cartons on the pallet.",
        "steps": [
            "For part (a), the mass $w = 14.8\\text{ kg}$ is recorded to 1 decimal place. The unit of accuracy is therefore $0.1\\text{ kg}$.",
            "We find the boundary offset by halving this unit of accuracy: $0.1 \\div 2 = 0.05\\text{ kg}$.",
            "To find the lower bound, we subtract this offset from our recorded mass: $14.8 - 0.05 = 14.75\\text{ kg}$.",
            "To find the upper bound, we add this offset to our recorded mass: $14.8 + 0.05 = 14.85\\text{ kg}$.",
            "This gives the error interval for a single carton as: $14.75 \\le w < 14.85\\text{ kg}$.",
            "For part (b), we calculate the total bounds of the pallet by multiplying the individual carton bounds by the total quantity of 45.",
            "The lower bound of the total mass $W$ is: $45 \\times 14.75 = 663.75\\text{ kg}$.",
            "The upper bound of the total mass $W$ is: $45 \\times 14.85 = 668.25\\text{ kg}$.",
            "This gives the error interval for the entire pallet as: $663.75 \\le W < 668.25\\text{ kg}$.",
            "Final Answer: $$(a)\\ 14.75 \\le w < 14.85\\text{ kg}\\ (b)\\ 663.75 \\le W < 668.25\\text{ kg}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 14.5 \\le w < 15.5\\text{ kg}\\ (b)\\ 652.50 \\le W < 697.50\\text{ kg}$$",
                "feedback": "You treated the mass as if it were rounded to the nearest whole kilogram instead of the nearest $0.1\\text{ kg}$."
            },
            {
                "ans": "$$(a)\\ 14.75 \\le w \\le 14.85\\text{ kg}\\ (b)\\ 663.75 \\le W \\le 668.25\\text{ kg}$$",
                "feedback": "You used the inclusive inequality symbol ($\\le$) for your upper bound. Upper bounds in error intervals must be strictly exclusive ($<$)."
            },
            {
                "ans": "$$(a)\\ 14.75 \\le w < 14.85\\text{ kg}\\ (b)\\ 0.33 \\le W < 0.33\\text{ kg}$$",
                "feedback": "You divided the boundaries of the single carton by 45 instead of multiplying them to find the total combined mass of the pallet."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Upper Bound Inequality Symbols",
            "content": "When writing an error interval, the lower bound always uses the inclusive 'greater than or equal to' symbol ($\\le$), but the upper bound must use the exclusive 'less than' symbol ($<$). This is because any weight exactly equal to $14.85\\text{ kg}$ would round up to $14.9\\text{ kg}$ rather than down to $14.8\\text{ kg}$."
        },
        "payhip_link": "https://payhip.com/b/eg8sA",
        "button_text": "Master IGCSE Number: Download the Pack"
    },
    {
        "id": "003195",
        "date": "14 July 2026",
        "major_area": "Geometry",
        "topic": "Mensuration",
        "subtopic": "Arcs and Sectors",
        "difficulty": "6/7",
        "img": "true",
        "q": "A lawn sprinkler sprays water over a sector $OAB$ of a circle with centre $O$ and radius $12\\text{ m}$ as shown in the diagram. The angle of the sector $AOB$ is $135^\\circ$.<br>(a) Calculate the total area watered by the sprinkler. Give your answer in terms of $\\pi$ in its simplest form.<br>(b) Calculate the total perimeter of the sector $OAB$. Give your answer in the form $a + b\\pi$, where $a$ and $b$ are integers.",
        "steps": [
            "For part (a), the formula for the area of a sector of a circle is: $\\text{Area} = \\dfrac{\\theta}{360^\\circ} \\times \\pi r^2$.",
            "Substituting our angle $\\theta = 135^\\circ$ and radius $r = 12\\text{ m}$ gives: $\\text{Area} = \\dfrac{135}{360} \\times \\pi \\times 12^2$.",
            "We simplify the fraction: $\\dfrac{135}{360} = \\dfrac{3}{8}$.",
            "Substituting this back into our calculation: $\\text{Area} = \\dfrac{3}{8} \\times 144\\pi = 3 \\times 18\\pi = 54\\pi\\text{ m}^2$.",
            "For part (b), the perimeter of a sector consists of the curved arc length $AB$ plus the two straight boundary radii, $OA$ and $OB$.",
            "The formula for the arc length of a sector is: $\\text{Arc Length} = \\dfrac{\\theta}{360^\\circ} \\times 2\\pi r$.",
            "Substituting our values gives: $\\text{Arc Length} = \\dfrac{135}{360} \\times 2\\pi \\times 12 = \\dfrac{3}{8} \\times 24\\pi = 9\\pi\\text{ m}$.",
            "The total perimeter is the sum of this curved arc length and the two straight radii of $12\\text{ m}$: $\\text{Perimeter} = 9\\pi + 12 + 12 = 24 + 9\\pi\\text{ m}$.",
            "Final Answer: $$(a)\\ 54\\pi\\text{ m}^2\\ (b)\\ 24 + 9\\pi\\text{ m}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 54\\pi\\text{ m}^2\\ (b)\\ 9\\pi\\text{ m}$$",
                "feedback": "You calculated only the curved arc length of the sector in part (b), forgetting to add the two straight boundary radii ($2r$) to find the total perimeter."
            },
            {
                "ans": "$$(a)\\ 216\\pi\\text{ m}^2\\ (b)\\ 24 + 9\\pi\\text{ m}$$",
                "feedback": "You used the diameter of $24\\text{ m}$ instead of the radius of $12\\text{ m}$ in your sector area calculation."
            },
            {
                "ans": "$$(a)\\ 48\\pi\\text{ m}^2\\ (b)\\ 24 + 8\\pi\\text{ m}$$",
                "feedback": "You simplified the fraction $\\dfrac{135}{360}$ incorrectly as $\\dfrac{1}{3}$ instead of $\\dfrac{3}{8}$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Arc Length vs Sector Perimeter",
            "content": "Do not confuse arc length with sector perimeter. The arc length only represents the curved portion of the boundary. To find the total perimeter of a sector, you must always add the two straight enclosing radii ($2r$) back to your calculated arc length."
        },
        "payhip_link": "https://payhip.com/b/fiURV",
        "button_text": "Master IGCSE Geometry: Download the Pack"
    },
    {
        "id": "003196",
        "date": "15 July 2026",
        "major_area": "Probability & Statistics",
        "topic": "Probability",
        "subtopic": "Probability of Combined Events",
        "difficulty": "6/7",
        "q": "A drawer contains 8 striped shirts and 6 plain shirts. Two shirts are selected at random from the drawer, one after another, without replacement.<br>(a) Find the probability that both selected shirts are plain.<br>(b) Calculate the probability that the two selected shirts are of different designs.",
        "steps": [
            "For part (a), the total number of shirts in the drawer is $8 + 6 = 14$ shirts.",
            "The probability of selecting a plain shirt on the first draw is: $\\text{P}(\\text{Plain}_1) = \\dfrac{6}{14} = \\dfrac{3}{7}$.",
            "Since the selection is made without replacement, only 13 shirts remain in the drawer for the second draw, of which 5 are plain.",
            "The probability of selecting a second plain shirt is: $\\text{P}(\\text{Plain}_2) = \\dfrac{5}{13}$.",
            "The probability of both shirts being plain is the product of these sequential probabilities: $\\text{P}(\\text{Both Plain}) = \\dfrac{6}{14} \\times \\dfrac{5}{13} = \\dfrac{30}{182}$.",
            "Simplifying the fraction by dividing the numerator and denominator by 2 yields: $\\dfrac{15}{91}$.",
            "For part (b), there are two different ways to select shirts of different designs: (Striped then Plain) or (Plain then Striped).",
            "We calculate the probability of the first combination (Striped then Plain): $\\text{P}(\\text{S, P}) = \\dfrac{8}{14} \\times \\dfrac{6}{13} = \\dfrac{48}{182}$.",
            "We calculate the probability of the second combination (Plain then Striped): $\\text{P}(\\text{P, S}) = \\dfrac{6}{14} \\times \\dfrac{8}{13} = \\dfrac{48}{182}$.",
            "To find the total probability of selecting different designs, we add these two probabilities together: $\\text{P}(\\text{Different}) = \\dfrac{48}{182} + \\dfrac{48}{182} = \\dfrac{96}{182}$.",
            "Simplifying this fraction by dividing the numerator and denominator by 2 yields: $\\dfrac{48}{91}$.",
            "Final Answer: $$(a)\\ \\dfrac{15}{91}\\ (b)\\ \\dfrac{48}{91}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\dfrac{9}{49}\\ (b)\\ \\dfrac{24}{49}$$",
                "feedback": "You assumed that the shirts were replaced after each selection. This indicates you completed your calculations using 'with replacement' rules."
            },
            {
                "ans": "$$(a)\\ \\dfrac{15}{91}\\ (b)\\ \\dfrac{24}{91}$$",
                "feedback": "You calculated the probability of only one specific order (Striped then Plain) in part (b), forgetting that you must double this to account for the alternative order (Plain then Striped)."
            },
            {
                "ans": "$$(a)\\ \\dfrac{11}{27}\\ (b)\\ \\dfrac{14}{27}$$",
                "feedback": "You added the denominators when multiplying your fractions or made an arithmetic error when expanding your joint paths."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Order in Combined Events",
            "content": "When a probability question asks for 'different designs', remember that order matters. Getting a striped shirt first and a plain shirt second (SP) is a completely separate branch on a tree diagram from getting a plain shirt first and a striped shirt second (PS). You must calculate both paths and add them together."
        },
        "payhip_link": "https://payhip.com/b/FGC0u",
        "button_text": "Master IGCSE Probability: Download the Pack"
    },
    {
        "id": "003197",
        "date": "16 July 2026",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "Sine Rule",
        "difficulty": "7/8",
        "img": "true",
        "q": "The diagram shows a triangular plot of land $ABC$. $AC = 15\\text{ m}$, $BC = 11\\text{ m}$, and angle $BAC = 38^\\circ$.<br>(a) Find the size of the acute angle $ABC$. Give your answer correct to 1 decimal place.<br>(b) A secondary boundary post can be positioned at a different point $B'$ along the line $AB$ such that the length $CB' = 11\\text{ m}$ is preserved. State the size of the obtuse angle $AB'C$ correct to 1 decimal place.",
        "steps": [
            "For part (a), we use the Sine Rule because we are given two sides and an angle opposite to one of them.",
            "The Sine Rule states: $\\dfrac{\\sin(ABC)}{AC} = \\dfrac{\\sin(BAC)}{BC}$.",
            "Substituting our known values gives the equation: $\\dfrac{\\sin(ABC)}{15} = \\dfrac{\\sin(38^\\circ)}{11}$.",
            "Rearranging to solve for $\\sin(ABC)$: $\\sin(ABC) = \\dfrac{15 \\times \\sin(38^\\circ)}{11}$.",
            "Evaluating using a calculator: $\\sin(38^\\circ) \\approx 0.61566$.",
            "This yields: $\\sin(ABC) = \\dfrac{15 \\times 0.61566}{11} = \\dfrac{9.2349}{11} \\approx 0.83954$.",
            "Taking the inverse sine: $\\text{angle } ABC = \\arcsin(0.83954) \\approx 57.088^\\circ$.",
            "Rounding this value to 1 decimal place gives $57.1^\\circ$.",
            "For part (b), we consider the alternative triangle $AB'C$ created by swinging the side $BC$ inward.",
            "This creates an internal isosceles triangle $CB'B$ where $CB' = CB = 11\\text{ m}$.",
            "Since the base angles of an isosceles triangle are equal, angle $CB'B = \\text{angle } CBB' = 57.1^\\circ$.",
            "The angles on a straight line at $B'$ sum to $180^\\circ$. Therefore, the obtuse angle $AB'C$ is supplementary to the acute angle $ABC$.",
            "We calculate this as: $\\text{angle } AB'C = 180^\\circ - 57.088^\\circ = 122.912^\\circ$.",
            "Rounding to 1 decimal place gives $122.9^\\circ$.",
            "Final Answer: $$(a)\\ 57.1^\\circ\\ (b)\\ 122.9^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 57.1^\\circ\\ (b)\\ 32.9^\\circ$$",
                "feedback": "For part (b), you subtracted the acute angle from $90^\\circ$ instead of $180^\\circ$. Obtuse angles must be greater than $90^\\circ$."
            },
            {
                "ans": "$$(a)\\ 26.8^\\circ\\ (b)\\ 153.2^\\circ$$",
                "feedback": "You set up your Sine Rule ratio incorrectly, multiplying by 11 and dividing by 15 when rearranging."
            },
            {
                "ans": "$$(a)\\ 57.1^\\circ\\ (b)\\ 302.9^\\circ$$",
                "feedback": "For part (b), you calculated the reflex angle around $B'$ instead of finding the obtuse interior angle of the triangle."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The Ambiguous Case",
            "content": "The ambiguous case of the Sine Rule occurs when you are given two sides and a non-included angle (SSA). If the side opposite the known angle is shorter than the other known side, two mathematically distinct triangles can be formed. The acute and obtuse angles at the second vertex will always sum to exactly $180^\\circ$ due to the properties of the internal isosceles triangle."
        },
        "payhip_link": "https://payhip.com/b/EaYM1",
        "button_text": "Master IGCSE Trigonometry: Download the Pack"
    },
    {
        "id": "003198",
        "date": "17 July 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Algebraic Fractions 2",
        "difficulty": "8/9",
        "q": "Solve the algebraic equation for $x$:<br>$$\\dfrac{4}{2x - 3} + \\dfrac{3}{x + 2} = 3$$<br>Give your answers correct to 3 significant figures.",
        "steps": [
            "We begin by finding a common denominator to combine the two algebraic fractions: $(2x - 3)(x + 2)$.",
            "Rewriting each fraction with the common denominator: $\\dfrac{4(x + 2) + 3(2x - 3)}{(2x - 3)(x + 2)} = 3$.",
            "We expand the numerator: $4x + 8 + 6x - 9 = 10x - 1$.",
            "Our equation is now: $\\dfrac{10x - 1}{(2x - 3)(x + 2)} = 3$.",
            "To clear the fraction, we multiply both sides by the denominator: $10x - 1 = 3(2x - 3)(x + 2)$.",
            "We expand the quadratic brackets on the right side: $3(2x^2 + 4x - 3x - 6) = 3(2x^2 + x - 6) = 6x^2 + 3x - 18$.",
            "Equating the two sides gives: $10x - 1 = 6x^2 + 3x - 18$.",
            "We subtract $10x$ and add $1$ to both sides to form a quadratic equation equal to zero: $6x^2 - 7x - 17 = 0$.",
            "Applying the quadratic formula with $a = 6$, $b = -7$, and $c = -17$: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.",
            "Substituting these coefficients yields: $x = \\dfrac{-(-7) \\pm \\sqrt{(-7)^2 - 4(6)(-17)}}{2(6)} = \\dfrac{7 \\pm \\sqrt{49 + 408}}{12} = \\dfrac{7 \\pm \\sqrt{457}}{12}$.",
            "Evaluating the square root using a calculator: $\\sqrt{457} \\approx 21.3776$.",
            "Calculating our two distinct solutions: $x_1 = \\dfrac{7 + 21.3776}{12} \\approx 2.3648$ and $x_2 = \\dfrac{7 - 21.3776}{12} \\approx -1.1981$.",
            "Rounding both answers to 3 significant figures gives the final solutions as $x = 2.36$ or $x = -1.20$.",
            "Final Answer: $$x = 2.36 \\text{ or } x = -1.20$$"
        ],
        "wrong_options": [
            {
                "ans": "$$x = 5.00 \\text{ or } x = -0.500$$",
                "feedback": "You forgot to multiply the entire expanded denominator on the right side by the factor of 3, only equating the numerator to $(2x - 3)(x + 2)$."
            },
            {
                "ans": "$$x = -2.36 \\text{ or } x = 1.20$$",
                "feedback": "You made a sign error when applying the quadratic formula, using $-b = -7$ instead of $+7$ at the start of your calculation."
            },
            {
                "ans": "$$x = 2.45 \\text{ or } x = -1.12$$",
                "feedback": "You expanded the numerator incorrectly, writing $3(2x-3)$ as $6x - 3$ instead of distributing the 3 to both terms inside the bracket to get $6x - 9$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Distributing Multipliers",
            "content": "A very common mistake when clearing denominators is forgetting to multiply the entire expanded quadratic on the right side of the equation by the constant (in this case, 3). Ensure you keep your expanded brackets inside a single set of parentheses before distributing your constant multiplier."
        },
        "payhip_link": "https://payhip.com/b/jJHdP",
        "button_text": "Master IGCSE Algebra: Download the Pack"
    },
    {
        "id": "003199",
        "date": "18 July 2026",
        "major_area": "Number",
        "topic": "Bounds",
        "subtopic": "Limits of Accuracy and Bounds",
        "difficulty": "8/9",
        "q": "A racing car completes a single lap of a test track of length $d = 4.2\\text{ km}$, correct to 2 significant figures. The time taken to complete the lap is $t = 54\\text{ seconds}$, correct to the nearest second.<br>(a) Find the lower bound and upper bound of the track length in metres.<br>(b) Calculate the upper bound for the average speed of the car during the lap in metres per second ($\\text{m/s}$). Give your answer correct to 1 decimal place.",
        "steps": [
            "For part (a), the track length $d = 4.2\\text{ km}$ is rounded to 2 significant figures, which is equivalent to the nearest $0.1\\text{ km}$.",
            "The boundary offset is found by halving this unit of accuracy: $0.1 \\div 2 = 0.05\\text{ km}$.",
            "This gives the bounds in kilometres: $\\text{Lower Bound} = 4.2 - 0.05 = 4.15\\text{ km}$ and $\\text{Upper Bound} = 4.2 + 0.05 = 4.25\\text{ km}$.",
            "We convert these bounds to metres by multiplying by 1000: $\\text{Lower Bound} = 4150\\text{ m}$ and $\\text{Upper Bound} = 4250\\text{ m}$.",
            "For part (b), we first find the bounds for the time. The time $t = 54\\text{ seconds}$ is recorded to the nearest second.",
            "The boundary offset is: $1 \\div 2 = 0.5\\text{ seconds}$.",
            "This gives the bounds: $\\text{Lower Bound of Time} = 53.5\\text{ s}$ and $\\text{Upper Bound of Time} = 54.5\\text{ s}$.",
            "To calculate the upper bound of average speed (where $\\text{Speed} = \\text{Distance} \\div \\text{Time}$), we divide the upper bound of distance by the lower bound of time.",
            "This gives the calculation: $\\text{Speed}_{\\text{UB}} = \\dfrac{4250\\text{ m}}{53.5\\text{ s}} \\approx 79.439\\text{ m/s}$.",
            "Rounding this calculation to 1 decimal place gives $79.4\\text{ m/s}$.",
            "Final Answer: $$(a)\\ \\text{Lower Bound: } 4150\\text{ m, Upper Bound: } 4250\\text{ m}\\ (b)\\ 79.4\\text{ m/s}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\text{Lower Bound: } 4150\\text{ m, Upper Bound: } 4250\\text{ m}\\ (b)\\ 76.1\\text{ m/s}$$",
                "feedback": "You calculated the lower bound of speed instead of the upper bound by dividing the lower bound of distance by the upper bound of time."
            },
            {
                "ans": "$$(a)\\ \\text{Lower Bound: } 4.15\\text{ m, Upper Bound: } 4.25\\text{ m}\\ (b)\\ 0.1\\text{ m/s}$$",
                "feedback": "You forgot to convert the distance from kilometres to metres before calculating your speed bounds."
            },
            {
                "ans": "$$(a)\\ \\text{Lower Bound: } 4150\\text{ m, Upper Bound: } 4250\\text{ m}\\ (b)\\ 78.0\\text{ m/s}$$",
                "feedback": "You divided the upper bound of distance by the upper bound of time. To find the maximum speed, you must divide by the minimum possible time."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dual Units and Maximising Fractions",
            "content": "This question contains two major traps. First, check the units: distance is in kilometres but speed must be in m/s, so convert your distance bounds to metres first. Second, remember that to find the upper bound of any division, you must divide the upper bound of the numerator by the lower bound of the denominator."
        },
        "payhip_link": "https://payhip.com/b/qYp8g",
        "button_text": "Master IGCSE Bounds: Download the Pack"
    },
    {
        "id": "003200",
        "date": "19 July 2026",
        "major_area": "Geometry",
        "topic": "Circle Geometry",
        "subtopic": "Circle Theorems 2",
        "difficulty": "7/8",
        "img": "true",
        "q": "A circular dial has a centre $O$. A straight indicator line $TBC$ is tangent to the circle at point $B$. $A$ and $D$ are points on the circumference such that $ABD$ is a triangle. The tangent angle $DBC$ is $62^\\circ$.<br>(a) Find the size of angle $DAB$. Give a geometric reason for your answer.<br>(b) Given that the angle subtended at the centre, $AOD$, is $112^\\circ$, calculate the size of angle $ABD$.",
        "steps": [
            "For part (a), we observe that $TBC$ is a tangent to the circle at point $B$, and $BD$ is a chord.",
            "The angle formed between the tangent and the chord is given as angle $DBC = 62^\\circ$.",
            "According to the alternate segment theorem, the angle between a tangent and a chord through the point of contact is equal to the angle subtended by the chord in the alternate segment.",
            "The angle subtended by the chord $BD$ in the alternate segment is angle $DAB$.",
            "Therefore, angle $DAB = 62^\\circ$. Our geometric reason is: 'The Alternate Segment Theorem'.",
            "For part (b), we find the angle $ABD$ using the relationship between angles at the centre and angles at the circumference.",
            "The angle subtended by the arc $AD$ at the centre is given as angle $AOD = 112^\\circ$.",
            "According to the circle theorem, the angle subtended by an arc at the centre is twice the angle subtended at the circumference.",
            "The angle subtended by the same arc at the circumference is angle $ABD$.",
            "This gives: $\\text{angle } ABD = \\dfrac{1}{2} \\times \\text{angle } AOD = \\dfrac{112^\\circ}{2} = 56^\\circ$.",
            "Final Answer: $$(a)\\ 62^\\circ\\ (b)\\ 56^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 62^\\circ\\ (b)\\ 224^\\circ$$",
                "feedback": "You multiplied the angle at the centre by 2 instead of halving it to find the angle at the circumference in part (b)."
            },
            {
                "ans": "$$(a)\\ 62^\\circ\\ (b)\\ 28^\\circ$$",
                "feedback": "You assumed that the tangent-radius rule applies directly to make angle $ABD = 90^\\circ - 62^\\circ = 28^\\circ$."
            },
            {
                "ans": "$$(a)\\ 28^\\circ\\ (b)\\ 56^\\circ$$",
                "feedback": "You used the tangent-radius perpendicular rule incorrectly in part (a), subtracting $62^\\circ$ from $90^\\circ$ instead of applying the alternate segment theorem."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Identifying Segments",
            "content": "To apply the alternate segment theorem correctly, identify the chord touching the tangent point. The angle between that chord and the tangent is equal to the angle at the circumference that looks directly at that chord. Practise drawing these triangles to visually lock in the theorem."
        },
        "payhip_link": "https://payhip.com/b/wm0xL",
        "button_text": "Master IGCSE Circle Geometry: Download the Pack"
    },
    {
        "id": "003201",
        "date": "20 July 2026",
        "major_area": "Probability & Statistics",
        "topic": "Probability",
        "subtopic": "Relative and Expected Frequencies",
        "difficulty": "5/6",
        "q": "A manufacturer tests a batch of LED light bulbs to estimate the probability of a bulb being defective. In a random sample of 250 bulbs, 4 are found to be defective.<br>(a) Find the relative frequency of defective bulbs in this sample as a decimal.<br>(b) The manufacturer produces a total of 180,000 bulbs in a month. Calculate the expected number of defective bulbs in this monthly production run.<br>(c) Explain how the manufacturer can make their estimate of the probability of a defective bulb more reliable.",
        "steps": [
            "For part (a), the relative frequency is the number of defective bulbs divided by the total number of bulbs in the sample.",
            "This is calculated as: $\\text{Relative Frequency} = \\dfrac{4}{250}$.",
            "To convert this to a decimal easily without a calculator, we multiply the numerator and the denominator by 4: $\\dfrac{16}{1000} = 0.016$.",
            "For part (b), the expected number of defective bulbs is the product of the total monthly production and the relative frequency of defects.",
            "This gives: $\\text{Expected Defectives} = 180,000 \\times 0.016$.",
            "Evaluating the multiplication: $180,000 \\times \\dfrac{16}{1000} = 180 \\times 16 = 2,880\\text{ bulbs}$.",
            "For part (c), we explain the relationship between sample size and statistical reliability.",
            "The manufacturer can make their estimate more reliable by testing a larger sample size of bulbs. Larger samples reduce the impact of random variations and make the experimental relative frequency closer to the true probability.",
            "Final Answer: $$(a)\\ 0.016\\ (b)\\ 2880\\text{ bulbs}\\ (c)\\ \\text{Test a larger sample size of bulbs}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 0.016\\ (b)\\ 720\\text{ bulbs}\\ (c)\\ \\text{Test a larger sample size of bulbs}$$",
                "feedback": "You made an arithmetic error when calculating the expected value in part (b), possibly by dividing by 40 instead of multiplying by $0.016$."
            },
            {
                "ans": "$$(a)\\ 0.016\\ (b)\\ 720,000\\text{ bulbs}\\ (c)\\ \\text{Test a larger sample size of bulbs}$$",
                "feedback": "You multiplied the total production by 4 directly instead of using the relative frequency of $0.016$ calculated in part (a)."
            },
            {
                "ans": "$$(a)\\ 0.016\\ (b)\\ 2880\\text{ bulbs}\\ (c)\\ \\text{Test a smaller, more focused sample size}$$",
                "feedback": "Your calculations are correct, but your explanation in part (c) is incorrect. Decreasing the sample size decreases statistical reliability and increases experimental error."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Scaling Decimal Fractions",
            "content": "When working with decimals manually, converting them back to simple base-10 fractions makes the arithmetic clean. Evaluating $180,000 \\times \\dfrac{16}{1000}$ allows you to cross out three zeros instantly and perform the simple integer multiplication $180 \\times 16$."
        },
        "payhip_link": "https://payhip.com/b/csAoM",
        "button_text": "Master IGCSE Statistics: Download the Pack"
    }



]