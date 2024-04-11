/*
 * @Author: Wanko
 * @Date: 2024-04-11 09:48:05
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-11 10:08:46
 * @Description:
 */
import 'caring-css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
