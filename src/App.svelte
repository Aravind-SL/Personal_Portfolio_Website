<script lang="ts">
    import Router from 'svelte-spa-router';
    import NotFound from './routes/NotFound.svelte';
    const routes = {
        "*": NotFound
    }

</script>

<body>
    <Router {routes} />
</body>
