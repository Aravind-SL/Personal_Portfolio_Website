<script lang="ts">
    import { AtSign, Linkedin } from 'lucide-svelte';
    import {Button} from '$lib/components/ui/button';
</script>


<footer class="flex pt-8 flex-col items-center w-full border-t-2 border-secondary/80 bg-accent-background/65">
    <div class="flex flex-col items-center justify-between md:flex-row px-2 py-8 md:w-full md:px-[14rem]">
        <div class="flex flex-row items-center justify-between">
            <p class="flex text-lg pr-8 font-semibold text-transparent w-fit lg:text-3xl bg-gradient-to-r from-cyan-500 to-primary bg-clip-text">Aravind S</p>
            <div class="flex flex-col items-stretch justify-center flex-1 px-4 border-l-2 md:border-l-4 border-foreground md:px-8 " >
                <p class="text-xl font-extrabold md:text-4xl">Get in Touch</p>
                <ul class="inline-flex">
                    <li>
                        <Button size="icon" href="mailto:aravind.slg1@gmail.com" variant="outline">
                           <AtSign class="w-4 h-4 md:w-6 md:h-6"/>
                        </Button>
                    </li>
                    <li>
                        <Button size="icon" href="https://linkedin.com/in/aravind-sl" variant="outline">
                           <Linkedin class="w-4 h-4 md:w-6 md:h-6"/>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div class="text-center pt-4 md:border-l-4 md:border-foreground md:pl-8 md:text-left">
                <div class="flex flex-col">
                    <p class="text-xl text-primary text-balance">
                        “The truth is, once you learn how to die, you learn how to live.”
                    </p>
                    <p class="mt-4 md:mt-8 text-primary text md:text-2xl flex flex-row-reverse font-bold">
                        - Mitch Albom, Tuesday's with Morrie
                    </p>
                </div>
            </div>
        </div>
    </div>
    <small class="w-full text-center bg-primary">&copy; 2024 Aravind S. All Rights Reserved.</small>
</footer>
