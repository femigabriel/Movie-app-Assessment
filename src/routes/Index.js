import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Home from "../view/Home.vue"
import { RouterView } from "vue-router"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: "/", component: Home },
    // { path: "/movies/:id", component: Details }
    { path: "/details", component: Details }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
