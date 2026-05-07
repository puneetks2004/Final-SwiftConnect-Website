import main_image from"./final_image.png"

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-[#020617] text-white relative overflow-hidden">

            {/* 🔥 Gradient Glow Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 blur-3xl opacity-40"></div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    About
                </span>
            </h2>

            <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT: TEXT CARD */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 
                shadow-xl animate-glow 
                hover:shadow-purple-500/40 
                transition duration-500">

                    <p className="text-gray-300 leading-relaxed mb-4">
                        <span className="text-white font-semibold">SwiftConnect</span> is an
                        <span className="text-purple-400"> AI-powered real-time chat application </span>
                        designed to redefine modern digital communication. It combines speed, intelligence, and seamless user experience into a single platform, enabling users to communicate efficiently and interactively.
                        </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        Built using advanced technologies like the <span className="text-pink-400">MERN stack</span> and
                        <span className="text-cyan-400"> Socket.IO </span>, SwiftConnect ensures instant message delivery, low latency, and real-time updates. The platform goes beyond traditional messaging by integrating intelligent features such as AI-based smart reply suggestions, enhancing communication efficiency and reducing user effort.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        SwiftConnect also supports rich multimedia sharing, allowing users to exchange images, audio, and documents effortlessly within the chat interface. In addition, it introduces a
                        <span className="text-purple-400"> unique payment request feature</span>, enabling users to simulate transactions directly within conversations, showcasing the future of integrated communication systems.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        With a modern UI and smooth animations, it delivers a powerful and engaging experience.
                    </p>

                </div>

                {/* RIGHT: IMAGE */}
                <div className="relative flex justify-center">

                    {/* Glow effect behind image */}
                    <div className="absolute w-72 h-72 bg-purple-500/30 blur-3xl rounded-full"></div>

                    <img
                        src={main_image}
                        alt="About Project"
                        className="relative w-full max-w-md rounded-xl shadow-2xl 
                   animate-bounce-smooth 
                   hover:scale-105 transition duration-500"
                    />

                </div>

            </div>
        </section>
    );
};

export default About;