<script lang="ts">

  import { certificates } from "$lib/stores";
</script>

<section class="flex flex-col w-full min-h-screen px-8 py-24 xl:px-44 ">
  <h1>Certificates</h1>
  <div class="items-center w-full h-full p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
    {#each $certificates as certificate }
      <a href="{certificate.url}"target="_blank" rel="noopener noreferrer" class="w-full lg:w-[400px] rounded-lg bg-card border border-border">
        <img src="{certificate.image}" class="object-cover object-top w-full rounded-t-lg h-52 lg:h-48" alt="{certificate.heading} certifcate image"/>
        <div class="flex items-center justify-between px-4 py-2">
          <div>
            <h3 class="text-sm font-semibold md:text-base">{certificate.heading}</h3>
            <subtitle class="text-xs text-gray-300 lg:text-sm">{certificate.issued_on}</subtitle>
          </div>
          <span class="text-xs text-gray-300 lg:text-sm">{certificate.issued_by}</span>
        </div>
      </a> 
    {/each }
  </div>
</section>
