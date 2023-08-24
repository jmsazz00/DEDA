import { useParams, useNavigate } from "react-router-dom";
import news from "../../data/news";
import PageError from "../utilities/404-error";
import NewsCard from "./news-card";
import "../../css/news-block.css";
import useScrollToTop from "../../hooks/useScrollToTop";

function NewsBlock() {
  const params = useParams();
  const ID = params.id as string;
  const navigate = useNavigate();

  useScrollToTop();

  const newsBlock = news.find((n) => n.id === parseInt(ID));

  const handleGoBack = () => {
    navigate("/news");
  };

  if (!newsBlock) return <PageError />;

  const { id, title, date, content, image } = newsBlock;

  return (
    <section className="news-item">
      <NewsCard
        disabled={true}
        id={id}
        title={title}
        date={date}
        image={image}
      />
      <div className="news-item__content">
        {content}{" "}
        <button className="news__btn" onClick={handleGoBack}>
          All News
        </button>
      </div>
    </section>
  );
}

export default NewsBlock;
