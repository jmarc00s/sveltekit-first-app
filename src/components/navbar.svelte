<script>
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';
</script>

<Navbar navClass="border-b-2" let:hidden let:toggle>
	<NavBrand href="/" class="pl-2">
		<span
			class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
		>
			SvelteKit first app
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
	</NavUl>
</Navbar>
