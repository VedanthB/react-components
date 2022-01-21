import "./styles.css";

/* 
props:
 label --> string
 onChipClick --> func
*/

export const ClickableChip = () => {
  return (
    <div className="container">
      <div className="chipContainer filled clickable">Chip Filled</div>
      <div className="chipContainer outline clickable">Chip Outline</div>
    </div>
  );
};
