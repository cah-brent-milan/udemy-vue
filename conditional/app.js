const app = Vue.createApp({
  data() {
    return { 
      userInput: '',
      goals: [],
      obj: { name: 'Bernie Sanders', age: 31 } 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.userInput);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
