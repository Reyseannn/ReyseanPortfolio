// Open and close the section menu on small screens.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".side-links");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("open", !isOpen);
});

// Close the mobile menu with Escape and return keyboard focus to its toggle.
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || menuButton.getAttribute("aria-expanded") !== "true") return;

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("open");
  menuButton.focus();
});

// Close the mobile menu after selecting a section.
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("open");
  });
});

// PROJECT LIST — ADD NEW PROJECTS HERE
// Add the image to public/portfolio/assets, then use /portfolio/assets/filename.jpg.
// The link field is optional.
const projects = [
  // Example:
  // {
  //   title: "My project",
  //   image: "/portfolio/assets/my-project.jpg",
  //   paragraph: "A short description of the project and what I worked on.",
  //   link: "https://example.com"
  // }
];

const projectList = document.querySelector("#project-list");
projectList.innerHTML = projects.map((project) => {
  const projectLink = project.link
    ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">View project <span>↗</span></a>`
    : "";

  return `
    <article class="project project-extra">
      <div class="project-copy">
        <h3>${project.title}</h3>
        <p>${project.paragraph}</p>
        ${projectLink}
      </div>
      <div class="project-media extra-project-media">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
    </article>
  `;
}).join("");

