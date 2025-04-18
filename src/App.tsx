import BlobFlower from "./BlobFlower";

function App() {
  return (
    <div className="min-h-screen text-black lg:flex lg:justify-between lg:gap-4 relative">
      {/* Place BlobFlower behind other content */}
      <div className="fixed inset-0 z-0">
        <BlobFlower />
      </div>

      {/* Left Column (Header/Nav) - Adjusted horizontal padding */}
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between py-24 px-24 z-10">
        <div>
          <h1 className="text-4xl font-medium text-gray-800">Your Name</h1>
          <h2 className="mt-3 text-xl font-medium text-gray-800">Your Title</h2>
          <p className="mt-4 max-w-xs text-base font-medium text-gray-800">
            Short description about yourself.
          </p>
          {/* Placeholder for Nav later */}
          <nav className="hidden lg:block mt-16">NAV</nav>
        </div>
        {/* Placeholder for Social Links later */}
        <ul className="mt-8 flex items-center">SOCIALS</ul>
      </header>

      {/* Right Column (Main Content) - Adjusted horizontal padding */}
      <main id="content" className="lg:w-[60%] py-24 px-24 z-10">
        {/* Placeholder for About/Projects later */}
        <section id="about">ABOUT SECTION</section>
        <section id="projects" className="mt-16">
          PROJECTS SECTION
        </section>
      </main>
    </div>
  );
}

export default App;
