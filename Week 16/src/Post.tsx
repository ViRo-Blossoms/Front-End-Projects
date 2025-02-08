//Forum Posts

import { useState } from "react";

type PostProps = {
  post: {
    id: number;
    datetime: number;
    user: string;
    postBody: string;
    image?: string;
  };
  deletePost: (id: number) => void;
};

export default function Post({ post, deletePost }: PostProps) {
  const formattedDate = new Date(post.datetime).toLocaleDateString();
  const [liked, setLiked] = useState(false);

  const handleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <p>
        {post.id} - {post.user}
      </p>
      <p>{formattedDate}</p>
      <p>{post.postBody}</p>
      <img src={post.image} alt="" />
      <button
        type="button"
        onClick={() => deletePost(post.id)}
        className="btn btn-danger rounded-pill"
      >
        Delete
      </button>

      {liked ? (
        <button
          type="button"
          className="btn btn-success rounded-pill"
          onClick={handleLiked}
        >
          ♡
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-secondary rounded-pill"
          onClick={handleLiked}
        >
          ♡
        </button>
      )}
    </div>
  );
}

//You can't (Maybe) convert it inline, but Romaric both told us how we'd do it here and also
// showed us a plugin to consider. Thank you so much!

//We were wayyyyy overthinking the like thing; yeah for an actual social media close you'd
//probably want either a list of users that have liked the post or a list of posts that user
//has liked, we don't need to be that fancy at the moment.
