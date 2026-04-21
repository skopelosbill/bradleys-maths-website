const problemBank = [

// JAN 1
{
  q: "Happy New Year! Simplify fully: $(16x^8)^{\\frac{1}{4}}$",
  steps: ["Fourth root of 16 is 2.", 
          "Power of x: $8 \\times 0.25 = 2$.",  
          "Final Answer: $$2x^2$$"
        ]
},
// JAN 2 
{
  q: "ABCD is a cyclic quadrilateral.<br> O (centre) lies on AD.<br> \\angle BOD is $72^\\circ$. <br>BC=CD. <br>Find \\angle ABC.",
  img: "cyclic_quad_jan.png", 
  steps: [
           "Step 1: AD is diameter, so $\\angle ABD = 90^\\circ$.",
           "Step 2: Triangle OBD is isosceles (radii). $\\angle OBD = (180-72)/2 = 54^\\circ$.",
           "Step 3: Equal chords BC=CD means equal angles at centre. $\\angle BOC = 36^\\circ$ and $\\angle COD = 36^\\circ$.",
           "Step 4: Angle at centre (COD=$36^\\circ$) is twice angle at circumference (CBD). So $\\angle CBD = 18^\\circ$.",
           "Step 5: Total Angle ABC = $90^\\circ + 18^\\circ$.",
           "Final Answer: $$108^\\circ$$"
          ]
},
// JAN 3
{
  q: "Differentiation: Find the coordinates of the turning point of $y = x^2 - 8x + 5$.",
  steps: ["Differentiate: $\\frac{dy}{dx} = 2x - 8$.", 
          "Set to 0 for stationary point: $2x - 8 = 0 \\rightarrow x = 4$.", 
          "Substitute $x=4$ into $y$: $16 - 32 + 5$.", 
          "Final Answer: $$(4, -11)$$"
        ]
},
// JAN 4
{
   q: "Sets: $n(\\xi) = 20, n(A) = 12, n(B) = 10, n(A \\cup B) = 18$.<br> Find $n(A \\cap B)$.",
   steps: ["Formula: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.",
            "$18 = 12 + 10 - x$.", "$18 = 22 - x$.", 
            "Final Answer: $$4$$"
          ]
},
// JAN 5 
{
  q: "Surds: Rationalise the denominator of $\\frac{10}{\\sqrt{2}}$.",
  steps: ["Multiply top and bottom by $\\sqrt{2}$.",
          "$\\frac{10\\sqrt{2}}{2}$.", 
          "Simplify $10 \\div 2$.", 
          "Final Answer: $$5\\sqrt{2}$$"
        ]
},
// JAN 6
{
  q: "Functions: $f(x) = 2x - 5$.<br> Find $f^{-1}(x)$.",
  steps: ["Let $y = 2x - 5$.", 
          "Swap variables: $x = 2y - 5$.", 
          "Rearrange: $x + 5 = 2y$.", 
          "Final Answer: $$\\frac{x+5}{2}$$"
        ]
},
// JAN 7
{
  q: "Vectors: $\\vec{OP} = 2\\mathbf{a}$, $\\vec{OQ} = 3\\mathbf{b}$. M is midpoint of PQ. Find $\\vec{OM}$.",
  steps: ["$\\vec{PQ} = -2\\mathbf{a} + 3\\mathbf{b}$.", 
          "$\\vec{PM} = 0.5(-2\\mathbf{a} + 3\\mathbf{b}) = -\\mathbf{a} + 1.5\\mathbf{b}$.",   
          "$\\vec{OM} = \\vec{OP} + \\vec{PM} = 2\\mathbf{a} - \\mathbf{a} + 1.5\\mathbf{b}$.", 
          "Final Answer: $$\\mathbf{a} + 1.5\\mathbf{b}$$"
        ]
},
// JAN 8
{
  q: "Mensuration: Sector Angle $60^\\circ$, Radius 6cm. Find Area.",
  steps: ["Formula: $\\frac{\\theta}{360} \\pi r^2$.", 
    "$\\frac{60}{360} \\pi (36)$.", 
    "$\\frac{1}{6} \\times 36\\pi$.", 
    "Final Answer: $$6\\pi$$"
        ]
},
// JAN 9
{
  q: "Exact Trig: Calculate the exact value of $\\sin(30^\\circ) \\times \\cos(45^\\circ)$.",
  steps: ["$\\sin(30) = 0.5$.", 
    "$\\cos(45) = \\frac{\\sqrt{2}}{2}$.", 
    "Multiply: $\\frac{1}{2} \\times \\frac{\\sqrt{2}}{2}$.", 
    "Final Answer: $$\\frac{\\sqrt{2}}{4}$$"
  ]
},
// JAN 10
{
  q: "Sequences: Find nth term of $5, 8, 11, 14...$",
  steps: ["Difference is +3 ($3n$).", 
          "0th term is $5 - 3 = 2$.", 
          "Final Answer: $$3n + 2$$"
        ]
},
// JAN 11
{
  q: "Bounds: $L = 10$ (nearest integer). $W = 5$ (nearest integer). Max Area?",
  steps: ["Max L = 10.5. Max W = 5.5.", 
    "Area = $10.5 \\times 5.5$.", 
    "Final Answer: $$57.75$$"
  ]
},
// JAN 12
{
  q: "Differentiation: Find gradient of $y = x^3$ at $x=2$.",
  steps: ["Differentiate: $3x^2$.", 
    "Substitute $x=2$.", 
    "$3(2^2) = 3(4)$.", 
    "Final Answer: $$12$$"
  ]
},
// JAN 13
{
  q: "Algebra: Solve $\\frac{2}{x} + \\frac{3}{x+1} = 1$.",
  steps: ["Common denom: $2(x+1) + 3x = x(x+1)$.", 
          "$2x + 2 + 3x = x^2 + x$.", 
          "$5x + 2 = x^2 + x$.", 
          "$x^2 - 4x - 2 = 0$.", 
          "Use Quad Formula.", 
          "Final Answer: $$x=4.45, x=-0.45$$"
        ]
},
// JAN 14 
{
  q: "Functions: Find the value of $x$ that must be excluded from the domain of $f(x) = \\frac{1}{x-3}$.",
  steps: ["The denominator cannot be zero.", 
          "$x - 3 = 0$.", 
          "$x = 3$.", 
          "Final Answer: $$x \\neq 3$$"
        ]
},
// JAN 15
{
  q: "Statistics: Mean of 5 numbers is 12. Add a 6th number (18). New Mean?",
  steps: ["Total of 5: $5 \\times 12 = 60$.", 
          "New Total: $60 + 18 = 78$.", 
          "Count: 6.", "Mean: $78 \\div 6$.", "Final Answer: $$13$$"
        ]
},
// JAN 16
{
  q: "Circle Theorems: Tangent meets Radius. Angle?",
  steps: ["Fundamental Theorem.", 
          "Angle between tangent and radius is always 90.", 
          "Final Answer: $$90^\\circ$$"
        ]
},
// JAN 17
{
  q: "Compound Interest: $500 at 10% for 2 years.",
  steps: ["Multiplier 1.1.", 
          "$500 \\times 1.1^2$.", 
          "$500 \\times 1.21$.", 
          "Final Answer: $$605$$"
        ]
},
// JAN 18
{
  q: "Variation: $y$ inversely proportional to $x$. $x=2, y=10$. Formula?",
  steps: ["$y = k/x$.", 
          "$10 = k/2 \\rightarrow k=20$.",  
          "Final Answer: $$y = \\frac{20}{x}$$"
        ]
},
// JAN 19
{
  q: "Polygons: Sum of interior angles of a pentagon.",
  steps: ["Formula: $(n-2) \\times 180$.", 
          "$(5-2) \\times 180$.", 
          "$3 \\times 180$.", 
          "Final Answer: $$540^\\circ$$"
        ]
},
// JAN 20
{
  q: "Indices: Simplify $(2x^{-2})^{-3}$.",
  steps: ["Number: $2^{-3} = 1/8$.", 
          "Power: $x^{-2 \\times -3} = x^6$.", 
          "Final Answer: $$\\frac{x^6}{8}$$"
        ]
},
// JAN 21
{
  q: "Trig: Solve $\\sin x = 0.5$ for $0 \\le x \\le 360$.",
  steps: ["Principal value: $30^\\circ$.",
          "Sine positive in 2nd quadrant: $180 - 30$.", 
          "Final Answer: $$30^\\circ, 150^\\circ$$"
        ]
},
// JAN 22
{
  q: "Probability: P(A)=0.4, P(B)=0.5. Independent. P(A and B)?",
  steps: ["Independent means multiply.", 
          "$0.4 \\times 0.5$.", 
          "Final Answer: $$0.2$$"
        ]
},
{
  q: "Coordinate Geometry: Midpoint of $(2,4)$ and $(8,10)$.",
  steps: ["Average x: $(2+8)/2 = 5$.", 
          "Average y: $(4+10)/2 = 7$.", 
          "Final Answer: $$(5, 7)$$"
        ]
},
// JAN 24
{
q: "Limits: $x$ is 5.4 correct to 2 sig figs. Upper Bound?",
steps: ["Place value is 0.1.", 
        "Half is 0.05.",  
        "Final Answer: $$5.45$$"
      ]
},
// JAN 25
{
  q: "Speed: 20km in 30 mins. Find speed in km/h.",
  steps: ["30 mins = 0.5 hours.", 
          "Speed = Dist / Time.", 
          "$20 / 0.5$.", 
          "Final Answer: $$40 \\text{ km/h}$$"
        ]
},
// JAN 26
{
  q: "Factorise: $x^2 - 6x + 9$.",
  steps: ["Factors of 9 that add to -6.", 
          "-3 and -3.", 
          "Final Answer: $$(x-3)^2$$"
        ]
},
// JAN 27
{
  q: "Vectors: $\\vec{a} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}, \\vec{b} = \\begin{pmatrix} -1 \\\\ 5 \\end{pmatrix}$.<br> Find $2\\vec{a} + \\vec{b}$.",
  steps: ["$2\\vec{a} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$.", 
          "Add x: $2 + -1 = 1$.", 
          "Add y: $4 + 5 = 9$.", 
          "Final Answer: $$\\begin{pmatrix} 1 \\\\ 9 \\end{pmatrix}$$"
        ]
},
// JAN 28
{
  q: "Simultaneous Eq: $y=3x$ and $x+y=20$.",
  steps: ["Substitute: $x + 3x = 20$.", 
          "$4x = 20 \\rightarrow x=5$.", 
          "$y = 3(5) = 15$.", 
          "Final Answer: $$x=5, y=15$$"
        ]
},
// JAN 29
{
  q: "Standard Form: $2.4 \\times 10^3 + 3.1 \\times 10^2$.",
  steps: ["Convert to ordinary: $2400 + 310$.", 
          "Add: $2710$.", 
          "Convert back.", 
          "Final Answer: $$2.71 \\times 10^3$$"]
},
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
}
];