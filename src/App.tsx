import BlobFlower from "./BlobFlower";
import adobeExpressScreenshot from "./assets/Adobe Express - file.png";
import { FaTrophy, FaUser } from "react-icons/fa";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl font-sans text-black lg:flex lg:justify-between lg:gap-4 relative selection:bg-orange-300 selection:text-orange-900">
      {/* Place BlobFlower behind other content */}
      <div className="fixed inset-0 z-0">
        <BlobFlower />
      </div>

      {/* Left Column (Header/Nav) - Adjusted horizontal padding */}
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between py-24 px-24 z-10">
        <div>
          <h1 className="text-4xl font-medium text-gray-800">
            Marko Tsymbaliuk
          </h1>
          <h2 className="mt-3 text-xl font-medium text-gray-800">
            Software Engineer
          </h2>
          <p className="mt-4 max-w-xs text-base font-medium text-gray-800">
            Building cool things for the web. Focusing on full stack development
            and creating great software.
          </p>
          <nav
            className="nav hidden lg:block mt-16"
            aria-label="In-page jump links"
          >
            <ul className="w-max">
              <li>
                <a className="group flex items-center py-3" href="#about">
                  <span className="nav-indicator mr-4 h-px w-8 bg-gray-400 transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-800 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-800 group-focus-visible:text-gray-800">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#projects">
                  <span className="nav-indicator mr-4 h-px w-8 bg-gray-400 transition-all group-hover:w-16 group-hover:bg-gray-800 group-focus-visible:w-16 group-focus-visible:bg-gray-800 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-800 group-focus-visible:text-gray-800">
                    Projects
                  </span>
                </a>
              </li>
              {/* Add more nav links as needed */}
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
          <li>
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

      {/* Right Column (Main Content) - Adjusted horizontal padding */}
      <main id="content" className="lg:w-[60%] py-24 px-24 z-10">
        <section id="about" className="scroll-mt-24">
          <p className="text-base font-medium text-gray-800">
            I'm a junior Computer Science student at Gettysburg College, also
            pursuing a minor in Economics. My focus is on creating software
            that's not just functional, but meaningful and easy to use—whether
            it's building smarter tools for digital organization or helping
            people learn more efficiently.
          </p>
          <p className="mt-4 text-base font-medium text-gray-800">
            I'm particularly drawn to the intersection of user experience and
            intelligent systems, driven by a curiosity to design intuitive
            applications that solve real problems and improve how we interact
            with technology. As a student from Ukraine, I bring a unique
            perspective to my work and believe in technology's potential for
            positive impact.
          </p>
          <p className="mt-4 text-base font-medium text-gray-800">
            Outside of coding, I find creative outlets in 3D modeling,
            sculpting, running, and volunteering, which keep me inspired and
            grounded.
          </p>
        </section>
        <section id="projects" className="mt-16 scroll-mt-24">
          <div className="mt-4 group/list">
            {/* CodeCafé Project - Adjusting image/text split */}
            <a
              href="https://github.com/mrktsm/codecafe"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View CodeCafé project on GitHub"
              className="mb-12 group relative block pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              {/* Background hover effect div */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-100/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              {/* Inner Grid for Image & Text */}
              <div className="relative sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4 pointer-events-none">
                {/* Image Column (Right) - Changed to col-span-4 */}
                <div className="sm:order-2 sm:col-span-4 lg:group-hover/list:opacity-100">
                  <img
                    alt="Adobe Express project screenshot or logo"
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    src={adobeExpressScreenshot}
                    className="rounded w-full transition aspect-video object-cover"
                  />
                </div>
                {/* Text Column (Left) - Changed to col-span-4 */}
                <div className="sm:col-span-4">
                  {/* Title - Added group-hover text color and group/link for SVG */}
                  <h3 className="text-lg font-medium text-gray-800 pointer-events-auto group/link group-hover:text-orange-600">
                    CodeCafé
                    {/* Changed SVG animation trigger from group-hover/link to group-hover */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </h3>
                  {/* Description */}
                  <p className="mt-2 text-sm font-medium text-gray-800 select-none">
                    Real-time collaborative code editor in the browser for
                    seamless pair programming and teaching.
                  </p>
                  {/* User Count */}
                  <div className="mt-2 flex items-center text-sm font-medium text-gray-600">
                    <FaUser className="mr-1 h-4 w-4" aria-hidden="true" />
                    <span className="select-none">6,000+ Users</span>
                  </div>
                  {/* Learn More Link */}
                  <a
                    href="https://github.com/mrktsm/codecafe"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-block text-orange-600 hover:text-orange-800 text-sm font-medium pointer-events-auto"
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </div>

              {/* Tags List (Restored full list) */}
              <ul
                className="relative mt-4 flex flex-wrap pointer-events-none"
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
            </a>{" "}
            {/* End of main card link */}
            {/* Dermafyr Project - Updated links to GitHub repo */}
            <a
              href="https://github.com/mrktsm/dermafyr"
              /* Replaced placeholder link */ target="_blank"
              rel="noreferrer noopener"
              aria-label="View Dermafyr project on GitHub"
              className="mb-12 group relative block pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              {/* Background hover effect div */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-100/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              {/* Inner Content Wrapper */}
              <div className="relative pointer-events-none">
                {/* Text Column */}
                <div>
                  {/* Title - Added hover effect, group/link, and arrow SVG */}
                  <h3 className="text-lg font-medium text-gray-800 pointer-events-auto group/link group-hover:text-orange-600">
                    Dermafyr
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </h3>
                  {/* Description - Rewritten */}
                  <p className="mt-2 text-sm font-medium text-gray-800 select-none">
                    Get personalized skincare guidance instantly. Dermafyr uses
                    AI to analyze skin conditions via the web or private
                    in-store kiosks, recommending routines and products to help
                    bridge the accessibility gap in dermatological care.
                  </p>
                  {/* Award Info */}
                  <div className="mt-2 flex items-center text-sm font-medium text-gray-600">
                    <FaTrophy className="mr-1 h-4 w-4" aria-hidden="true" />
                    <span className="select-none">
                      YCP Hacks Best of Show Winner
                    </span>
                  </div>
                  {/* Learn More Link - Updated href */}
                  <a
                    href="https://github.com/mrktsm/dermafyr"
                    /* Replaced placeholder link */ target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-block text-orange-600 hover:text-orange-800 text-sm font-medium pointer-events-auto"
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </div>

              {/* Tags List (Restored full list) */}
              <ul
                className="relative mt-4 flex flex-wrap pointer-events-none"
                aria-label="Technologies used"
              >
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    React
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Electron
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    FastAPI
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    TensorFlow
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Gemini API
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Llama
                  </div>
                </li>
                <li className="mr-1 mt-2">
                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-500 select-none">
                    Raspberry Pi
                  </div>
                </li>
              </ul>
            </a>{" "}
            {/* End of Dermafyr card link */}
            {/* Removed Placeholder Project Card */}
          </div>{" "}
          {/* End of group/list */}
          {/* GitHub Profile Link */}
          <div className="mt-12">
            <a
              className="inline-flex items-center font-medium leading-tight text-gray-800 group hover:text-orange-600"
              href="https://github.com/mrktsm"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View GitHub Profile (opens in a new tab)"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-orange-400 motion-reduce:transition-none">
                  View All Projects on GitHub
                </span>
                <span className="whitespace-nowrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
