<script lang="ts">
	import { onMount } from 'svelte';
	import Typed from 'typed.js';
  
	export let classes = '';
	export let loop = true;
	export let typedItems: string[] = [""]; 
  
	let typedElement: HTMLSpanElement;
  
	onMount(() => {
	  if (typedElement && typedItems.length > 0) {
		new Typed(typedElement, {
		  strings: typedItems,
		  typeSpeed: 120,
		  backSpeed: 60,
		  backDelay: 2000,
		  loop: loop,
		  startDelay: 500
		});
	  }
	});
  </script>
  
  <h1
	class={`font-[var(--title-f)] font-black tracking-[4px] text-center text-2em sm:text-[2.5em] md:text-[3em] lg:text-[3.5em] ${classes}`}
	style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;"
  >
	<span class="typed" bind:this={typedElement}></span>
  </h1>
  
  <style>
	/* Change the cursor color */
	.typed-cursor {
		color: #125aeb; /* Replace with your desired color */
		animation: blink 0.7s step-end infinite; /* Ensure it blinks */
	}
  
	/* Optional: Define the blinking animation */
	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
  </style>
  