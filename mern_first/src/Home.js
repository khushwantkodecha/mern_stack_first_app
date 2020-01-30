import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
  }
  onChangeHandler = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  sumbitHandler = () => {
    const payload = {
      title: this.state.title,
      body: this.state.body
    };
    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(() => {
        this.clearInput();
      })
      .catch(err => {
        console.log("we got an error during saving data");
      });
  };
  clearInput = () => {
    this.setState({
      title: "",
      body: ""
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 mt-3">
          <h1 className="text-center">Create Post</h1>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={this.state.title}
              placeholder="Enter Title"
              onChange={this.onChangeHandler}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Body:</label>
            <textarea
              type="textfield"
              className="form-control"
              id="body"
              name="body"
              rows="10"
              value={this.state.body}
              placeholder="Enter Body"
              onChange={this.onChangeHandler}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.sumbitHandler}>
            Post
          </button>
        </div>
        <div className="col-4"></div>
      </div>
    );
  }
}

export default App;
