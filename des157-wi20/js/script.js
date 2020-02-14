function setup() {
    var myCanvas = createCanvas();
    createCanvas(1000, 250);
    frameRate(8);
    noStroke();
    background(0,0,0);
    myCanvas.parent(mySketch);
  }
  
  function draw() {
    if(mouseIsPressed) {
      fill(0);
    } else {
      fill(255,255,255,random(255));
    }
      var circSize = random(100);
    ellipse(mouseX, mouseY, circSize, circSize);
  }
  