import Navigation from "./Navbar";
const HeroSection = () => {
  const renderLeftSection = () => (
    <div className="p-4">
      <h1 className="text-6xl py-2">Control your home. </h1>
      <p className="py-2">Improve your living experience</p>
      <button className="cta-button bg-black text-white px-4 py-2 rounded">
        Discover More
      </button>
    </div>
  );
  const renderRightSection = () => (
    <div className="p-4">
      <div className="flex justify-end py-4">
        <button className="bg-black text-white px-2 rounded">Plant</button>
      </div>
      <p>
        Your home reimagined. Transform your space into a smart sanctuary where
        comfort meets convenience.
      </p>
    </div>
  );
  const renderRandomElement = () => (
    <div className="bg-black text-white w-32 rounded">
      <p>Plant</p>
    </div>
  );

  return (
    <section
      //   style={{
      //     backgroundImage: 'url("/home.jpg")',
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //   }}
      className="hero-section">
      <Navigation />

      <div className="flex flex-col justify-center items-center  md:flex-row p-10">
        <div className="flex-1">{renderLeftSection()}</div>
        <div className="flex-1 w-64">{renderRightSection()}</div>
      </div>
      <div className="flex-1 text-center items-center flex justify-center" style={{paddingBlockEnd:'20px'}}>
        {renderRandomElement()}
      </div>
    </section>
  );
};

export default HeroSection;
