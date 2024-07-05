<script lang="ts">
    import projectsData from '../data/main_projects.json';
    import { Button } from "$lib/components/ui/button/index.js";

    let projects = projectsData;
</script>

<h1 class="text-center text-primary text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Projects</h1>


<div class="flex justify-center items-start min-h-screen">
    <section class="px-8 mb-32">
        {#each projects as project}
        <div class="flex flex-col lg:flex-row lg- p-4 rounded-md border-2 border-gray-400 w-sm my-8 lg:w-[60rem]">
            <img src={project.image} alt="" class="w-full h-64 object-cover lg:w-64 lg:h-auto rounded-md mr-0 lg:mr-8 mb-4 lg:mb-0">
            <div class="flex flex-col">
                <p class="mt-8 ml-0 text-primary lg:ml-8 lg:mt-2 text-2xl text-center lg:text-left">
                    {project.heading}
                </p>
                <p class="mt-8 ml-0 mr-0 text-primary lg:ml-8 lg:mr-4 text-base text-justify ">
                    {project.description}
                </p>
                <div class="flex justify-between text-primary items-center mt-8 ml-0 lg:ml-8">
                    <p class="text-2xl lg:text-left">
                        {project.date}
                    </p>
                    <Button variant="ghost" class="text-xl">
                        <a href="{project.url}" target="_blank" rel="noopener noreferrer">View</a>
                    </Button>
                </div>    
            </div> 
        </div>
        {/each}
    </section>
</div>