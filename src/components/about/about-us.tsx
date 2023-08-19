import { useState } from "react";
import "../../css/about.css";
import { useCapitalizer } from "../../hooks/useCapitalizer";
import { FaIdCard, FaBullseye } from "react-icons/fa";
import pics from "../../data/pics.json";

const About = () => {
  let [index, setIndex] = useState(0);

  const [h1, h2, h3] = ["Who we are", "Our Activities", "Our Services"];
  const msg1 = useCapitalizer(h1);
  const msg2 = useCapitalizer(h2);
  const msg3 = useCapitalizer(h3);

  const style = {
    color: "#0079c1",
    fontSize: "2em",
    backgroundColor: "#bdf",
    padding: ".5rem",
    borderRadius: "6px",
  };

  let decrementIndex = () => {
    if (index === 0) setIndex(pics.length - 1);
    else setIndex(index - 1);
  };

  let incrementIndex = () => {
    if (index === pics.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <section className="about-us-block">
      <div className="about-us-container">
        <h1 className="about__title" data-aos="zoom-out">
          Welcome to Our NGO!
        </h1>

        <div className="about-block">
          <header className="block__header about__header">
            <h1 className="block__heading about__heading" data-aos="fade-down">
              <span className="number-badge number-badge--primary">1</span>
              <p>{msg1}</p>
            </h1>
          </header>
          <div className="about__body">
            <p className="about__text" data-aos="fade-left">
              We are a non-governmental organization (NGO) dedicated to
              empowering Lebanese youth by providing free training sessions. Our
              goal is to equip them with the skills needed to respond to the
              needs of industrialists and employers, ultimately helping them
              find suitable jobs.
            </p>
            <div className="about__icon">
              <span>
                <FaIdCard style={style} />
              </span>
            </div>
          </div>
        </div>

        <div className="about__images">
          <span className="scroller clickable" onClick={decrementIndex}>
            &lt;
          </span>
          <div className="about__list">
            {pics.map((aw, ind) => {
              let cls = "next";
              if (ind === index) cls = "active";
              else if (
                ind === index - 1 ||
                (index === 0 && ind === pics.length - 1)
              )
                cls = "prev";

              return (
                <picture className={"about__img " + cls}>
                  {aw.sources && (
                    <source type="./jpg" srcSet={`${aw.jpg} 1x`} />
                  )}
                  <img src={aw.src} alt="" />
                </picture>
              );
            })}
          </div>
          <span className="scroller clickable" onClick={incrementIndex}>
            &gt;
          </span>
        </div>

        <div className="about-block">
          <header className="block__header about__header">
            <h1 className="block__heading about__heading" data-aos="fade-down">
              <span className="number-badge number-badge--primary">2</span>
              <p>{msg2}</p>
            </h1>
          </header>
          <div className="about__body">
            <p className="about__text" data-aos="fade-left">
              In addition to carrying out the necessary studies and statistics
              to determine the employers' needs for efficient manpower, we aim
              at providing trainees with the practical, linguistic, digital,
              safety and life skills required by employers. By organizing and
              implementing various social, health, sports and folk activities,
              we assist the society to ensure its proper living in a clean,
              healthy and safe environment free from all forms of pollution.
            </p>
            <div className="about__icon">
              <span>
                <FaBullseye style={style} />
              </span>
            </div>
          </div>
        </div>

        <div className="about-block">
          <header className="block__header about__header">
            <h1 className="block__heading about__heading" data-aos="fade-down">
              <span className="number-badge number-badge--primary">3</span>
              <p>{msg3}</p>
            </h1>
          </header>
          <div className="about__body">
            <ul className="goals-list">
              <li data-aos="fade-left">
                <span className="checkmark">✓</span>
                <b>Free</b> trainings for Lebanese youth, in order to be able to
                secure their future.
              </li>
              <li data-aos="fade-right">
                <span className="checkmark">✓</span>
                Full <b>cooperation</b> with employers to determine their needs
                and develop the training courses’ curricula accordingly.
              </li>
              <li data-aos="fade-left">
                <span className="checkmark">✓</span>
                <b>Compentent</b> trainers who are known for their knowledge and
                practical experience.
              </li>
              <li data-aos="fade-right">
                <span className="checkmark">✓</span>
                <b>Life</b> skills, work organization, personal and public
                safety, providing first aids in addition to the purely technical
                topics.
              </li>
              <li data-aos="fade-left">
                <span className="checkmark">✓</span>
                <b>Transportation</b> allowance for each training day
                implemented in the Association’s premises.
              </li>
              <li data-aos="fade-right">
                <span className="checkmark">✓</span>
                <b>Certifcate</b> with a mention with what the course included
                to each trainee who finishes the training.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
