function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
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
    let questionHTML = todaysProblem.q;
    if (todaysProblem.img) {
        questionHTML += `<br><img src="${todaysProblem.img}" class="question-img" alt="Question Diagram">`;
    }
    document.getElementById('math-question').innerHTML = questionHTML;

    // --- 3. PREPARE SOLUTION AREA ---
    const solutionArea = document.getElementById('solution-area');
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
    // Only creates it if 'bradley_insight' exists in the problem object
    if (todaysProblem.bradley_insight) {
        let insightDiv = document.createElement('div');
        insightDiv.id = 'bradley-insight';
        // This picks the color based on the type (pro-tip, caution, deeper)
        insightDiv.className = `bradley-insight-box insight-${todaysProblem.bradley_insight.type}`;
        insightDiv.style.display = 'none';
        insightDiv.innerHTML = `
            <span class="insight-title">${todaysProblem.bradley_insight.title}</span>
            <p>${todaysProblem.bradley_insight.content}</p>
            <div style="margin-top:15px; text-align:center;">
                <a href="https://payhip.com/BradleysMaths" class="buy-button" target="_blank" style="text-decoration:none; color:white; background:#1e40af; padding:10px 20px; border-radius:5px; font-weight:bold; display:inline-block;">
                    Master this topic: Download the Full Pack
                </a>
            </div>
        `;
        solutionArea.appendChild(insightDiv);
    }

    // --- 4. STEP BUTTON LOGIC ---
    let currentStep = 0;
    const totalSteps = todaysProblem.steps.length;
    const btn = document.getElementById('stepBtn');

    window.showNextStep = function() {
        if (currentStep < totalSteps) {
            // Show the next step
            document.getElementById('step-' + currentStep).style.display = 'block';
            currentStep++;

            // If we are at the end, show the Insight Box and update the button
            if (currentStep === totalSteps) {
                if (document.getElementById('bradley-insight')) {
                    document.getElementById('bradley-insight').style.display = 'block';
                }
                btn.textContent = "Finished";
                btn.style.backgroundColor = "#10b981"; 
                btn.style.cursor = "default";
            } else {
                btn.textContent = "Show Next Step";
            }
        }
    }
});
