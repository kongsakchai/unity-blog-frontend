<script lang="ts">
	import { parseHttp } from '$lib/utils/parseLink';

	export let embed_url: string;
</script>

<iframe
	src={parseHttp(embed_url)}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
	class=" w-full aspect-video"
/>
