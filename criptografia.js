const frm = document.querySelector("form"); // obtém elementos da página
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  // "escuta" evento submit do form
  e.preventDefault(); // evita envio do form
  const mensagem = frm.inMensagem.value; // conteúdo do campo

  let resposta = "";
  const tam = mensagem.length;

  // laço para pegar as letras das posições pares (na programação, ímpares)
  for (let i = 1; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  // laço para pegar as letras das posições ímpares (na programação, pares)
  for (let i = 0; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  resp.innerText = resposta;
});

frm.btDecript.addEventListener("click", () => {
  // Obtém a mensagem
  const mensagem = frm.inMensagem.value;
  resp.innerText = mensagem; // Exibe a mensagem sem criptografar
});
