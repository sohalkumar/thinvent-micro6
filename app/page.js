import Action from "@/components/Action/Action";
import BookDemo from "@/components/BookDemo/BookDemo";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Devices from "@/components/Devices/Devices";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import ProblemsSection from "@/components/ProblemsSection/ProblemsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <Devices />
      <Features />
      <ChooseUs />
      <Action />
      <BookDemo />
    </>
  );
}
