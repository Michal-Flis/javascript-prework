function playGame(playerInput()){
    clearMessages()
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    //Ruch komputera
    /*if(randomNumber == 1){
    computerMove = 'kamień';
    }else if(randomNumber == 2){
        computerMove = 'papier'
    }else if(randomNumber == 3){
        computerMove = 'nożyce'
    }*/

    printMessage('Ruch komputera to:' + computerMove)

    //Ruch Gracza
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(randomNumber);

    /*if(playerInput == '1'){
    playerMove = 'kamień';
    }else if(randomNumber == 2){
        playerMove = 'papier'
    }else if(randomMove == 3){
        playerMove = 'nożyce'
    }*/

    printMessage('Twój ruch to: ' + playerMove);


    //Funkcja getMoveName
    function getMoveName(argMoveId){
        if(argMoveId == 1){
          return 'kamień';
        }else if(argMoveId == 2){
            return 'papier';
        }else if(argMoveId == 3){
            return 'nożyce';
        }
  

    //Wyniki
    function displayResult(argComputerMove, argPlayerMove){
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if( argComputerMove == 'kamień' && playerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Komputer wygrywa!');
        }else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Komputer wygrywa!');
        }else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!');
        }else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        }else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
        }else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        }else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Komputer wygrywa!');
        }else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis!');
        }


        //console.log

        console.log('moves:', argComputerMove, argPlayerMove);
}

playGame(3);

//test-button

document.getElementById('play-rock').addEventListener('click', function(){
    playGame('Guzik został kliknięty');
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('Guzik został kliknięty');
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('Guzik został kliknięty');
  });