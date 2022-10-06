let textResult = document.getElementById("text-result")
textResult.style.display = "none"

// let addWeight = document.getElementById("weight")
// let addHeight = document.getElementById("height")


// let CaculateBMI, height, weight;


let btnCalculate = document.querySelector(".btn-calculate")
btnCalculate.addEventListener("click", () => {
    // weight = addWeight.value
    // height = addHeight.value
    // CaculateBMI = weight/(height**2)
    // resultCalculate.innerText = CaculateBMI

    let inputWeight = document.getElementById("weight").value
    let inputHeight = document.getElementById("height").value

    
    let weight = Number(inputWeight)
    let height = Number(inputHeight)
    
    height /= 100
    let CalculateBMI= weight/(height**2) 
    CalculateBMI = parseFloat(CalculateBMI).toFixed(2)

    let resultCalculate = document.getElementById("calculated")
    let conditionBMI = document.getElementById("result")
    
    textResult.style.display = "block"
    
    resultCalculate.innerText = CalculateBMI
    
    if (CalculateBMI < 18.5) {
        conditionBMI.innerText = "Underweight";
    } else if ((CalculateBMI >= 18.5) && (CalculateBMI < 24.9 )) {
        conditionBMI.innerText = "Normal Weight";
    } else if ((CalculateBMI >= 25 ) && CalculateBMI < 29.9){
        conditionBMI.innerText = "Overweight";
    } else {
        conditionBMI.innerText = "Obesity";
    }

    
})








