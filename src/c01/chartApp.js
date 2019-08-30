import React, { Component } from 'react';

let arr = [
  'ChartApp',
  'ChartApp2'
]
class chartApp extends Component {
  state = {
    enable: false
  };
  handleClick = () => {

    this.setState({enable:!this.state.enable})
    console.log(this.state.enable)
  }
  render() {
    return (
      <div>
        {/* <h1>{this.state.enable}</h1> */}

        <input type='text'  disabled={this.state.enable}/>
        {
          arr.map(v => {
            return <h1 key={v} onClick={this.handleClick}>{v}</h1> 
          })
        }
      </div>
    );
  }
}

export default chartApp;