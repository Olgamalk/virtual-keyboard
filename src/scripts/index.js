import '../assets/styles/style.scss';
import Button from './Button';
import btns from './buttons';
import renderHeaderToDom from './Header';
import renderContainerToDom from './Container';
import renderTextareaToDom from './Textarea';

const language = btns.en;

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
};

const addButtonByMouse = (clickButton) => {
  const textarea = document.querySelector('textarea');
  const arrayValue = [];
  textarea.value += clickButton.textContent;
  arrayValue.push(clickButton.textContent);

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
    selectedClickedButton(clickButton);
    addButtonByMouse(clickButton);
    changeButtonCase(clickButton);
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
  addClickButton();
  addClickByKeyboard();
};
