import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      dob: "",
      age: "",
      gender: "",
      city: "",
      submitClicked: false,
      searches: "",
      items: [],
      errors: {
        firstError: "",
        dobError: "",
        ageError: "",
        cityError: "",
        genderError: ""
      }
    };
  }
  onChangeFirst = (e) => {
    this.setState({
      firstname: e.target.value,
      firstError: ""
    });
  };
  onChangeDob = (e) => {
    this.setState({
      dob: e.target.value,
      dobError: ""
    });
  };
  onChangeAge = (e) => {
    this.setState({
      age: e.target.value,
      ageError: ""
    });
  };
  selectGender = (e) => {
    console.log("gender", e);
    this.setState({
      gender: e.target.value,
      genderError: ""
    });
  };
  selectCity = (e) => {
    console.log("city", e);
    this.setState({
      city: e.target.value,
      cityError: ""
    });
    console.log("city", this.state.city);
  };

  onClickButton = () => {
    let errors = this.state.errors;
    if (
      this.state.firstname &&
      this.state.dob &&
      this.state.age &&
      this.state.city &&
      this.state.gender
    ) {
      let user = {
        firstname: this.state.firstname,
        dob: this.state.dob,
        age: this.state.age,
        city: this.state.city,
        gender: this.state.gender
      };
      let userD = Object.assign([], this.state.items);
      userD.push(user);
      this.setState({
        submitClicked: true,
        items: userD
      });
    } else {
      if (!this.state.firstname) {
        this.setState({
          firstError: "Enter Name"
        });
      }
      if (!this.state.dob) {
        this.setState({
          dobError: "Enter DOB"
        });
      }
      if (!this.state.age) {
        this.setState({
          ageError: "Enter Age"
        });
      }
      if (!this.state.gender) {
        this.setState({
          genderError: "Select Gender"
        });
      }
      if (!this.state.city) {
        this.setState({
          cityError: "Select City"
        });
      }
    }
  };

  render() {
    console.log("ARRay", this.state.items);
    return (
       <div className="body" style={{color:'green', border: '3px solid green', marginLeft:100, marginTop:50, width:400, }} >
        <h1 style={{textAlign:'center'}}>Controlled Form</h1>
        <div className="home">

          <div className="form"style={{textAlign:'center'}}>
            <div className="title"> Name </div>
            <input
              type="text"
              maxLength="10"
              onChange={this.onChangeFirst}
              value={this.state.firstname}
            />
            <p className="text-danger">
              {!this.state.firstname ? this.state.firstError : ""}
            </p>
            <br />

            <div className="title"> DOB </div>
            <input
              type="date"
              onChange={this.onChangeDob}
              value={this.state.dob}
            />
            <p className="text-danger">
              {!this.state.dob ? this.state.dobError : ""}
            </p>
            <br />
            <div className="title"> AGE </div>
            <input
              type="number"
              onChange={this.onChangeAge}
              value={this.state.age}
            />
            <p className="text-danger">
              {!this.state.age ? this.state.ageError : ""}
            </p>
            <br />
            <div className="title"> GENDER </div>
            <div value={this.state.gender} onChange={this.selectGender}>
              <input type="radio" value="MALE" name="gender" /> Male
              <input type="radio" value="FEMALE" name="gender" /> Female
              <input type="radio" value="OTHER" name="gender" /> Other
            </div>
            <p className="text-danger">
              {!this.state.gender ? this.state.genderError : ""}
            </p>

            <div className="title"> City </div>
            <select
              name="category"
              value={this.state.city}
              onChange={this.selectCity}
            >
              <option value="">Select...</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>
            <p className="text-danger">
              {!this.state.city ? this.state.cityError : ""}
            </p>
            <br />

            <button style={{ color: "blue" }} onClick={this.onClickButton}>
              {" "}
              SUBMIT
            </button>
          </div>
        </div>

        <div>
          {this.state.items.map((item, index) => {
            return (
              <div classname="Col" item xs={5} key={index}>
                <p>
                  <span>Name:{item.firstname}</span>
                </p>
                <p>
                  <span>DOB:{item.dob}</span>
                </p>
                <p>
                  <span>AGE:{item.age}</span>
                </p>
                <p>
                  <span>GENDER:{item.gender}</span>
                </p>
                <p>
                  <span>City: {item.city}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Form;
