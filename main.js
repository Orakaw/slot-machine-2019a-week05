var total = 100;

document.getElementById('minBet').addEventListener("click", function(){

  var slotOne = randomReel()
  var slotTwo = randomReel()
  var slotThree = randomReel()

  if( checkMatch(slotOne, slotTwo, slotThree) ){
    total = total + 25;
  }else{
    total = total - 1;
  }
  document.getElementById('total').innerHTML = total;
});

document.getElementById('maxBet').addEventListener("click", function(){

  var slotOne = randomReel()
  var slotTwo = randomReel()
  var slotThree = randomReel()

  if( checkMatch(slotOne, slotTwo, slotThree) ){
    total = total + 250;
  }else{
    total = total - 25;
  }

  document.getElementById('total').innerHTML = total;
});


function randomReel(){


  var choice = Math.random()
  if (choice <= .2){
    choice = "cherry"
  }else if(choice <= .4){
    choice = "bar"
  }else if(choice <= .6){
    choice = "seven"
  }else if(choice <= .8){
    choice = "bell"
  }else{
    choice = "moneyBag"
  }

  return choice;

}

function checkMatch(reel1,reel2,reel3){
  if( reel1 === reel2 && reel1 === reel3 ){
    return true
  }else{
    return false
  }
}
