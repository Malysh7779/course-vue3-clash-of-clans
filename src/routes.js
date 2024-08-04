import { createRouter, createWebHashHistory } from "vue-router"

const routerHistory = createWebHashHistory()

import HomePage from "./pages/home.vue"
import AboutPage from "./pages/about.vue"
import NotFoundPage from "./pages/notFound.vue"

const routes = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            // path: '/:PathMatch(.*)*',
            path: '/:CatchAll(.*)',
            name: '404',
            component: NotFoundPage,
        }
    ]
})

export default routes;