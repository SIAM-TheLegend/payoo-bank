const myPin = "1234";
const btnAddMoney = document.getElementById("btn-addMoney");
const btnCashOut = document.getElementById("btn-cashOut");
const addMoneyTab = document.getElementById("btn-add-money");
const cashOutTab = document.getElementById("btn-cash-out");
const addMoneySection = document.getElementById("section-add-money");
const cashOutSection = document.getElementById("section-cash-out");

addMoneyTab.addEventListener("click", function () {
  addMoneySection.classList.remove("hidden");
  cashOutSection.classList.add("hidden");
});
cashOutTab.addEventListener("click", function () {
  cashOutSection.classList.remove("hidden");
  addMoneySection.classList.add("hidden");
});

btnAddMoney.addEventListener("click", function (event) {
  event.preventDefault();
  let balance = document.getElementById("balance");
  const amount = document.getElementById("amount").value;
  const pin = document.getElementById("pin").value;
  if (myPin === pin) {
    balance.innerText = parseFloat(balance.innerText) + parseFloat(amount);
  } else {
    alert("Invalid Pin");
  }
});

btnCashOut.addEventListener("click", function (event) {
  event.preventDefault();
  let balance = document.getElementById("balance");
  const amount = document.getElementById("amount").value;
  const pin = document.getElementById("pin").value;
  if (myPin === pin) {
    balance.innerText = parseFloat(balance.innerText) - parseFloat(amount);
  } else {
    alert("Invalid Pin");
  }
});
