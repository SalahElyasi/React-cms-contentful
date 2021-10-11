import React from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";

const Food = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find((e) => e.fields.slug === slug);
  console.log(post);
  return (
    <div className="flexbox">
      <div>{post && <Post article={post} />}</div>
    </div>
  );
};

export default Food;
