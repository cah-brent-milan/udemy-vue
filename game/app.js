const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 1,
            logMessages: [],
            testMode: false,
        }
    },
    computed: {
        displayPlayerHealth() {
            if(this.playerHealth < 0) { this.playerHealth = 0 };
            return { width: this.playerHealth + '%'};
        },
        displayMonsterHealth() {
            if(this.monsterHealth < 0) { this.monsterHealth = 0};
            return { width: this.monsterHealth + '%'};
        },
        isSpecialAttackAvailable() {
            return  this.currentRound % 3 !== 0
        },
        isGameOver() {
            return this.isWin || this.isLoss || this.isDraw;
        },
        isWin() {
            return this.playerHealth > 0 && this.monsterHealth <= 0;
        },
        isLoss() {
            return this.playerHealth <= 0 && this.monsterHealth > 0;
        },
        isDraw() {
            return this.playerHealth <= 0 && this.monsterHealth <= 0;
        }
    },
    methods: {
        attack() {
            const attackValue = getRandom(5, 12);
            this.monsterHealth -= attackValue;
            this.addLog('Player', 'attacks', attackValue);
            this.reprisal();
            this.currentRound++;
        },
        specialAttack() {
            const attackValue = getRandom(10, 25);
            this.monsterHealth -= attackValue;
            this.addLog('Player', 'special attacks', attackValue);
            this.reprisal();
            this.currentRound++;
        },
        reprisal() {
            const attackValue = getRandom(8, 15);
            this.playerHealth -= attackValue;
            this.addLog('Monster', 'retaliates', attackValue);
        },
        heal() {
            const healing = getRandom(8, 20);
            this.playerHealth += healing;
            if (this.playerHealth > 100) { this.playerHealth = 100 }; 
            this.addLog('Player', 'heals', healing);
            this.reprisal();
            this.currentRound++;
        },
        surrender() {
            this.playerHealth = 0;
        },
        newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 1;
            this.logMessages = [];
        },
        forceDraw() {
            this.playerHealth = 0;
            this.monsterHealth = 0;
        },
        addLog(who, action, value) {
            this.logMessages.unshift(
                { 
                    actionBy: who, 
                    actionType: action, 
                    actionValue: value
                });
        }
    }
});

app.mount('#game');