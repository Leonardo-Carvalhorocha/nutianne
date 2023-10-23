import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;
    this.classActive = 'ativo';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.toggle(this.classActive);
    this.menuButton.classList.toggle(this.classActive);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.classActive);
      this.menuButton.classList.remove(this.classActive);
    });
    return outsideClick();
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
      this.openMenu();
    }
    return this;
  }
}
