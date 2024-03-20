import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/index.scss'
import '@/assets/reset.css'

// element-plus 组件库
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 新版 epc 组件库
import MagicCom from '@cbim-epc-magic/components'
// 新版 epc 样式库
import '@cbim-epc-magic/styles'

// 开发环境需要给一个jwt，跳过接口的登录验证
if (window.location.host.includes('localhost')) {
  window.sessionStorage.setItem(
    'jwt',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxNzE0NTg5MjU4NjIzNDQyOTQ0Iiwic3ViIjoibG9naW4iLCJleHAiOjE3MTA1NTM4NTd9.Ft4Ezb65aDdNz6llMqnmDHOkg7rJEXwak5nvrObqCzc'
  )
}

const app = createApp(App)
app
  .use(ElementPlus, { locale: zhCn })
  .use(MagicCom, {})
  .use(router)
  .mount('#app')
