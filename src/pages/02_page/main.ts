import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/index.scss'
import '@/assets/reset.css'

// 本项目已在 vite.config.ts 中配置了按需导入 ElementPlus 组件
// 但是如果直接使用 ElementPlus API，则需要手动引入样式
// 比如：import { ElMessage } from 'element-plus'
import "element-plus/theme-chalk/el-loading.css"
import "element-plus/theme-chalk/el-message.css"
import "element-plus/theme-chalk/el-notification.css"
import "element-plus/theme-chalk/el-message-box.css"

// 新版 epc 组件库
import MagicCom from '@cbim-epc-magic/components'

// 开发环境需要给一个jwt，跳过接口的登录验证
if (import.meta.env.DEV) {
  window.localStorage.setItem(
    'jwt',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxNzE0NTg5MjU4NjIzNDQyOTQ0Iiwic3ViIjoibG9naW4iLCJleHAiOjE3MTA1NTM4NTd9.Ft4Ezb65aDdNz6llMqnmDHOkg7rJEXwak5nvrObqCzc'
  )
}

const app = createApp(App)
app
  .use(router)
  .use(MagicCom, {})
  .mount('#app')
