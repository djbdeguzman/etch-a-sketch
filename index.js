const gridContainer = document.querySelector('#main-container');
window.addEventListener('onload', makeDivGrid(16,16));



function makeDivGrid(col,rows) {
    for(let i = 0;i < (col * rows); i++) {
        const div = document.createElement('div')
        gridContainer.style.gridTemplateColumns = `repeat(${col}, auto)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, auto)`;
        //div.style.border = '1px solid skyblue'
        gridContainer.appendChild(div).classList.add('box')
    }
}

//color pen

boxDivsAddEventBlack(); //run default pen black

function boxDivsAddEventBlack() {
  let allTiles = document.querySelectorAll(".box");
  allTiles.forEach(element => {
    element.addEventListener("mouseover", black);
  });
}

function black() {
  this.classList.add("hoveredBlack");
}//this function changes the class of the box to hovered black