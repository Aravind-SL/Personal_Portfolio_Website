<script lang="ts">
    import { fly, scale } from "svelte/transition";
    $: sticky = false;
    document.addEventListener('scroll', (e) => {
        sticky = window.scrollY > 800;
    });

</script>

<header class="bg-gray-300/40 flex justify-between items-center absolute w-full px-12 py-4">
<h1>
    Aravind S
</h1>
{#key sticky}
<nav in:fly={{y:sticky ? -200 : 0, duration: 300}} out:scale class:stk={sticky} class="bg-transparent grid grid-flow-col w-fit bg-gray-200 top-3">
    <div class:bg-slate-300={sticky} class="first:rounded-l-full last:rounded-r-full hover:scale-110 hover:bg-gray-400  p-3">nav</div>
    <div class:bg-slate-300={sticky} class="first:rounded-l-full last:rounded-r-full hover:scale-110 hover:bg-gray-400  p-3">nav</div>
    <div class:bg-slate-300={sticky} class="first:rounded-l-full last:rounded-r-full hover:scale-110 hover:bg-gray-400  p-3">nav</div>
</nav>
{/key}
<div>
    Contact Me
</div>
</header>

<style>
    .stk {
        @apply  left-1/2 -translate-x-1/2 fixed top-5  backdrop-opacity-25 backdrop-blur divide-x px-2 py-1 divide-gray-600;
    }
</style>
