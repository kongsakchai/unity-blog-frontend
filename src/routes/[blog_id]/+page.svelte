<script lang="ts">
	import type { PageData } from './$types';

	import Button from '$lib/components/common/button.svelte';
	import PageTransition from '$lib/components/layouts/page-transition.svelte';
	import YoutubeVideo from '$lib/components/common/youtube-video.svelte';
	import { fly } from 'svelte/transition';

	export let data: PageData;

	$: blog = data.blog;

	let video: string;

	const handleDownload = (url: string) => {
		window.open(url, '_blank');
	};
</script>

<PageTransition>
	<h1 class=" text-black mt-6 mb-4">{blog?.title}</h1>

	<div
		in:fly={{ y: 100, duration: 1000 }}
		class=" md:w-[700px] xs:w-[500px] w-full border-2 border-black rounded-md"
	>
		{#if video}
			<YoutubeVideo embed_url={video} />
		{:else}
			<img
				src={blog?.url_img}
				alt="cover"
				class=" w-full aspect-video object-cover"
				loading="lazy"
				decoding="async"
			/>
		{/if}
	</div>

	{#if blog?.videos && blog.videos.length > 0}
		<div
			in:fly|global={{ y: 100, delay: 100, duration: 1000 }}
			class="md:w-[700px] xs:w-[500px] w-full border-2 border-black rounded-md px-4 py-4"
		>
			<h2 class="text-left mb-4">Videos</h2>
			<section class="w-full flex flex-wrap gap-4">
				{#each blog.videos as { name, url }}
					<Button on:click={() => (video = url)} class="bg-yellow">{name}</Button>
				{/each}
			</section>
		</div>
	{/if}

	{#if blog?.download && blog.download.length > 0}
		<div
			in:fly|global={{ y: 100, delay: 200, duration: 1000 }}
			class="md:w-[700px] xs:w-[500px] w-full border-2 border-black rounded-md px-4 py-4"
		>
			<h2 class="text-left mb-4">Downloads</h2>
			<section class="w-full flex flex-wrap gap-4">
				{#each blog.download as { name, url }}
					<Button on:click={() => handleDownload(url)} class="bg-blue">{name}</Button>
				{/each}
			</section>
		</div>
	{/if}
</PageTransition>
