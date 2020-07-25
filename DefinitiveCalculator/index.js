// Add number in visor
function visor(num) {
  document.getElementById("display").innerText =
    document.getElementById("display").innerText + num;
}

// Calc ¯\_(ツ)_/¯
function calc() {
  conta = document.getElementById("display").innerText;
  if (conta.indexOf("+") > 0) {
    numString = conta.split("+");
    num1 = Number(numString[0]);
    num2 = Number(numString[1]);
    res = num1 + num2;
    document.getElementById("display").innerText = `${res}`;
  }
  if (conta.indexOf("-") > 0) {
    numString = conta.split("-");
    num1 = Number(numString[0]);
    num2 = Number(numString[1]);
    res = num1 - num2;
    document.getElementById("display").innerText = `${res}`;
  }
  if (conta.indexOf("/") > 0) {
    numString = conta.split("/");
    num1 = Number(numString[0]);
    num2 = Number(numString[1]);
    res = num1 / num2;
    document.getElementById("display").innerText = `${res}`;
  }
  if (conta.indexOf("*") > 0) {
    numString = conta.split("*");
    num1 = Number(numString[0]);
    num2 = Number(numString[1]);
    res = num1 * num2;
    document.getElementById("display").innerText = `${res}`;
  }
}

// clean the visor
function del() {
  let conta = document.getElementById("display").innerText;
  let del = conta.slice(0, -1);
  document.getElementById("display").innerText = del;
}

function C() {
  document.getElementById("display").innerText = "";
}

// config key keyboard
document.addEventListener("keydown", function (e) {
  // NUMBERS
  if (e.key == 0) {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "0";
  } else if (e.key == 1) {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "1";
  } else if (e.key == 2) {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "2";
  } else if (e.key == 3) {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "3";
  } else if (e.key == 4) {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "4";
  } else if (e.key == 5) {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "5";
  } else if (e.key == 6) {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "6";
  } else if (e.key == 7) {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "7";
  } else if (e.key == 8) {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "8";
  } else if (e.key == 9) {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "9";
  }

  //CALC FUNCTIONS
  else if (e.keyCode == 015) {
    e.preventDefault();
    calc();
  } else if (e.keyCode == 010) {
    e.preventDefault();
    del();
  }

  // MATH SIGNS
  else if (e.key == "/") {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "/";
  } else if (e.key == "+") {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "+";
  } else if (e.key == "-") {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "-";
  } else if (e.key == "*") {
    e.preventDefault();
    document.getElementById("display").innerText =
      document.getElementById("display").innerText + "*";
  }
});
