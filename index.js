var noOfStocks = document.querySelector("#no-of-stocks");
var boughtPrice = document.querySelector("#bought-price");
var CurrentPrice = document.querySelector("#current-price");
var outputDiv = document.querySelector("#output-div");
var submitBtn = document.querySelector("#submit-btn");

function calculatePortfolio() {
  var finalValue =
    noOfStocks.value * boughtPrice.value -
    noOfStocks.value * CurrentPrice.value;

  var percentageValue = (finalValue / boughtPrice.value) * 100;

  if (finalValue > 0) {
    outputDiv.innerText =
      "You current portfolio value is in loss of " +
      finalValue +
      " in percentage " +
      percentageValue;
  }
  if (finalValue < 0) {
    outputDiv.innerText =
      "You current portfolio value is in profit of " +
      -finalValue +
      " in percentage " +
      -percentageValue;
  }

  if (finalValue === 0) {
    outputDiv.innerText = "You have gained no profit or loss";
  }
}
submitBtn.addEventListener("click", calculatePortfolio);
