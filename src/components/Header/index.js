import React from "react";
import Link from "gatsby-link";

import ReactMobileMenu from "./../ReactMobileMenu";

const Header = () => (
  <div
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Gatsby
        </Link>
      </h1>
      <ReactMobileMenu />
    </div>
  </div>
);

export default Header;
