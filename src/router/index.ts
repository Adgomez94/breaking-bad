import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../modules/shared/pages/HomePage.vue'
import AboutPage from '../modules/shared/pages/AboutPage.vue'

import { characterRoute } from '../modules/characters/router'


const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    // Public
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
    // Characters
    {
      ...characterRoute,
      path: '/characters',
    },
    // Default
    { path: '/:pathMatch(.*)*', redirect:() =>({ name: 'home' }) }
  ]
})

// OTRA FORMA DE AGREGAR ROUTE
// path: '/characters
//router.addRoute(characterRoute)

export default router