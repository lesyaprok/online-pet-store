import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Pages/Home/Home';
import Delivery from '@/components/Pages/Navigation/Delivery/Delivery';
import About from '@/components/Pages/Navigation/About/About';
import Contact from '@/components/Pages/Navigation/Contact/Contact';
import Categories from '@/components/Pages/Catalog/Categories/Categories';
import CatsCatalog from '@/components/Pages/Catalog/Categories/cats/CatsCatalog';
import CatsFeed from '@/components/Pages/Catalog/Categories/cats/CatsFeed';
import CatsAccessories from '@/components/Pages/Catalog/Categories/cats/CatsAccessories';
import CatsCare from '@/components/Pages/Catalog/Categories/cats/CatsCare';
import DogsCatalog from '@/components/Pages/Catalog/Categories/dogs/DogsCatalog';
import DogsFeed from '@/components/Pages/Catalog/Categories/dogs/DogsFeed';
import DogsAccessories from '@/components/Pages/Catalog/Categories/dogs/DogsAccessories';
import DogsCare from '@/components/Pages/Catalog/Categories/dogs/DogsCare';
import RodentsCatalog from '@/components/Pages/Catalog/Categories/rodents/RodentsCatalog';
import RodentsFeed from '@/components/Pages/Catalog/Categories/rodents/RodentsFeed';
import RodentsToys from '@/components/Pages/Catalog/Categories/rodents/RodentsToys';
import RodentsHouses from '@/components/Pages/Catalog/Categories/rodents/RodentsHouses';
import Cart from '@/components/Pages/Cart/Cart';
import Register from '@/components/Pages/Auth/Register';
import Login from '@/components/Pages/Auth/Login';
import PageNotFound from '@/components/Pages/PageNotFound/PageNotFound';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/delivery',
    component: Delivery
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/categories',
    component: Categories,
  },
  {
    path: '/cats',
    component: CatsCatalog
  },
  {
    path: '/cats/feed',
    component: CatsFeed
  },
  {
    path: '/cats/accessories',
    component: CatsAccessories
  },
  {
    path: '/cats/products_care',
    component: CatsCare
  },
  {
    path: '/dogs',
    component: DogsCatalog
  },

  {
    path: '/dogs/feed',
    component: DogsFeed
  },
  {
    path: '/dogs/accessories',
    component: DogsAccessories
  },
  {
    path: '/dogs/products_care',
    component: DogsCare
  },
  {
    path: '/rodents',
    component: RodentsCatalog
  },
  {
    path: '/rodents/feed',
    component: RodentsFeed
  },
  {
    path: '/rodents/toys',
    component: RodentsToys
  },
  {
    path: '/rodents/houses',
    component: RodentsHouses
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/*',
    component: PageNotFound
  }
]

export const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0, behavior: 'smooth' }
  }
})