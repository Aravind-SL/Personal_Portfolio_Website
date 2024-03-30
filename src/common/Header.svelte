<script lang="ts">
    import {link} from 'svelte-spa-router';
    import { fly, scale } from "svelte/transition";
    $: sticky = false;
    document.addEventListener('scroll', (e) => {
        sticky = window.scrollY > window.innerHeight / 4;
    });

</script>

<header class="text-xs md:text-lg bg-gray-300/40 flex justify-between items-center absolute w-full px-12 py-4">
<a href="/" use:link>
    <h1 class="text-2xl font-medium">
        Aravind S
    </h1>
</a>
{#key sticky}
<nav in:fly={{y:sticky ? -200 : 0, duration: 300, delay: 200}} out:scale class:stk={sticky} class="bg-transparent grid grid-flow-col w-fit bg-gray-200 top-3">
    <a transition:scale href="" class:stk-nav={sticky} class="hover:scale-110 hover:bg-gray-400 transition-transform  px-3 py-2">About Me</a>
    <a transition:scale={{delay:100}} href="" class:stk-nav={sticky} class="hover:scale-110 hover:bg-gray-400 transition-transform px-3 py-2">Projects</a>
    <a transition:scale={{delay:200}} href="" class:stk-nav={sticky} class="hover:scale-110 hover:bg-gray-400 transition-transform px-3 py-2">Certifications</a>
    <a transition:scale={{delay:300}} href="" class:stk-nav={sticky} class="hover:scale-110 hover:bg-gray-400 transition-transform px-3 py-2">Extras</a>
</nav>
{/key}
<div class="text-2xl inline-flex gap-4">
    <a class="hover:scale-125 transition transition-transform" href="mailto:aravind9180@gmail.com"><i class="fa-solid fa-at"></i></a>
    <a class="hover:scale-125 transition transition-transform" href="https://github.com/Aravind-sl"><i class="fa-brands fa-github"></i></a>
    <a class="hover:scale-125 transition transition-transform" href="https://linkedin.in/"><i class="fa-brands fa-linkedin"></i></a>
</div>
</header>

<style>
    .stk-nav {
        @apply bg-slate-300 first:rounded-l-full last:rounded-r-full p-3;
    }
    .stk {
        @apply  left-1/2 -translate-x-1/2 fixed top-5  backdrop-opacity-25 backdrop-blur divide-x px-2 py-1 divide-gray-600;
    }
</style>
