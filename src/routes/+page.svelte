<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import Typewriter from 'svelte-typewriter';

  import { skills } from '$lib/stores';
	import { fade } from 'svelte/transition';
	import ProjectTile from '$lib/components/ProjectTile.svelte';
	import { projects } from '$lib/stores';
	const myRoles = ['Big Data', 'ML'];

	let roleIndex = 0;
	$: role = myRoles[roleIndex];

	onMount(() => {
		const id = setInterval(() => {
			roleIndex = (roleIndex + 1) % myRoles.length;
		}, 2500);

		return () => clearInterval(id);
	});
</script>

<section class="w-full relative snap-center snap-always h-screen pb-8 pt-16 lg:pt-24">
	<div class="flex flex-col lg:flex-row items-center justify-around h-full lg:items-stretch lg:px-40 gap-6">
	  <!-- Left Side: Image -->
	  <div class="flex justify-center items-center w-full lg:w-1/2">
		<img src="Profile_circle.png" alt="Aravind S" class="w-3/4 lg:w-full-lg object-cover rounded-lg shadow-lg" />
	  </div>
  
	  <!-- Right Side: Content -->
	  <div class="flex flex-col items-center text-center lg:text-left w-full lg:w-1/2 gap-6 md:py-64">
		<p class="text-3xl tracking text-foreground md:text-5xl">Hey! I am</p>
		<Typewriter mode="scramble" interval={50} scrambleDuration={2500}>
		  <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-primary font-arvo text-4xl lg:text-6xl py-4">Aravind S</h1>
		</Typewriter>
  
		<p class="inline-flex items-center text-3xl tracking text-foreground md:text-4xl gap-2">
		  {#key role}
		  <span in:fade class="text-primary">{role}</span>
		  {/key}
		  Enthusiast
		</p>
		<Button href="mailto:aravind.slg1@gmail.com" class="p-8 text-2xl  md:text-3xl transition-all hover:p-10">
		  Contact Me
		</Button>
	  </div>
	</div>
  </section>
  

<section class="flex flex-col w-full px-8 py-12 lg:mt-12 lg:px-44 snap-center snap-always">
	<h1 class="text-3xl font-bold text-800 lg:text-4xl">About Me</h1>
	<p class="mt-6 text-lg text-justify text-700 lg:text-xl leading-relaxed">
	  I am a final-year Computer Science student with a passion for Data Science, eager to leverage technology in solving real-world challenges. My journey includes building <strong>AI-powered chatbots</strong>, designing <strong>data streaming systems</strong>, and conducting <strong>sentiment analysis</strong>. These projects reflect my enthusiasm for analytics, innovation, and problem-solving.
	</p>
	<p class="mt-6 text-lg text-justify text-700 lg:text-xl leading-relaxed">
	  Beyond technical expertise, I have embraced <strong>leadership roles</strong> that have honed my organizational and collaborative skills. As <strong>Placement Secretary</strong>, <strong>General Secretary of CSEA</strong>, and <strong>Technical Secretary of IEI</strong>, I have successfully organized workshops, developed websites for symposiums, and managed placement events. I value <strong>teamwork</strong> and believe in the power of collaboration to achieve impactful outcomes.
	</p>
  </section>
  
<section class="flex flex-col w-full px-8 py-12 lg:mt-12 lg:px-44 snap-center snap-always">
  <h1>Familiar Skills</h1>
  <div class="flex flex-col w-full mt-8 justify-evenly gap-3">
    {#each $skills  as skill, i}
      <div class="flex {i % 2 === 0 && 'flex-row-reverse'} items-center justify-around w-full h-128 lg:h-32 px-4 py-2 rounded-lg bg-primary"> 
        <div class="flex flex-wrap items-center justify-center w-2/3 h-full p-4 rounded-lg space-x-3 bg-background ">
          {#each skill.skills as it }
            <span class="p-2 mb-3 text-sm border-2 rounded-full lg:text-base bg-secondary lg:mb-0 lg:px-4 border-secondary-foreground ">
              {it}
            </span>
          {/each}
        </div>
        <span class="text-lg font-semibold text-primary-foreground lg:text-xl">{skill.category}</span>
      </div>
    {/each}
  </div>
</section>
<section class="flex flex-col w-full px-8 py-12 lg:mt-12 lg:px-44 snap-center snap-always">
	<h1>Education</h1>
  <div class="mt-8 space-y-3">
    <span class="inline-flex items-center justify-between w-full">
      <span class="font-sans text-balance text-2xl font-light lg:text-3xl">B.E Computer Science and Engineering (Data Science)</span>
      <span class="font-sans text-xl font-light lg:text-2xl">2021-2025</span>
    </span>
    <p class="text-lg font-light lg:text-xl">OGPA: 9.3</p>
    <p class="text-lg lg:text-xl">Annamalai University, Annamalai Nagar</p>
  </div>
</section>
<section class="flex flex-col w-full px-8 py-24 lg:px-44 snap-center snap-always">
	<h1>My Recent Projects</h1>

	<div class="flex flex-col w-full p-2 sm:p-8 md:px-12 gap-2 divide-y-2">
		{#each $projects.slice(0, 3) as proj}
			<ProjectTile project={proj} />
		{/each}
	</div>
	<Button href="/project" class="self-center lg:text-lg">View All</Button>
</section>
