<template>
	<div class="content">
		<router-view />
	</div>
</template>

<script>
	export default {};
</script>

<style>
	.content {
		grid-area: content;
		/* background-color: #d1cccc; */
		/* background-color: #708eb6; */
		background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
		/* background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%); */
		padding: 20px;
		/* background: linear-gradient(
							90deg,
							rgba(2, 0, 36, 1) 0%,
							rgba(9, 9, 121, 1) 35%,
							rgba(0, 212, 255, 1) 100%
						); */
	}
</style>