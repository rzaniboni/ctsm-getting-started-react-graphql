import React from "react";

const Course = ({
  course: { id, title, author, description, url },
  handleClick
}) => (
  <div className="card" style={{ width: "100%", marginTop: "10px" }}>
    <div className="card-body" onClick={() => handleClick(id)}>
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
      <p className="card-text">{description}</p>
      <a href={url} className="card-link">
        Go to course ...
      </a>
    </div>
  </div>
);

export default Course;
