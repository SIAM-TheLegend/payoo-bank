document.getElementById("btn-login").addEventListener("click", function (event) {
  event.preventDefault();

  const number = document.getElementById("number").value;
  const pin = document.getElementById("pin").value;

  const myNum = "01972005986";
  const myPin = "1234";

  console.log(myNum, number);
  if (myNum === number && myPin === pin) {
    window.location.href = "home.html";
  } else {
    alert("Invalid phone number or pin");
  }
});
