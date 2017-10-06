function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  stroke(255, 100);
  noFill();
  translate(width / 2, height / 2);
  drawCircle(0, 0, height * 0.6);
}

function drawCircle(x, y, d) {
  push();
  ellipse(x, y, d);
  pop();
  if (d > 10) {
    drawCircle(x + map(mouseX, 0, width, d, 0), y, d / 2);
    drawCircle(x - map(mouseX, 0, width, d, 0), y, d / 2);
    drawCircle(x, y - map(mouseY, 0, height, d, 0), d / 2);
    drawCircle(x, y + map(mouseY, 0, height, d, 0), d / 2);

    // drawCircle(x + d / 2, y, d / 2);
    // drawCircle(x - d / 2, y, d / 2);
    // drawCircle(x, y - d / 4, d / 2);
    // drawCircle(x, y + d / 4, d / 2);
  }
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}