---
name: zhiwen-workflow
description: Workflow for managing and translating new issues of Zhiwen Weekly. Triggers on "new issue", "translate weekly", "新一期", "发布新文章", "翻译周刊", "有了新的Markdown", etc.
---

# Zhiwen Weekly Workflow

This skill defines the standard operating procedure for adding, translating, and publishing new issues of Zhiwen Weekly.

## Directory Structure
The project stores issues in the `posts/` directory:
- `posts/zhiwen-weekly-volXXX.md` (The original Chinese markdown)
- `posts/zhiwen-weekly-volXXX.en.md` (The English translation)
- `posts/zhiwen-weekly-volXXX/` (The directory containing images/assets for this issue, if any)

## Step-by-Step Operating Procedure

When the user asks to import, translate, or manage a new issue, follow these steps strictly:

### 1. Determine Volume Number
Check the `posts/` directory to find the latest volume number (e.g., `vol023`). Increment it by one for the new issue (e.g., `vol024`), unless the user explicitly specifies a volume number.

### 2. Import Original Markdown & Assets
- Locate the original Chinese markdown file `zhiwen-weekly-volXXX.md` under the Hexo directory: `E:\Hexo\blog\source\_posts\zhiwen-weekly-volXXX.md`.
- Copy this file to `posts/zhiwen-weekly-volXXX.md` in the current project directory.
- Check if there is an asset folder `zhiwen-weekly-volXXX` under the Hexo directory `E:\Hexo\blog\source\_posts\zhiwen-weekly-volXXX`. If it exists, copy this directory and all its contents to `posts/zhiwen-weekly-volXXX/`.
> **CRITICAL RULE REMINDER**: If you are modifying an *existing* file instead of creating/copying a new one, you **MUST** use `view_file` to read it first before editing, as the user may have made manual changes locally!

### 3. Translate to English
Translate the original Chinese markdown in `posts/zhiwen-weekly-volXXX.md` into English.
- **Tone**: The translation should reflect the publication's "Brutalist / Avant-garde Modern Indie Mag" identity. It should be sharp, direct, and unsentimental.
- **Formatting**: Preserve all Markdown formatting exactly (headers, bold, lists, links, blockquotes).
- **Paths**: Do not alter URLs or image paths.
- Save the translated text to `posts/zhiwen-weekly-volXXX.en.md`.

### 4. Build the Project
Run the command `node build.js` in the project root (`e:\Projects\Weekly`) to rebuild the static site. This will generate the updated HTML in the `dist/` directory.

### 5. Final Review
Notify the user that the issue has been successfully imported, translated, and the site has been rebuilt.
