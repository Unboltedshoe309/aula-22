//eu testei mas ele nao mostra nada eu vi e revi mas nao deu em nada
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
 
  angleMode(DEGREES);

  engine= Engine.create();
  world= engine.word;
  angleMode(DESGRESS)
  
    var options = {
    isStatic: true
  };

    playerbase= Bodies.rectangle(200,350,180,150,options);
    World.add(world,pklayerBase);

    player= Bodies.rectangle(250,playerBase.position.y - 160,50,180,options);
    World.add(world,player)  
  }

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  Image(base,playerBase.position.x,playerBase.y,180,150)
  Image(playerimage,player.position.x,playerBase.y,50,180)


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
