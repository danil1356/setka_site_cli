import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import {createBootstrap} from 'bootstrap-vue-next'

import Antd from "ant-design-vue";
import "@ant-design/icons-vue"

createApp(App)
    .use(store)
    .use(router)
    .use(createBootstrap())
    .use(Antd)
    .mount('#app')
