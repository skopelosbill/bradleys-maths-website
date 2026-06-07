const problemBank = [
    {
        "id": "003182",
        "date": "1 July 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Surds",
        "difficulty": "B/A",
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
        "difficulty": "B/C",
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
        "difficulty": "A/B",
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
        "difficulty": "A/B",
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
        "difficulty": "C/D",
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
        "difficulty": "B/C",
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
        "difficulty": "A/B",
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
        "difficulty": "C/D",
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
        "difficulty": "A/B",
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
        "difficulty": "A/B",
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
        "difficulty": "A/B",
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
    "difficulty": "A/A*",
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
        "difficulty": "C/D",
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
        "difficulty": "B/C",
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
        "difficulty": "B/C",
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
        "difficulty": "A/B",
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
        "difficulty": "A/A*",
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
        "difficulty": "A/B",
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
        "difficulty": "A/B",
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
        "difficulty": "C/D",
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
    },
    {
        "id": "003202",
        "date": "21 July 2026",
        "major_area": "Algebra",
        "topic": "Linear Graphs",
        "subtopic": "Equations of Linear Graphs",
        "difficulty": "C/D",
        "q": "A rescue helicopter flies along a straight-line path, $L_1$, that passes through the coordinates $A(-2, 3)$ and $B(4, 15)$ on a navigational map.<br>(a) Find the equation of the flight path $L_1$. Give your answer in the form $y = mx + c$.<br>(b) A secondary drone flight path, $L_2$, is perpendicular to $L_1$ and passes through the point $C(2, 5)$. Find the equation of $L_2$, giving your answer in the form $ay + bx = c$, where $a$, $b$, and $c$ are integers.",
        "steps": [
            "For part (a), we first determine the gradient, $m$, of the flight path $L_1$ using the coordinates $A(-2, 3)$ and $B(4, 15)$.",
            "The gradient formula is: $m = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{15 - 3}{4 - (-2)} = \\dfrac{12}{6} = 2$.",
            "To find the equation of $L_1$, we use the straight-line formula: $y - y_1 = m(x - x_1)$.",
            "Substituting the gradient $m = 2$ and the coordinate $A(-2, 3)$ yields: $y - 3 = 2(x - (-2))$.",
            "Expanding the bracket: $y - 3 = 2(x + 2) \\implies y - 3 = 2x + 4$.",
            "Adding 3 to both sides gives the equation of $L_1$: $y = 2x + 7$.",
            "For part (b), the gradient of the perpendicular path $L_2$ is the negative reciprocal of the gradient of $L_1$.",
            "Since the gradient of $L_1$ is 2, the perpendicular gradient is: $m_{\\perp} = -\\dfrac{1}{2}$ (or $-0.5$).",
            "Using the straight-line equation with $m = -\\dfrac{1}{2}$ and the point $C(2, 5)$ yields: $y - 5 = -\\dfrac{1}{2}(x - 2)$.",
            "Expanding the bracket: $y - 5 = -\\dfrac{1}{2}x + 1$.",
            "To clear the fraction, we multiply the entire equation by 2: $2y - 10 = -x + 2$.",
            "We rearrange this into the form $ay + bx = c$ by adding $x$ and $10$ to both sides, which gives: $2y + x = 12$.",
            "Final Answer: $$(a)\\ y = 2x + 7\\ (b)\\ 2y + x = 12$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ y = 2x + 7\\ (b)\\ y = -0.5x + 6$$",
                "feedback": "For part (b), you found the correct equation for $L_2$, but you forgot to rearrange it into the required integer form $ay + bx = c$."
            },
            {
                "ans": "$$(a)\\ y = 0.5x + 4\\ (b)\\ y = -2x + 9$$",
                "feedback": "You calculated the gradient of $L_1$ as $\\dfrac{\\text{change in } x}{\\text{change in } y}$ instead of $\\dfrac{\\text{change in } y}{\\text{change in } x}$ in part (a)."
            },
            {
                "ans": "$$(a)\\ y = 2x + 7\\ (b)\\ 2y + x = 5$$",
                "feedback": "Your flight path $L_1$ is correct, but you made an arithmetic sign error when expanding the bracket $-0.5(x - 2)$ in part (b), writing $-0.5x - 1$ instead of $-0.5x + 1$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Point-Slope Formula",
            "content": "Using the point-slope formula $y - y_1 = m(x - x_1)$ is significantly faster and less prone to arithmetic sign slips than substituting into $y = mx + c$ and solving for $c$. Once you have your gradient and any coordinate point, simply substitute them directly into this equation and expand."
        },
        "payhip_link": "https://payhip.com/b/U8umo",
        "button_text": "Master IGCSE Algebra: Download the Pack"
    },
    {
        "id": "003203",
        "date": "22 July 2026",
        "major_area": "Probability & Statistics",
        "topic": "Sets and Venn Diagrams",
        "subtopic": "Sets and Venn Diagrams",
        "difficulty": "B/c",
        "img": "true",
        "q": "The Venn diagram shows the distribution of 120 school students who participate in Drama ($D$), Music ($M$), and Art ($A$).<br>(a) Find the number of students represented by the region $n(D \\cap M \\cap A')$.<br>(b) Calculate the probability that a student chosen at random participates in at least two of these activities.<br>(c) A student is selected at random. Given that this student participates in Music, calculate the probability that they also participate in Art.",
        "steps": [
            "For part (a), the notation $n(D \\cap M \\cap A')$ represents the number of students who participate in both Drama and Music, but do not participate in Art.",
            "Looking at the Venn diagram, this corresponds to the region where circles $D$ and $M$ overlap, but excludes the intersection with circle $A$. This region contains exactly 14 students.",
            "For part (b), participating in 'at least two' activities includes those who do exactly two activities, and those who do all three.",
            "These regions on the diagram correspond to the overlaps: $14$ (Drama & Music only), $11$ (Drama & Art only), $9$ (Music & Art only), and $6$ (all three).",
            "We sum these overlapping regions: $\\text{Total} = 14 + 11 + 9 + 6 = 40$ students.",
            "The probability of choosing one of these students from the total cohort of 120 is: $\\text{P}(\\text{At least two}) = \\dfrac{40}{120}$.",
            "Simplifying the fraction by dividing the numerator and denominator by 40 yields: $\\dfrac{1}{3}$.",
            "For part (c), we calculate the conditional probability: $\\text{P}(\\text{Art} | \\text{Music}) = \\dfrac{n(\\text{Art} \\cap \\text{Music})}{n(\\text{Music})}$.",
            "The total number of students who participate in Music, $n(M)$, is the sum of all regions inside circle $M$: $n(M) = 28 + 14 + 6 + 9 = 57$ students.",
            "The number of those Music students who also participate in Art is the intersection of circle $M$ and circle $A$: $n(M \\cap A) = 6 + 9 = 15$ students.",
            "This gives the conditional probability as: $\\text{P}(\\text{Art} | \\text{Music}) = \\dfrac{15}{57}$.",
            "We simplify the fraction by dividing the numerator and denominator by 3, which yields: $\\dfrac{5}{19}$.",
            "Final Answer: $$(a)\\ 14\\ (b)\\ \\dfrac{1}{3}\\ (c)\\ \\dfrac{5}{19}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 6\\ (b)\\ \\dfrac{1}{3}\\ (c)\\ \\dfrac{5}{19}$$",
                "feedback": "For part (a), you stated the number of students who participate in all three activities ($n(D \\cap M \\cap A)$) instead of excluding those who participate in Art."
            },
            {
                "ans": "$$(a)\\ 14\\ (b)\\ \\dfrac{1}{4}\\ (c)\\ \\dfrac{5}{19}$$",
                "feedback": "For part (b), you forgot to include the 6 students who do all three activities when summing the 'at least two' regions."
            },
            {
                "ans": "$$(a)\\ 14\\ (b)\\ \\dfrac{1}{3}\\ (c)\\ \\dfrac{1}{8}$$",
                "feedback": "For part (c), you calculated the probability using the entire school cohort of 120 as your denominator instead of restricting the sample space to the 57 students who participate in Music."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Conditional Restricting",
            "content": "On 3-set Venn diagrams, conditional probability questions starting with 'Given that...' require you to completely change your denominator. For part (c), the condition is that the student does Music, so your denominator must be the sum of all elements inside circle $M$ (57), not the overall total of 120."
        },
        "payhip_link": "https://payhip.com/b/oW2c1",
        "button_text": "Master IGCSE Sets: Download the Pack"
    },
    {
        "id": "003204",
        "date": "23 July 2026",
        "major_area": "Number",
        "topic": "Ratio and Proportion",
        "subtopic": "Direct and Inverse Proportion",
        "difficulty": "A/B",
        "q": "The rate of heat loss, $R$ watts, of a spherical metal cylinder is directly proportional to its surface area, $A\\text{ cm}^2$. The surface area $A$ is directly proportional to the square of its radius, $r\\text{ cm}$.<br>When the radius of the sphere is $3\\text{ cm}$, the rate of heat loss is $108\\text{ watts}$.<br>(a) Show that the rate of heat loss $R$ can be written as $R = k r^2$, and calculate the constant of proportionality, $k$.<br>(b) Calculate the rate of heat loss when the radius of the sphere is $5\\text{ cm}$.<br>(c) Calculate the radius of the sphere when the rate of heat loss is exactly $192\\text{ watts}$.",
        "steps": [
            "For part (a), we are given two proportional relationships: $R \\propto A$ and $A \\propto r^2$.",
            "This can be written as the equations: $R = c_1 A$ and $A = c_2 r^2$, where $c_1$ and $c_2$ are constants.",
            "Substituting the expression for $A$ into the first equation: $R = c_1 (c_2 r^2) = (c_1 c_2) r^2$. Since the product of two constants is a new constant, we can write: $R = k r^2$, completing the proof.",
            "To find $k$, we substitute the known values $r = 3$ and $R = 108$ into our equation: $108 = k (3)^2 \\implies 108 = 9k$.",
            "Dividing both sides by 9 gives the constant: $k = \\dfrac{108}{9} = 12$. The formula is: $R = 12r^2$.",
            "For part (b), we calculate the rate of heat loss by substituting $r = 5$ into our formula: $R = 12(5)^2$.",
            "Evaluating the square first: $R = 12 \\times 25 = 300\\text{ watts}$.",
            "For part (c), we substitute $R = 192$ into our formula to calculate the radius: $192 = 12r^2$.",
            "Dividing both sides by 12 gives: $r^2 = \\dfrac{192}{12} = 16$.",
            "Taking the positive square root of both sides gives the radius: $r = \\sqrt{16} = 4\\text{ cm}$.",
            "Final Answer: $$(a)\\ k = 12\\ (b)\\ 300\\text{ watts}\\ (c)\\ 4\\text{ cm}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ k = 36\\ (b)\\ 900\\text{ watts}\\ (c)\\ 2.31\\text{ cm}$$",
                "feedback": "You did not square the radius of 3 when solving for the constant of proportionality $k$ in part (a), using $3k = 108$ instead of $9k = 108$."
            },
            {
                "ans": "$$(a)\\ k = 12\\ (b)\\ 60\\text{ watts}\\ (c)\\ 16\\text{ cm}$$",
                "feedback": "You treated the relationship as directly proportional to the radius $r$ instead of directly proportional to the square of the radius $r^2$ in parts (b) and (c)."
            },
            {
                "ans": "$$(a)\\ k = 12\\ (b)\\ 300\\text{ watts}\\ (c)\\ 16\\text{ cm}$$",
                "feedback": "Your formula and part (b) are correct, but in part (c) you forgot to take the square root of $r^2 = 16$ to find the final radius $r$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Compound Proportionality",
            "content": "When two variables are connected via a third intermediary variable, their direct proportional relationship compounds. Because $R$ depends on $A$, and $A$ depends on $r^2$, $R$ directly scales with $r^2$. Always prove this combined relationship first before trying to calculate your constants."
        },
        "payhip_link": "https://payhip.com/b/JYBkq",
        "button_text": "Master IGCSE Proportion: Download the Pack"
    },
    {
        "id": "003205",
        "date": "24 July 2026",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "Cosine Rule",
        "difficulty": "A/B",
        "img": "true",
        "q": "The diagram shows a triangular clearing in a forest with vertices $P$, $Q$, and $R$. The distance $PQ = 14\\text{ m}$ and the distance $QR = 9\\text{ m}$. The angle $PQR$ is $125^\\circ$.<br>(a) Calculate the direct distance $PR$ across the clearing. Give your answer in metres correct to 3 significant figures.<br>(b) Calculate the total area of the clearing. Give your answer in square metres correct to 1 decimal place.",
        "steps": [
            "For part (a), we use the Cosine Rule because we are given two sides and the included angle (SAS).",
            "The Cosine Rule is: $q^2 = p^2 + r^2 - 2pr \\cos(Q)$.",
            "Substituting our known values $p = 9\\text{ m}$, $r = 14\\text{ m}$, and angle $Q = 125^\\circ$ gives: $q^2 = 9^2 + 14^2 - 2(9)(14) \\cos(125^\\circ)$.",
            "Evaluating the squared values and multiplication: $q^2 = 81 + 196 - 252 \\cos(125^\\circ) = 277 - 252 \\cos(125^\\circ)$.",
            "Using a calculator, we find $\\cos(125^\\circ) \\approx -0.573576$.",
            "Since the cosine of an obtuse angle is negative, this term becomes positive: $q^2 \\approx 277 - 252(-0.573576) = 277 + 144.541 = 421.541$.",
            "Taking the square root of both sides gives the length $q$: $q = \\sqrt{421.541} \\approx 20.531\\text{ m}$.",
            "Rounding this distance to 3 significant figures gives $20.5\\text{ m}$.",
            "For part (b), the formula for the area of a non-right-angled triangle is: $\\text{Area} = \\dfrac{1}{2}pr \\sin(Q)$.",
            "Substituting our values into the formula yields: $\\text{Area} = \\dfrac{1}{2} \\times 9 \\times 14 \\times \\sin(125^\\circ) = 63 \\times \\sin(125^\\circ)$.",
            "Using a calculator, we evaluate $\\sin(125^\\circ) \\approx 0.819152$, giving: $\\text{Area} \\approx 63 \\times 0.819152 \\approx 51.606\\text{ m}^2$.",
            "Rounding this area to 1 decimal place gives $51.6\\text{ m}^2$.",
            "Final Answer: $$(a)\\ 20.5\\text{ m}\\ (b)\\ 51.6\\text{ m}^2$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 11.5\\text{ m}\\ (b)\\ 51.6\\text{ m}^2$$",
                "feedback": "You made a sign error in your Cosine Rule calculation by failing to recognise that $\\cos(125^\\circ)$ is negative, which led you to subtract $144.541$ instead of adding it."
            },
            {
                "ans": "$$(a)\\ 20.5\\text{ m}\\ (b)\\ -36.1\\text{ m}^2$$",
                "feedback": "Your distance calculation is correct, but you used the cosine ratio instead of the sine ratio in your triangle area formula."
            },
            {
                "ans": "$$(a)\\ 422\\text{ m}\\ (b)\\ 51.6\\text{ m}^2$$",
                "feedback": "For part (a), you calculated the value of $q^2$ correctly but forgot to perform the final step of taking the square root to find the actual distance $q$."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Obtuse Angles and Signs",
            "content": "Always remember that the cosine of any obtuse angle (between $90^\\circ$ and $180^\\circ$) is negative. This means the final term in your Cosine Rule equation ($- 2pr \\cos(Q)$) will always become an addition. Ensure your final calculated side is the longest side of the triangle, as it must be opposite the largest angle."
        },
        "payhip_link": "https://payhip.com/b/RHeNL",
        "button_text": "Master IGCSE Trigonometry: Download the Pack"
    },
    {
        "id": "003206",
        "date": "25 July 2026",
        "major_area": "Number",
        "topic": "Indices",
        "subtopic": "Fractional Indices and Roots",
        "difficulty": "A/B",
        "q": "(a) Evaluate $125^{-\\frac{2}{3}}$.<br>(b) Simplify completely $(16x^{12} y^{-8})^{\\frac{3}{4}}$.<br>(c) Solve the equation $3^{y+5} = 27^{y-1}$.",
        "steps": [
            "For part (a), we address the negative index first. A negative exponent indicates the reciprocal of the term: $125^{-\\frac{2}{3}} = \\dfrac{1}{125^{\\frac{2}{3}}}$.",
            "The fractional index $\\dfrac{2}{3}$ represents the square of the cube root: $125^{\\frac{2}{3}} = (\\sqrt[3]{125})^2$.",
            "The cube root of 125 is 5, so this simplifies to $5^2 = 25$.",
            "Substituting this back into the fraction gives the final evaluated value: $\\dfrac{1}{25}$ (or $0.04$).",
            "For part (b), we apply the fractional index $\\dfrac{3}{4}$ to every term inside the parentheses.",
            "This gives: $(16x^{12} y^{-8})^{\\frac{3}{4}} = 16^{\\frac{3}{4}} \\times (x^{12})^{\\frac{3}{4}} \\times (y^{-8})^{\\frac{3}{4}}$.",
            "Evaluating the coefficient: $16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$.",
            "Applying the power of a power rule to the $x$ term: $12 \\times \\dfrac{3}{4} = 9$, which gives $x^9$.",
            "Applying the power of a power rule to the $y$ term: $-8 \\times \\dfrac{3}{4} = -6$, which gives $y^{-6}$.",
            "Combining these components gives the simplified expression: $8x^9 y^{-6}$ (or $\\dfrac{8x^9}{y^6}$).",
            "For part (c), we express both sides of the equation using an identical base.",
            "Since $27 = 3^3$, we can rewrite the right side of the equation as: $(3^3)^{y-1} = 3^{3(y-1)} = 3^{3y-3}$.",
            "Our equation is now: $3^{y+5} = 3^{3y-3}$. Since the bases are identical, we can equate the exponents: $y + 5 = 3y - 3$.",
            "Subtracting $y$ from both sides: $5 = 2y - 3$.",
            "Adding 3 to both sides: $8 = 2y$, which yields the solution: $y = 4$.",
            "Final Answer: $$(a)\\ \\dfrac{1}{25}\\ (b)\\ 8x^9 y^{-6}\\ (c)\\ y = 4$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ -25\\ (b)\\ 12x^9 y^{-6}\\ (c)\\ y = 2$$",
                "feedback": "For part (a), you treated the negative index as a sign for the final value instead of taking the reciprocal. For part (b), you multiplied the coefficient 16 by $\\dfrac{3}{4}$ instead of raising it to the power of $\\dfrac{3}{4}$."
            },
            {
                "ans": "$$(a)\\ \\dfrac{1}{25}\\ (b)\\ 8x^{\\frac{51}{4}} y^{-\\frac{29}{4}}\\ (c)\\ y = 4$$",
                "feedback": "Your values for (a) and (c) are correct, but in part (b) you added the exponents together instead of multiplying them when applying the power of a power rule."
            },
            {
                "ans": "$$(a)\\ \\dfrac{1}{25}\\ (b)\\ 8x^9 y^{-6}\\ (c)\\ y = -2$$",
                "feedback": "Your calculations for (a) and (b) are correct, but in part (c) you made an expansion error, writing $3(y-1)$ as $3y - 1$ instead of $3y - 3$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root Order of Operations",
            "content": "When evaluating fractional exponents manually, always take the root first before applying the power. Evaluating $\\sqrt[3]{125} = 5$ and then squaring it ($5^2 = 25$) is significantly easier to calculate mentally than trying to square 125 first ($15,625$) and then finding its cube root."
        },
        "payhip_link": "https://payhip.com/b/iU6Nj",
        "button_text": "Master IGCSE Algebra: Download the Pack"
    },
    {
    "id": "003207",
    "date": "26 July 2026",
    "major_area": "Algebra",
    "topic": "Quadratic Equations",
    "subtopic": "Completing the Square",
    "difficulty": "A/B",
    "q": "The curve $y = -2x^2 + 12x + 5$ represents the flight path of a model rocket, where $y$ is the height in metres and $x$ is the horizontal distance in metres.<br>(a) Express the quadratic equation $-2x^2 + 12x + 5$ in the form $a(x - b)^2 + c$, where $a$, $b$, and $c$ are integers.<br>(b) Write down the coordinates of the turning point of the curve, representing the maximum height of the rocket.",
    "steps": [
        "For part (a), we begin by factoring out the coefficient of $x^2$, which is $-2$, from the first two terms of the expression: $-2(x^2 - 6x) + 5$.",
        "Next, we complete the square for the quadratic expression inside the bracket, $x^2 - 6x$.",
        "We halve the coefficient of $x$ (which is $-6$) to get $-3$, giving the squared term: $(x - 3)^2$.",
        "To keep the expression equal, we subtract the square of this value inside the bracket: $x^2 - 6x = (x - 3)^2 - 3^2 = (x - 3)^2 - 9$.",
        "Substituting this completed square back into our factored expression: $-2[(x - 3)^2 - 9] + 5$.",
        "We expand the outer bracket by multiplying both terms by $-2$, noting that multiplying two negative numbers yields a positive: $-2(x - 3)^2 + 18 + 5$.",
        "Simplifying the constant terms: $-2(x - 3)^2 + 23$, which is in the required form where $a = -2$, $b = 3$, and $c = 23$.",
        "For part (b), the turning point of a curve in the form $y = a(x - b)^2 + c$ occurs at the coordinates $(b, c)$.",
        "Since the expression is $-2(x - 3)^2 + 23$, the maximum value of $y$ is $23$, which occurs when the squared term is zero, meaning $x - 3 = 0 \\implies x = 3$.",
        "The coordinates of the turning point (the maximum height) are therefore $(3, 23)$.",
        "Final Answer: $$(a)\\ -2(x - 3)^2 + 23\\ (b)\\ (3, 23)$$"
    ],
    "wrong_options": [
        {
            "ans": "$$-2(x - 3)^2 + 23\\ (b)\\ (-3, 23)$$",
            "feedback": "You gave the incorrect sign for your x-coordinate. In the completed square form $(x-b)^2$, the turning point occurs at positive $b$."
        },
        {
            "ans": "$$-2(x - 6)^2 + 77\\ (b)\\ (6, 77)$$",
            "feedback": "You forgot to factor out the coefficient of $-2$ before halving your linear term, subtracting the incorrect squared constant."
        },
        {
            "ans": "$$-2(x - 3)^2 + 13\\ (b)\\ (3, 13)$$",
            "feedback": "You made a sign error when expanding your bracket, subtracting 18 from 5 instead of adding 18 to 5."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Sign Changes in Expansion",
        "content": "A very common slip in this style of question is sign management. When expanding $-2[(x-3)^2 - 9] + 5$, you must multiply $-2$ by $-9$, which results in $+18$. Forgetting that the product of two negatives is positive is a frequent source of lost marks."
    },
    "payhip_link": "https://payhip.com/b/miLap",
    "button_text": "Master IGCSE Algebra: Download the Pack"
},
    {
    "id": "003208",
    "date": "27 July 2026",
    "major_area": "Geometry",
    "topic": "Circle Geometry",
    "subtopic": "Circle Theorems 2",
    "difficulty": "A/A*",
    "img": "true",
    "q": "The diagram shows a circle with centre $O$. $A$, $B$, $C$, and $D$ are points on the circumference. $AC$ is a diameter of the circle, and the line $TA$ is a tangent to the circle at point $A$. The tangent angle $TAB = 56^\\circ$ and angle $ACD = 38^\\circ$.<br>(a) Find the size of angle $ACB$. State the geometric reason for your answer.<br>(b) Calculate the size of angle $CAD$. State the geometric reasons for your calculations.",
    "steps": [
        "For part (a), we identify that $TA$ is a tangent to the circle at point $A$, and $AB$ is a chord.",
        "The angle between the tangent $TA$ and the chord $AB$ is given as angle $TAB = 56^\\circ$.",
        "According to the alternate segment theorem, the angle between a tangent and a chord through the point of contact is equal to the angle subtended by the chord in the alternate segment.",
        "The angle subtended by the chord $AB$ in the alternate segment is angle $ACB$.",
        "Therefore, angle $ACB = 56^\\circ$. Our geometric reason is: 'The Alternate Segment Theorem'.",
        "For part (b), we observe that the chord $AC$ is a diameter of the circle.",
        "According to the circle theorem, the angle subtended by a diameter at the circumference is always a right angle.",
        "In the triangle $ADC$, this means the angle $ADC = 90^\\circ$. Our geometric reason is: 'The angle in a semicircle is a right angle'.",
        "We are given that angle $ACD = 38^\\circ$ inside the triangle $ADC$.",
        "Since the angles in any triangle must sum to $180^\\circ$, we can find the remaining angle $CAD$.",
        "We calculate this as: $\\text{angle } CAD = 180^\\circ - (90^\\circ + 38^\\circ) = 180^\\circ - 128^\\circ = 52^\\circ$.",
        "Our geometric reason is: 'The sum of angles in a triangle is 180 degrees'.",
        "Final Answer: $$(a)\\ 56^\\circ\\ (b)\\ 52^\\circ$$"
    ],
    "wrong_options": [
        {
            "ans": "$$(a)\\ 56^\\circ\\ (b)\\ 38^\\circ$$",
            "feedback": "For part (b), you assumed that triangle $ADC$ is isosceles and that angle $CAD$ is equal to angle $ACD$ ($38^\\circ$), which is not supported by any circle theorem."
        },
        {
            "ans": "$$(a)\\ 34^\\circ\\ (b)\\ 52^\\circ$$",
            "feedback": "For part (a), you used the tangent-radius perpendicular rule incorrectly, subtracting $56^\\circ$ from $90^\\circ$ instead of applying the alternate segment theorem."
        },
        {
            "ans": "$$(a)\\ 56^\\circ\\ (b)\\ 90^\\circ$$",
            "feedback": "You calculated the angle $ADC$ correctly as $90^\\circ$, but you forgot to perform the final subtraction to find the required angle $CAD$."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Explicit worked Reasons",
        "content": "Even though Cambridge does not expect you to algebraically prove circle theorems, they strictly require you to state the name of each theorem you use during multi-step angle calculations. Standard phrases like 'angle in a semicircle is 90 degrees' and 'alternate segment theorem' are necessary to secure full reasoning marks."
    },
    "payhip_link": "https://payhip.com/b/wm0xL",
    "button_text": "Master IGCSE Circle Geometry: Download the Pack"
},
    {
        "id": "003209",
        "date": "28 July 2026",
        "major_area": "Number",
        "topic": "Bounds",
        "subtopic": "Limits of Accuracy and Bounds",
        "difficulty": "A/B",
        "q": "A solid metal sphere has a mass of $m = 320\\text{ g}$, correct to 2 significant figures. The volume of the sphere is $V = 40\\text{ cm}^3$, correct to 1 significant figure.<br>(a) Find the lower bound and upper bound for both the mass and the volume.<br>(b) Calculate the lower bound for the density of the metal in grams per cubic centimetre ($\\text{g/cm}^3$).",
        "steps": [
            "For part (a), the mass $m = 320\\text{ g}$ is rounded to 2 significant figures, which is equivalent to the nearest $10\\text{ g}$.",
            "The boundary offset is found by halving this unit of accuracy: $10 \\div 2 = 5\\text{ g}$.",
            "This gives the mass bounds as: $\\text{Lower Bound} = 320 - 5 = 315\\text{ g}$ and $\\text{Upper Bound} = 320 + 5 = 325\\text{ g}$.",
            "The volume $V = 40\\text{ cm}^3$ is rounded to 1 significant figure, which is equivalent to the nearest $10\\text{ cm}^3$.",
            "The boundary offset is found by halving this unit of accuracy: $10 \\div 2 = 5\\text{ cm}^3$.",
            "This gives the volume bounds as: $\\text{Lower Bound} = 40 - 5 = 35\\text{ cm}^3$ and $\\text{Upper Bound} = 40 + 5 = 45\\text{ cm}^3$.",
            "For part (b), we find the minimum possible density. Since density is defined as $\\text{Density} = \\dfrac{\\text{Mass}}{\\text{Volume}}$, we must divide the lower bound of mass by the upper bound of volume.",
            "This gives the calculation: $\\text{Density}_{\\text{LB}} = \\dfrac{315\\text{ g}}{45\\text{ cm}^3}$.",
            "Evaluating the division yields: $\\text{Density}_{\\text{LB}} = 7\\text{ g/cm}^3$.",
            "Final Answer: $$(a)\\ 315 \\le m < 325\\text{ g},\\ 35 \\le V < 45\\text{ cm}^3\\ (b)\\ 7\\text{ g/cm}^3$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 315 \\le m < 325\\text{ g},\\ 35 \\le V < 45\\text{ cm}^3\\ (b)\\ 9.29\\text{ g/cm}^3$$",
                "feedback": "You calculated the upper bound of density by dividing the upper bound of mass by the lower bound of volume instead of finding the lower bound."
            },
            {
                "ans": "$$(a)\\ 319.5 \\le m < 320.5\\text{ g},\\ 39.5 \\le V < 40.5\\text{ cm}^3\\ (b)\\ 8.09\\text{ g/cm}^3$$",
                "feedback": "You calculated the bounds of mass and volume as if they were recorded to the nearest integer unit instead of using their significant figure accuracies."
            },
            {
                "ans": "$$(a)\\ 315 \\le m < 325\\text{ g},\\ 35 \\le V < 45\\text{ cm}^3\\ (b)\\ 9.00\\text{ g/cm}^3$$",
                "feedback": "You divided the lower bound of mass by the lower bound of volume instead of using the upper bound of the denominator to find the minimum."
            }
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Significant Figure Bounds",
            "content": "Take extra care when identifying the unit of rounding for significant figures. A value of $40$ rounded to 1 significant figure means it is accurate to the nearest ten, yielding bounds of $35$ and $45$. Do not confuse this with rounding to the nearest integer, which would incorrectly yield $39.5$ and $40.5$."
        },
        "payhip_link": "https://payhip.com/b/qYp8g",
        "button_text": "Master IGCSE Bounds: Download the Pack"
    },
    {
        "id": "003210",
        "date": "29 July 2026",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "Trigonometry in 3D",
        "difficulty": "A/A*",
        "img": "true",
        "q": "The diagram shows a right square-based pyramid $VABCD$. The base $ABCD$ is a square of side $10\\text{ cm}$. The slant height $VA = 13\\text{ cm}$ and $O$ is the centre of the base.<br>(a) Calculate the exact length of the base diagonal segment $AO$ in the form $a\\sqrt{b}\\text{ cm}$.<br>(b) Calculate the angle that the slant edge $VA$ makes with the horizontal base $ABCD$. Give your answer correct to 1 decimal place.",
        "steps": [
            "For part (a), we first find the length of the base diagonal $AC$. The square base $ABCD$ has a right angle at $B$, forming right-angled triangle $ABC$.",
            "Applying Pythagoras' theorem: $AC^2 = AB^2 + BC^2 = 10^2 + 10^2 = 100 + 100 = 200$.",
            "Taking the square root of both sides: $AC = \\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2}\\text{ cm}$.",
            "The segment $AO$ is exactly half the length of the full diagonal $AC$: $AO = \\dfrac{10\\sqrt{2}}{2} = 5\\sqrt{2}\\text{ cm}$.",
            "For part (b), the angle $\\theta$ that the slant edge $VA$ makes with the horizontal base is the angle $VAO$ in the vertical right-angled triangle $VOA$.",
            "The adjacent side is $AO = 5\\sqrt{2}\\text{ cm}$ and the hypotenuse is $VA = 13\\text{ cm}$.",
            "We use the cosine trigonometric ratio: $\\cos(\\theta) = \\dfrac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\dfrac{5\\sqrt{2}}{13}$.",
            "Evaluating using a calculator: $\\cos(\\theta) = \\dfrac{7.0711}{13} \\approx 0.54393$.",
            "Taking the inverse cosine: $\\theta = \\arccos(0.54393) \\approx 57.05^\\circ$.",
            "Rounding this angle to 1 decimal place gives $57.1^\\circ$.",
            "Final Answer: $$(a)\\ 5\\sqrt{2}\\text{ cm}\\ (b)\\ 57.1^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 5\\sqrt{2}\\text{ cm}\\ (b)\\ 32.9^\\circ$$",
                "feedback": "You calculated the angle that the slant edge makes with the vertical height axis ($V$) at the top of the pyramid instead of the angle with the base."
            },
            {
                "ans": "$$(a)\\ 10\\sqrt{2}\\text{ cm}\\ (b)\\ 57.1^\\circ$$",
                "feedback": "Your angle is correct, but you stated the length of the full diagonal $AC$ instead of half the diagonal segment $AO$ in part (a)."
            },
            {
                "ans": "$$(a)\\ 5\\sqrt{2}\\text{ cm}\\ (b)\\ 39.8^\\circ$$",
                "feedback": "You used the tangent ratio directly with your diagonal segment and the slant height, which is incorrect because the slant height is the hypotenuse of the vertical triangle."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying Right-Angles in 3D",
            "content": "In 3D pyramid trigonometry, always isolate the vertical right-angled triangle $VOA$. The vertical height $VO$ is perpendicular to any line in the base plane, making angle $VOA = 90^\\circ$. This allows you to safely apply standard 2D cosine and sine ratios to solve for the slant angles."
        },
        "payhip_link": "https://payhip.com/b/QsiXK",
        "button_text": "Master IGCSE 3D Trigonometry: Download the Pack"
    },
   {
    "id": "003211",
    "date": "30 July 2026",
    "major_area": "Probability & Statistics",
    "topic": "Probability",
    "subtopic": "Conditional Probability",
    "difficulty": "B/C",
    "q": "A leisure centre surveys 80 participants about their preferred exercise class. The results are summarised below:<br>- Of the 45 adults surveyed, 25 choose swimming and 20 choose running.<br>- Of the 35 children surveyed, 15 choose swimming and 20 choose running.<br>(a) Construct a two-way table to fully represent this information.<br>(b) A participant is selected at random. Given that this participant is an adult, calculate the probability that they choose swimming.",
    "steps": [
        "For part (a), we construct a two-way table with rows representing age groups (Adults, Children) and columns representing their class choice (Swimming, Running), along with total columns and rows.",
        "We fill in the given data and calculate the missing totals to produce the completed model table:<br><br><table border='1' style='border-collapse: collapse; text-align: center; margin: 10px 0; width: 100%; max-width: 500px;'><thead><tr style='background-color: #f2f2f2;'><th style='padding: 8px;'></th><th style='padding: 8px;'>Swimming</th><th style='padding: 8px;'>Running</th><th style='padding: 8px;'>Total</th></tr></thead><tbody><tr><td style='padding: 8px; font-weight: bold;'>Adults</td><td style='padding: 8px;'>25</td><td style='padding: 8px;'>20</td><td style='padding: 8px; font-weight: bold;'>45</td></tr><tr><td style='padding: 8px; font-weight: bold;'>Children</td><td style='padding: 8px;'>15</td><td style='padding: 8px;'>20</td><td style='padding: 8px; font-weight: bold;'>35</td></tr><tr style='font-weight: bold; background-color: #f9f9f9;'><td style='padding: 8px;'>Total</td><td style='padding: 8px;'>40</td><td style='padding: 8px;'>40</td><td style='padding: 8px;'>80</td></tr></tbody></table>",
        "Row 1 (Adults): 25 Swimming, 20 Running. Total Adults = $25 + 20 = 45$.",
        "Row 2 (Children): 15 Swimming, 20 Running. Total Children = $15 + 20 = 35$.",
        "Column Totals: Swimming $= 25 + 15 = 40$ and Running $= 20 + 20 = 40$.",
        "The overall combined total is $45 + 35 = 80$, which matches our survey pool and completes the table.",
        "For part (b), we are given the condition that the chosen participant is an adult.",
        "This restricts our sample space from the total of 80 participants to only the 45 adults.",
        "The number of adults who choose swimming is 25.",
        "This gives the conditional probability as: $\\text{P}(\\text{Swimming} | \\text{Adult}) = \\dfrac{25}{45}$.",
        "We simplify the fraction by dividing the numerator and denominator by 5, which yields: $\\dfrac{5}{9}$.",
        "Final Answer: $$(a)\\ \\text{Two-way table constructed}\\ (b)\\ \\dfrac{5}{9}$$"
    ],
    "wrong_options": [
        {
            "ans": "$$(a)\\ \\text{Two-way table constructed}\\ (b)\\ \\dfrac{5}{16}$$",
            "feedback": "You calculated the probability using the entire survey pool of 80 as your denominator instead of restricting it to the 45 adults."
        },
        {
            "ans": "$$(a)\\ \\text{Two-way table constructed}\\ (b)\\ \\dfrac{5}{8}$$",
            "feedback": "You used the total number of swimming participants (40) as your denominator instead of restricting it to the 45 adults."
        },
        {
            "ans": "$$(a)\\ \\text{Two-way table constructed}\\ (b)\\ \\dfrac{4}{9}$$",
            "feedback": "You calculated the probability that the adult chooses running (20/45) instead of swimming."
        }
    ],
    "bradley_insight": {
        "type": "caution",
        "title": "The Head Teacher's Eye: Subgroup Conditioning",
        "content": "On two-way tables, conditional probability queries starting with 'Given that...' require you to limit your sample size. For part (b), the condition is that the participant is an adult, so your denominator must be the sum of all elements inside the adult row (45), not the overall total of 80."
    },
    "payhip_link": "https://payhip.com/b/MoE4j",
    "button_text": "Master IGCSE Probability: Download the Pack"
},
    {
        "id": "003212",
        "date": "31 July 2026",
        "major_area": "Algebra",
        "topic": "Graphs of Equations and Functions",
        "subtopic": "Sketching Graphs",
        "difficulty": "A/B",
        "img": "true",
        "q": "The diagram shows three sketched functions, labelled (1), (2), and (3), on separate coordinate axes.<br>(a) Match each numbered sketch to its correct equation from the following list:<br>$$y = 3^x,\\ \\ \\ y = \\dfrac{1}{x},\\ \\ \\ y = x^3 - 4x$$<br>(b) State the coordinates of all points of intersection of the cubic curve $y = x^3 - 4x$ with the coordinate axes.<br>(c) Describe what happens to the value of $y$ on the reciprocal curve $y = \\dfrac{1}{x}$ as the value of $x$ becomes very large. Explain why the curve never touches the horizontal axis.",
        "steps": [
            "For part (a), we analyze the shape and behavior of each sketch to identify its equation.",
            "Sketch (1) is an exponential curve. It lies entirely above the horizontal axis, passes through the vertical axis at $(0,1)$, and increases rapidly as $x$ increases. This matches the equation $y = 3^x$.",
            "Sketch (2) consists of two curves in opposite quadrants (first and third quadrants) that approach both the horizontal and vertical axes but never touch them. This matches the reciprocal equation $y = \\dfrac{1}{x}$.",
            "Sketch (3) is a classic cubic curve showing a smooth S-shape that crosses the horizontal axis at three separate points. This matches the equation $y = x^3 - 4x$.",
            "For part (b), we find the intercepts of $y = x^3 - 4x$ with both coordinate axes.",
            "To find the vertical intercept (y-intercept), we substitute $x = 0$ into the equation: $y = 0^3 - 4(0) = 0$. This gives the coordinate $(0,0)$.",
            "To find the horizontal intercepts (x-intercepts), we set $y = 0$ and solve the cubic equation: $x^3 - 4x = 0$.",
            "We factorise the expression: $x(x^2 - 4) = 0$. This further factorises using the difference of two squares: $x(x - 2)(x + 2) = 0$.",
            "The roots of this equation are $x = 0$, $x = 2$, and $x = -2$. This gives three coordinate pairs: $(0,0)$, $(2,0)$, and $(-2,0)$.",
            "For part (c), as the value of $x$ becomes very large, the denominator of the fraction $y = \\dfrac{1}{x}$ grows infinitely large.",
            "This causes the overall value of $y$ to get smaller and closer and closer to $0$ (for example, if $x = 1000$, then $y = 0.001$).",
            "The curve never touches the horizontal axis because we cannot divide $1$ by any finite number to get an answer of exactly $0$. The division will always result in a positive value, no matter how small, so $y$ never reaches $0$.",
            "Final Answer: $$(a)\\ 1: y = 3^x,\\ 2: y = \\dfrac{1}{x},\\ 3: y = x^3 - 4x$$<br>$$(b)\\ (0,0),\\ (2,0),\\ (-2,0)$$<br>$$(c)\\ y \\text{ gets closer to } 0 \\text{ but never touches the axis because } 1 \\div x \\neq 0$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 1: y = \\dfrac{1}{x},\\ 2: y = 3^x,\\ 3: y = x^3 - 4x$$<br>$$(b)\\ (0,0),\\ (2,0),\\ (-2,0)$$<br>$$(c)\\ y \\text{ gets infinitely large and moves away from the axis}$$",
                "feedback": "You mismatched the exponential and reciprocal graphs in part (a). An exponential graph increases continuously, whereas a reciprocal graph decreases as $x$ increases."
            },
            {
                "ans": "$$(a)\\ 1: y = 3^x,\\ 2: y = \\dfrac{1}{x},\\ 3: y = x^3 - 4x$$<br>$$(b)\\ (0,0),\\ (4,0),\\ (-4,0)$$<br>$$(c)\\ y \\text{ gets closer to } 0 \\text{ but never touches the axis because } 1 \\div x \\neq 0$$",
                "feedback": "Your graph matching and reciprocal explanations are correct, but you factorised $x^2 - 4 = 0$ incorrectly in part (b), stating the roots as $\\pm 4$ instead of $\\pm 2$."
            },
            {
                "ans": "$$(a)\\ 1: y = 3^x,\\ 2: y = \\dfrac{1}{x},\\ 3: y = x^3 - 4x$$<br>$$(b)\\ (2,0),\\ (-2,0)$$<br>$$(c)\\ y \\text{ reaches exactly } 0 \\text{ when } x \\text{ is extremely large}$$",
                "feedback": "In part (b), you forgot to include the origin $(0,0)$ as one of your coordinates. For part (c), remember that a reciprocal curve never actually touches the horizontal axis."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Understanding Reciprocal Trends",
            "content": "When explaining why reciprocal curves like $y = \\dfrac{1}{x}$ never touch the horizontal axis, focus on the algebra of division. You can divide 1 into as many tiny pieces as you like, but you can never have 'zero pieces'. This boundary line represents an asymptote—a line the graph gets closer to but never meets."
        },
        "payhip_link": "https://payhip.com/b/t8xQq",
        "button_text": "Master Graph Sketches: Download the Pack"
    }

   ]