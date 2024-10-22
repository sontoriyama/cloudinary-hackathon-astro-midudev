// @ts-check
import { defineConfig } from 'astro/config';
//import vercel from '@astrojs/vercel/serverless';
//import netlify from '@astrojs/netlify/functions';
//import netlify from '@astrojs/netlify/edge-functions';
//import deno from '@deno/astro-adapter';
import cloudflare from '@astrojs/cloudflare';

import fulldev from 'fulldev-ui/integration'



import cloudflare from '@astrojs/cloudflare';



// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),

  experimental: {
    contentLayer: true
  },

  integrations: [
    fulldev({
      colors: {
        theme: 'dark',
        dark: {
          background: '#1f1f1f',
          base: '#6f6d66',
          brand: '#f50'
        }
      }
    })
  ],
});