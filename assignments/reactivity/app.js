const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            result: ''
        };
    },
    watch: {
        result() {
           let that = this;
           setTimeout( () => {
            this.counter = 0;
            this.result = '';
           }, 10000) 
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
            this.setResult();
        },
        setResult() {
            if (this.counter < 37) {
                this.result = 'Not there yet';
            } else if (this.counter > 37) {
                this.result = 'Too much!';
            } else {
                this.result = 'Perfect!';
            }
        }
    }
})

app.mount('#assignment');