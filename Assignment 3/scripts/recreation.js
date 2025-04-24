function setup() {
  createCanvas(553, 551);
}

function draw() {
  background(0);

  //Gray Triangles
  fill(198, 199, 204, 255);
  noStroke();
  triangle(64, 210, 225, 64, 64, 64);

  //Gray Bottom
  fill(198, 199, 204, 255);
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
  fill(217, 169, 0, 255);
  noStroke();
  triangle(64, 488, 64, 320, 150, 395);

  //Black Triangle
  fill(0);
  noStroke();
  triangle(250, 488, 250, 40, 1, 265);

  //Red Triangle
  fill(175, 40, 11, 255);
  noStroke();
  triangle(488, 600, 488, 64, 250, 320);

  //Dark Gray Triangle
  fill(120, 118, 119, 255);
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
