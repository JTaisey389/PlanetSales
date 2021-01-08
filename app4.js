// let userName = prompt ('Please enter your name')

// document.write(userName)

let correctAnswer = 2319;

function guessingGame(){
    let useranswer = prompt ('In Monsters Inc. What is the term the charecters use to delcare a child breach');
    while (useranswer < 1 || useranswer > 3000){
        useranswer = prompt ('Incorrect. Please try again');
    }
    let numberofguesses = 7
    for(let i = 0; i < numberofguesses; i++){
        if (useranswer == correctAnswer){
            alert('Congratulations');
            printNumbers()
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
guessingGame()


function printNumbers(){
    for(let i =0; i < 3; i++){
        document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bubbles_in_space.jpg/800px-Bubbles_in_space.jpg">')
    }
}