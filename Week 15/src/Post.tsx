//Forum Posts

//ID - int
//DT - int
//User - string*
//Post Body - String
//Image - String (path) Optional?

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
  // Huge thank you to Romaric Z for helping us debug this,
  // it turned out that we had simply messed up the variable names.
  // So the post prop wanted an 'image' string in Posts and an 'img' string in PostFeed. Oops!

  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <p>
        {post.id} - {post.user}
      </p>
      <p>{post.datetime}</p>
      <p>{post.postBody}</p>
      <img src={post.image} alt="" />
      <button
        type="button"
        onClick={() => deletePost(post.id)}
        className="btn btn-danger rounded-pill"
      >
        Delete
      </button>
    </div>
  );
}

//We want to convert UnixTime to a real date and time, but we get errors when trying to get
//functions happening. Ask teach!!!
