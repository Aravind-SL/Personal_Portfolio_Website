<script lang="ts">
    import { fly } from "svelte/transition";
    $: sticky = false;
    document.addEventListener('scroll', (e) => {
        sticky = window.scrollY > 800;
    });

</script>

{#key sticky}
<nav in:fly={{y:sticky ? -200 : 0, duration: 300}} class:stk={sticky} class="left-1/2 -translate-x-1/2 absolute divide-x divide-gray-600 grid grid-flow-col w-fit rounded-full  bg-gray-200 top-3">
    <div class="px-5 py-2">nav</div>
    <div class="px-5 py-2">nav</div>
    <div class="px-5 py-2">nav</div>
</nav>
{/key}
<style>
    .stk {
        @apply sticky top-3;
    }
</style>
