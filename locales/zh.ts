import { ContentData } from '../types';

export const zh: ContentData = {
  nav: {
    home: "首页",
    projects: "资源",
    projects_short: "资源",
    blog: "博客",
    blog_short: "博客",
    contact: "联系",
    logo_full: "终末地工业人事部",
    logo_short: "终末地人事部",
  },
  hero: {
    title1: "极致攻略",
    title2: "解构未知",
    subtitle: "我们是？",
    cta: "关注我们",
    stat1_label: "篇深度指南（假的）",
    stat2_label: "活跃贡献者（也是假的）",
  },
  about: {
    title: "// 关于我们",
    description: "成立于2025年，中间忘了，后面忘了。",
  },
  projects: {
    title: "项目与资源",
    items: [
      { id: 1, title: "成就数据库", category: "工具", desc: "全面的终末地蚀刻章数据库。", link: "https://medal.eihrteam.org/" },
      { id: 2, title: "敬请期待", category: "Coming S∞n™", desc: "别急，让我先急" },
      { id: 3, title: "敬请期待", category: "Coming S∞n™", desc: "点击输入文本" },
    ],
  },
  blog: {
    title: "最新情报",
    readMore: "阅读全文",
    viewAll: "查看更多情报",
    blogLink: "/blog",
    posts: [
      { 
        id: 1, 
        date: "2025.12.24", 
        title: "点击输入文本", 
        excerpt: "↑↓↑↓←→←→BABA",
        content: `
# 隐藏指令已激活

> 系统提示：检测到未授权的访问请求... 正在建立连接...

这里是**终末地工业人事部**的内部终端。如果你看到了这条信息，说明你已经成功绕过了防火墙。

## 什么是 Konami Code?

Konami Code (科乐美秘技) 是一个在许多科乐美游戏中出现的作弊代码，最著名的是在《魂斗罗》中。

\`\`\`javascript
const secret = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
\`\`\`

### 我们的任务

1.  收集数据
2.  分析机制
3.  **制定策略**

_保持关注，更多情报即将解锁。_
        `
      },
      { 
        id: 2, 
        date: "2026.01.26", 
        title: "点击输入文本", 
        excerpt: "↑↑↑↓↓",
        content: `
# 另一个测试日志

这是一篇测试文章，用于验证 markdown 渲染是否正常工作。

- 列表项 1
- 列表项 2
- 列表项 3

**加粗文本** 和 *斜体文本*。

[这是一个链接](#)
        `
      },
    ],
  },
  contact: {
    title: "建立连接",
    description: "无论你是想加入我们，还是只想打个招呼，我们随时欢迎新的连接。",
    socials: "社交媒体",
    email: "staff@eihrteam.org",
    socialLinks: {  
      bilibili: "https://space.bilibili.com/3546983822264909",
      xiaohongshu: "",
      skland: "https://www.skland.com/profile?id=7932577420418",
      github: "https://github.com/EIHRTeam"
    }
  },
  footer: {
    nav: "网站导航",
    quickLinks: "快捷链接",
    quickLinksItems: [
      { label: "成就数据库", url: "https://medal.eihrteam.org" },
      { label: "INTEGRATED ICON SYSTEM", url: "https://iis.eihrteam.org" },
      { label: "ASR Platform", url: "https://asr.eihrteam.org" },
    ],
    friendLinks: "友情链接",
    friendLinksItems: [
      { label: "明日方舟：终末地 官网", url: "https://endfield.hypergryph.com/" },
      { label: "PRTS Wiki", url: "http://prts.wiki/" },
      { label: "森空岛 Wiki", url: "https://wiki.skland.com/endfield" },
    ],
    copyright: "© 2025 Endfield Industry Human Resource Team. All Rights Reserved.",
  }
};