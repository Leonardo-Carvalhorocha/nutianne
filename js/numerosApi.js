export default function numerosApi() {
  const divNumerosDados = document.querySelector('.numeros-dados');

  function createElementDados(dado) {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${dado.nomeDado}</h3><span>${dado.total}</span>`;
    div.children[div.children.length - 1].classList.add('anima-numeros');
    return div;
  }

  function preencherDados(dado) {
    const divDadoPreenchido = createElementDados(dado);
    divNumerosDados.appendChild(divDadoPreenchido);
  };

  function numerosArray() {
    const numeros = document.querySelectorAll('.anima-numeros');

    [...numeros].map((numero) => {
      animaNumeros(numero)
    })
  }

  function animaNumeros(numero) {
    console.log(numero)
    const total = +numero.innerText;
    const incremento = Math.floor(total / 15);
    console.log(incremento)
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start >= total) {
        numero.innerText = total;
        console.log(numero)
        clearInterval(timer);
      }
    }, 80 * Math.random());
  }

  async function criarDados() {
    try {
      const dadosresponse = await fetch('/dadosApi.json');
      const dadosJson = await dadosresponse.json();
      dadosJson.forEach((dado) => preencherDados(dado));
      numerosArray();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarDados()
};
