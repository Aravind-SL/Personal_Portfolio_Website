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

    setup()
    animate()

    const routes = {
        '/': Home,
        '/about': About,
        "*": NotFound
    }

</script>

<Header />
{#key $location}
<div transition:fade={{duration:400, delay:200}}>
    <Router {routes} />
</div>
{/key}
<Footer />
