// Obtém os elementos a serem manipulados
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => { // Cria um ouvinte de evento para o botão submit
    e.preventDefault() // Evita o envio do form

    const data = frm.inData.value // Obtém os valores dos inputs
    const valor = Number(frm.inValor.value)
  
    // declara variável do tipo date
    const dataLimite = new Date()
  
    // obtém as partes da data da multa
    const partes = data.split("-")
    // "seta" as partes da data
    dataLimite.setDate(Number(partes[2]))
    dataLimite.setMonth(Number(partes[1]) - 1)
    dataLimite.setFullYear(Number(partes[0]))
  
    const dia = dataLimite.getDate()    // obtém o dia da multa
  
    dataLimite.setDate(dia + 90)      // aumenta 90 dias na data da multa
    const mes = dataLimite.getMonth() + 1
    const ano = dataLimite.getFullYear()
  
    const comDesconto = valor * 0.80
  
    resp1.innerText = "Data Limite para Pagto com Desconto: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano
    resp2.innerText = "Valor com Desconto R$: " + comDesconto.toFixed(2)
  })
  