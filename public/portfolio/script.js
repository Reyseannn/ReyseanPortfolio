// Open and close the section menu on small screens.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("open", !isOpen);
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
projectList.innerHTML = projects.map((project, index) => {
  const projectLink = project.link
    ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">View project <span>↗</span></a>`
    : "";

  return `
    <article class="project project-extra wrap reveal">
      <div class="project-copy">
        <p class="project-label"><span class="status-dot"></span> PERSONAL / SCHOOL PROJECT</p>
        <h3>${project.title}<span class="project-number">${String(index + 4).padStart(2, "0")}</span></h3>
        <p>${project.paragraph}</p>
        ${projectLink}
      </div>
      <div class="project-image extra-project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
    </article>
  `;
}).join("");

// Reveal sections as they enter the screen. Older browsers still show everything.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

document.querySelector("#year").textContent = new Date().getFullYear();
