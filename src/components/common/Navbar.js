import React from "react";
import "./Navbar.scss";
import logoTrans from "../../assets/landing/logo_transparent.png";

import NavOverlay from "./NavOverlay";

class Navbar extends React.Component {
  state = { menuOpen: false, color: "transparent" };

  listenScrollEvent = event => {
    if (window.scrollY > 100) {
      this.setState({ color: "#7e71a0f0" });
    } else {
      this.setState({ color: "transparent" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  OnMenuToggle = event => {
    // this.state.menuOpen ? this.setState({ menuOpen: false }) : this.setState({ menuOpen: true });
    if (this.state.menuOpen) {
      this.setState({ menuOpen: false });
    } else {
      this.setState({ menuOpen: true });
      this.setState({ color: "#9a8ac3" });
    }
    console.log(this.state.menuOpen);
  };

  render() {
    const navActive = this.state.menuOpen;
    let active;
    if (navActive) active = "nav-active";
    else active = "";

    return (
      <div>
        <div className="topBar" style={{ backgroundColor: this.state.color }}>
          <div className="topBarHolder">
            <div id="logo">
              <a href="https://dariansampare.ca">
                <img src={logoTrans} alt="darian sampare logo"></img>
              </a>
            </div>

            <div
              className={"nav-but-wrap " + active}
              onClick={this.OnMenuToggle}
            >
              <div className="menu-icon hover-target">
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
              </div>
            </div>
          </div>
        </div>

        <NavOverlay onMenuToggle={this.OnMenuToggle} active={active} />
      </div>
    );
  }
}

export default Navbar;
