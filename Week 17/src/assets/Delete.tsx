import { useEffect, useState } from "react";
import DeleteList from "./DeleteList";
import DeleteSpiel from "./DeleteSpiel";

export default function Delete() {
  const [ICDList, setICDList] = useState([]);

  const deleteICD = async (idToDelete: number) => {
    const response = await fetch(PUTAPIKEYHERE + idToDelete, {
      method: "DELETE",
    });
    console.log(response);
    setICDList(ICDList.filter((d) => d.id !== idToDelete));
  };

  useEffect(() => {
    const asyncFunc = async () => {
      const response = await fetch(PUTAPIKEYHERE);
      const data = await response.json();
      setICDList(data);
    };
    asyncFunc();
  }, []);

  return (
    <div className="mx-auto p-2">
      <DeleteSpiel />
      <div className="row">
        {ICDList.map((d) => (
          <DeleteList key={d.id} ICD={d} deleteICD={deleteICD} />
        ))}
      </div>
    </div>
  );
}
