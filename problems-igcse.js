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
  ]
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
  ]
},

			// 1 Apr
{
  "id": "001586",
  "date": "1 Apr 2026",
  "major_area": "Geometry & Measures",
  "topic": "Coordinates",
  "subtopic": "Gradients",
  "difficulty": "C/D",
  "notice": "Non-calculator question.",
  "q": "Find the equation of the line passing through $(3, -4)$ and $(5, 6)$.",
  "img": "",
  "steps": [
    "Find gradient $m = \\frac{6 - (-4)}{5 - 3} = \\frac{10}{2} = 5$.",
    "Use $y - y_1 = m(x - x_1)$ with $(5, 6)$.",
    "$y - 6 = 5(x - 5)$.",
    "Expand and simplify: $y = 5x - 25 + 6$.",
    "Final answer: $$y = 5x - 19$$"
  ]
},

			// 2 Apr
{
  "id": "001587",
  "date": "2 Apr 2026",
  "major_area": "Number",
  "topic": "Factors, Multiples & Primes",
  "subtopic": "LCM",
  "difficulty": "C/D",
  "notice": "Contextual LCM problem.",
  "q": "Buses leave a station at 8:00 AM. Route A leaves every 20 mins, Route B every 30 mins, and Route C every 45 mins. When do they next leave together?",
  "img": "",
  "steps": [
    "Find prime factors: $20 = 2^2 \\times 5$, $30 = 2 \\times 3 \\times 5$, $45 = 3^2 \\times 5$.",
    "LCM $= 2^2 \\times 3^2 \\times 5 = 4 \\times 9 \\times 5 = 180$.",
    "$180$ minutes $= 3$ hours.",
    "Add 3 hours to 8:00 AM.",
    "Final answer: $$11:00\\text{ AM}$$"
  ]
},

			// 3 Apr
{
  "id": "001588",
  "date": "3 Apr 2026",
  "major_area": "Algebra",
  "topic": "Factorising",
  "subtopic": "Quadratic factorising",
  "difficulty": "B/A",
  "notice": "Negative coefficient of $x^2$.",
  "q": "Factorise fully: $-2x^2 + 5x - 3$.",
  "img": "",
  "steps": [
    "Factor out $-1$: $-(2x^2 - 5x + 3)$.",
    "Find factors of $2 \\times 3 = 6$ that sum to $-5$. These are $-2$ and $-3$.",
    "Split the middle term: $2x^2 - 2x - 3x + 3$.",
    "Factorise in pairs: $2x(x - 1) - 3(x - 1)$.",
    "Result: $-(2x - 3)(x - 1)$.",
    "Final answer: $$(3 - 2x)(x - 1)$$"
  ]
},

			// 4 Apr
{
  "id": "001589",
  "date": "4 Apr 2026",
  "major_area": "Algebra",
  "topic": "Algebraic Fractions",
  "subtopic": "Simplifying",
  "difficulty": "A/A*",
  "notice": "Multi-step simplification.",
  "q": "Simplify: $$\\frac{x^2 - x - 12}{x^2 - 2x - 15} \\div \\frac{x^2 - 6x + 8}{x^2 - 3x - 10}$$",
  "img": "",
  "steps": [
    "Factorise all four quadratics.",
    "Num 1: $(x-4)(x+3)$. Den 1: $(x-5)(x+3)$.",
    "Num 2: $(x-4)(x-2)$. Den 2: $(x-5)(x+2)$.",
    "Invert second fraction and multiply: $\\frac{(x-4)(x+3)}{(x-5)(x+3)} \\times \\frac{(x-5)(x+2)}{(x-4)(x-2)}$.",
    "Cancel $(x-4)$, $(x+3)$, and $(x-5)$.",
    "Final answer: $$\\frac{x + 2}{x - 2}$$"
  ]
},

			// 5 Apr
{
  "id": "001590",
  "date": "5 Apr 2026",
  "major_area": "Statistics",
  "topic": "Frequency Tables",
  "subtopic": "Grouped data",
  "difficulty": "B/A",
  "notice": "Estimate of the Mean.",
  "q": "A grouped frequency table shows times for 40 students to finish a puzzle.<br>0-5 mins (6 students), 5-10 mins (12), 10-15 mins (14), 15-20 mins (8).<br>Estimate the mean time.",
  "img": "",
  "steps": [
    "Find midpoints: $2.5, 7.5, 12.5, 17.5$.",
    "Multiply by frequencies: $15, 90, 175, 140$.",
    "Sum of $fx = 420$.",
    "Divide by total frequency: $420 \\div 40$.",
    "Final answer: $$10.5\\text{ minutes}$$"
  ]
},
// 6 Apr
    {
        "id": "001591",
        "date": "6 Apr 2026",
        "major_area": "Algebra",
        "topic": "Differentiation",
        "subtopic": "Stationary points",
        "difficulty": "A*",
        "notice": "IGCSE Specialist Topic.",
        "q": "A curve has the equation $y = x^3 - 3x^2 - 9x + 5$.<br>(a) Find $\\frac{dy}{dx}$.<br>(b) Find the coordinates of the two stationary points.",
        "img": "",
        "steps": [
            "(a) Differentiate: $\\frac{dy}{dx} = 3x^2 - 6x - 9$.",
            "(b) Set $\\frac{dy}{dx} = 0$: $3x^2 - 6x - 9 = 0$.",
            "(b) Divide by 3 and factorise: $x^2 - 2x - 3 = 0 \\implies (x-3)(x+1) = 0$.",
            "(b) $x$-coordinates are $3$ and $-1$.",
            "(b) Substitute $x=3$ into original: $y = (3)^3 - 3(3)^2 - 9(3) + 5 = -22$.",
            "(b) Substitute $x=-1$ into original: $y = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = 10$.",
            "Final Answer: $$(3, -22)\\text{ and } (-1, 10)$$"
        ]
    },
    // 7 Apr
    {
        "id": "001592",
        "date": "7 Apr 2026",
        "major_area": "Geometry & Measures",
        "topic": "Circle Theorems",
        "subtopic": "Tangents",
        "difficulty": "B/A",
        "notice": "Alternate Segment Theorem.",
        "q": "In the diagram, $AT$ is a tangent to the circle at $A$. $ABC$ is a triangle inside the circle.<br>Given $\\angle BAT = 62^\\circ$ and $\\angle ABC = 54^\\circ$, calculate $\\angle BAC$.",
        "img": "",
        "steps": [
            "By the Alternate Segment Theorem, $\\angle BCA = \\angle BAT = 62^\\circ$.",
            "The sum of angles in triangle $ABC$ is $180^\\circ$.",
            "Calculate: $\\angle BAC = 180^\\circ - (54^\\circ + 62^\\circ)$.",
            "Final Answer: $$64^\\circ$$"
        ]
    },
    // 8 Apr
    {
        "id": "001593",
        "date": "8 Apr 2026",
        "major_area": "Algebra",
        "topic": "Rearranging Formulae",
        "subtopic": "Rearranging with fractions",
        "difficulty": "B/A",
        "q": "Make $x$ the subject of the formula: $y = \\frac{2x + 3}{x - 5}$.",
        "img": "",
        "steps": [
            "Multiply by $(x-5)$: $y(x - 5) = 2x + 3$.",
            "Expand the bracket: $xy - 5y = 2x + 3$.",
            "Move all terms with $x$ to one side: $xy - 2x = 5y + 3$.",
            "Factorise $x$: $x(y - 2) = 5y + 3$.",
            "Divide by $(y-2)$.",
            "Final Answer: $$x = \\frac{5y + 3}{y - 2}$$"
        ]
    },
    // 9 Apr
    {
        "id": "001594",
        "date": "9 Apr 2026",
        "major_area": "Number",
        "topic": "Powers & Roots",
        "subtopic": "Index notation",
        "difficulty": "B/A",
        "notice": "Non-calculator question.",
        "q": "Evaluate: $(a)\\ 27^{\\frac{2}{3}}$ and $(b)\\ 16^{-\\frac{3}{4}}$.",
        "img": "",
        "steps": [
            "(a) Cube root of 27 is 3. Square the result: $3^2 = 9$.",
            "(b) The negative index means the reciprocal: $\\frac{1}{16^{3/4}}$.",
            "(b) Fourth root of 16 is 2. Cube the result: $2^3 = 8$.",
            "Final Answer: $$(a)\\ 9,\\ (b)\\ \\frac{1}{8}$$"
        ]
    },
    // 10 Apr
    {
        "id": "001595",
        "date": "10 Apr 2026",
        "major_area": "Probability",
        "topic": "Conditional Probability",
        "subtopic": "Tree diagrams",
        "difficulty": "A*",
        "notice": "Without replacement.",
        "q": "A box contains 5 green pens and 3 blue pens. Two pens are taken at random without replacement.<br>Calculate the probability that at least one green pen is taken.",
        "img": "",
        "steps": [
            "Method: Use $1 - P(\\text{No Green pens})$.",
            "Probability both are Blue: $P(BB) = \\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56}$.",
            "Subtract from 1: $1 - \\frac{6}{56} = \\frac{50}{56}$.",
            "Simplify the fraction: $\\frac{25}{28}$.",
            "Final Answer: $$\\frac{25}{28}$$"
        ]
    }

]
