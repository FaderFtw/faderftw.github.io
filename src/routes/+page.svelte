<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
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

<style>
    .contact-btn {
        display: inline-block;
        position: relative;
        padding: 10px 20px;
        border-radius: 30px;
        background: linear-gradient(145deg, #e0e0e0, #cfcfcf); 
        color: #333; 
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        z-index: 1;
    }
    .contact-btn::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
         background: linear-gradient(45deg, #cdcdcd, #2e2e2e, #ababad, #171717);
        background-size: 400% 400%;
        z-index: -2;
        border-radius: 32px;
        animation: animatedBorder 3s ease infinite;
    }
    .contact-btn::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        right: 3px;
        bottom: 3px;
        background: inherit;
        border-radius: 28px;
        z-index: -1;
    }
    .contact-btn:hover {
        background: linear-gradient(145deg, #cfcfcf, #e0e0e0); 
    }
    @keyframes animatedBorder {
        0% { background-position: 0% 50% }
        50% { background-position: 100% 50% }
        100% { background-position: 0% 50% }
    }
</style>


<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div class="col self-center flex-1 md:flex-row md:self-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px">
	<div class="md:flex-1 gap-10px">
		<MainTitle 
			classes="md:text-left"
			typedItems={[`${name} ${lastName},`, 'Full-stack developper,', 'ML enthusiast,']} 
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
			<a
				href="mailto:fady.zaafrane@gmail.com"
				class="contact-btn text-[var(--tertiary-text)] font-bold  no-underline"
			>
				Contact Me
			</a>
		  </div>
	</div>
	<Carrousel items={skills ?? skillsItems} />
</div>
