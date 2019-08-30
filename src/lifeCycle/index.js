import React from 'react';

class Lifecycle extends React.PureComponent {
    state = {
        count:1
    }
    
    componentWillMount = () => {
        console.log('2...componentWillMount')
    }
    componentDidMount = () => {
        console.log('3...componentDidMount')
    }
    componentWillUpdate = () => {
        console.log('4...componentWillUpdate')
    }
    componentDidUpdate = () => {
        console.log('5...componentDidUpdate')
    }

    handleCilck = (event) => {
        this.setState({count: this.state.count+1})
    }
    render() {
        return (
            <div>
                <h1>生命周期~~~</h1>
                <p>{this.state.count}</p>
                <button onClick={this.handleCilck}>Add</button>
            </div>
        );
    }
}

export default Lifecycle;
