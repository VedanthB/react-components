import "./styles.css";

// props
/*
card : {
  label, 
 primaryText, 
 secondaryText, 
 description, 
 buttonText,
 }, 
onButtonClick
*/

export const SimpleCard = () => {
  return (
    <div className="container">
      <div className="cardContainer">
        <div className="cardContent">
          <p className="cardLabel">Word of the Day</p>
          <h5 className="cardTextPrimary">be.nev.o.lent</h5>
          <div className="cardTextSecondary">adjective</div>
          <div className="cardBody">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </div>
        </div>

        <div className="cardActions">
          <button className="cardActionButton"> LEARN MORE </button>
        </div>
      </div>
    </div>
  );
};
