export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./violetpic.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            I’m a passionate web developer from Chennai, specializing in
            crafting user-friendly and dynamic websites. With a strong
            foundation in both frontend and backend technologies, I bring ideas
            to life through clean and efficient code. Creativity and innovation
            are at the core of my work, ensuring every project stands out.
          </p>
          
          <p className="hero--section-description">
            I’m dedicated to continuous learning and staying updated with the
            latest trends in web development. Let’s collaborate to build
            impactful digital solutions that make a difference.
          </p>
          <a href="./src/assets/KannanDresume.pdf" download>
          <button className="btn btn-primary contact--form--btn">Download CV</button>
          </a>
        </div>
      </div>
    </section>
  );
}
