const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

// Nome dos cavalos participantes do páreo
const CAVALOS =["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"]

// Vetor que irá armazenar um objeto aposta (com o número do cavalo e valor da aposta)
const apostas = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const cavalo = Number(frm.inCavalo.value)
    const valor = Number(frm.inValor.value)

    // Adiciona ao vetor de objetos (atributos cavalo e valor)
    apostas.push({cavalo, valor})
    //variável para exibir a lista de apostas realizadas
    let lista = `Apostas realizadas\n ${"-" .repeat(25)}\n`

    // Percorre o vetor e concatena em lista as apostas realizadas
    for (const aposta of apostas) {
        lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`
        lista += ` - R$: ${aposta.valor.toFixed(2)}\n`
    }
})