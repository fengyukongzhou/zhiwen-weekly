---
title: Vol.006 AI Did IT
date: 2025-03-02
tags:
  - AI
  - Design
  - Translation
  - Github
categories: Zhiwen Weekly
hidden: false
mathjax: true
---
![](zw006-1.png)

"The sleeves on this hoodie are way too long, and where am I supposed to put my head?"

"Sir, these are pants."

<!--more--> 

## 👋 Editor's Note

A text-based game I stumbled upon while scrolling through my phone actually offered a rather profound insight. It happens to be a Gold Award winner from the 6th Emirates International Poster Festival (EIPF).

![](zw006-2.png)

## 🐎 The Paddock

### 🤔 Attention

![](zw006-7.png)

We often label writers who type at a glacial pace, attempting to make their drafts look like printed copy, as perfectionists. While this sounds like the ultimate compliment for professionalism, the reality is quite the opposite: **a true professional waits until the proofreading stage to play the critic, allowing them to focus entirely on one task at a time**. Proofreading requires laser-sharp focus on the precision of word choice, and thus **it demands a more concentrated form of attention**. Conversely, **the process of finding the right words during the writing phase requires a more fluid, floating attention**.

...

When it comes to writing, from research to proofreading, every step is intrinsically linked. All these micro-steps must connect in a way that allows a seamless transition from one task to the next. Yet, they must remain sufficiently independent so we can flexibly adapt to whatever is needed in any given moment. This echoes another of David Allen's insights: **the brain only lets go and focuses entirely on the task at hand when it trusts the system and knows everything is under control**.

<p align="right">—— <i>How to Take Smart Notes</i>, Sönke Ahrens</p>

Before you even begin writing, your research should be complete, and your train of thought crystal clear. As Ed McCabe put it: "**When I think, I don't work; when I work, I don't think.**" Furthermore, "**When you're ready to start, you should be in a state of natural overflow, pouring out what you've accumulated.**"

<p align="right">—— <i>The Copy Book</i>, Interpretation by Li Fangyuan</p>

**Each stage of writing demands a different AI tool (or at least a different AI window)**, because the cognitive process varies at each step. This mirrors how humans separate formulating arguments, gathering materials, and actual writing to maintain a piece's logic and flow.

<p align="right">—— <i>Pinglunshi's AI Productivity Experience</i>
  (I recommended this article <a href="https://fengyukongzhou.github.io/2025/01/11/zhiwen-weekly-vol002/">previously</a>)
</p>

**Multitasking is not a new skill humans have acquired** to adapt to the demands of our late-modern information society. **Rather, it represents a regression.** Multitasking is ubiquitous among animals in the wild when they are in hunting grounds. This technique of attention management is an essential survival skill in the wilderness.

<p align="right">—— <i>The Burnout Society</i>, Byung-Chul Han</p>

## 💻 The Console

### ⌨️ Segment Displays

![](zw006-3.gif)

Yesterday, I came across a video on Bilibili explaining segment displays. The most common ones are the digital numbers in elevators, but they can also display letters and even certain Chinese characters. I found it quite fascinating and decided to use it as material for practicing AI programming.

Initially, I wanted to use Cursor's `Claude 3.7` for this experiment, but due to usage limits, I couldn't access the trial. Ultimately, I completed the project using `Claude 3.5`.

Just like [last time](https://fengyukongzhou.github.io/2025/01/20/power-of-ignorance/), the biggest challenge wasn't my lack of programming skills, but figuring out how to accurately describe the desired visual effect to the AI. For instance, explaining the direction of the diagonal lines in a 16-segment starburst display proved difficult for the AI to grasp, even with screenshots. Eventually, I used the `Claude 3.7` trial on lmarena.ai to modify the style of the diagonal lines, and then manually adjusted the angles to achieve the perfect result.

I also have to thank whoever posted the [truth table](https://blog.csdn.net/icifan/article/details/126477145) online—it saved me from reinventing the wheel.

By the way, this highly-praised prompt is definitely worth a try:

```text
Reflect on 5-7 possible sources of the problem, distill them down to the 1-2 most likely sources, then test and validate your hypothesis before implementing the actual code fix.
```

The project has been uploaded to [Github](https://github.com/fengyukongzhou/Segment-code) and deployed on Vercel. [Feel free to try it out](https://segment-code.vercel.app/).

![](zw006-4.png)

Additionally, the AI generated a few titles for this segment, such as:

- "The Hidden Easter Eggs in Elevator Numbers Only Programmers Understand"
- "I Taught AI to Draw Diagonal Lines, But the Process Was Like Teaching Grandma to Use a Smartphone"

Its linguistic prowess is undeniably impressive.

### 🎨 Cover Design (Continued)

Watching [Chip Kidd's TED Talk](https://b23.tv/oVAxr5V), he mentions how his professor started their first class by drawing an apple on the chalkboard and writing "Apple" underneath. The professor said, "You either say this, or you show that. **But you don't do both, because it treats your audience like they are morons.**"

![](zw006-5.png)

That made me realize my previous cover for *Knife* was rather lackluster—a clear example of that "flashcard" style of "moronic" design (left image below). The original cover (right image below) is significantly better; it features a knife without explicitly showing one, making it an excellent example of design where "the absence speaks volumes."

![](zw006-6.jpg)

This realization led me to a dead end: what else represents a knife without actually being one? I thought of the "Kelvin wake pattern," but once I actually sketched it, I realized it was too hard to connect to a knife slash.

Later, reading *The Design World of Chip Kidd*, I learned that cover design often relies heavily on "borrowing"—sampling photography and artwork (though commercial release requires proper licensing). For example, the original cover above (seems to be) a reinterpretation of Lucio Fontana's work. Inspired by this, I formulated a workflow for "image regeneration":

1. Select (or generate) an *appropriate* image, crop it suitably, and import it into Recraft.
2. Use the `Fine-tune` mode and set an *appropriate* similarity level.
3. Input a very simple prompt, such as: `Design a book cover for "Knife", by Salman Rushdie.`

![](zw006-9.png)

Recraft's "regenerated" cover for *Knife* was truly unexpected: the original image had absolutely nothing to do with a "knife," yet the regenerated version featured a knife-shaped door. Inside the doorway stood a minuscule figure, deep in thought, somehow resonating with the book's narrative.

Indeed, art relies heavily on the viewer's capacity for interpretation.

### 📖 Novel Translation (Continued)

![](zw006-8.png)

Last time, I mentioned the "three-step" translation method. I recalled seeing a [free-translation prompt](https://mp.weixin.qq.com/s?__biz=Mzk1NzgxMjQ0OA%3D%3D&mid=2247483707&idx=1&sn=7c3a47ff8767c559840002b6bc6b2264&scene=45#wechat_redirect) whose key trick is to avoid the word "translate" and instead say "**rewrite in Chinese**". I decided to compare the effectiveness of these two prompts.

I selected David Foster Wallace's short story *DEATH IS NOT THE END*. The "three-step" prompt remained the same as last time, while the free-translation prompt was:

```text
This story, titled "DEATH IS NOT THE END," explores the complex relationship between achievement, existence, and nothingness through extreme detail and nearly static scenes. Keep English names unchanged. Now, while respecting the original meaning and maintaining the original formatting, **rewrite the following content in Chinese**.
```

I used `Deepseek-V3` for the translation. To save space, here is a comparison of just a short excerpt:

Original Text:

> The fifty-six-year-old American poet, a Nobel Laureate, a poet known in American literary circles as ‘the poet’s poet’ or sometimes simply ‘the Poet,’ lay outside on the deck, bare-chested, moderately overweight, in a partially reclined deck chair, in the sun, reading, half supine, moderately but not severely overweight, winner of two National Book Awards, a National Book Critics Circle Award, a Lamont Prize, two grants from the National Endowment for the Arts, a Prix de Rome, a Lannan Foundation Fellowship, a MacDowell Medal, and a Mildred and Harold Strauss Living Award from the American Academy and Institute of Arts and Letters, a president emeritus of PEN, a poet two separate American generations have hailed as the voice of their generation, now fifty-six, lying in an unwet XL Speedo-brand swimsuit in an incrementally reclinable canvas deck chair on the tile deck beside the home’s pool, ...
> <cite>DEATH IS NOT THE END</cite>

"Three-step" Translation (Back-translated from Chinese for demonstration):

> This fifty-six-year-old American poet, a Nobel Prize winner, hailed by American literary circles as the "poet's poet" or simply the "poet," is lying on the deck. He is bare-chested, moderately overweight, half-lying in a partially reclined deck chair, bathing in the sun. He is half-supine, of medium build but not severely overweight. He has won two National Book Awards, one National Book Critics Circle Award, one Lamont Prize, two National Endowment for the Arts grants, one Prix de Rome, one Lannan Foundation Fellowship, one MacDowell Medal, and the Mildred and Harold Strauss Living Award from the American Academy and Institute of Arts and Letters. He is also the former president of PEN, and two generations of Americans have praised him as the voice of their generation. Now, he is fifty-six, wearing an unwet XL Speedo swimsuit, lying in a gradually reclining canvas deck chair on the tile deck next to his home's pool.

"Rewrite in Chinese" (Back-translated):

> This fifty-six-year-old American poet, a Nobel laureate in literature, known within American literary circles as the "poet's poet" or sometimes simply the "poet," is currently lying on the outdoor terrace, bare-chested, slightly out of shape, half-reclined in a partially adjustable lounge chair, basking in the sun, reading. Half-supine, of moderate weight but not severely obese, he has won two National Book Awards... He is also the former president of PEN, and two generations of Americans have hailed him as the spokesperson of their era. Today, at fifty-six, wearing a dry, XL-sized Speedo swimsuit, he lies on an adjustable canvas lounge chair upon the tiled terrace by the pool beside his home.

I tested this with both `Deepseek-R1` and `Claude-3.7-sonnet-thinking`, and both confirmed that the free-translation prompt yielded better results. Even with my level of English, I could easily spot the stiffness in the "three-step" version, such as:

- "Two generations of Americans have praised him as the voice of their generation" (Literal and clunky)
- "Lying in a gradually reclining canvas deck chair, located on the tile deck next to his home's pool" (Awkward phrasing)

Moreover, while opinions on translation quality may vary, using the free-translation prompt substantially reduces token consumption, making it undeniably the more cost-effective choice.

The full free translation is attached below. This story reads almost like a still-life painting—it doesn't even mention a single character's name.

## 📰 The Newsstand

### 💀 DEATH IS NOT THE END

By: David Foster Wallace  
Translator: `DeepSeek-V3`

![](zw006-10.png)

This fifty-six-year-old American poet, a Nobel laureate in literature, known within American literary circles as the "poet's poet" or sometimes simply the "poet," is currently lying on the outdoor terrace, bare-chested, slightly out of shape, half-reclined in a partially adjustable lounge chair, basking in the sun, reading. Half-supine, of moderate weight but not severely obese, he has won two National Book Awards, one National Book Critics Circle Award, one Lamont Prize, two National Endowment for the Arts grants, one Prix de Rome, one Lannan Foundation Fellowship, one MacDowell Medal, and the Mildred and Harold Strauss Living Award from the American Academy of Arts and Letters. He is also the former president of PEN, and two generations of Americans have hailed him as the spokesperson of their era. Today, at fifty-six, wearing a dry, XL-sized Speedo swimsuit, he lies on an adjustable canvas lounge chair upon the tiled terrace by the pool beside his home. This poet is one of the ten Americans who were the first to receive the John D. and Catherine T. MacArthur Foundation's "Genius Grant," and is one of only three living American writers to hold the Nobel Prize in Literature. He is 5 foot 8, weighs 181 pounds, has brown hair and brown eyes, and his hairline is jagged due to the inconsistent acceptance and rejection of various branded hair transplant systems. He sits, or lies—perhaps more accurately "half-reclines"—wearing a pair of black Speedo swim trunks, resting on the tiled terrace beside his home's kidney-shaped pool[^1], the back of his chair now adjusted to the fourth notch, forming a 35-degree angle with the mosaic tiles of the deck. The time is 10:20 AM on May 15, 1995. He is the fourth most anthologized poet in the history of American literature, lying near a patio umbrella but not entirely within its shade, reading a copy of *Newsweek* magazine[^2], using his slightly protruding belly as an angled reading stand, wearing flip-flops, one hand tucked behind his head, the other resting at his side, his fingers lightly tracing the tan patterns of the expensive Spanish ceramic tiles on the deck, occasionally turning a page with a moistened finger. He wears prescription sunglasses with chemically treated lenses that darken proportionally to the intensity of the light. On his resting wrist is a watch of moderate quality and price; his legs are crossed, knees slightly apart, feet in imitation-rubber flip-flops. The sky is cloudless, growing steadily brighter as the sun climbs higher. The moisture on his fingers isn't saliva or sweat, but condensation from a frosted glass of iced tea resting on the upper-left corner of the lounge chair, just inside the edge of his body's shadow. The glass must be moved periodically to remain in the cool shade. He absentmindedly glides a finger down the side of the glass, then casually turns a page with his damp fingertip, occasionally flipping through the September 19, 1994, issue of *Newsweek*, reading articles on American healthcare reform and reports on the tragedy of USAir Flight 427, reading summaries and glowing reviews of the bestselling nonfiction books *The Hot Zone* and *The Coming Plague*, sometimes flipping past several pages at once, quickly skimming certain articles and abstracts. This eminent American poet, four months shy of his fifty-seventh birthday, was once absurdly dubbed by *Newsweek*'s main rival, *Time* magazine, as "the closest thing today to true literary immortality." His calves are nearly hairless, the oval shadow of the umbrella tightens slightly, the imitation-rubber soles of his flip-flops are textured on both sides. Beads of sweat dot the poet's forehead, his skin is a deep, healthy tan, his inner thighs are almost hairless, his penis is curled tightly within his snug swim trunks, his Van Dyke beard is meticulously trimmed. An ashtray sits on the iron table; he hasn't drunk his iced tea. He occasionally clears his throat, shifting slightly on the lounge chair from time to time, absentmindedly scratching the instep of one foot with the big toe of the other, neither removing his flip-flops nor looking at his feet, appearing entirely engrossed in the magazine. The blue pool is to his right, the thick glass sliding back doors of the house are to his diagonal left; between him and the pool is a woven white iron table with a large patio umbrella thrust through its center, its shadow no longer reaching the water. This undeniably accomplished poet lies on the terrace beside his pool, resting in his lounge chair, reading his magazine. The pool and terrace are surrounded on three sides by trees and shrubbery. Planted years ago, they are densely intertwined and unruly, serving the exact same function as a redwood privacy fence or a fine stone wall. It is spring, and the trees and shrubs are lush with foliage, presenting a deep, vibrant green, completely still, their shadows intricate. The sky is a flawless, motionless blue, rendering the entire enclosed scene—the pool, the deck, the poet, the chair, the table, the trees, and the rear facade of the house—deeply tranquil, serene, almost entirely silent, save for the soft gurgling of the pool pump and drain, and the poet's occasional throat-clearing or the rustle of turning the pages of *Newsweek*—no birdsong, no distant hum of lawnmowers, hedge clippers, or weed whackers, no jets overhead, and no faint, remote splashing from the pools of neighboring houses on either side. There is only the breathing of the pool and the poet's occasional throat-clearing—absolute peace, serenity, enclosure. Not even the slightest breeze stirs the leaves of the trees and shrubs; these silent, vibrant, encompassing plants possess a stillness so vivid and inescapable that it resembles nothing else on earth, nor what they imply[^3].

[^1]: He is also the first American-born poet in the distinguished 94-year history of the Nobel Prize in Literature to receive this prestigious honor.

[^2]: Yet, he has never received a John Simon Guggenheim Memorial Foundation Fellowship: early in his career, he was rejected three times. He has reason to believe the Guggenheim Fellowship committee was playing some personal and/or political games, and he has decided that before he ever again hires a graduate assistant to fill out the tedious triplicate Guggenheim application forms and endure the nauseating charade of "objective" consideration, he would rather be damned and starve to death entirely.

[^3]: This is not entirely true.
