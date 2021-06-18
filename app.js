const board = document.querySelector('#board');
const colors = ['#4DFFBB', '#C6B5FF', '#67FFC4', '#FF6B4D', '#FCF079', '#FC1C81', '#FC7B35', '#99F526'];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', removeColor);


  board.append(square);
}

function setColor(element) {
  element.style.zIndex = '999';
  const color = getRandomColor1();
  const colorShadow = getRandomColor2();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 20px 20px ${colorShadow}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.zIndex = '0';
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor1() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function getRandomColor2() {
  return colors[Math.floor(Math.random() * colors.length)];
}
