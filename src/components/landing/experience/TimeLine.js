import React from "react";
import TimeLineItem from "./TimeLineItem";
import OnVisible, { setDefaultProps } from "react-on-visible";

setDefaultProps({
  bounce: false,
  visibleClassName: "visible",
  percent: 20
});

class TimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.experiences = [
      {
        place: "University of Victoria",
        dates: "2014-Present",
        icon: "fas fa-graduation-cap",
        indicator: "school",
        info:
          "After pursuing a degree in commerce for 2 years, I came across the world of software and technology and immediately shifted in that direction. I'm expected to graduate from UVIC in December of 2019 with a BCs in Computer Science and minor in Commerce."
      },
      {
        place: "Freelance Web Developer",
        dates: "2016-2017",
        icon: "fas fa-network-wired",
        indicator: "freelance",
        info:
          "I branched out from my Computer Science studies and began learning web development in my spare time. During this time I worked on personal projects and took contracts for custom websites."
      },
      {
        place: "Partner / Full Stack Developer at UrsaSol",
        dates: "2018-Present",
        icon: "fas fa-code",
        indicator: "fullstack",
        info:
          "In the spring of 2018 I began my position at UrsaSol designs, a local web development startup as a Fullstack Developer and UI/UX designer. This position required everyone on the team to take on many roles and adapt quickly. Outside of technological experience, I was able to broaden my horizons to client interactions and project management."
      },
      {
        place: "Web Developer at Animikii",
        dates: "2019",
        icon: "fas fa-code",
        indicator: "fullstack",
        info:
          "In the summer of 2019 I took on a four month co-op at Animikii Indigenous Technology as a Web Devloper. Here I strengthened my technical skills working within a team of senior software developers and was blessed with the opportunity to give back to the Indigenous Community."
      }
    ];

    this.renderedList = this.experiences.map((experience, index) => {
      let position;
      if ((index + 1) % 2 === 0) position = "right";
      else position = "left";

      return (
        <TimeLineItem key={index} experience={experience} position={position} />
      );
    });
  }

  addKeyframe = () => {
    this.state.visible
      ? this.setState({ visible: false })
      : this.setState({ visible: true });
  };

  render() {
    let rev;
    if (this.state.visible) rev = "rev-block";

    return (
      <OnVisible id="experience" onChange={this.addKeyframe}>
        <div className="content">
          <h1 className={rev}>
            <span>Experience</span>
          </h1>
          <h1 className={"rev-second " + rev}>
            <span>- Background In Development -</span>
          </h1>
          <div id="timeline" className="container mx-auto">
            {this.renderedList}
          </div>
        </div>
      </OnVisible>
    );
  }
}

export default TimeLine;
