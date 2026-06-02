const problemBank = [
// 1 July
    {
        "id": "002182",
        "date": "1 July 2026",
        "major_area": "Geometry",
        "topic": "Trigonometry",
        "subtopic": "Right Angled Trigonometry",
        "difficulty": "4/5",
        "img": "true",
        "q": "A surveyor stands on horizontal ground at point $P$, which is $35\\text{ m}$ from the base of a vertical transmission mast $T$. The angle of elevation from $P$ to the top of the mast $M$ is $38^\\circ$.<br>(a) Calculate the height of the mast. Give your answer correct to 3 significant figures.<br>(b) A secondary cable is anchored to the ground at point $Q$, which is further away from the base of the mast than $P$. The cable has a length of $52\\text{ m}$ and connects to the top of the mast $M$. Calculate the distance $PQ$ along the ground, giving your answer in metres correct to 2 decimal places.",
        "steps": [
            "For part (a), we can model the situation with a right-angled triangle $PTM$ where the right angle is at the base of the mast $T$.",
            "We use the tangent trigonometric ratio, where $\\tan(\\theta) = \\dfrac{\\text{Opposite}}{\\text{Adjacent}}$. This gives us the equation $\\tan(38^\\circ) = \\dfrac{TM}{35}$.",
            "To isolate the height $TM$, we multiply both sides of the equation by 35, yielding $TM = 35 \\times \\tan(38^\\circ)$.",
            "Using a calculator, we evaluate this to find $TM \\approx 27.3453\\text{ m}$. Rounding to 3 significant figures gives a height of $27.3\\text{ m}$.",
            "For part (b), we consider the larger right-angled triangle $QTM$ formed by the anchor point $Q$, the base of the mast $T$, and the top of the mast $M$.",
            "We apply Pythagoras' theorem to find the horizontal distance $QT$. The hypotenuse is the cable length $QM = 52\\text{ m}$ and the vertical height is $TM \\approx 27.3453\\text{ m}$.",
            "This gives the relationship $QT^2 = QM^2 - TM^2 = 52^2 - (27.3453)^2$. Evaluating this yields $QT^2 = 2704 - 747.7656 = 1956.2344$.",
            "Taking the square root of both sides, we find the horizontal distance from the base of the mast to the anchor point $QT \\approx \\sqrt{1956.2344} = 44.2293\\text{ m}$.",
            "The distance $PQ$ along the ground is the difference between $QT$ and $PT$. This is calculated as $PQ = QT - PT = 44.2293 - 35 = 9.2293\\text{ m}$.",
            "Rounding this value to 2 decimal places gives the final ground distance as $9.23\\text{ m}$.",
            "Final Answer: $$(a)\\ 27.3\\text{ m},\\ (b)\\ 9.23\\text{ m}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 21.5\\text{ m},\\ (b)\\ 12.37\\text{ m}$$",
                "feedback": "You used the sine ratio instead of the tangent ratio in part (a). This caused your height and subsequent Pythagoras calculation to be incorrect."
            },
            {
                "ans": "$$(a)\\ 27.3\\text{ m},\\ (b)\\ 44.23\\text{ m}$$",
                "feedback": "For part (b), you correctly calculated the total horizontal distance from the base of the mast $QT$, but you forgot to subtract the distance $PT$ to find the interval $PQ$."
            },
            {
                "ans": "$$(a)\\ 27.3\\text{ m},\\ (b)\\ 9.28\\text{ m}$$",
                "feedback": "You rounded the height of the mast prematurely to $27.3\\text{ m}$ before using it in your calculation for part (b). Always carry through the unrounded value in your calculator memory to avoid compounding errors."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Retaining Precision",
            "content": "A very common pitfall in multi-part trigonometry questions is using a rounded intermediate answer for subsequent calculations. When finding the length $PQ$ in part (b), make sure you use the raw, unrounded value for the height $TM$ stored in your calculator. Rounding too early will lead to a small but significant discrepancy in your final decimal place, costing you the final accuracy mark."
        },
        "payhip_link": "https://payhip.com/b/h3BS6",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    {
        "id": "002183",
        "date": "2 July 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Quadratic Equations - Formula and Completing the Square",
        "difficulty": "7/8",
        "q": "A rectangular vegetable patch has a width of $w\\text{ m}$ and a length that is $3\\text{ m}$ longer than its width. A paved border of uniform width $1.5\\text{ m}$ is built completely around the outside of the vegetable patch.<br>(a) Show that the total area of the combined vegetable patch and paved border can be written as $w^2 + 9w + 18$.<br>(b) Given that the total combined area is exactly $110\\text{ m}^2$, calculate the width, $w$, of the vegetable patch. Give your answer correct to 3 significant figures.",
        "steps": [
            "For part (a), the width of the vegetable patch is $w\\text{ m}$ and its length is $(w + 3)\\text{ m}$.",
            "Since the paved border of width $1.5\\text{ m}$ runs completely around the outside, we must add $1.5\\text{ m}$ twice to each dimension to find the overall dimensions of the combined shape.",
            "The overall width is $w + 1.5 + 1.5 = w + 3\\text{ m}$.",
            "The overall length is $(w + 3) + 1.5 + 1.5 = w + 6\\text{ m}$.",
            "The total area of this combined rectangular region is the product of its overall dimensions: $(w + 3)(w + 6)$.",
            "Expanding this expression using the distributive law gives $w^2 + 6w + 3w + 18$, which simplifies directly to $w^2 + 9w + 18$, completing the proof.",
            "For part (b), we equate the total area expression to the given value: $w^2 + 9w + 18 = 110$.",
            "We subtract 110 from both sides to form a quadratic equation in standard form: $w^2 + 9w - 92 = 0$.",
            "We solve this quadratic equation using the quadratic formula, $w = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, where $a = 1$, $b = 9$, and $c = -92$.",
            "Substituting these coefficients yields $w = \\dfrac{-9 \\pm \\sqrt{9^2 - 4(1)(-92)}}{2(1)} = \\dfrac{-9 \\pm \\sqrt{81 + 368}}{2} = \\dfrac{-9 \\pm \\sqrt{449}}{2}$.",
            "Evaluating the square root gives $\\sqrt{449} \\approx 21.1896$. The two possible solutions are $w \\approx \\dfrac{-9 + 21.1896}{2} \\approx 6.0948\\text{ m}$ and $w \\approx \\dfrac{-9 - 21.1896}{2} \\approx -15.0948\\text{ m}$.",
            "Since width must be a positive quantity, we discard the negative root. The width of the vegetable patch is therefore $6.09\\text{ m}$, correct to 3 significant figures.",
            "Final Answer: $$(a)\\ \\text{Proof completed},\\ (b)\\ 6.09\\text{ m}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\text{Proof completed},\\ (b)\\ 7.51\\text{ m}$$",
                "feedback": "When calculating the overall dimensions of the combined shape, you only added the border width of $1.5\\text{ m}$ once to each dimension instead of adding it to both sides. This resulted in the incorrect quadratic equation $w^2 + 6w - 103.25 = 0$."
            },
            {
                "ans": "$$(a)\\ \\text{Proof completed},\\ (b)\\ 15.1\\text{ m}$$",
                "feedback": "You made a sign error when applying the quadratic formula, using $+b$ instead of $-b$ at the start of the formula. This gave a positive solution of $15.1\\text{ m}$ instead of the correct value."
            },
            {
                "ans": "$$(a)\\ \\text{Proof completed},\\ (b)\\ 6.10\\text{ m}$$",
                "feedback": "You made a rounding error when reducing $6.0948...$ to 3 significant figures. The third significant digit should not round up because the subsequent digit is a 4."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Double-Sided Borders",
            "content": "The most frequent error in geometric algebraic modeling is forgetting that a border surrounds a shape on all sides. This means you must add the width of the border twice to both the length and the width of the inner rectangle. Always sketch a quick diagram to visualise the borders and avoid dropping these easy marks."
        },
        "payhip_link": "https://payhip.com/b/7CT3V",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    {
        "id": "002184",
        "date": "3 July 2026",
        "major_area": "Number",
        "topic": "Bounds",
        "subtopic": "Limits of Accuracy and Bounds",
        "difficulty": "6/7",
        "q": "A delivery van travels a distance of $340\\text{ km}$, correct to the nearest $10\\text{ km}$. The van consumes $28.4\\text{ litres}$ of fuel, correct to the nearest $0.1\\text{ litres}$.<br>(a) State the upper bound and the lower bound of the distance travelled.<br>(b) Calculate the upper bound for the fuel efficiency of the van in kilometres per litre ($\\text{km/l}$). Give your answer correct to 3 decimal places.",
        "steps": [
            "For part (a), the distance is measured to the nearest $10\\text{ km}$. We halve this unit of accuracy to get $5\\text{ km}$.",
            "To find the lower bound, we subtract this value from the recorded distance: $340 - 5 = 335\\text{ km}$.",
            "To find the upper bound, we add this value to the recorded distance: $340 + 5 = 345\\text{ km}$.",
            "For part (b), we must first find the bounds for the fuel consumed. The fuel volume is measured to the nearest $0.1\\text{ litres}$. We halve this unit of accuracy to get $0.05\\text{ litres}$.",
            "The lower bound for the fuel consumed is $28.4 - 0.05 = 28.35\\text{ litres}$. The upper bound is $28.4 + 0.05 = 28.45\\text{ litres}$.",
            "Fuel efficiency in kilometres per litre is calculated as $\\text{Distance} \\div \\text{Fuel}$.",
            "To maximise the result of a division and find the upper bound of fuel efficiency, we must divide the maximum possible distance by the minimum possible fuel consumed: $\\text{Upper Bound of Efficiency} = \\dfrac{\\text{Upper Bound of Distance}}{\\text{Lower Bound of Fuel}}$.",
            "Substituting our values, we get $\\text{Upper Bound of Efficiency} = \\dfrac{345}{28.35}$.",
            "Evaluating this fraction gives $12.169312...\\text{ km/l}$. Correct to 3 decimal places, this rounds to $12.169\\text{ km/l}$.",
            "Final Answer: $$(a)\\ \\text{Lower: } 335\\text{ km, Upper: } 345\\text{ km},\\ (b)\\ 12.169\\text{ km/l}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\text{Lower: } 335\\text{ km, Upper: } 345\\text{ km},\\ (b)\\ 11.775\\text{ km/l}$$",
                "feedback": "You calculated the lower bound of fuel efficiency instead of the upper bound by dividing the lower bound of distance by the upper bound of fuel."
            },
            {
                "ans": "$$(a)\\ \\text{Lower: } 335\\text{ km, Upper: } 345\\text{ km},\\ (b)\\ 12.127\\text{ km/l}$$",
                "feedback": "You calculated the upper bound of fuel efficiency by dividing the upper bound of distance by the upper bound of fuel. To maximise a division, you must use the lower bound of the denominator."
            },
            {
                "ans": "$$(a)\\ \\text{Lower: } 339.5\\text{ km, Upper: } 340.5\\text{ km},\\ (b)\\ 12.011\\text{ km/l}$$",
                "feedback": "You incorrectly calculated the bounds of the distance by treating it as if it were rounded to the nearest $1\\text{ km}$ instead of the nearest $10\\text{ km}$."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Maximising Fractions",
            "content": "To get the largest possible value when dividing, always make the top of the fraction as big as possible (upper bound) and the bottom of the fraction as small as possible (lower bound). This basic rule of limits of accuracy applies across speed, density, pressure, and fuel efficiency problems."
        },
        "payhip_link": "https://payhip.com/b/qYp8g",
        "button_text": "Master GCSE Number: Download the Pack"
    },
    {
        "id": "002185",
        "date": "4 July 2026",
        "major_area": "Geometry",
        "topic": "Circle Geometry",
        "subtopic": "Circle Theorems 1",
        "difficulty": "7/8",
        "img": "true",
        "q": "$A$, $B$, $C$, and $D$ are four points on the circumference of a circle, with centre $O$, in clockwise order. Angle $AOC = 144^\\circ$.<br>(a) Calculate the size of angle $ADC$. You must give a geometric reason for your answer.<br>(b) Calculate the size of angle $ABC$. You must give a geometric reason for your answer.",
        "steps": [
            "For part (a), we observe that the angle subtended by the arc $AC$ at the centre of the circle is angle $AOC = 144^\\circ$.",
            "The angle subtended by the same arc at the circumference on the major arc is angle $ADC$.",
            "According to the circle theorem, the angle subtended by an arc at the centre is twice the angle subtended at the circumference.",
            "Therefore, we calculate the size of angle $ADC$ by halving angle $AOC$: $144^\\circ \\div 2 = 72^\\circ$.",
            "Our geometric reason is: 'The angle subtended at the centre of a circle is twice the angle subtended at the circumference.'",
            "For part (b), we observe that all four vertices of the quadrilateral $ABCD$ lie on the circumference of the circle.",
            "This means that $ABCD$ is a cyclic quadrilateral.",
            "According to the circle theorem, opposite angles of a cyclic quadrilateral sum to $180^\\circ$.",
            "Angle $ADC$ and angle $ABC$ are opposite angles in the cyclic quadrilateral $ABCD$.",
            "Therefore, we calculate the size of angle $ABC$ by subtracting angle $ADC$ from $180^\\circ$: $180^\\circ - 72^\\circ = 108^\\circ$.",
            "Our geometric reason is: 'Opposite angles of a cyclic quadrilateral sum to $180^\\circ$.'",
            "Final Answer: $$(a)\\ 72^\\circ,\\ (b)\\ 108^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 288^\\circ,\\ (b)\\ 108^\\circ$$",
                "feedback": "You multiplied the angle at the centre by two instead of halving it to find the angle at the circumference in part (a)."
            },
            {
                "ans": "$$(a)\\ 72^\\circ,\\ (b)\\ 72^\\circ$$",
                "feedback": "You assumed that the opposite angles of a cyclic quadrilateral are equal to each other instead of summing to $180^\\circ$."
            },
            {
                "ans": "$$(a)\\ 72^\\circ,\\ (b)\\ 144^\\circ$$",
                "feedback": "You assumed that the angle at the circumference $ABC$ is equal to the angle at the centre $AOC$ instead of applying cyclic quadrilateral rules."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Explicit Geometrical Reasons",
            "content": "To secure full marks on circle theorem questions, you must state the theorems exactly. Shorthand phrases such as 'angle at centre is double' or 'opposite angles of a cyclic quad' are often rejected by examiners. Write out the full geometric reasons clearly to guarantee you get the marks."
        },
        "payhip_link": "https://payhip.com/b/RLgSJ",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    {
        "id": "002186",
        "date": "5 July 2026",
        "major_area": "Probability & Statistics",
        "topic": "Probability",
        "subtopic": "Probability Tree diagrams",
        "difficulty": "5/6",
        "q": "A box contains 7 red apples and 5 green apples. Susan selects two apples at random from the box, one after the other, without replacement.<br>(a) Find the probability that Susan selects two apples of the same colour.<br>(b) Given that Susan selects at least one red apple, calculate the probability that both apples she selects are red.",
        "steps": [
            "For part (a), we first determine the total number of apples in the box, which is $7 + 5 = 12$ apples.",
            "The probability of selecting a red apple first is $\\dfrac{7}{12}$ and the probability of selecting a green apple first is $\\dfrac{5}{12}$.",
            "Because the selection is done without replacement, only 11 apples remain in the box for the second draw.",
            "If a red apple was chosen first, there are 6 red apples and 5 green apples remaining. The probability of choosing a second red apple is $\\dfrac{6}{11}$.",
            "If a green apple was chosen first, there are 7 red apples and 4 green apples remaining. The probability of choosing a second green apple is $\\dfrac{4}{11}$.",
            "The probability of choosing two apples of the same colour is the sum of the probability of choosing two red apples and the probability of choosing two green apples.",
            "The probability of choosing two red apples is $\\dfrac{7}{12} \\times \\dfrac{6}{11} = \\dfrac{42}{132}$.",
            "The probability of choosing two green apples is $\\dfrac{5}{12} \\times \\dfrac{4}{11} = \\dfrac{20}{132}$.",
            "Adding these probabilities together gives $\\dfrac{42}{132} + \\dfrac{20}{132} = \\dfrac{62}{132}$, which simplifies to $\\dfrac{31}{66}$.",
            "For part (b), we use the conditional probability formula: $\\text{P(Both Red | At least one Red)} = \\dfrac{\\text{P(Both Red)}}{\\text{P(At least one Red)}}$.",
            "We have already calculated the probability of selecting both red apples as $\\text{P(Both Red)} = \\dfrac{42}{132}$.",
            "To find the probability of selecting at least one red apple, we can subtract the probability of selecting no red apples (which is the same as selecting two green apples) from 1.",
            "This calculation gives $\\text{P(At least one Red)} = 1 - \\text{P(Green, Green)} = 1 - \\dfrac{20}{132} = \\dfrac{112}{132}$.",
            "We now divide the probability of selecting both red apples by the probability of selecting at least one red apple: $\\dfrac{42/132}{112/132} = \\dfrac{42}{112}$.",
            "Simplifying the fraction $\\dfrac{42}{112}$ by dividing the numerator and the denominator by their greatest common divisor, 14, gives $\\dfrac{3}{8}$.",
            "Final Answer: $$(a)\\ \\dfrac{31}{66},\\ (b)\\ \\dfrac{3}{8}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\dfrac{37}{72},\\ (b)\\ \\dfrac{49}{119}$$",
                "feedback": "You assumed that the apples were replaced after selection. Always read the question carefully to see if the selection process is completed with or without replacement."
            },
            {
                "ans": "$$(a)\\ \\dfrac{31}{66},\\ (b)\\ \\dfrac{7}{22}$$",
                "feedback": "For part (b), you simply gave the probability of selecting two red apples, which is $\\dfrac{7}{22}$, instead of calculating the conditional probability given that at least one red apple was selected."
            },
            {
                "ans": "$$(a)\\ \\dfrac{31}{66},\\ (b)\\ \\dfrac{21}{31}$$",
                "feedback": "For part (b), you correctly identified the conditional structure, but you used the wrong denominator in your final calculation."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Without Replacement",
            "content": "Unless a question explicitly states that items are replaced, any context involving food, eating, or selecting items consecutively implies the selection is done without replacement. Remember to reduce both the numerator (the specific matching outcome) and the denominator (the total remaining items) by 1 for the second branch of your tree diagram."
        },
        "payhip_link": "https://payhip.com/b/8EhLZ",
        "button_text": "Master GCSE Probability & Statistics: Download the Pack"
    },
    [
    {
        "id": "002187",
        "date": "6 July 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Linear Equations",
        "subtopic": "Simultaneous Linear Equations",
        "difficulty": "5/6",
        "q": "A local school is organising a theatre trip. For the first group, the school buys 5 adult tickets and 12 student tickets for a total cost of £174.<br>For the second group, the school buys 4 adult tickets and 9 student tickets for a total cost of £133.50.<br>(a) Formulate a pair of simultaneous equations to represent this information.<br>(b) Solve your equations to find the cost of a single adult ticket and a single student ticket.",
        "steps": [
            "For part (a), we define our variables. Let $a$ represent the cost of an adult ticket in pounds, and let $s$ represent the cost of a student ticket in pounds.",
            "From the first booking group, we can construct our first linear equation: $5a + 12s = 174$.",
            "From the second booking group, we can construct our second linear equation: $4a + 9s = 133.50$.",
            "For part (b), we solve the simultaneous equations using the elimination method.",
            "To eliminate the variable $a$, we find a common multiple for its coefficients, which is 20.",
            "We multiply the first equation by 4: $4(5a + 12s) = 4(174)$, which simplifies to $20a + 48s = 696$.",
            "We multiply the second equation by 5: $5(4a + 9s) = 5(133.50)$, which simplifies to $20a + 45s = 667.50$.",
            "Next, we subtract the second modified equation from the first modified equation to eliminate the $20a$ terms: $(20a + 48s) - (20a + 45s) = 696 - 667.50$.",
            "This subtraction simplifies directly to $3s = 28.50$.",
            "Dividing both sides of this equation by 3 yields the cost of a student ticket: $s = 9.50$.",
            "We now substitute $s = 9.50$ back into our original first equation: $5a + 12(9.50) = 60$.",
            "Evaluating the multiplication gives $5a + 114 = 174$. Subtracting 114 from both sides results in $5a = 60$.",
            "Dividing both sides of the equation by 5 gives the cost of an adult ticket: $a = 12$.",
            "This indicates that adult tickets cost £12.00 each and student tickets cost £9.50 each.",
            "Final Answer: $$(a)\ 5a + 12s = 174,\\ 4a + 9s = 133.50,\\ (b)\ a = 12.00,\\ s = 9.50$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ 5a + 12s = 174,\\ 4a + 9s = 133.50,\\ (b)\ a = 0.60,\\ s = 14.25$$",
                "feedback": "You made an arithmetic subtraction error when eliminating $a$. Be careful to subtract both sides of the modified equations accurately."
            },
            {
                "ans": "$$(a)\ 12a + 5s = 174,\\ 9a + 4s = 133.50,\\ (b)\ a = 9.50,\\ s = 12.00$$",
                "feedback": "You formulated the equations with reversed coefficients, incorrectly linking adult prices to student quantities and vice versa."
            },
            {
                "ans": "$$(a)\ 5a + 12s = 174,\\ 4a + 9s = 133.50,\\ (b)\ a = 9.50,\\ s = 12.00$$",
                "feedback": "You calculated the correct numerical values of 11 and 11.50, but you reversed the identities of the adult and student tickets in your final statement."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Checking Your Solutions",
            "content": "Simultaneous equations are unique in exams because you can always guarantee full marks by performing a quick sanity check. Once you calculate your values for $a$ and $s$, substitute them back into the equation that you did not use for substitution (in this case, the second equation: $4 \\times 11 + 9 \\times 11.50$). If it matches £147.50, you know your answer is completely correct."
        },
        "payhip_link": "https://payhip.com/b/Cq1JG",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    {
        "id": "002188",
        "date": "7 July 2026",
        "major_area": "Geometry",
        "topic": "Similarity in 2D",
        "subtopic": "Similarity in 2D",
        "difficulty": "6/7",
        "img": "true",
        "q": "Two structurally similar plastic storage trays have similar cross-sections as shown in the diagram. The smaller tray has a base length of $24\\text{ cm}$ and a cross-sectional area of $180\\text{ cm}^2$. The larger tray has a base length of $36\\text{ cm}$.<br>(a) Determine the scale factor of enlargement, $k$, from the smaller tray to the larger tray, and use it to calculate the cross-sectional area of the larger tray.<br>(b) Given that the volume of the smaller tray is $1.8\\text{ litres}$, calculate the volume of the larger tray in litres.",
        "steps": [
            "For part (a), we calculate the linear scale factor of enlargement, $k$, by dividing the corresponding linear dimension of the larger shape by that of the smaller shape.",
            "This gives $k = \\dfrac{36}{24} = 1.5$.",
            "The area scale factor is the square of the linear scale factor: $k^2 = (1.5)^2 = 2.25$.",
            "To calculate the cross-sectional area of the larger tray, we multiply the area of the smaller tray by the area scale factor.",
            "This calculation gives $\\text{Area of larger tray} = 180 \\times 2.25 = 405\\text{ cm}^2$.",
            "For part (b), the volume scale factor is the cube of the linear scale factor: $k^3 = (1.5)^3 = 3.375$.",
            "To calculate the volume of the larger tray, we multiply the volume of the smaller tray by the volume scale factor.",
            "This calculation gives $\\text{Volume of larger tray} = 1.8 \\times 3.375 = 6.075\\text{ litres}$.",
            "Final Answer: $$(a)\ k = 1.5,\\ \\text{Area} = 405\\text{ cm}^2,\\ (b)\ 6.075\\text{ litres}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ k = 1.5,\\ \\text{Area} = 270\\text{ cm}^2,\\ (b)\ 2.700\\text{ litres}$$",
                "feedback": "You multiplied both the area and the volume by the linear scale factor $k = 1.5$. Remember that areas scale by $k^2$ and volumes scale by $k^3$."
            },
            {
                "ans": "$$(a)\ k = 1.5,\\ \\text{Area} = 405\\text{ cm}^2,\\ (b)\ 4.050\\text{ litres}$$",
                "feedback": "Your area calculation is correct, but you scaled the volume of the tray using the area scale factor of $k^2 = 2.25$ instead of the volume scale factor $k^3 = 3.375$."
            },
            {
                "ans": "$$(a)\ k = 1.2,\\ \\text{Area} = 259.2\\text{ cm}^2,\\ (b)\ 3.110\\text{ litres}$$",
                "feedback": "You calculated an incorrect linear scale factor of 1.2. Check your division of the corresponding linear dimensions ($36 \\div 24$)."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Dimension Scaling Rules",
            "content": "This is a classic GCSE problem designed to catch students out. Remember that if a shape is scaled by a linear factor of $k$, all lengths scale by $k$, all areas scale by $k^2$, and all volumes scale by $k^3$. Make sure you always identify whether you are scaling a length, an area, or a volume before performing your multiplication."
        },
        "payhip_link": "https://payhip.com/b/L2dNU",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    {
        "id": "002189",
        "date": "8 July 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Standard Form",
        "difficulty": "5/6",
        "q": "The mass of Earth is approximately $5.97 \\times 10^{24}\\text{ kg}$ and the mass of the Moon is approximately $7.35 \\times 10^{22}\\text{ kg}$.<br>(a) Calculate the total combined mass of Earth and the Moon. Give your answer in standard form, correct to 3 significant figures.<br>(b) Calculate how many times more massive Earth is than the Moon. Give your answer correct to the nearest whole number.",
        "steps": [
            "For part (a), we write out the addition of the two masses: $(5.97 \\times 10^{24}) + (7.35 \\times 10^{22})$.",
            "To add numbers in standard form manually, we must adjust them to have the same power of 10. We change $5.97 \\times 10^{24}$ to have a power of $10^{22}$.",
            "Since $10^{24} = 100 \\times 10^{22}$, we can write $5.97 \\times 10^{24} = 597 \\times 10^{22}$.",
            "Now, we add the coefficients together: $(597 + 7.35) \\times 10^{22} = 604.35 \\times 10^{22}$.",
            "We convert this sum back into correct standard form notation by shifting the decimal point two places to the left and increasing the index by 2: $6.0435 \\times 10^{24}$.",
            "Rounding this value to 3 significant figures gives the final combined mass as $6.04 \\times 10^{24}\\text{ kg}$.",
            "For part (b), we divide the mass of Earth by the mass of the Moon: $\\dfrac{5.97 \\times 10^{24}}{7.35 \\times 10^{22}}$.",
            "We can split this division into its numerical parts and index parts: $\\left(\\dfrac{5.97}{7.35}\\right) \\times 10^{24-22}$.",
            "Evaluating the coefficient division gives approximately $0.81224$, and the index part simplifies to $10^2$.",
            "Multiplying these parts together yields $0.81224 \\times 100 = 81.224$.",
            "Rounding this calculation to the nearest whole number tells us that Earth is 81 times more massive than the Moon.",
            "Final Answer: $$(a)\ 6.04 \\times 10^{24}\\text{ kg},\\ (b)\ 81$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\ 1.33 \\times 10^{25}\\text{ kg},\\ (b)\ 81$$",
                "feedback": "You added the coefficients $5.97$ and $7.35$ directly without adjusting the powers of 10. You can only add standard form coefficients when their exponential terms match."
            },
            {
                "ans": "$$(a)\ 6.04 \\times 10^{24}\\text{ kg},\\ (b)\ 8$$",
                "feedback": "You made an error when simplifying the powers of 10 during division, which resulted in a scale factor error of 10 in your final comparison."
            },
            {
                "ans": "$$(a)\ 60.4 \\times 10^{23}\\text{ kg},\\ (b)\ 81$$",
                "feedback": "Your addition is correct, but your final answer for part (a) is not in correct standard form. In standard form, the leading number must be between 1 and 10."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Matching Indices",
            "content": "When adding or subtracting numbers in standard form on a non-calculator paper, always change the value with the larger index to match the smaller index. Moving the decimal point on the larger value creates numbers greater than 1, which are significantly easier to add without committing decimal errors."
        },
        "payhip_link": "https://payhip.com/b/ZAkTu",
        "button_text": "Master GCSE Number: Download the Pack"
    },
    {
        "id": "002190",
        "date": "9 July 2026",
        "major_area": "Geometry",
        "topic": "Cosine Rule",
        "subtopic": "Cosine Rule",
        "difficulty": "7/8",
        "img": "true",
        "q": "A sailing race course is in the shape of a triangle $ABC$ on open water. The distance from buoy $A$ to buoy $B$ is $4.2\\text{ km}$ and the distance from buoy $B$ to buoy $C$ is $6.5\\text{ km}$. The internal angle $ABC$ is $112^\\circ$.<br>(a) Calculate the direct distance between buoy $A$ and buoy $C$. Give your answer in kilometres correct to 3 significant figures.<br>(b) Calculate the total area enclosed by the race course. Give your answer in square kilometres correct to 2 decimal places.",
        "steps": [
            "For part (a), we use the Cosine Rule to find the unknown side $AC$, which lies opposite the given angle $B$. The formula is $b^2 = a^2 + c^2 - 2ac \\cos(B)$.",
            "We identify the known lengths: $a = 6.5\\text{ km}$ (opposite vertex $A$) and $c = 4.2\\text{ km}$ (opposite vertex $C$).",
            "Substituting these values along with the angle $B = 112^\\circ$ gives: $b^2 = 6.5^2 + 4.2^2 - 2(6.5)(4.2) \\cos(112^\\circ)$.",
            "Evaluating the squared values and multiplication: $b^2 = 42.25 + 17.64 - 54.6 \\cos(112^\\circ)$, which simplifies to $b^2 = 59.89 - 54.6 \\cos(112^\\circ)$.",
            "Using a calculator, we find $\\cos(112^\\circ) \\approx -0.374607$. Since this value is negative, the final term becomes positive: $b^2 \\approx 59.89 - 54.6(-0.374607) = 59.89 + 20.4535 = 80.3435$.",
            "To find $b$, we take the square root of both sides: $b \\approx \\sqrt{80.3435} \\approx 8.9634\\text{ km}$.",
            "Rounding this distance to 3 significant figures gives $8.96\\text{ km}$.",
            "For part (b), we calculate the area of the non-right-angled triangle using the formula: $\\text{Area} = \\dfrac{1}{2}ac \\sin(B)$.",
            "Substituting the values into this formula gives: $\\text{Area} = \\dfrac{1}{2}(6.5)(4.2) \\sin(112^\\circ)$.",
            "Evaluating the multiplication yields: $\\text{Area} = 13.65 \\times \\sin(112^\\circ)$.",
            "Using a calculator, we find $\\sin(112^\\circ) \\approx 0.927184$. This gives $\\text{Area} \\approx 13.65 \\times 0.927184 \\approx 12.656\\text{ km}^2$.",
            "Rounding this area to 2 decimal places gives $12.66\\text{ km}^2$.",
            "Final Answer: $$(a)\\ 8.96\\text{ km},\\ (b)\\ 12.66\\text{ km}^2$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 6.28\\text{ km},\\ (b)\\ 12.66\\text{ km}^2$$",
                "feedback": "You made a sign error in your Cosine Rule calculation by failing to recognise that $\\cos(112^\\circ)$ is negative, which led you to subtract $20.4535$ instead of adding it."
            },
            {
                "ans": "$$(a)\\ 8.96\\text{ km},\\ (b)\\ -5.11\\text{ km}^2$$",
                "feedback": "Your distance calculation is correct, but you used cosine instead of sine in the triangle area formula, resulting in an incorrect negative area."
            },
            {
                "ans": "$$(a)\\ 80.3\\text{ km},\\ (b)\\ 12.66\\text{ km}^2$$",
                "feedback": "For part (a), you calculated $b^2$ correctly but forgot to perform the final step of taking the square root to find the actual distance $b$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Obtuse Cosine Values",
            "content": "Always remember that the cosine of any obtuse angle (between $90^\\circ$ and $180^\\circ$) is negative. In the Cosine Rule, this means the subtraction sign before the $2ac \\cos(B)$ term will combine with the negative cosine value to become an addition. Ensure your calculated side is the longest side of the triangle, as it must be opposite the largest angle."
        },
        "payhip_link": "https://payhip.com/b/RHeNL",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    {
        "id": "002191",
        "date": "10 July 2026",
        "major_area": "Probability & Statistics",
        "topic": "Probability",
        "subtopic": "Sets and Venn Diagrams",
        "difficulty": "6/7",
        "q": "A gym manager surveys 120 members about their class attendance. 65 members attend Spin classes ($S$), 48 members attend Yoga classes ($Y$), and 23 members do not attend either class.<br>(a) Calculate the number of members who attend both Spin and Yoga classes.<br>(b) One of the 120 gym members is chosen at random. Given that this member attends Yoga classes, calculate the probability that they also attend Spin classes.",
        "steps": [
            "For part (a), we determine the number of members who attend at least one of the classes. Since 23 out of 120 do not attend either, this is calculated as $120 - 23 = 97$ members.",
            "We use the principle of inclusion-exclusion to express the union of the two sets: $n(S \\cup Y) = n(S) + n(Y) - n(S \\cap Y)$.",
            "We substitute our known values into this equation: $97 = 65 + 48 - n(S \\cap Y)$.",
            "Simplifying the right side gives $97 = 113 - n(S \\cap Y)$.",
            "To solve for the intersection, we subtract 97 from 113: $n(S \\cap Y) = 113 - 97 = 16$ members.",
            "This shows that exactly 16 members attend both classes.",
            "For part (b), we calculate the conditional probability $\\text{P}(S | Y) = \\dfrac{n(S \\cap Y)}{n(Y)}$.",
            "The total number of members who attend Yoga classes, $n(Y)$, is given as 48. This forms the denominator of our probability fraction.",
            "The number of members who attend both classes, $n(S \\cap Y)$, is 16. This forms the numerator of our probability fraction.",
            "The probability is therefore $\\dfrac{16}{48}$. We simplify this fraction by dividing the numerator and denominator by their greatest common divisor, 16, yielding $\\dfrac{1}{3}$.",
            "Final Answer: $$(a)\\ 16,\\ (b)\\ \\dfrac{1}{3}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 16,\\ (b)\\ \\dfrac{2}{15}$$",
                "feedback": "You calculated the probability based on the entire gym membership of 120 instead of restricting your sample space to the 48 members who attend Yoga classes."
            },
            {
                "ans": "$$(a)\\ 39,\\ (b)\\ \\dfrac{13}{16}$$",
                "feedback": "You calculated an incorrect intersection for part (a) by forgetting to subtract the 23 non-attending members from the total of 120 before finding the overlap."
            },
            {
                "ans": "$$(a)\\ 16,\\ (b)\\ \\dfrac{16}{65}$$",
                "feedback": "You used the total number of Spin class attendees (65) as your denominator instead of the Yoga class membership (48) specified by the condition."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Restricting the Sample Space",
            "content": "When a probability question begins with 'Given that...', it is a conditional probability problem. The condition completely replaces your original sample space. For part (b), the denominator must be the total number of members who attend Yoga (48), not the overall total of 120 members."
        },
        "payhip_link": "https://payhip.com/b/oW2c1",
        "button_text": "Master GCSE Probability & Statistics: Download the Pack"
        }
    ],
    [
    {
        "id": "002192",
        "date": "11 July 2026",
        "major_area": "Number",
        "topic": "Percentage Change and Interest",
        "subtopic": "Percentage Change and Interest",
        "difficulty": "5/6",
        "q": "A businesswoman invests £8500 in a savings account paying compound interest at a rate of $3.2\\%$ per annum.<br>(a) Calculate the total value of her investment at the end of 3 years. Give your answer to the nearest penny.<br>(b) At the same time, she buys a delivery van for £24000. The value of the van depreciates by $15\\%$ in the first year, and then by $8\\%$ in each subsequent year. Calculate the total value of the van at the end of 3 years.",
        "steps": [
            "For part (a), we calculate compound interest using the formula $V = P \\times (1 + r)^t$, where $P$ is the principal amount, $r$ is the interest rate as a decimal, and $t$ is the time in years.",
            "Substituting our values, the rate of $3.2\\%$ becomes a decimal multiplier of $1.032$. This gives the equation: $V = 8500 \\times (1.032)^3$.",
            "Evaluating $(1.032)^3$ gives approximately $1.099144$. Multiplying this by £8500 yields $8500 \\times 1.099144 = 9342.729$.",
            "Rounding this value to the nearest penny gives a final investment value of £9342.73.",
            "For part (b), we calculate the depreciation of the van step-by-step over the 3-year period.",
            "In the first year, the van depreciates by $15\\%$, which means it retains $85\\%$ of its original value. The value at the end of the first year is calculated as $24000 \\times 0.85 = £20400$.",
            "In the second year, the value depreciates by $8\\%$, meaning it retains $92\\%$ of its first-year value. The value at the end of the second year is calculated as $20400 \\times 0.92 = £18768$.",
            "In the third year, the value depreciates by another $8\\%$, retaining $92\\%$ of its second-year value. The value at the end of the third year is calculated as $18768 \\times 0.92 = £17266.56$.",
            "The final value of the van at the end of 3 years is therefore £17266.56.",
            "Final Answer: $$(a)\\ \\pounds 9342.73,\\ (b)\\ \\pounds 17266.56$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\pounds 9316.00,\\ (b)\\ \\pounds 16560.00$$",
                "feedback": "You calculated simple interest instead of compound interest for part (a). For part (b), you added the depreciation percentages together ($15\\% + 8\\% + 8\\% = 31\\%$) and subtracted this flat percentage from the original value, which ignores the compounding effect of depreciation."
            },
            {
                "ans": "$$(a)\\ \\pounds 9342.73,\\ (b)\\ \\pounds 16560.00$$",
                "feedback": "Your interest calculation is correct, but you treated the depreciation as a flat percentage decrease of $31\\%$ instead of applying the percentage reductions sequentially year-by-year."
            },
            {
                "ans": "$$(a)\\ \\pounds 9342.73,\\ (b)\\ \\pounds 18688.51$$",
                "feedback": "Your interest calculation is correct, but you depreciated the van by $8\\%$ in all three years, forgetting that the first year had a higher depreciation rate of $15\\%$. Check your year-by-year multipliers."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Variable Depreciation Rates",
            "content": "In real-world contexts, vehicles depreciate much faster in their first year than in subsequent years. Do not fall into the trap of using a single multiplier for the entire period. Break the problem down into sequential steps, applying the first-year multiplier ($0.85$) first, followed by the subsequent-year multipliers ($0.92$) to the updated values."
        },
        "payhip_link": "https://payhip.com/b/X8Yo2",
        "button_text": "Master GCSE Number: Download the Pack"
    },
    {
        "id": "002193",
        "date": "12 July 2026",
        "major_area": "Geometry",
        "topic": "Similarity in 3D",
        "subtopic": "Similarity in 3D",
        "difficulty": "7/8",
        "img": "true",
        "q": "Two mathematically similar conical containers, $A$ and $B$, are used for storing grain as shown in the diagram. Container $A$ has a height of $40\\text{ cm}$ and Container $B$ has a height of $60\\text{ cm}$. The total surface area of Container $A$ is $1200\\text{ cm}^2$.<br>(a) Calculate the total surface area of Container $B$.<br>(b) Given that the volume of Container $B$ is $16.2\\text{ litres}$, calculate the volume of Container $A$ in litres.",
        "steps": [
            "For part (a), we first determine the linear scale factor of enlargement, $k$, from Container $A$ to Container $B$. This is found by dividing the height of $B$ by the height of $A$: $k = \\dfrac{60}{40} = 1.5$.",
            "The area scale factor is the square of the linear scale factor: $k^2 = (1.5)^2 = 2.25$.",
            "To find the surface area of Container $B$, we multiply the surface area of Container $A$ by this area scale factor: $1200 \\times 2.25 = 2700\\text{ cm}^2$.",
            "For part (b), we use the volume scale factor, which is the cube of the linear scale factor: $k^3 = (1.5)^3 = 3.375$.",
            "Since we are converting from the larger volume of Container $B$ to the smaller volume of Container $A$, we divide the volume of Container $B$ by the volume scale factor.",
            "This gives the calculation: $\\text{Volume of } A = \\dfrac{16.2}{3.375} = 4.8\\text{ litres}$.",
            "Final Answer: $$(a)\\ 2700\\text{ cm}^2,\\ (b)\\ 4.8\\text{ litres}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 1800\\text{ cm}^2,\\ (b)\\ 10.8\\text{ litres}$$",
                "feedback": "You scaled both the surface area and the volume using the linear scale factor of 1.5. Remember to square the scale factor for area calculations and cube it for volume calculations."
            },
            {
                "ans": "$$(a)\\ 2700\\text{ cm}^2,\\ (b)\\ 54.675\\text{ litres}$$",
                "feedback": "Your area calculation is correct, but you multiplied the volume of Container $B$ by the volume scale factor of 3.375 instead of dividing. Container $A$ is smaller, so its volume must be less than Container $B$."
            },
            {
                "ans": "$$(a)\\ 2700\\text{ cm}^2,\\ (b)\\ 7.2\\text{ litres}$$",
                "feedback": "Your area calculation is correct, but you divided the volume by the area scale factor of 2.25 instead of the volume scale factor of 3.375."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Direction of Scaling",
            "content": "Always perform a quick common-sense check on your answers. Container $A$ is physically smaller than Container $B$. Therefore, its calculated volume must be less than the $16.2\\text{ litres}$ volume of $B$. If you multiply by the scale factor instead of dividing, you will get an impossibly large volume for the smaller container."
        },
        "payhip_link": "https://payhip.com/b/iBzE5",
        "button_text": "Master GCSE Geometry: Download the Pack"
    },
    {
        "id": "002194",
        "date": "13 July 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions 2",
        "subtopic": "Algebraic Fractions 2",
        "difficulty": "8/9",
        "q": "Solve the algebraic equation for $x$:<br>$$\\dfrac{5}{x - 2} - \\dfrac{3}{x + 1} = 2$$<br>Give your answers correct to 3 significant figures.",
        "steps": [
            "We begin by finding a common denominator to combine the two algebraic fractions on the left side of the equation. The common denominator is $(x - 2)(x + 1)$.",
            "We rewrite each fraction with the common denominator: $\\dfrac{5(x + 1)}{(x - 2)(x + 1)} - \\dfrac{3(x - 2)}{(x - 2)(x + 1)} = 2$.",
            "This allows us to combine the numerators over the single denominator: $\\dfrac{5(x + 1) - 3(x - 2)}{(x - 2)(x + 1)} = 2$.",
            "We expand the numerator carefully, noting the subtraction of the second term: $5x + 5 - (3x - 6) = 5x + 5 - 3x + 6 = 2x + 11$.",
            "Our equation is now: $\\dfrac{2x + 11}{(x - 2)(x + 1)} = 2$.",
            "We multiply both sides of the equation by the denominator to eliminate the fraction: $2x + 11 = 2(x - 2)(x + 1)$.",
            "We expand the quadratic term on the right side: $2(x^2 - x - 2) = 2x^2 - 2x - 4$.",
            "We equate the two sides: $2x + 11 = 2x^2 - 2x - 4$. We then rearrange all terms to one side to set the quadratic equation to zero: $2x^2 - 4x - 15 = 0$.",
            "Since this quadratic expression cannot be factored easily, we apply the quadratic formula, $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, where $a = 2$, $b = -4$, and $c = -15$.",
            "Substituting these coefficients yields: $x = \\dfrac{-(-4) \\pm \\sqrt{(-4)^2 - 4(2)(-15)}}{2(2)} = \\dfrac{4 \\pm \\sqrt{16 + 120}}{4} = \\dfrac{4 \\pm \\sqrt{136}}{4}$.",
            "Evaluating the square root gives $\\sqrt{136} \\approx 11.6619$.",
            "We calculate our two distinct solutions: $x_1 = \\dfrac{4 + 11.6619}{4} \\approx 3.9155$ and $x_2 = \\dfrac{4 - 11.6619}{4} \\approx -1.9155$.",
            "Rounding both values to 3 significant figures gives the final solutions as $x = 3.92$ or $x = -1.92$.",
            "Final Answer: $$x = 3.92 \\text{ or } x = -1.92$$"
        ],
        "wrong_options": [
            {
                "ans": "$$x = 2.58 \\text{ or } x = -0.581$$",
                "feedback": "You made a sign error when expanding $-3(x - 2)$, writing it as $-3x - 6$ instead of $-3x + 6$. This led to an incorrect simplified numerator and a different quadratic equation."
            },
            {
                "ans": "$$x = -4.50$$",
                "feedback": "You forgot to multiply the right side of the equation by the common denominator when clearing the fraction, simply setting the expanded numerator equal to 2."
            },
            {
                "ans": "$$x = 7.83 \\text{ or } x = -3.83$$",
                "feedback": "You set up the quadratic equation correctly, but when applying the quadratic formula you divided the numerator by $2$ instead of dividing by $2a = 4$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Expanding Negative Brackets",
            "content": "The absolute classic point of failure in this question is expanding the second numerator. When evaluating $-3(x-2)$, you must multiply $-3$ by $-2$, which results in $+6$. Failing to distribute this negative sign is a very common algebraic slip that will completely change your quadratic equation and lose you multiple accuracy marks."
        },
        "payhip_link": "https://payhip.com/b/jJHdP",
        "button_text": "Master GCSE Algebra: Download the Pack"
    },
    {
        "id": "002195",
        "date": "14 July 2026",
        "major_area": "Probability & Statistics",
        "topic": "Histograms",
        "subtopic": "Histograms",
        "difficulty": "7/8",
        "q": "The speeds of 150 cars passing through a village were recorded. A histogram was drawn to represent this data. The class interval $30 < s \\le 40$ has a frequency of 60 and a bar height of 6 units on the grid.<br>(a) Explain how to find the frequency density of this class interval, and state its value.<br>(b) The next class interval is $40 < s \\le 45$ and has a frequency density of 8. Calculate the frequency of cars recorded in this interval.",
        "steps": [
            "For part (a), we understand that the height of a bar on a histogram represents its frequency density.",
            "The formula for frequency density is defined as $\\text{Frequency Density} = \\dfrac{\\text{Frequency}}{\\text{Class Width}}$.",
            "For the class interval $30 < s \\le 40$, the recorded frequency is 60 and the class width is the size of the interval: $40 - 30 = 10\\text{ mph}$.",
            "Substituting these values into our formula gives: $\\text{Frequency Density} = \\dfrac{60}{10} = 6$. This matches the bar height of 6 units.",
            "For part (b), we rearrange our frequency density formula to find the frequency: $\\text{Frequency} = \\text{Frequency Density} \\times \\text{Class Width}$.",
            "For the class interval $40 < s \\le 45$, the given frequency density is 8.",
            "We calculate the class width of this interval by finding the difference between its boundaries: $45 - 40 = 5\\text{ mph}$.",
            "Multiplying the frequency density by this class width yields: $\\text{Frequency} = 8 \\times 5 = 40$.",
            "This tells us that exactly 40 cars were recorded travelling in the $40 < s \\le 45$ speed range.",
            "Final Answer: $$(a)\\ \\text{Frequency Density } = 6,\\ (b)\\ 40 \\text{ cars}$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ \\text{Frequency Density } = 6,\\ (b)\\ 80 \\text{ cars}$$",
                "feedback": "You multiplied the frequency density of 8 by a class width of 10 instead of using the correct class width of 5 for the $40 < s \\le 45$ interval."
            },
            {
                "ans": "$$(a)\\ \\text{Frequency Density } = 6,\\ (b)\\ 1.6 \\text{ cars}$$",
                "feedback": "You divided the frequency density by the class width ($8 \\div 5 = 1.6$) instead of multiplying them to find the frequency. Remember that frequency is represented by the area of the bar."
            },
            {
                "ans": "$$(a)\\ \\text{Frequency Density } = 2,\\ (b)\\ 40 \\text{ cars}$$",
                "feedback": "You calculated the frequency density incorrectly in part (a) by dividing the class width by the frequency or using an incorrect formula."
            }
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Frequency is Area",
            "content": "The single most important principle of histograms to remember is that the frequency is represented by the area of the bar, not its height. Bar height only represents frequency density. To find the frequency, you must always multiply the bar height by the width of that specific class interval."
        },
        "payhip_link": "https://payhip.com/b/ND5E9",
        "button_text": "Master GCSE Probability & Statistics: Download the Pack"
    },
    {
        "id": "002196",
        "date": "15 July 2026",
        "major_area": "Geometry",
        "topic": "Circle Geometry",
        "subtopic": "Circle Theorems 2",
        "difficulty": "8/9",
        "img": "true",
        "q": "A mechanical component features a circular disc with centre $O$. A line $TA$ is tangent to the circle at point $A$. $B$ and $C$ are points on the circumference such that $AB$ is a chord and $C$ lies on the major arc $AB$ as shown in the diagram. Angle $TAB = 58^\\circ$ and angle $OBC = 22^\\circ$.<br>(a) Find the size of angle $ABC$. State the geometric theorem used.<br>(b) Calculate the size of angle $ABO$.",
        "steps": [
            "For part (a), we identify that $TA$ is a tangent to the circle at point $A$ and $AC$ is a chord extending from the point of tangency.",
            "The angle formed between the tangent and the chord is given as angle $TAC = 58^\\circ$.",
            "According to the alternate segment theorem, the angle between a tangent and a chord through the point of contact is equal to the angle subtended by the chord in the alternate segment.",
            "The angle subtended by the chord $AC$ in the alternate segment is angle $ABC$.",
            "Therefore, angle $ABC = 58^\\circ$. Our geometric reason is: 'The Alternate Segment Theorem'.",
            "For part (b), we connect the centre of the circle $O$ to our points to form triangles.",
            "We draw the radii $OB$ and $OC$. Since $OB = OC$ (both are radii of the same circle), triangle $OBC$ is an isosceles triangle.",
            "In an isosceles triangle, the angles opposite the equal sides are equal. Therefore, angle $OBC = \\text{angle } OCB = 22^\\circ$.",
            "We know from our calculation in part (a) that the total angle $ABC = 58^\\circ$.",
            "The angle $ABO$ is the difference between the total angle $ABC$ and the component angle $OBC$.",
            "This gives the calculation: angle $ABO = \\text{angle } ABC - \\text{angle } OBA = 58^\\circ - 22^\\circ = 36^\\circ$.",
            "Final Answer: $$(a)\\ 58^\\circ,\\ (b)\\ 36^\\circ$$"
        ],
        "wrong_options": [
            {
                "ans": "$$(a)\\ 58^\\circ,\\ (b)\\ 32^\\circ$$",
                "feedback": "You assumed that angle $ACO$ is equal to angle $OAB$ ($90^\\circ - 58^\\circ = 32^\\circ$) without accounting for the correct geometric relationships within the circle's radii."
            },
            {
                "ans": "$$(a)\\ 58^\\circ,\\ (b)\\ 29^\\circ$$",
                "feedback": "You assumed that the radius $OC$ bisects the angle $ACB$ exactly, halving $58^\\circ$ to get $29^\\circ$. This is not a valid circle property unless specified."
            },
            {
                "ans": "$$(a)\\ 32^\\circ,\\ (b)\\ 10^\\circ$$",
                "feedback": "You applied the tangent-radius perpendicular rule directly to the angle at the circumference, incorrectly identifying angle $ACB$ as $90^\\circ - 58^\\circ = 32^\\circ$."
            }
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Spotting Isosceles Triangles",
            "content": "A crucial skill in circle geometry is recognising that any triangle formed by drawing two radii from the centre of a circle to the circumference is automatically isosceles. Identifying that triangle $OBC$ is isosceles immediately unlocks the size of angle $OCB$, simplifying a multi-step problem into a simple subtraction."
        },
        "payhip_link": "https://payhip.com/b/wm0xL",
        "button_text": "Master GCSE Geometry: Download the Pack"
    }
]

    ];