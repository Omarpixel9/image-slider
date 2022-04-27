// This module contains a main function that builds the image-slider DOM element
// and returns it, as well as any other sub-functions
const createImageSliderElement = (imgs) => {
  const imageSlider = document.createElement('div');
  imageSlider.classList.add('image-slider');
  // Images + Image container
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
  // Previous and Next Buttons
  const previousButton = document.createElement('button');
  previousButton.classList.add('previous');
  previousButton.textContent = 'Previous';
  const nextButton = document.createElement('button');
  nextButton.classList.add('next');
  nextButton.textContent = 'Next';
  imageSlider.appendChild(previousButton);
  imageSlider.appendChild(imagesContainer);
  imageSlider.appendChild(nextButton);

  return imageSlider;
};

const ImageSlider = (imgs) => {
  let currentImageIndex = 0;
  let isTimerSet = false;
  let timer;
  let timerMs = 5000;
  const element = createImageSliderElement(imgs);
  const imageContainer = element.querySelector('.images-container');
  const showImage = (index) => {
    imageContainer.childNodes.forEach(
      (child) => (child.style.display = 'none')
    );
    imageContainer.childNodes[index].style.display = 'block';
  };
  const nextSlide = () => {
    if (isTimerSet) {
      clearTimeout(timer);
      setTimer(timerMs);
    }
    currentImageIndex++;
    if (currentImageIndex === imgs.length) currentImageIndex = 0;
    showImage(currentImageIndex);
  };
  const previousSlide = () => {
    if (isTimerSet) {
      clearTimeout(timer);
      setTimer(timerMs);
    }
    currentImageIndex--;
    if (currentImageIndex === -1) currentImageIndex = imgs.length - 1;
    showImage(currentImageIndex);
  };
  const setTimer = (timeMilli) => {
    timerMs = timeMilli;
    isTimerSet = true;
    timer = setTimeout(nextSlide, timerMs);
  };
  const addEventListenersToButtons = () => {
    const previous = element.querySelector('.previous');
    previous.addEventListener('click', previousSlide);
    const next = element.querySelector('.next');
    next.addEventListener('click', nextSlide);
  };

  setTimer(5000);
  return {
    element,
    nextSlide,
    previousSlide,
    showImage,
    addEventListenersToButtons,
  };
};

export { ImageSlider };
