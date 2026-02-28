document.addEventListener("DOMContentLoaded", function() {
// --- UI LOGIC: MENU TOGGLE ---
        function toggleMenu() {
            const nav = document.getElementById('navLinks');
            nav.classList.toggle('active');
        }

        // --- DATA: 31 QUESTIONS (2025 SYLLABUS) ---
       const problemBank = 

<!-- --- ENGINE: DATE & DISPLAY --- -->

  // 1️⃣ Define start date (first question in problemBank)
  const startDate = new Date(2026, 0, 30); // Jan = 0

  // 2️⃣ Get today (local midnight to avoid timezone issues)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 3️⃣ Compute day difference
  const msPerDay = 24 * 60 * 60 * 1000;
  const dayIndex = Math.floor((today - startDate) / msPerDay);

  // 4️⃣ Safety check (if array shorter than days passed)
  const safeIndex = Math.max(0, Math.min(dayIndex, problemBank.length - 1));
  const todaysProblem = problemBank[safeIndex];

  // 5️⃣ Display formatted date
  document.getElementById('dateDisplay').textContent =
    today.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });

  // 6️⃣ Render question + image
  let questionHTML = todaysProblem.q;
  if (todaysProblem.img) {
    questionHTML += `<img src="${todaysProblem.img}" class="question-img" alt="Question Diagram">`;
  }
  document.getElementById('math-question').innerHTML = questionHTML;

  // 7️⃣ Render steps (hidden by default)
  const solutionArea = document.getElementById('solution-area');
  todaysProblem.steps.forEach((stepContent, index) => {
    let stepDiv = document.createElement('div');
    stepDiv.className = 'step';
    stepDiv.id = 'step-' + index;
    stepDiv.innerHTML = `<span class="step-text">Step ${index + 1}:</span> ${stepContent}`;
    stepDiv.style.display = 'none'; // hide initially
    solutionArea.appendChild(stepDiv);
  });

  // 8️⃣ Interaction: reveal steps
  let currentStep = 0;
  const totalSteps = todaysProblem.steps.length;
  const btn = document.getElementById('stepBtn');

  window.showNextStep = function() {
    if (currentStep < totalSteps) {
      document.getElementById('step-' + currentStep).style.display = 'block';
      currentStep++;

      if (currentStep < totalSteps) {
        btn.textContent = "Show Next Step";
      } else {
        btn.textContent = "Finished";
        btn.style.backgroundColor = "#f59e0b"; // IGCSE Amber
        btn.style.cursor = "default";
      }
    }
  }
});
