import '../assets/styles/style.scss';
import Button from './Button';

const buttons = [
  {
    key: 'ё',
    which: 192,
    code: 'Backquote',
    upperRu: 'Ё',
    en: '`',
    upperEn: '~',
    type: 'letter',
  },
  {
    key: 1,
    which: 49,
    code: 'Digit1',
    upperRu: '!',
    en: 1,
    upperEn: '!',
    type: 'number',
  },
  {
    key: 2,
    which: 50,
    code: 'Digit2',
    upperRu: '"',
    en: 2,
    upperEn: '@',
    type: 'number',
  },
  {
    key: 3,
    which: 51,
    code: 'Digit3',
    upperRu: '№',
    en: 3,
    upperEn: '#',
    type: 'number',
  },
  {
    key: 4,
    which: 52,
    code: 'Digit4',
    upperRu: ';',
    en: 4,
    upperEn: '$',
    type: 'number',
  },
  {
    key: 5,
    which: 53,
    code: 'Digit5',
    upperRu: '%',
    en: 5,
    upperEn: '%',
    type: 'number',
  },
  {
    key: 6,
    which: 54,
    code: 'Digit6',
    upperRu: ':',
    en: 6,
    upperEn: '^',
    type: 'number',
  },
  {
    key: 7,
    which: 55,
    code: 'Digit7',
    upperRu: '?',
    en: 7,
    upperEn: '&',
    type: 'number',
  },
  {
    key: 8,
    which: 56,
    code: 'Digit8',
    upperRu: '*',
    en: 8,
    upperEn: '*',
    type: 'number',
  },
  {
    key: 9,
    which: 57,
    code: 'Digit9',
    upperRu: '(',
    en: 9,
    upperEn: '(',
    type: 'number',
  },
  {
    key: 0,
    which: 48,
    code: 'Digit0',
    upperRu: ')',
    en: 0,
    upperEn: ')',
    type: 'number',
  },
  {
    key: '-',
    which: 189,
    code: 'Minus',
    upperRu: '_',
    en: '-',
    upperEn: '_',
    type: 'symbol',
  },
  {
    key: '=',
    which: 187,
    code: 'Equal',
    upperRu: '+',
    en: '=',
    upperEn: '+',
    type: 'symbol',
  },
  {
    key: 'Backspace',
    which: 8,
    code: 'Backspace',
    upperRu: '',
    en: 'Backspace',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'Tab',
    which: 9,
    code: 'Tab',
    upperRu: '',
    en: 'Tab',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'й',
    which: 81,
    code: 'KeyQ',
    upperRu: 'Й',
    en: 'q',
    upperEn: 'Q',
    type: 'letter',
  },
  {
    key: 'ц',
    which: 87,
    code: 'KeyW',
    upperRu: 'Ц',
    en: 'w',
    upperEn: 'W',
    type: 'letter',
  },
  {
    key: 'у',
    which: 69,
    code: 'KeyE',
    upperRu: 'У',
    en: 'e',
    upperEn: 'E',
    type: 'letter',
  },
  {
    key: 'к',
    which: 82,
    code: 'KeyR',
    upperRu: 'К',
    en: 'r',
    upperEn: 'R',
    type: 'letter',
  },
  {
    key: 'е',
    which: 84,
    code: 'KeyT',
    upperRu: 'Е',
    en: 't',
    upperEn: 'T',
    type: 'letter',
  },
  {
    key: 'н',
    which: 89,
    code: 'KeyY',
    upperRu: 'Н',
    en: 'y',
    upperEn: 'Y',
    type: 'letter',
  },
  {
    key: 'г',
    which: 85,
    code: 'KeyU',
    upperRu: 'Г',
    en: 'w',
    upperEn: 'W',
    type: 'letter',
  },
  {
    key: 'ш',
    which: 73,
    code: 'KeyI',
    upperRu: 'Щ',
    en: 'i',
    upperEn: 'I',
    type: 'letter',
  },
  {
    key: 'щ',
    which: 79,
    code: 'KeyO',
    upperRu: 'Щ',
    en: 'o',
    upperEn: 'O',
    type: 'letter',
  },
  {
    key: 'з',
    which: 80,
    code: 'KeyP',
    upperRu: 'З',
    en: 'p',
    upperEn: 'P',
    type: 'letter',
  },
  {
    key: 'х',
    which: 219,
    code: 'BracketLeft',
    upperRu: 'Х',
    en: '[',
    upperEn: '{',
    type: 'symbol',
  },
  {
    key: 'ъ',
    which: 221,
    code: 'BracketRight',
    upperRu: 'Ъ',
    en: ']',
    upperEn: '}',
    type: 'symbol',
  },
  {
    key: ' \ ',
    which: 220,
    code: 'Backslash',
    upperRu: '/',
    en: '',
    upperEn: '|',
    type: 'symbol',
  },
  {
    key: 'CapsLock',
    which: 20,
    code: 'CapsLock',
    upperRu: '',
    en: 'CapsLock',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'ф',
    which: 65,
    code: 'KeyA',
    upperRu: 'Ф',
    en: 'a',
    upperEn: 'A',
    type: 'letter',
  },
  {
    key: 'ы',
    which: 83,
    code: 'KeyS',
    upperRu: 'Ы',
    en: 's',
    upperEn: 'S',
    type: 'letter',
  },
  {
    key: 'в',
    which: 68,
    code: 'KeyD',
    upperRu: 'В',
    en: 'd',
    upperEn: 'D',
    type: 'letter',
  },
  {
    key: 'а',
    which: 70,
    code: 'KeyF',
    upperRu: 'А',
    en: 'f',
    upperEn: 'F',
    type: 'letter',
  },
  {
    key: 'п',
    which: 71,
    code: 'KeyG',
    upperRu: 'П',
    en: 'g',
    upperEn: 'G',
    type: 'letter',
  },
  {
    key: 'р',
    which: 72,
    code: 'KeyH',
    upperRu: 'Р',
    en: 'h',
    upperEn: 'H',
    type: 'letter',
  },
  {
    key: 'о',
    which: 74,
    code: 'KeyJ',
    upperRu: 'О',
    en: 'j',
    upperEn: 'J',
    type: 'letter',
  },
  {
    key: 'л',
    which: 75,
    code: 'KeyK',
    upperRu: 'Л',
    en: 'k',
    upperEn: 'K',
    type: 'letter',
  },
  {
    key: 'д',
    which: 76,
    code: 'KeyL',
    upperRu: 'Д',
    en: 'l',
    upperEn: 'L',
    type: 'letter',
  },
  {
    key: 'ж',
    which: 186,
    code: 'Semicolon',
    upperRu: 'Ж',
    en: ';',
    upperEn: ':',
    type: 'symbol',
  },
  {
    key: 'э',
    which: 222,
    code: 'Quote',
    upperRu: 'Э',
    en: "'",
    upperEn: '"',
    type: 'symbol',
  },
  {
    key: 'Enter',
    which: 13,
    code: 'Enter',
    upperRu: '',
    en: 'Enter',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'Shift',
    which: 16,
    code: 'Shift',
    upperRu: '',
    en: 'Shift',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'я',
    which: 90,
    code: 'KeyZ',
    upperRu: 'Я',
    en: 'z',
    upperEn: 'Z',
    type: 'letter',
  },
  {
    key: 'ч',
    which: 88,
    code: 'KeyX',
    upperRu: 'Ч',
    en: 'x',
    upperEn: 'X',
    type: 'letter',
  },
  {
    key: 'с',
    which: 67,
    code: 'KeyC',
    upperRu: 'С',
    en: 'c',
    upperEn: 'C',
    type: 'letter',
  },
  {
    key: 'м',
    which: 86,
    code: 'KeyV',
    upperRu: 'М',
    en: 'v',
    upperEn: 'V',
    type: 'letter',
  },
  {
    key: 'и',
    which: 66,
    code: 'KeyB',
    upperRu: 'И',
    en: 'b',
    upperEn: 'B',
    type: 'letter',
  },
  {
    key: 'т',
    which: 78,
    code: 'KeyN',
    upperRu: 'Т',
    en: 'n',
    upperEn: 'N',
    type: 'letter',
  },
  {
    key: 'ь',
    which: 77,
    code: 'KeyM',
    upperRu: 'Ь',
    en: 'm',
    upperEn: 'M',
    type: 'letter',
  },
  {
    key: 'б',
    which: 188,
    code: 'Comma',
    upperRu: 'Б',
    en: ',',
    upperEn: '<',
    type: 'symbol',
  },
  {
    key: 'ю',
    which: 190,
    code: 'Period',
    upperRu: 'Ю',
    en: '.',
    upperEn: '>',
    type: 'symbol',
  },
  {
    key: '.',
    which: 191,
    code: 'Slash',
    upperRu: ',',
    en: '/',
    upperEn: '?',
    type: 'symbol',
  },
  {
    key: '↑',
    which: 38,
    code: 'ArrowUp',
    upperRu: '',
    en: 'ArrowUp',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'Shift',
    which: 16,
    code: 'ShiftRight',
    upperRu: '',
    en: 'Shift',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'ctrl',
    which: 17,
    code: 'ControlLeft',
    upperRu: '',
    en: 'Control',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'Win',
    which: 91,
    code: 'MetaLeft',
    upperRu: '',
    en: 'Meta',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'Alt',
    which: 18,
    code: 'AltLeft',
    upperRu: '',
    en: 'Alt',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: '',
    which: 32,
    code: 'Space',
    upperRu: '',
    en: 'Space',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'Alt',
    which: 18,
    code: 'AltRight',
    upperRu: '',
    en: 'AltGraph',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: 'ctrl',
    which: 17,
    code: 'ControlRight',
    upperRu: '',
    en: 'Control',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: '←',
    which: 37,
    code: 'ArrowLeft',
    upperRu: '',
    en: 'ArrowLeft',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: '↓',
    which: 40,
    code: 'ArrowDown',
    upperRu: '',
    en: 'ArrowDown',
    upperEn: '',
    type: 'symbol',
  },
  {
    key: '→',
    which: 39,
    code: 'ArrowRight',
    upperRu: '',
    en: 'ArrowRight',
    upperEn: '',
    type: 'symbol',
  },
];

const renderContainerToDom = () => {
  const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'keyboard-container';
  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    keyboardContainer.append(row);
  }
  document.body.append(keyboardContainer);
};

const generateButtons = () => {
  const buttonsArray = [];

  buttons.forEach((button) => {
    buttonsArray.push(new Button(button));
  });
  return buttonsArray;
};

const getMainContainer = () => {
  const keyboardContainer = document.querySelector('.keyboard-container');
  return keyboardContainer;
};

const getButtons = () => {
  const buttonsItems = document.querySelectorAll('.key');
  // return buttonsItems;
  console.log(buttonsItems);
};

const renderButtonsToDom = () => {
  const rowOne = document.querySelectorAll('.row')[0];
  const rowTwo = document.querySelectorAll('.row')[1];
  const rowThree = document.querySelectorAll('.row')[2];
  const rowFour = document.querySelectorAll('.row')[3];
  const rowFive = document.querySelectorAll('.row')[4];

  // const mainContainer = getMainContainer();
  generateButtons(buttons).slice(0, 14).forEach((button) => {
    rowOne.append(button.generateButton());
  });
  generateButtons(buttons).slice(14, 28).forEach((button) => {
    rowTwo.append(button.generateButton());
  });
  generateButtons(buttons).slice(28, 41).forEach((button) => {
    rowThree.append(button.generateButton());
  });
  generateButtons(buttons).slice(41, 54).forEach((button) => {
    rowFour.append(button.generateButton());
  });
  generateButtons(buttons).slice(54, 64).forEach((button) => {
    rowFive.append(button.generateButton());
  });
};

// const clickButton = document.querySelectorAll('.key');

const selectedClickedButton = (clickButton) => {
  clickButton.classList.add('active');
  // clickButton.classList.remove('buttonClick');
};

const addClickButton = () => {
  //общий контейнер
  document.querySelector('.keyboard-container').addEventListener('mousedown', (e) => {
    // if (e.target.classList.contains('class')) {
    //   let clickButton = e.target;
    //   // removeSelectedButton();
    //   selectedClickedButton(clickButton);
    // }
    const clickButton = e.target;
    selectedClickedButton(clickButton);
    console.log(e.target);
  });
};


window.onload = function () {
  renderContainerToDom();
  if (buttons) {
    renderButtonsToDom();
  }
  getButtons();
  addClickButton();
};
