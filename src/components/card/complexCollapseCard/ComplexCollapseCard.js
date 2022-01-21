import { useState } from "react";
import "./styles.css";

export const ComplexCollapseCard = () => {
  const [collapseDisplay, setCollapseDisplay] = useState("none");

  const handleCollapseEvent = () => {
    if (collapseDisplay === "none") setCollapseDisplay("block");
    if (collapseDisplay === "block") setCollapseDisplay("none");
  };

  return (
    <div className="container">
      <div className="cardContainer">
        <div className="cardHeader">
          <div className="cardHeaderAvatar">
            <div className="avatar">A</div>
          </div>
          <div className="cardHeaderTitle">
            <span className="titlePrimary">Primary Title</span>
            <span className="titleSecondary">Secondary Title</span>
          </div>
          <div className="avatcardHeaderAction">
            {/* use a font awesome icon here  */}:
          </div>
        </div>

        <div className="cardMedia"></div>

        <div className="cardContent">
          This is some description This is some description This is some
          description This is some description This is some description This is
          some ......
        </div>

        <div className="cardActions">
          <div className="cardActionsIconPrimary">h</div>
          <div className="cardActionsIconSecondary">s</div>
          <button
            onClick={handleCollapseEvent}
            className="cardActionVertCollapse"
          >
            c
          </button>
        </div>

        <div className="cardCollapse" style={{ display: `${collapseDisplay}` }}>
          some more content some more contentsome more contentsome more
          contentsome more content some more content some more contentsome more
          contentsome more contentsome more content some more content some more
          contentsome more contentsome more contentsome more content some more
          content some more contentsome more contentsome more contentsome more
          content some more content some more contentsome more contentsome more
          contentsome more content some more content some more contentsome more
          contentsome more contentsome more content some more content some more
          contentsome more contentsome more contentsome more content some more
          content some more contentsome more contentsome more contentsome more
          content some more content some more contentsome more contentsome more
          contentsome more content some more content some more contentsome more
          contentsome more contentsome more content some more content some more
          contentsome more contentsome more contentsome more content .........
        </div>
      </div>
    </div>
  );
};
