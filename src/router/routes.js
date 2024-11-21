const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: { hideHeader: true, hideToolbar: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
    meta: { hideHeader: true, hideToolbar: true },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue'),
    meta: { hideToolbar: true, requiresAuth: true },
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: () => import('@/pages/Sponsors.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import('@/pages/Students.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/sponsor-details/:sponsorId',
    name: 'SponsorDetails',
    component: () => import('@/pages/SponsorDetails.vue'),
    meta: { requiresAuth: true, hideToolbar: true },
  },
  {
    path: '/student-details/:studentId',
    name: 'StudentDetails',
    component: () => import('@/pages/StudentDetails.vue'),
    meta: { requiresAuth: true, hideToolbar: true },
  },
]

export default routes
