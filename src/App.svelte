<script lang="ts">
    import Router from 'svelte-spa-router';
    import NotFound from './routes/NotFound.svelte';
    import Home from './routes/Home.svelte';
    import Header from './common/Header.svelte';
    import Footer from './common/Footer.svelte';

    import '@fortawesome/fontawesome-free/js/all'

    const routes = {
        '/': Home,
        "*": NotFound
    }

</script>

<Header />
<Router {routes} />
<Footer />
