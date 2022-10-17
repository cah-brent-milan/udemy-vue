const app = Vue.createApp({
  data() {
    return { 
      userInput: '',
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.userInput);
    }
  }
});

app.mount('#user-goals');
