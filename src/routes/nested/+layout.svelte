<script>
	import Title from '../../components/title.svelte';
</script>

<svelte:head>
	<title>Nested routes</title>
</svelte:head>

<Title>Nested routes page</Title>

<a href="/nested/first">First page</a> |
<a href="/nested/second">Second page</a>

<section class="p-8">
	<slot />
</section>
