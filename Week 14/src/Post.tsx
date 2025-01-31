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
    image?: string;
  };
}) {
  // Huge thank you to Romaric Z for helping us debug this,
  // it turned out that we had simply messed up the variable names.
  // So the post prop wanted an 'image' string in Posts and an 'img' string in PostFeed. Oops!

  console.log(post);
  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <p>
        {post.id} - {post.user}
      </p>
      <p>{post.datetime}</p>
      <p>{post.postBody}</p>
      <img src={post.image} alt="" />
    </div>
  );
}
