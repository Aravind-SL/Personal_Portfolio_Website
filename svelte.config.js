import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
const config = {
  // existing props
  kit: {
    // existing props
    vite: {
      optimizeDeps: {
        include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
      },
      alias: {
        "@/*": "./path/to/lib/*",
      },
      // plugins: []
    }
  }
}