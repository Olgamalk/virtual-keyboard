export default class Button {
  constructor({
    key, which, code, upperRu, en, upperEn, type,
  }) {
    this.key = key;
    this.which = which;
    this.code = code;
    this.upperRu = upperRu;
    this.en = en;
    this.upperEn = upperEn;
    this.type = type;
  }

  generateButton() {
    const button = document.createElement('div');
    button.className = 'key';
    button.setAttribute('data-key', this.which);
    button.textContent = `${this.key}`;

    const textButton = document.createElement('span');
    textButton.className = 'upperKey';
    textButton.textContent = `${this.upperEn}`;

    button.append(textButton);
    return button;
  }
}
