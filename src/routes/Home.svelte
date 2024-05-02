<script lang="ts">
//     import {setup} from '../lib/PixiRenderer';
    import Typewriter from 'svelte-typewriter';
    import { onMount } from 'svelte';
    import {Link} from 'svelte-routing';
    let currentIndex = 0;
    const names: string[] = [
        '  Data Engineer',
        '  Data Scientist',
        '  ML Engineer',
        '  Web Developer'
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
    <section class ="w-full flex flex-col lg:flex-row justify-between items-center snap-center h-screen lg:px-16 ">
        <div class="mt-32 lg:mt-2">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img class="px-2 rounded-full" src="Profile.jpg" alt="Profile photo" height="500" width="500">
        </div>
        <div class="">
            <Typewriter mode="scramble" interval={50} scrambleDuration={2500}>
                <h1 class="text-gray-900 text-4xl lg:text-7xl ">Hello I'm Aravind</h1>
              </Typewriter>
              <h1 class="flex flex-row items-end mt-4 text-gray-900 text-2xl lg:text-5xl ">I'm a <Typewriter mode="loop" interval={100}><span class="ms-2 lg:ms-3 font-semibold">{message}</span></Typewriter></h1>
        </div>
    </section>

    <!-- Quote Section -->
    <section class="w-full flex justify-center items-center snap-center my-8">
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
    <section class="my-8">
        <h1 class="ml-8 text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Projects</h1>
        <div class="flex flex-wrap justify-center">
            <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
                <img src="https://placehold.co/300x300" alt="placeholder" class="w-full h-auto rounded-t-md">
                <div class="p-4 bg-white rounded-b-md">
                    <p>Project Heading</p>
                    <button>click me</button>
                </div>
            </div>
            <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
                <img src="https://placehold.co/300x300" alt="placeholder" class="w-full h-auto rounded-t-md">
                <div class="p-4 bg-white rounded-b-md">
                    <p>Project Heading</p>
                    <button>click me</button>
                </div>
            </div>
            <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
                <img src="https://placehold.co/300x300" alt="placeholder" class="w-full h-auto rounded-t-md">
                <div class="p-4 bg-white rounded-b-md">
                    <p>Project Heading</p>
                    <button>click me</button>
                </div>
            </div>
            <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
                <img src="https://placehold.co/300x300" alt="placeholder" class="w-full h-auto rounded-t-md">
                <div class="p-4 bg-white rounded-b-md">
                    <p>Project Heading</p>
                    <button>click me</button>
                </div>
            </div>
        </div>
    </section>
   <!-- Experience Section -->

   <section class="my-8">
    <h1 class="ml-8 text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Experience</h1>

   </section>

   <!-- Certifications -->
   <section class="my-8">
    <h1 class="ml-8 text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Certifications</h1>
    <div class="flex flex-wrap justify-center">
        <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
            <img src="https://placehold.co/300x300" alt="placeholder" class="w-full h-auto rounded-t-md">
            <div class="p-4 bg-white rounded-b-md">
                <p>Certificate name</p>
                <p>Issued By</p>
                <button>click me</button>
            </div>
        </div>
        <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
            <img src="https://placehold.co/300x300" alt="placeholder" class="w-full h-auto rounded-t-md">
            <div class="p-4 bg-white rounded-b-md">
                <p>Certificate name</p>
                <p>Issued By</p>
                <button>click me</button>
            </div>
        </div>
        <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
            <img src="https://placehold.co/300x300" alt="placeholder" class="w-full h-auto rounded-t-md">
            <div class="p-4 bg-white rounded-b-md">
                <p>Certificate name</p>
                <p>Issued By</p>
                <button>click me</button>
            </div>
        </div>
        <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
            <img src="https://placehold.co/300x300" alt="placeholder" class="w-full h-auto rounded-t-md">
            <div class="p-4 bg-white rounded-b-md">
                <p>Certificate name</p>
                <p>Issued By</p>
                <button>click me</button>
            </div>
        </div>
    </div>
</section>
</main>
