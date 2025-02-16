type iceCreamData = {
  ICD: { id: number; iceCream: string; tastesGood: string };
  deleteICD: (idToDelete: number) => void;
};

export default function DeleteList({ ICD, deleteICD }: iceCreamData) {
  return (
    <div className="col-sm-2 mb-3 mb-sm-2 text-center">
      <div className="card shadow-lg">
        <div className="card-body">
          <p>{ICD.id}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{ICD.iceCream}</li>
            <li className="list-group-item">{ICD.tastesGood}</li>
          </ul>
          <button
            type="button"
            onClick={() => deleteICD(ICD.id)}
            className="btn btn-danger rounded-pill"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
