const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  //Obtém o conteúdo dos campos (.trim() remove espaços na palavra no inicio e fim)
  const palavra = frm.inPalavra.value.trim();
  const dica = frm.inDica.value;

  //valida preenchimento (palavra não deve possuir espaço em branco no meio)
  if (palavra.includes(" ")) {
    alert("Informe uma palavra válida (sem espaços)");
    frm.inPalavra.focus();
    return;
  }

  // Se já existem dados em localStorage, grava o conteúdo anterior + ";" + palavra/dica
  if (localStorage.getItem("jogoPalavra")) {
    localStorage.setItem(
      "jogoPalavra",
      localStorage.getItem("jogoPalavra") + ";" + palavra
    );
    localStorage.setItem(
      "jogoDica",
      localStorage.getItem("jogoDica") + ";" + dica
    );
  } else {
    // Senão a primeira inclusão grva apenás a palavra/dica
    localStorage.setItem("jogoPalavra", palavra);
    localStorage.setItem("jogoDica", dica);
  }

  // Verifica se salvou
  if (localStorage.getItem("jogoPalavra")) {
    alert(`Ok! Palavra ${palavra} Cadastrada com Sucesso`);
  }

  frm.reset(); // Limpa o form
  frm.inPalavra.focus(); // joga o foco em inPalavra
});
