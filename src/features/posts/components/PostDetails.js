import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getPost } from "../actions";
import PostItem from "./PostItem";
import CreateComment from "./CreateComment";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Comment = styled.div`
  width: 50%;
  min-height: 4rem;
  height: auto;
  border: 0.1rem solid ${(props) => props.theme.borderPrimary};
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgroundSecondary};
  text-align: center;
  margin: 0.2rem 0;
`;

function PostDetails() {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);

  return (
    <Container>
      <PostItem post={post} key={post._id} onClick={null} />
      <CreateComment />
      <Comments>
        {post.comments.length === 0 ? (
          <p>No comments yet!</p>
        ) : (
          post.comments.map((comment, index) => (
            <Comment key={index}>
              <p>{comment}</p>
            </Comment>
          ))
        )}
      </Comments>
    </Container>
  );
}

export default PostDetails;
