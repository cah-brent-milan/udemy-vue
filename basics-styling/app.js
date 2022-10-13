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
                this.aSelected = !this.aSelected;
            } else if (box === 'b') {
                this.bSelected = !this.bSelected;
            } else if (box === 'c') {
                this.cSelected = !this.cSelected;
            }
        }
    }
});

app.mount('#styling');