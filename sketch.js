const Engine = Matter.Engine,
 World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
//var score =0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(450,690);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
   for (var j = 25; j <=width; j=j+49) {
      plinkos.push(new Plinko(j,70));
   }

   for (var j = 30; j <=width-10; j=j+55) {
      plinkos.push(new Plinko(j,150));
   }

   for (var j = 25; j <=width; j=j+49) {
      plinkos.push(new Plinko(j,230));
   }

   for (var j = 30; j <=width-10; j=j+55) {
      plinkos.push(new Plinko(j,310));
   }
}
 
function draw() {
  background("black");
  textSize(35)
 // text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);

  Engine.update(engine);
  ground.display();
  
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
 
}


function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}