const app = Vue.createApp({
    data() {
        return {
            aSelected: false,
            bSelected: false,
            cSelected: false,
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'a') {
                this.aSelected = true;
            } else if (box === 'b') {
                this.bSelected = true;
            } else if (box === 'c') {
                this.cSelected = true;
            }
        }
    }
});

app.mount('#styling');