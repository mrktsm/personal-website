import { useState, useEffect } from "react";
import adobeExpressScreenshot from "./assets/codecafe-light.png";
import wikiracingDesktopScreenshot from "./assets/wikiracing-desktop.png";
import wikiracingMobileScreenshot from "./assets/wikiracing-mobile.png";
import drjavaImage from "./assets/drjava-light.png";
import { FaStar } from "react-icons/fa";
// import BlobFlower from "./BlobFlower";

function App() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isNearBottom, setIsNearBottom] = useState<boolean>(false);
  const [codeCafeStars, setCodeCafeStars] = useState<string | number>("200+");
  const [areStarsFetched, setAreStarsFetched] = useState<boolean>(false);
  const [isCodeCafeImageLoaded, setIsCodeCafeImageLoaded] =
    useState<boolean>(false);
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true);

  const handleOpenSourceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("opensource");
    if (section) {
      const rect = section.getBoundingClientRect();
      const sectionMiddle = rect.top + rect.height / 2;
      const scrollTop = window.scrollY + sectionMiddle - window.innerHeight / 2;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = [
      document.getElementById("about"),
      document.getElementById("projects"),
      document.getElementById("opensource"),
      document.getElementById("experience"),
    ].filter((el) => el !== null) as HTMLElement[];

    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Detect when section is in middle 20% of viewport
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isNearBottom) return; // Don't override when near bottom

      // Prevent observer from overriding initial state immediately on page load
      if (window.scrollY === 0) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Handle top and bottom edge cases, let intersection observer handle middle sections
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = scrollTop / (documentHeight - windowHeight);

      const nearTop = scrollTop < 100;
      const nearBottom = scrollPercent > 0.95;
      setIsNearBottom(nearBottom || nearTop);

      if (nearTop) {
        setActiveSection("about");
      } else if (nearBottom) {
        setActiveSection("experience");
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNearBottom]);

  useEffect(() => {
    fetch("https://api.github.com/repos/mrktsm/codecafe")
      .then((response) => response.json())
      .then((data) => {
        if (data && typeof data.stargazers_count === "number") {
          setCodeCafeStars(data.stargazers_count);
        } else {
          console.warn(
            "Could not fetch CodeCafé stars or data format unexpected.",
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching CodeCafé stars:", error);
      })
      .finally(() => {
        setAreStarsFetched(true);
      });
  }, []);

  useEffect(() => {
    if (areStarsFetched && isCodeCafeImageLoaded) {
      setIsLoadingPage(false);
    }
  }, [areStarsFetched, isCodeCafeImageLoaded]);

  return (
    <div
      className={`mx-auto min-h-screen max-w-screen-xl font-sans text-black lg:flex lg:justify-between lg:gap-4 relative selection:bg-orange-300 selection:text-orange-900 transition-opacity duration-500 ease-in-out ${
        isLoadingPage ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Place BlobFlower behind other content */}
      {/* <div className="fixed inset-0 z-0 hidden lg:block">
        <BlobFlower />
      </div> */}

      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between px-6 py-12 lg:px-24 lg:py-24 z-30">
        <div>
          <h1 className="text-4xl font-medium text-gray-800 whitespace-nowrap">
            Marko Tsymbaliuk
          </h1>
          <h2 className="mt-3 text-xl font-medium text-gray-800">
            Software Engineer
          </h2>
          <p className="mt-4 max-w-xs text-base font-medium text-gray-800">
            I love event-driven software and building things that scale.
            Real-time systems are my jam.
          </p>
          <nav
            className="nav hidden lg:block mt-16"
            aria-label="In-page jump links"
          >
            <ul className="w-max">
              <li>
                <a className="group flex items-center py-3" href="#about">
                  <span
                    className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-800 motion-reduce:transition-none ${
                      activeSection === "about"
                        ? "w-16 bg-gray-800"
                        : "w-8 bg-gray-400"
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-gray-800 group-focus-visible:text-gray-800 ${
                      activeSection === "about"
                        ? "text-gray-800"
                        : "text-gray-500"
                    }`}
                  >
                    About
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#projects">
                  <span
                    className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-800 motion-reduce:transition-none ${
                      activeSection === "projects"
                        ? "w-16 bg-gray-800"
                        : "w-8 bg-gray-400"
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-gray-800 group-focus-visible:text-gray-800 ${
                      activeSection === "projects"
                        ? "text-gray-800"
                        : "text-gray-500"
                    }`}
                  >
                    Selected Work
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group flex items-center py-3"
                  href="#opensource"
                  onClick={handleOpenSourceClick}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-800 motion-reduce:transition-none ${
                      activeSection === "opensource"
                        ? "w-16 bg-gray-800"
                        : "w-8 bg-gray-400"
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-gray-800 group-focus-visible:text-gray-800 ${
                      activeSection === "opensource"
                        ? "text-gray-800"
                        : "text-gray-500"
                    }`}
                  >
                    Open Source
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#experience">
                  <span
                    className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-800 motion-reduce:transition-none ${
                      activeSection === "experience"
                        ? "w-16 bg-gray-800"
                        : "w-8 bg-gray-400"
                    }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-gray-800 group-focus-visible:text-gray-800 ${
                      activeSection === "experience"
                        ? "text-gray-800"
                        : "text-gray-500"
                    }`}
                  >
                    Experience
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="mt-8 flex items-center">
          <li className="mr-4">
            <a
              href="https://github.com/mrktsm"
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-600 hover:text-gray-900"
              aria-label="GitHub (opens in new tab)"
            >
              GitHub
            </a>
          </li>
          <li className="mr-4">
            <a
              href="https://linkedin.com/in/marko-tsymbaliuk"
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-600 hover:text-gray-900"
              aria-label="LinkedIn (opens in new tab)"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </header>

      <main
        id="content"
        className="lg:w-[60%] px-6 pt-12 pb-16 lg:px-24 lg:py-24 z-30"
      >
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-20 lg:mb-24 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 lg:sr-only">
              About
            </h2>
          </div>
          <p className="text-base font-medium text-gray-800">
            I’m a Computer Science student at Gettysburg College, graduating in December 2026 with a minor in Economics. My work is mostly focused on backend engineering, full-stack development, and real-time systems.
          </p>
          <p className="mt-4 text-base font-medium text-gray-800">
            My strongest work has been around real-time collaboration and backend systems, especially projects where multiple users interact with the same shared state.
          </p>
          <p className="mt-4 text-base font-medium text-gray-800">
            My largest project is CodeCafé, a browser-based collaborative code editor with live preview and real-time multi-user editing. I built the core Operational Transformation engine myself using Java, Spring Boot, WebSockets, Redis, and Lua scripts. The project reached 500+ GitHub stars and appeared on the Hacker News front page.
          </p>
          <p className="mt-4 text-base font-medium text-gray-800">
            That experience pushed me deeper into distributed systems and open source. I later contributed to Apache Cassandra, one of the most widely used distributed databases, with a merged contribution to its configuration system.
          </p>
          <p className="mt-4 text-base font-medium text-gray-800">
            I also worked as a Software Engineer at Poozle, where I built recommendation features on top of a vector database. More recently, I’ve been building wikiracing.org, a real-time Wikipedia racing platform where players race from one article to another using only Wikipedia links, with matchmaking, live cursors, leaderboards, mobile support, and PWA support.
          </p>
          <p className="mt-4 text-base font-medium text-gray-800">
            I like building software that is technically interesting, but still easy for people to try, understand, and use.
          </p>
        </section>
        <section
          id="projects"
          className="mb-16 scroll-mt-16 md:mb-20 lg:mb-24 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 lg:sr-only">
              Selected Work
            </h2>
          </div>
          <div className="mt-4 group/list">
            <div className="mb-12 group relative block pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block border border-orange-100/0 lg:group-hover:bg-orange-50/30 lg:group-hover:shadow-lg lg:group-hover:border-orange-100"></div>

              <div className="relative sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="mb-4 flex min-h-[7.5rem] items-center justify-start sm:mb-0 sm:order-2 sm:col-span-3 sm:justify-center lg:group-hover/list:opacity-100">
                  <div
                    className="relative w-44 overflow-visible transition"
                    style={{ aspectRatio: "3/2" }}
                  >
                    <img
                      alt="wikiracing.org desktop homepage screenshot"
                      width="264"
                      height="165"
                      decoding="async"
                      src={wikiracingDesktopScreenshot}
                      className="absolute left-0 top-3 w-[90%] rounded-[2px] object-contain shadow-sm"
                      style={{ aspectRatio: "16/10" }}
                    />
                    <img
                      alt="wikiracing.org mobile gameplay screenshot"
                      width="117"
                      height="211"
                      decoding="async"
                      src={wikiracingMobileScreenshot}
                      className="absolute right-1 top-2 w-[34%] rounded-[2px] object-cover shadow-lg ring-1 ring-white/90"
                      style={{ aspectRatio: "1179/2126" }}
                    />
                  </div>
                </div>
                <div className="sm:col-span-5">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-orange-600">
                    <a
                      href="https://wikiracing.org"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="wikiracing.org (opens in new tab)"
                      className="static before:absolute before:inset-0"
                    >
                      wikiracing.org
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gray-800 select-none">
                    Real-time Wikipedia racing platform with quick matchmaking,
                    solo practice, profiles, stats, leaderboards, and mobile
                    support.
                  </p>
                </div>
              </div>

              <ul
                className="relative mt-4 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    React
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    TypeScript
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Go
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    WebSockets
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Supabase
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Real-time UX
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-12 group relative block pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block border border-orange-100/0 lg:group-hover:bg-orange-50/30 lg:group-hover:shadow-lg lg:group-hover:border-orange-100"></div>

              <div className="relative sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="mb-4 flex min-h-[7.5rem] items-center justify-start sm:mb-0 sm:order-2 sm:col-span-3 sm:justify-center lg:group-hover/list:opacity-100">
                  <img
                    alt="Adobe Express project screenshot or logo"
                    width="300"
                    height="200"
                    decoding="async"
                    src={adobeExpressScreenshot}
                    onLoad={() => setIsCodeCafeImageLoaded(true)}
                    className="rounded w-48 max-w-full transition object-contain"
                    style={{ aspectRatio: "3/2" }}
                  />
                </div>
                <div className="sm:col-span-5">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-orange-600">
                    <a
                      href="https://github.com/mrktsm/codecafe"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="CodeCafé (opens in new tab)"
                      className="static before:absolute before:inset-0"
                    >
                      CodeCafé
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gray-800 select-none">
                    Real-time collaborative code editor in the browser for
                    seamless pair programming and teaching.
                  </p>
                  <div className="flex items-center">
                    <div className="mt-2 flex items-center text-sm font-medium text-gray-600">
                      <FaStar className="mr-1 h-4 w-4" aria-hidden="true" />
                      <span className="select-none">
                        {codeCafeStars}{" "}
                        {typeof codeCafeStars === "number" ? "Stars" : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <ul
                className="relative mt-4 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    React
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    TypeScript
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Java
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Spring Boot
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    WebSockets
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Redis
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    AWS
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    OT
                  </div>
                </li>
              </ul>
            </div>
            <div className="-mt-6 mb-12">
              <a
                href="https://youtu.be/NRYpmEbF7lk?si=-tXQmBVewPyVX12k"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Watch Google Docs for Code video (opens in new tab)"
                className="inline-flex items-center font-medium leading-tight text-gray-800 group hover:text-orange-600 transition-colors duration-150 ease-in-out"
              >
                Watch my OT video
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="mb-12 group relative block pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block border border-orange-100/0 lg:group-hover:bg-orange-50/30 lg:group-hover:shadow-lg lg:group-hover:border-orange-100"></div>

              <div className="relative">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-orange-600">
                    <a
                      href="https://github.com/mrktsm/redis-in-go"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Gedis (opens in new tab)"
                      className="static before:absolute before:inset-0"
                    >
                      Gedis
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm font-medium text-gray-800 select-none">
                    High-performance Redis implementation built from scratch in
                    Go with 10k+ concurrent connections and sub-millisecond
                    response times.
                  </p>
                </div>
              </div>

              <ul
                className="relative mt-4 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Go
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    TCP Sockets
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    B-trees
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Concurrency
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Database Design
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    TCP Sockets
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <a
              className="inline-flex items-center font-medium leading-tight text-gray-800 group hover:text-orange-600"
              href="https://github.com/mrktsm"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View More Work on GitHub (opens in a new tab)"
            >
              View More Work on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </section>
        <section
          id="opensource"
          className="mb-16 scroll-mt-16 md:mb-20 lg:mb-24 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 lg:sr-only">
              Open Source
            </h2>
          </div>
          <div className="mt-4 group/list">
            <div className="mb-12 group relative block pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block border border-orange-100/0 lg:group-hover:bg-orange-50/30 lg:group-hover:shadow-lg lg:group-hover:border-orange-100"></div>

              <div className="relative">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-orange-600">
                    <a
                      href="https://github.com/apache/cassandra/pulls?q=is%3Apr+author%3Amrktsm"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Apache Cassandra Open Source Contributions (opens in new tab)"
                      className="static before:absolute before:inset-0"
                    >
                      Apache Cassandra
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-600">
                    Open Source Contributor · Jan 2025 - Present
                  </p>

                  <p className="mt-2 text-sm font-medium text-gray-800 select-none">
                    Contributing to Apache Cassandra database enhancements and
                    collaborating with senior maintainers on design decisions.
                  </p>
                </div>
              </div>

              <ul
                className="relative mt-4 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Java
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Apache Cassandra
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Database Systems
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Open Source
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-white/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 lg:sr-only">
              Experience
            </h2>
          </div>
          <div className="mt-4 group/list">
            <div className="mb-12 group relative block pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block border border-orange-100/0 lg:group-hover:bg-orange-50/30 lg:group-hover:shadow-lg lg:group-hover:border-orange-100"></div>

              <div className="relative">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-orange-600">
                    <a
                      href="https://www.youtube.com/watch?v=K9llFoodPjI"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Poozle design walkthrough (opens in new tab)"
                      className="static before:absolute before:inset-0"
                    >
                      Software Engineer
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-600">
                    Poozle · Remote · Oct 2025 - Mar 2026
                  </p>

                  <p className="mt-2 text-sm font-medium text-gray-800 select-none">
                    Built a Rocchio-based vector recommendation filter for job
                    matching and shipped product features across React Native
                    and Node.js, including streaks, auto-applier work, and bug
                    fixes.
                  </p>
                </div>
              </div>

              <ul
                className="relative mt-4 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    React Native
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Node.js
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Vector Databases
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Recommendations
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Embeddings
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-12 group relative block pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block border border-orange-100/0 lg:group-hover:bg-orange-50/30 lg:group-hover:shadow-lg lg:group-hover:border-orange-100"></div>

              <div className="relative sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="mb-4 flex min-h-[7.5rem] items-center justify-start sm:mb-0 sm:order-2 sm:col-span-3 sm:justify-center lg:group-hover/list:opacity-100">
                  <img
                    alt="DrJava IDE development internship project"
                    width="234"
                    height="156"
                    decoding="async"
                    src={drjavaImage}
                    className="rounded w-[9.75rem] transition object-contain"
                    style={{ aspectRatio: "3/2" }}
                  />
                </div>
                <div className="sm:col-span-5">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-orange-600">
                    <a
                      href="https://www.youtube.com/watch?v=4BScIcCiIsk&list=PLs8Bzf5mYLHX8fncmAPdhv0spaHDgvnGW"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Software Engineering Intern (opens in new tab)"
                      className="static before:absolute before:inset-0"
                    >
                      Software Engineering Intern
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-600">
                    Gettysburg College · May 2025 - Aug 2025
                  </p>

                  <p className="mt-2 text-sm font-medium text-gray-800 select-none">
                    Building AI-powered coding tutors and educational tools for
                    computer science students at Gettysburg College.
                  </p>
                </div>
              </div>

              <ul
                className="relative mt-4 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    React
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    AI/ML
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Java Swing
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Java
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Model Context Protocol
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    SSE
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-12 group relative block pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block border border-orange-100/0 lg:group-hover:bg-orange-50/30 lg:group-hover:shadow-lg lg:group-hover:border-orange-100"></div>

              <div className="relative">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-orange-600">
                    <a
                      href="https://www.gettysburg.edu"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Computer Science Teaching Assistant (opens in new tab)"
                      className="static before:absolute before:inset-0"
                    >
                      Computer Science Teaching Assistant
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-600">
                    Gettysburg College · Fall 2023 - Spring 2024
                  </p>

                  <p className="mt-2 text-sm font-medium text-gray-800 select-none">
                    Coached 60+ intro-CS students through Python labs and office
                    hours.
                  </p>
                </div>
              </div>

              <ul
                className="relative mt-4 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Python
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Teaching
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    OOP
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Mentoring
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <a
              className="inline-flex items-center font-medium leading-tight text-gray-800 group hover:text-orange-600 transition-colors duration-150 ease-in-out"
              href="/Marko_Tsymbaliuk_Resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Resume (opens in new tab)"
            >
              <span>View My Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
