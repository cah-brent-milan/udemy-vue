const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h3>Master Vue and conquer the world</h3>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() { 
            return this.courseGoalA;
        },
        outputGoalB() {
            return this.courseGoalB;
        }
    }
});

// CSS section id in template
app.mount('#user-goal');

const eventApp = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        confirmedName: ''
      };
    },
    methods: {
        increase() {
            this.counter += 1;
        },
        decrease() {
            this.counter -= 1;
        }, 
        increaseBy(customNumber) {
            this.counter += customNumber;
        },
        setName(event) {
            // use $event in template when using additional args
            this.name = event.target.value;
        },
        confirmName(event) {
            this.confirmedName = event.target.value;
        },
        submitForm() {
            // event.preventDefault();
            alert('Submitted!');
        }
    }
  });
  
  eventApp.mount('#events');