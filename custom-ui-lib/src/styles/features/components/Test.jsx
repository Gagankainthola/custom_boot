import React from "react";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 txt-center">
      {/* Header */}
      <header className="bg-primary txt-white pd-4 shadow-md">
        <h1 className="txt-2xl fw-700">My Stylish Website</h1>
        <nav className="mt-2">
          <ul className="flex justify-center gap-6 txt-md">
            <li>
              <a href="#" className="hover-underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover-underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover-underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover-underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-10 py-8">
        <section className="flex justify-center gap-6 flex-wrap">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white shadow-lg rd-2 pd-6 w-80 hover-shadow-xl transition"
            >
              <h3 className="txt-lg fw-600 mb-2">Card Title {i}</h3>
              <p className="txt-sm txt-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla.
              </p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark txt-white pd-4 mt-10">
        <p className="txt-sm">
          &copy; 2025 Gagan's Interactive Web. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
