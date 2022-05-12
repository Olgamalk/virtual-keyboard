const addLanguageButton = () => {
  const rowFive = document.querySelectorAll('.row')[4];
  const buttonLanguage = document.createElement('div');
  // buttonLanguage.setAttribute('data-type', 'en');
  buttonLanguage.className = 'language spec';
  buttonLanguage.innerHTML = 'ru';
  rowFive.append(buttonLanguage);
};

export default addLanguageButton;
