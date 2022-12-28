import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [postList, setPostList] = useState([]);
  let naviagate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3002/api/get")
      .then(data => {
        setPostList(data.data);
        console.log(data.data);
      })
      .then(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="MainPage">
      <div className="PostContainer">
        {postList.map((val, key) => {
          return (
            <div
              className="Post"
              key={key}
              onClick={() => {
                naviagate(`/post/${val.id}`);
              }}
            >
              <h1>{val.title}</h1>
              <p>
                {val.post_text.length > 500
                  ? val.post_text.substring(0, 500) + "..."
                  : val.post_text}
              </p>
              <h4>{val.user_name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
