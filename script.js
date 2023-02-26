
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

function play_round() {

    let sign = prompt('Enter your choice');
    user_choice = sign.toLowerCase();
    var comp_hand = assigner();
    console.log('comp_hand = ', comp_hand);

    if (user_choice === comp_hand) {
        alert('DRAW')
        console.log('DRAW')
    }
    else if (user_choice === 'rock' && comp_hand === 'scissors'){
        alert('User wins with rock')
        return console.log('User wins with rock')
        
    }
    else if (user_choice === 'paper' && comp_hand === 'rock') {
        alert('User wins with paper')
        return console.log('User wins with paper')
        
    }
    else if (user_choice === 'scissors' && comp_hand === 'paper') {
        alert('user wins with scissors')
        return console.log('user wins with scissors')
       
    }
    else if (comp_hand === 'rock' && user_choice === 'scissors'){
        alert('Computer wins with rock')
        return console.log('Computer wins with rock')
        
    }
    else if (comp_hand === 'paper' && user_choice === 'rock') {
        alert('Computer wins with paper')
        return console.log('Computer wins with paper')
        
    }
    else if (comp_hand === 'scissors' && user_choice === 'paper') {
        alert('Compouter wins with scissors')
        return console.log('Computer wins with scissors')
        
    }
}

function game() {
    for (i = 1; i <= 5; i++){
        play_round()
    
    }
}

game()
