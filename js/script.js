let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';
//Ruch komputera
if(randomNumber == 1){
  computerMove = 'kamień';
}else if(randomNumber == 2){
    computerMove = 'papier'
}else if(randomNumber == 3){
    computerMove = 'nożyce'
}

printMessage('Ruch komputera to:' + computerMove)

//Ruch Gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}else if(randomNumber == 2){
    playerMove = 'papier'
}else if(randomMove == 3){
    playerMove = 'nożyce'
}

printMessage('Twój ruch to: ' + playerMove);

//Wyniki
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }else if(computerMove == 'papier' && playerMove == 'kamień'){
      printMessage('Komputer wygrywa!');
  }else if(computerMove == 'kamień' && playerMove == 'nożyce'){
      printMessage('Komputer wygrywa!');
  }else if(computerMove == 'kamień' && playerMove == 'kamień'){
      printMessage('Remis!');
  }else if(computerMove == 'papier' && playerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
  }else if(computerMove == 'papier' && playerMove == 'papier'){
      printMessage('Remis!');
  }else if(computerMove == 'nożyce' && playerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
  }else if(computerMove == 'nożyce' && playerMove == 'papier'){
      printMessage('Komputer wygrywa!');
  }else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
      printMessage('Remis!');
  }