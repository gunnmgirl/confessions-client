import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { getPosts } from "../actions";
import PostItem from "./PostItem";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundPrimary};
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 10%;
  grid-gap: 5rem;
  justify-items: center;
  padding: 2rem 4rem;
`;

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
`;

const Confess = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: min-content;
`;

const StyledButton = styled.button`
  border: 0.1rem solid ${(props) => props.theme.borderPrimary};
  border-radius: 5px;
  height: 1.8rem;
  color: ${(props) => props.theme.buttonPrimary};
  background-color: ${(props) => props.theme.buttonBackgroundPrimary};
`;

function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    if (!posts || posts.length === 0) {
      dispatch(getPosts());
    }
  }, [dispatch, posts, loading, error]);

  function handleOnClick(postId) {
    history.push(`/posts/${postId}`);
  }

  return (
    <Container>
      <Wrapper>
        <PostList>
          {loading && !error ? (
            <p>Loading..</p>
          ) : !loading && error ? (
            <p>Could not get posts</p>
          ) : (
            posts.map((post) => (
              <PostItem
                post={post}
                key={post._id}
                onClick={() => handleOnClick(post._id)}
              />
            ))
          )}
        </PostList>
        <Confess>
          <p>Confessed faults are half-mended.</p>
          <StyledButton
            onClick={() => {
              history.push("/posts/create");
            }}
          >
            Confess
          </StyledButton>
        </Confess>
      </Wrapper>
    </Container>
  );
}

export default Posts;
