let billInput = document.querySelector("#bill");
let calculateBtn = document.querySelector("#calculate-btn");
let resetBtn = document.querySelector("#reset-btn");
let resultText = document.querySelector("#result");
let tipPercentageText = document.querySelector("#tip-percentage");

function calculateTip() {
  let bill = parseFloat(billInput.value);
  let tip = 0;
  let tipPercentage = "";

  if (isNaN(bill) || bill <= 0) {
    alert("Please enter a valid bill amount.");
    resultText.textContent = "";
    tipPercentageText.textContent = "";
    return;
  }

  if (bill > 500) {
    tip = bill * 0.03;
    tipPercentage = "3%";
  } else if (bill > 300) {
    tip = bill * 0.05;
    tipPercentage = "5%";
  } else if (bill > 100) {
    tip = bill * 0.10;
    tipPercentage = "10%";
  } else {
    tip = bill * 0.15;
    tipPercentage = "15%";
  }

  tip = tip.toFixed(2);

  resultText.textContent = `Your bill is $${bill.toFixed(2)}. Suggested tip is $${tip}.`;
  tipPercentageText.textContent = `Tip Percentage: ${tipPercentage}`;
}

function resetCalculator() {
  billInput.value = "";
  resultText.textContent = "";
  tipPercentageText.textContent = "";
}

calculateBtn.addEventListener("click", calculateTip);
resetBtn.addEventListener("click", resetCalculator);


billInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    calculateTip();
  }
});
