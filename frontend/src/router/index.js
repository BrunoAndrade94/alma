import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/templates/home/Home.vue";
import PaginasUsuarios from "../components/templates/pages/page/PaginasUsuarios.vue";
import PaginasAdmin from "../components/templates/admin/PaginasAdmin.vue";
import Autenticar from "../components/auth/Autenticar.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/configurarUsuario",
		name: "configUsuario",
		component: PaginasUsuarios,
	},
	{
		path: "/administracao",
		name: "administracao",
		component: PaginasAdmin,
	},
	{
		path: "/autenticar",
		name: "autenticar",
		component: Autenticar,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	// base: process.env.BASE_URL,
	routes,
});

export default router;
