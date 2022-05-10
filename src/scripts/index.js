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
  const lang = document.querySelector('.language');
  if (lang) {
    language = btns.ru;
    lang.innerHTML = '';
    clearRow();
    renderButtonsToDom();
  } else {
    language = btns.en;
    clearRow();
    renderButtonsToDom();
  }
};

const addClickOnButton = () => {
  document.querySelector('.language').addEventListener('mousedown', (e) => {
    const buttonLanguage = e.target;
    clickOnButton(buttonLanguage);
  });
};

const addButtonByMouse = (clickButton) => {
  const textarea = document.querySelector('textarea');
  const arrayValue = [];
  textarea.value += clickButton.innerHTML;
  arrayValue.push(clickButton.innerHTML);

  if (clickButton.textContent === 'Backspace') {
    arrayValue.pop();
  }
};

const changeButtonCase = (e) => {
  const keys = document.querySelectorAll('.key');
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

const addClickButton = () => {
  document.querySelector('.keyboard-container').addEventListener('mousedown', (e) => {
    const clickButton = e.target;
    if (clickButton.classList.contains('key')) {
      selectedClickedButton(clickButton);
      addButtonByMouse(clickButton);
      changeButtonCase(clickButton);
    }
  });
  document.querySelector('.keyboard-container').addEventListener('mouseup', (e) => {
    const clickButton = e.target;
    removeSelectedButton(clickButton);
  });
};

const addClickByKeyboard = () => {
  document.addEventListener('keydown', (e) => {
    const keys = document.querySelectorAll(`.key[data-code="${e.code}"]`);
    keys.forEach((elem) => {
      elem.classList.add('click');
    });
    changeButtonCase(e);
  });
  document.addEventListener('keyup', (e) => {
    const keys = document.querySelectorAll(`.key[data-code="${e.code}"]`);
    keys.forEach((elem) => {
      elem.classList.remove('click');
    });
  });
};

window.onload = () => {
  renderHeaderToDom();
  renderTextareaToDom();
  renderContainerToDom();
  if (btns) {
    renderButtonsToDom();
  }
  addClickOnButton();
  addClickButton();
  addClickByKeyboard();
};
