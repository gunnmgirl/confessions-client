import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import * as qs from "query-string";

import {
  getPosts,
  sortByLatest,
  sortByPopular,
  sortByRandom,
} from "../actions";
import PostItem from "./PostItem";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";

const MainContainer = styled.div`
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

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.h1``;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid ${(props) => props.theme.borderPrimary};
  height: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.buttonBackgroundPrimary};
  color: ${(props) => props.theme.buttonPrimary};
`;

const StyledText = styled.span`
  margin: 0 0.2rem;
  font-size: 1rem;
`;

const Nav = styled.div`
  display: flex;
`;

const StyledIcon = styled.div`
  margin: 0 1rem;
  color: ${(props) => props.theme.primary};
`;

const StyledSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${(props) => props.theme.borderPrimary};
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.borderPrimary};
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.primary};
  border-radius: 5px;
  text-align: center;
  width: 70%;
  height: 1.8rem;
`;

function Posts(props) {
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  const page = useSelector((state) => state.posts.page);
  const dispatch = useDispatch();
  const history = useHistory();
  const query = qs.parse(props.location.search);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  React.useEffect(() => {
    if (!posts || posts.length === 0) {
      if (query.page) {
        dispatch(getPosts(Number(query.page)));
      } else {
        dispatch(getPosts(page));
      }
    }
    const results = posts.filter((post) =>
      post.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [dispatch, posts, page, query.page, searchTerm]);

  function handleOnClick(postId) {
    history.push(`/posts/${postId}`);
  }

  function handleLatest() {
    dispatch(sortByLatest());
  }

  function handlePopular() {
    dispatch(sortByPopular());
  }

  function handleRandom() {
    dispatch(sortByRandom());
  }

  return (
    <MainContainer>
      <Container>
        <StyledHeader>Confessions</StyledHeader>
        <SortWrapper>
          <StyledText onClick={handleLatest}>Lates</StyledText>
          <StyledText onClick={handlePopular}>Popular</StyledText>
          <StyledText onClick={handleRandom}>Random</StyledText>
        </SortWrapper>
      </Container>
      <Wrapper>
        <PostList>
          {loading && !error ? (
            <p>Loading..</p>
          ) : !loading && error ? (
            <p>Could not get posts</p>
          ) : (
            <>
              <StyledSearch>
                <StyledInput
                  placeholder="Search Posts"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </StyledSearch>
              {filteredPosts.map((post) => (
                <PostItem
                  post={post}
                  key={post._id}
                  onClick={() => handleOnClick(post._id)}
                />
              ))}
              <Nav>
                {page === 1 ? null : (
                  <StyledIcon>
                    <ArrowLeftCircle
                      onClick={() => {
                        history.push(`?page=${page - 1}`);
                        dispatch(getPosts(page - 1));
                      }}
                    />
                  </StyledIcon>
                )}
                <StyledIcon>
                  <ArrowRightCircle
                    onClick={() => {
                      history.push(`?page=${page + 1}`);
                      dispatch(getPosts(page + 1));
                    }}
                  />
                </StyledIcon>
              </Nav>
            </>
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
    </MainContainer>
  );
}

export default Posts;
