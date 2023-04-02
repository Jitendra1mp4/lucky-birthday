// first importing useState
import { useState } from "react";

function Learnings(props) {
  // using useState function tha returns an array
  //  [variable , functionToManipulateValueOFVariableReturned] = useState(INITIAL-value)
  const [like, setLike] = useState(0);

  //function called by button
  function likeClickHandler() {
    // using function returned by the useState()
    setLike(like + 1);
  }
  return (
    <>
      <h1>Example of useState</h1>
      <button onClick={likeClickHandler}>Like</button> <code>{like}</code>
    </>
  );
}

export default Learnings;
