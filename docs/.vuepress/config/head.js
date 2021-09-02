// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
    },
  ],
  // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色


  
  ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ['meta', { name: 'author', content: 'xiaoyu' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#42b983' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: '/minion.png' }],
  ['link', { rel: 'mask-icon', href: '/minion.svg', color: '#42b983' }],
  ['meta', { name: 'msapplication-TileImage', content: '/minion.png' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7828333725993554',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持
]
