let sliderImages = document.querySelectorAll(".slide");
arrowLeft = document.querySelector("#arrow-left");
arrowrRight = document.querySelector("#arrow-right");
current = 0;

// this will clear all the images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
// init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

//show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
//right arrow click
arrowrRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
