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
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.{" "}
    </p>

    <p>
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
      eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
      zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
      dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
      euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.{" "}
    </p>

    <p>
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
      suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
      eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
      vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
      iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
      duis dolore te feugait nulla facilisi.{" "}
    </p>

    <p>
      Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
      doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit
      amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
      tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
      minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
      nisl ut aliquip ex ea commodo consequat.{" "}
    </p>

    <p>
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolore eu feugiat nulla facilisis.{" "}
    </p>
  </div>
);

export default IndexPage;
