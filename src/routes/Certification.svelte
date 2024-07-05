<script lang="ts">
  import certificatesData from '../data/main_certificates.json';
  import { Button } from "$lib/components/ui/button/index.js";

  let certificates = certificatesData;
</script>
<div class="bg-background">
  <h1 class="text-center text-primary text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Certificates</h1>


<div class="flex justify-center items-start min-h-screen">
  <section class="px-8 mb-32">
      <div class="flex flex-wrap justify-center">
          {#each certificates as certificate}
          <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
              <img src={certificate.image} alt="placeholder" class="w-full h-auto rounded-t-md">
              <div class="p-4 bg-background rounded-b-md">
                  <p class="text-center text-primary text-xl font-bold mb-4">{certificate.heading}</p>
                  <div class="flex justify-between text-primary">
                      <p>{certificate.issued_by}</p>
                      <p>{certificate.issued_on}</p>
                  </div>
                  <div class="flex flex-row-reverse mt-4">
                      <Button variant="ghost" class="text-xl text-primary">
                        <a href="{certificate.url}" target="_blank" rel="noopener noreferrer">View</a>
                      </Button>
                  </div>
              </div>
          </div>
          {/each}
      </div>
  </section>
</div>
</div>
