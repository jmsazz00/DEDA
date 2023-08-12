import { useState } from "react";
import NewsCard from "./news-card";
import Pagination from "./pagination";
import news from "../../data/news";
import "../../css/news.css";

interface News {
  id: number;
  image: string;
  title: string;
  date: string;
  content: JSX.Element;
}

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [allNews, setNews] = useState<News[]>(news);

  let handlePage = (p: number) => {
    setCurrentPage(p);
  };

  let articlesToShow = allNews.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <section className="block" id="news-block">
      <div className="container">
        <div className="news__header">
          <h2 className="link__heading" data-aos="flip-up">
            What's New
          </h2>
        </div>
        <div className="news__body grid grid--2x grid--3x">
          {articlesToShow.map((art) => (
            <NewsCard
              disabled={false}
              id={art.id}
              image={art.image}
              title={art.title}
              date={art.date}
            />
          ))}
        </div>
        <div>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePage}
            totalPages={Math.ceil(allNews.length / pageSize)}
          />
        </div>
      </div>
    </section>
  );
};

export default News;
