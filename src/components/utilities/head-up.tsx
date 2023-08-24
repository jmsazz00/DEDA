import { useEffect } from "react";
import "../../css/head-up.css";

function HeadUp() {
  let lastKnownScrollPosition = 0,
    lastScrollTop = 0;

  useEffect(() => {
    let ticking = false;

    function doSmthg(showIcon: boolean) {
      let div = document.getElementById("head-up") as HTMLElement;
      if (showIcon) div.style.opacity = "1";
      else div.style.opacity = "0";
    }

    document.addEventListener(
      "scroll",
      () => {
        lastKnownScrollPosition = window.scrollY;
        let st = document.documentElement.scrollTop;
        let showIcon: boolean = false;

        if (!ticking) {
          showIcon =
            lastKnownScrollPosition > window.innerHeight && st < lastScrollTop;
          // Asserting that the user has reached beyond the first visible screen
          // and he is scrolling up

          window.requestAnimationFrame(() => {
            return setTimeout(() => {
              doSmthg(showIcon);
              ticking = false;
            }, 100);
          });

          ticking = true;
        }
        lastScrollTop = st <= 0 ? 0 : showIcon ? st + 0.01 : st;
        // for some reason the event fires 2 times, so to make it true 2 times
        // i set the lastScroll slightly higher than st because it will equal it
      },
      true
    );
  }, []);

  return (
    <div
      id="head-up"
      className="icon-container"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <span>V</span>
    </div>
  );
}

export default HeadUp;
