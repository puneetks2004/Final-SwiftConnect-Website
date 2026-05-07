import { motion } from "framer-motion";
import recording_mute from "./recording_mute.mp4";

const Demo = () => {
    return (
        <section id="demo" className="py-20 px-6 bg-[#020617] text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    Demo
                </span>
            </h2>

            <p className="mb-8 text-gray-400">
                Watch how the application works in real-time with AI and chat features.
            </p>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="max-w-4xl mx-auto h-[400px] bg-white/10 rounded-xl flex items-center justify-center border border-white/20"
            >
                <video
                    src={recording_mute}
                    controls
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-xl"
                />
            </motion.div>
        </section>
    );
};

export default Demo;