class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      this.image = loadImage("dustbin.png")

      World.add(world, this.body);
    }
    display(){
      image(this.image,450,450,250,250);
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke ("gray")
      fill("gray");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  