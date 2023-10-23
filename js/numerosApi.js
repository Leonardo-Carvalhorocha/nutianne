export default function numerosApi() {
  const numbers = document.querySelectorAll('.dado-number');

  function numerosArray() {
    [...numbers].map((number) => animaNumeros(number))
  }

  numerosArray();

  function animaNumeros(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 10);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start >= total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 45 * Math.random());
  }
};
