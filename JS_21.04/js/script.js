function sumArray(array) {
    let sum = 0;
    array.forEach(a => {
        sum += Number(a);
    })
    return sum;
}

function getAboveZero(array) {
    let positive = []
    array.forEach(a => {
        if (Number(a) > 0)
            positive.push(" " + a);
    })
    return String(positive);
}

function getPonies(name) {
    let ponies = ['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'FlutterShy'];
    if (ponies.includes(name))
        return "Такая пони существует: " + name;
    return "Такой пони не существует!"

}

function isTxIncluded(tx) {
    let txBlock = ["0xaea0", "0x8f80", "0xf3ad", "0x17ec"];
    return String(txBlock.includes(tx));
}

function getSizes(words) {
    let array = words;
    let lengths = [];
    array.forEach(a => {
        lengths.push(" " + a.length);
    })
    return String(lengths);
}

function getWithSpaces(array) {
    let s = array.join(' ');
    return s + ", " + s.length;
}

function getEpisodes(title, episodes) {
    return  "Аниме " + title + " включает в себя " + episodes + " серий";
}

function getAvgGlucose(array) {
    let sum = 0;
    let average = (arr) => arr.forEach(a => {
        sum += Number(a);
    });
    average(array)
    return sum / array.length;
}


let arr1 = document.getElementById('sumArray');
let result1 = document.getElementById('resultFirstExercise');

let arr2 = document.getElementById('aboveZero');
let result2 = document.getElementById('resultSecondExercise');

let pony = document.getElementById('getPonies');
let result3 = document.getElementById('resultThirdExercise');

let tx = document.getElementById('isTxIncluded');
let result4 = document.getElementById('resultFourthExercise');

let words = document.getElementById('getSizes');
let result5 = document.getElementById('resultFifthExercise');

let arr3 = document.getElementById('getWithSpaces');
let result6 = document.getElementById('resultSixthExercise');

let title = document.getElementById('title');
let episodes = document.getElementById('getEpisodes');
let result8 = document.getElementById('resultEighthExercise');

let triple = document.getElementById('triple');
let result9 = document.getElementById('resultNinthExercise');

let avg = document.getElementById('getAvgGlucose');
let result10 = document.getElementById('resultTenthExercise');


arr1.addEventListener("input", () => {
    let array = arr1.value.split(' ');
    result1.textContent = sumArray(array);
})

arr2.addEventListener("input", () => {
    let array = arr2.value.split(' ');
    result2.textContent = getAboveZero(array);
})

pony.addEventListener("input", () => {
    result3.textContent = getPonies(pony.value);
})

tx.addEventListener("input", () => {
    result4.textContent = isTxIncluded(tx.value);
})

words.addEventListener("input", () => {
    result5.textContent = getSizes(words.value.split(' '));
})

arr3.addEventListener("input", () => {
    result6.textContent = getWithSpaces(arr3.value.split(','));
})

episodes.addEventListener("input", () => {
    result8.textContent = getEpisodes(title.value, episodes.value);
})

triple.addEventListener("input", () => {
    let t = (a) => a * 3;
    result9.textContent = t(triple.value);
})

avg.addEventListener("input", () => {
    result10.textContent = getAvgGlucose(avg.value.split(' '));
})
