

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes'); 
  boxesContainer.innerHTML = '';
}


  const destroyBtn = document.querySelector(".btn-destroy");
  const createBtn = document.querySelector(".btn-create");
  
  createBtn.addEventListener('click', function () {
    const numberOfBoxes = parseInt(document.querySelector('input').value, 10);


    if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
      createBoxes(numberOfBoxes);
      document.querySelector('input').value = '';
    }


  });

destroyBtn.addEventListener('click', destroyBoxes);


