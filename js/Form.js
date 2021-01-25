class Form {
  constructor() {
    
  }

  display(){
    // h1 to h6 used html here.
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    //created the input box to write the name.
    var input = createInput("Name");
    // created another button play.
    var button = createButton('Play');
    // given the values.
    input.position(130, 160);
    button.position(250, 200);

    // to hide the input boxes and will hide the button box also.
      button.mousePressed(function(){
      input.hide();
      button.hide();
    // player will write their name.
      var name = input.value();
      // as the player increases the playerCount will also increase.
      playerCount+=1;
      // the name will be updated in the database.
      player.update(name)
      // will update the playerCount.
      player.updateCount(playerCount);
      // created for the output of hello riddhima.
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      // allotted the position.
      greeting.position(130, 160)
    });

  }
}
