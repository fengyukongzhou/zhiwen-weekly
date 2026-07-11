---
title: Vol.008 Hands in Pockets to Hide the Clumsiness
date: 2025-06-26
tags:
  - AI
  - Translation
  - Design
categories: Zhiwen Weekly
hidden: false
mathjax: true
---
![](zw008-0.png)

"His conversation was fluent and witty, yet she felt a pang of disappointment, sensing that he spoke not to confide, but to conceal."

<!--more--> 

## 🐎 The Paddock

### 📖 The Era of the Reader

![](zw008-1.png)

**The profound sense of fulfillment that comes from being a reader can make you feel that not writing at all is perfectly fine.** Because as a reader, you have access to the absolute best creations in human history—works so magnificent they leave you in a state of awe, making you wonder, "Who am I? How am I even worthy of reading such a masterpiece?"
<p align="right">—— Tang Nuo</p>

I believe that **when people who have read your work offer opinions on a specific section, regardless of the direction of that feedback, that section usually genuinely harbors some sort of issue.** In other words, the plot development there is somewhat clunky or abrasive, and my job is to smooth out those rough edges. As for the method used to smooth them out, that is entirely up to the author.
<p align="right">—— <i>Novelist as a Vocation</i>, Haruki Murakami</p>

**Just as I couldn't hear that transcendent voice, I could only keep reading—reading poems written by others, cutting and refining my own sentences from within them.** I, too, once tried to pretend I was fortunate enough to hear that transcendent voice, pretending to spontaneously compose a brilliant poem that I had actually spent the previous night agonizing over and memorizing. But I quickly saw through the sheer boredom and absurdity of it. After all, besides myself, who was I really pretending for?
<p align="right">—— <i>Poetics</i>, Yang Zhao</p>

When thinking about AI and reading, I'm often reminded of an old, blunt saying: "**There are some things that, no matter how bad you are at them, you just can't ask your neighbor to do for you.**"
<p align="right">—— Jia Hangjia</p>

### 👅 New Tastes

![](zw008-2.png)

"Have you figured out a solution yet?" she asked him, while muttering to herself, "**There's a bitter taste in my mouth, it's almost as if a whole person is living inside it!**"
<p align="right">—— <i>Last Love in Constantinople</i>, Milorad Pavić</p>

I sat for another ten minutes or so, finished the wine in my glass, washed it clean, placed it back in the compartment under the counter, and then went outside to pull down the rolling shutter door. My foot slipped, and I fell hard, landing flat on my back. I lay there on the ground for a while; if someone had handed me a quilt right then, I would have gladly fallen asleep. The sound of cars passing in the distance, the smell of worn stones on the ground—**that smell was actually quite pleasant, a sweet scent accumulated from the lashing of too many shoe soles**.
<p align="right">—— <i>The Uninterrupted Man</i>, Shuang Xuetao</p>

In the novel (*Everyman* by Philip Roth), the protagonist recalls his youth, swimming vigorously in the ocean, filled with an indescribable, narcissistic joy in his young, powerful body: "**Except for the giddy, mindless joy of being battered by the waves all day, the sheer taste of it, the taste of it made him so ecstatic he could have taken a bite out of himself to savor the flavor of being a creature of flesh and blood.**" This description is utterly brilliant. Literary expressions of youthful narcissism can be channeled through sexual desire, but they can equally be expressed through oral desires; both tap directly into the most potent pulse of life. Even if it's the taste of flesh and blood in both cases, the longing for life chewed out of them is entirely different.
<p align="right">—— <i>Don Quixote's Glasses</i>, Zhang Qiuzi</p>

"Aren't you going to eat?" Olivia asked me. She seemed entirely absorbed in savoring her dish, yet, as always, highly alert, while I was captivated by her, just watching. I imagined the sensation of her teeth chewing my flesh, felt her tongue lifting me to the dome of her palate, coating me in saliva before pushing me down the opening of her esophagus. I sat before her, simultaneously feeling that a part of my body, or perhaps all of it, was inside her mouth, being crushed, torn apart fiber by fiber. **It wasn't an entirely passive state, because while being chewed by her, I felt I was acting upon her as well**, transmitting sensations from the taste buds in her mouth throughout her entire body; every tremor she felt originated from me. It was a complete relationship of mutual interaction. We were both implicated, both controlled by this connection.
<p align="right">—— <i>Under the Jaguar Sun</i>, Italo Calvino</p>

There's a meme about the brain: **Humans can imagine (though not necessarily accurately) what anything they see would feel like to lick.** This is generally true; it's likely an instantaneous combination of memory, association, and olfactory senses. The only exceptions I can think of are iron in the Northeast winter, dog feces, century eggs in the eyes of foreigners, and truffles in the eyes of the Chinese.
<p align="right">—— Jia Hangjia</p>

## 💡 Flash of Thoughts

![](zw008-3.png)

Why do bees "sting" (蛰) while mosquitoes "bite" (咬)?
I don't know, but visually, "honey" (蜜) looks a lot like "sting" (蛰), and "mosquito" (蚊) looks a lot like "bite" (咬).

***

Louis C.K. has a bit about how weird it is that people get angry when their flight is delayed, considering that human flight itself is a miracle. Similarly, people fly into a "complete rage" when an AI gives an irrelevant answer.
This just shows that human context windows are woefully short, no matter how long we live.

***

If you ever asked a question but forgot the person's answer, it means their answer danced around the question.

***

Internet slang satisfies the netizen's urge to make strange noises anytime, anywhere, even if only through text.

***

"In a hopeless research field, you'll find that 'points of innovation' are a non-renewable resource."
If I squeezed all the water out of my three years in grad school and left only one sentence, this would be it.

***

A book on managing blood sugar mentioned the "Maillard reaction" occurring inside the human body. It immediately reminded me of Li He's poetic lines: "Only the cold moon and warm sun are seen, coming to fry away human lifespan."

## 💻 The Console

### 📖 Novel Translation (Continued)

![](zw008-4.png)

Here is my recently optimized workflow for translating novels:

1. **EPUB Pre-processing**: I use Calibre to edit the original EPUB file, stripping away the cover, table of contents, copyright page, author bios, and anything unrelated to the main text, ensuring the text is completely clean.
   
2. **Format Conversion**: I export the pre-processed EPUB into a plain text (`.txt`) file, ready for glossary extraction.
   
3. **Glossary Extraction**: I submit the `.txt` file along with a custom prompt (detailed below) to Gemini (or a similar LLM) to generate a specialized glossary.
   
4. **Assisted Translation**: I import the **pre-processed EPUB file from step 1** and the **glossary generated in step 3** (in JSON format) into [LinguaGacha](https://github.com/neavo/LinguaGacha) to execute the translation.

**Example Gemini Glossary Extraction Prompt:**

```text
Based on the provided novel text, please extract a glossary required for AI full-text translation (into Chinese). Specific requirements are as follows:

1. **Extraction Scope**:
    - Frequently recurring character names (including nicknames and abbreviations).
    - Proper nouns (organizations/locations/technologies/magic, etc.).
    - Author-invented words (label as "invented word").
    - Culture-specific concepts (phrases requiring free translation).
        
2. **Output Format**: Strictly use a JSON array with the following structure:

[ { "src": "Original Term", "dst": "Suggested Translation (leave blank if no specific rule)", "info": "Attribute Description (format: 'Name-M/F' or 'Location/Organization/Invented/Magic', etc.)", "regex": false } ]

**Note**:
- Do not list overly common words, overly complex compound words, name+title structures, or translations of entire sentences.
- Translation explanations should only go in "info" and should not use parentheses in the "dst" field.
- Provide only the single most appropriate translation for "dst".
```

**LinguaGacha Recommended Gemini Settings (from the creator):**

- **Primary Model**: Gemini 2.0 Flash
  
- **Free Quota**: ~1,500 free API calls per day, capable of translating roughly 500,000 to 1,000,000 words.
  
- **Recommended LinguaGacha Basic Settings**:
    - Requests Per Minute (RPM) Threshold: 10
    - Token Limit per Request: 512

### 🎨 Icon Design (Continued)

The FLUX Kontext model seamlessly blends powerful AI image generation with robust, Photoshop-like editing capabilities.

Next, we will use it to showcase the LOGO we designed previously:

![](zw008-5.png)

It feels as though, even with every tool imaginable at our disposal, creativity remains the most precious commodity of all.
