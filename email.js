const frm = document.querySelector("form"); //Obtém os elementos a serem manipulados
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  // Cria um "ouvinte" de evento para o botão submit
  e.preventDefault(); // Evita o envio do form
  const funcionario = frm.inFuncionario.value;

  // Divide o nome em itens de vetor, criados a cada espaço
  const partes = funcionario.split(" ");
  let email = ""; // Vai concatenar letras
  const tam = partes.length; // Obtém o número de itens do vetor partes

  for (let i = 0; i < tam - 1; i++) {
    // Percorre os itens do vetor, exeto o ultimo
    email += partes[i].charAt(0); // Obtém a letra inicial de cada item
  }

  // Concatena as letras iniciais com a última parte (sobrenome) e empresa
  email += partes[tam - 1] + "@empresa.com.br";

  resp.innerText = `E-mail: ${email.toLowerCase()}`; //Exibe o e-mail em minusculas
});
