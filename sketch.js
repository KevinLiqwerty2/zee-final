//let zee1;



//function preload() {
//zee1 = loadImage("/pictures/zee1 Small.jpeg")
//var song = [];

//function preload() {
  //song[1] = loadSound('sounds/zee1.wav');

  
var imageList = [];

function preload() {
  imageList[0] = loadImage('pictures/zee 1.jpeg');
  imageList[1] = loadImage('pictures/zee 2.jpeg');
  imageList[2] = loadImage('pictures/zee 3.jpeg');
  imageList[3] = loadImage('pictures/zee 4.jpeg');
  imageList[4] = loadImage('pictures/zee 5.jpeg');
  imageList[5] = loadImage('pictures/zee 6.jpeg');
  imageList[6] = loadImage('pictures/zee 7.jpeg');
  imageList[7] = loadImage('pictures/zee 8.jpeg');
  imageList[8] = loadImage('pictures/zee 9.jpeg');
  imageList[9] = loadImage('pictures/zee 10.jpeg');
  imageList[10] = loadImage('pictures/zee 11.jpeg');
  imageList[11] = loadImage('pictures/up zee 1.jpeg');
  imageList[12] = loadImage('pictures/up zee 2.jpeg');
  imageList[13] = loadImage('pictures/up zee 3.jpeg');
  imageList[14] = loadImage('pictures/up zee 4.jpeg');
  imageList[15] = loadImage('pictures/up zee 5.jpeg');
  imageList[16] = loadImage('pictures/up zee 6.jpeg');
  imageList[17] = loadImage('pictures/up zee 7.jpeg');
  imageList[18] = loadImage('pictures/up zee 8.jpeg');
  imageList[19] = loadImage('pictures/up zee 9.jpeg');
  imageList[20] = loadImage('pictures/up zee 10.jpeg');
  imageList[21] = loadImage('pictures/up zee 11.jpeg');
  imageList[22] = loadImage('pictures/up zee 12.jpeg');
  imageList[23] = loadImage('pictures/up zee 13.jpeg');
  imageList[24] = loadImage('pictures/up zee 14.jpeg');
 
}

let zee1;
let zee2;
let zee3;
let zee4;
let zee5;

function setup() {
  zee1 = loadSound('sounds/zee1.wav');
  zee2 = loadSound('sounds/zee2.wav');
  zee3 = loadSound('sounds/zee3.wav');
  zee4 = loadSound('sounds/zee4.wav');
  zee5 = loadSound('sounds/zee5.wav');
  createCanvas(1000, 1000);
}

  
function draw() {
  background(255);
  

if (mouseX < 90 && mouseY < 200) {
image(imageList[0],400,200)
circle(90,100,100)
text("a",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 90 && mouseX < 180 && mouseY < 200) {
image(imageList[1],400,200)
circle(180,100,100)
text("very",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 180 && mouseX < 270 && mouseY < 200) {
image(imageList[2],400,200)
circle(270,100,100)
text("small",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 270 && mouseX < 360 && mouseY < 200) {
image(imageList[3],400,200)
circle(360,100,100)
text("round",0,0,0,100)
  textSize(32)
}

if (mouseX > 360 && mouseX < 450 && mouseY < 200) {
image(imageList[4],400,200)
circle(450,100,100)
text("baby",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 450 && mouseX < 540 && mouseY < 200) {
image(imageList[5],400,200)
circle(540,100,100)
text("she",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 540 && mouseX < 630 && mouseY < 200) {
image(imageList[6],400,200)
circle(630,100,100)
text("is",0,0,0,100)
  textSize(32)
}

if (mouseX > 630 && mouseX < 720 && mouseY < 200) {
image(imageList[7],400,200)
circle(720,100,100)
text("so",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 720 && mouseX < 810 && mouseY < 200) {
image(imageList[8],400,200)
circle(810,100,100)
text("cute",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 810 && mouseX < 900 && mouseY < 200) {
image(imageList[9],400,200)
circle(900,100,100)
text("and",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 900 && mouseX <= 1000 && mouseY < 200) {
image(imageList[10],400,200)
circle(900,100,100)
text("small",0,0,0,100)
  textSize(32)
}
  
if (mouseX >= 710 && mouseY > 200 && mouseY < 300) {
image(imageList[11],400,200)
circle(900,200,100)
text("and",0,0,0,100)
  textSize(32)
}

if (mouseX >= 710 && mouseY > 300 && mouseY < 400) {
image(imageList[12],400,200)
circle(900,300,100)
text("fluffy",0,0,0,100)
  textSize(32)
}

if (mouseX >= 710 && mouseY > 400 && mouseY < 500) {
image(imageList[13],400,200)
circle(900,400,100)
text("and",0,0,0,100)
  textSize(32)
}

if (mouseX >= 710 && mouseY > 500 && mouseY < 600) {
image(imageList[14],400,200)
circle(900,500,100)
text("soft",0,0,0,100)
  textSize(32)
}

if (mouseX >= 710 && mouseY > 600 && mouseY < 700) {
image(imageList[15],400,200)
circle(900,600,100)
text("and",0,0,0,100)
  textSize(32)
}
  
if (mouseX > 800 && mouseX <= 1000 && mouseY > 600) {
image(imageList[16],400,200)
circle(900,700,100)
text("silly",0,0,0,100)
  textSize(32)
} 
  
if (mouseX > 600 && mouseX <= 800 && mouseY > 600) {
image(imageList[17],400,200)
circle(900,800,100)
text("and",0,0,0,100)
  textSize(32)
}  
  
if (mouseX > 400 && mouseX < 600 && mouseY > 500) {
image(imageList[18],400,200)
circle(800,800,100)
text("she",0,0,0,100)
  textSize(32)
}    

if (mouseX > 200 && mouseX <= 400 && mouseY > 500) {
image(imageList[19],400,200)
circle(600,800,100)
text("says",0,0,0,100)
  textSize(32)
}  
  
if (mouseX >= 0 && mouseX <= 200 && mouseY > 500) {
image(imageList[20],400,200)
  zee5.play()
circle(400,800,100)
text("meow",0,0,0,100)
  textSize(32)
} 
  
if (mouseX <= 400 && mouseY < 600 && mouseY > 500) {
image(imageList[21],400,200)
circle(200,800,100)
 // zee3.play()
text("meow",0,0,0,100)
  textSize(32)
} 

if (mouseX <= 400 && mouseY < 500 && mouseY > 400) {
image(imageList[22],400,200)
 zee2.play()
circle(100,800,100)
text("meow",0,0,0,100)
  textSize(32)
} 

if (mouseX <= 400 && mouseY < 400 && mouseY > 300) {
image(imageList[23],400,200)
circle(100,600,100)
text("meow",0,0,0,100)
  textSize(32)
} 

if (mouseX <= 400 && mouseY <= 300 && mouseY > 200) {
image(imageList[24],400,200)
circle(100,400,100)
  zee4.play()
text("meow",0,0,0,100)
  textSize(32)
} 

}