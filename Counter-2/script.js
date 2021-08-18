let count = 0;
console.log(count)
let a = document.getElementById("num").innerHTML = 0;

function add() {
    let val = document.getElementById("num").innerHTML;
    n = Number(val) + 1;
    document.getElementById("num").innerHTML = n;

}

function sub() {
    let val = document.getElementById("num").innerHTML;
    n = Number(val) - 1;
    document.getElementById("num").innerHTML = n;

}