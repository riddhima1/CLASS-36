class Player {
  constructor(){}

  getCount(){

    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
     // '/' referes to the main database inside which the gamestate was created.
    database.ref('/').update({
      playerCount: count
    });
  }

  update(name){
    // will hold the player information(player's name) and also the player count.
    var playerIndex = "player" + playerCount;
    // set is to write the data.
    database.ref(playerIndex).set({
      // the name which you will enter.
      name:name
    });
  }
}
