let correctAnswer = 2319;

function guessingGame(){
    let useranswer = prompt ('What is the Monsters Inc. Child Terminoligy');
    while (useranswer <2000 || useranswer > 3000){
        useranswer = prompt ('Incorrect. Please try again');
    }
    let numberofguesses = 7
    for(let i = 0; i < numberofguesses; i++){
        if (useranswer == correctAnswer){
            alert('Congratulations');
            break;
        } else if (useranswer < correctAnswer){
            alert('Sorry, too low');
            useranswer = prompt('Incorrect. Please try again')
        } else if (useranswer > correctAnswer){
            alert('Sorry, too High');
            useranswer = prompt('Incorrect. Please try again')    
        }
    }
}
function printNumbers(){
    for(let i =0; i < 10; i++){
        document.write('<img>' img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bubbles_in_space.jpg/800px-Bubbles_in_space.jpg" </img>')
    }
}