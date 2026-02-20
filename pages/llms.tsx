import posts from '../posts';

export default function Llms() {
  return null;
}

Llms.getInitialProps = function ({ res }: { res: any }) {
  res.setHeader("Content-Type", "text/plain");

  const urls = posts.map(post => {
    return `- [${post.title}](https://arunoda.me/blog/${post.slug}) ([Text Version](https://arunoda.me/llms/blog/${post.slug}.txt))`;
  }).join('\n');

  res.write(`# Arunoda Susiripala - Personal Website

> Arunoda Susiripala's personal space on the internet. Includes blog posts, thoughts, and technical writeups.

## Links

- [Home](https://arunoda.me)
- [Twitter](https://twitter.com/arunoda)
- [GitHub](https://github.com/arunoda)

## Blog Posts

${urls}
`);
  res.end();
}
