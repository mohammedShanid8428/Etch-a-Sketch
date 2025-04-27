function removeActiveStyle(buttons) {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
}

function generateGrid(divNum = 20 * 20, className = 'grid-20x20') {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';
  for (let i = 0; i < divNum; i += 1) {
    const gridDiv = document.createElement('div');
    gridContainer.classList.remove('grid-10x10', 'grid-20x20', 'grid-30x30');
    gridContainer.classList.add(className);
    gridContainer.appendChild(gridDiv);
  }
}

function chooseGrid() {
  const colorButtons = document.querySelectorAll('.rectangle');
  const gridButtons = document.querySelectorAll('.circle');
  gridButtons.forEach((button) => {
    button.addEventListener('click', () => {
      removeActiveStyle(colorButtons);
      removeActiveStyle(gridButtons);
      if (button.classList.contains('grid-10')) {
        gridButtons[0].classList.add('active');
        generateGrid(10 * 10, 'grid-10x10');
      } else if (button.classList.contains('grid-20')) {
        gridButtons[1].classList.add('active');
        generateGrid();
      } else if (button.classList.contains('grid-30')) {
        gridButtons[2].classList.add('active');
        generateGrid(30 * 30, 'grid-30x30');
      }
    });
  });
}

function generateColor(name,colors){
  const gridItem=document.querySelectorAll('grid-container>div');
  gridItem.forEach((item)=>{
    if(name==='warm'||name==='cold'){
      const randomColors=colors[Math.floor(Math.random()*colors.length,)];
      item.addEventListener('mouseenter',(e)=>{
        e.target.style.backgroundColor=randomColors;
      });
    }
    else if(name==='black'||name==='white'){
      item.addEventListener('mouseenter',(e)=>{
        e.target.style.backgroundColor=colors;
      });
    }
  });
}
generateGrid()
chooseGrid()

// const container = document.querySelector('.grid-container');


// for (i = 1; i <= 10 * 10; i++) {
//   const gridDivs = document.createElement('div');
//   gridDivs.id = 'gridDiv';
//   container.append(gridDivs)

// }
