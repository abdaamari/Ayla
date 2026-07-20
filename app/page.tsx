import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Packages />
        <Testimonials />
        <Location />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}