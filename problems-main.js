const anchorDate = new Date("2026-01-24");
const problemBank = [
            // JAN 24 (Today)
            {
                q: "Algebraic Proof: Prove that $(n+1)^2 - (n-1)^2$ is always a multiple of 4.",
                steps: ["Expand $(n+1)^2 = n^2 + 2n + 1$.", "Expand $(n-1)^2 = n^2 - 2n + 1$.", "Subtract: $(n^2 + 2n + 1) - (n^2 - 2n + 1)$.", "Simplify: $4n$.", "Conclusion: $4n$ is clearly a multiple of 4."]
            },
            // JAN 25
            {
                q: "Vectors: $M$ is the midpoint of line $AB$. $\\vec{OA} = \\mathbf{a}$ and $\\vec{OB} = \\mathbf{b}$. Find $\\vec{OM}$.",
                steps: ["Path: $\\vec{OM} = \\vec{OA} + \\vec{AM}$.", "Find $\\vec{AB} = \\mathbf{b} - \\mathbf{a}$.", "$\\vec{AM} = \\frac{1}{2}(\\mathbf{b} - \mathbf{a})$.", "$\\vec{OM} = \\mathbf{a} + \\frac{1}{2}\\mathbf{b} - \\frac{1}{2}\\mathbf{a}$.", "Final Answer: $$\\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$$"]
            },
            // JAN 26
            {
                q: "Functions: $f(x) = \\frac{1}{x+2}$. Find $f^{-1}(x)$.",
                steps: ["Let $y = \\frac{1}{x+2}$.", "Swap x and y: $x = \\frac{1}{y+2}$.", "Rearrange: $x(y+2) = 1$.", "$y+2 = \\frac{1}{x}$.", "Final Answer: $$f^{-1}(x) = \\frac{1}{x} - 2$$"]
            },
            // JAN 27
            {
                q: "Exact Trig: Calculate the area of a triangle with sides $6\\text{cm}$, $8\\text{cm}$ and angle $30^\\circ$ between them.",
                img: "images/triangle_area.png",
                steps: ["Formula: Area = $\\frac{1}{2}ab\\sin C$.", "Sub: $\\frac{1}{2} \\times 6 \\times 8 \\times \\sin(30)$.", "Recall $\\sin(30) = 0.5$.", "$24 \\times 0.5$.", "Final Answer: $$12 \\text{ cm}^2$$"]
            },
            // JAN 28
            {
                q: "Indices: Given $2^x \\times 4^{y} = 8$, express $x$ in terms of $y$.",
                steps: ["Base 2: $4 = 2^2$ and $8 = 2^3$.", "Rewrite: $2^x \\times (2^2)^y = 2^3$.", "$2^x \\times 2^{2y} = 2^3$.", "Add powers: $x + 2y = 3$.", "Final Answer: $$x = 3 - 2y$$"]
            },
            // JAN 29
            {
                q: "Probability: A bag has 3 Red and 7 Blue counters. Two are picked without replacement. P(Same Colour).",
                steps: ["P(RR) = $\\frac{3}{10} \\times \\frac{2}{9} = \\frac{6}{90}$.", "P(BB) = $\\frac{7}{10} \\times \\frac{6}{9} = \\frac{42}{90}$.", "Add them: $\\frac{6}{90} + \\frac{42}{90}$.", "Simplify $\\frac{48}{90}$.", "Final Answer: $$\\frac{8}{15}$$"]
            },
            // JAN 30
            {
                q: "Bounds: $x = 10$ (1 s.f.) and $y = 5$ (1 s.f.). Calculate the Upper Bound of $x - y$.",
                steps: ["Max Difference = Max $x$ - Min $y$.", "$UB_x = 15$ (Wait! 1sf means range 5-15? No, range 9.5-10.5? No, 1sf 10 means range 5-15).", "$LB_y = 4.5$.", "Calc: $15 - 4.5$.", "Final Answer: $$10.5$$"]
            },
            // JAN 31
            {
                q: "Circle Equation: Find the gradient of the tangent to $x^2 + y^2 = 25$ at the point $(3, 4)$.",
                steps: ["Gradient of Radius (Origin to 3,4): $\\frac{4}{3}$.", "Tangent is perpendicular.", "Negative Reciprocal.", "Final Answer: $$-\\frac{3}{4}$$"]
            },
            // FEB 1
            {
                q: "Surds: Expand and simplify $(3 + \\sqrt{5})^2$.",
                steps: ["$(3+\\sqrt{5})(3+\\sqrt{5})$.", "FOIL: $9 + 3\\sqrt{5} + 3\\sqrt{5} + 5$.", "Collect integers: $9+5=14$.", "Collect surds: $6\\sqrt{5}$.", "Final Answer: $$14 + 6\\sqrt{5}$$"]
            },
            // FEB 2
            {
               // q: "Quadratic Inequality: Solve $x^2 - 9 > 0$.",
               // img: "quadratic_inequality.PNG",
               // steps: ["Factorise: $(x-3)(x+3) > 0$.", "Critical values: $3, -3$.", "Sketch U-shape parabola.", "Where is it ABOVE axis?", "Final Answer: $$x > 3 \\text{ or } x < -3$$"]
               q: `complete the square on the quadratic expression:
                   $3x^2-6x+1$
                   Hence write down the coordinates of the minimum point of the graph of $y=3x^2-6x+1$`,
                steps: [
                    "$3x^2-6x+1\\equiv 3(x^2-2x)+1$",
                    "$\\equiv 3(x^2-2x+1) -3 + 1$",
                    "$\\equiv 3(x-1)^2 - 2 \\Rightarrow \\text{Coordinates of minimum point are: } (1,-2)$"
                    ]
            },
            // FEB 3
            {
                q: "Ratio: If $x:y = 1:2$ and $y:z = 3:5$.<br>Find $x:z$.",
                steps: ["Make $y$ consistent.", "Multiply first ratio by 3: $x:y = 3:6$.", "Multiply second ratio by 2: $y:z = 6:10$.", "Combine: $3:6:10$.", "Final Answer: $$3:10$$"]
            },
            // FEB 4
            {
                q: "Iteration: Use $x_{n+1} = \\sqrt[3]{x_n + 7}$ with $x_0 = 2$ to find $x_1$.",
                steps: ["Substitute 2 into formula.", "$x_1 = \\sqrt[3]{2 + 7}$.", "$\\sqrt[3]{9}$.", "Calc value.", "Final Answer: $$2.08$$ (2dp)"]
            },
            // FEB 5
            {
                q: "Histograms: Class width 0-10 Frequency 5. Class width 10-30 Frequency 20. Which bar is taller?",
                steps: ["Frequency Density = Frequency / Class width.", "Bar 1: $5 \\div 10 = 0.5$.", "Bar 2: $20 \\div 20 = 1.0$.", "1.0 is higher than 0.5.", "Final Answer: $$10-30 \\text{ is taller}$$"]
            },
            // FEB 6
            {
                q: "Simultaneous Eq: $y = x^2$ and $y = 2x + 3$. Find x.",
                steps: ["Equate: $x^2 = 2x + 3$.", "$x^2 - 2x - 3 = 0$.", "Factorise: $(x-3)(x+1) = 0$.", "Final Answer: $$x=3, x=-1$$"]
            },
            // FEB 7
            {
                q: "Compound Interest: £5000 at 2% for 3 years. Total amount?",
                steps: ["Multiplier = 1.02.", "Calc: $5000 \\times 1.02^3$.", "$5000 \\times 1.061208$.", "Final Answer: $$£5306.04$$"]
            },
            // FEB 8
            {
                q: "Geometry: Exterior angle of a regular polygon is $18^\\circ$. How many sides does the polygon have?",
                img: "images/exterior_angle.PNG",
                steps: ["Formula: Sum of exterior angles = $360^\\circ$.", "$n = 360 \\div 18$.", "Calculation.", "Final Answer: $$20 \\text{ sides}$$"]
            },
            // FEB 9
            {
                q: "Trig Graphs: What is the maximum value of $y = 3 \\sin x$?",
                steps: ["Max value of $\\sin x$ is 1.", "Multiply by 3.", "Final Answer: $$3$$"]
            },
            // FEB 10
            {
                q: "An item is marked 20% Off! in a sale.  If the sale price is £40, what was the original price?",
                steps: ["£40 is 80%.", "Divide by 0.8.", "$400 \\div 8 = 50$.", "Final Answer: $$£50$$"]
            },
            // FEB 11
            {
                q: "Transformations: Describe $y = f(x-2)$.",
                steps: ["Inside bracket affects x (opposite).", "$-2$ means Add 2 to x.", "Moves Right.", "Final Answer: $$\\text{Translation } \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$$"]
            },
            // FEB 12
            {
                q: "Sequence: nth term is $2n^2 + 1$. Find the 3rd term.",
                steps: ["Sub $n=3$.", "$2(3^2) + 1$.", "$2(9) + 1$.", "Final Answer: $$19$$"]
            },
            // FEB 13
            {
                q: "Density: Mass 2kg, Volume $400cm^3$. Density in $g/cm^3$.",
                steps: ["Convert Mass: $2kg = 2000g$.", "Density = $2000 \\div 400$.", "Cancel zeros: $20 \\div 4$.", "Final Answer: $$5 \\text{ g/cm}^3$$"]
            },
            // FEB 14
            {
                q: "Valentines Special: Equation of a circle centre (0,0) radius 5.",
                steps: ["Formula: $x^2 + y^2 = r^2$.", "$r = 5$, so $r^2 = 25$.", "Final Answer: $$x^2 + y^2 = 25$$"]
            },
            // FEB 15
            {
                q: "Standard Form: $\\frac{8 \\times 10^5}{2 \\times 10^{-2}}$",
                steps: ["Numbers: $8 \\div 2 = 4$.", "Powers: $10^5 \\div 10^{-2} = 10^{5 - (-2)} = 10^7$.", "Final Answer: $$4 \\times 10^7$$"]
            },
            // FEB 16
            {
                q: "Arc Length: Sector angle $60^\\circ$, Radius 6cm.",
                img: "images/arc_length.PNG",
                steps: ["Fraction: $\\frac{60}{360} = \\frac{1}{6}$.", "Circumference: $\\pi d = 12\\pi$.", "Calc: $\\frac{1}{6} \\times 12\\pi$.", "Final Answer: $$2\\pi$$"]
            },
            // FEB 17
            {
                q: "Recurring Decimal: Convert $0.4\\dot{5}$ to a fraction.",
                steps: ["$x = 0.4555...$", "$10x = 4.555...$", "$100x = 45.555...$", "Subtract: $90x = 41$.", "Final Answer: $$\\frac{41}{90}$$"]
            },
            // FEB 18
            {
                q: "Volume Scale Factor: Two similar solids. Length ratio 1:3. Volume ratio?",
                steps: ["Length scale factor $k = 3$.", "Volume scale factor $k^3$.", "$3^3 = 27$.", "Final Answer: $$1:27$$"]
            },
            // FEB 19
            {
                q: "Algebraic Fraction: Simplify $\\frac{x^2 - 9}{x^2 + 5x + 6}$.",
                steps: ["Top: DOTS $(x-3)(x+3)$.", "Bottom: Factorise $(x+2)(x+3)$.", "Cancel $(x+3)$.", "Final Answer: $$\\frac{x-3}{x+2}$$"]
            },
            // FEB 20
            {
                q: "Product Rule: 3 Starters, 4 Mains, 2 Desserts. How many options?",
                steps: ["Multiply the choices.", "$3 \\times 4 \\times 2$.", "12 x 2.", "Final Answer: $$24$$"]
            },
            // FEB 21
            {
                q: "Gradient of Perpendicular: Line A has gradient 3. Line B is perpendicular.",
                steps: ["Perpendicular gradient is negative reciprocal.", "Flip 3 to $\\frac{1}{3}$.", "Change sign.", "Final Answer: $$-\\frac{1}{3}$$"]
            },
            // FEB 22
            {
                q: "Fractional Power: Evaluate $16^{-3/2}$.",
                steps: ["Negative: $\\frac{1}{16^{3/2}}$.", "Root: $\\sqrt{16} = 4$.", "Cube: $4^3 = 64$.", "Final Answer: $$\\frac{1}{64}$$"]
            },
            // FEB 23
            {
                q: "Bounds (Division): Max value of $\\frac{10}{x}$ where $x=2$ (nearest integer).",
                steps: ["To maximise fraction, minimise denominator.", "Lower Bound of 2 is 1.5.", "Calc: $10 \\div 1.5$.", "Final Answer: $$6.67$$"]
            },
            // FEB 24
            {
                q: "Vectors: $\\vec{AB} = 2\\mathbf{a}$. $\\vec{BC} = 3\\mathbf{a}$. Are A, B, C collinear?",
                steps: ["$\\vec{AB}$ and $\\vec{BC}$ are parallel (both multiples of $\\mathbf{a}$).", "They share point B.", "Therefore they are on a straight line.", "Final Answer: $$\\text{Yes}$$"]
            },
            // FEB 25
            {
                q: "Exact Trig: Value of $\\tan 45^\\circ + \\sin 90^\\circ$.",
                steps: ["$\\tan 45 = 1$.", "$\\sin 90 = 1$.", "$1 + 1$.", "Final Answer: $$2$$"]
            },
            // FEB 26
            {
                q: "Circle Theorems: Cyclic Quadrilateral ABCD. Angle A = $80^\\circ$. Angle C?",
                    img: "images/cyclic_quad.png",
                steps: ["Opposite angles sum to $180^\\circ$.", "$180 - 80$.", "Final Answer: $$100^\\circ$$"]
            },
            // FEB 27
            {
                q: "Inequality Region: $y > x$ and $x + y < 4$. Describe test point $(1,1)$.",
                    img: "images/region.PNG",
                steps: ["Is $1 > 1$? No. (On line, not in region).", "Is $1 + 1 < 4$? Yes.", "Overall?", "Final Answer: $$\\text{Not in region}$$"]
            },
            // FEB 28
            {
                q: "End of Month Challenge: Solve $3^{2x} = 27$.",
                steps: ["Write 27 as power of 3: $3^3$.", "Equation: $3^{2x} = 3^3$.", "Equate powers: $2x = 3$.", "Final Answer: $$x = 1.5$$"]
            },
            {
    "date": "1 March",
    "topic": "Pythagoras",
    "notice": "This is a non-calculator question.",
    "q": "The diagram shows $\\triangle ABC$.<br>$AB = 6$cm.<br>$AC = 8$cm.<br>$\\angle BAC = 90^\\circ$.<br>(a) Find $BC$.<br>(b) Find the area of $\\triangle ABC$.",
    "img": "images/1_Mar_G.png",
    "steps": [
        "$BC^2 = 6^2 + 8^2$",
        "$= 36 + 64$",
        "$= 100$",
        "$BC = 10$cm",
        "$\\text{Area} = \\dfrac{1}{2} \\times 6 \\times 8$",
        "$= 24\\text{ cm}^2$"
      ]
  },
  {
    "date": "2 March",
    "topic": "Compound Interest",
    "notice": "",
    "q": "£1500 is invested at $4\\%$ compound interest per year.<br>Calculate the total amount after 2 years.<br>Give your answer to the nearest penny.",
    "img": "",
    "steps": [
        "$\\text{Multiplier} = 1.04$",
        "$\\text{Amount} = 1500 \\times 1.04^2$",
        "$= 1500 \\times 1.0816$",
        "$= 1622.40$",
        "£1622.40"
      ]
  },
  {
    "date": "3 March",
    "topic": "Algebra - Expanding",
    "notice": "This is a non-calculator question.",
    "q": "Expand and simplify:<br>$$4(3x - 2) - 5(x + 1)$$",
    "img": "",
    "steps": [
        "$= 12x - 8 - 5x - 5$",
        "$= 7x - 13$"
      ]
  },
  {
    "date": "4 March",
    "topic": "Trigonometry",
    "notice": "",
    "q": "The diagram shows a right-angled triangle.<br>$\\angle A = 35^\\circ$.<br>The side opposite angle $A$ is 7cm.<br>Find the hypotenuse.<br>Give your answer to 1 decimal place.",
    "img": "images/4_Mar_G.png",
    "steps": [
        "$\\sin 35^\\circ = \\dfrac{7}{h}$",
        "$h = \\dfrac{7}{\\sin 35^\\circ}$",
        "$h \\approx 12.2\\text{ cm}$"
      ]
  },
  {
    "date": "5 March",
    "topic": "Indices",
    "notice": "This is a non-calculator question.",
    "q": "Simplify:<br>$$3^4 \\times 3^2$$.<br>Give your answer as a power of 3.",
    "img": "",
    "steps": [
        "$= 3^{4+2}$",
        "$= 3^6$"
      ]
  },
  {
    "date": "6 March",
    "topic": "Simultaneous Equations",
    "notice": "This is a non-calculator question.",
    "q": "Solve the simultaneous equations.<br>$2x + y = 7$<br>$x - y = 2$.",
    "img": "",
    "steps": [
        "Add equations:",
        "$3x = 9$",
        "$x = 3$",
        "Substitute into $x - y = 2$",
        "$3 - y = 2$",
        "$y = 1$"
      ]
  },
  {
    "date": "7 March",
    "topic": "Standard Form",
    "notice": "This is a non-calculator question.",
    "q": "Write $0.00056$ in standard form.",
    "img": "",
    "steps": [
        "$5.6 \\times 10^{-4}$"
      ]
  },
  {
    "date": "8 March",
    "topic": "Percentages",
    "notice": "",
    "q": "A jacket costs £80.<br>It is reduced by $15\\%$.<br>Calculate the sale price.",
    "img": "",
    "steps": [
        "$15\\% \\text{ of } 80 = 12$",
        "$80 - 12 = 68$",
        "£68"
      ]
  },
  {
    "date": "9 March",
    "topic": "Circle Theorems",
    "notice": "This is a non-calculator question.",
    "q": "The diagram shows a circle with centre $O$.<br>$\\angle AOB = 110^\\circ$.<br>$\\angle ACB$ is an angle at the circumference standing on the same arc.<br>Find $\\angle ACB$.",
    "img": "images/9_Mar_G.png",
    "steps": [
        "Angle at centre is twice angle at circumference.",
        "$\\angle ACB = \\dfrac{110}{2}$",
        "$= 55^\\circ$"
      ]
  },
  {
    "date": "10 March",
    "topic": "Quadratics",
    "notice": "This is a non-calculator question.",
    "q": "Solve:<br>$$x^2 - 5x + 6 = 0$$",
    "img": "",
    "steps": [
        "$(x - 2)(x - 3) = 0$",
        "$x = 2$ or $x = 3$"
      ]
  },
  {
    "date": "11 March",
    "topic": "Volume - Cylinder",
    "notice": "",
    "q": "A cylinder has radius 4cm.<br>Its height is 10cm.<br>Calculate the volume.<br>Give your answer in terms of $\\pi$.",
    "img": "images/11_Mar_G.png",
    "steps": [
        "$\\text{Volume} = \\pi r^2 h$",
        "$= \\pi \\times 4^2 \\times 10$",
        "$= 160\\pi\\text{ cm}^3$"
      ]
  },
  {
    "date": "12 March",
    "topic": "Ratio",
    "notice": "This is a non-calculator question.",
    "q": "Share £84 in the ratio $3 : 4$.",
    "img": "",
    "steps": [
        "$\\text{Total parts} = 7$",
        "$\\text{One part} = \\dfrac{84}{7} = 12$",
        "$3 \\text{ parts} = 36$",
        "$4 \\text{ parts} = 48$"
      ]
  },
  {
    "date": "13 March",
    "topic": "Scatter Graphs",
    "notice": "",
    "q": "The scatter graph shows the relationship between hours studied and test score.<br>Describe the correlation.<br>Explain your answer.",
    "img": "images/13_Mar_G.png",
    "steps": [
        "Positive correlation.",
        "As hours studied increases, test score increases."
      ]
  },
  {
    "date": "14 March",
    "topic": "Inequalities",
    "notice": "This is a non-calculator question.",
    "q": "Solve the inequality.<br>$3x - 4 > 11$.",
    "img": "",
    "steps": [
        "$3x > 15$",
        "$x > 5$"
      ]
  },
  {
    "date": "15 March",
    "topic": "Transformations",
    "notice": "This is a non-calculator question.",
    "q": "Triangle A has vertices $(1,2)$, $(3,2)$, $(2,5)$.<br>Triangle B is the image of Triangle A after a translation of $(4,-1)$.<br>Write down the coordinates of Triangle B.",
    "img": "",
    "steps": [
        "$(1+4,2-1) = (5,1)$",
        "$(3+4,2-1) = (7,1)$",
        "$(2+4,5-1) = (6,4)$"
      ]
  },
  {
    "date": "16 March",
    "topic": "Probability",
    "notice": "This is a non-calculator question.",
    "q": "A bag contains 3 red counters and 2 blue counters.<br>A counter is chosen at random.<br>Find the probability that it is red.",
    "img": "",
    "steps": [
        "$\\text{Total counters} = 5$",
        "$\\text{Probability} = \\dfrac{3}{5}$"
      ]
  },
  {
    "date": "17 March",
    "topic": "Bounds",
    "notice": "This is a non-calculator question.",
    "q": "A length is measured as 8.4cm to the nearest 0.1cm.<br>(a) Write down the lower bound.<br>(b) Write down the upper bound.",
    "img": "",
    "steps": [
        "$\\text{Lower bound} = 8.35$",
        "$\\text{Upper bound} = 8.45$"
      ]
  },
  {
    "date": "18 March",
    "topic": "Quadratics - Completing the Square",
    "notice": "This is a non-calculator question.",
    "q": "Complete the square.<br>$x^2 + 6x + 5$.",
    "img": "",
    "steps": [
        "$x^2 + 6x + 9 - 9 + 5$",
        "$(x+3)^2 - 4$"
      ]
  },
  {
    "date": "19 March",
    "topic": "Trigonometry - Cosine Rule",
    "notice": "",
    "q": "In triangle $ABC$,<br>$AB = 7$cm,<br>$AC = 9$cm,<br>$\\angle BAC = 120^\\circ$.<br>Find $BC$.<br>Give your answer to 1 decimal place.",
    "img": "images/19_Mar_G.png",
    "steps": [
        "$BC^2 = 7^2 + 9^2 - 2(7)(9)\\cos 120^\\circ$",
        "$= 49 + 81 - 126(-0.5)$",
        "$= 130 + 63$",
        "$= 193$",
        "$BC \\approx 13.9\\text{ cm}$"
      ]
  },
  {
    "date": "20 March",
    "topic": "Algebraic Fractions",
    "notice": "This is a non-calculator question.",
    "q": "Simplify.<br>$\\dfrac{2x^2 - 8}{4x}$.",
    "img": "",
     "steps": [
        "$= \\dfrac{2(x^2 - 4)}{4x}$",
        "$= \\dfrac{2(x-2)(x+2)}{4x}$",
        "$= \\dfrac{(x-2)(x+2)}{2x}$"
      ]
  },
  {
    "date": "21 March",
    "topic": "Cumulative Frequency",
    "notice": "",
    "q": "The cumulative frequency graph shows the masses of 80 students.<br>(a) Estimate the median.<br>(b) Estimate the interquartile range.",
    "img": "images/21_Mar_G.png",
    "steps": [
        "Median at 40th value (read from graph).",
        "Lower quartile at 20th value.",
        "Upper quartile at 60th value.",
        "$IQR = Q_3 - Q_1$"
      ]
  },
  {
    "date": "22 March",
    "topic": "Iteration",
    "notice": "",
    "q": "The equation $x^3 + x - 1 = 0$ can be rearranged to $x = \\sqrt[3]{1 - x}$.<br>Use the iteration formula starting with $x_1 = 0.5$.<br>Find $x_3$.<br>Give your answer to 3 decimal places.",
    "img": "",
    "steps": [
        "$x_2 = \\sqrt[3]{1 - 0.5} \\approx 0.794$",
        "$x_3 = \\sqrt[3]{1 - 0.794} \\approx 0.591$"
      ]
  },
  {
    "date": "23 March",
    "topic": "Similarity",
    "notice": "This is a non-calculator question.",
    "q": "Two similar triangles have areas in the ratio $9 : 16$.<br>Find the ratio of their corresponding sides.",
    "img": "",
    "steps": [
        "$\\text{Side ratio} = \\sqrt{\\dfrac{9}{16}}$",
        "$= \\dfrac{3}{4}$"
      ]
  },
  {
    "date": "24 March",
    "topic": "Functions",
    "notice": "This is a non-calculator question.",
    "q": "$f(x) = 3x - 2$.<br>$g(x) = x^2$.<br>(a) Find $fg(x)$.<br>(b) Find $gf(x)$.",
    "img": "",
    "steps": [
        "$fg(x) = f(x^2) = 3x^2 - 2$",
        "$gf(x) = (3x - 2)^2$",
        "$= 9x^2 - 12x + 4$"
      ]
  },
  {
    "date": "25 March",
    "topic": "Circle Theorems",
    "notice": "This is a non-calculator question.",
    "q": "The diagram shows a cyclic quadrilateral $ABCD$.<br>$\\angle ABC = 78^\\circ$.<br>Find $\\angle ADC$.<br>Give a reason for your answer.",
    "img": "images/25_Mar_G.png",
    "steps": [
        "Opposite angles in a cyclic quadrilateral sum to $180^\\circ$.",
        "$\\angle ADC = 180^\\circ - 78^\\circ$",
        "$= 102^\\circ$"
      ]
  },
  {
    "date": "26 March",
    "topic": "Surds",
    "notice": "This is a non-calculator question.",
    "q": "Simplify.<br>$\\sqrt{50} + 3\\sqrt{8}$.",
    "img": "",
    "steps": [
        "$\\sqrt{50} = 5\\sqrt{2}$",
        "$\\sqrt{8} = 2\\sqrt{2}$",
        "$= 5\\sqrt{2} + 6\\sqrt{2}$",
        "$= 11\\sqrt{2}$"
      ]
  },
  {
    "date": "27 March",
    "topic": "Probability - Tree Diagram",
    "notice": "",
    "q": "A bag contains 4 red and 3 blue counters.<br>Two counters are chosen without replacement.<br>Find the probability that both are red.",
    "img": "",
    "steps": [
        "$P(\\text{first red}) = \\dfrac{4}{7}$",
        "$P(\\text{second red}) = \\dfrac{3}{6}$",
        "$P(\\text{both red}) = \\dfrac{4}{7} \\times \\dfrac{3}{6}$",
        "$= \\dfrac{12}{42}$",
        "$= \\dfrac{2}{7}$"
      ]
  },
  {
    "date": "28 March",
    "topic": "Algebra - Proof",
    "notice": "This is a non-calculator question.",
    "q": "Prove that the square of any odd number is odd.",
    "img": "",
    "steps": [
        "Let odd number $= 2n + 1$.",
        "$(2n+1)^2 = 4n^2 + 4n + 1$",
        "$= 2(2n^2 + 2n) + 1$",
        "Therefore odd."
      ]
  },
  {
    "date": "29 March",
    "topic": "Graphs - Equation of a Circle",
    "notice": "",
    "q": "Write down the equation of the circle with centre $(2,-3)$ and radius 5.",
    "img": "",
    "steps": [
        "$(x-2)^2 + (y+3)^2 = 25$"
      ]
  },
  {
    "date": "30 March",
    "topic": "Transformations - Enlargement",
    "notice": "This is a non-calculator question.",
    "q": "Triangle A has vertices $(1,1)$, $(2,1)$, $(1,3)$.<br>Triangle B is an enlargement of Triangle A with scale factor $-2$ about the origin.<br>Write down the coordinates of Triangle B.",
    "img": "images/30_Mar_G.png",
    "steps": [
        "$(1,1) \\rightarrow (-2,-2)$",
        "$(2,1) \\rightarrow (-4,-2)$",
        "$(1,3) \\rightarrow (-2,-6)$"
      ]
  },
  {
    "date": "31 March",
    "topic": "Algebra - Algebraic Proof",
    "notice": "This is a non-calculator question.",
    "q": "Prove that if $n$ is an integer,<br>$n^2 - n$ is always even.",
    "img": "",
      "steps": [
        "$n^2 - n = n(n-1)$",
        "One of two consecutive integers is even.",
        "Therefore the product is even."
      ]
  }
      ]
