import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Home from "@/views/Home.vue";
import Verification from "@/views/Verification.vue";
import ResetCredentials from "@/views/ResetCredentials.vue";
import Profile from '@/views/Profile.vue'
import store from "@/store";
import { AuthVM } from "@/models/viewmodel/auth.viewmodel";
import { AccountStatus } from "@/models/Enum/AccountStatus";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Landingspage",
    component: Landingpage
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: {
      
      requiresAuth: true,
      
    }
  },
  {
    path: "/profile/:name",
    name: "Profile",
    component: Profile,
    meta: {
      
      requiresAuth: true,
      
    }
  },
  {
    path: "/Verification",
    name: "Verification",
    component: Verification
  },
  {
    path: "/ResetCredentials",
    name: "ResetCredentials",
    component: ResetCredentials
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const user: AuthVM = store.getters.getUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !user) next({ name: "Landingspage" });
  else if (
    requiresAuth &&
    !!user &&
    (user.accountStatus as AccountStatus) === AccountStatus.pending
  )
    next({ name: "Verification" });
  else if (
    requiresAuth &&
    !!user &&
    (user.accountStatus as AccountStatus) === AccountStatus.activated
  )
    next();
  else if (
    requiresAuth &&
    !!user &&
    (user.accountStatus as AccountStatus) === AccountStatus.disabled
  )
    next({ name: "" });
  else next();
});

export default router;
