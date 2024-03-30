<script lang="ts">
    import {fade} from 'svelte/transition';
    import {typeWriter} from '../lib/CustomTransition';
</script>


<main id="main" class="w-full">
    <section class="w-full flex justify-between items-center h-screen bg-slate-400">
        <h1 class="text-7xl w-1/3 ml-12" >
            <span in:typeWriter={{speed:2}}>I'm not Aravind Arnold Schwarzenegger.</span>
            <span in:typeWriter={{speed:1, delay: 3000}}>Or am I!</span>
        </h1>
        <img transition:fade={{delay: 3800}} class="object-cover object-center w-1/2 h-full"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg" alt="">
    </section>
    <section class="w-full flex justify-between items-center h-screen bg-slate-400">
        <h1 class="text-7xl w-1/3 ml-12" >
            <span in:typeWriter={{speed:2}}>I'm not Aravind Arnold Schwarzenegger.</span>
            <span in:typeWriter={{speed:1, delay: 3000}}>Or am I!</span>
        </h1>
        <img transition:fade={{delay: 3800}} class="object-cover object-center w-1/2 h-full"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg" alt="">
    </section>
    <section class="w-full flex justify-between items-center h-screen bg-slate-400">
        <h1 class="text-7xl w-1/3 ml-12" >
            <span in:typeWriter={{speed:2}}>I'm not Aravind Arnold Schwarzenegger.</span>
            <span in:typeWriter={{speed:1, delay: 3000}}>Or am I!</span>
        </h1>
        <img transition:fade={{delay: 3800}} class="object-cover object-center w-1/2 h-full"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg" alt="">
    </section>
</main>
