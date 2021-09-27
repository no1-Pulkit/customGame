var zombies
var shooter
var bg
var bgImg
var shootingImg
var standingImg
var edges
var standing
function preload(){
shootingImg =loadImage("assets/shooter_3.png")
standingImg =loadImage("assets/shooter_2.png")
bgImg =loadImage("assets/bg.jpeg")
}
function setup(){
createCanvas(windowWidth,windowHeight)
bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale=1.1
shooter=createSprite(displayWidth-1150,displayHeight-300,50,50)
shooter.addImage(standingImg)
shooter.scale=0.3
edges=createEdgeSprites()
}
function draw(){
    if(keyDown("UP_ARROW")){
        shooter.y=shooter.y-30
    }
    if(keyDown("DOWN_ARROW")){
        shooter.y=shooter.y+30
    }
    if(keyWentDown('space')){
        shooter.addImage(shootingImg)
    }
    else if(keyWentUp("space")){
        shooter.addImage(standingImg)
    }
    shooter.bounceOff(edges)
drawSprites()

}