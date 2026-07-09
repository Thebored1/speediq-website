import Hero from "@/components/landing/Hero";
import Studio from "@/components/landing/Studio";
import Services from "@/components/landing/Services";
import Belief from "@/components/landing/Belief";
import Results from "@/components/landing/Results";
import Process from "@/components/landing/Process";
import Sectors from "@/components/landing/Sectors";
import Gallery from "@/components/landing/Gallery";
import Faq from "@/components/landing/Faq";
import Cta from "@/components/landing/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Studio />
      <Services />
      <Belief />
      <Results />
      <Process />
      <Sectors />
      <Gallery />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
