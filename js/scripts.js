




//
//
// var all = new All()
//
// function All(){
//   this.eachRoll = []
// }
//
// All.prototype.addTurn = function(turn){
//   this.eachRoll.push(turn);
// }




function Player(){
  this.currentRoll = 0;
  this.currentScore= 0;
  // this.totalScore= [],
  // this.anotherArray = []
}


Player.prototype.newRoll = function(){
  this.currentRoll= Math.floor(Math.random()*6 +1);
  if(this.currentRoll === 1){
  this.currentScore = 0 + this.currentScore;
  player1Turn = !player1Turn
}else  {this.currentScore = this.currentRoll + this.currentScore;
  }
  if(this.currentScore >= 100)
  alert("WINNER!")
}


var player1 = new Player()
var player2 = new Player()
var player1Turn = true




// UI Logic
$(document).ready(function(){
  $("#click").click(function(event){
    event.preventDefault();
    if(player1Turn){
    player1.newRoll();
    $(".roll1").text(player1.currentRoll);
    $(".total1").text(player1.currentScore);
  }

  else {

    player2.newRoll();
    $(".roll2").text(player2.currentRoll);
    $(".total2").text(player2.currentScore);
    }
    if(player2.newRoll() === 1){
      player1Turn
    }


    console.log(player1)

    // var roll =  function roll(){
    //   return Math.floor(Math.random()*6 +1)
    // }








});
});
