<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import ActionButton from '$lib/components/ActionButton/ActionButton.svelte';
	import { titleSuffix } from '@data/app';
	import { links, lastName, name, email, title, skills } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div class="col self-center flex-1 md:flex-row md:self-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px">
	<div class="md:flex-1 gap-10px">
		<MainTitle 
			classes="md:text-left"
			typedItems={[`${name} ${lastName},`, 'Full-stack developer,', 'ML enthusiast,']} 
		/>
		
		<p class="text-[var(--tertiary-text)] text-center md:text-justify lg:text-justify md:text-left text-[1.2em] font-extralight mx-3 md:mx-0">
			I am a software engineer with strong skills in 
			<span class="font-bold">Full-stack development</span>, 
			<span class="font-bold">Machine Learning</span>, 
			<span class="font-bold">Cloud</span>, and 
			<span class="font-bold">DevOps </span>technologies. I am currently seeking an 
			<span class="font-bold">internship </span> for <span class="font-bold"> my final engineering project (PFE)</span> to apply my expertise in developing efficient, user-focused solutions. I am driven by challenges and eager to contribute to impactful projects in a professional environment.
		</p>
		<div class="flex flex-col md:flex-row justify-between items-center p-y-15px">
			<div class="row flex justify-center md:justify-start gap-2 items-center mt-2 mb-4 md:mb-0">
			  {#each links as link}
				<a
				  class="decoration-none" 
				  href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
				  target="_blank"
				  rel="noreferrer"
				>
				  <Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'25px'} />
				</a>
			  {/each}
			</div>
			<ActionButton href="mailto:{email}" label="Contact Me" />
		</div>
	</div>
	<Carrousel items={skills ?? skillsItems} />
</div>
