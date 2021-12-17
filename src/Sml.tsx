import React, { Component } from "react";
import { connect } from "react-redux";
import { setName, setAge } from "./store/action";

interface Props {
  setAge: Function;
  setName: Function;
  age: number;
  name: string;
}

interface State { };

class About extends Component<Props, State> {
  refs: any = React.createRef();
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Props) {
    super(props);
  }
  changeAge() {
    this.props.setAge(1);
    console.log(this.props);
  }
  changeName() {
    let name: number = this.refs.value;
    this.props.setName(name);
    console.log(this.refs);
    this.refs.value = "";
  }
  render() {
    return (
      <div className="about">
        <div className="container">
          <h3 className="center"> About页面</h3>
          <p>欢迎来到关于我们页面！</p>
        </div>
        <div>
          <p>名字是：{this.props.name}</p>
          <input ref={(input: HTMLInputElement) => this.refs = input} type="text" />
          <button onClick={this.changeName.bind(this)}>修改年龄</button>
          <p>年龄是：{this.props.age}</p>
          <button onClick={this.changeAge.bind(this)}>修改年龄</button>
        </div>
      </div>
    );
  }
}

export default connect((props, state) => Object.assign({}, props, state), {
  setAge, setName
})(About);