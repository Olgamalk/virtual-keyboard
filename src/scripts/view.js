function createDiv() {
  const div = document.createElement('div');
  div.className = 'main-container';

  document.body.append(div);
}

// const removeSelectedButton = () => {
//     let buttons = document.querySelectorAll('.button');
//     buttons.forEach(button => {
//         button.classList.remove('selectButton');
//         button.classList.add('buttonClick');
//     })
// }

// const addClickButton = () => {
//   //общий контейнер
//   document.querySelector('.class').addEventListener('click', (e) => {
//     if (e.target.classList.contains('class')) {
//       let clickButton = e.target;
//       removeSelectedButton();
//       selectedClickedButton(clickButton);
//     }
//   });
// };

// const selectedClickedButton = (clickButton) => {
//     clickButton.classList.add('selectButton');
//     clickButton.classList.remove('buttonClick');
// }

export default {
  createDiv,
};
