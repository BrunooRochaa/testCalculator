function visor(num){
    document.getElementById('display').value = document.getElementById('display').value + num;
}

function calc() {
    conta = document.getElementById('display').value;
    
    if (conta.indexOf('+') > 0) {
        numString = conta.split('+');

        num1 = Number(numString[0]);
        num2 = Number(numString[1]);

        res = num1 + num2;
        
        document.getElementById('display').value = `${res}`;
    }

    if (conta.indexOf('-') > 0) {
        numString = conta.split('-');

        num1 = Number(numString[0]);
        num2 = Number(numString[1]);

        res = num1 - num2;
        
        document.getElementById('display').value = `${res}`;
    }

    if (conta.indexOf('/') > 0) {
        numString = conta.split('/');

        num1 = Number(numString[0]);
        num2 = Number(numString[1]);

        res = num1 / num2;
        
        document.getElementById('display').value = `${res}`;
    }

    if (conta.indexOf('*') > 0) {
        numString = conta.split('*');

        num1 = Number(numString[0]);
        num2 = Number(numString[1]);

        res = num1 * num2;
        
        document.getElementById('display').value = `${res}`;
    }
}

function clean() {
    document.getElementById('display').value = ' ';
}