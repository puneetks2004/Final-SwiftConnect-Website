const Tech = () => {
    const tech = [
        { name: "React", color: "from-cyan-400 to-blue-500" },
        { name: "Tailwind CSS", color: "from-sky-400 to-indigo-500" },
        { name: "Node.js", color: "from-green-400 to-emerald-600" },
        { name: "Express.js", color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", color: "from-green-500 to-lime-500" },
        { name: "Socket.IO", color: "from-purple-400 to-pink-500" },
        { name: "AI Particles", color: "from-pink-500 to-purple-600" },
    ];

    return (
        <section id="tech"  className="py-20 px-6 bg-[#020617] text-white text-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-16">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    Tech Stack
                </span>
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {tech.map((item, index) => (
                    <div
                        key={index}
                        className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                    >
                        {/* Inner Card */}
                        <div className="bg-[#020617] rounded-2xl p-5 h-full flex items-center justify-center">
                            <h3 className="text-sm md:text-base font-semibold tracking-wide group-hover:scale-105 transition">
                                {item.name}
                            </h3>
                        </div>

                        {/* Glow Effect */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 blur-xl rounded-2xl bg-gradient-to-r ${item.color}`}></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tech;