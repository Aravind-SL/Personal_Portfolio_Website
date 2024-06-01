<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";

  import certificatesData from '../data/main_certificates.json';

  let certificates = certificatesData;
</script>
<h1 class="text-center text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Certificates</h1>

<Carousel.Root
  opts={{
    align: "start",
    loop: true,
  }}
  class="mx-10 lg:mx-32"
>
  <Carousel.Content>
    {#each certificates as certificate}
      <Carousel.Item class=" lg:basis-1/4">
        <div class="p-1">
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
            <div class="flex flex-col">
              <a href={certificate.url} target="_blank" rel="noopener noreferrer" class="block w-full h-auto rounded-t-md">
                <img src={certificate.image} alt="placeholder" class="w-full h-auto rounded-t-md">
              </a>
            <div class="p-4 bg-white rounded-b-md">
              <p class="text-center text-xl font-bold mb-4">{certificate.heading}</p>
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
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>

