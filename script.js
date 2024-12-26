const bmiCalculate = () => {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result = Bodymassindex(weight, height);
    displayResult(result, bmiCategories(result));
};

const Bodymassindex = (weight, height) => {
    return (weight / ((height * height) / 10000)).toFixed(2);
};

const bmiCategories = (bmi) => {
    if (bmi < 18.5) {
        return "You are Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "You have Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "You are Overweight";
    } else if (bmi >= 30) {
        return "You are Obese";
    }else{
        return " ";
    }
};

const displayResult = (result, categories) => {
document.getElementById("bmi").textContent= result;
document.getElementById("categories").textContent = categories;
};

document.getElementById("calc-bmi-btn").addEventListener("click", bmiCalculate);