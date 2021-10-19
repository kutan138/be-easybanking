import React from "react";
import { useAppSelector } from "src/hook/redux";
import { Post, selectPost } from "src/redux/slices/post.slice";
import styles from "./view-post.module.css";
import { ViewPostItem } from "./ViewPostItem";

export const ViewPost: React.FC = () => {
  const postSlice = useAppSelector(selectPost);

  return (
    <div className={styles.container}>
      {postSlice.posts?.map((value: Post): JSX.Element => {
        return (
          <ViewPostItem
            key={value.id}
            id={value.id}
            titleProp={value.title}
            messageProp={value.message}
          />
        );
      })}
    </div>
  );
};
