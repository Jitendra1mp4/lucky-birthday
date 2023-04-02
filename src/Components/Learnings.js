// first importing useState
import { useState } from "react";

function Learnings(props) {
  const [user, setUser] = useState("");

  function inputChangeHandler(event) {
    console.log(event.target.value);
    setUser(event.target.value);
  }
  return (
    <div className="div-learning" style={{maxWidth : "600px", margin: "auto" , padding : "2rem"}}>
      <input type="text" onChange={inputChangeHandler} style={{padding : "1rem", fontSize : "1rem"}} />
      <div className="output" style={{ padding : "1rem", fontSize : "1rem"}} >Hello {user}</div>
    </div>
  );
}

export default Learnings;
