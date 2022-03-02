<template>
	<div class="paginas-usuario">
		<div class="paginas-usuario-tabs">
			<b-card no-body>
				<ConfigUsuario />
			</b-card>
		</div>
	</div>
</template>

<script>
	import ConfigUsuario from "../../config/ConfigUsuario.vue";
	export default {
		components: {
			ConfigUsuario,
		},
	};
</script>

<style>
</style>