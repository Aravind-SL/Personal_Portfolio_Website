<script lang="ts">
    import Router from 'svelte-spa-router';
    import NotFound from './routes/NotFound.svelte';
    import Home from './routes/Home.svelte';
    const routes = {
        '/': Home,
        "*": NotFound
    }

</script>

<body class="w-screen">
    <Router {routes} />
</body>
