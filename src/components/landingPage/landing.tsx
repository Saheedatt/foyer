import HeroSection from "./Hero";
import Cards from "./Cards";
import Footer from "./Footer";

const LandingContent = () => {
  return (
    <>
      <HeroSection />
      <div className="">
        <Cards />
        </div>
        <footer>
          <Footer />
        </footer>
    </>
  );
};

export default LandingContent;
