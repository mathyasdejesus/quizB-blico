//Vai incrementar ou decrementar de acordo com erros e acertos
let acertos = 0;
let erros = 0;

//Array contendo todos os livros da Bíblia
let livros = [
  "Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio", "Josué", "Juízes",
  "Rute", "1 Samuel", "2 Samuel", "1 Reis", "2 Reis", "1 Crônicas", "2 Crônicas", "Esdras",
  "Neemias", "Ester", "Jó", "Salmos", "Provérbios", "Eclesiastes", "Cantares", "Isaías", "Jeremias",
  "Lamentações", "Ezequiel", "Daniel", "Oséias", "Joel", "Amós", "Obadias", "Jonas", "Miquéias", "Naum",
  "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias",

  "Mateus", "Marcos", "Lucas", "João", "Atos", "Romanos", "1 Coríntios",
  "2 Coríntios", "Gálatas", "Efésios", "Filipenses", "Colossenses", "1 Tessalonicenses", "2 Tessalonicenses", "1 Timóteo",
  "2 Timóteo", "Tito", "Filemom", "Hebreus", "Tiago", "1 Pedro", "2 Pedro", "1 João", "2 João", "3 João", "Judas", "Apocalipse"
]


let aleatorio = Math.floor((Math.random() * 65));
console.log(livros[aleatorio]);
let pergunta = document.getElementById("livroPerguntado");
pergunta.innerHTML = livros[aleatorio];


function conferir() {
  let resposta = document.getElementById("respostaInput").value;

  if (resposta == livros[aleatorio + 1]) {

    alert("Você acertou!");
    acertos++;
    let ponto = document.getElementById("ponto");
    ponto.innerHTML = acertos;
    aleatorio = Math.floor((Math.random() * 65));
    pergunta.innerHTML = livros[aleatorio];


  }else if(resposta == ""){
    alert("Preencha todos os campos")

  } else {
    alert("Errou")
    let erro = document.getElementById("erro");
    erros++;
    erro.innerHTML = erros;

  }

}