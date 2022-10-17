const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            isVisible: false,
            userColor: 'salmon'
        }
    },
    computed: {
        visibility() {
            return { hidden: this.isVisible };
        }
    },
    methods: {
        setInputClass(event) {
            if(event.target.value === 'user1' || event.target.value === 'user2') {
                this.inputClass = event.target.value;
            } else {
                alert('\'' + event.target.value + '\' is an invalid input class.');
            }
        },
        setVisibility() {
            this.isVisible = !this.isVisible;
        },
        setUserColor(event) {
            this.userColor = event.target.value;
        }
    }
});

app.mount('#assignment');
