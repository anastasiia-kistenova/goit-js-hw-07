
const button = document.querySelector(".change-color");
const widget = document.querySelector(".widget");

button.addEventListener('click', function () {
  const newColor = getRandomHexColor();
  widget.style.backgroundColor = newColor;
});


 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} 





