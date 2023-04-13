import tailwind from '@astrojs/tailwind'

/** @type {import('astro/config').AstroUserConfig} */
export default {
  integrations: [tailwind()],
  outDir: 'target',
  srcDir: 'source',
}
