function guessingGame(guess) {
    this.number = Math.random(100)*100
    this.numGuesses = 0;
    this.guess = guess;
    this.on =true;
    
    return function guessNum(num){
       
        if(!this.on) return(`The game is over, you already won!`) 
        this.numGuesses++
        if(num === this.number){
            this.on = false
            return(`You win! You found ${this.number} in ${this.numGuesses} guesses.`)
        }else if(num > this.number){
            return(`${num} is too high!`)
        }else if(num < this.number){
            return(`${num} is too low!`)
        }
    }
}

module.exports = { guessingGame };
