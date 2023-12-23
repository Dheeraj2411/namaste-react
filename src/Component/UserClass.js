import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { count, count2 } = this.state;
    const { name, location } = this.props;
    console.log("hello");
    return (
      <div className="user-card">
        <h3>This is Class comp</h3>
        <h3>{name}</h3>
        <h3>{location}</h3>
        <h3>Count:{count}</h3>
        <h3>Count2:{count2}</h3>
      </div>
    );
  }
}

export default UserClass;
