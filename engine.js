function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) {
        nav.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {      
    // --- 1. DATE & SELECTION LOGIC ---
    const dateDisplay = document.getElementById('dateDisplay');
    if (dateDisplay) {
        const date = new Date();
        dateDisplay.textContent = date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
    }

    const today = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const diffTime = today - anchorDate;
    const daysSinceAnchor = Math.floor(diffTime / oneDay);

    let dayIndex = daysSinceAnchor % problemBank.length;
    if (dayIndex < 0) {
        dayIndex = problemBank.length + dayIndex;
    }

    const todaysProblem = problemBank[dayIndex];
    
    // --- 2. DISPLAY QUESTION ---
    const questionContainer = document.getElementById('math-question');
    if (questionContainer) {
        let questionHTML = todaysProblem.q;
        if (todaysProblem.img) {
            questionHTML += `<br><img src="${todaysProblem.img}" class="question-img" alt="Question Diagram">`;
        }
        questionContainer.innerHTML = questionHTML;
    }

    // --- 3. PREPARE SOLUTION AREA ---
    const solutionArea = document.getElementById('solution-area');
    if (solutionArea) {
        solutionArea.innerHTML = ''; // Clear any existing content

        // Create the Steps (Hidden by default)
        todaysProblem.steps.forEach((stepContent, index) => {
            let stepDiv = document.createElement('div');
            stepDiv.className = 'step';
            stepDiv.id = 'step-' + index;
            stepDiv.style.display = 'none'; 
            stepDiv.innerHTML = `<span class="step-text">Step ${index + 1}:</span> ${stepContent}`;
            solutionArea.appendChild(stepDiv);
        });

        // Create the Bradley Insight Box (Hidden initially)
        if (todaysProblem.bradley_insight) {
            let insightDiv = document.createElement('div');
            insightDiv.id = 'bradley-insight';
            insightDiv.className = `bradley-insight-box insight-${todaysProblem.bradley_insight.type}`;
            insightDiv.style.display = 'none';

            const shopLink = todaysProblem.payhip_link || "https://payhip.com/bradleysmaths";
            const btnText = todaysProblem.button_text || "Master this topic: Download the Full Pack";

            insightDiv.innerHTML = `
                <span class="insight-title">${todaysProblem.bradley_insight.title}</span>
                <p>${todaysProblem.bradley_insight.content}</p>
                <div class="nudge-container">
                    <a href="${shopLink}" class="btn-buy" target="_blank">
                        ${btnText}
                    </a>
                </div>
            `;
            solutionArea.appendChild(insightDiv);
        }
    }

    // --- 4. STEP BUTTON LOGIC ---
    let currentStep = 0;
    const totalSteps = todaysProblem.steps.length;
    const btn = document.getElementById('stepBtn');

    window.showNextStep = function() {
        if (currentStep < totalSteps) {
            const stepToShow = document.getElementById('step-' + currentStep);
            if (stepToShow) {
                stepToShow.style.display = 'block';
            }
            currentStep++;

            if (currentStep === totalSteps) {
                const insightBox = document.getElementById('bradley-insight');
                if (insightBox) {
                    insightBox.style.display = 'block';
                }
                if (btn) {
                    btn.textContent = "Finished";
                    btn.style.backgroundColor = "#10b981"; 
                    btn.style.cursor = "default";
                }
            } else {
                if (btn) {
                    btn.textContent = "Show Next Step";
                }
            }
        }
    };
});
