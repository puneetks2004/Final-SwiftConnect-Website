import ParticleBackground from "./ParticleBackground";
import { Link } from "react-scroll";
const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center justify-center text-center px-6 text-white overflow-hidden"
        >
            {/* 🔥 Background Layer */}
            <div className="absolute inset-0 z-0">
                <ParticleBackground />
            </div>

            {/* 🔥 Dark Overlay (optional but important for readability) */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            {/* 🔥 Content (Always on top) */}
            <div className="relative z-20 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
SwiftConnect                </h1>

                <p className="mt-4 text-gray-300 text-2xl">
An AI-Powered Real-Time Messaging Platform with Multimedia Sharing and UPI Integration                </p>

                <div className="mt-6 flex gap-4 justify-center">
                    <button className="px-6 py-3 bg-purple-600 rounded-lg hover:scale-105 transition cursor-pointer" >
                        View Demo
                    </button>

                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-70} // adjust if navbar overlaps
                    >
                        <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition cursor-pointer">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;