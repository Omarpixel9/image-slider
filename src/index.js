import imgs from './images.js';
import './reset.css';
import './style.css';
import './image-slider.css';
import { ImageSlider } from './slider-builder.js';

const imageSlider = ImageSlider(imgs);
const contentDiv = document.querySelector('#content');
contentDiv.appendChild(imageSlider.element);
imageSlider.addEventListenersToButtons();
