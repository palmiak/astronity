import { defineConfig } from 'astro/config';
import sanityConfig from './sanityConfig';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }), 
    alpinejs(), 
    sanity({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: '2021-03-25',
      useCdn: true
    })
  ],
  markdown: {
    shikiConfig: { theme: 'dracula' },
  },
});