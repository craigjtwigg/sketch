const container = document.querySelector(".container");
container.style.gridTemplateColumns = `repeat(${canvasSize()}, 1fr)`;
container.style.gridTemplateRows = `repeat(${canvasSize()}, 1fr)`;


function canvasSize() {
    let size = 16;
    return size;
}


function generateSquare() {
const squarediv = document.createElement("div");
squarediv.className = "square";
squarediv.addEventListener("mouseenter", sketch)
container.appendChild(squarediv);
}


function generateCanvas() {
    for (let i=0; i < `${canvasSize()}` * `${canvasSize()}`; i++) {
        generateSquare();
    }
}

function sketch(e){
    e.target.style.backgroundColor = 'black';
}


    
generateCanvas();