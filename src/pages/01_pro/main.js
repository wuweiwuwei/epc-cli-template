import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/index.scss'

// element-plus 组件库
import ElementPlus from 'element-plus' 
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 新版 epc 组件库
import MagicCom from '@cbim-epc-magic/components'
// 新版 epc 样式库
import '@cbim-epc-magic/styles'

const app = createApp(App)
app.use(router).use(ElementPlus,{locale: zhCn}).use(MagicCom,{}).mount('#app')
