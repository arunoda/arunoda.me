import fs from 'fs';
import path from 'path';
import posts from '../../posts';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (typeof slug !== 'string') {
    return res.status(400).send('Invalid slug');
  }

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return res.status(404).send('Post not found');
  }

  const filePath = path.join(process.cwd(), 'pages', 'blog', `${slug}.tsx`);
  let content = '';

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Extract the main markdown blog post content 
    // Usually defined as: export default WithDoc(...) (markdown(...)`...`)
    const match = fileContent.match(/export\s+default\s+WithDoc\s*\([\s\S]*?\)\s*\(\s*markdown\s*\(\s*components\s*\)\s*`([\s\S]*?)`\s*\)/);

    if (match) {
      // Eliminate interpolated React sub-components like ${<Image src... />} or ${q1}
      content = match[1].replace(/\$\{[\s\S]*?\}/g, '').trim();
    } else {
      content = 'No markdown content parsed.';
    }
  }

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(`# ${post.title}\n\n`);
  res.write(`Published: ${post.date}\n\n`);
  res.write(content);
  res.end();
}
