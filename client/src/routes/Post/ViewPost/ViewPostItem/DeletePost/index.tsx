import React from "react";
import { useDispatch } from "react-redux";
import styles from "./delete-post.module.css";
import { deletePost } from "src/redux/actions/post.actions";

export const DeletePost: React.FunctionComponent<{ id: number }> = ({ id }) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(deletePost(id));
  };
  return (
    <div className={styles.deletePost} onClick={handleOnClick}>
      X
    </div>
  );
};
