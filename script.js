let i = 1;
let firstx = document.getElementById("firstOperator");
let secondx = document.getElementById("secondOperator");

function calc(ex){
    let first = parseFloat(document.getElementById("firstOperator").value);
    let replaceFirst = document.getElementById("firstOperator");
    let second = parseFloat(document.getElementById("secondOperator").value);
    let result;
    switch(ex){
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case 'x':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
    }
    
    let p = document.createElement("p");
    p.innerText = i + ": " + first + ex + second + "=" + result;
    p.className = "history";
    i++;
    document.querySelector("div:last-child").appendChild(p);
    replaceFirst.value = result;
    secondx.value = "";
}

function reseta(){
    document.getElementById("testezinho").innerHTML = "";
    firstx.value = "";
    secondx.value = "";
    i=1;
}