import React from "react";
import OnVisible, { setDefaultProps } from "react-on-visible";
import "./About.scss";
import aboutImg from "../../assets/landing/dare_prof.jpg";

setDefaultProps({
  bounce: false,
  visibleClassName: "visible",
  percent: 10
});

class About extends React.Component {
  constructor(props) {
    super(props);
    this.blockCol = React.createRef();
    this.state = { visible: false, blockHeight: "auto" };
  }

  addKeyframe = () => {
    this.state.visible
      ? this.setState({ visible: false })
      : this.setState({ visible: true });
  };

  componentDidMount = () => {
    this.resize();
    window.addEventListener("resize", this.resize);
  };

  resize = () => {
    if (window.innerWidth < 768) {
      let height = this.refs.blockCol.offsetHeight;
      this.setState({ blockHeight: height });
    }
  };

  render() {
    let rev, revFull;
    if (this.state.visible) {
      rev = "rev-block";
      revFull = "rev-block-full";
    }

    return (
      <OnVisible onChange={this.addKeyframe} id="about">
        <div className="content">
          <div>
            <h1 className={rev}>
              <span>About</span>
            </h1>
            <h1 className={"rev-second " + rev}>
              <span>- Get To Know Your Developer -</span>
            </h1>
          </div>
          <div className="row">
            <div
              className="col-sm-12 col-md-6 about-text"
              style={{ height: this.state.blockHeight }}
            >
              <div className={"block-text " + revFull} ref="blockCol">
                <span>
                  Hi I’m Darian Sampare. I’m a web developer… or I’m a software
                  engineer… or errr my degree says I’m a computer scientist… hmm
                  I guess all you need to know is that I love to use my laptop
                  to make cool things for people, and I want you to enjoy what I
                  make as much as I enjoy the process.
                  <br />
                  <br />
                  I've been creating applications and websites for the web for
                  the past five years professionally and as my favourite past
                  time. I love taking on new and interesting projects and
                  chances are, if they are web based, I can make it happen.
                  <br />
                  <br />
                  Feel free to take look around and thanks for stopping by!
                  <br />
                  <br />
                  Doing my best,
                  <br />
                  Darian
                </span>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 about-img"
              style={{ height: this.state.blockHeight }}
            >
              <div className={rev}>
                <span>
                  <img src={aboutImg} alt="about profile" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </OnVisible>
    );
  }
}

export default About;
