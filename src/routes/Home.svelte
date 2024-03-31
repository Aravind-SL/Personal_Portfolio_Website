<script lang="ts">
    import {fade} from 'svelte/transition';
    import {typeWriter} from '../lib/CustomTransition';
//     import {setup} from '../lib/PixiRenderer';
    import {setup, animate} from '../lib/ThreeRenderer';
    import Typewriter from 'svelte-typewriter';
    import { concurrent, loop } from 'svelte-typewriter'

  const messages: string[] = [
    'Hello, world!',
    'This is a looping typewriter animation.',
    'Enjoy the show!'
  ];

  let currentIndex: number = 0;
  const updateIndex = () => {
    currentIndex = (currentIndex + 1) % messages.length;
  };
</script>


<main id="main" class="w-full snap-y snap-mandatory z-10">
    <section class="w-full flex justify-between items-center snap-center h-screen">
        <Typewriter mode="scramble" interval={50} scrambleDuration={3000}>
            <h1>HEllo i am aravind</h1>
        </Typewriter>
        

    </section>
    <section class="w-full flex justify-center items-center snap-center h-screen">
        <p>Section 2</p>
    </section>
    <section class="w-full flex justify-center items-center h-screen bg-gray-300/40 snap-center">
        <p>Section 3</p>
    </section>
</main>
