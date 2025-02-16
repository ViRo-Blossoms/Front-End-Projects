import { useEffect, useState } from "react";
import UpdateList from "./UpdateList";
import UpdateSpiel from "./UpdateSpiel";

export default function Update() {
  const [ICDList, setICDList] = useState([]);
  const [ICDToEdit, setICDToEdit] = useState(-1);
  const [Editing, setEditing] = useState(false);
  const [formString, setFormString] = useState("");
  const [tastesGood, setTastesGood] = useState("");

  const UpdateICD = async (IdToEdit: number) => {
    setICDToEdit(IdToEdit);
    setEditing(true);
  };

  const PutICD = async (ICDToEdit: number) => {
    const UICD = {
      iceCream: formString,
      tastesGood: tastesGood,
    };
    const response = await fetch(
      "https://67af9277dffcd88a67870ebb.mockapi.io/iceCreamData/" + ICDToEdit,
      {
        method: "PUT",
        body: JSON.stringify(UICD),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    setEditing(false);
    setFormString("");
    setTastesGood("");
  };

  useEffect(() => {
    const asyncFunc = async () => {
      const response = await fetch(PUTAPIKEYHERE);
      const data = await response.json();
      setICDList(data);
    };
    asyncFunc();
  }, [Editing]);

  return (
    <div className="mx-auto p-2">
      <UpdateSpiel />
      {Editing ? (
        <div>
          <h3>Create</h3>
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
              onClick={() => PutICD(ICDToEdit)}
            >
              PUT
            </button>
          </div>
        </div>
      ) : null}
      <div className="row">
        {ICDList.map((d) => (
          <UpdateList key={d.id} ICD={d} UpdateICD={UpdateICD} />
        ))}
      </div>
    </div>
  );
}
