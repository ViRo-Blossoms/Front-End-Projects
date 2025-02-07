import Post from "./Post";
//ID - int
//DT - String
//User - string*
//Post Body - String
//Image - String (path) Optional?

// Huge thank you to Romaric Z for helping us debug this,
// it turned out that we had simply messed up the variable names.
// So the post prop wanted an 'image' string in Posts and an 'img' string in PostFeed. Oops!

type PostFeedProps = {
  posts: Array<{
    id: number;
    datetime: number;
    user: string;
    postBody: string;
    image?: string;
  }>;
  deletePost: (id: number) => void;
};

//Thing that holds the posts
export default function PostFeed({ posts, deletePost }: PostFeedProps) {
  return (
    <div className="">
      {posts.map((p) => (
        <Post key={p.id} post={p} deletePost={deletePost} />
      ))}
    </div>
  );
}
