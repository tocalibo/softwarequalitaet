Array.from(document.getElementsByTagName('input')).forEach(element => {
    element.addEventListener('change', updateUI);
});

function updateUI() {
    // Logik zur Aktualisierung des UI hier
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = calculateBMI(weight, height);
    console.log("weight: %s, height: %s, bmi: %s", weight, height, bmi);
}

function calculateBMI(weight, height) {
    // Logik zur Berechnung des BMI hier
}

updateUI();