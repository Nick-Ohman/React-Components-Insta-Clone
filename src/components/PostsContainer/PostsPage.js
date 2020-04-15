//Complete the necessary code in this file

import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";


const PostsPage = () => {

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        dummyData.map(post => {
          return <Post key={post} post={post} />

        })
      }
    </div>
  );
};

export default PostsPage;
