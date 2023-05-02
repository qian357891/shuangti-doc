import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'

const nav: ThemeConfig['nav'] = [
  {
    text: '文档',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: '指南', link: '/guide/introduction' },
      {
        text: '软件开发技术',
        link: '/guide/technology'
      },
      {
        text: '职场关键能力',
        link: '/guide/workplace'
      },
      {
        text: '新媒体运营',
        link: '/guide/new-media'
      }
    ]
  },
  {
    text: '其他媒体',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        items: [
          { text: '双体官网', link: 'http://www.shuangtixi.com/' },
          {
            text: '抖音',
            link: 'https://www.douyin.com/user/MS4wLjABAAAAfR87cJw3mxopnPbVIihWscwGXdhgIh-89YjQv4kALHg'
          },
          {
            text: '微信公众号',
            link: 'https://mp.weixin.qq.com/s/aKuAPnit8Cpi9jX7h1McJg'
          }
        ]
      }
    ]
  },
  {
    text: '关于',
    activeMatch: `^/about/`,
    items: [
      { text: 'FAQ', link: '/about/faq' },
      { text: '学生团队', link: '/about/team' }
    ]
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/guide/introduction' },
        {
          text: '软件开发技术',
          link: '/guide/technology'
        },
        {
          text: '职场关键能力',
          link: '/guide/workplace'
        },
        {
          text: '新媒体运营',
          link: '/guide/new-media'
        },
        {
          text: '学生团队',
          link: '/about/team'
        }
      ]
    },
    {
      text: '24期学员风采',
      items: [
        {
          text: '天泽一部',
          link: '/guide/student-style/composables'
        },
        { text: '周总结', link: '/guide/student-style/summary' },
        {
          text: '团队磨砺',
          link: '/guide/student-style/team'
        },
        {
          text: '我与软件有个约会',
          link: '/guide/student-style/date'
        },
        {
          text: '交换生',
          link: '/guide/student-style/exchange'
        },
        {
          text: '研学',
          link: '/guide/student-style/research'
        }
      ]
    }
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  lang: 'en-US',
  title: '双体',
  description: '为了解决大学生就业难题而采用的教育体系模式',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  // head: [
  //   [
  //     'meta',
  //     {
  //       name: 'Content-Security-Policy',
  //       content: 'upgrade-insecure-requests'
  //     }
  //   ]
  // ],

  themeConfig: {
    nav,
    sidebar,

    algolia: {
      indexName: 'vuejs',
      appId: 'ML0LEBN7FQ',
      apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
      searchParameters: {
        facetFilters: ['version:v3']
      }
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://weibo.com/u/2819609662' }
    ],

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2023-${new Date().getFullYear()} Kevin Qian`
    }
  }
})
