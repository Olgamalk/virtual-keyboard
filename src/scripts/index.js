import '../assets/styles/style.scss';
import Button from './Button';
import btns from './buttons';
import renderHeaderToDom from './Header';
import renderContainerToDom from './Container';
import renderTextareaToDom from './Textarea';
import addLanguageButton from './LanguageButton';

let language = btns.en;

const generateButtons = () => {
  const buttonsArray = [];

  language.forEach((button) => {
    buttonsArray.push(new Button(button));
  });
  return buttonsArray;
};

const renderButtonsToDom = () => {
  const rowOne = document.querySelectorAll('.row')[0];
  const rowTwo = document.querySelectorAll('.row')[1];
  const rowThree = document.querySelectorAll('.row')[2];
  const rowFour = document.querySelectorAll('.row')[3];
  const rowFive = document.querySelectorAll('.row')[4];

  generateButtons(btns).slice(0, 14).forEach((button) => {
    rowOne.append(button.generateButton());
  });
  generateButtons(btns).slice(14, 28).forEach((button) => {
    rowTwo.append(button.generateButton());
  });
  generateButtons(btns).slice(28, 41).forEach((button) => {
    rowThree.append(button.generateButton());
  });
  generateButtons(btns).slice(41, 54).forEach((button) => {
    rowFour.append(button.generateButton());
  });
  generateButtons(btns).slice(54, 65).forEach((button) => {
    rowFive.append(button.generateButton());
  });
  addLanguageButton();
};

const clearRow = () => {
  const rowOne = document.querySelectorAll('.row')[0];
  const rowTwo = document.querySelectorAll('.row')[1];
  const rowThree = document.querySelectorAll('.row')[2];
  const rowFour = document.querySelectorAll('.row')[3];
  const rowFive = document.querySelectorAll('.row')[4];
  rowOne.innerHTML = '';
  rowTwo.innerHTML = '';
  rowThree.innerHTML = '';
  rowFour.innerHTML = '';
  rowFive.innerHTML = '';
};

const clickOnButton = () => {
  if (btns.en) {
    language = btns.ru;
    clearRow();
    renderButtonsToDom();
  } else {
    language = btns.en;
    clearRow();
    renderButtonsToDom();
  }
};

const addButtonByMouse = (clickButton) => {
  const textarea = document.querySelector('textarea');
  if (!clickButton.classList.contains('spec') && !clickButton.classList.contains('keyboard-container') && !clickButton.classList.contains('row')) {
    textarea.value += clickButton.innerHTML;
  }
  return textarea.value;
};

const changeButtonCase = (e) => {
  const keys = document.querySelectorAll('.letter');
  if (e.keyCode === 20) {
    keys.forEach((key) => {
      key.classList.toggle('lowercase');
    });
  }
};

const selectedClickedButton = (clickButton) => {
  clickButton.classList.add('click');
};

const removeSelectedButton = (clickButton) => {
  clickButton.classList.remove('click');
};

const changeLanguage = () => {
  document.querySelector('.language').addEventListener('click', () => {
    clickOnButton();
  });
};

const upLettersByMouse = () => {
  document.querySelectorAll('[data-key="16"]').forEach((elem) => {
    elem.addEventListener('click', () => {
      const keys = document.querySelectorAll('.letter');
      keys.forEach((key) => {
        key.classList.toggle('lowercase');
      });
    });
  });
  document.querySelector('[data-key="20"]').addEventListener('click', () => {
    const keys = document.querySelectorAll('.letter');
    keys.forEach((key) => {
      key.classList.toggle('lowercase');
    });
  });
};

const addClickButton = () => {
  document.querySelector('.keyboard-container').addEventListener('mousedown', (e) => {
    const clickButton = e.target;
    if (!clickButton.classList.contains('spec') && !clickButton.classList.contains('keyboard-container')) {
      addButtonByMouse(clickButton);
    }
    changeButtonCase(e);
    selectedClickedButton(clickButton);
  });
  document.querySelector('.keyboard-container').addEventListener('mouseup', (e) => {
    const clickButton = e.target;
    removeSelectedButton(clickButton);
  });
  changeLanguage();
  upLettersByMouse();
};

const changeShift = () => {
  const letters = document.querySelectorAll('.letter');
  letters.forEach((letter) => {
    letter.classList.toggle('lowercase');
  });
};

const turnOnKeyboard = (e) => {
  const textarea = document.querySelector('textarea');
  if (e.key === 'Tab') {
    e.preventDefault();
    textarea.value += '    ';
    textarea.focus();
  }
  if (e.code === 'Alt' || e.code === 'AltGr') {
    e.preventDefault();
  }
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    changeShift();
  }
  if (e.code === 'Space') {
    e.preventDefault();
    textarea.value += ' ';
  }
  textarea.focus();
};

const addClickByKeyboard = () => {
  document.addEventListener('keydown', (e) => {
    const keys = document.querySelectorAll(`.key[data-code="${e.code}"]`);
    keys.forEach((elem) => {
      elem.classList.add('click');
    });
    turnOnKeyboard(e);
    changeButtonCase(e);
  });
  document.addEventListener('keyup', (e) => {
    const keys = document.querySelectorAll(`.key[data-code="${e.code}"]`);
    keys.forEach((elem) => {
      elem.classList.remove('click');
    });
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      changeShift();
    }
  });
};

window.onload = () => {
  renderHeaderToDom();
  renderTextareaToDom();
  renderContainerToDom();
  if (btns) {
    renderButtonsToDom();
  }
  addClickButton();
  addClickByKeyboard();
  // changeLanguage();
  // upLettersByMouse();
};
