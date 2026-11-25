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
  {
    title: "AGAP — Community Complaint System",
    image: "/portfolio/assets/agap-home.png",
    slides: [
      {src: "/portfolio/assets/agap-home.png", alt: "AGAP landing page", label: "Homepage"},
      {src: "/portfolio/assets/agap-admin.png", alt: "AGAP barangay administration dashboard", label: "Admin dashboard"},
      {src: "/portfolio/assets/agap-features.png", alt: "AGAP process and feature overview", label: "How it works"},
      {src: "/portfolio/assets/agap-signin.png", alt: "AGAP sign in screen", label: "Sign in"},
      {src: "/portfolio/assets/agap-verify.png", alt: "AGAP resident verification form with empty fields", label: "Verification"}
    ],
    paragraph: "A CRUD-based barangay complaint management system I developed for my college final project. It gives residents a dedicated channel to report community concerns and track their progress while barangay staff review reports, verify residents, and manage resolutions. I worked as the solo developer and team leader, building the HTML, CSS, and JavaScript interface with a C++ backend. Runs locally; source code is available on GitHub.",
    link: "https://github.com/Reyseannn/AGAP"
  },
  // Example:
  // {
  //   title: "My project",
  //   image: "/portfolio/assets/my-project.jpg",
  //   paragraph: "A short description of the project and what I worked on.",
  //   link: "https://example.com"
  // }
];

const projectList = document.querySelector("#project-list");
projectList.innerHTML = projects.map((project, projectIndex) => {
  const projectLink = project.link
    ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">View source code <span aria-hidden="true">↗</span></a>`
    : "";

  // If screenshots are not yet uploaded, keep the existing working preview.
  const slides = project.slides || [{ src: project.image, alt: project.title, label: "Preview" }];
  const slidesMarkup = slides.map((slide, i) => `
    <img class="agap-slide${i === 0 ? " is-active" : ""}" src="${slide.src}"
      alt="${slide.alt}" loading="eager"
      data-slide="${i}" aria-hidden="${i === 0 ? "false" : "true"}">
  `).join("");
  const dots = slides.map((slide, i) => `
    <button type="button" class="agap-dot${i === 0 ? " is-active" : ""}" data-goto="${i}"
      aria-label="Show ${slide.label}" aria-current="${i === 0 ? "true" : "false"}"></button>
  `).join("");
  return `
    <article class="project project-extra">
      <div class="project-copy">
        <p class="project-kind">C++ Full-stack · College final project</p>
        <h3>${project.title}</h3>
        <p class="project-role">Solo Developer &amp; Team Leader</p>
        <p>${project.paragraph}</p>
        <div class="tags"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>C++</span><span>CRUD</span></div>
        ${projectLink}
      </div>
      <div class="project-media agap-gallery" data-gallery="${projectIndex}" role="region" aria-label="${project.title} screenshots" aria-roledescription="carousel">
        <div class="agap-screen">
          <img class="agap-fallback" src="${project.image}" alt="${project.title} interface preview" loading="lazy">
          ${slidesMarkup}
        </div>
        <div class="agap-gallery-controls">
          <button class="agap-arrow" type="button" data-prev aria-label="Previous screenshot">‹</button>
          <div class="agap-dots" aria-label="Choose screenshot">${dots}</div>
          <button class="agap-arrow" type="button" data-next aria-label="Next screenshot">›</button>
          <button class="agap-play" type="button" data-toggle aria-label="Pause slideshow">Pause</button>
        </div>
        <p class="agap-caption" aria-live="polite">${slides[0].label} · 1/${slides.length}</p>
      </div>
    </article>
  `;
}).join("");

document.querySelectorAll(".agap-gallery").forEach((gallery, idx) => {
  const entries = projects[idx].slides || [{ src: projects[idx].image, label: "Preview" }];
  const slides = [...gallery.querySelectorAll(".agap-slide")];
  const dots = [...gallery.querySelectorAll(".agap-dot")];
  const caption = gallery.querySelector(".agap-caption");
  const fallback = gallery.querySelector(".agap-fallback");
  const play = gallery.querySelector(".agap-play");
  let current = 0;
  let timer = null;
  let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let visible = true;
  const available = new Set();
  const show = (next) => {
    const possible = [...available].sort((a,b)=>a-b);
    if (!possible.length) {
      slides.forEach(slide => slide.classList.remove("is-active"));
      fallback.hidden = false;
      caption.textContent = "AGAP screenshot";
      return;
    }
    current = possible.includes(next) ? next : possible.find(i => i > current) ?? possible[0];
    fallback.hidden = true;
    // Match the frame to the current screenshot's real dimensions.
    // This removes top/bottom letterboxing without cropping any UI text.
    const activeImage = slides[current];
    if (activeImage?.naturalWidth && activeImage?.naturalHeight) {
      gallery.querySelector(".agap-screen").style.aspectRatio =
        `${activeImage.naturalWidth} / ${activeImage.naturalHeight}`;
    }
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === current);
      slide.setAttribute("aria-hidden", i === current ? "false" : "true");
    });
    dots.forEach((dot,i) => {
      dot.classList.toggle("is-active", i === current);
      dot.setAttribute("aria-current", i === current ? "true" : "false");
      dot.disabled = !available.has(i);
    });
    caption.textContent = `${entries[current].label} · ${current + 1}/${entries.length}`;
  };
  const stop = () => { if(timer !== null) clearInterval(timer); timer = null; };
  const start = () => {
    stop();
    if (paused || !visible || document.hidden || available.size < 2) return;
    timer = setInterval(() => {
      const possible = [...available].sort((a,b)=>a-b);
      const position = possible.indexOf(current);
      show(possible[(position + 1) % possible.length]);
    }, 5000);
  };
  const navigate = (direction) => {
    const possible = [...available].sort((a,b)=>a-b);
    if (!possible.length) return;
    const position = possible.indexOf(current);
    show(possible[(position + direction + possible.length) % possible.length]);
    start();
  };
  slides.forEach((slide,i) => {
    slide.addEventListener("load", () => { available.add(i);show(current); start(); });
    slide.addEventListener("error", () => { available.delete(i);show(current); start(); });
    if (slide.complete) {
      if (slide.naturalWidth > 0) available.add(i);
    }
  });
  show(0);
  gallery.querySelector("[data-prev]").addEventListener("click", () => navigate(-1));
  gallery.querySelector("[data-next]").addEventListener("click", () => navigate(1));
  dots.forEach(dot => dot.addEventListener("click", () => { show(Number(dot.dataset.goto)); start(); }));
  play.addEventListener("click", () => {
    paused = !paused;
    play.textContent = paused ? "Play" : "Pause";
    play.setAttribute("aria-label", paused ? "Resume slideshow" : "Pause slideshow");
    start();
  });
  if (paused) { play.textContent = "Play"; play.setAttribute("aria-label", "Resume slideshow"); }
  document.addEventListener("visibilitychange", start);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(items => {
      visible = items[0].isIntersecting;
      start();
    }, { threshold: 0.1 }).observe(gallery);
  }
  start();
});
