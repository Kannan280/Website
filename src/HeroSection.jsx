export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Kannan D</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            I'm a dynamic web developer from Chennai, fueled by creativity and dedicated to crafting seamless digital experiences.
              <br /> Innovate. Build. Deliver.
            </p>
            <button className="btn btn-primary">Get In Touch</button>
          </div>
          
        </div>
        <div className="hero--section--img">
          <img src="../src/assets/greenfirst.jpg" alt="Hero Section" />
        </div>
      </section>
    );
  }
  