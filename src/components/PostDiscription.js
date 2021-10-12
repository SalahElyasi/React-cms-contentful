import React from "react";
// import marked from "marked";
import { Link } from "react-router-dom";

const PostDiscription = ({ article }) => {
  console.log(article);
  const { name, image, description, slug } = article.fields;
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
        {description}
      </div>
    </Link>
  );
};

export default PostDiscription;
