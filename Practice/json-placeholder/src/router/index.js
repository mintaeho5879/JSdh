import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/List.vue'),
    },
    {
      path: '/detail',
      component: () => import('@/views/Detail.vue'),
    },
    // detail 주소일 때, Detail.vue 마운트가 가능하게
    // 라우팅 내용 작성해주세요.
  ],
})

export default router
