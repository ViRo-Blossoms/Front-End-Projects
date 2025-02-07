//Form entry box

import { useState } from "react";

type newPostProp = {
  newPost: () => void;
};

export default function PostBox({ newPost }: newPostProp) {
  const [isPosting, setIsPosting] = useState(true);
  const handleButtonCLick = () => {
    setIsPosting(!isPosting);
  };
  //This handles hiding and showing the text box

  const [textBody, setTextBody] = useState("");

  console.log(textBody);
  return (
    <>
      {isPosting ? (
        <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <label htmlFor="PostBoxTextArea" className="form-label">
            What's on your mind?
          </label>
          <textarea
            onChange={(event) => setTextBody(event.target.value)}
            className="form-control"
            id="PostBoxTextArea"
            value={textBody}
          ></textarea>
          <button
            type="button"
            className="btn btn-success rounded-pill"
            onClick={newPost}
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
            onClick={() => setTextBody("")}
          >
            CLEAR
          </button>
        </div>
      ) : null}
      <button className="btn btn-secondary" onClick={handleButtonCLick}>
        {isPosting ? "Hide" : "Show PostBox"}
      </button>
    </>
  );
}
