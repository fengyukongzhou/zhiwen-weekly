const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const yaml = require('js-yaml');

const sourceDir = 'E:\\Hexo\\blog\\source\\_posts';
const outputDir = 'E:\\Projects\\Weekly\\dist';
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

// CSS for the Modern Independent Zine style
const css = `
:root {
    --bg-color: #ffffff;
    --text-color: #111111;
    --meta-color: #888888;
    --border-color: #e5e5e5;
    --font-sans: 'Inter', 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', sans-serif;
    --font-serif: 'Source Han Serif SC', 'Noto Serif CJK SC', 'SimSun', STSong, serif;
}

* { box-sizing: border-box; }

body {
    margin: 0;
    padding: 0;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: var(--font-sans);
    line-height: 1.6;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

a {
    color: inherit;
    text-decoration: none;
}

/* Index Page */
.index-container {
    padding: 8vw 5vw;
    max-width: 1000px;
    margin: 0 auto;
}

.site-header {
    display: flex;
    align-items: flex-end;
    gap: 2.5rem;
    margin-bottom: 6rem;
    border-bottom: 4px solid var(--text-color);
    padding-bottom: 1.5rem;
}

.site-logo {
    width: 80px;
    height: auto;
    display: block;
}

.site-title {
    font-size: 5.5rem;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 0.85;
    margin: 0;
}

.post-list {
    display: flex;
    flex-direction: column;
}

.post-item {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 2rem;
    align-items: flex-start;
    padding: 2.5rem 1rem;
    border-bottom: 1px solid var(--border-color);
    transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    color: var(--text-color);
}

.post-item:hover {
    background-color: var(--text-color);
    color: var(--bg-color);
    padding-left: 2.5rem;
    padding-right: 2.5rem;
}

.post-meta-col {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

.post-vol {
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--meta-color);
    transition: color 0.2s;
}

.post-date {
    font-size: 0.85rem;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 500;
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
    transition: color 0.2s;
}

.post-item:hover .post-vol,
.post-item:hover .post-date {
    color: #ccc;
}

.post-title {
    font-size: 2.2rem;
    font-weight: 800;
    margin: 0;
    font-family: var(--font-sans);
    line-height: 1.3;
}

/* Article Page */
.article-header {
    padding: 8vw 5vw 4vw;
    text-align: center;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 4vw;
}

.article-vol {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--meta-color);
    margin-bottom: 1rem;
    display: block;
}

.article-title {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1.1;
    margin: 0 auto 2rem;
    max-width: 900px;
    letter-spacing: -0.01em;
}

.article-meta {
    font-size: 0.9rem;
    color: var(--meta-color);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.article-content {
    max-width: 860px;
    margin: 0 auto;
    padding: 0 5vw 8vw;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    line-height: 2;
    text-align: justify;
    text-wrap: pretty;
}

.article-content h2, .article-content h3 {
    font-family: var(--font-sans);
    font-weight: 800;
    color: var(--text-color);
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    line-height: 1.3;
}

.article-content h2 { font-size: 2rem; }
.article-content h3 { font-size: 1.5rem; }

.article-content p {
    margin-bottom: 1.8rem;
}

.article-content a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 600;
    /* 拟真荧光笔高亮效果：边缘稍淡、中间浓，并且只覆盖文字下半部分 */
    background-image: linear-gradient(to right, rgba(255, 213, 79, 0.3) 0%, rgba(255, 213, 79, 0.8) 10%, rgba(255, 213, 79, 0.8) 90%, rgba(255, 213, 79, 0.3) 100%);
    background-repeat: no-repeat;
    background-position: 0 88%;
    background-size: 100% 0.35em;
    transition: background-size 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), background-position 0.25s;
    border-radius: 2px;
}

.article-content a:hover {
    background-size: 100% 95%;
    background-position: 0 100%;
}

.article-content img {
    max-width: 100vw;
    width: 100%;
    height: auto;
    display: block;
    margin: 4rem 0;
}

.article-content blockquote {
    margin: 3rem 0;
    padding: 1.5rem 0 1.5rem 2rem;
    border-left: 4px solid var(--text-color);
    font-style: normal;
    font-weight: 600;
    color: #333;
    font-size: 1.25rem;
    line-height: 1.8;
}

.article-content pre {
    background-color: #f8f9fa;
    padding: 1.5rem;
    overflow-x: auto;
    border-radius: 4px;
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Courier New', monospace;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 3rem 0;
    border: 1px solid var(--border-color);
    color: #24292e;
}

.article-content code {
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, 'Courier New', monospace;
    background-color: #f8f9fa;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
    color: #24292e;
}

.article-content pre code {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    color: inherit;
}

.article-content hr {
    border: 0;
    height: 1px;
    background: var(--border-color);
    margin: 4rem 0;
}

.nav-back {
    display: inline-block;
    margin: 2vw 5vw;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s;
    position: absolute;
    top: 0;
    left: 0;
}

.nav-back:hover {
    border-color: var(--text-color);
}

@media (max-width: 768px) {
    .site-title { font-size: 3rem; }
    .post-item {
        grid-template-columns: 1fr;
        gap: 0.5rem;
        padding: 1.5rem 0;
    }
    .post-vol { font-size: 1.2rem; }
    .post-title { font-size: 1.8rem; }
    .post-date { font-size: 0.9rem; }
    .article-title { font-size: 2.5rem; }
    .nav-back { position: relative; margin: 5vw; }
}
`;

// Build process
async function build() {
    const files = fs.readdirSync(sourceDir);
    const posts = [];

    // Write CSS
    fs.writeFileSync(path.join(outputDir, 'style.css'), css);

    // Copy logo if it exists in project root
    const logoSrc = path.join('E:\\Projects\\Weekly', 'logo.png');
    if (fs.existsSync(logoSrc)) {
        fs.copyFileSync(logoSrc, path.join(publicImgDir, 'logo.png'));
    }

    for (const file of files) {
        if (!file.endsWith('.md') || !file.startsWith('zhiwen-weekly-')) continue;

        const filePath = path.join(sourceDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Parse frontmatter
        const fmRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
        const match = content.match(fmRegex);
        
        let meta = {};
        let body = content;
        
        if (match) {
            try {
                meta = yaml.load(match[1]);
                body = content.slice(match[0].length).trim();
            } catch (e) {
                console.error('Failed to parse frontmatter for', file, e);
            }
        }

        // Only process if it belongs to Zhiwen Weekly
        if (meta.categories !== '咫闻周刊' && !file.includes('zhiwen-weekly')) {
            console.log('Skipping (not Zhiwen Weekly):', file);
            continue;
        }

        // Parse volume number from filename or title
        const volMatch = file.match(/vol(\d+)/i) || (meta.title && meta.title.match(/Vol\.(\d+)/i));
        const volNum = volMatch ? volMatch[1] : '???';
        
        // Clean up title (remove "Vol.XXX ")
        let cleanTitle = meta.title || file.replace('.md', '');
        cleanTitle = cleanTitle.replace(/^Vol\.\d+\s*/i, '');

        const slug = file.replace('.md', '');
        const dateStr = meta.date ? new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';

        // Handle Images
        const assetFolder = path.join(sourceDir, slug);
        if (fs.existsSync(assetFolder)) {
            const destImgFolder = path.join(publicImgDir, slug);
            copyDirSync(assetFolder, destImgFolder);
            
            // Rewrite image paths in markdown body
            body = body.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
                if (!src.startsWith('http') && !src.startsWith('/')) {
                    return `![${alt}](images/${slug}/${src})`;
                }
                return match;
            });
        }

        // Handle raw HTML image tags if any (e.g. <img src="zw001-1.png">)
        body = body.replace(/<img[^>]+src="([^"]+)"[^>]*>/g, (match, src) => {
            if (!src.startsWith('http') && !src.startsWith('/')) {
                return match.replace(src, `images/${slug}/${src}`);
            }
            return match;
        });

        // Remove the <!--more--> tag
        body = body.replace(/<!--more-->/g, '');

        // Generate HTML for post
        let htmlContent = marked.parse(body);



        posts.push({
            vol: volNum,
            title: cleanTitle,
            slug: slug,
            date: dateStr,
            rawDate: meta.date ? new Date(meta.date) : new Date(0)
        });

        // Post Template
        const postHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${cleanTitle} - 咫闻周刊 Vol.${volNum}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <a href="index.html" class="nav-back">← Back</a>
    <header class="article-header">
        <span class="article-vol">VOL.${volNum}</span>
        <h1 class="article-title">${cleanTitle}</h1>
        <div class="article-meta">${dateStr}</div>
    </header>
    <main class="article-content">
        ${htmlContent}
    </main>
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
                <div class="post-vol">VOL.${post.vol}</div>
                <div class="post-date">${post.date}</div>
            </div>
            <h2 class="post-title">${post.title}</h2>
        </a>
    `).join('');

    const indexHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>咫闻周刊 Zhiwen Weekly</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="index-container">
        <header class="site-header">
            <img src="images/logo.png" alt="Logo" class="site-logo">
            <h1 class="site-title">ZHIWEN<br>WEEKLY</h1>
        </header>
        <div class="post-list">
            ${indexListHtml}
        </div>
    </main>
</body>
</html>`;

    fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);
    console.log('Build completed successfully!');
}

build().catch(console.error);
