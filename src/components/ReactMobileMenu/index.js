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
      <Fade duration={4000}>
        <button
          style={{ margin: 0, padding: 0, height: "42px", float: "right" }}
          onClick={this.openReactMobileMenu}
          className={`hamburger hamburger--spin ${this.state.menuIsOpen &&
            "is-active"}`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" style={{ zIndex: 99999 }} />
          </span>
          {this.state.menuIsOpen && (
            <div className={`mobileMenu ${this.state.menuIsOpen && "open"}`}>
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
        </button>
      </Fade>
    );
  }
}

export default ReactMobileMenu;
