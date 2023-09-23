document.getElementById("calculateButton").addEventListener("click", calculateBMI);

function calculateBMI(){
    const height = parseFloat(document.getElementById("heightInput").value);
    const weight = parseFloat(document.getElementById("weightInput").value);

    if(isNaN(weight) || isNaN(height))
    {
        document.getElementById("result").textContent = "Invalid input";
        return;
    }
    
    let type;
    let bmi = weight / ((height / 100) ** 2);
    bmi = bmi.toFixed(1);

    
    if (bmi < 18.5){
        type = "Underweight";
    }    
    else if (bmi >= 18.5 && bmi < 25){
        type = "Normal";
    }
    else if(bmi >= 25 && bmi < 30){
        type = "Overweight";
    }
    else if(bmi >= 30 && bmi < 35){
        type = "Obese";
        alert("Seek help!");
    }
    else if(bmi >= 35){
        type = "Extremely Obese";
        alert("Seek help!");
    }
    else{
        type = "Invalid";
    }
        
    
    document.getElementById("result").textContent = `The BMI is ${bmi}, ${type}`;
}