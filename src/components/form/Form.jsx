import React, { Component } from "react";
import { getWeatherNow } from "../../services/api";

class Form extends Component {
  state = { city: "" };

  handleChange = ({ target }) => {
    this.setState({ city: target.value });
  };

  submit = (e) => {
    e.preventDefault();
    const { city } = this.state;

    if (city === "") return;

    getWeatherNow(city)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  render() {
    const { city } = this.state;

    return (
      <form onSubmit={this.submit}>
        <input
          value={city}
          onChange={this.handleChange}
          type="text"
          name="city"
        />
        <button type="submit">Find</button>
      </form>
    );
  }
}

export default Form;
