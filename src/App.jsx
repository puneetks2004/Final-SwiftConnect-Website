import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import About from "./components/About";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Security from "./components/Security";

function App() {
  return (
    <div className="bg-[#020617] font-sans">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Security />
      <Demo />
      
      <Tech />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;