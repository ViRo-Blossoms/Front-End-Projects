import { useState } from "react";
import Navbar from "./Navbar";
import PostBox from "./PostBox";
import PostFeed from "./PostFeed";

import NoPostData from "./assets/NO POSTDATA.png";
import Uchigatana from "./assets/Uchigatana.jpg";
import Pumpkin from "./assets/pumpkin.jpg";

export const TEST_POSTS = [
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
    id: 3,
    datetime: 1730311218647,
    user: `Grandma`,
    postBody: "Look at this lovely pie I just made! :)",
    image: Pumpkin,
  },
];

export default function App() {
  const [posts, setPosts] = useState(TEST_POSTS);
  const [postdataTextBody, setPostDataTextBody] = useState("");

  const newPost = () => {
    const defaultPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 0,
      datetime: Date.now(),
      user: "PosterPosting",
      postBody: postdataTextBody,
      image: NoPostData,
    };

    setPosts([...posts, defaultPost]);
    console.log(defaultPost);
  };

  const deletePost = (idToDelete: number) => {
    setPosts(posts.filter((p) => p.id !== idToDelete));
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <PostBox newPost={newPost} />
      <PostFeed posts={posts} deletePost={deletePost} />
    </div>
  );
}

//Huge thank you to Natalie and Romaric for the class videos and debugging our code respectively!

// It has either a create form or an update form with at least 2 inputs

// It has at least 3 custom React components
// It’s displaying the data
// It’s using at least 1 prop
// A user can create new items
// A user can delete items
// A user can update at least one property on the items

//App (Post data v)
// L> PostBox (Create post ^)
//
// L> PostFeed (Builder ^)
//   L> Post (Template ^)
//
// L> Navbar (Looks cool ^)
