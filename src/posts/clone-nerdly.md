---
layout: layouts/post.njk
title: How to clone this site
date: 2019-12-15
---
# Instructions for survival

**Edited** by **Maye Edwin** but originally wrtiten by **Monica** and
**Jessica**.

## 🗣 How to clone this site

This here that you are reading is a Glitch project, so to create your own site that is identical,
you just have to remix this. You can click this! 
<a class="glitch-remix" href="https://glitch.com/edit/#!/remix/geoglitches">
  <img alt="Remix on Glitch" src="https://cdn.gomix.com/f3620a78-0ad3-4f81-a271-c8a4faa20f86%2Fremix-button.svg">
</a>

### 📝 Add new posts
All posts live in `src/`. There are 3 posts in this sample project:
  - `index.md`, the 🏡
  - `instructions.md`, which you are reading right now
  - `sample-post.md`, which is an example post that you can duplicate over and over again for new content.

To create a new post, duplicate [`sample-post.md`](https://glitch.com/edit/#!/geoglitchies?path=src/sample-post.md:7:107), 
and start writing! This should automatically redeploy your site! If you need to force a redeploy, just "fake edit" a post (add a space, remove a space).
That will definitely trigger a rebuild!

### 👩‍🎨 Customize it
This site is written using [eleventy](https://www.11ty.io/), which is a static site generator. The docs are pretty helpful,
but the TL; DR is:
- the "look" of the different pages is in `src/_includes/layouts`. There are two layouts in this project
  - `home.njk`, used by the `index.md` post
  - `post.njk`, used by all the other posts.
- these are HTML + [Nunjucks](https://mozilla.github.io/nunjucks/) files, and if you want your pages to look different, 
this is what you should modify.
- the styles come from `css/style.css`

## 💍 Webring
[Webrings](https://en.wikipedia.org/wiki/Webring) are websites linked together. You know, your internet friends. 
We use [Glitch collections](https://support.glitch.com/t/get-organized-with-collections/8038) to add your friends' sites to your webring.
1. Create a Glitch collection
2. Add its name to [`src/_data/siteData.json`](https://glitch.com/edit/#!/geoglitchies?path=src/_data/siteData.json:3:19), 
in the "collection" field. For example, the 
  collection we're using in this sample is at [glitch.com/@notwaldorf/frands](https://glitch.com/@notwaldorf/frands"),
  so we added `"collection": "notwaldorf/frands"` to the config file.
3. Start adding projects to that collection!
3. That's it! The projects will be automatically populated (if you're interested, that code is 
[here](https://glitch.com/edit/#!/geoglitchies?path=src/_data/friends.js:11:6))

### 👩‍⚕️ Help! I've added a site to my collection but it doesn't show up in the webring
Your site is static -- it only gets redeployed when you make changes to it (like adding a new post). When you add a
project to your Glitch collection, your site won't really pick it up until you rebuild it -- so just "fake edit" as described above! 