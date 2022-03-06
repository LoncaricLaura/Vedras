import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import UsersList from '/src/components/UsersList.vue'
import About from '/src/components/About.vue'
import Card from '/src/components/Card.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/UsersList',
        name: 'UsersList',
        component: UsersList,
    },
    {
        path: '/Card',
        name: 'Card',
        component: Card,
    },
    {
        path: '/About/:id',
        name: 'About',
        component: About,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router