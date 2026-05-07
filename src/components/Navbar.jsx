import { Link } from "react-scroll";
import image from "./89w.png";

const Navbar = () => {
    const navLinks = [
        { name: "Home", to: "home" },
        { name: "About", to: "about" },
        { name: "Features", to: "features" },
        { name: "Security", to: "security" },
        { name: "Demo", to: "demo" },
        { name: "Tech", to: "tech" },
        { name: "Contact", to: "contact" }
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white flex flex-row items-center"><img src={image} className="h-10 mr-2"></img>SwiftConnect</h1>

                <div className="hidden md:flex gap-6">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-gray-300 hover:text-white transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;