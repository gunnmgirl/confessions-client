import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getPosts } from "../actions";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);

  return <div>Posts</div>;
}

export default Posts;
