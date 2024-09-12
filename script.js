const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  slideImage();
};

const goNext = () => {
  counter++;
  slideImage();
};

const slideImage = () => {
  
  if (counter < 0) {
    counter = slides.length - 1;
  } else if (counter >= slides.length) {
    counter = 0;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`; 
  });
};


