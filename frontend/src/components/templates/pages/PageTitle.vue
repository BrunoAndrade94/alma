<template>
	<div class="page-title">
		<h1><i v-if="icon" :class="icon" class="icon" />{{ title }}</h1>
		<h2>{{ sub }}</h2>
		<hr />
	</div>
</template>

<script>
	export default {
		props: ["icon", "title", "sub"],
	};
</script>

<style>
	.page-title .icon {
		color: #454545;
		font-size: 3rem;
		margin-right: 15px;
	}
	.page-title i {
		font-size: 1.8rem;
		padding: 5px;
	}
	.page-title h2 {
		color: rgb(47, 83, 201);
		margin-top: 5px;
		margin-left: 8px;
		font-size: 1.2rem;
	}
</style>