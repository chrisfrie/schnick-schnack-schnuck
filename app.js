new Vue({
    el: "#app",
    data: {
        playerPoints: 0,
        brunoPoints: 0,
        gameIsRunning: false,
        playerChoice: '',
        brunoChoice: '' 
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerPoints = 0;
            this.brunoPoints = 0;
        },
        choiceCard: function(choice){
            console.log(choice);
            this.playerChoice = choice;
            this.calculateBrunoChoice();
            this.calculateWinnerPoints();
            this.checkWin()
        },
        calculateBrunoChoice: function(){
            let x = Math.random();
            if(x <= 0.33){
                this.brunoChoice = 'rock';
            } else if( x <= 0.66 && x > 0.33){
                this.brunoChoice = 'scissor';
            } else {
                this.brunoChoice = 'paper';
            }
        },
        checkWin: function(){
            if(this.playerPoints >= 3){
                if(confirm('You wone! New game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.brunoPoints >= 3){
                if(confirm('You lost! New game?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        calculateWinnerPoints: function() {
            if(this.playerChoice == 'rock' && this.brunoChoice == 'rock'){
                this.playerPoints += 0;
                this.brunoPoints += 0;
            } else if(this.playerChoice == 'rock' && this.brunoChoice == 'scissor'){
                this.playerPoints += 1;
                this.brunoPoints += 0;
            } else if(this.playerChoice == 'rock' && this.brunoChoice == 'paper'){
                this.playerPoints += 0;
                this.brunoPoints += 1;
            }  else if(this.playerChoice == 'scissor' && this.brunoChoice == 'rock'){
                this.playerPoints += 0;
                this.brunoPoints += 1;
            } else if(this.playerChoice == 'scissor' && this.brunoChoice == 'scissor'){
                this.playerPoints += 0;
                this.brunoPoints += 0;
            } else if(this.playerChoice == 'scissor' && this.brunoChoice == 'paper'){
                this.playerPoints += 1;
                this.brunoPoints += 0;
            } else if(this.playerChoice == 'paper' && this.brunoChoice == 'rock'){
                this.playerPoints += 1;
                this.brunoPoints += 0;
            } else if(this.playerChoice == 'paper' && this.brunoChoice == 'scissor'){
                this.playerPoints += 0;
                this.brunoPoints += 1;
            } else {
                this.playerPoints += 0;
                this.brunoPoints += 0;
            }
        }
    }
});
