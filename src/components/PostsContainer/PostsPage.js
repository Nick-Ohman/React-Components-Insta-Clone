//Complete the necessary code in this file

import React from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";


const PostsPage = ({posts}) => {
  
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        dummyData.map(index => {
          return <Post key={index.id} post={index} />

        })
      }
    </div>
  );
};

export default PostsPage;
