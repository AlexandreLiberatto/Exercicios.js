const tbPalavras = document.querySelector("table");
const ckMostrar = document.querySelector("input[type='checkbox']");

const montarTabela = () => {
  // Se ouver dados salvos em localStorage
  if (localStorage.getItem("jogoPalavra")) {
    // Obtém conteúdo e converte em elementos de vetor (na ocorrencia ";")
    const palavras = localStorage.getItem("jogoPalavra").split(";");
    const dicas = localStorage.getItem("jogoDica").split(";");

    // Percorre elementos do vetor e os insere na tabela
    for (let i = 0; i < palavras.length; i++) {
      const linha = tbPalavras.insertRow(-1); // diciona uma linha na tabela

      const col1 = linha.insertCell(0); // Cria colunas nas linhas inseridas
      const col2 = linha.insertCell(1);
      const col3 = linha.insertCell(2);

      col1.innerText = palavras[i]; // Joga um conteúdo em cada célula
      col2.innerText = dicas[i];
      col3.innerHTML = (
        <i class="exclui" title="Excluir">
          &#10008;
        </i>
      );
    }
  }
};

// Ocorre quando o checkbox é alterado. Exibe a lista se marcado, senão, recarrega
ckMostrar.addEventListener("change", () => {
  ckMostrar.checked ? montarTabela() : window.location.reload();
});

tbPalavras.addEventListener("click", (e) => {
  // SE a clase do elemento alvo clicado contém exclui
  if (e.target.classList.contains("exclui")) {
    // Acesssa o "pai do pai" do elemento alvo, e obtém o texto do primeiro filho
    const palavra = e.target.parentElement.parentElement.children[0].innerText;
    if (confirm(`Confirma exclusão da palavra: "${palavra}"?`)) {
      // Remove a linha da tabela , correspondente ao símbolo de excluir clicado
      e.target.parentElement.parentElement.remove();

      localStorage.removeItem("jogoPalavra"); // Exclui os dados de localStorage
      localStorage.removeItem("jogoDica");

      const palavras = [];
      const dicas = [];

      //Obtém os dados da tabela, acrecentando-os aos vetores
      for (let i = 1; i < tbPalavras.rows.length; i++) {
        palavras.push(tbPalavras.rows[i].cells[0].innerText);
        dicas.push(tbPalavras.rows[i].cells[1].innerText);
      }

      // Salva o conteúdo dos vetores em localStorage (sem a linha removida)
      localStorage.setItem("jogoPalavra", palavras.join(";"));
      localStorage.setItem("jogoDica", dicas.join(";"));
    }
  }
});
