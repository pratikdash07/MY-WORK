function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const age = parseInt(document.getElementById('gender').value);
    const gender = document.getElementById('gender').value;
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        const bmiCategory = getBMICategory(bmi, age, gender);
        document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}`;
        document.getElementById('advice').innerText = bmiCategory.advice;
    } else {
        document.getElementById('result').innerText = "Please enter valid values.";
        document.getElementById('advice').innerText = "";
    }
}
function getBMICategory(bmi, age, gender) {
    let category = "";
    let advice = "";

    if (age < 18) {
        if (bmi < 18.5) {
            category = "Underweight";
            advice = "SKINNY BITCH \n You're in the underweight category. It's important to maintain a balanced diet and consult a healthcare provider for personalized advice.";
        } else if (bmi < 25) {
            category = "Healthy weight";
            advice = "SUIIIII! \nYou have a healthy weight for your age.";
        } else {
            category = "Overweight";
            advice = "FAT CUNT!\n You're in the overweight category. Consider adopting a balanced diet and regular physical activity. Consult with a healthcare provider for more guidance.";
        }
    } else {
        // Adult categories
        if (bmi < 18.5) {
            category = "Underweight";
            advice = "SKINNY BITCH!\nYou're in the underweight category. It's important to maintain a balanced diet and consult a healthcare provider for personalized advice.";
        } else if (bmi < 24.9) {
            category = "Normal weight";
            advice = "SUIIII! You have a normal weight.";
        } else if (bmi < 29.9) {
            category = "Overweight";
            advice = "LAZY PIECE OF SHIT!\nYou're in the overweight category. Consider adopting a balanced diet and regular physical activity.";
        } else {
            category = "Obese";
            advice = "FAT CUNT!You're in the obese category. It's important to consult with a healthcare provider for a personalized plan to improve your health.";
        }
    }

    return { category, advice };
}