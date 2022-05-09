const renderHeaderToDom = () => {
  const header = document.createElement('h1');
  header.className = 'header';
  header.textContent = 'Window RSS Virtual Keyboard';
  document.body.append(header);
};

export default renderHeaderToDom;
