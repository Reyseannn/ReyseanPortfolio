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

// PROJECT LIST
// Add new projects here. Put the image in the assets folder and use its path.
// Only title, image, and paragraph are needed. Add link only if it has a public page.
const projects = [
  {
    title: "FireFlies",
    image: "https://raw.githubusercontent.com/Reyseannn/ReyseanPortfolio/main/public/images/fireflies-hero.png",
    paragraph: "I led this student team and worked on the HTML, CSS, and JavaScript. It’s a creature-collecting game that teaches programming and debugging through dialogue and challenges.",
    link: "https://code-hunt-git-portfolio-playable-demo-reysean.vercel.app"
  },
  {
    title: "Beyond the Lens",
    image: "https://raw.githubusercontent.com/Reyseannn/ReyseanPortfolio/main/public/images/beyond-discover.png",
    paragraph: "I led this two-month Grade 11 Android project. Users can discover photographers, create an account, and view profile galleries. I built it with Java and Android Studio."
  },
  {
    title: "eTickette",
    image: "https://raw.githubusercontent.com/Reyseannn/ReyseanPortfolio/main/public/images/etickette-display.webp",
    paragraph: "I was assistant project leader, coded the first HTML and CSS page, and focused on the kiosk setup. The group project is a smart queue system for STI College Fairview’s Registrar and Cashier."
  }
];

const projectList = document.querySelector("#project-list");
projectList.innerHTML = projects.map((project) => {
  const projectLink = project.link
    ? `<a class="project-card-link" href="${project.link}" target="_blank" rel="noopener noreferrer">View project <span>↗</span></a>`
    : "";

  return `
    <article class="project-card">
      <img class="project-card-image" src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="project-card-copy">
        <h3>${project.title}</h3>
        <p>${project.paragraph}</p>
        ${projectLink}
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
