let animateTree = false;
let time = 0;

function setup() {
  createCanvas(800, 800);
  background(256);
}

function draw() {
  //background(220);
  translate(width / 2, height);
  if (animateTree) {
    background(256);
    moveTree(10, 100);
    time += 0.01;
  }
}

function mouseClicked() {
  if (animateTree) return;
  background(256);
  makeTree(random(5, 15), random(40, 150));
}

function keyTyped() {
  if (key == 's') animateTree = !animateTree;
}

function makeTree(size, length) {
  if (size < 1) return;
  strokeWeight(size);
  line(0, 0, 0, -length);
  let no = randomGaussian(4);
  for (let i = 0; i < no; i++) {
    push();
    translate(0, -length);
    rotate(random(-PI / 2, PI / 2));
    makeTree(size * random(0.5, 0.7), length * random(0.5, 0.7));
    pop();
  }
}

// Not very realistic
function moveTree(size, length) {
  if (size < 1) return;
  strokeWeight(size);
  line(0, 0, 0, -length);
  let no = 4;
  for (let i = 0; i < no; i++) {
    push();
    translate(0, -length);
    rotate(-PI + i * PI / 3+noise(time)*PI);
    moveTree(size * 0.6, length * 0.6);
    pop();
  }
}