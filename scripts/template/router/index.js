import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
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
})

router.afterEach((to, from, next) => {
  //遍历meta改变title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  window.scrollTo(0, 0)
})
export default router
