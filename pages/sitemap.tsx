import posts from '../posts';
import ms from 'ms';

export default function Sitemap() {
    return null;
}

Sitemap.getInitialProps = function ({ res }) {
    res.setHeader("Content-Type", "text/xml");

    const urlsetContent = posts.map((post, index) => {
        const lm = new Date(post.updatedAt || post.date);
        const isNew = (Date.now() - lm.getTime()) < ms('2day');

        const getChangeFreq = () => {
            if (isNew) {
                return 'daily';
            }

            if (index < 5) {
                return 'daily';
            }

            return 'weekly';
        }

        const getPriority = () => {
            if (isNew) {
                return '1.0';
            }

            if (index < 5) {
                return '0.8';
            }

            return '0.5';
        }

        const padNumber = n => n < 10 ? `0${n}` : `${n}`;

        return `
            <url>
                <loc>https://arunoda.me/blog/${post.slug}</loc>
                <lastmod>${lm.getUTCFullYear()}-${padNumber(lm.getUTCMonth() + 1)}-${padNumber(lm.getUTCDate())}</lastmod>
                <changefreq>${getChangeFreq()}</changefreq>
                <priority>${getPriority()}</priority>
            </url>
        `
    }).join('\n');

    res.write(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlsetContent}
    <url>
        <loc>https://arunoda.me</loc>
        <lastmod>2020-06-08</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.4</priority>
    </url>
</urlset>
    `);
    res.end();
}