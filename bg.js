const body = document.querySelector('body');

const IMG_NUMBER = 3;

function paintImage(imageNumber) {
  const image = new Image();
  image.src = `./images/${imageNumber + 1}.jpg`;
  body.prepend(image);
  image.classList.add('bgImage')
};

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();