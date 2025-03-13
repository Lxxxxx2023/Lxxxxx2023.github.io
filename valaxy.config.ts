import type { ThemeConfig } from 'valaxy-theme-hairy'
import { defineConfig } from 'valaxy'
import { addonMeting } from 'valaxy-addon-meting'
import { addonFace } from 'valaxy-addon-face'
import { addonHitokoto } from 'valaxy-addon-hitokoto'
import {addonWaline} from 'valaxy-addon-waline'
// add icons what you will need

/**
 * User Config @see https://hairy.blog/posts/theme
 */
export default defineConfig<ThemeConfig>({
  // site config see site.config.ts
  theme: 'hairy', //配置主题
  // 修改此列表更改主页轮播图使用的图片列表
  // 默认使用 hairy 内置的图片列表
  images: [/* your image urls */],
  themeConfig: {
    layout: {
      post: "image:slice:reverse" // 文章布局
    },
    /**
     * 导航配置和用户卡片
     */
    nav: [
      {
        text: "关于我",
        link: "/about",
        icon: "i-material-symbols-home-work-sharp"
      },
      {
        text: "Github",
        icon: "i-ri-github-fill",
        link: "https://..."
      },
      {
        text: "文章",
        link: "/archives",
        icon: "i-material-symbols-home-work-sharp"
      },
      {
        text: "友链",
        link: "/links",
        icon: "i-material-symbols-home-work-sharp"
      },
    ],
    footer: {
      since: 2016,
      beian: {
        enable: true,
        icp: '苏ICP备17038157号',
      },
    },
  },

  addons: [
    addonMeting({
    global: true,
    props: {
      // 设置你的网易云/qq或其他歌单 ID
      id: '5312894314',
      type: 'playlist',
      autoplay: true,
      theme: 'var(--hy-c-primary)',
    },
  }),
    // 请参考 https://waline.js.org/ 设置 serverURL 地址
    addonWaline({
      comment: true,
      serverURL: '...',
      emoji: [/*  */],
      pageview: true,
    }),
    addonFace({
      defaultSuffix: 'webp',
      addonHitokoto
    }),
  ],
})
