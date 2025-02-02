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

  const newPost = () => {
    const defaultPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 0,
      datetime: Date.now(),
      user: "PosterPosting",
      postBody: "Feeling repetitive...",
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

//All functions need to start with a capital letter
//Call funcs like an element ( <MyFunc/> )
//Must return one top level element

// A user can create new items (the new items will all have the same data) [No PostData?]
// A user can delete items [No more NoPosts]
// A user can update at least one property on the items [Postbox hide/show]

//Personal Notes
//Good lord is there a lot of destructuring and redoing code in this section.
//It's not bad to learn how to 'update' code to be better, but we missed a section and
//spent an hour trying to figure out what we had done wrong. We knew it was something
//keeping data from going from app to postFeed because the console showed it was making
//new posts, but it wasn't showing up.
//The solution was we missed the prop part of 15.3 and once we made a prop and replaced
//TEST_POSTS it worked perfectly.

//App (Post data v)
// L> PostBox (Create post ^)
//
// L> PostFeed (Builder ^)
//   L> Post (Template ^)
//
// L> Navbar (Looks cool ^)
