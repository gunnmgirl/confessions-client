import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPosts } from "../actions";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("uso do dipetch");
    dispatch(getPosts());
  }, [posts.length, dispatch]);

  console.log(posts);

  return <div>Posts</div>;
}

export default Posts;
