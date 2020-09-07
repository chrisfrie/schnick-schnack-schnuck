new Vue({
    el: "#app",
    data: {
        playerPoints: 0,
        brunoPoints: 0,
        gameIsRunning: false,
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerPoints = 0;
            this.brunoPoints = 0;
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
            if(playerChoice == 'rock' && brunoChoice == 'rock'){
                this.playerPoints += 0;
                this.brunoPoints += 0;
            } else if(playerChoice == 'rock' && brunoChoice == 'scissor'){
                this.playerPoints += 1;
                this.brunoPoints += 0;
            } else if(playerChoice == 'rock' && brunoChoice == 'paper'){
                this.playerPoints += 0;
                this.brunoPoints += 1;
            }  else if(playerChoice == 'scissor' && brunoChoice == 'rock'){
                this.playerPoints += 0;
                this.brunoPoints += 1;
            } else if(playerChoice == 'scissor' && brunoChoice == 'scissor'){
                this.playerPoints += 0;
                this.brunoPoints += 0;
            } else if(playerChoice == 'scissor' && brunoChoice == 'paper'){
                this.playerPoints += 1;
                this.brunoPoints += 0;
            } else if(playerChoice == 'paper' && brunoChoice == 'rock'){
                this.playerPoints += 1;
                this.brunoPoints += 0;
            } else if(playerChoice == 'paper' && brunoChoice == 'scissor'){
                this.playerPoints += 0;
                this.brunoPoints += 1;
            } else {
                this.playerPoints += 0;
                this.brunoPoints += 0;
            }
        }
    }
});
