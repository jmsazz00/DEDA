import { useState } from "react";
import "../../css/training-card.css";
import { useNavigate } from "react-router-dom";

interface Props {
  imageSrc: string;
  title: string;
  maxTrainees: number;
  collaboratingCompanies: string[];
  description: string;
}

const TrainingCard = ({
  imageSrc,
  title,
  maxTrainees,
  collaboratingCompanies,
  description,
}: Props) => {
  const [showDescription, setShowDescription] = useState(false);

  let navigate = useNavigate();

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={`training-card ${showDescription ? "open" : ""}`}>
      <div className="training-image">
        <img src={imageSrc} alt="Training" />
      </div>
      <div className="training-info">
        <h3 className="training-title">{title}</h3>
        <div className="trainees-companies-container">
          <p className="max-trainees">Max Trainees: {maxTrainees}</p>
          <p className="collaborating-companies">
            Collaborating Companies: {collaboratingCompanies.join(", ")}
          </p>
        </div>
        <button className="description-toggle" onClick={toggleDescription}>
          {showDescription ? "Hide Description" : "Show Description"}
        </button>

        <div className="training-description">{description}</div>
        <button
          onClick={() => {
            navigate("/contact");
            window.scrollTo(0, 0);
          }}
          className="btn btn--block donate-button"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default TrainingCard;
