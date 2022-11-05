//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
    
    var bmi = Math.round(weight / Math.pow(height,2)); //The Math.pow() is used to calculate a number raise to the power of some other number. E.g. square, qube etc.

    return bmi;
}

bmiCalculator(65, 1.8);

/* Three different ways to do this:

    1. var bmi = Math.floor(weight / (height*height));
    2. var bmi = Math.floor(weight / Math.pow(height,2));

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
