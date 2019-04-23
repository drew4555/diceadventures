

//   function startGame(dicegame) {
//     myGameArea.start();
// }

// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     }

  var dice1 = { //characture selection
    sides: 4,
    roll: function (){
      var randomNumber4 = Math.floor(Math.random() * this.sides ) + 1;
      return randomNumber4;
    }
  }
  var dice2 = {//movement 
    sides: 6,
    roll: function (){
      var randomNumber6 = Math.floor(Math.random() * this.sides ) + 1;
      return randomNumber6;
    }
  }
  var dice3 = {//attack 
    sides: 8,
    roll: function (){
      var randomNumber8 = Math.floor(Math.random() * this.sides ) + 1;
      return randomNumber8; 
    }
  }
  var dice4 = {//defence
    sides : 10,
    roll: function (){
      var randomNumber10 = Math.floor(Math.random() * this.sides ) + 1;
      return randomNumber10;
    }
  }
  var dice5 = {//boss die
    sides : 12,
    roll: function (){
      var randomNumber12 = Math.floor(Math.random() * this.sides ) + 1;
      return randomNumber12;
    }
  }
  var dice6 = {//random incounter die
    sides: 20, 
    roll: function () {
      var randomNumber20 = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber20;
    }
  }
  var player1 = {
    health: 100,
    power: 20,
    experience: 0,
  }
  var monster1 = {
    health: 30,
    power: 10,
  }
  var monster2 = {
    health: 40,
    power: 15,
  }
  var monster3 = {
    health: 50,
    power: 20,
  }
  var finalboss = {
    health: 100,
    power: 40
  }
  var currentPlayerHealth;
  var currentMonsterHealth;
  function(battle){
    
    
  // }

//char selection
// // let button = button.getElementById("charSelection");
// <button type="submit" class="btn btn-primary">Submit</button>


let result = dice1.roll();
  console.log (result);
  var imagefilepath;
  if (result === (1)){
    imagefilepath = "brutal-helm.svg";
  }
  else if (result === (2)){
    imagefilepath = "cultist.svg";
  }
  else if (result === (3)){
    imagefilepath = "elf-helmet.svg";
  }
  else if (result === (4)){
    imagefilepath = "dwarf-helmet.svg";
  }
   document.getElementById("image").src = imagefilepath;
  // let imgElement.src = imagefilepath;
  console.log (imagefilepath);
  
dice1.roll();

let movement = dice2.roll();
console.log (movement);
console.log ("characture moves" + " " + movement + " " + "spaces");

dice2.roll();
    
let randomEncounter = dice6.roll();
console.log (randomEncounter);
if (randomEncounter == 1 || randomEncounter == 3 || randomEncounter == 5 ||
  randomEncounter == 7){
 battle(monster1); console.log (monster1);
} 

  else if (randomEncounter == 9 || randomEncounter == 11 || randomEncounter == 13 ||
    randomEncounter == 15){
    battle(monster2); console.log(monster2);
  } 
    else if (randomEncounter == 17 || randomEncounter == 19 || randomEncounter == 20){
      battle(monster3); console.log (monster3);
    }
      else if (randomEncounter == 2 || randomEncounter == 4 || randomEncounter == 6 || randomEncounter == 8
        || randomEncounter == 10 || randomEncounter == 12 || randomEncounter == 14 ||
        randomEncounter == 16 ||randomEncounter == 18){
          console.log("no encounter this time");
        }

    
    
    
    
    
    
    
    
    
    
    
    
//     var button = document.getElementById('attack-button');
  
//   button.onclick = function() {
//     var result = dice.roll();
//     printNumber(result);
//   };
  

// const attack = () => {
//   let attackButton =document.getElementById ("attack-button");
//   let playerAttack = Math.floor (Math.random() * player.power);
//   let gameMessage= document.getElementById ("game-message");
//   opponent.health -= playerAttack;
//   printToScreen();
  
//   attackButton.disabled = true;
      
//         gameMessage.innerText="opponent is about to strike!" 
//         setTimeout(() => {
//           let opponentAttack = Math.floor(Math.random() * opponent.power);
//           player.health -= opponentAttack; 
//           printToScreen();
//           attackButton.disabled= false 
//         },1000);

//     }
// const printToScreen = () => {
//   document.getElementById ('opponent-health').innerText =
//   opponent.health;

//   document.getElementById ('player-health').innerText =
//   player.health;

// }
// printToScreen


