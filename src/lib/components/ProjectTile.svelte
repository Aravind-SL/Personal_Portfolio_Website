<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { ArrowRight, Github, Linkedin, Globe } from 'lucide-svelte';
    import {people as People} from "$lib/stores";
    import type {ProjectData} from '$lib/stores';



    const labelToIcon = {
       "GH" : Github,
       "WB": Globe,
       "LN": Linkedin,
    }

    let people: any = $People;

    export let project: ProjectData;
</script>


<div class="flex flex-col items-stretch pt-2  lg:flex-row gap-2 md:gap-8 md:hover:gap-4 group transition-all duration-500">
    <img class="object-cover object-center w-full rounded-lg lg:w-96 lg:h-72 md:group-hover:scale-100 transition-transform" src="{project.img}" alt="{project.heading}" aria-hidden/>

    <div class="flex flex-col justify-around flex-1 px-8 py-4 rounded-lg gap-2 bg-secondary transition-colors">
        <p class="text-xl text-primary md:group-hover:text-secondary-foreground md:text-3xl">{project.heading}</p>
        <p class="p-2 text-sm  rounded-lg bg-background text-primary-background md:px-3 md:text-lg">{project.description}</p>
        <p class="text-xs text-secondary-foreground">{project.date}</p>
        <ul class="flex flex-wrap rounded-sm gap-2 ">
            {#each project.techs as tech}
                <li class="p-1 py-1 border-2 rounded-full bg-accent/80 border-accent-foreground md:px-3 ">
                    <p class="text-xs text-accent-foreground md:text-base">{tech}</p>
                </li>
            {/each}
        </ul>
        {#if project.team !== undefined}
        <div  class="inline-flex flex-col p-3 mt-2 rounded-lg md:flex-row bg-accent gap-2">
            <p class="text-xs text-secondary-foreground lg:text-base">Worked With</p>
            <ul class="flex justify-around flex-1 gap-2 ">
                {#each project.team as teammate}
                    <li>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger class="text-sm font-semibold underline md:text-base">
                                {people[teammate].name}
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Group>
                                    {#each people[teammate].links as link }
                                        <DropdownMenu.Item>
                                            <a href="{link.link}" target="_blank" class="inline-flex text-xs md:text-sm lg:text-base gap-1"><svelte:component this={labelToIcon[link.profile]}/><p>{link.name}</p></a>
                                        </DropdownMenu.Item>
                                    {/each}
                                </DropdownMenu.Group>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </li>
                {/each}
            </ul>
        </div>
        {/if}
    </div>
    <a href="{project.url}" target="_blank" class="flex items-center self-stretch justify-center p-2 rounded-sm lg:hidden bg-primary group-focus:block lg:group-hover:flex lg:rounded-l-none">
        <ArrowRight />
    </a>

</div>
