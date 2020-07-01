import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";

import { postPost } from "../actions";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  text-align: center;
  border: 0.1rem solid ${(props) => props.theme.borderPrimary};
  border-radius: 5px;
`;

const StyledButton = styled.button`
  border: 0.1rem solid ${(props) => props.theme.borderPrimary};
  border-radius: 5px;
  height: 2rem;
  font-weight: 600;
  font-size: 1rem;
  color: ${(props) => props.theme.buttonPrimary};
  background-color: ${(props) => props.theme.buttonBackgroundPrimary};
`;

const Wrapper = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

function CreatePost() {
  const dispatch = useDispatch();
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    content: Yup.string()
      .max(1000, "Must be less than 1000 characters")
      .min(10, "Must me at least 10 characters")
      .required("Required!"),
  });

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      dispatch(
        postPost({
          text: values.content,
          upvotes: 0,
          downvotes: 0,
          comments: [],
        })
      );
      history.push("/posts");
    },
    validationSchema,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Wrapper>
        <StyledTextarea
          name="content"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.content}
          placeholder="Confess.."
        />
        <StyledButton type="submit" onClick={formik.handleSubmit}>
          Post
        </StyledButton>
      </Wrapper>
      {formik.errors.content && formik.touched.content ? (
        <div>{formik.errors.content}</div>
      ) : null}
    </StyledForm>
  );
}

export default CreatePost;
