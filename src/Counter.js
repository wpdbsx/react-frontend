import React from "react";
import PropTypes from "prop-types";

class Counter extends React.Component {
  // static propTypes = {
  //   onClick: PropTypes.func,
  // };
  // state = {};
  // render() {
  //   return <div onClick={this.props.onClick}>Counter</div>;
  // }
  state = {
    value: 0,
  };
  onClick = () => {
    // this.setState({value: this.state.value+1});
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };
  render() {
    const { value } = this.state;
    return <div onClick={this.onClick}>{value}</div>;
  }
}
export default Counter;
