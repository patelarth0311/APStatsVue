import { createRouter, createWebHistory } from 'vue-router'
import PolicyView from "../views/PolicyView.vue"
import FeaturesView from "../views/FeaturesView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/privacypolicy', component: PolicyView},
    {path: '/', component: FeaturesView}
  ]
})

export default router
