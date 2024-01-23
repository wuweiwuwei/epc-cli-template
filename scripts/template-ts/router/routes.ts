import { RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@pages/页面名称/views/home/index.vue'),
    meta: { title: '首页' }
  }
]
