class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState===0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
  }
  player1=createSprite(100,200);
  player2=createSprite(300,200);
  player1.shapeColor='blue'
  player2.shapeColor='orange'
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background('white');

       var index = 0;
       var x = 175 ;
       var y=200;

      if (keyDown('left')) {
        write(-5,0)
      }
      if (keyDown('right')) {
        write(5,0)
      }
      if (keyDown('a')) {
        write1(-5,0)
      }
      if (keyDown('d')) {
        write1(5,0)
      }

      for(var plr in allPlayers){
        index = index + 1 ;
        x = displayHeight - allPlayers[plr].distance;
        y = displayHeight - allPlayers[plr].distance;
        
      }
    }
    function write(x,y){
      database.ref('players/player1/position').update({
        'x':150,
        'y':200
      });
    }
    function write1(x,y){
      database.ref('players/player2/position').update({
        'x':150,
        'y':200,
      });
    }

    drawSprites();
  }
}