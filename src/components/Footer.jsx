import image from "./final_img.png";
import Background4 from "./Background4";

const Footer = () => {
    return (

        
        <footer className="bg-[#1b1f23] text-gray-400 py-3 px-6 ">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                {/* LEFT: TEXT + LINKS */}
                <div className="text-center md:text-left space-y-3">
                    <p>© 2026 Puneet Kumar. All rights reserved.</p>

                    <div className="flex justify-center md:justify-start gap-6">
                        <a
                            href="https://github.com/puneetks2004"
                            target="_blank"
                            className="hover:text-blue-400 transition"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/puneet-kumar-882397235/"
                            target="_blank"
                            className="hover:text-blue-400 transition"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* RIGHT: IMAGE */}
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt="Footer Image"
                        className="h-32 md:h-40 object-contain hover:scale-105 transition duration-300"
                    />
                </div>

            </div>

        </footer>
    );
};

export default Footer;