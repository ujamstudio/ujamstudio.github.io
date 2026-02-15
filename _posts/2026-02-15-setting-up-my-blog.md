---
title: Setting Up My Blog with GitHub Pages
category: Projects
summary: A quick walkthrough of how I built this blog from scratch, hosted on GitHub Pages.
---

## Why GitHub Pages?

I wanted a simple, free, and fast way to publish my study notes and
project logs. GitHub Pages checks all the boxes — it serves static
files directly from a repository with zero configuration.

## Project Structure

```
ujamstudio_blog/
├── _config.yml        # Jekyll configuration
├── _layouts/          # HTML templates
│   ├── default.html
│   └── post.html
├── _posts/            # Markdown posts go here
│   └── 2026-02-15-setting-up-my-blog.md
├── index.html         # Home page
├── about.md           # About page
└── style.css          # Global styles
```

## Writing a New Post

Create a file in `_posts/` with the naming format:

```
YYYY-MM-DD-your-post-title.md
```

Add front matter at the top:

```yaml
---
title: Your Post Title
category: Study Notes
summary: One-line description shown on the home page.
---
```

Then write your content in Markdown below.

## What's Next

- Add more posts as I study
- Consider adding search functionality
- Maybe add a dark mode toggle
