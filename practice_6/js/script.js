myBtn = document.getElementById('counter');
let counter = 0;

function incr() {
    counter++;
    myBtn.value = counter;
}

let timer = setInterval(incr, 10105)

setTimeout(() => { clearInterval(timer); alert('Земля совершила 5 оборотов!'); }, 51000);
