import "./styles.css";

export const AvatarChip = () => {
  return (
    <div className="container">
      <div className="chipContainer clickable filled ">
        <div className="avatar">A</div>
        Chip Filled
      </div>
      <div className="chipContainer clickable outline ">
        <div className="avatar">V</div>
        Chip Outline
      </div>
    </div>
  );
};
