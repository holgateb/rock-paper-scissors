var characterChoice = prompt("What is your choice? R, P,or S?");

var choices = ["R", "P", "S"]

var computerChoice = ["R", "P", "S"]

// console.log(characterChoice);

computerChoice = (Math.floor(Math.random(computerChoice) * 3));

function playRound(choices, computerChoice) {
    if (choices == computerChoice) {
        alert('TIE GAME!!');
    } else if (choices == 'Rock' && computerChoice == 'Scissors') {
        alert('player wins!');
    } else if (choices == 'Scissors' && computerChoice == 'Paper') {
        alert('player wins!');
    } else if (choices == 'Paper' && computerChoice == 'Rock') {
        alert('player wins!');
    } else {
      alert('You Lose!');
    }
  }
  
playRound(characterChoice, computerChoice);




    //If we meet a win condition


            //tally the win

    //loss

            //tally the loss

    //tie

            //tally the tie