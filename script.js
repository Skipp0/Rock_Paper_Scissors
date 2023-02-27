const body = document.querySelector('body')
const results = document.querySelector('.results');
const scoreBoard = document.createElement('div');
body.appendChild(scoreBoard);
let userScore = 0;
let compScore = 0;
let userScoreP = document.createElement('p');
let compScoreP = document.createElement('p');
scoreBoard.appendChild(compScoreP);
scoreBoard.appendChild(userScoreP);


function endGame() {
    if (userScore === 5){
        alert(`User scored ${userScore} points, the game is over`);
    }
    else if (compScore === 5){
        alert(`Comp scored ${compScore} points, the game is over`)
    }
}


function assigner() {

    let comp_choice = Math.floor(Math.random() * 3);
    if (comp_choice === 0) {
        var comp_hand = 'Rock';
    }
    else if (comp_choice === 1) {
        comp_hand = 'Paper';
    }
    else {
        comp_hand ='Scissors';
    }
    console.log('function assigner() return value = ', comp_hand)
    return comp_hand.toLowerCase();
    };

function play_round(choice) {

    user_choice = choice.toLowerCase();
    var comp_hand = assigner();
    var para = document.createElement('p')
    endGame();

    if (user_choice === comp_hand) {
        para.textContent = '\n DRAW'
        
    }
    else if (user_choice === 'rock' && comp_hand === 'scissors'){
        para.textContent = '\n user wins with rock';
        userScore += 1;
    }
    else if (user_choice === 'paper' && comp_hand === 'rock') {
        para.textContent = ('\n User wins with paper');
        userScore += 1;
    }
    else if (user_choice === 'scissors' && comp_hand === 'paper') {
        para.textContent = ('User wins with scissors');
        userScore += 1;
    }
    else if (comp_hand === 'rock' && user_choice === 'scissors'){
        para.textContent = ('\n comp wins with rock');
        compScore += 1;
    }
    else if (comp_hand === 'paper' && user_choice === 'rock') {
        para.textContent = ('\n Comp wins with paper');
        compScore += 1;
    }
    else if (comp_hand === 'scissors' && user_choice === 'paper') {
        para.textContent = ('\n comp wins with scissors');
        compScore += 1;
    }
    results.appendChild(para);
    compScoreP.textContent = `comp score = ${compScore}`;
    userScoreP.textContent = `user score = ${userScore}`;

}

const rock = document.querySelector('.Rock');
const paper = document.querySelector('.Paper');
const scissors = document.querySelector('.Scissors');

rock.addEventListener('click', () => {
    play_round('Rock')
})
paper.addEventListener('click', () => {
    play_round('Paper');
})
scissors.addEventListener('click', () => {
    play_round('Scissors')
})