import React from "react";
import "./NavOverlay.scss";
import { Link } from "react-scroll";

class NavOverlay extends React.Component {
  render() {
    const { active, onMenuToggle } = this.props;

    return (
      <div className={active}>
        <div className={"nav"}>
          <div className="nav__content">
            <ul className="nav__list">
              <li className="nav__list-item">
                <Link
                  onClick={onMenuToggle}
                  className="hover-target"
                  to="banner"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  Home
                </Link>
              </li>
              <li className="nav__list-item">
                <Link
                  onClick={onMenuToggle}
                  className="hover-target"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={700}
                >
                  About
                </Link>
              </li>
              <li className="nav__list-item">
                <Link
                  onClick={onMenuToggle}
                  className="hover-target"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={700}
                >
                  Experience
                </Link>
              </li>
              <li className="nav__list-item">
                <Link
                  onClick={onMenuToggle}
                  className="hover-target"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={700}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav__list-item">
                <Link
                  onClick={onMenuToggle}
                  className="hover-target"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={700}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavOverlay;
