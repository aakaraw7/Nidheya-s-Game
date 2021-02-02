var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var player1,player2,position,position1;

function setup(){
  canvas = createCanvas(500,500);
  database=firebase.database();
 
  game=new Game();
  game.getState();
  game.start();
}

function draw(){

  if (gameState===1) {
    clear();
    game.play();
  }
  if (playerCount===2) {
  game.update(1)
  }
}
