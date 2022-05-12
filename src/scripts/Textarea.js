const setAutofocus = () => {
  const ta = document.querySelector('.textarea-input');
  ta.focus();
};

const renderTextareaToDom = () => {
  const form = document.createElement('form');
  form.id = 'form';
  const textArea = document.createElement('textarea');
  textArea.className = 'textarea-input';
  textArea.cols = 120;
  textArea.rows = 15;

  form.append(textArea);
  document.body.append(form);

  setAutofocus();
};

export default renderTextareaToDom;
