import React, { Component } from "react";
import AboutSelf from "./AboutSelf";
import Education from "./Education";
import DataContext from './GlobalContext';

class CreateResume extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem(this.state.resumetitle, JSON.stringify(this.state));
    alert("Resume created successfully");
  }



  render() {
    return (
      <div className="resume-form" id="resume-form">
        <form>
          <AboutSelf />
          <Education />
          <button type="submit" onSubmit={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateResume;
