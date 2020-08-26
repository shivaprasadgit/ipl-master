import React from "react";
import axios from "axios";

export default class Shiva extends React.Component {

  render() {
    return (
      <div>
        {/* <h3>scheduler component</h3> */}
        {() => {
          axios
      .get("/shivarouter/shiva") //when running locally use http://localhost:5000/shivarouter/shiva
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

      }}
      </div>
    );
  }
}
