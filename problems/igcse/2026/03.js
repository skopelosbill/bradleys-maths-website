const problemBank =[
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
}
];