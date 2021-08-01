import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Report from "../views/Report.vue";
import Profile from "../views/Profile.vue";
import { authGuard } from "../auth";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/report",
            name: "report",
            component: Report,
            beforeEnter: authGuard
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile,
            beforeEnter: authGuard
        }
    ]
});

export default router;
