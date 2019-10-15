// Add number in visor
function visor(num){
    document.getElementById('display').value = document.getElementById('display').value + num;
}

// Calc ¯\_(ツ)_/¯
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

// clean the visor
function clean() {
    let conta = document.getElementById('display').value;
    let del = conta.slice(0, -1);
    document.getElementById('display').value = del;

}

// config key os keyboard
document.addEventListener("keydown", function(e){
    if ((e.shiftKey && e.keyCode == 187) || e.keyCode == 107) {
        e.keyCode = 43; // 43 - char code for "+"
    }

    if (e.keyCode == 189 || e.keyCode == 109) {
        e.keyCode = 45; // 45 - char code for "-"
    }

    keyb(e.keyCode);

}, false);

function keyb(keyCode) {

        switch (keyCode) {
            case '0'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '0';
                break;
            case '1'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '1';
                break;
            case '2'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '2';
                break;
            case '3'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '3';
                break;
            case '4'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '4';
                break;
            case '5'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '5';
                break;
            case '6'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '6';
                break;
            case '7'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '7';
                break;
            case '8'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '8';
                break;
            case '9'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '9';
                break;
            case '+'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '+';
                break;
            case '-'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '-';
                break;
            case 'x'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '*';
                break;
            case '/'.charCodeAt(0):
                document.getElementById('display').value = document.getElementById('display').value + '/';
                break;
        }
    }
    
