const problemBank = [
//1 Feb
{
  "id": "001539",
  "date": "1 Feb 2026",
  "major_area": "Algebra",
  "topic": "Simplifying Expressions",
  "subtopic": "Collecting Like Terms",
  "difficulty": "D/E",
  "notice": "",
  "q": "Simplify each of the following expressions.\n\n(a) $12a + 4b - 7a - 5b$\n(b) $3x^2 + 5x - 2x^2 + 7 - 4x$\n(c) $4s^2t - 3rt + 2ts^2 + 5tr - st^2$",
  "img": "",
  "steps": [
    "(a) Group like terms: $12a - 7a + 4b - 5b$. Final answer: $$5a - b$$",
    "(b) Group like terms: $3x^2 - 2x^2 + 5x - 4x + 7$. Final answer: $$x^2 + x + 7$$",
    "(c) Identify like terms: $4s^2t$ and $2ts^2$ are like terms; $-3rt$ and $5tr$ are like terms; $-st^2$ stands alone.",
	"Combine: $4s^2t + 2s^2t = 6s^2t$ and $-3rt + 5rt = 2rt$",
	"Final answer: $$6s^2t + 2rt - st^2$$"
  ]
},
//2 Feb
{
  "id": "001540",
  "date": "2 Feb 2026",
  "major_area": "Geometry & Measures",
  "topic": "Angles",
  "subtopic": "Angles in Parallel Lines",
  "difficulty": "C/D",
  "notice": "",
  "q": "The diagram shows two parallel lines intersecting two straight lines.<br>Find the values of $a$, $b$ and $c$.",
  "img": "images/feb_2.png",
  "steps": [
    "Angle $a$ is $143^\\circ$ because corresponding angles are equal.",
    "Angle $b$ is $40^\\circ$ because alternate angles are equal.",
    "Angle $c$ is $103^\\circ$ because an exterior angle equals the sum of the two opposite interior angles.",
    "Final answer: $$a = 143^\\circ,\\ b = 40^\\circ,\\ c = 103^\\circ$$"
  ]
},
//3 Feb
{
  "id": "001541",
  "date": "3 Feb 2026",
  "major_area": "Number",
  "topic": "Compound Interest",
  "subtopic": "Percentage Change",
  "difficulty": "C/D",
  "notice": "",
  "q": "Jade invests €18000 at 5.25% per year compound interest.<br>Find the value of her investment at the end of 10 years.<br>Give your answer to the nearest ten thousand Euros.",
  "img": "",
  "steps": [
    "Use the compound interest formula: $A = P(1 + \\frac{r}{100})^n$.",
    "Substitute the values: $18000(1 + \\frac{5.25}{100})^{10}$.",
    "Simplify inside the brackets: $= 18000(1.0525)^{10}$.",
    "Calculate the value: $= 30025.73$.",
    "Round to the nearest ten thousand Euros.",
    "Final answer: $$€30000$$"
  ]
},
//4 Feb
{
  "id": "001542",
  "date": "4 Feb 2026",
  "major_area": "Geometry & Measures",
  "topic": "Polygons",
  "subtopic": "Interior and Exterior Angles",
  "difficulty": "C/D",
  "notice": "",
  "q": "Answer the following questions about regular polygons.\n\n(a) A regular polygon has an interior angle of $165^\\circ$. How many sides does it have?\n(b) A regular polygon has $12$ sides. Find the size of each interior angle.",
  "img": "",
  "steps": [
    "(a) Subtract the interior angle from $180^\\circ$ to find the exterior angle: $180^\\circ - 165^\\circ = 15^\\circ$.",
    "(a) Divide $360^\\circ$ by the exterior angle: $\\frac{360^\\circ}{15^\\circ} = 24$.",
    "(a) Final answer: $$24\\text{ sides}$$",
    "(b) Use the formula for the interior angle of a regular polygon: $\\text{Interior angle} = \\frac{(n-2)\\times 180^\\circ}{n}$.",
    "(b) Substitute $n = 12$: $\\frac{(12-2)\\times 180^\\circ}{12}$.",
    "(b) Simplify: $\\frac{10\\times 180^\\circ}{12} = 150^\\circ$.",
    "(b) Final answer: $$150^\\circ$$"
  ]
},
//5 Feb
{
  "id": "001543",
  "date": "5 Feb 2026",
  "major_area": "Number",
  "topic": "Recurring Decimals",
  "subtopic": "Converting Recurring Decimals to Fractions",
  "difficulty": "C/D",
  "notice": "This is a non-calculator question.",
  "q": "Write the recurring decimal $0.6\\dot{4}$ as a fraction, giving your answer in its simplest form.",
  "img": "",
  "steps": [
    "Let $x = 0.6\\dot{4}$.",
    "Multiply by 10: $10x = 6.\\dot{4}$.",
    "Multiply by 100: $100x = 64.\\dot{4}$.",
    "Subtract: $100x - 10x = 64.\\dot{4} - 6.\\dot{4}$.",
    "So $90x = 58$.",
    "Solve for $x$: $x = \\frac{58}{90}$.",
    "Simplify the fraction: $\\frac{58}{90} = \\frac{29}{45}$.",
    "Final answer: $$\\frac{29}{45}$$"
  ]
},
//6 Feb
{
  "id": "001544",
  "date": "6 Feb 2026",
  "major_area": "Geometry & Measures",
  "topic": "Right‑angled Triangles",
  "subtopic": "Pythagoras and Trigonometry",
  "difficulty": "C/D",
  "notice": "",
  "q": "Consider the right‑angled triangle below:<br>(a) Calculate the length of $AB$<br>(b) Calculate the size of angle $BAC$",
  "img": "images/feb_6.png",
  "steps": [
    "(a) Use Pythagoras' theorem: $AB = \\sqrt{20^2 + 7^2}$.",
    "(a) Calculate inside the root: $20^2 + 7^2 = 400 + 49 = 449$.",
    "(a) So $AB = \\sqrt{449} = 21.2\\text{ cm}$ (3 s.f.).",
    "(b) Use tangent: $\\tan(BAC) = \\frac{20}{7}$.",
    "(b) Calculate the angle: $BAC = \\tan^{-1}\\left(\\frac{20}{7}\\right)$.",
    "(b) Final answer: $$70.7^\\circ\\text{ (1 d.p.)}$$"
  ]
},
//7 Feb
{
  "id": "001545",
  "date": "7 Feb 2026",
  "major_area": "Statistics & Probability",
  "topic": "Venn Diagrams",
  "subtopic": "Set Notation and Regions",
  "difficulty": "C/D",
  "notice": "",
  "q": "Consider the Venn diagram below.<br>The number in the universal set is 50.<br>$n(A)=32$, $n(B)=28$, $n((A \\cup B)') = 8$.<br>Find:<br>(a) $n(A \\cap B)$<br>(b) $n(A' \\cap B)$",
  "img": "images/feb_7.png",
  "steps": [
    "(a) Calculate $n(A \\cup B)$: $50 - 8 = 42$.",
    "(a) Use the formula: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.",
    "(a) Substitute values: $42 = 32 + 28 - n(A \\cap B)$.",
    "(a) Rearrange: $n(A \\cap B) = 60 - 42 = 18$.",
    "(b) Use $n(A' \\cap B) = n(B) - n(A \\cap B)$.",
    "(b) Substitute values: $28 - 18 = 10$.",
    "(b) Final answer: $$10$$"
  ]
},
//8 Feb
{
  "id": "001546",
  "date": "8 Feb 2026",
  "major_area": "Number",
  "topic": "Compound Interest",
  "subtopic": "Finding the Interest Rate",
  "difficulty": "C/D",
  "notice": "",
  "q": "Peter invests £20000 for 10 years.<br>At the end of the period his investment is worth £35817 (nearest pound).<br>Calculate the interest rate.",
  "img": "",
  "steps": [
    "Start with the compound interest formula: $20000\\left(1 + \\frac{r}{100}\\right)^{10} = 35817$.",
    "Divide both sides by 20000: $\\left(1 + \\frac{r}{100}\\right)^{10} = \\frac{35817}{20000}$.",
    "Take the 10th root: $1 + \\frac{r}{100} = \\left(\\frac{35817}{20000}\\right)^{\\frac{1}{10}}$.",
    "Subtract 1: $\\frac{r}{100} = \\left(\\frac{35817}{20000}\\right)^{\\frac{1}{10}} - 1$.",
    "Multiply by 100: $r = 100\\left[\\left(\\frac{35817}{20000}\\right)^{\\frac{1}{10}} - 1\\right]$.",
    "Final answer: $$6\\%$$"
  ]
},
//9 Feb
{
  "id": "001547",
  "date": "9 Feb 2026",
  "major_area": "Algebra",
  "topic": "Rearranging Formulae",
  "subtopic": "Changing the Subject",
  "difficulty": "C/D",
  "notice": "",
  "q": "$y = \\sqrt[3]{\\frac{p^7}{q^2}}$<br>(a) Find $y$ when $p = 9$ and $q = 3$.<br>(b) Rearrange the formula to make $p$ the subject.",
  "img": "",
  "steps": [
    "(a) Substitute values: $y = \\sqrt[3]{\\frac{9^7}{3^2}}$.",
    "(a) Simplify the denominator: $3^2 = 9$, so $y = \\sqrt[3]{\\frac{9^7}{9}}$.",
    "(a) Simplify the fraction: $\\frac{9^7}{9} = 9^6$.",
    "(a) Cube root: $y = \\sqrt[3]{9^6} = 9^2 = 81$.",
    "(b) Start with the original formula: $y = \\sqrt[3]{\\frac{p^7}{q^2}}$.",
    "(b) Cube both sides: $y^3 = \\frac{p^7}{q^2}$.",
    "(b) Multiply both sides by $q^2$: $p^7 = q^2 y^3$.",
    "(b) Take the 7th root: $p = \\sqrt[7]{q^2 y^3}$.",
    "Final answer: $$p = \\sqrt[7]{q^2 y^3}$$"
  ]
},
//10 Feb
{
  "id": "001548",
  "date": "10 Feb 2026",
  "major_area": "Algebra",
  "topic": "Simultaneous Equations",
  "subtopic": "Line–Curve Intersections",
  "difficulty": "C/D",
  "notice": "",
  "q": "The straight line $y = 3x - 1$ intersects the curve $y = 2x^2 - 3x + 2$ in two points.<br>Find the coordinates of the points of intersection giving your answer correct to 2 d.p.",
  "img": "",
  "steps": [
    "Set the equations equal: $2x^2 - 3x + 2 = 3x - 1$.",
    "Rearrange: $2x^2 - 6x + 3 = 0$.",
    "Use the quadratic formula: $x = \\frac{6 \\pm \\sqrt{36 - (4)(2)(3)}}{4}$.",
    "Simplify inside the root: $x = \\frac{6 \\pm \\sqrt{12}}{4}$.",
    "Calculate the values: $x = 2.37$ or $x = 0.63$.",
    "Substitute into $y = 3x - 1$: if $x = 2.37$, then $y = 6.10$.",
    "Substitute into $y = 3x - 1$: if $x = 0.63$, then $y = 0.90$.",
    "Final answer: $$(2.37, 6.10),\\ (0.63, 0.90)$$"
  ]
},
//11 Feb
{
  "id": "001549",
  "date": "11 Feb 2026",
  "major_area": "Algebra",
  "topic": "Vectors",
  "subtopic": "Vector Arithmetic and Magnitude",
  "difficulty": "C/D",
  "notice": "",
  "q": "$\\mathbf{a} = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} -7 \\\\ 9 \\end{pmatrix}$<br>(a) Find $\\mathbf{a} - 3\\mathbf{b}$.<br>(b) Find the exact value of $|\\mathbf{b}|$.",
  "img": "",
  "steps": [
    "(a) Calculate $3\\mathbf{b}$: $3\\begin{pmatrix} -7 \\\\ 9 \\end{pmatrix} = \\begin{pmatrix} -21 \\\\ 27 \\end{pmatrix}$.",
    "(a) Subtract: $\\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix} - \\begin{pmatrix} -21 \\\\ 27 \\end{pmatrix}$.",
    "(a) Result: $\\begin{pmatrix} 26 \\\\ -29 \\end{pmatrix}$.",
    "(b) Use magnitude formula: $|\\mathbf{b}| = \\sqrt{(-7)^2 + 9^2}$.",
    "(b) Simplify: $\\sqrt{49 + 81} = \\sqrt{130}$.",
    "Final answer: $$\\begin{pmatrix} 26 \\\\ -29 \\end{pmatrix},\\ \\sqrt{130}$$"
  ]
},
//12 Feb
{
  "id": "001550",
  "date": "12 Feb 2026",
  "major_area": "Algebra",
  "topic": "Sequences",
  "subtopic": "Arithmetic Sequences",
  "difficulty": "C/D",
  "notice": "",
  "q": "The first four terms of a sequence are:<br>$T_1 = 19,\\ T_2 = 13,\\ T_3 = 7,\\ T_4 = 1$<br>(a) Find $T_5$<br>(b) Find $T_n$.",
  "img": "",
  "steps": [
    "(a) Find the common difference: $-6$.",
    "(a) Calculate $T_5$: $1 - 6 = -5$.",
    "(b) Use $T_n = T_1 + (n-1)d$.",
    "(b) Substitute $T_1 = 19$ and $d = -6$: $T_n = 19 + (n-1)(-6)$.",
    "(b) Expand: $T_n = 19 - 6n + 6$.",
    "(b) Simplify: $T_n = 25 - 6n$.",
    "Final answer: $$T_5 = -5,\\quad T_n = 25 - 6n$$"
  ]
},

//13 Feb
{
  "id": "001551",
  "date": "13 Feb 2026",
  "major_area": "Number",
  "topic": "Standard Form",
  "subtopic": "Multiplying and Dividing Powers of 10",
  "difficulty": "C/D",
  "notice": "This is a non-calculator question.",
  "q": "Find the value of $\\Large\\frac{3.6\\times10^4}{1.8\\times10^{-3}}\\normalsize$ giving your answer in standard form without using a calculator.",
  "img": "",
  "steps": [
    "Calculate the number part: $3.6 \\div 1.8 = 2$.",
    "Divide the powers of ten: $10^4 \\div 10^{-3} = 10^{4 - (-3)}$.",
    "Simplify the index: $10^{7}$.",
    "Final answer: $$2 \\times 10^7$$"
  ]
},
//14 Feb
{
  "id": "001552",
  "date": "14 Feb 2026",
  "major_area": "Statistics",
  "topic": "Averages",
  "subtopic": "Arithmetic Mean",
  "difficulty": "D/E",
  "notice": "",
  "q": "The arithmetic mean of five numbers is $12$.<br>When a sixth number, $x$, is added the mean drops to $9$.<br>Find $x$.",
  "img": "",
  "steps": [
    "Use the mean formula: the total of the first five numbers is $5 \\times 12 = 60$.",
    "Form the equation: $\\frac{60 + x}{6} = 9$.",
    "Multiply both sides by 6: $60 + x = 54$.",
    "Solve for $x$: $x = -6$.",
    "Final answer: $$x = -6$$"
  ]
},
//15 Feb
{
  "id": "001553",
  "date": "15 Feb 2026",
  "major_area": "Geometry & Measures",
  "topic": "Circle Theorems",
  "subtopic": "Angles in Circles",
  "difficulty": "B/C",
  "notice": "",
  "q": "In the diagram below, points $A$, $B$, $C$ and $D$ all lie on the circumference of a circle.<br>Giving reasons, write down the size of $\\angle BDA$, $\\angle BCD$ and $\\angle ABD$.",
  "img": "images/feb_15.png",
  "steps": [
    "$\\angle BDA = 26^\\circ$ (angle in the same segment as $\\angle BCA$).",
    "$\\angle BCD = 180 - 62 = 118^\\circ$ (opposite angles in a cyclic quadrilateral are supplementary).",
    "$\\angle ABD = 180 - (62 + 26) = 92^\\circ$ (angle sum of $\\triangle ABD$).",
    "Final answer: $$\\angle BDA = 26^\\circ,\\ \\angle BCD = 118^\\circ,\\ \\angle ABD = 92^\\circ$$"
  ]
},
//16 Feb
{
  "id": "001554",
  "date": "16 Feb 2026",
  "major_area": "Algebra",
  "topic": "Functions",
  "subtopic": "Inverse Functions",
  "difficulty": "B/A",
  "notice": "",
  "q": "$f(x) = 3^x$<br>Find $x$ when $f^{-1}(x) = 4$.",
  "img": "",
  "steps": [
    "Use the definition of an inverse function: $f^{-1}(x) = 4$ means the value of $x$ for which $f(x) = 4$.",
    "So $f(4) = x$.",
    "Evaluate: $x = 3^4$.",
    "Final answer: $$x = 81$$"
  ]
},
// 17 Feb
{
  "id": "001555",
  "date": "17 Feb 2026",
  "major_area": "Geometry & Measures",
  "topic": "Mensuration",
  "subtopic": "Area, Pythagoras, Trigonometry",
  "difficulty": "B/A",
  "notice": "",
  "q": "The diagram shows the end view of a storage unit in the shape of two congruent trapeziums.<br>(a) Calculate the area of the end wall.<br>(b) The length of the sloping roof (marked $x$).<br>(c) The angle of the pitch of the roof (marked $y^\\circ$).",
  "img": "images/feb_17.png",
  "steps": [
    "(a) Area of one trapezium: $\\tfrac12(a+b)h$.",
    "(a) Total area: $2 \\times \\tfrac12(2.5 + 3) \\times 2.5$.",
    "(a) Simplify: $5.5 \\times 2.5 = 13.75\\text{ m}^2$.",
    "(b) Use Pythagoras: $x = \\sqrt{0.5^2 + 2.5^2}$.",
    "(b) Calculate: $x = 2.55\\text{ m}$.",
    "(c) Use tangent: $\\tan y = \\tfrac{0.5}{2.5}$.",
    "(c) So $y = \\tan^{-1}\\left(\\tfrac{0.5}{2.5}\\right)$.",
    "(c) Final value: $11.3^\\circ$ (1 d.p.).",
    "Final answer: $$13.75\\text{ m}^2,\\ 2.55\\text{ m},\\ 11.3^\\circ$$"
  ]
},
// 18 Feb
{
  "id": "001556",
  "date": "18 Feb 2026",
  "major_area": "Algebra",
  "topic": "Factorisation",
  "subtopic": "Factorising Quadratics (AC Method)",
  "difficulty": "B/A",
  "notice": "",
  "q": "Factorise $30x^2 + 9x - 3$.",
  "img": "",
  "steps": [
    "First factor out the common factor: $30x^2 + 9x - 3 \\equiv 3(10x^2 + 3x - 1)$.",
    "Use the AC method: $10 \\times (-1) = -10$.",
    "Find factors of $-10$ that sum to $3$: these are $5$ and $-2$.",
    "Rewrite the middle term: $3(10x^2 + 5x - 2x - 1)$.",
    "Factorise in pairs: $3(5x(2x+1) - 1(2x+1))$.",
    "Final answer: $$3(5x - 1)(2x + 1)$$"
  ]
},
// 19 Feb
{
  "id": "001557",
  "date": "19 Feb 2026",
  "major_area": "Algebra",
  "topic": "Expanding Brackets",
  "subtopic": "Triple Bracket Expansion",
  "difficulty": "B/A",
  "notice": "",
  "q": "Expand and simplify $(x+3)(x-5)(x-2)$.",
  "img": "",
  "steps": [
    "Humans are linear processors — don't try to expand all three brackets in one go.",
    "First expand two brackets: $(x+3)(x-5) \\equiv x^2 - 2x - 15$.",
    "Now expand $(x^2 - 2x - 15)(x - 2)$ using distribution:",
    "$x(x^2 - 2x - 15) - 2(x^2 - 2x - 15)$.",
    "This gives $x^3 - 2x^2 - 15x - 2x^2 + 4x + 30$.",
    "Final answer: $$x^3 - 4x^2 - 11x + 30$$"
  ]
},
//20 Feb
{
  "id": "001558",
  "date": "20 Feb 2026",
  "major_area": "Geometry & Measures",
  "topic": "3D Pythagoras",
  "subtopic": "Space Diagonals & 3D Trigonometry",
  "difficulty": "B/A",
  "notice": "",
  "q": "A cuboid is constructed to hold a single metal rod.<br>Its dimensions are length 6cm, width 4cm and height 2.5cm.<br>The rod fits exactly in the box without bending between the bottom left front corner and the top right back corner.<br>(a) Calculate the length of the rod correct to 3 sf.<br>(b) Calculate the angle the rod makes with the horizontal base of the cuboid correct to 1 d.p.",
  "img": "",
  "steps": [
    "(a) Length of rod $= \\sqrt{6^2 + 4^2 + 2.5^2}$.",
    "(a) Calculate: $= 7.63\\text{ cm}$ (3 s.f.).",
    "(b) Use sine: $\\sin\\theta = \\tfrac{\\text{opp}}{\\text{hyp}} = \\tfrac{2.5}{\\sqrt{6^2 + 4^2 + 2.5^2}}$.",
    "(b) So $\\theta = \\sin^{-1}\\left(\\tfrac{2.5}{\\sqrt{6^2 + 4^2 + 2.5^2}}\\right)$.",
    "(b) Final value: $19.1^\\circ$ (1 d.p.).",
    "Final answer: $$7.63\\text{ cm},\\ 19.1^\\circ$$"
  ]
},
//21 Feb
{
  "id": "001559",
  "date": "21 Feb 2026",
  "major_area": "Algebra",
  "topic": "Proportion",
  "subtopic": "Inverse Proportion with Roots",
  "difficulty": "B/C",
  "notice": "",
  "q": "$y$ is inversely proportional to $\\sqrt{x+6}$.<br>When $y = 100$, $x = 10$.<br>Find $x$ when $y = 40$.",
  "img": "",
  "steps": [
    "$y \\propto \\tfrac{1}{\\sqrt{x+6}} \\Rightarrow y = \\tfrac{k}{\\sqrt{x+6}}$.",
    "Substitute known values: $100 = \\tfrac{k}{\\sqrt{10+6}}$.",
    "$100 = \\tfrac{k}{4} \\Rightarrow k = 400$.",
    "Now use $y = 40$: $40 = \\tfrac{400}{\\sqrt{x+6}}$.",
    "Rearrange: $\\sqrt{x+6} = 10 \\Rightarrow x + 6 = 100$.",
    "Solve: $x = 94$.",
    "Final answer: $$x = 94$$"
  ]
},

//22 Feb
{
  "id": "001560",
  "date": "22 Feb 2026",
  "major_area": "Algebra & Trigonometry",
  "topic": "Trigonometric Equations",
  "subtopic": "Exact Values (Non‑Calculator)",
  "difficulty": "B/A",
  "notice": "This is a non-calculator question.",
  "q": "Without using a calculator solve the equation $3 + 2\\sin x = 4$ for $0^\\circ \\le x \\le 360^\\circ$.",
  "img": "",
  "steps": [
    "$3 + 2\\sin x = 4$.",
    "Rearrange: $2\\sin x = 1$.",
    "So $\\sin x = \\tfrac12$.",
    "Use exact values: $x = \\sin^{-1}(\\tfrac12) = 30^\\circ$.",
    "Sine is positive in Quadrants I and II, so the second solution is $180^\\circ - 30^\\circ = 150^\\circ$.",
    "Final answer: $$x = 30^\\circ \\text{ or } 150^\\circ$$"
  ]
},
//23 Feb
{
  "id": "001561",
  "date": "23 Feb 2026",
  "major_area": "Number",
  "topic": "Fractions",
  "subtopic": "Mixed Numbers & Multiplication",
  "difficulty": "B/C",
  "notice": "This is a non-calculator question.",
  "q": "Without using a calculator and giving your answer as a mixed number in its simplest form, evaluate $1\\tfrac{3}{8} \\times 2\\tfrac{2}{5}$.",
  "img": "",
  "steps": [
    "$1\\tfrac{3}{8} \\times 2\\tfrac{2}{5}$.",
    "Convert to improper fractions: $= \\tfrac{11}{8} \\times \\tfrac{12}{5}$.",
    "Simplify before multiplying: $= \\tfrac{11 \\times 3}{2 \\times 5}$.",
    "Multiply: $= \\tfrac{33}{10}$.",
    "Convert back to a mixed number: $$3\\tfrac{3}{10}$$"
  ]
},
//24 Feb
{
  "id": "001562",
  "date": "24 Feb 2026",
  "major_area": "Number",
  "topic": "HCF & LCM",
  "subtopic": "Prime Factorisation",
  "difficulty": "D/E",
  "notice": "This is a non-calculator question.",
  "q": "(a) Find the HCF of 24 and 84.<br>(b) Find the LCM of 24 and 84.",
  "img": "",
  "steps": [
    "Prime factorise both numbers:",
    "$24 = 2^3 \\times 3$.",
    "$84 = 2^2 \\times 3 \\times 7$.",
    "(a) HCF uses the lowest powers: $2^2 \\times 3 = 12$.",
    "(b) LCM uses the highest powers: $2^3 \\times 3 \\times 7 = 168$.",
    "Final answers: $$\\text{HCF} = 12,\\quad \\text{LCM} = 168$$"
  ]
},
//25 Feb
{
  "id": "001563",
  "date": "25 Feb 2026",
  "major_area": "Algebra",
  "topic": "Simultaneous Equations",
  "subtopic": "Linear (Elimination Method)",
  "difficulty": "B/C",
  "notice": "",
  "q": "Solve the simultaneous equations:<br>$3x + 7y = 22$<br>$5x - 3y = 22$",
  "img": "",
  "steps": [
    "Eq1: $3x + 7y = 22$, Eq2: $5x - 3y = 22$.",
    "Multiply Eq1 by 3: $9x + 21y = 66$ (Eq3), multiply Eq2 by 7: $35x - 21y = 154$ (Eq4).",
    "Add Eq3 and Eq4: $44x = 220$.",
    "$\\Rightarrow x = 5$.",
    "Substitute $x = 5$ into Eq1: $3(5) + 7y = 22$.",
    "$\\Rightarrow 15 + 7y = 22 \\Rightarrow y = 1$.",
    "Final answer: $$x = 5,\\ y = 1$$"
  ]
},
//26 Feb
{
  "id": "001564",
  "date": "26 Feb 2026",
  "major_area": "Probability",
  "topic": "Combined Probability",
  "subtopic": "Without Replacement",
  "difficulty": "B/A",
  "notice": "",
  "q": "A bag contains 5 red counters and 3 blue counters.<br>A counter is chosen at random, not replaced, and then a second counter is chosen.<br><br>(a) Find the probability that the first counter is red and the second counter is blue.<br>(b) Find the probability that the two counters are the same colour.<br>(c) Find the probability that at least one of the counters is blue.",
  "img": "",
  "steps": [
    "(a) First pick: $P(R)=\\frac{5}{8}$. After removing a red, second pick: $P(B)=\\frac{3}{7}$. So $P(RB)=\\frac{5}{8}\\times\\frac{3}{7}=\\frac{15}{56}$.",
    "(b) Same colour means RR or BB.",
    "$P(RR)=\\frac{5}{8}\\times\\frac{4}{7}=\\frac{20}{56}$.",
    "$P(BB)=\\frac{3}{8}\\times\\frac{2}{7}=\\frac{6}{56}$.",
    "So $P(\\text{same colour})=\\frac{26}{56}=\\frac{13}{28}$.",
    "(c) At least one blue is the complement of RR.",
    "$P(\\text{at least one blue}) = 1 - P(RR) = 1 - \\frac{20}{56} = \\frac{36}{56} = \\frac{9}{14}$.",
    "Final answers: $$\\frac{15}{56},\\quad \\frac{13}{28},\\quad \\frac{9}{14}$$"
  ]
},
//27 Feb
{
  "id": "001565",
  "date": "27 Feb 2026",
  "major_area": "Algebra",
  "topic": "Surds",
  "subtopic": "Rationalising the Denominator",
  "difficulty": "C/D",
  "notice": "This is a non-calculator question.",
  "q": "Rationalise the denominator of $\\frac{1}{3 - \\sqrt{2}}$.",
  "img": "",
  "steps": [
    "$\\frac{1}{3 - \\sqrt{2}} = \\frac{1 \\cdot (3 + \\sqrt{2})}{(3 - \\sqrt{2})(3 + \\sqrt{2})}$.",
    "Multiply out the denominator: $= \\frac{3 + \\sqrt{2}}{9 - 2}$.",
    "Final answer: $$\\frac{3 + \\sqrt{2}}{7}$$"
  ]
},
//28 Feb
{
  "id": "001566",
  "date": "28 Feb 2026",
  "major_area": "Algebra",
  "topic": "Simplifying Expressions",
  "subtopic": "Factorisation and Cancelling",
  "difficulty": "B/A",
  "notice": "This is a non-calculator question.",
  "q": "Simplify<br>$\\frac{6x^2 - 7x - 3}{9x^2 - 1}$",
  "img": "",
  "steps": [
    "$6x^2 - 7x - 3 = 6x^2 - 9x + 2x - 3$.",
    "$= 3x(2x - 3) + 1(2x - 3)$.",
    "$= (3x + 1)(2x - 3)$.",
    "$9x^2 - 1 = (3x - 1)(3x + 1)$.",
    "Hence $\\frac{6x^2 - 7x - 3}{9x^2 - 1} = \\frac{(3x + 1)(2x - 3)}{(3x - 1)(3x + 1)}$.",
    "Cancel the common factor: $= \\frac{\\cancel{(3x + 1)}(2x - 3)}{(3x - 1)\\cancel{(3x + 1)}}$.",
    "Final answer: $$\\frac{2x - 3}{3x - 1}$$"
  ]
}
];