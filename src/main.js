const Vue = require('vue');
const App = require('./App.vue');

new Vue({
  render: h => h(App),
}).$mount('#app');
