const anchorDate = new Date("2026-01-30");
const problemBank = [

		    // JAN 30
            {
                q: "Find the volume of a sphere with radius 3cm.",
                steps: ["Formula: $\\frac{4}{3}\\pi r^3$.", "$\\frac{4}{3}\\pi (27)$.", "$4 \\times 9\\pi$.", "Final Answer: $$36\\pi$$"]
            },
           
            // JAN 31
            {
                q: "Algebraic Proof: Show that the sum of 3 consecutive integers is a multiple of 3.",
                steps: ["Terms: $n, n+1, n+2$.", "Sum: $3n + 3$.", "Factorise: $3(n+1)$.", "Conclusion: Multiple of 3."]
            },
           //1 Feb
  			{
    			"q": "Simplify $12a+4b-7a-5b$",
   			 	"img": "",
    			"steps": [
      			"Rewrite the expression to gather like terms: $12a - 7a + 4b - 5b$",
      			"Final answer: $$5a - b$$"
    			]
  			},
			//2 Feb
  			{
    			"q": "The diagram shows two parallel lines intersecting two straight lines.<br>Find the values of a, b and c",
    			"img": "images/feb_2.png",
    			"steps": [
      			"a = 143° (corresponding angles are equal).",
      			"b = 40° (alternate angles are equal).",
      			"c = 103° (exterior angle equals the sum of the two opposite interior angles).",
      			"Final answer: a = 143°, b = 40°, c = 103°"
    			]
  			},
			//3 Feb
  			{
    			"q": "Jade invests €18000 at 5.25% per year compound interest.<br>Find the value of her investment at the end of 10 years.<br>Give your answer to the nearest ten thousand Euros.",
    			"img": "",
    			"steps": [
      			"$18000(1 + \\frac{5.25}{100})^{10}$",
      			"$= 18000(1.0525)^{10}$",
      			"$= 30025.73$",
      			"Final answer: €30000"
    			]
  			},
			//4 Feb
  			{
    			"q": "A regular polygon has an interior angle of 165°.<br>How many sides does it have?",
    			"img": "",
    			"steps": [
      			"$180° - 165° = 15°$", 
      			"$\\frac{360°}{15°} = 24$",
      			"Final answer: 24 sides"
    			]
  			},
			//5 Feb
  			{
    			"q": "Write the recurring decimal $ 0.6\\dot{4}$ as a fraction, giving your answer in its simplest form.",
    			"img": "",
    			"steps": [
      			"$ x = 0.6\\dot{4}$ (1)",
      			"$10x = 6.\\dot{4}$ (2)",
      			"$100x = 64.\\dot{4}$ (3)",
      			" (3) - (2): $90x = 58$",
      			"$x = \\frac{58}{90} = \\frac{29}{45}$",
      			"Final answer: $$\\frac{29}{45}$$"
    			]
  			},
			//6 Feb
  			{
			    "q": "Consider the right angled triangle below:<br>a) Calculate the length of AB<br>b) Calculate the size of angle BAC",
    			"img": "images/feb_6.png",
    			"steps": [
      			"a) AB $= \\sqrt{20^2 + 7^2}$",
      			" $= \\sqrt{449} = 21.2$cm (3sf)",
      			"b) Angle BAC$ = \\tan^{-1} \\frac{20}{7}",
      			"$= 70.7° (1dp)"
    			]
  			},
			//7 Feb
  			{
    			"q": "Consider the Venn diagram below.<br>The number in the universal set is 50.<br>$n(A)=32, n(B)=28, n(A \\cup B)' = 8$.<br>Find:<br>a) $n(A \\cap B)$<br>b) $n(A' \\cap B)$",
    			"img": "images/feb_7.png",            
    			"steps": [
      			"a) $A \\cup B = 50 - 8 = 42$",
      			"$A \\cup B = A + B - A \\cap B$",
      			"$ 42 = 32 + 28 - A \\cap B$",
      			"$ n(A \\cap B) = 60-42 = 18$",
      			"b) $ n(A' \\cap B) = 28 - 18 = 10$"
    			]
  			},
			//8 Feb
			{
    			"q": "Peter invests £20000 for 10 years.<br>At the end of the period his investment is worth £35817 (nearest pound).<br>Calculate the interest rate.",
    			"img": "",
    			"steps": [
      			"$20000\\left(1+\\frac{r}{100}\\right)^{10} = 35817$",
      			"$\\left(1+\\frac{r}{100}\\right)^{10} = \\frac{35817}{20000}$",
      			"$1+\\frac{r}{100} = \\left(\\frac{35817}{20000}\\right)^\\frac{1}{10}$",
      			"$\\frac{r}{100} = \\left(\\frac{35817}{20000}\\right)^\\frac{1}{10}-1$ ",
      			"$r = 100[\\left(\\frac{35817}{20000}\\right)^\\frac{1}{10}-1]$",
      			"Final answer: $$6\\%$$"
    			]
  			},
			//9 Feb
			{
    			"q": "$y=\\sqrt[3]{\\left(\\frac{p^7}{q^2}\\right)}$<br>a) Find $y$ when $p = 9$ and $q=3$.<br>b) Rearrange the formula to make $p$ the subject.",
    			"img": "",
    			"steps": [
			    "a) $ y = \\sqrt[3]{\\left(\\frac{9^7}{3^2}\\right)}$",
      			"$ y = \\sqrt[3]{\\left(\\frac{9^7}{9}\\right)}$",
      			"$ y = \\sqrt[3]{9^6}$",
      			"$ y = 9^2 = 81$",
      			"b) $y^3 = \\left(\\frac{p^7}{q^2}\\right)$",
      			"$ p^7 = q^2y^3$",
      			"$p = \\sqrt[7]{q^2y^3}$"
    			]
  			},
			//10 Feb
			{
    			"q": "The straight line $y=3x-1$ intersects the curve $y=2x^2-3x+2$ in two points.<br>Find the coordinates of the points of intersection giving your answer correct to 2dp.",
   				"img": "",
    			"steps": [
      			"$2x^2-3x+2=3x-1$",
      			"$2x^2-6x+3=0$",
      			"$x=\\frac{6\\pm \\sqrt{36-(4)(2)(3)}}{4}$",
      			"$x=\\frac{6+\\sqrt{12}}{4}$ or $x=\\frac{6-\\sqrt{12}}{4}$",
      			"$x=2.37$ or $x=0.63$",
      			"If $x=2.37, y=6.10$, if $x=0.63, y=0.90$",
      			"Final answer: $$(2.37,6.10), (0.63,0.90)$$"
     			]
  			},
			//11 Feb
			{
    			"q": "$ \\mathbf{a} = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}  $ and $ \\mathbf{b} = \\begin{pmatrix} -7 \\\\ 9 \\end{pmatrix}$<br>a) Find $\\mathbf{a}-3\\mathbf{b}$.<br>b) Find the exact value of $|\\mathbf{b}|$",
    			"img": "",
    			"steps": [
      			"a) $ \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}  - \\begin{pmatrix} -21 \\\\ 27 \\end{pmatrix} $",
      			"$ = \\begin{pmatrix} 26 \\\\ - 29 \\end{pmatrix} $",
      			"b) $\\sqrt{(-7)^2+9^2} = \\sqrt{49+81}$",
      			"$ = \\sqrt{130}$"
    			]
  			},
			//12 Feb
			{
    			"q": "The first four terms of a sequence are:<br>$ T_1=19,T_2=13, T_3=7, T_4=1 $<br>a) Find $T_5$<br>b) Find $T_n$.",
    			"img": "",
    			"steps": [
      			"a) Common difference: $-6$",
     			 "$T_5 = 1 - 6 = -5$",
      			"b) $T_0 = 25$",
      			"$\\Rightarrow T_n = 25 - 6n$"
    			]
  			},
			//13 Feb
			{
    			"q": "Find the value of $\\Large\\frac{3.6\\times10^4}{1.8\\times10^{-3}}\\normalsize$ giving your answer in standard form without using a calculator.",
    			"img": "",
    			"steps": [
      			"$3.6 \\div 1.8 =2$",
      			"$10^4 \\div 10^{-3} = 10^{4-(-3)}$",
      			"$ = 10^7$",
      			"Final answer:$$2\\times10^7$$"
    			]
  			},
			//14 Feb
			{
    			"q": "The arithmetic mean of five numbers is $12$.<br>When a sixth number, $x$ is added the mean drops to $9$.<br>Find $x$.",
    			"img": "",
    			"steps": [
      			"$\\frac{60+x}{6}=9$",
      			"$60+x=54$",
      			"Final answer: $$x=-6$$"
    			]
  			},
			//15 Feb
			{
    			"q": "In the diagram, below, points A, B, C and D all lie on the circumference of a circle.<br>Giving reasons, write down the size of $\\angle BDA, \\angle BCD \\text{ and } \\angle ABD$.",
    			"img": "images/feb_15.png",
    			"steps": [
      			"$\\angle BDA = 26^\\circ$ (angle in the same segment as $\\angle BCA$)",
      			"$\\angle BCD = 180-62=118^\\circ$ (opposite angles in a cyclic quadrilateral are supplementary)",
      			"$\\angle ABD = 180 - (62+26)=92^\\circ$ (angle sum of $\\triangle ABD$)"
    			]
  			},
			//16 Feb
			{
    			"q": "$f(x)=3^x$<br>Find $x$ when $f^{-1}(x)=4$",
    			"img": "",
    			"steps": [
      			"$f^{-1}(x)=4\\Rightarrow f(4)=x$",
      			"$\\Rightarrow x=3^4$",
      			"Final answer: $$x=81$$"
    			]
  			},
			// 17 Feb
			{
    			"q": "The diagram shows the end view of a storage unit in the shape of two congruent trapeziums.<br>a) Calculate the area of the end wall.<br>b) The length of the sloping roof (marked $x$).<br>c) The angle of the pitch of the roof (marked $y^\\circ$).",
    			"img": "images/feb_17.png",
    			"steps": [
      			"a) Area$=2\\times\\frac{1}{2}(a+b)\\times h$",
      			"$=2\\times\\frac{1}{2}(2.5 + 3)\\times 2.5$",
      			"$=5.5\\times2.5 = 13.75\\text{m}^2$",
      			"b) $x=\\sqrt{0.5^2+2.5^2}$",
      			"$=2.55\\text{m}$",
      			"c) $\\tan=\\frac{opp}{adj}$",
      			"$y=\\tan^{-1}\\left(\\frac{0.5}{2.5}\\right)$",
      			"$=11.3^\\circ$ (1dp)."
    			]
  			},
			// 18 Feb
			{
    			"q": "Factorise $30x^2+9x-3$",
    			"img": "",
    			"steps": [
      			"$30x^2+9x-3\\equiv 3(10x^2+3x-1)$",
      			"$10\\times-1=-10$",
      			"Factors of $-10$ that sum to $3$ are $5$ and $-2$",
      			"Express $3x$ as $5x-2x$ so $3(10x^2+5x-2x-1$)",
      			"Factorise in pairs: $3(5x(2x+1)-1(2x+1))$",
      			"Final answer: $$3(5x-1)(2x+1)$$"
    			]
  			},
			// 19 Feb
			{
    			"q": "Expand and simplify $(x+3)(x-5)(x-2)$",
    			"img": "",
    			"steps": [
      			"Humans are linear processors, don't try to expand the three brackets in one go!",
      			"$(x+3)(x-5)\\equiv x^2-2x-15$",
      			"$(x^2-2x-15)(x-2)\\equiv x(x^2-2x-15)-2(x^2-2x-15)$",
      			"$\\equiv x^3-2x^2-15x-2x^2+4x+30$",
      			"Final answer: $$x^3-4x^2-11x+30$$"
    			]
  			},
			//20 Feb
			{
  				"q": "A cuboid is constructed to hold a single metal rod.<br>Its dimensions are length 6cm, width 4cm and height 2.5cm.<br>The rod fits exactly in the box without bending between the bottom left front corner and the top right back corner.<br>a) Calculate the length of the rod correct to 3 sf.<br>b) Calculate the angle the rod makes with the horizontal base of the cuboid correct to 1dp",
  				"img": "",
  				"steps": [
    			"a) Length of rod $= \\sqrt{6^2+4^2+2.5^2}$",
    			"$= 7.63$cm (3sf)",
    			"b) $\\sin\\theta=\\frac{\\text{opp}}{\\text{hyp}}$",
    			"$\\theta=\\sin^{-1}\\left(\\frac{2.5}{\\sqrt{6^2+4^2+2.5^2}}\\right)$",
    			"$=19.1^\\circ$ (1dp)"
  				]
			},
			//21 Feb
			{
  				"q": "$y$ is inversely proportional to $\\sqrt{x+6}$.<br>When $y=100$, $x=10$.<br>Find $x$ when $y=40$",
  				"img": "",
  				"steps": [
    			"$y \\propto \\frac{1}{\\sqrt{x+6}} \\Rightarrow y=\\frac{k}{\\sqrt{x+6}}$",
    			"$100 = \\frac{k}{\\sqrt{10+6}}$",
    			"$100 = \\frac{k}{4} \\Rightarrow k=400$",
    			"$40 = \\frac{400}{\\sqrt{x+6}}$",
			    "$\\sqrt{x+6} = 10 \\Rightarrow x+6 = 100$",
    			"$x=94$",
    			"Final answer: $$x=94$$"
  				]
			},

			//22 Feb
			{
    			"q": "Without using a calculator solve the equation $3+2\\sin x =4$ for $0^\\circ \\le x \\le 360^\\circ$",
    			"img": "",
    			"steps": [
      			"$3+2\\sin x =4$",
      			"$\\Rightarrow 2\\sin x =1$",
      			"$\\Rightarrow \\sin x =\\frac{1}{2}$",
      			"$\\Rightarrow x =\\sin^{-1}\\left(\\frac{1}{2}\\right)$",
     			"Final answer: $$x=30^\\circ \\text{ or } x=180-30=150^\\circ$$."
    			]
  			},
			//23 Feb
			{
    			"q": "Without using a calculator and giving your answer as a mixed number in it's simplest form, evaluate $1\\frac{3}{8}\\times2\\frac{2}{5}$",
    			"img": "",
    			"steps": [
      			"$1\\frac{3}{8}\\times2\\frac{2}{5}$",
      			"$=\\frac{11}{8}\\times\\frac{12}{5}$",
      			"$=\\frac{11\\times3}{2\\times5}$",
      			"$=\\frac{33}{10}$",
      			"Final answer: $$3\\frac{3}{10}$$"
    			]
  			},
			//24 Feb
			{
    			"q": "Find the LCM of 24 and 84",
    			"img": "",
    			"steps": [
      			"$24=2^3\\times3$",
      			"$84=2^2\\times3\\times7$",
      			"LCM $=2^3\\times3\\times7$",
      			"Final answer: $$168$$"
    			]
  			},
			//25 Feb
			{
  				"q": "Solve the simultaneous equations:<br>$3x+7y=22$<br>$5x-3y=22$",
  				"img": "",
  				"steps": [
    			"Eq1: $3x+7y=22$, Eq2: $5x-3y=22$",
    			"Multiply Eq1 by 3: $9x+21y=66$ (Eq3), multiply Eq2 by 7: $35x-21y=154$ (Eq4)",
    			"Add Eq3 and Eq4: $44x=220$",
    			"$\\Rightarrow x=5$",
    			"Substitute $x=5$ into Eq1: $3(5)+7y=22$",
    			"$\\Rightarrow 15+7y=22 \\Rightarrow y=1$",
    			"Final answer: $$x=5, y=1$$"
  				]
			},

			//26 Feb
			{
    			"q": "Consider the expressions:<br><br>$$9a^2bc^2, 6a^4b^2c^4 \\text{and} 15a^6b^3c$$<br>Write down:<br>a) the HCF<br>b) the LCM",
			    "img": "",
    			"steps": [
      			"a) HCF $= 3a^2bc$",
      			"b) LCM $= 90a^6b^3c^4$"
    			]
 			},
			//27 Feb
			{
  				"q": "Rationalise the denominator of $\\frac{1}{3-\\sqrt{2}}$",
  				"img": "",
  				"steps": [
    			"$\\frac{1}{3-\\sqrt{2}} = \\frac{1 \\cdot (3+\\sqrt{2})}{(3-\\sqrt{2})(3+\\sqrt{2})}$",
    			"$= \\frac{3+\\sqrt{2}}{9-2}$",
    			"Final answer: $$\\frac{3+\\sqrt{2}}{7}$$"
  				]
			},

			//28 Feb
			{
  				"q": "Simplify<br>$\\frac{6x^2-7x-3}{9x^2-1}$",
  				"img": "",
  				"steps": [
    			"$6x^2-7x-3 = 6x^2-9x+2x-3$",
    			"$= 3x(2x-3)+1(2x-3)$",
    			"$= (3x+1)(2x-3)$",
    			"$9x^2-1 = (3x-1)(3x+1)$",
    			"Hence $\\frac{6x^2-7x-3}{9x^2-1} = \\frac{(3x+1)(2x-3)}{(3x-1)(3x+1)}$",
    			"Final answer: $$\\frac{2x-3}{3x-1}$$"
  				]
			},
		   { 
				"date": "1 March", 
"topic": "Vectors", 
"notice": "This is a non-calculator question.", 
"q": "Points A and B have position vectors $\\mathbf{a}$ and $\\mathbf{b}$ respectively.<br>Point C is such that $\\overrightarrow{AC} = 2\\overrightarrow{AB}$.<br>Find the position vector of C in terms of $\\mathbf{a}$ and $\\mathbf{b}$.",
"img": "", 
"steps": [ 
"$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$", 
"$\\overrightarrow{AC} = 2(\\mathbf{b} - \\mathbf{a})$",
"Position vector of C = $\\mathbf{a} + 2(\\mathbf{b} - \\mathbf{a})$",
"$= 2\\mathbf{b} - \\mathbf{a}$" 
]  
}, 
{ 
"date": "2 March", 
"topic": "Quadratic Formula", 
"notice": "", 
"q": "Solve.<br>$2x^2 - 3x - 5 = 0$.<br>Give your answers correct to 2 decimal places.", 
"img": "",
"steps": [
"$x = \\frac{3 \\pm \\sqrt{(-3)^2 - 4(2)(-5)}}{2(2)}$", 
"$= \\frac{3 \\pm \\sqrt{9 + 40}}{4}$", 
"$= \\frac{3 \\pm 7}{4}$", 
"$x = 2.50$ or $x = -1.00$" 
]
}, 
{ 
"date": "3 March", 
"topic": "Functions", 
"notice": "This is a non-calculator question.", 
"q": "$f(x) = 2x + 1$.<br>$g(x) = x^2 - 3$.<br>(a) Find $f(g(x))$.<br>(b) Find $g(f(x))$.", 
"img": "",
"steps": [ 
"$f(g(x)) = 2(x^2 - 3) + 1$", 
"$= 2x^2 - 6 + 1$", 
"$= 2x^2 - 5$", 
"$g(f(x)) = (2x+1)^2 - 3$", 
"$= 4x^2 + 4x + 1 - 3$", 
"$= 4x^2 + 4x - 2$" 
] 
}, 
{ 
"date": "4 March", 
"topic": "Trigonometry - Sine Rule", 
"notice": "", 
"q": "In triangle ABC,<br>$AB=8$cm,<br>$\\angle A = 40^\\circ$,<br>$\\angle B = 65^\\circ$.<br>Find $AC$.<br>Give your answer to 1 decimal place.", 
"img": "images/4_mar_igcse.png",
"steps": [ 
"$\\angle C = 180 - 40 - 65 = 75^\\circ$", 
"$\\frac{AC}{\\sin75} = \\frac{8}{\\sin65}$", 
"$AC = \\frac{8\\sin75}{\\sin65}$", 
"$AC = 8.53$cm" 
] 
}, 
{ 
"date": "5 March", 
"topic": "Indices", 
"notice": "This is a non-calculator question.", 
"q": "Simplify.<br>,br.$$\\frac{5x^3 y^{-2}}{10x^{-1} y}$$", 
"img": "", 
"steps": [ 
"$= \\frac{5}{10} x^{3-(-1)} y^{-2-1}$", 
"$= \\frac{1}{2} x^4 y^{-3}$", 
"$= \\frac{x^4}{2y^3}$" 
] 
}, 
{ 
"date": "6 March", 
"topic": "Simultaneous Equations (Quadratic & Linear)", 
"notice": "This is a non-calculator question.", 
"q": "Solve simultaneously.<br>$y = x + 1$<br>$x^2 + y^2 = 25$.", 
"img": "", 
"steps": [ 
"Substitute $y = x+1$", 
"$x^2 + (x+1)^2 = 25$", 
"$x^2 + x^2 + 2x + 1 = 25$", 
"$2x^2 + 2x - 24 = 0$", 
"$x^2 + x - 12 = 0$", 
"$(x+4)(x-3)=0$", 
"$x = 3$ or $x = -4$", 
"$y = 4$ or $y = -3$" 
] 
}, 
{ 
"date": "7 March", 
"topic": "Vectors", 
"notice": "", 
"q": "Points A, B and C have position vectors<br>\\(\\vec{OA} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix}\\),<br>\\(\\vec{OB} = \\begin{pmatrix} 6 \\\\ 3 \\end{pmatrix}\\).<br>Point C lies on AB such that<br>\\(AC : CB = 1 : 2\\).<br><br>Find the position vector of C.",
"img": "",
"steps": [ 
"\\(\\vec{AB} = \\begin{pmatrix} 4 \\\\ 4 \\end{pmatrix}\\)", 
"C divides AB in ratio 1:2 → AC = 1/3 AB", 
"\\(\\vec{AC} = \\begin{pmatrix} 4/3 \\\\ 4/3 \\end{pmatrix}\\)", 
"\\(\\vec{OC} = \\begin{pmatrix} 2 \\\\ -1 \\end{pmatrix} + \\begin{pmatrix} 4/3 \\\\ 4/3 \\end{pmatrix}\\)",
 "\\(\\vec{OC} = \\begin{pmatrix} 10/3 \\\\ 1/3 \\end{pmatrix}\\)"
] 
}, 
{ 
"date": "8 March", 
"topic": "Exponential Growth", 
"notice": "", 
"q": "The population of a town is 12000.<br>It grows by 3% per year.<br>Find the population after 5 years.<br>Give your answer to the nearest whole number.", 
"img": "", 
"steps": [ 
"Multiplier = 1.03", 
"Population = 12000(1.03)^5", "= 13911"
] 
}, 
{ "date": "9 March", 
"topic": "Transformations - Combined", 
"notice": "This is a non-calculator question.", 
"q": "Describe fully the single transformation equivalent to:<br>a reflection in the y-axis followed by<br>a translation by vector (4,0).", 
"img": "", 
"steps": [ 
"Equivalent to reflection in line x = 2" 
]  
}, 
{ 
"date": "10 March", 
"topic": "Algebraic Fractions", 
"notice": "This is a non-calculator question.", 
"q": "Simplify.<br>$\\frac{x^2 - 9}{x^2 - 3x}$.", 
"img": "",  
"steps": [ 
"$= \\frac{(x-3)(x+3)}{x(x-3)}$",
"$= \\frac{x+3}{x}" 
] 
}, 
{ 
"date": "11 March", 
"topic": "Probability - Conditional", 
"notice": "", 
"q": "In a class of 30 students,<br>18 study French,<br>12 study Spanish,<br>5 study both.<br>Find the probability that a student studies French given that they study Spanish.", 
"img": "",  
"steps": [ 
"P(F|S) = 5/12" 
] 
}, 
{ 
"date": "12 March", 
"topic": "Exponential Growth", 
"notice": "", 
"q": "The population of a town is 18 000.<br>It increases by 3% each year.<br><br>(a) Write down an expression for the population after \\(n\\) years.<br>(b) Calculate the population after 5 years.<br>Give your answer correct to the nearest whole number.", 
"img": "",
"steps": [ 
"(a) \\(18000(1.03)^n\\)", 
"(b) \\(18000(1.03)^5\\)", "= 20866.9...", 
"Population ≈ 20 867" 
] 
}, 
{ 
"date": "13 March", 
"topic": "Graphs - Gradient of Curve", 
"notice": "", 
"q": "The graph of $y = x^2$ is drawn.<br>Find the gradient at $x=3$.", 
"img": "", 
"steps": [ 
"Gradient = 2x", 
"At x=3", 
"= 6" 
] 
}, 
{ 
"date": "14 March", 
"topic": "Sets", 
"notice": "This is a non-calculator question.", 
"q": "In a group of 40 students,<br>25 study Maths,<br>18 study Physics,<br>10 study both.<br>Find the number who study neither subject.",  
"img": "",
"steps": [ 
"Total studying at least one = 25 + 18 - 10 = 33", 
"Neither = 40 - 33", "= 7" 
] 
}, 
{ 
"date": "15 March", 
"topic": "Surds - Rationalising", 
"notice": "This is a non-calculator question.", 
"q": "Rationalise the denominator.<br>$\\frac{3}{2 - \\sqrt{5}}$.", 
"img": "", 
"steps": [ 
"Multiply by conjugate", 
"$= \\frac{3(2+\\sqrt5)}{4-5}$", 
"$= -3(2+\\sqrt5)$", 
"$= -6 - 3\\sqrt5$" 
] 
}, 
{ 
"date": "16 March", 
"topic": "Differentiation", 
"notice": "", 
"q": "Differentiate.<br>$y = 4x^3 - 2x^2 + 5x$.", 
"img": "", 
"steps": [ 
"$\\frac{dy}{dx} = 12x^2 - 4x + 5$" 
] 
}, 
{ 
"date": "17 March", 
"topic": "Vectors - Proof", 
"notice": "This is a non-calculator question.", 
"q": "Points A, B and C have position vectors $\\mathbf{a}$, $\\mathbf{b}$ and $\\mathbf{c}$ respectively.<br>M is the midpoint of AB.<br>N is the midpoint of AC.<br>Show that $\\overrightarrow{MN} = \\frac{1}{2}(\\mathbf{c} - \\mathbf{b})$.", 
"img": "images/17_mar.png", 
"steps": [ 
"Position vector of M = \\frac{(\\mathbf{a} + \\mathbf{b})}{2}", 
"Position vector of N = \\frac{(\\mathbf{a} + \\mathbf{c})}{2}", 
"MN = N - M", 
"= \\frac{(\\mathbf{a} + \\mathbf{c})}{2} - \\frac{(\\mathbf{a} + \\mathbf{b})}{2}",  
"= \\frac{(\\mathbf{c} - \\mathbf{b})}{2}" 
] 
}, 
{ 
"date": "18 March", 
"topic": "Exact Trigonometric Values", 
"notice": "This is a non-calculator question.", 
"q": "Find the exact value of<br>\\(2\\sin 30^\\circ + \\cos 60^\\circ\\).", 
"img": "", 
"steps": [
"\\(\\sin 30^\\circ = \\frac{1}{2}\\)", 
"\\(\\cos 60^\\circ = \\frac{1}{2}\\)", 
"2(\\frac{1}{2}) + \\frac{1}{2}", 
"= 1 + \\frac{1}{2}", 
"= \\frac{3}{2}" 
] 
}, 
{ "date": "19 March", 
"topic": "Surds", 
"notice": "This is a non-calculator question.", 
"q": "Simplify fully:<br>\\(\\sqrt{50} + 3\\sqrt{8}\\).",
"img": "", 
"steps": [ 
"\\(\\sqrt{50} = 5\\sqrt{2}\\)", 
"\\(\\sqrt{8} = 2\\sqrt{2}\\)", 
"\\(3(2\\sqrt{2}) = 6\\sqrt{2}\\)", 
"\\(5\\sqrt{2} + 6\\sqrt{2}\\)", 
"\\(=11\\sqrt{2}\\)" 
] 
}, 
{ "date": "20 March", 
"topic": "Coordinate Geometry",
"notice": "", 
"q": "Points A(1,2), B(4,6) and C(7,2).<br>(a) Show that triangle ABC is isosceles.<br>(b) Find the equation of the perpendicular bisector of AB.<br>(c) Find the area of triangle ABC.", 
"img": "images/20_mar.png", 
"steps": [ 
"$AB^2 = (3)^2 + (4)^2 = 25$", 
"$BC^2 = (3)^2 + (-4)^2 = 25$", 
"$AC^2 = (6)^2 + 0^2 = 36$", 
"AB = BC", 
"Midpoint of AB = (3,4)", 
"Gradient AB = 1", 
"Perpendicular gradient = -1", 
"Equation: $y - 4 = -1(x - 3)$", 
"Area $= \\frac{1}{2} \\times \\text{base} \\times \\text{height} = 12$" 
] 
}, 
{ 
"date": "21 March", 
"topic": "Functions", 
"notice": "This is a non-calculator question.", 
"q": "The function \\(f(x) = 2x^2 - 3x + 1\\).<br>(a) Find \\(f(4)\\).<br>(b) Find the value of \\(x\\) such that \\(f(x) = 1\\).", 
"img" : "",
"steps": [ 
"(a) 2(16) - 12 + 1",
"= 32 - 12 + 1", 
"= 21", 
"(b) $2x^2 - 3x + 1 = 1$", 
"$2x^2 - 3x = 0$", 
"$x(2x - 3) = 0$", 
"$x = 0\\text{ or }x = \\frac{3}{2}$" 
] 
}, 
{ 
"date": "22 March", 
"topic": "Inequalities", 
"notice": "This is a non-calculator question.", 
"q": "Solve the inequality:<br>\\(3(2x - 1) \\le 4x + 5\\).", 
"img" : "",
"steps": [ 
"$6x - 3 \\le 4x + 5$", 
"$2x - 3 \\le 5$", 
"$2x \\le 8$", 
"$x \\le 4$" 
] 
}, 
{ 
"date": "23 March", 
"topic": "Probability", 
"notice": "", 
"q": "A bag contains 3 red and 2 blue counters.<br>Two counters are taken at random without replacement.<br><br>Find the probability that both counters are red.", 
"img": "", 
"steps": [ 
"$P(\\text{first red}) =\\frac{3}{5}$", 
"P(\\{second red}) = \\frac{2}{4}$", 
"Multiply probabilities", 
"$\\frac{3}{5}\\times\\frac{2}{4}$", 
"$=\\frac{6}{20}$", 
"$=\\frac{3}{10}$" 
] 
}, 
{ 
"date": "24 March", 
"topic": "Differentiation - Stationary Points", 
"notice": "", 
"q": "Given $y = x^3 - 6x^2 + 9x$,<br>(a) Find $\\frac{dy}{dx}$.<br>(b) Find the stationary points.<br>(c) Determine their nature.", 
"img": "", 
"steps": [ 
"$\\frac{dy}{dx} = 3x^2 - 12x + 9$", 
"$= 3(x^2 - 4x + 3)$", 
"$= 3(x-1)(x-3)$",
"Stationary at $x=1$ and $x=3$", 
"Second derivative: $\\frac{d^2y}{dx^2} = 6x - 12$", 
"At $x=1$,  $\\frac{d^2y}{dx^2}$ is negative \\Rightarrow maximum", 
"At $x=3$,  $\\frac{d^2y}{dx^2}$ is positive \\Rightarrow minimum"
] 
}, 
{ 
"date": "25 March", 
"topic": "Coordinate Geometry", 
"notice": "This is a non-calculator question", 
"q": "Points A and B have coordinates A(2, 5) and B(8, 1).<br>(a) Find the gradient of AB.<br>(b) Show that the midpoint of AB is (5, 3).<br>(c) Find the equation of the line perpendicular to AB that passes through the midpoint.", 
"img" : "",
"steps": [ 
"(a) $\\text{m}=\\frac{(1 - 5)}{(8 - 2)}$", 
"$= \\frac{-4}{6}$", 
"$= \\frac{-2}{3}$", 
"(b) $\\text{Midpoint}= \\left(\\frac{(2 + 8)}{2} \\text{,} \\frac{(5 + 1)}{2}\\right)$", 
"$= \\left(\\frac{10}{2} \\text{,} \\frac{6}{2}\\right)$", 
"$= (5 , 3)$", 
"(c) $\\text{Perpendicular gradient is the negative reciprocal} = \\frac{3}{2}$", 
"$y - 3 = \\frac{3}{2}(x - 5)$",
"$y=\\frac{3}{2}(x-3)$"
] 
}, 
{ 
"date": "26 March", 
"topic": "Trigonometry - 3D", 
"notice": "", 
"q": "A vertical tower is 20m high.<br>A point on the ground is 15m from its base.<br>(a) Find the angle of elevation.<br>(b) A cable joins the top to the point.<br>Find its length.", 
"img": "images/26_mar.png", 
"steps": [ 
"$\\tanθ = \\frac{20}{15}$", 
"$θ = 53.1^\\circ$", 
"$\\text{Length} = \\sqrt{20^2 + 15^2}$", "$= 25$m"
 ] 
}, 
{ 
"date": "27 March", 
"topic": "Algebraic Manipulation", 
"notice": "This is a non-calculator question.",  
"q": "Expand and simplify:<br>\\((x - 4)(x + 7) - (x - 2)^2\\).",
"img": "", 
"steps": [ 
"$(x - 4)(x + 7) = x^2 + 3x - 28$", 
"$(x - 2)^2 = x^2 - 4x + 4$", 
"Subtract second expression", 
"$x^2 + 3x - 28 - x^2 + 4x - 4$", 
"$= 7x - 32$" 
] 
}, 
{ 
"date": "28 March", 
"topic": "Inequalities - Quadratic", 
"notice": "This is a non-calculator question.", 
"q": "Solve.<br>$x^2 - 5x + 6 \\le 0$.", 
"img": "", 
"steps": [ 
"$(x-2)(x-3) \\le 0$", 
"$2 \\le x \\le 3$" 
] 
}, 
{ 
"date": "29 March", 
"topic": "Circle Geometry", 
"notice": "This is a non-calculator question.", 
"q": "The equation of a circle is<br>$x^2 + y^2 - 4x + 6y - 12 = 0$.<br>(a) Find the centre.<br>(b) Find the radius.", 
"img": "", 
"steps": [ 
"Complete the square:", 
"$(x-2)^2 - 4 + (y+3)^2 - 9 - 12 = 0$", 
"$(x-2)^2 + (y+3)^2 = 25$", 
"Centre (2,-3)", 
"Radius 5" 
] 
}, 
{ 
"date": "30 March", 
"topic": "Bounds", 
"q": "A length is measured as 8.4 cm correct to 1 decimal place.<br>(a) Write down the upper bound.<br>(b) Write down the lower bound.<br>(c) Find the maximum possible area of a square with this side length.", 
"img" : "",
"steps": [ 
"(a) $\\text{Upper bound} = 8.45$", 
"(b) $\\text{Lower bound} = 8.35$", 
"(c) $\\text{Maximum area} = 8.45^2$", 
"$= 71.4025$", 
"$\\approx 71.4 cm^2$" 
]
}, 
{ 
"date": "31 March", 
"topic": "Algebra - Proof", 
"notice": "This is a non-calculator question.", 
"q": "Prove that if $n$ is divisible by 3,<br>then $n^3$ is divisible by 27.", 
"img": "", 
"steps": [ 
"$\\text{Let} n = 3k$", 
"$n^3 = 27k^3$", 
"$27k^3$ is divisible by 27, QED" 
]
},
	{
	"date": "1 April",
	"topic": "Coordinate Geometry",
	"notice": "This is a non-calculator question",
	"q": "Find the equation of the line passing through $(3,-4)$ and $(5,6)$",
	"img": "",
	"steps": [
		"$m=\\text{gradient}=\\frac{\\text{rise}}{\\text{run}}=\\frac{6-(-4)}{5-3}=\\frac{10}{2}=5$",
		"$y-6=5(x-5)$",
		"$y=5x-25+6$",
		"Final answer: $$y-5x-19$$"
		]
		},	
        ]
