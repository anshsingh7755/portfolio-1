import React from "react";
import Language from "./Language";
import ProgressBar from "progressbar.js";
import OnVisible, { setDefaultProps } from "react-on-visible";

setDefaultProps({
  bounce: false,
  visibleClassName: "visible",
  percent: 20
});

class LanguagesDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      visible: false
    };
    this.languages = [
      {
        language: "JavaScript",
        skill: 85
      },
      {
        language: "CSS/SCSS",
        skill: 90
      },
      {
        language: "HTML",
        skill: 95
      },
      {
        language: "Java",
        skill: 75
      },
      {
        language: "Django",
        skill: 60
      },
      {
        language: "React",
        skill: 60
      },
      {
        language: "Python",
        skill: 70
      }
    ];
  }

  activateSkillBars() {
    var skillBars = [].slice.call(document.querySelectorAll(".skillbar"));
    // get value for circle
    var percentageDivs = document.querySelectorAll("[data-id]");
    let percentages = [];
    for (var index = 0; index < percentageDivs.length; index++) {
      percentages.push(parseInt(percentageDivs[index].getAttribute("data-id")));
    }

    for (var i = 0; i < skillBars.length; i++) {
      var bar = new ProgressBar.Circle(skillBars[i], {
        color: "#333",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 0,
        easing: "easeInOut",
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: {
          color: "#333",
          width: 0
        },
        to: {
          color: "#702fa8",
          width: 4
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute("stroke", "#9a8ac3");
          circle.path.setAttribute("stroke-width", 3);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        }
      });

      bar.text.style.fontSize = "1.5rem";

      var percentage = percentages[i] * 0.01;
      bar.animate(percentage); // Number from 0.0 to 1.0
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onWindowScroll);
  }

  onWindowScroll = () => {
    if (!this.state.loaded) {
      var el = document.querySelector("#languages .container");
      var position = el.getBoundingClientRect();
      // checking for partial visibility
      if (position.top < window.innerHeight && position.bottom >= 0) {
        this.activateSkillBars();
        this.setState({
          loaded: true
        });
      }
    }
  };

  getLists() {
    const renderedList = this.languages.map((language, index) => {
      return <Language key={index} language={language} />;
    });

    return renderedList;
  }

  addKeyframe = () => {
    this.state.visible
      ? this.setState({
          visible: false
        })
      : this.setState({
          visible: true
        });
  };

  render() {
    let rev;
    if (this.state.visible) rev = "rev-block";

    return (
      <OnVisible id="languages" onChange={this.addKeyframe}>
        <div className="content">
          <h1 className={rev}>
            <span> Languages </span>{" "}
          </h1>{" "}
          <h1 className={"rev-second " + rev}>
            <span> - My Development ToolKit -</span>{" "}
          </h1>{" "}
          <div className="row container mx-auto"> {this.getLists()} </div>{" "}
        </div>{" "}
      </OnVisible>
    );
  }
}

export default LanguagesDisplay;
