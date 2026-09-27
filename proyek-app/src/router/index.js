import { createRouter, createWebHistory } from 'vue-router'
import Awal from '@/components/Awal.vue'
import Tentang from '@/components/Tentang.vue'
import Departemen from '@/components/Departemen.vue'

const routes = [
  {
    path: '/',
    name: 'Awal',
    component: Awal
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: Tentang
  },
  {
    path: '/dept/:departemen',
    name: 'Departemen',
    component: Departemen
  }
  // {
  //   path: '/departemen',
  //   name: 'Departemen',
  //   component: Departemen
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
