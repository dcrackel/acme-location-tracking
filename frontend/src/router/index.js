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
            component: Home,
            meta: {
                title: 'Acme Tracker - Example App',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Example of a application using Vue.js, Express/Node.js & Mongo.db'
                    },
                    {
                        property: 'og:description',
                        content: 'Example of a application using Vue.js, Express/Node.js & Mongo.db'
                    }
                ]
            }
        },
        {
            path: "/report",
            name: "report",
            component: Report,
            beforeEnter: authGuard,
            meta: {
                title: 'Acme Tracker Reports - Example App',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Example of a application using Vue.js, Node.js & Mongo.db'
                    },
                    {
                        property: 'og:description',
                        content: 'Example of a application using Vue.js, Node.js & Mongo.db'
                    }
                ]
            }
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
