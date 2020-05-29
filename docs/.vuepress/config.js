module.exports = {
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }],
    ['meta', {
      name: 'referrer',
      content: 'no-referrer'
    }]
  ],
  title: 'Sep7th',
  description: null,
  themeConfig: {
    search: false,
    // 导航栏logo
    logo: '/logo.png',
    // 导航栏链接
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Css',
        link: '/css/'
      },
      {
        text: 'TypeScript',
        link: '/typescript/'
      },
      {
        text: 'JavaScript',
        link: '/javascript/'
      },
      {
        text: 'Git',
        link: '/git/'
      }
    ],
    // 菜单栏，可设置为不同页面展示不同侧边栏
    sidebar: {
      // 博客
      '/blog/': [
        '/blog/Vant.md',
        '/blog/前端学习计划.md'
      ],
      // css
      '/css/': [
        '/css/网页变灰.md',
        '/css/vh与vw.md',
        '/css/像素.md',
        '/css/溢出显示省略号.md',
      ],
      // ts
      '/typescript/': [
        '/typescript/基础知识.md'
      ],
      // js
      '/javascript/': [
        '/javascript/Array.md',
        '/javascript/Date类型.md',
        '/javascript/正则.md',
        '/javascript/模块化.md',
        '/javascript/ES6.md',
      ],
      '/git/': [
        '/git/修改提交信息.md',
        '/git/远程操作.md',
        '/git/ssh公钥.md'
      ],
      '/': []
    }
  },
  plugins: [
    ['@vuepress/back-to-top']
  ]
}