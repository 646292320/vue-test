import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/views/Layout.vue'),
    children: [
      { path: '/', redirect: '/index' },
      { path: '/index', component: () => import('@/views/Home/index.vue') },
      { path: '/day1', component: () => import('@/views/day1/index.vue') },
      { path: '/day2', component: () => import('@/views/day2/index.vue') },
      { path: '/day3', component: () => import('@/views/day3/index.vue') },
      { path: '/day4', component: () => import('@/views/day4/index.vue') },
      { path: '/day5', component: () => import('@/views/day5/index.vue') },
      { path: '/day6/:id', component: () => import('@/views/day6/article.vue') },
      { path: '/day7', component: () => import('@/views/day7/index.vue') },
      { path: '/day8', component: () => import('@/views/day8/index.vue') },
      { path: '/day9', component: () => import('@/views/day9/index.vue') },
      { path: '/day10', component: () => import('@/views/day10/index.vue') },
      { path: '/day11', component: () => import('@/views/day11/index.vue') },
      { path: '/day12', component: () => import('@/views/day12/index.vue') },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
