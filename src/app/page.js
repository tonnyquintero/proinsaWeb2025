import Hero from "../../components/Hero";
import About from "../../components/About";
import Blog from "../../components/Blog";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import NavBar from "../../components/NavBar";
import Services from "../../components/Services";

export default function Home() {
  return (
    <div className="items-center justify-items-center p-2 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <NavBar />
        <Nav />
        <Hero />
        <About />
        <Services />
        <Blog />
        <Contact />
      </main>  
    </div>
  );
}
