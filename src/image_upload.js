// script.js

// Get references to elements
const cameraBtn = document.querySelector('ion-icon[name="camera"]');
const uploadModal = document.getElementById('upload-modal');
const imageUpload = document.getElementById('image-upload');
const analyzeBtn = document.getElementById('analyze-btn');
const closeModal = document.getElementById('close-modal');
const closeModal2 = document.getElementById('close-modal2');
const resultSection = document.getElementById('result');
const plantName = document.getElementById('plant-name');
const healthStatus = document.getElementById('health-status');

// Open modal when camera button is clicked
cameraBtn.addEventListener('click', () => {
    uploadModal.classList.remove('hidden');
});

// Close modal
closeModal.addEventListener('click', () => {
    uploadModal.classList.add('hidden');
});

// Close modal 2
closeModal2.addEventListener('click', () => {
    result.classList.add('hidden');
});

// Analyze uploaded image
analyzeBtn.addEventListener('click', () => {
    const file = imageUpload.files[0];

    if (!file) {
        alert("Please upload an image!");
        return;
    }

    // Simulate plant analysis (replace with actual ML model integration)
    const fakeAnalysis = analyzePlant(file);

    // Display results
    plantName.textContent = `Plant Name: ${fakeAnalysis.name}`;
    healthStatus.textContent = `Health Status: ${fakeAnalysis.health}`;

    resultSection.classList.remove('hidden');
});

// Fake plant analysis function (replace with real logic)
function analyzePlant(image) {
    // Simulating analysis result
    return {
        name: "Spider Plant",
        health: "Healthy (90%)"
    };
}