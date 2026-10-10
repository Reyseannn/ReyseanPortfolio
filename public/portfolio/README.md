# Reysean Policarpio Portfolio

A beginner-friendly, responsive portfolio made with HTML, CSS, and vanilla JavaScript. Project screenshots are loaded from the public Reyseannn/ReyseanPortfolio GitHub repository.

## Run locally

Open index.html in a browser. For a local web server, open this folder in VS Code and use Live Server, or run:

    python -m http.server 8000

Then visit http://localhost:8000.

## Before publishing

- Beyond the Lens and eTickette do not have public project links in the repository, so their cards have no link button.

The email, GitHub, LinkedIn, résumé, profile photo, and project images use details and public assets from the existing portfolio repository.

## Add a project

1. Copy the picture into public/portfolio/assets.
2. Open script.js and find the PROJECT LIST section.
3. Copy one project object, paste it at the end of the list, and change the title, image path, and paragraph.
4. Keep the comma between project objects. The link line is optional; remove it if there is no public page.

Example:

    {
      title: "My project",
      image: "/portfolio/assets/my-project.jpg",
      paragraph: "A short description of what I made and what I worked on.",
      link: "https://example.com"
    }

If the project has no public page, leave out the link line. Save the file and refresh the browser.
