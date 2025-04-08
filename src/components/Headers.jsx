import { useState } from "react";
import logo from "../assets/logo.svg"; 

export default function Headers() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-black z-10 w-full flex items-center justify-between h-16 fixed top-0 px-4 shadow-md shadow-pink-600">

            <div className="text-2xl font-bold italic flex items-center gap-2 text-white">
                <img src={logo} alt="logo de l'application" className="w-8 h-8" />
                Elsa TASSOU
            </div>


            <nav className="hidden sm:flex items-center gap-6 text-white text-sm font-medium">
                <a href="#home" className="hover:text-green-400 transition">Home</a>
                <a href="#aboutMe" className="hover:text-green-400 transition">About Me</a>
                <a href="#service" className="hover:text-green-400 transition">Services</a>
                <a href="#contact" className="hover:text-green-400 transition">Contact</a>
            </nav>

            <button
                onClick={toggleMenu}
                className="sm:hidden flex flex-col items-end gap-1 w-8 h-8 text-green-400"
                aria-label="Toggle mobile menu"
            >
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-2/3 h-0.5 bg-current"></div>
                <div className="w-1/3 h-0.5 bg-current"></div>
            </button>


            <nav
                className={`sm:hidden bg-pink-600/95 text-white font-medium flex flex-col gap-4 px-6 py-6 absolute top-16 left-0 w-64 h-screen transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                    }`}
            >
                <a onClick={toggleMenu} href="#home" className="hover:text-green-400 transition">Home</a>
                <a onClick={toggleMenu} href="#aboutMe" className="hover:text-green-400 transition">About Me</a>
                <a onClick={toggleMenu} href="#service" className="hover:text-green-400 transition">Services</a>
                <a onClick={toggleMenu} href="#contact" className="hover:text-green-400 transition">Contact</a>
            </nav>
        </header>
    );
}
