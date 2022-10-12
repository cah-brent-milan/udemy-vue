const app = Vue.createApp({
    data() {
        return {
            outputText: '',
            enteredText: ''
        }
    },
    methods: {
        showAlert() {
            alert('The Show Alert button has been pressed');
        },
        displayText(event) {
            this.outputText = event.target.value;
        },
        displayEnteredText(event) {
            this.enteredText = event.target.value;
        }
    }
})

app.mount('#assignment');