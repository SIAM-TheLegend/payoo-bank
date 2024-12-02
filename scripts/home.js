const myPin = "1234";
const btnAddMoney = document.getElementById("btn-addMoney");
const btnCashOut = document.getElementById("btn-cashOut");

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

  console.log(amount, pin, myPin);
  if (myPin === pin) {
    balance.innerText = parseFloat(balance.innerText) - parseFloat(amount);
    // console.log(balance, amount, pin, balance.innerText);
  } else {
    alert("Invalid Pin");
  }
});
