import BlobFlower from "./BlobFlower";

function App() {
  return (
    <div className="min-h-screen font-sans text-black lg:flex lg:justify-between lg:gap-4 relative">
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
            Building cool things for the web. Passionate about frontend
            development and user experience.
          </p>
          <nav className="hidden lg:block mt-16">
            <ul>
              <li>
                <a
                  href="#about"
                  className="font-medium text-gray-600 hover:text-gray-900"
                >
                  About
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#projects"
                  className="font-medium text-gray-600 hover:text-gray-900"
                >
                  Projects
                </a>
              </li>
              {/* Add more nav items later */}
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
          <h2 className="text-2xl font-medium text-gray-800">About Me</h2>
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
          <h2 className="text-2xl font-medium text-gray-800">Projects</h2>
          <div className="mt-4 group/list">
            <div className="mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-100/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:col-span-6">
                <h3 className="text-lg font-medium text-gray-800">
                  Project Title 1
                </h3>
                <p className="mt-2 text-base font-medium text-gray-800">
                  Short description of project 1. Highlighting key features and
                  technologies used.
                </p>
                <a
                  href="#"
                  className="mt-2 inline-block text-orange-600 hover:text-orange-800"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
            <div className="mb-12 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-100/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:col-span-6">
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
