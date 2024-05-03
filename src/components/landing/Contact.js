import React from "react";
import OnVisible, { setDefaultProps } from "react-on-visible";
import "./Contact.scss";

setDefaultProps({
  bounce: false,
  visibleClassName: "visible",
  percent: 10
});

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
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
      <OnVisible onChange={this.addKeyframe} id="contact" className="container">
        <form
          className="contact2-form validate-form position-relative"
          action="https://formspree.io/dsampare04@gmail.com"
          method="POST"
        >
          <h1 className={"text-center " + rev}>
            <span>Contact</span>
          </h1>
          <div
            className="wrap-input2 validate-input"
            data-validate="Name is required"
          >
            <input className="input2" type="text" name="name" />
            <span className="focus-input2" data-placeholder="NAME"></span>
          </div>

          <div
            className="wrap-input2 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input className="input2" type="text" name="email" />
            <span className="focus-input2" data-placeholder="EMAIL"></span>
          </div>

          <div
            className="wrap-input2 validate-input"
            data-validate="Message is required"
          >
            <textarea className="input2" name="message"></textarea>
            <span className="focus-input2" data-placeholder="MESSAGE"></span>
          </div>

          <div className="contact-form-btn">
            <button className="bttn bttn__2 button__expand">Send</button>
          </div>
        </form>
      </OnVisible>
    );
  }
}

export default Contact;
