const gridContainer = document.querySelector('#main-container');
window.addEventListener('onload', makeDivGrid(16,16));

function makeDivGrid(col,rows) {
    for(let i = 0;i < (col * rows); i++) {
        const newDiv = document.createElement('div')
        gridContainer.style.gridTemplateColumns = `repeat(${col}, auto)`;
        gridContainer.style.gridTemplateRows = `repeat(${rows}, auto)`;
        //div.style.border = '1px solid skyblue'
        gridContainer.appendChild(newDiv).classList.add('box') // adds the new div inside the gridContainer
    }
}

//this will limit the input to 3 digits and will not allow non number entry
document.getElementById('numberOnly').addEventListener('keypress', event => {
    if (!`${event.target.value}${event.key}`.match(/^[0-9]{0,3}$/)) {
        // block the input if result does not match
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
});

//function onClickSubmitValue will get the input value
function onClickSubmitValue() {
    const userInputGridSize = document.querySelector(".sizeInput").value;
    return userInputGridSize;
}

//color pen
boxDivsAddEventPastel();   //run default pen PASTEL

function boxDivsAddEventPastel() {
  let allTiles = document.querySelectorAll(".box");
  allTiles.forEach(element => {
    element.addEventListener("mouseover", pastelRGB);
  });
}

function pastelRGB(event) {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    event.target.style.opacity = 0.3;
  }

//this function changes the class of the box to hovered black
  function boxDivsAddEventBlack() {
    let allTiles = document.querySelectorAll(".box");
    allTiles.forEach(element => {
      element.addEventListener("mouseover", black);
    });
  }
function black(event) {
    event.target.style.backgroundColor = `rgb(0,0,0)`;
    event.target.style.opacity = 1;
}

//function to remove the highlighted box
function removeAllBoxDivs() {
    
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// Change Grid Size button and reset button
function submitButtonEvent() { 
    let num = onClickSubmitValue();
    onClickSubmitValue();
    removeAllBoxDivs();
    makeDivGrid(num,num);
    boxDivsAddEventPastel();
}

// removed for now
/* function changeToBlack() {
    boxDivsAddEventBlack();
}

function changeToPastel() {
    boxDivsAddEventPastel();
    }
} */