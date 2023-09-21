<script>
	import { onMount } from 'svelte';

	let load = false;

	onMount(() => {
		load = true;
	});
</script>

<main
	class=" w-screen h-screen left-0 top-0 absolute flex flex-col items-center px-8 pt-4 pb-16 gap-4 bg-white overflow-scroll"
>
	{#if load}
		<slot />
	{/if}
</main>
