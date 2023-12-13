import { useState } from "react";
import "../../css/accordion.css";

interface Props {
  title: string;
  content: JSX.Element;
}

const Accordion = ({ title, content }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`accordion ${expanded ? "expanded" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2 className={`accordion-title ${expanded ? "collapsed" : ""}`}>
          {title}
        </h2>
        <span className={`accordion-icon`}>{expanded ? "-" : "+"}</span>
      </div>
      <div className="accordion-content text-justify">{content}</div>
    </div>
  );
};

export default Accordion;
