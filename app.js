new Vue({
    el: "#app",
    data: {
        playerPoints: 0,
        brunoPoints: 0,
        gameIsRunning: false,
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerPoints = 0;
            this.brunoPoints = 0;
        }
    }
});
