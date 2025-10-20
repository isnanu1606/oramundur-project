import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ penting banget!
import logo from "../assets/oramundur-techarrow.svg";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white dark:bg-[#1B1F3B] shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-colors duration-300">
      {/* Logo + Nama */}
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </Link>
        <Link to="/">
          <h1 className="text-xl font-bold text-navy dark:text-white tracking-wide">
            OraMundur Project
          </h1>
        </Link>
      </div>

      {/* Menu Navigasi */}
      <div className="flex items-center gap-6">
        <ul className="hidden md:flex gap-8 text-graytext dark:text-gray-300 font-medium">
          <li>
            <Link to="/" className="hover:text-orange transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-orange transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Tombol Toggle Dark/Light Mode */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {theme === "dark" ? (
            <Sun className="text-yellow-400" size={20} />
          ) : (
            <Moon className="text-gray-700" size={20} />
          )}
        </button>
      </div>
    </nav>
  );
}
