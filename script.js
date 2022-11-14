// pick random numbers for random location from 0 to size
var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
  };
  
  // calculating the distance between the click and the treasure
  var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffY) + (diffY * diffY));
  };

  // reload the page to start new game
  var newGame = function () {
    $("#new-game").text("Play Again? Click Me.").click(function () {
      location.reload();
    })
  };
  
  // telling the player how close they are
  var getDistanceHint = function (distance) {
    if (distance < 30) {
      return "Boiling hot!";
    } else if (distance < 50) {
      return "Really hot!";
    } else if (distance < 100) {
      return "Hot";
    } else if (distance < 180) {
      return "Warm";
    } else if (distance < 260) {
      return "Cold";
    } else if (distance < 450) {
      return "Really cold";
    } else {
      return "Freezing!";
    }
  };
  
  // setting the treasure coordinates
  var width = 450;
  var height = 450;
  var clicks = 0;
  var attempts = 10;
  
  // setting the target
  var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
  };
  
  // click handler
  $("#map").click(function (event) {
    clicks++;
    // get distance between click event and target
    var distance = getDistance(event, target);
    // convert distance to a hint
    var distanceHint = getDistanceHint(distance);
    // update the #distance element with the new hint and number of clicks
    $("#distance").text(distanceHint);
    $("#clicks-left").text("You have only " + (attempts - clicks) + " clicks left")
    // checking if the player won
    if (distance < 10) {
      $("#distance").text("YOU FOUND IT in " + clicks + " clicks!!!");
      document.querySelector(".container").style.backgroundColor = 'green';
      //alert("YOU WIN!! Found the treasure in " + clicks + " clicks!");
      newGame();
    }
    // set the maximum of click to 20, this means game over
    if (clicks === 10) {
      $("#distance").text("NO..GAME OVER!!");
      document.querySelector(".container").style.backgroundColor = 'red';
      //alert("Sorry, you didn't find the treasure!!");
      newGame();
    } 
  });

 
  
  
  