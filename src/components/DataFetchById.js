import React, { useState, useEffect } from "react";
import axios from "axios";

function Datafetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  // fetching single data data from API
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        // console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  //  [id] = for changing title according to id

  return (
    <>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <p>{post.title}</p>
    </>
  );
}

export default Datafetching;
