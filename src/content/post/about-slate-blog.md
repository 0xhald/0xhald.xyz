---
title: About Slate Blog
description: I use Obsidian to think, take notes, write essays, and publish this site. This is my bottom-up approach to note-taking and organizing things I am interested in. It embraces chaos and laziness to create emergent structure.
tags:
  - Dev
  - Tailwind
  - Astro
  - Design
pubDate: 2025-01-21
---

## ✨ Features

- Minimalist style theme, adaptable to multiple platforms
- Zero-based quick start, foolproof configuration, easy deployment
- Support for article drafts, local preview, and automatic draft filtering in production builds
- Default RSS generation with Follow subscription authentication
- Integrated Algolia search
- Complete SEO optimization to improve search engine rankings

## 🪜 Framework

- Astro + React + Typescript  
- Tailwindcss + @radix-ui/colors
- Docsearch

## 🔨 Usage

```bash
# Start local server
npm run dev
# or
yarn dev
# or
pnpm dev

# Build
npm run build
# or
yarn build
# or
pnpm build
```

## 🗂 Directory Structure

```
- plugins/            # Custom plugins
- src/
  ├── assets/         # Asset files
  ├── components/     # Components
  ├── content/        # Content collections
  ├── helpers/        # Business logic
  ├── pages/          # Pages
  └── typings/        # Common types
```

> Articles are stored in the `src/content/post` directory, supporting markdown and mdx formats. The filename is the path name. For example, `src/content/post/my-first-post.md` => `https://your-blog.com/blog/my-first-post`.

## Configuration

Theme configuration is done through `slate.config.ts` in the root directory.

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| site | Final deployment link | `string` | - |
| title | Website title | `string` | - |
| description | Website description | `string` | - |
| lang | Language | `string` | `zh-CN` |
| avatar | Avatar | `string` | - |
| sitemap | Website sitemap configuration | `{ hostname: string }` | - |
| readTime | Show reading time | `boolean` | `false` |
| lastModified | Show last modified time | `boolean` | `false` |
| algolia | Docsearch configuration | `{ appId: string, apiKey: string, indexName: string }` | - |
| follow | Follow subscription authentication configuration | `{ feedId: string, userId: string }` | - |
| footer | Website footer configuration | `{ copyright: string }` | - |

### Algolia Application

1. Deploy your site first
2. Apply for an `apiKey` at [algolia](https://docsearch.algolia.com/apply/)
3. After successful application, configure `algolia` in `slate.config.ts`
4. Redeploy

### Follow Subscription Authentication

1. Register a [follow](https://follow.is/) account
2. Deploy your site
3. Click the `+` button on `follow`, select `RSS` subscription, and enter the `rss` link (usually `[site]/rss.xml`, where `site` is the value of `site` in `slate.config.ts`)
4. Redeploy

## Article Frontmatter Description

| Option | Description | Type | Required |
| --- | --- | --- | --- |
| title | Article title | `string` | Yes |
| description | Article description | `string` | No |
| tags | Article tags | `string[]` | No |
| draft | Whether it's a draft. When not provided or `false`, `pubDate` must be provided; drafts are only visible in local preview | `boolean` | No |
| pubDate | Article publication date | `date` | No, required when `draft` is `false` |

**For more details, check the `src/content/config.ts` file**

### Example

```md
---
title: 40 questions
description: This repo maintains revisons and translations to the list of 40 questions I ask myself each year and each decade.
tags:
  - Life
  - Thinking
  - Writing
pubDate: 2025-01-06
---
```