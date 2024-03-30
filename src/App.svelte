<script lang="ts">
    import Router from 'svelte-spa-router';
    import NotFound from './routes/NotFound.svelte';
    import Home from './routes/Home.svelte';
    import Header from './common/Header.svelte';
    const routes = {
        '/': Home,
        "*": NotFound
    }

</script>

<Header />
<Router {routes} />
