const frm = document.querySelector("form"); // Obtém o elemento form da página

const TAXA_MULTA = 2 / 100; // Multa por atraso
const TAXA_JUROS = 0.33 / 100; // Juros por dia de atraso

frm.addEventListener("submit", (e) => {
  // Cria um "ouvinte" de evento para o botão submit
  e.preventDefault(); // Evita o envio do form
  const dataVenc = frm.inDataVenc.value; // Obtém os valores dos inputs
  const valor = Number(frm.inValor.value);
  const hoje = new Date(); // Cria variáveis (instancia a objetos)
  const vencto = new Date(); // Do tipo Date()

  const partes = dataVenc.split("-"); // Data de vencimento no formato aaa-mm-dd
  vencto.setDate(Number(partes[2]));
  vencto.setMonth(Number(partes[1]) - 1);
  vencto.setFullYear(Number(partes[0]));

  const atraso = hoje - vencto; // Calcula a diferença de dias entre datas (em milisegundos)
  let multa = 0; // Inicializa multa e juros em 0
  let juros = 0;

  if (atraso > 0) {
    // Se conta estiver em atraso...
    // converte milisegundos do atraso em dias (1 dia = 24h x 60min x 60seg x 1000ms: 86400000)
    const dias = atraso / 86400000;
    multa = valor * TAXA_MULTA; // Calcula multa e juros
    juros = valor * TAXA_JUROS * dias;
  }

  const total = valor + multa + juros; // Calcula o total

  frm.outMulta.value = multa.toFixed(2); // Exibe o valor em 2 decimais
  frm.outJuros.value = juros.toFixed(2);
  frm.outTotal.value = total.toFixed(2);
});
