import React from "react";
import styled from "styled-components";
import { ThumbsUp, ThumbsDown, MessageSquare } from "react-feather";

const Container = styled.div`
  width: 70%;
  min-height: 4rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: ${(props) => props.theme.backgroundSecondary};
  margin-bottom: 0.4rem;
`;

function PostItem(props) {
  const { post } = props;
  return (
    <Container>
      <p>{post.text}</p>
    </Container>
  );
}

export default PostItem;
