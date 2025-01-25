//Form entry box
export default function PostBox() {
  return (
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <label htmlFor="PostBoxTextArea" className="form-label">
        What's on your mind?
      </label>
      <textarea className="form-control" id="PostBoxTextArea"></textarea>
      <button
        type="button"
        className="btn btn-success rounded-pill"
        onClick={() => alert("POST")}
      >
        POST
      </button>
      <button
        type="button"
        className="btn btn-primary rounded-pill"
        onClick={() => alert("IMAGE")}
      >
        IMAGE
      </button>
      <button
        type="button"
        className="btn btn-danger rounded-pill"
        onClick={() => alert("CLEAR")}
      >
        CLEAR
      </button>
    </div>
  );
}
