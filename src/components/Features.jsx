import { motion } from "framer-motion";
import Background2 from "./Background2";

const Features = () => {
    const features = [
        { title: "Real-time Chat", desc: "Instant messaging using Socket.IO with low latency." },

        { title: "Audio Messaging", desc: "Record and send voice messages directly in chat." },

        { title: "File Attachments", desc: "Send documents, PDFs, and other files easily." },

        { title: "Live Camera Capture", desc: "Capture and send photos directly from device camera." },

        { title: "Payment Integration", desc: "UPI-based payment request simulation within chat." },

        { title: "Secure Authentication", desc: "User authentication using JWT and protected routes." },

        { title: "End-to-End Security (Concept)", desc: "Ensures privacy and secure communication (future enhancement)." },

        { title: "Cloud Storage", desc: "Media storage using Cloudinary for scalability." },

        { title: "Responsive UI", desc: "Fully responsive design for mobile, tablet, and desktop." },

        { title: "Modern UI/UX", desc: "Dark theme with smooth animations and interactive design." },

        { title: "Real-time Updates", desc: "Live updates without page refresh." },

        { title: "Scalable Architecture", desc: "Built using MERN stack for high performance." },
    ];

    return (
        <section id="features" className="relative py-20 px-6 text-white">

            {/* 🔥 Background (lowest) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Background2 />
            </div>

            {/* 🔥 Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            {/* 🔥 Content (top layer) */}
            <div className="relative z-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                        Features
                    </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-black/10 backdrop-blur-lg p-6 rounded-xl border cursor-pointer  border-white/20 hover:bg-purple-600"
                        >
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-300">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Features;