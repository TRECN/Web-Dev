
class Snake{
    constructor(x,y,size){
        this.x=x;
        this.y=y;
        this.size=size;
        this.tail=[{x:this.x,y:this.y}];
        this.rotateX=0;
        this.rotateY=1;
    }
    move(){
        if(this.rotateX==1){
            
        }
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