import BlobFlower from "./BlobFlower";
import adobeExpressScreenshot from "./assets/Adobe Express - file.png";

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
          {/* Add actual social links later */}
          <li className="mr-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              LinkedIn
            </a>
          </li>
        </ul>
      </header>

      {/* Right Column (Main Content) - Adjusted horizontal padding */}
      <main id="content" className="lg:w-[60%] py-24 px-24 z-10">
        <section id="about">
          <p className="mt-4 text-base font-medium text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section id="projects" className="mt-16">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mr-1 h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
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
            {/* ... Placeholder Project 2 (needs similar structural update if used) ... */}
            <div className="mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              {/* Simplified placeholder - update structure if adding content */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-100/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="relative z-10 col-span-full">
                {" "}
                {/* Simple placeholder */}
                <h3 className="text-lg font-medium text-gray-800">
                  Project Title 2
                </h3>
                <p className="mt-2 text-base font-medium text-gray-800">
                  Focused on different aspects or tech stack.
                </p>
                <a
                  href="#"
                  className="mt-2 inline-block text-orange-600 hover:text-orange-800"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
