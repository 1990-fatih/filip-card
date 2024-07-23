import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function Cardinput({woerter, setWoerter}) {

    const [input, setinput] = useState({id:null,deu:"",eng:"",exp:""})

    const changeDeu=(e)=>{
        setinput({...input, deu:e.target.value})
    }
    const changeEng=(e)=>{
        setinput({...input, eng:e.target.value})
    }
    const changeExp=(e)=>{
        
        setinput({...input, id:woerter.length+1,exp:e.target.value})
    }
    const hinzufügtHandler = (e) => {
      setWoerter([
        ...woerter, input
      ])
    }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TextField value={input.deu} onChange={changeDeu}
        style={{ width: "500px", marginTop: "10px" }}
        id="outlined-basic"
        label="Deutsch"
        variant="outlined"
      />
      <TextField value={input.eng} onChange={changeEng}
        style={{ width: "500px", marginTop: "10px" }}
        id="outlined-basic"
        label="Englisch"
        variant="outlined"
      />
      <TextField value={input.exp} onChange={changeExp}
        style={{ width: "500px", marginTop: "10px" }}
        id="outlined-basic"
        label="Example"
        variant="outlined"
      />
      <Button onClick={(e)=>hinzufügtHandler(e)} style={{marginTop:"15px"}}variant="contained">Hinzufügt</Button>
    </div>
  );
}
