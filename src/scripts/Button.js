export default class Button {
  constructor({
    key, which, code, upper, type,
  }) {
    this.key = key;
    this.which = which;
    this.code = code;
    this.upper = upper;
    this.type = type;
  }

  generateButton() {
    const button = document.createElement('div');
    button.className = `key ${this.type}`;
    button.setAttribute('data-key', this.which);
    button.setAttribute('data-code', this.code);
    button.setAttribute('data-type', this.type);
    button.textContent = `${this.key}`;

    const textButton = document.createElement('span');
    textButton.className = 'upperKey';
    textButton.textContent = `${this.upper}`;

    return button;
  }
}
