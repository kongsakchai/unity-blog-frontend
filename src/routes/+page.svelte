<script lang="ts">
	import type { PageData } from './$types';

	import Card from '$lib/components/common/card.svelte';
	import PageTransition from '$lib/components/layouts/page-transition.svelte';

	export let data: PageData;
</script>

<PageTransition>
	<h1 class=" text-black mt-6 mb-4">Unity Workshop</h1>

	<main
		class=" lg:w-[782px] sm:w-[516px] w-full flex gap-4 flex-wrap sm:flex-row flex-col sm:items-start items-center"
	>
		{#each data.blogs as blog, i (blog.id)}
			<Card {...blog} delay={i} />
		{/each}
	</main>
</PageTransition>
