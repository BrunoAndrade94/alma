<template>
	<aside class="menu">
		<b-button class="menu-button" v-b-toggle.sidebar-menu variant="none" block>
			<i class="fa-solid fa-ellipsis-vertical" />
		</b-button>
		<b-sidebar
			lazy
			id="sidebar-menu"
			title="Menu Alma"
			shadow
			no-header
			bg-variant="dark"
			text-variant="light"
			:backdrop-variant="dark"
			backdrop
		>
			<template #footer="{}">
				<div class="bg-dark text-light align-items-center px-3 py-2">
					<strong class="mr-auto">Alma</strong>
				</div>
			</template>
			<h3 class="mt-3 px-4">Menu Alma</h3>
			<p class="mt-3 px-4">aqui tera arvore</p>
		</b-sidebar>
	</aside>
</template>

<script>
	export default {
		props: {
			hideMenu: Boolean,
		},
	};
</script>

<style scope>
	.menu-button {
		width: 50px;
		height: 100%;
		color: black;
		justify-self: flex-start;
		text-decoration: none;

		display: flex;
		justify-content: center;
		align-items: center;
	}
	.menu-button:hover {
		color: white;
	}
</style>