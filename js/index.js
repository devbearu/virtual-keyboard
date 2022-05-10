import Keyboard from './keyboard.js';

const langCode = localStorage.getItem('keyboardLang') || 'en';
const keyboard = new Keyboard(langCode);
keyboard.init();
