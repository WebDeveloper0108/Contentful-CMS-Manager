import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Flannel fixie ascot snackwave portland normcore 3 wolf moon forage,
            grailed DSA marxism iceland neutra enamel pin vape. Portland
            intelligentsia forage shaman prism grailed fixie humblebrag. Man
            braid actually artisan knausgaard. Ethical pop-up fixie artisan pork
            belly church-key.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Women and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
