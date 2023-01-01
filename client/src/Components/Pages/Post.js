import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

function Post() {
  let { postId } = useParams();
  const [post, setPost] = useState({});
  const [newTitle, setNewTitle] = useState("");
  useEffect(() => {
    Axios.get(`https://blogs.herokuapp.com/api/getFromId/${postId}`).then(data => {
      console.log(data.data.post_text);
      setPost({
        title: data.data[0].title,
        postText: data.data[0].post_text,
        userName: data.data[0].user_name,
        
      });
    }).then((error) => {
      console.log(error);
    });
  }, []);
 
  return (
    <div>
    <div className="center">
      <div className="Post SinglePage">
      
        <h1>{post.title}</h1>
        <p>
          {post.postText}
        </p>
        <h4>{post.userName}</h4>
      
      </div>
    </div>
{/* UPDATE Side  */}
      {/* <div className="d-flex">
      <label>Title</label>
        <input
          type="text"
        
        />

      </div> */}
    </div>
  );
}

export default Post;
