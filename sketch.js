var hypnoticBall, database;
var position;
var playerCount = 0, gameState = 0
var allPlayers;
var distance = 0, form,player,Game


function setup(){
  database = firebase.database();
  console.log(database);

gameObj = new game()

gameObj.getState()
gameObj.start()
  
}

function draw(){
  if(playerCount == 4) {
    gameObj.update()
  }

  if(gameState == 1) {
    clear()
    gameObj.play()

  }
}



