import "../../css/header.css";

function Header() {
  return (
    <section className="header-block">
      <div className="hero__header container">
        <picture className="logo-div">
          <img src="./images/logo.png" />
        </picture>
        <span className="btn btn--primary hero__span">NEW</span>
      </div>
    </section>
  );
}

export default Header;
