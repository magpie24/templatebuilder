// Navigation Bar JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const contentDisplay = document.getElementById('contentDisplay');
    const generalStepFrame = document.getElementById('generalStepFrame');
    const stepTwoFrame = document.getElementById('stepTwoFrame');
    const stepThreeFrame = document.getElementById('stepThreeFrame');
    const stepFourFrame = document.getElementById('stepFourFrame');
    const stepFiveFrame = document.getElementById('stepFiveFrame');
    const integrationItems = document.querySelectorAll('.integration-item');
    const continueButton = document.getElementById('continueButton');

    // Find elements inside the content display
    const stepTitle = contentDisplay.querySelector('h2');
    const stepHeader = contentDisplay.querySelector('h1');
    const stepDescription = contentDisplay.querySelector('p');

    // Track the current step
    let currentStep = 1;

    const showStep = (stepNumber) => {
        // Remove 'active' class from all steps
        steps.forEach((s) => {
            s.classList.remove('active');
            s.querySelector('input[type="checkbox"]').checked = false;
        });

        // Activate the target step
        const targetStep = steps[stepNumber - 1];
        targetStep.classList.add('active');
        targetStep.querySelector('input[type="checkbox"]').checked = true;

        // Update the Content Display 
        stepTitle.textContent = `STEP ${targetStep.dataset.step}`;
        stepHeader.textContent = targetStep.dataset.title;
        stepDescription.textContent = targetStep.dataset.description;

        // Manage visibility of frames
        generalStepFrame.style.display = (stepNumber === 1) ? "block" : "none";
        stepTwoFrame.style.display = (stepNumber === 2) ? "flex" : "none";
        stepThreeFrame.style.display = (stepNumber === 3) ? "flex" : "none";
        stepFourFrame.style.display = (stepNumber === 4) ? "flex" : "none";
        stepFiveFrame.style.display = (stepNumber === 5) ? "flex" : "none";
    };

    // Initialize the first step
    showStep(1);

    // Listen for step clicks
    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            currentStep = index + 1;
            showStep(currentStep);
        });
    });

    // Continue button logic
    continueButton.addEventListener('click', () => {
        if (currentStep < steps.length) {
            currentStep++;
            showStep(currentStep);
        }
    });

    // Integration Items Logic
    integrationItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Remove active state from all
            integrationItems.forEach((i) => i.classList.remove('active'));
            // Set active state on clicked item
            item.classList.add('active');
        });
    });

    // Step 5 Buttons Logic
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');

    yesButton.addEventListener('click', () => {
        alert('Changes will be applied to all campaigns!');
    });

    noButton.addEventListener('click', () => {
        alert('Changes will be applied to this campaign only!');
    });
});

// Share preview and settings buttons
const sharePreviewButton = document.querySelector('.share-preview');
const settingsButton = document.querySelector('.settings');

if (sharePreviewButton) {
    sharePreviewButton.addEventListener('click', () => {
        alert('Share preview clicked');
    });
}

if (settingsButton) {
    settingsButton.addEventListener('click', () => {
        alert('Settings clicked');
    });
}