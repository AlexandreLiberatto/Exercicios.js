const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

// Nome dos cavalos participantes do páreo
const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

// Vetor que irá armazenar um objeto aposta (com o número do cavalo e valor da aposta)
const apostas = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const cavalo = Number(frm.inCavalo.value);
  const valor = Number(frm.inValor.value);

  // Adiciona ao vetor de objetos (atributos cavalo e valor)
  apostas.push({ cavalo, valor });
  //variável para exibir a lista de apostas realizadas
  let lista = `Apostas realizadas\n ${"-".repeat(25)}\n`;

  // Percorre o vetor e concatena em lista as apostas realizadas
  for (const aposta of apostas) {
    lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
    lista += ` - R$: ${aposta.valor.toFixed(2)}\n`;
  }
  respLista.innerText = lista; // Exibe a lista das apostas

  frm.reset();
  frm.inCavalo.focus();
});

const obterCavalo = (num) => {
  const posicao = num - 1; // Posição no vetor (subtrai 1, pois inicia em zero)
  return CAVALOS[posicao]; // nome do cavalo (da const CAVALOS)
};

frm.addEventListener("blur", () => {
  // Se não preencheu o campo, limpa respCavalos e retorna
  if (frm.inCavalo.value == "") {
    respCavalo.innerText = "";
    return;
  }
  const numCavalo = Number(frm.inCavalo.value); // Nº do cavalo convertido em número

  if (!validarCavalo(numCavalo)) {
    alert("Nº do cavalo inválido");
    frm.inCavalo.focus();
    return;
  }

  const nome = obterCavalo(numCavalo);
  const contaNum = contarApostas(numCavalo);
  const total = totalizarApostas(numCavalo);

  respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(
    2
  )})`;
});

const validarCavalo = (num) => {
  return num >= 1 && num <= CAVALOS.length;
};

const contarApostas = (num) => {
  let contador = 0;
  for (const aposta of apostas) {
    if (aposta.cavalo == num) {
      contador++;
    }
  }
  return contador;
};

const totalizarApostas = (num) => {
  let total = 0;
  for (const aposta of apostas) {
    if (aposta.cavalo == num) {
      total += aposta.valor;
    }
  }
  return total;
};

frm.inCavalo.addEventListener("focus", () => {
  frm.inCavalo.value = "";
  respCavalo.innerText = "";
});

frm.btResumo.addEventListener("click", () => {
  const somaApostas = [0, 0, 0, 0, 0, 0];

  for (const aposta of apostas) {
    somaApostas[aposta.cavalo - 1] += aposta.valor;
  }

  let resposta = `Nº Cavalo...........R$ Apostado\n ${"-".repeat(35)}\n`;

  CAVALOS.forEach((cavalo, i) => {
    resposta += ` ${i + 1} ${cavalo.padEnd(20)}`;
    resposta += ` ${somaApostas[i].toFixed(2).padStart(11)}\n`;
  });
  respLista.innerText = resposta;
});
