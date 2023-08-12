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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            fugiat cupiditate quis sint consequuntur autem nesciunt beatae
            officia? Commodi, aperiam.
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
            donate now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Callout;
