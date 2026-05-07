import Background3 from "./Background3";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "5630f151-6419-4052-b70e-15e3d67c13d9");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Email Sent Successfully");
        } else {
            alert("Something went wrong");
        }
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen py-20 px-6 bg-black text-white overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Background3 />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-center">

                <h2 className="text-4xl md:text-5xl font-bold mb-16">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                        Contact Us
                    </span>
                </h2>

                {/* ✅ FORM START */}
                <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">

                    <input
                        type="text"
                        name="name"   // ✅ IMPORTANT
                        placeholder="Your Name"
                        required
                        className="w-full p-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500"
                    />

                    <input
                        type="email"
                        name="email"  // ✅ IMPORTANT
                        placeholder="Your Email"
                        required
                        className="w-full p-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500"
                    />

                    <textarea
                        rows="4"
                        name="message"  // ✅ IMPORTANT
                        placeholder="Your Message"
                        required
                        className="w-full p-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:border-purple-500"
                    />

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-purple-600 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
                    >
                        Send Message
                    </button>

                </form>
                {/* ✅ FORM END */}

            </div>
        </section>
    );
};

export default Contact;