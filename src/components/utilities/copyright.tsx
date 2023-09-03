import "../../css/copyright.css";

function Copyright() {
  return (
    <aside className="copyright-block">
      <div className="copyright__content">
        <h4 className="copyright__title">&copy; 2023</h4>
        <p className="copyright__text">All rights reserved.</p>
      </div>
      <picture className="logo-container">
        <img src="./images/logo.png" alt="" />
      </picture>
    </aside>
  );
}

export default Copyright;
