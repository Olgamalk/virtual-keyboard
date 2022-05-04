function createImg(url, container) {
  const img = document.createElement('img');
  img.className = 'img';

  img.src = url;
  container.appendChild(img);
}

function createDiv(container) {
  const div = document.createElement('div');
  div.className = 'div';

  const divChild = document.createElement('div');
  divChild.className = 'div-child';

  container.appendChild(div);
  div.appendChild(divChild);
}

export default {
  createImg,
  createDiv,
};
