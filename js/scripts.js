



// var game = new Game ()
//
// function Game(){
//   this.player1 = []
//   this.player2 = []
// }
//
// Game.prototype.player1Turn = function (){
// }
//
// console.log(game.player1)
//
//
//
// var all = new All()
//
// function Game(){
//   this.eachRoll = []
// }
//
// All.prototype.addTurn = function(turn){
//   this.eachRoll.push(turn);
// }
//
// console.log(all);
// //



function Player(){
  this.currentRoll = 0;
  this.currentScore= 0;
  // this.totalScore= [],
  // this.anotherArray = []
}


Player.prototype.newRoll = function(){
  this.currentRoll= Math.floor(Math.random()*6 +1);
}

Player.prototype.ones = function(){
  if(this.currentRoll === 1){
  this.currentScore = 0 + this.currentScore;
  turn = false
}
}

Player.prototype.ones2 = function(){
  if(this.currentRoll === 1){
  this.currentScore = 0 + this.currentScore;
  turn = true
}
}


Player.prototype.addScore = function(){
  this.currentScore = this.currentRoll + this.currentScore;
  }

Player.prototype.endTurn = function(){
  if(this.currentRoll === 1){
    turn = false
  }
}

Player.prototype.hold1 = function(){
  if(  turn = false){
    turn = true
  }
}

Player.prototype.hold2 = function(){
  if(  turn = true){
    turn = false
  }
}

 Player.prototype.winner = function(){
   if(this.currentScore >= 100){
   alert("WINNER!")
 }
}



var player1 = new Player()
var player2 = new Player()
var turn = true




// UI Logic
$(document).ready(function(){
  $("#click").click(function(event){
    event.preventDefault();
    if(turn){
    player1.newRoll();
    player1.ones();
    player1.addScore();
    player1.winner();
    $(".roll1").text(player1.currentRoll);
    $(".total1").text(player1.currentScore);
  }
  else {
    player2.newRoll();
    player2.ones2();
    player2.addScore();
    player2.winner();
    $(".roll2").text(player2.currentRoll);
    $(".total2").text(player2.currentScore);
    }
  });
  $("#hold1").click(function(){
    turn = false;
    });
  $("#hold2").click(function(){
    turn = true;
    });
});
