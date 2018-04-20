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

let sliderY = 270;
let sliderSpacing = 146;

let rColor;
let gColor;
let bColor;

let sliderSize;

let textbox;
let input;
let inputInfo;

canvasWidth = 400;
canvasHeight = 300;

function setup() {
    canvas = createCanvas(canvasWidth, canvasHeight);

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

    sliderSize = createSlider(7, 70, 25);

    textbox = createInput('NO');

    inputInfo = createP('*if you want a crazy-colored point, type yes and hit the return key. To stop the effect simply change your input.')
}

function draw() {
    background(240);
    noStroke();

    fill(rColor, gColor, bColor);

    ellipse(x, y, sliderSize.value());

    button1.position(76, 615);
    button2.position(276, 615)

    sliderRed.position(470, sliderY);
    sliderGreen.position(470, sliderY + sliderSpacing);
    sliderBlue.position(470, sliderY + sliderSpacing * 2);

    pRed.position(493, sliderY + 7);
    pGreen.position(485, sliderY + 7 + sliderSpacing);
    pBlue.position(492, sliderY + 7 + sliderSpacing * 2);

    x = noise(xoff) * 300;
    y = noise(yoff) * 200;

    xoff += speed;
    yoff += speed;

    if (speed < 0) {
        speed = 0;
    }

    rColor = sliderRed.value();
    gColor = sliderGreen.value();
    bColor = sliderBlue.value();

    sliderSize.position(570, 415);
    sliderSize.style('transform', 'rotateZ(270deg)');
    sliderSize.style('width', '300px')

    let haveFun = select('#p1');
    haveFun.style('color', '#FF4B7D');

    let randomize = select('#randomize');
    randomize.position(30, 660);

    textbox.position(170, 685);
    textbox.style('width', '30px')
   
    input = textbox.value();

    if (input == 'yes' && keyCode === RETURN) {
        randomizePoint();
    } 

    inputInfo.position(30, 710);
    inputInfo.style('font-size', '14pt');
}

function faster() {
    speed += 0.005;
}


function slower() {
    speed -= 0.003;
}

function randomizePoint() {
    rColor = random(0, 255);
    gColor = random(0, 255);
    bColor = random(0, 255);
}