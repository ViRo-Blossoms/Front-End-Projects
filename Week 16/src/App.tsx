import { useState } from "react";
import Navbar from "./Navbar";
import PostBox from "./PostBox";
import PostFeed from "./PostFeed";

import PostData from "./assets/POSTDATA.png";
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
  const [postdataPoster, setPostDataPoster] = useState("");

  const newPost = () => {
    const defaultPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 0,
      datetime: Date.now(),
      user: postdataPoster,
      postBody: postdataTextBody,
      image: PostData,
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
      <PostBox
        newPost={newPost}
        postdataTextBody={postdataTextBody}
        setPostDataTextBody={setPostDataTextBody}
        postdataPoster={postdataPoster}
        setPostDataPoster={setPostDataPoster}
      />
      <PostFeed posts={posts} deletePost={deletePost} />
    </div>
  );
}

//Huge thank you to:
//Natalie C for the class videos
//Romaric Z for debugging our code with us
//Jamal T for debugging our code with us
//Micheal G for humouring our Front End Questions in a Back End Office!

// It has either a create form or an update form with at least 2 inputs X
// It has at least 3 custom React components X
// It’s displaying the data X
// It’s using at least 1 prop X
// A user can create new items X
// A user can delete items X
// A user can update at least one property on the items X

//App (Post data v)
// L> PostBox (Create post ^)
//
// L> PostFeed (Builder ^)
//   L> Post (Template ^)
//
// L> Navbar (Looks cool ^)

//likePost={likePost}
// onClick={() => setHello(hello => !hello)}
