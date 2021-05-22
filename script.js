const canvas = document.querySelector(".canvas");
canvas.style.gridTemplateColumns = `repeat(${canvasSize()}, 1fr)`;
canvas.style.gridTemplateRows = `repeat(${canvasSize()}, 1fr)`;

const sizeButton = document.querySelector('.sizeButton');
sizeButton.addEventListener('click', getSize);

function getSize(e) {
   let newSize = prompt("Enter a number between up to 100!", "");
   if (newSize > 100) {
       return alert("Oh no, that number is too big! Pick a number up to 100!");
   } else {
   console.log(newSize);
   }
}

function canvasSize() {
    let size = 16;
    return size;
}


function generateSquare() {
const squarediv = document.createElement("div");
squarediv.className = "square";
squarediv.addEventListener("mouseenter", sketch)
canvas.appendChild(squarediv);
}



function generateCanvas() {
    for (let i=0; i < `${canvasSize()}` * `${canvasSize()}`; i++) {
        generateSquare();
    }
}

function sketch(e){
    const pencilColor = document.getElementById("colorpicker").value;
    e.target.style.backgroundColor = `${pencilColor}`;
}


    
generateCanvas();