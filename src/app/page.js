import Hero from "../../components/Hero";
import About from "../../components/About";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import NavBar from "../../components/NavBar";
import Services from "../../components/Services";
import Wbutton from "../../components/WButton";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
        <Nav />
        <Wbutton />
        <Hero />
        <About />
        <Services />
        <Blog />
        <Contact />
        <Footer />
      </main>  
    </div>
  );
}
