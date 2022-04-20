import imgs from './images.js';
import './reset.css';
import './style.css';
import './image-slider.css';

const imageSlider = document.querySelector('.image-slider');
const imagesContainer = document.createElement('div');
imagesContainer.classList.add('images-container');
imgs.forEach((image, index) => {
  const imageContainer = document.createElement('div');
  const imageElement = document.createElement('img');
  imageElement.src = image;
  imageContainer.classList.add(`image${index}`);
  imageContainer.classList.add('fade');
  imageContainer.appendChild(imageElement);
  imagesContainer.appendChild(imageContainer);
});
imageSlider.appendChild(imagesContainer);
