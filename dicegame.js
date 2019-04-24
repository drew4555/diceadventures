function game(){
  //dice//
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

    //MOBS//
    var player1 = {
      health: 100,
      power: 20,
    }
    var monster1 = {
      health: 10,
      power: 10,
      trait: "goblin"
    }
     var finalboss = {
      health: 40,
      power: 40,
      trait: "Dragon"

    }
    var monster2 = {
      health: 20,
      power: 15,
      trait: "Bridge Troll"
    }
    var monster3 = {
      health: 30,
      power: 20,
      trait: "Slime"
    }
   let totalSpaces = 30;
    let currentPosition = 1;
    CharSelect();
    while (totalSpaces > currentPosition){
      move();
      randEnc();
    

  }    
  
 
  
  
    

  
    
    
    
    

    //functions
function battle(currentMonster){

  while(player1.health > 0 && currentMonster.health > 0){
    console.log("Current Player Health" + " " + player1.health);
    console.log("Current Monster Health" + " " + currentMonster.health);
    let playerAttack = dice3.roll();
    let playerDefense = dice4.roll();
    let monsterAttack = dice3.roll();
    let monsterDefense = dice4.roll();
    if (playerAttack > monsterDefense){
      currentMonster.health -= (playerAttack-monsterDefense);
      console.log("Current Player Health" + " " + player1.health)
    }
    else{
      console.log("you did no damage");
    }
    if (monsterAttack > playerDefense){
      player1.health -=(monsterAttack-playerDefense);
      console.log("Current monster Health" + " " + currentMonster.health);
    }
    else{
    console.log('the monster did no damage');
    }
    if (player1.health <= 0){
      
      console.log ("Game Over");
      break;
    }
    else if(finalboss.health <= 0){
      console.log("Congratulations You Beat the Final Boss");
      break;
    }
  }
  }
function CharSelect(){
  let result = dice1.roll();
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
  console.log (imagefilepath); 
}


function move(){
  console.log ("Currently at space" + " " + currentPosition);  
  currentPosition = dice2.roll() + currentPosition;
  console.log ("characture moves" + " " + dice2.roll() + " " + "spaces");

  if (currentPosition >= totalSpaces){
    console.log("Final Boss!")
    battle(finalboss);
    
  }
}



function randEnc(){

// if(currentPosition >= fina)
// {
//   sdlfasldkfj
// }
// else{


let randomEncounter = dice6.roll();
if (randomEncounter == 1 || randomEncounter == 3 || randomEncounter == 5 ||
  randomEncounter == 7){

 battle(monster1); console.log ("goblin");
 
}
  else if (randomEncounter == 9 || randomEncounter == 11 || randomEncounter == 13 ||
    randomEncounter == 15){
    battle(monster2); console.log("Bridge Troll");
    
  
  } 
    else if (randomEncounter == 17 || randomEncounter == 19 || randomEncounter == 20){
      battle(monster3); console.log ("slime");
      
    }
      else if (randomEncounter == 2 || randomEncounter == 4 || randomEncounter == 6 || randomEncounter == 8
        || randomEncounter == 10 || randomEncounter == 12 || randomEncounter == 14 ||
        randomEncounter == 16 ||randomEncounter == 18){
          console.log("no encounter this time");
          
        }
      }
    }


function display(player1, currentPosition){
  console.log("current Player Health" + " " + player1.health);
  console.log("Current Position" + " " + currentPosition);
}


game();