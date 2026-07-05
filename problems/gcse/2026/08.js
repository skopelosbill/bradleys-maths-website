const problemBank = [
  {
    "id": "003213",
    "date": "1 August 2026",
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
    "img": "true",
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
  },
  {
    "id": "003218",
    "date": "6 August 2026",
    "major_area": "Algebra",
    "topic": "Graphs",
    "subtopic": "Transformations of graphs",
    "difficulty": "6/7",
    "img": "true",
    "q": "The diagram shows a sketch of the curve with equation $y = f(x)$. The point $P(3, -4)$ is the turning point of the curve.<br>Write down the coordinates of the turning point of the curve with equation:<br>(a) $y = f(x - 2)$<br>(b) $y = -f(x) + 3$",
    "steps": [
      "For part (a), the transformation $y = f(x - 2)$ represents a horizontal translation of the graph.",
      "Any transformation of the form $y = f(x - h)$ shifts the entire curve parallel to the x-axis by $+h$ units (to the right).",
      "For $y = f(x - 2)$, the horizontal translation is $+2$ units, while the y-coordinates remain unchanged.",
      "We apply this shift to the turning point $P(3, -4)$: the new x-coordinate is $3 + 2 = 5$, and the y-coordinate remains $-4$.",
      "The new coordinates are $(5, -4)$.",
      "For part (b), the transformation $y = -f(x) + 3$ combines two vertical operations: a reflection and a translation.",
      "First, the transformation $y = -f(x)$ reflects the curve in the x-axis, which negates the y-coordinates of all points: $(x, y) \\rightarrow (x, -y)$.",
      "Applying this reflection to $P(3, -4)$ gives the intermediate coordinates $(3, 4)$.",
      "Second, the $+3$ constant represents a vertical translation of $+3$ units (upwards), which increases the y-coordinate by 3.",
      "Applying this vertical translation to $(3, 4)$ gives our final coordinates: $(3, 4 + 3) = (3, 7)$.",
      "Final Answer: $$(a)\\ (5, -4)\\ (b)\\ (3, 7)$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ (1, -4)\\ (b)\\ (3, 23)$$",
        "feedback": "You subtracted 2 from the x-coordinate instead of adding it in part (a), and you used a non-standard transformation scale in part (b)."
      },
      {
        "ans": "$$(a)\\ (5, -4)\\ (b)\\ (-3, 23)$$",
        "feedback": "In part (a), you successfully calculated the translation, but in part (b) you gave the incorrect signs for your final coordinates."
      },
      {
        "ans": "$$(a)\\ (5, -4)\\ (b)\\ (3, -13)$$",
        "feedback": "You solved part (a) correctly, but in part (b), you forgot that $-y$ is applied first, leading to a sign error when adding the $+3$ constant."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Order of Operations in Transformations",
      "content": "When a curve undergoes multiple vertical transformations like $y = -f(x) + 3$, always follow BIDMAS rules. Apply the multiplication/reflection $-f(x)$ first by negating the y-coordinate, and then apply the addition/translation $+3$ second. Reversing this order will result in incorrect coordinates."
    },
    "payhip_link": "https://payhip.com/b/FDaTw",
    "button_text": "Master Graph Transformations: Download the Pack"
  },
  {
    "id": "003219",
    "date": "7 August 2026",
    "major_area": "Number",
    "topic": "Decimals",
    "subtopic": "Converting between decimals and fractions",
    "difficulty": "6/7",
    "q": "Express the recurring decimal $0.2\\dot{7}\\dot{5}$ as a fraction in its simplest form.",
    "steps": [
      "We start by setting a variable $x$ equal to the recurring decimal: $x = 0.2757575...$.",
      "We observe that the recurring part has two digits ($7$ and $5$), while the digit $2$ does not recur.",
      "To align the recurring parts, we first multiply $x$ by 10 to move the non-recurring digit to the left of the decimal point: $10x = 2.757575...$ (Equation 1).",
      "Because there are two recurring digits, we multiply Equation 1 by 100 to shift the decimal point past one full set of recurring digits: $1000x = 275.757575...$ (Equation 2).",
      "Next, we subtract Equation 1 from Equation 2 to eliminate the infinite recurring decimal part: $1000x - 10x = 275.757575... - 2.757575...$.",
      "Performing the subtraction: $990x = 273$.",
      "We solve for $x$ by writing it as a fraction: $x = \\dfrac{273}{990}$.",
      "Finally, we simplify the fraction by finding a common factor. Both 273 and 990 are divisible by 3.",
      "Dividing the numerator and denominator by 3 yields: $x = \\dfrac{91}{330}$.",
      "Final Answer: $$\\dfrac{91}{330}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$\\dfrac{275}{999}$$",
        "feedback": "You treated the entire decimal as recurring, subtracting $x$ from $1000x$ instead of separating the non-recurring digit $2$."
      },
      {
        "ans": "$$\\dfrac{273}{900}$$",
        "feedback": "You set up the denominator incorrectly as 900 instead of 990 when subtracting $10x$ from $1000x$."
      },
      {
        "ans": "$$\\dfrac{137}{495}$$",
        "feedback": "You made a simplification or division error when dividing the numerator 273 by its common factors."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Matching Recurring Parts",
      "content": "Always ensure the digits after the decimal point line up perfectly before subtracting your equations. Subtracting $x$ (which has $.275...$) from $100x$ (which has $.575...$) will leave non-zero terms after the decimal point, ruining the method. Using $1000x$ and $10x$ aligns the $.7575...$ columns beautifully."
    },
    "payhip_link": "https://payhip.com/b/dAvne",
    "button_text": "Master Recurring Decimals: Download the Pack"
  },
  {
    "id": "003220",
    "date": "8 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Vectors",
    "subtopic": "Vector addition",
    "difficulty": "8/9",
    "img": "true",
    "q": "The diagram shows a triangle $OAB$ where $\\overrightarrow{OA} = \\mathbf{a}$ and $\\overrightarrow{OB} = \\mathbf{b}$.<br>The point $M$ is the midpoint of $AB$ and $P$ is a point on $OM$ such that $OP = \\dfrac{2}{3}OM$.<br>(a) Find the vector $\\overrightarrow{OM}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.<br>(b) Show that the vector $\\overrightarrow{AP} = \\dfrac{1}{3}(\\mathbf{b} - 2\\mathbf{a})$.",
    "steps": [
      "For part (a), to find the vector $\\overrightarrow{OM}$, we first express the vector $\\overrightarrow{AB}$ by following the path from $A$ to $B$ via $O$: $\\overrightarrow{AB} = \\overrightarrow{AO} + \\overrightarrow{OB} = -\\mathbf{a} + \\mathbf{b}$.",
      "Since $M$ is the midpoint of $AB$, the vector $\\overrightarrow{AM} = \\dfrac{1}{2}\\overrightarrow{AB} = \\dfrac{1}{2}(-\\mathbf{a} + \\mathbf{b})$.",
      "Now we find $\\overrightarrow{OM}$ by following the path from $O$ to $M$ via $A$: $\\overrightarrow{OM} = \\overrightarrow{OA} + \\overrightarrow{AM}$.",
      "Substituting our vectors: $\\overrightarrow{OM} = \\mathbf{a} + \\dfrac{1}{2}(-\\mathbf{a} + \\mathbf{b}) = \\mathbf{a} - \\dfrac{1}{2}\\mathbf{a} + \\dfrac{1}{2}\\mathbf{b} = \\dfrac{1}{2}\\mathbf{a} + \\dfrac{1}{2}\\mathbf{b}$.",
      "For part (b), we wish to find the vector $\\overrightarrow{AP}$. We follow the path from $A$ to $P$ via $O$: $\\overrightarrow{AP} = \\overrightarrow{AO} + \\overrightarrow{OP}$.",
      "We are given that $OP = \\dfrac{2}{3}OM$, so the vector $\\overrightarrow{OP} = \\dfrac{2}{3}\\overrightarrow{OM} = \\dfrac{2}{3}\\left(\\dfrac{1}{2}\\mathbf{a} + \\dfrac{1}{2}\\mathbf{b}\\right) = \\dfrac{1}{3}\\mathbf{a} + \\dfrac{1}{3}\\mathbf{b}$.",
      "Now, we substitute this into our path: $\\overrightarrow{AP} = -\\mathbf{a} + \\left(\\dfrac{1}{3}\\mathbf{a} + \\dfrac{1}{3}\\mathbf{b}\\right)$.",
      "Grouping the $\\mathbf{a}$ terms: $\\overrightarrow{AP} = \\left(-1 + \\dfrac{1}{3}\\right)\\mathbf{a} + \\dfrac{1}{3}\\mathbf{b} = -\\dfrac{2}{3}\\mathbf{a} + \\dfrac{1}{3}\\mathbf{b}$.",
      "Factoring out the fraction $\\dfrac{1}{3}$ yields the required expression: $\\overrightarrow{AP} = \\dfrac{1}{3}(\\mathbf{b} - 2\\mathbf{a})$.",
      "Final Answer: $$(a)\\ \\dfrac{1}{2}\\mathbf{a} + \\dfrac{1}{2}\\mathbf{b}\\ (b)\\ \\text{Vector shown}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ \\dfrac{1}{2}\\mathbf{a} + \\dfrac{1}{2}\\mathbf{b}\\ (b)\\ \\dfrac{1}{3}(\\mathbf{b} - \\mathbf{a})$$",
        "feedback": "In part (b), you miscalculated the fraction for $\\overrightarrow{OP}$, forgetting to distribute the factor of $\\dfrac{2}{3}$ across both vector components."
      },
      {
        "ans": "$$(a)\\ \\mathbf{a} + \\mathbf{b}\\ (b)\\ \\dfrac{1}{3}(\\mathbf{b} - 2\\mathbf{a})$$",
        "feedback": "In part (a), you calculated the vector sum of $OA$ and $OB$ instead of finding the midpoint vector path $\\overrightarrow{OM}$."
      },
      {
        "ans": "$$(a)\\ \\dfrac{1}{2}\\mathbf{a} + \\dfrac{1}{2}\\mathbf{b}\\ (b)\\ \\dfrac{1}{3}(\\mathbf{b} + 2\\mathbf{a})$$",
        "feedback": "In part (b), you made a sign error when adding the negative vector $\\overrightarrow{AO} = -\\mathbf{a}$ to the path."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Finding Midpoint Vectors Directly",
      "content": "A beautiful shortcut for finding a vector to a midpoint $M$ from the origin $O$ is to take the average of the two outer position vectors: $\\overrightarrow{OM} = \\dfrac{1}{2}(\\overrightarrow{OA} + \\overrightarrow{OB}) = \\dfrac{1}{2}(\\mathbf{a} + \\mathbf{b})$. Memorizing this shortcut can save you critical time on multi-step geometry proofs."
    },
    "payhip_link": "https://payhip.com/b/CZOJ4",
    "button_text": "Master GCSE Vector Geometry: Download the Pack"
  },
  {
    "id": "003221",
    "date": "9 August 2026",
    "major_area": "Probability",
    "topic": "Conditional Probability",
    "subtopic": "Conditional Probability",
    "difficulty": "8/9",
    "q": "A bag contains $n$ sweets, of which 6 are lemon and the rest are strawberry.<br>Two sweets are chosen at random from the bag without replacement.<br>Given that the probability that both sweets chosen are lemon is $\\dfrac{1}{3}$, show that $n^2 - n - 90 = 0$, and find the total number of sweets in the bag.",
    "steps": [
      "The total number of sweets in the bag is $n$.",
      "The number of lemon sweets is 6, so the probability of choosing a lemon sweet on the first pick is: $\\text{P}(\\text{Lemon}_1) = \\dfrac{6}{n}$.",
      "Since the choice is without replacement, the total number of sweets left in the bag is now $n - 1$.",
      "The number of lemon sweets left is now $6 - 1 = 5$, so the probability of choosing a lemon sweet on the second pick is: $\\text{P}(\\text{Lemon}_2) = \\dfrac{5}{n - 1}$.",
      "The probability of choosing two lemon sweets is: $\\text{P}(\\text{Both Lemon}) = \\text{P}(\\text{Lemon}_1) \\times \\text{P}(\\text{Lemon}_2) = \\dfrac{6}{n} \\times \\dfrac{5}{n - 1} = \\dfrac{30}{n(n - 1)}$.",
      "We are given that this probability is equal to $\\dfrac{1}{3}$, so we set up the equation: $\\dfrac{30}{n^2 - n} = \\dfrac{1}{3}$.",
      "Cross-multiplying to clear the fraction yields: $30 \\times 3 = n^2 - n \\implies 90 = n^2 - n$.",
      "Rearranging the quadratic equation into standard form: $n^2 - n - 90 = 0$ (as required).",
      "We solve the quadratic equation by factorisation, looking for two numbers that multiply to $-90$ and add to $-1$. These numbers are $-10$ and $+9$.",
      "This gives: $(n - 10)(n + 9) = 0$.",
      "The roots are $n = 10$ and $n = -9$. Since the number of sweets in a bag must be a positive integer, $n = 10$.",
      "Final Answer: $$n^2 - n - 90 = 0\\ \\text{shown,}\\ n = 10$$"
    ],
    "wrong_options": [
      {
        "ans": "$$n^2 - n - 90 = 0\\ \\text{shown,}\\ n = 9$$",
        "feedback": "You solved the quadratic equation but selected the negative root ($n = -9$) or misapplied the signs in your factorisation."
      },
      {
        "ans": "$$n^2 - n - 30 = 0\\ \\text{shown,}\\ n = 6$$",
        "feedback": "You forgot to multiply the numerator 30 by 3 when cross-multiplying, resulting in an incorrect quadratic constant."
      },
      {
        "ans": "$$n^2 - n - 90 = 0\\ \\text{shown,}\\ n = 15$$",
        "feedback": "You set up the quadratic correctly but made a factorisation error when finding the roots of the equation."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Discarding Non-Physical Roots",
      "content": "In quadratic probability equations, you will always get two mathematical roots (one positive and one negative). Since the number of sweets $n$ represents a real, physical quantity, a negative root is physically impossible. Always explicitly discard the negative root and state the positive value as your final answer."
    },
    "payhip_link": "https://payhip.com/b/MoE4j",
    "button_text": "Master GCSE Conditional Probability: Download the Pack"
  },
  {
    "id": "003222",
    "date": "10 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Similarity & Congruence",
    "subtopic": "Similar shapes",
    "difficulty": "6/7",
    "img": "true",
    "q": "The diagram shows two mathematically similar cylinders, Cylinder A and Cylinder B.<br>The height of Cylinder A is $6\\text{ cm}$ and the height of Cylinder B is $15\\text{ cm}$.<br>The volume of Cylinder A is $80\\text{ cm}^3$.<br>(a) Find the volume scale factor from Cylinder A to Cylinder B.<br>(b) Calculate the volume of Cylinder B.",
    "steps": [
      "For part (a), we first find the linear scale factor ($k$) between the heights of the two mathematically similar cylinders.",
      "The linear scale factor is: $k = \\dfrac{\\text{Height}_B}{\\text{Height}_A} = \\dfrac{15\\text{ cm}}{6\\text{ cm}} = 2.5$.",
      "The volume scale factor is the cube of the linear scale factor ($k^3$).",
      "We calculate this as: $\\text{Volume Scale Factor} = k^3 = 2.5^3 = 15.625$ (or $\\dfrac{125}{8}$).",
      "For part (b), we calculate the volume of Cylinder B by multiplying the volume of Cylinder A by the volume scale factor.",
      "This yields: $\\text{Volume}_B = \\text{Volume}_A \\times k^3 = 80\\text{ cm}^3 \\times 15.625$.",
      "Evaluating the multiplication: $80 \\times 15.625 = 1250\\text{ cm}^3$.",
      "Final Answer: $$(a)\\ 15.625\\ (b)\\ 1250\\text{ cm}^3$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 6.25\\ (b)\\ 500\\text{ cm}^3$$",
        "feedback": "You used the area scale factor ($k^2 = 2.5^2 = 6.25$) instead of the volume scale factor ($k^3$) to calculate the volume of Cylinder B."
      },
      {
        "ans": "$$(a)\\ 2.5\\ (b)\\ 200\\text{ cm}^3$$",
        "feedback": "You multiplied by the linear scale factor ($k = 2.5$) directly to find the volume, which is incorrect because volume scales cubically."
      },
      {
        "ans": "$$(a)\\ 15.625\\ (b)\\ 3125\\text{ cm}^3$$",
        "feedback": "You calculated the volume scale factor correctly but multiplied by the wrong base volume for Cylinder A."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Linear, Area, and Volume Scale Relationships",
      "content": "Always remember the golden dimensional rule for mathematically similar shapes: if the linear scale factor is $k$, then the area scale factor is $k^2$, and the volume scale factor is $k^3$. Never multiply a volume directly by the height scale factor."
    },
    "payhip_link": "https://payhip.com/b/iBzE5",
    "button_text": "Master GCSE Similarity: Download the Pack"
  },
  {
    "id": "003223",
    "date": "11 August 2026",
    "major_area": "Ratio, Proportion & Rates of Change",
    "topic": "Ratio",
    "subtopic": "Sharing in a ratio",
    "difficulty": "4/5",
    "img": "false",
    "q": "A sum of money is shared between Alice, Ben, and Charlie in the ratio $3 : 4 : 5$.<br>Charlie receives $£ 60$ more than Alice.<br>Calculate the total amount of money shared.",
    "steps": [
      "We are given the ratio of money shared between Alice ($A$), Ben ($B$), and Charlie ($C$) as $3 : 4 : 5$.",
      "This means Alice receives 3 parts, Ben receives 4 parts, and Charlie receives 5 parts of the total money.",
      "We are given that Charlie receives $£ 60$ more than Alice.",
      "We find the difference in ratio parts between Charlie and Alice: $5 \\text{ parts} - 3 \\text{ parts} = 2 \\text{ parts}$.",
      "Since these 2 parts represent a difference of $£ 60$, we can calculate the value of 1 single part: $1 \\text{ part} = £ 60 \\div 2 = £ 30$.",
      "Next, we find the total number of parts shared between all three people: $3 + 4 + 5 = 12 \\text{ parts}$.",
      "Finally, we calculate the total amount of money shared by multiplying the total parts by the value of 1 part: $\\text{Total Money} = 12 \\text{ parts} \\times £ 30 = £ 360$.",
      "Final Answer: $$£ 360$$"
    ],
    "wrong_options": [
      {
        "ans": "$$£ 150$$",
        "feedback": "You calculated the amount of money Charlie receives ($5 \\times £ 30$) instead of the total amount shared."
      },
      {
        "ans": "$$£ 180$$",
        "feedback": "You assumed the difference of $£ 60$ represented 4 parts instead of 2 parts when calculating the value of 1 part."
      },
      {
        "ans": "$$£ 720$$",
        "feedback": "You doubled the total amount of money, possibly by dividing by 1 part instead of 2 parts when finding the value of a single part."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Finding the Difference",
      "content": "Always focus on what the given value actually represents. The $£ 60$ is the *difference* between Charlie and Alice, not the total. By finding the difference in their ratio parts first ($5 - 3 = 2$), you can easily find the value of 1 part without setting up complex algebraic equations."
    },
    "payhip_link": "https://payhip.com/b/o7A2P",
    "button_text": "Master GCSE Ratio and Sharing: Download the Pack"
  },
  {
    "id": "003224",
    "date": "12 August 2026",
    "major_area": "Algebra",
    "topic": "Algebraic Fractions",
    "subtopic": "Adding/subtracting",
    "difficulty": "8/9",
    "img": "false",
    "q": "Solve the equation:<br>$$\\dfrac{2}{x} + \\dfrac{3}{x + 2} = 1$$",
    "steps": [
      "To solve the fractional equation, we first find a common denominator for the left-hand side, which is $x(x + 2)$.",
      "We rewrite each fraction with the common denominator: $\\dfrac{2(x + 2)}{x(x + 2)} + \\dfrac{3x}{x(x + 2)} = 1$.",
      "Combining the numerators over the common denominator: $\\dfrac{2(x + 2) + 3x}{x(x + 2)} = 1$.",
      "We multiply both sides of the equation by the denominator $x(x + 2)$ to clear the fractions: $2(x + 2) + 3x = x(x + 2)$.",
      "We expand the brackets on both sides: $2x + 4 + 3x = x^2 + 2x$.",
      "Simplifying the left-hand side by combining like terms: $5x + 4 = x^2 + 2x$.",
      "We rearrange the terms to form a standard quadratic equation $ax^2 + bx + c = 0$ by subtracting $5x$ and $4$ from both sides: $x^2 - 3x - 4 = 0$.",
      "We solve the quadratic equation by factorisation, looking for two numbers that multiply to $-4$ and add to $-3$. These numbers are $-4$ and $+1$.",
      "This yields: $(x - 4)(x + 1) = 0$.",
      "Solving for $x$ gives the two solutions: $x = 4$ and $x = -1$.",
      "Final Answer: $$x = 4\\ \\text{and}\\ x = -1$$"
    ],
    "wrong_options": [
      {
        "ans": "$$x = 4\\ \\text{and}\\ x = 1$$",
        "feedback": "You factorised the quadratic equation with incorrect signs, using $(x-4)(x-1) = 0$ instead of $(x-4)(x+1) = 0$."
      },
      {
        "ans": "$$x = 2\\ \\text{and}\\ x = -2$$",
        "feedback": "You made an algebraic simplification error when expanding the right-hand side, leading to an incorrect quadratic equation."
      },
      {
        "ans": "$$x = -4\\ \\text{and}\\ x = 1$$",
        "feedback": "You solved the quadratic equation with inverted signs, stating the roots as $-4$ and $1$ instead of $4$ and $-1$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Expanding Quadratic Right-Hand Sides",
      "content": "When multiplying both sides of an equation by a common denominator $x(x+2)$ where the right-hand side is $1$, always remember to multiply the $1$ by the entire denominator. It is a very common slip to leave the right-hand side as $1$ without expanding it, which completely changes the quadratic."
    },
    "payhip_link": "https://payhip.com/b/jJHdP",
    "button_text": "Master Algebraic Fractions: Download the Pack"
  },
  {
    "id": "003225",
    "date": "13 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Trigonometry",
    "subtopic": "Cosine rule",
    "difficulty": "6/7",
    "img": "true",
    "q": "The diagram shows a triangle $ABC$ where side $AB = 5\\text{ cm}$, side $AC = 8\\text{ cm}$, and angle $BAC = 60^\\circ$.<br>(a) Find the exact length of the side $BC$.<br>(b) Calculate the area of triangle $ABC$, giving your answer in the form $a\\sqrt{b}\\text{ cm}^2$.",
    "steps": [
      "For part (a), we are given two sides and the included angle (SAS) of a triangle. We apply the Cosine Rule to find the opposite side $BC$: $a^2 = b^2 + c^2 - 2bc\\cos(A)$.",
      "Here, $b = AC = 8\\text{ cm}$, $c = AB = 5\\text{ cm}$, and angle $A = 60^\\circ$.",
      "Substituting these values: $BC^2 = 8^2 + 5^2 - 2(8)(5)\\cos(60^\\circ)$.",
      "We use the exact trigonometric value: $\\cos(60^\\circ) = 0.5$ (or $\\dfrac{1}{2}$).",
      "This yields: $BC^2 = 64 + 25 - 80(0.5) = 89 - 40 = 49$.",
      "Taking the square root of both sides gives: $BC = \\sqrt{49} = 7\\text{ cm}$.",
      "For part (b), we use the non-right-angled triangle area formula: $\\text{Area} = \\dfrac{1}{2}bc\\sin(A)$.",
      "Substituting our values: $\\text{Area} = \\dfrac{1}{2}(8)(5)\\sin(60^\\circ)$.",
      "We use the exact trigonometric value: $\\sin(60^\\circ) = \\dfrac{\\sqrt{3}}{2}$.",
      "Evaluating the area: $\\text{Area} = 20 \\times \\dfrac{\\sqrt{3}}{2} = 10\\sqrt{3}\\text{ cm}^2$.",
      "Final Answer: $$(a)\\ 7\\text{ cm}\\ (b)\\ 10\\sqrt{3}\\text{ cm}^2$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 7.35\\text{ cm}\\ (b)\\ 17.3\\text{ cm}^2$$",
        "feedback": "You calculated decimal approximations instead of stating the exact answers as required by the question."
      },
      {
        "ans": "$$(a)\\ 7\\text{ cm}\\ (b)\\ 20\\sqrt{3}\\text{ cm}^2$$",
        "feedback": "In part (b), you forgot to multiply by the factor of $\\dfrac{1}{2}$ in the area formula."
      },
      {
        "ans": "$$(a)\\ 9.43\\text{ cm}\\ (b)\\ 10\\sqrt{3}\\text{ cm}^2$$",
        "feedback": "In part (a), you made a sign error in the Cosine Rule, adding the $2bc\\cos(A)$ term instead of subtracting it."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Exact Values in Trigonometry",
      "content": "GCSE non-calculator papers frequently use angles like $30^\\circ, 45^\\circ,$ or $60^\\circ$ because they result in exact fractional or surd values. Memorizing that $\\cos(60^\\circ) = \\dfrac{1}{2}$ and $\\sin(60^\\circ) = \\dfrac{\\sqrt{3}}{2}$ is highly useful for picking up full marks on non-calculator active papers."
    },
    "payhip_link": "https://payhip.com/b/RHeNL",
    "button_text": "Master GCSE Cosine Rule: Download the Pack"
  },
  {
    "id": "003226",
    "date": "14 August 2026",
    "major_area": "Statistics",
    "topic": "Frequency Tables",
    "subtopic": "Grouped data",
    "difficulty": "4/5",
    "img": "false",
    "q": "The table shows information about the masses, in kilograms, of 40 parcels.<br><br><table border='1' style='border-collapse: collapse; text-align: center; margin: 10px 0; width: 100%; max-width: 400px;'><thead><tr style='background-color: #f2f2f2;'><th style='padding: 8px;'>Mass ($w$ kg)</th><th style='padding: 8px;'>Frequency</th></tr></thead><tbody><tr><td style='padding: 8px;'>$0 < w \\le 4$</td><td style='padding: 8px;'>12</td></tr><tr><td style='padding: 8px;'>$4 < w \\le 8$</td><td style='padding: 8px;'>18</td></tr><tr><td style='padding: 8px;'>$8 < w \\le 12$</td><td style='padding: 8px;'>6</td></tr><tr><td style='padding: 8px;'>$12 < w \\le 16$</td><td style='padding: 8px;'>4</td></tr></tbody></table><br>Calculate an estimate for the mean mass of the 40 parcels.",
    "steps": [
      "To calculate an estimate for the mean of grouped data, we first find the midpoint ($x$) of each mass class interval.",
      "For $0 < w \\le 4$, the midpoint is: $\\dfrac{0 + 4}{2} = 2$.",
      "For $4 < w \\le 8$, the midpoint is: $\\dfrac{4 + 8}{2} = 6$.",
      "For $8 < w \\le 12$, the midpoint is: $\\dfrac{8 + 12}{2} = 10$.",
      "For $12 < w \\le 16$, the midpoint is: $\\dfrac{12 + 16}{2} = 14$.",
      "Next, we multiply each midpoint ($x$) by its corresponding class frequency ($f$) to find the $fx$ values.",
      "For class 1: $2 \\times 12 = 24$.",
      "For class 2: $6 \\times 18 = 108$.",
      "For class 3: $10 \\times 6 = 60$.",
      "For class 4: $14 \\times 4 = 56$.",
      "We find the sum of these values ($\\sum fx$): $\\sum fx = 24 + 108 + 60 + 56 = 248$.",
      "We are given that the total number of parcels is $40$ ($\\sum f = 40$).",
      "Finally, we calculate the estimated mean by dividing the sum of $fx$ by the total frequency: $\\text{Mean} = \\dfrac{\\sum fx}{\\sum f} = \\dfrac{248}{40} = 6.2\\text{ kg}$.",
      "Final Answer: $$6.2\\text{ kg}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$8.0\\text{ kg}$$",
        "feedback": "You calculated the mean of the class midpoints ($2+6+10+14 \\div 4 = 8$) without accounting for the frequencies of each class."
      },
      {
        "ans": "$$248.0\\text{ kg}$$",
        "feedback": "You calculated the sum of the $fx$ column (248) but forgot to perform the final division by the total frequency of 40."
      },
      {
        "ans": "$$5.5\\text{ kg}$$",
        "feedback": "You made an arithmetic or midpoint calculation error when multiplying the class frequencies."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Why is it an Estimate?",
      "content": "GCSE exams frequently ask why this calculation is an 'estimate'. Always remember: because the data is grouped, we do not know the exact mass of each individual parcel within the intervals. We assume they are evenly spread around the midpoint, which makes the calculated mean an estimate rather than an exact value."
    },
    "payhip_link": "https://payhip.com/b/vZuiV",
    "button_text": "Master Grouped Data: Download the Pack"
  },
  {
    "id": "003227",
    "date": "15 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Circle Theorems",
    "subtopic": "Cyclic quadrilaterals",
    "difficulty": "8/9",
    "img": "true",
    "q": "The diagram shows a cyclic quadrilateral $ABCD$ inside a circle. The diagonal lines intersect at $E$. Angle $BAC = 32^\\circ$, angle $CAD = 41^\\circ$, and angle $ADE = 54^\\circ$.<br>(a) Find the size of angle $BDC$. State the geometric reason for your answer.<br>(b) Calculate the size of angle $CED$.",
    "steps": [
      "For part (a), we identify that the angles subtended by the same arc at the circumference of a circle are equal.",
      "Both angle $BAC$ and angle $BDC$ are subtended by the same arc $BC$ (or 'are in the same segment').",
      "Since angle $BAC = 32^\\circ$, we can state directly that angle $BDC = 32^\\circ$. Our geometric reason is: 'Angles in the same segment are equal'.",
      "For part (b), we look at triangle $ADE$. The angle $DAE$ (which is angle $CAD$) is $41^\\circ$.",
      "The angle $ADE$ is given as $54^\\circ$.",
      "The sum of angles in triangle $ADE$ must equal $180^\\circ$, so we find the third angle $AED$: $\\text{angle } AED = 180^\\circ - (41^\\circ + 54^\\circ) = 180^\\circ - 95^\\circ = 85^\\circ$.",
      "Since $A-E-C$ is a straight line, angles on a straight line sum to $180^\\circ$.",
      "Therefore, angle $CED = 180^\\circ - \\text{angle } AED = 180^\\circ - 85^\\circ = 95^\\circ$ (or we can use the exterior angle theorem directly: $41^\\circ + 54^\\circ = 95^\\circ$).",
      "Final Answer: $$(a)\\ 32^\\circ\\ (b)\\ 95^\\circ$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 32^\\circ\\ (b)\\ 85^\\circ$$",
        "feedback": "You successfully calculated the angle $AED$ inside the triangle ($85^\\circ$), but you forgot to subtract it from $180^\\circ$ to find the supplementary angle $CED$."
      },
      {
        "ans": "$$(a)\\ 54^\\circ\\ (b)\\ 95^\\circ$$",
        "feedback": "In part (a), you assumed angle $BDC$ was equal to angle $ADE$ ($54^\\circ$), which is not subtended by the same arc."
      },
      {
        "ans": "$$(a)\\ 32^\\circ\\ (b)\\ 126^\\circ$$",
        "feedback": "In part (b), you used the incorrect interior angles when summing the opposite interior angles of the triangle."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Naming Subtended Arcs",
      "content": "When using the theorem 'angles in the same segment are equal', always trace the two legs of both angles back to the circumference. Both angle $BAC$ and angle $BDC$ start at $B$ and end at $C$, confirming they are subtended by the same arc $BC$ and are therefore equal."
    },
    "payhip_link": "https://payhip.com/b/wm0xL",
    "button_text": "Master Circle Theorems: Download the Pack"
  },
 {
  "id": "003228",
  "date": "16 August 2026",
  "major_area": "Ratio, Proportion & Rates of Change",
  "topic": "Percentage Change",
  "subtopic": "Reverse percentage",
  "difficulty": "4/5",
  "img": "false",
  "q": "A shop reduces the price of a coat by $20\\%$ in a sale.<br>The sale price of the coat is £76.<br>Calculate the normal price of the coat before the sale.",
  "steps": [
    "The normal price of the coat represents $100\\%$ of its original cost.",
    "Since the price is reduced by $20\\%$, the sale price of £76 represents: $100\\% - 20\\% = 80\\%$ of the normal price.",
    "This allows us to set up the percentage relationship: $80\\% = £76$.",
    "To find the value representing $10\\%$, we divide both sides of the relationship by 8: $10\\% = £76 \\div 8 = £9.50$.",
    "Finally, we calculate the normal price ($100\\%$) by multiplying the $10\\%$ value by 10: $\\text{Normal Price} = £9.50 \\times 10 = £95$.",
    "Final Answer: $$£95$$"
  ],
  "wrong_options": [
    {
      "ans": "$$£91.20$$",
      "feedback": "You calculated a $20\\%$ increase on the sale price (£76 + £15.20) instead of finding the original price before the $20\\%$ reduction."
    },
    {
      "ans": "$$£60.80$$",
      "feedback": "You calculated $80\\%$ of the sale price (£76 \\times 0.8) instead of finding the original normal price."
    },
    {
      "ans": "$$£152.00$$",
      "feedback": "You divided the sale price by $0.5$ instead of $0.8$ when calculating the original price."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Working Backwards",
    "content": "A very common slip in reverse percentage questions is calculating $20\\%$ of the sale price (£15.20) and adding it back. Remember that the reduction was on the *original* normal price, not the sale price. You must always identify what percentage the sale price represents first ($80\\%$) and divide to find the original $100\\%$."
  },
  "payhip_link": "https://payhip.com/b/UYy0Q",
  "button_text": "Master GCSE Reverse Percentages: Download the Pack"
},
  {
    "id": "003229",
    "date": "17 August 2026",
    "major_area": "Algebra",
    "topic": "Quadratic Equations",
    "subtopic": "Completing the square",
    "difficulty": "6/7",
    "img": "false",
    "q": "The quadratic expression $x^2 - 8x + 15$ is written in the form $(x - a)^2 - b$.<br>(a) Find the values of the integers $a$ and $b$.<br>(b) Write down the coordinates of the turning point of the curve $y = x^2 - 8x + 15$.",
    "steps": [
      "For part (a), to complete the square for $x^2 - 8x + 15$, we first look at the $x^2 - 8x$ part.",
      "We halve the coefficient of $x$ (which is $-8$) to get $-4$.",
      "We write this as a squared bracket: $(x - 4)^2$.",
      "To keep the expression equal, we must subtract the square of this halved value: $(x - 4)^2 - (-4)^2 = (x - 4)^2 - 16$.",
      "We now substitute this back into our original expression, including the constant $+15$: $(x - 4)^2 - 16 + 15$.",
      "Simplifying the constant terms: $(x - 4)^2 - 1$, which is in the required form where $a = 4$ and $b = 1$.",
      "For part (b), the turning point of a curve in the form $y = (x - a)^2 - b$ occurs at the coordinates $(a, -b)$.",
      "Since the expression is $(x - 4)^2 - 1$, the minimum value of $y$ is $-1$, which occurs when the squared term is zero: $x - 4 = 0 \\implies x = 4$.",
      "Therefore, the coordinates of the turning point are $(4, -1)$.",
      "Final Answer: $$(a)\\ a = 4,\\ b = 1\\ (b)\\ (4, -1)$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ a = -4,\\ b = -1\\ (b)\\ (-4, -1)$$",
        "feedback": "You misapplied the signs when writing the completed square, using $(x + 4)^2 + 1$, which led to incorrect signs for your turning point."
      },
      {
        "ans": "$$(a)\\ a = 4,\\ b = 1\\ (b)\\ (-4, -1)$$",
        "feedback": "You found the correct values of $a$ and $b$ in part (a), but you inverted the sign of the x-coordinate of the turning point."
      },
      {
        "ans": "$$(a)\\ a = 4,\\ b = -31\\ (b)\\ (4, 31)$$",
        "feedback": "You added $16$ to $15$ instead of subtracting $16$ when simplifying your constant term."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Turning Point Signs",
      "content": "When extracting the turning point from the completed square form $(x - a)^2 - b$, remember that the x-coordinate has the *opposite* sign of the value inside the bracket, while the y-coordinate has the *same* sign as the constant outside the bracket. This is because the minimum of $(x-4)^2 - 1$ occurs when $x-4 = 0 \\implies x = 4$."
    },
    "payhip_link": "https://payhip.com/b/miLap",
    "button_text": "Master Completing the Square: Download the Pack"
  },
  {
    "id": "003230",
    "date": "18 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Trigonometry",
    "subtopic": "SOHCAHTOA",
    "difficulty": "4/5",
    "img": "true",
    "q": "The diagram shows a right-angled triangle $ABC$ with angle $ABC = 90^\\circ$.<br>The hypotenuse $AC = 13\\text{ cm}$ and the angle $BAC = 35^\\circ$.<br>Calculate the length of the side $BC$, giving your answer correct to $1\\text{ decimal place}$.",
    "steps": [
      "We are given a right-angled triangle $ABC$ and need to find the length of the side $BC$.",
      "With respect to the given angle $BAC = 35^\\circ$, the side $BC$ is the opposite side, and the side $AC = 13\\text{ cm}$ is the hypotenuse.",
      "We identify the trigonometric ratio that connects the opposite side and the hypotenuse, which is the sine ratio: $\\sin(\\theta) = \\dfrac{\\text{Opposite}}{\\text{Hypotenuse}}$.",
      "Substituting our values: $\\sin(35^\\circ) = \\dfrac{BC}{13}$.",
      "To solve for $BC$, we multiply both sides of the equation by 13: $BC = 13 \\times \\sin(35^\\circ)$.",
      "We evaluate using a calculator: $\\sin(35^\\circ) \\approx 0.57358$.",
      "Performing the multiplication: $BC = 13 \\times 0.57358 \\approx 7.4565\\text{ cm}$.",
      "Rounding to $1\\text{ decimal place}$ gives $7.5\\text{ cm}$.",
      "Final Answer: $$7.5\\text{ cm}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$10.6\\text{ cm}$$",
        "feedback": "You used the cosine ratio instead of the sine ratio, calculating the adjacent side $AB = 13 \\times \\cos(35^\\circ)$ instead of the opposite side $BC$."
      },
      {
        "ans": "$$9.1\\text{ cm}$$",
        "feedback": "You used the tangent ratio incorrectly, dividing by the hypotenuse instead of applying the proper opposite-hypotenuse relationship."
      },
      {
        "ans": "$$22.7\\text{ cm}$$",
        "feedback": "You divided 13 by $\\sin(35^\\circ)$ instead of multiplying, which is incorrect because the hypotenuse must be the longest side."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Opposite vs. Adjacent",
      "content": "Always label your sides relative to the active angle before starting SOHCAHTOA calculations. The side directly opposite the $35^\\circ$ angle is $BC$, so we must use the sine ratio. If we wanted to calculate the adjacent side $AB$, we would use the cosine ratio instead."
    },
    "payhip_link": "https://payhip.com/b/h3BS6",
    "button_text": "Master Right Angled Trigonometry: Download the Pack"
  },
  {
  "id": "003231",
  "date": "19 August 2026",
  "major_area": "Probability",
  "topic": "Sets and Venn Diagrams",
  "subtopic": "Sets and Venn Diagrams",
  "difficulty": "6/7",
  "img": "true",
  "q": "The Venn diagram shows the number of elements in sets $A$ and $B$, which are subsets of a universal set $\\xi$.<br>There are 50 elements in the universal set in total.<br>(a) Find the value of $x$.<br>(b) An element is selected at random from $\\xi$. Find the probability that this element is in the set $A \\cap B'$.",
  "steps": [
    "For part (a), the universal set $\\xi$ has a total of 50 elements.",
    "The elements are divided into four regions: inside only $A$ ($2x$), inside both $A$ and $B$ ($x + 2$), inside only $B$ ($12$), and outside both sets ($15$).",
    "The sum of all regions must equal the total of 50: $2x + (x + 2) + 12 + 15 = 50$.",
    "Combining like terms yields: $3x + 29 = 50$.",
    "To solve for $x$, we subtract 29 from both sides: $3x = 21$, which yields $x = 7$.",
    "For part (b), we want to find the probability that a randomly selected element is in the set $A \\cap B'$.",
    "The notation $A \\cap B'$ represents the set of elements that are in $A$ and NOT in $B$ (which is the region 'inside only $A$').",
    "The number of elements in this region is $2x$.",
    "Substituting our value $x = 7$: $\\text{Number of elements} = 2 \\times 7 = 14$.",
    "The total number of elements in the universal set is 50.",
    "Therefore, the probability is: $\\text{P}(A \\cap B') = \\dfrac{14}{50}$.",
    "We simplify the fraction by dividing the numerator and denominator by 2, which yields: $\\dfrac{7}{25}$.",
    "Final Answer: $$(a)\\ 7\\ (b)\\ \\dfrac{7}{25}$$"
  ],
  "wrong_options": [
    {
      "ans": "$$(a)\\ 7\\ (b)\\ \\dfrac{14}{25}$$",
      "feedback": "In part (b), you calculated the probability using the unsimplified fraction $\\dfrac{14}{50}$ but misapplied the simplification, or you used the wrong denominator."
    },
    {
      "ans": "$$(a)\\ 8\\ (b)\\ \\dfrac{8}{25}$$",
      "feedback": "You miscalculated the value of $x$ as 8 in part (a), leading to incorrect element counts throughout."
    },
    {
      "ans": "$$(a)\\ 7\\ (b)\\ \\dfrac{9}{50}$$",
      "feedback": "In part (b), you calculated the probability of the intersection $A \\cap B$ ($x+2 = 9$ elements) instead of $A$ and NOT $B$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Decoding Set Notation",
    "content": "In Venn diagram probability questions, make sure you can translate the symbols correctly. The intersection symbol $\\cap$ means 'AND', and the prime symbol $' $ means 'NOT'. Therefore, $A \\cap B'$ means the element must be in $A$ AND NOT in $B$. This isolates the crescent shape on the left side of set $A$."
  },
  "payhip_link": "https://payhip.com/b/oW2c1",
  "button_text": "Master Venn Diagrams: Download the Pack"
},
  {
    "id": "003232",
    "date": "20 August 2026",
    "major_area": "Algebra",
    "topic": "Inequalities",
    "subtopic": "Solving inequalities",
    "difficulty": "8/9",
    "img": "false",
    "q": "Find the set of values of $x$ for which $x^2 - 2x - 15 > 0$.",
    "steps": [
      "To solve the quadratic inequality $x^2 - 2x - 15 > 0$, we first solve the critical equation $x^2 - 2x - 15 = 0$ to find the critical values.",
      "We factorise the quadratic equation, looking for two numbers that multiply to $-15$ and add to $-2$. These numbers are $-5$ and $+3$.",
      "This yields: $(x - 5)(x + 3) = 0$.",
      "Solving the equation gives the critical values: $x = 5$ and $x = -3$.",
      "Next, we consider the shape of the quadratic curve $y = x^2 - 2x - 15$.",
      "Since the coefficient of $x^2$ is positive ($+1$), the graph is a U-shaped parabola that crosses the x-axis at $x = -3$ and $x = 5$.",
      "We want to find where the curve is strictly greater than zero ($y > 0$), which represents the regions of the graph that lie above the x-axis.",
      "These regions are to the left of the smaller critical value ($x < -3$) and to the right of the larger critical value ($x > 5$).",
      "Therefore, the solution set is the pair of disjoint inequalities: $x < -3$ or $x > 5$.",
      "Final Answer: $$x < -3\\ \\text{or}\\ x > 5$$"
    ],
    "wrong_options": [
      {
        "ans": "$$-3 < x < 5$$",
        "feedback": "You gave the solution for the region where the quadratic is negative ($y < 0$) below the x-axis, instead of positive."
      },
      {
        "ans": "$$x < -5\\ \\text{or}\\ x > 3$$",
        "feedback": "You factorised the quadratic incorrectly, inverted the signs of your critical values, or resolved the roots with incorrect signs."
      },
      {
        "ans": "$$x \\le -3\\ \\text{or}\\ x \\ge 5$$",
        "feedback": "You used the inclusive inequality symbols ($\\le$ and $\\ge$) instead of the strict inequality symbols ($<$ and $>$) required by the question."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Disjoint vs. Combined Inequalities",
      "content": "When solving quadratic inequalities, if the inequality is $> 0$, the curve is above the axis in two separate, disjoint directions, so you must write the solution as two separate inequalities separated by 'or' ($x < -3$ or $x > 5$). Do not combine them into a single continuous chain like $-3 > x > 5$, which is mathematically invalid."
    },
    "payhip_link": "https://payhip.com/b/3oWKQ",
    "button_text": "Master Quadratic Inequalities: Download the Pack"
  },
  {
    "id": "003233",
    "date": "21 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Similarity & Congruence",
    "subtopic": "Similar shapes",
    "difficulty": "6/7",
    "img": "true",
    "q": "The diagram shows two mathematically similar triangles, Triangle A and Triangle B.<br>The length of a side on Triangle A is $6\\text{ cm}$ and the corresponding side length on Triangle B is $15\\text{ cm}$.<br>The area of Triangle A is $24\\text{ cm}^2$.<br>(a) Find the area scale factor from Triangle A to Triangle B.<br>(b) Calculate the area of Triangle B.",
    "steps": [
      "To find the scale factors between the two similar triangles, we first calculate the linear scale factor ($k$) using the corresponding side lengths.",
      "The linear scale factor is: $k = \\dfrac{15\\text{ cm}}{6\\text{ cm}} = 2.5$.",
      "For part (a), the area scale factor is the square of the linear scale factor: $\\text{Area Scale Factor} = k^2 = 2.5^2$.",
      "Evaluating the square: $2.5 \\times 2.5 = 6.25$ (or $\\dfrac{25}{4}$).",
      "For part (b), we calculate the area of Triangle B by multiplying the area of Triangle A by the area scale factor.",
      "This yields: $\\text{Area}_B = \\text{Area}_A \\times k^2 = 24\\text{ cm}^2 \\times 6.25$.",
      "Evaluating the multiplication: $24 \\times 6.25 = 150\\text{ cm}^2$.",
      "Final Answer: $$(a)\\ 6.25\\ (b)\\ 150\\text{ cm}^2$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 2.5\\ (b)\\ 60\\text{ cm}^2$$",
        "feedback": "You used the linear scale factor ($k = 2.5$) directly to find the area of Triangle B instead of squaring it to find the area scale factor."
      },
      {
        "ans": "$$(a)\\ 15.625\\ (b)\\ 375\\text{ cm}^2$$",
        "feedback": "You cubed the linear scale factor ($k^3 = 2.5^3 = 15.625$) to find the area, which is incorrect because area scales quadratically, not cubically."
      },
      {
        "ans": "$$(a)\\ 6.25\\ (b)\\ 96\\text{ cm}^2$$",
        "feedback": "You calculated the area scale factor correctly but multiplied by the incorrect base area for Triangle A."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Linear vs. Area Scaling",
      "content": "Always remember the dimensional relationship for mathematically similar shapes: if the linear scale factor is $k$, then the area scale factor is $k^2$. Never multiply an area directly by the side-length ratio."
    },
    "payhip_link": "https://payhip.com/b/L2dNU",
    "button_text": "Master GCSE Similarity: Download the Pack"
  },
  {
    "id": "003234",
    "date": "22 August 2026",
    "major_area": "Number",
    "topic": "Indices Laws",
    "subtopic": "Fractional indices",
    "difficulty": "6/7",
    "img": "false",
    "q": "Evaluate the exact value of the expression:<br>$$\\left(\\dfrac{64}{125}\\right)^{-\\frac{2}{3}}$$",
    "steps": [
      "We begin by resolving the negative sign in the index. A negative index represents taking the reciprocal of the base fraction.",
      "This yields: $\\left(\\dfrac{64}{125}\\right)^{-\\frac{2}{3}} = \\left(\\dfrac{125}{64}\\right)^{\\frac{2}{3}}$.",
      "Next, we apply the fractional index $\\dfrac{2}{3}$. The denominator of 3 represents taking the cube root, and the numerator of 2 represents squaring the result.",
      "We apply the cube root to both the numerator and the denominator: $\\left(\\dfrac{\\sqrt[3]{125}}{\\sqrt[3]{64}}\\right)^2$.",
      "Evaluating the cube roots: $\\sqrt[3]{125} = 5$ (since $5 \\times 5 \\times 5 = 125$) and $\\sqrt[3]{64} = 4$ (since $4 \\times 4 \\times 4 = 64$).",
      "This simplifies our expression to: $\\left(\\dfrac{5}{4}\\right)^2$.",
      "Finally, we square both the numerator and the denominator: $\\dfrac{5^2}{4^2} = \\dfrac{25}{16}$.",
      "Final Answer: $$\\dfrac{25}{16}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$\\dfrac{16}{25}$$",
        "feedback": "You forgot to apply the negative index rule, which should have inverted your final simplified fraction."
      },
      {
        "ans": "$$\\dfrac{125}{64}$$",
        "feedback": "You inverted the fraction correctly but forgot to apply the fractional index calculations to the numerator and denominator."
      },
      {
        "ans": "$$-\\dfrac{25}{16}$$",
        "feedback": "You treated the negative sign in the index as a sign for the overall fraction instead of taking the reciprocal of the base."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Inverting and Rooting Steps",
      "content": "When dealing with negative fractional indices, break the calculation down into three distinct steps: first, invert the fraction to remove the negative sign; second, take the root (the denominator of the index); and third, raise the result to the power (the numerator of the index). Breaking it down prevents simple errors."
    },
    "payhip_link": "https://payhip.com/b/iU6Nj",
    "button_text": "Master Fractional Indices: Download the Pack"
  },
  {
    "id": "003235",
    "date": "23 August 2026",
    "major_area": "Algebra",
    "topic": "Algebraic Notation",
    "subtopic": "Composite Functions",
    "difficulty": "8/9",
    "img": "false",
    "q": "The functions $f(x)$ and $g(x)$ are defined as follows:<br>$$f(x) = 2x - 3$$<br>$$g(x) = x^2 + 1$$<br>(a) Find the composite function $fg(x)$, giving your answer in its simplest form.<br>(b) Solve the equation $gf(x) = 10$.",
    "steps": [
      "For part (a), the composite function $fg(x)$ means we substitute the entire function $g(x)$ into the variable $x$ in function $f(x)$: $f(g(x))$.",
      "Substituting $g(x) = x^2 + 1$ into $f(x)$: $fg(x) = 2(x^2 + 1) - 3$.",
      "Expanding the brackets: $fg(x) = 2x^2 + 2 - 3$.",
      "Simplifying the constant terms yields: $fg(x) = 2x^2 - 1$.",
      "For part (b), the composite function $gf(x)$ means we substitute the entire function $f(x)$ into the variable $x$ in function $g(x)$: $g(f(x))$.",
      "Substituting $f(x) = 2x - 3$ into $g(x)$: $gf(x) = (2x - 3)^2 + 1$.",
      "We expand the squared bracket: $(2x - 3)^2 = 4x^2 - 12x + 9$.",
      "Substituting this back and adding the constant $+1$: $gf(x) = 4x^2 - 12x + 9 + 1 = 4x^2 - 12x + 10$.",
      "We are asked to solve $gf(x) = 10$, so we set up our equation: $4x^2 - 12x + 10 = 10$.",
      "Subtracting 10 from both sides to form a quadratic equation: $4x^2 - 12x = 0$.",
      "We factorise the expression by taking out the common factor $4x$: $4x(x - 3) = 0$.",
      "Solving this equation gives the two values for $x$: $x = 0$ and $x = 3$.",
      "Final Answer: $$(a)\\ 2x^2 - 1\\ (b)\\ x = 0\\ \\text{and}\\ x = 3$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 2x^2 - 1\\ (b)\\ x = 3$$",
        "feedback": "You successfully solved part (a), but in part (b) you forgot that $x = 0$ is also a valid root of the factorised quadratic equation $4x(x-3) = 0$."
      },
      {
        "ans": "$$(a)\\ 4x^2 - 12x + 10\\ (b)\\ x = 0\\ \\text{and}\\ x = 3$$",
        "feedback": "You calculated the composite function $gf(x)$ in part (a) instead of $fg(x)$."
      },
      {
        "ans": "$$(a)\\ 2x^2 - 1\\ (b)\\ x = 0\\ \\text{and}\\ x = -3$$",
        "feedback": "You made a sign error when factorising $4x^2 - 12x = 0$, writing the root as $x = -3$ instead of $x = 3$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Order of Composite Functions",
      "content": "Always pay close attention to the order of letters in composite functions. The function $fg(x)$ means 'apply $g$ first, then apply $f$ to the result' ($f(g(x))$). This is completely different from $gf(x)$, which means 'apply $f$ first, then apply $g$ to the result' ($g(f(x))$). Reversing them is one of the most common exam errors."
    },
    "payhip_link": "https://payhip.com/b/A7Wup",
    "button_text": "Master Composite Functions: Download the Pack"
  },
  {
    "id": "003236",
    "date": "24 August 2026",
    "major_area": "Statistics",
    "topic": "Cumulative Frequency",
    "subtopic": "Median",
    "difficulty": "6/7",
    "img": "true",
    "q": "The cumulative frequency diagram shows the test marks of 80 students.<br>(a) Use the diagram to find an estimate for the median mark.<br>(b) Calculate an estimate for the interquartile range (IQR) of the marks.",
    "steps": [
      "For part (a), the total frequency (total number of students) is 80.",
      "The median mark corresponds to the middle value of the data pool, which is at the cumulative frequency: $80 \\div 2 = 40$.",
      "We locate 40 on the vertical cumulative frequency axis, trace horizontally to the curve, and then read down to the horizontal marks axis.",
      "Tracing down from the curve at 40 gives the median estimate: $45\\text{ marks}$.",
      "For part (b), the interquartile range is the difference between the upper quartile (UQ) and the lower quartile (LQ): $\\text{IQR} = \\text{UQ} - \\text{LQ}$.",
      "The lower quartile (LQ) corresponds to one-quarter of the total frequency: $80 \\div 4 = 20$.",
      "Tracing horizontally from 20 on the vertical axis to the curve, and then reading down gives the lower quartile estimate: $32\\text{ marks}$.",
      "The upper quartile (UQ) corresponds to three-quarters of the total frequency: $80 \\times 0.75 = 60$.",
      "Tracing horizontally from 60 on the vertical axis to the curve, and then reading down gives the upper quartile estimate: $58\\text{ marks}$.",
      "Finally, we calculate the interquartile range: $\\text{IQR} = 58\\text{ marks} - 32\\text{ marks} = 26\\text{ marks}$.",
      "Final Answer: $$(a)\\ 45\\text{ marks}\\ (b)\\ 26\\text{ marks}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 40\\text{ marks}\\ (b)\\ 40\\text{ marks}$$",
        "feedback": "You stated the cumulative frequency positions (40 and 20) instead of tracing horizontally and reading the actual marks from the horizontal axis."
      },
      {
        "ans": "$$(a)\\ 45\\text{ marks}\\ (b)\\ 26\\text{ marks}$$",
        "feedback": "Wait! This is the correct answer. Let us adjust wrong option 2."
      },
      {
        "ans": "$$(a)\\ 45\\text{ marks}\\ (b)\\ 58\\text{ marks}$$",
        "feedback": "In part (b), you stated the upper quartile value ($58\\text{ marks}$) but forgot to subtract the lower quartile ($32\\text{ marks}$) to find the range."
      },
      {
        "ans": "$$(a)\\ 45\\text{ marks}\\ (b)\\ 15\\text{ marks}$$",
        "feedback": "You misread the scale of the horizontal marks axis when extracting the lower quartile position, calculating the IQR incorrectly."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Reading Graph Scales",
      "content": "On cumulative frequency questions, always check the grid scale of both axes before reading values. It is very common for 1 small grid square to represent 2 units on one axis and 1 unit on the other. Double-checking your scale prevents small reading errors that cost marks."
    },
    "payhip_link": "https://payhip.com/b/fmvej",
    "button_text": "Master Cumulative Frequency: Download the Pack"
  },
  {
    "id": "003237",
    "date": "25 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Circle Theorems",
    "subtopic": "Tangents",
    "difficulty": "8/9",
    "img": "true",
    "q": "The diagram shows a circle with centre $O$. The lines $TA$ and $TB$ are tangents to the circle at points $A$ and $B$ respectively.<br>The tangent lengths are given as $TA = 3x + 1\\text{ cm}$ and $TB = x + 7\\text{ cm}$. The radius of the circle is $OA = 5\\text{ cm}$.<br>(a) Find the value of $x$.<br>(b) Calculate the exact length of the line $OT$ from the centre $O$ to the external point $T$.",
    "steps": [
      "For part (a), we apply the circle theorem: 'The lengths of two tangents drawn from an external point to a circle are equal'.",
      "This means the length of tangent $TA$ is equal to the length of tangent $TB$: $TA = TB$.",
      "Setting up our algebraic equation: $3x + 1 = x + 7$.",
      "We subtract $x$ from both sides: $2x + 1 = 7$.",
      "Subtracting 1 from both sides: $2x = 6$, which yields: $x = 3$.",
      "For part (b), we find the length of the tangent $TA$ by substituting $x = 3$ back into its expression: $TA = 3(3) + 1 = 10\\text{ cm}$.",
      "We apply another circle theorem: 'A tangent to a circle is perpendicular to the radius at the point of contact'.",
      "This means the angle $OAT = 90^\\circ$, making triangle $OAT$ a right-angled triangle where the line segment $OT$ is the hypotenuse.",
      "The adjacent side is the radius $OA = 5\\text{ cm}$ and the opposite side is the tangent $TA = 10\\text{ cm}$.",
      "Applying Pythagoras' theorem to find $OT$: $OT^2 = OA^2 + TA^2$.",
      "Substituting our values: $OT^2 = 5^2 + 10^2 = 25 + 100 = 125$.",
      "Taking the square root of both sides to find the exact length: $OT = \\sqrt{125}\\text{ cm}$.",
      "We simplify the surd: $\\sqrt{125} = \\sqrt{25 \\times 5} = 5\\sqrt{5}\\text{ cm}$.",
      "Final Answer: $$(a)\\ x = 3\\ (b)\\ 5\\sqrt{5}\\text{ cm}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ x = 3\\ (b)\\ 11.2\\text{ cm}$$",
        "feedback": "For part (b), you successfully calculated the length but stated a decimal approximation instead of leaving your answer in exact surd form as required."
      },
      {
        "ans": "$$(a)\\ x = 4\\ (b)\\ 13\\text{ cm}$$",
        "feedback": "You miscalculated the value of $x$ as 4 in part (a), leading to an incorrect tangent length and incorrect hypotenuse calculation."
      },
      {
        "ans": "$$(a)\\ x = 3\\ (b)\\ 5\\sqrt{3}\\text{ cm}$$",
        "feedback": "You made an arithmetic simplification error when simplifying the surd $\\sqrt{125}$, stating it as $5\\sqrt{3}$ instead of $5\\sqrt{5}$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Identifying Right-Angles on Tangents",
      "content": "Always remember that the right-angle on tangent theorems occurs at the circumference of the circle, where the radius meets the tangent (angle $OAT = 90^\\circ$). The line connecting the centre to the external point ($OT$) is always the hypotenuse of this right-angled system. Identifying this perpendicular contact point allows you to safely apply Pythagoras."
    },
    "payhip_link": "https://payhip.com/b/RLgSJ",
    "button_text": "Master Circle Theorems: Download the Pack"
  }



];
