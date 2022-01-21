import "./styles.css";

export const MusicUIControlCard = () => {
  return (
    <div className="container">
      <div className="cardContainer">
        <div className="cardContent">
          <div className="cardContentHeader">
            <div className="headerTextPrimary"> Live Rrom Space </div>
            <div className="headerTextSecondaary"> Mac Miller </div>
          </div>

          <div className="cardFooter">
            <button className="leftIconButton">{"<"}</button>
            <button className="playIconButton"> {"|>"} </button>
            <button className="rightIconButton"> {">"} </button>
          </div>
        </div>

        <div className="cardMedia"></div>
      </div>
    </div>
  );
};
