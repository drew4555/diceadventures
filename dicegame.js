

  var dice1 = {
    sides: 4,
    roll: function (){
      var randomNumber4 = Math.floor(math.random() * this.sides ) + 1;
      return randomNumber4;
    }
  }
  var dice2 = {
    sides: 6,
    roll: function (){
      var randomNumber6 = Math.floor(Math.random() * this.sides ) + 1;
      return randomNumber6;
    }
  }
  var dice3 = {
    sides: 8,
    roll: function (){
      var randomNumber8 = Math.floor(Math.random() * this.sides ) + 1;
      return randomNumber8; 
    }
  }
  var dice4 = {
    sides : 10,
    roll: function (){
      var randomNumber10 = Math.floor(Math.random() * this.sides ) + 1;
      return randomNumber10;
    }
  }
  var dice5 = {
    sides : 12,
    roll: function (){
      var randomNumber12 = Math.floor(Math.random() * this.sides ) + 1;
      return randomNumber12;
    }
  }
  var dice6 = {
    sides: 20, 
    roll: function () {
      var randomNumber20 = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber20;
    }
  }
let player1,
  health = 100,
  power = 20,




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var button = document.getElementById('attack-button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  

const attack = () => {
  let attackButton =document.getElementById ("attack-button");
  let playerAttack = Math.floor (Math.random() * player.power);
  let gameMessage= document.getElementById ("game-message");
  opponent.health -= playerAttack;
  printToScreen();
  
  attackButton.disabled = true;
      
        gameMessage.innerText="opponent is about to strike!" 
        setTimeout(() => {
          let opponentAttack = Math.floor(Math.random() * opponent.power);
          player.health -= opponentAttack; 
          printToScreen();
          attackButton.disabled= false 
        },1000);

    }
const printToScreen = () => {
  document.getElementById ('opponent-health').innerText =
  opponent.health;

  document.getElementById ('player-health').innerText =
  player.health;

}
printToScreen


