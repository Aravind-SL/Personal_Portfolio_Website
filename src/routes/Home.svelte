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

<main id="main" class="w-full snap-y snap-mandatory z-10 bg-background">
    <!-- Hero Section -->
    <section class ="w-full snap-center h-screen lg:px-64 ">
        <div class="flex flex-col lg:flex-row-reverse justify-around items-center">
            <div class="mt-64 lg:mt-96">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="px-2 rounded-full" src="Profile_circle.png" alt="Profile photo" height="800" width="800">
            </div>
            <div class="mt-32 lg:mt-96 flex flex-col justify-center items-center">
                <h1 class="text-gray-200 text-4xl lg:text-8xl px-16 py-4">Hello I'm</h1>
                <Typewriter mode="scramble" interval={50} scrambleDuration={2500}>
                     <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-primary font-arvo text-6xl lg:text-8xl py-4">Aravind</h1>
                </Typewriter>
                <h1 class="flex flex-row items-center mt-4 text-primary text-2xl lg:text-5xl ">I'm a <Typewriter mode="loop" interval={100}><span class="bg-clip-text text-transparent bg-gradient-to-l from-cyan-500 to-primary font-arvo ms-2 lg:ms-3 font-semibold pt-8">{message}</span></Typewriter></h1>
            </div>
        </div>
    </section>

    <!-- Quote Section -->
    <section class="w-full  snap-center ">
        <h1 class="text-center lg:text-left lg:ml-64 text-primary text-3xl mt-64 mb-32 lg:mt-16 lg:mb-8 lg:text-5xl">Quote</h1>
        <div class="flex justify-center items-center lg:px-64 lg:py-16">
            <div class="flex flex-col rounded-md m-8 p-8 border-2 border-ring w-full">
                <p class="text-3xl text-primary text-balance">
                    “The truth is, once you learn how to die, you learn how to live.”
                </p>
                <p class="mt-8 text-primary text-2xl flex flex-row-reverse font-bold">
                    - Mitch Albom, Tuesday's with Morrie
                </p>
            </div>
        </div>
        
    </section>

    <!-- Project Section -->      
      <section class="my-8">
        <h1 class="text-center lg:text-left lg:ml-64 text-primary text-3xl mt-32 mb-32 lg:my-32 lg:text-5xl">Projects</h1>
        <div class="flex flex-wrap justify-center">
          {#each projects as project}
          <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
            <a href={project.url} target="_blank" rel="noopener noreferrer" class="block w-full h-auto rounded-t-md">
                <img src={project.image} alt="placeholder" class="w-full h-48 object-cover rounded-t-md">
            </a>
            <div class="p-4 bg-background rounded-b-md">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <p class="text-center text-primary text-xl font-bold mb-4">{project.heading}</p>
                </a>
                <div class="flex flex-row justify-between items-center mt-4 text-primary">
                    <p class="">
                        {project.date}
                    </p>
                    <Button variant="ghost" class="text-xl">
                        <a href="{project.url}" target="_blank" rel="noopener noreferrer">View</a>
                    </Button>
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
            <div class="p-4 bg-background rounded-b-md">
                <p class="text-center text-primary text-xl font-bold mb-4">{certificate.heading}</p>
                <div class="flex text-primary justify-between">
                    <p>{certificate.issued_by}</p>
                    <p>{certificate.issued_on}</p>
                </div>
                <div class="flex flex-row-reverse mt-4">
                    <Button variant="ghost" class=" text-primary text-xl">
                        <a href="{certificate.url}" target="_blank" rel="noopener noreferrer">View</a>
                    </Button>
                </div>
            </div>
        </div>
        {/each}
    </div>
</section>
</main>
