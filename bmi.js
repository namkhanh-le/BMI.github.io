// Function to calculate BMI
function calculateBMI(weight, height) {
    if (weight > 0 && height > 0) {
        return (weight / (height * height)).toFixed(2);
    } else {
        return "--";
    }
}

// Function to update BMI display
function updateBMI() {
    const weight = (document.getElementById('weight').value);
    const height = (document.getElementById('height').value);
    
    // Calculate BMI
    const bmi = calculateBMI(weight, height);

    // Print BMI to the console
    console.log(`Your BMI is: ${bmi}`);

    // Display BMI on the HTML page
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your BMI is: ${bmi}`;
    resultDiv.style.display = 'block';
}