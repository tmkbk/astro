import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './remark-reading-time.mjs'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), preact()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      // 选择 Shiki 内置的主题（或添加你自己的主题）
      // https://shiki.style/themes
      theme: 'dracula',
      // 另外，也提供了多种主题
      // 查看下面关于使用亮/暗双主题的的说明
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      },
      // 禁用默认配色
      // https://shiki.style/guide/dual-themes#without-default-color
      // (添加于 v4.12.0)
      defaultColor: false,
      // 添加自定义语言
      // 注意：Shiki 内置了无数语言，包括 .astro！
      // https://shiki.style/languages
      langs: [],
      // 启用自动换行，以防止水平滚动
      wrap: true,
      // 添加自定义转换器：https://shiki.style/guide/transformers
      // 查找常用转换器：https://shiki.style/packages/transformers
      transformers: []
    }
  }
})
