export default class Button {
  constructor({
    key, which, upperRu, en, upperEn, type,
  }) {
    this.key = key;
    this.which = which;
    this.upperRu = upperRu;
    this.en = en;
    this.upperEn = upperEn;
    this.type = type;
  }

  generateButton() {
    const button = document.createElement('div');
    button.className = 'key';
    button.setAttribute('data-key', this.key);
    button.textContent = `${this.upperRu}`;

    const textButton = document.createElement('span');
    textButton.className = 'upperKey';
    textButton.textContent = `${this.upperEn}`;

    button.append(textButton);
    return button;
  }
}
