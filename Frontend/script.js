function mostrarCadastro() {
  document.getElementById("formCadastro").style.display = "block";
  document.getElementById("formLogin").style.display = "none";
}

function mostrarLogin() {
  document.getElementById("formCadastro").style.display = "none";
  document.getElementById("formLogin").style.display = "block";
}

function cadastrar() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("emailCadastro").value;
  const senha = document.getElementById("senhaCadastro").value;

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  fetch("http://localhost:8081/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
      senha: senha
    })
  })
  .then(response => response.json())
  .then(data => {
    alert("Cadastro realizado com sucesso!");

    document.getElementById("nome").value = "";
    document.getElementById("emailCadastro").value = "";
    document.getElementById("senhaCadastro").value = "";
  })
  .catch(error => {
    console.error("Erro:", error);
    alert("Erro ao cadastrar");
  });
}

function login() {
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  if (!email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  fetch("http://localhost:8081/usuarios/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      senha: senha
    })
  })
  .then(response => response.text())
  .then(data => {
    alert(data);
  })
  .catch(error => {
    console.error("Erro:", error);
    alert("Erro ao fazer login");
  });
}