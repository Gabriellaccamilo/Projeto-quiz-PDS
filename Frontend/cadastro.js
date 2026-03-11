function cadastrar(){

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

fetch("http://localhost:8081/usuarios",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
nome:nome,
email:email,
senha:senha
})
})
.then(r=>r.json())
.then(data=>{

alert("Usuário cadastrado!");

window.location.href="login.html";

});

}