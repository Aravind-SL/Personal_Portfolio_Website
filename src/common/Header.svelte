<script lang="ts">
    import {link} from 'svelte-spa-router';
    import { fly, scale } from "svelte/transition";
  import { div } from 'three/examples/jsm/nodes/Nodes.js';
    $: sticky = false;
    document.addEventListener('scroll', (e) => {
        sticky = window.scrollY > window.innerHeight / 4;
    });

    let menuToggle = false;
    let mdScreen = screen.width > 1024;

</script>

<header class="px-8 py-4 z-10 absolute top-0 left-0 flex lg:py-6 lg:px-64  lg:flex-row lg:justify-between w-screen flex-col items-center justify-center">

<a href="/">
    <h1 class=" bg-clip-text text-transparent bg-gradient-to-l from-cyan-500 to-primary font-jani text-3xl mb-4 lg:text-5xl font-bold">
        Aravind S
    </h1>
</a>

<div class="text-2xl text-primary inline-flex gap-8 lg:order-last">
    <a class="hover:scale-125 transition transition-transform" href="mailto:aravind9180@gmail.com"><i class="fa-solid fa-at fa-xl"></i></a>
    <a class="hover:scale-125 transition transition-transform" href="https://github.com/Aravind-sl"><i class="fa-brands fa-github fa-xl"></i></a>
    <a class="hover:scale-125 transition transition-transform" href="https://linkedin.in/"><i class="fa-brands fa-linkedin fa-xl"></i></a>
</div>

<button on:click={
    () => {menuToggle = ! menuToggle}
} class="p-2 text-primary text-sm lg:hidden transition-transform duration-75 ease-in-out hover:scale-125 rounded-md  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-text_2 hover:to-text-primary">
    Menu
</button>

{#key sticky}
<nav in:fly={{y:sticky ? -200 : 0, duration: 300, delay: 200}} out:scale class:stk={sticky} class="flex bg-secondary/40 md:bg-transparent {mdScreen ? '' : menuToggle ? 'border-2 border-gray-900 m-4 animate-menu-drop flex-col text-center rounded-md items-center backdrop-blur-sm' : 'hidden'} text-base justify-evenly text-primary lg:text-2xl">
    <a transition:scale href="/about" class:stk-nav={sticky} class="transform transition-transform  px-3 py-2 hover:scale-110 hover:border hover:border-text_2 hover:bg-transparent">About Me</a>
    <a transition:scale={{delay:100}} href="/projects" class:stk-nav={sticky} class="transform transition-transform  px-3 py-2 hover:scale-110 hover:border hover:border-text_2 hover:bg-transparent">Projects</a>
    <a transition:scale={{delay:200}} href="/certificates" class:stk-nav={sticky} class="transform transition-transform  px-3 py-2 hover:scale-110 hover:border hover:border-text_2 hover:bg-transparent">Certifications</a>
    <a transition:scale={{delay:300}} href="/blog" class:stk-nav={sticky} class="transform transition-transform  px-3 py-2 hover:scale-110 hover:border hover:border-text_2 hover:bg-transparent">Extras</a>

</nav>
{/key}
</header>

<style>
    .stk-nav {
        @apply bg-transparent first:rounded-l-full last:rounded-r-full p-3;
    }
    .stk {
        @apply  left-1/2 -translate-x-1/2 fixed top-5  backdrop-opacity-25 backdrop-blur divide-x px-2 py-1 divide-primary;
    }
</style>
