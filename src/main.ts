// vue
import { createApp, provide, h } from 'vue'

// Pinia
import { createPinia } from 'pinia'

// Apollo client
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './plugins/apollo'

// css styles
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './assets/main.scss'
import App from './App.vue'

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .use(createPinia())
  .mount('#app')
