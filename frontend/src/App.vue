<template>
	<div id="app">
		<Header />
		<Content />
		<Footer />
	</div>
</template>

<script>
	import Header from "./components/templates/pages/Header.vue";
	import Content from "./components/templates/pages/Content.vue";
	import Footer from "./components/templates/pages/Footer.vue";
	export default {
		components: { Header, Content, Footer },
	};
</script>

<style>
	* {
		font-family: "Lato", sans-serif;
	}
	body {
		margin: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 300px 1fr;
		grid-template-areas:
			"header header"
			"content content"
			"footer footer";
	}
</style>
