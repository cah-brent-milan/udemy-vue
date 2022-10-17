const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            tasks: [],
            isVisible: true
        }
    },
    computed: {
        visibilityButtonText() {
            return this.isVisible ? 'Hide List' : 'Show List'; 
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.userInput);
        },
        setVisiblity() {
            this.isVisible = !this.isVisible;
        }
    }
})

app.mount('#assignment');