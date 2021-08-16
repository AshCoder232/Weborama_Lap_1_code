let a = 0;
function add() {
    a++;
    document.getElementById("screen").innerText = a;
}
function subtract() {
    a--;
    document.getElementById("screen").innerText = a;
}
function Reset() {
    a = 0;
    document.getElementById("screen").innerText = a;

}
/*function change() {
    document.getElementById("heading").innerText = "Hi";
}
function btnchange() {
    document.getElementById("heading").innerText = a;
    a++;
    console.log(a);
}*/