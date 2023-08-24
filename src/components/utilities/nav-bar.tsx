import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/navbar.css";
import links from "../../data/links";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const { pathname } = useLocation();

  const isLinkActive = (pathSegment: string) => {
    return (
      pathname === `/${pathSegment}` ||
      (pathname === "/" && pathSegment === "home")
    );
  };

  useEffect(() => {
    let timer: number;

    const showNavbar = () => {
      setVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setVisible(false), 2000); // disappears after 2s
    };

    window.addEventListener("scroll", showNavbar);

    return () => {
      window.removeEventListener("scroll", showNavbar);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav className={`navbar ${visible ? "show" : "hide"}`}>
      <ul>
        {links.map((l) => (
          <li
            key={l.title}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Link
              className={isLinkActive(l.link) ? "active-link" : ""}
              to={l.link}
            >
              {l.icon}
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
