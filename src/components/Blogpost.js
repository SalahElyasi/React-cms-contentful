import React from "react";

const Blogpost = ({ entry }) => {
  console.log(entry);
  const { name, image, content } = entry.fields;
  return (
    <div className="blogpost">
      <h2 className="title">{name}</h2>
      {image && (
        <img
          className="blogImage"
          src={image.fields.file.url}
          alt={name}
          title={name}
        />
        
      )}
      {content}
    </div>
  );
};

export default Blogpost;
