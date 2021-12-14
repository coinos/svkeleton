import preprocess from "svelte-preprocess"
import path from 'path'
import adapter from '@sveltejs/adapter-static'

const config = {
  kit: {
    adapter: adapter(),
    target: '#svelte', 
    vite: {
      resolve: {
        alias: {
          $components: path.resolve('src/components')
        }
      }
    }        
  },
  
  preprocess: [preprocess({
    "postcss": true
  })]
}

export default config
