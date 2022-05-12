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

export default renderContainerToDom;
