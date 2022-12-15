import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      Count: 0
    };
  }

  handleInc() {
    this.setState({
      Count: this.state.Count + 1
    });
  }

  handleDec() {
    this.setState({
      Count: this.state.Count - 1
    });
  }

  render() {
    return (
      <div style={{ color: 'green',width:250, marginLeft:800,  position: 'absolute',top: '150px',border: '1px solid green',}}>

        <h1 style={{textAlign:'center'}} >Count : {this.state.Count}</h1>
        <button style={{marginLeft:70}} onClick={() => this.handleInc()}>INC</button>
        <button style={{marginLeft:50}} onClick={() => this.handleDec()}>DEC</button>

      </div>
    );
  }
}
export default Counter;
