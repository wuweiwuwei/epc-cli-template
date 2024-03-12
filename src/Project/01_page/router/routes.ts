import { RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@Project/01_page/views/home/home.vue'),
    meta: { title: '首页' }
  }
]
