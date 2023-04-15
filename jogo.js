const frm = document.querySelector("form");
const respPalavra = document.querySelector("#outPalavra");
const respDica = document.querySelector("#outDica");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

let palavraSorteada;
let dicaSorteada;

window.addEventListener("load", () => {
  if (!localStorage.getItem("jogoPalavra")) {
    alert("Cadastre palavras para jogar");
    frm.inLetra.disabled = true;
    frm.btJogar.disabled = true;
    frm.btVerDica.disabled = true;
  }

  const palavras = localStorage.getItem("jogoPalavra").split(";");
  const dicas = localStorage.getItem("jogoDica").split(";");

  const tam = palavras.length;

  const numAleatorio = Math.floor(Math.random() * tam);

  palavraSorteada = palavras[numAleatorio].toUpperCase();
  dicaSorteada = dicas[numAleatorio];
  let novaPalavra = "";

  for (const letra of palavraSorteada) {
    if (letra == palavraSorteada.charAt(0)) {
      novaPalavra += palavraSorteada.charAt(0);
    } else {
      novaPalavra += "_";
    }
  }
  respPalavra.innerText = novaPalavra;
});

frm.btVerDica.addEventListener("click", () => {
  if (respErros.innerText.includes("*")) {
    alert("Você já solicitou a dica...");
    frm.inLetra.focus();
    return;
  }

  respDica.innerText = " * " + dicaSorteada;
  respErros.innerText += "*";

  const chances = Number(respChances.innerText) - 1;
  respChances.innerText = chances;

  trocarStatus(chances);

  verificarFim();

  frm.inLetra.focus();
});
