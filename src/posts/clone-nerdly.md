---
layout: layouts/post.njk
title: How to clone Nerdly
date: 2020-01-30
---

# Instructions for survival

**Edited** by **Maye Edwin** but originally wrtiten by **Monica** and
**Jessica**.

## 🗣 How to clone this site

This here that you are reading is a Glitch project, so to create your own site that is identical,
you just have to remix this. You can [fork on GitHub](https://github.com/mayeedwin/nerdly/fork/) or remix on Glitch!

<a href="https://glitch.com/edit/?utm_content=project_nerdly&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/nerdly">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix this" height="33">
</a>

### 📝 Add new posts

All posts live in `src/posts/`. There are a few posts;

- `clone-nerdly.md`, which you are reading right now
- `welcome-to-nerdly-by-maye-edwin.md`, which is an example post that you can duplicate over and over again for new content.

To create a new post, duplicate `welcome-to-nerdly-by-maye-edwin.md`],
and start writing! This should automatically redeploy your site! If you need to force a redeploy, just "fake edit" a post (add a space, remove a space).
That will definitely trigger a rebuild!

### 📝 Add meta data

Customize icons and other website meta data in the `.src/_data/` directory!

### 👩‍🎨 Customize it

This site is written using [eleventy](https://www.11ty.io/), which is a static site generator. The docs are pretty helpful,
but the TL; DR is:

- the "look" of the different pages is in `src/_includes/layouts`. There are two layouts in this project
  - `home.njk`, used by the `index.md` post
  - `post.njk`, used by all the other posts.
- these are HTML + [Nunjucks](https://mozilla.github.io/nunjucks/) files, and if you want your pages to look different,
  this is what you should modify.
- the styles come from `css/style.css`

Enjoy!
