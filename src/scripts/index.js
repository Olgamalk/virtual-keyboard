import helpers from './view';

import '../assets/styles/style.css';
import '../assets/styles/style.scss';
import imgBandit from '../assets/images/bandit-dance.png';

const wrapper = document.getElementById('wrapper');

const { createImg, createDiv } = helpers;

createImg(imgBandit, wrapper);

createDiv(wrapper);
