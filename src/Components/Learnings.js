// first importing useState

const birthday = document.querySelector("#input-birthday");
const luckyNumber = document.querySelector("#input-lucky-number");
function Learnings(props) {
  return (
    <div className="div-learning">
      <header>
        <h1>Is your Birthday Lucky?</h1>
      </header>

      <section>
        <div className="form-part">
          <label htmlFor="input-birthday">Enter your birthday</label>
          <input type="date" name="input-birthday" id="input-birthday" />
        </div>

        <div className="form-part">
          <label htmlFor="input-lucky-number">Enter your lucky number</label>
          <input
            type="date"
            name="input-lucky-number"
            id="input-lucky-number"
          />
        </div>

        <div className="form-part">
          <button id="btn-checkLucky">Check Number</button>
        </div>
      </section>
    </div>
  );
}

export default Learnings;
