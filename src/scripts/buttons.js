const btns = {
  ru: [
    {
      key: 'Ё',
      which: 192,
      code: 'Backquote',
      upper: 'ё',
      type: 'letter',
    },
    {
      key: 1,
      which: 49,
      code: 'Digit1',
      upper: '!',
      type: 'number',
    },
    {
      key: 2,
      which: 50,
      code: 'Digit2',
      upper: '"',
      type: 'number',
    },
    {
      key: 3,
      which: 51,
      code: 'Digit3',
      upper: '№',
      type: 'number',
    },
    {
      key: 4,
      which: 52,
      code: 'Digit4',
      upper: ';',
      type: 'number',
    },
    {
      key: 5,
      which: 53,
      code: 'Digit5',
      upper: '%',
      type: 'number',
    },
    {
      key: 6,
      which: 54,
      code: 'Digit6',
      upper: ':',
      type: 'number',
    },
    {
      key: 7,
      which: 55,
      code: 'Digit7',
      upper: '?',
      type: 'number',
    },
    {
      key: 8,
      which: 56,
      code: 'Digit8',
      upper: '*',
      type: 'number',
    },
    {
      key: 9,
      which: 57,
      code: 'Digit9',
      upper: '(',
      type: 'number',
    },
    {
      key: 0,
      which: 48,
      code: 'Digit0',
      upper: ')',
      type: 'number',
    },
    {
      key: '-',
      which: 189,
      code: 'Minus',
      upper: '_',
      type: 'symbol',
    },
    {
      key: '=',
      which: 187,
      code: 'Equal',
      upper: '+',
      type: 'symbol',
    },
    {
      key: 'Backspace',
      which: 8,
      code: 'Backspace',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Tab',
      which: 9,
      code: 'Tab',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Й',
      which: 81,
      code: 'KeyQ',
      upper: 'й',
      type: 'letter',
    },
    {
      key: 'Ц',
      which: 87,
      code: 'KeyW',
      upper: 'ц',
      type: 'letter',
    },
    {
      key: 'У',
      which: 69,
      code: 'KeyE',
      upper: 'у',
      type: 'letter',
    },
    {
      key: 'К',
      which: 82,
      code: 'KeyR',
      upper: 'к',
      type: 'letter',
    },
    {
      key: 'Е',
      which: 84,
      code: 'KeyT',
      upper: 'е',
      type: 'letter',
    },
    {
      key: 'Н',
      which: 89,
      code: 'KeyY',
      upper: 'Н',
      type: 'letter',
    },
    {
      key: 'Г',
      which: 85,
      code: 'KeyU',
      upper: 'г',
      type: 'letter',
    },
    {
      key: 'Ш',
      which: 73,
      code: 'KeyI',
      upper: 'ш',
      type: 'letter',
    },
    {
      key: 'Щ',
      which: 79,
      code: 'KeyO',
      upper: 'щ',
      type: 'letter',
    },
    {
      key: 'З',
      which: 80,
      code: 'KeyP',
      upper: 'з',
      type: 'letter',
    },
    {
      key: 'Х',
      which: 219,
      code: 'BracketLeft',
      upper: 'х',
      type: 'symbol',
    },
    {
      key: 'Ъ',
      which: 221,
      code: 'BracketRight',
      upper: 'ъ',
      type: 'symbol',
    },
    {
      key: ' \\ ',
      which: 220,
      code: 'Backslash',
      upper: '/',
      type: 'symbol',
    },
    {
      key: 'CapsLock',
      which: 20,
      code: 'CapsLock',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Ф',
      which: 65,
      code: 'KeyA',
      upper: 'ф',
      type: 'letter',
    },
    {
      key: 'Ы',
      which: 83,
      code: 'KeyS',
      upper: 'ы',
      type: 'letter',
    },
    {
      key: 'В',
      which: 68,
      code: 'KeyD',
      upper: 'в',
      type: 'letter',
    },
    {
      key: 'А',
      which: 70,
      code: 'KeyF',
      upper: 'а',
      type: 'letter',
    },
    {
      key: 'П',
      which: 71,
      code: 'KeyG',
      upper: 'п',
      type: 'letter',
    },
    {
      key: 'Р',
      which: 72,
      code: 'KeyH',
      upper: 'р',
      type: 'letter',
    },
    {
      key: 'О',
      which: 74,
      code: 'KeyJ',
      upper: 'о',
      type: 'letter',
    },
    {
      key: 'Л',
      which: 75,
      code: 'KeyK',
      upper: 'л',
      type: 'letter',
    },
    {
      key: 'Д',
      which: 76,
      code: 'KeyL',
      upper: 'д',
      type: 'letter',
    },
    {
      key: 'Ж',
      which: 186,
      code: 'Semicolon',
      upper: 'ж',
      type: 'symbol',
    },
    {
      key: 'Э',
      which: 222,
      code: 'Quote',
      upper: 'э',
      type: 'symbol',
    },
    {
      key: 'Enter',
      which: 13,
      code: 'Enter',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Shift',
      which: 16,
      code: 'ShiftLeft',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Я',
      which: 90,
      code: 'KeyZ',
      upper: 'я',
      type: 'letter',
    },
    {
      key: 'Ч',
      which: 88,
      code: 'KeyX',
      upper: 'ч',
      type: 'letter',
    },
    {
      key: 'С',
      which: 67,
      code: 'KeyC',
      upper: 'с',
      type: 'letter',
    },
    {
      key: 'М',
      which: 86,
      code: 'KeyV',
      upper: 'м',
      type: 'letter',
    },
    {
      key: 'И',
      which: 66,
      code: 'KeyB',
      upper: 'и',
      type: 'letter',
    },
    {
      key: 'Т',
      which: 78,
      code: 'KeyN',
      upper: 'т',
      type: 'letter',
    },
    {
      key: 'Ь',
      which: 77,
      code: 'KeyM',
      upper: 'ь',
      type: 'letter',
    },
    {
      key: 'Б',
      which: 188,
      code: 'Comma',
      upper: 'б',
      type: 'symbol',
    },
    {
      key: 'Ю',
      which: 190,
      code: 'Period',
      upper: 'ю',
      type: 'symbol',
    },
    {
      key: '.',
      which: 191,
      code: 'Slash',
      upper: ',',
      type: 'symbol',
    },
    {
      key: '↑',
      which: 38,
      code: 'ArrowUp',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Shift',
      which: 16,
      code: 'ShiftRight',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'ctrl',
      which: 17,
      code: 'ControlLeft',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Win',
      which: 91,
      code: 'MetaLeft',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Alt',
      which: 18,
      code: 'AltLeft',
      upper: '',
      type: 'symbol',
    },
    {
      key: '',
      which: 32,
      code: 'Space',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Alt',
      which: 18,
      code: 'AltRight',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'ctrl',
      which: 17,
      code: 'ControlRight',
      upper: '',
      type: 'symbol',
    },
    {
      key: '←',
      which: 37,
      code: 'ArrowLeft',
      upper: '',
      type: 'symbol',
    },
    {
      key: '↓',
      which: 40,
      code: 'ArrowDown',
      upper: '',
      type: 'symbol',
    },
    {
      key: '→',
      which: 39,
      code: 'ArrowRight',
      upper: '',
      type: 'symbol',
    },
  ],
  en: [
    {
      key: '`',
      which: 192,
      code: 'Backquote',
      upper: '~',
      type: 'sumbol',
    },
    {
      key: 1,
      which: 49,
      code: 'Digit1',
      upper: '!',
      type: 'number',
    },
    {
      key: 2,
      which: 50,
      code: 'Digit2',
      upper: '@',
      type: 'number',
    },
    {
      key: 3,
      which: 51,
      code: 'Digit3',
      upper: '#',
      type: 'number',
    },
    {
      key: 4,
      which: 52,
      code: 'Digit4',
      upper: '$',
      type: 'number',
    },
    {
      key: 5,
      which: 53,
      code: 'Digit5',
      upper: '%',
      type: 'number',
    },
    {
      key: 6,
      which: 54,
      code: 'Digit6',
      upper: '^',
      type: 'number',
    },
    {
      key: 7,
      which: 55,
      code: 'Digit7',
      upper: '&',
      type: 'number',
    },
    {
      key: 8,
      which: 56,
      code: 'Digit8',
      upper: '*',
      type: 'number',
    },
    {
      key: 9,
      which: 57,
      code: 'Digit9',
      upper: '(',
      type: 'number',
    },
    {
      key: 0,
      which: 48,
      code: 'Digit0',
      upper: ')',
      type: 'number',
    },
    {
      key: '-',
      which: 189,
      code: 'Minus',
      upper: '_',
      type: 'symbol',
    },
    {
      key: '=',
      which: 187,
      code: 'Equal',
      upper: '+',
      type: 'symbol',
    },
    {
      key: 'Backspace',
      which: 8,
      code: 'Backspace',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Tab',
      which: 9,
      code: 'Tab',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Q',
      which: 81,
      code: 'KeyQ',
      upper: 'q',
      type: 'letter',
    },
    {
      key: 'W',
      which: 87,
      code: 'KeyW',
      upper: 'w',
      type: 'letter',
    },
    {
      key: 'E',
      which: 69,
      code: 'KeyE',
      upper: 'e',
      type: 'letter',
    },
    {
      key: 'R',
      which: 82,
      code: 'KeyR',
      upper: 'r',
      type: 'letter',
    },
    {
      key: 'T',
      which: 84,
      code: 'KeyT',
      upper: 't',
      type: 'letter',
    },
    {
      key: 'H',
      which: 89,
      code: 'KeyY',
      upper: 'h',
      type: 'letter',
    },
    {
      key: 'U',
      which: 85,
      code: 'KeyU',
      upper: 'u',
      type: 'letter',
    },
    {
      key: 'I',
      which: 73,
      code: 'KeyI',
      upper: 'i',
      type: 'letter',
    },
    {
      key: 'O',
      which: 79,
      code: 'KeyO',
      upper: 'o',
      type: 'letter',
    },
    {
      key: 'P',
      which: 80,
      code: 'KeyP',
      upper: 'p',
      type: 'letter',
    },
    {
      key: '[',
      which: 219,
      code: 'BracketLeft',
      upper: '{',
      type: 'symbol',
    },
    {
      key: ']',
      which: 221,
      code: 'BracketRight',
      upper: '}',
      type: 'symbol',
    },
    {
      key: '\\',
      which: 220,
      code: 'Backslash',
      upper: '|',
      type: 'symbol',
    },
    {
      key: 'CapsLock',
      which: 20,
      code: 'CapsLock',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'A',
      which: 65,
      code: 'KeyA',
      upper: 'a',
      type: 'letter',
    },
    {
      key: 'S',
      which: 83,
      code: 'KeyS',
      upper: 's',
      type: 'letter',
    },
    {
      key: 'D',
      which: 68,
      code: 'KeyD',
      upper: 'd',
      type: 'letter',
    },
    {
      key: 'F',
      which: 70,
      code: 'KeyF',
      upper: 'f',
      type: 'letter',
    },
    {
      key: 'G',
      which: 71,
      code: 'KeyG',
      upper: 'g',
      type: 'letter',
    },
    {
      key: 'H',
      which: 72,
      code: 'KeyH',
      upper: 'h',
      type: 'letter',
    },
    {
      key: 'J',
      which: 74,
      code: 'KeyJ',
      upper: 'j',
      type: 'letter',
    },
    {
      key: 'K',
      which: 75,
      code: 'KeyK',
      upper: 'k',
      type: 'letter',
    },
    {
      key: 'L',
      which: 76,
      code: 'KeyL',
      upper: 'l',
      type: 'letter',
    },
    {
      key: ';',
      which: 186,
      code: 'Semicolon',
      upper: ':',
      type: 'symbol',
    },
    {
      key: '\'',
      which: 222,
      code: 'Quote',
      upper: '"',
      type: 'symbol',
    },
    {
      key: 'Enter',
      which: 13,
      code: 'Enter',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Shift',
      which: 16,
      code: 'ShiftLeft',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Z',
      which: 90,
      code: 'KeyZ',
      upper: 'z',
      type: 'letter',
    },
    {
      key: 'X',
      which: 88,
      code: 'KeyX',
      upper: 'x',
      type: 'letter',
    },
    {
      key: 'C',
      which: 67,
      code: 'KeyC',
      upper: 'c',
      type: 'letter',
    },
    {
      key: 'V',
      which: 86,
      code: 'KeyV',
      upper: 'v',
      type: 'letter',
    },
    {
      key: 'B',
      which: 66,
      code: 'KeyB',
      upper: 'b',
      type: 'letter',
    },
    {
      key: 'N',
      which: 78,
      code: 'KeyN',
      upper: 'n',
      type: 'letter',
    },
    {
      key: 'M',
      which: 77,
      code: 'KeyM',
      upper: 'm',
      type: 'letter',
    },
    {
      key: ',',
      which: 188,
      code: 'Comma',
      upper: '<',
      type: 'symbol',
    },
    {
      key: '.',
      which: 190,
      code: 'Period',
      upper: 'Ю',
      en: '.',
      upperEn: '>',
      type: 'symbol',
    },
    {
      key: '/',
      which: 191,
      code: 'Slash',
      upper: '?',
      type: 'symbol',
    },
    {
      key: '↑',
      which: 38,
      code: 'ArrowUp',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Shift',
      which: 16,
      code: 'ShiftRight',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'ctrl',
      which: 17,
      code: 'ControlLeft',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Win',
      which: 91,
      code: 'MetaLeft',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Alt',
      which: 18,
      code: 'AltLeft',
      upper: '',
      type: 'symbol',
    },
    {
      key: '',
      which: 32,
      code: 'Space',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'Alt',
      which: 18,
      code: 'AltRight',
      upper: '',
      type: 'symbol',
    },
    {
      key: 'ctrl',
      which: 17,
      code: 'ControlRight',
      upper: '',
      type: 'symbol',
    },
    {
      key: '←',
      which: 37,
      code: 'ArrowLeft',
      upper: '',
      type: 'symbol',
    },
    {
      key: '↓',
      which: 40,
      code: 'ArrowDown',
      upper: '',
      type: 'symbol',
    },
    {
      key: '→',
      which: 39,
      code: 'ArrowRight',
      upper: '',
      type: 'symbol',
    },
  ],
};

export default btns;
