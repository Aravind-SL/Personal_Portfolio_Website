<script lang="ts">
    import certificatesData from '../data/main_certificates.json';

    let certificates = certificatesData;
</script>

<h1 class="text-center text-3xl mt-64 mb-32 lg:my-32 lg:text-5xl">Certificates</h1>


<div class="flex justify-center items-start min-h-screen">
    <section class="px-8 mb-32">
        <div class="flex flex-wrap justify-center">
            {#each certificates as certificate}
            <div class="rounded-md m-8 border-2 border-gray-400 max-w-sm">
                <img src={certificate.image} alt="placeholder" class="w-full h-auto rounded-t-md">
                <div class="p-4 bg-white rounded-b-md">
                    <p class="text-center text-xl font-bold mb-4">{certificate.heading}</p>
                    <div class="flex justify-between">
                        <p>{certificate.issued_by}</p>
                        <p>{certificate.issued_on}</p>
                    </div>
                    <div class="flex flex-row-reverse mt-4">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                            <a href={certificate.url} target="_blank" rel="noopener noreferrer" class="block w-full h-full">View</a>
                        </button>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </section>
</div>


