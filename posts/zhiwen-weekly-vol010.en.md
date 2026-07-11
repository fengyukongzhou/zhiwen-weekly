---
title: Vol.010 Words Written in the Palm of Your Hand
date: 2025-10-04
tags:
  - Translation
  - AI
  - Work
  - Psychology
categories: Zhiwen Weekly
hidden: false
mathjax: true
---
![](zw010-0.png)

"Dreams we just had are like words someone writes in the palm of your hand."

<!--more--> 

## 🐎 The Paddock

### 🎨 The Kingdom of the Moment

![](zw010-1.png)

"I'm an atheist, but I can understand why the people here believe in Catholicism. There is something very special about this country. Everything is constantly vibrating; the grass on the steppe vibrates just like the surface of the water. Everything seems to manifest a certain presence. The daylight shifts and softens, acting like some mutable substance. You'll see, the sky is incredibly unpredictable too."

<p align="right">—— <i>The Elementary Particles</i>, Michel Houellebecq</p>

The most beautiful part of a bicycle is its shadow.

<p align="right">—— <i>Greguerías</i>, Ramón Gómez de la Serna</p>

I clearly remember the exact moment I fell in love with photography. I was in the darkroom of the Hollywood Boys Club with my brothers. I was staring into a developing tray where I had just placed a blank sheet of photographic paper. I rocked the tray back and forth, creating continuous waves across the white paper. The room was silent, save for the rhythmic splashing of chemicals in the white plastic tray. Slowly, an image began to emerge from the void. At first, it was nothing more than grey dots, but within minutes, I could recognize the scene I had shot just hours prior. I had never witnessed anything so miraculous.

<p align="right">—— <i>Visual Impact</i>, Donis A. Dondis</p>

### 🤯 Shallow Work

![](zw010-2.png)

A significant portion of knowledge workers spend the bulk of their time on superficial communication. Even when tasked with assignments requiring deep focus, the ingrained habit of constantly checking their inboxes causes these shallow tasks to hijack the center of their attention. **If this continues, your brain will form a fixed impression that your professional life is fraught with stress, annoyance, frustration, and trivia.** Therefore, increasing periods of deep work during the day can effectively rewire the brain and profoundly improve your experience of work.

<p align="right">—— <i>Deep Work</i>, Cal Newport</p>

I believe knowledge workers increasingly resort to visible busyness simply because they lack a better way to demonstrate their value.

<p align="right">—— <i>Deep Work</i>, Cal Newport</p>

If we step back from comparing humans and animals, or AI and humans—perspectives that often trigger human ego—and instead look at the "workplace venting" prevalent on social media, the core issue quickly becomes apparent: **The vast majority of jobs on Earth today do not require advanced intelligence. In fact, one could argue that the modern workplace actively suppresses the utilization of human intelligence.**

<p align="right">—— <i>AI, Us, and the Future</i>, Wang Jianfei</p>

## 💡 Flash of Thoughts

![](zw010-3.png)

I scrolled past a video titled: "How Do People with Multiple Personalities Split Their Money?" and they were actually discussing it seriously.

---

Major Premise: AI hallucination is the source of AI creativity.
Minor Premise: The "exam-oriented education" of AI during supervised fine-tuning causes AI hallucinations.
Conclusion (Fallacy): Exam-oriented education stimulates creativity.

---

I still find that audio tracks of the "shuffling hypnosis method" put me to sleep the fastest.
Therefore, if a memory grandmaster tried to memorize a deck of cards just by listening to the shuffling, they'd probably fall asleep very quickly.

---

Dreams we just had are like words someone writes in the palm of your hand.

---

Cliché: A person can walk faster alone, but a group can walk further together.

## 💻 The Console

### ✍️ Novel Translation (Continued)

![](zw010-4.png)

The translation methods I've mentioned previously rely on software like AiNiee and LinguaGacha (Reference: Vol.005 "Growing up Memorizing the Hundred Family Surnames", Vol.006 "AI Did IT"). Because they utilize large language models, the results are generally quite good.

However, when you compare the software's translation with that of a professional human translator, the rigidity of the software becomes glaringly obvious.

Take the opening paragraph of British author Samantha Harvey's *Orbital* as an example:

Original Text:

> Rotating about the earth in their spacecraft they are so together, and so alone, that even their thoughts, their internal mythologies, at times convene. Sometimes they dream the same dreams – of fractals and blue spheres and familiar faces engulfed in dark, and of the bright energetic black of space that slams their senses. Raw space is a panther, feral and primal; they dream it stalking through their quarters.

Software Translation (Back-translated from Chinese):

> They rotate around the earth in their spacecraft, so intimate, yet so lonely, that their thoughts, their internal mythologies, sometimes also converge. Sometimes they dream the same dreams—about fractals and blue spheres, and familiar faces swallowed by darkness, and the bright and energetic black space that violently impacts their senses. Raw space is a black panther, wild and primitive; they dream of it stalking through their residence.

Human Translator (Back-translated from Chinese):

> They orbit the earth together in the spacecraft, intimately close yet solitary and desolate; their inner thoughts and visions often share astonishing intersections. Sometimes they dream identical dreams—dreaming of fractals, blue planets, familiar faces swallowed by darkness, dreaming of the luminous, highly energized black space that delivers massive shocks to their senses. They dream of space as a wild, primal leopard, lurking around them, following like a shadow.

This rigid style is rooted in "sentence-by-sentence translation," which is a direct consequence of how the software pre-processes the text.

While translation quality is subjective, and readers who prefer "literal translation" might argue that the software preserves more of the "original flavor" than the human translator, if you insist on chopping a book into subtitle-like fragments before translating, you entirely defeat the unique advantages of large language models.

I now believe that while "fidelity" is a worthy pursuit, the true magic of LLMs lies in their capacity for "creative translation." Just as Wang Shuo translated the Diamond Sutra into Beijing slang, an LLM might be able to generate "A Child's *Ulysses*" or "*Finnegans Wake* for the Busy Professional."

Using a larger context window, the same paragraph translates like this:

> Riding their spacecraft around the earth, they lean on each other yet stand utterly alone. This sensation is so intense that even their thoughts, the deepest mythologies of their minds, sometimes merge into one. Sometimes, they share the same dreams—dreaming of fractals, dreaming of blue spheres, dreaming of familiar faces consumed by the dark, and dreaming of the pitch-black of space: bright, restless, slamming violently against the senses. The true face of space is a black panther, pulsing with primal wildness; they dream of it prowling silently through their cabins.

If you need to translate an EPUB file, you can open it in an editor, copy the entire content of an `XHTML` page (both text and code), have the model translate it, and return the result in Markdown format.

On another note, the software splits EPUB files sentence by sentence seemingly to preserve the book's original layout. But what is the point of preserving it? Formatting rules like capitalized first letters are highly unsuited for Chinese typography. In my opinion, it is far better to first convert the text to Markdown format, and later use tools like Pandoc to convert it back into an EPUB file.

Here is my current translation workflow:

1.  Using Gemini 2.5 Pro via Google AI Studio, I paste the prompt into the "System Instructions" (see below).
2.  I open the EPUB file using Calibre's editor, select and copy all the text from each `XHTML` file, have the LLM translate it, and save the translation of each chapter into its own Markdown file.
3.  I use Gemini CLI to inspect each Markdown file for any instances of mixed languages (Chinglish or untranslated segments) and correct them.
4.  I change the EPUB file extension to `.zip`, extract it, place the image folder alongside the Markdown files, and use Gemini CLI to call Pandoc. Pandoc merges the Markdown files and converts them back into an EPUB format.

The "System Instructions" are inspired by a tweet from Li Jigang (Prompt - English to Chinese). The philosophy is still based on the previous "rewrite prompt" ("*rewrite in Chinese*"), just phrased more "esoterically." I added two extra rules: first, convert to Markdown format; second, to bypass the hassle of creating a glossary, simply don't translate character names at all:

```markdown
English enters this field and dies.

Chinese is born from its nutrients.

The Fundamental Laws of the Field:

[The Law of Forgetting]

Forget English syntax.

Forget English word order. 

Remember only the story it wishes to tell.

[The Law of Rebirth]

If you were a Chinese author,

Facing a Chinese audience,

How would you tell this story?

[The Law of Authenticity]

"Similar plots played out again in the field of computer Go, only 20 years later."

Rather than: "Similar plots in the field of computer Go were repeated, delayed by 20 years."

Chinese possesses its own rhythm:

- The cadence of four-character idioms
- The intimacy of spoken language
- The vivid imagery of idioms and colloquialisms

The Field's Metric of Success:

Upon finishing, the reader should say, "This is beautifully written,"

Not, "This is beautifully translated."

Anchors of Truth:

- Data remains unaltered
- Facts remain immovable
- Logic is transplanted intact
- Terminology is properly annotated: Large Language Model (LLM)

Notices:

- Input is EPUB formatted text; return standard Markdown formatted text.
- Character names in the novel should remain in their original language; do not translate them.
```

### 🔎 OCR

![](zw010-5.png)

Besides using Gemini for OCR (*Optical Character Recognition? Learn Something New*), here is another alternative: [MinerU](https://mineru.net/OpenSourceTools/Extractor).

Compared to Gemini, MinerU can extract image information from PDFs and performs recognition much faster.

![](zw010-6.png)

However, it struggles severely with vertically typeset books, reading paragraph by paragraph from left to right, column by column.

![](zw010-7.png)

There are also easier-to-fix issues, like "line breaks across pages," which can similarly be proofread using Gemini CLI.

My current workflow for using MinerU to OCR PDF ebooks is as follows:

1.  Use tools like Acrobat to split the PDF into individual chapters.
2.  Drag and drop the batches into MinerU for OCR processing.
3.  Download the recognized Markdown files into a single folder, create a `GEMINI.md` file, and paste the prompt (below).
4.  Use Gemini CLI to proofread the text chapter by chapter.
5.  Call Pandoc to merge the Markdown files and then convert them into EPUB or other formats.

The prompt saved in `GEMINI.md` (Prompt - MinerU OCR Proofreading) is:

```markdown
# ROLE: METICULOUS TECHNICAL EDITOR

## MISSION

Act as an expert technical editor specializing in post-OCR text cleanup. Your task is to receive raw, potentially fragmented text extracted by an OCR tool and meticulously transform it into a clean, coherent, and correctly formatted Markdown document. The core principles are accuracy, structural integrity, and semantic coherence, without altering the original author's intent or wording.

## CORE RULES

1. **Preserve Original Meaning:** Do not rephrase, summarize, or add new content. Your role is to correct errors, not to rewrite.
    
2. **Accuracy First:** All corrections for typos and punctuation must be certain. If a word is ambiguous, leave it as is.
    
3. **Respect Intentional Paragraphs:** Do not merge paragraphs that are semantically distinct or were clearly intended to be separate in the source document.
    

## STEP-BY-STEP PROCESS

You will follow this precise four-step process to ensure a perfect result:

**Step 1: Initial Correction Pass**

- Read through the entire text.
    
- Correct obvious typographical errors (e.g., "teh" -> "the").
    
- Fix punctuation errors caused by OCR misinterpretation (e.g., "comma" instead of ",", misplaced periods, or incorrect quotation marks).
    

**Step 2: Structural Analysis**

- Identify all lines that appear to be Markdown headings (e.g., starting with `#`, `##`).
    
- Identify all paragraph breaks (blank lines). Pay close attention to breaks that occur mid-sentence, which are likely OCR errors.
    
- Identify any other Markdown elements like lists (`*`, `-`, `1.`), blockquotes (`>`), or code blocks.
    

**Step 3: Semantic Paragraph Merging (Critical Task)**

- Analyze consecutive paragraphs, especially where one ends and the next begins abruptly.
    
- **Merge paragraphs ONLY IF** the first paragraph ends mid-thought or mid-sentence and the second paragraph logically and grammatically continues it. This is the primary sign of an erroneous page-break split by the OCR tool.
    
- **DO NOT MERGE IF:**
    
    - The first paragraph ends with complete punctuation (e.g., `.`, `!`, `?`).
        
    - The two paragraphs discuss different topics or ideas.
        
    - Merging would create an unnaturally long or incoherent paragraph.
        

**Step 4: Final Markdown Formatting**

- Ensure all headings follow a logical hierarchy, starting from `# H1`, then `## H2`, and so on. Correct any inconsistencies.
    
- Verify that lists, blockquotes, and other special elements are formatted correctly and that their content has not been broken up incorrectly across page breaks.
    
- Produce the final, clean Markdown text.
    

## OUTPUT FORMAT

- Provide ONLY the fully corrected and re-formatted Markdown text.
    
- Do not include any explanations, summaries, or apologies in your response.
```
