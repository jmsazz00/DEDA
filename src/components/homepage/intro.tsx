import "../../css/intro.css";
import { PiArrowFatLinesRightFill } from "react-icons/pi";

function Intro() {
  const style = { color: "#3a86e4", fontSize: "1em" };

  return (
    <section className="block block--skewed-right intro-block">
      <div className="intro container">
        <div className="intro__header">
          <h1 className="link__heading" data-aos="zoom-in">
            Welcome to <span className="intro__title">DEDA</span>
          </h1>
        </div>
        <div className="intro__body">
          <p className="intro__paragraph" data-aos="fade-right">
            <PiArrowFatLinesRightFill style={style} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            voluptate, labore voluptas quaerat voluptatum repudiandae
            accusantium. Obcaecati quae voluptate vero.
          </p>

          <p className="intro__paragraph" data-aos="fade-left">
            <PiArrowFatLinesRightFill style={style} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo
            iste eius voluptas expedita.
          </p>
          <p className="intro__paragraph" data-aos="fade-right">
            <PiArrowFatLinesRightFill style={style} />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur, earum! Expedita, facere aperiam! Facilis et incidunt
            modi repudiandae nam expedita fugit cum nostrum magni cumque.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
