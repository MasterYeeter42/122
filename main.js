function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(300);
}


function draw() {
  fill(10, 255, 220);
  stroke(60, 200, 20);
  square(200, 100, 40);
  circle(130, 160, 80);
  triangle(40, 80, 50, 100, 80, 80);
  circle(10, 100, 80);
square(300, 60, 200);
  ellipse(70, 230, 90, 20);
  arc(200, 50, 70, 100, 90, 60);

  camera(60, 60, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
  plane(10, 10);
}


