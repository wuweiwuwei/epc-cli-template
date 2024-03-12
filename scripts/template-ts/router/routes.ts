import { RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
<<<<<<< HEAD
    component: () => import('@pages/页面名称/views/home/index.vue'),
=======
    component: () => import('@Project/项目名称/views/test/test.vue'),
>>>>>>> 4603f4cdb269f3726905af56ad1db8773ed5b612
    meta: { title: '首页' }
  }
]
