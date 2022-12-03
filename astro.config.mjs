import { defineConfig } from 'astro/config';
import AstroNode from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  base: '/ok',
  server: {
    port: 4000,
    host: '0.0.0.0',
  },
  adapter: AstroNode({
    mode: 'standalone',
  }),
});
