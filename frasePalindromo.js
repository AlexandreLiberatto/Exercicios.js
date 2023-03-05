// Obtém os elementos a serem manipulados
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => { // Cria um ouvinte de evento para o botão submit
    e.preventDefault() // Evita o envio do form

    const frase = frm.inFrase.value.toUpperCase() // Converte a frase em caixa alta

    if (frase.indexOf(" ") == -1) {
        alert("Informe uma frase por favor...")
        frm.inFrase.value.focus()
        return
    }

    // Retira os espaços em branco da frase
    const frase2 = frase.replace(/ /g, "")
    const tam = frase2.length

    let iguais = true

    //Repete até a metade (compara as primeiras letras com as últimas)
    for (let i = 0; i < tam / 2; i++) {
    // Verifica se a primeira letra é diferente da última (e sucessivamente)
      if (frase2[i] != frase2[tam -1 - i]) {
        iguais = false
        break
      }
    }

    if (iguais) {
        resp.innerText = `${frase} é um palíndromo!!`
    } else {
        resp.innerText = `${frase} não é um palíndromo!!`
    }

});