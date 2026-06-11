const nomeInput = document.getElementById("nome");
const paisInput = document.getElementById("pais");
const imagemInput = document.getElementById("imagem");
const raridadeSelect = document.getElementById("raridade");
const repetidoInput = document.getElementById("repetido");

const btnAdicionar = document.getElementById("btn-adicionar");

const colecao = document.getElementById("colecao");

const pesquisaInput = document.getElementById("pesquisa");

const totalItens = document.getElementById("total-itens");
const totalRepetidos = document.getElementById("total-repetidos");
const totalUnicos = document.getElementById("total-unicos");

btnAdicionar.addEventListener("click", adicionarFigurinha);

pesquisaInput.addEventListener("input", filtrarFigurinhas);

function adicionarFigurinha(){

const nome = nomeInput.value.trim();
const pais = paisInput.value.trim();
const imagem = imagemInput.value.trim();
const raridade = raridadeSelect.value;
const repetido = repetidoInput.checked;

if(nome === "" || pais === ""){
alert("Preencha nome e país.");
return;
}

const card = document.createElement("div");
card.classList.add("card");

if(repetido){
card.classList.add("repetido");
}

card.setAttribute(
"data-nome",
nome.toLowerCase()
);

const img = document.createElement("img");

if(imagem === ""){
img.src =
"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
}else{
img.src = imagem;
}

const conteudo =
document.createElement("div");

conteudo.classList.add(
"card-conteudo"
);

const titulo =
document.createElement("h3");

titulo.textContent = nome;

const paisTexto =
document.createElement("p");

paisTexto.textContent =
"🌎 " + pais;

const raridadeTexto =
document.createElement("p");

raridadeTexto.classList.add(
"raridade"
);

raridadeTexto.textContent =
"✨ " + raridade;

const repetidoTexto =
document.createElement("p");

repetidoTexto.textContent =
repetido
? "🔁 Repetida"
: "✅ Única";

const botoes =
document.createElement("div");

botoes.classList.add(
"botoes"
);

const btnFavorito =
document.createElement("button");

btnFavorito.textContent =
"⭐ Favorito";

btnFavorito.classList.add(
"btn-favorito"
);

btnFavorito.addEventListener(
"click",
()=>{
card.classList.toggle(
"favorito"
);
}
);

const btnExcluir =
document.createElement("button");

btnExcluir.textContent =
"🗑 Excluir";

btnExcluir.classList.add(
"btn-excluir"
);

btnExcluir.addEventListener(
"click",
()=>{
card.remove();
atualizarContadores();
}
);

botoes.appendChild(btnFavorito);
botoes.appendChild(btnExcluir);

conteudo.appendChild(titulo);
conteudo.appendChild(paisTexto);
conteudo.appendChild(raridadeTexto);
conteudo.appendChild(repetidoTexto);
conteudo.appendChild(botoes);

card.appendChild(img);
card.appendChild(conteudo);

colecao.appendChild(card);

atualizarContadores();

nomeInput.value = "";
paisInput.value = "";
imagemInput.value = "";
repetidoInput.checked = false;
}

function atualizarContadores(){

const cards =
document.querySelectorAll(".card");

const repetidos =
document.querySelectorAll(".card.repetido");

totalItens.textContent =
cards.length;

totalRepetidos.textContent =
repetidos.length;

totalUnicos.textContent =
cards.length - repetidos.length;
}

function filtrarFigurinhas(){

const termo =
pesquisaInput.value.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

const nome =
card.getAttribute("data-nome");

if(nome.includes(termo)){
card.classList.remove("oculto");
}else{
card.classList.add("oculto");
}

});
}