






var all = new All()

function All(){
  this.eachRoll = []
}

All.prototype.addTurn = function(turn){
  this.eachRoll.push(turn);
}


// function Turn(score, count, total){
//   this.score = parseInt(score);
//   this.count = 0
//   this.total = []
// }
//
//
// Turn.prototype.total = function(){
//   var total = this.count + roll();
//   return total
//   this.total.push(total)
// }

// var score = new Score ();


function Player(){
  this.currentRoll = 0;
  this.currentScore= 0;
  // this.totalScore= [],
  // this.anotherArray = []
}



Player.prototype.newRoll = function(){
  this.currentRoll= Math.floor(Math.random()*6 +1);

  // return this.currentRoll
  this.currentScore = this.currentRoll + this.currentScore;
}


Player.prototype.totalScore = function(){

}

var newPlayer = new Player()
newPlayer.newRoll()
// newTurn.totalScore()
console.log(newPlayer.currentRoll)
// console.log(newPlayer.totalScore)
console.log(newPlayer.currentScore)






// UI Logic
$(document).ready(function(){
  $("#click").click(function(event){
    event.preventDefault();
    newTurn.newRoll();

    // var roll =  function roll(){
    //   return Math.floor(Math.random()*6 +1)
    // }








});
});
