console.log("login");

function login(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email").value;
  const senhaInput = document.getElementById("senha").value;

  console.log(emailInput);
  console.log(senhaInput);
  console.log("clicou no login", emailInput, senhaInput);
}
