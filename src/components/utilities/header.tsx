import { useEffect, useState } from "react";
import "../../css/header.css";

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    var lastScrollTop = 0;
    var reset = true;
    const handleScroll = () => {
      var st = window.scrollY || document.documentElement.scrollTop; 
      if (reset && st < lastScrollTop) {
        setIsFixed(true);
        reset = false;
        setTimeout(() => {
          setIsFixed(false);
          reset = true;
        }, 4000);
      } else if (st > lastScrollTop) {
        setIsFixed(false);
      } 
      lastScrollTop = st <= 0 ? 0 : st
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  
  return (
    <section className={"header-block"+ (isFixed ? " fixed" :" goUp")}>
      <div className="hero__header container">
        <picture className="logo-div">
          <img src="./images/logo.png" />
        </picture>
        <span className="btn btn--primary hero__span">v 1.0</span>
      </div>
    </section>
  );
}

export default Header;
