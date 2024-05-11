<script lang="ts">
    import { onMount } from 'svelte';
    import Carousel from 'svelte-carousel';
    import certificatesData from '../data/main_certificates.json';
    // import { browser } from '$app/environment';
    let certificates = certificatesData;
    let carousel;
    onMount(() => {
      let carousel = new Carousel({
        perPage: 3, // Show 3 cards at a time
        autoplay: false, // Disable autoplay (optional)
        loop: true, // Enable looping (optional)
      });
    });
  </script>
  
  <h1 class="text-center text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Certificates</h1>
  
  <div class="flex justify-center items-start min-h-screen">
    <section class="px-8 mb-32">
      <div class="flex flex-wrap justify-center">
          <Carousel particlesToShow={3} particlesToScroll={2}>
            {#each certificates as certificate}
              <div class="carousel-card">
                <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                  <img src={certificate.image} alt="placeholder" class="w-full h-auto rounded-t-md">
                </a>
                <div class="p-4 bg-white rounded-b-md">
                  <a href={certificate.url} target="_blank" rel="noopener noreferrer"> 
                    <p class="text-center text-xl font-bold mb-4">{certificate.heading}</p>
                  </a>
                  <div class="flex justify-between">
                    <p>{certificate.issued_by}</p>
                    <p>{certificate.issued_on}</p>
                  </div>
                  <div class="flex flex-row-reverse mt-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      <a href={certificate.url} target="_blank" rel="noopener noreferrer" class="block w-full h-full">View</a>
                    </button>
                  </div>
                </div>
              </div>
            {/each}
          </Carousel>
      </div>
    </section>
  </div>


  