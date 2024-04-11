<script lang="ts">
    import {fade} from 'svelte/transition';

    import '@fortawesome/fontawesome-free/js/all'
    import Router, {location} from 'svelte-spa-router';
    import NotFound from './routes/NotFound.svelte';
    import Home from './routes/Home.svelte';
    import Header from './common/Header.svelte';
    import Footer from './common/Footer.svelte';
    import About from './routes/About.svelte';

    import {setup, animate} from './lib/ThreeRenderer';

    import {tweened} from 'svelte/motion';

    let scrollY: number;
    let body = document.body;
    let html = document.documentElement;
    let height = Math.max(body.scrollHeight, body.offsetHeight,
          html.clientHeight, html.scrollHeight, html.offsetHeight)
    const scrollIndicator = tweened(0);
    const onScroll = () => {
        console.log(scrollY/height);
        $scrollIndicator = 100 * scrollY / height;
    }
    setup()
    animate()

    const routes = {
        '/': Home,
        '/about': About,
        "*": NotFound
    }

</script>

<svelte:window on:scroll={onScroll} bind:scrollY={scrollY}/>
<div class="top-0  h-2 fixed flex justify-align w-full">
    <div style="width:{$scrollIndicator}%;" class="h-full bg-blue-500 progress" >
    </div>
</div>
<Header />
{#key $location}
<div transition:fade={{duration:400, delay:200}}>
    <Router {routes} />
</div>
{/key}
<Footer />
