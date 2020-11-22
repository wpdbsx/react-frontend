import React from "react";
import "App.css";
import { Button } from "antd";
// TODO: TodoList 구현
// FIXME:
const actions = {
  init(initialValue) {
    return { value: initialValue };
  },
  increment(prevState) {
    return { value: prevState.value + 1 };
  },
  decrement(prevState) {
    return { value: prevState.value - 1 };
  },
};
class Counter1 extends React.Component {
  state = actions.init(this.props.initialValue);
  // constructor(props){
  //   super(props);
  //   this.state= actions.init(this.props.initialValue);
  // }
  // state = {
  //   value:this.props.initialValue
  // }
  // onClick = () => {
  //   // const { value } = this.state;
  //   // this.setState({ value: value + 1 });
  //   this.setState((prevState) => {
  //     const { value } = prevState;
  //     return { value: value + 1 };
  //   });
  //   this.setState((prevState) => {
  //     const { value } = prevState;
  //     return { value: value + 1 };
  //   });
  //   this.setState((prevState) => {
  //     const { value } = prevState;
  //     return { value: value + 1 };
  //   });
  // };
  render() {
    const { value } = this.state; //현재의 상태값을 참조
    return (
      <div>
        Counter1:{value}
        <Button onClick={() => this.setState(actions.increment)}>+1</Button>
        <Button onClick={() => this.setState(actions.decrement)}>-1</Button>
      </div>
    ); ///jsx 문법
  }
}
class FruitComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>좋아하는과일</h1>
        <ul>
          {this.props.fruits.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
function App() {
  const fruits = ["바나나", "사과", "딸기"];

  return (
    <div>
      <Counter1 initialValue={10} />
      <FruitComponent fruits={fruits}></FruitComponent>
    </div>
  );
}

export default App;
