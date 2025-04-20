import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutFitSmartVue from '@/views/AboutFitSmart.vue'
import contactUsVue from '@/views/contactUs.vue'
// import signinDr from "@/views/signinDr.vue"
import webloglist from '@/views/webloglist.vue'
import blogDetail from '@/views/blogDetail.vue'
import menu from '@/views/menu.vue'
import cart from '@/views/cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutFitSmartVue
    },
   //  {
   //    path: '/faq',
   //    name: 'FrequentlyAskedQuestions',
   //    component: FrequentlyAskedQuestions
   //  },
   //  {
   //    path: '/list-doctor',
   //    name: 'ListDoctor',
   //    component: ListDoctor
   //  },
    {
      path: '/contact-us',
      name: 'contactUsVue',
      component: contactUsVue
    },
   //  {
   //    path: '/signin-dr',
   //    name: 'signInDr',
   //    component: signInDr
   //  },
   //  // {
   //  //   path: '/signin-dr',
   //  //   name: 'signinDr',
   //  //   component: signinDr
   //  // },
   //  {
   //    path: '/page-dr/:id',
   //    name: 'drPageVue',
   //    component: drPageVue
   //  },
    {
      path: '/weblogs',
      name: 'webloglist',
      component: webloglist
    },
    {
      path: '/blog-detail/:id',
      name: 'blogDetail',
      component: blogDetail
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.path.startsWith('/page-dr')) {
      return savedPosition ;
    }
    return { top: 0 };
  }

})

export default router
