import { TimerReset } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const BlogCard = ({ blogs }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="blog2_container">
      {blogs.map((blog) => (
        <article
          className="blog_item"
          key={blog.id}
          onClick={() => handleCardClick(blog.id)}
          style={{ cursor: "pointer" }}
        >
          <div>
            <img src={blog.image} alt="image"  height={120} width={120} />
          </div>
          <h3>{blog.title}</h3>
          
            <p className="timer">
              <TimerReset /> {blog.dateCreated}
            </p>
         
        </article>
      ))}
    </div>
  );
};
