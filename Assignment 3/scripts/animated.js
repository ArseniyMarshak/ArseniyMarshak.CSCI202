function setup() {
  createCanvas(553, 551);
}

function pulseChange() {
  let r, g, b, a;

  r = (sin(frameCount * 0.002) + 1) * 255;
  g = ((sin(frameCount * 0.01) + 1) / 2) * 255;
  b = ((sin(frameCount * 0.01) + 2) / 4) * 255;
  a = 150;

  return color(r, g, b, a);
}

function pulseColor() {
  let color = ((sin(frameCount * 0.02) + 1) / 3) * 255;

  return color;
}

function rotation() {
  let angle = sin(frameCount * 0.005) + 1;
  let coord = translate(320, 10);
  return angle;
}

function draw() {
  background(0);
  rotate(rotation());
  //Gray Triangles
  fill(pulseChange());
  noStroke();
  triangle(64, 210, 225, 64, 64, 64);

  //Gray Bottom
  fill(pulseChange());
  noStroke();
  triangle(250, 488, 400, 488, 250, 320);

  //White Triangles
  fill(230, 226, 215, 255);
  noStroke();
  triangle(64, 488, 250, 488, 150, 395);

  //Top White Triangle
  fill(230, 226, 215, 255);
  noStroke();
  triangle(250, 320, 250, 28, 380, 180);

  //Yellow Triangle
  fill(217, 169, pulseColor(), 255);
  noStroke();
  triangle(64, 488, 64, 320, 150, 395);

  //Black Triangle
  fill(pulseColor(), 0, 0, 200);
  noStroke();
  triangle(250, 488, 250, 40, 1, 265);

  //Red Triangle
  fill(175, 40, 11, pulseColor());
  noStroke();
  triangle(488, 600, 488, 64, 250, 320);

  //Dark Gray Triangle
  fill(120, pulseColor(), 119, 255);
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
