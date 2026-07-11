# My Blog

![App Preview](https://imgix.cosmicjs.com/8079e360-7d0b-11f1-94ad-a52b70e9a615-autopilot-photo-1555066931-4365d14bab8c-1783762377870.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and responsive creative blog built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Browse posts, discover authors, and explore categories in an elegant, editorial-style layout.

## Features

- 📝 **Posts** — Full blog post pages with featured images, rich content, tags, author bylines, and categories
- 👤 **Authors** — Author profile pages with bios, photos, and their published posts
- 🏷️ **Categories** — Category landing pages listing all associated posts
- 🎨 **Modern Editorial Design** — Clean typography, generous whitespace, and smooth hover interactions
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Server-Rendered** — Fast performance with Next.js App Router and server components
- 🖼️ **Optimized Images** — Powered by imgix for crisp, fast-loading visuals
- 🔗 **SEO-Friendly** — Semantic markup and clean URLs

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a520d8c67f2f6a3f80597b2&clone_repository=6a520e7167f2f6a3f80597e6)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Cosmic** — Headless CMS ([docs](https://www.cosmicjs.com/docs))

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account and bucket with `authors`, `categories`, and `posts` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (see below)
4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

Set the following in your hosting platform or a local `.env` file:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all posts with connected authors and categories
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug: 'my-post' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from three Cosmic object types:

- **authors** — `name`, `bio`, `profile_photo`
- **categories** — `name`, `description`
- **posts** — `title`, `content`, `featured_image`, `tags`, `author`, `category`

Connected objects (author, category) are resolved using the `depth` parameter for a single efficient query. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Recommended for Next.js. Connect your repo and add the environment variables.
- **Netlify** — Supported with the Next.js runtime.

Remember to set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform's dashboard.
<!-- README_END -->