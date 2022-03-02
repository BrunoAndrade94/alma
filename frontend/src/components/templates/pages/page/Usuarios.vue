<template>
	<div class="pages-users">
		<div class="pages-users-tabs">
			<b-card no-body>
				<b-tabs pills card lazy>
					<b-tab title="Usuário" active>
						<Users />
					</b-tab>
					<b-tab title="Em manutenção.." disabled> </b-tab>
				</b-tabs>
			</b-card>
		</div>
	</div>
</template>

<script>
	import Users from "../templates/config/Users.vue";
	export default {
		components: { Users },
	};
</script>

<style>
</style>