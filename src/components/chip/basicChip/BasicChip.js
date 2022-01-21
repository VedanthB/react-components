import "./styles.css";

/* 
props: 
 chip label
*/

export const BasicChip = () => {
  return (
    <div className="container">
      <div className="chipContainer filled">Chip Filled</div>
      <div className="chipContainer outline">Chip Outline</div>
    </div>
  );
};
