// Open and close the section menu on small screens.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".side-links");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("open");
}

const mobileLayout = window.matchMedia("(max-width: 760px)");
mobileLayout.addEventListener("change", (event) => {
  if (!event.matches) closeMenu();
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("open", !isOpen);
});

// Close the mobile menu with Escape and return keyboard focus to its toggle.
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || menuButton.getAttribute("aria-expanded") !== "true") return;

  closeMenu();
  menuButton.focus();
});

// Close the mobile menu after selecting a section.
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Keep the navigation aligned with the section currently in view.
if ("IntersectionObserver" in window) {
  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const linksBySection = new Map(
    sectionLinks.map((link) => [link.getAttribute("href").slice(1), link]),
  );

  const sectionObserver = new window.IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      sectionLinks.forEach((link) => link.removeAttribute("aria-current"));
      linksBySection.get(entry.target.id)?.setAttribute("aria-current", "location");
    });
  }, { rootMargin: "-20% 0px -65%", threshold: 0 });

  linksBySection.forEach((_, sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) sectionObserver.observe(section);
  });
}

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
    ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">View project <span><svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span></a>`
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

