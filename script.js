import slide from './js/slide.js';
import numerosApi from './js/numerosApi.js';
import ScrollAnima from './js/anima-scroll.js';
import MenuMobile from './js/MenuMobile.js';
import Tooltip from './js/tooltip.js';

const slideDesktop = new slide('.slide-desktop img', '.slide-desktop');
slideDesktop.init()

const slideMobile = new slide('.slide-mobile img', '.slide-mobile');
slideMobile.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const menuMobile = new MenuMobile('#menu-mobile', '.nav');
menuMobile.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

numerosApi();
