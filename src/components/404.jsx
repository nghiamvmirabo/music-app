import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <div>Oops!! this page is not found!</div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default PageNotFound;
