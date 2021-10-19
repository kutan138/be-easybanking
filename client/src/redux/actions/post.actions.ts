import {
  postActionFailed,
  postCreated,
  postDeleted,
  postUpdated,
} from "../slices/post.slice";
import { AppThunk } from "../store";

const createPost =
  (title: string, message: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(postCreated({ message, title }));
    } catch (err) {
      dispatch(postActionFailed((err as Error).message));
    }
  };
const updatePost =
  (id: number, title: string, message: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(postUpdated({ id: id, title: title, message: message }));
    } catch (err) {
      dispatch(postActionFailed((err as Error).message));
    }
  };
const deletePost =
  (id: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(postDeleted(id));
    } catch (err) {
      dispatch(postActionFailed((err as Error).message));
    }
  };
export { createPost, updatePost, deletePost };
