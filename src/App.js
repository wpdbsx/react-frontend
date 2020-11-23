import React from "react";
import "App.css";
import { Button } from "antd";
import ThemedButton from "ThemedButton";
import PropTypes from "prop-types";
import Counter from "Counter";
// TODO: TodoList 구현
// FIXME:

// class PostDetail extends React.Component {
//   static propTypes = {
//     postId: PropTypes.number.isRequired,
//   };
//   state = {
//     postDetail: null,
//   };
//   componentDidMount() {
//     const { postId } = this.props;
//     this.requestPost(postId);
//   }
//   componentDidUpdate(prevProps) {
//     const { postId } = this.props;
//     if (postId !== prevProps.postId) {
//       this.requestPost(postId);
//     }
//   }
//   requestPost(postId) {
//     console.log(`requeest post#${postId}`);
//     this.setState({
//       postDetail: null,
//     });
//     setTimeout(() => {
//       this.setState({
//         postDetail: `로딩된 post#${postId}`,
//       });
//     }, 3000);

//     // axios(http client) => this. setState
//   }
//   render() {
//     const { postId } = this.props;
//     const { postDetail } = this.state;
//     return (
//       <div>
//         포스팅 # {postId}
//         <hr />
//         {!postDetail && "로딩 중..."}
//         {postDetail}
//       </div>
//     );
//   }
// }
class App extends React.Component {
  // state = {
  //   myquery: "",
  //   language: "",
  // };
  // onChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };
  // render() {
  //   return (
  //     <div>
  //       <Counter onClick={() => console.log("clicked")} />
  //       <input name="myquery" onChange={this.onChange} />
  //       <input name="language" onChange={this.onChange} />>
  //       <hr />
  //       {JSON.stringify(this.state)}
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
      </div>
    );
  }
}
export default App;
