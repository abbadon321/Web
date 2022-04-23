//Функции
let getNickName = nik => {
    if (nik.startsWith("@"))
        return nik;
    return "@" + nik;
}

let getCurrency = cur => {
    if (cur.includes("$"))
        return "Доллар";
    else if (cur.includes("€"))
        return "Евро";
    return "Недоступно";
}

function getSlug(title) {
    let slug = title.replace(' ', '-').toLowerCase();
    return slug.slice(0, 15);
}

let getTodosNumber = (arr) => {
    return arr.split(',').length;
}

let renderTableRows = (rows) => {
    return`<table id="myTable">${rows.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}</table>`;
}

let notAnExcellent = grades => {
    return grades.every(grade => Number(grade) >= 3);
}

function deleteUserRole(users) {
    users.splice(0, 1);
    return users;
}

function multiply(array) {
    return  array.reduce((acc, cur) => acc * cur, 1);
}

function getUserInfo(user) {
    const [name, age] = user;
    return `Пользователю ${name} - ${age} лет`;
}

function joinArrays(arr1, arr2) {
    const arrays = [...arr1, ...arr2];
    return String(arrays);
}


//Переменные
let nickName = document.getElementById('getNickName');
let res1 = document.getElementById('resultFirstExercise');

let currency = document.getElementById('getCurrency');
let res2 = document.getElementById('resultSecondExercise');

let title = document.getElementById('getSlug');
let res3 = document.getElementById('resultThirdExercise');

let list = document.getElementById('getTodosNumber');
let res4 = document.getElementById('resultFourthExercise');

let rows = document.getElementById('renderTableRows');
let res5 = document.getElementById('resultFifthExercise');

let grades = document.getElementById('notAnExcellent');
let res6 = document.getElementById('resultSixthExercise');

let user = document.getElementById('deleteUserRole');
let res7 = document.getElementById('resultSeventhExercise');

let mul = document.getElementById('multiply');
let res8 = document.getElementById('resultEighthExercise');

let userInfo = document.getElementById('getUserInfo');
let res9 = document.getElementById('resultNinthExercise');

let arr1  = document.getElementById('arr1');
let arr2  = document.getElementById('arr2');
let res10 = document.getElementById('resultTenthExercise');


//События
nickName.addEventListener("input", () => {
    res1.textContent = getNickName(nickName.value)
})

currency.addEventListener("input",() => {
    res2.textContent = getCurrency(currency.value);
})

title.addEventListener("input",() => {
    res3.textContent = getSlug(title.value);
})

list.addEventListener("input",() => {
    res4.textContent = getTodosNumber(list.value);
})

rows.addEventListener("click",() => {
    const data = [["Bitcoin", 40468],
        ["Ethereum", 3005],
        ["Solana", 106],
        ["Tether", 1]]
    let newItem = renderTableRows(data);
    let newNode = document.createElement("span");
    newNode.innerHTML = newItem;
    document.getElementById("FifthExercise").insertBefore(newNode, res5);
})

grades.addEventListener("input",() => {
    res6.textContent = notAnExcellent(grades.value.split(" "));
})

user.addEventListener("click",() => {
    const users = ["Admin", "Moderator", "Editor"]
    res7.textContent = deleteUserRole(users);
})

mul.addEventListener("input",() => {
    res8.textContent = multiply(mul.value.split(" "));
})

userInfo.addEventListener("input",() => {
    res9.textContent = getUserInfo(userInfo.value.split(" "));
})

arr2.addEventListener("input",() => {
    res10.textContent = joinArrays(arr1.value.split(" "), arr2.value.split(" "));
})