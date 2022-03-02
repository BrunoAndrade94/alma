<template>
	<header class="header">
		<Menu />
		<h1 class="title">
			<router-link to="/">
				<i class="fa-solid fa-cannabis" />
			</router-link>
			<span> Sistemas Alma</span>
		</h1>
	</header>
</template>

<script>
	import Menu from "../pages/Menu.vue";
	export default {
		components: { Menu },
	};
</script>

<style scope>
	.header {
		grid-area: header;
		background: linear-gradient(to right, #658a80, #4375a3);
		display: flex;
		justify-content: center;
		align-items: flex;
	}

	.title {
		font-size: 1.5rem;
		color: rgb(255, 255, 255);
		font-weight: 100;
		flex-grow: 1;
		text-align: left;
		padding: 5px;
		margin-top: 0.5rem;
		padding-left: 0px;
		flex-wrap: flex;
	}
	i {
		color: rgb(115, 202, 115);
	}
</style>