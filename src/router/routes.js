const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: { hideHeader: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
    meta: { hideHeader: true }, // Add this meta property
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue'),
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: () => import('@/pages/Sponsors.vue'),
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import('@/pages/Students.vue'),
  },
]

export default routes
