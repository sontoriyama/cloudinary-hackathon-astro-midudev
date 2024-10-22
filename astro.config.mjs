// @ts-check
import { defineConfig } from 'astro/config';
//import vercel from '@astrojs/vercel/serverless';
//import netlify from '@astrojs/netlify/functions';
//import netlify from '@astrojs/netlify/edge-functions';
//import deno from '@deno/astro-adapter';
//import cloudflare from '@astrojs/cloudflare';
// @ts-ignore
import node from '@astrojs/node';

import fulldev from 'fulldev-ui/integration'




// @ts-ignore
import node from '@astrojs/node';




// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),

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

  // @ts-ignore
  adapter: node({
    mode: 'standalone',
  }),
});