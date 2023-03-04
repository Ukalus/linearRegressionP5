
let height = 800
let width = 800
let padding = 20
const canvas = {
    heightC: height + padding,
    widthC: width + padding,
}

let points = [
    {
        x: 100,
        y: 100,
    },
    {
        x: 120,
        y: 150,
    },
    {
        x: 190,
        y: 180,
    },
    {
        x: 300,
        y: 320,
    },
    {
        x: 520,
        y: 460,
    },
    {
        x: 700,
        y: 720,
    },
]


let coords = {
    origin: {
        x: padding,
        y: 0
    },
    x:{
        x: height,
        y: 0
    }
    ,
    y: {
        x: padding,
        y: width - padding,
    }
}

function drawLine(m,b){
    
    line(0 + padding, 0 + b, width + b + padding ,height * m + b)
    line(10 + padding, 10, b, 0)
}
   

function setup(){
    createCanvas(canvas.widthC,canvas.heightC)
    background(40)
    strokeWeight(1)

}

function draw(){

    translate(0, height)
    scale(1,-1)
    
    
    strokeWeight(4)

    stroke(0,255,0)
    line(coords.origin.x,coords.origin.y,coords.y.x,coords.y.y)

    stroke(255,0,0)
    line(coords.origin.x,coords.origin.y,coords.x.x,coords.x.y)
    strokeWeight(0)
    fill(200)

    fill(255,0,0)
    ellipse(coords.x.x,coords.x.y,10,10)
    fill(0,255,0)
    ellipse(coords.y.x,coords.y.y,10,10)

    fill(255)
    strokeWeight(1)
    stroke(255)

    for(i in points){
        ellipse(points[i].x + padding,points[i].y + padding,5,5)
    }
 
    

    stroke(100,200,255)
    strokeWeight(1)
 
    drawLine(1,0)
   

}