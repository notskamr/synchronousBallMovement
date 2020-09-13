

class game {
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
  
    start(){
      if(gameState === 0){
        player = new playerClass()
        player.getCount();
        form = new Form()
        form.display();
      }
    }
    
async startFunction() {
  if(gameState == 0) {
    player = new playerClass()
    playerCountReference = await database.ref('playerCount').once('value')

    if(playerCountReference.exists() ){

      playerCount = playerCountReference.val()
      player.getCount()

      
    }
    form = new Form()
    form.display()
  }

}
    play(){
      form.hide()
      textSize(30)
      text('Game started!', 120, 100)
      Player.getPlayerInfo()

      if(allPlayers != undefined){
        var displayPosition = 130
        displayPosition += 20
        textSize(15)
        text(allPlayers [plr].name+ ' ' + allPlayers[plr].distance, 120, displayPosition)
      }
    }    
  }
