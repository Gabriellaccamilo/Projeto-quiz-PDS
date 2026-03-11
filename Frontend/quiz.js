const nome = localStorage.getItem("nomeUsuario");

if(nome){
document.getElementById("usuario").innerText = "Jogador: " + nome;
}

const perguntas = [

{
pergunta:"Qual dessas é uma linguagem de programação?",
opcoes:["HTML","Python","CSS","HTTP"],
resposta:1
},

{
pergunta:"Qual estrutura armazena dados em formato chave-valor?",
opcoes:["Lista","Fila","Dicionário","Pilha"],
resposta:2
},

{
pergunta:"Qual dessas linguagens é fortemente tipada?",
opcoes:["Java","JavaScript","HTML","CSS"],
resposta:0
},

{
pergunta:"Qual estrutura segue o modelo LIFO?",
opcoes:["Fila","Pilha","Árvore","Lista"],
resposta:1
},

{
pergunta:"Qual dessas é usada para estilizar páginas web?",
opcoes:["Java","CSS","Python","C++"],
resposta:1
},

{
pergunta:"O que significa IDE?",
opcoes:[
"Interface de Dados Executáveis",
"Ambiente de Desenvolvimento Integrado",
"Internet de Dados Externos",
"Interface de Desenvolvimento Estático"
],
resposta:1
},

{
pergunta:"Qual dessas estruturas segue o modelo FIFO?",
opcoes:["Fila","Pilha","Árvore","Lista"],
resposta:0
},

{
pergunta:"O que é um algoritmo?",
opcoes:[
"Um tipo de linguagem",
"Um conjunto de passos para resolver um problema",
"Um banco de dados",
"Um tipo de hardware"
],
resposta:1
},

{
pergunta:"Qual dessas é uma linguagem orientada a objetos?",
opcoes:["Java","HTML","CSS","SQL"],
resposta:0
},

{
pergunta:"Qual tecnologia define a estrutura de páginas web?",
opcoes:["HTML","Python","Java","C"],
resposta:0
}

];

let indice = 0;
let pontuacao = 0;
let respondeu = false;

function mostrarPergunta(){

respondeu = false;

const quiz = document.getElementById("quiz");
const progresso = document.getElementById("progresso");

quiz.innerHTML="";

progresso.innerHTML =
"Pergunta "+(indice+1)+" de "+perguntas.length;

const perguntaAtual = perguntas[indice];

const titulo = document.createElement("h2");
titulo.textContent = perguntaAtual.pergunta;

quiz.appendChild(titulo);

perguntaAtual.opcoes.forEach((opcao,i)=>{

const btn = document.createElement("div");
btn.classList.add("opcao");
btn.textContent = opcao;

btn.onclick=()=>{

if(respondeu) return;

respondeu = true;

if(i === perguntaAtual.resposta){
btn.style.background="#4CAF50";
pontuacao++;
}else{
btn.style.background="#F44336";
}

};

quiz.appendChild(btn);

});

}

document.getElementById("next").onclick = () => {

if(!respondeu){
alert("Escolha uma alternativa antes de continuar!");
return;
}

indice++;

if(indice < perguntas.length){

mostrarPergunta();

}else{

document.getElementById("quiz").innerHTML="";
document.getElementById("next").style.display="none";
document.getElementById("progresso").style.display="none";

let mensagem="";

if(pontuacao <=3){
mensagem="Você está começando na programação.";
}
else if(pontuacao <=6){
mensagem="Bom trabalho! Você já tem bons conhecimentos.";
}
else if(pontuacao <=8){
mensagem="Muito bem! Você entende bastante de programação.";
}
else{
mensagem="Especialista em Programação!";
}

document.getElementById("resultado").innerHTML =
"Você acertou "+pontuacao+" de "+perguntas.length+
"<br><br>"+mensagem;

}

};

mostrarPergunta();