import { useState } from "react";
import { Link } from "react-scroll";
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

    const header = document.querySelector("header"); // your fixed header
    const headerHeight = header ? header.offsetHeight : 0;

    const y = el.getBoundingClientRect().top + window.pageYOffset - (headerHeight - 10);
    window.scrollTo({ top: y, behavior: "smooth" });
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
    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

    {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-6">
      <button onClick={() => scrollToSection("about")} className="hover:text-blue-600">About</button>
      <button onClick={() => scrollToSection("services")} className="hover:text-blue-600">Services</button>
      <button onClick={() => scrollToSection("contact")} className="hover:text-blue-600">Contact</button>
    </nav>
  </div>
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

const navLinks = [
  { to: "about", label: "About" },
  { to: "services", label: "Services" },
  { to: "contact", label: "Contact" },
];
