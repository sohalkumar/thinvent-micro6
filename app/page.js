import Action from "@/components/Action/Action";
import BookDemo from "@/components/BookDemo/BookDemo";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import Navbar from "@/components/Navbar/Navbar";
import ProblemsSection from "@/components/ProblemsSection/ProblemsSection";
import Specifications from "@/components/Specifications/Specifications";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemsSection />
      <Intro />
      <Specifications />
      <Features />
      <ChooseUs />
      <Action />
      <BookDemo />
      <Footer />
    </>
  );
}
