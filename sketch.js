const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;
var ground;
var ball,ball1;


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_option={
    isStatic :true
  }
  ground=Bodies.rectangle(200,380,400,10, ground_option);
  World.add(world,ground);
  
  var ball_option={
    restitution: 2.0
  }
  ball = Bodies.circle(200,100,20,ball_option);
  World.add(world,ball);

  var ball1_option={
    restitution: 1.0
  }
  ball1 = Bodies.circle(100,100,30,ball1_option);
  World.add(world,ball1);
  
  console.log(ground);
}

function draw() {
  background(200,0 ,200);  
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10)

  fill("red");
  ellipse(ball.position.x,ball.position.y,20,20);
  fill("yellow")
  ellipse(ball1.position.x,ball1.position.y,30,30);
}