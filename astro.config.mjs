// @ts-check
import { defineConfig, envField } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  env: {
    schema: {
      GOOGLE_API_KEY: envField.string({ context: 'server', access: 'secret' })
    }
  },
});