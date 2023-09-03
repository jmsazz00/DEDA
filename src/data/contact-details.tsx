import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const style = { color: "#5b86e5", fontSize: "4.5em" };

const boxes = [
  {
    icon: <FiPhone style={style} />,
    title: "phone number",
    desc: " +961 01 883 939 - 01 901 271",
  },
  {
    icon: <FiMail style={style} />,
    title: "email",
    desc: "n.naccache1@gmail.com (Nabil Naccache)",
  },
  {
    icon: <FiMapPin style={style} />,
    title: "address",
    desc: "Beirut, Bauchrieh, Soft solutions’ building, 3rd floor",
  },
];

export default boxes;
