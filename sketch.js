//var x = 50; ----> (This is speed)
//var y = 200;

//var speed_x = 5; ----> (speed_x and speed_y is Velocity)
//var speed_y = 1;

//position.y += velocity.y; ----> (Add velocity to position ref line 28)
//position.x += velocity.x;

//velocity.x += acceleration.x ----> (This is add acceleration to velocity ref line 29)
//velocity.y += acceleration.y


var position = new p5.Vector(50,200); // ----> (Vector of position)
var velocity =  new p5.Vector(0,0); // ----> (create Vector (x,y) of velocity)
var acceleration = new p5.Vector(0,0);// ----> (Vector of acceleration)
var mass = 1;


function setup() {
  createCanvas(400, 400);
  applyForce(new p5.Vector(1,-3) );
  applyForce(new p5.Vector(-3,5) );
  applyForce(new p5.Vector(4,1) );
}

function applyForce(force) {
  
    acceleration.add(force.div(mass) );
}

function update() {

  position.add(velocity);
  velocity.add(acceleration);
  acceleration = 0;

}

function draw() {
  background(220);
  
  fill(200,0,0);
  circle(position.x,position.y, 50);
  
  update();

  
}