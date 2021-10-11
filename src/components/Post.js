import React from "react";
import marked from "marked";
import { Link } from "react-router-dom";

const Post = ({ article, key }) => {
  console.log(article);
  const { name, image, description, slug } = article.fields;
  const postDescription = marked(description);
  return (
    <Link to={`/Contact/${slug}`}>
      <div id={slug} className={`post ${slug}`}>
        <h2 className="title">{name}</h2>
        {image && (
          <img
            className="featuredImage"
            src={image.fields.file.url}
            alt={name}
            title={name}
          />
        )}
        <section dangerouslySetInnerHTML={{ __html: postDescription }} />
      </div>
    </Link>
  );
};

export default Post;
