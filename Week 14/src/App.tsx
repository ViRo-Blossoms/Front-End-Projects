import Navbar from "./Navbar";
import PostBox from "./PostBox";
import PostFeed from "./PostFeed";

export default function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <PostBox />
      <PostFeed />
    </div>
  );
}

//NB top line with name of forum and profile pic
//PB COntains form for entering a post
//PF Contains other posts

//All functions need to start with a capital letter
//Call funcs like an element ( <MyFunc/> )
//Must return one top level element
