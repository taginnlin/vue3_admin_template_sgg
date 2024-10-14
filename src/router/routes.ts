// 常量路由
export const constantRoute = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    // 命名空间
    name: 'layout',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
