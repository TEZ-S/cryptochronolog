import { writeFileSync } from "fs";
import { globby } from "globby";

(async () => {
  const pages = await globby([
    "pages/*.js",
    "posts/*.md",
    "content/*.md",
    "content/posts/*.md",
    "content/authors/*.md",
    "!pages/_*.js",
    "!pages/api"
  ]);

  const urlSet = pages.map((page) => {
    const path = page
      .replace("pages", "")
      .replace("index", "")
      .replace("posts", "")
      .replace(".js", "")
      .replace(".md", "");

    return `<url>
      <loc>http://www.example.com${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
    </url>`;
  }).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>
  `;

  writeFileSync("public/sitemap.xml", sitemap);
})();
