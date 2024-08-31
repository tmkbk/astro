import { astroExpressiveCode } from 'astro-expressive-code' // 确保这个导入是正确的

export const astroDocsExpressiveCode = () =>
  astroExpressiveCode({
    theme: 'one-dark-pro',
    styleOverrides: {
      // 设置全局代码块样式
      codeBackground: 'var(--theme-code-bg)',
      frames: {
        styleOverrides: {}
      }
    },
    textMarkers: true // 如果需要禁用，则设置为 false
  })
