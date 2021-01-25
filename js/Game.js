class Game {
  constructor(){}
  
  getState(){
    // ref is for the reference.
    var gameStateRef  = database.ref('gameState');
    // on is to read the values.
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    // '/' referes to the main database inside which the gamestate was created.
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    // as the players increase the playercount will get updated and aslo a new player will get
    // a new form .
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
