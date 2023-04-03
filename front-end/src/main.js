// import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import router from './router/index'



// createApp(App).mount('#app')
new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')

// createApp(App).use(router).mount('#app')
