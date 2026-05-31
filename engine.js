function toggleMenu() {
    const nav = document.getElementById('navLinks');
    if (nav) {
        nav.classList.toggle('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {      
    // --- 1. DATE LOGIC ---
    const today = new Date();
    const dayNumeric = today.getDate(); // e.g., 22
    const dayPadded = dayNumeric.toString().padStart(2, '0'); // e.g., "22"
    const monthPadded = (today.getMonth() + 1).toString().padStart(2, '0'); // e.g., "04"
    
    const dateDisplay = document.getElementById('dateDisplay');
    if (dateDisplay) {
        dateDisplay.textContent = today.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
    }

    // --- 2. SELECTION LOGIC ---
    // Pulls from the monthly file loaded via the HTML script tag
    const todaysProblem = problemBank[dayNumeric - 1];
    
    if (!todaysProblem) {
        console.error("Problem not found for today's date in the bank.");
        return;
    }

    // --- 3. AUTOMATIC IMAGE PATH ---
    // Determines tier based on URL and builds path: images/04/g_26.png
    const tierSuffix = window.location.pathname.includes('igcse') ? 'i' : 'g';
    const autoImgPath = `images/${monthPadded}/${tierSuffix}_${dayPadded}.png`;

    // --- 4. DISPLAY QUESTION ---
    const questionContainer = document.getElementById('math-question');
    if (questionContainer) {
        let questionHTML = todaysProblem.q;
        
        // If "img" in the JSON is not empty, display the automatically calculated path
        if (todaysProblem.img && todaysProblem.img !== "") {
            questionHTML += `<br><img src="${autoImgPath}" class="question-img" alt="Question Diagram">`;
        }
        questionContainer.innerHTML = questionHTML;
    }

    // --- 5. PREPARE SOLUTION AREA ---
    const solutionArea = document.getElementById('solution-area');
    if (solutionArea) {
        solutionArea.innerHTML = ''; 

        // Build Steps
        todaysProblem.steps.forEach((stepContent, index) => {
            let stepDiv = document.createElement('div');
            stepDiv.className = 'step';
            stepDiv.id = 'step-' + index;
            stepDiv.style.display = 'none'; 
            stepDiv.innerHTML = `<span class="step-text">Step ${index + 1}:</span> ${stepContent}`;
            solutionArea.appendChild(stepDiv);
        });

        // Build the Head Teacher's Eye Box
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

    // --- 6. INTERACTION LOGIC ---
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