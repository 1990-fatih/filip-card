import React, { useState } from "react";
import Cardinput from "./Cardinput";
import CardFlip from "./CardFlip";
import { TextField, Button } from "@mui/material";

export default function List() {

  const [woerter, setWoerter] = useState([
    { id: 1, deu: "Buch", eng: "book", exp: "ich lesse buch" },
    { id: 2, deu: "Fliegen", eng: "fly", exp: "ich flige " },
    { id: 3, deu: "Laufen", eng: "Running", exp: "ich laufe " },
  ]);

  const [prozes, setProzes] = useState(false);
  const woerterBuch = () => {
    setProzes(true);
  };
  const woerterFügt = () => {
    setProzes(false);
  };

  const [reihe, setreihe] = useState(1);
  const plus = () => {
    setreihe((prevState) => prevState + 1);
  };
  const minus = () => {
    setreihe((prevState) => prevState - 1);
  };
  return (
    <div>
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
        }}
      >
        <Button
          onClick={woerterBuch}
          style={{ marginTop: "15px" }}
          variant="contained"
        >
          Wörter Card
        </Button>
        <Button
          onClick={woerterFügt}
          style={{ marginTop: "15px" }}
          variant="contained"
        >
          Wörter Hinzufügt
        </Button>
      </div>
      {prozes ? (
        woerter.map((wort) => {
          if (wort.id === reihe ) {
            return (
              
              <CardFlip
                key={wort.id}
                wort={wort}
                plus={plus}
                minus={minus}
                reihe={reihe}
                woerter={woerter}
              />
            );
          }
        })
      ) : (
        <Cardinput woerter={woerter} setWoerter={setWoerter}/>
      )}
    </div>
  );
}
