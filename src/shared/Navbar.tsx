import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: Icons from lucide-react
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-backgroundColor">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="/companylogo.webp"
            alt="logo"
            className="w-40 h-20 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-5">
          <div className="uppercase font-semibold border rounded-full px-5 py-2 text-sm bg-baseColor text-white">
            Travel agency
          </div>
          <div className="uppercase font-semibold border rounded-full px-5 py-2 text-sm bg-[#525371] text-white">
            login / sign up
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <div className="uppercase font-semibold border rounded-full px-5 py-2 text-sm text-center">
            Travel agency
          </div>
          <div className="uppercase font-semibold border rounded-full px-5 py-2 text-sm text-center">
            login / sign up
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
