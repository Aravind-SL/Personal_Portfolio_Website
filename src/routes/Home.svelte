<script lang="ts">
//     import {setup} from '../lib/PixiRenderer';
    import Typewriter from 'svelte-typewriter';
    import { onMount } from 'svelte';
    import {Link} from 'svelte-routing';
    let currentIndex = 0;
    const names: string[] = [
        'Data Engineer',
        'Data Scientist',   
        'ML Engineer',
        'Web Developer'
    ];

    let message = names[currentIndex];

    onMount(() => {
        const intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % names.length;
        message = names[currentIndex];
        }, 3200);

        return () => clearInterval(intervalId);
    });
</script>

<main id="main" class="w-full snap-y snap-mandatory z-10">
    <!-- Hero Section -->
    <section class ="w-full flex justify-between items-center snap-center h-screen lg:px-16">
        <div class="flex flex-col">
            <Typewriter mode="scramble" interval={50} scrambleDuration={2500}>
                <h1 class="text-gray-900 text-4xl lg:text-7xl ">Hello I'm Aravind</h1>
              </Typewriter>
          
              <Typewriter mode="loop" interval={100}>
                <h1 class="flex flex-row items-end mt-4 text-gray-900 text-2xl lg:text-5xl ">I'm A <span class="text-gray-900 text-xl lg:text-3xl lg:ml-12">{message}</span></h1>
              </Typewriter>
        </div>
        <div >
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img class="rounded-full" src="Profile.jpg" alt="Profile photo" height="500" width="500">
        </div>
    </section>

    <!-- Quote Section -->
    <section class="w-full flex justify-center items-center snap-center mt-16 mb-16">
        <div class="flex flex-col rounded-md m-8 p-8 border-2 border-gray-400 w-full">
            <p class="text-3xl text-balance">
                “Computers are incredibly fast, accurate, and stupid. Human beings are incredibly slow, inaccurate, and brilliant. Together they are powerful beyond imagination.”
            </p>
            <p class="mt-8 text-2xl flex flex-row-reverse">
                - Albert Einstein
            </p>
        </div>
    </section>

    <!-- Project Section -->
    <!-- <section class="w-full flex justify-center items-center h-screen snap-center">
        <div class="flex items-center flex-wrap justify-center gap-8 px-32 mt-12">
            <Link class="border-rose-400 border-2 group text-gray-200 h-48 py-10 px-4 w-64 md:w-96 flex gap-2 justify-center rounded-md items-center flex-col cursor-pointer hover:bg-slate-500/20" to="/event/{to}">
                <span class="font-anta text-sm md:text-xl w-full text-wrap text-center group-hover:text-2xl text-wrap uppercase leading-tight ">{heading}</span>
                <span class="font-kdam text-xs group-hover:text-lg md:text-md">sss</span>
                <span class="font-kdam text-xs group-hover:text-lg md:text-md">sss</span>
            </Link>
        </div>
    </section> -->
</main>
