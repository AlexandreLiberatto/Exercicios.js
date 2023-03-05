// Obtém os elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => { // "Escuta" o evento submit do form
    e.preventDefault()  // Evita o envio do 
    
    const fruta = frm.inFruta.value.toUpperCase() // Obtém o conteudo em letras maiusculas
    let resposta = "" // String para armazenar a resposta

    for ( const letra of fruta) {  // Percorre todos os caracteres da fruta
        if (letra == fruta.charAt(0)) { // Se letra igual a letra inicial da string...
            resposta += fruta.charAt(0) // Adiciona a letra inicial
        } else {  // Senão...
            resposta += "_"  // Adiciona o sublinhado
        }
    }
    resp.innerText = resposta  // Exibe a resposta
    frm.infruta.value = "*".repeat(fruta.length)  // Preenche com "*", conforme o tamanho 
})