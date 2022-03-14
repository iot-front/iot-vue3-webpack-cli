import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/childproject/apply',
    component: () => import(/* webpackChunkName: "apply" */ '@/views/apply/Index.vue'),
    name: 'apply',
    meta: {
      title: 'apply',
      affix: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  (router as any).matcher = (router as any).matcher // reset router
}

export default router
