<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
    import {ModeWatcher} from 'mode-watcher';
    import '../app.css';

    import {fly} from 'svelte/transition';

    export let data;

</script>

<ModeWatcher />

<main class="w-screen font-lato ">
    <Header />

    {#key data.url}
        <div in:fly={{y:-200, delay:300, duration:300}} out:fly={{y:200, duration:300}} class="h-full w-full">
            <slot />
        </div>
    {/key}
    <Footer />
</main>

