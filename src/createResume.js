import React, { Component } from "react";

class CreateResume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      address: "",
      phone: "",
      institution: "",
      year: "",
      degree: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('resume', JSON.stringify(this.state))
  }

  addEducationFields(e) {
    e.preventDefault();
    const institute = document.createElement("label");
    institute.innerHTML = "Institute "
    const inputField = document.createElement("INPUT");
    const year = document.createElement("label")
    const yearInput = document.createElement('input');
    year.innerHTML = " Year "
    const degree = document.createElement('label')
    degree.innerHTML = " Degree"
    const degreeInput = document.createElement('input')
    const div = document.getElementById("edu-fields");
    div.appendChild(institute);
    div.appendChild(inputField);

    div.appendChild(year);
    div.appendChild(yearInput)
    div.appendChild(degree)
    div.appendChild(degreeInput)
  }

  render() {
    return (
      <div className="resume-form" id="resume-form">
        <h2>Create Resume</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name </label>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={this.handleChange}
          />
          <label>Email </label>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            id="email"
          />
          <label>Address </label>
          <input
            type="text"
            name="address"
            onChange={this.handleChange}
            id="address"
          />
          <label>Phone </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={this.handleChange}
          />
          <h2>Education </h2>
          <label>Institute </label>
          <input type="text" name="institite" id="institute" />
          <label>Year </label>
          <input type="text" id="year" name="year" />
          <label>Degree </label>
          <input type="text" id="degree" name="degree" />
          <wbr></wbr>
          <div id="edu-fields">
          <button type="button" onClick={this.addEducationFields}>
            Add more
          </button>
          <br></br>
          </div>
          <button type="submit" onSubmit={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateResume;
