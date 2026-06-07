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
    }

]