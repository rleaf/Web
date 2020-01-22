import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/home.vue'
import TestPage from '../pages/testing.vue'
import CurriculumVitae from '../pages/curriculum.vue'
import PortfolioTest from '../pages/portfolioObjects/portfolioObject.vue'
import expanseLink from '../pages/portfolioObjects/expanseObject.vue'

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
    path: '/cv',
    name: 'curriculumvitae',
    component: CurriculumVitae
  },
  {
    path: '/PortfolioTest',
    name: 'PortfolioTest',
    component: PortfolioTest
  },
  {
    path: '/expanse',
    name: 'expanse',
    component: expanseLink
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
