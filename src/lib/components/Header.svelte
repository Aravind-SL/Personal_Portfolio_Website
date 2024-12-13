<script lang="ts">
    import Button from "./ui/button/button.svelte";
    import * as Sheet from "$lib/components/ui/sheet";
    import {page} from '$app/stores';
    import {AlignLeft,Linkedin,  AtSign, Github} from 'lucide-svelte';

   type NavLink = {
        label: string,
        to: string,
        active: boolean
   }


    let paths: NavLink[] = [
        {label: "Home", to:"/", active: false},
        {label: "Projects", to:"/project", active: false},
        {label: "Certificates", to:"/certificates", active: false},
    ];

</script>


<header class="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex items-center justify-between h-16">

        <Sheet.Root>
            <Sheet.Trigger asChild let:builder>
                <Button variant='outline' builders={[builder]} size='icon' class="md:hidden">
                    <AlignLeft class="h-[1.2rem] w-[1.2rem]" />
                </Button>
            </Sheet.Trigger>
            <Sheet.Content side="left">
                <Sheet.Header>
                    <a href="/">
                        <Sheet.Title>
                            Aravind S
                        </Sheet.Title>
                    </a>
                </Sheet.Header>
                <nav class="flex flex-col items-center py-12 text-lg gap-6 ">
                    {#each paths as path }
                        <a href="{path.to}" class:active={$page.url.pathname === path.to}  class="transition-colors text-foreground/60 hover:text-foreground/80 ">{path.label}</a>
                    {/each}

                </nav>
            </Sheet.Content>
        </Sheet.Root>

        <div class="items-center hidden md:flex gap-6">
            <a href="/" class="font-jaini mr-6 text-3xl font-semibold">Aravind S</a>
            <nav class="flex items-center text-lg gap-6 ">
                {#each paths as path }
                    <a href="{path.to}" class:active={$page.url.pathname === path.to}  class="transition-colors text-foreground/60 hover:text-foreground/80 ">{path.label}</a>
                {/each}

            </nav>
        </div>

        <div class="flex gap-2">
            <Button variant='outline' size='icon' href="mailto:aravind.slg1@gmail.com">
                <AtSign class="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant='outline' size='icon' href="https://github.com/Aravind-SL">
                <Github class="h-[1.2rem] w-[1.2rem]"  />
            </Button>
            <Button variant='outline' size='icon' href="https://linkedin.com/in/aravind-sl">
                <Linkedin class="h-[1.2rem] w-[1.2rem]"  />
            </Button>
        </div>

    </div>
</header>


<style lang="postcss">
    .active {
        @apply underline font-bold text-primary hover:text-primary/80;
    }
</style>
