import React from "react";
// import marked from "marked";
import { Link } from "react-router-dom";

const Post = ({ article }) => {
  console.log(article);
  const { name, image, slug } = article.fields;
  // const postDescription = marked(description);
  return (
    <Link to={`/Food/${slug}`}>
      <div id={slug} className={`post`}>
        <h2 className="title">{name}</h2>
        {image && (
          <img
            className="featuredImage"
            src={image.fields.file.url}
            alt={name}
            title={name}
          />
        )}
      </div>
    </Link>
  );
};

export default Post;
