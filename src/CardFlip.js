import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Button from '@mui/material/Button';


const CardFlip = ({wort, reihe, minus, plus, woerter}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
          <h1>Deutsch Card</h1>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onClick={handleClick}
          style={{
            height: "300px",
            width: "300px",
            backgroundColor: "#f5b041",
            color: "#212F3D",
            display: "flex", flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
          }}
        >
          <h1>{wort.deu}</h1>
          <h3>{wort.exp}</h3>
        </div>

        <div
          onClick={handleClick}
          style={{
            height: "300px",
            width: "300px",
            backgroundColor: "#212F3D",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
          }}
        >
         <h1>{wort.eng}</h1> 
        </div>
      </ReactCardFlip>
      <div style={{display:"flex", justifyContent:"space-around",marginTop:"20px"}}>
      <Button disabled={reihe === 1}  onClick={minus} variant="contained">Previous</Button>
      <Button disabled={reihe === woerter.length} onClick={plus}  variant="contained">Next</Button>
      </div>
    </div>
  );
};

export default CardFlip;
