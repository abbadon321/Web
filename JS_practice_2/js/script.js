function getAge(age) {
    return Number(age) + 1;
}

function getRemainder(a, b) {
    return a % b;
}

function faceControl(age) {
    if (age >= 18)
        return "Велкам";
    else return "Отказ";
}

function getNextAge(nextAge) {
    if (nextAge === "")
        return 0;
    else return Number(nextAge) + 1;
}

function canRide(height) {
    return String(Number(height) >= 140);
}


let number = document.getElementById('inputNumb');
let result = document.getElementById('resultFirstExercise');

let dividend = document.getElementById('dividend');
let divisor = document.getElementById('divisor');
let quotient = document.getElementById('quotient');

let age = document.getElementById('faceControl');
let resultThirdExercise = document.getElementById('resultThirdExercise');

let nextAge = document.getElementById("nextAge");
let resultFourthExercise = document.getElementById('resultFourthExercise');

let height = document.getElementById("height");
let resultFifthExercise = document.getElementById('resultFifthExercise');


number.addEventListener("input", () => {
    result.textContent = getAge(number.value)
})

divisor.addEventListener("input", () => {
    quotient.textContent = getRemainder(dividend.value, divisor.value)
})

age.addEventListener("input", ()=>{
    resultThirdExercise.textContent = faceControl(age.value);
})

nextAge.addEventListener("input", ()=>{
    resultFourthExercise.textContent = getNextAge(nextAge.value);
})

height.addEventListener("input", ()=>{
    resultFifthExercise.textContent = canRide(height.value);
})