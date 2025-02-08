//Form entry box

import { useState } from "react";

type newPostProp = {
  newPost: () => void;
  setPostDataTextBody: React.Dispatch<React.SetStateAction<string>>;
  postdataTextBody: string;
  setPostDataPoster: React.Dispatch<React.SetStateAction<string>>;
  postdataPoster: string;
};

export default function PostBox({
  newPost,
  setPostDataTextBody,
  postdataTextBody,
  setPostDataPoster,
  postdataPoster,
}: newPostProp) {
  const [isPosting, setIsPosting] = useState(true);
  const handleButtonCLick = () => {
    setIsPosting(!isPosting);
  };
  //This handles hiding and showing the text box

  return (
    <>
      {isPosting ? (
        <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <input
            type="text"
            onChange={(event) => setPostDataPoster(event.target.value)}
            value={postdataPoster}
            className="form-control"
          />
          <label htmlFor="PostBoxTextArea" className="form-label">
            What's on your mind?
          </label>
          <textarea
            onChange={(event) => setPostDataTextBody(event.target.value)}
            className="form-control"
            id="PostBoxTextArea"
            value={postdataTextBody}
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
            onClick={() => setPostDataTextBody("")}
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

//A reminder that passing down state is a lot easier than we were making
//it out to be. Remember to get your flu shot kids!

// Not a fan of whatever React.Dispatch<React.SetStateAction<string>> means
// though, cause it sure does mean something and we're not getting it in our
// sickly state
