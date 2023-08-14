import { FaQuoteRight } from "react-icons/fa";
import "../../css/testimonial.css";

interface Props {
  president: {
    image: string;
    name: string;
    speech: string;
    profession: string;
  };
}

const TestimonialCard = ({ president }: Props) => {
  const style = { color: "white", fontSize: "1.6em" };

  return (
    <section className="block testimonial-block">
      <div className="testemonial-card container" data-aos="zoom-out">
        <div className="testemonial__image">
          <img src={president.image} alt="A smiling client" />
          <span className="icon-container icon-container--accent">
            <FaQuoteRight style={style} />
          </span>
        </div>
        <div className="testemonial__content">
          <p className="testemonial__speech">{president.speech}</p>
          <div className="testemonial__sign">
            <img className="icon" src="./images/line.svg" alt="" />
            <div className="testemonial__author">
              <p className="author__name">{president.name}</p>
              <p className="author__company">{president.profession}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
