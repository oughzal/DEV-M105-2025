class Point{
    constructor(X,Y,color){
    this.X = X;
    this.Y = Y;
    this.color = color;
    this.sizeX = canvas.clientWidth/nb;
    this.sizeY = canvas.clientWidth/nb;
    }
    stroke(){
        abc.fillStyle= this.color;
        abc.strokeRect(this.X*this.sizeX,this.Y*this.sizeY,this.sizeX,this.sizeY);
    }
    fill(){
        abc.fillStyle= this.color;
        abc.fillRect(this.X*this.sizeX,this.Y*this.sizeY,this.sizeX,this.sizeY);
    }
    fillHead(){
        abc.fillStyle= "#00F";
        abc.fillRect(this.X*this.sizeX,this.Y*this.sizeY,this.sizeX,this.sizeY);
    }
    clear(){
        abc.clearRect(this.X*this.sizeX -1,this.Y*this.sizeY -1,this.sizeX +2 ,this.sizeY + 2);
    }
}

const canvas = document.getElementById('canvas')
const abc=canvas.getContext('2d');
var gameOver = false;
var nb=10;
var food = null;
var snake =[];
var head
var direction=39
var game = null


document.body.onkeydown = function(event){
if (event.keyCode >= 37 && event.keyCode <=40) direction=event.keyCode
}



function forwad(){
    if(gameOver) return false;
    getHead()
    let x = head.X
    let y = head.Y
    switch(direction){
        case 37: x--; break; //left
        case 38: y--; break; //up
        case 39: x++; break;  //right
        case 40: y++; break; //down
    }
    // overflow
    if(x < 0 ) x = nb -1;
    if(y < 0 ) y = nb -1;
    if(x == nb ) x = 0;
    if(y == nb ) y = 0;
    
    if(snake.length >1){
        let p = snake[snake.length -2]
        if(p.X == x && p.Y == y) return false;
    }
    if(isOver(x,y)){
        gameOver = true
        // abc.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
        abc.font = "100px Georgia";
        abc.fillText("Game Over!", 50, canvas.clientWidth/2);
        clearInterval(game)
    }

    if(food.X==x && food.Y == y){
        head.color ="#eee"
        snake.push(new  Point(x,y,"#eee"))
        //moveSnake()
        newFood()
        console.log(snake)
    }
    else{
    moveSnake() 
    head.X = x
    head.Y = y   
    }
drawSnake() 
}

function getHead(){
    head =snake[snake.length -1]
}

function newFood(){
    if(food !=null ) food.clear()
    x = Math.floor(Math.random()*nb)
    y = Math.floor(Math.random()*nb)
    food = new Point(x,y,"#f00");
    }


function moveSnake(){
    if(snake.length ==1) return false;
    let i = 0;
    while(i !=snake.length-1){
        snake[i].X = snake[i+1].X
        snake[i].Y = snake[i+1].Y
        i++;
    }
}

function newGame(){
    snake=[];
    gameOver = false
    head = new Point(parseInt(nb/2),parseInt(nb/2),"#00F");
    newFood()
    snake.push(head);
    drawSnake();
    clearInterval(game)
    game = setInterval(forwad,200)
}

function drawSnake(){
    if(gameOver) return false;
     abc.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
    for(let p of snake){
        p.fill()
        p.stroke()
    }
    snake[snake.length -1].fillHead()
    food.fill()
}

function isOver(x,y){
    for(let i=0; i<snake.length -2; i++){
        if(snake[i].X==x && snake[i].Y==y) return true
    }
    return false;
}