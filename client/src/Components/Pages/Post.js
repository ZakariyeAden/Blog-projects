import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
function Post() {

  let {postId} = useParams();

  useEffect(() => {
    Axios.get()
  
  
  }, [])
  
  return (
    <div>
      {/* <div className="post" > */}
        {/* <h1>{val.title}</h1>
        <p>
          {val.post_text.length > 500
            ? val.post_text.subString(0, 500) + "..."
            : val.post_text}
        </p>
        <h4>{val.user_name}</h4>
      </div> */}
    </div>
  );
}

export default Post;
