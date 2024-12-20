import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import About from "./components/About";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchivementSection";
import EmailSection from "./components/EmailSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]" >
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
      <Hero />
      <AchievementsSection />
      <About />
      <Project />
      <EmailSection />
      <Footer />
      
            </div>
    </main>
  );
}
