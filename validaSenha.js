const frm = document.querySelector("form")
const resp = document.querySelector("h3") // Obtém os elementos a serem manipulados

frm.addEventListener("submit", (e) => {  // Cria um "ouvinte" de evento para o botão submit
    e.preventDefault()  // Evita o envio do form
    const senha = frm.inSenha.value // Obtém a senha informada pelo usuário
    const erros = []  // vetor com erros

    // Verifica se o tamanho da senha é invalido
    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres")
    }

    // Verifica se não possui números
    if (senha.match(/[0-9]/g) == null) {
        erros.push("possuir números (no mínimo, 1)")
    }

    // Verifica se não possui letras minúsculas
    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minúsculas (no mínimo, 1)")
    }

    // Verifica se não possui letras maiúsculas ou se possui apenas uma
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g) == 1) {
        erros.push("possuir no letras maiúsculas (no mínimo, 2)")
    }

    // Verifica se não possui smbolos ou "_"
    if (!senha.match(/[/w|_]/g)) {
        erros.push("possuir símbolos (no mínimo, 1)")
    }

    // Se o vetor está vazio (significa que não foram encontrados erros)
    if (erros.length == 0) {
        resp.innerText = `Ok! Senha Válida!`
    } else {
        resp.innerText = `Erro... A senha deve ${erros.join(", ")}`
    }
})