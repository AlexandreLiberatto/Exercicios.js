const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240;

const reservadas = [];

window.addEventListener("load", () => {
  const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

  for (let i = 1; i <= POLTRONAS; i++) {
    const figure = document.createElement("figure");
    const imgStatus = document.createElement("img");

    imgStatus.src = ocupadas.includes(i.toString())
      ? "img/ocupada.jpg"
      : "img/disponivel.jpg";
    imgStatus.className = "poltrona";
    const figureCap = document.createElement("figcaption");

    const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

    const num = document.createTextNode(`[${zeros}${i}]`);

    figureCap.appendChild(num);
    figure.appendChild(imgStatus);
    figure.appendChild(figureCap);

    if (i % 24 == 12) figure.style.marginRigth = "60px";

    dvPalco.appendChild(figure)(i % 24 == 0) &&
      dvPalco.appendChild(document.createElement("br"));
  }
});
