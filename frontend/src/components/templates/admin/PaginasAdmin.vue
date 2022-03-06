<template>
	<div class="paginas-admin">
		<div class="paginas-admin-tabs">
			<b-card no-body>
				<b-tabs id="formulario" pills card lazy>
					<b-tab title="Usuários" active>
						<UsuariosAdmin />
					</b-tab>
					<b-tab title="Módulos">
						<Modulos />
					</b-tab>
					<b-tab title="Telas" disabled />
				</b-tabs>
			</b-card>
		</div>
	</div>
</template>

<script>
	import UsuariosAdmin from "./UsuariosAdmin.vue";
	import Modulos from "../entity/Modulos.vue";
	export default {
		nome: "PaginasAdmin",
		components: { UsuariosAdmin, Modulos },
	};
</script> 

<style>
	#formulario {
		background-color: rgb(214, 173, 173);
	}
</style>