import React from "react";

const Blogpost = ({ entry }) => {
  console.log(entry);
  const { name, blogImage, content } = entry.fields;
  return (
    <div className="blogpost">
      <h2 className="title">{name}</h2>
      {blogImage && (
        <img
          className="blogImage"
          src={blogImage.fields.file.url}
          alt={name}
          title={name}
        />
        
      )}
      {content}
    </div>
  );
};

export default Blogpost;
