//Forum Posts

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
    </div>
  );
}

//You can't (Maybe) convert it inline, but Romaric both told us how we'd do it here and also
// showed us a plugin to consider. Thank you so much!
