<script lang="ts">
    import {fade} from 'svelte/transition';
    import {typeWriter} from '../lib/CustomTransition';
    import {setup} from '../lib/PixiRenderer';
//    import {setup, animate} from '../lib/ThreeRenderer';

    setup()
//    animate()
</script>


<main id="main" class="w-full snap-y snap-mandatory z-10">
    <section class="w-full flex justify-between items-center snap-center h-screen">
        <h1 class="text-gray-100 md:text-4xl lg:text-7xl w-1/3 ml-12" >
            <span in:typeWriter={{speed:2}}>I'm not Aravind Arnold Schwarzenegger.</span>
            <span in:typeWriter={{speed:0.5, delay: 3000}}>Or am I!</span>
        </h1>
        <img transition:fade={{delay: 3800}} class="object-cover object-center w-1/2 h-full"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg" alt="">
    </section>
    <section class="w-full flex justify-center items-center snap-center h-screen">
        <p>Section 2</p>
    </section>
    <section class="w-full flex justify-center items-center h-screen bg-gray-300/40 snap-center">
        <p>Section 3</p>
    </section>
</main>
