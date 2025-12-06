let calculation = "";

function addToDisplay(value) {
  calculation += value;
  updateDisplay();
}

function updateDisplay() {
  let display = document.getElementById("display");
  display.textContent = calculation || "0";
}

function clearDisplay() {
  calculation = "";
  updateDisplay();
}

function toggleSign() {
  if (calculation) {
    if (calculation.startsWith("-")) {
      calculation = calculation.substring(1);
    } else {
      calculation = "-" + calculation;
    }
    updateDisplay();
  }
}

function calculate() {
  try {
    calculation = eval(calculation).toString();
    updateDisplay();
  } catch (error) {
    calculation = "Error";
    updateDisplay();
    calculation = "";
  }
}
