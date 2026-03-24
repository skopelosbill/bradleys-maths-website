
function toggleMenu() {
            const nav = document.getElementById('navLinks');
            nav.classList.toggle('active');
        }
document.addEventListener('DOMContentLoaded', function() {      
    // --- ENGINE: DATE & DISPLAY ---
    const date = new Date();
    document.getElementById('dateDisplay').textContent = date.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });

    const today = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const diffTime = today - anchorDate;
    const daysSinceAnchor = Math.floor(diffTime / oneDay);

    let dayIndex = daysSinceAnchor % problemBank.length;
    if (dayIndex < 0) {
        dayIndex = problemBank.length + dayIndex;
    }

    const todaysProblem = problemBank[dayIndex];
    
    // Display Question
    let questionHTML = todaysProblem.q;
    if (todaysProblem.img) {
        questionHTML += `<img src="${todaysProblem.img}" class="question-img" alt="Question Diagram">`;
    }
    document.getElementById('math-question').innerHTML = questionHTML;

    const solutionArea = document.getElementById('solution-area');
    
    // 1. Create the Steps
    todaysProblem.steps.forEach((stepContent, index) => {
        let stepDiv = document.createElement('div');
        stepDiv.className = 'step';
        stepDiv.id = 'step-' + index;
        stepDiv.style.display = 'none'; // Ensure they are hidden at start
        stepDiv.innerHTML = `<span class="step-text">Step ${index + 1}:</span> ${stepContent}`;
        solutionArea.appendChild(stepDiv);
    });

    // 2. Create the Bradley Insight Box (Hidden initially)
    if (todaysProblem.bradley_insight) {
        let insightDiv = document.createElement('div');
        insightDiv.id = 'bradley-insight';
        insightDiv.className = `bradley-insight-box insight-${todaysProblem.bradley_insight.type}`;
        insightDiv.style.display = 'none';
        insightDiv.innerHTML = `
            <span class="insight-title">${todaysProblem.bradley_insight.title}</span>
            <p>${todaysProblem.bradley_insight.content}</p>
            <div style="margin-top:15px; text-align:center;">
                <a href="https://payhip.com/BradleysMaths" class="buy-button" target="_blank" style="text-decoration:none; color:white; background:#1e40af; padding:8px 15px; border-radius:5px; font-weight:bold; font-size:0.9em;">
                    Master this topic: Download the Full Pack
                </a>
            </div>
        `;
        solutionArea.appendChild(insightDiv);
    }

    let currentStep = 0;
    const totalSteps = todaysProblem.steps.length;
    const btn = document.getElementById('stepBtn');

    window.showNextStep = function() {
        if (currentStep < totalSteps) {
            document.getElementById('step-' + currentStep).style.display = 'block';
            currentStep++;

            // If we just showed the LAST step, show the Insight Box
            if (currentStep === totalSteps) {
                if (document.getElementById('bradley-insight')) {
                    document.getElementById('bradley-insight').style.display = 'block';
                }
                
                // Update Button to "Finished"
                btn.textContent = "Finished";
                btn.style.backgroundColor = "#10b981"; 
                btn.style.cursor = "default";
            } else {
                btn.textContent = "Show Next Step";
            }
        }
    }
});


