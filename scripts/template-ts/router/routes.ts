import { RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@pages/页面名称/views/index.vue'),
    meta: { title: '首页' }
  }
]
