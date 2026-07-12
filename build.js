const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const yaml = require('js-yaml');

const sourceDir = path.join(__dirname, 'posts');
const outputDir = path.join(__dirname, 'dist');
const publicImgDir = path.join(outputDir, 'images');

// Ensure output directories exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(publicImgDir)) {
    fs.mkdirSync(publicImgDir, { recursive: true });
}

// Function to copy directory recursively
function copyDirSync(src, dest) {
    if (!fs.existsSync(src)) return;
    const entries = fs.readdirSync(src, { withFileTypes: true });
    fs.mkdirSync(dest, { recursive: true });
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDirSync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// CSS for the Brutalist / Avant-garde Modern Indie Mag style
const css = `
:root {
    --bg-color: #ffffff;
    --text-color: #000000;
    --accent-color: #ccff00; /* Acid green */
    --font-head: 'Impact', 'Arial Black', 'Helvetica Neue', sans-serif;
    --font-sans: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
}

* { box-sizing: border-box; }

body {
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: var(--font-sans);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

a {
    color: inherit;
    text-decoration: none;
}

/* Index Page */
.index-container {
    padding: 0;
    width: 100%;
    margin: 0;
}

.site-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4vw 5vw;
    border-bottom: 4px solid var(--text-color);
    background-color: var(--bg-color);
    position: relative;
    overflow: hidden;
}

.site-logo {
    display: none;
}

.site-title {
    font-size: 15vw;
    font-family: var(--font-head);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 0.85;
    margin: 0;
    text-transform: uppercase;
    word-break: break-all;
}

.post-list {
    display: flex;
    flex-direction: column;
}

.post-item {
    display: flex;
    flex-direction: column;
    padding: 3vw 5vw;
    border-bottom: 2px solid var(--text-color);
    transition: none; /* No ease-in-out, sudden snap */
    position: relative;
    color: var(--text-color);
}

.post-item:hover {
    background-color: var(--text-color);
    color: var(--bg-color);
}

.post-meta-col {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1rem;
    font-family: var(--font-mono);
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
}

.post-item:hover .post-meta-col {
    color: var(--accent-color);
}

.post-title {
    font-size: 4vw;
    font-family: var(--font-head);
    font-weight: 900;
    margin: 0;
    line-height: 1.1;
    letter-spacing: -0.02em;
    text-transform: uppercase;
}

/* Brutalist Language Toggle */
.lang-toggle-container {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1000;
    border-left: 4px solid var(--text-color);
    border-bottom: 4px solid var(--text-color);
}

.lang-toggle {
    background: var(--accent-color);
    color: var(--text-color);
    border: none;
    font-family: var(--font-head);
    font-weight: 900;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: none;
}

.lang-toggle:hover {
    background: var(--text-color);
    color: var(--accent-color);
}

/* Article Page */
.article-header {
    padding: 12vw 5vw 8vw;
    border-bottom: 4px solid var(--text-color);
    background-color: var(--bg-color);
}

.article-vol {
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--text-color);
    background: var(--accent-color);
    display: inline-block;
    padding: 0.2rem 0.5rem;
    margin-bottom: 2rem;
    border: 2px solid var(--text-color);
}

.article-title {
    font-size: 8vw;
    font-family: var(--font-head);
    font-weight: 900;
    line-height: 0.9;
    margin: 0 0 2rem 0;
    letter-spacing: -0.03em;
    text-transform: uppercase;
}

.article-meta {
    font-family: var(--font-mono);
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text-color);
    text-transform: uppercase;
    border-top: 2px solid var(--text-color);
    padding-top: 1rem;
}

.article-content {
    max-width: 100%;
    margin: 0;
    padding: 5vw;
    font-family: var(--font-sans);
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 500;
}

.article-content h2, .article-content h3 {
    font-family: var(--font-head);
    text-transform: uppercase;
    font-weight: 900;
    margin-top: 4rem;
    margin-bottom: 1rem;
    line-height: 1.1;
    border-bottom: 2px solid var(--text-color);
    padding-bottom: 0.5rem;
}

.article-content h2 { font-size: 3.5rem; letter-spacing: -0.02em; }
.article-content h3 { font-size: 2.5rem; }

.article-content p {
    margin-bottom: 1.5rem;
    max-width: 800px;
}

.article-content a {
    color: var(--text-color);
    background: var(--accent-color);
    font-weight: bold;
    padding: 0 0.2rem;
    border: 2px solid var(--text-color);
}

.article-content a:hover {
    background: var(--text-color);
    color: var(--accent-color);
}

.article-content img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 4rem 0;
    border: 4px solid var(--text-color);
    filter: grayscale(100%) contrast(150%);
    transition: filter 0s;
}

.article-content img:hover {
    filter: none;
}

.article-content blockquote {
    margin: 3rem 0;
    padding: 2rem;
    border: 4px solid var(--text-color);
    background: var(--accent-color);
    font-weight: 900;
    color: var(--text-color);
    font-size: 1.5rem;
    line-height: 1.4;
    font-family: var(--font-head);
    text-transform: uppercase;
}

.article-content pre {
    background-color: var(--text-color);
    padding: 2rem;
    overflow-x: auto;
    font-family: var(--font-mono);
    font-size: 1rem;
    line-height: 1.4;
    margin: 3rem 0;
    color: var(--accent-color);
    border: none;
}

.article-content code {
    font-family: var(--font-mono);
    background-color: var(--text-color);
    color: var(--accent-color);
    padding: 0.2em 0.4em;
    font-size: 0.9em;
}

.article-content pre code {
    background-color: transparent;
    padding: 0;
    color: inherit;
}

.article-content hr {
    border: 0;
    height: 4px;
    background: var(--text-color);
    margin: 4rem 0;
}

.nav-back {
    display: inline-block;
    padding: 1rem 2rem;
    font-family: var(--font-head);
    font-size: 1.5rem;
    font-weight: 900;
    text-transform: uppercase;
    background: var(--text-color);
    color: var(--bg-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
    border-bottom: 4px solid var(--text-color);
    border-right: 4px solid var(--text-color);
}

.nav-back:hover {
    background: var(--accent-color);
    color: var(--text-color);
}

@media (max-width: 768px) {
    .site-title { font-size: 20vw; }
    .post-item { padding: 5vw; }
    .post-title { font-size: 8vw; }
    .post-meta-col { flex-direction: column; gap: 0.5rem; }
    .article-title { font-size: 12vw; }
    .article-content h2 { font-size: 2.5rem; }
    .article-content h3 { font-size: 1.8rem; }
    .lang-toggle { font-size: 1.2rem; padding: 0.8rem 1.2rem; }
    .nav-back { font-size: 1.2rem; padding: 0.8rem 1.2rem; position: relative; border: 4px solid var(--text-color); margin: 5vw 0 0 5vw;}
}

/* Custom Thought Divider for 闪念集 */
.article-content hr.thought-hr {
    border: none !important;
    height: 0 !important;
    background: transparent !important;
    max-width: 800px; /* Align visual width with paragraph content */
    text-align: center;
    margin: 3.5rem 0;
    overflow: visible;
}

.article-content hr.thought-hr::after {
    content: "///";
    font-family: var(--font-head);
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--text-color);
    opacity: 0.4;
    letter-spacing: 0.6rem;
    display: inline-block;
    transform: skewX(-12deg);
    padding-left: 0.6rem; /* offset letter-spacing */
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.article-content hr.thought-hr:hover::after {
    opacity: 1;
    color: var(--text-color);
    transform: skewX(-20deg) scale(1.15);
}

/* Elegant Footnotes Styling */
.footnote-ref {
    font-size: 0.75em;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    top: -0.5em;
    margin-left: 0.15em;
    margin-right: 0.15em;
}

.footnote-ref a {
    background: transparent !important;
    border: none !important;
    color: var(--text-color) !important;
    opacity: 0.6;
    padding: 0 !important;
    font-weight: bold !important;
    transition: opacity 0.2s;
}

.footnote-ref a:hover {
    background: transparent !important;
    color: var(--text-color) !important;
    opacity: 1;
    text-decoration: underline;
}

.article-content hr.footnotes-sep {
    border: 0;
    border-top: 2px dashed var(--text-color);
    height: 0;
    margin: 4rem 0 2rem 0;
    opacity: 0.3;
}

.article-content .footnotes {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.8;
    margin-top: 2rem;
}

.article-content .footnotes-list {
    padding-left: 1.5rem;
    margin: 0;
}

.article-content .footnote-item {
    margin-bottom: 0.8rem;
    word-break: break-all;
}

/* Footnote inner links override brutalist styling */
.article-content .footnote-item a {
    background: transparent !important;
    border: none !important;
    border-bottom: 1px solid var(--text-color) !important;
    padding: 0 !important;
    font-weight: normal !important;
    color: var(--text-color) !important;
}

.article-content .footnote-item a:hover {
    background: var(--text-color) !important;
    color: var(--bg-color) !important;
}

.article-content .footnote-backref {
    border: none !important;
    text-decoration: none !important;
    margin-left: 0.4rem;
    font-family: var(--font-sans);
    opacity: 0.5;
    transition: opacity 0.2s;
    display: inline-block;
}

.article-content .footnote-backref:hover {
    background: transparent !important;
    color: var(--text-color) !important;
    opacity: 1;
}
`;

// Build process
async function build() {
    const files = fs.readdirSync(sourceDir);
    const posts = [];

    // Write CSS
    fs.writeFileSync(path.join(outputDir, 'style.css'), css);

    // Copy logo if it exists in project root
    const logoSrc = path.join(__dirname, 'logo.png');
    if (fs.existsSync(logoSrc)) {
        fs.copyFileSync(logoSrc, path.join(publicImgDir, 'logo.png'));
    }

    function parseMarkdown(filePath) {
        if (!fs.existsSync(filePath)) return null;
        const content = fs.readFileSync(filePath, 'utf-8');
        const fmRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
        const match = content.match(fmRegex);
        let meta = {}, body = content;
        if (match) {
            try {
                meta = yaml.load(match[1]);
                body = content.slice(match[0].length).trim();
            } catch (e) { console.error('Failed to parse', filePath, e); }
        }
        return { meta, body };
    }

    function renderBodyHtml(body, slug, lang = 'zh') {
        if (!body) return '';
        // Handle markdown images
        body = body.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
            if (!src.startsWith('http') && !src.startsWith('/')) {
                return `![${alt}](images/${slug}/${src})`;
            }
            return match;
        });
        // Handle HTML image tags
        body = body.replace(/<img[^>]+src="([^"]+)"[^>]*>/g, (match, src) => {
            if (!src.startsWith('http') && !src.startsWith('/')) {
                return match.replace(src, `images/${slug}/${src}`);
            }
            return match;
        });
        // Remove <!--more-->
        body = body.replace(/<!--more-->/g, '');

        // --- Footnote Handling Start ---
        const footnoteDefs = new Map();
        // Extract and remove footnote definitions
        let cleanedBody = body.replace(/^\[\^([^\]]+)\]:\s*([\s\S]*?)(?=(?:^\[\^[^\]]+\]:|^#|^\s*\n\s*\n)|$)/gm, (match, id, content) => {
            footnoteDefs.set(id.trim(), content.trim());
            return '';
        });

        // Replace footnote references in text
        const footnoteMap = new Map();
        const refIds = [];
        let footnoteIndex = 1;
        cleanedBody = cleanedBody.replace(/\[\^([^\]]+)\]/g, (match, id) => {
            const trimmedId = id.trim();
            if (footnoteDefs.has(trimmedId)) {
                let index = footnoteMap.get(trimmedId);
                if (!index) {
                    index = footnoteIndex++;
                    footnoteMap.set(trimmedId, index);
                    refIds.push(trimmedId);
                }
                return `<sup class="footnote-ref" id="fnref-${slug}-${lang}-${index}"><a href="#fn-${slug}-${lang}-${index}">${index}</a></sup>`;
            }
            return match;
        });
        // --- Footnote Handling End ---

        let html = marked.parse(cleanedBody);

        // --- Custom Thought Divider and Footnotes Output Start ---
        // 1. Custom Thought Divider for 闪念集 (Match both Chinese and English titles)
        html = html.replace(/(<h2[^>]*>.*?(?:闪念集|Flash Collection|Thoughts).*?<\/h2>)([^]*?)(?=<h2|$)/gi, (match, h2, content) => {
            const updatedContent = content.replace(/<hr\s*\/?>/gi, '<hr class="thought-hr">');
            return h2 + updatedContent;
        });

        // 2. Append footnotes if exist
        if (refIds.length > 0) {
            let footnotesHtml = `<hr class="footnotes-sep">\n<section class="footnotes">\n<ol class="footnotes-list">\n`;
            for (const id of refIds) {
                const index = footnoteMap.get(id);
                const content = footnoteDefs.get(id);
                const contentHtml = marked.parseInline(content);
                footnotesHtml += `<li id="fn-${slug}-${lang}-${index}" class="footnote-item">${contentHtml} <a href="#fnref-${slug}-${lang}-${index}" class="footnote-backref">↩</a></li>\n`;
            }
            footnotesHtml += `</ol>\n</section>\n`;
            html += footnotesHtml;
        }
        // --- Custom Thought Divider and Footnotes Output End ---

        return html;
    }

    // Get unique base slugs (e.g. zhiwen-weekly-vol001)
    const baseSlugs = Array.from(new Set(files
        .filter(f => f.startsWith('zhiwen-weekly-') && f.endsWith('.md'))
        .map(f => f.replace('.en.md', '').replace('.md', ''))
    ));

    for (const slug of baseSlugs) {
        const zhFile = path.join(sourceDir, `${slug}.md`);
        const enFile = path.join(sourceDir, `${slug}.en.md`);

        const zhData = parseMarkdown(zhFile);
        const enData = parseMarkdown(enFile);

        if (!zhData && !enData) continue;

        // Use EN metadata if exists, fallback to ZH
        const meta = enData?.meta || zhData?.meta || {};
        
        // Only process if it belongs to Zhiwen Weekly
        if (zhData?.meta?.categories !== '咫闻周刊' && !slug.includes('zhiwen-weekly')) {
            continue;
        }

        // Copy assets
        const assetFolder = path.join(sourceDir, slug);
        if (fs.existsSync(assetFolder)) {
            const destImgFolder = path.join(publicImgDir, slug);
            copyDirSync(assetFolder, destImgFolder);
        }

        const volMatch = slug.match(/vol(\d+)/i);
        const volNum = volMatch ? volMatch[1] : '???';
        
        let cleanTitleZh = zhData?.meta?.title || slug;
        cleanTitleZh = cleanTitleZh.replace(/^Vol\.\d+\s*/i, '');

        let cleanTitleEn = enData?.meta?.title || cleanTitleZh;
        cleanTitleEn = cleanTitleEn.replace(/^Vol\.\d+\s*/i, '');

        const dateStr = meta.date ? new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';

        const htmlZh = zhData ? renderBodyHtml(zhData.body, slug, 'zh') : '<p>中文版尚未就绪，请稍后重试。</p>';
        const htmlEn = enData ? renderBodyHtml(enData.body, slug, 'en') : '<p>English version is currently being translated. Please check back later.</p>';

        posts.push({
            vol: volNum,
            titleZh: cleanTitleZh,
            titleEn: cleanTitleEn,
            slug: slug,
            date: dateStr,
            rawDate: meta.date ? new Date(meta.date) : new Date(0)
        });

        // Post Template
        const postHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${cleanTitleEn} - Zhiwen Weekly Vol.${volNum}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="lang-toggle-container">
        <button class="lang-toggle" onclick="toggleLanguage()">EN / 中文</button>
    </div>
    <a href="index.html" class="nav-back">← Back</a>
    <header class="article-header">
        <span class="article-vol">VOL.${volNum}</span>
        <h1 class="article-title lang-en">${cleanTitleEn}</h1>
        <h1 class="article-title lang-zh" style="display: none;">${cleanTitleZh}</h1>
        <div class="article-meta">${dateStr}</div>
    </header>
    <main class="article-content">
        <div class="lang-en">
            ${htmlEn}
        </div>
        <div class="lang-zh" style="display: none;">
            ${htmlZh}
        </div>
    </main>

    <script>
        function setLanguage(lang) {
            localStorage.setItem('zhiwen-lang', lang);
            document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');
            document.querySelectorAll('.lang-zh').forEach(el => el.style.display = lang === 'zh' ? 'block' : 'none');
            document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
            document.title = lang === 'en' ? '${cleanTitleEn} - Zhiwen Weekly Vol.${volNum}' : '${cleanTitleZh} - 咫闻周刊 Vol.${volNum}';
        }
        function toggleLanguage() {
            const current = localStorage.getItem('zhiwen-lang') || 'en';
            setLanguage(current === 'en' ? 'zh' : 'en');
        }
        // Init
        setLanguage(localStorage.getItem('zhiwen-lang') || 'en');
    </script>
</body>
</html>`;

        fs.writeFileSync(path.join(outputDir, `${slug}.html`), postHtml);
    }

    // Sort posts by volume descending
    posts.sort((a, b) => parseInt(b.vol) - parseInt(a.vol));

    // Generate Index Page
    const indexListHtml = posts.map(post => `
        <a href="${post.slug}.html" class="post-item">
            <div class="post-meta-col">
                <span class="post-vol">VOL.${post.vol}</span>
                <span class="post-date">${post.date}</span>
            </div>
            <h2 class="post-title lang-en">${post.titleEn}</h2>
            <h2 class="post-title lang-zh" style="display: none;">${post.titleZh}</h2>
        </a>
    `).join('');

    const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zhiwen Weekly 咫闻周刊</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="lang-toggle-container">
        <button class="lang-toggle" onclick="toggleLanguage()">EN / 中文</button>
    </div>
    <main class="index-container">
        <header class="site-header">
            <h1 class="site-title">ZHIWEN<br>WEEKLY</h1>
        </header>
        <div class="post-list">
            ${indexListHtml}
        </div>
    </main>

    <script>
        function setLanguage(lang) {
            localStorage.setItem('zhiwen-lang', lang);
            document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');
            document.querySelectorAll('.lang-zh').forEach(el => el.style.display = lang === 'zh' ? 'block' : 'none');
            document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
        }
        function toggleLanguage() {
            const current = localStorage.getItem('zhiwen-lang') || 'en';
            setLanguage(current === 'en' ? 'zh' : 'en');
        }
        // Init
        setLanguage(localStorage.getItem('zhiwen-lang') || 'en');
    </script>
</body>
</html>`;

    fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);
    console.log('Build completed successfully!');
}

build().catch(console.error);
