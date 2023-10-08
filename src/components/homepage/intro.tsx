import "../../css/intro.css";
import { PiArrowFatLinesRightFill } from "react-icons/pi";
import Accordion from "./accordion";

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
          <p
            className="intro__paragraph intro--quote"
            data-aos="fade-right"
            style={{ fontStyle: "italic" }}
          >
            The Development and Environmental Development Association{" "}
            <b><u>(DEDA) </u></b>
            aims at empowering youth, workers to acquire skills and competencies
            that let them to increase their employability and build their
            future. The Association enhances its cooperation with the
            industrialists and employers to determine their needs in skilled
            manpower so that the training courses it delivers respond to the
            requirements of the employers, the matter that results mostly in
            employing the trained people.
          </p>

          <div className="intro__paragraph">
            <PiArrowFatLinesRightFill style={style} />
            <Accordion
              title="Financial Resources"
              content={
                <>
                  Financial resources of the association may come from:
                  <ul>
                    <li>
                      Donations from individuals who desire to support the
                      Lebanese youth and provide them with needed skills to
                      secure their future.
                    </li>
                    <li>
                      Donations and contributions local and international
                      organizations.
                    </li>
                    <li>
                      Self -financing from educational, scientific and practical
                      services provided by the association.
                    </li>
                    <li>
                      In kind contributions from individuals, civil society,
                      employers, unions and others.{" "}
                    </li>
                  </ul>
                </>
              }
            />
          </div>

          <div className="intro__paragraph">
            <PiArrowFatLinesRightFill style={style} />
            <Accordion
              title="Importance of organizing trainings"
              content={
                <>
                  <p>
                    Even before the 2019 economic collapse, technical education
                    curricula was not compatible with the needs of the market
                    and the graduates did not have the skills required. As a
                    result, many employers resorted to hiring foreign labor,
                    others incurred the cost of training fresh graduates in
                    their institutions to provide them with the skills required,
                    which incurs a high cost and waste of time.
                  </p>
                  <p>
                    After 2019, vocational and technical education was
                    disrupted, online learning was adopted and due to the health
                    crisis, the cost of transportation, electricity cuts and
                    other issues needed to provide minimum quality educational
                    services.
                  </p>
                  <p>
                    From this point of view, the Association was established to
                    be a link between groups of employers and TVET graduates, on
                    the basis that the Association organizes special training
                    courses to the youth. This arrangement assists the employers
                    to replace the foreign labor force with a competent Lebanese
                    workforce capable of carrying out the required duties within
                    very short time.
                  </p>
                </>
              }
            />
          </div>

          <div className="intro__paragraph">
            <PiArrowFatLinesRightFill style={style} />
            <Accordion
              title="Strategy of organizing trainings"
              content={
                <>
                  <p>
                    As a result of the economic crises and the unprecedented
                    deteriorating situation of the country, and as a result of
                    adopting the principle of online learning without prior
                    preparation, cohorts of graduates from vocational and
                    technical education became holding diplomas without
                    acquiring the skills required to carry out their duties or
                    to practice their professions.
                  </p>
                  <p>
                    To address this situation, the Association works hand in
                    hand with employers, to organize special training courses
                    for graduates to provide them with the practical attitudes
                    that industrialists and employers specifically require to
                    operate their factories.
                  </p>
                  <p>
                    The Association sets the training curriculum in agreement
                    with a group of coherent industrialists, and the trainees
                    are selected in advance in agreement with the interested
                    employers to guarantee the employment of many of the
                    trainees who follow the training course.
                  </p>
                  <p>
                    {" "}
                    Noting that <b>Mr. Rafi Manoukian</b> is the primary
                    financier of the Association for his confidence in the
                    Association and his conviction of the need to empower
                    Lebanese youth, at this difficult time that the state’s
                    educational institutions are going through
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
