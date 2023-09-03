import { useNavigate } from "react-router-dom";
import "../../css/callout.css";

function Callout() {
  let navigate = useNavigate();
  return (
    <section className="block">
      <div className="callout" data-aos="zoom-in">
        <div className="callout__content">
          <h2 className="callout__title">willing to support our mission?</h2>
          <div className="callout__text">
            Participate in this life-changing journey for many Lebanese youth,
            in order to build, together, a brighter, more prosperous future.
          </div>
        </div>
        <div className="callout__btn">
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
            className="btn btn--block btn--primary"
          >
            contact us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Callout;
