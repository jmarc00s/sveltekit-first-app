<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex flex-col items-center w-full">
	<h1 class="text-gray-800 text-3xl font-semibold">{data?.title}</h1>
	<p class="text-xl text-gray-500">{data.description}</p>
</section>
