# MathOnTrack

MathOnTrack is currently a Next.js-based, statically generated web application aimed to help anyone and everyone to get back on a mathematical track! 

## Aim

The main goal is to provide basic to advanced knowledge in mathematics for free. This way, a user will be able to obtain enough knowledge to pursue a career, job, or education that was previously not accessible to them due to the lack of mathematical knowledge.

## Tech

It is intended to be paired with an API server and a content management system. The system should eventually adhere to the JAMstack architecture. 

The JAMstack architecture will help us deliver static web pages super fast, these pre-rendered pages (great for SEO) will be able to call the API server to load whatever content or data dynamically.

Currently, it simply builds the pages using MDX files located in the file system.

## Contributions

Contributors are welcome!

## Current todos

- [x] Add node functions to generate pages from MDX files and folders in `/courses` in relevant pages under `/pages`
- [x] Add frontmatter to parse MDX file metadata
- [x] Add next-mdx-remote and parse the MDX file content
- [x] Add Breadcrumbs
- [x] Add Katex support for writing beatiful mathematics using rehype and remark plugins
- [ ] Add Video component
- [ ] Add MCQ component
- [ ] Add Google Authentication and save progress on google drive
- [ ] Add a "create" page. Mathematics contributors should be able to use it to create MDX pages with this and write math. The suggessions in the monaco editor should suggest the available ready made JSX components. Users should be able to preview it, export it and push it to github.
