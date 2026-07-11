---
title: Vol.018 Start Collecting Tetrapods!
date: 2026-03-14
tags:
  - Translation
  - Github
  - AI
categories: Zhiwen Weekly
hidden: false
mathjax: true
---

![](vol018-001.png)

"Lakes are the playgrounds of water; rivers are its running tracks."

<!--more--> 

## 🐎 The Hippodrome

![](vol018-002.png)

### 🌊 Stream of Consciousness

Through decades of painstaking effort, people gradually discovered that the names of these psychological states did not align with their processes and contents. They also came to realize the polysemy, ambiguity, and heterogeneity of emotions and behavioral motives. **As a result, literature abandoned the naming of these states and turned instead to detailed descriptions.** The more precise the description of the "stream of consciousness" or of behaviors that can only be expressed through action, the closer the writer gets to reality, achieving maximum effect through this immense limitation and relinquishment. This is because the reader, like the protagonist in the work, is pushed toward the crucial climax of the story in a natural and gradual manner. "Aha! So everything he did was out of love for her!" the reader might say to themselves at a certain moment. This psychological discovery makes the emotional state of fictional characters a hundred times more authentic than merely repeating the word "love" over and over. More importantly, this fragmented and complex emotion, its elusive nature, its development and changes, as well as the unique and distinct "style" of the aforementioned characters, can only be conveyed in this way.

<p align="right">— Stanisław Lem, <i>Summa Technologiae</i></p>

I also realize that in modern stream-of-consciousness fiction, the rupture between thought and action is eternal; grand expanses of continuous thought inevitably come at the cost of interrupting action. In real life, it is actually very difficult for a person to sustain prolonged flights of fancy, because they will be interrupted by various trivialities of the outside world during the day, or swallowed by sleep at night. Even a person suffering from insomnia all night will toss and turn. Something like Molly's dozens of pages of fantasy in the final chapter of *Ulysses* can fundamentally only be a product of pure literature. I understand, of course, that writers have their aesthetic pursuits in depicting consciousness so "suspended." When readers labor through the pages-long psychological activities of the suicide in Faulkner's work, those sprawling, meandering sentences are simply like an endless funeral procession, escorting the protagonist to the icy riverbed. **It's just that sometimes, out of sheer curiosity, I'd very much like to invite students to add a few actions for the person engaged in vast stretches of fantasy, because I find it truly hard to imagine someone doing absolutely nothing but thinking for a dozen pages straight.**

<p align="right">— Zhang Qiuzi, <i>A Day with Mrs. Dalloway</i></p>

The reason stream of consciousness is not a grasp of the true state of human consciousness, but merely an imaginative grasp, is because the reduction of consciousness still relies on language and text. **As long as we use text, we are inevitably constructing order after the fact. No one can think and write simultaneously, syncing text and thought, just as you cannot sing and swallow water at the same time.** A person can only finish thinking and then use a pen to record it; a retrospective action is always a supplementary order, even if this order appears quite chaotic.

<p align="right">— Zhang Qiuzi, <i>Don Quixote's Glasses</i></p>

However, although both stream of consciousness and interior monologue are used to depict psychology, there is a fundamental difference between them. On this point, Zheng Shusen provides an incisive explanation: **only with the addition of free association does interior monologue become stream of consciousness.** Recognizing this, we can discern the subtle difference between *The Sound and the Fury* and *Crime and Punishment*: the former is the non-linear flow of the protagonist's consciousness, while the latter is the character's internal self-debate without an audience in their mind.

<p align="right">— Dan Hansong, <i>Reading as an Antidote to Reading</i></p>

So, what exactly determines whether the language of a novel is effective? It depends on two characteristics: internal cohesion and necessity. **The story told by a novel can be incoherent, but the language shaping the story must be coherent, so that the incoherence of the former can successfully masquerade as genuine and viable.** A classic example is Molly Bloom's interior monologue at the end of Joyce's *Ulysses*. The chaotic stream of consciousness is filled with memories, sensations, thoughts, and passions. Its mesmerizing charm lies in the twisting, disjointed surface narrative, and a strict cohesion maintained beneath this clumsy, disordered exterior—a structure commanded by a system of rules, principles, or patterns from which this interior monologue never deviates. Is this an accurate depiction of a flowing consciousness? No. This is a literary creation, and its persuasive power is so strong that it makes us feel as though we are replicating Molly's conscious wandering, when in fact, we are creating it.

<p align="right">— Mario Vargas Llosa, <i>Letters to a Young Novelist</i></p>

## ⚡ Flashes of Thought

![](vol018-003.jpg)

The two impacts of AI on work: the helper and the overseer.

---

Besides hourly wages, you can also calculate your own Token rate.

---

Discarded idea: Assign a random temperature number to the model and have it guess its own temperature.

---

"Nirvana band, reincarnation tour."

---

"Ballet is nothing but toes touching the ground."

---

"When the Paralympics perform better than the Olympics, technology will truly be advanced."

---

Lakes are the playgrounds of water; rivers are its running tracks.

---

Sugar-free drinks claim to contain no sugar; sugared drinks claim to contain no sweeteners.

---

Writers only write what you like, directors only film what you like—how terrible their taste must be...

## 🛠️ The Console

### 🤖 AI Translation (Continued)

![](vol018-004.png)

[An article by Baoyu](https://mp.weixin.qq.com/s/l32EPYG5RmeLXqG6RlXKug) documents the iteration of AI translation methods, from the three-step "translation-proofreading-paraphrasing" method to the reasoning model's "rewriting," and finally to the recent Agent workflow (summarized into a Skill—[baoyu-translate](https://github.com/JimLiu/baoyu-skills/tree/main/skills/baoyu-translate)).

To make the article translation Skill applicable to translating EPUB ebooks as well, I made the following modifications based on my previous approach (Vol.015 A Personal Experience):

- Added a section of content to the `SKILL.md` file (attached below)
- Added a snippet of `epub2md.ts` code in `scripts`
- Attached the `epub-style.css` file in the `references` folder.

```markdown
## EPUB Ebook Processing Workflow

For EPUB format files, the following processing steps are added before and after the original Markdown translation workflow:

### 1. Pre-processing (EPUB -> Markdown)

When the input source is an `.epub` file, a custom script is called to execute format conversion, metadata extraction, and image decompression.

- **Execution Command**: `${BUN_X} ${SKILL_DIR}/scripts/epub2md.ts "{input}.epub"`
    
- **Processing Logic**: Automatically creates a folder with the same name in the EPUB's sibling directory, saving the converted Markdown and `media/` resources into it.
    
- **Conversion Process**: ZIP decompression extraction -> XML parsing to get the table of contents (OPF) -> HTML to Markdown (Turndown) -> Automatic linking of local images.

### 2. Translation Phase

- **Translation Workflow**: Same as above (following the aforementioned chunking, analysis, and refinement logic).

### 3. Post-cleanup and Structural Optimization

- **Merging and Encoding**: Merge the translated chunks. You must explicitly specify `UTF8` encoding for reading and writing.
    
- **Heading Leveling**: Since original EPUB HTML often marks all section titles as `<h1>`, merging them will flatten the hierarchy. The following logic needs to be executed:
    
    - **Anchor Chapter Titles**: Identify lines containing "Chapter," "第X章" (Chapter X), or core chapter indicators of the book, and keep them as `#`.
        
    - **Global Downgrade**: Downgrade all remaining `#` headings to `##`, `##` to `###`, and so on.
        
    - **Clean Metadata**: Change picture captions or tips that were originally `######` to bold text (`**...**`) to prevent them from entering the table of contents.
        
- **Image Paths**: Ensure image paths correctly point to `./media`.

### 4. Reassembly and Export (Markdown -> EPUB)

Once translation is complete, the Markdown can be repackaged into an EPUB. Pandoc is still recommended for this step to leverage its powerful ebook assembly capabilities.

- **Reference Styles**: Use `${SKILL_DIR}/references/epub-style.css` to optimize Chinese typography (first-line indent, Teal-colored headings, etc.).
    
- **Execution Command**: `pandoc "{final}.md" -o "{translated}.epub" --metadata title="{Book Title}" --metadata author="{Author}" --resource-path="{dir}" --css="${SKILL_DIR}/references/epub-style.css" --split-level=1`
    
- **Notes**: Ensure `--resource-path` points to the directory containing `media/`, so that Pandoc can correctly embed the images.
```

I am still using Gemini CLI. After pressing `Ctrl+Y` to enter YOLO mode, I can just sit back and wait for the task to execute.

The results are actually mediocre; it's still better suited for non-fiction books. If it were used to translate a full-length novel, the names would still be translated inconsistently (it would be better to have a rule like "never translate names"), and missing translations in some chapters are not easy to spot.

Overall, I am still more satisfied with the web app I wrote previously, [Gemini EPUB Translator](https://ai.studio/apps/drive/1fet85vtv0GbwJ7T7fazNVCzTw4u5L6Fp). If you want to try out the Agent's EPUB translation capabilities, you can refer to my modified Skill—[epub-translator](https://github.com/fengyukongzhou/epub-translator).

### 🧩 Obsidian Plugins (Continued)

![](vol018-005.png)

When encountering minor issues while taking notes, rather than using AI to write an Obsidian plugin to solve them, it's better to just write a simple script and encapsulate it into a Skill that's easily callable by the Agent.

Take the Obsidian plugin I wrote before (Vol.013 Outsourcing Memory) for example: I spent a long time troubleshooting issues, and in the end, it only barely achieved its function.

Now, I had the Agent read the code and rewrite it as a new Skill version, saved at [Joffoo-gemini-skills](https://github.com/fengyukongzhou/Joffoo-gemini-skills).

Previously, you could also use AI to write code scripts, but saving them in the note vault felt "out of place." It wasn't until Skills provided a unified management standard that prompts and code became entirely usable together; `SKILL.md` is like a `README.md` written for the Agent to read.
