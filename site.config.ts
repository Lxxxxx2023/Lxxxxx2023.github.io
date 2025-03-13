import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: '/',
  lang: 'zh-CN',
    title: 'Lxxxxx7 Blog',
  author: {
    name: 'lx',
    avatar: 'https://www.yunyoujun.cn/images/avatar.jpg', //头像
    intro: '个人简介'
  },
  subtitle: 'lx的副标题', // 副标题
  /**
   * 站点图标
   */
  favicon: 'https://www.yunyoujun.cn/favicon.svg',
  description: '记录学习',
  social: [
    {
      name: 'QQ 2630484635',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/YunYouJun',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/483366226?spm_id_from=333.1007.0.0',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: '微信 13142382515',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },
    {
      name: 'E-Mail 2630484635@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: false,
  },
  /**
   * 阅读时间
   */
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

})
