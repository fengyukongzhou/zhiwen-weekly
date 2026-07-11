---
title: Vol.023 Have You Performed Today?
categories:
  - Zhiwen Weekly
tags:
  - Art
  - AI
  - Translation
  - Design
date: 2026-06-27
---

![](zw023-001.png)

"If he drank milk, it became white tears."

<p align="right">—— Luo Yijun</p>

<!--more-->  

## ✍️ Prologue

Two months ago, I witnessed a live performance art piece at a real estate sales center.

The artist, Li Xiangning, was embracing an ice sculpture (*Made in Heaven?*), perhaps trying to melt "him" completely.

![](zw023-002.jpg)

The "performance" included breaks. During these intermissions, the curtains were drawn, giving people a moment to catch their breath.

This "performance" was acceptable to me. I can't stomach the more agonizing spectacles, like sticking arrows into one's body. It always reminds me of *Errenzhuan*, or certain acrobat troupe acts.

I recalled Luo Yijun's almost epiphanic description of the "performance" of an *Errenzhuan* actor squeezing out milk tears:

> He's not like those NBA players. When they practice their god-like skills, they too endure unimaginable physical pain, weathering the pressure of training just to perform like gods on the court. But their skill, forged through physical torment and repetition, sits at the very peak of the capitalist pyramid as a glittering performance, securing them an excellent living and massive profits.
> 
> In a certain *Errenzhuan* venue in Northeast China, the dwarf we saw must have endured equally inconceivable conditioning. He must have practiced repeatedly: drinking water through his nose and making it flow out from the corners of his eyes. If he drank milk, it became white tears; if he drank black ink, it became black tears; if he drank red ink, it became tears of blood. You can imagine how terrifying that scene was.

Thus, with the act, followed by the interpretation, the "white tears" could truly be considered performance art.

Have you performed today?

## 🎛️ The Workbench

![](zw023-003.png)

### 📖 Glossary

I've been rethinking the design philosophy behind TransLit.

I would rather abandon parallel translation than run through the entire text first just to extract a complete glossary. This might be because I want to save Tokens as much as possible (even more than saving time?).

So, I reconsidered the previous workflow for cleaning up the glossary, which still looks a bit cumbersome (see image).

![](zw023-004.svg)

The new approach eliminates the mechanism of calling an AI to review newly added glossaries, keeping only a simple filter to check if the terms actually appear later in the text. Furthermore, before translating a specific segment, **it only extracts the glossary terms that appear within that segment**, which further cuts down on translation overhead.

The new version is hosted on the GitHub repository — [TransLit](https://github.com/fengyukongzhou/TransLit), and simultaneously deployed on [Vercel](https://trans-lit.vercel.app/). This version can only be used by providing a third-party API Key.

### 🎨 Icon Design (Continued)

This was the initial version of the TransLit LOGO, completed while Gemini was writing the frontend:

![300](zw023-005.svg)

Because it's just a small icon, I scrapped the versions with too many details and merely tweaked the version above.

The prompt was:

```
A simple black glyph icon of a floppy disk with a bold white book pictogram in the center. Extreme minimalism, flat 2D vector logo, thick lines, highly simplified silhouette, pure black and white, high contrast. --no textures, fine lines, tiny details, gradients, shading, gray, 3D
```

Using Nano Banana in Flow, I chose this one:

![300](zw023-006.svg)

Adding a little more detail resulted in the version currently in use:

![300](zw023-007.svg)

The frontend design has also been upgraded; it now features an E-ink aesthetic:

![](zw023-008.png)

## ⚡ The Flash Collection

![](zw023-009.png)

"You love playing with solid-color puzzles, and I love playing with solid-color Rubik's Cubes."

---

In *Li Dan's Work Manual*, he mentions that *Roast* doesn't use variety-show floating text effects. "The reason I insisted on making the show this way back then was simple: American comedy shows are like this, writer-centric shows are like this, and this is the proper path for stand-up comedy." But on second thought, maybe English just isn't suited for floating text effects, much like it isn't suited for bullet comments.

---

Ants on a cold pan over a hot fire.

---

Social media: one of the transmission vectors for mental illness.

---

"What little sentiment I had has all been edified away by you lot!"
