<script lang="ts">
	import '$lib/styles/button-hover.css';
	import { send } from '$lib/utils/crossfade';
	import { fade, fly } from 'svelte/transition';

	export let url_img = 'https://www.protocol.com/media-library/unity-logo.jpg?id=30046849';
	export let title: string;
	export let details: string;
	export let id: string;
	export let delay: number = 0;
</script>

<a in:fly|global={{ y: 100, delay: delay * 100, duration: 1000 }} class="btn-hover" href={`/${id}`}>
	<figure
		class="w-[250px] h-[380px] border-2 rounded-md overflow-hidden border-black text-left bg-white"
	>
		<picture>
			<img src={url_img} alt="cover" class="h-[210px] object-cover" />
		</picture>
		<h3 out:send|global={{ key: id }} class="m-4">{title}</h3>
		<p class="m-4 h-14 ellipsis-2">{details}</p>
		<p class="m-4 text-blue"><em>เพิ่มเติม...</em></p>
	</figure>
</a>

<style lang="postcss">
	.ellipsis-2 {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
