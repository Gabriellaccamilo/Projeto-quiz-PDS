function cadastrar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (nome && email && senha) {
    document.getElementById("mensagemSucesso").style.display = "block";
  } else {
    alert("Preencha todos os campos!");
  }
}
