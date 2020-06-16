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
        text: 'Note',
        link: '/note/'
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
        text: 'Vue',
        link: '/vue/'
      },
      {
        text: 'React',
        link: '/react/'
      },
      {
        text: 'Git',
        link: '/git/'
      }
    ],
    // 菜单栏，可设置为不同页面展示不同侧边栏
    sidebar: {
      // 博客
      '/note/': [
        '/note/学习资源.md',
        '/note/Questions.md'
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
        '/typescript/基础类型.md',
        '/typescript/高级类型.md'
      ],
      // js
      '/javascript/': [
        '/javascript/Array.md',
        '/javascript/Date类型.md',
        '/javascript/正则.md',
        '/javascript/模块化.md',
        '/javascript/ES6.md',
      ],
      '/vue/': [
        '/vue/使用插件实现一个加载组件.md',
        '/vue/利用v-model优化自定义组件.md',
        '/vue/全局引入stylus变量、函数等.md'
      ],
      '/react/':[
        '/react/react-router相关.md'
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
    [
      '@vuepress/back-to-top',
      // 博客配置
      ['@vuepress/blog', {
        title: 'Sep7th',
        // 日期格式
        dateFormat: 'YYYY-MM-DD',
        directories: [
          {
            id: 'daily',
            dirname: 'daily',
            path: '/'
          }
        ],
      }]
    ]
  ]
}