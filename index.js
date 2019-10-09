
function resultado() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let op = document.getElementById('op').value;

    num1 = Number(num1)
    num2 = Number(num2)
    
    if (op == '+'){
        res = num1 + num2
    } else if (op == '-'){
        res = num1 - num2
    } else if (op == '/'){
        res = num1 / num2
    }else{
        res = num1 * num2
    }
    restxt = document.getElementById('res');
    restxt.innerHTML = res

}
