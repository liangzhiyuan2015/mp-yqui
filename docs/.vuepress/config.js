module.exports = {

  // 如果你计划发布的站点是在某个仓库下，比如 https://github.com/liangzhiyuan2015/mp-yqui ，则 base 需要指定为 /mp-yqui/
  // base: '/mp-yqui/',

  // 站点标题，在默认主题中会显示在导航栏左侧
  title: 'MP-YQUI',

  // 站点描述，将会在 HTML 中渲染为 <meta> 标签，在默认主题中会显示在首页上
  description: '基于 mpvue 和 MinUI 的微信小程序 UI 库',

  // 在 <head> 标签中自定义额外标签
  head: [
    ['meta', { name: 'keywords', content: 'mpvue,minui,mp-yqui' }],
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],

  serviceWorker: true,

  // 配置 google 分析统计
  ga: '',

  themeConfig: {
    repo: 'liangzhiyuan2015/mp-yqui',

    docsDir: 'docs',

    // 禁止提取 h2, h3 标签链接到侧边栏中
    sidebarDepth: 0,

    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        algolia: {},
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Components', link: '/components/' },
          { text: 'Nested', link: '/nested/' }
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        },
        lastUpdated: 'Last Updated' // string | boolean
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
          { text: '组件', link: '/zh/components/' },
          { text: '嵌套', link: '/zh/nested/' }
        ],
        sidebar: {
          '/zh/': [/* ... */],
          '/zh/nested/': [/* ... */]
        },
        lastUpdated: '上次更新' // string | boolean
      }
    }
  },

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'MP-YQUI',
      description: 'WeChat small program UI library based on mpvue and MinUI.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'MP-YQUI',
      description: '基于 mpvue 和 MinUI 的微信小程序 UI 库'
    }
  }
}