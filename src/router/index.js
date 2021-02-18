import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Main from '../components/Main.vue'
import Index from '../components/Index.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/main', component: Main },
  { path: '/index', component: Index }
]

const permitThrougn = [
  '/login', '/main', '/index'
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(permitThrougn.indexOf(to.path))
  if (permitThrougn.indexOf(to.path) !== -1) return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
