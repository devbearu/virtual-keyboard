import languages from './lang/languages.js';
import createElement from './utils/createElement.js';

const fnKeys = [
  'AltLeft',
  'AltRight',
  'ArrowUp',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'Backspace',
  'CapsLock',
  'ControlLeft',
  'ControlRight',
  'Delete',
  'Enter',
  'ShiftLeft',
  'ShiftRight',
  'Tab',
  'Lang',
  'Space',
];

export default class Key {
  constructor(langCode, code) {
    const findKeyObj = () => languages[langCode].find((el) => el.code === code);

    this.small = findKeyObj().small;
    this.shift = findKeyObj().shift;
    this.code = code;

    if (code === 'Lang') {
      this.small = langCode;
      this.shift = langCode;
    }

    this.isFnKey = fnKeys.includes(code);
    this.keyHTML = createElement('div', 'key', 'code', this.code, this.small);

    if (this.isFnKey) {
      this.keyHTML.classList.add(this.code);
      this.keyHTML.dataset.isFnKey = 'true';
    }
  }
}
