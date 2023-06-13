import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Router from "./index.routes";
import Car from "./Car";
import Bike from "./Bike";
import Truck from "./Truck";
import Layout from "./Layout";
import BasicLayout from "./BasicLayout";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "init",
      age: 23,
      email: "",
      car: { make: "Test" },
      cars: [
        { make: "Test", model: 1997 },
        { make: "Test", model: 1999 },
        { make: "Test", model: 1997 },
        { make: "Test", model: 2000 },
      ],
      tweets: [
        {
          id: 1,
          stars: 13,
          text: "Turns out git reset --hard HEAD^ was a terrible idea",
          users: [],
        },
        {
          id: 2,
          stars: 87,
          text: "Tech conferences are too expensive",
          users: [
            {
              name: "Sam",
            },
          ],
        },
        {
          id: 3,
          stars: 51,
          text: "Clean code is subjective. Optimize for deletion",
          users: [
            {
              name: "Sad",
            },
          ],
        },
        {
          id: 4,
          stars: 19,
          text: "What even is a jQuery?",
          users: [],
        },
      ],

      errors: {},
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.ref = React.createRef();
  }

  handleChange(e) {
    if (this.state.email.length < 10) {
      this.setState({ ...this.state, [e.target.name]: e.target.value });
    } else {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          [e.target.name]: "This fields reached max",
        },
      });
    }
  }

  clickHandler(make) {
    const carsCopy = this.state.cars;
    const cars = carsCopy.filter((c) => c.model > 1999);

    this.setState({ ...this.state.cars, car: { make: make }, cars });
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log(prevProps);
    console.log(prevState);

    if (prevState.car.make !== this.state.car.make) {
      console.log("care state has changed.");
    }
  }

  handleSubmit() {
    this.ref.current.classList.add("mystyle");
    console.log(this.ref.current.value);
  }

  render() {
    return (
      <Router
        make={this.state.car.make}
        setMake={this.clickHandler}
        data={this.state}
      />
    );
  }
}

export default App;
