import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { postPost } from "../actions";

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
    <form onSubmit={formik.handleSubmit}>
      <textarea
        name="content"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.content}
        placeholder="Confess.."
      />
      <button type="submit" onClick={formik.handleSubmit}>
        Post
      </button>
      {formik.errors.content && formik.touched.content ? (
        <div>{formik.errors.content}</div>
      ) : null}
    </form>
  );
}

export default CreatePost;
