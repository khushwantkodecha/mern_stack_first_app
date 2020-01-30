import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios({
      url: "/api/posts",
      method: "GET"
    })
      .then(res => {
        this.setState({
          posts: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 mt-5">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <td>ID</td>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            {this.state.posts.length > 0 ? (
              <tbody>
                {this.state.posts.map((data, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data._id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                  </tr>
                ))}
              </tbody>
            ) : null}
          </table>
        </div>
        <div className="col-2"></div>
      </div>
    );
  }
}

export default Posts;
