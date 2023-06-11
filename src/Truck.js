import React from "react";

class Truck extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // const { make } = this.props;
    return (
      <>
        {this.props.children}
        <h2>I am a {this.props.data.car.make} Truck! Vroom Vroom </h2>
      </>
    );
  }
}

export default Truck;
