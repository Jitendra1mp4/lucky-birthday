// first importing useState
import { useState } from "react";

function Learnings(props) {
  const [birthdayValue, setBirthdayValue] = useState("");
  const [luckyNumber, setLuckyNumber] = useState(1);
  const [result, setResult] = useState("");

  const inputBirthday = document.querySelector("#input-birthday");
  const inputLuckyNumber = document.querySelector("#input-lucky-number");

  function getSum(birthday) {
    let sum = 0;
    for (let i = 0; i < birthday.length; i++) {
      sum += Number(birthday.charAt(i));
    }
    return sum;
  }

  function checkNumberClickHandler() {
    const birthday = inputBirthday.value
      .replaceAll("-", "")
      .replaceAll("0", "");
    const luckyNumber = inputLuckyNumber.value;

    const sum = getSum(birthday);
    if (sum % luckyNumber === 0) setResult("you are lucky");
    else setResult("you are not that lucky");
  }

  function birthdayChangeHandler(Event) {
    setBirthdayValue(Event.target.value);
  }

  function luckyNumberChangeHandler(Event) {
    setLuckyNumber(Event.target.value);
  }

  return (
    <div className="div-learning">
      <header>
        <h1>Is your Birthday Lucky?</h1>
      </header>

      <section>
        <div className="form-part">
          <label htmlFor="input-birthday">Enter your birthday</label>
          <input
            type="date"
            name="input-birthday"
            id="input-birthday"
            onInput={birthdayChangeHandler}
          />
        </div>
        <div className="form-part">
          <label htmlFor="input-lucky-number">Enter your lucky number</label>
          <input
            type="number"
            name="input-lucky-number"
            id="input-lucky-number"
            value={luckyNumber}
            onInput={luckyNumberChangeHandler}
          />
        </div>

        <div className="form-part">
          <button id="btn-checkLucky" onClick={checkNumberClickHandler}>
            Check Number
          </button>
        </div>
        <div className="output">{result}</div>
      </section>
    </div>
  );
}

export default Learnings;
