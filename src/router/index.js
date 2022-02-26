import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import UsersList from '/src/components/UsersList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/UsersList',
        name: 'UsersList',
        component: UsersList
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router