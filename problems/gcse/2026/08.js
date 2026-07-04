const problemBank = [
  {
    "id": "003213",
    "date": "1 Aug 2026",
    "major_area": "Number",
    "topic": "Estimation & Bounds",
    "subtopic": "Upper and lower bounds",
    "difficulty": "6/7",
    "q": "A runner completes a $100\\text{ m}$ race. The distance is measured as $100\\text{ m}$, correct to the nearest $5\\text{ metres}$.<br>The time taken is recorded as $12.5\\text{ seconds}$, correct to $1\\text{ decimal place}$.<br>(a) Find the upper bound and lower bound for the distance.<br>(b) Calculate the lower bound of the runner's average speed. Give your answer correct to $3\\text{ significant figures}$.",
    "steps": [
      "For part (a), the distance $d = 100\\text{ m}$ is rounded to the nearest $5\\text{ m}$. We find the boundary offset by halving this unit of accuracy: $5 \\div 2 = 2.5\\text{ m}$.",
      "This yields the bounds for distance: $\\text{Lower Bound} = 100 - 2.5 = 97.5\\text{ m}$ and $\\text{Upper Bound} = 100 + 2.5 = 102.5\\text{ m}$.",
      "The time $t = 12.5\\text{ s}$ is rounded to $1\\text{ decimal place}$ (which is equivalent to the nearest $0.1\\text{ s}$). We find the boundary offset by halving this unit: $0.1 \\div 2 = 0.05\\text{ s}$.",
      "This yields the bounds for time: $\\text{Lower Bound} = 12.5 - 0.05 = 12.45\\text{ s}$ and $\\text{Upper Bound} = 12.5 + 0.05 = 12.55\\text{ s}$.",
      "For part (b), we wish to find the minimum possible average speed. Since $\\text{Speed} = \\dfrac{\\text{Distance}}{\\text{Time}}$, we must divide the lower bound of distance by the upper bound of time.",
      "Using our calculated values: $\\text{Speed}_{\\text{LB}} = \\dfrac{97.5\\text{ m}}{12.55\\text{ s}}$.",
      "Evaluating the division yields: $\\text{Speed}_{\\text{LB}} \\approx 7.7689\\text{ m/s}$.",
      "Rounding this value to $3\\text{ significant figures}$ gives $7.77\\text{ m/s}$.",
      "Final Answer: $$(a)\\ 97.5\\text{ m} \\le d < 102.5\\text{ m}\\ (b)\\ 7.77\\text{ m/s}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 97.5\\text{ m} \\le d < 102.5\\text{ m}\\ (b)\\ 8.23\\text{ m/s}$$",
        "feedback": "You calculated the upper bound for the average speed by dividing the upper bound of distance by the lower bound of time."
      },
      {
        "ans": "$$(a)\\ 99.5\\text{ m} \\le d < 100.5\\text{ m}\\ (b)\\ 7.93\\text{ m/s}$$",
        "feedback": "You calculated the bounds for the distance as if it were measured to the nearest $1\\text{ m}$ instead of the nearest $5\\text{ m}$."
      },
      {
        "ans": "$$(a)\\ 97.5\\text{ m} \\le d < 102.5\\text{ m}\\ (b)\\ 7.83\\text{ m/s}$$",
        "feedback": "You divided the lower bound of distance by the lower bound of time instead of the upper bound of time."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Minimising a Fraction",
      "content": "To calculate the lower bound of any fraction (like speed = distance / time), you must divide the smallest possible numerator (the lower bound of distance) by the largest possible denominator (the upper bound of time). Dividing by a larger value is what makes the overall quotient as small as possible."
    },
    "payhip_link": "https://payhip.com/b/qYp8g",
    "button_text": "Master IGCSE Bounds: Download the Pack"
  },
  {
    "id": "003214",
    "date": "2 August 2026",
    "major_area": "Algebra",
    "topic": "Rearranging Formulae",
    "subtopic": "Changing the subject",
    "difficulty": "6/7",
    "q": "Rearrange the formula $y = \\dfrac{x + a}{x - b}$ to make $x$ the subject.",
    "steps": [
      "We begin by multiplying both sides of the equation by the denominator $(x - b)$ to clear the fraction: $y(x - b) = x + a$.",
      "Next, we expand the bracket on the left-hand side: $yx - yb = x + a$.",
      "To collect all terms containing $x$ on one side of the equation, we subtract $x$ from both sides: $yx - x - yb = a$.",
      "We then move the term without $x$ (which is $-yb$) to the right-hand side by adding $yb$ to both sides of the equation: $yx - x = a + yb$.",
      "We factorise the left-hand side by taking out $x$ as a common factor: $x(y - 1) = a + yb$.",
      "Finally, we divide both sides by $(y - 1)$ to isolate $x$: $x = \\dfrac{a + yb}{y - 1}$.",
      "Final Answer: $$x = \\dfrac{a + yb}{y - 1}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$x = \\dfrac{a - yb}{y - 1}$$",
        "feedback": "You made a sign error when moving the term $-yb$ across the equals sign, subtracting it from the right-hand side instead of adding it."
      },
      {
        "ans": "$$x = \\dfrac{a + yb}{y + 1}$$",
        "feedback": "You made a sign error when collecting the $x$ terms, adding $x$ to the left-hand side instead of subtracting it."
      },
      {
        "ans": "$$x = a + yb - y$$",
        "feedback": "You subtracted the $(y - 1)$ term from the right-hand side instead of dividing to fully isolate $x$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Factoring to Isolate",
      "content": "When the variable you need to isolate appears in more than one term (such as $yx$ and $x$), you must gather all of those terms on one side of the equation and then factorise by taking that variable out as a common factor. This creates a single instance of the variable, allowing you to divide and solve."
    },
    "payhip_link": "https://payhip.com/b/9r34U",
    "button_text": "Master Changing the Subject: Download the Pack"
  },
  {
    "id": "003215",
    "date": "3 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Circle Theorems",
    "subtopic": "Angle at the centre",
    "difficulty": "6/7",
    "img": "true",
    "q": "The diagram shows a circle with centre $O$. $A$, $B$, and $C$ are points on the circumference. Angle $ABC = 54^\\circ$.<br>(a) Calculate the size of the reflex angle $AOC$. State the geometric reason for your answer.<br>(b) Given that triangle $OAC$ is isosceles, calculate the size of angle $OAC$.",
    "steps": [
      "For part (a), we identify that the angle subtended by an arc at the centre of a circle is twice the angle subtended by the same arc at any point on the circumference.",
      "The angle at the circumference is given as angle $ABC = 54^\\circ$.",
      "Therefore, the obtuse angle $AOC$ at the centre is: $2 \\times 54^\\circ = 108^\\circ$.",
      "The reflex angle $AOC$ represents the remaining angle around the central point $O$, which must sum to $360^\\circ$.",
      "We calculate this as: $\\text{Reflex Angle } AOC = 360^\\circ - 108^\\circ = 252^\\circ$. Our geometric reason is: 'The angle at the centre is twice the angle at the circumference'.",
      "For part (b), we examine the triangle $OAC$. The line segments $OA$ and $OC$ are both radii of the circle, meaning $OA = OC$.",
      "This makes triangle $OAC$ an isosceles triangle, so the base angles are equal: angle $OAC = \\text{angle } OCA$.",
      "The interior obtuse angle $AOC$ inside the triangle is $108^\\circ$. Since the angles in any triangle sum to $180^\\circ$, we can find the remaining angles.",
      "We calculate this as: $\\text{angle } OAC = \\dfrac{180^\\circ - 108^\\circ}{2} = \\dfrac{72^\\circ}{2} = 36^\\circ$.",
      "Final Answer: $$(a)\\ 252^\\circ\\ (b)\\ 36^\\circ$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 108^\\circ\\ (b)\\ 36^\\circ$$",
        "feedback": "For part (a), you successfully calculated the obtuse angle $AOC$ ($108^\\circ$), but you forgot to subtract this from $360^\\circ$ to find the reflex angle."
      },
      {
        "ans": "$$(a)\\ 252^\\circ\\ (b)\\ 72^\\circ$$",
        "feedback": "For part (b), you forgot to divide the remaining $72^\\circ$ by 2 to account for both equal base angles of the isosceles triangle."
      },
      {
        "ans": "$$(a)\\ 252^\\circ\\ (b)\\ 18^\\circ$$",
        "feedback": "For part (b), you used the reflex angle $252^\\circ$ instead of the interior obtuse angle $108^\\circ$ when subtracting from $180^\\circ$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Obtuse vs. Reflex Angle at Centre",
      "content": "Be careful with geometry terminology. The standard theorem states that the angle at the centre is twice the angle at the circumference, but this relates to the angle subtended by the same arc. For angle $ABC = 54^\\circ$, the subtended angle is the obtuse angle $AOC = 108^\\circ$. If a question specifically asks for the 'reflex' angle, you must perform the additional step of subtracting this value from $360^\\circ$."
    },
    "payhip_link": "https://payhip.com/b/RLgSJ",
    "button_text": "Master Circle Theorems: Download the Pack"
  },
  {
    "id": "003216",
    "date": "4 August 2026",
    "major_area": "Probability",
    "topic": "Tree Diagrams",
    "subtopic": "Without replacement",
    "difficulty": "6/7",
    "img": "true",
    "q": "The incomplete tree diagram represents picking two counters at random from a bag containing $7\\text{ blue counters}$ and $3\\text{ red counters}$ without replacement.<br>(a) Find the missing probability value $p$ on the second-selection branch representing a red counter being picked given that a blue counter was picked first.<br>(b) Work out the probability that at least one of the counters picked is red.",
    "steps": [
      "For part (a), we first identify the contents of the bag. Initially, there are $7 + 3 = 10$ total counters ($7\\text{ blue}$ and $3\\text{ red}$).",
      "If a blue counter is picked first, there are now $10 - 1 = 9$ counters remaining in the bag for the second pick.",
      "Because a blue counter was removed first, the number of red counters remaining in the bag is still $3$.",
      "Therefore, the conditional probability $p$ of selecting a red counter on the second selection, given blue was selected first, is: $p = \\dfrac{3}{9}$.",
      "We simplify this fraction to its lowest terms: $p = \\dfrac{1}{3}$.",
      "For part (b), the event 'at least one red counter' is the complement of picking 'no red counters' (which is the outcome Blue followed by Blue).",
      "We calculate the probability of picking two blue counters: $\\text{P}(\\text{Blue, Blue}) = \\text{P}(\\text{Blue first}) \\times \\text{P}(\\text{Blue second | Blue first})$.",
      "This yields: $\\text{P}(\\text{Blue, Blue}) = \\dfrac{7}{10} \\times \\dfrac{6}{9} = \\dfrac{42}{90}$.",
      "To find the probability of getting at least one red counter, we subtract this from $1$: $\\text{P}(\\text{At least one Red}) = 1 - \\dfrac{42}{90} = \\dfrac{48}{90}$.",
      "We simplify the fraction $\\dfrac{48}{90}$ by dividing both the numerator and the denominator by 6: $\\dfrac{8}{15}$.",
      "Final Answer: $$(a)\\ \\dfrac{1}{3}\\ (b)\\ \\dfrac{8}{15}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ \\dfrac{3}{10}\\ (b)\\ \\dfrac{8}{15}$$",
        "feedback": "For part (a), you assumed the counters were replaced, keeping the total number of counters as 10 instead of reducing it to 9 for the second selection."
      },
      {
        "ans": "$$(a)\\ \\dfrac{1}{3}\\ (b)\\ \\dfrac{51}{100}$$",
        "feedback": "For part (b), you used independent probability rules (with replacement), calculating the outcome as: $1 - \\left(\\dfrac{7}{10} \\times \\dfrac{7}{10}\\right) = \\dfrac{51}{100}$."
      },
      {
        "ans": "$$(a)\\ \\dfrac{1}{3}\\ (b)\\ \\dfrac{7}{15}$$",
        "feedback": "For part (b), you calculated the probability of picking two blue counters ($42/90 = 7/15$) instead of subtracting this from 1 to find the probability of at least one red counter."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Changing Denominators",
      "content": "For probability questions involving 'without replacement' scenarios, always remember that both the numerator and the denominator of your branch fractions will change on the second selection. A common mistake is using the original total (e.g., 10) as the denominator for the second set of branches."
    },
    "payhip_link": "https://payhip.com/b/8EhLZ",
    "button_text": "Master Probability Trees: Download the Pack"
  },
  {
    "id": "003217",
    "date": "5 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Trigonometry",
    "subtopic": "Sine rule",
    "difficulty": "6/7",
    "q": "In triangle $PQR$, the side length $PQ = 14\\text{ cm}$, angle $PRQ = 42^\\circ$, and angle $QPR = 58^\\circ$.<br>(a) Calculate the length of the side $QR$. Give your answer correct to $3\\text{ significant figures}$.<br>(b) Calculate the angle $PQR$.",
    "steps": [
      "For part (a), we are given two angles and a non-included side of a triangle, which means we can apply the Sine Rule: $\\dfrac{a}{\\sin(A)} = \\dfrac{b}{\\sin(B)}$.",
      "Let side $QR = p$ (opposite to angle $P = 58^\\circ$) and side $PQ = r = 14\\text{ cm}$ (opposite to angle $R = 42^\\circ$).",
      "We set up the Sine Rule relationship: $\\dfrac{QR}{\\sin(58^\\circ)} = \\dfrac{14}{\\sin(42^\\circ)}$.",
      "To solve for $QR$, we multiply both sides of the equation by $\\sin(58^\\circ)$: $QR = \\dfrac{14 \\times \\sin(58^\\circ)}{\\sin(42^\\circ)}$.",
      "We evaluate the values using a calculator: $\\sin(58^\\circ) \\approx 0.84805$ and $\\sin(42^\\circ) \\approx 0.66913$.",
      "Substituting these values: $QR = \\dfrac{14 \\times 0.84805}{0.66913} \\approx \\dfrac{11.8727}{0.66913} \\approx 17.744\\text{ cm}$.",
      "Rounding to $3\\text{ significant figures}$ yields $17.7\\text{ cm}$.",
      "For part (b), we use the geometric rule that the sum of angles inside any triangle is always $180^\\circ$.",
      "The given angles are $QPR = 58^\\circ$ and $PRQ = 42^\\circ$.",
      "We calculate angle $PQR$ as: $\\text{angle } PQR = 180^\\circ - (58^\\circ + 42^\\circ) = 180^\\circ - 100^\\circ = 80^\\circ$.",
      "Final Answer: $$(a)\\ 17.7\\text{ cm}\\ (b)\\ 80^\\circ$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 11.0\\text{ cm}\\ (b)\\ 80^\\circ$$",
        "feedback": "In part (a), you inverted the Sine Rule relationship, multiplying $14$ by $\\sin(42^\\circ)$ and dividing by $\\sin(58^\\circ)$."
      },
      {
        "ans": "$$(a)\\ 17.7\\text{ cm}\\ (b)\\ 100^\\circ$$",
        "feedback": "In part (b), you calculated the sum of the two known angles ($58^\\circ + 42^\\circ = 100^\\circ$) but forgot to subtract this from $180^\\circ$."
      },
      {
        "ans": "$$(a)\\ 20.1\\text{ cm}\\ (b)\\ 80^\\circ$$",
        "feedback": "In part (a), you used the cosine of the angles instead of the sine when setting up the Sine Rule formula."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Matching Sides to Opposite Angles",
      "content": "Always double-check that you are pairing each side length with its exact opposite angle in the Sine Rule equation. A common slip is matching the side $QR$ with the adjacent angle $42^\\circ$ instead of its opposite angle $58^\\circ$. Drawing arrows directly across your triangle diagram can help prevent this error."
    },
    "payhip_link": "https://payhip.com/b/EaYM1",
    "button_text": "Master GCSE Sine Rule: Download the Pack"
  }
]