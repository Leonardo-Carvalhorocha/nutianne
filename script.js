import menuMobile from './js/menu-mobile.js';
import slide from './js/slide.js';

const slideDesktop = new slide('.slide-desktop img', '.slide-desktop');
slideDesktop.init()

const slideMobile = new slide('.slide-mobile img', '.slide-mobile');
slideMobile.init();

menuMobile();
