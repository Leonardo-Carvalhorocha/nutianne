export default function menuMobile() {
  const buttonMobile = document.getElementById('menu-mobile');
  const listNav = document.querySelector('.nav');
  const events = ['click', 'touchstart'];

  events.forEach((event) => {
    buttonMobile.addEventListener(event, handleClick);
  });

  function handleClick(event) {
    event.preventDefault();
    listNav.classList.toggle('ativo');
    const expendVerific = listNav.classList.contains('ativo');
    if (expendVerific) {
      buttonMobile.setAttribute('aria-expanded', 'abrir Menu');
    } else {
      buttonMobile.setAttribute('aria-expanded', 'Fechar Menu');
    }
  }
}
