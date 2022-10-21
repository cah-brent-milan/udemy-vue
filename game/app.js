const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 1
        }
    },
    computed: {
        displayPlayerHealth() {
            return { width: this.playerHealth + '%'};
        },
        displayMonsterHealth() {
            return { width: this.monsterHealth + '%'};
        },
        isSpecialAttackAvailable() {
            return  this.currentRound % 3 !== 0
        },
        isGameOver() {
            return !this.playerHealth > 0 || !this.monsterHealth > 0;
        }
    },
    methods: {
        attack() {
            const attackValue = getRandom(5, 12);
            this.monsterHealth -= attackValue;
            this.reprisal();
            this.currentRound++;
        },
        specialAttack() {
            this.monsterHealth -= getRandom(10, 25);
            this.reprisal();
            this.currentRound++;
        },
        reprisal() {
            const attackValue = getRandom(8, 15);
            this.playerHealth -= attackValue;
        },
        heal() {
            const healing = getRandom(5, 10);
            this.playerHealth += healing;
            if (this.playerHealth > 100) { this.playerHealth = 100 }; 
            this.currentRound++;
        },
        surrender() {
            this.playerHealth = 0;
        }
    }
});

app.mount('#game');