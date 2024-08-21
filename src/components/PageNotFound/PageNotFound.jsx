import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div>
      <h1 className="error-text">PageNotFound</h1>
      <div className="error-pic">
        <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" />
      </div>
    </div>
  );
};

export default PageNotFound;
