import Blog from "../ui/home/Blog";
import CtaBanner from "../ui/home/CtaBanner";
import Faq from "../ui/home/Faq";
import Features from "../ui/home/Features";
import HeroSection from "../ui/home/HeroSection";
import HowitWork from "../ui/home/HowitWork";
import Testimony from "../ui/home/Testimony";
import WhatWeOffer from "../ui/home/WhatWeOffer";
import WhyWeBuild from "../ui/home/WhyWeBuild";

function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <HowitWork />
      <WhatWeOffer />
      <WhyWeBuild />
      <Testimony />
      <Faq />
      <Blog />
      <CtaBanner />
    </div>
  );
}

export default Home;
