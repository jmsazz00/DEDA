import "../../css/404-error.css";
import { Link } from "react-router-dom";

function PageError() {
  return (
    <section className="block page-error-block">
      <div className="container">
        <div className="error-container">
          <h1 className="error-title">404</h1>
          <p className="error-description">
            Oops! The page you're looking for doesn't exist..
          </p>
          <div className="animation-container">
            <div className="animated-ball"></div>
          </div>
          <Link to="/" className="home-link">
            Go back to the homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageError;
