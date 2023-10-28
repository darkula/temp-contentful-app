import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            maiores qui quas soluta rem perspiciatis ducimus quos repudiandae.
            Temporibus, fugit? Doloribus sunt quos cupiditate nihil iste
            officiis ducimus dolores temporibus?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
