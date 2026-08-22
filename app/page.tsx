import ContactForm from "./contact-form";

/*
THESIS: A working student portfolio should lead with proof of real work, not inflated claims or a generic developer hero.
OWN-WORLD: Charcoal-to-graphite surfaces, electric blue wayfinding, editorial project compositions, square photography, and compact rounded controls.
STORY: Visitors meet Reysean, see exactly what he built and contributed, understand the services he can take on now, then start a project.
FIRST VIEWPORT: A large three-line statement and direct project CTA share the frame with Reysean's portrait and an honest availability note.
FORM: Code-led one-page portfolio based on the user-pinned refined PDF direction; seed user-pinned-refined-pdf-2026-08-22.
FINISH: independent static review completed; source-proven blockers were addressed, DESIGN.md records the system, and shipping raster provenance is documented
*/

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8a9.4 9.4 0 0 0-3 18.3c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.3-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.7 1a9.3 9.3 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.4 9.4 0 0 0 12 2.8Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.2 8.4H2.8V21h3.4V8.4ZM4.5 3A2 2 0 1 0 4.5 7a2 2 0 0 0 0-4ZM21.2 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2V8.4H9.4V21h3.4v-6.2c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21h3.4l.5-7.2Z" />
    </svg>
  );
}

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "Android Studio",
  "Python",
  "C++",
  "UI/UX",
];

export default function Home() {
  return (
    <main id="top">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Reysean Policarpio, home">
          Reysean Policarpio
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-cta">Start a project</a>
        </div>
      </nav>

      <header className="hero section-shell">
        <div className="hero-copy">
          <h1>
            I Build.
            <span>I Learn.</span>
            <span>I Create.</span>
          </h1>
          <p>
            I&apos;m Reysean Policarpio, a Computer Engineering student in Quezon
            City. I design and build straightforward websites and interfaces,
            and I&apos;m currently available for my first freelance projects.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#contact">Start a project <ArrowIcon /></a>
            <a className="text-link" href="#projects">See my work <ArrowIcon /></a>
          </div>
          <p className="hero-note">BS Computer Engineering · Based in the Philippines</p>
        </div>

        <div className="portrait-stage">
          <div className="availability"><span aria-hidden="true" /> Available for small freelance projects</div>
          <div className="portrait-frame">
            <img src="/images/reysean-profile.png" alt="Portrait of Reysean Policarpio" width={529} height={615} fetchPriority="high" />
          </div>
          <p className="portrait-caption">Student developer <span>Quezon City, Philippines</span></p>
        </div>
      </header>

      <section id="about" className="about section-shell section-space">
        <h2>Learning by building real things.</h2>
        <div className="about-copy">
          <p>
            I started with programming projects in the ICT strand and now study
            Computer Engineering at the Technological Institute of the
            Philippines. Most of what I know came from getting a feature to
            work, finding what broke, and trying again.
          </p>
          <p>
            I&apos;m strongest when a project needs structure and practical
            problem-solving. I can plan an interface, build the front end, and
            contribute to the physical setup when hardware is involved.
          </p>
        </div>
      </section>

      <section id="services" className="services section-shell section-space">
        <div className="section-heading">
          <h2>Work I can take on now.</h2>
          <p>Clear, focused projects with a scope I can deliver well. If a request goes beyond that scope, I&apos;ll say so early.</p>
        </div>
        <div className="service-list">
          <article><h3>Simple websites</h3><p>Focused pages for small businesses, school projects, and personal ideas.</p></article>
          <article><h3>Portfolio sites</h3><p>A clear place to show your work, background, and contact details.</p></article>
          <article><h3>UI/UX design</h3><p>Screen layouts and user flows that keep the main task easy to understand.</p></article>
        </div>
      </section>

      <section id="projects" className="projects section-space">
        <div className="section-shell section-heading projects-heading">
          <h2>Selected projects.</h2>
          <p>Three completed school projects, shown with the work I personally handled on each one.</p>
        </div>

        <article className="project project-fireflies">
  <div className="project-copy">
    <p className="project-index">Completed school project</p>

    <h3>FireFlies</h3>

    <p className="project-role">
      Lead Developer within a student team
    </p>

    <p>
      A creature-collecting web game that turns beginner programming
      and debugging exercises into dialogue and challenges. I led the
      team and worked on the HTML, CSS, and JavaScript build.
    </p>

    <div className="project-tags" aria-label="Technologies used">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </div>

    <a
      className="play-game-button"
      href="https://code-hunt-git-portfolio-playable-demo-reysean.vercel.app/GROUP_1_JAVASCRIPT_FIXED/GROUP%201%20JAVASCRIPT/SystemJAVA/index.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Play the game ↗
    </a>
  </div>

  <a
    className="fireflies-gallery"
    href="https://code-hunt-git-portfolio-playable-demo-reysean.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Open and play the FireFlies game"
  >
    <img
      className="fireflies-hero"
      src="/images/fireflies-hero.png"
      alt="FireFlies game character and menu screen"
      width={768}
      height={386}
      loading="lazy"
    />

    <img
      className="fireflies-world"
      src="/images/fireflies-world.png"
      alt="FireFlies bridge and world scene"
      width={512}
      height={287}
      loading="lazy"
    />

    <img
      className="fireflies-map"
      src="/images/fireflies-map.png"
      alt="FireFlies RPG map"
      width={691}
      height={389}
      loading="lazy"
    />

    <img
      className="fireflies-debug"
      src="/images/fireflies-debug.png"
      alt="FireFlies debugging challenge screen"
      width={456}
      height={408}
      loading="lazy"
    />
  </a>
</article>

        <article className="project project-beyond">
          <div className="beyond-gallery" aria-label="Beyond the Lens screenshots">
            <img src="/images/beyond-discover.png" alt="Beyond the Lens photographer discovery screen" width={293} height={520} loading="lazy" />
            <img src="/images/beyond-account.png" alt="Beyond the Lens account creation screen" width={299} height={531} loading="lazy" />
            <img src="/images/beyond-profile.png" alt="Beyond the Lens photographer profile and gallery" width={299} height={525} loading="lazy" />
          </div>
          <div className="project-copy">
            <p className="project-index">Completed Android project</p>
            <h3>Beyond the Lens</h3>
            <p className="project-role">Lead Developer</p>
            <p>
              A two-month Grade 11 Android project for discovering photographers,
              creating an account, and viewing profile galleries. I led the
              project and built the app in Java with Android Studio.
            </p>
            <div className="project-tags" aria-label="Technologies used"><span>Java</span><span>Android Studio</span><span>UI Design</span> </div>
          </div>
        </article>

        <article className="project project-etickette">
          <div className="project-copy">
            <p className="project-index">Group capstone project</p>
            <h3>eTickette</h3>
            <p className="project-role">Assistant Project Leader, Frontend Contributor, and Kiosk Hardware Contributor</p>
            <p>
              A smart queue system for STI College Fairview&apos;s Registrar and
              Cashier. I coded the first page in HTML and CSS, helped guide the
              group, and focused on the physical kiosk setup.
            </p>
            <p className="photo-note">Photos show the kiosk during setup and preparation.</p>
            <div className="project-tags" aria-label="Areas contributed to"><span>HTML</span><span>CSS</span><span>Kiosk hardware</span></div>
          </div>
          <div className="etickette-gallery" aria-label="eTickette kiosk setup photos">
            <img src="/images/etickette-display.webp" alt="eTickette kiosk prepared with the capstone display materials" width={1600} height={900} loading="lazy" />
            <img src="/images/etickette-setup.webp" alt="eTickette kiosk and laptop during setup at STI College Fairview" width={675} height={1200} loading="lazy" />
          </div>
          <div className="project-awards">
            <span>Best Application · 1st Runner-Up</span>
            <span>Best Presenter · 3rd Runner-Up</span>
            <span>Best Capstone Project · 1st Runner-Up</span>
          </div>
        </article>
      </section>

      <section id="skills" className="skills section-shell section-space">
        <div className="section-heading"><h2>Tools I actually use.</h2><p>I use these across the websites, Android projects, interfaces, and kiosk work shown above.</p></div>
        <div className="skill-rail">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section id="education" className="education section-shell section-space">
        <div className="education-main">
          <h2>Education.</h2>
          <div className="timeline">
            <article><time>2026 · Present</time><h3>Bachelor of Science in Computer Engineering</h3><p>Technological Institute of the Philippines</p></article>
            <article><time>2024 · 2026</time><h3>Senior High School Diploma, ICT Strand</h3><p>STI College Fairview</p></article>
          </div>
        </div>
        <aside className="awards">
          <h3>Awards and participation</h3>
          <ul>
            <li><span>2026</span> STI Tagisan ng Talino, Local Level Participant</li>
            <li><span>2026</span> Best Application, 1st Runner-Up</li>
            <li><span>2026</span> Best Presenter, 3rd Runner-Up</li>
            <li><span>2026</span> Best Capstone Project, 1st Runner-Up</li>
          </ul>
        </aside>
      </section>

      <section className="work-style section-shell section-space">
        <div>
          <h2>How I approach the work.</h2>
          <p>
            As a first-year student, I keep the scope honest and ask questions
            early. I stay with the work until my part is clear and usable.
          </p>
        </div>
        <dl>
          <div><dt>Clear scope</dt><dd>I define what I can deliver before the work starts.</dd></div>
          <div><dt>Hands-on</dt><dd>I learn by building, testing, and fixing what does not work.</dd></div>
          <div><dt>Team responsibility</dt><dd>I have led student teams and supported shared deadlines.</dd></div>
          <div><dt>User focus</dt><dd>I keep interfaces direct and easy to understand.</dd></div>
        </dl>
      </section>

      <section id="contact" className="contact section-space">
        <div className="section-shell contact-inner">
          <div className="contact-copy">
            <h2>Have a small website or interface in mind?</h2>
            <p>Tell me what you want to build and what you need it to do. I&apos;ll reply by email so we can decide whether the project is a good fit.</p>
            <div className="contact-links">
              <a href="mailto:policarpioreysean3@gmail.com">policarpioreysean3@gmail.com</a>
              <a href="https://github.com/Reyseannn" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
              <a href="https://www.linkedin.com/in/reyseanpolicarpio21/" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
              <a href="/downloads/Reysean_Policarpio_Resume.pdf" download>Download resume<ArrowIcon /></a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="site-footer section-shell">
        <p>© 2026 Reysean Policarpio</p>
        <a href="#top">Back to top <ArrowIcon /></a>
      </footer>
    </main>
  );
}
