function login(){

const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;

fetch("http://localhost:8081/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email:email,
senha:senha
})
})
.then(response=>{

if(response.status===404){
alert("Email não encontrado");
return;
}

if(response.status===401){
alert("Senha incorreta");
return;
}

return response.json();

})
.then(usuario=>{

if(usuario){
localStorage.setItem("nomeUsuario", usuario.nome);
window.location.href="inicio.html";
}

});

}