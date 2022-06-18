var characterChoice = prompt("What is your choice? R, P,or S?");
var computerChoice = ["R", "P", "S"]
var wins = 0
var losses = 0
var ties = 0
var isPlayingGame = true

characterChoice = characterChoice.toUpperCase();

console.log(characterChoice);

computerChoice = computerChoice[Math.floor(Math.random(computerChoice) * 3)];


function playRound(choices, computerChoice) {
    
    if(choices !== "R"|| choices !== "P"|| choices !== "S" ) {
        alert("Please make a valid choice.");
      return null;
    }
    if (choices == computerChoice) {
        ties++
        alert('Eww... Tie');
    } else if (choices == 'R' && computerChoice == 'S') {
        wins++
        alert('Player Wins!');
    } else if (choices == 'S' && computerChoice == 'P') {
        wins++
        alert('Player Wins!');
    } else if (choices == 'P' && computerChoice == 'R') {
        wins++
        alert('Player Wins!');
    } else {
        losses++
      alert('Loser!');
    }
  }
  
playRound(characterChoice, computerChoice);




    //If we meet a win condition


            //tally the win

    //loss

            //tally the loss

    //tie

            //tally the tie