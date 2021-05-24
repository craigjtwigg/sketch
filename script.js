window.addEventListener("load", defaultCanvas);
const canvas = document.querySelector(".canvas");

function defaultCanvas() {
    setCanvasResolution(16);
    generateCanvas(16);
    console.log("Let's Sketch!");
}

function resetCanvas(){
let canvasPixels = document.querySelectorAll(".square");
canvasPixels.forEach(pixel => pixel.remove());
 } 

function setCanvasResolution(canvasSize){
    canvas.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${canvasSize}, 1fr)`;
    }

function generateCanvas(canvasSize) {
    for (let i=0; i < canvasSize * canvasSize; i++) {
        const squarediv = document.createElement("div");
        squarediv.className = "square";
        squarediv.addEventListener("mouseover", sketch)
        canvas.appendChild(squarediv);
    }
    }

const sizeButton = document.querySelector('.sizeButton');
sizeButton.addEventListener('click', getSize);

function getSize(e) {
   let newSize = prompt("Enter a number between up to 100!", "");
   if (newSize > 100) {
       return alert("Oh no, that number is too big! Pick a number up to 100!");
   } else {
       resetCanvas();
       setCanvasResolution(newSize);
       generateCanvas(newSize);
   }
}

function sketch(e){
    const pencilColor = document.getElementById("colorpicker").value;
    e.target.style.backgroundColor = `${pencilColor}`;
}