<script lang="ts">
    // import {setup} from '../lib/PixiRenderer';
    // import {Link} from 'svelte-routing';
    import { Button } from "$lib/components/ui/button";
    import { buttonVariants } from "$lib/components/ui/button";

    import Typewriter from 'svelte-typewriter';
    import { onMount } from 'svelte';
    import projectsData from '../data/projects.json';
    import cetificateData from '../data/certificates.json';
    let currentIndex = 0;
    const names: string[] = [
        '  Data Engineer',
        '  Data Scientist',
        '  ML Engineer',
        '  Web Developer'
    ];

    let message = names[currentIndex];

    onMount(() => {
        const intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % names.length;
        message = names[currentIndex];
        }, 3200);

        return () => clearInterval(intervalId);
    });
    
    
    let projects = projectsData;
    let certificates = cetificateData;
</script>

<main id="main" class="w-full snap-y snap-mandatory z-10 bg-foreground">
    <!-- Hero Section -->
    <section class ="w-full flex flex-col lg:flex-row justify-between items-center snap-center h-screen lg:px-96 ">
        <!-- <div class="mt-32 lg:mt-2 lg:mr-32">
            svelte-ignore a11y-img-redundant-alt
            <img class="px-2 rounded-full" src="Profile_circle.png" alt="Profile photo" height="500" width="500">
        </div> -->
        <div class="mt-96 lg:mt2 flex flex-col justify-center items-center">
            <h1 class="text-gray-200 text-4xl lg:text-8xl px-16 py-4">Hello I'm</h1>
            <Typewriter mode="scramble" interval={50} scrambleDuration={2500}>
                 <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-primary font-arvo text-6xl lg:text-8xl py-4">Aravind</h1>
            </Typewriter>
            <h1 class="flex flex-row items-center mt-4 text-secondary text-2xl lg:text-5xl ">I'm a <Typewriter mode="loop" interval={100}><span class="bg-clip-text text-transparent bg-gradient-to-l from-cyan-500 to-primary font-arvo ms-2 lg:ms-3 font-semibold pt-8">{message}</span></Typewriter></h1>
        </div>
    </section>

    <!-- Quote Section -->
    <section class="w-full flex justify-center items-center snap-center my-8 lg:p-64">
        <div class="flex flex-col rounded-md m-8 p-8 border-2 border-ring w-full">
            <p class="text-3xl text-secondary text-balance">
                “Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.”
            </p>
            <p class="mt-8 text-primary text-2xl flex flex-row-reverse">
                - Albert Einstein
            </p>
        </div>
    </section>

    <!-- Project Section -->      
      <section class="my-8">
        <h1 class="text-center lg:text-left lg:ml-64 text-primary text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Projects</h1>
        <div class="flex flex-wrap justify-center">
          {#each projects as project}
          <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
            <a href={project.url} target="_blank" rel="noopener noreferrer" class="block w-full h-auto rounded-t-md">
                <img src={project.image} alt="placeholder" class="w-full h-auto rounded-t-md">
            </a>
            <div class="p-4 bg-white rounded-b-md">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <p class="text-center text-xl font-bold mb-4">{project.heading}</p>
                </a>
                <div class="flex flex-row justify-between mt-4">
                    <p class="">
                        {project.date}
                    </p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" class={buttonVariants({ variant: "outline" })}>View</a>
                </div>
            </div>
        </div>
        
          {/each}
        </div>
      </section>
   <!-- Experience Section -->
<!-- 
   <section class="my-8">
    <h1 class="ml-8 text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Experience</h1>

   </section> -->

   <!-- Certifications -->
   <section class=" my-8">
    <h1 class="text-center lg:text-left lg:ml-64 text-primary text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Certifications</h1>
    <div class="flex flex-wrap justify-center">
        {#each certificates as certificate}
        <div class="rounded-md m-8 border-2 border-ring max-w-sm">
            <a href={certificate.url} target="_blank" rel="noopener noreferrer" class="block w-full h-auto rounded-t-md">
                <img src={certificate.image} alt="placeholder" class="w-full h-auto rounded-t-md p-2"> 
            </a>
            <div class="p-4 bg-foreground rounded-b-md">
                <p class="text-center text-primary text-xl font-bold mb-4">{certificate.heading}</p>
                <div class="flex text-primary justify-between">
                    <p>{certificate.issued_by}</p>
                    <p>{certificate.issued_on}</p>
                </div>
                <div class="flex flex-row-reverse mt-4">
                    <Button variant="outline">
                        <a href={certificate.url} target="_blank" rel="noopener noreferrer" class="block w-full h-full">View</a>
                    </Button>
                </div>
            </div>
        </div>
        {/each}
    </div>
</section>
</main>
