import React from "react";
import Fade from "react-reveal/Fade";
import "hamburgers/dist/hamburgers.css";
import "./index.css";

class ReactMobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false
    };
    // Necessary to make `this` work in the callback
    this.openReactMobileMenu = this.openReactMobileMenu.bind(this);
  }

  openReactMobileMenu() {
    this.setState(prevState => ({
      menuIsOpen: !prevState.menuIsOpen
    }));
  }

  render() {
    const linkStyle = {
      color: "white",
      textDecoration: "none"
    };
    return (
      <nav>
        <button
          onClick={this.openReactMobileMenu}
          className={`hamburger hamburger--spin ${this.state.menuIsOpen &&
            "is-active"}`}
          type="button"
          style={{ position: "relative", zIndex: 1001 }}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        {this.state.menuIsOpen && (
          <div
            className={`mobileMenu ${this.state.menuIsOpen && "open"}`}
            style={{ zIndex: 1000 }}
          >
            <Fade left cascade when={this.state.menuIsOpen}>
              <ul>
                <li>
                  <a style={linkStyle} href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a style={linkStyle} href="#">
                    About
                  </a>
                </li>
                <li>
                  <a style={linkStyle} href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </Fade>
          </div>
        )}
      </nav>
    );
  }
}

export default ReactMobileMenu;
