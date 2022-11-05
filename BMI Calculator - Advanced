function bmiCalculator (weight, height) {

    var bmi = Math.round(weight / Math.pow(height,2));

    var interpretation;
    
    if (bmi < 18.5) {
        interpretation = ("Your BMI is " + bmi + ", so you are underweight.");
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = ("Your BMI is " + bmi + ", so you have a normal weight.");
    }
    if (bmi > 24.9) {
        interpretation = ("Your BMI is " + bmi + ", so you are overweight.");
    }

    return interpretation;
}

bmiCalculator(71,1.76);

/* Short Code

function bmiCalculator (weight, height) {
    
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";
    
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight." ;
    } else if (bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    
    return interpretation;
}

bmiCalculator(71,1.76);

*/
