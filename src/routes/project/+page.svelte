<script lang="ts">
    import ProjectTile from "$lib/components/ProjectTile.svelte";
    import {projects} from "$lib/stores";


</script>
<section class="w-full min-h-screen flex flex-col px-8 xl:px-44  py-24 ">
    <h1>My Project</h1>
    <div class="w-full sm:p-8 p-2  md:px-12 flex gap-2 flex-col snap-y snap-mandatory scroll-smooth divide-y-2">
        {#each $projects as proj }
           <ProjectTile project = {proj}/>
        {/each}
    </div>

</section>
