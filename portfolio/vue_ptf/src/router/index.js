import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/home.vue'
import TestPage from '../pages/testing.vue'
import CurriculumVitae from '../pages/curriculum.vue'
import TestObject from '../pages/portfolioobject.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: HomePage
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  },
  {
    path: '/curriculumvitae',
    name: 'curriculumvitae',
    component: CurriculumVitae
  },
  {
    path: '/testobject',
    name: 'testobject',
    component: TestObject
  }
            // {
            //   path: '/about',
            //   name: 'about',
            //   // route level code-splitting
            //   // this generates a separate chunk (about.[hash].js) for this route
            //   // which is lazy-loaded when the route is visited.
            //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            // },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
