function toggleMenu() {
            const nav = document.getElementById('navLinks');
            nav.classList.toggle('active');
        }
        document.addEventListener("DOMContentLoaded", function() {
       

       // --- ENGINE: DATE & DISPLAY ---
        const date = new Date();
        document.getElementById('dateDisplay').textContent = date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

        // ROBUST LOGIC: Calculate Day of Year (1-366)
        const start = new Date(date.getFullYear(), 0, 0);
        const diff = date - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // OFFSET: Adjust this number to align today (Jan 24) with Question 0
        // Jan 24 is Day 24. We want Index 0. So we subtract 24.
        const offset = 24; 
        
        let dayIndex = (dayOfYear - offset) % problemBank.length;
        
        // Handle negative numbers (if we wrap around the year end or test early dates)
        if (dayIndex < 0) {
            dayIndex = problemBank.length + dayIndex;
        }

        const todaysProblem = problemBank[dayIndex];
        
        let questionHTML = todaysProblem.q;
        if (todaysProblem.img) {
            questionHTML += `<img src="${todaysProblem.img}" class="question-img" alt="Question Diagram">`;
        }
        document.getElementById('math-question').innerHTML = questionHTML;

        const solutionArea = document.getElementById('solution-area');
        todaysProblem.steps.forEach((stepContent, index) => {
            let stepDiv = document.createElement('div');
            stepDiv.className = 'step';
            stepDiv.id = 'step-' + index;
            stepDiv.innerHTML = `<span class="step-text">Step ${index + 1}:</span> ${stepContent}`;
            solutionArea.appendChild(stepDiv);
        });

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
                    btn.style.backgroundColor = "#10b981"; 
                    btn.style.cursor = "default";
                }
            }
        }
    }); 


