import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { postComment } from "../actions";

const StyledForm = styled.form`
  margin: 0.2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled.button`
  border: 0.1rem solid ${(props) => props.theme.borderPrimary};
  border-radius: 5px;
  height: 1.8rem;
  width: 10%;
  color: ${(props) => props.theme.buttonPrimary};
  background-color: ${(props) => props.theme.buttonBackgroundPrimary};
`;

const StyledTextarea = styled.textarea`
  resize: none;
  border: none;
  min-height: 4rem;
  height: auto;
  text-align: center;
  width: 50%;
  background-color: ${(props) => props.theme.buttonBackgroundPrimary};
  color: ${(props) => props.theme.buttonPrimary};
  border: 0.1rem solid ${(props) => props.theme.borderPrimary};
  border-radius: 5px;
`;

function CreateComment() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const validationSchema = Yup.object().shape({
    content: Yup.string()
      .max(500, "Must be less than 500 characters")
      .min(5, "Must me at least 5 characters")
      .required("Required!"),
  });

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(postComment({ comment: values.content, id: id }));
      resetForm({ values: "" });
    },
    validationSchema,
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledTextarea
        placeholder="Comment something.."
        name="content"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
      />
      <StyledButton type="submit" onClick={formik.handleSubmit}>
        Submit
      </StyledButton>
    </StyledForm>
  );
}

export default CreateComment;
