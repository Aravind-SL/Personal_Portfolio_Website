<script lang="ts">
    import projectsData from '../data/main_projects.json';

    let projects = projectsData;
</script>

<h1 class="text-center text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Projects</h1>


<div class="flex justify-center items-start min-h-screen">
    <section class="px-8 mb-32">
        {#each projects as project}
        <div class="flex flex-col lg:flex-row lg:justify-around lg- p-4 rounded-md border-2 border-gray-400 w-sm my-8 lg:w-[60rem]">
            <div class="basis-1/3 ">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt="" class="w-full h-64 object-cover lg:w-auto lg:h-64 rounded-md mb-4 lg:mb-0">
                </a>
                
            </div>    
            <div class="basis-2/3">
                <div class="flex flex-col">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <p class="mt-8 ml-0 lg:ml-8 lg:mt-2 text-2xl text-center lg:text-left">
                            {project.heading}
                        </p>
                    </a>
                    <p class="mt-8 ml-0 mr-0 lg:ml-8 lg:mr-4 text-base text-justify ">
                        {project.description}
                    </p>
                    <div class="flex justify-between items-center mt-8 ml-0 lg:ml-8">
                        <p class="text-2xl lg:text-left">
                            {project.date}
                        </p>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                            <a href={project.url} target="_blank" rel="noopener noreferrer" class="block w-full h-full">View</a>
                        </button>
                    </div>    
                </div> 
            </div>
        </div>
        {/each}
    </section>
</div>



