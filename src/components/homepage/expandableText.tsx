import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 50 }: Props) {
  let [show, setShow] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  let textToShow: string = children.substring(0, maxChars) + "...";

  return (
    <div style={{ display: "inline" }}>
      {show ? children : textToShow}
      <button onClick={() => setShow(!show)}>{show ? "Less" : "More"}</button>
    </div>
  );
}

export default ExpandableText;
