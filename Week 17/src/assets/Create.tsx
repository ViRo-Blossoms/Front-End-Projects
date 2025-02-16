import { useState } from "react";
import CreateSpiel from "./CreateSpiel";

export default function Create() {
  const [formString, setFormString] = useState("");
  const [tastesGood, setTastesGood] = useState("");

  const newICD = async () => {
    const NICD = {
      iceCream: formString,
      tastesGood: tastesGood,
    };
    const response = await fetch(PUTAPIKEYHERE, {
      method: "POST",
      body: JSON.stringify(NICD),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    setFormString("");
    setTastesGood("");
  };

  return (
    <div className="mx-auto p-2">
      <CreateSpiel />
      <div>
        <label htmlFor="inputString">Flavor of Ice Cream</label>
        <input
          type="text"
          onChange={(event) => setFormString(event.target.value)}
          value={formString}
          id="inputString"
          className="form-control"
        />
      </div>
      <label htmlFor="YKN">Does it taste good?</label>
      <div id="YKN">
        <div className="form-check">
          <label htmlFor="tastesGoodYes">Yes</label>
          <input
            className="form-check-input"
            type="radio"
            id="tastesGoodYes"
            value={"Yes"}
            onChange={(event) => setTastesGood(event.target.value)}
            checked={tastesGood === "Yes"}
          />
        </div>
        <div className="form-check">
          <label htmlFor="tastesGoodKinda">Kinda</label>
          <input
            className="form-check-input"
            type="radio"
            id="tastesGoodKinda"
            value={"Kinda"}
            onChange={(event) => setTastesGood(event.target.value)}
            checked={tastesGood === "Kinda"}
          />
        </div>
        <div className="form-check">
          <label htmlFor="tastesGoodNo">No</label>
          <input
            className="form-check-input"
            type="radio"
            id="tastesGoodNo"
            value={"No"}
            onChange={(event) => setTastesGood(event.target.value)}
            checked={tastesGood === "No"}
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success rounded-pill"
          onClick={newICD}
        >
          POST
        </button>
      </div>
    </div>
  );
}
