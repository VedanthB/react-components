import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

/* 
props: 

label,
onClick
*/

export const DeletableChip = () => {
  return (
    <div className="container">
      <div className="chipContainer filled ">
        Chip Filled
        <FontAwesomeIcon className="deleteIcon" icon={faTimesCircle} />
      </div>
      <div className="chipContainer outline ">
        Chip Outline
        <FontAwesomeIcon className="deleteIcon" icon={faTimesCircle} />
      </div>
    </div>
  );
};
