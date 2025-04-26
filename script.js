// function generateGrid(divNum =20*20, className='grid-20x20'){
//   const gridContainer=document.querySelector('.grid-container');
//   gridContainer.innerHTML='';
//   for(let i=0;i<divNum;i+=1){
//     const gridDiv=document.createElement('div')
//     gridContainer.classList,remove('grid-10x10','grid-20x20','grid-30x30');
//     gridContainer.classList.add(lassName);
//     gridContainer.appendChild(gridDiv);
//   }
// }

const container = document.querySelector('.grid-container');


for(i=1;i<=10*10;i++){
  const divs=document.createElement('div');
  divs.id='gridDiv';
  container.append(divs)
  
}
