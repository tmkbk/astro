import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './remark-reading-time.mjs'
import preact from '@astrojs/preact'
import astroDocsExpressiveCode, {
  astroExpressiveCode,
  ExpressiveCodeTheme
} from 'astro-expressive-code'
import fs from 'node:fs'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
// Load your saved theme JSONC file here and create a theme from it
const jsoncString = fs.readFileSync(
  new URL(`./vscodeTheme.jsonc`, import.meta.url),
  'utf-8'
)
const myTheme = ExpressiveCodeTheme.fromJSONString(jsoncString)

export default defineConfig({
  site: "https://tmkbk.netlify.app/",
  integrations: [
    astroExpressiveCode({
      plugins: [pluginLineNumbers()],
      themes: ['snazzy-light', 'min-light', 'light-plus', 'vitesse-light'],
      styleOverrides: {}
    }),
    mdx(),
    sitemap(),
    preact()
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true
  }
})
