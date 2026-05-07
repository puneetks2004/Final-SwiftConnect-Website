import Background5 from "./Background5";
import jwtVideo from "./fingerprint.mp4";
import passwordVideo from "./password.mp4";
import apiVideo from "./dedicated.mp4";

const Security = () => {
    return (
        <section id="security" className="relative min-h-screen py-20 px-6 text-white overflow-hidden">

            {/* 🔥 Background */}
            <div className="absolute inset-0 z-0">
                <Background5 />
            </div>

            {/* 🔥 Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* 🔥 Content */}
            <div className="relative z-20">

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                        Security & Authentication
                    </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* JWT */}
                    <div className="bg-white backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">

                        <video
                            src={passwordVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-40 object-contain"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-black">JWT Authentication</h3>
                            <p className="text-black">
                                Secure user sessions using JSON Web Tokens. Each request is verified
                                through token-based authentication ensuring safe access.
                            </p>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="bg-white backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">

                        <video
                            src={jwtVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-40 object-contain"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-semibold  text-black" >Password Security</h3>
                            <p className="text-black">
                                User passwords are hashed using bcrypt, preventing storage of plain
                                text credentials and enhancing data protection.
                            </p>
                        </div>
                    </div>

                    {/* API */}
                    <div className="bg-white backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden">

                        <video
                            src={apiVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-40 object-contain"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-black  mb-2">Secure APIs</h3>
                            <p className="text-black">
                                Backend APIs are protected with authentication middleware, allowing
                                only authorized users to access sensitive data.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Security;