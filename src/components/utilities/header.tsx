import "../../css/header.css";

function Header() {
  return (
    <div className="hero__header">
      <picture className="logo-div">
        <img src="./images/logo.png" />
      </picture>
      <span className="btn btn--primary hero__span">NEW</span>
    </div>
  );
}

export default Header;
