import { FaHome, FaNewspaper, FaInfoCircle } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const links = [
  {
    title: "Home",
    link: "home",
    icon: <FaHome />,
  },
  {
    title: "News",
    link: "news",
    icon: <FaNewspaper />,
  },
  {
    title: "About",
    link: "about",
    icon: <FaInfoCircle />,
  },
  {
    title: "Contact",
    link: "contact",
    icon: <MdMail />,
  },
];

export default links;
