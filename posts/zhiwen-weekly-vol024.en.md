---
title: Vol.024 Comedian
date: 2026-07-11
categories:
  - zhiwen-weekly
tags:
  - AI
  - Art
---
![](zw024-001.png)

"Later, my teacher taught me that the mouth is the true window to the human soul."

<!--more-->

## 📜 Editorial

> Van Doesburg's refined critique was the final result of an extraordinary decade in art history. Artists across Europe reached the same destination via different paths: abstraction.

<p align="right">—Will Gompertz, *What Are You Looking At? 150 Years of Modern Art*</p>

Last week, I visited an exhibition featuring a few unfamiliar Belgian painters. Since it was an abstract show, I barely stopped walking.

**Michel Leonardi** painted some circles, but their shapes were irregular. You'd struggle to call them geometric; most would just see them as eggs.

![](zw024-002.jpg)

The exhibition featured works from four artists. Another with a sharp sense of humor was **Alain Bornain**, who painted a series of blackboards. It left me in a state of classification paralysis, unable to tell if it was abstract or realist.

![](zw024-003.jpg)

![](zw024-004.jpg)

Whether it is "abstract" or not no longer matters. Last week, I also saw works by domestic artist **Tan Xun**. I had previously seen his "Color Steel Series" (which I looked up and found is actually titled "Rainbow Series") outside the Shandong Art Museum. It is literal abstraction—extracting a common element from contemporary China and then distorting it.

More mischievous is the "Dog Pee Series" (surely not its real name; a quick search shows it is titled "Days Series"), where urine stains resemble landscape paintings. The setup includes mountain-ridge-shaped acrylic boards, stickers on the corners, and a tapestry on the back wall (with a helpful note saying "Touch allowed").

![](zw024-005.jpg)

When it comes to art, if you can't understand it, is "just enjoying the laugh" enough? Perhaps not. That is just a retreat.

But taking a step back opens up new possibilities. To make use of abstract paintings that fail to amuse, I can use my [Oogiri Generator](https://ai.studio/apps/374a9434-da67-4af7-bd92-f089d10926ec) to "interpret the works."

![](zw024-006.png)

## 🎛️ Control Panel

### 🕸️ Web Design

![](zw024-007.png)

A year and a half ago, I used Cursor (then powered by Claude 3.5 Sonnet) to revamp the styling of a Hexo blog (*[The Power of Ignorance: Using AI Programming to Optimize Hexo Blog Styling](/2025/01/20/power-of-ignorance/)*), which I've used ever since. Today, I spent some time using an Agent to write a simpler version (I used Antigravity, powered by Gemini 3.1 Pro).

In terms of configuration, I just installed a design-related Skill ([huashu-design](https://github.com/alchaincyf/huashu-design)), then followed the traditional "plan first, code later" approach. First, I had the Agent write a `DESIGN.md`, which I read and adjusted to my taste, before letting the Agent implement the code (for the prompt to write `DESIGN.md`, refer to [this article](https://mp.weixin.qq.com/s/ncsQ7F5wtnN963ti_H9Uew)).

I went with a **Brutalist** style (reminds me of the visual aesthetic of the Recraft homepage). The generated result is live and simply deployed to Vercel: [zhiwen-weekly](https://zhiwen-weekly.vercel.app/)

![](zw024-008.png)

I had the Agent translate every post into English, allowing users to toggle between Chinese and English.

Additionally, to ease future maintenance, I had the Agent write an article update Skill. Integrating it with my Obsidian vault Skill should be straightforward.

### 🔄 TransLit (Continued)

![](zw024-009.png)

Continuing with some minor updates, such as the EPUB footnotes that hadn't been properly handled yet.

After going in circles, I finally chose the most direct route: using an Agent Skill to handle the messy EPUB code: [translit-epub-prep](https://github.com/fengyukongzhou/translit-epub-prep). The goal is to use the Agent to preprocess the EPUB (doing it purely with code is too hard to adapt to every EPUB file), pulling the annotations at the end back to the end of their corresponding body pages.

Afterwards, I tweaked the core [TransLit](https://github.com/fengyukongzhou/TransLit) software to enable the previous Markdown-mediated workflow.

![](zw024-010.png)

I also realized that Google AI Studio can import GitHub repositories. So if you don't want to use paid APIs, you can import the project and ask Gemini to configure it for you:

```
Please help me import this EPUB translation project and adapt it to the current AI Studio environment. Please strictly execute the following:

1. **Model Configuration & Fault Tolerance**: Since gemini-3.5-flash easily triggers free quota limits, please change all default models to gemini-3-flash-preview (or gemini-2.5-flash). **Critical point**: Since the user's browser LocalStorage might still contain old modelName configurations, add defensive code in the backend server.ts API routes to intercept and fallback legacy model names to the safe model.
    
2. **Server Proxy Architecture**: Never expose GEMINI_API_KEY to the frontend. Ensure a custom server.ts (using Express) is provided, and proxy all Gemini model requests through the backend /api/gemini/generate endpoint.
    
3. **Vite Compatibility**: Configure Vite middleware in server.ts to ensure static assets are served correctly in both development (Dev) and production (Prod) environments.
    
4. **Build Script**: Modify the build script in package.json to include esbuild compilation support for server.ts itself, and ensure the start command runs the compiled Node output.

Please read the files before making any modifications, and execute compile_applet and restart_dev_server to verify once completed.
```

Though I still don't get how much free quota Google AI Studio actually provides.

Moreover, Gemini often returns `returned empty/error` when translating novels. I suspect it's due to sensitive content filtering, even though I'm translating perfectly normal literature. In those cases, I still opt for APIs of other models.

I posted the TransLit glossary extraction method on Xiaohongshu. Someone commented saying that with their own translation method, translating a 250,000-word novel using DeepSeek V4 Flash/Pro costs about 6 RMB.

It seems my current method can indeed be made cheaper.

Building in public is highly entertaining. One user pointed out that for inflected languages, this search-reliant method of mine might run into issues. True indeed. I hadn't translated books in highly inflected languages before, so I lacked firsthand experience.

Thus, the leadership quickly convened an emergency meeting and decided to patch the hole with the fuzzy search library `Fuse.js` first. The big boss felt that without those two search steps, TransLit would lose its edge and blend into the crowd.

For the sake of appearances, no one spoke up against it.

## 💡 Flash Collection

![](zw024-011.png)

The illustration is a replication of a certain *HARAKIRI* magazine cover I saw on Xiaohongshu, but changing the exhibitionist in the frame to a refrigerator. This image was generated by the newly released Seedream 5.0 Pro. I noticed something funny: many models (including this new one) can't draw the back of a refrigerator properly, and there are barely any reference images online. It seems that unless your refrigerator has broken down (like mine did), very few people care.

---

If God created humans the way humans created AI, He doesn't seem particularly impressive—hardly omniscient or omnipotent.

---

If you use AI to read books, why are you still reading popular science books? It feels like double distillation.

---

Is there really such a thing as "AI flavor" in AI translation? The constraint of the original text feels strong enough.
Fascinatingly, looking at the Douban reviews for Haruki Murakami's new book *Kaho*, readers generally dislike the forced "human flavor" of Lin's translation. Compared to that, the AI's "stylistic transmission" actually feels more faithful.

---

Luc Besson's *Lucy* is hailed as "the human version of *Rise of the Planet of the Apes*."

---

Netizens first, users later.

---

I think Shilin mentioned in an audio show that short video is not an spillover of other art forms; it is an art form in itself. But there is a class of videos, or variety show setups, that feels very much like a spillover of performance art.

---

Are "refusing to accept defeat" and "defeated but refusing to submit" the same thing?
