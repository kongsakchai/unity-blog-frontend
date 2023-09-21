<script lang="ts">
	import '$lib/styles/button-hover.css';
	let className = '';

	export { className as class };

	$: white = className.includes('bg-') || 'bg-white';
</script>

<button on:click class=" btn-hover">
	<div class={` min-w-[100px] px-4 py-2 border-2 border-black rounded-md ${className} ${white}`}>
		<slot />
	</div>
</button>
