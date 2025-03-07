import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Roadmap from './components/Roadmap.vue'
import Quiz from './components/Quiz.vue'
import Resources from './components/Resources.vue'
import Notes from './components/Notes.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/roadmap', name: 'Roadmap', component: Roadmap },
  { path: '/quiz', name: 'Quiz', component: Quiz },
  { path: '/resources', name: 'Resources', component: Resources },
  { path: '/notes', name: 'Notes', component: Notes },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
