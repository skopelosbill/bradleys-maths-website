const anchorDate = new Date("2026-01-30");
const problemBank = [

		    // JAN 30
{
  "id": "001537",
  "date": "30 Jan 2026",
  "major_area": "Geometry & Measures",
  "topic": "3D Shapes",
  "subtopic": "Volume of Sphere",
  "difficulty": "B/C",
  "notice": "",
  "q": "Find the volume of a sphere with radius $3$ cm.",
  "img": "",
  "steps": [
    "Use the formula for the volume of a sphere: $V = \\frac{4}{3}\\pi r^3$.",
    "Substitute $r = 3$: $V = \\frac{4}{3}\\pi (27)$.",
    "Simplify: $4 \\times 9\\pi = 36\\pi$.",
    "Final answer: $$36\\pi\\text{ cm}^3$$"
  ]
},


           
            // JAN 31
            {
  "id": "001538",
  "date": "31 Jan 2026",
  "major_area": "Algebra",
  "topic": "Algebraic Proof",
  "subtopic": "General Proof",
  "difficulty": "B/C",
  "notice": "",
  "q": "Show that the sum of 3 consecutive integers is a multiple of 3.",
  "img": "",
  "steps": [
    "Let the three consecutive integers be $n$, $n+1$, and $n+2$.",
    "Their sum is $n + (n+1) + (n+2) = 3n + 3$.",
    "Factorise: $3n + 3 = 3(n+1)$.",
    "Since the expression is $3$ multiplied by an integer, the sum is a multiple of $3$."
  ]
},

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
},

		   {
  "date": "1 Mar 2026",
  "topic": "Vectors",
  "subtopic": "Position Vectors",
  "difficulty": "C/D",
  "notice": "This is a non-calculator question.",
  "q": "Points A and B have position vectors $\\mathbf{a}$ and $\\mathbf{b}$ respectively.<br>Point C is such that $\\overrightarrow{AC} = 2\\overrightarrow{AB}$.<br>Find the position vector of C in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
  "img": "",
  "steps": [
    "$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$.",
    "$\\overrightarrow{AC} = 2(\\mathbf{b} - \\mathbf{a})$.",
    "Position vector of C $= \\mathbf{a} + 2(\\mathbf{b} - \\mathbf{a})$.",
    "Final answer: $$2\\mathbf{b} - \\mathbf{a}$$"
  ]
},

				{
  "date": "2 Mar 2026",
  "topic": "Completing the Square",
  "subtopic": "Solving Quadratics",
  "difficulty": "B/A",
  "notice": "This is a non-calculator question.",
  "q": "Solve the equation $2x^2 - 3x - 5 = 0$ by completing the square.<br>(b) Hence write down the coordinates of the turning point of the graph of $y = 2x^2 - 3x - 5$.",
  "img": "",
  "steps": [
    "Start with $2x^2 - 3x - 5 = 0$.",
    "Factor out the 2 from the quadratic terms: $2\\left(x^2 - \\frac{3}{2}x\\right) - 5 = 0$.",
    "Complete the square inside the bracket: $x^2 - \\frac{3}{2}x = \\left(x - \\frac{3}{4}\\right)^2 - \\left(\\frac{3}{4}\\right)^2$.",
    "So the equation becomes $2\\left[\\left(x - \\frac{3}{4}\\right)^2 - \\frac{9}{16}\\right] - 5 = 0$.",
    "Expand: $2\\left(x - \\frac{3}{4}\\right)^2 - \\frac{9}{8} - 5 = 0$.",
    "Combine constants: $2\\left(x - \\frac{3}{4}\\right)^2 - \\frac{49}{8} = 0$.",
    "Rearrange: $2\\left(x - \\frac{3}{4}\\right)^2 = \\frac{49}{8}$.",
    "Divide by 2: $\\left(x - \\frac{3}{4}\\right)^2 = \\frac{49}{16}$.",
    "Take square roots: $x - \\frac{3}{4} = \\pm \\frac{7}{4}$.",
    "So $x = \\frac{3}{4} + \\frac{7}{4} = 2$ or $x = \\frac{3}{4} - \\frac{7}{4} = -1$.",
    "Final answers: $$x = 2 \\quad \\text{or} \\quad x = -1$$",
    "(b) From the completed square form: $y = 2\\left(x - \\frac{3}{4}\\right)^2 - \\frac{49}{8}$.",
    "Turning point is at $\\left(\\frac{3}{4},\\; -\\frac{49}{8}\\right)$."
  ]
},

				{
  "date": "3 Mar 2026",
  "topic": "Functions",
  "subtopic": "Composite Functions",
  "difficulty": "B/A",
  "notice": "This is a non-calculator question.",
  "q": "$f(x) = 2x + 1$.<br>$g(x) = x^2 - 3$.<br>(a) Find $f(g(x))$.<br>(b) Find $g(f(x))$.",
  "img": "",
  "steps": [
    "$f(g(x)) = 2(x^2 - 3) + 1$.",
    "$= 2x^2 - 6 + 1$.",
    "$= 2x^2 - 5$.",
    "$g(f(x)) = (2x + 1)^2 - 3$.",
    "$= 4x^2 + 4x + 1 - 3$.",
    "Final answer: $$4x^2 + 4x - 2$$"
  ]
},
	{
  "date": "4 Mar 2026",
  "topic": "Trigonometry - Sine Rule",
  "subtopic": "Solving for a Side",
  "difficulty": "C/D",
  "notice": "",
  "q": "In triangle ABC,<br>$AB = 8$cm,<br>$\\angle A = 40^\\circ$,<br>$\\angle B = 65^\\circ$.<br>Find $AC$.<br>Give your answer to 3 significant figures.",
  "img": "images/4_mar_igcse.png",
  "steps": [
    "$\\angle C = 180 - 40 - 65 = 75^\\circ$.",
    "$\\frac{AC}{\\sin 75} = \\frac{8}{\\sin 65}$.",
    "$AC = \\frac{8\\sin 75}{\\sin 65}$.",
    "Final answer: $$AC = 8.53\\text{ cm (3sf)}$$"
  ]
},
				
{
  "date": "5 Mar 2026",
  "topic": "Indices",
  "subtopic": "Algebraic Fractions",
  "difficulty": "C/D",
  "notice": "This is a non-calculator question.",
  "q": "Simplify:<br><br>$$\\frac{5x^3 y^{-2}}{10x^{-1} y}$$",
  "img": "",
  "steps": [
    "$= \\frac{5}{10} x^{3 - (-1)} y^{-2 - 1}$.",
    "$= \\frac{1}{2} x^4 y^{-3}$.",
    "Final answer: $$\\frac{x^4}{2y^3}$$"
  ]
},

{
  "date": "6 Mar 2026",
  "topic": "Simultaneous Equations (Quadratic & Linear)",
  "subtopic": "Substitution",
  "difficulty": "B/A",
  "notice": "This is a non-calculator question.",
  "q": "Solve simultaneously.<br>$y = x + 1$<br>$x^2 + y^2 = 25$.",
  "img": "",
  "steps": [
    "Substitute $y = x + 1$ into $x^2 + y^2 = 25$.",
    "$x^2 + (x + 1)^2 = 25$.",
    "$x^2 + x^2 + 2x + 1 = 25$.",
    "$2x^2 + 2x + 1 - 25 = 0$.",
    "$2x^2 + 2x - 24 = 0$.",
    "$x^2 + x - 12 = 0$.",
    "$(x + 4)(x - 3) = 0$.",
    "$x = -4$ or $x = 3$.",
    "If $x = -4$, then $y = -3$; if $x = 3$, then $y = 4$.",
    "Final answer: $$(-4,-3) \\text{ or } (3,4)$$"
  ]
},

{
  "date": "7 Mar 2026",
  "topic": "Vectors",
  "subtopic": "Position Vectors and Ratios",
  "difficulty": "B/C",
  "notice": "",
  "q": "Points A, B and C have position vectors<br>$\\vec{OA} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}$,<br>$\\vec{OB} = \\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}$.<br>Point C lies on AB such that<br>$AC : CB = 1 : 2$.<br><br>Find the position vector of C.",
  "img": "",
  "steps": [
    "$\\vec{AB} = \\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix} - \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}$.",
    "C divides AB in the ratio $1:2$, so $AC = \\frac{1}{3}AB$.",
    "$\\vec{AC} = \\frac{1}{3} \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} \\frac{4}{3} \\\\ \\frac{4}{3} \\end{pmatrix}$.",
    "$\\vec{OC} = \\vec{OA} + \\vec{AC} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} \\frac{4}{3} \\\\ \\frac{4}{3} \\end{pmatrix}$.",
    "Final answer: $$\\vec{OC} = \\begin{pmatrix} \\frac{10}{3} \\\\ \\frac{1}{3} \\end{pmatrix}$$"
  ]
},

{
  "date": "8 Mar 2026",
  "topic": "Exponential Growth and Decay",
  "subtopic": "Compound Change",
  "difficulty": "C/B",
  "notice": "",
  "q": "The population of a town is 12000.<br>It increases by 3% per year for 5 years.<br>It then decreases by 2% the following year.<br><br>Find the population after these 6 years.<br>Give your answer to the nearest whole number.",
  "img": "",
  "steps": [
    "Growth multiplier = 1.03.",
    "Population after 5 years = $12000(1.03)^5$.",
    "Decay multiplier = 0.98.",
    "Final population = $12000(1.03)^5 \\times 0.98$.",
    "Final answer: $$13911 \\times 0.98 = 13633$$"
  ]
},

{
  "date": "9 Mar 2026",
  "topic": "Transformations - Combined",
  "subtopic": "Reflection and Translation",
  "difficulty": "B/A",
  "notice": "This is a non-calculator question.",
  "q": "(a) Point $P(1,3)$ is reflected in the y-axis and then translated by the vector $\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$. Find the coordinates of the image of $P$.<br><br>(b) Describe fully the single transformation equivalent to these two transformations.<br><br>(c) Point $Q(1,4)$ is translated by $\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$ and then reflected in the y-axis. Find the coordinates of the image of $Q$. Hence describe the single transformation equivalent to these two transformations, and state whether it is the same as in part (b).",
  "img": "",
  "steps": [
    "(a) Reflection in the y-axis sends $(1,3)$ to $(-1,3)$.",
    "Translation by $\\begin{pmatrix} 4 \\\\ 0 \\end{pmatrix}$ sends $(-1,3)$ to $(3,3)$.",
    "(b) The combined effect is reflection in the line $x = 2$.",
    "(c) $Q(1,4)$ translates to $(5,4)$, then reflects in the y-axis to $(-5,4)$.",
    "This is equivalent to reflection in the line $x = -2$.",
    "The single transformation in part (c) is different from the one in part (b)."
  ]
},


{
  "date": "10 Mar 2026",
  "topic": "Algebraic Fractions",
  "subtopic": "Division of Algebraic Fractions",
  "difficulty": "A/A*",
  "notice": "This is a non-calculator question.",
  "q": "Simplify:<br><br>$$\\frac{x^2 - 9}{x^2 + x - 12} \\div \\frac{x^2 + x - 6}{x^2 + 4x}$$",
  "img": "",
  "steps": [
    "$= \\frac{x^2 - 9}{x^2 + x - 12} \\times \\frac{x^2 + 4x}{x^2 + x - 6}$.",
    "$= \\frac{(x-3)(x+3)}{(x+4)(x-3)} \\times \\frac{x(x+4)}{(x+3)(x-2)}$.",
    "Cancel common factors $(x-3)$, $(x+3)$ and $(x+4)$.",
    "$= \\frac{x}{x-2}$.",
    "Final answer: $$\\frac{x}{x-2}$$"
  ]
},

{
  "date": "11 Mar 2026",
  "topic": "Probability – Conditional",
  "subtopic": "P(A|B)",
  "difficulty": "C",
  "notice": "",
  "q": "In a class of 30 students,<br>18 study French,<br>12 study Spanish,<br>5 study both.<br><br>Find the probability that a student studies French given that they study Spanish.",
  "img": "",
  "steps": [
    "We are given that the student studies Spanish.",
    "There are 12 students who study Spanish.",
    "Of these, 5 also study French.",
    "Final answer: $$P(F\\mid S) = \\frac{5}{12}$$"
  ]
},

{
  "date": "12 Mar 2026",
  "topic": "Exponential Decay",
  "subtopic": "Half-life",
  "difficulty": "A/A*",
  "notice": "This is a non-calculator question.",
  "q": "A radioactive substance has a mass of 160 g.<br>After 12 hours, its mass has decreased to 20 g.<br><br>Find the half-life of the substance.",
  "img": "",
  "steps": [
    "Use the decay model: $M = 160k^t$.",
    "After 12 hours: $20 = 160k^{12}$.",
    "$k^{12} = \\frac{1}{8}$.",
    "$k = \\left(\\frac{1}{8}\\right)^{\\frac{1}{12}}$.",
    "Half-life $T$ satisfies $k^T = \\frac{1}{2}$.",
    "Write $\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$.",
    "$\\left(\\frac{1}{2}\\right)^{\\frac{3T}{12}} = \\frac{1}{2}$.",
    "So $\\frac{3T}{12} = 1$.",
    "Therefore $T = 4$.",
    "Final answer: $$\\text{Half-life} = 4\\text{ hours}$$"
  ]
},
// 13 Mar
{
  "id": "001567",
  "date": "13 Mar 2026",
  "major_area": "Algebra",
  "topic": "Differentiation",
  "subtopic": "Gradient from tangents",
  "difficulty": "B/A",
  "notice": "IGCSE Specialist Topic",
  "q": "A curve has the equation $y = 2x^2 - 5x + 3$.<br>(a) Find $\\frac{dy}{dx}$.<br>(b) Find the gradient of the curve at the point where $x = 3$.<br>(c) Find the coordinates of the point on the curve where the gradient is $7$.",
  "img": "",
  "steps": [
    "(a) Differentiate the expression: $\\frac{dy}{dx} = 4x - 5$.",
    "(b) Substitute $x = 3$ into the gradient function: $4(3) - 5 = 7$.",
    "(c) Set the gradient function equal to 7: $4x - 5 = 7$.",
    "(c) Solve for $x$: $4x = 12 \\implies x = 3$.",
    "(c) Find $y$ by substituting $x = 3$ into the original equation: $y = 2(3)^2 - 5(3) + 3 = 18 - 15 + 3 = 6$.",
    "Final answers: $$\\frac{dy}{dx} = 4x - 5,\\quad \\text{Gradient} = 7,\\quad (3, 6)$$"
  ]
},

			// 14 Mar
{
  "id": "001568",
  "date": "14 Mar 2026",
  "major_area": "Probability",
  "topic": "Basic Probability",
  "subtopic": "Mutually exclusive events",
  "difficulty": "B/C",
  "notice": "This is a non-calculator question.",
  "q": "In a group of 40 students, 25 study Maths, 18 study Physics and 10 study both.<br>(a) Complete a Venn diagram to represent this information.<br>(b) A student is chosen at random. Find the probability they study neither subject.",
  "img": "",
  "steps": [
    "(a) Start with the intersection: $10$ in the center.",
    "(a) Maths only: $25 - 10 = 15$. Physics only: $18 - 10 = 8$.",
    "(a) Total studying at least one: $15 + 10 + 8 = 33$.",
    "(b) Students studying neither: $40 - 33 = 7$.",
    "(b) Probability: $\\frac{7}{40}$.",
    "Final answer: $$\\frac{7}{40}$$"
  ]
},

			// 15 Mar
{
  "id": "001569",
  "date": "15 Mar 2026",
  "major_area": "Number",
  "topic": "Surds",
  "subtopic": "Rationalising denominators",
  "difficulty": "B/A",
  "notice": "This is a non-calculator question.",
  "q": "Rationalise the denominator and simplify fully:<br>$$\\frac{3}{2 - \\sqrt{5}}$$",
  "img": "",
  "steps": [
    "Multiply numerator and denominator by the conjugate $(2 + \\sqrt{5})$.",
    "Numerator: $3(2 + \\sqrt{5}) = 6 + 3\\sqrt{5}$.",
    "Denominator: $(2 - \\sqrt{5})(2 + \\sqrt{5}) = 4 - 5 = -1$.",
    "Divide each term by $-1$: $\\frac{6}{-1} + \\frac{3\\sqrt{5}}{-1}$.",
    "Final answer: $$-6 - 3\\sqrt{5}$$"
  ]
},

			// 16 Mar
{
  "id": "001570",
  "date": "16 Mar 2026",
  "major_area": "Algebra",
  "topic": "Differentiation",
  "subtopic": "Differentiate sums of terms",
  "difficulty": "C/B",
  "notice": "IGCSE Specialist Topic",
  "q": "Differentiate $y = 4x^3 - 2x^2 + 5x - 7$ with respect to $x$.",
  "img": "",
  "steps": [
    "Differentiate $4x^3 \\rightarrow 12x^2$.",
    "Differentiate $-2x^2 \\rightarrow -4x$.",
    "Differentiate $5x \\rightarrow 5$.",
    "Differentiate the constant $-7 \\rightarrow 0$.",
    "Final answer: $$\\frac{dy}{dx} = 12x^2 - 4x + 5$$"
  ]
},

			// 17 Mar
{
  "id": "001571",
  "date": "17 Mar 2026",
  "major_area": "Geometry & Measures",
  "topic": "Vectors",
  "subtopic": "Vector addition",
  "difficulty": "A/A*",
  "notice": "Vector Geometry Proof",
  "q": "Points $A$, $B$ and $C$ have position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively.<br>$M$ is the midpoint of $AB$ and $N$ is the midpoint of $AC$.<br>Show that $\\overrightarrow{MN} = \\frac{1}{2}(\\mathbf{c} - \\mathbf{b})$.",
  "img": "",
  "steps": [
    "Position vector of $M = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$.",
    "Position vector of $N = \\frac{1}{2}(\\mathbf{a} + \\mathbf{c})$.",
    "Calculate vector $\\overrightarrow{MN} = \\overrightarrow{ON} - \\overrightarrow{OM}$.",
    "Substitute: $\\overrightarrow{MN} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{c}) - \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$.",
    "Simplify: $\\frac{1}{2}\\mathbf{a} + \\frac{1}{2}\\mathbf{c} - \\frac{1}{2}\\mathbf{a} - \\frac{1}{2}\\mathbf{b}$.",
    "Final result: $$\\frac{1}{2}(\\mathbf{c} - \\mathbf{b})$$"
  ]
},

			// 18 Mar
{
  "id": "001572",
  "date": "18 Mar 2026",
  "major_area": "Geometry & Measures",
  "topic": "Trigonometry",
  "subtopic": "SOHCAHTOA",
  "difficulty": "C/D",
  "notice": "This is a non-calculator question.",
  "q": "Find the exact value of $2\\sin(30^\\circ) + \\cos(60^\\circ)$.",
  "img": "",
  "steps": [
    "Recall exact values: $\\sin(30^\\circ) = \\frac{1}{2}$.",
    "Recall exact values: $\\cos(60^\\circ) = \\frac{1}{2}$.",
    "Substitute into the expression: $2(\\frac{1}{2}) + \\frac{1}{2}$.",
    "Calculate: $1 + \\frac{1}{2} = \\frac{3}{2}$.",
    "Final answer: $$\\frac{3}{2}$$"
  ]
},

			// 19 Mar
{
  "id": "001573",
  "date": "19 Mar 2026",
  "major_area": "Algebra",
  "topic": "Surds",
  "subtopic": "Simplifying surds",
  "difficulty": "C/D",
  "notice": "This is a non-calculator question.",
  "q": "Simplify fully: $\\sqrt{50} + 3\\sqrt{8}$.",
  "img": "",
  "steps": [
    "Simplify $\\sqrt{50}$: $\\sqrt{25 \\times 2} = 5\\sqrt{2}$.",
    "Simplify $\\sqrt{8}$: $\\sqrt{4 \\times 2} = 2\\sqrt{2}$.",
    "Multiply $3\\sqrt{8}$: $3 \\times 2\\sqrt{2} = 6\\sqrt{2}$.",
    "Add the terms: $5\\sqrt{2} + 6\\sqrt{2} = 11\\sqrt{2}$.",
    "Final answer: $$11\\sqrt{2}$$"
  ]
},

			// 20 Mar
{
  "id": "001574",
  "date": "20 Mar 2026",
  "major_area": "Algebra",
  "topic": "Algebraic Notation",
  "subtopic": "Substitution",
  "difficulty": "C/D",
  "notice": "Non-calculator question.",
  "q": "The function $f(x) = 2x^2 - 3x + 1$.<br>(a) Find $f(4)$.<br>(b) Find the values of $x$ such that $f(x) = 1$.",
  "img": "",
  "steps": [
    "(a) Substitute $x=4$: $2(4^2) - 3(4) + 1$.",
    "(a) Calculate: $2(16) - 12 + 1 = 32 - 12 + 1 = 21$.",
    "(b) Set function to 1: $2x^2 - 3x + 1 = 1$.",
    "(b) Subtract 1: $2x^2 - 3x = 0$.",
    "(b) Factorise: $x(2x - 3) = 0$.",
    "Final answers: $$(a)\\ 21,\\ (b)\\ x = 0,\\ x = 1.5$$"
  ]
},

			// 21 Mar
{
  "id": "001575",
  "date": "21 Mar 2026",
  "major_area": "Geometry & Measures",
  "topic": "Coordinates",
  "subtopic": "Midpoints",
  "difficulty": "B/A",
  "notice": "Multi-part Coordinate Geometry",
  "q": "Points $A(1,2)$, $B(4,6)$ and $C(7,2)$ form a triangle.<br>(a) Show that triangle $ABC$ is isosceles.<br>(b) Find the equation of the perpendicular bisector of $AB$.",
  "img": "",
  "steps": [
    "(a) Calculate length $AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = 5$.",
    "(a) Calculate length $BC = \\sqrt{(7-4)^2 + (2-6)^2} = \\sqrt{3^2 + (-4)^2} = 5$.",
    "(a) Since $AB=BC$, the triangle is isosceles.",
    "(b) Midpoint of $AB = (\\frac{1+4}{2}, \\frac{2+6}{2}) = (2.5, 4)$.",
    "(b) Gradient of $AB = \\frac{6-2}{4-1} = \\frac{4}{3}$.",
    "(b) Perpendicular gradient $= -\\frac{3}{4}$.",
    "(b) Use $y - y_1 = m(x - x_1)$: $y - 4 = -\\frac{3}{4}(x - 2.5)$.",
    "Final answer: $$y = -0.75x + 5.875$$"
  ]
},

			// 22 Mar
{
  "id": "001576",
  "date": "22 Mar 2026",
  "major_area": "Algebra",
  "topic": "Inequalities",
  "subtopic": "Solving inequalities",
  "difficulty": "D/E",
  "notice": "Non-calculator question.",
  "q": "Solve the inequality: $3(2x - 1) \\le 4x + 5$.",
  "img": "",
  "steps": [
    "Expand brackets: $6x - 3 \\le 4x + 5$.",
    "Subtract $4x$ from both sides: $2x - 3 \\le 5$.",
    "Add 3 to both sides: $2x \\le 8$.",
    "Divide by 2: $x \\le 4$.",
    "Final answer: $$x \\le 4$$"
  ]
},

			// 23 Mar
{
  "id": "001577",
  "date": "23 Mar 2026",
  "major_area": "Probability",
  "topic": "Probability",
  "subtopic": "Conditional Probability",
  "difficulty": "C/B",
  "notice": "Without replacement.",
  "q": "A bag contains 3 red and 2 blue counters. Two counters are taken at random without replacement.<br>Find the probability that both counters are the same colour.",
  "img": "",
  "steps": [
    "Probability of Red then Red: $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{6}{20}$.",
    "Probability of Blue then Blue: $\\frac{2}{5} \\times \\frac{1}{4} = \\frac{2}{20}$.",
    "Add the probabilities: $\\frac{6}{20} + \\frac{2}{20} = \\frac{8}{20}$.",
    "Simplify: $\\frac{2}{5}$.",
    "Final answer: $$\\frac{2}{5}$$"
  ]
},

			// 24 Mar
{
  "id": "001578",
  "date": "24 Mar 2026",
  "major_area": "Algebra",
  "topic": "Quadratic Equations",
  "subtopic": "Roots from graphs",
  "difficulty": "A/A*",
  "notice": "IGCSE Specialist Topic",
  "q": "Given $y = x^3 - 6x^2 + 9x$:<br>(a) Find $\\frac{dy}{dx}$.<br>(b) Find the coordinates of the stationary points.<br>(c) Determine the nature of these points using the second derivative.",
  "img": "",
  "steps": [
    "(a) $\\frac{dy}{dx} = 3x^2 - 12x + 9$.",
    "(b) Set to 0 and factorise: $3(x-1)(x-3) = 0 \\implies x=1, x=3$.",
    "(b) $y$-values: $f(1) = 4$ and $f(3) = 0$. Points are $(1, 4)$ and $(3, 0)$.",
    "(c) Find $\\frac{d^2y}{dx^2} = 6x - 12$.",
    "(c) At $x=1$, $6(1)-12 = -6$ (Maximum).",
    "(c) At $x=3$, $6(3)-12 = 6$ (Minimum).",
    "Final answer: $$\\text{Max at }(1,4),\\ \\text{Min at }(3,0)$$"
  ],
  "bradley_insight": {
    "type": "deeper",
    "title": "The Second Derivative Rule",
    "content": "A common point of confusion is remembering which result means which! Just remember: a **negative** second derivative indicates a **Maximum** point (the gradient is decreasing), while a **positive** result indicates a **Minimum** point (the gradient is increasing). Using the second derivative is the most rigorous way to prove the nature of a point in IGCSE Paper 4."
  }
},

			// 25 Mar
{
  "id": "001579",
  "date": "25 Mar 2026",
  "major_area": "Geometry & Measures",
  "topic": "Coordinates",
  "subtopic": "Gradients",
  "difficulty": "C/D",
  "notice": "Perpendicular Lines",
  "q": "Points $A$ and $B$ have coordinates $A(2, 5)$ and $B(8, 1)$.<br>(a) Find the equation of the line $AB$.<br>(b) Find the equation of the line perpendicular to $AB$ passing through the midpoint of $AB$.",
  "img": "",
  "steps": [
    "(a) Gradient $m = \\frac{1-5}{8-2} = -\\frac{2}{3}$.",
    "(a) Equation: $y - 5 = -\\frac{2}{3}(x - 2) \\implies y = -\\frac{2}{3}x + \\frac{19}{3}$.",
    "(b) Midpoint $= (\\frac{2+8}{2}, \\frac{5+1}{2}) = (5, 3)$.",
    "(b) Perpendicular gradient $= \\frac{3}{2}$.",
    "(b) Equation: $y - 3 = \\frac{3}{2}(x - 5)$.",
    "Final answer: $$y = \\frac{3}{2}x - 4.5$$"
  ]
},

			// 26 Mar
{
  "id": "001580",
  "date": "26 Mar 2026",
  "major_area": "Geometry & Measures",
  "topic": "Trigonometry",
  "subtopic": "3D Pythagoras",
  "difficulty": "B/A",
  "notice": "3D Trigonometry",
  "q": "A vertical mast $20$m high is supported by a cable fixed to the ground $15$m from its base.<br>(a) Find the angle of elevation of the top of the mast from the fixed point.<br>(b) Find the length of the cable.",
  "img": "",
  "steps": [
    "(a) Use $\\tan(\\theta) = \\frac{20}{15}$.",
    "(a) $\\theta = \\tan^{-1}(1.333...) = 53.1^\\circ$.",
    "(b) Use Pythagoras: $\\text{Length} = \\sqrt{20^2 + 15^2}$.",
    "(b) $\\text{Length} = \\sqrt{400 + 225} = 25\\text{m}$.",
    "Final answer: $$53.1^\\circ,\\ 25\\text{m}$$"
  ]
},

			// 27 Mar
{
  "id": "001581",
  "date": "27 Mar 2026",
  "major_area": "Algebra",
  "topic": "Expanding Brackets",
  "subtopic": "Double brackets",
  "difficulty": "B/C",
  "notice": "Non-calculator question.",
  "q": "Expand and simplify fully: $(x - 4)(x + 7) - (x - 2)^2$.",
  "img": "",
  "steps": [
    "Expand first part: $(x - 4)(x + 7) = x^2 + 3x - 28$.",
    "Expand second part: $(x - 2)^2 = x^2 - 4x + 4$.",
    "Subtract: $(x^2 + 3x - 28) - (x^2 - 4x + 4)$.",
    "Group terms: $x^2 - x^2 + 3x + 4x - 28 - 4$.",
    "Final answer: $$7x - 32$$"
  ]
},

			// 28 Mar
{
  "id": "001582",
  "date": "28 Mar 2026",
  "major_area": "Algebra",
  "topic": "Inequalities",
  "subtopic": "Graphical inequalities",
  "difficulty": "B/A",
  "notice": "Quadratic Inequality",
  "q": "Solve the quadratic inequality $x^2 - 5x + 6 \\le 0$.",
  "img": "",
  "steps": [
    "Factorise the quadratic: $(x - 2)(x - 3) \\le 0$.",
    "Identify the critical values: $x = 2$ and $x = 3$.",
    "Consider the parabola shape (u-shape). It is $\\le 0$ between the roots.",
    "Final answer: $$2 \\le x \\le 3$$"
  ]
},

			// 29 Mar
{
  "id": "001583",
  "date": "29 Mar 2026",
  "major_area": "Geometry & Measures",
  "topic": "Circle Theorems",
  "subtopic": "Angles in Circles",
  "difficulty": "A/A*",
  "notice": "Equation of a Circle",
  "q": "The equation of a circle is $x^2 + y^2 - 4x + 6y - 12 = 0$.<br>Find (a) the coordinates of the centre and (b) the radius.",
  "img": "",
  "steps": [
    "Complete the square for $x$: $(x - 2)^2 - 4$.",
    "Complete the square for $y$: $(y + 3)^2 - 9$.",
    "Rewrite equation: $(x - 2)^2 - 4 + (y + 3)^2 - 9 - 12 = 0$.",
    "Rearrange: $(x - 2)^2 + (y + 3)^2 = 25$.",
    "Identify centre $(h, k)$ and $r^2$.",
    "Final answer: $$\\text{Centre: }(2, -3),\\ \\text{Radius: } 5$$"
  ]
},

			// 30 Mar
{
  "id": "001584",
  "date": "30 Mar 2026",
  "major_area": "Number",
  "topic": "Estimation & Bounds",
  "subtopic": "Upper and lower bounds",
  "difficulty": "B/C",
  "q": "A side of a square is measured as $8.4\\text{ cm}$ correct to $1$ decimal place.<br>(a) Write down the lower and upper bounds of the side length.<br>(b) Calculate the maximum possible area of the square.",
  "img": "",
  "steps": [
    "(a) The precision is $0.1$, so the error interval is $\\pm 0.05$.",
    "(a) Lower Bound $= 8.35\\text{ cm}$. Upper Bound $= 8.45\\text{ cm}$.",
    "(b) Max Area $= (8.45)^2$.",
    "(b) Calculate: $71.4025\\text{ cm}^2$.",
    "Final answer: $$71.4\\text{ cm}^2\\text{ (3 s.f.)}$$"
  ]
},

			// 31 Mar
{
  "id": "001585",
  "date": "31 Mar 2026",
  "major_area": "Algebra",
  "topic": "Algebraic Proof",
  "subtopic": "General Proof",
  "difficulty": "A/A*",
  "notice": "Non-calculator question.",
  "q": "Prove algebraically that if $n$ is a multiple of $3$, then $n^3$ is a multiple of $27$.",
  "img": "",
  "steps": [
    "Let $n = 3k$ where $k$ is an integer.",
    "Then $n^3 = (3k)^3$.",
    "Expand the power: $n^3 = 27k^3$.",
    "Since $k^3$ is an integer, $27k^3$ must be a multiple of $27$.",
    "Final answer: $$\\text{QED}$$"
  ],
	"bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Read the question carefully!",
            "content": "The question tells us explicitly that $n$ is a multiple of 3 so this must mean that $n=3\\times\\text{ some unknown value }k$.  This is the clue to solving the problem!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Algebra Pack
        "button_text": "Master Algebra: Download the Full Algebra Pack"
},

			// 1 Apr
// 1 Apr
    {
        "id": "001586",
        "date": "1 Apr 2026",
        "major_area": "Coordinate Geometry and Geometry",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "C/D",
        "notice": "Non-calculator question.",
        "q": "Find the equation of the straight line passing through the points $(3, -4)$ and $(5, 6)$.",
        "img": "",
        "steps": [
            "Calculate the gradient ($m$) using $\\dfrac{y_2 - y_1}{x_2 - x_1}$.",
            "$m = \\dfrac{6 - (-4)}{5 - 3} = \\dfrac{10}{2} = 5$.",
            "Use the formula $y - y_1 = m(x - x_1)$ with the point $(5, 6)$.",
            "$y - 6 = 5(x - 5)$.",
            "Expand the brackets: $y - 6 = 5x - 25$.",
            "Add 6 to both sides to get the final form.",
            "Final Answer: $$y = 5x - 19$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Choose the 'Easy' Point",
            "content": "When substituting a point back into the formula to find the equation, you can use either point. I always recommend choosing the one with the fewest negative signs (in this case, $(5,6)$) to reduce the chance of a simple arithmetic error!"
        },
        "payhip_link": "https://payhip.com/b/L6skh", // Geometry & Coordinate Geometry pack
        "button_text": "Master Coordinates: Download the Coordinate Geometry and Geometry Pack" 
    },

			// 2 Apr
// 2 Apr
    {
        "id": "001587",
        "date": "2 Apr 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "LCM",
        "difficulty": "C/D",
        "notice": "Contextual LCM problem.",
        "q": "Buses on three routes, A, B and C leave the bus station at 8am.<br>Route A buses leave every 20 minutes.<br>Route B buses leave every 30 minutes.<br>Route C buses leave every 45 minutes.<br><br>What time will it be when all three next leave the bus station together?",
        "img": "",
        "steps": [
            "Find the prime factors of each interval:",
            "$20 = 2^2 \\times 5$",
            "$30 = 2 \\times 3 \\times 5$",
            "$45 = 3^2 \\times 5$",
            "The LCM uses the highest power of every prime factor present: $2^2 \\times 3^2 \\times 5$.",
            "Calculate the LCM: $4 \\times 9 \\times 5 = 180$ minutes.",
            "Convert minutes to hours: $180 \\div 60 = 3$ hours.",
            "Add 3 hours to the start time of 8:00 AM.",
            "Final Answer: $$11:00\\text{ AM}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying LCM",
            "content": "In 'real-world' problems, whenever you see questions about things happening 'at the same time again' or 'meeting at the start,' you are looking for the Lowest Common Multiple (LCM). Prime factorisation is the most reliable way to find it without missing any factors!"
        },
        "payhip_link": "https://payhip.com/b/XEV2Z", // Your Number Pack Link
        "button_text": "Master Number: Download the Full Number Pack"
    },

			// 3 Apr
// 3 Apr
    {
        "id": "001588",
        "date": "3 Apr 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Quadratic factorising",
        "difficulty": "B/A",
        "notice": "This is a non-calculator question.",
        "q": "Factorise the quadratic expression: $$-2x^2 + 5x - 3$$",
        "img": "",
        "steps": [
            "Multiply the coefficient of $x^2$ by the constant: $-2 \\times -3 = 6$.",
            "Find factors of 6 that sum to 5: these are 2 and 3.",
            "Split the middle term: $-2x^2 + 2x + 3x - 3$.",
            "Factorise in pairs: $-2x(x - 1) + 3(x - 1)$.",
            "Combine the factors: $(3 - 2x)(x - 1)$.",
            "<strong>Note</strong>: there are two more equivalent alternative answers: $(2x - 3)(1 - x)$ and $-(2x - 3)(x - 1)$.",
            "Final Answer: $$(3 - 2x)(x - 1)$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Negative $x^2$ Trap",
            "content": "Expressions with a negative $x^2$ term are a frequent 'Grade A' differentiator. If you find them tricky, you can factor out $-1$ from the entire expression first to make the quadratic term positive. Just remember to put the negative sign back in front of your final brackets!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Algebra Pack
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },

			// 4 Apr
// 4 Apr
    {
        "id": "001589",
        "date": "4 Apr 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Fractions",
        "subtopic": "Division of Algebraic Fractions",
        "difficulty": "A/A*",
        "notice": "This is a non-calculator question.",
        "q": "Simplify: $$\\dfrac{x^2-x-12}{x^2-2x-15}\\div\\dfrac{x^2-6x+8}{x^2-3x-10}$$",
        "img": "",
        "steps": [
            "Factorise each of the four quadratic expressions:",
            "$x^2-x-12 \\equiv (x+3)(x-4)$",
            "$x^2-2x-15 \\equiv (x+3)(x-5)$",
            "$x^2-6x+8 \\equiv (x-4)(x-2)$",
            "$x^2-3x-10 \\equiv (x-5)(x+2)$",
            "Rewrite the original expression using these factorisations: $$\\dfrac{(x+3)(x-4)}{(x+3)(x-5)}\\div\\dfrac{(x-4)(x-2)}{(x-5)(x+2)}$$",
            "Change the sign to multiply and invert the second fraction: $$\\dfrac{(x+3)(x-4)}{(x+3)(x-5)}\\times\\dfrac{(x-5)(x+2)}{(x-4)(x-2)}$$",
            "Cancel common factors wherever possible: $$\\dfrac{\\cancel{(x+3)}\\cancel{(x-4)}}{\\cancel{(x+3)}\\cancel{(x-5)}}\\times\\dfrac{\\cancel{(x-5)}(x+2)}{\\cancel{(x-4)}(x-2)}$$",
            "Final Answer: $$\\dfrac{x+2}{x-2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Factor-First Rule",
            "content": "A fatal error in these questions is trying to cancel individual terms like $x^2$ or $12$ before factorising. Remember: you can only cancel <strong>factors</strong> (the whole bracket), never individual terms within an expression. Always factorise everything first!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Algebra Pack
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },

			// 5 Apr
// 5 Apr
    {
        "id": "001590",
        "date": "5 Apr 2026",
        "major_area": "Statistics",
        "topic": "Frequency Tables",
        "subtopic": "Grouped Data – Estimate of the Mean",
        "difficulty": "B/A",
        "notice": "This is a non-calculator question.",
        "q": "The table shows the times, in minutes, taken by 40 students to complete a puzzle.<br><br><table><tr><th>Time (minutes)</th><th>Frequency</th></tr><tr><td>0 < t ≤ 5</td><td>6</td></tr><tr><td>5 < t ≤ 10</td><td>12</td></tr><tr><td>10 < t ≤ 15</td><td>14</td></tr><tr><td>15 < t ≤ 20</td><td>8</td></tr></table><br>Estimate the mean time taken.",
        "img": "",
        "steps": [
            "Find the midpoint ($x$) of each class interval: $2.5,\\ 7.5,\\ 12.5,\\ 17.5$.",
            "Multiply each midpoint by its frequency ($f \\times x$):",
            "$2.5 \\times 6 = 15$",
            "$7.5 \\times 12 = 90$",
            "$12.5 \\times 14 = 175$",
            "$17.5 \\times 8 = 140$",
            "Calculate the total of the $fx$ values: $15 + 90 + 175 + 140 = 420$.",
            "Identify the total frequency ($n$): $6 + 12 + 14 + 8 = 40$.",
            "Estimate the mean using $\\dfrac{\\sum fx}{\\sum f} = \\dfrac{420}{40} = 10.5$.",
            "Final Answer: $$\\text{Estimated mean} = 10.5\\text{ minutes}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Why is it an 'Estimate'?",
            "content": "Students are often confused why we call this an 'estimate' when the math seems exact. It is because we don't know the actual times for each student—only the interval they fall into. We assume everyone scores exactly at the **midpoint**. Forgetting to use the midpoint is the most common way to lose all marks on this question!"
        },
        "payhip_link": "https://payhip.com/b/rsVCz", // Vectors, Probability & Stats pack
        "button_text": "Master Statistics: Download the Full Vectors, Probability, & Stats Pack"
    },
// 6 Apr
    // 6 Apr
    {
        "id": "001591",
        "date": "6 Apr 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Stationary points",
        "difficulty": "A*",
        "notice": "IGCSE Specialist Topic.",
        "q": "A curve has the equation $y = x^3 - 3x^2 - 9x + 5$.<br>(a) Find $\\dfrac{dy}{dx}$.<br>(b) Find the coordinates of the two stationary points.",
        "img": "",
        "steps": [
            "(a) Differentiate the expression with respect to $x$: $$\\dfrac{dy}{dx} = 3x^2 - 6x - 9$$",
            "(b) Stationary points occur when the gradient is zero. Set $\\dfrac{dy}{dx} = 0$: $$3x^2 - 6x - 9 = 0$$",
            "Divide the equation by 3 to simplify: $x^2 - 2x - 3 = 0$.",
            "Factorise the quadratic: $(x - 3)(x + 1) = 0$.",
            "Identify the $x$-coordinates: $x = 3$ and $x = -1$.",
            "Substitute $x = 3$ into the original equation: $y = (3)^3 - 3(3)^2 - 9(3) + 5 = -22$.",
            "Substitute $x = -1$ into the original equation: $y = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = 10$.",
            "Final Answer: $$(3, -22)\\text{ and } (-1, 10)$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Horizontal Tangents",
            "content": "A 'stationary point' is simply a point where the tangent to the curve is perfectly horizontal. That is why we set the gradient function to zero. Remember, the question asks for <strong>coordinates</strong>, so you haven't finished until you've plugged your $x$ values back into the <strong>original</strong> equation to find $y$!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Algebra Pack
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 7 Apr
    {
        "id": "001592",
        "date": "7 Apr 2026",
        "major_area": "Coordinate Geometry & Geometry",
        "topic": "Circle Theorems",
        "subtopic": "Tangents",
        "difficulty": "B/A",
        "notice": "Alternate Segment Theorem.",
        "q": "In the diagram, $ST$ is a tangent to the circle at point $A$. $B$ and $C$ are points on the circumference.<br>Given that $\\angle BAS = 62^\\circ$ and $\\angle ABC = 54^\\circ$, calculate the size of $\\angle BAC$.",
        "img": "images/apr_07_i.png",
        "steps": [
            "By the <strong>Alternate Segment Theorem</strong>, the angle between the tangent ($ST$) and the chord ($AC$) is equal to the angle in the alternate segment ($\\angle ACB$).",
            "However, here $\\angle BAS$ is given as $62^\\circ$. By the theorem, $\\angle BCA = \\angle BAS = 62^\\circ$.",
            "Now consider $\\triangle ABC$. The sum of angles in a triangle is $180^\\circ$.",
            "Calculate: $\\angle BAC = 180^\\circ - (54^\\circ + 62^\\circ)$.",
            "Simplify: $\\angle BAC = 180^\\circ - 116^\\circ$.",
            "Final Answer: $$64^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Spotting the Theorem",
            "content": "The Alternate Segment Theorem is often the 'grade-decider' in IGCSE Geometry. Look for a triangle 'balanced' on a tangent line. The angle outside the triangle at the point of contact is always equal to the interior angle at the opposite vertex. Always state the name of the theorem to secure your reason marks!"
        },
        "payhip_link": "https://payhip.com/b/L6skH", // Your Geometry Pack Link
        "button_text": "Master Geometry: Download the Full Coordinate Geometry & Geometry Pack"
    },
   // 8 Apr
    {
        "id": "001593",
        "date": "8 Apr 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Rearranging with fractions",
        "difficulty": "B/A",
        "q": "Make $x$ the subject of the formula: $$y = \\frac{2x + 3}{x - 5}$$",
        "img": "",
        "steps": [
            "Multiply both sides by the denominator $(x - 5)$: $$y(x - 5) = 2x + 3$$",
            "Expand the bracket: $$xy - 5y = 2x + 3$$",
            "Collect all terms containing $x$ on one side and all other terms on the other side: $$xy - 2x = 5y + 3$$",
            "Factorise $x$ out of the left-hand side: $$x(y - 2) = 5y + 3$$",
            "Divide both sides by $(y - 2)$ to isolate $x$.",
            "Final Answer: $$x = \\frac{5y + 3}{y - 2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Factorising Step",
            "content": "The most common mistake students make is getting stuck once they have $x$ on both sides of the equation. Whenever the subject you are looking for appears more than once, you <strong>must</strong> collect those terms together and factorise. It's the only way to get the subject on its own!"
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Algebra Pack
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 9 Apr
  // 9 Apr
    {
        "id": "001594",
        "date": "9 Apr 2026",
        "major_area": "Number",
        "topic": "Powers & Roots",
        "subtopic": "Index notation",
        "difficulty": "B/A",
        "notice": "Non-calculator question.",
        "q": "Without using a calculator, evaluate the following:<br>(a) $27^{\\frac{2}{3}}$<br>(b) $16^{-\\frac{3}{4}}$",
        "img": "",
        "steps": [
            "(a) For $27^{\\frac{2}{3}}$, first take the cube root of 27: $\\sqrt[3]{27} = 3$.",
            "(a) Now square the result: $3^2 = 9$.",
            "(b) For $16^{-\\frac{3}{4}}$, first handle the negative sign by taking the reciprocal: $\\dfrac{1}{16^{\\frac{3}{4}}}$.",
            "(b) Now find the fourth root of 16: $\\sqrt[4]{16} = 2$.",
            "(b) Cube the result: $2^3 = 8$.",
            "Final Answer: $$(a)\\ 9,\\ (b)\\ \\dfrac{1}{8}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Root then Power",
            "content": "When dealing with fractional indices, always find the <strong>root first</strong> and then apply the <stronh>power</strong>. For example, in part (a), it is much easier to find the cube root of 27 (which is 3) and then square it, rather than trying to square 27 first and then finding the cube root of 729!"
        },
        "payhip_link": "https://payhip.com/b/XEV2Z", // Number Pack
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 10 Apr
   // 10 Apr
    {
        "id": "001595",
        "date": "10 Apr 2026",
        "major_area": "Probability",
        "topic": "Basic Probability",
        "subtopic": "Conditional Probability",
        "difficulty": "A*",
        "notice": "Without replacement.",
        "q": "A box contains 5 green pens and 3 blue pens. Two pens are taken at random without replacement.<br>Calculate the probability that at least one green pen is taken.",
        "img": "",
        "steps": [
            "Total number of pens = $5 + 3 = 8$.",
            "The quickest way to find 'at least one' is to use the formula: $1 - P(\\text{none})$.",
            "The probability that 'none' are green means both pens are blue.",
            "Probability the first is blue: $P(B_1) = \\dfrac{3}{8}$.",
            "Since we do not replace the pen, probability the second is blue: $P(B_2) = \\dfrac{2}{7}$.",
            "Probability both are blue: $\\dfrac{3}{8} \\times \\dfrac{2}{7} = \\dfrac{6}{56}$.",
            "Subtract from 1: $1 - \\dfrac{6}{56} = \\dfrac{50}{56}$.",
            "Simplify the fraction: $\\dfrac{25}{28}$.",
            "Final Answer: $$\\dfrac{25}{28}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The 'At Least' Shortcut",
            "content": "Whenever you see 'at least one' in a probability question, don't waste time calculating every successful outcome. It is almost always faster to calculate the probability of the one outcome you <strong>don't</strong> want (in this case, zero green pens) and subtract it from 1!"
        },
        "payhip_link": "https://payhip.com/b/rsVCz", // Vectors, Probability & Stats Pack
        "button_text": "Master Probability: Download the Full Vectors & Stats Pack"
    },
	// 11 Apr
    {
        "id": "001596",
        "date": "11 Apr 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Quadratic formula",
        "difficulty": "B/A",
        "q": "Solve the equation $3x^2 - 10x + 2 = 0$.<br>Give your answers correct to 2 decimal places.",
        "img": "",
        "steps": [
            "Identify the coefficients: $a = 3, b = -10, c = 2$.",
            "Substitute into the formula: $x = \\dfrac{-(-10) \\pm \\sqrt{(-10)^2 - 4(3)(2)}}{2(3)}$.",
            "Simplify the discriminant: $\\sqrt{100 - 24} = \\sqrt{76}$.",
            "Calculate the two possible values for $x$: $x = \\dfrac{10 + 8.7177...}{6}$ or $x = \\dfrac{10 - 8.7177...}{6}$.",
            "Final Answer: $$x = 3.12\\text{ and } x = 0.21$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Watch the Signs!",
            "content": "A very common error in IGCSE Paper 4 is forgetting that $-b$ becomes $+10$ because $b$ was already negative. Also, always put negative numbers in brackets when squaring on a calculator to avoid a syntax error!"
        },
        "payhip_link": "https://payhip.com/mg5YS",
		"button_text": "Master Algebra: Download the Full Algebra Pack" 
    },
// 12 Apr
    {
        "id": "001597",
        "date": "12 Apr 2026",
        "major_area": "Vectors, Probability and Statistics",
        "topic": "Vectors",
        "subtopic": "Parallel vectors",
        "difficulty": "A*",
        "q": "$\\overrightarrow{OP} = \\mathbf{a}$ and $\\overrightarrow{OQ} = \\mathbf{b}$. $R$ is a point on $PQ$ such that $PR:RQ = 1:2$.<br>Find $\\overrightarrow{OR}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
        "steps": [
            "Find the vector $\\overrightarrow{PQ} = \\overrightarrow{OQ} - \\overrightarrow{OP} = \\mathbf{b} - \\mathbf{a}$.",
            "Since $PR:RQ = 1:2$, the point $R$ is $\\frac{1}{3}$ of the way along $PQ$.",
            "So, $\\overrightarrow{PR} = \\frac{1}{3}\\overrightarrow{PQ} = \\frac{1}{3}(\\mathbf{b} - \\mathbf{a})$.",
            "Use the path $\\overrightarrow{OR} = \\overrightarrow{OP} + \\overrightarrow{PR}$.",
            "Substitute: $\\mathbf{a} + \\frac{1}{3}\\mathbf{b} - \\frac{1}{3}\\mathbf{a}$.",
            "Final Answer: $$\\frac{2}{3}\\mathbf{a} + \\frac{1}{3}\\mathbf{b}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The Section Formula",
            "content": "This is a classic 'vector path' question. Notice how the result is a weighted average of the two position vectors. If the ratio were $1:1$ (the midpoint), the answer would simply be $\\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$."
        },
        "payhip_link": "https://payhip.com/b/rsVCz", // Swap for your Vectors link if different
        "button_text": "Master Vectors: Download the Full Vectors, Probability, & Stats Pack" 
    },
// 13 Apr
    {
        "id": "001598",
        "date": "13 Apr 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Gradient from tangents",
        "difficulty": "A",
        "notice": "IGCSE Specialist Topic.",
        "q": "A curve has the equation $y = kx^2 + 5x$, where $k$ is a constant.<br>The gradient of the curve at the point where $x = 2$ is $13$.<br>Find the value of $k$.",
        "img": "",
        "steps": [
            "Find the gradient function by differentiating $y$ with respect to $x$: $\\dfrac{dy}{dx} = 2kx + 5$.",
            "We are given that the gradient is $13$ when $x = 2$.",
            "Substitute these values into the gradient function: $13 = 2k(2) + 5$.",
            "Simplify the equation: $13 = 4k + 5$.",
            "Subtract 5 from both sides: $8 = 4k$.",
            "Divide by 4 to find $k$.",
            "Final Answer: $$k = 2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Working Backwards",
            "content": "Examiners love to 'flip' the standard question! Instead of asking you to find the gradient, they provide it and ask you to find a missing constant. Always find the general expression for $\\frac{dy}{dx}$ first before you substitute any numbers."
        },
        "payhip_link": "https://payhip.com/b/mg5YS", // Your IGCSE Algebra link
        "button_text": "Master Algebra: Download the Full Algebra Pack" 
    },
// 14 Apr
    {
        "id": "001599",
        "date": "14 Apr 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Currency conversion",
        "difficulty": "C/D",
        "q": "Bill changes £500 into Euros (€) when the exchange rate is £1 = €1.15.<br>While on holiday, he spends €400.<br>He then changes the remaining Euros back into Pounds (£) when the exchange rate is £1 = €1.12.<br>Calculate how much Bill receives in Pounds.",
        "img": "",
        "steps": [
            "Convert the original Pounds to Euros: $500 \\times 1.15 = \\text{€}575$",
            "Subtract the amount spent: $575 - 400 = \\text{€}175$",
            "Convert the remaining Euros back to Pounds using the new rate.",
            "Since we are going from the 'foreign' currency back to the 'home' currency, we divide: $175 \\div 1.12$",
            "Final Answer: $$£156.25$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Divide or Multiply?",
            "content": "A simple way to check your logic: if you are changing money back into a 'stronger' currency (like Pounds from Euros), the number should get smaller. If your answer is larger than the number of Euros you started with, you multiplied when you should have divided!"
        },
        "payhip_link": "https://payhip.com/b/XEV2Z", // Replace with your Number pack link
        "button_text": "Master Number: Download the Full Number Pack" 
    },
// 15 Apr
    {
        "id": "001600",
        "date": "15 Apr 2026",
        "major_area": "Mensuration and Trigonometry",
        "topic": "3D Shapes",
        "subtopic": "Volume of Cylinder",
        "difficulty": "B/C",
        "q": "A cylinder has a volume of $500\\pi\\text{ cm}^3$ and a height of $20\\text{ cm}$.<br>Calculate the radius of the cylinder.",
        "img": "",
        "steps": [
            "Start with the formula for the volume of a cylinder: $V = \\pi r^2 h$.",
            "Substitute the known values into the formula: $500\\pi = \\pi \\times r^2 \\times 20$.",
            "Divide both sides by $\\pi$ to simplify: $500 = 20r^2$.",
            "Divide by 20 to isolate $r^2$: $r^2 = 25$.",
            "Take the square root of both sides to find $r$.",
            "Final Answer: $$5\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Keep the Pi!",
            "content": "When a volume is given 'in terms of $\\pi$', do not convert it to 3.14. Leave it as the symbol $\\pi$ because it will almost always cancel out on both sides of your equation, making the calculation much simpler and more accurate."
        },
        "payhip_link": "https://payhip.com/b/KjXoP", // Replace with your Mensuration/Trig link
        "button_text": "Master Mensuration: Download the Full Mensuration and Trigonometry Pack" 
    },
	// 16 Apr
    {
        "id": "001601",
        "date": "16 Apr 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Maxima and minima",
        "difficulty": "A*",
        "notice": "IGCSE Specialist Topic.",
        "q": "The volume of a box is given by $V = 48x - x^3$.<br>Find the value of $x$ for which the volume is a maximum.",
        "img": "",
        "steps": [
            "Differentiate $V$ with respect to $x$: $\\frac{dV}{dx} = 48 - 3x^2$.",
            "Set the derivative to zero for a stationary point: $48 - 3x^2 = 0$.",
            "Rearrange: $3x^2 = 48$.",
            "Solve for $x$: $x^2 = 16 \\implies x = 4$ (ignoring $-4$ as length must be positive).",
            "Verify with second derivative: $\\frac{d^2V}{dx^2} = -6x$.",
            "At $x=4$, $\\frac{d^2V}{dx^2} = -24$ (negative, so it is a maximum).",
            "Final Answer: $$x = 4$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Calculus in Context",
            "content": "In optimization problems like this, always remember to check if your answer makes physical sense. We ignore $x = -4$ because you cannot have a negative dimension for a box!"
        },
		 "payhip_link": "https://payhip.com/b/mg5ys", // Replace with your Mensuration/Trig link
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 17 Apr
    {
        "id": "001602",
        "date": "17 Apr 2026",
        "major_area": "Coordinate Geometry & Geometry",
        "topic": "Circle Theorems",
        "subtopic": "Cyclic quadrilaterals",
        "difficulty": "B/C",
        "q": "In a cyclic quadrilateral $ABCD$, $\\angle DAB = (2x + 10)^\\circ$ and $\\angle BCD = (3x - 20)^\\circ$.<br>Calculate the value of $x$.",
        "steps": [
            "Opposite angles in a cyclic quadrilateral sum to $180^\\circ$.",
            "Set up equation: $(2x + 10) + (3x - 20) = 180$.",
            "Simplify: $5x - 10 = 180$.",
            "Add 10: $5x = 190$.",
            "Final Answer: $$x = 38$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Opposite vs. Adjacent",
            "content": "Students often confuse cyclic quadrilateral rules with parallel line rules. Remember: it is the <strong>opposite</strong> angles that add to $180$, not the ones next to each other!"
        },
		 "payhip_link": "https://payhip.com/b/L6skH", // Replace with your Mensuration/Trig link
        "button_text": "Master Coordinate Geometry & Geometry: Download the Full Coordinate Geometry & Geometry Pack"
    },
    // 18 Apr
    {
        "id": "001603",
        "date": "18 Apr 2026",
        "major_area": "Algebra",
        "topic": "Sequences",
        "subtopic": "nth term",
        "difficulty": "A/A*",
        "q": "Find the $n^{th}$ term of the quadratic sequence: $5, 12, 23, 38, 57...$",
        "img": "",
        "steps": [
            "First differences: $7, 11, 15, 19$.",
            "Second differences: $4, 4, 4$.",
            "The coefficient of $n^2$ is half the second difference: $4 \\div 2 = 2$. So, starts with $2n^2$.",
            "Subtract $2n^2$ from original sequence: $(5-2), (12-8), (23-18) \\rightarrow 3, 4, 5$.",
            "Find the $n^{th}$ term of $3, 4, 5$: $n + 2$.",
            "Combine the parts.",
            "Final Answer: $$2n^2 + n + 2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Quadratic Sequence Shortcut",
            "content": "Always remember that the second difference is equal to $2a$. If the second difference is 4, then $a$ is 2. This is the quickest way to start a quadratic $n^{th}$ term problem."
        },
		"payhip_link": "https://payhip.com/b/mg5YS", // Replace with your Mensuration/Trig link
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
    // 19 Apr
    {
        "id": "001604",
        "date": "19 Apr 2026",
        "major_area": "Number",
        "topic": "Estimation & Bounds",
        "subtopic": "Error intervals",
        "difficulty": "B/A",
        "q": "The mass of a bag of sugar is $500\\text{ g}$ correct to the nearest $10\\text{ g}$.<br>Write down the error interval for the mass $m$.",
        "steps": [
            "The degree of accuracy is $10\\text{ g}$.",
            "The error is half of this: $\\pm 5\\text{ g}$.",
            "Lower Bound: $500 - 5 = 495\\text{ g}$.",
            "Upper Bound: $500 + 5 = 505\\text{ g}$.",
            "Final Answer: $$495 \\le m < 505$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Inequality Signs",
            "content": "Notice the difference in the signs! $m$ can be exactly $495$ (so we use $\\le$), but it must be strictly less than $505$ (so we use $<$)."
        },
		"payhip_link": "https://payhip.com/b/XEV2Z", 
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 20 Apr
    {
        "id": "001605",
        "date": "20 Apr 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Solving inequalities",
        "difficulty": "A",
        "q": "Solve the inequality: $x^2 - x - 12 > 0$.",
        "img": "",
        "steps": [
            "Factorise the quadratic: $(x - 4)(x + 3) > 0$.",
            "Critical values are $x = 4$ and $x = -3$.",
            "Sketch the parabola (it is a U-shape).",
            "Identify where the graph is above the x-axis: to the left of $-3$ and to the right of $4$.",
            "Final Answer: $$x < -3\\text{ or } x > 4$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Sketching is Key",
            "content": "Never try to solve a quadratic inequality without a quick sketch! It’s the only way to be $100\\%$ sure whether your answer is one range (e.g., $-3 < x < 4$) or two separate ranges."
        },
		 "payhip_link": "https://payhip.com/b/mg5YS", // Replace with your Mensuration/Trig link
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
	// 19 Apr
    {
        "id": "001606",
        "date": "19 Apr 2026",
        "major_area": "Statistics",
        "topic": "Cumulative Frequency",
        "subtopic": "Median",
        "difficulty": "6/7",
        "q": "A cumulative frequency graph represents the heights of 100 plants.<br>The heights range from $0$ to $50\text{ cm}$.<br>Explain how to estimate the number of plants taller than $45\text{ cm}$.",
        "steps": [
            "Find $45\text{ cm}$ on the horizontal (x) axis.",
            "Move vertically up to the curve, then horizontally to the vertical (y) axis.",
            "Read the cumulative frequency value (e.g., 85).",
            "Subtract this value from the total: $100 - 85 = 15$.",
            "Final Answer: $$15\text{ plants}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Taller vs Shorter",
            "content": "The graph always shows how many are **below** a value. If the question asks for 'taller than' or 'more than', you must subtract your reading from the total frequency!"
        },
		 "payhip_link": "https://payhip.com/b/rsVCz", // Replace with your Mensuration/Trig link
        "button_text": "Master Statistics: Download the Full Vectors, Probabilitu & Statistics Pack"
    },
    // 20 Apr
    {
        "id": "001607",
        "date": "20 Apr 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Changing the subject",
        "difficulty": "6/7",
        "q": "Make $t$ the subject of the formula: $v = u + at$.",
        "img": "",
        "steps": [
            "Subtract $u$ from both sides: $v - u = at$.",
            "Divide both sides by $a$.",
            "Final Answer: $$t = \\frac{v - u}{a}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Reverse BIDMAS",
            "content": "When rearranging, think of it as 'undoing' the operations in reverse order. We deal with the addition ($+u$) before we deal with the multiplication ($at$)."
        },
		 "payhip_link": "https://payhip.com/b/mg5YS", // Replace with your Mensuration/Trig link
        "button_text": "Master Algebra: Download the Full Algebra Pack"
    },
	//21 April
{
        "id": "001608",
        "date": "21 Apr 2026",
        "major_area": "Mensuration and Trigonometry",
        "topic": "3D Shapes",
        "subtopic": "Surface area",
        "difficulty": "B/A",
        "q": "A solid sphere has a radius of $6\text{ cm}$. A solid cylinder has a radius of $3\text{ cm}$ and a height of $h\text{ cm}$.<br>The surface area of the sphere is equal to the total surface area of the cylinder. Find $h$.",
        "steps": [
            "Sphere Surface Area: $4\pi r^2 = 4\pi(6^2) = 144\pi$.",
            "Cylinder Surface Area: $2\pi r^2 + 2\pi rh = 2\pi(3^2) + 2\pi(3)h$.",
            "Simplify Cylinder: $18\pi + 6\pi h$.",
            "Equate: $18\pi + 6\pi h = 144\pi$.",
            "Subtract $18\pi$: $6\pi h = 126\pi$.",
            "Final Answer: $$h = 21$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head teacher's Eye: Total Surface Area",
            "content": "In cylinder problems, 'total surface area' includes the two circular ends ($2\pi r^2$) plus the curved surface ($2\pi rh$). Many students forget to include the ends!"
        },
	 "payhip_link": "https://payhip.com/b/KjXoP", // Replace with your Mensuration/Trig link
        "button_text": "Master Mensuration & Trigonometry: Download the Full Mensuration & Trigonometry Pack"
    },
    // 22 Apr
    {
        "id": "001609",
        "date": "22 Apr 2026",
        "major_area": "Coordinate Geometry & Geometry",
        "topic": "Polygons",
        "subtopic": "Interior angles",
        "difficulty": "4/5",
        "q": "The sum of the interior angles of a regular polygon is $1440^\circ$.<br>Calculate the number of sides the polygon has.",
        "steps": [
            "Use the formula: $(n - 2) \\times 180 = 1440$.",
            "Divide by 180: $n - 2 = 8$.",
            "Add 2: $n = 10$.",
            "Final Answer: $$10\text{ sides}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The head Teacher's Eye: The Exterior Shortcut",
            "content": "You can also find the number of sides by finding the exterior angle first. But for 'sum of interior' questions, memorizing $(n-2) \\times 180$ is the most direct path to the marks."
        },
		 "payhip_link": "https://payhip.com/b/L6skH", // Replace with your Mensuration/Trig link
        "button_text": "Master Coordinate Geometry & Geometry: Download the Full Coordinate Geometry & Geometry Pack"
    },
    // 23 Apr
    {
        "id": "001610",
        "date": "23 Apr 2026",
        "major_area": "Number",
        "topic": "Percentages",
        "subtopic": "Reverse percentages",
        "difficulty": "6/7",
        "q": "A TV is sold for £352 in a '20% off' sale.<br>Calculate the original price of the TV.",
        "steps": [
            "Identify that £352 represents 80% of the original price.",
            "Find 1%: $352 \\div 80 = 4.4$.",
            "Multiply by 100: $4.4 \\times 100$.",
            "Final Answer: $$£440$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Don't just add 20%!",
            "content": "A common mistake is to calculate 20% of the sale price and add it back. This is wrong! You must always divide by the multiplier (in this case, $0.8$) to get back to the original value."
        },
		 "payhip_link": "https://payhip.com/b/XEV2Z", // Replace with your Mensuration/Trig link
        "button_text": "Master Number: Download the Full Coordinate Number Pack"
    },
    // 24 Apr
    {
        "id": "001611",
        "date": "24 Apr 2026",
        "major_area": "Probability",
        "topic": "Basic Probability",
        "subtopic": "Venn Diagrams",
        "difficulty": "6/7",
        "q": "In a class of 30 students, 20 like Football and 15 like Cricket. 10 like both.<br>Find the probability that a student chosen at random likes **only** Football.",
        "steps": [
            "Number who like Football only: $20 - 10 = 10$.",
            "Total number of students: $30$.",
            "Probability: $\\frac{10}{30}$.",
            "Final Answer: $$\\frac{1}{3}$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Venn Diagram Logic",
            "content": "Always fill in the intersection (the 'both' section) first! It prevents you from double-counting the students who appear in both categories."
        },
		 "payhip_link": "https://payhip.com/b/rsVCz", // Replace with your Mensuration/Trig link
        "button_text": "Master Vectors, Probability & Statistics: Download the Full Vectors, Probability & Statistics Pack"
		 
    },
 // 25 Apr
    {
        "id": "001612",
        "date": "25 Apr 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations in standard form",
        "difficulty": "B/C",
        "q": "Work out $(4.2 \times 10^5) + (3.8 \times 10^4)$. Give your answer in standard form.",
        "steps": [
            "Make the powers of 10 the same: $3.8 \times 10^4 = 0.38 \times 10^5$.",
            "Add the numbers: $4.2 + 0.38 = 4.58$.",
            "Combine with the power: $4.58 \times 10^5$.",
            "Final Answer: $$4.58 \times 10^5$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Adding in Standard Form",
            "content": "You cannot simply add the numbers if the powers of 10 are different! Always convert them to the same power first (usually the larger one) before adding."
        },
		 "payhip_link": "https://payhip.com/b/XEV2Z", // Replace with your Mensuration/Trig link
        "button_text": "Master Number: Download the Full Number Pack"
    },
    // 26 Apr
    {
        "id": "001613",
        "date": "26 Apr 2026",
        "major_area": "Coordinate Geometry & Geometry",
        "topic": "Similarity & Congruence",
        "subtopic": "Scale factors",
        "difficulty": "8/9",
        "q": "The ratio of the heights of two similar cylinders is $2:5$.<br>The volume of the smaller cylinder is $80\text{ cm}^3$.<br>Calculate the volume of the larger cylinder.",
        "steps": [
            "Linear scale factor $k = \\frac{5}{2} = 2.5$.",
            "Volume scale factor $k^3 = 2.5^3 = 15.625$.",
            "Multiply volume: $80 \\times 15.625$.",
            "Final Answer: $$1250\text{ cm}^3$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head teacher's Eye: Don't Forget The Rule",
            "content": "If the Linear scale factor is $k$ then the Area scale factor is $k^2$ and the Volume scale factor is $k^3$ and you cannot go directly between Area and Volume in either direction."
        },
		"payhip_link": "https://payhip.com/b/L6skH", // Replace with your Mensuration/Trig link
        "button_text": "Master Coordinate Geometry & Geometry: Download the Full Coordinate Geometry & Geometry Pack"
    },
    // 27 Apr
    {
        "id": "001614",
        "date": "27 Apr 2026",
        "major_area": "Algebra",
        "topic": "Expanding Brackets",
        "subtopic": "Triple brackets",
        "difficulty": "6/7",
        "q": "Expand and simplify fully: $(x + 2)(x - 3)(x + 4)$.",
        "steps": [
            "Expand first two: $(x+2)(x-3) = x^2 - x - 6$.",
            "Multiply result by $(x+4)$: $(x^2 - x - 6)(x + 4)$.",
            "Distribute: $x(x^2 - x - 6) + 4(x^2 - x - 6)$.",
            "Simplify: $x^3 - x^2 - 6x + 4x^2 - 4x - 24$.",
            "Final Answer: $$x^3 + 3x^2 - 10x - 24$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: One Step at a Time",
            "content": "Never try to expand all three brackets at once. Expand two, simplify the result, and then multiply by the third. It’s the only way to avoid losing terms."
        },
		 "payhip_link": "https://payhip.com/b/mg5YS", // Replace with your Mensuration/Trig link
        "button_text": "Master Alkgebra: Download the Full Algebra Pack"
    },
    // 28 Apr
    {
        "id": "001615",
        "date": "28 Apr 2026",
        "major_area": "Mensuration and Trigonometry",
        "topic": "Trigonometry",
        "subtopic": "Sine Rule",
        "difficulty": "7/8",
        "q": "In triangle $ABC$, $AB = 8\text{ cm}$, $BC = 11\text{ cm}$ and angle $BAC = 75^\circ$.<br>Calculate the size of angle $ACB$. Give your answer to 1 decimal place.",
		"img": "images/28_apr_i.png",
        "steps": [
            "Use the Sine Rule: $\\dfrac{\\sin C}{c} = \\dfrac{\\sin A}{a}$.",
            "Substitute values: $\\dfrac{\\sin C}{8} = \\dfrac{\\sin 75}{11}$.",
            "Rearrange: $\\sin C = \\dfrac{8 \\times \\sin 75}{11}$.",
            "Calculate $\\sin C \\approx 0.7025...$",
            "Inverse sine: $C = \sin^{-1}(0.7025...)$",
            "Final Answer: $$44.6^\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Side-Angle Pairs",
            "content": "To use the Sine Rule, you must have a 'known pair' (a side and its opposite angle). Here, we have $11\text{ cm}$ and $75^\circ$. Always check for this pair before deciding between Sine and Cosine rules."
        },
        "payhip_link": "https://payhip.com/b/KjXoP",
        "button_text": "Master Mensuration & Trigonometry: Download the Full Pack"
    },
    // 29 Apr
    {
        "id": "001616",
        "date": "29 Apr 2026",
        "major_area": "Algebra",
        "topic": "Simultaneous Equations",
        "subtopic": "Line–Curve Intersections",
        "difficulty": "A/A*",
        "q": "Find the coordinates of the two points where the line $y = 2x + 1$ intersects the circle $x^2 + y^2 = 13$.",
        "img": "",
        "steps": [
            "Substitute the linear equation $y = 2x + 1$ into the circle equation: $$x^2 + (2x + 1)^2 = 13$$",
            "Expand the bracket: $$x^2 + (4x^2 + 4x + 1) = 13$$",
            "Simplify and rearrange into a standard quadratic form: $$5x^2 + 4x - 12 = 0$$",
            "Factorise the quadratic: $$(5x - 6)(x + 2) = 0$$",
            "Find the $x$-values: $$x = 1.2 \\quad \\text{and} \\quad x = -2$$",
            "Substitute $x$ back into the linear equation to find $y$:",
            "If $x = 1.2, \\ y = 2(1.2) + 1 = 3.4$",
            "If $x = -2, \\ y = 2(-2) + 1 = -3$",
            "Final Answer: $$(1.2, 3.4) \\text{ and } (-2, -3)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Substitution is Key",
            "content": "In these 'A*' simultaneous equations, you must always substitute the linear expression into the quadratic one. Once you have your $x$ values, \\textbf{always} plug them back into the linear equation to find $y$—it is much faster and you are less likely to make an error than if you used the circle equation!"
        },
        "payhip_link": "https://payhip.com/bradleysmaths", // Your GCSE Algebra link
        "button_text": "Master Algebra: Download the GCSE Algebra Pack" 
    },
 // 30 Apr
    // 30 Apr
    {
        "id": "001617",
        "date": "30 Apr 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Calculations in standard form",
        "difficulty": "B/A",
        "q": "The distance between Earth and a distant planet is $1.65 \times 10^8 \text{ km}$.<br>A spacecraft travels at an average speed of $5.5 \times 10^4 \text{ km/h}$.<br>(a) Calculate the time taken for the journey in hours. Give your answer in standard form.<br>(b) Calculate the time taken for the journey in days.",
        "img": "",
        "steps": [
            "(a) Use the formula: $\\text{Time} = \\dfrac{\\text{Distance}}{\\text{Speed}}$.",
            "Substitute the values: $\\text{Time} = \\dfrac{1.65 \\times 10^8}{5.5 \\times 10^4}$.",
            "Divide the numbers: $1.65 \\div 5.5 = 0.3$.",
            "Divide the powers of ten: $10^8 \\div 10^4 = 10^4$.",
            "Combine and adjust to correct standard form: $0.3 \\times 10^4 = 3 \\times 10^3$ hours.",
            "(b) Convert hours to days: $3000 \\div 24$.",
            "Final Answer: $$(a)\\ 3 \\times 10^3\\text{ hours},\\ (b)\\ 125\\text{ days}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Standard Form Protocol",
            "content": "When dividing in standard form, always deal with the numbers first and the powers of 10 second. A common pitfall is leaving your part (a) answer as $0.3 \\times 10^4$. Remember, for true standard form, the first number \\textbf{must} be between 1 and 10!"
        },
        "payhip_link": "https://payhip.com/b/XEV2Z", // Your IGCSE Number Pack link
        "button_text": "Master Number: Download the Full Number Pack" 
    },
    // 1 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003201",
        "date": "1 May 2026",
        "major_area": "Number",
        "topic": "Factors, Multiples & Primes",
        "subtopic": "HCF",
        "difficulty": "C/D",
        "q": "Without using a calculator, find the highest common factor (HCF) of 168 and 180.",
        "steps": [
            "We begin by expressing both numbers as products of their prime factors using factor trees.",
            "The prime factorisation of 168 is $2^3 \\times 3 \\times 7$.",
            "The prime factorisation of 180 is $2^2 \\times 3^2 \\times 5$.",
            "To find the HCF, we identify the common prime factors with the lowest powers: $2^2$ and $3$.",
            "Finally, we multiply these values to find the HCF: $4 \\times 3 = 12$.",
            "Final Answer: $$12$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Systematic Factorisation",
            "content": "In the non-calculator Paper 2, speed and accuracy are paramount. Listing factors manually is risky; the prime factorisation method is far more robust and ensures no common factors are overlooked."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 2 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003202",
        "date": "2 May 2026",
        "major_area": "Algebra",
        "topic": "Indices Laws",
        "subtopic": "Negative indices",
        "difficulty": "B/C",
        "q": "Without using a calculator, simplify fully: $$\\left(\\dfrac{16}{x^8}\\right)^{-\\frac{3}{4}}$$.",
        "steps": [
            "We first address the negative index by taking the reciprocal of the fraction: $\\left(\\dfrac{x^8}{16}\\right)^{\\frac{3}{4}}$.",
            "Next, we apply the denominator of the index (the 4th root) to both the numerator and the denominator: $\\dfrac{(x^8)^{1/4}}{16^{1/4}} = \\dfrac{x^2}{2}$.",
            "Finally, we apply the numerator of the index (the cube) to the result.",
            "Final Answer: $$\\dfrac{x^6}{8}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Order of Operations",
            "content": "In index manipulation, the order in which you apply the components of the power is vital. I always advise taking the root before the power to keep the numbers small and manageable in a non-calculator environment."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 3 May - Paper 4 (Calculator) Focus
    {
        "id": "003203",
        "date": "3 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Sine rule",
        "difficulty": "B/A",
        "img": "images/3_may_i.png",
        "q": "In triangle $PQR$, $PQ = 12.6\\text{ cm}$, $\\angle PRQ = 41^\\circ$ and $\\angle QPR = 73^\\circ$. Calculate the length of $QR$.",
        "steps": [
            "We begin by identifying that we have a 'non-included' angle and its opposite side, which indicates the use of the Sine Rule.",
            "The Sine Rule states that $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}$. We set up the equation: $\\dfrac{QR}{\\sin 73^\\circ} = \\dfrac{12.6}{\\sin 41^\\circ}$.",
            "Rearranging to solve for $QR$, we get $QR = \\dfrac{12.6 \\times \\sin 73^\\circ}{\\sin 41^\\circ}$.",
            "Using a calculator, we find that $QR \\approx 18.361...$.",
            "Final Answer: $$18.4\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Three Significant Figures",
            "content": "Unless otherwise stated, Cambridge IGCSE requires all non-exact numerical answers to be given correct to 3 significant figures. Failing to adhere to this general instruction will result in the loss of an accuracy mark."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 4 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003204",
        "date": "4 May 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Changing the subject",
        "difficulty": "B/C",
        "q": "Make $w$ the subject of the formula: $t = 3 + \\sqrt{\\dfrac{w-x}{2}}$.",
        "steps": [
            "We begin by subtracting 3 from both sides of the equation: $t - 3 = \\sqrt{\\dfrac{w-x}{2}}$.",
            "Next, we square both sides to eliminate the square root: $(t - 3)^2 = \\dfrac{w-x}{2}$.",
            "We then multiply both sides by 2: $2(t - 3)^2 = w - x$.",
            "Finally, we add $x$ to both sides to isolate $w$.",
            "Final Answer: $$w = 2(t - 3)^2 + x$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Reverse BIDMAS",
            "content": "Rearranging a formula is effectively 'undressing' the subject. We must reverse the order of operations, dealing with the terms furthest away from the $w$ (the addition of 3) first."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 5 May - Paper 4 (Calculator) Focus
    {
        "id": "003205",
        "date": "5 May 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Compound interest",
        "difficulty": "B/A",
        "q": "A bank account pays compound interest at a rate of 2.5% per year. After 4 years, the value of the investment is $£6,622.72$. Calculate the original amount invested.",
        "steps": [
            "We identify this as a reverse compound interest problem. The multiplier for a 2.5% increase is $1.025$.",
            "The relationship is defined as $\\text{Original} \\times 1.025^4 = 6622.72$.",
            "To find the original investment, we divide the final amount by $1.025^4$.",
            "Calculation: $6622.72 \\div 1.1038... = 6000$.",
            "Final Answer: $$£6,000$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Principal vs Interest",
            "content": "Always read the final line of the question carefully. If the examiner asks for the 'interest earned', you must subtract the principal from the total. Here, we are looking for the original principal itself."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 6 May - Paper 4 (Calculator) Focus
    {
        "id": "003206",
        "date": "6 May 2026",
        "major_area": "Statistics",
        "topic": "Frequency Tables",
        "subtopic": "Grouped data",
        "difficulty": "B/C",
        "q": "The table shows the time, $t$ seconds, taken by 50 students to complete a puzzle.<br><br><table style='border-collapse: collapse; width: 100%; text-align: center;' border='1'><tr><th style='padding: 8px;'>Time ($t$ s)</th><th style='padding: 8px;'>Frequency</th></tr><tr><td style='padding: 5px;'>$20 < t \\le 30$</td><td style='padding: 5px;'>8</td></tr><tr><td style='padding: 5px;'>$30 < t \\le 40$</td><td style='padding: 5px;'>15</td></tr><tr><td style='padding: 5px;'>$40 < t \\le 50$</td><td style='padding: 5px;'>17</td></tr><tr><td style='padding: 5px;'>$50 < t \\le 60$</td><td style='padding: 5px;'>10</td></tr></table><br>Calculate an estimate for the mean time.",
        "steps": [
            "We first find the mid-interval values for each group: 25, 35, 45, and 55.",
            "Next, we multiply each mid-interval value by its corresponding frequency ($f \\times x$):<br>$8 \\times 25 = 200$<br>$15 \\times 35 = 525$<br>$17 \\times 45 = 765$<br>$10 \\times 55 = 550$.",
            "We then sum these products to find the total estimated time: $200 + 525 + 765 + 550 = 2040$.",
            "Finally, we divide the total time by the total number of students ($n = 50$).",
            "Final Answer: $$40.8\\text{ seconds}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Why it is an Estimate",
            "content": "Cambridge often includes a 1-mark 'reasoning' part to this question. The result is an estimate because we do not know the exact times of the students within each interval; we assume they are distributed around the midpoint."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Statistics Pack"
    },
    // 7 May - Paper 4 (Calculator) Focus
    {
        "id": "003207",
        "date": "7 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "difficulty": "B/A",
        "q": "A curve has the equation $y = x^3 - 3x^2 + 4$.<br>(a) Find $\\dfrac{dy}{dx}$.<br>(b) Find the gradient of the curve at the point where $x = 4$.",
        "steps": [
            "For part (a), we differentiate each term using the power rule: multiply by the power and then subtract one from the power. $\\dfrac{dy}{dx} = 3x^2 - 6x$.",
            "For part (b), the gradient of the curve is found by substituting the $x$-value into the derivative expression.",
            "When $x = 4$, we calculate $3(4)^2 - 6(4) = 3(16) - 24 = 48 - 24$.",
            "Final Answer: $$(a)\\ 3x^2 - 6x,\\ (b)\\ 24$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Calculus Foundations",
            "content": "Differentiation is a hallmark of the Extended IGCSE syllabus. Mastery of the power rule allows students to solve complex Paper 4 problems involving tangents, normals, and optimization."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 8 May - Paper 4 (Calculator) Focus
    {
        "id": "003208",
        "date": "8 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Similarity & Congruence",
        "subtopic": "Similar shapes",
        "difficulty": "A/A*",
        "q": "The volumes of two mathematically similar solids are $250\\text{ cm}^3$ and $128\\text{ cm}^3$. The surface area of the larger solid is $150\\text{ cm}^2$. Calculate the surface area of the smaller solid.",
        "steps": [
            "We first find the volume scale factor by dividing the two volumes: $\\dfrac{250}{128} = 1.953125$.",
            "To find the linear scale factor ($k$), we take the cube root of the volume scale factor: $\\sqrt[3]{1.953125} = 1.25$ (or $5/4$).",
            "The area scale factor is the square of the linear scale factor: $1.25^2 = 1.5625$.",
            "Finally, to find the smaller area, we divide the larger area by the area scale factor: $150 \\div 1.5625$.",
            "Final Answer: $$96\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dimensional Bridging",
            "content": "You cannot jump directly from volume to area. You <strong>must</strong> find the linear scale factor ($k$) first. Think of $k$ as the bridge that connects 1D, 2D, and 3D properties."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 9 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003209",
        "date": "9 May 2026",
        "major_area": "Number",
        "topic": "Standard Form",
        "subtopic": "Converting to/from standard form",
        "difficulty": "C/D",
        "q": "Work out the value of $5.2 \\times 10^{12} + 3.1 \\times 10^{10}$, giving your answer in standard form.",
        "steps": [
            "To add numbers in standard form without a calculator, we must first make the powers of 10 equal.",
            "We convert $3.1 \\times 10^{10}$ to $0.031 \\times 10^{12}$.",
            "Now we add the coefficients: $5.2 + 0.031 = 5.231$.",
            "The final expression is $5.231 \\times 10^{12}$.",
            "Final Answer: $$5.231 \\times 10^{12}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Power Alignment",
            "content": "In Paper 2, aligning the powers of 10 is the safest way to perform addition or subtraction. Always convert to the higher power to ensure your final coefficient is already correctly placed for standard form."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 10 May - Paper 4 (Calculator) Focus
    {
        "id": "003210",
        "date": "10 May 2026",
        "major_area": "Probability",
        "topic": "Tree Diagrams",
        "subtopic": "Without replacement",
        "difficulty": "B/A",
        "q": "A box contains 6 green apples and 4 red apples. Two apples are picked at random without replacement. Find the probability that both apples are the same colour.",
        "steps": [
            "We consider two mutually exclusive scenarios: both are green OR both are red.",
            "Probability of two green (GG): $\\dfrac{6}{10} \\times \\dfrac{5}{9} = \\dfrac{30}{90}$.",
            "Probability of two red (RR): $\\dfrac{4}{10} \\times \\dfrac{3}{9} = \\dfrac{12}{90}$.",
            "We add these probabilities together: $\\dfrac{30}{90} + \\dfrac{12}{90} = \\dfrac{42}{90}$.",
            "We simplify the resulting fraction to its lowest terms.",
            "Final Answer: $$\\dfrac{7}{15}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Dependency in Selection",
            "content": "In IGCSE probability, 'without replacement' is a instruction to reduce both the numerator and the denominator for the second pick. This is where most students lose accuracy marks in Paper 4."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE Probability: Download the Extended Probability and Statistics Pack"
    },
    // 11 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003211",
        "date": "11 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Coordinates",
        "subtopic": "Gradients",
        "difficulty": "B/C",
        "q": "The line $L$ passes through the points $A(2, 5)$ and $B(6, -3)$. Find the equation of the line perpendicular to $L$ that passes through the midpoint of $AB$.",
        "steps": [
            "We first find the gradient of $L$: $m = \\dfrac{-3 - 5}{6 - 2} = \\dfrac{-8}{4} = -2$.",
            "The gradient of the perpendicular line is the negative reciprocal: $m_{\\perp} = \\dfrac{1}{2}$.",
            "Next, we find the midpoint of $AB$: $M = \\left(\\dfrac{2+6}{2}, \\dfrac{5+(-3)}{2}\\right) = (4, 1)$.",
            "Using $y - y_1 = m(x - x_1)$ with $(4, 1)$, we get $y - 1 = \\dfrac{1}{2}(x - 4)$.",
            "Simplifying the equation gives $y = \\dfrac{1}{2}x - 2 + 1$.",
            "Final Answer: $$y = \\dfrac{1}{2}x - 1$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: The Perpendicular Relationship",
            "content": "In coordinate geometry, the word 'perpendicular' is an instruction to use the $m_1 m_2 = -1$ rule. Ensuring you apply both the negative and the reciprocal is a non-negotiable skill for high-tier success."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 12 May - Paper 4 (Calculator) Focus
    {
        "id": "003212",
        "date": "12 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Cosine rule",
        "difficulty": "B/A",
        "img": "images/12_may_i.png",
        "q": "In triangle $XYZ$, $XY = 7\\text{ cm}$, $YZ = 9\\text{ cm}$ and $XZ = 12\\text{ cm}$. Calculate the size of the largest angle in the triangle.",
        "steps": [
            "In any triangle, the largest angle is opposite the longest side. Here, we must find angle $Y$.",
            "We use the rearranged Cosine Rule: $\\cos(Y) = \\dfrac{x^2 + z^2 - y^2}{2xz}$.",
            "Substituting the values: $\\cos(Y) = \\dfrac{9^2 + 7^2 - 12^2}{2(9)(7)} = \\dfrac{81 + 49 - 144}{126}$.",
            "Calculating the fraction: $\\cos(Y) = \\dfrac{-14}{126} = -\\dfrac{1}{9}$.",
            "Taking the inverse cosine: $Y = \\cos^{-1}(-1/9) \\approx 96.379...$.",
            "Final Answer: $$96.4^\\circ$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Angle Precision",
            "content": "For IGCSE, angles given in degrees must be rounded to exactly 1 decimal place unless the question specifies otherwise. Over-rounding to $96^\\circ$ will result in a penalty."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 13 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003213",
        "date": "13 May 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Quadratic factorising",
        "difficulty": "B/C",
        "q": "Without using a calculator, solve the equation: $2x^2 + 5x - 12 = 0$.",
        "steps": [
            "We seek factors of $2 \\times (-12) = -24$ that sum to $+5$. These are $+8$ and $-3$.",
            "We split the middle term: $2x^2 + 8x - 3x - 12 = 0$.",
            "Factorising by grouping: $2x(x + 4) - 3(x + 4) = 0$.",
            "This gives the brackets $(2x - 3)(x + 4) = 0$.",
            "Solving for $x$, we find $x = 1.5$ or $x = -4$.",
            "Final Answer: $$x = 1.5,\\ x = -4$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Factorising over Formula",
            "content": "While the quadratic formula will always work, in Paper 2, being able to factorise quickly is a major time-saver. If the coefficient of $x^2$ is not 1, use the grouping method shown above to maintain accuracy."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 14 May - Paper 4 (Calculator) Focus
    {
        "id": "003214",
        "date": "14 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Volume",
        "difficulty": "B/A",
        "q": "A solid metal sphere of radius $6\\text{ cm}$ is melted down and recast into a cylinder of radius $8\\text{ cm}$. Calculate the height of the cylinder.",
        "steps": [
            "We first calculate the volume of the sphere: $V = \\dfrac{4}{3}\\pi(6^3) = 288\\pi$.",
            "Since the metal is recast, the volume of the cylinder must also be $288\\pi$.",
            "The volume formula for a cylinder is $V = \\pi r^2 h$. We set up the equation: $288\\pi = \\pi(8^2)h$.",
            "Cancelling $\\pi$ and simplifying gives $288 = 64h$.",
            "Dividing to find $h$: $h = 288 \\div 64$.",
            "Final Answer: $$4.5\\text{ cm}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Working with Pi",
            "content": "In multi-step volume problems, leave $\\pi$ in your working until the final step. It prevents rounding errors midway through the problem and often cancels out entirely, making the calculation much simpler."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 15 May - Paper 4 (Calculator) Focus
    {
        "id": "003215",
        "date": "15 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "igcse_only": true,
        "subtopic": "Stationary points",
        "difficulty": "A/A*",
        "q": "Find the coordinates of the stationary points on the curve $y = 2x^3 - 9x^2 + 12x + 5$.",
        "steps": [
            "We first find the derivative, $\\dfrac{dy}{dx} = 6x^2 - 18x + 12$.",
            "Stationary points occur when the gradient is zero, so we set $6x^2 - 18x + 12 = 0$.",
            "Dividing by 6 gives $x^2 - 3x + 2 = 0$, which factorises to $(x - 1)(x - 2) = 0$.",
            "This yields $x$-coordinates of 1 and 2. We substitute these back into the original equation for $y$.",
            "When $x = 1, y = 2(1) - 9(1) + 12(1) + 5 = 10$. When $x = 2, y = 2(8) - 9(4) + 12(2) + 5 = 9$.",
            "Final Answer: $$(1, 10) \\text{ and } (2, 9)$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Optimization and Gradients",
            "content": "The term 'stationary point' is an IGCSE instruction to differentiate and set to zero. This is a top-tier skill in Paper 4 and often forms the first part of a larger question on curve sketching or optimization."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 16 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003216",
        "date": "16 May 2026",
        "major_area": "Algebra",
        "topic": "Linear Equations",
        "subtopic": "Equations with brackets",
        "difficulty": "C/D",
        "q": "Solve the equation: $\\dfrac{3(x + 4)}{5} = 12$.",
        "steps": [
            "We begin by multiplying both sides of the equation by 5 to eliminate the fraction: $3(x + 4) = 60$.",
            "Next, we expand the brackets on the left-hand side: $3x + 12 = 60$.",
            "We subtract 12 from both sides to isolate the term with the variable: $3x = 48$.",
            "Finally, we divide by 3 to determine the value of $x$.",
            "Final Answer: $$x = 16$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Logical Sequencing",
            "content": "In Paper 2, many students attempt to expand the bracket before removing the fraction. While mathematically valid, multiplying by 5 first creates much simpler integers to work with, significantly reducing the risk of mental arithmetic errors."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 17 May - Paper 4 (Calculator) Focus
    {
        "id": "003217",
        "date": "17 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Cyclic quadrilaterals",
        "difficulty": "B/A",
        "img": "images/17_may_i.png",
        "q": "$A, B, C$ and $D$ are points on the circumference of a circle. $AB$ is parallel to $DC$. $\\angle ADC = 108^\\circ$.<br>(a) Calculate $\\angle ABC$.<br>(b) Calculate $\\angle BCD$.",
        "steps": [
            "For part (a), we identify $ABCD$ as a cyclic quadrilateral. The opposite angles in a cyclic quadrilateral sum to $180^\\circ$. Therefore, angle $ABC = 180^\\circ - 108^\\circ = 72^\\circ$.",
            "For part (b), we use the property of parallel lines. Since $AB$ is parallel to $DC$, the co-interior angles must sum to $180^\\circ$.",
            "Therefore, $\\angle BCD = 180^\\circ - \\angle ABC = 180^\\circ - 72^\\circ$.",
            "Final Answer: $$(a)\\ 72^\\circ,\\ (b)\\ 108^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Parallel Chord Properties",
            "content": "Cambridge often combines circle theorems with basic angle geometry. When you see parallel lines within a circle, look for 'Z' angles (alternate) or 'C' angles (co-interior). This specific configuration creates an isosceles trapezium, a property worth memorising for Paper 4."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 18 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003218",
        "date": "18 May 2026",
        "major_area": "Number",
        "topic": "Fractions",
        "subtopic": "Fraction operations",
        "difficulty": "C/D",
        "q": "Work out $3\\dfrac{1}{4} - 1\\dfrac{2}{3}$. Give your answer as a mixed number in its simplest form.",
        "steps": [
            "We first convert both mixed numbers into improper fractions: $3\\dfrac{1}{4} = \\dfrac{13}{4}$ and $1\\dfrac{2}{3} = \\dfrac{5}{3}$.",
            "To subtract these fractions, we must find a common denominator, which is 12.",
            "We convert the fractions: $\\dfrac{13 \\times 3}{4 \\times 3} = \\dfrac{39}{12}$ and $\\dfrac{5 \\times 4}{3 \\times 4} = \\dfrac{20}{12}$.",
            "Subtracting the numerators gives $\\dfrac{39 - 20}{12} = \\dfrac{19}{12}$.",
            "Finally, we convert the result back into a mixed number.",
            "Final Answer: $$1\\dfrac{7}{12}$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Common Denominator",
            "content": "Fraction arithmetic is the bedrock of Paper 2. I strongly discourage students from subtracting the whole numbers and fractions separately, as this often leads to errors when the second fraction is larger than the first. The improper fraction method is far more reliable."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 19 May - NEW 2025 Syllabus Topic
    {
        "id": "003219",
        "date": "19 May 2026",
        "major_area": "Algebra",
        "topic": "Algebraic Notation",
        "subtopic": "Substitution",
        "difficulty": "B/A",
        "q": "The function $f(x)$ is defined as $f(x) = \\dfrac{2x + 3}{x - 5}$ for $x \\neq 5$.<br>(a) Calculate $f(7)$.<br>(b) Find the inverse function $f^{-1}(x)$.",
        "steps": [
            "For part (a), we substitute $x = 7$ into the function: $f(7) = \\dfrac{2(7) + 3}{7 - 5} = \\dfrac{17}{2}$.",
            "For part (b), we let $y = \\dfrac{2x + 3}{x - 5}$ and rearrange to make $x$ the subject.",
            "Multiplying by the denominator: $y(x - 5) = 2x + 3$.",
            "Expanding and collecting $x$ terms: $yx - 5y = 2x + 3 \\implies yx - 2x = 5y + 3$.",
            "Factoring $x$: $x(y - 2) = 5y + 3 \\implies x = \\dfrac{5y + 3}{y - 2}$.",
            "Final Answer: $$(a)\\ 8.5,\\ (b)\\ f^{-1}(x) = \\dfrac{5x + 3}{x - 2}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Domain Awareness",
            "content": "In the 2025 syllabus, the restriction $x \\neq 5$ is explicitly stated. High-tier candidates should recognize that this represents a vertical asymptote. When finding an inverse, remember that the range of the original function becomes the domain of the inverse."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 20 May - Paper 4 (Calculator) Focus
    {
        "id": "003220",
        "date": "20 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "3D Shapes",
        "subtopic": "Surface area",
        "difficulty": "B/A",
        "q": "A cone has a base radius of $5\\text{ cm}$ and a slant height of $13\\text{ cm}$. Calculate the total surface area of the cone. Give your answer correct to 1 decimal place.",
        "steps": [
            "The total surface area of a cone consists of the circular base and the curved surface area.",
            "The area of the base is $\\pi r^2 = \\pi(5^2) = 25\\pi$.",
            "The curved surface area is given by the formula $\\pi r l = \\pi(5)(13) = 65\\pi$.",
            "The total surface area is $25\\pi + 65\\pi = 90\\pi$.",
            "Using a calculator, $90 \\times \\pi \\approx 282.743...$.",
            "Final Answer: $$282.7\\text{ cm}^2$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Slant vs Vertical Height",
            "content": "The most common error in cone problems is using the vertical height ($h$) instead of the slant height ($l$) for the curved surface area. Always verify which dimension is provided; if given $h$, you must use Pythagoras to find $l$ before calculating the area."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 21 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003221",
        "date": "21 May 2026",
        "major_area": "Number",
        "topic": "Surds",
        "subtopic": "Rationalising denominators",
        "difficulty": "A/A*",
        "q": "Show that $\\dfrac{10}{\\sqrt{5}}$ can be written as $2\\sqrt{5}$.",
        "steps": [
            "To rationalise the denominator, we multiply both the numerator and the denominator by $\\sqrt{5}$.",
            "This gives $\\dfrac{10 \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}}$.",
            "Simplifying the denominator: $\\sqrt{5} \\times \\sqrt{5} = 5$.",
            "The expression becomes $\\dfrac{10\\sqrt{5}}{5}$.",
            "Dividing 10 by 5 yields the final simplified form.",
            "Final Answer: $$2\\sqrt{5}$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Rationalising Efficiency",
            "content": "In Paper 2, rationalising is a standard procedural task. I tell my students to view $\\sqrt{x}$ in the denominator as an 'unfinished' expression. Multiplying by the surd 'moves' the radical to the numerator and leaves a rational integer below."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 22 May - Paper 4 (Calculator) Focus
    {
        "id": "003222",
        "date": "22 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Trigonometry",
        "subtopic": "Area of triangle 1/2 ab sin C",
        "difficulty": "B/A",
        "img": "images/22_may_i.png",
        "q": "The area of triangle $ABC$ is $40\\text{ cm}^2$. $AB = 10\\text{ cm}$ and $AC = 12\\text{ cm}$. Calculate the two possible sizes of the acute and obtuse angle $BAC$.",
        "steps": [
            "We use the area formula: $\\text{Area} = \\dfrac{1}{2}bc \\sin(A)$.",
            "Substituting the known values: $40 = \\dfrac{1}{2}(10)(12) \\sin(A)$.",
            "Simplifying the equation: $40 = 60 \\sin(A)$, which gives $\\sin(A) = \\dfrac{2}{3}$.",
            "The first (acute) angle is $\\sin^{-1}(2/3) \\approx 41.8^\\circ$.",
            "The second (obtuse) angle is found by $180^\\circ - 41.8^\\circ$.",
            "Final Answer: $$41.8^circ \\text{ and } 138.2^\\circ$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: The Ambiguous Case",
            "content": "IGCSE Paper 4 frequently tests the 'ambiguous' nature of the Sine function. Because $\\sin(x) = \\sin(180-x)$, there are always two possible triangles unless the angle is $90^\\circ$. Always check if the question implies multiple solutions."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 23 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003223",
        "date": "23 May 2026",
        "major_area": "Algebra",
        "topic": "Factorising",
        "subtopic": "Common factors",
        "difficulty": "C/D",
        "q": "Factorise fully: $6ax - 3ay - 4bx + 2by$.",
        "steps": [
            "This expression has four terms, which suggests factorising by grouping.",
            "We group the first two terms and factorise out $3a$: $3a(2x - y)$.",
            "We group the next two terms and factorise out $-2b$: $-2b(2x - y)$.",
            "Note that the brackets are now identical, which is essential for this method.",
            "Finally, we combine the terms into two brackets.",
            "Final Answer: $$(3a - 2b)(2x - y)$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Sign Precision in Grouping",
            "content": "The grouping method is highly susceptible to sign errors in the second bracket. When you factor out $-2b$, you must ensure the $+2by$ term becomes $-y$ inside the bracket. Always expand your result mentally to verify it matches the original."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 24 May - Paper 4 (Calculator) Focus
    {
        "id": "003224",
        "date": "24 May 2026",
        "major_area": "Ratio, Proportion & Rates of Change",
        "topic": "Direct & Inverse Proportion",
        "subtopic": "Proportion equations",
        "difficulty": "B/A",
        "q": "$y$ is directly proportional to $(x - 1)^2$. When $x = 4$, $y = 18$. Calculate the value of $y$ when $x = 6$.",
        "steps": [
            "We establish the relationship equation: $y = k(x - 1)^2$.",
            "Substituting $x = 4$ and $y = 18$: $18 = k(4 - 1)^2 \\implies 18 = 9k$.",
            "Solving for the constant of proportionality: $k = 2$.",
            "The specific formula is $y = 2(x - 1)^2$.",
            "Substitute $x = 6$ into the formula: $y = 2(6 - 1)^2 = 2(5^2)$.",
            "Final Answer: $$50$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Identifying the Relationship",
            "content": "Paper 4 proportion questions often involve transformations like $(x-1)$ or $x^3$. I encourage students to write out the general formula with $k$ immediately. Finding $k$ is the 'anchor step' that allows all subsequent parts of the question to be solved."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 25 May - Paper 4 (Calculator) Focus
    {
        "id": "003225",
        "date": "25 May 2026",
        "major_area": "Algebra",
        "topic": "Inequalities",
        "subtopic": "Solving inequalities",
        "difficulty": "C/D",
        "q": "Solve the inequality: $5 - 2x < 11$.",
        "steps": [
            "We begin by subtracting 5 from both sides of the inequality: $-2x < 6$.",
            "Next, we divide both sides by $-2$.",
            "Crucially, when dividing or multiplying an inequality by a negative number, we must reverse the direction of the inequality sign.",
            "The sign changes from $<$ to $>$.",
            "Final Answer: $$x > -3$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: The Negative Rule",
            "content": "The 'inequality flip' is a classic discriminator in IGCSE. I find that students who treat inequalities exactly like equations often forget this rule. Practice this specific scenario to ensure it becomes a reflexive habit in the exam."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 26 May - Paper 4 (Calculator) Focus
    {
        "id": "003226",
        "date": "26 May 2026",
        "major_area": "Statistics",
        "topic": "Histograms",
        "subtopic": "Interpreting histograms",
        "difficulty": "B/A",
        "img": "images/26_may_i.png",
        "q": "In a histogram, the bar for the interval $20 < x \\le 50$ has a width of $3\\text{ cm}$ and a height of $4\\text{ cm}$. If this bar represents a frequency of 60, calculate the frequency represented by a bar with a width of $2\\text{ cm}$ and a height of $5\\text{ cm}$.",
        "steps": [
            "In a histogram, the frequency is proportional to the area of the bar.",
            "Area of the first bar $= 3 \\times 4 = 12\\text{ cm}^2$.",
            "We find the 'frequency per unit area': $60 \\div 12 = 5$. This means each $1\\text{ cm}^2$ represents 5 units.",
            "Area of the second bar $= 2 \\times 5 = 10\\text{ cm}^2$.",
            "We calculate the frequency: $10 \\times 5 = 50$.",
            "Final Answer: $$50$$"
        ],
        "bradley_insight": {
            "type": "deeper",
            "title": "The Head Teacher's Eye: Area Proportionality",
            "content": "This question tests the fundamental principle that 'Area = Frequency' in a histogram. High-tier Paper 4 questions often use physical dimensions (cm) rather than frequency density values to ensure students truly understand the underlying geometry."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Statistics Pack"
    },
    // 27 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003227",
        "date": "27 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Angles",
        "subtopic": "Regular polygons",
        "difficulty": "C/D",
        "q": "Calculate the size of one exterior angle of a regular polygon with 15 sides.",
        "steps": [
            "We recall that the sum of the exterior angles for any convex polygon is exactly $360^\\circ$.",
            "For a regular polygon, all exterior angles are equal in size.",
            "We divide the total sum by the number of sides: $360 \\div 15$.",
            "Final Answer: $$24^\\circ$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Geometric Constants",
            "content": "The fact that the sum of exterior angles is always $360^\\circ$ is a powerful shortcut. Whether the polygon has 3 sides or 3,000, this constant remains. Use it to find interior angles as well by simply subtracting from $180^\\circ$."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 28 May - Paper 4 (Calculator) Focus
    {
        "id": "003228",
        "date": "28 May 2026",
        "major_area": "Number",
        "topic": "Financial Maths",
        "subtopic": "Currency conversion",
        "difficulty": "C/D",
        "q": "An investor converts $£800$ into dollars at an exchange rate of $£1 = \\$1.26$. Later, they convert the dollars back into pounds at a rate of $£1 = \\$1.20$. Calculate the profit made in pounds.",
        "steps": [
            "We first convert the pounds to dollars: $800 \\times 1.26 = \\$1008$.",
            "We then convert the dollars back to pounds using the new rate: $1008 \\div 1.20 = £840$.",
            "The profit is found by subtracting the original investment from the final amount: $840 - 800$.",
            "Final Answer: $$£40$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Operation Direction",
            "content": "Students often struggle with whether to multiply or divide in currency problems. I advise them to use the 'Big to Small' rule: when moving from a currency where 1 unit is worth more (Pounds) to one where it is worth less (Dollars), you multiply."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Number Pack"
    },
    // 29 May - Paper 2 (Non-Calc) Focus
    {
        "id": "003229",
        "date": "29 May 2026",
        "major_area": "Algebra",
        "topic": "Quadratic Equations",
        "subtopic": "Factorising method",
        "difficulty": "B/A",
        "q": "Solve the equation: $x^2 - 11x + 24 = 0$.",
        "steps": [
            "We search for two numbers that multiply to $+24$ and sum to $-11$.",
            "The numbers are $-3$ and $-8$.",
            "We write the equation in its factorised form: $(x - 3)(x - 8) = 0$.",
            "For the product to be zero, either $x - 3 = 0$ or $x - 8 = 0$.",
            "This yields the two solutions for $x$.",
            "Final Answer: $$x = 3,\\ x = 8$$"
        ],
        "bradley_insight": {
            "type": "caution",
            "title": "The Head Teacher's Eye: Bracket to Solution",
            "content": "A common 'final step' error is finding the correct numbers for the brackets but then failing to invert the signs for the actual solutions. If the bracket is $(x - 3)$, the solution must be $x = +3$."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    },
    // 30 May - Paper 4 (Calculator) Focus
    {
        "id": "003230",
        "date": "30 May 2026",
        "major_area": "Geometry & Measures",
        "topic": "Vectors",
        "subtopic": "Column vectors",
        "difficulty": "C/D",
        "q": "The vector $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$ and the vector $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$. Calculate the magnitude of the vector $2\\mathbf{a} + 3\\mathbf{b}$.",
        "steps": [
            "First, we calculate the scalar multiples: $2\\mathbf{a} = \\begin{pmatrix} 6 \\\\ -8 \\end{pmatrix}$ and $3\\mathbf{b} = \\begin{pmatrix} -3 \\\\ 6 \\end{pmatrix}$.",
            "Adding the vectors: $2\\mathbf{a} + 3\\mathbf{b} = \\begin{pmatrix} 6 - 3 \\\\ -8 + 6 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$.",
            "To find the magnitude ($|v|$), we use Pythagoras' theorem: $|v| = \\sqrt{3^2 + (-2)^2}$.",
            "Calculation: $\\sqrt{9 + 4} = \\sqrt{13}$.",
            "Final Answer: $$3.61$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Magnitude and Pythagoras",
            "content": "The 'magnitude' of a vector is simply its physical length. I remind my students that a column vector is essentially a set of instructions for a right-angled triangle (right/left and up/down), making Pythagoras the natural tool for finding the distance."
        },
        "payhip_link": "https://payhip.com/b/XAGch",
        "button_text": "Master IGCSE: Download the Extended Geometry Pack"
    },
    // 31 May - Paper 4 (Calculator) Focus
    {
        "id": "003231",
        "date": "31 May 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Stationary points",
        "difficulty": "A*",
        "q": "The equation of a curve is $y = x^3 - 12x + 7$.<br>(a) Find the derivative $\\dfrac{dy}{dx}$.<br>(b) Calculate the coordinates of the two stationary points.",
        "steps": [
            "For part (a), we apply the power rule to each term: $\\dfrac{dy}{dx} = 3x^2 - 12$.",
            "For part (b), we set the derivative to zero to find the $x$-coordinates of the stationary points: $3x^2 - 12 = 0$.",
            "Solving for $x$: $3x^2 = 12 \\implies x^2 = 4$, which gives $x = 2$ and $x = -2$.",
            "We substitute $x = 2$ into the original equation: $y = (2)^3 - 12(2) + 7 = 8 - 24 + 7 = -9$.",
            "We substitute $x = -2$ into the original equation: $y = (-2)^3 - 12(-2) + 7 = -8 + 24 + 7 = 23$.",
            "Final Answer: $$(2, -9) \\text{ and } (-2, 23)$$"
        ],
        "bradley_insight": {
            "type": "pro-tip",
            "title": "The Head Teacher's Eye: Completing the Coordinate",
            "content": "A frequent oversight in Paper 4 is finding the $x$-values but forgetting to calculate the $y$-coordinates. The term 'coordinates' is a plural instruction; you must provide the full $(x, y)$ pairs to secure the final marks."
        },
        "payhip_link": "https://payhip.com/b/wRN86",
        "button_text": "Master IGCSE: Download the Extended Algebra Pack"
    }
];


