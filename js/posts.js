/*
 * ╔══════════════════════════════════════════════╗
 * ║  POSTS — Add new posts here                  ║
 * ╚══════════════════════════════════════════════╝
 *
 * To add a new post, copy this template and paste it
 * at the TOP of the array (newest first):
 *
 *   {
 *     slug: 'my-post-slug',
 *     title: 'My Post Title',
 *     titleCn: '中文标题',               // optional
 *     date: '2026-04-01',
 *     image: 'content/images/cover.jpg',   // gallery thumbnail
 *     images: [                          // optional carousel in post view
 *       'content/images/cover.jpg',
 *       'content/images/screenshot1.png',
 *     ],
 *     tags: ['Tag1', 'Tag2'],
 *     body: `<p>Content here. HTML supported.</p>`
 *   },
 *
 * Then commit & push. That's it.
 */

const posts = [
  {
    slug: 'follow-builders',
    title: 'Follow Builders',
    titleCn: '关注构建者',
    date: '2026-03-15',
    image: 'content/images/follow-builders.png',
    images: [
      'content/images/follow-builders.png',
      'content/images/follow-builders-readme.png'
    ],
    tags: ['AI', 'Open Source', 'Vibe Coding'],
    body: `
      <p>An AI-powered digest that monitors 25 curated AI builders on X and 5 major podcasts, then delivers personalized summaries — daily or weekly, in English, Chinese, or both.</p>
      <p>一个 AI 驱动的日报工具，追踪 25 位精选 AI 构建者的 X 动态和 5 档播客，生成个性化摘要——支持中英双语。</p>
      <p>No config files. You set it up through conversation with an AI agent, and customize output by just talking to it or editing plain-English prompt files.</p>
      <p>无需配置文件，通过对话完成设置，用自然语言定制输出。</p>
      <p>The philosophy: <strong>follow the people who actually build things</strong>, not the ones recycling news.</p>
      <p>理念：<strong>关注真正在做事的人</strong>，而非转述新闻的人。</p>
      <p><a href="https://github.com/forest0xia/follow-builders">GitHub →</a></p>
    `
  },
  {
    slug: 'ai-career-navigator',
    title: 'AI Career Navigator',
    titleCn: 'AI 职业导航',
    date: '2026-02-01',
    image: 'content/images/ai-career-navigator.png',
    images: [
      'content/images/ai-career-navigator.png',
      'content/images/ai-career-hero.png'
    ],
    tags: ['AI', 'Open Source', 'Vibe Coding'],
    body: `
      <p>An interactive assessment that measures where you stand in the AI era across six axes: Adoption, Mindset, Craft, Tech Depth, Reliability, and Agents.</p>
      <p>一个交互式评估工具，从六个维度衡量你在 AI 时代的位置：采用度、心态、技能、技术深度、可靠性和智能体能力。</p>
      <p>Take a 6–8 minute adaptive questionnaire, get classified from "Observer" to "Architect," and receive personalized missions and skill recommendations.</p>
      <p>完成 6-8 分钟的自适应问卷，获得从"观察者"到"架构师"的分级评定，以及个性化的提升建议。</p>
      <p>Pure HTML/CSS/JS, no build step. Supports English and Chinese with Supabase for community analytics.</p>
      <p>纯 HTML/CSS/JS，无需构建。支持中英双语，使用 Supabase 提供社区数据对比。</p>
      <p><a href="https://forest0xia.github.io/ai-career-navigator/">Live →</a> · <a href="https://github.com/forest0xia/ai-career-navigator">GitHub →</a></p>
    `
  },
  {
    slug: 'ai-1-on-1',
    title: 'AI 1 on 1',
    titleCn: '轻松看懂 AI',
    date: '2026-01-10',
    image: 'content/images/ai1on1.png',
    images: [
      'content/images/ai1on1.png',
      'content/images/ai1on1-hero.png',
      'content/images/ai1on1-basics.png',
      'content/images/ai1on1-companies.png'
    ],
    tags: ['AI', 'Open Source', 'Vibe Coding'],
    body: `
      <p>The simplest way to understand those cool-sounding words in the AI world. An interactive, single-file guide covering LLMs, tokens, context, prompts, agents, MCP, RAG, and more.</p>
      <p>用最简单的方式，快速了解 AI 世界里那些听起来很酷的词。单文件交互式指南，涵盖大模型、词元、上下文、提示词、智能体、MCP、RAG 等概念。</p>
      <p>Interactive SVG flow diagrams, token visualizations, and context window demos. Warm color scheme, mobile-friendly, with resources curated for mainland China users.</p>
      <p>交互式 SVG 流程图、词元可视化、上下文窗口演示。暖色调设计，移动端友好，精选中国大陆可访问的学习资源。</p>
      <p><a href="https://forest0xia.github.io/ai1on1/">Live · 在线体验 →</a> · <a href="https://github.com/forest0xia/ai1on1">GitHub →</a></p>
    `
  },
  {
    slug: 'life-countdown',
    title: 'Life Hourglass',
    titleCn: '生命沙漏',
    date: '2025-11-20',
    image: 'content/images/life-countdown.png',
    images: [
      'content/images/life-countdown.png',
      'content/images/life-countdown-setup.png',
      'content/images/life-countdown-dashboard.png'
    ],
    tags: ['Open Source', 'Vibe Coding'],
    body: `
      <p>A visualization tool that makes the abstract passage of time feel concrete. See your life as a progress bar, a year matrix, remaining meals, projected visits with parents.</p>
      <p>一个让抽象的时间流逝变得具体可感的可视化工具。将你的人生化为进度条、年份矩阵、剩余餐数、与父母的见面次数。</p>
      <p>The "free time" breakdown is the one that hits hardest — subtract sleep, work, chores, and screen time, and see what's actually left.</p>
      <p>最触动人的是"自由时间"分析——减去睡眠、工作、家务和刷手机的时间，看看真正属于你的还有多少。</p>
      <p>Single HTML file, no dependencies. Shareable reports via unique URLs.</p>
      <p>单 HTML 文件，零依赖。可通过唯一链接分享你的生命报告。</p>
      <p><a href="https://forest0xia.github.io/life-countdown/">Live · 在线体验 →</a> · <a href="https://github.com/forest0xia/life-countdown">GitHub →</a></p>
    `
  },
  {
    slug: 'dota2bot-openhyperai',
    title: 'Dota 2 Bot — OpenHyperAI',
    titleCn: 'Dota 2 机器人',
    date: '2025-06-01',
    image: 'content/images/dota2bot.png',
    images: [
      'content/images/dota2bot.png',
      'content/images/dota2bot-readme.png',
      'content/images/dota2bot-readme2.png'
    ],
    tags: ['Gaming', 'Open Source'],
    body: `
      <p>An open-source bot AI for Dota 2 that supports all 127 heroes with customizable difficulty, picks, bans, items, and skill builds. 218 stars, 39 forks, 361 commits.</p>
      <p>一个开源的 Dota 2 机器人 AI，支持全部 127 位英雄，可自定义难度、选禁、出装和加点。218 星标，39 分叉，361 次提交。</p>
      <p>Features a dynamic difficulty mode (Fretbots) and an AI chatbot for in-game interaction. Built on Valve's bot framework in Lua with some TypeScript.</p>
      <p>包含动态难度模式（Fretbots）和游戏内 AI 聊天机器人。基于 Valve 官方机器人框架，使用 Lua 和 TypeScript 开发。</p>
      <p><a href="https://github.com/forest0xia/dota2bot-OpenHyperAI">GitHub →</a></p>
    `
  },
  {
    slug: 'aws-career',
    title: 'Six Years at Amazon & AWS',
    titleCn: '亚马逊六年',
    date: '2025-03-01',
    image: 'content/images/aws-career.png',
    tags: ['Career'],
    body: `
      <p>Three teams, three problem spaces, one constant: I don't just build features — I define how systems should work, set the standards others ship against, and make sure the architecture holds when the next ten teams build on top of it.</p>
      <p>三个团队，三个不同的领域，但我做的事情本质上是一样的：不只是写功能，而是定义系统该怎么长、标准该怎么立，确保后面十个团队在上面盖楼的时候地基不会晃。</p>

      <p><strong>Amazon Quick Suite — Senior SDE (2025–present)</strong><br>
      Own the data connector infrastructure behind Amazon Quick Suite — the backbone that lets enterprise customers unify unstructured data from S3, SharePoint, Confluence, databases, and dozens of other sources into a single pipeline for AI agents. Rewrote the Kendra Data Connector crawling pipeline end-to-end; this architecture now serves as the core datasource infra for all Amazon Q Business customers. Re-architected network and event-driven connectors — eliminated customer network overhead entirely for S3, cut sync latency by ~95%. Designed and shipped S3 cross-account access — one connector, multiple AWS accounts, one datasource — driving cross-team alignment on credential retrieval and access control across org boundaries. Established the org-wide production-readiness bar for event-driven connectors: ACL control is the gate — if a connector can't enforce access control lists correctly end-to-end, it's a severe rish and it doesn't launch.</p>
      <p><strong>Amazon Quick Suite — 高级软件工程师（2025至今）</strong><br>
      负责 Amazon Quick Suite 的数据连接器基础设施——这是让企业客户把 S3、SharePoint、Confluence、数据库等几十种数据源的非结构化数据统一接入、供 AI 智能体调用的核心管道。从零重写了 Kendra 数据连接器的爬取管道，这套架构现在是所有 Amazon Q Business 客户的数据源底座。重新设计了网络连接器和事件驱动连接器，S3 客户的网络开销直接清零，同步延迟降了 95%。设计并上线了 S3 跨账户访问——一个连接器打通多个 AWS 账户，数据汇入同一个数据源——推动了跨组织边界的凭证获取和权限管控对齐。在组织层面定义了事件驱动连接器的上线标准：ACL 是准入门槛，访问控制链路没有按预期端到端打通的连接器，不允许发布。</p>

      <p><strong>Amazon One — SDE II (2022–2025)</strong><br>
      Technical lead for Amazon One's palm-based identity platform — architected the SDK powering physical access control across 20+ data centers and corporate sites. Designed FIDO-based palm biometric authentication for web login. Re-architected biometric matching and enrollment for unbounded horizontal scalability. Represented the product at 10+ AWS Summits across the US (Las Vegas, Philadelphia) and internationally (Dubai) — the only engineer in the org invited to AWS re:Invent for the product launch — presenting to enterprise executives and guiding them through architecture and integration strategy.</p>
      <p><strong>Amazon One — 软件工程师 II（2022–2025）</strong><br>
      Amazon One 掌纹身份平台的技术负责人——设计了驱动 20 多个数据中心和办公场所物理门禁的 SDK 架构。设计了基于 FIDO 的掌纹网页登录方案，重新架构了生物特征匹配和注册系统，支持无限水平扩展。代表产品参加了十余场 AWS Summit，跑遍拉斯维加斯、费城、迪拜等地，是大组里唯一被邀请参加 AWS re:Invent 产品宣发的工程师——直接面向企业高管做架构讲解和集成方案演示。</p>

      <p><strong>Amazon Physical Stores Tech — SDE I (2020–2022)</strong><br>
      Built pricing, checkout, and ordering systems for Amazon's physical stores — SRS, Aries (UK), Fresh, Kaspian, and Just Walk Out. Designed the 3-tier pricing strategy for UK stores, handling 500K+ price checks and 78K orders with zero post-launch bugs. Migrated the pricing platform from daemon polling to event-driven updates — cache latency from 7 hours to 10 seconds. Built a self-service pricing dashboard that cut ~250 support tickets a year. Promoted to SDE II in 22 months.</p>
      <p><strong>亚马逊实体店技术 — 软件工程师 I（2020–2022）</strong><br>
      毕业后第一份工作，给亚马逊线下门店（书店、无人商店等）做定价、结账和下单系统。为英国门店设计了三级定价方案，上线后承载 50 万次价格查询和 7.8 万笔订单，零 bug。把定价平台从轮询架构迁到事件驱动，缓存延迟从 7 小时降到 10 秒。做了个自助排查工具，一年减少 250 个工单</p>
    `
  },
  {
    slug: 'xinyu-innovation',
    title: 'Xinyu Innovation — Startup Years',
    titleCn: '新域创新 · 创业岁月',
    date: '2018-11-01',
    image: 'content/images/xinyu-innovation.png',
    tags: ['Career', 'Startup'],
    body: `
      <p>Founded and scaled a custom apparel platform in Shenzhen, pivoting from high-end bespoke designs to on-demand print customization. Served over 100,000 customers bringing their creative visions to life — and built the entire end-to-end system myself: design tooling, ordering, fulfillment, logistics, customer service.</p>
      <p>在深圳创立并发展了一个定制服装平台，从高端定制设计转型为按需印花定制。服务超过 10 万名客户，帮助他们将创意变为现实——从设计工具、下单、生产、物流到客服，整个系统都是我一个人搭建的。</p>
      <p>Java backend on SSH, web apps with Vue and Angular, a T-shirt design tool, a word cloud generator, an e-commerce iOS app. Four roles on my LinkedIn for the same company — founder, PM, backend dev, frontend dev, iOS dev. Startup life means your title is "whatever needs doing right now."</p>
      <p>SSH 框架的 Java 后端，Vue 和 Angular 的 Web 应用，T恤设计工具、词云生成器、电商 iOS 应用。LinkedIn 上同一家公司挂了四个职位——创始人、产品经理、后端、前端、iOS。创业就是：什么缺人你就是什么。</p>
    `
  }
];
