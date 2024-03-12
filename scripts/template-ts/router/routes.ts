import { RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@Project/项目名称/views/test/test.vue'),
    meta: { title: '首页' }
  }
]
