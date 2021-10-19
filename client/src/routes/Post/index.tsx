import React, { useEffect } from "react";
import authApi from "src/api/auth";
import { CreatePost } from "./CreatPost";
import styles from "./posts.module.css";
import { ViewPost } from "./ViewPost";
const Post: React.FC = () => {
  useEffect(() => {
    const callApi = () => {
      authApi.login({ email: "letutan500@gmail.com", password: "1234567" });
    };
    callApi();
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <CreatePost />
      </div>
      <div>
        <ViewPost />
      </div>
    </div>
  );
};
export default Post;
