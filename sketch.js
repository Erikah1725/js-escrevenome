function setup() {
    createCanvas(400, 400);
      background("pink");
  }
  
  function draw() {
  
  
    stroke("rgb(255,0,119)");
    fill("rgb(248,161,190)");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 15);
    }
  }
  