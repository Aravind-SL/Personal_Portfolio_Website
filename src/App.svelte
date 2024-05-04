<script lang="ts">
    import {Router,  Route} from 'svelte-routing';
    import Header from './common/Header.svelte';
    import Footer from './common/Footer.svelte';
    import Home from './routes/Home.svelte'
    import Project from './routes/Project.svelte';
    import Certification from './routes/Certification.svelte';
    import About from './routes/About.svelte';
    import Blog from './routes/Blog.svelte';
    import '@fortawesome/fontawesome-free/js/all'

    export let url = "";

</script>

<Header />
<Router url={url}>
    <Route path="/"><Home/></Route>
    <Route path="/projects"><Project/></Route>
    <Route path="/certificates"><Certification/></Route>
    <Route path="/about"><About/></Route>
    <Route path="/blog"><Blog/></Route>
</Router>
<Footer />
