let speed = 0.016;
let x = 0;
let y = 0;
let xoff = 0;
let yoff = 1000;

let p1;
let button1;
let button2;
let sliderRed;
let sliderGreen;
let sliderBlue;

let sliderY = 300;
let sliderSpacing = 130;

let rColor;
let gColor;
let bColor;

function setup() {
    canvas = createCanvas(400, 300);
    p1 = createP('Have fun with the point!');

    button1 = createButton('Move faster');
    button2 = createButton('Move slower');

    button1.mousePressed(faster);
    button2.mousePressed(slower);

    sliderRed = createSlider(0, 255, 255);
    sliderGreen = createSlider(0, 255, 75);
    sliderBlue = createSlider(0, 255, 125);

    pRed = createP('Red color');
    pGreen = createP('Green color');
    pBlue = createP('Blue color');
} 

function draw() {
    background(240);
    noStroke();

    fill(rColor, gColor, bColor);

    ellipse(x, y, 25);

    canvas.position(20, 275);

    sliderRed.position(450, sliderY - 10); 
    sliderGreen.position(450, sliderY + sliderSpacing - 10); 
    sliderBlue.position(450, sliderY + sliderSpacing * 2 -10); 

    pRed.position(480, sliderY);
    pGreen.position(480, sliderY + sliderSpacing);
    pBlue.position(480, sliderY + sliderSpacing * 2);

    x = noise(xoff)*300;
    y = noise(yoff)*200;

    xoff += speed;
    yoff += speed;

    if (speed < 0) {
        speed = 0;
    }

    rColor = sliderRed.value();
    gColor = sliderGreen.value();
    bColor = sliderBlue.value();

}

function faster() {
    speed += 0.005;
}


function slower() {
    speed -= 0.003;
}
