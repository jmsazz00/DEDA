import { useState } from "react";
import "../../css/training-card.css";
import { useNavigate } from "react-router-dom";

interface Props {
  imageSrc: string;
  title: string;
  maxTrainees: number;
  collaboratingCompanies: string[];
  description: string | JSX.Element;
  duration: string;
  warning?: string;
}

const TrainingCard = ({
  imageSrc,
  title,
  maxTrainees,
  collaboratingCompanies,
  description,
  duration,
  warning,
}: Props) => {
  const [showDescription, setShowDescription] = useState(false);

  let navigate = useNavigate();

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={`training-card ${showDescription ? "open" : ""}`}>
      <div className="upcoming-content-arrow">{warning}</div>
      <div className="training-image">
        <img src={imageSrc} alt="Training" />
      </div>
      <div className="training-info">
        <h3 className="training-title">{title}</h3>
        <div className="trainees-companies-container">
          <p className="max-trainees">
            <span className="underline">Max Trainees:</span> {maxTrainees}
          </p>
          <p className="collaborating-companies">
            <span className="underline">Collaborating Companies:</span>
            <br />
            {collaboratingCompanies.join(", ")}
          </p>
          <p className="training-duration">
            <span className="underline">Duration:</span> {duration}
          </p>
        </div>
        <button className="btn donate-button" onClick={toggleDescription}>
          {showDescription ? "Hide" : "Learn More"}
        </button>

        <div className="training-description">{description}</div>
      </div>
    </div>
  );
};

export default TrainingCard;
