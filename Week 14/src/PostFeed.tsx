import Post from "./Post";

//ID - int
//DT - String
//User - string*
//Post Body - String
//Image - String (path) Optional?
import Uchigatana from "./assets/Uchigatana.jpg";
import pumpkin from "./assets/pumpkin.svg";
const testPosts = [
  {
    id: 1,
    datetime: 1737815428006,
    user: `ViRo`,
    postBody: `Welcome to the forum for UM! This site is all about the new hit game Uchigatana Martial. Please read the rules before posting, and remember: 'Go For It!!'`,
    image: Uchigatana,
  },
  {
    id: 2,
    datetime: 1737817342450,
    user: `BursterSpeed`,
    postBody: "first",
    image: Uchigatana,
  },
  {
    id: 14,
    datetime: 1730311218647,
    user: `Grandma`,
    postBody: "Look at this lovely pie I just made! :)",
    image: pumpkin,
  },
];

// Huge thank you to Romaric Z for helping us debug this,
// it turned out that we had simply messed up the variable names.
// So the post prop wanted an 'image' string in Posts and an 'img' string in PostFeed. Oops!

//Thing that holds the posts
export default function PostFeed() {
  return (
    <div className="">
      <Post post={testPosts[0]} />
      <Post post={testPosts[1]} />
      <Post post={testPosts[2]} />
    </div>
  );
}
