module.exports = {
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  },
  themeConfig: {
    sidebar: [
      '',
      '黑马头条笔记'
    ],
    isplayAllHeaders: true, // 默认值：false
    logo: '/assets/logo.png',
    nav: [
      {text: '首页', link: '/'},
      {
        text: '课程笔记',
        ariaLabel: 'Language Menu',
        items: [
          {
            text: '黑马头条',
            items: [
              {text: '1.项目初始化', link: '/黑马头条笔记/01-项目初始化'},
              {text: '2.登录注册', link: '/黑马头条笔记/02-登录注册'},
              {text: '3.个人中心', link: '/黑马头条笔记/03-个人中心'},
              {text: '4.首页-文章列表', link: '/黑马头条笔记/04-首页-文章列表'},
              {text: '5.首页-频道编辑', link: '/黑马头条笔记/05-首页-频道编辑'},
              {text: '6.文章搜索', link: '/黑马头条笔记/06-文章搜索'},
              {text: '7.文章详情', link: '/黑马头条笔记/07-文章详情'},
              {text: '8.文章评论', link: '/黑马头条笔记/08-文章评论'},
              {text: '9.编辑用户资料', link: '/黑马头条笔记/09-编辑用户资料'},
              {text: '10.编辑用户头像', link: '/黑马头条笔记/10-编辑用户头像'},
            ]
          },
          {
            text: '人资笔记',
            items: [
              {text: '01-vuex基础', link: '/人资笔记/01-vuex基础'},
              {text: '人资第二天-Element表单校验补充', link: '/人资笔记/人资第二天-Element表单校验补充'},
              {text: '02-基础环境搭建', link: '/人资笔记/02-基础环境搭建'},
              {text: '03-登录模块', link: '/人资笔记/03-登录模块'},
              {text: '04-主页模块', link: '/人资笔记/04-主页模块'},
              {text: '05-路由和页面', link: '/人资笔记/05-路由和页面'},
              {text: '06-组织架构', link: '/人资笔记/06-组织架构'},
              {text: '07-公司和角色', link: '/人资笔记/07-公司和角色'},
              {text: '08-员工管理', link: '/人资笔记/08-员工管理'},
              {text: '09-权限设计和管理\'', link: '/人资笔记/09-权限设计和管理'},
              {text: '10-其他模块集成', link: '/人资笔记/10-其他模块集成'},
              {text: '11-主页审批-图表', link: '/人资笔记/11-主页审批-图表'},
              {text: '12-多语言tab页全屏主题', link: '/人资笔记/12-多语言tab页全屏主题'},
              {text: '13-打包上线', link: '/人资笔记/13-打包上线'},
            ]
          },
        ]
      },
      {text: 'test', link: '/test/a'},
      {text: '去google', link: 'https://google.com'},
    ]
  }
}
