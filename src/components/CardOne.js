import React from "react";
import { Link } from "react-router-dom";

export const CardOne = () => {
  return (
    <div className="main">
      <p>
        Bottom navigation Bottom navigation bars allow movement between primary
        destinations in an app.
      </p>
      <p>
        Don’t use a bottom navigation bar for fewer than three destinations (use
        tabs instead).
      </p>
      <p>
        Don’t use more than five destinations. For those cases, try tabs or a
        navigation drawer.
      </p>

      <div className="nav-bar">
        <Link to={"/Order Now"}>
          <a> Home</a>
        </Link>

        <Link to={"/Order Three"}>
          <a> News </a>
        </Link>

        <Link to={"/Order Contact"}>
          <a> Contact </a>
        </Link>
      </div>
    </div>
  );
};
