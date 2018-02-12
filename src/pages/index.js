import React from "react";
import Link from "gatsby-link";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const IndexPage = () => (
  <div>
    <Fade bottom duration={4000} delay={1000} distance={"100px"}>
      <h1>Hi people</h1>
    </Fade>
    <Zoom>
      <p>Welcome to your new Gatsby site.</p>
    </Zoom>
    <Zoom>
      <p>Now go build something great.</p>
    </Zoom>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
