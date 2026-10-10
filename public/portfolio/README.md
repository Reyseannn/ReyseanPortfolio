# Reysean Policarpio Portfolio

A one-page portfolio made with HTML, CSS, and plain JavaScript.

## Run locally

From the repository folder, open a terminal and run:

```bash
python -m http.server 8000 --directory public
```

Then open <http://localhost:8000/portfolio/>.

## Add a project

1. Put the project image in `public/portfolio/assets/`.
2. Open `public/portfolio/script.js`.
3. Find `PROJECT LIST — ADD NEW PROJECTS HERE`.
4. Copy the example object and edit its title, image path, and paragraph.
5. Add a `link` only if the project has a public demo or source page.
6. Save the file and refresh the page.

Example:

```js
{
  title: "Project name",
  image: "/portfolio/assets/project-picture.jpg",
  paragraph: "A short description of the project and what I worked on.",
  link: "https://example.com"
}
```

The `link` line is optional. Use the exact image filename and keep the `/portfolio/assets/` part of the path.
