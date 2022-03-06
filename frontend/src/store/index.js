import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		usuario: null,
	},
	mutations: {
		definirUsuario(estado, usuario) {
			estado.usuario = usuario;
			if (usuario) {
				axios.defaults.headers.common[
					"Authorization"
				] = `bearer ${usuario.token}`;
			} else {
				delete axios.defaults.headers.common["Authorization"];
			}
		},
	},
	getters: {},
	actions: {},
	modules: {},
});
