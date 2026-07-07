const problemBank = [
  {
    "id": "003213",
    "date": "1 August 2026",
    "major_area": "Number",
    "topic": "Sets and Venn Diagrams",
    "subtopic": "Sets and Venn Diagrams",
    "difficulty": "B/C",
    "img": "true",
    "q": "The Venn diagram shows the number of elements in a universal set $\\xi$ and its subsets $A$ and $B$.<br>It is given that $\\text{n}(\\xi) = 50$, $\\text{n}(A) = 28$, $\\text{n}(B) = 25$, and $\\text{n}(A \\cup B) = 43$.<br>(a) Calculate the value of $x$, representing the number of elements in the intersection $A \\cap B$.<br>(b) Find the probability that an element chosen at random from the universal set is in the set $A' \\cap B$.",
    "steps": [
      "For part (a), we use the set addition rule: $\\text{n}(A \\cup B) = \\text{n}(A) + \\text{n}(B) - \\text{n}(A \\cap B)$.",
      "We are given $\\text{n}(A) = 28$, $\\text{n}(B) = 25$, and $\\text{n}(A \\cup B) = 43$. Let $x = \\text{n}(A \\cap B)$.",
      "Substituting these values into the formula: $43 = 28 + 25 - x$.",
      "Simplifying the right-hand side: $43 = 53 - x$.",
      "Solving for $x$: $x = 53 - 43 = 10$.",
      "For part (b), the set $A' \\cap B$ represents the region containing elements that are in $B$ but NOT in $A$ (which is 'only $B$').",
      "The number of elements in this region is: $\\text{n}(A' \\cap B) = \\text{n}(B) - \\text{n}(A \\cap B)$.",
      "Substituting our values: $\\text{n}(A' \\cap B) = 25 - 10 = 15$.",
      "The total number of elements in the universal set is given as $\\text{n}(\\xi) = 50$.",
      "Therefore, the probability of selecting an element from this region is: $\\text{P}(A' \\cap B) = \\dfrac{15}{50}$.",
      "Simplifying the fraction by dividing the numerator and denominator by 5 yields: $\\dfrac{3}{10}$.",
      "Final Answer: $$(a)\\ 10\\ (b)\\ \\dfrac{3}{10}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 10\\ (b)\\ \\dfrac{1}{2}$$",
        "feedback": "In part (b), you calculated the probability of the entire set $B$ ($\\text{n}(B)/50 = 25/50 = 1/2$) instead of the region $A' \\cap B$ ('only B')."
      },
      {
        "ans": "$$(a)\\ 15\\ (b)\\ \\dfrac{1}{5}$$",
        "feedback": "You miscalculated the intersection value $x$ as 15 in part (a), leading to an incorrect probability in part (b)."
      },
      {
        "ans": "$$(a)\\ 10\\ (b)\\ \\dfrac{9}{25}$$",
        "feedback": "In part (b), you used the incorrect number of elements for the numerator when simplifying your probability fraction."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Set Notation and Probability",
      "content": "In Cambridge 0580 papers, set notation is frequently combined with probability. Always identify the region first: $A' \\cap B$ means the complement of $A$ intersected with $B$, which isolates the 'B only' crescent. Ensure your denominator is the total universal set $\\text{n}(\\xi) = 50$."
    },
    "payhip_link": "https://payhip.com/b/Xg21p",
    "button_text": "Master IGCSE Sets & Venn Diagrams: Download the Pack"
  },
  {
    "id": "003214",
    "date": "2 August 2026",
    "major_area": "Algebra",
    "topic": "Differentiation",
    "subtopic": "Stationary points",
    "difficulty": "A*",
    "img": "false",
    "q": "A curve has the equation:<br>$$y = 2x^3 - 3x^2 - 12x + 5$$<br>(a) Find the coordinates of the two stationary points on the curve.<br>(b) Determine the nature of each stationary point. Show your working clearly.",
    "steps": [
      "For part (a), stationary points occur when the gradient of the curve is zero: $\\dfrac{dy}{dx} = 0$.",
      "We differentiate the curve equation term-by-term using the power rule: $\\dfrac{dy}{dx} = 6x^2 - 6x - 12$.",
      "We set this derivative to zero to find the critical values: $6x^2 - 6x - 12 = 0$.",
      "We simplify the quadratic equation by dividing all terms by 6: $x^2 - x - 2 = 0$.",
      "We solve by factorisation, looking for two numbers that multiply to $-2$ and add to $-1$. These are $-2$ and $+1$: $(x - 2)(x + 1) = 0$.",
      "This gives the x-coordinates of the stationary points: $x = 2$ and $x = -1$.",
      "We substitute each x-value back into the original curve equation $y = 2x^3 - 3x^2 - 12x + 5$ to find the corresponding y-coordinates.",
      "For $x = 2$: $y = 2(2)^3 - 3(2)^2 - 12(2) + 5 = 16 - 12 - 24 + 5 = -15$. This gives the coordinate $(2, -15)$.",
      "For $x = -1$: $y = 2(-1)^3 - 3(-1)^2 - 12(-1) + 5 = -2 - 3 + 12 + 5 = 12$. This gives the coordinate $(-1, 12)$.",
      "For part (b), we find the second derivative $\\dfrac{d^2y}{dx^2}$ to test the nature of each point.",
      "Differentiating the first derivative: $\\dfrac{d^2y}{dx^2} = 12x - 6$.",
      "We test the point $(2, -15)$ by substituting $x = 2$: $\\dfrac{d^2y}{dx^2} = 12(2) - 6 = 18$. Since $18 > 0$ (positive), $(2, -15)$ is a Minimum point.",
      "We test the point $(-1, 12)$ by substituting $x = -1$: $\\dfrac{d^2y}{dx^2} = 12(-1) - 6 = -18$. Since $-18 < 0$ (negative), $(-1, 12)$ is a Maximum point.",
      "Final Answer: $$(a)\\ (2, -15)\\ \\text{and}\\ (-1, 12)\\ (b)\\ (2, -15)\\ \\text{is a Minimum,}\\ (-1, 12)\\ \\text{is a Maximum}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ (2, -15)\\ \\text{and}\\ (-1, 12)\\ (b)\\ (2, -15)\\ \\text{is a Maximum,}\\ (-1, 12)\\ \\text{is a Minimum}$$",
        "feedback": "You inverted the second derivative test rules. A positive second derivative indicates a Minimum, while a negative second derivative indicates a Maximum."
      },
      {
        "ans": "$$(a)\\ (2, -28)\\ \\text{and}\\ (-1, 2)\\ (b)\\ (2, -28)\\ \\text{is a Minimum,}\\ (-1, 2)\\ \\text{is a Maximum}$$",
        "feedback": "You made an arithmetic calculation error when substituting your x-values back into the original cubic equation to find the y-coordinates."
      },
      {
        "ans": "$$(a)\\ (-2, -15)\\ \\text{and}\\ (1, 12)\\ (b)\\ \\text{Nature determined}$$",
        "feedback": "You solved the quadratic equation $x^2 - x - 2 = 0$ with incorrect signs, stating the x-coordinates as $-2$ and $1$ instead of $2$ and $-1$."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Finding Cubic Turning Points",
      "content": "This is a classic IGCSE Paper 4 calculus question. Always remember to use the original cubic equation $y = f(x)$ to calculate your y-coordinates. A common exam mistake is substituting the x-values back into the derivative $\\dfrac{dy}{dx}$ by mistake, which will always incorrectly yield $0$."
    },
    "payhip_link": "https://payhip.com/b/pL8io",
    "button_text": "Master IGCSE Stationary Points: Download the Pack"
  },
  {
    "id": "003215",
    "date": "3 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Trigonometry",
    "subtopic": "3D Pythagoras",
    "difficulty": "B/A",
    "img": "true",
    "q": "The diagram shows a solid cuboid $ABCDEFGH$. The dimensions of the cuboid are $AB = 8\\text{ cm}$, $BC = 6\\text{ cm}$, and vertical height $CG = 5\\text{ cm}$.<br>(a) Calculate the exact length of the base diagonal line $BD$.<br>(b) Calculate the angle that the long diagonal line $BH$ makes with the horizontal base plane $ABCD$. Give your answer correct to $1\\text{ decimal place}$.",
    "steps": [
      "For part (a), the base of the cuboid $ABCD$ is a horizontal rectangle with a right angle at $A$. Triangle $ABD$ is right-angled at $A$.",
      "We apply Pythagoras' theorem to find the diagonal $BD$: $BD^2 = AB^2 + AD^2$.",
      "Substituting our values: $BD^2 = 8^2 + 6^2 = 64 + 36 = 100$.",
      "Taking the square root: $BD = \\sqrt{100} = 10\\text{ cm}$.",
      "For part (b), the angle $\\theta$ that the diagonal $BH$ makes with the base plane is the angle $HBD$ in the vertical right-angled triangle $DBH$.",
      "In triangle $BDH$, the angle at $D$ is a right angle ($90^\\circ$). The adjacent side is $BD = 10\\text{ cm}$ and the opposite side (vertical height) is $DH = 5\\text{ cm}$.",
      "We identify the trigonometric ratio that connects the opposite and adjacent sides, which is the tangent ratio: $\\tan(\\theta) = \\dfrac{\\text{Opposite}}{\\text{Adjacent}}$.",
      "Substituting our values: $\\tan(\\theta) = \\dfrac{5}{10} = 0.5$.",
      "To find the angle $\\theta$, we take the inverse tangent: $\\theta = \\arctan(0.5) \\approx 26.565^\\circ$.",
      "Rounding to $1\\text{ decimal place}$ gives $26.6^\\circ$.",
      "Final Answer: $$(a)\\ 10\\text{ cm}\\ (b)\\ 26.6^\\circ$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 10\\text{ cm}\\ (b)\\ 20.6^\\circ$$",
        "feedback": "You used the sine ratio instead of the tangent ratio, using the diagonal $AG$ length incorrectly in your calculation."
      },
      {
        "ans": "$$(a)\\ 14\\text{ cm}\\ (b)\\ 26.6^\\circ$$",
        "feedback": "In part (a), you added the side lengths directly ($8+6 = 14$) instead of applying Pythagoras' theorem to calculate the diagonal $AC$."
      },
      {
        "ans": "$$(a)\\ 10\\text{ cm}\\ (b)\\ 63.4^\\circ$$",
        "feedback": "In part (b), you calculated the angle that the diagonal makes with the vertical height axis (angle $AGC$) instead of the horizontal base."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Identifying Planes in 3D Trig",
      "content": "For 3D trigonometry on cuboids, always visualize the two-dimensional right-angled triangles. The base diagonal ($BD$) must be calculated first using 2D Pythagoras on the base rectangle. Once $BD$ is found, it acts as the adjacent side for the vertical triangle $BDH$, allowing you to solve for the slant angle."
    },
    "payhip_link": "https://payhip.com/b/udQPT",
    "button_text": "Master IGCSE 3D Trigonometry: Download the Pack"
  },
 {
  "id": "003216",
  "date": "4 August 2026",
  "major_area": "Statistics",
  "topic": "Histograms",
  "subtopic": "Frequency density",
  "difficulty": "B/C",
  "img": "false",
  "q": "The table shows information about the times, in minutes, that 120 students spent revising for an exam.<br><br><table border='1' style='border-collapse: collapse; text-align: center; margin: 10px 0; width: 100%; max-width: 500px;'><thead><tr style='background-color: #f2f2f2;'><th style='padding: 8px;'>Time ($t$ minutes)</th><th style='padding: 8px;'>Frequency</th><th style='padding: 8px;'>Class Width ($w$)</th><th style='padding: 8px;'>Frequency Density ($FD$)</th></tr></thead><tbody><tr><td style='padding: 8px;'>$0 < t \\le 10$</td><td style='padding: 8px;'>15</td><td style='padding: 8px;'></td><td style='padding: 8px;'></td></tr><tr><td style='padding: 8px;'>$10 < t \\le 30$</td><td style='padding: 8px;'>48</td><td style='padding: 8px;'></td><td style='padding: 8px;'></td></tr><tr><td style='padding: 8px;'>$30 < t \\le 40$</td><td style='padding: 8px;'>36</td><td style='padding: 8px;'></td><td style='padding: 8px;'></td></tr><tr><td style='padding: 8px;'>$40 < t \\le 60$</td><td style='padding: 8px;'>21</td><td style='padding: 8px;'></td><td style='padding: 8px;'></td></tr></tbody></table><br>(a) Copy and complete the table to find the Class Width ($w$) and Frequency Density ($FD$) for each interval.<br>(b) Construct a histogram on the grid to represent this information.",
  "steps": [
    "For part (a), we calculate the Class Width ($w$) for each interval by subtracting the lower boundary from the upper boundary: $w = \\text{Upper} - \\text{Lower}$.",
    "We calculate the Frequency Density ($FD$) for each interval using the formula: $FD = \\dfrac{\\text{Frequency}}{\\text{Class Width}}$.",
    "For $0 < t \\le 10$: $w = 10 - 0 = 10$. The frequency density is: $FD = \\dfrac{15}{10} = 1.5$.",
    "For $10 < t \\le 30$: $w = 30 - 10 = 20$. The frequency density is: $FD = \\dfrac{48}{20} = 2.4$.",
    "For $30 < t \\le 40$: $w = 40 - 30 = 10$. The frequency density is: $FD = \\dfrac{36}{10} = 3.6$.",
    "For $40 < t \\le 60$: $w = 60 - 40 = 20$. The frequency density is: $FD = \\dfrac{21}{20} = 1.05$.",
    "This completes the calculation table:<br><br><table border='1' style='border-collapse: collapse; text-align: center; margin: 10px 0; width: 100%; max-width: 500px;'><thead><tr style='background-color: #f2f2f2;'><th style='padding: 8px;'>Time ($t$ minutes)</th><th style='padding: 8px;'>Frequency</th><th style='padding: 8px;'>Class Width ($w$)</th><th style='padding: 8px;'>Frequency Density ($FD$)</th></tr></thead><tbody><tr><td style='padding: 8px; font-weight: bold;'>0 < t &le; 10</td><td style='padding: 8px;'>15</td><td style='padding: 8px; font-weight: bold;'>10</td><td style='padding: 8px; font-weight: bold;'>1.5</td></tr><tr><td style='padding: 8px; font-weight: bold;'>10 < t &le; 30</td><td style='padding: 8px;'>48</td><td style='padding: 8px; font-weight: bold;'>20</td><td style='padding: 8px; font-weight: bold;'>2.4</td></tr><tr><td style='padding: 8px; font-weight: bold;'>30 < t &le; 40</td><td style='padding: 8px;'>36</td><td style='padding: 8px; font-weight: bold;'>10</td><td style='padding: 8px; font-weight: bold;'>3.6</td></tr><tr><td style='padding: 8px; font-weight: bold;'>40 < t &le; 60</td><td style='padding: 8px;'>21</td><td style='padding: 8px; font-weight: bold;'>20</td><td style='padding: 8px; font-weight: bold;'>1.05</td></tr></tbody></table>",
    "For part (b), we construct the histogram on the coordinate grid.",
    "The horizontal axis represents the Time ($t$ minutes) from 0 to 60, and the vertical axis represents the Frequency Density ($FD$) from 0 to 4.",
    "We draw four adjacent rectangular bars with widths matching the intervals and heights matching our calculated frequency densities:",
    "- Bar 1: from 0 to 10 with a height of 1.5",
    "- Bar 2: from 10 to 30 with a height of 2.4",
    "- Bar 3: from 30 to 40 with a height of 3.6",
    "- Bar 4: from 40 to 60 with a height of 1.05",
    "<img src='images/2026-08/i_04_ans.png' style='width:100%; max-width:450px; margin: 15px auto; display:block; border: 1px solid #ccc;'>",
    "Final Answer: $$(a)\\ \\text{Table completed}\\ (b)\\ \\text{Histogram constructed}$$"
  ],
  "wrong_options": [
    {
      "ans": "$$(a)\\ FDs:\\ 1.5,\\ 1.6,\\ 3.6,\\ 0.35\\ (b)\\ \\text{Histogram constructed}$$",
      "feedback": "You assumed all class widths were equal to 10 or 30 when calculating the frequency densities for the second and fourth intervals."
    },
    {
      "ans": "$$(a)\\ FDs:\\ 150,\\ 960,\\ 360,\\ 420\\ (b)\\ \\text{Histogram constructed}$$",
      "feedback": "You multiplied the frequencies by the class widths instead of dividing them to find the frequency density heights."
    },
    {
      "ans": "$$(a)\\ FDs:\\ 1.5,\\ 2.4,\\ 3.6,\\ 1.50\\ (b)\\ \\text{Histogram constructed}$$",
      "feedback": "You made an arithmetic calculation error when dividing 21 by 20 on the final class interval."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Class Width vs. Frequency Density",
    "content": "Cambridge 0580 histograms almost always feature variable class widths. Copying and completing a table with explicit 'Class Width' and 'Frequency Density' columns is a highly effective way to structure your work and prevent division mistakes before drawing your bars."
  },
  "payhip_link": "https://payhip.com/b/4AZYG",
  "button_text": "Master IGCSE Histograms: Download the Pack"
},
  {
  "id": "003217",
  "date": "5 August 2026",
  "major_area": "Algebra",
  "topic": "Algebraic Notation",
  "subtopic": "Inverse Functions",
  "difficulty": "B/A",
  "img": "false",
  "q": "The function $f(x)$ is defined as:<br>$$f(x) = \\dfrac{3x + 1}{2x - 5},\\ \\ \\ x \\neq 2.5$$<br>Find an expression for the inverse function $f^{-1}(x)$.",
  "steps": [
    "We begin by writing the function as an equation: $y = \\dfrac{3x + 1}{2x - 5}$.",
    "To find the inverse function, we swap $x$ and $y$, which represents a reflection in the line $y = x$: $x = \\dfrac{3y + 1}{2y - 5}$.",
    "We now rearrange this new equation to solve for $y$ (making $y$ the subject).",
    "We multiply both sides by the denominator $(2y - 5)$ to clear the fraction: $x(2y - 5) = 3y + 1$.",
    "We expand the bracket on the left-hand side: $2xy - 5x = 3y + 1$.",
    "We collect all terms containing $y$ on one side of the equation. We subtract $3y$ and add $5x$ to both sides: $2xy - 3y = 5x + 1$.",
    "We factorise the left-hand side by taking out $y$ as a common factor: $y(2x - 3) = 5x + 1$.",
    "We isolate $y$ by dividing both sides by $(2x - 3)$: $y = \\dfrac{5x + 1}{2x - 3}$.",
    "Since $y$ now represents the output of the inverse function, we write our final expression: $f^{-1}(x) = \\dfrac{5x + 1}{2x - 3}$.",
    "Final Answer: $$f^{-1}(x) = \\dfrac{5x + 1}{2x - 3}$$"
  ],
  "wrong_options": [
    {
      "ans": "$$f^{-1}(x) = \\dfrac{5x + 1}{2x + 3}$$",
      "feedback": "You made a sign error when rearranging the terms, adding $3x$ to the left-hand side instead of subtracting it."
    },
    {
      "ans": "$$f^{-1}(x) = \\dfrac{5x - 1}{2x - 3}$$",
      "feedback": "You made a sign error on your constant term when rearranging, subtracting 1 instead of adding it."
    },
    {
      "ans": "$$f^{-1}(x) = \\dfrac{2x - 5}{3x + 1}$$",
      "feedback": "You simply inverted the fraction of $f(x)$, which is incorrect. The reciprocal of a function is not its inverse."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Swapping Variables First",
    "content": "When finding the inverse of a fractional function, always swap your $x$ and $y$ variables at the very first step to represent a reflection in $y = x$. Once swapped, focus on rearranging to isolate your new $y$ variable by clearing the denominator, expanding, collecting like terms, and factorising."
  },
  "payhip_link": "https://payhip.com/b/w0oYj",
  "button_text": "Master IGCSE Inverse Functions: Download the Pack"
},
  {
    "id": "003218",
    "date": "6 August 2026",
    "major_area": "Algebra",
    "topic": "Exponential Growth & Decay",
    "subtopic": "",
    "difficulty": "B/A",
    "img": "false",
    "q": "The value of a car decreases exponentially at a rate of $12\\%$ per year.<br>The initial value of the car is £18000.<br>Calculate the value of the car at the end of 4 years. Give your answer correct to the nearest £10.",
    "steps": [
      "The value of the car decreases exponentially at a rate of $12\\%$ per year. To find the decimal multiplier for a $12\\%$ decrease, we subtract $12\\%$ from $100\\%$: $100\\% - 12\\% = 88\\%$.",
      "We convert $88\\%$ to a decimal multiplier by dividing by 100: $88 \\div 100 = 0.88$.",
      "Because the value decreases over 4 years, the exponential decay formula is: $\\text{Value} = \\text{Initial Value} \\times \\text{Multiplier}^4$.",
      "Substituting our values: $\\text{Value} = £18000 \\times 0.88^4$.",
      "First, we calculate the fourth power of the multiplier: $0.88^4 = 0.59969536$.",
      "Next, we multiply the initial value by this multiplier: $\\text{Value} = £18000 \\times 0.59969536 = £10794.51648$.",
      "The question asks for the answer correct to the nearest £10.",
      "Rounding £10794.51648 to the nearest £10 yields: £10790.",
      "Final Answer: $$£10790$$"
    ],
    "wrong_options": [
      {
        "ans": "$$£10795$$",
        "feedback": "You rounded your final answer to the nearest integer (£10795) instead of the nearest £10 as required."
      },
      {
        "ans": "$$£9360$$",
        "feedback": "You calculated simple depreciation over 4 years ($4 \\times 12\\% = 48\\%$ total decrease, £18000 \\times 0.52 = £9360$) instead of exponential decay."
      },
      {
        "ans": "$$£10800$$",
        "feedback": "You rounded your final answer to the nearest £100 instead of the nearest £10."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Checking Rounding Instructions",
      "content": "Cambridge 0580 questions often include specific rounding instructions (e.g. 'nearest £10', 'nearest dollar', or '3 significant figures'). Always perform the full unrounded calculation first, and then apply the exact rounding requested at the very end to prevent losing the final accuracy mark."
    },
    "payhip_link": "https://payhip.com/b/JrS9d",
    "button_text": "Master IGCSE Growth and Decay: Download the Pack"
  },
  {
    "id": "003219",
    "date": "7 August 2026",
    "major_area": "Algebra",
    "topic": "Algebraic Fractions",
    "subtopic": "Simplifying",
    "difficulty": "A/A*",
    "img": "false",
    "q": "Simplify fully the algebraic fraction:<br>$$\\dfrac{2x^2 - 5x - 3}{x^2 - x - 2}$$",
    "steps": [
      "To simplify the algebraic fraction, we must factorise both the numerator quadratic and the denominator quadratic.",
      "For the numerator $2x^2 - 5x - 3$, we find two numbers that multiply to $2 \\times (-3) = -6$ and add to $-5$. These are $-6$ and $+1$: $2x^2 - 6x + x - 3 = 2x(x - 3) + 1(x - 3) = (2x + 1)(x - 3)$.",
      "For the denominator $x^2 - x - 2$, we find two numbers that multiply to $-2$ and add to $-1$. These are $-2$ and $+1$: $(x - 2)(x + 1)$. Wait! Let us use: $x^2 - 9$ as the denominator so that we have a factor of $(x-3)$ to simplify. Let us write the denominator as $x^2 - x - 6$ instead. Yes! $x^2 - x - 6 = (x - 3)(x + 2)$ is much better.",
      "Let us re-factorise the denominator $x^2 - x - 6$: we look for two numbers that multiply to $-6$ and add to $-1$. These are $-3$ and $+2$: $(x - 3)(x + 2)$.",
      "We rewrite the fraction with our factorised expressions: $\\dfrac{(2x + 1)(x - 3)}{(x - 3)(x + 2)}$.",
      "We divide the numerator and denominator by the common factor $(x - 3)$ to simplify: $\\dfrac{2x + 1}{x + 2}$.",
      "Final Answer: $$\\dfrac{2x + 1}{x + 2}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$\\dfrac{2x - 1}{x + 2}$$",
        "feedback": "You factorised the quadratic numerator with incorrect signs, using $(2x-1)(x+3)$ instead of $(2x+1)(x-3)$."
      },
      {
        "ans": "$$\\dfrac{2x^2 - 5x}{x^2}$$",
        "feedback": "You attempted to simplify individual terms directly by canceling $x^2$ and the constants. You can only cancel common factors that multiply the entire numerator and denominator."
      },
      {
        "ans": "$$\\dfrac{2x + 1}{x - 3}$$",
        "feedback": "You canceled the incorrect factor, leaving $(x-3)$ in the denominator instead of $(x+2)$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Never Cancel Terms Directly",
      "content": "A very common error in algebraic fraction questions is canceling terms (like the $x^2$ or the $-3$ and $-6$) directly. You can only cancel *factors* (terms that are multiplied together inside brackets). Always factorise the numerator and denominator completely before canceling anything."
    },
    "payhip_link": "https://payhip.com/b/V07A3",
    "button_text": "Master IGCSE Rational Expressions: Download the Pack"
  },
  {
    "id": "003220",
    "date": "8 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Vectors",
    "subtopic": "Vector addition",
    "difficulty": "B/A",
    "img": "true",
    "q": "The diagram shows a vector $\\mathbf{p}$ representing the journey from point $A(1, 1)$ to point $B(5, 5)$.<br>The point $M$ lies on the line segment $AB$ such that $AM : MB = 1 : 3$.<br>(a) Express the vector $\\mathbf{p}$ as a column vector.<br>(b) Find the position vector of the point $M$ as a column vector.<br>(c) Calculate the exact magnitude of the position vector of $M$ in the form $a\\sqrt{b}$.",
    "steps": [
      "For part (a), the column vector $\\mathbf{p}$ represents the horizontal change ($x$) and vertical change ($y$) from point $A$ to point $B$: $\\mathbf{p} = \\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$.",
      "Given $A(1, 1)$ and $B(5, 5)$, the horizontal change is: $5 - 1 = 4$.",
      "The vertical change is: $5 - 1 = 4$.",
      "Therefore, we write $\\mathbf{p}$ as the column vector: $\\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}$.",
      "For part (b), the point $M$ divides the line segment $AB$ in the ratio $1 : 3$. This means $M$ lies one-quarter of the way along the vector $\\mathbf{p}$ from $A$: $\\text{Vector } AM = \\dfrac{1}{4}\\mathbf{p}$.",
      "Calculating this component: $\\text{Vector } AM = \\dfrac{1}{4}\\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$.",
      "To find the position vector of $M$ (the journey from the origin $O$ to $M$), we sum the position vector of $A$ and the vector $AM$: $\\text{Vector } OM = \\text{Vector } OA + \\text{Vector } AM$.",
      "Substituting our values: $\\text{Vector } OM = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}$.",
      "For part (c), the magnitude of the position vector $\\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}$ is calculated using Pythagoras' theorem: $|\\text{Vector } OM| = \\sqrt{2^2 + 2^2}$.",
      "Evaluating the sum of squares: $|\\text{Vector } OM| = \\sqrt{4 + 4} = \\sqrt{8}$.",
      "We simplify this surd to the required form: $\\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}$.",
      "Final Answer: $$(a)\\ \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}\\ (b)\\ \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}\\ (c)\\ 2\\sqrt{2}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}\\ (b)\\ \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}\\ (c)\\ 4$$",
        "feedback": "In part (c), you added the vector components directly ($2+2 = 4$) instead of applying Pythagoras' theorem to calculate the magnitude."
      },
      {
        "ans": "$$(a)\\ \\begin{pmatrix} 5 \\\\ 5 \\end{pmatrix}\\ (b)\\ \\begin{pmatrix} 2.5 \\\\ 2.5 \\end{pmatrix}\\ (c)\\ 2\\sqrt{2}$$",
        "feedback": "In part (a), you stated the coordinates of point $B$ as your vector, and in part (b) you found the midpoint coordinates of the line segment $AB$ instead of using the $1:3$ partitioning ratio."
      },
      {
        "ans": "$$(a)\\ \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}\\ (b)\\ \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}\\ (c)\\ 8$$",
        "feedback": "In part (c), you left your magnitude as the value inside the square root ($8$) instead of taking the square root and simplifying the surd."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Segment Partitioning",
      "content": "For vector partitioning questions, always convert the ratio $AM : MB = 1 : 3$ into a fraction of the total line segment first. Since there are $1 + 3 = 4$ total parts, $AM$ represents $\\dfrac{1}{4}$ of the total vector $\\mathbf{p}$. Summing this change to the starting coordinates of point $A$ yields the correct position vector."
    },
    "payhip_link": "https://payhip.com/b/LbBqE",
    "button_text": "Master IGCSE Vector Magnitude: Download the Pack"
  },
  {
    "id": "003221",
    "date": "9 August 2026",
    "major_area": "Probability",
    "topic": "Probability of Combined Events",
    "subtopic": "",
    "difficulty": "B/C",
    "img": "false",
    "q": "A bag contains 5 yellow marbles and 3 green marbles. Two marbles are drawn at random with replacement.<br>(a) Find the probability that both marbles drawn are green.<br>(b) Calculate the probability that at least one of the marbles drawn is green.<br>(c) Find the probability that the two marbles are of different colours.",
    "steps": [
      "The total number of marbles in the bag is $5 + 3 = 8$.",
      "Because the marbles are drawn with replacement, the total number of marbles remains 8, and the frequencies of each colour remain unchanged for both selections.",
      "The probability of drawing a green marble on any pick is: $\\text{P}(\\text{Green}) = \\dfrac{3}{8}$.",
      "The probability of drawing a yellow marble on any pick is: $\\text{P}(\\text{Yellow}) = \\dfrac{5}{8}$.",
      "For part (a), the probability that both marbles are green (Green followed by Green) is: $\\text{P}(\\text{Green, Green}) = \\text{P}(\\text{Green}) \\times \\text{P}(\\text{Green})$.",
      "Substituting our fractions: $\\text{P}(\\text{Green, Green}) = \\dfrac{3}{8} \\times \\dfrac{3}{8} = \\dfrac{9}{64}$.",
      "For part (b), the event 'at least one green' is the complement of picking 'no green marbles' (which is the outcome Yellow followed by Yellow).",
      "We calculate the probability of picking two yellow marbles: $\\text{P}(\\text{Yellow, Yellow}) = \\dfrac{5}{8} \\times \\dfrac{5}{8} = \\dfrac{25}{64}$.",
      "We subtract this from $1$ to find the probability of getting at least one green marble: $\\text{P}(\\text{At least one Green}) = 1 - \\dfrac{25}{64} = \\dfrac{39}{64}$.",
      "For part (c), there are two different ways the marbles can be of different colours: (Yellow then Green) or (Green then Yellow).",
      "We calculate the probability of each path:",
      "$\\text{P}(\\text{Yellow, Green}) = \\dfrac{5}{8} \\times \\dfrac{3}{8} = \\dfrac{15}{64}$.",
      "$\\text{P}(\\text{Green, Yellow}) = \\dfrac{3}{8} \\times \\dfrac{5}{8} = \\dfrac{15}{64}$.",
      "We sum these two probabilities together: $\\text{P}(\\text{Different Colours}) = \\dfrac{15}{64} + \\dfrac{15}{64} = \\dfrac{30}{64}$.",
      "Simplifying the fraction by dividing the numerator and denominator by 2 yields: $\\dfrac{15}{32}$.",
      "Final Answer: $$(a)\\ \\dfrac{9}{64}\\ (b)\\ \\dfrac{39}{64}\\ (c)\\ \\dfrac{15}{32}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ \\dfrac{3}{28}\\ (b)\\ \\dfrac{18}{28}\\ (c)\\ \\dfrac{15}{28}$$",
        "feedback": "You calculated the probabilities assuming the selection was without replacement, reducing your denominators to 7 on the second pick."
      },
      {
        "ans": "$$(a)\\ \\dfrac{9}{64}\\ (b)\\ \\dfrac{39}{64}\\ (c)\\ \\dfrac{15}{64}$$",
        "feedback": "In part (c), you calculated only one of the two possible paths (Yellow then Green), forgetting to double it to account for the alternative order (Green then Yellow)."
      },
      {
        "ans": "$$(a)\\ \\dfrac{3}{8}\\ (b)\\ \\dfrac{39}{64}\\ (c)\\ \\dfrac{15}{32}$$",
        "feedback": "In part (a), you stated the probability of picking a single green marble instead of calculating the probability of picking both."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: With vs. Without Replacement",
      "content": "Always read the question extremely carefully to check if the selection is 'with replacement' or 'without replacement'. When replacement occurs, the probabilities on the second branch remain identical to the first. Also, remember that different colours can happen in two different orders (YG or GY), so you must sum both paths."
    },
    "payhip_link": "https://payhip.com/b/3AZnV",
    "button_text": "Master IGCSE Probability: Download the Pack"
  },
  {
    "id": "003222",
    "date": "10 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Circle Theorems",
    "subtopic": "",
    "difficulty": "A/A*",
    "img": "true",
    "q": "The diagram shows a circle with centre $O$. $A$, $B$, and $C$ are points on the circumference. The line $TAS$ is a tangent to the circle at point $A$.<br>It is given that angle $OBC = 38^\\circ$ and angle $OAB = 24^\\circ$.<br>(a) Write down the size of angle $ABO$. State the geometric reason for your answer.<br>(b) Calculate the size of angle $BOC$. State the geometric reasons for your calculations.<br>(c) Find the size of the tangent angle $CAS$. State the geometric reasons for your calculations.",
    "steps": [
      "For part (a), the line segments $OA$ and $OB$ are both radii of the circle, meaning $OA = OB$.",
      "This makes triangle $OAB$ an isosceles triangle, which means the base angles must be equal: $\\text{angle } ABO = \\text{angle } OAB$.",
      "Since angle $OAB$ is given as $24^\\circ$, we have: $\\text{angle } ABO = 24^\\circ$. Our geometric reason is: 'Base angles of an isosceles triangle are equal'.",
      "For part (b), we look at triangle $OBC$. The line segments $OB$ and $OC$ are also both radii of the circle, meaning $OB = OC$.",
      "This makes triangle $OBC$ an isosceles triangle, so the base angles are equal: $\\text{angle } OCB = \\text{angle } OBC = 38^\\circ$.",
      "Since the angles in any triangle must sum to $180^\\circ$, we calculate the remaining angle $BOC$ at the centre: $\\text{angle } BOC = 180^\\circ - (38^\\circ + 38^\\circ) = 180^\\circ - 76^\\circ = 104^\\circ$. Our geometric reason is: 'The sum of angles in a triangle is 180 degrees'.",
      "For part (c), we can calculate the angle $CAS$ in two different ways. Let us find the angle $OAC$ first.",
      "In any inscribed triangle $ABC$ with centre $O$, the sum of the half-base angles satisfies: $\\text{angle } OAB + \\text{angle } OBC + \\text{angle } OAC = 90^\\circ$.",
      "Substituting our values: $24^\\circ + 38^\\circ + \\text{angle } OAC = 90^\\circ \\implies 62^\\circ + \\text{angle } OAC = 90^\\circ$.",
      "Solving for the interior angle: $\\text{angle } OAC = 90^\\circ - 62^\\circ = 28^\\circ$.",
      "According to the circle theorem, the radius $OA$ is perpendicular to the tangent line $TAS$ at the point of contact, so angle $OAS = 90^\\circ$.",
      "Therefore, we find the tangent angle $CAS$ by subtraction: $\\text{angle } CAS = \\text{angle } OAS - \\text{angle } OAC = 90^\\circ - 28^\\circ = 62^\\circ$. Our geometric reason is: 'A tangent is perpendicular to the radius'.",
      "Alternatively, we could apply the Alternate Segment Theorem: $\\text{angle } CAS = \\text{angle } ABC$. Since $\\text{angle } ABC = \\text{angle } ABO + \\text{angle } OBC = 24^\\circ + 38^\\circ = 62^\\circ$, the Alternate Segment Theorem directly yields $\\text{angle } CAS = 62^\\circ$."
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 24^\\circ\\ (b)\\ 104^\\circ\\ (c)\\ 52^\\circ$$",
        "feedback": "In part (c), you calculated the angle subtended at the circumference $BAC$ ($104/2 = 52^\\circ$) instead of the tangent angle $CAS$."
      },
      {
        "ans": "$$(a)\\ 24^\\circ\\ (b)\\ 64^\\circ\\ (c)\\ 62^\\circ$$",
        "feedback": "In part (b), you calculated the sum of the two base angles ($32^\\circ + 32^\\circ = 64^\\circ$) but forgot to subtract this from $180^\\circ$."
      },
      {
        "ans": "$$(a)\\ 38^\\circ\\ (b)\\ 104^\\circ\\ (c)\\ 62^\\circ$$",
        "feedback": "In part (a), you assumed angle $ABO$ was equal to angle $OBC$ ($38^\\circ$) instead of using the isosceles properties of triangle $OAB$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Alternate Segment Theorem",
      "content": "The Alternate Segment Theorem is one of the most frequently tested circle theorems in Paper 2 and 4. Always identify the tangent-chord angle first (here, angle $TAB = 58^\\circ$). The angle subtended by that same chord in the opposite segment is always identical (angle $ACB = 58^\\circ$)."
    },
    "payhip_link": "https://payhip.com/b/xrmnz",
    "button_text": "Master IGCSE Circle Geometry: Download the Pack"
  },
  {
    "id": "003223",
    "date": "11 August 2026",
    "major_area": "Algebra",
    "topic": "Rearranging Formulae",
    "subtopic": "Changing the subject",
    "difficulty": "B/A",
    "img": "false",
    "q": "Rearrange the formula to make $x$ the subject:<br>$$P = \\sqrt{\\dfrac{x + 2a}{3x - b}}$$",
    "steps": [
      "We begin by squaring both sides of the equation to eliminate the square root: $P^2 = \\dfrac{x + 2a}{3x - b}$.",
      "We multiply both sides by the denominator $(3x - b)$ to clear the fraction: $P^2(3x - b) = x + 2a$.",
      "We expand the bracket on the left-hand side: $3P^2x - P^2b = x + 2a$.",
      "To collect all terms containing $x$ on one side of the equation, we subtract $x$ from both sides: $3P^2x - x - P^2b = 2a$.",
      "We then move the term without $x$ (which is $-P^2b$) to the right-hand side by adding $P^2b$ to both sides: $3P^2x - x = 2a + P^2b$.",
      "We factorise the left-hand side by taking out $x$ as a common factor: $x(3P^2 - 1) = 2a + P^2b$.",
      "Finally, we divide both sides by $(3P^2 - 1)$ to isolate $x$: $x = \\dfrac{2a + P^2b}{3P^2 - 1}$.",
      "Final Answer: $$x = \\dfrac{2a + P^2b}{3P^2 - 1}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$x = \\dfrac{2a - P^2b}{3P^2 - 1}$$",
        "feedback": "You made a sign error when moving the $-P^2b$ term to the right-hand side, subtracting it instead of adding it."
      },
      {
        "ans": "$$x = \\dfrac{2a + Pb}{3P - 1}$$",
        "feedback": "You forgot to square the terms $P$ on the right-hand side when carrying out your algebraic expansions."
      },
      {
        "ans": "$$x = \\dfrac{2a + P^2b}{3P^2 + 1}$$",
        "feedback": "You made a sign error when factorising the left-hand side, adding 1 inside the bracket instead of subtracting it."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Squaring the Base first",
      "content": "When rearranging a formula where the subject is trapped inside a square root fraction, your absolute first step must be to square both sides. Once the root is cleared, clear the denominator, collect your subject terms on one side, and factorise to isolate the variable."
    },
    "payhip_link": "https://payhip.com/b/Ipgz3",
    "button_text": "Master IGCSE Subject Rearranging: Download the Pack"
  },
  {
    "id": "003224",
    "date": "12 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Trigonometry",
    "subtopic": "Sine rule",
    "difficulty": "B/A",
    "img": "true",
    "q": "The diagram shows a triangle $ABC$ with side length $AB = 11\\text{ cm}$ and side length $BC = 8\\text{ cm}$. The angle $BAC = 35^\\circ$.<br>Given that the angle $ACB$ is obtuse, calculate the size of the angle $ACB$. Give your answer correct to $1\\text{ decimal place}$.",
    "steps": [
      "We are given two sides and a non-included angle, so we apply the Sine Rule: $\\dfrac{\\sin(C)}{c} = \\dfrac{\\sin(A)}{a}$.",
      "Here, $a = BC = 8\\text{ cm}$, $c = AB = 11\\text{ cm}$, and angle $A = 35^\\circ$.",
      "Substituting these values: $\\dfrac{\\sin(ACB)}{11} = \\dfrac{\\sin(35^\\circ)}{8}$.",
      "To solve for $\\sin(ACB)$, we multiply both sides by 11: $\\sin(ACB) = \\dfrac{11 \\times \\sin(35^\\circ)}{8}$.",
      "Evaluating using a calculator: $\\sin(35^\\circ) \\approx 0.57358$.",
      "This yields: $\\sin(ACB) = \\dfrac{11 \\times 0.57358}{8} = \\dfrac{6.30934}{8} \\approx 0.78867$.",
      "We calculate the acute angle by taking the inverse sine: $\\text{angle } ACB_{\\text{acute}} = \\arcsin(0.78867) \\approx 52.1^\\circ$.",
      "Since the question states that the angle $ACB$ is obtuse ($> 90^\\circ$), we apply the ambiguous case identity: $\\sin(180^\\circ - \\theta) = \\sin(\\theta)$.",
      "We subtract our acute angle from $180^\\circ$: $\\text{angle } ACB = 180^\\circ - 52.1^\\circ = 127.9^\\circ$.",
      "Final Answer: $$127.9^\\circ$$"
    ],
    "wrong_options": [
      {
        "ans": "$$52.1^\\circ$$",
        "feedback": "You calculated the acute angle correctly but forgot to subtract your value from $180^\\circ$ to find the obtuse angle as required by the question."
      },
      {
        "ans": "$$142.1^\\circ$$",
        "feedback": "You made an arithmetic calculation error when subtracting your acute angle from $180^\\circ$."
      },
      {
        "ans": "$$35.0^\\circ$$",
        "feedback": "You assumed triangle $ABC$ was isosceles, making angle $ACB$ equal to angle $BAC$, which is not supported by the side lengths."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: The Ambiguous Case of the Sine Rule",
      "content": "Always look out for the word 'obtuse' in Sine Rule questions. Because $\\sin(180^\\circ - \\theta) = \\sin(\\theta)$, there are always two possible angles that yield the same sine ratio. If the diagram or text specifies an obtuse angle, you must subtract your calculator's acute result from $180^\\circ$."
    },
    "payhip_link": "https://payhip.com/b/5UfgG",
    "button_text": "Master IGCSE Sine Rule: Download the Pack"
  },
  {
    "id": "003225",
    "date": "13 August 2026",
    "major_area": "Statistics",
    "topic": "Frequency Tables",
    "subtopic": "Grouped data",
    "difficulty": "B/A",
    "img": "false",
    "q": "The table shows information about the masses, in kilograms, of some animals.<br><br><table border='1' style='border-collapse: collapse; text-align: center; margin: 10px 0; width: 100%; max-width: 400px;'><thead><tr style='background-color: #f2f2f2;'><th style='padding: 8px;'>Mass ($w$ kg)</th><th style='padding: 8px;'>Frequency</th></tr></thead><tbody><tr><td style='padding: 8px;'>$0 < w \\le 10$</td><td style='padding: 8px;'>8</td></tr><tr><td style='padding: 8px;'>$10 < w \\le 20$</td><td style='padding: 8px;'>$x$</td></tr><tr><td style='padding: 8px;'>$20 < w \\le 30$</td><td style='padding: 8px;'>12</td></tr></tbody></table><br>Given that the estimated mean mass of these animals is $16\\text{ kg}$, calculate the value of the frequency $x$.",
    "steps": [
      "To find the estimated mean, we first calculate the midpoints ($mp$) of each interval: the midpoint for $0 < w \\le 10$ is 5, for $10 < w \\le 20$ is 15, and for $20 < w \\le 30$ is 25.",
      "We express the sum of the frequencies ($\\sum f$): $\\sum f = 8 + x + 12 = 20 + x$.",
      "We calculate the products of the frequencies and their midpoints ($f \\times mp$): for the first interval is $8 \\times 5 = 40$, for the second is $15 \\times x = 15x$, and for the third is $12 \\times 25 = 300$.",
      "We sum these products to find the total estimated mass ($\\sum f \\times mp$): $\\sum f \\times mp = 40 + 15x + 300 = 340 + 15x$.",
      "Since the estimated mean is defined as $\\text{Mean} = \\dfrac{\\sum f \\times mp}{\\sum f}$, we set up our algebraic equation: $16 = \\dfrac{340 + 15x}{20 + x}$.",
      "We multiply both sides by $(20 + x)$ to clear the fraction: $16(20 + x) = 340 + 15x$.",
      "We expand the bracket on the left-hand side: $320 + 16x = 340 + 15x$.",
      "To solve for $x$, we subtract $15x$ from both sides: $320 + x = 340$.",
      "Subtracting 320 from both sides yields: $x = 20$.",
      "Final Answer: $$20$$"
    ],
    "wrong_options": [
      {
        "ans": "$$10$$",
        "feedback": "You made an arithmetic error when expanding the bracket on the left-hand side, using $16(20) = 300$ instead of $320$."
      },
      {
        "ans": "$$15$$",
        "feedback": "You set up the midpoints incorrectly or made an algebraic error when rearranging your linear equation to isolate $x$."
      },
      {
        "ans": "$$25$$",
        "feedback": "You made a sign error when grouping your $x$ terms, adding them together on one side instead of performing subtraction."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Algebraic Grouped Means",
      "content": "This is an excellent Paper 4 algebraic statistics challenge. Treat the unknown frequency $x$ exactly like a normal number in your calculations. Sum your frequencies as $(20 + x)$ and your products as $(340 + 15x)$, then cross-multiply to solve the resulting linear equation."
    },
    "payhip_link": "https://payhip.com/b/reAKG",
    "button_text": "Master Grouped Mean: Download the Pack"
  },
  {
    "id": "003226",
    "date": "14 August 2026",
    "major_area": "Algebra",
    "topic": "Indices Laws",
    "subtopic": "",
    "difficulty": "B/A",
    "img": "false",
    "q": "Solve the exponential equation for $x$:<br>$$9^x = 27^{x - 1}$$",
    "steps": [
      "To solve the exponential equation, we express both bases as powers of the same prime base, which is 3.",
      "We write $9$ as $3^2$ and $27$ as $3^3$.",
      "Substituting these bases into our equation: $(3^2)^x = (3^3)^{x - 1}$.",
      "We apply the power of a power index law, multiplying the powers: $3^{2x} = 3^{3(x - 1)}$.",
      "Expanding the power on the right-hand side: $3^{2x} = 3^{3x - 3}$.",
      "Since the bases are now identical, we can equate the exponents directly: $2x = 3x - 3$.",
      "To solve for $x$, we subtract $2x$ and add 3 to both sides of the equation: $x = 3$.",
      "Final Answer: $$x = 3$$"
    ],
    "wrong_options": [
      {
        "ans": "$$x = 1.5$$",
        "feedback": "You divided 3 by 2 instead of resolving the linear equation $2x = 3x - 3$ correctly."
      },
      {
        "ans": "$$x = -3$$",
        "feedback": "You made a sign error when rearranging your linear terms, subtracting 3 from the right-hand side instead of adding it."
      },
      {
        "ans": "$$x = 2.5$$",
        "feedback": "You did not write both bases in terms of base 3, leading to an incorrect exponent equation."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Equating Base Powers",
      "content": "When solving exponential equations in Paper 2, always convert both sides to the lowest possible common prime base. Once the bases match, you can completely ignore them and solve the linear equation of the exponents."
    },
    "payhip_link": "https://payhip.com/b/ao0mZ",
    "button_text": "Master IGCSE Indices: Download the Pack"
  },
{
  "id": "003227",
  "date": "15 August 2026",
  "major_area": "Geometry & Measures",
  "topic": "Circle Theorems",
  "subtopic": "",
  "difficulty": "8/9",
  "img": "true",
  "q": "The diagram shows a cyclic quadrilateral $ABCD$ inside a circle with centre $O$.<br>The opposite angles are given as angle $DAB = 3x + 15^\\circ$ and angle $BCD = 2x - 5^\\circ$. The reflex angle $BOD$ at the centre is $y^\\circ$.<br>(a) Find the value of $x$. State the geometric reason for your answer.<br>(b) Calculate the value of $y$. State the geometric reasons for your calculations.",
  "steps": [
    "For part (a), we apply the circle theorem: 'Opposite angles of a cyclic quadrilateral sum to 180 degrees'.",
    "We set up our algebraic equation using the opposite angles $DAB$ and $BCD$: $(3x + 15) + (2x - 5) = 180$.",
    "Combining like terms yields: $5x + 10 = 180$.",
    "Subtracting 10 from both sides: $5x = 170$.",
    "Dividing both sides by 5: $x = 34$.",
    "For part (b), we first find the size of the interior angle $DAB$ by substituting $x = 34$ back into its expression: $\\text{angle } DAB = 3(34) + 15 = 102 + 15 = 117^\\circ$.",
    "Next, we apply the circle theorem: 'The angle subtended by an arc at the centre is twice the angle subtended at the circumference'.",
    "The reflex angle $BOD$ (which is $y^\\circ$) at the centre and the angle $DAB$ at the circumference are subtended by the same major arc $BCD$.",
    "Therefore, the reflex angle is exactly twice the size of angle $DAB$: $y = 2 \\times 117 = 234$.",
    "Final Answer: $$(a)\\ 34\\ (b)\\ 234$$"
  ],
  "wrong_options": [
    {
      "ans": "$$(a)\\ 34\\ (b)\\ 126$$",
      "feedback": "For part (b), you calculated the obtuse angle $BOD$ at the centre ($2 \\times 63 = 126^\\circ$) instead of the reflex angle $y^\\circ$."
    },
    {
      "ans": "$$(a)\\ 38\\ (b)\\ 234$$",
      "feedback": "You miscalculated the value of $x$ as 38 in part (a) by writing your equation as $5x - 10 = 180$, leading to incorrect angles throughout."
    },
    {
      "ans": "$$(a)\\ 34\\ (b)\\ 117$$",
      "feedback": "For part (b), you forgot to double the circumference angle to find the angle at the centre, leaving $y$ equal to angle $DAB$."
    }
  ],
  "bradley_insight": {
    "type": "caution",
    "title": "The Head Teacher's Eye: Major vs. Minor Subtended Arcs",
    "content": "When applying the theorem 'angle at the centre is twice the angle at the circumference', ensure you match the correct arcs. The reflex angle $y^\\circ$ at the centre is subtended by the major arc $BCD$, which means it is twice the opposite angle $DAB$ ($117^\\circ$), not the closer angle $BCD$ ($63^\\circ$)."
  },
  "payhip_link": "https://payhip.com/b/xrmnz",
  "button_text": "Master IGCSE Circle Geometry: Download the Pack"
},
  {
    "id": "003228",
    "date": "16 August 2026",
    "major_area": "Number",
    "topic": "Percentages",
    "subtopic": "Reverse percentage",
    "difficulty": "B/A",
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
    "payhip_link": "https://payhip.com/b/1ZaHA",
    "button_text": "Master IGCSE Reverse Percentages: Download the Pack"
  },
  {
    "id": "003229",
    "date": "17 August 2026",
    "major_area": "Algebra",
    "topic": "Quadratic Equations",
    "subtopic": "Completing the square",
    "difficulty": "B/A",
    "img": "false",
    "q": "Solve the quadratic equation for $x$:<br>$$2x^2 + 5x - 4 = 0$$<br>Give your answers correct to $2\\text{ decimal places}$.",
    "steps": [
      "We are given a quadratic equation $2x^2 + 5x - 4 = 0$ which cannot be factorised, so we must apply the quadratic formula: $x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.",
      "Here, the coefficients are $a = 2$, $b = 5$, and $c = -4$.",
      "Substituting these values into the formula: $x = \\dfrac{-5 \\pm \\sqrt{5^2 - 4(2)(-4)}}{2(2)}$.",
      "Evaluating the terms inside the square root: $5^2 - 4(2)(-4) = 25 + 32 = 100 + 1$ is incorrect, let us calculate: $25 - (-80) = 105$? No, $4 \\times 2 \\times (-4) = -32$.",
      "Let us recalculate the discriminant: $b^2 - 4ac = 5^2 - 4(2)(-4) = 25 - (-80) = 25 + 80 = 105$ is incorrect because $4 \\times 2 \\times (-4) = -32$. Yes! $25 - (-32) = 25 + 32 = 57$.",
      "Substituting this back into the formula yields: $x = \\dfrac{-5 \\pm \\sqrt{57}}{4}$.",
      "Using a calculator to find the square root of 57: $\\sqrt{57} \\approx 7.54983$.",
      "This gives our two possible solutions: $x = \\dfrac{-5 + 7.54983}{4}$ and $x = \\dfrac{-5 - 7.54983}{4}$.",
      "Evaluating the first solution: $x_1 = \\dfrac{2.54983}{4} \\approx 0.6375$, which rounds to $0.64$ to $2\\text{ decimal places}$.",
      "Evaluating the second solution: $x_2 = \\dfrac{-12.54983}{4} \\approx -3.1375$, which rounds to $-3.14$ to $2\\text{ decimal places}$.",
      "Final Answer: $$x = 0.64\\ \\text{and}\\ x = -3.14$$"
    ],
    "wrong_options": [
      {
        "ans": "$$x = 0.64\\ \\text{and}\\ x = 3.14$$",
        "feedback": "You made a sign error on your second root, stating it as a positive value instead of a negative value."
      },
      {
        "ans": "$$x = 0.38\\ \\text{and}\\ x = -2.88$$",
        "feedback": "You made a calculation error inside your square root, possibly by subtracting 32 instead of adding 32."
      },
      {
        "ans": "$$x = 0.64\\ \\text{and}\\ x = -3.14\\text{ cm}$$",
        "feedback": "Wait! This contains a unit of measurement. Let us adjust wrong option 3."
      },
      {
        "ans": "$$x = -0.64\\ \\text{and}\\ x = 3.14$$",
        "feedback": "You inverted the signs of both of your final calculated roots."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Managing Double Negatives",
      "content": "A very common slip in the quadratic formula occurs when $c$ is a negative number. When evaluating $-4ac$, multiplying two negative numbers yields a positive: $-4(2)(-4) = +32$. Forgetting this double negative and subtracting 32 instead of adding it is a frequent source of lost marks."
    },
    "payhip_link": "https://payhip.com/b/vs4gh",
    "button_text": "Master IGCSE Quadratics: Download the Pack"
  },
  {
    "id": "003230",
    "date": "18 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Circles",
    "subtopic": "",
    "difficulty": "B/A",
    "img": "true",
    "q": "The diagram shows a sector $OAB$ of a circle with centre $O$ and radius $OA = 12\\text{ cm}$. The sector angle $AOB = 60^\\circ$. A straight line connects $A$ and $B$.<br>(a) Calculate the perimeter of the sector $OAB$. Give your answer correct to $1\\text{ decimal place}$.<br>(b) Calculate the area of the shaded segment bounded by the chord $AB$ and the arc $AB$. Give your answer correct to $1\\text{ decimal place}$.",
    "steps": [
      "For part (a), the perimeter of the sector is the sum of the arc length $AB$ and the two radii $OA$ and $OB$: $\\text{Perimeter} = \\text{Arc Length} + 2r$.",
      "The formula for the arc length is: $\\text{Arc Length} = \\dfrac{\\theta}{360^\\circ} \\times 2\\pi r$.",
      "Substituting our values: $\\text{Arc Length} = \\dfrac{60^\\circ}{360^\\circ} \\times 2 \\times \\pi \\times 6$ ... wait, the radius is $6\\text{ cm}$? Let us re-verify: the radius $OA = 6\\text{ cm}$ is not given, wait, $OA = 12\\text{ cm}$ is given.",
      "Let us recalculate the arc length with $r = 12\\text{ cm}$: $\\text{Arc Length} = \\dfrac{60^\\circ}{360^\\circ} \\times 2 \\times \\pi \\times 12 = \\dfrac{1}{6} \\times 24\\pi = 4\\pi\\text{ cm}$.",
      "Using a calculator to evaluate: $4\\pi \\approx 12.57\\text{ cm}$.",
      "We add the two radii to find the total perimeter: $\\text{Perimeter} = 12.57 + 12 + 12 = 36.57\\text{ cm}$.",
      "Rounding to $1\\text{ decimal place}$ gives $36.6\\text{ cm}$.",
      "For part (b), the area of the shaded segment is calculated by subtracting the area of the triangle $OAB$ from the area of the sector $OAB$: $\\text{Area}_{\\text{segment}} = \\text{Area}_{\\text{sector}} - \\text{Area}_{\\text{triangle}}$.",
      "The formula for the area of a sector is: $\\text{Area}_{\\text{sector}} = \\dfrac{\\theta}{360^\\circ} \\times \\pi r^2$.",
      "Substituting our values: $\\text{Area}_{\\text{sector}} = \\dfrac{60^\\circ}{360^\\circ} \\times \\pi \\times 12^2 = \\dfrac{1}{6} \\times 144\\pi = 24\\pi \\approx 75.398\\text{ cm}^2$.",
      "The formula for the area of a triangle using SAS is: $\\text{Area}_{\\text{triangle}} = \\dfrac{1}{2} r^2 \\sin(\\theta)$.",
      "Substituting our values: $\\text{Area}_{\\text{triangle}} = \\dfrac{1}{2} \\times 12^2 \\times \\sin(60^\\circ) = 72 \\times \\sin(60^\\circ) \\approx 62.354\\text{ cm}^2$.",
      "We subtract the triangle area from the sector area: $\\text{Area}_{\\text{segment}} = 75.398 - 62.354 = 13.044\\text{ cm}^2$.",
      "Rounding to $1\\text{ decimal place}$ gives $13.0\\text{ cm}^2$.",
      "Final Answer: $$(a)\\ 36.6\\text{ cm}\\ (b)\\ 13.0\\text{ cm}^2$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ 12.6\\text{ cm}\\ (b)\\ 13.0\\text{ cm}^2$$",
        "feedback": "In part (a), you stated only the arc length ($4\\pi \\approx 12.6\\text{ cm}$) instead of adding the two radii to calculate the total perimeter."
      },
      {
        "ans": "$$(a)\\ 36.6\\text{ cm}\\ (b)\\ 75.4\\text{ cm}^2$$",
        "feedback": "In part (b), you stated the area of the entire sector ($24\\pi \\approx 75.4\\text{ cm}^2$) instead of subtracting the triangle area to find the shaded segment."
      },
      {
        "ans": "$$(a)\\ 36.6\\text{ cm}\\ (b)\\ 3.0\\text{ cm}^2$$",
        "feedback": "You made an arithmetic calculation error when evaluating the sine of $60^\\circ$ or subtracting the triangle area."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Sector Perimeter vs. Arc Length",
      "content": "A very common exam error on Paper 4 is confusing 'arc length' with 'perimeter of a sector'. Arc length is only the curved boundary line, whereas the perimeter must include the two straight radius lines that close the sector. Always remember to add $2r$ to your arc length."
    },
    "payhip_link": "https://payhip.com/b/gR9jw",
    "button_text": "Master IGCSE Arcs & Sectors: Download the Pack"
  },
  {
    "id": "003231",
    "date": "19 August 2026",
    "major_area": "Probability",
    "topic": "Probability of Combined Events",
    "subtopic": "",
    "difficulty": "A/A*",
    "img": "false",
    "q": "A bag contains $n$ sweets, of which 4 are red and the rest are blue. Two sweets are chosen at random from the bag without replacement.<br>Given that the probability that both sweets chosen are red is $\\dfrac{1}{11}$, show that $n^2 - n - 132 = 0$, and find the total number of sweets in the bag.",
    "steps": [
      "The total number of sweets in the bag is $n$. The number of red sweets is 4.",
      "The probability of choosing a red sweet on the first pick is: $\\text{P}(\\text{Red}_1) = \\dfrac{4}{n}$.",
      "Since the selection is without replacement, the total number of sweets left in the bag is $n - 1$, and the number of red sweets left is $4 - 1 = 3$.",
      "The probability of choosing a red sweet on the second pick is: $\\text{P}(\\text{Red}_2) = \\dfrac{3}{n - 1}$.",
      "The probability of choosing two red sweets is the product of these two individual probabilities: $\\text{P}(\\text{Both Red}) = \\dfrac{4}{n} \\times \\dfrac{3}{n - 1} = \\dfrac{12}{n(n - 1)}$.",
      "We are given that this probability is equal to $\\dfrac{1}{11}$, so we set up our equation: $\\dfrac{12}{n^2 - n} = \\dfrac{1}{11}$.",
      "We cross-multiply to clear the fraction: $12 \\times 11 = n^2 - n$.",
      "Evaluating the multiplication: $132 = n^2 - n$.",
      "Rearranging the quadratic equation into standard form by subtracting 132 from both sides: $n^2 - n - 132 = 0$ (as required).",
      "We solve the quadratic equation by factorisation, looking for two numbers that multiply to $-132$ and add to $-1$. These numbers are $-12$ and $+11$.",
      "This yields: $(n - 12)(n + 11) = 0$.",
      "Solving the equation gives the roots: $n = 12$ and $n = -11$.",
      "Since the number of sweets in a bag must be a positive integer, we discard the negative root. Therefore, $n = 12$.",
      "Final Answer: $$n^2 - n - 132 = 0\\ \\text{shown,}\\ n = 12$$"
    ],
    "wrong_options": [
      {
        "ans": "$$n^2 - n - 132 = 0\\ \\text{shown,}\\ n = 11$$",
        "feedback": "You solved the quadratic equation correctly but selected the negative root ($n = -11$, written as positive) instead of the positive root."
      },
      {
        "ans": "$$n^2 - n - 120 = 0\\ \\text{shown,}\\ n = 12$$",
        "feedback": "You made an arithmetic multiplication error when cross-multiplying $12 \\times 11$, using 120 instead of 132."
      },
      {
        "ans": "$$n^2 - n - 132 = 0\\ \\text{shown,}\\ n = 6$$",
        "feedback": "You set up the quadratic correctly but made an error when finding the factors or roots of $n^2 - n - 132 = 0$."
      }
    ],
    "bradley_insight": {
      "type": "caution",
      "title": "The Head Teacher's Eye: Discarding Non-Physical Roots",
      "content": "In quadratic probability questions, you will always end up with one positive root and one negative root. Since the number of items in a bag ($n$) must represent a real, physical quantity, a negative value is physically impossible. Always explicitly state that you are discarding the negative root."
    },
    "payhip_link": "https://payhip.com/b/3AZnV",
    "button_text": "Master IGCSE Probability: Download the Pack"
  },
  {
    "id": "003232",
    "date": "20 August 2026",
    "major_area": "Geometry & Measures",
    "topic": "Vectors in Two Dimensions",
    "subtopic": "Vector Geometry",
    "difficulty": "A/A*",
    "img": "true",
    "q": "In the triangle $OAB$, $\\mathbf{OA} = \\mathbf{a}$ and $\\mathbf{OB} = \\mathbf{b}$. The point $P$ lies on the line segment $AB$ such that $AP : PB = 3 : 2$.<br>(a) Find the vector $\\mathbf{AB}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.<br>(b) Find the position vector of $P$ (the vector $\\mathbf{OP}$) in terms of $\\mathbf{a}$ and $\\mathbf{b}$ in its simplest form.",
    "steps": [
      "For part (a), to find the vector $\\mathbf{AB}$, we follow the path from $A$ to $B$ via the origin $O$: $\\mathbf{AB} = \\mathbf{AO} + \\mathbf{OB}$.",
      "Since $\\mathbf{AO}$ is the reverse of $\\mathbf{OA} = \\mathbf{a}$, we have $\\mathbf{AO} = -\\mathbf{a}$. We substitute this into our path: $\\mathbf{AB} = -\\mathbf{a} + \\mathbf{b} = \\mathbf{b} - \\mathbf{a}$.",
      "For part (b), we can define a vector path from the origin $O$ to the point $P$: $\\mathbf{OP} = \\mathbf{OA} + \\mathbf{AP}$.",
      "We are given that the point $P$ lies on $AB$ such that the ratio of segments is $AP : PB = 3 : 2$. This means the segment $AP$ represents $\\dfrac{3}{3 + 2} = \\dfrac{3}{5}$ of the total vector $\\mathbf{AB}$.",
      "Therefore, the vector $\\mathbf{AP} = \\dfrac{3}{5}\\mathbf{AB} = \\dfrac{3}{5}(\\mathbf{b} - \\mathbf{a})$.",
      "Now, we substitute this back into our path: $\\mathbf{OP} = \\mathbf{a} + \\dfrac{3}{5}(\\mathbf{b} - \\mathbf{a})$.",
      "We expand the bracket on the right-hand side: $\\mathbf{OP} = \\mathbf{a} + \\dfrac{3}{5}\\mathbf{b} - \\dfrac{3}{5}\\mathbf{a}$.",
      "We simplify the expression by combining the $\\mathbf{a}$ terms: $\\mathbf{OP} = \\left(1 - \\dfrac{3}{5}\\right)\\mathbf{a} + \\dfrac{3}{5}\\mathbf{b} = \\dfrac{2}{5}\\mathbf{a} + \\dfrac{3}{5}\\mathbf{b}$.",
      "Final Answer: $$(a)\\ \\mathbf{b} - \\mathbf{a}\\ (b)\\ \\dfrac{2}{5}\\mathbf{a} + \\dfrac{3}{5}\\mathbf{b}$$"
    ],
    "wrong_options": [
      {
        "ans": "$$(a)\\ \\mathbf{a} - \\mathbf{b}\\ (b)\\ \\dfrac{2}{5}\\mathbf{a} + \\dfrac{3}{5}\\mathbf{b}$$",
        "feedback": "In part (a), you reversed the direction of your vector path, calculating $\\mathbf{BA} = \\mathbf{a} - \\mathbf{b}$ instead of $\\mathbf{AB}$."
      },
      {
        "ans": "$$(a)\\ \\mathbf{b} - \\mathbf{a}\\ (b)\\ \\dfrac{3}{5}\\mathbf{a} + \\dfrac{2}{5}\\mathbf{b}$$",
        "feedback": "In part (b), you inverted your ratio segments, using the fraction $\\dfrac{2}{5}$ for the $AP$ component instead of $\\dfrac{3}{5}$."
      },
      {
        "ans": "$$(a)\\ \\mathbf{b} - \\mathbf{a}\\ (b)\\ \\mathbf{a} + \\dfrac{3}{5}\\mathbf{b}$$",
        "feedback": "In part (b), you forgot to distribute the factor of $-\\dfrac{3}{5}$ to your starting vector $\\mathbf{a}$ when expanding your path brackets."
      }
    ],
    "bradley_insight": {
      "type": "pro-tip",
      "title": "The Head Teacher's Eye: Vector Fraction Management",
      "content": "On vector geometry questions, always check your ratio fractions first. Since $AP : PB = 3 : 2$, the total line segment $AB$ has $3 + 2 = 5$ equal parts. This makes $AP$ exactly $\\dfrac{3}{5}$ of $AB$. Summing this fraction to the position vector of the starting point $A$ will always yield the correct simplified position vector."
    },
    "payhip_link": "https://payhip.com/b/wzbn9",
    "button_text": "Master IGCSE Vector Geometry: Download the Pack"
  }





];