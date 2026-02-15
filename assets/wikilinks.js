document.addEventListener('DOMContentLoaded', async () => {
    const content = document.querySelector('.post-content');
    if (!content) return;

    // Fetch page index
    let pages = [];
    try {
        const res = await fetch('/page-index.json');
        pages = await res.json();
    } catch (e) {
        return;
    }

    // Build lookup: normalize title/slug -> page info
    const lookup = new Map();
    for (const page of pages) {
        const norm = s => s.toLowerCase().replace(/[-_\s]+/g, ' ').trim();
        lookup.set(norm(page.title), page);
        lookup.set(norm(page.slug), page);
        // Also map with hyphens replaced
        lookup.set(page.slug.toLowerCase(), page);
    }

    // Find and replace [[wikilinks]] in the rendered HTML
    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    const wikiPattern = /\[\[([^\]]+)\]\]/g;

    for (const node of textNodes) {
        if (!wikiPattern.test(node.textContent)) continue;
        wikiPattern.lastIndex = 0;

        const frag = document.createDocumentFragment();
        let last = 0;
        let match;

        while ((match = wikiPattern.exec(node.textContent)) !== null) {
            // Text before the match
            if (match.index > last) {
                frag.appendChild(document.createTextNode(node.textContent.slice(last, match.index)));
            }

            const linkText = match[1];
            // Support [[target|display text]] syntax
            const parts = linkText.split('|');
            const target = parts[0].trim();
            const display = (parts[1] || parts[0]).trim();

            const norm = s => s.toLowerCase().replace(/[-_\s]+/g, ' ').trim();
            const page = lookup.get(norm(target));

            if (page) {
                const a = document.createElement('a');
                a.href = page.url;
                a.textContent = display;
                a.classList.add('wikilink');
                frag.appendChild(a);
            } else {
                const span = document.createElement('span');
                span.textContent = display;
                span.classList.add('wikilink-broken');
                span.title = `Page not found: ${target}`;
                frag.appendChild(span);
            }

            last = match.index + match[0].length;
        }

        if (last < node.textContent.length) {
            frag.appendChild(document.createTextNode(node.textContent.slice(last)));
        }

        node.parentNode.replaceChild(frag, node);
    }

    // Render backlinks
    const backlinksEl = document.getElementById('backlinks');
    if (!backlinksEl) return;

    const currentPath = window.location.pathname.replace(/\/$/, '');
    const currentPage = pages.find(p => p.url.replace(/\/$/, '') === currentPath);
    if (!currentPage) return;

    // Fetch all pages and check which ones contain [[this page]]
    const backlinks = [];
    for (const page of pages) {
        if (page.url === currentPage.url) continue;
        try {
            const res = await fetch(page.url);
            const html = await res.text();
            const norm = s => s.toLowerCase().replace(/[-_\s]+/g, ' ').trim();
            // Check if page content contains a wikilink to current page
            if (html.includes(`[[${currentPage.title}]]`) ||
                html.includes(`[[${currentPage.slug}]]`) ||
                html.includes(`>${currentPage.title}</a>`)) {
                backlinks.push(page);
            }
        } catch (e) { /* skip */ }
    }

    if (backlinks.length > 0) {
        backlinksEl.innerHTML = '<h2>Linked from</h2><ul>' +
            backlinks.map(p => `<li><a href="${p.url}">${p.title}</a></li>`).join('') +
            '</ul>';
    }
});
