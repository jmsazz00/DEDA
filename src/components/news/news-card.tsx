import "../../css/news-card.css";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  title: string;
  date: string;
  id: number;
  disabled: boolean;
}

const NewsCard = ({ image, title, date, id, disabled }: Props) => {
  return (
    <article className="card-container">
      <div className={"news-card" + (disabled ? " news-card--expanded" : "")}>
        <div className="image-container">
          <img src={"/images/" + image} alt="News Image" />
          {!disabled && (
            <div className="overlay">
              <Link to={`${id}`} className="learn-more">
                Learn More
              </Link>
            </div>
          )}
        </div>
        <div className="news-content">
          <h3 className="news__title">{title}</h3>
          <p className="news__date">{date}</p>
          {!disabled && (
            <Link to={`${id}`} className="learn-more learn-more-mobiles">
              Learn More
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
