const addLanguageButton = () => {
  const rowFive = document.querySelectorAll('.row')[4];
  const buttonLanguage = document.createElement('div');
  buttonLanguage.className = 'key language';
  buttonLanguage.innerHTML = 'ru';
  rowFive.append(buttonLanguage);
};

export default addLanguageButton;
