let userName = prompt ('Please enter your name')

document.write(userName)

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