let triGray;
let triDGray;
let triYellow;
let triWhite;
let triRed;
let triBlack;

function setup() {
  createCanvas(553, 551);

  triGray = color(198, 199, 204, 255);
  triDGray = color(120, 118, 119, 255);
  triYellow = color(217, 169, 0, 255);
  triWhite = color(230, 226, 215, 255);
  triRed = color(175, 40, 11, 255);
  triBlack = color(0);
}

let r = 0,
  g = 0,
  b = 0;
function keyPressed() {
  if (key === "r") {
    r = random(255);
  } else if (key === "g") {
    g = random(255);
  } else if (key === "b") {
    b = random(255);
  }

  triGray = color(r / 2, g / 3, b / 4);
  triDGray = color(r / 4, g / 2, b / 3);
  triYellow = color(r / 3, g / 4, b / 2);
  triWhite = color(r / 2, g / 3, b / 4);
  triRed = color(r / 4, g / 2, b / 3);
  triBlack = color(r / 4, g / 3, b / 2);
}

function mousePressed() {
  triGray = color(198, 199, 204, 255);
  triDGray = color(120, 118, 119, 255);
  triYellow = color(217, 169, 0, 255);
  triWhite = color(230, 226, 215, 255);
  triRed = color(175, 40, 11, 255);
  triBlack = color(0);
}

function draw() {
  background(0);

  //Gray Triangles
  fill(triGray);
  noStroke();
  triangle(64, 210, 225, 64, 64, 64);

  //Gray Bottom
  fill(triGray);
  noStroke();
  triangle(250, 488, 400, 488, 250, 320);

  //White Triangles
  fill(triWhite);
  noStroke();
  triangle(64, 488, 250, 488, 150, 395);

  //Top White Triangle
  fill(triWhite);
  noStroke();
  triangle(250, 320, 250, 28, 380, 180);

  //Yellow Triangle
  fill(triYellow);
  noStroke();
  triangle(64, 488, 64, 320, 150, 395);

  //Black Triangle
  fill(triBlack);
  noStroke();
  triangle(250, 488, 250, 40, 1, 265);

  //Red Triangle
  fill(triRed);
  noStroke();
  triangle(488, 600, 488, 64, 250, 320);

  //Dark Gray Triangle
  fill(triDGray);
  noStroke();
  triangle(280, 64, 488, 64, 380, 180);

  noFill();
  stroke(232, 234, 223, 255);
  strokeWeight(27);
  rect(276.2, 275.5, 450, 450);
  rectMode(CENTER);

  noFill();
  stroke(0);
  strokeWeight(100);
  rect(276.2, 275.5, 553, 551);
  rectMode(CENTER);
}
