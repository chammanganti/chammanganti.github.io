import fs from "node:fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const mdBlogDir = "./md_blogs";
const htmlBlogDir = "./site/blogs";
const htmlBlogImageDir = "./site/blog_images";

// read all templates
let blogLatestPreviewTemplate;
let blogPreviewTemplate;
let blogTemplate;
let blogsTemplate;

try {
  blogLatestPreviewTemplate = fs.readFileSync(
    "templates/blog_latest_preview.html",
    "utf8"
  );
  blogPreviewTemplate = fs.readFileSync("templates/blog_preview.html", "utf8");
  blogTemplate = fs.readFileSync("templates/blog.html", "utf8");
  blogsTemplate = fs.readFileSync("templates/blogs.html", "utf8");
} catch (e) {
  console.log("Error reading template files", e);
}

// create the blogs and blog_images dir
// for the converted .md files to html and its blog image
try {
  fs.mkdirSync(htmlBlogDir, { recursive: true });
  fs.mkdirSync(htmlBlogImageDir, { recursive: true });
} catch (e) {
  console.error("Error creating blogs dir", e);
}

// this will contain the ff. blog infos
// { title, date, formattedDate, image, author, intro, htmlFileName }
const blogPrevArr = [];

// read all md files
// use matter() to extract important matters;
// use marked() to convert the content into html;
// insert the content to the template,
// then save it as html
let mdBlogs;
try {
  mdBlogs = fs.readdirSync(mdBlogDir).filter((file) => file.endsWith(".md"));
} catch (e) {
  console.error("Error reading md_blogs dir", e);
}

mdBlogs.forEach((blog) => {
  const mdPath = path.join(mdBlogDir, blog);
  const mdContent = fs.readFileSync(mdPath, "utf8");
  const content = matter(mdContent);
  const mdConvertedContent = marked(content.content);

  const { title, date, image, author, intro } = content.data;
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));

  const htmlBlog = blogTemplate
    .replace("{{ title }}", title)
    .replace("{{ date }}", formattedDate)
    .replace("{{ image }}", image)
    .replace("{{ author }}", author)
    .replace("{{ content }}", mdConvertedContent);

  const htmlPath = path.join(htmlBlogDir, blog.replace(".md", ".html"));
  try {
    fs.writeFileSync(htmlPath, htmlBlog, "utf8");
  } catch (e) {
    console.error("Error creating blog html file", e);
  }

  try {
    fs.copyFileSync(
      path.join(mdBlogDir, image),
      path.join(htmlBlogImageDir, image)
    );
  } catch (e) {
    console.error("Error copying blog image", e);
  }

  // collect all blogs for the preview page
  blogPrevArr.push({
    title,
    date,
    formattedDate,
    image,
    author,
    intro,
    htmlFileName: htmlPath.replace("site", ""),
  });
});

blogPrevArr.sort((a, b) => new Date(b.date) - new Date(a.date));

// get the first item or latest
const blogLatestPreview = blogPrevArr.shift();
const htmlBlogLatestPreview = blogLatestPreviewTemplate
  .replace("{{ title }}", blogLatestPreview.title)
  .replace("{{ date }}", blogLatestPreview.formattedDate)
  .replace("{{ image }}", blogLatestPreview.image)
  .replace("{{ author }}", blogLatestPreview.author)
  .replace("{{ intro }}", blogLatestPreview.intro)
  .replace("{{ htmlFileName }}", blogLatestPreview.htmlFileName);

// collect the blog previews
const blogPreviewTemplateArr = [];
blogPrevArr.forEach((blogPrev) => {
  const htmlBlogPreview = blogPreviewTemplate
    .replace("{{ title }}", blogPrev.title)
    .replace("{{ date }}", blogPrev.formattedDate)
    .replace("{{ image }}", blogPrev.image)
    .replace("{{ author }}", blogPrev.author)
    .replace("{{ intro }}", blogPrev.intro)
    .replace("{{ htmlFileName }}", blogLatestPreview.htmlFileName);
  blogPreviewTemplateArr.push(htmlBlogPreview);
});

// insert the latest blog preview and the rest of the blog previews
const htmlBlogs = blogsTemplate
  .replace("{{ blog_latest_preview }}", htmlBlogLatestPreview)
  .replace("{{ blog_previews }}", blogPreviewTemplateArr.join(""));
try {
  fs.writeFileSync("./site/blogs.html", htmlBlogs, "utf8");
} catch (e) {
  console.error("Error creating blogs.html", e);
}
