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
    if(userInputGridSize < 2 || userInputGridSize>100){
        showError(); // call showError function
    } else {
        noError(); // call noError function which removes the error message
        return userInputGridSize;
    }
}

//show error message if input is not 2 to 100
function showError() { 
    let errorMessage = document.getElementById("error");
    errorMessage.style.display = "block";
  }
//removes the error message if the input number is valid
function noError() { 
    let errorMessage = document.getElementById("error");
    errorMessage.style.display = "none";
  }

//color pen

boxDivsAddEventBlack(); //run default pen black

function boxDivsAddEventBlack() {
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
    event.target.style.opacity += 0.3;
  }
  

function black() {
  this.classList.add("hoveredBlack");
}//this function changes the class of the box to hovered black

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
    boxDivsAddEventBlack();
}

