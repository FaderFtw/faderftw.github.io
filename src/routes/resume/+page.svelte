<script>
	import { data, title } from '@data/resume';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
	import ActionButton from '$lib/components/ActionButton/ActionButton.svelte';
	let pdfUrl = data; // Assuming 'data' contains the PDF URL
</script>

<CommonPage {title}>
	<div class="resume-page flex flex-col items-center px-6 max-w-7xl">
		<section class="guide text-center mb-3">
			<p class="text-sm md-text-lg font-semibold text-[var(--tertiary-text)] ">
				Download and Preview the Resume
			</p>
		</section>

		{#if data}
			<ActionButton href={data} label="Download Resume" classes="mb-5" download={data}/>
			<div class="pdf-viewer w-full max-w-5xl h-[150vh] shadow-lg rounded-lg border border-gray-300 overflow-hidden">
				<iframe src={pdfUrl}  title="My Resume" class="w-full h-full" frameborder="0"></iframe>
			</div>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.pdf-viewer iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
