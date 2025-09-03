import { useState } from "react";
import { Menu, X } from "lucide-react";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      (headerHeight - 10);
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false); // close menu after clicking
  };

  return (
    <div className="font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-[100px]">
        <div className="flex justify-between items-center px-8 h-full">
          <div className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="Company Logo"
              className="h-[120px] w-auto object-contain"
            />
          </div>
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-blue-600"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-600"
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden bg-white shadow-md border-t">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-lg hover:text-blue-600"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-lg hover:text-blue-600"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-lg hover:text-blue-600"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Main sections */}
      <main className="pt-20">
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
