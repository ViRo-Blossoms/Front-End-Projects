//Forum Posts

//ID - int
//DT - int
//User - string*
//Post Body - String
//Image - String (path) Optional?

export default function Post({
  post,
}: {
  post: {
    id: number;
    datetime: number;
    user: string;
    postBody: string;
    // image: string;
  };
}) {
  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <p>
        {post.id} - {post.user}
      </p>
      <p>{post.datetime}</p>
      <p>{post.postBody}</p>
      {/* <img src={post.image} alt="" /> */}
    </div>
  );
}
