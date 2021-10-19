import React from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "src/redux/actions/post.actions";

export const UpdatePost: React.FunctionComponent<{
  id: number;
  title: string;
  message: string;
  onClickCallback: () => void;
}> = ({ id, title, message, onClickCallback }): JSX.Element => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(updatePost(id, title, message));
    onClickCallback();
  };
  return <input type="button" onClick={handleOnClick} value="Update" />;
};
