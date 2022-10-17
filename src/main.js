import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mitt from 'mitt'
import 'bootstrap'
//loading畫面
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
//表單驗證
import {  Form, Field, ErrorMessage,defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize,setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { currency, date } from './method/filters'

const emitter = mitt()
const app=createApp(App)
app.config.globalProperties.$emitter = emitter
Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule]);
});
configure({
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale('zh_TW')
app.config.globalProperties.$filter = {
    currency,
    date
}
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.component('LoadIng', Loading)
app.component('FoRm', Form)
app.component('FieLd', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
