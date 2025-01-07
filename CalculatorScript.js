let array = [];


// Buttons |---------------------------------------------
function n1() {
    array.push(1)
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
    console.log(array);
}

function n2() {
    array.push(2)
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
    console.log(array);
}

function n3() {
    array.push(3)
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
    console.log(array);
}

function add() {
    array.push(" + ")
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
    console.log(array);
}

function n4() {
    array.push(4)
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
}

function n5() {
    array.push(5)
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
}

function n6() {
    array.push(6)
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
}

function sub() {
    array.push(" - ")
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
}

function n7() {
    array.push(7)
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
}

function n8() {
    array.push(8)
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
}

function n9() {
    array.push(9)
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
}

function div() {
    array.push(" ÷ ")
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
}

function n0() {
    array.push(0)
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
}

function mul() {
    array.push(" × ")
    let arrayStr = array.toString();
    let output = arrayStr.replaceAll("," , "")
    document.getElementById('output').innerHTML = output;
}
// Buttons |---------------------------------------------

var a = [1,2 ,"+",3]
var b = a.toString()
var c = b.replaceAll("," , "")

console.log(a);
console.log(b);
console.log(c);
