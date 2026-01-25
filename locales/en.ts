import { ContentData } from '../types';

export const en: ContentData = {
  nav: {
    home: "HOME",
    projects: "PROJECTS",
    projects_short: "PROJ",
    blog: "BLOG",
    blog_short: "BLOG",
    contact: "CONTACT",
    logo_full: "EIHR Team",
    logo_short: "EIHR",
  },
  hero: {
    title1: "ULTIMATE",
    title2: "STRATEGY",
    subtitle: "We are?",
    cta: "FOLLOW US",
    stat1_label: "Deep Guides (Fake)",
    stat2_label: "Contributors (Also Fake)",
  },
  about: {
    title: "// ABOUT US",
    description: "Founded in 2025, forgot the middle, forgot the rest.",
  },
  projects: {
    title: "PROJECTS & RESOURCES",
    items: [
      { id: 1, title: "Medal Database", category: "TOOL", desc: "Comprehensive Endfield Medal Database.", link: "https://medal.eihrteam.org/" },
      { id: 2, title: "Stay Tuned", category: "Coming S∞n™", desc: "Hold on, let me panic first." },
      { id: 3, title: "Stay Tuned", category: "Coming S∞n™", desc: "Click to add text." },
    ],
  },
  blog: {
    title: "LATEST LOGS",
    readMore: "Read More",
    viewAll: "VIEW ALL LOGS",
    blogLink: "/blog",
    posts: [
      { 
        id: 1, 
        date: "2025.12.24", 
        title: "Click to add text", 
        excerpt: "↑↓↑↓←→←→BABA",
        content: `
# Hidden Command Activated

> SYSTEM ALERT: Unauthorized access request detected... Establishing connection...

This is the internal terminal of the **EIHR Team**. If you are reading this, you have successfully bypassed the firewall.

## What is the Konami Code?

The Konami Code is a cheat code that appears in many Konami video games, most notably in Contra.

\`\`\`javascript
const secret = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
\`\`\`

### Our Mission

1.  Collect Data
2.  Analyze Mechanics
3.  **Formulate Strategy**

_Stay tuned, more intel unlocking soon._
        `
      },
      { 
        id: 2, 
        date: "2026.01.26", 
        title: "Click to add text", 
        excerpt: "↑↑↑↓↓",
        content: `
# Another Test Log

This is a test article to verify if markdown rendering is working correctly.

- Item 1
- Item 2
- Item 3

**Bold text** and *Italic text*.

[This is a link](#)
        `
      },
    ],
  },
  contact: {
    title: "CONNECT",
    description: "Whether you want to join the team or just say hi, we are always open for new connections.",
    socials: "Social Media",
    email: "staff@eihrteam.org",
    socialLinks: {
      bilibili: "https://space.bilibili.com/3546983822264909",
      xiaohongshu: "",
      skland: "https://www.skland.com/profile?id=7932577420418",
      github: "https://github.com/EIHRTeam"
    }
  },
  footer: {
    nav: "NAVIGATION",
    quickLinks: "QUICK LINKS",
    quickLinksItems: [
      { label: "Achievement Database", url: "https://medal.eihrteam.org" },
      { label: "INTEGRATED ICON SYSTEM", url: "https://iis.eihrteam.org" },
      { label: "ASR Platform", url: "https://asr.eihrteam.org" },
    ],
    friendLinks: "FRIENDLY LINKS",
    friendLinksItems: [
      { label: "Endfield Official", url: "https://endfield.hypergryph.com/en" },
      { label: "PRTS Wiki", url: "http://prts.wiki/" },
      { label: "Skland Wiki", url: "https://wiki.skland.com/endfield" },
    ],
    copyright: "© 2025 Endfield Industry Human Resource Team. All Rights Reserved.",
  }
};