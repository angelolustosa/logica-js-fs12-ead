console.log("login");

function login() {

  const email = 'adm@adm.com'
  const senha = 987654

  const emailInput = document.getElementById("email").value;
  const senhaInput = document.getElementById("senha").value;

  console.log(`Email: ${emailInput}, Senha: ${senhaInput}`);

  if(emailInput == email && senhaInput == senha) {
    console.log("Login bem-sucedido");

    alert('Seja bem-vindo!')
  } else {
    console.log("Login falhou!");
    alert('Usuário ou senha Inválida')  
  }

}
