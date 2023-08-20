const carousel = document.querySelector('.best-deals-carousel');
const arrowButtons = document.querySelectorAll('.carousel-card-button i');
const firstCardWidth = carousel.querySelector('.best-deals-card').offsetWidth;

console.log('firstCardWidth', '=', firstCardWidth);

let isDragging = false;
let startX = null;
let startScrollLeft = null;

arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === 'card-button-left') {
      //用id才能運作，用class會變成只能單方向移動，且這個class要與跌class分開才會有效果，但是i的箭頭會不見
      carousel.scrollLeft -= firstCardWidth + 16; //如何連動scss第272的gap屬性
    } else {
      carousel.scrollLeft += firstCardWidth + 16; //如何連動scss第272的gap屬性
    }
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
};

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
