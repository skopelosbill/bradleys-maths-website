const taxonomy = {
  boards: {
    GCSE: {
      difficulty: ["8/9", "6/7", "4/5"]
    },
    IGCSE: {
      difficulty: ["A*", "B/A", "B/C", "C/D", "D/E"]
    }
  },

  major_areas: {
    Number: {
      topics: {
        "Place Value & Rounding": {
          subtopics: [
            "Place value",
            "Rounding integers",
            "Rounding decimals",
            "Significant figures"
          ]
        },
        "Integers & Operations": {
          subtopics: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Order of operations"
          ]
        },
        "Decimals": {
          subtopics: [
            "Decimal operations",
            "Converting between decimals and fractions"
          ]
        },
        "Fractions": {
          subtopics: [
            "Equivalent fractions",
            "Simplifying",
            "Improper ↔ mixed",
            "Fraction operations"
          ]
        },
        "Percentages": {
          subtopics: [
            "Percentage of an amount",
            "Percentage change",
            "Reverse percentages"
          ]
        },
        "Powers & Roots": {
          subtopics: [
            "Square numbers",
            "Cube numbers",
            "Roots",
            "Index notation"
          ]
        },
        "Standard Form": {
          subtopics: [
            "Converting to/from standard form",
            "Calculations in standard form"
          ]
        },
        "Surds": {
          subtopics: [
            "Simplifying surds",
            "Rationalising denominators"
          ]
        },
        "Factors, Multiples & Primes": {
          subtopics: [
            "Prime factorisation",
            "HCF",
            "LCM"
          ]
        },
        "Estimation & Bounds": {
          subtopics: [
            "Estimating calculations",
            "Upper and lower bounds",
            "Error intervals"
          ]
        },
        "Financial Maths": {
          subtopics: [
            "Simple interest",
            "Compound interest",
            "Currency conversion"
          ]
        }
      }
    },

    Algebra: {
      topics: {
        "Algebraic Notation": {
          subtopics: [
            "Terms and expressions",
            "Substitution"
          ]
        },
        "Collecting Like Terms": {
          subtopics: []
        },
        "Expanding Brackets": {
          subtopics: [
            "Single brackets",
            "Double brackets"
          ]
        },
        "Factorising": {
          subtopics: [
            "Common factors",
            "Quadratic factorising",
            "Difference of squares"
          ]
        },
        "Quadratic Equations": {
          subtopics: [
            "Factorising method",
            "Completing the square",
            "Quadratic formula",
            "Roots from graphs"
          ]
        },
        "Linear Equations": {
          subtopics: [
            "One-step equations",
            "Two-step equations",
            "Equations with brackets",
            "Unknowns on both sides"
          ]
        },
        "Simultaneous Equations": {
          subtopics: [
            "Elimination",
            "Substitution",
            "Graphical solutions"
          ]
        },
        "Inequalities": {
          subtopics: [
            "Solving inequalities",
            "Representing on number lines",
            "Graphical inequalities"
          ]
        },
        "Sequences": {
          subtopics: [
            "Term-to-term rules",
            "nth term",
            "Quadratic sequences"
          ]
        },
        "Graphs": {
          subtopics: [
            "Linear graphs",
            "Quadratic graphs",
            "Cubic graphs",
            "Reciprocal graphs",
            "Exponential graphs",
            "Transformations of graphs"
          ]
        },
        "Algebraic Fractions": {
          subtopics: [
            "Simplifying",
            "Adding/subtracting",
            "Multiplying/dividing"
          ]
        },
        "Indices Laws": {
          subtopics: [
            "Positive indices",
            "Zero index",
            "Negative indices",
            "Fractional indices"
          ]
        },
        "Rearranging Formulae": {
          subtopics: [
            "Changing the subject",
            "Rearranging with powers",
            "Rearranging with fractions"
          ]
        },
        "Exponential Growth & Decay": {
          subtopics: []
        },

        // IGCSE-only calculus
        "Differentiation": {
          igcse_only: true,
          subtopics: [
            "Gradient from tangents",
            "Differentiate ax^n",
            "Differentiate sums of terms",
            "Stationary points",
            "Maxima and minima",
            "Second derivative test"
          ]
        }
      }
    },

    "Ratio, Proportion & Rates of Change": {
      topics: {
        "Ratio": {
          subtopics: [
            "Simplifying ratios",
            "Sharing in a ratio",
            "Ratio ↔ fractions"
          ]
        },
        "Direct & Inverse Proportion": {
          subtopics: [
            "Direct proportion graphs",
            "Inverse proportion graphs",
            "Proportion equations"
          ]
        },
        "Compound Measures": {
          subtopics: [
            "Speed",
            "Density",
            "Pressure"
          ]
        },
        "Percentage Change": {
          subtopics: [
            "Increase/decrease",
            "Reverse percentage"
          ]
        },
        "Best Buys": {
          subtopics: []
        }
      }
    },

    "Geometry & Measures": {
      topics: {
        "Angles": {
          subtopics: [
            "Angles on a line",
            "Angles around a point",
            "Vertically opposite angles",
            "Parallel line angle rules"
          ]
        },
        "Polygons": {
          subtopics: [
            "Interior angles",
            "Exterior angles",
            "Regular polygons"
          ]
        },
        "Similarity & Congruence": {
          subtopics: [
            "Congruent triangles",
            "Similar shapes",
            "Scale factors"
          ]
        },
        "Pythagoras": {
          subtopics: [
            "Finding a side",
            "Finding the hypotenuse",
            "3D Pythagoras"
          ]
        },
        "Trigonometry": {
          subtopics: [
            "SOHCAHTOA",
            "Sine rule",
            "Cosine rule",
            "Area of triangle 1/2 ab sin C"
          ]
        },
        "3D Shapes": {
          subtopics: [
            "Nets",
            "Surface area",
            "Volume"
          ]
        },
        "Circle Theorems": {
          subtopics: [
            "Angles in the same segment",
            "Angle at the centre",
            "Cyclic quadrilaterals",
            "Tangents"
          ]
        },
        "Vectors": {
          subtopics: [
            "Column vectors",
            "Vector addition",
            "Scalar multiplication",
            "Parallel vectors"
          ]
        },
        "Transformations": {
          subtopics: [
            "Reflection",
            "Rotation",
            "Translation",
            "Enlargement"
          ]
        },
        "Coordinates": {
          subtopics: [
            "Midpoints",
            "Distance",
            "Gradients"
          ]
        },
        "Scale Drawings & Bearings": {
          subtopics: [
            "Bearings",
            "Scale diagrams"
          ]
        },

        // GCSE-only topics
        "Constructions": {
          gcse_only: true,
          subtopics: [
            "Perpendicular bisector",
            "Angle bisector",
            "Constructing triangles"
          ]
        },
        "Loci": {
          gcse_only: true,
          subtopics: [
            "Locus of a point",
            "Locus of a line",
            "Regions"
          ]
        }
      }
    },

    Statistics: {
      topics: {
        "Averages & Range": {
          subtopics: [
            "Mean",
            "Median",
            "Mode",
            "Range"
          ]
        },
        "Frequency Tables": {
          subtopics: [
            "Discrete data",
            "Grouped data"
          ]
        },
        "Charts": {
          subtopics: [
            "Bar charts",
            "Pie charts",
            "Line graphs"
          ]
        },
        "Histograms": {
          subtopics: [
            "Frequency density",
            "Interpreting histograms"
          ]
        },
        "Cumulative Frequency": {
          subtopics: [
            "CF tables",
            "CF curves",
            "Median",
            "Quartiles",
            "IQR"
          ]
        },
        "Box Plots": {
          subtopics: []
        },
        "Scatter Graphs": {
          subtopics: [
            "Correlation",
            "Line of best fit"
          ]
        },
        "Sampling": {
          subtopics: [
            "Random sampling",
            "Stratified sampling"
          ]
        }
      }
    },

    Probability: {
      topics: {
        "Basic Probability": {
          subtopics: [
            "Probability scale",
            "Mutually exclusive events"
          ]
        },
        "Sample Space Diagrams": {
          subtopics: []
        },
        "Tree Diagrams": {
          subtopics: [
            "With replacement",
            "Without replacement"
          ]
        },
        "Conditional Probability": {
          subtopics: []
        }
      }
    }
  }
};
