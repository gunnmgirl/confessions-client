import React from "react";
import styled from "styled-components";
import { ThumbsUp, ThumbsDown, MessageSquare } from "react-feather";

const Container = styled.div`
  border: 0.1rem solid ${(props) => props.theme.borderPrimary};
  border-radius: 5px;
  width: 70%;
  min-height: 7rem;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundSecondary};
  margin: 1rem 0;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 0.1rem solid ${(props) => props.theme.borderPrimary};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.4rem 0;
`;

const StyledText = styled.p`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  min-height: 5rem;
  padding: 0.2rem 1rem;
`;

const StyledNumber = styled.span`
  margin-left: 0.2rem;
`;

const Content = styled.div`
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

function PostItem(props) {
  const { post, onClick } = props;

  return (
    <Container>
      <Content>
        <StyledText>{post.text}</StyledText>
      </Content>
      <Info>
        <Wrapper>
          <ThumbsUp size="20" strokeWidth="1.5" />
          <StyledNumber>{post.upvotes}</StyledNumber>
        </Wrapper>
        <Wrapper>
          <ThumbsDown size="20" strokeWidth="1.5" />
          <StyledNumber>{post.downvotes}</StyledNumber>
        </Wrapper>
        <Wrapper>
          <MessageSquare
            size="20"
            strokeWidth="1.5"
            onClick={() => {
              onClick();
            }}
          />
          <StyledNumber>{post.comments.length}</StyledNumber>
        </Wrapper>
      </Info>
    </Container>
  );
}

export default PostItem;
