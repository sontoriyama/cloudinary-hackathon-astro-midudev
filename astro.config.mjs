// @ts-check
import { defineConfig } from 'astro/config';
//import vercel from '@astrojs/vercel/serverless';
import netlify from '@astrojs/netlify/functions';
//import netlify from '@astrojs/netlify/edge-functions';

import fulldev from 'fulldev-ui/integration'



// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true,
//    edgeFunctions: true,
  //  edgeNavigationFallback: true,
//    runtime: 'edge',
//    dist: './dist',
 //   buildCommand: 'npm run build',
  //  publishCommand: 'npm run publish',
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
});