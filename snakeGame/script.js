
class Snake{
    constructor(x,y,size){

    }
}


var canvas = document.getElementById("canvas")

var snake = new Snake();

var apple = new Apple();

var canvasContext = canvas.getContext('2d')

window.onload = ()=>{
    gameLoop();
}

gameLoop=()=>{
    setInterval(show,100/15)//hete 15 is out fps value
}

show=()=>{
    update();
    draw();
}