<script>
	import Navbar from '../components/navbar.svelte';
	import Content from '../components/content.svelte';
	import '../app.css';
</script>

<Navbar />

<Content>
	<slot />
</Content>
