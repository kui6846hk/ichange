module.exports = {
    title: '中國奇經',
    description: '易經整理',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/ichange/', // 这是部署到github相关的配置 下面会讲
    host: 'localhost',
    port: 8080,
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
      docsDir: 'docs',
      sidebar: 'auto',
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
      nav:[
        { text: '易經', link: '/IChing/' }, // 内部链接 以docs为根目录
        {
          text: 'GitHub',
          items: [
            { text: 'GitHub地址', link: 'https://github.com/kui6846hk' },
            {
              text: '仓库',
              link: 'https://github.com/kui6846hk/ichange'
            }
          ]
        }        
      ],
      sidebar: {
        '/IChing/': [
          {
            title: "易經",
            collapsable: false,
            children: [
                '前言',
                '周易',
                '周易閱讀方法',
                '乾',
            ]
          }
        ]
      }
    },
}
