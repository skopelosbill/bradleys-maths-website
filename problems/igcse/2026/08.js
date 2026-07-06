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
}


];