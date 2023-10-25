export default function numerosApi() {
  function animaNumerosMutation() {
    const numbers = document.querySelectorAll('.dado-number');

    function numerosArray() {
      [...numbers].map((number) => animaNumeros(number));
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
  }

  const observerTarget = document.querySelector('.numeros');

  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumerosMutation()
    }
  }
}
