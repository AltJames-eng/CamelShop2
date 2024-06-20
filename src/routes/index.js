import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/Homepage.vue"
import Products from "./../components/Products.vue"
import AboutUs from "./../components/AboutUs.vue"
import ContactUs from "./../components/ContactUs.vue"
import Cart from "./../components/Cart.vue"
import ServicesOffered from "./../components/ServicesOffered.vue"
import Navbar from '@/components/Navbar.vue'

const routes = [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
    },
    {
        path: '/Products',
        name: 'Products',
        component: Products,
      },
      {
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs,
      },
      {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs,
      },
      {
        path: '/Cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path: '/ServicesOffered',
        name: 'ServicesOffered',
        component: ServicesOffered,
      },
      {
        path: '/Navbar',
        name: 'Navbar',
        component: Navbar,
      },    
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router