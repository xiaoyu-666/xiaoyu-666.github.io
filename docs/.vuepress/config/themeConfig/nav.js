// nav
module.exports = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "前端",
    link: "/web/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: "《ES6 教程》笔记",
        link: "/note/es6/",
      },

      {
        text: "《JavaScript教程》笔记",
        link: "/note/javascript/",
      },
      {
        text: "《vue》笔记",
        link: "/note/vue/",
      },
      {
        text: "《git》学习笔记",
        link: "/note/git/",
      },
      {
        text: "《TypeScript》学习笔记",
        link: "/pages/TypeScript/",
      },
    ],
  },
  {
    text: "后端",
    link: "/server/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: "《Java教程》笔记",
        link: "/note/java/",
      },
    ],
  },
  {
    text: "更多",
    link: "/more/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  },
  {
    text: "收藏",
    link: "/pages/beb6c0bd8a66cea6/",
    items: [
      {
        text: "网站",
        link: "/pages/beb6c0bd8a66cea6/",
      },
      {
        text: "资源",
        link: "/pages/eee83a9211a70f9d/",
      },
      {
        text: "Vue资源",
        link: "/pages/12df8ace52d493f6/",
      },
    ],
  },
  // {
  //   text: "索引",
  //   link: "/archives/",
  //   items: [
  //     {
  //       text: "分类",
  //       link: "/categories/",
  //     },
  //     {
  //       text: "标签",
  //       link: "/tags/",
  //     },
  //     {
  //       text: "归档",
  //       link: "/archives/",
  //     },
  //   ],
  // },
  {
    text: "分类",
    link: "/categories/",
  },
  {
    text: "标签",
    link: "/tags/",
  },
  {
    text: "归档",
    link: "/archives/",
  },
  {
    text: "关于",
    link: "/about/",
  },
  {
    text: "友情链接",
    link: "/friends/",
  },
];
