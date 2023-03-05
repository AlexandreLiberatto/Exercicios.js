const frm = document.querySelector("form"); // Obtém os elementos a serem manipulados
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  // "Escuta" o evento do form
  e.preventDefault(); // Evita o envio do form
  // Obtém o nome informado e retira espaços em branco do início e final da string
  const nome = frm.inNome.value.trim();

  if (!nome.includes(" ")) {
    // Se o nome não (!) possuir espaço
    alert("Informe o nome competo...");
  }

  const priEspaco = nome.indexOf(" "); // Posição do primeiro espaço
  const ultEspaço = nome.lastIndexOf(" "); //Posição do ultimo espaço
  // Copia nome e sobrenome usando os parâmetros do substr()
  const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaço);

  resp.innerText = `Crachá: ${cracha}`; // Exibe a resposta
});
